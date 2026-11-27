#!/usr/bin/env python3
"""Monks Of Market scheduled auto-publish (runs inside GitHub Actions).

Picks the earliest row in scheduled/queue.json that is not yet live AND
whose publish_date has arrived (IST), then stages it for release:
  1. copies scheduled/<row>/article.md  -> the repo article path
  2. copies scheduled/<row>/schema.json -> the repo schema path
  3. merges the row's wiring into src/pages/articles/[...slug].astro:
     - adds the schema import (after the last schema import)
     - adds 'slug_key': Import to the schemaBySlug map
     - adds the tool-CTA branch before the fallback CTA
  4. appends a line to scheduled/publish-log.md

Safety rules (never broken):
  - exactly ONE article per run, strictly in queue order, never skipped
  - a row whose publish_date is in the future is never published early
  - a row flagged amazon_placeholder (placeholder Amazon buy links, no
    Associates IDs) is REFUSED: exit 2, nothing is written, nothing is
    pushed. A human must fix the staged files first.
  - if the route file's structure is not as expected (import block,
    schemaBySlug map, CTA fallback missing), exit 1 without writing.
  - --dry-run prints what would happen and writes nothing.

The workflow commits + pushes afterwards, runs `npm run build` BEFORE
pushing (a failed build publishes nothing), then curls the live URL.
Exit codes: 0 published / nothing due / queue complete; 1 structural
error; 2 blocked (placeholder links).
"""
import json
import os
import re
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
QUEUE_PATH = ROOT / "scheduled" / "queue.json"
ROUTE_PATH = ROOT / "src/pages/articles" / "[...slug].astro"
LOG_PATH = ROOT / "scheduled" / "publish-log.md"

IST = timezone(timedelta(hours=5, minutes=30))
CTA_FALLBACK = "  : { href: '/tools/crypto-futures/', label: 'Calculate your futures costs' };"


def today_ist() -> str:
    return datetime.now(timezone.utc).astimezone(IST).date().isoformat()


def fail(msg: str, code: int = 1) -> int:
    print(f"AUTO-PUBLISH ERROR: {msg}")
    return code


def main() -> int:
    dry = "--dry-run" in sys.argv
    if not QUEUE_PATH.exists():
        return fail("scheduled/queue.json not found — nothing staged yet.")
    queue = json.loads(QUEUE_PATH.read_text())
    today = today_ist()

    picked = None
    for entry in queue:
        if (ROOT / entry["article_repo_path"]).exists():
            continue  # already live
        if entry["publish_date"] <= today:
            picked = entry
        else:
            print(f"Nothing due: next is row #{entry['row']} {entry['slug']} "
                  f"on {entry['publish_date']} (today {today}).")
            return 0
        break
    if picked is None:
        print("Queue complete: every staged bundle is live.")
        return 0

    if picked.get("amazon_placeholder"):
        return fail(
            f"BLOCKED row #{picked['row']} {picked['slug']} ({picked['title']}): "
            f"{picked.get('amazon_placeholder_count', '?')} placeholder Amazon buy link(s) "
            f"with no Associates IDs. Fix the staged files (real IDs + rel=\"sponsored\") "
            f"and clear the flag in scheduled/queue.json before this row can go live.", 2)

    row = picked["row"]
    staged_article = ROOT / "scheduled" / str(row) / "article.md"
    staged_schema = ROOT / "scheduled" / str(row) / "schema.json"
    if not staged_article.exists() or not staged_schema.exists():
        return fail(f"row #{row}: staged files missing under scheduled/{row}/")
    article_dest = ROOT / picked["article_repo_path"]
    schema_dest = ROOT / picked["schema_repo_path"]

    route = ROUTE_PATH.read_text()
    imp = picked["schema_import"]
    schema_file = picked["schema_file"]
    slug_key = picked["slug_key"]
    import_line = f"import {imp} from './{schema_file}';"
    map_entry = f"  '{slug_key}': {imp},"
    cta_branch = (f"  : slug === '{slug_key}'\n"
                  f"  ? {{ href: '{picked['cta_href']}', label: '{picked['cta_label']}' }}")

    # --- validate the route structure before touching it -----------------
    imports = list(re.finditer(r"^import \w+ from '\./article-schema-[^']+\.json';$",
                               route, re.M))
    if not imports:
        return fail("route file: no schema imports found.")
    map_start = route.find("const schemaBySlug = {")
    map_end = route.find("\n};", map_start)
    if map_start < 0 or map_end < 0:
        return fail("route file: schemaBySlug map not found.")
    if CTA_FALLBACK not in route:
        return fail("route file: CTA fallback line not found.")

    if import_line in route and map_entry in route and cta_branch in route:
        print(f"Row #{row} wiring already present in route file — nothing to merge.")
    else:
        if import_line not in route:
            pos = imports[-1].end()
            route = route[:pos] + "\n" + import_line + route[pos:]
        if map_entry not in route:
            map_start = route.find("const schemaBySlug = {")
            map_end = route.find("\n};", map_start)
            route = route[:map_end] + "\n" + map_entry + route[map_end:]
        if cta_branch not in route:
            route = route.replace(CTA_FALLBACK, cta_branch + "\n" + CTA_FALLBACK, 1)
        # re-verify: each piece exactly once
        for piece, name in [(import_line, "import"), (map_entry, "map entry"),
                            (cta_branch, "CTA branch")]:
            if route.count(piece) != 1:
                return fail(f"route merge failed: {name} occurs "
                            f"{route.count(piece)}x, expected 1x.")

    print(f"PUBLISH row #{row}: {picked['slug']} — {picked['title']}")
    print(f"  date: {picked['publish_date']} (today {today})  url: {picked['url']}")
    print(f"  article: {picked['article_repo_path']}")
    print(f"  schema:  {picked['schema_repo_path']}")
    print(f"  route:   +import {imp}, +map '{slug_key}', +CTA {picked['cta_href']}")
    if dry:
        print("DRY RUN — no files written.")
        return 0

    article_dest.parent.mkdir(parents=True, exist_ok=True)
    schema_dest.parent.mkdir(parents=True, exist_ok=True)
    article_dest.write_bytes(staged_article.read_bytes())
    schema_dest.write_bytes(staged_schema.read_bytes())
    ROUTE_PATH.write_text(route)
    with open(LOG_PATH, "a") as f:
        f.write(f"| {today} | {row} | {picked['slug']} | {picked['title']} |\n")

    gh_out = os.environ.get("GITHUB_OUTPUT")
    if gh_out:
        with open(gh_out, "a") as f:
            f.write(f"published=true\nslug={picked['slug']}\n"
                    f"row={row}\nurl={picked['url']}\n"
                    f"title={picked['title']}\n")
    print("Staged for commit (workflow pushes after the build check).")
    return 0


if __name__ == "__main__":
    sys.exit(main())

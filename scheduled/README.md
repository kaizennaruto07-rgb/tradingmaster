# Scheduled auto-publish — how it works

Every Monday and Thursday at 08:00 IST, `.github/workflows/auto-publish.yml`
runs on GitHub Actions and publishes **exactly one** held article — no human
in the loop, no tokens spent elsewhere. Cloudflare auto-deploys on push to
`main`, so the article goes live on monksofmarket.com a few minutes later.

## Layout

- `scheduled/queue.json` — the queue, in publish order. One entry per bundle:
  row number, slug, publish date, title, live URL, exact repo paths for the
  article + schema, the schema import name, and the tool-CTA for the route
  file. Rows 12–65 cover Mon 30 Nov 2026 → Thu 3 Jun 2027.
- `scheduled/<row>/article.md` — the article exactly as gated (never edited
  by the workflow; pushed byte-identical).
- `scheduled/<row>/schema.json` — the Article + FAQPage schema for the row.
- `scheduled/<row>/route.astro` — the route-file snapshot the bundle was
  built against (audit trail only; the workflow merges the queue's recorded
  wiring into the live route file, never the snapshot wholesale).
- `scheduled/publish-log.md` — appended by every successful run.

## The pick (`.github/scripts/auto-publish.py`)

1. Walk the queue in order. The first row whose article file does **not**
   exist yet under `src/content/articles/` and whose `publish_date` has
   arrived (IST) is the pick. A row dated in the future is never published
   early; if a run is missed, the next run catches up one row at a time.
2. If the pick is flagged `amazon_placeholder`, the script **refuses**:
   exit 2, nothing written, nothing pushed. Those rows (book pages) carry
   placeholder Amazon buy links with no Associates IDs — a human must swap
   in real IDs and add `rel="sponsored"` to the rendered buy links first,
   then clear the flag in `queue.json`.
3. Otherwise it copies the article + schema into place and merges the
   row's wiring into `src/pages/articles/[...slug].astro` (schema import,
   `schemaBySlug` map entry, tool-CTA branch). If the route file's
   structure is not as expected, it exits 1 without writing anything.
4. The workflow then runs `npm run build` — a failed build publishes
   nothing — commits, pushes, and curls the live URL for ~12 minutes. If
   the URL never returns 200, the run fails and opens a GitHub issue.

## Manual runs

Actions → "Auto-publish scheduled article" → Run workflow. `dry_run`
(default true) validates the pick + merge without writing or pushing
anything. Set it to false only to publish the next due row on demand.

## Extending the queue (new batch)

When a new batch of bundles is approved: add rows to `queue.json` in
publish order (with `publish_date`, repo paths, schema import, CTA), stage
their `article.md` / `schema.json` / `route.astro` under
`scheduled/<row>/`, and push. The workflow picks them up automatically.
Never edit a row that is already live, and never reorder live rows.

## Retired

The old assistant-side release job (`mom-release-mon-thu`, Mon/Thu 08:00
IST) was removed when this automation went live — it did the same pick
and push from a local workspace. The daily publish guardrail still watches
from the outside: if a queue row's date has passed and the article is not
live, it escalates.

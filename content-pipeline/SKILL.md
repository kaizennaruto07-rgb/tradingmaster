# Content Pipeline

AdSense-grade, agentic content production for Tradingmaster. Eleven review
agents plus a final AdSense pre-publish gate. **Nothing is published, pushed,
or finalized without passing the Final Editor (Agent 11) and the AdSense gate
(Agent 12).** No exceptions.

## When to use
Use when the user asks for a new Tradingmaster article, lesson, or guide —
or says "run the pipeline", "new article", "publish". One pipeline run = one
article.

## How to run
Launch the saved deterministic workflow (it orchestrates all agents,
bounded revision loops, and the final gate):

```
workflow.launch with name "tradingmaster-content-pipeline"
args: { "topic": "<article topic or working title>",
        "audience": "<optional: skill level / segment>",
        "existing_articles": ["<optional: titles/paths for originality checks>"] }
```

The workflow returns a decision: `APPROVED_AND_GATED` (ready to publish),
`NEEDS_HUMAN` (revision limit hit — required changes listed), or `REJECTED`.

## The pipeline
```
STRATEGIST → RESEARCHER → OUTLINE → WRITER
      → [VALUE REVIEWER + ORIGINALITY + FACT CHECKER] (parallel)
      → SEO EDITOR → READABILITY EDITOR → TRUST/POLICY REVIEWER
      → FINAL EDITOR → decision
      → (if APPROVED) ADSENSE PRE-PUBLISH GATE → staged for publishing
```
- Revision loop: `NEEDS_REVISION` sends the draft back to the writer with
  consolidated feedback. Max **2 attempts**; then it stops as `NEEDS_HUMAN`
  with exact required changes. `REJECT` stops immediately.
- Agent briefs live in `agents/` (01–11 + 12-adsense-gate). Each workflow agent
  reads its brief and follows it exactly.

## The hard rule
- Only `APPROVED_AND_GATED` articles may be added to the site (`artifact.edit`
  on the tradingmaster site) or pushed to GitHub.
- Never measure quality by article count, word count, or keyword density.
  Measure by **user value + originality + accuracy + clarity + trust +
  usefulness**. Fewer excellent articles beats hundreds of repetitive pages.
- Never guarantee AdSense approval. The gate checks readiness, not outcomes.

## Draft storage
Drafts live under `workspace/tradingmaster-pipeline/drafts/<topic-slug>/`
as versioned files (`draft-v1.md`, `draft-v2.md`, …). Approved articles are
staged at `workspace/tradingmaster-pipeline/approved/<topic-slug>.md`
awaiting site integration.

## Layout
- `SKILL.md` — this playbook
- `agents/` — the 12 agent briefs (source of truth for agent behavior)
- `workflow/tradingmaster-content-pipeline.js` — the deterministic
  orchestration script (mirrors the saved workflow)

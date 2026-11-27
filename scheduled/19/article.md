---
title: "Trading Rules of Thumb, Ranked by Evidence"
description: "Which trading rules of thumb survive an evidence test? Nine rules ranked — 1%, 2%, 3-5-7, 90-90-90, the 7% rule and more — with streak math and a clear verdict."
meta_description: "Which trading rules of thumb survive an evidence test? Nine rules ranked — 1%, 2%, 3-5-7, 90-90-90, the 7% rule and more — with streak math and a clear verdict."
date: 2026-11-03
author: Kaizen
tag: "Trading mathematics · Strategy validation"
keywords: ["trading rules of thumb", "1 percent rule trading", "2 percent rule trading", "3-5-7 rule", "7 percent sell rule", "90-90-90 rule", "risk per trade", "total open risk cap", "never average down", "risk reward ratio"]
---

*By Kaizen · 3 November 2026 · Monks Of Market*

Every trading guide has a favourite number. Risk 1% per trade. Risk 2%. Follow the 3-5-7 rule. Sell at 7%. Cut your losses and let your winners run. They cannot all be equally right — and some of them are not rules at all, but slogans dressed up as numbers.

This article does not re-teach these trading rules of thumb in depth. It judges them. Every rule below faces the same four-question evidence test, and each one gets a single verdict: **KEEP** (use it as written), **KEEP WITH A FIX** (the idea is sound, the number or instruction needs changing), or **CONTEXT ONLY** (useful as a warning or a story, not as a rule to trade by).

## The short answer: risk-budget rules survive, slogan rules do not

The headline split is clean. The risk-budget rules — risking a fixed percentage of account equity per trade, and capping total risk across all open trades — are mathematics, and they survive the test. The slogan rules — a tidy statistic with no study behind it, or a one-line instruction that leaves half the job undone — are unmeasured or incomplete as stated. The 3-5-7 rule sits in between: a coherent risk budget wrapped in a contested definition, with a per-trade leg above the band the evidence supports.

### The four-question evidence test every rule faces

1. **Is it mathematics, or is it folklore?** Can the claim be derived from arithmetic — streak math, breakeven win rate, drawdown recovery — rather than merely asserted?
2. **Is it measured in real trader data?** Does any real dataset — a regulator study, a broker disclosure, an academic sample — support the number, or only anecdote?
3. **Is it testable on your own trades?** Can a reader check it against their own trading journal in about 30 trades, or is it unfalsifiable advice?
4. **Does it survive costs, correlation, and gaps?** Does it still work once brokerage, slippage, correlated positions, and overnight gaps are included?

The evidence grades used in the ranking table are this article's own framework, not an industry standard: **A** means derived from arithmetic and/or measured in regulator or academic data; **B** means sound logic with partial measurement; **C** means plausible but unmeasured or definition-contested; **D** means a slogan with no study behind the stated numbers. Rules of thumb are informal guidelines, not regulated standards — a grade here is a judgement made visible, not a certification.

## The ranking table — all nine rules, verdicts, and evidence grades up front

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 360" role="img" aria-label="Ranking of nine trading rules of thumb by evidence: 1 percent per trade KEEP grade A, total-open-risk cap KEEP grade A, never average down KEEP grade B, 2 percent per trade KEEP WITH A FIX grade B, 3-5-7 rule KEEP WITH A FIX grade B/C, cut losses and let winners run KEEP WITH A FIX grade B, minimum 1 to 2 risk-to-reward KEEP WITH A FIX grade B, 7 percent sell rule CONTEXT ONLY grade C, and 90-90-90 CONTEXT ONLY grade D as a statistic." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Nine rules, three verdicts — risk budgets survive, slogans do not</text>
<text x="40" y="76" fill="#8fd6a0" font-size="12" font-weight="700">KEEP</text>
<text x="150" y="76" fill="#f2f7f4" font-size="12">1% per trade (A) · Total-open-risk cap (A) · Never average down (B)</text>
<text x="40" y="116" fill="#e8c15a" font-size="12" font-weight="700">KEEP WITH A FIX</text>
<text x="150" y="116" fill="#f2f7f4" font-size="12">2% per trade (B) · 3-5-7 rule (B/C)</text>
<text x="150" y="140" fill="#f2f7f4" font-size="12">Cut losses / let winners run (B) · Minimum 1:2 (B)</text>
<text x="40" y="188" fill="#e8825a" font-size="12" font-weight="700">CONTEXT ONLY</text>
<text x="150" y="188" fill="#f2f7f4" font-size="12">7% sell rule (C) · 90-90-90 (D as a statistic)</text>
<text x="340" y="244" text-anchor="middle" fill="#92a59c" font-size="11">Grades are this article's own framework, not an industry standard.</text>
<text x="340" y="272" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">A = arithmetic and/or measured data · B = sound logic, partial measurement</text>
<text x="340" y="300" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">C = plausible but unmeasured or contested · D = slogan, no study behind it</text>
</svg>
</figure>

| Rule | Verdict | Evidence grade | One-line reason |
|---|---|---|---|
| 1% per trade | KEEP | A — arithmetic + convergent guidance | Streak math is exact; the default every other rule is measured against |
| Total-open-risk cap (~5%) | KEEP | A — arithmetic + correlation logic | The only rule that stops five "safe" trades becoming one big bet |
| 2% per trade | KEEP WITH A FIX | B — arithmetic, needs the cap | Survivable alone, dangerous without a total cap; reserve for verified edges |
| 3-5-7 rule | KEEP WITH A FIX | B/C — coherent budget, contested definition, 3% leg too high | Keep the 5% cap and the 2.3R target; tighten 3% toward 1–2% |
| Cut losses / let winners run | KEEP WITH A FIX | B — principle sound, instruction incomplete | Needs a mechanical winner rule, not just a loser rule |
| Minimum 1:2 risk-to-reward | KEEP WITH A FIX | B — exact breakeven math, filter not law | Works only if the target is actually reachable in your data |
| 7% sell rule | CONTEXT ONLY | C — price rule mistaken for a risk rule | Useful only after translation into account-risk terms |
| 90-90-90 | CONTEXT ONLY | D as a statistic, A as a warning | No published study has been identified behind the triple; real data points the same way without the rhyme |
| Never average down | KEEP | B — loss-shape logic | Turns a capped loss open-ended unless the scale-in was pre-planned |

If you read nothing else, read that table, then the personal-rulebook checklist at the end. The rest of the article is the evidence behind each verdict.

## The keepers — the 1% rule and the total-open-risk cap

### Rule 1 — The 1% rule: risk at most 1% of account equity per trade — KEEP

The 1% rule says: never put more than 1% of your account equity at risk on a single trade. That is a risk budget, not a position size. It is set by the distance to your stop, never by how much capital you invest in the trade. A large position with a tight stop can risk 1%; a small position with a wide stop can risk far more.

The verdict rests on exact streak mathematics, before costs. After 10 consecutive losses at 1% risk per trade, about 90.4% of capital remains (0.99^10). After 20 consecutive losses, about 81.8% remains (0.99^20). Losing streaks of that length happen to ordinary strategies — see the companion guides on [how losing streaks affect trading accounts](/articles/how-losing-streaks-affect-trading-accounts/) and [risk of ruin](/articles/risk-of-ruin-trading/) — and a rule that leaves a trader with most of their capital intact after one is doing its job.

Most guides converge on 1% as the beginner default, with 2% reserved for traders with a verified edge. That convergence is guidance, not a study result, and the KEEP verdict does not depend on it — it depends on the arithmetic above, which any reader can recompute and test against their own journal.

**The fix:** none. Use it as written, and remember that 1% is the maximum loss if the stop is hit, not a target to aim for.

### Rule 2 — The total-open-risk cap: never more than ~5–6% at risk across all open trades — KEEP

The total-open-risk cap is the most underrated rule in this ranking, because it is the only one that answers correlation. A per-trade cap alone says nothing about what happens when several trades go wrong at once. Five "safe" 1% trades in the same theme are one 5% bet if a single headline hits them all.

The worst-case arithmetic is simple addition of per-trade risk, before costs:

| Combination | Total account risk if all stops are hit |
|---|---|
| 1% + 1% + 1% + 1% + 1% | 5% |
| 2% + 2% + 1% | 5% |
| 3% + 2% | 5% |
| 2% + 2% + 2% + 2% + 2% | 10% |

Use the correlation test before adding a position: *would one headline hurt all of these at once?* If yes, count them as one position, not several. This is logic, not a measured statistic — no dataset is needed to see that correlated stops fail together. For how to turn a risk budget into a position size, see [position sizing](/articles/position-sizing/).

**The fix:** none. Pair this cap with any per-trade cap you choose. A per-trade rule without a total cap is not a risk system. If the next trade would breach the cap, skip the lowest-conviction trade or shrink the new position until total risk is back under ~5%.

*Test it in 30 trades: did any day breach ~5% including correlated positions?*

### The ₹ worked example — what 1% and 5% actually mean in shares

This is a labelled illustration, never a forecast. Take a ₹2,00,000 account:

- 1% risk per trade = ₹2,000 maximum loss per trade
- 2% risk per trade = ₹4,000 maximum loss per trade
- 5% total-open-risk cap = ₹10,000 at risk across all open trades combined

Now take one example trade: entry ₹1,000, stop ₹940, so the risk is ₹60 per share.

- At 1% risk: ₹2,000 ÷ ₹60 = 33 shares (floored). The position is worth about ₹33,000, but the risk — the only number the rules cap — is ₹1,980 after flooring, not exactly ₹2,000.
- At 2% risk: ₹4,000 ÷ ₹60 = 66 shares (floored). The position is worth about ₹66,000, and the risk is ₹3,960 after flooring, not exactly ₹4,000.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Worked example walkthrough: a 2,00,000 rupee account gives a 2,000 rupee risk budget at 1 percent and 4,000 rupees at 2 percent, converting to 33 and 66 shares at 60 rupees risk per share, with floored risks of 1,980 and 3,960 rupees." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">₹2,00,000 account — from budget to shares</text>
<text x="40" y="80" fill="#f2f7f4" font-size="13" font-weight="700">At 1% risk</text>
<text x="300" y="80" fill="#f2f7f4" font-size="13">₹2,000 ÷ ₹60 = 33 shares (floored)</text>
<text x="300" y="104" fill="#92a59c" font-size="12">Risk after flooring: ₹1,980</text>
<text x="40" y="150" fill="#f2f7f4" font-size="13" font-weight="700">At 2% risk</text>
<text x="300" y="150" fill="#f2f7f4" font-size="13">₹4,000 ÷ ₹60 = 66 shares (floored)</text>
<text x="300" y="174" fill="#92a59c" font-size="12">Risk after flooring: ₹3,960</text>
<rect x="40" y="210" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="242" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Position value is not risk — only (entry − stop) × shares sets the risk</text>
</svg>
</figure>

Position value is not risk. ₹33,000 invested with a ₹60 stop risks ₹1,980; the same ₹33,000 invested with a ₹300 stop would risk far more. Only the stop distance, multiplied by the number of shares, sets the risk — and that is why a price rule alone, such as the 7% rule below, says nothing about either number until position size is set.

Small-account honesty matters here. On a ₹50,000 account, 1% is ₹500. A single lot's stop distance can force the risk above that cap, and when it does, the rule's answer is to trade smaller, fewer, or not at all — not to quietly raise the percentage until the trade fits. No specific lot price or stop distance is assumed here; the arithmetic is simply that ₹500 does not stretch to cover every instrument's minimum size.

### Streak survival — why the percentage matters more than the trade

The table below is fixed-fractional streak math: each loss is exactly the stated fraction of then-current equity, before costs, slippage, correlation, and gaps.

| Consecutive losses | 1% risk | 2% risk | 3% risk | 5% risk | 10% risk |
|---|---|---|---|---|---|
| After 10 losses | ≈90.4% remains | ≈81.7% remains | ≈73.7% remains | ≈59.9% remains | ≈34.9% remains |
| After 20 losses | ≈81.8% remains | ≈66.8% remains | ≈54.4% remains | — | — |

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Streak survival table: after 10 consecutive losses about 90.4 percent remains at 1 percent risk, 81.7 at 2 percent, 73.7 at 3 percent and 34.9 at 10 percent; after 20 losses about 81.8, 66.8 and 54.4 percent remain at 1, 2 and 3 percent risk." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Streak survival — the damage compounds</text>
<text x="200" y="76" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">After 10 losses</text>
<text x="420" y="76" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">After 20 losses</text>
<text x="40" y="112" fill="#f2f7f4" font-size="13" font-weight="700">1% risk</text>
<text x="200" y="112" text-anchor="middle" fill="#8fd6a0" font-size="13" font-weight="700">90.4%</text>
<text x="420" y="112" text-anchor="middle" fill="#8fd6a0" font-size="13" font-weight="700">81.8%</text>
<text x="40" y="148" fill="#f2f7f4" font-size="13" font-weight="700">2% risk</text>
<text x="200" y="148" text-anchor="middle" fill="#f2f7f4" font-size="13">81.7%</text>
<text x="420" y="148" text-anchor="middle" fill="#f2f7f4" font-size="13">66.8%</text>
<text x="40" y="184" fill="#f2f7f4" font-size="13" font-weight="700">3% risk</text>
<text x="200" y="184" text-anchor="middle" fill="#f2f7f4" font-size="13">73.7%</text>
<text x="420" y="184" text-anchor="middle" fill="#f2f7f4" font-size="13">54.4%</text>
<text x="40" y="220" fill="#f2f7f4" font-size="13" font-weight="700">10% risk</text>
<text x="200" y="220" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">34.9%</text>
<text x="420" y="220" text-anchor="middle" fill="#92a59c" font-size="12">—</text>
<text x="340" y="276" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Fixed-fractional math, before costs, slippage, correlation and gaps.</text>
<text x="340" y="300" text-anchor="middle" fill="#92a59c" font-size="11">10% risk leaves barely a third after 10 straight losses — before costs.</text>
</svg>
</figure>

This is why 1% ranks above 2%, and both rank above 3%: the damage compounds. A 10% risk per trade leaves barely a third of the account after 10 consecutive losses, before costs. Recovery is asymmetric, which makes the damage worse than it looks: a 26.3% drawdown needs about a 35.7% gain to break even, and a 50% loss needs 100%. That recovery math is covered in depth in [maximum drawdown](/articles/maximum-drawdown/) and [the mathematics of drawdown recovery](/articles/trading-drawdown-mathematics-of-recovery/) — it is linked here, not re-taught.

## Keep with a fix — four sound ideas with a number or instruction to change

The pattern in this group is consistent: the idea survives, the stated number or instruction does not. Each verdict below ends with the fix as a usable rule.

### Rule 3 — The 2% rule: an upper bound for verified edges only, never the beginner default — KEEP WITH A FIX

The 2% rule says: risk at most 2% of account equity per trade. By streak math alone, before costs, it is survivable: 10 consecutive 2% losses leave about 81.7% of capital (0.98^10), and 20 leave about 66.8%. That is worse than 1% on both counts, but it is not ruin.

The problem is what happens without a total cap. Five simultaneous 2% trades are a 10% account bet, and a trader who treats "2% per trade" as a complete risk system has no defence against a correlated drawdown. Most guides that endorse 2% also warn that it should not be applied in isolation and must be paired with exposure limits — that is convergent guidance, not a study result, but the arithmetic behind it stands on its own.

**The fix:** keep 2% only as an upper bound for traders with a verified edge over a large sample, never as the beginner default, and never without a ~5% total-open-risk cap. A verified edge over a large sample means positive expectancy over a large sample of trades — see [how to calculate real expectancy](/articles/how-to-calculate-real-expectancy/) for how that expectancy is measured. Judged on streak math alone, the 3% leg of the next rule fails the same test more clearly — the streak table above is all the evidence needed.

*Test it in 30 trades: did any combination of 2% trades breach the ~5% total cap?*

### Rule 4 — The 3-5-7 rule: keep the structure, fix the numbers — KEEP WITH A FIX

At least four conflicting versions of the 3-5-7 rule circulate — including a risk-budget version (3% per trade, 5% total open risk, ~7% reward target), price-distance versions, monthly percentage versions, and a moving-average version — so no single version should be presented as "the" rule, and the full ambiguity is covered in depth in a companion article rather than re-litigated here.

**Verdict: KEEP WITH A FIX.** The version ranked here is the risk-budget version: 3% risk per trade, 5% total open risk, and a ~7% reward target that is about 2.3 times the 3% risk — a ~2.3R target, not a 7% price move. Keep the structure, because the 5% total cap is the genuinely valuable idea — it is what the 1% and 2% rules lack on their own. Fix the numbers: the 3% per-trade leg sits above the 1–2% band the streak math supports (after 10 consecutive losses at 3%, about 73.7% of capital remains, before costs, against about 90.4% at 1%), so tighten it toward 1–2%. State the 7% leg as a reward target every time, never as a price move — the price-distance confusion is the same error the 7% sell rule makes below.

**The fix:** keep the budget structure and the 5% total cap; tighten 3% toward 1–2%; treat ~7% as a ~2.3R reward target, not a price target.

*Test it in 30 trades: did the tightened 1–2% leg and the ~2.3R target hold without breaching the 5% total cap?*

### Rule 5 — "Cut your losses short and let your winners run": two mechanical decisions, not one slogan — KEEP WITH A FIX

As stated, this rule is two separate mechanical decisions, and most traders only ever build the first. The fix is to write down both halves before entry:

- **Losers:** a pre-defined exit at invalidation, decided before entry and never widened. A stop that moves away from price after the trade goes wrong is not an exit rule; it is the absence of one.
- **Winners:** a mechanical rule, not hope. For example, take a partial profit at a defined multiple of risk (such as 2R) and trail the remainder by a rule that only moves in your favour. "Let it run" without such a rule is not a plan — it is a decision postponed until emotion makes it.

Without the second half, the rule produces small wins and large losses: the exact backwards shape it warns against. The shape of wins versus losses matters more than the win rate, which is why expectancy — not win rate alone — is the right lens; see [what trading expectancy is](/articles/what-is-trading-expectancy/) and [how to calculate real expectancy](/articles/how-to-calculate-real-expectancy/). R-multiples are the professional way to measure the win/loss shape, and that term is all this ranking needs on that topic.

**The fix:** a pre-defined loser exit plus a mechanical winner rule, both written before entry. The slogan alone is not a rule.

*Test it in 30 trades: did the partial-profit rule trigger?*

### Rule 6 — Minimum 1:2 risk-to-reward: a filter, not a law — KEEP WITH A FIX

The breakeven math here is exact, before costs. A trade's breakeven win rate is 1 ÷ (1 + R), where R is the reward multiple:

| Risk-to-reward | Breakeven win rate, before costs |
|---|---|
| 1:1 | Over 50% (50.0% before costs, higher once any cost is added) |
| 1:2 | About 33.3% |
| 1:3 | 25% |
| ~2.3R (the 3-5-7 target) | About 30.3% for the rounded 2.3R label |

Costs move every breakeven up, and that qualifier is not decorative: brokerage, taxes, and slippage are paid on every trade, win or lose. For the full win-rate picture, see [win rate versus risk-reward](/articles/win-rate-vs-risk-reward/) and [profitable with a 30 percent win rate](/articles/profitable-with-30-percent-win-rate/).

The fix is about reachability. A 1:2 filter does not make a bad setup good. A forced 2R target that price never reaches is worse than a realistic 1.5R target that fills. Judge a target by whether price actually reaches it in your backtest or journal, not by how tidy the ratio looks. A ratio is a filter for trade selection — it screens out trades whose maths cannot work — not a law that makes a selected trade profitable.

**The fix:** use 1:2 as a filter, not a law, and only for targets your own data shows price actually reaches.

*Test it in 30 trades: count how often price actually reached the 2R target.*

## Context only — useful as warnings, not as rules to trade by

Neither rule in this group belongs in a trading plan as stated, even though both teach something. Each ends with its one legitimate use.

### Rule 7 — The 7% sell rule: a price rule, not a risk rule — CONTEXT ONLY

The 7% sell rule says: exit a position if it falls about 7% from entry. The lesson here is a distinction this rule collapses. Account risk equals (entry − stop) × shares ÷ account equity. A 7% price fall on a full-size position can risk far more than 1–2% of the account; the same 7% price fall on a small, stop-sized position can risk far less. The price distance alone says nothing about account risk until position size is set.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Price distance versus account risk diagram: a 7 percent price fall is not a 7 percent account risk — on a 2,00,000 rupee account with a 1,000 rupee entry, a 7 percent stop is 70 rupees per share, so a 2,000 rupee risk budget allows 28 shares floored, risking 1,960 rupees." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">A 7% price stop is not a 7% account risk</text>
<text x="40" y="80" fill="#f2f7f4" font-size="13" font-weight="700">Price distance alone says nothing —</text>
<text x="40" y="106" fill="#f2f7f4" font-size="13" font-weight="700">until position size is set.</text>
<text x="40" y="150" fill="#92a59c" font-size="12">Account risk = (entry − stop) × shares ÷ account equity</text>
<rect x="40" y="186" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="218" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹2,00,000 account · entry ₹1,000 · 7% stop = ₹70/share · ₹2,000 ÷ ₹70 = 28 shares</text>
<text x="340" y="264" text-anchor="middle" fill="#8fd6a0" font-size="12" font-weight="700">Risk: ₹1,960 — a 1% rule with a 7% stop distance, not a 7% risk</text>
</svg>
</figure>

That is the same confusion the price-distance variant of the 3-5-7 rule creates, and it is why the 7% rule ranks as CONTEXT ONLY. No originator is named here, because the ranking rests on the rule's logic, not on who first stated it.

**The legitimate use:** translate it before using it. Size the position so that the 7% price stop equals your 1–2% risk budget — then you are following the 1% or 2% rule with a 7% stop distance, which is a coherent rule. Worked translation: on a ₹2,00,000 account with a ₹1,000 entry, a 7% stop is ₹70 per share, so a ₹2,000 risk budget allows 28 shares (floored), risking ₹1,960. Standing alone, it is a price observation mistaken for a risk rule.

### Rule 8 — The 90-90-90 rule: a warning story, not a statistic — CONTEXT ONLY

The 90-90-90 rule claims that 90% of traders lose 90% of their money in 90 days. Treat it as a community observation that travelled into a tidy rhyme, not as a measured statistic: no published study has been identified behind the triple. That phrasing matters. It is the honest statement of what the research found, not a claim that no study could ever exist. And the triple must never be used as evidence for anything, including for the other verdicts in this article.

That does not mean traders mostly win. Real measured figures point the same direction without the rhyme, and each must be read with its population and period attached:

- **EU retail CFD accounts:** analyses cited by the European regulator in 2018 found roughly 74–89% of retail CFD accounts losing money, a range across jurisdictions — not a current figure, and not about Indian traders.
- **Indian equity F&O traders:** a regulator study found 89% of individual equity F&O traders lost money in FY22; a regulator study found 93% of over 1 crore individual equity F&O traders incurred losses over FY22–FY24, inclusive of transaction costs (SEBI, September 2024; FY24 alone was 91.1% loss-makers).
- **Brazilian day traders:** an academic study of first-time day traders in mini-Ibovespa futures in 2013–2015 found about 29.8% profitable among those who traded only 1 day, falling to about 3.0% among those who traded more than 300 days, measured on net profit. That is a narrow population — Brazilian index-futures day traders, a decade ago — and it must not be generalised to Indian equity or options traders.

The full measured-data case is covered in depth in a companion article; this ranking needs only the direction and the caveats. The 90-90-90 triple's legitimate use is as motivation: if most traders in measured samples lose, a ranking that separates surviving rules from slogans is worth doing before real money is risked.

**The legitimate use:** a warning that motivates risk discipline. Never a statistic, never evidence, never a forecast about any individual trader.

## Rule 9 — Never average down: the short, sharp section — KEEP

Adding to a losing position without a pre-planned scale-in rule converts a capped loss into an open-ended one. The original trade had a defined risk — the entry, the stop, the share count. Each addition made after the loss rewrites that risk without a plan, and the position that was supposed to lose at most 1% can now lose several times that before any rule stops it.

The honest exception is narrow: a pre-planned, pre-sized scale-in written into the system before entry is a different trade, not averaging down. The size, the prices, and the total risk were all fixed when the trader was calm. Anything decided after the loss is revenge sizing — see [revenge trading](/articles/revenge-trading/) for that mechanism — and it deserves no kinder name.

**The fix:** none. Keep the rule as written, and keep the exception as narrow as stated.

## Your personal rulebook — a one-page checklist to write into your plan

Copy these four choices into your trading plan. Each one has a blank to fill — a rulebook with no choices made is just another list of slogans.

- [ ] **One per-trade cap:** 1% as the default; 2% only with a verified edge over a large sample. My cap: ______%.
- [ ] **One total-open-risk cap:** about 5% across all open trades, counting correlated positions as one. My cap: ______%.
- [ ] **One winner rule:** partial profit at a defined multiple of risk (for example 2R), remainder trailed by a rule that only moves in my favour. My rule: ______.
- [ ] **One exit rule:** stop at invalidation, decided before entry, never widened. My exit rule: ______.

Test the finished rulebook against your journal in about 30 trades: did the caps hold, did the winner rule actually trigger, and did any stop get widened? If the answer to the last question is yes, the rulebook was not followed. That, not the rules, is what needs fixing first.

### What this ranking cannot do — limits, costs, and correlation

Every streak and breakeven figure in this article is before costs, slippage, correlation, and overnight gaps. Real trading adds all four, and costs move every breakeven up. A stop-loss order does not guarantee the stop price, so a gap past the stop means realised loss can exceed the budgeted risk. Two locked cost figures illustrate why the "before costs" qualifier is not a footnote. STT is 0.15% on exercised/sell-side options (Budget 2026, effective 1 April 2026), and the NSE equity-options charge is 0.03553% per side all-in (₹3,553 per crore = ₹3,552.99 transaction charge + ₹0.01 IPFT contribution, per NSE circular NSE/FA/73061, effective 1 March 2026). Those figures are per-trade costs that sit on top of the arithmetic in the tables above, and they apply whether a trade wins or loses.

The ranking also cannot do what only a tested system can do: it cannot validate an edge, measure a strategy's expectancy, or replace a trading journal. Rules of thumb are informal guidelines, not regulated standards, and passing this evidence test makes a rule worth using — not a guarantee of profit.

## FAQs — questions readers genuinely ask

### How much should I risk per trade?

Risk 1% of account equity as the default, and 2% only as an upper bound for a verified edge over a large sample — always under a total-open-risk cap of about 5%. On a ₹2,00,000 account, that means up to ₹2,000 of risk per trade at 1% (₹1,980 after flooring to 33 shares in the worked example above) and up to ₹4,000 at 2% (₹3,960 after flooring to 66 shares). On a ₹50,000 account, 1% is ₹500, and if a lot's stop distance forces risk above that cap, the rule says to trade smaller, fewer, or not at all.

### What is the 1% rule in trading?

The 1% rule says: risk at most 1% of your account equity on any single trade, with the risk set by the distance to your stop. After 10 consecutive losses at 1% risk, about 90.4% of capital remains before costs; after 20, about 81.8%. It is a risk budget, not a position size — the number of shares follows from the stop distance, not the other way round.

### Is 2% risk per trade too much?

It depends on who is using it and whether a total cap is in place. By streak math alone, before costs, 2% is survivable: about 81.7% of capital remains after 10 consecutive losses and about 66.8% after 20. But as a beginner default, or without a total-open-risk cap, yes — it is too much. Five simultaneous 2% trades are a 10% account bet. Reserve 2% for verified edges, and always pair it with a ~5% total cap.

### Is the 3-5-7 rule good?

It is good as a structure and weak as stated. Keep the 5% total-open-risk cap, which is the rule's genuinely valuable idea; tighten the 3% per-trade leg toward the supported 1–2% band; and treat the ~7% leg as a ~2.3R reward target, not a price move. Definitions of this rule vary — see the verdict section above — and the full definition question is covered in depth in a companion article, with no hyperlink here until that article is published.

### Is the 90-90-90 rule true?

As a literal statistic, no published study has been identified behind the triple, so it should be treated as a community observation, not a measured fact. As a warning, it points the same way as real measured data: a regulator study found 89% of individual equity F&O traders lost money in FY22, and SEBI's September 2024 study found 93% of over 1 crore individual equity F&O traders incurred losses over FY22–FY24, inclusive of transaction costs; in FY24 alone 91.1% were loss-makers. The triple itself is never evidence — the measured figures, each with its population and period, are.

### What is the 7% rule in stocks?

The 7% rule says to exit a stock position if it falls about 7% from entry. It is a price rule, not a risk rule: a 7% price fall says nothing about account risk until position size is set. Use it only by translating it — size the position so the 7% price stop equals your 1–2% risk budget — or do not use it at all.

### What risk-reward ratio do I need to be profitable?

Before costs, the breakeven win rates are: 1:1 needs over 50%, 1:2 needs about 33.3%, 1:3 needs 25%, and ~2.3R needs about 30.3% for the rounded 2.3R label. Costs move every breakeven up. And a ratio is a filter, not a law: the target must actually be reached in your own backtest or journal data, or the ratio's tidiness is worthless.

### What does "cut your losses and let your winners run" mean in practice?

In practice it means two mechanical rules, both decided before entry: a pre-defined exit for losers (stop at invalidation, never widened) and a mechanical rule for winners (partial profit at a defined multiple of risk, such as 2R, with the remainder trailed by a rule that only moves in your favour). The slogan alone is incomplete — without the winner half, it produces small wins and large losses.

## Educational disclaimer

This article is educational content only. It contains no stock, contract, or trade recommendations, and no guaranteed outcomes. Rules of thumb are informal guidelines, not regulated standards, and every streak and breakeven figure in this article is before costs, slippage, correlation, and gaps unless stated otherwise. Streak and breakeven arithmetic describes what the maths implies — it is not a prediction of what any reader will earn, and past arithmetic is not a promise about future results.

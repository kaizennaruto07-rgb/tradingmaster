---
title: "Profitable With a 30% Win Rate: The Math, the Streaks, and What It Actually Feels Like"
description: "Can you be profitable with a 30% win rate? Yes — at 3:1, +20R per 100 trades beats a thin-edged 80% system's +4R. Streak stats, Indian costs, survival rules."
meta_description: "Can you be profitable with a 30% win rate? Yes — at 3:1, +20R per 100 trades beats a thin-edged 80% system's +4R. Streak stats, Indian costs, survival rules."
date: 2026-10-07
author: Kaizen
tag: "Trading mathematics · Win rate"
keywords: ["can you be profitable with a 30% win rate", "is 30% win rate good in trading", "what risk reward do i need with 30% win rate", "30% win rate 1:3", "30% win rate 1:2", "30 percent win rate profitable"]
---

*Educational content only — not financial advice. Trading involves risk of loss.*


# Profitable With a 30% Win Rate: The Math, the Streaks, and What It Actually Feels Like

Three trades out of ten go your way. Seven go against you. Most traders hear that record and quit before asking the question that actually matters: **can you be profitable with a 30% win rate?**

Yes. And not marginally — a 30% win-rate system with a genuine 3:1 average payoff can outperform an 80% win-rate system over the same 100 trades. The proof takes four lines of arithmetic. This article walks the full ledger: the expectancy math, the Indian cost layer that moves your breakeven, the losing streaks you are statistically near-certain to meet, and why the real enemy is not the math — it is the mirror.

No hype, no "secret strategy", no promise of returns. Just the numbers as they work out on NSE and BSE, in ₹, costs dated 2026-10-07.

## Yes — a 30% win rate can be profitable, if your average win beats the 2.33:1 breakeven

Here is the whole argument in one 100-trade walkthrough. Risk ₹2,000 per trade. Target ₹6,000 — a 1:3 risk-reward.

| Outcome | Trades | P&L per trade | Total |
|---|---|---|---|
| Wins (30%) | 30 | +₹6,000 | +₹1,80,000 |
| Losses (70%) | 70 | −₹2,000 | −₹1,40,000 |
| **Net** | **100** | — | **+₹40,000** |

Thirty wins, seventy losses, and the account still grows by ₹40,000. In R-multiples: 30 × 3 − 70 × 1 = **+20R** over 100 trades, or +0.20R of expectancy per trade.

Now the mirror image. A trader who wins 80% of trades but only takes 0.3:1 payoffs: 80 × 0.3 − 20 × 1 = **+4 units**. Still positive before costs — the breakeven payoff for 80% is actually 0.25:1, so 0.3:1 does clear it — but it earns *five times less* than the 30% system while looking five times better in the monthly report. That razor-thin pre-cost edge is exactly what brokerage and STT wipe out; after Indian transaction costs it typically goes to zero or negative — though the wipeout is size-dependent: at ₹1,300 risk per trade the +₹52 edge faces ~₹59 in costs (gone), while at larger risk sizes the edge can survive costs. Small traders pay this toll hardest.

**This is the point most traders miss:** win rate tells you how often you feel right. Expectancy tells you whether your account grows. They are not the same number, and they do not even rhyme.

> **All the math in this article assumes a constant win rate and constant average win/loss.** Real trading has variance in both. That is exactly why the streak statistics later in this article matter — and why every expectancy figure here is a statement about 100+ trades, not a promise about your next ten.

### The one equation that settles it: expectancy, worked in rupees

Expectancy answers: "on average, how much does one trade make or lose?"

> **Expectancy = (win rate × average win) − (loss rate × average loss)**

With our numbers: (0.30 × ₹6,000) − (0.70 × ₹2,000) = ₹1,800 − ₹1,400 = **+₹400 per trade**. That +₹400 is the only number in this article that matters. Everything else — breakevens, streaks, costs — is about protecting it.

If expectancy is new to you, work through [What Is Trading Expectancy](/articles/what-is-trading-expectancy/) first — it is the prerequisite this article builds on, and this one does not re-derive it from zero.

### Why it feels impossible: being wrong 7 times out of 10 is what the winning system looks like

There is a reason this article exists instead of just ending at the equation above. A profitable 30% system *feels* broken, for a well-documented psychological reason: losses are felt roughly twice as powerfully as equivalent gains (Kahneman & Tversky's prospect theory, 1979 — the standard behavioral-finance framing). Seven losses do not feel like the price of thirty wins. They feel like failure.

Trend-following systems have lived this reality for decades. The legendary trend-followers of the 1980s won only around **35–40%** of their trades, expected to lose **60–65%** of them, and targeted average profits of **3:1 to 4:1** against their average losses (per turtletrader.com's account of the original program rules). Their edge was not being right more often. It was being *paid* more when right.

Paul Tudor Jones runs the same filter for the same reason: he looks for trades with at least **5:1** risk-reward, precisely because at a 20% win rate, 0.20 × 5 − 0.80 × 1 = **+0.20R per trade** — profitable, with a margin of safety above the true 20% breakeven of 4:1. So anything at or above 5:1 at 20% is profitable. (This is from his Tony Robbins interview, *Money: Master the Game*, 2014 — not from *Market Wizards*, despite some secondary sources misattributing it.) The math is universal: the lower your win rate, the fatter your winners must be — and there is always an exchange rate.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 500" role="img" aria-label="Expectancy matrix: expectancy per trade in R-multiples across win rates and risk-reward ratios, with the 30 percent win rate row highlighted" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Expectancy per trade (R-multiples): win rate × risk-reward</text>
<text x="340" y="52" text-anchor="middle" fill="#f2a33c" font-size="12">costs shift the zero column right →</text>
<text x="180" y="82" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">2:1</text>
<text x="292" y="82" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">2.33:1</text>
<text x="404" y="82" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">3:1</text>
<text x="516" y="82" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">4:1</text>
<text x="628" y="82" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">5:1</text>
<text x="63" y="82" text-anchor="middle" fill="#92a59c" font-size="12">win rate ↓</text>
<text x="110" y="138" text-anchor="end" fill="#92a59c" font-size="13" font-weight="400">20%</text>
<text x="180" y="138" text-anchor="middle" fill="#ff4f65" font-size="14" font-weight="400">-0.4R</text>
<text x="292" y="138" text-anchor="middle" fill="#ff4f65" font-size="14" font-weight="400">-0.33R</text>
<text x="404" y="138" text-anchor="middle" fill="#ff4f65" font-size="14" font-weight="400">-0.2R</text>
<text x="516" y="138" text-anchor="middle" fill="#92a59c" font-size="14" font-weight="400">0</text>
<text x="628" y="138" text-anchor="middle" fill="#14d991" font-size="14" font-weight="400">+0.2R</text>
<rect x="8" y="162" width="664" height="62" rx="8" fill="#14d991" fill-opacity="0.10"/>
<rect x="8" y="162" width="4" height="62" rx="2" fill="#14d991"/>
<text x="110" y="200" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">30%</text>
<text x="180" y="200" text-anchor="middle" fill="#ff4f65" font-size="14" font-weight="700">-0.1R</text>
<text x="292" y="200" text-anchor="middle" fill="#92a59c" font-size="14" font-weight="700">0</text>
<text x="404" y="200" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+0.2R</text>
<text x="516" y="200" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+0.5R</text>
<text x="628" y="200" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+0.8R</text>
<text x="110" y="262" text-anchor="end" fill="#92a59c" font-size="13" font-weight="400">40%</text>
<text x="180" y="262" text-anchor="middle" fill="#14d991" font-size="14" font-weight="400">+0.2R</text>
<text x="292" y="262" text-anchor="middle" fill="#14d991" font-size="14" font-weight="400">+0.33R</text>
<text x="404" y="262" text-anchor="middle" fill="#14d991" font-size="14" font-weight="400">+0.6R</text>
<text x="516" y="262" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+1.R</text>
<text x="628" y="262" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+1.4R</text>
<text x="110" y="324" text-anchor="end" fill="#92a59c" font-size="13" font-weight="400">50%</text>
<text x="180" y="324" text-anchor="middle" fill="#14d991" font-size="14" font-weight="400">+0.5R</text>
<text x="292" y="324" text-anchor="middle" fill="#14d991" font-size="14" font-weight="400">+0.67R</text>
<text x="404" y="324" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+1.R</text>
<text x="516" y="324" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+1.5R</text>
<text x="628" y="324" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+2.R</text>
<text x="110" y="386" text-anchor="end" fill="#92a59c" font-size="13" font-weight="400">60%</text>
<text x="180" y="386" text-anchor="middle" fill="#14d991" font-size="14" font-weight="400">+0.8R</text>
<text x="292" y="386" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+1.R</text>
<text x="404" y="386" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+1.4R</text>
<text x="516" y="386" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+2.R</text>
<text x="628" y="386" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">+2.6R</text>
<text x="340" y="452" text-anchor="middle" fill="#92a59c" font-size="12">Read: at 30% with 3:1, expectancy = 0.30 × 3 − 0.70 × 1 = +0.20R per trade.</text>
<text x="340" y="474" text-anchor="middle" fill="#92a59c" font-size="12">Negative cells bleed; the zero column is the breakeven you must clear — before costs.</text>
</svg>
<figcaption>Expectancy per trade in R-multiples. The highlighted 30% row is the pivot: 2:1 loses −0.10R, 2.33:1 breaks even, 3:1 earns +0.20R. Trading costs shift the zero column right.</figcaption>
</figure>

## The textbook breakeven is 2.33:1 — Indian trading costs move it

The breakeven formula is the mirror of expectancy:

> **Minimum R:R = (1 − win rate) ÷ win rate**

At 30%: (1 − 0.30) ÷ 0.30 = **2.33:1**. Risk ₹1, win ₹2.33 on average, and you break even. Below 2.33 you bleed; above it you earn. This is the full breakeven for 30%, and the derivation is covered properly in [Break-Even Win Rate](/articles/break-even-win-rate/) — I won't repeat it here. What neither that article nor any competitor's FAQ shows is what Indian costs do to this number.

Costs are not a footnote in India. Budget 2026 (effective April 1, 2026) raised F&O transaction taxes: STT on options sell-side premium went from 0.10% to **0.15%**, STT on futures sell-side went from 0.02% to **0.05%** of full notional, and exercised ITM options now attract **0.15%** STT on intrinsic value (up from 0.125%). Add brokerage, exchange transaction charges, stamp duty, SEBI charges, and 18% GST on the brokerage-and-charges portion, and every round trip quietly taxes your winners while making your losers worse.

Worked example — **options buyer, 1 lot NIFTY** (costs verified 2026-10-07, NIFTY lot size 65 per the NSE revision effective Oct 28, 2025):

- Buy at ₹20 premium → risk ₹1,300 (20 × 65)
- Win exits at ₹80 premium → win ₹5,200 (80 × 65), gross win ₹3,900
- Round-trip costs: ~₹59 (brokerage ₹40 + STT ₹7.80 + stamp duty ₹0.81 + transaction charges ₹2.31 + GST ₹7.62)
- Textbook expectancy: 0.3 × ₹3,900 − 0.7 × ₹1,300 = **+₹260/trade**
- After costs: ₹260 − ₹59 = **+₹201/trade** — a **~23% drag**

The effective breakeven R:R rises from 2.33 to **~2.48**. Your "3:1" is really about 2.8:1 after costs — and the margin you thought you had was the house's.

Now the structural warning for futures traders. STT on futures is levied on **full notional**, so small-stop futures scalping faces a far higher effective breakeven than the textbook suggests. Worked example — **Nifty futures intraday, 1 lot** (illustrative: Nifty assumed ~23,500, notional ~₹15.3 lakh; costs verified 2026-10-07):

- Round-trip costs: ~₹911, dominated by STT 0.05% on notional (~₹764)
- With a **₹1,500 stop** and a planned 3:1 (target ₹4,500): expectancy turns **−₹611/trade**, and the effective breakeven R:R is **~4.36:1**, not 2.33:1
- With a **₹5,000 stop**: breakeven R:R is ~2.94, and 3:1 earns only **+₹89/trade**

This is a structural illustration, not a universal claim — your actual breakeven depends on your stop size and costs — but the lesson is: the wider your stop relative to fixed costs, the closer your breakeven stays to the textbook. Scalpers pay the heaviest toll. The full charge breakdowns are on [Options Trading Charges in India](/articles/options-trading-charges-india/).

One honest caveat: any slippage you add on top (0.1–0.3% per side is a common modeling assumption) is an assumption, not a verified charge. If you include it in your own math, label it as such.

## What 30% actually looks like: the losing streaks you are near-certain to meet

This is the section no competitor writes, because "you need discipline through losing streaks" is easier than computing the streaks. So here are the computed probabilities at a 30% win rate (exact dynamic programming over all possible outcome sequences, cross-checked by 200,000-trial Monte Carlo simulation, October 2026):

### The streak numbers: 7, 8, 10, and 12 losses in a row

- A 7-loss run has an **8.24%** chance in any single 7-trade sequence (0.7⁷)
- Trade 50 times and you have a **75.8%** chance of hitting at least one 7-loss run — roughly three in four
- Trade 100 times and it is **94.9%** — near-certain
- An 8-loss run: **39.7%** chance over 30 trades, 60.1% over 50, 85.8% over 100, 99.4% over 250
- A 10-loss run: **58.0%** over 100 trades (better than even), 89.7% over 250
- A 12-loss run: **65.3%** over 250 trades

(Crude streak-probability formulas — and the online streak calculators built on them — overstate every figure above, some nearly double, because they treat overlapping trade sequences as independent. The numbers here come from exact computation, not the approximation.)

And the expected *worst* run you will live through: about **10–11 losses in a row over 100 trades**, rising to roughly **13 over 250**, **15 over 500 trades**, and ~17 over 1,000. (Several popular articles claim "6–7 over 100 trades, 9 over 500" — that figure was computed with the wrong loss probability. The corrected numbers above are what a true 30% system actually produces.)

Read that again, slowly: **if you run a genuinely profitable 30%-win-rate system for 500 trades, your worst run will most likely be around 15 consecutive losses — and there is nearly a one-in-three chance you will see 17 or more.** That is not the system breaking. That is the system.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Expected worst losing streak at a 30 percent win rate over 100, 250, 500 and 1000 trades" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Expected worst losing streak at a 30% win rate</text>
<text x="140" y="95" text-anchor="end" fill="#92a59c" font-size="13">100 trades</text>
<rect x="150" y="76" width="273" height="28" rx="6" fill="#14d991" fill-opacity="0.85" class="bar-grow"/>
<text x="435" y="95" fill="#f2f7f4" font-size="13" font-weight="700">10–11</text>
<text x="140" y="155" text-anchor="end" fill="#92a59c" font-size="13">250 trades</text>
<rect x="150" y="136" width="338" height="28" rx="6" fill="#14d991" fill-opacity="0.85" class="bar-grow"/>
<text x="500" y="155" fill="#f2f7f4" font-size="13" font-weight="700">~13</text>
<text x="140" y="215" text-anchor="end" fill="#92a59c" font-size="13">500 trades</text>
<rect x="150" y="196" width="390" height="28" rx="6" fill="#14d991" fill-opacity="0.85" class="bar-grow"/>
<text x="552" y="215" fill="#f2f7f4" font-size="13" font-weight="700">~15</text>
<text x="140" y="275" text-anchor="end" fill="#92a59c" font-size="13">1,000 trades</text>
<rect x="150" y="256" width="442" height="28" rx="6" fill="#14d991" fill-opacity="0.85" class="bar-grow"/>
<text x="604" y="275" fill="#f2f7f4" font-size="13" font-weight="700">~17</text>
<line x1="150" y1="316" x2="150" y2="322" stroke="#92a59c" stroke-width="1"/>
<text x="150" y="338" text-anchor="middle" fill="#92a59c" font-size="11">0</text>
<line x1="280" y1="316" x2="280" y2="322" stroke="#92a59c" stroke-width="1"/>
<text x="280" y="338" text-anchor="middle" fill="#92a59c" font-size="11">5</text>
<line x1="410" y1="316" x2="410" y2="322" stroke="#92a59c" stroke-width="1"/>
<text x="410" y="338" text-anchor="middle" fill="#92a59c" font-size="11">10</text>
<line x1="540" y1="316" x2="540" y2="322" stroke="#92a59c" stroke-width="1"/>
<text x="540" y="338" text-anchor="middle" fill="#92a59c" font-size="11">15</text>
<text x="340" y="360" text-anchor="middle" fill="#92a59c" font-size="11">consecutive losses</text>
<rect x="90" y="372" width="500" height="44" rx="10" fill="#2a3a32" stroke="#3f6f5f" stroke-width="1"/>
<text x="340" y="398" text-anchor="middle" fill="#f2f7f4" font-size="12.5">Probability of at least one 8-loss run over 100 trades: <tspan font-weight="700" fill="#f2a33c">85.8%</tspan></text>
</svg>
<figcaption>Your worst losing run grows with sample size. Over 500 trades at 30%, expect around 15 consecutive losses — with roughly a one-in-three chance of 17 or more.</figcaption>
</figure>

The equity consequence of those streaks is a geometry problem, not an opinion. After 7 straight losses at fixed fractional risk:

| Risk per trade | Drawdown after 7 losses |
|---|---|
| 0.5% | −3.45% |
| 1% | −6.79% |
| 2% | −13.19% |
| 5% | −30.17% |

A 7-loss run hits in roughly three out of four 50-trade stretches at 30% — and is near-certain (94.9%) over 100. So the real question is rarely "what if I hit a streak" — it is "which row of this table will I be living in when I do?" This is the streak-survival math [Risk of Ruin](/articles/risk-of-ruin-trading/) builds into its survival framework.

### Why your first 30 trades will lie to you

A 30% win rate does not look like "3 wins in every 10 trades" in short stretches. Any given 10-trade stretch:

- Exactly 3 wins: **26.7%** of the time
- 2 or fewer wins: **38.3%** of the time
- Zero wins: **2.8%** of the time

And the precision of any win-rate estimate: the 95% confidence interval around a true 30% system is **±16.4 percentage points over 30 trades** — your log can easily read as anywhere from 14% to 46% over your first 30 trades. Over 100 trades it tightens to ±9.0pp, and over 250 to ±5.7pp.

This is why traders abandon working systems before 100 trades. The system has not failed. The sample is simply too small to see the edge — and the human reading the statement sees 14% and panics.

## The two ways 30% win-rate traders actually die

**Death 1: Oversizing into the streaks.** Everything above is survivable at 1% risk per trade (−6.8% after 7 straight losses — unpleasant, not fatal). It becomes terminal at 5% (−30% — from which you need a ~43% gain just to get back). The streaks arrive on schedule; the sizing is the only variable you control. Low-win-rate systems are the worst place in the world for oversized positions, because the streaks are longest exactly when the strategy is least frequent.

**Death 2: Abandoning the system mid-drawdown.** The streak statistics and the confidence-interval math combine into a trap: your system hits its *statistically normal* 7-loss run somewhere in the first 50 trades (a ~76% chance), your log reads 15% win rate, and you conclude the system is broken. You quit a positive-expectancy system during its normal weather. SEBI's August-2026 study of individual F&O traders is the industry-scale version of this story: in FY26 alone, **87.7%** of individual F&O traders incurred net losses of roughly **₹91,685 crore** aggregate — and of traders active through all five years FY22–FY26, only **0.5%** were profitable in *every* year (per SEBI studies as reported by Outlook Money and others). The pattern is consistent with process failure — discipline, sizing, and system-hopping — doing as much damage as the math itself.

Survival rules, concretely:

1. **Never size a 30% system on hope.** Fixed fractional risk, small enough that your expected-worst streak leaves you tradable.
2. **Judge systems only over 100+ trades.** The CI numbers above are the reason. Before 100 trades you are reading noise.
3. **Log every closed trade with planned vs realized R.** Your planned 3:1 is not your realized 3:1 — and the worksheet below is how you find out which one you're actually trading.
4. **Stand aside from systems you can't emotionally afford.** If a ~15-loss streak — the normal worst case over a few hundred trades — would make you revenge-trade, the system doesn't suit you — however good its expectancy.

## Position sizing for survival: why 1% risk per trade beats a better win rate

At 30%, sizing is not a detail — it is the whole game. Fixed fractional risk (risking a fixed percentage of current capital per trade) has one property that matters here: it turns the near-certain streaks into survivable geometry. −6.79% after 7 straight losses at 1% is a bad week, not a broken account. You keep trading; the math keeps working; expectancy gets its 100+ trades to show up.

Compare that to the 80%-win-rate trader at 5% risk who just met *their* normal streak: a few big losers at 5% each compound into the same drawdown territory, with an edge that was already paper-thin before costs. **Sizing determines which streaks you survive; expectancy determines whether survival pays.** For a low-win-rate system, 1% is the conventional safe zone — not because 1% is magic, but because the streak table above says your worst realistic run costs you 13–14%, from which recovery is ordinary.

The full sizing framework — fixed fractional vs Kelly vs fixed rupee, and how to scale once you have 100+ validated trades — is covered in our upcoming dedicated position-sizing article (reserved for the strategy slot). For now: **protect the sequence, and the expectancy protects you back.** The streak-survival math behind this lives in [Risk of Ruin in Trading](/articles/risk-of-ruin-trading/).

## Is your 30% profitable? The realized-vs-planned risk-reward worksheet

Most traders' "3:1" is the plan. Their journal tells a different story: targets trimmed early, runners exited on nerves, stops that slip. If your realized average win is 2.1:1 instead of the planned 3:1, your breakeven verdict changes entirely (2.1 < 2.33 — unprofitable before costs; catastrophically so after).

The number on your journal, not the number in your plan. Here's the worksheet:

1. **Log your last 30 closed trades** (minimum — 100 is better; see the confidence-interval math above). Record: entry, exit, stop, target, actual P&L.
2. **Compute realized average win** (total gains ÷ number of wins) and **realized average loss** (total losses ÷ number of losses). Costs come out of both.
3. **Realized R = realized average win ÷ realized average loss.** Compare against **2.33** (textbook) — and against **~2.48–2.5** if you trade options with Indian costs, or your own cost-dragged breakeven if you scalp futures.
4. **Require 100+ trades before trusting the verdict.** Over 30 trades, a true-30% system can read anywhere from 14% to 46% — you may be "failing" because of sample size, not the strategy.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 520" role="img" aria-label="Planned versus realized risk-reward worksheet: planned 3 to 1 against realized 2.35, with textbook and cost-dragged breakeven markers" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Planned R:R vs realized R:R — the gap that decides profitability</text>
<text x="80" y="66" fill="#f2f7f4" font-size="13">Planned <tspan font-weight="700" fill="#14d991">3:1</tspan> — in your head</text>
<rect x="80" y="76" width="462.9" height="30" rx="6" fill="#14d991" fill-opacity="0.85" class="bar-grow"/>
<text x="80" y="126" fill="#f2f7f4" font-size="13">Realized <tspan font-weight="700" fill="#f2a33c">2.35</tspan> — in your journal (costs, early exits)</text>
<rect x="80" y="136" width="362.6" height="30" rx="6" fill="#f2a33c" fill-opacity="0.85" class="bar-grow"/>
<line x1="439.5" y1="46" x2="439.5" y2="196" stroke="#f2f7f4" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="439.5" y="40" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">2.33 textbook</text>
<line x1="462.7" y1="46" x2="462.7" y2="196" stroke="#ff4f65" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="462.7" y="40" text-anchor="middle" fill="#ff4f65" font-size="11" font-weight="700">~2.48 with costs</text>
<line x1="80.0" y1="176" x2="80.0" y2="182" stroke="#92a59c" stroke-width="1"/>
<text x="80.0" y="198" text-anchor="middle" fill="#92a59c" font-size="11">0</text>
<line x1="234.3" y1="176" x2="234.3" y2="182" stroke="#92a59c" stroke-width="1"/>
<text x="234.3" y="198" text-anchor="middle" fill="#92a59c" font-size="11">1</text>
<line x1="388.6" y1="176" x2="388.6" y2="182" stroke="#92a59c" stroke-width="1"/>
<text x="388.6" y="198" text-anchor="middle" fill="#92a59c" font-size="11">2</text>
<line x1="542.9" y1="176" x2="542.9" y2="182" stroke="#92a59c" stroke-width="1"/>
<text x="542.9" y="198" text-anchor="middle" fill="#92a59c" font-size="11">3</text>
<rect x="60" y="214" width="560" height="58" rx="10" fill="#2a3a32" stroke="#3f6f5f" stroke-width="1"/>
<text x="340" y="240" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Verdict: 2.35 clears the textbook breakeven — but misses the cost-dragged one.</text>
<text x="340" y="260" text-anchor="middle" fill="#92a59c" font-size="12">The plan was profitable; the execution wasn&#8217;t. Unprofitable in practice.</text>
<text x="60" y="306" fill="#92a59c" font-size="12.5"><tspan fill="#14d991" font-weight="700">1</tspan>. Log your last 30 closed trades (100 is better): entry, exit, stop, target, actual P&L.</text>
<text x="60" y="336" fill="#92a59c" font-size="12.5"><tspan fill="#14d991" font-weight="700">2</tspan>. Compute realized average win ÷ realized average loss — costs come out of both.</text>
<text x="60" y="366" fill="#92a59c" font-size="12.5"><tspan fill="#14d991" font-weight="700">3</tspan>. Compare realized R against 2.33 — and ~2.48 if you trade options with Indian costs.</text>
<text x="60" y="396" fill="#92a59c" font-size="12.5"><tspan fill="#14d991" font-weight="700">4</tspan>. Require 100+ trades before trusting the verdict — below that, you&#8217;re reading noise.</text>
<text x="340" y="448" text-anchor="middle" fill="#92a59c" font-size="12">The number on your journal, not the number in your plan.</text>
</svg>
<figcaption>The plan says 3:1; the journal says 2.35. Against the textbook breakeven (2.33) it scrapes through — against the cost-dragged breakeven (~2.48) it fails. Log the realized number, not the planned one.</figcaption>
</figure>

**Example.** You log 40 trades: 12 wins, 28 losses — a real 30%. Planned R:R was 3:1. Realized: average win ₹5,400, average loss ₹2,300 (costs included) → realized R:R = 2.35. Breakeven textbook: 2.33. After Indian options costs: ~2.48. Verdict: **unprofitable in practice** — the plan was profitable, the execution wasn't. The fix isn't a new strategy; it's closing the planned-vs-realized gap.

## The proof this has worked before — and why 90% win rates can be worse

The Turtle Traders — the original 1980s trend-following program — remain the cleanest real-world existence proof that low win rates with asymmetric payoffs are a viable professional design (their 35–40% win rates and 3:1–4:1 payoff targets are quoted earlier in this article). (Secondary sources quote various dollar totals and annual-return figures; those numbers vary too much across sources to state precisely — the verified, usable facts are the win-rate and payoff-ratio stats.)

And the flip side, computed earlier: an 80%-win-rate system with 0.3:1 payoffs earns **+0.04R per trade** before costs — positive, yes, but so thin that brokerage and STT erase it. At 0.25:1 it is exactly breakeven. Those are the "high win rate" systems that look safe in marketing copy and read like a tax receipt in the ledger. **This is not an argument that 80% systems are scams — it is an argument that win rate without the payoff half of the equation is a half-truth.** The full comparison lives in [Win Rate vs Risk-Reward](/articles/win-rate-vs-risk-reward/).

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Illustrative 100-trade equity walk comparing a 30 percent win rate 1 to 3 system ending at plus 20 R against an 80 percent win rate 0.3 to 1 system ending at plus 4 R" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">100 trades, same starting capital: two different systems</text>
<line x1="48" y1="334.6" x2="632" y2="334.6" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="338.6" text-anchor="end" fill="#92a59c" font-size="10.5">-4R</text>
<line x1="48" y1="299.8" x2="632" y2="299.8" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="303.8" text-anchor="end" fill="#92a59c" font-size="10.5">+0R</text>
<line x1="48" y1="264.9" x2="632" y2="264.9" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="268.9" text-anchor="end" fill="#92a59c" font-size="10.5">+4R</text>
<line x1="48" y1="230.1" x2="632" y2="230.1" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="234.1" text-anchor="end" fill="#92a59c" font-size="10.5">+8R</text>
<line x1="48" y1="195.3" x2="632" y2="195.3" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="199.3" text-anchor="end" fill="#92a59c" font-size="10.5">+12R</text>
<line x1="48" y1="160.5" x2="632" y2="160.5" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="164.5" text-anchor="end" fill="#92a59c" font-size="10.5">+16R</text>
<line x1="48" y1="125.6" x2="632" y2="125.6" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="129.6" text-anchor="end" fill="#92a59c" font-size="10.5">+20R</text>
<line x1="48" y1="90.8" x2="632" y2="90.8" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="94.8" text-anchor="end" fill="#92a59c" font-size="10.5">+24R</text>
<line x1="48" y1="56.0" x2="632" y2="56.0" stroke="#92a59c" stroke-width="0.5" stroke-opacity="0.35"/>
<text x="42" y="60.0" text-anchor="end" fill="#92a59c" font-size="10.5">+28R</text>
<text x="48" y="372" text-anchor="middle" fill="#92a59c" font-size="11">1</text>
<text x="194" y="372" text-anchor="middle" fill="#92a59c" font-size="11">25</text>
<text x="340" y="372" text-anchor="middle" fill="#92a59c" font-size="11">50</text>
<text x="486" y="372" text-anchor="middle" fill="#92a59c" font-size="11">75</text>
<text x="632" y="372" text-anchor="middle" fill="#92a59c" font-size="11">100</text>
<text x="340" y="398" text-anchor="middle" fill="#92a59c" font-size="11">trades</text>
<polyline points="48.0,299.8 53.8,273.6 59.7,282.4 65.5,291.1 71.4,299.8 77.2,273.6 83.0,282.4 88.9,256.2 94.7,230.1 100.6,204.0 106.4,177.9 112.2,151.8 118.1,125.6 123.9,134.4 129.8,108.2 135.6,116.9 141.4,90.8 147.3,99.5 153.1,108.2 159.0,82.1 164.8,90.8 170.6,99.5 176.5,108.2 182.3,116.9 188.2,125.6 194.0,134.4 199.8,108.2 205.7,116.9 211.5,125.6 217.4,99.5 223.2,108.2 229.0,116.9 234.9,125.6 240.7,134.4 246.6,143.1 252.4,151.8 258.2,125.6 264.1,134.4 269.9,108.2 275.8,116.9 281.6,125.6 287.4,99.5 293.3,108.2 299.1,116.9 305.0,125.6 310.8,134.4 316.6,143.1 322.5,151.8 328.3,160.5 334.2,169.2 340.0,143.1 345.8,151.8 351.7,125.6 357.5,134.4 363.4,143.1 369.2,151.8 375.0,160.5 380.9,134.4 386.7,143.1 392.6,151.8 398.4,125.6 404.2,134.4 410.1,143.1 415.9,151.8 421.8,160.5 427.6,134.4 433.4,143.1 439.3,116.9 445.1,125.6 451.0,134.4 456.8,143.1 462.6,151.8 468.5,160.5 474.3,169.2 480.2,177.9 486.0,151.8 491.8,160.5 497.7,169.2 503.5,177.9 509.4,186.6 515.2,195.3 521.0,204.0 526.9,212.7 532.7,221.4 538.6,230.1 544.4,238.8 550.2,212.7 556.1,221.4 561.9,195.3 567.8,204.0 573.6,177.9 579.4,186.6 585.3,195.3 591.1,204.0 597.0,212.7 602.8,221.4 608.6,195.3 614.5,204.0 620.3,177.9 626.2,151.8 632.0,125.6" fill="none" stroke="#14d991" stroke-width="2.5" stroke-linejoin="round"/>
<polyline points="48.0,299.8 53.8,297.2 59.7,294.5 65.5,291.9 71.4,289.3 77.2,286.7 83.0,284.1 88.9,281.5 94.7,278.9 100.6,287.6 106.4,285.0 112.2,282.4 118.1,279.7 123.9,277.1 129.8,285.8 135.6,294.5 141.4,291.9 147.3,289.3 153.1,286.7 159.0,284.1 164.8,292.8 170.6,290.2 176.5,287.6 182.3,285.0 188.2,282.4 194.0,279.7 199.8,277.1 205.7,285.8 211.5,294.5 217.4,303.2 223.2,312.0 229.0,309.3 234.9,306.7 240.7,304.1 246.6,301.5 252.4,298.9 258.2,296.3 264.1,293.7 269.9,302.4 275.8,299.8 281.6,297.2 287.4,294.5 293.3,291.9 299.1,289.3 305.0,286.7 310.8,295.4 316.6,292.8 322.5,301.5 328.3,298.9 334.2,307.6 340.0,305.0 345.8,313.7 351.7,311.1 357.5,308.5 363.4,317.2 369.2,314.6 375.0,312.0 380.9,309.3 386.7,306.7 392.6,304.1 398.4,301.5 404.2,310.2 410.1,307.6 415.9,305.0 421.8,302.4 427.6,311.1 433.4,308.5 439.3,305.9 445.1,303.2 451.0,300.6 456.8,298.0 462.6,295.4 468.5,292.8 474.3,290.2 480.2,287.6 486.0,285.0 491.8,293.7 497.7,291.1 503.5,288.4 509.4,285.8 515.2,283.2 521.0,291.9 526.9,289.3 532.7,286.7 538.6,295.4 544.4,292.8 550.2,290.2 556.1,287.6 561.9,296.3 567.8,293.7 573.6,291.1 579.4,288.4 585.3,285.8 591.1,283.2 597.0,280.6 602.8,278.0 608.6,275.4 614.5,272.8 620.3,270.2 626.2,267.6 632.0,264.9" fill="none" stroke="#f2a33c" stroke-width="2.5" stroke-linejoin="round"/>
<line x1="60" y1="76" x2="92" y2="76" stroke="#14d991" stroke-width="3"/>
<text x="100" y="80" fill="#f2f7f4" font-size="12.5">30% WR × 1:3 → <tspan font-weight="700" fill="#14d991">+20R</tspan></text>
<line x1="60" y1="98" x2="92" y2="98" stroke="#f2a33c" stroke-width="3"/>
<text x="100" y="102" fill="#f2f7f4" font-size="12.5">80% WR × 0.3:1 → <tspan font-weight="700" fill="#f2a33c">+4R</tspan></text>
<circle cx="328.3" cy="160.5" r="4.5" fill="#7fb89b"/>
<line x1="328.3" y1="156" x2="328.3" y2="140" stroke="#7fb89b" stroke-width="1"/>
<text x="328.3" y="132" text-anchor="middle" fill="#7fb89b" font-size="11.5">7-loss run here</text>
<circle cx="518" cy="195.3" r="4.5" fill="#f2a33c"/>
<line x1="518" y1="204.5" x2="518" y2="222" stroke="#f2a33c" stroke-width="1"/>
<text x="518" y="238" text-anchor="middle" fill="#f2a33c" font-size="11.5">expected worst run: ~10–11 losses</text>
</svg>
<figcaption>Same starting capital, 100 trades. The 30%-win-rate system with 3:1 payoffs climbs to +20R through long dips; the 80%-win-rate system with 0.3:1 payoffs inches to +4R.</figcaption>
</figure>

## Who this style suits — and who should avoid it

Is a 30% win rate good in trading? It depends on what the payoffs look like — good for trend-following and other asymmetric strategies, poor for tight-stop futures scalping where Indian transaction costs dominate. Be honest with yourself, because the math won't flatter you:

**This style suits you if:** you are patient enough to judge a system over 100+ trades; you can watch 7 consecutive losses and execute trade 8 identically; you have enough capital that a 15–20% drawdown doesn't change your life; your income doesn't depend on this month's P&L. Trend-following temperaments live here comfortably.

**Avoid it if:** you check P&L between trades; you size up to "recover" after losses; you need frequent validation to keep executing; a 70% loss rate would push you toward revenge trading or system-hopping every month. There is no shame in this — it is most people. Higher-win-rate, lower-payoff styles (scalping tight ranges, high-probability premium selling with defined risk) have their own cost and risk profiles, but they don't ask you to bleed 17 times in a row. Pick the edge your psychology can actually survive, because an edge you abandon mid-drawdown is indistinguishable from no edge at all.

## Risks and limitations: what the math does not promise

The math is honest; the market is not required to cooperate. Every figure in this article is an **expectancy statement over 100+ trades**, assuming constant win rate and constant average win/loss. It is not a promise about your next month.

- **Capital loss:** you can lose everything you trade with. The streaks above are the *normal* weather — 10–15 consecutive losses on a working system, worse over longer runs.
- **Leverage:** futures margin multiplies both the +20R and the −30% drawdowns. Option buyers face **premium decay to zero** — time is a cost no formula can bargain with.
- **Expiry risk:** ITM options held into expiry attract **0.15% STT on intrinsic value** (e.g. ₹15 on ₹10,000 of intrinsic, post-Budget-2026); OTM options **expire worthless**.
- **No strategy is guaranteed profitable.** Expectancy is a statistical property, not a contract. Markets change; edges decay; your realized R:R drifts from your plan.

## Frequently Asked Questions

### What risk-reward ratio do I need with a 30% win rate?

**2.33:1 to break even before costs**, from the formula (1 − win rate) ÷ win rate. With Indian options costs (brokerage, 0.15% STT on sell-side premium, GST), the effective breakeven rises to about **2.48:1** — and in futures scalping with tight stops, STT on full notional pushes it dramatically higher. In practice, trade only 3:1+ systems at 30%, and verify your *realized* R:R against the cost-dragged breakeven, not the textbook one. The full minimum-R:R table is in [Break-Even Win Rate](/articles/break-even-win-rate/).

### How many losses in a row is normal with a 30% win rate?

A 7-loss run has a **75.8% chance of occurring within any 50 trades** — roughly three in four — and 94.9% within 100. It is not a sign of failure; it is the base case. Expect an 8-loss run **over 100 trades** (85.8% chance), a 10-loss run within 100 trades to be better-than-even (58.0%), and your worst run over 500 trades to be around **15 losses in a row**. If you cannot survive an 8-loss streak emotionally and financially, the system is untradable for you regardless of its expectancy.

### Why am I still losing with a 30% win rate and a 3:1 risk-reward?

Three usual suspects, in order of likelihood: **(1) your realized R:R is below your planned 3:1** — targets cut early, stops slipping, costs unaccounted (run the worksheet above); **(2) Indian costs drag your effective breakeven up** — a "3:1" is really ~2.8:1 after costs on options, worse on small-stop futures; **(3) you haven't traded enough** — under 100 trades, variance dominates, and a true-30% system can read as 14–46%. Fix the measurement before you fix the strategy.

### Can you be profitable with a 20% win rate?

Yes, with payoffs above **4:1**. At exactly 20% and 5:1, expectancy is 0.2 × 5 − 0.8 × 1 = **+0.2R per trade** (profitable — the textbook breakeven at 20% is 4:1), so 5:1 or better at 20% is profitable. This is precisely why Paul Tudor Jones uses a 5:1 filter (per his Tony Robbins interview): it lets a 20% hit ratio make money. The same survival math applies — at 20%, the streaks are even longer, so position sizing matters even more.

---

*Cost figures in this article were computed from the standard discount-broker charge stack as published 2026-10-07, on NIFTY lot size 65 (NSE revision effective Oct 28, 2025), with Budget-2026 STT rates (options sell 0.15% of premium, futures sell 0.05% of notional, exercised ITM 0.15% of intrinsic). Charges change over time — verify against your broker's current schedule before applying them. Nothing here is investment advice; all trading involves risk of capital loss.*

---

*Kaizen writes about the mathematics of trading at Monks Of Market — expectancy, risk, and the unglamorous arithmetic behind surviving markets.*

**Educational disclaimer:** This article is for educational purposes only and is not financial advice, investment advice, or a recommendation to trade any instrument. Trading — especially leveraged F&O — carries substantial risk of loss, including losses exceeding your margin. SEBI's FY26 study found ~87.7% of individual Indian F&O traders were net loss-makers. Past or hypothetical performance never guarantees future results. Consult a SEBI-registered investment adviser before making trading decisions.

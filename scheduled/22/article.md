---
title: "R-Multiples: How Professionals Measure Expectancy"
description: "Learn R-multiples in trading: define 1R from your initial stop, score every trade in R, and turn your journal into expectancy, SQN and break-even win rate."
meta_description: "Learn R-multiples in trading: define 1R from your initial stop, score every trade in R, and turn your journal into expectancy, SQN and break-even win rate."
date: 2026-11-04
author: Kaizen
tag: "Trading mathematics · Strategy validation"
keywords: ["R multiples trading", "R-multiple expectancy", "what is 1R trading", "SQN system quality number", "break-even win rate", "trading journal R", "expectancy in R", "risk-reward vs R-multiple"]
---

*By Kaizen · 4 November 2026 · Monks Of Market*

Two traders can both say they "made ₹10,000 last month" and be describing completely different levels of skill. One risked ₹5,000 per trade to make it. The other risked ₹50,000. The rupee figure alone cannot tell them apart — and a percentage return cannot either, because it depends on account size rather than on how each trade was actually managed.

One standard professional method is to score every trade against the risk planned for it. That unit is called **R**. This article teaches the whole measurement system: how to define 1R, how to score every trade in R, how to turn a journal of R-scored trades into expectancy, a consistency measure called SQN, and a break-even win rate — and, just as importantly, the five ways R measurement can mislead you if you use it carelessly.

This article assumes you already know what expectancy means in broad terms. It does not re-teach the concept from scratch; instead it gives you the ruler at the heart of the professional R-multiple framework. The companion article "What Is Trading Expectancy?" covers the concept itself, and the planned article "How to Calculate Real Expectancy" covers expectancy calculation in general — both are mentioned here in plain text only.

One warning up front, because it runs through everything below: **R is a ruler, not a verdict.** A good R number on a small, cherry-picked sample proves nothing. The honesty of the measurement matters more than the size of the number.

## The short answer: score every trade against the risk you planned, then average it

Here is the system in four steps:

1. **Before you enter a trade, fix your initial stop.** The distance from your entry to that stop, multiplied by your position size, is the amount you plan to lose if you are stopped out. That amount is **1R**.
2. **After the trade closes, score it as a multiple of 1R.** Divide the trade's profit or loss — net of costs — by your initial risk. A win of twice your planned risk is +2R. A stopped-out trade is −1R.
3. **Average those multiples over your trades.** That average is your **expectancy in R**: the average R you make (or lose) per trade.
4. **Read the whole distribution, not just the average.** The spread of your R values, your biggest win, your worst loss, and how many trades went beyond −1R tell you things the average alone never will.

That is the entire system. The rest of this article works through each step with real numbers, so you can apply it to your own journal tonight.

## What is 1R? Your risk unit, fixed before entry

**1R is the amount you plan to lose if your trade is stopped out.** It is defined before entry, from your entry price and your initial stop:

> **1R = |entry price − initial stop price| × position size**

The vertical bars mean absolute value: 1R is the *distance* between entry and stop, always a positive amount, whichever direction you trade. Suppose you buy 100 shares at ₹500 with an initial stop at ₹450. The distance to the stop is ₹50 per share, and with 100 shares your planned loss is ₹50 × 100 = ₹5,000. So 1R = ₹5,000 for that trade.

For a short trade the stop sits above the entry, so the same distance reads as:

> **1R = (initial stop price − entry price) × position size**

For example, short 100 shares at ₹500 with an initial stop at ₹550: (₹550 − ₹500) × 100 = ₹50 × 100 = ₹5,000, so 1R = ₹5,000 for that trade too. Written without the absolute value, the long formula would give a short seller a negative 1R — which is why the distance form above is the definition to use.

Two points about this definition matter more than the arithmetic:

- **The stop used is the initial stop.** If you later move the stop, 1R does not change. A moved stop shows up in the trade's realised multiple instead — which is exactly what you want, because moving a stop wider than planned is a behaviour worth seeing in your numbers, not hiding by redefining the unit.
- **1R is personal to each trade.** A ₹5,000-risk trade and a ₹50,000-risk trade both have their own 1R. That is the point: R puts trades of different sizes on one common scale, so a small trade and a large trade can be compared honestly.

### No stop, no R

A trade with no defined initial stop has no defined 1R, and therefore cannot be scored in this system. That is not a technicality — it is the system's way of forcing discipline. If you cannot say, before entry, how much you plan to lose, you cannot measure what happened afterwards in any meaningful unit. Traders who trade without stops are not measuring performance; they are collecting outcomes.

## How to calculate an R-multiple

Once a trade closes, the calculation is one division:

> **R-multiple = trade P&L (net of costs) ÷ initial risk (1R)**

The P&L must already be net of costs — spread and commission included. If you score a trade on its pre-cost profit and then subtract costs again later, you have double-counted. Every worked example in this article uses P&L net of costs; that cost basis is stated here so there is no ambiguity.

Here is the worked ladder at ₹5,000 of initial risk (1R = ₹5,000):

| Outcome | P&L (net of costs) | Calculation | R-multiple |
|---|---|---|---|
| Win twice the planned risk | +₹10,000 | ₹10,000 ÷ ₹5,000 | **+2R** |
| Win half the planned risk | +₹2,500 | ₹2,500 ÷ ₹5,000 | **+0.5R** |
| Stopped out as planned | −₹5,000 | −₹5,000 ÷ ₹5,000 | **−1R** |
| Loss after moving the stop wider | −₹7,500 | −₹7,500 ÷ ₹5,000 | **−1.5R** |
| Breakeven close | ₹0 | ₹0 ÷ ₹5,000 | **0R** |

The −1.5R row deserves a pause. A loss bigger than −1R means the trade lost more than was planned — in this case because the stop was moved wider after entry. That number is a confession, not just a result. A journal full of −1.5R and −2R trades is not telling you the system is unlucky; it is telling you the stops are not being respected.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="R ladder at 5,000 rupees of initial risk: minus 1.5R is minus 7,500 rupees, minus 1R is minus 5,000 rupees, 0R is zero, plus 0.5R is plus 2,500 rupees, and plus 2R is plus 10,000 rupees." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The R ladder — one risk unit, every outcome scored</text>
<text x="340" y="66" text-anchor="middle" fill="#92a59c" font-size="12">1R = ₹5,000 of planned risk · P&amp;L net of costs</text>
<text x="40" y="116" fill="#f2f7f4" font-size="13" font-weight="700">−1.5R — stop moved wider</text>
<text x="470" y="116" fill="#e8825a" font-size="13" font-weight="700">−₹7,500</text>
<text x="40" y="152" fill="#f2f7f4" font-size="13" font-weight="700">−1R — stopped out as planned</text>
<text x="470" y="152" fill="#f2f7f4" font-size="13" font-weight="700">−₹5,000</text>
<text x="40" y="188" fill="#f2f7f4" font-size="13" font-weight="700">0R — breakeven close</text>
<text x="470" y="188" fill="#f2f7f4" font-size="13" font-weight="700">₹0</text>
<text x="40" y="224" fill="#f2f7f4" font-size="13" font-weight="700">+0.5R — half the planned risk</text>
<text x="470" y="224" fill="#8fd6a0" font-size="13" font-weight="700">+₹2,500</text>
<text x="40" y="260" fill="#f2f7f4" font-size="13" font-weight="700">+2R — twice the planned risk</text>
<text x="470" y="260" fill="#8fd6a0" font-size="13" font-weight="700">+₹10,000</text>
</svg>
</figure>

## R-multiple vs risk-reward ratio: the plan is not the result

This is the confusion that trips up more journals than any other, so let's settle it plainly.

- **Risk-reward ratio (1:2, 1:3) is the PLAN.** It is set before entry: the distance to your target divided by the distance to your stop. It describes what you hope will happen.
- **R-multiple is the RESULT.** It is measured after the trade closes: what actually happened, scored against the initial risk. It describes what did happen.

A trade planned at 1:3 that you exit early at +1.4R is a **+1.4R trade**, not a +3R trade. The plan does not get scored; the outcome does.

Here is the one-line test for your own journal: **if your journal records the target instead of the outcome, you are grading intentions, not results.** Check a few recent entries. If the "R" column shows the planned ratio rather than the realised multiple, your expectancy — if you have computed one — is measuring your intentions, and it will flatter you every time.

## Expectancy in R: the average R per trade

Expectancy in R is simply the average R-multiple across your trades. There are two equivalent ways to compute it, and this article shows both on the same set of 10 trades so you can check that they agree.

Here is the worked set — 10 trades, each already scored in R, with P&L net of costs:

| Trade | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| R-multiple | −1 | −1 | +3 | +2 | −1 | +2 | −1 | +3 | −1 | +0.5 |

### Method 1: sum of R-multiples ÷ number of trades

Add the multiples: −1 − 1 + 3 + 2 − 1 + 2 − 1 + 3 − 1 + 0.5 = **+5.5R** in total.

Divide by 10 trades: 5.5 ÷ 10 = **+0.55R per trade**.

### Method 2: (win rate × average win) − (loss rate × average loss)

Count the wins and losses. There are 5 wins (+3, +2, +2, +3, +0.5) and 5 losses (all −1).

- Win rate = 5 ÷ 10 = 50%, or 0.5. Average win = (3 + 2 + 2 + 3 + 0.5) ÷ 5 = 10.5 ÷ 5 = **+2.1R**.
- Loss rate = 5 ÷ 10 = 50%, or 0.5. Average loss = **1R** (every loss is exactly −1R here).

Expectancy = (0.5 × 2.1) − (0.5 × 1) = 1.05 − 0.50 = **+0.55R per trade**.

Both methods give +0.55R. They must — they are the same calculation written two ways. If your two methods ever disagree on your own journal, you have made an arithmetic error, and finding it is worth more than the answer.

What does +0.55R mean in plain language? On average, each trade in this 10-trade sample returned a little over half the amount risked on it. It is not a promise, a typical outcome, or a projection — it is a description of these 10 trades, with P&L net of costs, and nothing more.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="The same 10 trades in rupees and in R: rupee bars run from minus 5,000 to plus 15,000 rupees while R bars run from minus 1R to plus 3R, with expectancy plus 0.55R by both methods. The rupee chart changes if risk per trade changes; the R chart stays comparable." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same 10 trades — rupees move with size, R does not</text>
<text x="40" y="76" fill="#f2f7f4" font-size="13" font-weight="700">In rupees (₹5,000 risk each)</text>
<text x="470" y="76" fill="#f2f7f4" font-size="13" font-weight="700">−₹5,000 to +₹15,000</text>
<text x="40" y="116" fill="#f2f7f4" font-size="13" font-weight="700">In R (same trades)</text>
<text x="470" y="116" fill="#8fd6a0" font-size="13" font-weight="700">−1R to +3R</text>
<text x="40" y="164" fill="#f2f7f4" font-size="13" font-weight="700">Expectancy, both methods</text>
<text x="470" y="164" fill="#8fd6a0" font-size="13" font-weight="700">+0.55R per trade</text>
<rect x="40" y="200" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="232" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Double the risk per trade and the rupee chart doubles — the R chart stays put</text>
<text x="340" y="282" text-anchor="middle" fill="#92a59c" font-size="11">That is why R, not rupees, is the comparable unit across trade sizes.</text>
</svg>
</figure>

### The win-rate trap: winning most of the time and still losing

Win rate alone says nothing about whether a system makes money. Two worked contrasts prove it.

**Trap case — 70% wins, still losing.** A trader wins 70% of the time with an average win of +0.3R, but loses 30% of the time with an average loss of −1.5R:

> Expectancy = (0.70 × 0.3) − (0.30 × 1.5) = 0.21 − 0.45 = **−0.24R per trade**

This system wins most of the time and loses money on average. The small wins never cover the large losses. A trader who only watches win rate would call this system good. The R distribution says it is not.

**Mirror case — 30% wins, still profitable.** A trader wins only 30% of the time, but with an average win of +3R, while losing 70% of the time at −1R:

> Expectancy = (0.30 × 3) − (0.70 × 1) = 0.90 − 0.70 = **+0.20R per trade**

This system loses most of the time and makes money on average. It feels worse to trade — seven losses out of ten — but the R distribution says it works, at least on this sample.

The lesson is not that low win rates are better. It is that win rate without the size of wins and losses is an incomplete sentence. Expectancy in R is the complete one.

## Break-even win rate from R

If every loss is −1R and every win is +R, how often must you win just to break even? Set expectancy to zero and solve:

> **Break-even win rate = 1 ÷ (1 + R)**

| Planned win (R) | Break-even win rate | Formula |
|---|---|---|
| 1:1 (win +1R) | 50% | 1 ÷ 2 |
| 1:2 (win +2R) | 33.3% | 1 ÷ 3 |
| 1:3 (win +3R) | 25% | 1 ÷ 4 |
| 1:4 (win +4R) | 20% | 1 ÷ 5 |

Read the table with care. A 1:2 system does not need to win half the time — it needs to win one time in three, if every win really is +2R and every loss really is −1R. That "if" is doing a lot of work: real trades exit early, slip, and cost money.

And this table is **before costs**. Spread and commission shrink every win and fatten every loss, so every break-even point in the table rises once costs are included. A system that sits exactly on its pre-cost break-even line is already losing after costs. Treat the table as a floor, not a target.

### The general form: break-even win rate for real journals

The table above only covers the tidy case where every win is exactly +R and every loss exactly −1R. Real journals have varying wins and losses, so use the general form:

> **Break-even win rate = average loss ÷ (average win + average loss)**

where both averages are in R and the average loss is taken as a positive number. Worked example from the article's own 10-trade set: average win +2.1R, average loss 1R, so the break-even win rate is 1 ÷ (2.1 + 1) = 1 ÷ 3.1 ≈ **32.3%**.

The set's actual win rate is 50%, comfortably above that break-even line — which is consistent with its positive +0.55R expectancy. If your win rate sits below your general break-even rate, your expectancy is negative, however good the win rate feels on its own.

## What else the R distribution gives you

Once your trades are scored in R, the same distribution yields more than expectancy. Three uses:

### SQN: a consistency measure, not a grade

The System Quality Number, from Van Tharp's work, combines the average R, the variability of R, and the number of trades into one number:

> **SQN = (mean R × √N) ÷ standard deviation of R**

where N is the number of trades and the standard deviation measures how spread out the R values are.

One convention, stated so you can replicate SQN from your own journal: this article uses the **population standard deviation** of the R-multiples list — the list is the complete set of trades being measured, not a sample drawn from a larger set. In a spreadsheet, list your R-multiples in one column, then compute the mean with AVERAGE over that column and the standard deviation with **STDEV.P** over the same column, and plug both into the formula above. Using the sample standard deviation (STDEV.S) instead would give a different SQN, so do not mix the two.

Worked example: 40 trades, mean +0.8R, standard deviation 1.5R.

> SQN = √40 × (0.8 ÷ 1.5) = 6.3246 × 0.5333 ≈ **3.37**

What does 3.37 mean? Read SQN as a consistency measure: it rises when the average R is high relative to its variability, and it rises mechanically with sample size — a larger N inflates SQN even if the mean and variability stay the same. So SQN must always be read alongside its sample size, and it is not a verdict on its own.

One caution: commonly cited SQN benchmark bands exist in secondary sources, but those sources conflict on the exact boundaries, and no primary Van Tharp source confirming one set of bands was found in the research for this article. This article therefore does not present any band as a verified Tharp scale.

Treat any SQN band you see quoted elsewhere as approximate, commonly cited guidance — not as a firm grade — and judge a system by its expectancy, its distribution, and its sample size first.

### Reading the distribution: the biggest win, the worst loss, and trades beyond −1R

Three diagnostics, each a one-line check on your journal:

- **The biggest win.** Recompute expectancy without your single best trade, and report both numbers. For the 10-trade set above: without the best trade (+3R), the remaining 9 trades sum to 5.5 − 3 = 2.5R, giving 2.5 ÷ 9 = **+0.28R per trade**, against +0.55R with it. The set is materially outlier-dependent — removing one trade out of ten nearly halves the expectancy. That does not make the set worthless, but it does mean you should not trust the +0.55R figure as if it were solid. If your own expectancy collapses when one trade is removed, your system is riding one outcome, not a repeatable edge.
- **The worst loss.** Any loss beyond −1R means the trade lost more than planned. As in the ladder's −1.5R row, that usually means a stop was moved, the market gapped or slipped past it, or position size was inconsistent — not that the system was unlucky.
- **The share of trades beyond −1R.** If a large fraction of your losses exceed −1R, the problem is execution discipline, and no change to entries or targets will fix it until that is addressed.

### Where Kelly and position sizing fit — pointer only

Kelly sizing and risk-per-trade position sizing both consume the same two inputs your R distribution supplies: win rate and average win and loss in R. That is why this measurement system matters beyond journaling — it feeds the sizing decisions. This article does not re-derive either method; the position-sizing and Kelly material on this site covers them, and the point here is only that a clean R distribution is what those methods need as input. Garbage in — planned R recorded instead of realised R, costs ignored — means garbage out, however good the sizing formula is.

## Where R measurement breaks

This is the section that makes the system trustworthy, because every measurement system has failure modes and R is no exception. Five of them, each concrete.

### Varying risk per trade reverses the story

R-expectancy is only a money story when risk per trade is roughly constant. Watch what happens when it is not:

- Trade A: +2R at ₹2,500 risk = **+₹5,000**.
- Trade B: −1R at ₹10,000 risk = **−₹10,000**.
- Mean R = (+2 + −1) ÷ 2 = **+0.5R** — a positive average.
- Account result = ₹5,000 − ₹10,000 = **−₹5,000** — a loss.

The average R says the trader is winning. The account says the opposite. Neither number is lying; they are measuring different things, because the two trades risked very different amounts. The fix is plain: if your risk per trade varies a lot, convert back to rupees trade by trade before drawing conclusions about money. R is for comparing trade quality; rupees are for counting money.

### Costs must already be in the P&L — and never subtracted twice

A pre-cost expectancy is overstated. Every worked example in this article uses P&L net of costs, and that basis is stated rather than assumed. The discipline is simple: subtract costs once, when you record the trade's P&L, and never again. If you compute expectancy on gross profits and then mentally "allow for costs," you will overstate your edge by exactly the amount you forgot to subtract properly. Costs are discussed here in principle terms only — no fee figures — because the point is the accounting discipline, not any particular charge.

### Tiny samples lie: the sample-size caveat

Van Tharp's own 2005 writing on expectancy gives a widely cited minimum: thirty trades is usually considered the minimum size to begin to reflect the population — enough to *begin* estimating a system's overall performance. Treat that as guidance, not a law. Ten trades, like the worked set in this article, are enough to learn the method, not enough to judge a system.

And larger samples give a clearer picture — but the picture also depends on the market conditions during the sample. Thirty trades taken entirely in a strong trending market tell you little about how the same system behaves in a sideways market. Backtesting material on this site covers sample and market-type questions in more depth; the point here is that R numbers without a sample size attached are not evidence.

### Planned R vs realised R

A trade targeting +3R that is closed early at +1.4R contributes **+1.4R**, not +3R. It sounds obvious, and it is the most common self-deception in journaling: recording the plan instead of the outcome, then wondering why a system with a "great" expectancy does not make money. Early exits, partial profits, and trailing stops all change the realised multiple, and the realised multiple is the only one that counts. Score what happened.

### R does not measure risk of ruin or drawdown on its own

A positive expectancy in R does not tell you whether you will survive long enough to collect it. Risk of ruin and drawdown also depend on risk per trade as a fraction of your capital, the sequence of returns (losses clustered together hurt more than the same losses spread out), and correlation between positions — none of which a bare R distribution contains. R is the *input* to ruin and drawdown calculations, not a substitute for them. The risk-of-ruin material on this site covers those calculations separately; do not read a healthy expectancy as a guarantee of survival.

## Your 10-trade self-audit: run it on your journal tonight

This is the article's payoff. Take your last 10 trades — or your next 10, if your journal is not yet in shape — and run these steps:

1. **Fix 1R for each trade from its initial stop.** The absolute distance between entry and initial stop, times position size (for a short: initial stop minus entry, times position size). If a trade had no initial stop, it cannot be scored — note that honestly rather than inventing a stop after the fact.
2. **Score each trade in R.** P&L net of costs, divided by that trade's initial risk. Record the realised multiple, never the planned target.
3. **Compute expectancy both ways and check they agree.** Sum of R-multiples ÷ 10, and (win rate × average win) − (loss rate × average loss). If they disagree, find the arithmetic error before you believe either answer.
4. **Check the share of trades beyond −1R.** Any loss worse than −1R is a flag for a moved stop, slippage, or inconsistent sizing.
5. **Recompute expectancy without your single best trade.** Report both numbers side by side. If the second number is much smaller, your expectancy is outlier-dependent and you know it before the market teaches you.
6. **Compute SQN from the same R list (optional, but now doable).** List your 10 R-multiples in a spreadsheet column, take the mean with AVERAGE and the population standard deviation with STDEV.P, then SQN = (mean × √N) ÷ STDEV.P with N = 10. Read the result alongside its sample size — SQN rises mechanically with N, and no firm grade band is attached to it in this article.
7. **Read the result as a description, not a verdict.** Ten trades cannot judge a system. What they can do is show you whether your measurement is honest — and honesty is the precondition for everything else.

If you do this once, you will have a number about your own trading that you can actually trust, with its limits stated alongside it.

## Frequently asked questions

### What is an R multiple in trading?

An R multiple is a single trade's profit or loss scored as a multiple of the risk you planned to take on that trade. If you risked ₹5,000 and made ₹10,000, that trade is +2R. If you were stopped out for your planned ₹5,000, it is −1R. It is a way of comparing trades of different sizes on one scale.

### How do you calculate an R multiple?

Divide the trade's profit or loss (net of costs) by its initial risk: R-multiple = trade P&L ÷ 1R, where 1R = |entry − initial stop| × position size (for a short: initial stop − entry, times position size). At ₹5,000 risk: +₹10,000 is +2R, +₹2,500 is +0.5R, −₹5,000 is −1R, and a breakeven close is 0R.

### What does 2R mean in trading?

A win of twice the amount you planned to risk. If 1R was ₹5,000, a +2R trade made ₹10,000 net of costs. It says nothing on its own about how good the system is — one +2R trade among many −1R losses can still be a losing system, which is why expectancy averages all trades rather than celebrating one.

### What is a good R multiple — or a good expectancy per trade?

There is no honest single number to aim at, and this article claims none. The direction that matters is positive expectancy in R, read together with sample size, costs already subtracted, and outlier dependence. A +0.55R expectancy on 10 trades is a description of those 10 trades, not a benchmark; a +0.20R expectancy on a large, honestly scored sample with costs included is worth more than a +1R figure on a tiny or cherry-picked one. Beware any source that hands you a "good expectancy" target without mentioning sample size and costs.

### How is R different from risk-reward ratio?

Risk-reward ratio is the plan, set before entry: the distance to your target versus the distance to your stop. R-multiple is the result, measured after the trade closes: what actually happened, scored against initial risk. A 1:3 plan exited at +1.4R is a +1.4R trade. If your journal records the target instead of the outcome, you are grading intentions, not results.

### How many trades do you need to calculate expectancy?

You can calculate an average on any number of trades, but a small average is not reliable evidence. Van Tharp's 2005 guidance, cited in the research for this article, is that thirty trades is usually considered the minimum to begin to reflect the population and begin estimating a system's performance. Treat that as guidance, not a law: larger samples give a clearer picture, and the market conditions during the sample matter too.

### What is SQN, and what is a good SQN score?

SQN (System Quality Number, from Van Tharp's work) is SQN = (mean R × √N) ÷ standard deviation of R, where N is the number of trades and the standard deviation is the population standard deviation of the R-multiples list (STDEV.P in a spreadsheet). It is a consistency measure: it rises when average R is high relative to its variability, but it also rises mechanically with sample size, so it must be read alongside N. Worked example: 40 trades, mean +0.8R, standard deviation 1.5R gives √40 × (0.8 ÷ 1.5) ≈ 3.37.

This article deliberately gives no "good SQN" band as a verified scale, because secondary sources conflict on the boundaries and no primary source confirming one set of bands was found; treat any quoted SQN band as approximate, commonly cited guidance, not a firm grade.

### Can you have a high win rate and still lose money?

Yes. A system winning 70% of the time with +0.3R average wins and −1.5R average losses has expectancy (0.70 × 0.3) − (0.30 × 1.5) = 0.21 − 0.45 = −0.24R per trade — it wins most of the time and loses money. Win rate without win and loss sizes is an incomplete sentence.

### How do professional traders measure performance?

One professional method is the R-multiple method: one unit across trades of different sizes. Define 1R from the initial stop, score every trade as a realised multiple, average those multiples into expectancy, read the distribution for outliers and beyond-−1R losses, and then — separately — run ruin and drawdown calculations that the R distribution alone cannot supply. The unit is simple; the discipline of using it honestly is the professional part.

## Conclusion: R is a ruler, not a verdict

R-multiples give you something most trading numbers do not: a single unit that lets you compare a ₹5,000-risk trade with a ₹50,000-risk trade, average them honestly, and see whether the average survives contact with costs, sample size, and your own best trade removed. That is a powerful ruler. It is still only a ruler. It does not measure ruin, it does not survive dishonest journaling, and it does not turn ten trades into a verdict on a system.

Score honestly — realised multiples, costs already in, initial stops fixed before entry — read the whole distribution rather than just the average or the win rate, and let the numbers, not your hopes, judge the system. And remember the standing warning for every figure in this article: past or sample expectancy does not guarantee future results. No worked example here is a typical outcome, a projection, or a promise of profit.

---

*Risk note: Trading involves risk of loss. All worked examples in this article use illustrative figures with profit and loss stated net of costs; they describe their own samples only and are not projections, typical outcomes, or guarantees of future results.*

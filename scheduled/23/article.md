---
title: "Net Expectancy: Your Edge After Everything"
description: "Open your broker statement and audit your edge line by line: rank the cost that kills it, price the monthly frequency drag, and decide what to change."
meta_description: "Open your broker statement and audit your edge line by line: rank the cost that kills it, price the monthly frequency drag, and decide what to change."
date: 2026-11-05
author: Kaizen
tag: "Trading mathematics · Strategy validation"
keywords: ["net expectancy", "net expectancy after costs", "trading costs audit", "expectancy after brokerage", "cost drag trading", "fill rate expectancy"]
---

*By Kaizen · 5 November 2026 · Monks Of Market*

# Net Expectancy: Your Edge After Everything

*By Kaizen, Monks Of Market*

This article is not another explanation of expectancy. It is a workbook for your net expectancy — your edge after every cost. Open your broker statement and your trade journal, work through them line by line, and finish with two things: the cost line that does the most damage to your edge, and a decision about what to change — the cost line, the frequency, or the system itself.

If you need the underlying method first, go to these articles first and come back: [What Is Trading Expectancy?](https://monksofmarket.com/articles/what-is-trading-expectancy/) for the concept, [How to Calculate Real Expectancy](https://monksofmarket.com/articles/how-to-calculate-real-expectancy/) for working it out from real trades, [Break-Even Win Rate](https://monksofmarket.com/articles/break-even-win-rate/) for the break-even method, and [Profit Factor](https://monksofmarket.com/articles/profit-factor/) for the related summary measure. In R terms, in one compact line: with ₹7,500 initial risk per trade, a ₹600 round-turn cost is ₹600 ÷ ₹7,500 = 0.08R, so +0.20R − 0.08R = +0.12R net. The companion piece R-Multiples: How Professionals Measure Expectancy covers R measurement in full. It is mentioned here as a plain-text pointer only, because that article is staged and not yet live, so no link is given here.

Everything that follows assumes one setup, one set of rules, and one period. If your rules changed halfway through, you have two samples, not one — split them before you start, and audit each separately.

## Step 1: Find Every Cost Line on Your Own Statement

A broker statement will not hand you a finished audit. It will hand you some lines directly and hide others inside your fill prices. Your first job is to separate the two, because you can only rank what you can see.

| Cost line | Where to find it |
|---|---|
| Brokerage / commission | Your broker statement or contract note, per trade or as a period total |
| Exchange, clearing and regulatory charges | Your broker statement or contract note, alongside brokerage |
| Taxes and statutory charges that apply to your segment | Your broker statement or contract note |
| Financing / overnight charges, where they apply | Your broker statement, if your trading incurs them — segment-dependent, never assumed for every reader |
| Spread | Not itemised on a statement — estimate it from your fills (see below) |
| Slippage | Not itemised on a statement — estimate it from your fills (see below) |

This article quotes no brokerage, exchange, tax or statutory rate, because rates change and a stale rate quoted as fact would be worse than no rate at all. Use the charges that actually applied to your trades.

**The visible lines.** Take the statement totals for brokerage, exchange, clearing, regulatory and tax charges over your audit period. Those are your visible-cost lines, exactly as charged.

**The hidden lines: spread and slippage.** Your statement will not itemise spread or slippage separately, so do not look for them there — you will conclude they cost nothing, which is exactly wrong. Estimate them from your fills instead: for each trade, compare the signal or expected price with the actual fill price on entry, and again on exit, and average the difference over the sample. That average difference is your hidden-cost line. From fills alone, this workbook ranks spread + slippage as one combined hidden line; attack it through order type, timing and liquidity. Two qualifications apply with it. Spread costs roughly the spread per round turn for market orders crossing the bid-ask. A limit-order trader does not necessarily pay the same cost, because a limit order can wait for a better price — or never fill at all. Slippage can be positive as well as negative on any single fill. It is a cost line only net over a sample. Stop exits tend to show the worst slippage in fast, low-liquidity markets, as a tendency, not a certainty.

**When charges are not flat per trade.** The worked examples below use one flat round-turn cost to keep the arithmetic transparent, but your statement probably will not. The bridge is simple: average cost per trade = total costs ÷ number of completed trades, taken from the statement, and that average goes into the adjustment. Flag it for what it is — an average, not a per-trade constant — so a reader with size-dependent charges does not mistake it for a fixed fee.

**One cost, one line.** Do not deduct a cost twice. Brokerage and charges included in broker-statement net P&L are already in the total. Slippage already reflected in the fill price is already in the result. If you start from total net P&L, the deduction work is already done — your job in this workbook is to split it into lines so you can rank them, not to deduct it a second time.

## Step 2: The One Convention This Workbook Uses

This workbook subtracts costs as their own term: **net expectancy = gross expectancy − average round-turn cost per trade.** The cost line stays visible, which is the whole point of a ranking workbook — fold the cost into the averages and you can no longer see what it cost you. For the method of working expectancy out from real trades, see [How to Calculate Real Expectancy](https://monksofmarket.com/articles/how-to-calculate-real-expectancy/).

## Step 3: Worked Diagnosis — One Setup, One Verdict

All worked figures in this article are illustrative — clean inputs chosen to make the arithmetic transparent, not typical results, not average traders, and not projections. Every figure states its cost basis.

**The setup (illustrative):** 50% win rate, average win ₹6,000, average loss ₹5,000, round-turn cost ₹1,200 per trade.

**Gross expectancy (before costs):** 0.50 × ₹6,000 − 0.50 × ₹5,000 = ₹3,000 − ₹2,500 = **+₹500 per trade**. On gross figures, this system looks profitable.

**Net expectancy (after costs, separate-term convention):** +₹500 − ₹1,200 = **−₹700 per trade**. Same trades, same win rate, opposite verdict.

Read this as a ranking demonstration. The ₹1,200 round-turn cost line is the line that drives the verdict: it is larger than the +₹500 gross edge, so the verdict flips to −₹700. In Step 5, that means following a cost-line row — the lever is the cost line itself, with the visible-charges row applying if the ₹1,200 sits on your statement and the spread-and-slippage row if it sits in your fills.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Net expectancy waterfall for one setup: gross expectancy plus 500 rupees per trade, minus 1,200 rupees round-turn cost, landing at net expectancy minus 700 rupees per trade." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">One setup, one verdict — the net-expectancy waterfall</text>
<text x="340" y="66" text-anchor="middle" fill="#92a59c" font-size="12">Gross expectancy, minus every cost line, equals the edge you actually keep</text>
<text x="40" y="118" fill="#f2f7f4" font-size="13" font-weight="700">Gross expectancy</text>
<text x="470" y="118" fill="#8fd6a0" font-size="13" font-weight="700">+₹500 / trade</text>
<text x="40" y="158" fill="#f2f7f4" font-size="13" font-weight="700">Round-turn cost</text>
<text x="470" y="158" fill="#e8825a" font-size="13" font-weight="700">−₹1,200 / trade</text>
<rect x="40" y="186" width="600" height="2" fill="#3a4a44"/>
<text x="40" y="226" fill="#f2f7f4" font-size="14" font-weight="700">Net expectancy</text>
<text x="470" y="226" fill="#e8825a" font-size="14" font-weight="700">−₹700 / trade</text>
<text x="340" y="282" text-anchor="middle" fill="#92a59c" font-size="12">A positive gross edge that is negative after costs is not an edge at all</text>
</svg>
</figure>

For the break-even method, see [Break-Even Win Rate](https://monksofmarket.com/articles/break-even-win-rate/).

## Step 4: Price the Month, Not Just the Trade

A per-trade cost looks small. The number of trades taken is the multiplier that turns it into a large number — and the audit must price the month, because the month is what the account actually pays.

| Illustrative round-turn cost | Trades taken per month | Monthly drag from per-trade costs |
|---|---|---|
| ₹600 per trade | 40 | ₹600 × 40 = ₹24,000 per month |
| ₹600 per trade | 400 | ₹600 × 400 = ₹2,40,000 per month |

Same cost, ten times the frequency, ten times the drag. This framing prices only per-trade costs charged on every trade; some charges are value- or outcome-dependent, so this is the per-trade-cost drag, not every conceivable charge. The conclusion follows directly: a high-turnover system needs a much larger gross edge to survive, and trading more of a system with a negative net expectancy does not dilute the loss — it multiplies it.

**Missed fills belong in this step, not in a footnote.** A setup that never fills costs nothing in commission but pays nothing either, and it must not silently disappear from the audit. Log it alongside the audit: over the same period, for the same setup, record setups spotted versus fills taken, and report the fill rate next to your net expectancy. For example, 50 setups spotted and 40 fills taken is a fill rate of 40 ÷ 50 = 80%. The audit's frequency is fills taken — the trades that actually paid costs and actually earned or lost money — with the missed setups reported alongside, not dropped. A low fill rate changes the diagnosis: the problem may be execution and fill discipline rather than the setup's gross edge, and you cannot tell which until you log both numbers.

## Step 5: Decide What to Change

Ranking is only useful if it ends in a decision. Find your biggest line from Step 1, then follow its row. If two lines are close, work the bigger one first — small savings on a small line never rescue an edge killed by a large one.

| Your biggest line | What that tells you | The lever to change |
|---|---|---|
| Visible charges (brokerage, exchange, clearing, regulatory, tax) | The statement charges are eating the edge | The cost line itself — changeable charges (broker plan, segment choice) can be reviewed and switched; non-changeable charges (exchange, regulatory, tax) cannot be negotiated, so if they dominate, the lever shifts to frequency or the system |
| Spread and slippage (the hidden lines) | Your fills, not your statement charges, are eating the edge | The cost line itself — order type, timing and liquidity matter here, since market orders crossing the spread and stop exits in fast markets are where these lines grow |
| Frequency drag (the monthly total from Step 4) | No single trade is expensive; the sheer number of trades is | The frequency — fewer trades of a thin system, or a gross edge large enough to carry the monthly total |
| No single line is large, yet net expectancy is still at or below zero | The gross edge itself is too thin for any realistic cost load | The system — a larger gross edge, or a different setup altogether |

Whichever row you land on, the decision rule is the same: above zero after everything, you have an edge on that sample; at or below zero, you have no edge. A small positive net expectancy can still be fragile — a thin edge on a small sample deserves more caution, not a celebration. For how large a sample you need, see [How to Calculate Real Expectancy](https://monksofmarket.com/articles/how-to-calculate-real-expectancy/). For why position sizing does not change the sign of expectancy, and why a positive past expectancy does not guarantee future results, see [What Is Trading Expectancy?](https://monksofmarket.com/articles/what-is-trading-expectancy/).

## Frequently Asked Questions

**How do I work out net expectancy from my journal for this audit?**

Take total net P&L after all charges and divide by the number of completed trades. Open positions are excluded — they have not finished. A trade that is breakeven before costs but negative after costs enters the total at its actual negative net amount after costs, not at ₹0.

**No single cost line is large, yet my net expectancy is at or below zero. What do I change?**

The gross edge itself is too thin for any realistic cost load. Follow Step 5's last row: the lever is the system — a larger gross edge, or a different setup altogether.

**My charges are not flat per trade. How do I rank them?**

Use the average-cost-per-trade bridge from Step 1: average cost per trade = total costs ÷ number of completed trades, taken from the statement. Flag it for what it is — an average, not a per-trade constant — then split the lines and rank them largest first.

**How do I read a low fill rate alongside net expectancy?**

Report the fill rate next to your net expectancy, as in Step 4: setups spotted versus fills taken over the same period for the same setup. A low fill rate changes the diagnosis — the problem may be execution and fill discipline rather than the setup's gross edge — and you cannot tell which until you log both numbers.

## The Self-Audit You Can Run Tonight: Four Steps to Your Zero-Line Verdict

You do not need a new tool for this. You need your journal or broker statement, one setup, and four steps.

1. **Pull completed trades for one setup — and log the fills you missed.** From your journal or broker statement, take only completed trades for a single setup, under a single set of rules. Over the same period, record setups spotted versus fills taken for that setup, and compute the fill rate (fills taken ÷ setups spotted). The audit's frequency is fills taken.
2. **Divide total net P&L by completed trades.** Take total net P&L after all charges and divide by the number of completed trades. Exclude open positions — they have not finished. A trade that is breakeven before costs but negative after costs enters the total at its actual negative net amount after costs, not at ₹0. That quotient is your net expectancy.
3. **Split it into lines and rank them.** Separate the gross result from each deduction — visible statement charges, spread estimated from fill prices, slippage estimated from fill prices, taxes and financing where applicable — using the average-cost-per-trade bridge from Step 1 when charges vary. Rank the lines largest first; the biggest line is where any change pays most. If you started from total net P&L, gross per trade = net per trade + average cost per trade.
4. **Decide by the zero line.** Above zero after everything, you have an edge on that sample — trade it with sizing that respects its fragility, and keep auditing. At or below zero, you have no edge. Then, following Step 5's table, the cost line, the frequency, or the system must change.

For the outlier check — recomputing net expectancy without your single best trade — see [How to Calculate Real Expectancy](https://monksofmarket.com/articles/how-to-calculate-real-expectancy/).

That is the whole audit. Quote the net number, state its cost basis, name its sample size and its fill rate — and never again let a gross figure do the deciding.

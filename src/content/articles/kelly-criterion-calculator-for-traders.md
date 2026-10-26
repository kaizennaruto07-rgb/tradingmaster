---
title: "Kelly Criterion Calculator for Traders"
description: "Calculate the Kelly criterion from win rate and payoff ratio, with a ₹2,00,000 worked example, share conversion, and fractional Kelly guidance for traders."
meta_description: "Calculate the Kelly criterion from win rate and payoff ratio, with a ₹2,00,000 worked example, share conversion, and fractional Kelly guidance for traders."
date: 2026-10-25
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["kelly criterion calculator", "kelly criterion trading", "how to calculate kelly criterion", "kelly formula win rate payoff ratio", "fractional kelly", "half kelly quarter kelly", "kelly criterion position sizing", "kelly percentage to shares"]
---

*By Kaizen · 25 October 2026 · Monks Of Market*

## How Much of Your Account Should One Trade Risk? Kelly's Answer: the Percentage Your Own Edge Justifies — Used as a Ceiling, Never as a Target

Most traders can state their stop-loss. Far fewer can answer the harder question behind it: how much of the account should this particular strategy risk on each trade?

The Kelly criterion answers that question from the strategy's own statistics — its win rate and its average win compared with its average loss. It does not borrow a percentage from someone else's rulebook. It calculates the fraction of capital that, in theory, maximises long-run logarithmic growth for a repeated edge.

That last phrase matters. Kelly maximises growth under idealised assumptions. It is not a promise of profit, and it assumes the inputs are correct. In real trading, inputs are estimates, markets change, and several positions can move together. That is why the central lesson of this article is simple and non-negotiable:

**Full Kelly is a ceiling, never a target. Fractional Kelly — half or quarter — is the survivable default.**

This article walks through the formula step by step, works it completely in rupees on a ₹2,00,000 account, converts the resulting risk percentage into an actual number of shares, and then shows how to use Kelly safely alongside a fixed-risk rule.

Trading carries risk of loss of capital. No sizing rule, including Kelly, guarantees a profit.

Note: this is a manual calculation walkthrough, not an interactive tool — there is no Kelly calculator tool on this site, and the fill-in worksheet later in this article is the manual substitute.

## The Question Fixed Rules Cannot Answer: Why 'Risk 2%' Knows Nothing About Your System

"Risk 2% per trade" is easy to remember, and for many traders it is a sensible guardrail. But it has a blind spot: it knows nothing about your system.

A strategy that wins 60% of the time with an average win 1.5 times its average loss is not the same as a strategy that wins 40% of the time with an average win 2.5 times its average loss. A single fixed percentage treats them as identical. It may be too timid for a strong, well-measured edge, and too aggressive for a fragile one.

Kelly asks a different question: given *this* win rate and *this* payoff ratio, what fraction of capital does the edge itself justify risking?

That is also why Kelly cannot be used in isolation from the rest of risk management. It does not replace a stop-loss, a position limit, or a check on how much total risk is open at once. It gives you a ceiling. Your fixed-risk rule, your stop, and your judgement about input quality decide how far below that ceiling you actually trade.

If you have not yet worked through expectancy properly, the companion piece [How to Calculate Real Expectancy of a Strategy](/articles/how-to-calculate-real-expectancy/) is the natural background reading. Kelly uses the same kind of trade-history inputs — win rate and average win and loss — without re-teaching expectancy here. Likewise, the basics of position sizing are covered in the [position sizing article](/articles/position-sizing/), and this article builds on them rather than repeating them.

## The Kelly Formula in Plain Words: W, R, and What Counts as a Win and a Loss

The simplified trader form of the formula is:

**Kelly % = W − [(1 − W) ÷ R]**

There are only two inputs:

- **W — win rate, as a decimal.** If you won 60 out of 100 trades, W = 0.60. If you won 45 out of 100, W = 0.45.
- **R — payoff ratio, or average win divided by average loss.** If your average winning trade made ₹6,000 and your average losing trade lost ₹4,000, R = ₹6,000 ÷ ₹4,000 = 1.5.

To get those averages from your own history, count separately:

- Average win = total profit on winning trades ÷ number of winning trades.
- Average loss = total loss on losing trades ÷ number of losing trades, taken as a positive number for the ratio.

Compute both averages **net of brokerage, taxes, and fees**. Gross averages — profits before costs, losses before costs — overstate R and therefore overstate Kelly, because costs shrink every win and deepen every loss.

Every closed trade in the period counts. Leaving out small losses, or counting only your best month, flatters both W and R — and a flattered input produces an overstated Kelly percentage. That is the first place Kelly goes wrong in practice, long before any trade is placed.

The result, Kelly %, is the fraction of your account to *risk* on the next trade — the amount you would lose if the stop is hit — not the amount to invest, and not the number of shares to buy. That conversion comes later in this article.

There is an equivalent form you may see elsewhere:

**f\* = (p × b − q) ÷ b**

Here p is the win probability (the same as W), q = 1 − p, and b is the payoff ratio (the same as R). The two forms are algebraically identical. Use whichever you find clearer; they give the same answer on the same inputs. The symbol f\* simply means the full Kelly fraction.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Kelly criterion formula diagram: win rate W of 0.60 and payoff ratio R of 1.5 flow into Kelly percent equals W minus one minus W divided by R, giving a full Kelly fraction of 33.33 percent." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Two inputs, one fraction</text>
<rect x="60" y="70" width="220" height="90" rx="12" fill="#2a3a34"/><text x="170" y="108" text-anchor="middle" fill="#8fd6a0" font-size="13" font-weight="700">W — WIN RATE</text><text x="170" y="134" text-anchor="middle" fill="#f2f7f4" font-size="20" font-weight="700">0.60</text>
<rect x="400" y="70" width="220" height="90" rx="12" fill="#2a3a34"/><text x="510" y="108" text-anchor="middle" fill="#e8c15a" font-size="13" font-weight="700">R — PAYOFF RATIO</text><text x="510" y="134" text-anchor="middle" fill="#f2f7f4" font-size="20" font-weight="700">1.5</text>
<text x="340" y="196" text-anchor="middle" fill="#92a59c" font-size="12">Kelly % = W − [(1 − W) ÷ R]</text>
<text x="340" y="230" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">0.60 − (0.40 ÷ 1.5) = 33.33% full Kelly</text>
<text x="340" y="262" text-anchor="middle" fill="#92a59c" font-size="11">Full Kelly is the ceiling. Half Kelly is 16.67%. Quarter Kelly is 8.33%.</text>
<text x="340" y="282" text-anchor="middle" fill="#92a59c" font-size="11">The result is rupees at risk, not shares to buy — the stop converts it later.</text>
</svg>
</figure>
*Responsive visual — no content spilling outside frames at any screen size.*

### What Kelly maximises — and what it does not promise

The criterion was described in 1956 by John Larry Kelly Jr., a researcher at Bell Labs, in an information-theory context, and was later applied to gambling and trading. In trading terms, it gives the fraction that maximises the long-run expected logarithmic growth rate of wealth — in plain language, the long-term compounding rate — for repeated bets with a genuine edge.

It does not promise that any single trade will win. It does not promise that the account will grow smoothly. And it does not work if the edge is not real: if the true win rate and payoff ratio are lower than measured, the calculated fraction is too high. Kelly is a growth-maximising formula for a known edge, not a safety device on its own. That distinction drives everything that follows.

## Step by Step: Calculating Kelly from Your Own Trade History

Work through these steps in order, on one consistent set of trades from one strategy and one market regime. Mixing strategies, or mixing intraday trades with positional trades, mixes different win rates and payoff ratios into a meaningless average.

1. **Pull your trade history.** Use closed trades from the strategy you actually intend to size. Keep the period consistent, and do not cherry-pick winning stretches.
2. **Count wins and losses.** Win rate W = number of winning trades ÷ (winning trades + losing trades) on the consistent set. **Recommended breakeven rule, applied consistently to every trade in the set: exclude breakeven trades from both the win count and the trade total, and from both averages.** Do not count a breakeven trade as a win, and do not let it dilute the average win or average loss. Picking the rule matters less than applying it the same way throughout; switching treatment trade by trade quietly changes W and R.
3. **Calculate the averages.** Average win and average loss, as defined above, from the same set of trades.
4. **Calculate R.** R = average win ÷ average loss.
5. **Apply the formula.** Kelly % = W − [(1 − W) ÷ R].
6. **Read the fractions.** Halve the full Kelly result for half Kelly. Quarter it for quarter Kelly. These fractions — not the full figure — are where real trading decisions usually live.
7. **Convert to rupees, then to shares.** Multiply the fraction by your account size to get the rupee risk amount. Divide that amount by your per-share stop distance to get shares. The worked example below does all of this in full. **Recommended resizing cadence: recompute the rupee risk from the current account size on each trade**, not from the size you started with, and not only at the quarterly re-check. W and R are re-checked every 50–100 trades or quarterly (see Input Discipline below); the rupee amount itself is refreshed trade by trade as the account moves.

Before trusting the result, read the input-discipline section below. As this article's prescription, use at least 50–100 trades before trusting the inputs, and re-check every 50–100 trades or quarterly. Even at 100 trades, a small sample still carries wide uncertainty — the floor is a minimum for taking the calculation seriously, not a guarantee that the inputs are exact.

### Fill-in worksheet: your Kelly calculation in one place

There is no Kelly calculator tool on this site, so this worksheet is the manual substitute — work through it with your own calculator, in order, without re-reading the whole article:

- My win rate W = ______ (winning trades ÷ (winning trades + losing trades); breakeven trades excluded from both the win count and the trade total, consistently)
- My average win (net of brokerage, taxes, and fees) = ₹______
- My average loss (net of brokerage, taxes, and fees, as a positive number) = ₹______
- My payoff ratio R = average win ÷ average loss = ______
- My full Kelly % = W − [(1 − W) ÷ R] = ______%
- My half Kelly % = full Kelly ÷ 2 = ______%
- My quarter Kelly % = full Kelly ÷ 4 = ______%
- My account size (current, today) = ₹______
- My rupee risk = chosen fraction × account size = ₹______
- My per-share stop distance = ₹______
- My shares = rupee risk ÷ stop distance, floored to whole shares = ______
- Affordability check: shares × entry price (and margin required) = ₹______ — fits my available capital? If not, reduce shares or skip the trade.

## Worked Example on a ₹2,00,000 Account: Full, Half, and Quarter Kelly in Rupees

Take a concrete history. Suppose over 100 trades of one strategy you won 60 times and lost 40 times. Your average winning trade made ₹6,000 and your average losing trade lost ₹4,000.

- W = 60 ÷ 100 = **0.60**
- R = ₹6,000 ÷ ₹4,000 = **1.5**
- Kelly % = 0.60 − [(1 − 0.60) ÷ 1.5] = 0.60 − (0.40 ÷ 1.5) = 0.60 − 0.2667 = **33.33%**

Full Kelly is therefore 33.33% of the account. Half Kelly is 16.67%. Quarter Kelly is 8.33%.

On a ₹2,00,000 account, those percentages become:

| Kelly fraction | Percentage of account | Rupee risk per trade on ₹2,00,000 |
|---|---:|---:|
| Full Kelly | 33.33% | ₹66,667 |
| Half Kelly | 16.67% | ₹33,333 |
| Quarter Kelly | 8.33% | ₹16,667 |

Read those rupee figures carefully. Full Kelly would risk ₹66,667 — one-third of the account — on a single trade if the stop is hit. Half Kelly risks ₹33,333. Quarter Kelly risks ₹16,667. The fractions are not small adjustments. Each step down roughly halves the amount at stake, and with it the violence of the swings.

Two supporting checks show the same method on different edges:

| Example | Example inputs | Full Kelly | Half Kelly | Quarter Kelly | Rupee risk on ₹2,00,000 (full / half / quarter) |
|---|---|---|---|---|---:|
| Supporting example A | W = 0.55, R = 1.5 | 25.00% | 12.50% | 6.25% | ₹50,000 / ₹25,000 / ₹12,500 |
| Supporting example B | W = 0.45, R = 2.5 | 23.00% | 11.50% | 5.75% | ₹46,000 / ₹23,000 / ₹11,500 |

Workings: for supporting example A, 0.55 − (0.45 ÷ 1.5) = 0.55 − 0.30 = 25.00%. For supporting example B, 0.45 − (0.55 ÷ 2.5) = 0.45 − 0.22 = 23.00%. In each case the half and quarter figures are simply the full figure divided by two and by four.

### Low-edge case: when fractional Kelly itself is the binding limit

Not every edge produces a Kelly figure above the fixed-risk cap. Take a thinner edge: W = 0.42, R = 1.5. Then Kelly % = 0.42 − (0.58 ÷ 1.5) = 0.42 − 0.3867 = 3.33% full Kelly, so half Kelly is 1.67% and quarter Kelly is 0.83%. On a ₹2,00,000 account, half Kelly is ₹3,333 (1.67% × ₹2,00,000 = ₹3,333.33, rounded to ₹3,333) — *below* the 2% fixed-risk cap of ₹4,000. Quarter Kelly here would be ₹1,667. Here the "smaller limit wins" rule runs the other way: the trade risks ₹3,333, the half-Kelly figure, not the ₹4,000 cap. The rule is symmetric — whichever limit is smaller governs, whether that is the fixed cap (as in the main example) or fractional Kelly (as here).

Notice what the table also shows: a lower win rate can still justify a meaningful Kelly fraction if the payoff ratio is high enough, and a high win rate with a poor payoff ratio may justify very little. Kelly weighs both inputs together. Neither win rate alone nor payoff ratio alone tells you the size.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Full versus half versus quarter Kelly for the same edge: full Kelly 33.33 percent risks 66,667 rupees, half Kelly 16.67 percent risks 33,333 rupees, quarter Kelly 8.33 percent risks 16,667 rupees, on a 200,000 rupee account." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same edge, three very different stakes</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">W = 0.60 · R = 1.5 · ₹2,00,000 account</text>
<text x="90" y="108" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Full Kelly</text>
<rect x="170" y="92" width="360" height="22" rx="11" fill="#e8825a"/><text x="540" y="108" fill="#f2f7f4" font-size="12" font-weight="700">33.33% · ₹66,667</text>
<text x="90" y="158" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Half Kelly</text>
<rect x="170" y="142" width="180" height="22" rx="11" fill="#e8c15a"/><text x="360" y="158" fill="#f2f7f4" font-size="12" font-weight="700">16.67% · ₹33,333</text>
<text x="90" y="208" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Quarter Kelly</text>
<rect x="170" y="192" width="90" height="22" rx="11" fill="#8fd6a0"/><text x="270" y="208" fill="#f2f7f4" font-size="12" font-weight="700">8.33% · ₹16,667</text>
<text x="340" y="258" text-anchor="middle" fill="#92a59c" font-size="11">Each step down roughly halves the amount at stake — and the violence of the swings.</text>
<text x="340" y="278" text-anchor="middle" fill="#92a59c" font-size="11">The full-Kelly column shows the ceiling. It is not a recommendation to risk a third of the account.</text>
</svg>
</figure>
*Responsive visual — no content spilling outside frames at any screen size.*

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Rupee risk bars on a 200,000 rupee account: full Kelly 66,667 rupees, half Kelly 33,333 rupees, quarter Kelly 16,667 rupees, with the fixed 2 percent cap of 4,000 rupees shown for scale — the smaller limit always wins." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">What each fraction actually risks</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">₹2,00,000 account · amounts lost if the stop is hit</text>
<text x="120" y="108" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Full</text>
<rect x="200" y="92" width="300" height="22" rx="11" fill="#e8825a"/><text x="510" y="108" fill="#f2f7f4" font-size="12" font-weight="700">₹66,667</text>
<text x="120" y="158" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Half</text>
<rect x="200" y="142" width="150" height="22" rx="11" fill="#e8c15a"/><text x="360" y="158" fill="#f2f7f4" font-size="12" font-weight="700">₹33,333</text>
<text x="120" y="208" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Quarter</text>
<rect x="200" y="192" width="75" height="22" rx="11" fill="#8fd6a0"/><text x="285" y="208" fill="#f2f7f4" font-size="12" font-weight="700">₹16,667</text>
<text x="120" y="258" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">2% cap</text>
<rect x="200" y="242" width="18" height="22" rx="9" fill="#92a59c"/><text x="228" y="258" fill="#f2f7f4" font-size="12" font-weight="700">₹4,000 — the fixed-risk cap that binds first in the main example</text>
<text x="340" y="302" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Smaller limit wins: in the main example the trade risks ₹4,000, not ₹33,333.</text>
</svg>
</figure>
*Responsive visual — no content spilling outside frames at any screen size.*

### Reading the table honestly: why the full-Kelly rupee amount is not the trade size

The full-Kelly column exists in this article so you can see the ceiling and understand where the fractions come from. It is not a recommendation to risk ₹66,667 per trade on a ₹2,00,000 account.

A single losing trade at full Kelly removes a third of the account. A short losing run at that size does damage that takes a very long winning run to repair, and — just as importantly — it breaks most traders' discipline long before the mathematics has a chance to work. A sizing rule you abandon after three losses is not a sizing rule.

Treat ₹66,667 as the line you stay well below. The practical question is not "full or nothing?" but "how far below the ceiling do my input confidence and my tolerance for drawdowns put me?" For most retail traders, the honest answer is half Kelly or quarter Kelly, capped further by a fixed-risk rule, as explained below.

## From Kelly % to Shares: Kelly Defines Risk, Not Position Size

This is the step most explanations skip — and the step that turns a percentage into a trade you can actually place.

Kelly % tells you how many rupees to risk. It does not tell you how many shares to buy. To get shares, divide the rupee risk amount by the distance from your entry to your stop-loss, per share:

**Shares = rupee risk amount ÷ per-share stop distance**

Work it with the quarter-Kelly figure from the example above, and a stop distance of ₹50 per share:

- Quarter-Kelly risk = ₹16,667
- Stop distance = ₹50 per share
- Shares = ₹16,667 ÷ ₹50 = 333.33 → **333 shares** (always floor to whole shares; a fractional share count is not a tradable quantity)

For comparison, on the same ₹50 stop:

- Half-Kelly risk ₹33,333 ÷ ₹50 = 666.67 → **666 shares**
- Full-Kelly risk ₹66,667 ÷ ₹50 = 1,333.34 → **1,333 shares** (shown only to show the ceiling, not as a trade size)

Two consequences follow. First, a wider stop means fewer shares for the same rupee risk, and a tighter stop means more shares — the risk amount stays fixed, the share count moves. Second, Kelly never replaces the stop itself. Without a stop distance there is nothing to divide by, and without a stop the "risk amount" is just a hope. If you cannot define a stop before entry, you cannot convert Kelly into shares, and you should not take the trade on Kelly grounds.

If you want to check the share conversion against a position-sizing workflow, the [Position Size Calculator](/tools/position-size/) converts a risk amount into shares on the same principle. The rupee risk amount from Kelly is the input; the stop distance does the conversion.

### Can you afford the shares? The check Kelly does not do for you

Kelly limits how much you stand to *lose* if the stop is hit. It says nothing about how much capital the position itself needs. Before placing the trade, check: **shares × entry price (and the margin required) must fit your available capital**. If it does not, reduce the shares or skip the trade — a Kelly risk limit does not authorise an unaffordable position.

For example, the 333 quarter-Kelly shares above at an entry price of ₹600 would need ₹1,99,800 of position value (333 × ₹600 = ₹1,99,800) — almost the whole ₹2,00,000 account — even though the risk if the stop is hit is only ₹16,667. With margin, the cash or margin actually required may be lower, but the test is the same: the position must fit what you have available. A small risk amount on a high-priced stock can still be a position you cannot fund.

As your account grows or shrinks, the same Kelly percentage gives a different rupee amount. Recompute from the current account size on each trade, not from the size you started with. A percentage that was sensible on ₹2,00,000 is a different amount of money on ₹1,50,000 after a drawdown — and sizing from a stale account figure quietly over-risks a shrinking account.

## Why Nobody Trades Full Kelly: Estimation Error, Correlated Positions, and Drawdowns That Break Discipline

Full Kelly is mathematically elegant and practically unforgiving. Three reasons, all present in real trading, explain why practitioners fraction it.

**1. Estimation error: your inputs are guesses, not facts.**

W and R are measured from past trades. The true win rate and payoff ratio going forward may be lower — because the sample was lucky, because the market regime changed, or because a few large wins flattered the average. When you overestimate the edge, you overstate f\*, and you over-bet. Over-betting simultaneously raises volatility and lowers long-run growth. Even a small input error can materially cut growth, which is why a fraction that leaves room for being wrong is not caution for its own sake — it is the correction for the fact that the inputs are uncertain.

**Outlier check — run it before you trust the figure.** Recompute Kelly excluding the single largest win from your history, and compare your average win with your median win. If the largest win was doing most of the work, the recomputed Kelly figure will fall noticeably; if the average win is far above the median win, a few outsized trades are flattering R. In either case, use the lower, more conservative figure if the result changes materially — the Kelly percentage that survives without its best trade is the one worth sizing on.

**2. Simultaneous and correlated positions: the single-bet formula does not size a portfolio.**

The Kelly formula above sizes one bet at a time, assuming independent bets. Applying full Kelly separately to five positions that all move together — for example, five stocks exposed to the same sector move — does not give you five independent Kelly bets. It gives you roughly five times the intended risk in one direction. Joint sizing of simultaneous positions is a different optimisation problem, and this article does not invent a formula for it. The practical guardrail is blunt but effective: treat correlated positions as sharing one risk budget, and keep total open risk under your fixed-risk cap however many positions are open.

**3. Drawdowns break discipline before mathematics rescues the account.**

Full Kelly produces deep swings by design: it maximises growth, not comfort. A trader who watches a third of the account swing on single trades, or who endures a long drawdown at full size, is likely to shrink size at the worst moment, abandon the strategy, or widen stops — all of which break the very assumptions the calculation rested on. A sizing rule has to survive the trader using it, not just the spreadsheet testing it.

That is why half Kelly and quarter Kelly are the widely used practitioner default, not a timid compromise. As the standard textbook result, half Kelly retains approximately 75% of full Kelly's long-run growth while roughly halving volatility (the size of the swings, not variance, which scales differently). Quarter Kelly gives up more growth again, but at much lower drawdowns than half Kelly: the trade is slower compounding in exchange for a far easier ride and far more room for input error.

In other words, fractioning is not leaving money on the table. It is paying a measured growth cost to buy survival, discipline, and robustness to being wrong about your own edge. For a retail trader whose inputs come from a few dozen or a few hundred trades, that is usually a good trade.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Growth versus Kelly fraction curve: long-run growth rises to a peak at full Kelly f star, falls as the fraction rises past it, reaches zero at twice Kelly, and turns negative beyond twice Kelly in the idealised model." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Past the ceiling, more risk buys less growth</text>
<line x1="70" y1="250" x2="630" y2="250" stroke="#3a4a44" stroke-width="1"/>
<line x1="70" y1="250" x2="70" y2="60" stroke="#3a4a44" stroke-width="1"/>
<path d="M 70 250 Q 175 120 280 90 Q 380 90 480 250 Q 530 300 630 320" fill="none" stroke="#8fd6a0" stroke-width="3" stroke-linecap="round"/>
<circle cx="280" cy="90" r="5" fill="#e8c15a"/><text x="280" y="70" text-anchor="middle" fill="#e8c15a" font-size="12" font-weight="700">f* — peak growth</text>
<circle cx="480" cy="250" r="5" fill="#e8825a"/><text x="480" y="232" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">2f* — zero growth</text>
<text x="70" y="272" fill="#92a59c" font-size="11">0</text>
<text x="280" y="272" text-anchor="middle" fill="#92a59c" font-size="11">f*</text>
<text x="480" y="272" text-anchor="middle" fill="#92a59c" font-size="11">2f*</text>
<text x="630" y="272" text-anchor="end" fill="#92a59c" font-size="11">beyond 2f*</text>
<text x="340" y="302" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Idealised model only — but the message survives it: never size above full Kelly.</text>
</svg>
</figure>
*Responsive visual — no content spilling outside frames at any screen size.*

### Over-betting past full Kelly: growth falls, and 2× Kelly zeroes it in the idealised model

Betting beyond full Kelly does not buy extra growth. Growth falls as the fraction rises past f\*, because the extra volatility drag outweighs the extra stake.

In the idealised model only — known true probabilities, identical repeated bets, no costs, no leverage constraints, and no regime change — betting at exactly twice the Kelly fraction drives expected log-growth to zero, and betting beyond twice Kelly turns expected log-growth negative even with a genuine edge. That qualifier is essential: it is a property of the idealised model, not a prediction about any live trading account, where costs, gaps, and changing conditions apply on top.

The practical message survives the qualifier intact: there is no reward for pushing past the ceiling. Past f\*, you take more risk for less growth, and eventually for negative growth. If your calculation ever suggests a size above full Kelly, the calculation — or the inputs behind it — is wrong, not bold.

If over-betting is the risk you most want to understand, [Risk of Ruin in Trading](/articles/risk-of-ruin-trading/) explains ruin as the consequence of over-betting, and the [Risk of Ruin Calculator](/tools/risk-of-ruin/) lets you test how a given risk level affects survival odds. Kelly sets the ceiling; ruin mathematics shows what happens when you ignore it.

## Input Discipline: Sample Size, Re-checking, Stable Regimes, and the Negative-Kelly Rule

Kelly is only as honest as its inputs. Four disciplines keep it honest.

**Use at least 50–100 trades before trusting the inputs.** This is the prescription of this article — a recommended discipline, not a statistically derived threshold or a cited study result. Below 50 trades, a handful of wins or losses can swing W and R wildly. Even at 100 trades, a small sample still carries wide uncertainty. Treat the floor as the point where the calculation starts to be worth doing, not the point where it becomes exact.

**Re-check every 50–100 trades or quarterly, whichever comes first.** Edges decay, volatility regimes shift, and a strategy that worked in a trending market may behave differently in a ranging one. Recompute W and R on recent, relevant trades, and update the Kelly fraction. A Kelly percentage calculated a year ago on a different market is a historical artefact, not a live size.

**Apply the result only in a reasonably stable regime.** If you have changed the strategy's rules, moved to a different instrument or timeframe, or the market structure has plainly changed, the old win rate and payoff ratio no longer describe the trades you are about to take. In that case, collect fresh data under the new conditions before relying on Kelly again, and size conservatively in the meantime under your fixed-risk rule.

**Negative Kelly means do not trade.** If the formula returns zero or a negative number, the measured win rate and payoff ratio show no edge. For example, W = 0.40 and R = 1.0 gives 0.40 − (0.60 ÷ 1.0) = −0.20, or −20%. The correct action is not to trade the system at a smaller size, and not to "size it anyway." It is to stop trading that system, fix it, or discard it. A negative fraction would, in gambling terms, mean betting the other side if that were possible — in trading, it means there is no side worth sizing. No position size turns a losing system into a winning one.

Keep a simple log alongside the calculation: the trade count, the period, W, R, the Kelly fraction, and the fraction actually traded. When you re-check, you will see whether the edge is stable, drifting, or gone — and that record is worth more than any single Kelly number.

## Kelly vs Fixed-Fractional Risk: When Each Wins, and Kelly as a Ceiling Over a Fixed Rule

Fixed-fractional risk — for example, risking a fixed 2% of the account per trade, whatever the strategy — and Kelly answer different questions. Neither is universally "better." The right operating rule uses both.

| Approach | What it asks | When it wins | Where it fails |
|---|---|---|---|
| Fixed risk (e.g. 2% per trade) | "How much can I afford to lose without breaking the account?" | Uncertain inputs, new strategies, correlated trades, changing regimes | Ignores how strong the edge actually is; may under-size a strong edge or over-size a weak one |
| Full Kelly | "What fraction maximises growth for this measured edge?" | A well-measured, stable edge with honest inputs | Fragile to estimation error; drawdowns break discipline; does not size correlated positions |
| Fractional Kelly under a fixed-risk cap | "What does the edge justify, capped at what I can survive?" | Most retail trading: a measured edge plus a survival guardrail | Requires both calculations; slightly slower growth than full Kelly by design |

The operating rule this article recommends is:

**Fractional Kelly as the ceiling, fixed risk as the cap, stop-loss as the mechanism — trade the smallest of the applicable limits.**

In practice: calculate fractional Kelly (half or quarter) and calculate your fixed-risk amount (for example, 2% of the account). Use whichever rupee amount is smaller as the risk for the trade, then divide by stop distance for shares. On a ₹2,00,000 account, a 2% fixed cap is ₹4,000 per trade — far below even quarter Kelly's ₹16,667 in the worked example. That gap is the point: for most retail traders, the fixed-risk cap will bind first, and Kelly will sit above it as a ceiling that warns you when a strategy's justified size has fallen below what you are actually risking. But the rule cuts both ways: in the low-edge case in the worked example above, half Kelly is ₹3,333 — below the ₹4,000 cap — so fractional Kelly binds. Whichever limit is smaller governs, in either direction.

When does Kelly add value over fixed risk alone? When you have a genuinely measured edge and honest inputs, Kelly tells you whether your fixed cap is needlessly timid or dangerously generous relative to that edge. When does the fixed cap win outright? When inputs are uncertain, when trades are correlated, when the regime is changing, or when you simply cannot tolerate the swings fractional Kelly still allows. In those cases, the cap is not a failure of Kelly — it is Kelly's ceiling doing its job by staying out of the way of survival.

Kelly also never replaces position limits or correlation control. A ceiling per trade is not a ceiling on total portfolio risk. If three correlated trades are open, their combined risk — not each trade's individual Kelly figure — is what the account actually feels.

## What Kelly Does NOT Do: It Does Not Create Edge, Fix a Losing System, or Survive Bad Inputs

It is worth stating the limits plainly, because sizing formulas invite over-claiming.

**Kelly does not create edge.** If the true win rate and payoff ratio do not produce a positive expectation, no fraction — full, half, quarter, or any other — manufactures one. Sizing scales an edge that already exists. It cannot invent one.

**Kelly does not fix a losing system.** A negative Kelly result is a verdict on the system, not a sizing problem. Tweaking the fraction, widening the stop to fit more shares, or trading more often does not repair a strategy whose measured edge is zero or negative. Fix the strategy or stop trading it.

**Kelly does not survive bad inputs.** Inputs cherry-picked from a winning month, averaged across different strategies, or carried over from a different regime produce a confidently wrong size — often an overstated one. Garbage in, in this case, is not just a wrong number. It is an over-bet account.

**Kelly does not predict the next trade, remove drawdowns, or guarantee profit.** Even a correctly calculated fractional Kelly size will lose on many individual trades and will go through drawdowns. What it offers, when inputs are honest and the fraction is kept well below the ceiling, is a disciplined link between how good the edge measures up to be and how much of the account each trade puts at risk. That discipline — not any promise of returns — is the value.

For readers who want to see the failure side of this story in full, a separate follow-up, Why Full Kelly Bankrupts Retail Traders, will examine blow-up mechanics in depth. This article's job is the working mathematics; the discipline above is what keeps that mathematics survivable.

## Frequently Asked Questions

### What is the Kelly criterion in trading?

The Kelly criterion is a formula that gives the fraction of your trading account to risk on each trade, based on the strategy's own win rate and average win-to-loss ratio, in order to maximise long-run logarithmic growth for a repeated edge. It sizes risk from measured statistics rather than from a borrowed fixed percentage. Full Kelly is the theoretical maximum-growth fraction; in practice it is used as a ceiling, with fractional Kelly traded instead.

### How do you calculate the Kelly criterion?

Use Kelly % = W − [(1 − W) ÷ R], where W is your win rate as a decimal and R is your average win divided by your average loss, both measured from your own closed trade history. For example, W = 0.60 and R = 1.5 gives 0.60 − (0.40 ÷ 1.5) = 33.33% full Kelly, or 16.67% at half Kelly and 8.33% at quarter Kelly. Multiply the fraction by your account size for the rupee risk amount, then divide by your per-share stop distance for shares.

### What is a good Kelly percentage for a retail trader?

There is no single "good" Kelly percentage that applies to everyone. The survivable default is fractional Kelly — half or quarter of the full figure — combined with a fixed-risk cap, with the exact fraction set by how confident you are in your inputs and how much drawdown you can tolerate. The less certain the inputs, the smaller the fraction. A trader with a short history or a changing regime should stay at the smaller end, and let the fixed-risk cap bind first.

### Why is full Kelly considered too risky?

Three reasons: inputs are estimated from finite samples, so estimation error overstates the true edge and leads to over-betting; the single-bet formula does not size simultaneous or correlated positions; and full-Kelly swings are deep enough to break discipline before the mathematics pays off. Fractional Kelly directly addresses all three by cutting the stake, leaving room for input error, and producing a ride a trader can actually stay with.

### What is half Kelly / fractional Kelly, and which fraction should I use?

Fractional Kelly means trading a fraction of the full Kelly percentage — half Kelly trades 50% of f\*, quarter Kelly trades 25% of f\*. As the standard textbook result, half Kelly retains approximately 75% of full Kelly's long-run growth while roughly halving volatility (the size of the swings). Quarter Kelly gives up more growth again, but at much lower drawdowns than half Kelly. Choose half Kelly when inputs are reasonably well measured and drawdown tolerance is moderate; choose quarter Kelly — or a fixed-risk cap below it — when inputs are newer, less certain, or the strategy is still proving itself.

### What does a negative Kelly percentage mean?

A zero or negative Kelly result means the measured win rate and payoff ratio show no edge. Do not trade that system, and do not try to "size it anyway" at a smaller fraction. Fix the strategy, test whether a genuine edge exists on fresh data, or discard it. No position size turns a system with no edge into a profitable one.

### How many trades do I need before I can trust my Kelly inputs?

As the prescription of this article, use at least 50–100 trades from one consistent strategy before trusting the inputs, and re-check every 50–100 trades or quarterly. This is a recommended discipline, not a verified statistical threshold — even at 100 trades, a small sample still carries wide uncertainty. Below the floor, treat any Kelly figure as indicative at best, and size under your fixed-risk rule instead.

### Does the Kelly criterion work for options / intraday trading?

The formula can be applied wherever a win rate and an average win and loss can be honestly measured from actual trade history, including intraday trading. But trading wins and losses are not clean, fixed-odds binary bets: options expiry, gap risk, leverage, and changing volatility all break the tidy assumptions behind the formula. That makes fractional Kelly and a fixed-risk cap more important for options and intraday trading, not less — and no options-specific success rate should be assumed. If the win rate and averages cannot be honestly measured for the instrument and timeframe in question, Kelly should not be used for it.

### Kelly criterion vs fixed 2% risk — which is better?

Neither wins in all cases. Kelly is better when you have a well-measured, stable edge and want the size to reflect that edge. A fixed 2% rule is better when inputs are uncertain, trades are correlated, or regimes are changing, because it caps survival risk regardless of what the edge appears to be. The strongest practical rule combines them: fractional Kelly as the ceiling, fixed risk as the cap, and the smaller rupee amount as the trade's risk.

### How do I convert a Kelly percentage into a number of shares?

Divide the rupee risk amount by your per-share stop distance, and floor the result to whole shares. For example, a quarter-Kelly risk of ₹16,667 with a ₹50 per-share stop gives ₹16,667 ÷ ₹50 = 333.33, or 333 shares. Kelly defines how many rupees to risk; the stop distance converts that risk into shares. Without a defined stop, there is no conversion — and no trade on Kelly grounds.

---

*Risk disclosure: trading carries risk of loss of capital. The Kelly criterion maximises long-run growth only under idealised assumptions and with correct inputs. Past trade history does not guarantee future results, and no sizing rule guarantees a profit. Size conservatively, keep a fixed-risk cap in place, and never risk money you cannot afford to lose.*

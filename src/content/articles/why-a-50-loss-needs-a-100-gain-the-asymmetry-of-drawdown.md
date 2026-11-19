---
title: "Why a 50% Loss Needs a 100% Gain: The Asymmetry of Drawdown"
description: "A 50% loss needs a 100% gain because the loss is measured on the peak and the gain on the trough. Learn the recovery formula, table, and depth-budget rule."
meta_description: "A 50% loss needs a 100% gain because the loss is measured on the peak and the gain on the trough. Learn the recovery formula, table, and depth-budget rule."
date: 2026-10-29
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["why a 50% loss needs a 100% gain", "drawdown asymmetry", "gain needed to recover a loss", "drawdown recovery percentage", "how much gain to recover from drawdown", "drawdown recovery table", "why losses and gains are not symmetric", "maximum drawdown meaning", "how risk per trade sets drawdown depth", "how long does drawdown recovery take"]
---

*By Kaizen · 29 October 2026 · Monks Of Market*

Most traders learn this lesson the expensive way: a loss and a gain of the same percentage do not cancel each other out. A 50% loss is not undone by a 50% gain. It needs a 100% gain — the remaining capital has to double.

This is not a quirk of one market, one instrument, or one bad week. It is drawdown asymmetry, plain arithmetic that applies to any account, on NSE, BSE, or anywhere else. Once you see why it happens, it changes how you think about the gain needed to recover a loss — and, more importantly, how much risk you should take on a single trade.

## The Trap in One Sentence: The Loss Is Measured on the Peak, the Recovery Is Earned on the Trough

Here is the whole article in one sentence: the loss is measured on the peak, but the recovery is earned on the trough.

When your account falls, the percentage lost is calculated on the larger, pre-loss balance. When it recovers, the percentage gained is calculated on the smaller, post-loss balance. The rupees you need to get back are fixed by the loss — but the percentage required to earn those rupees back grows, because the base you are earning them on has shrunk.

That single base shift is the entire reason a 50% loss needs a 100% gain. Everything that follows — the formula, the drawdown recovery table, and the sizing rule at the end — is just that sentence worked out in numbers.

## Why the Bases Are Different: The Base-Shift Intuition in Rupees

Take one account and carry it through the whole article, so the numbers stay comparable. The peak is Rs 1,00,000.

**First, a 10% loss.** The account falls to Rs 90,000. The rupees lost are Rs 10,000, and those are the rupees that must be earned back. But they must be earned on the new, smaller base of Rs 90,000:

- Rupees needed: Rs 10,000
- Required gain: Rs 10,000 ÷ Rs 90,000 = 11.1%

A 10% loss already needs more than 10% back. The gap is small here, which is exactly why it is easy to miss.

**Now, a 50% loss on the same peak.** The account falls to Rs 50,000. The rupees lost are Rs 50,000, and they must be earned on the new base of Rs 50,000:

- Rupees needed: Rs 50,000
- Required gain: Rs 50,000 ÷ Rs 50,000 = 100%

The remaining capital must double. Notice what stayed fixed and what changed: the rupees needed are simply the rupees lost, but the percentage required explodes because the base has halved. At a 10% loss, you are earning Rs 10,000 back on Rs 90,000. At a 50% loss, you are earning Rs 50,000 back on Rs 50,000. Same logic, very different climb.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Base-shift diagram showing a 100000 rupee peak falling to a 50000 rupee trough, which must double to recover, with the peak base versus trough base labelled." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Two bases, one trap</text>
<rect x="40" y="70" width="180" height="90" rx="12" fill="#2a3a34"/><text x="130" y="106" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">PEAK BASE</text><text x="130" y="136" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Rs 1,00,000</text>
<text x="240" y="118" text-anchor="middle" fill="#92a59c" font-size="20">→</text>
<rect x="270" y="70" width="180" height="90" rx="12" fill="#e8825a"/><text x="360" y="106" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">TROUGH BASE</text><text x="360" y="136" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">Rs 50,000</text>
<text x="470" y="118" text-anchor="middle" fill="#92a59c" font-size="20">×2</text>
<rect x="500" y="70" width="140" height="90" rx="12" fill="#8fd6a0"/><text x="570" y="106" text-anchor="middle" fill="#1c2b26" font-size="11" font-weight="700">RECOVERY</text><text x="570" y="136" text-anchor="middle" fill="#1c2b26" font-size="15" font-weight="700">+100%</text>
<text x="340" y="200" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">The loss is measured on the peak; the recovery is earned on the trough.</text>
</svg>
</figure>

## Why a Loss and an Equal Gain Never Cancel Out

This is why losses and gains are not symmetric, and a simple worked case makes it impossible to unsee.

Start again at the Rs 1,00,000 peak. Lose 20%, then gain 20%:

- After the 20% loss: Rs 1,00,000 → Rs 80,000
- After the 20% gain: Rs 80,000 → Rs 96,000
- Result: still Rs 4,000 — 4% — below the peak

The 20% loss took Rs 20,000. The 20% gain gave back only Rs 16,000, because 20% of Rs 80,000 is smaller than 20% of Rs 1,00,000. The percentages look equal, but they are percentages of different amounts, so they cannot cancel.

The general form makes this precise. If D is the drawdown as a fraction, a D% loss followed by a D% gain leaves the account at (1 − D)(1 + D) = 1 − D². In other words, the account ends up D² below the peak. For D = 20%, that shortfall is 0.04, or 4% — exactly the Rs 4,000 in the example above.

Any trader who thinks in symmetric percentages will keep underestimating the climb back. The market does not owe you the peak back just because the percentages matched.

## The Formula and the Full Recovery Table: Gain Needed = D / (1 − D)

The gain needed to recover a loss follows one formula. If D is the drawdown as a fraction of the peak, the required gain is:

**Required gain = D ÷ (1 − D)**

Equivalently, in percentages: drawdown% ÷ (100 − drawdown%) × 100. The formula is currency-free — it works in rupees, dollars, or any unit — because it is a ratio of the loss to the smaller post-loss base.

Here is the full drawdown recovery table, recomputed from that formula and rounded to one decimal place:

| Drawdown | Gain needed to recover |
|---|---|
| 5% | 5.3% |
| 10% | 11.1% |
| 15% | 17.6% |
| 20% | 25.0% |
| 25% | 33.3% |
| 30% | 42.9% |
| 40% | 66.7% |
| 50% | 100.0% |
| 60% | 150.0% |
| 75% | 300.0% |
| 90% | 900.0% |

Read the table in two halves. In the top half, the climb is close to the fall: a 10% drawdown needs 11.1%, a 20% drawdown needs 25%. In the bottom half, the climb pulls away fast: a 50% drawdown needs the capital to double, a 75% drawdown needs a 300% gain, and a 90% drawdown needs 900%. That acceleration is the asymmetry, and it is why shallow drawdowns are a different problem from deep ones — not just a smaller version of the same problem.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Asymmetry curve chart of required gain versus drawdown, with the 10 percent, 20 percent and 50 percent rungs labelled." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The curve steepens as losses deepen</text>
<rect x="40" y="70" width="180" height="70" rx="12" fill="#2a3a34"/><text x="130" y="100" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">10% LOSS</text><text x="130" y="124" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Needs 11.1%</text>
<rect x="250" y="70" width="180" height="70" rx="12" fill="#2a3a34"/><text x="340" y="100" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">20% LOSS</text><text x="340" y="124" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Needs 25%</text>
<rect x="460" y="70" width="180" height="70" rx="12" fill="#e8825a"/><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">50% LOSS</text><text x="550" y="124" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">Needs 100%</text>
<text x="340" y="180" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Gain needed = D ÷ (1 − D) — the knee sits around 20–30%.</text>
<text x="340" y="210" text-anchor="middle" fill="#92a59c" font-size="11">Past the knee, the climb starts to outrun a normal edge.</text>
</svg>
</figure>

### The Knee Around 20–30%: Where the Climb Starts to Outrun a Normal Edge

Look at how the curve bends. Up to about 20%, the required gain stays within shouting distance of the drawdown itself: 25% to recover from a 20% fall. By 30%, the required gain is 42.9%. By 50%, it is 100%.

The knee around 20–30% is where the climb starts to outrun what a normal trading edge delivers in a reasonable time. By "a normal trading edge", mean only an illustrative comparison — the kind of steady, unspectacular edge a trader might reasonably expect, not a promised return — against which the table's climbs are judged.

That wording matters: the knee is an interpretive reading of the arithmetic curve's shape, not a threshold from any study or a rule any authority has set. The numbers themselves are exact — 25% at a 20% drawdown, 42.9% at 30%, 100% at 50% — but where you personally draw the line for "too deep" is a judgement call, and this article treats it as one.

The practical point stands regardless of where exactly you place the knee. Below it, recovery is a climb. Above it, recovery is a project. That difference should shape how much drawdown you are willing to risk in the first place.

## What Maximum Drawdown Really Means: Peak to Trough, Not Deposit to Trough

Before applying the table to your own trading, measure correctly. Maximum drawdown, in its standard sense, is the single worst peak-to-trough decline in an account or strategy — measured from the prior peak, not from the starting deposit.

That distinction matters. Suppose you deposit Rs 1,00,000, grow the account to a peak of Rs 1,40,000, and then fall to Rs 1,05,000. The peak-to-trough drawdown is 25% (Rs 35,000 lost from the Rs 1,40,000 peak), even though the account is still above its starting deposit. If you measured from the deposit, you would report no drawdown at all — and you would badly underestimate the climb back to the peak, which is 33.3% on the Rs 1,05,000 trough.

So when you check your own numbers, always ask: drawdown from what? The answer that makes the recovery table work is the peak. Anything else flatters the picture. In practice, track the highest account balance you have reached and compare your current balance against that peak; the gap between them is your current peak-to-trough drawdown.

## The Same Losing Run, Very Different Depths: How Risk per Trade Sets the Depth

The recovery table tells you what a given depth costs. The next question is what determines the depth — and the answer, more than anything else, is how risk per trade sets drawdown depth.

Consider the same market event: eight consecutive losing trades. The market supplies the same run to every trader in it. What differs is the risk fraction each trader took per trade, and therefore how deep the run digs. Assuming fixed-fractional sizing — risking the same percentage of the current balance on each trade — with no winning trades in the run and no costs, fees, slippage, or gaps, the drawdown after eight losses is 1 − (1 − r)⁸, where r is the risk per trade:

| Risk per trade | Drawdown after 8 losses | Gain needed to recover |
|---|---|---|
| 1% | 7.7% | 8.4% |
| 2% | 14.9% | 17.5% |
| 5% | 33.7% | 50.7% |
| 10% | 57.0% | 132.3% |

The same eight losses leave the 1%-risk trader 7.7% down, needing a modest 8.4% to recover, and the 10%-risk trader 57.0% down, needing 132.3% — more than doubling the remaining capital. The 5%-risk trader sits in between at 33.7% down, needing 50.7% back, already past the knee discussed above.

This is the asymmetry curve applied to position sizing. Risk per trade does not just change how much a single loss hurts; through the streak, it chooses which row of the recovery table you end up climbing out of. For related reading, see the Monks Of Market articles on risk of ruin and on position sizing, and the general treatment in Trading Drawdown: Mathematics of Recovery.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Losing-streak depth bars showing the same 8-loss run at 1 percent, 2 percent, 5 percent and 10 percent risk per trade, with drawdown depth and gain needed for each." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same 8 losses, very different depths</text>
<text x="150" y="86" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">1% risk</text>
<rect x="240" y="70" width="80" height="26" rx="13" fill="#8fd6a0"/><text x="250" y="88" fill="#1c2b26" font-size="12" font-weight="700">7.7% deep</text>
<text x="150" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">2% risk</text>
<rect x="240" y="124" width="160" height="26" rx="13" fill="#2a3a34"/><text x="250" y="142" fill="#f2f7f4" font-size="12">14.9% deep</text>
<text x="150" y="194" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">5% risk</text>
<rect x="240" y="178" width="340" height="26" rx="13" fill="#e8c15a"/><text x="250" y="196" fill="#1c2b26" font-size="12" font-weight="700">33.7% deep</text>
<text x="150" y="248" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">10% risk</text>
<rect x="240" y="232" width="400" height="26" rx="13" fill="#e8825a"/><text x="250" y="250" fill="#ffffff" font-size="12" font-weight="700">57.0% deep · 132.3% to recover</text>
<text x="340" y="300" text-anchor="middle" fill="#92a59c" font-size="11">The market supplies the run; the risk fraction chooses the depth.</text>
</svg>
</figure>

### The 1% Companion Fact: Fixed-Fractional Losses Decelerate in Rupees

There is a subtlety worth knowing. Ten consecutive 1%-risk losses do not produce a 10% drawdown. They produce a 9.56% drawdown, needing a 10.6% gain — because each loss is 1% of a shrinking balance, so the rupee size of each loss gets smaller as the run goes on.

Fixed-fractional sizing is therefore a brake on depth, not a rescue. The brake softens the fall, but the required gain (10.6%) still exceeds the drawdown (9.56%), exactly as the asymmetry formula demands. Smaller risk fractions slow the descent; they do not repeal the curve. And remember the stated assumptions: real losing runs also include brokerage, fees, slippage, and gaps, which deepen real drawdowns beyond this clean arithmetic.

## Depth Is Not the Only Cost: Time Underwater, in General Terms Only

A deep drawdown costs more than the gain required to escape it. It also costs time underwater — the period spent below the peak, still trading, still needing to make back the loss before any new profit counts as progress.

How long does drawdown recovery take? There is no honest single answer, and this article deliberately gives no timeline. Recovery time depends on future returns, win rate, trade frequency, and variance — none of which are known in advance. Any recovery-time figure is therefore assumption-dependent, never a forecast and never an achievable return. If you ever see a recovery time quoted without its assumptions stated, treat it as marketing, not maths.

The general point is enough for sizing decisions: the deeper the hole, the longer the trader must keep trading well just to get back to where they started, while absorbing the psychological and practical pressure of being underwater.

Concretely, while underwater, every winning trade first goes toward closing the gap to the old peak; only gains beyond that gap count as new profit. Depth charges you twice — once in the size of the climb, and once in the time spent making it. That second cost is a further reason to keep drawdowns shallow, even before any numbers are attached to it.

## The Depth-Budget Rule: Size From the Drawdown You Refuse to Reach

Here is the takeaway, stated as plainly as possible:

1. **Pick the deepest drawdown you can actually keep trading through.** Not the deepest you can imagine tolerating on a good day, but the deepest you can keep trading through calmly, without changing your plan mid-hole, on a bad run.
2. **Read the climb it demands off the recovery table.** If your limit is a 20% drawdown, the climb is 25%. If it is 30%, the climb is 42.9%. If it is 50%, your remaining capital must double.
3. **Size so that an ordinary losing run cannot push you past it.** Use the streak table as the check: at your chosen risk per trade, what does an ordinary 8-loss run — the same 8-loss run used in the streak table above, unless you substitute your own longest observed losing run — do to you? If it breaches your limit, the risk fraction is too high — whatever return you were hoping for.

Worked check, using the tables above: if your limit is 20%, the climb is 25%; an 8-loss run at 2% risk digs 14.9% (inside the limit) while at 5% it digs 33.7% (past it) — so 2%, not 5%, fits this budget.

That is the depth-budget rule: set risk per trade from the drawdown you refuse to reach, not from the return you hope for. Cutting losses early, in this light, is arithmetic, not discipline folklore. It is what keeps you on the shallow, cheap part of the curve.

This rule is a risk-management heuristic, not a promise. It does not guarantee profit, and it does not guarantee recovery. It only keeps the climb you might face within a range you have already decided you can handle. A companion walkthrough of the drawdown-recovery calculator covers this same arithmetic from the calculator side, for readers who want to run their own numbers.

## Risks, Limits and Caveats: What This Curve Does Not Promise

The curve is exact arithmetic. Everything around it is not, so read these limits alongside the tables:

- **The streak table is a clean model.** It assumes fixed-fractional sizing, no winning trades in the run, and no costs, fees, slippage, or gaps. Real drawdowns include all of those, so real depth for a given run will typically be worse than the table shows. Do not size to the edge of the table as if it were a guarantee.
- **The depth-budget rule guarantees neither profit nor recovery.** No sizing rule, strategy, or calculator does. It manages the size of the hole you might face; it cannot ensure the market gives you the climb back.
- **Trading involves risk of loss of capital.** Leveraged instruments — including options and crypto futures — can lose money faster than unleveraged positions, and in some cases can lose more than the initial outlay. Leverage steepens every number in this article: the same percentage moves become larger rupee losses, deeper drawdowns, and longer climbs.
- **A deep drawdown can become unrecoverable in effect, even when it is recoverable in principle.** Mathematically, any drawdown under 100% has a finite required gain. In practice, the size of the climb, the time spent underwater, and account or position limits can end recovery before it completes — for example, a deep hole can breach an account limit before the climb finishes. That is a mechanism argument, not a quoted rule from any firm. At a 100% drawdown, the balance is zero and no gain can recover it.
- **No unverified statistics are used here.** This article makes no claim about trader success rates, and quotes no firm's limits or caps as fact. The argument rests entirely on the arithmetic above, which you can recompute yourself from the formula.

## Frequently Asked Questions

### Why does a 50% loss need a 100% gain to recover?

Because the loss and the gain are measured on different bases. On a Rs 1,00,000 peak, a 50% loss leaves Rs 50,000, so the Rs 50,000 that must be earned back is 100% of the Rs 50,000 trough. The remaining capital must double. That is drawdown asymmetry in its simplest form: D ÷ (1 − D) with D = 50% gives 100%.

### Why don't a loss and an equal gain cancel out?

Because equal percentages of different amounts are different rupee amounts. Lose 20% on Rs 1,00,000 and you lose Rs 20,000, leaving Rs 80,000. Gain 20% on Rs 80,000 and you gain only Rs 16,000, leaving Rs 96,000 — still 4% below the peak. In general, a D% loss followed by a D% gain leaves the account D² below the peak, since (1 − D)(1 + D) = 1 − D².

### How much gain do I need to recover from a 20% / 30% drawdown?

Use the formula D ÷ (1 − D). A 20% drawdown needs a 25% gain (20 ÷ 80 = 25%). A 30% drawdown needs a 42.9% gain (30 ÷ 70 = 42.9%). Both figures come straight from the drawdown recovery table above, rounded to one decimal place.

### What is maximum drawdown, and how is it measured?

Maximum drawdown is the single worst peak-to-trough decline, measured from the prior peak — not from the starting deposit. An account that grows to a peak and then falls is measured against that peak, so a 25% peak-to-trough fall can leave the account still above its starting deposit while still requiring a 33.3% gain to get back to the peak.

### How does risk per trade change how deep a losing streak digs?

The market supplies the same losing run; the risk fraction chooses the depth. Over eight consecutive losses at fixed-fractional risk, 1% risk per trade digs a 7.7% drawdown (8.4% to recover), 2% digs 14.9% (17.5% to recover), 5% digs 33.7% (50.7% to recover), and 10% digs 57.0% (132.3% to recover). Those figures assume no winning trades in the run and no costs, fees, slippage, or gaps.

### Is a deep drawdown ever truly unrecoverable?

Mathematically, no — any drawdown under 100% has a finite required gain under D ÷ (1 − D), so recovery is possible in principle. In effect, yes — the size of the climb, the time spent underwater, and account or position limits can make recovery unachievable in practice, and no recovery should ever be promised. At a 100% drawdown the balance is zero, and no gain can recover that.

---
title: "Long Straddle Strategy: What It Costs, Where It Breaks Even, and When It Fails"
description: "A long straddle buys an ATM call and put at the same strike. Learn its cost, breakevens, payoff, and the four ways it fails — with one fully worked ₹ example."
meta_description: "A long straddle buys an ATM call and put at the same strike. Learn its cost, breakevens, payoff, and the four ways it fails — with one fully worked ₹ example."
date: 2026-11-10
author: Kaizen
tag: "Indian options · Strategies"
keywords: ["long straddle strategy", "straddle breakeven", "straddle max loss", "long straddle vs long strangle", "when to use a straddle", "ATM straddle"]
---

*By Kaizen · 10 November 2026 · Monks Of Market*

## What a Long Straddle Is — in One Paragraph

A long straddle is a bet on movement, not direction. You buy a call option and a put option on the same underlying, at the same strike price — usually at-the-money (ATM) — and with the same expiry. You pay two premiums, and that combined premium is the most you can lose. You profit only if the underlying moves far enough in either direction by expiry to cover the cost of both legs. If it stays close to the strike, you lose — and if it pins the strike exactly at expiry, you lose the entire premium. That single trade-off — unlimited upside potential, bounded downside profit, and a capped but very real loss — is everything you need to understand before paying for a straddle.

This article answers one question precisely: what does a straddle cost, where does it break even, and when is it actually worth buying? It uses one consistent worked example throughout, so every number you meet later traces back to the same setup.

## How a Long Straddle Is Built

A long straddle has exactly four construction rules:

- **Same underlying.** Both legs are on the same index or stock. For most Indian retail traders, liquid index options are the practical default — illiquid stock options can carry wide bid-ask spreads that quietly eat the trade before it starts.
- **Same strike price.** Both legs share one strike, typically the at-the-money strike nearest the current price.
- **Same expiry.** Both legs expire on the same date.
- **Both legs bought.** You are long the call and long the put. You pay a debit at entry; you never receive premium on a long straddle.

The position starts roughly direction-neutral: the ATM call and put deltas roughly cancel, so a small move either way barely changes the position's value at first. What it is *not* neutral to is movement itself. The straddle gains value from a large move in either direction (positive gamma) and from rising implied volatility (positive vega), and it loses value every day the underlying sits still (negative theta). In plain language: you are paying rent on two options, and the rent is due daily.

## The Worked Example: One Straddle, Every Number

### The setup and the assumptions

Every number in this section is an **illustrative assumption chosen for clean arithmetic — not a live market quote**. Real premiums change every second with the underlying price, time to expiry, and implied volatility. The structure and the maths are what carry over; the prices will not.

Suppose an index is trading at **25,000**. You build a long straddle at the 25,000 strike, same expiry:

| Leg | Action | Strike | Illustrative premium (per unit) |
|---|---|---|---|
| Call | Buy | 25,000 | ₹120 |
| Put | Buy | 25,000 | ₹110 |
| **Total** | | | **₹230 per unit** |

Your maximum loss at expiry, before charges, is the total premium paid: **₹230 per unit**. That loss is suffered in full only if the index closes exactly at 25,000 at expiry and both legs expire worthless. Brokerage and statutory charges are additional and small relative to the premium here; the full charge breakdown belongs to a dedicated charges guide and is not re-taught in this article. Your capital at risk is the total premium multiplied by your lot size, plus those charges — so before entering, check that this amount fits the risk-per-trade limit you actually use, not the one you wish you used.

### Breakevens and expiry outcomes

At expiry, only intrinsic value remains. The call is worth the amount the index finishes above the strike; the put is worth the amount it finishes below it; the other leg is worth zero. Subtract the ₹230 you paid, and you have the profit or loss.

The two breakevens are:

- **Upper breakeven = strike + total premium = 25,000 + 230 = 25,230**
- **Lower breakeven = strike − total premium = 25,000 − 230 = 24,770**

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 360" role="img" aria-label="Long straddle breakeven table showing upper breakeven 25230, lower breakeven 24770, and profit or loss at expiry for the worked example." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Long straddle — breakevens and expiry outcomes</text>
<text x="340" y="58" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Strike 25,000 · Call ₹120 + Put ₹110 = Total premium ₹230</text>
<text x="340" y="82" text-anchor="middle" fill="#92a59c" font-size="12">Breakevens: 24,770 (lower) · 25,230 (upper)</text>
<text x="120" y="116" text-anchor="start" fill="#92a59c" font-size="12" font-weight="700">Index at expiry</text>
<text x="560" y="116" text-anchor="end" fill="#92a59c" font-size="12" font-weight="700">P/L per unit</text>
<text x="120" y="148" text-anchor="start" fill="#f2f7f4" font-size="13">24,000</text><text x="560" y="148" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹770</text>
<text x="120" y="180" text-anchor="start" fill="#f2f7f4" font-size="13">24,500</text><text x="560" y="180" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹270</text>
<text x="120" y="212" text-anchor="start" fill="#f2f7f4" font-size="13">24,770 — lower breakeven</text><text x="560" y="212" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">₹0</text>
<text x="120" y="244" text-anchor="start" fill="#f2f7f4" font-size="13">25,000 — strike (max loss)</text><text x="560" y="244" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">−₹230</text>
<text x="120" y="276" text-anchor="start" fill="#f2f7f4" font-size="13">25,230 — upper breakeven</text><text x="560" y="276" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">₹0</text>
<text x="120" y="308" text-anchor="start" fill="#f2f7f4" font-size="13">25,500</text><text x="560" y="308" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹270</text>
<text x="120" y="340" text-anchor="start" fill="#f2f7f4" font-size="13">26,000</text><text x="560" y="340" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹770</text>
<text x="340" y="348" text-anchor="middle" fill="#92a59c" font-size="12">P/L before charges, per unit — multiply by lot size for the real outlay</text>
</svg>
</figure>

| Index at expiry | Winning leg's intrinsic value | Less premium paid | Profit / loss per unit |
|---|---|---|---|
| 24,000 | Put: 1,000 | − 230 | **+₹770** |
| 24,500 | Put: 500 | − 230 | **+₹270** |
| 24,770 | Put: 230 | − 230 | **₹0 (lower breakeven)** |
| 25,000 | Neither (both worthless) | − 230 | **−₹230 (maximum loss)** |
| 25,230 | Call: 230 | − 230 | **₹0 (upper breakeven)** |
| 25,500 | Call: 500 | − 230 | **+₹270** |
| 26,000 | Call: 1,000 | − 230 | **+₹770** |

Three facts fall out of this table and are worth memorising. First, the move needed just to break even is ₹230 in either direction — about 0.92% of 25,000. Second, beyond either breakeven, profit grows roughly rupee-for-rupee with the index: every extra point of move is roughly an extra rupee per unit. Third, the downside profit is bounded even though the upside is not: if the index fell all the way to zero, the put would be worth 25,000 and the net profit would be 25,000 − 230 = **₹24,770 per unit**. Nobody plans for that; it is simply the arithmetic ceiling on the put side.

Note what the table does *not* show: life before expiry. These are expiry numbers. Before expiry, both legs still carry time value, so a fast move — or a rise in implied volatility — can push the straddle into profit well inside the breakevens. That is why many straddle buyers exit on the move rather than holding to expiry. It is also why the expiry table understates the trade's real behaviour: the straddle is a living position, not a lottery ticket that settles only on the last day.

## What the Payoff Looks Like — and Why It Is V-Shaped

Plot profit against the index level at expiry and you get a V. The bottom of the V sits at the strike, where the loss is deepest (−₹230). The arms rise on both sides, crossing zero at the two breakevens (24,770 and 25,230) and climbing from there. The zone between the breakevens is the loss zone: any expiry close inside it loses money, with the loss shrinking as the close moves toward either breakeven.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Long straddle payoff diagram showing a V-shaped profit curve with maximum loss at the strike and breakevens at 24770 and 25230." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Long straddle payoff at expiry — V-shaped</text>
<line x1="60" y1="200" x2="620" y2="200" stroke="#92a59c" stroke-width="1"/>
<polygon points="276,200 404,200 340,248" fill="#e8825a" opacity="0.25"/>
<polyline points="60,40 340,248 620,40" fill="none" stroke="#e8825a" stroke-width="3"/>
<line x1="276" y1="60" x2="276" y2="260" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="404" y1="60" x2="404" y2="260" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<text x="276" y="278" text-anchor="middle" fill="#e8825a" font-size="12">BE 24,770</text>
<text x="404" y="278" text-anchor="middle" fill="#e8825a" font-size="12">BE 25,230</text>
<text x="352" y="252" text-anchor="start" fill="#f2f7f4" font-size="12">max loss −₹230</text>
<text x="340" y="294" text-anchor="middle" fill="#92a59c" font-size="12">Profit beyond either breakeven; loss zone shaded between breakevens</text>
</svg>
</figure>

The V-shape is the whole strategy in one picture, and it explains the straddle's reputation honestly. The shape is symmetrical and reassuring — but the market does not spend most of its time on the arms. It spends most of its time near the bottom of the V, where the straddle bleeds. Understanding that is more important than memorising the diagram.

## When a Long Straddle Fails (and the Fix for Each Failure)

Most straddles lose money, and they usually lose for one of four reasons. Each one has a symptom you can recognise and a fix you can apply *before* the next trade, not after.

### Failure 1: The market goes nowhere

**Symptom:** The index drifts sideways for days. Both legs lose time value daily, and because one leg will always expire worthless, the winning leg has to earn back the cost of both. A straddle held through a quiet week can lose a large fraction of its premium without the index ever moving against you — it simply did not move at all.

**Fix:** Give the trade a time stop as well as a price plan. Decide in advance: "If the expected event has passed and the index has not moved by X, I exit, whatever the position shows." A straddle without a time stop is a subscription to decay.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Theta decay illustration showing both straddle legs losing value on a flat underlying as expiry approaches." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Theta bleed — both legs decay while the index stays at 25,000</text>
<rect x="60" y="56" width="18" height="4" fill="#e8825a"/><text x="86" y="64" text-anchor="start" fill="#f2f7f4" font-size="12">Call leg (₹120)</text>
<rect x="240" y="56" width="18" height="4" fill="#f2f7f4"/><text x="266" y="64" text-anchor="start" fill="#f2f7f4" font-size="12">Put leg (₹110)</text>
<rect x="420" y="56" width="18" height="4" fill="#92a59c"/><text x="446" y="64" text-anchor="start" fill="#f2f7f4" font-size="12">Combined (₹230)</text>
<line x1="60" y1="250" x2="620" y2="250" stroke="#92a59c" stroke-width="1"/>
<polyline points="80,151 260,172 440,205 600,242" fill="none" stroke="#e8825a" stroke-width="3"/>
<polyline points="80,159 260,180 440,209 600,242" fill="none" stroke="#f2f7f4" stroke-width="3"/>
<polyline points="80,60 260,101 440,163 600,233" fill="none" stroke="#92a59c" stroke-width="3" stroke-dasharray="6 4"/>
<text x="80" y="50" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">₹230</text>
<text x="80" y="141" text-anchor="start" fill="#f2f7f4" font-size="12">₹120</text>
<text x="80" y="172" text-anchor="start" fill="#f2f7f4" font-size="12">₹110</text>
<text x="600" y="222" text-anchor="end" fill="#f2f7f4" font-size="12">₹20 left</text>
<text x="80" y="278" text-anchor="start" fill="#92a59c" font-size="12">30 days out</text>
<text x="340" y="278" text-anchor="middle" fill="#92a59c" font-size="12">15 days out</text>
<text x="600" y="278" text-anchor="end" fill="#92a59c" font-size="12">Expiry</text>
</svg>
</figure>

### Failure 2: IV crush after the event

**Symptom:** The event happens, the index moves — and the straddle still loses. This is the cruellest failure and the most common around earnings, Budget announcements, and policy decisions. Before a known event, implied volatility is inflated because the market expects a move; both legs are expensive. After the event, uncertainty resolves and implied volatility collapses, deflating both legs at once. The index move has to beat not just the breakevens but the evaporation of that inflated volatility.

**Fix:** Compare the straddle's cost with the move the market is already pricing in. The combined ATM premium is, to a close approximation, the market's implied move for the period. If the premium implies a 2% move and the event typically delivers 1%, you are paying for a move that history says will not arrive. Either skip the trade, or wait until after the event when volatility — and therefore the premium — has normalised.

### Failure 3: Buying when volatility is already expensive

**Symptom:** You enter when implied volatility is at a peak — days before a major announcement, when everyone wants protection. Your breakevens sit far apart because the premiums are fat, so the index must travel further just to break even. You have bought the most expensive version of the trade at the worst moment.

**Fix:** Check the volatility environment before entry, not after. Low-IV entries are preferred for straddle buyers precisely because cheaper premiums mean closer breakevens. If IV is already sky-high, the honest answer is often to wait. Patience is a position.

### Failure 4: Holding to expiry with no exit plan

**Symptom:** The index moves in your favour, the straddle shows a profit — and you hold, hoping for more, until the move reverses or expiry pinning grinds the premium away. Pinning at the strike into expiry is not an edge case; it is the maximum-loss point, and quiet expiries drift toward it.

**Fix:** Write the exit plan before entry: a profit-taking trigger (for example, exiting when the move reaches a pre-set level or the position doubles the premium at risk — decide your own rule and keep it), a time stop, and a rule for the day of the event itself. Exit on the move is a strategy, not a failure of nerve.

## When to Use a Straddle — and When Not To

A long straddle fits one specific situation: **a known catalyst with an unknown direction**. The classic cases are company earnings, a Budget announcement, a central-bank policy decision, or an election result — events where a large move is plausible but its direction is genuinely uncertain. The checklist before entry is short:

1. **Is there a real catalyst?** No catalyst, no straddle. Buying volatility in a quiet market is paying rent with no tenant.
2. **Is implied volatility reasonable?** Compare the straddle's cost with the move the market is pricing in, and with what similar events delivered in the past.
3. **Is the premium affordable as a total loss?** Treat the entire premium as money you may lose. If losing it would break your risk rules, the position is too big — regardless of how confident you feel about the event.
4. **Is there an exit plan?** Profit trigger, time stop, and a decision for event day, all written before entry.
5. **Is the underlying liquid?** Prefer liquid index options over illiquid stock options, where wide spreads can turn a good idea into a bad fill.

Do not use a straddle when there is no catalyst, when implied volatility is already extreme, when the premium alone would breach your risk-per-trade limit, or when you cannot state your exit plan in one sentence. "I will hold and see" is not an exit plan.

## Long Straddle vs Long Strangle: Which Fits?

The long strangle is the straddle's cheaper cousin: instead of buying both legs at the same ATM strike, you buy an out-of-the-money call above the price and an out-of-the-money put below it. The trade-off is the whole decision, and it fits in one table. (The full strangle — its construction, example, and payoff — is covered in its own dedicated guide; this table is only the chooser.)

| | Long straddle | Long strangle |
|---|---|---|
| Strikes | Same strike, usually ATM | Two different strikes, both out-of-the-money |
| Upfront cost | Higher (ATM options are the most expensive) | Lower (OTM options cost less) |
| Breakevens | Closer to the current price | Further away — a larger move is needed |
| Move needed to profit | Smaller | Larger |
| Sensitivity to a small move | Responds sooner | Needs a bigger move before it responds |
| Maximum loss | Total premium paid (higher) | Total premium paid (lower) |

Neither is "better" in general. Choose the straddle when you expect a sharp move, want the tightest breakevens, and can afford the higher premium. Choose the strangle when your budget is tighter, you expect a very large move, and you accept wider breakevens in exchange for paying less upfront. If neither trade-off fits your view and your budget, the right trade is no trade.

## The Short Straddle, Briefly — and Why Beginners Should Not Sell It Naked

The short straddle is the mirror image: sell the ATM call and the ATM put, collect both premiums, and profit if the underlying stays near the strike. It looks like easy income and it is the most dangerous trade in this article. A sharp move either way produces losses that grow rupee-for-rupee with the underlying — and on the upside, there is no ceiling at all. **Beginners should not sell straddles naked.** Selling options without a hedge or a defined-risk structure exposes you to losses far larger than the premium collected, and margin requirements can rise sharply exactly when the trade is going against you. This article does not recommend the short straddle; it names it only so you recognise it and understand why the long straddle's capped loss is worth paying for.

## Before You Pay Two Premiums: The Checklist

- The catalyst is real, dated, and likely to move the underlying — not a vague hope.
- The total premium is money you can afford to lose in full, within your risk-per-trade limit.
- You have checked the volatility environment; you are not buying at peak IV without knowing it.
- You have a profit-taking trigger, a time stop, and an event-day decision — written before entry.
- The underlying is liquid enough that you can exit at a fair price.
- You understand that the maximum loss is the full premium, that charges are additional, and that no strategy guarantees a profit.

**Risk disclosure:** Options trading involves substantial risk, including the possible loss of your entire premium and, for sellers, losses beyond the premium received. A long straddle limits your loss to the premium paid plus charges, but that loss can still be total. This article is educational only and is not investment advice, a recommendation, or a promise of returns. Past event moves do not predict future ones.

## Frequently Asked Questions

### What is a long straddle in options trading?

A long straddle buys a call and a put on the same underlying, at the same strike price (usually at-the-money) and with the same expiry. It profits from a large move in either direction and loses money if the underlying stays close to the strike. Its maximum loss is the total premium paid for both legs.

### How do you calculate straddle breakeven points?

Add the call and put premiums to get the total premium. The upper breakeven is the strike plus the total premium, and the lower breakeven is the strike minus the total premium. In the worked example: strike 25,000 and total premium ₹230 give breakevens of 25,230 and 24,770. These are at-expiry breakevens before charges.

### What is the maximum loss in a long straddle?

The total premium paid, plus charges. In the worked example that is ₹230 per unit, suffered in full if the index closes exactly at the 25,000 strike at expiry and both legs expire worthless. The loss is capped — unlike a short straddle, it cannot exceed what you paid.

### Long straddle vs long strangle: which is better?

Neither is always better. A straddle costs more but has breakevens closer to the current price, so it needs a smaller move to profit. A strangle costs less but its out-of-the-money strikes push the breakevens further away, so it needs a larger move. Choose based on your budget, the size of move you expect, and how much premium you can afford to lose.

### When should you use a long straddle?

When a known catalyst — earnings, a Budget announcement, a policy decision, or an election result — is likely to cause a large move, but you genuinely do not know the direction. Prefer entries when implied volatility is not already extreme, and always pair the trade with an exit plan.

### Is a long straddle profitable? Why do most straddles lose money?

A straddle is profitable only when the realised move beats the move already priced into the premiums, or when rising implied volatility lifts the position before expiry. Most straddles lose because most periods do not deliver a big enough move: time decay bleeds both legs on flat days, and IV crush after a known event can deflate both legs even when the underlying moves.

### What happens to a long straddle if the market stays flat?

Both legs lose time value every day, and the position's value shrinks toward zero as expiry approaches. At expiry, if the underlying closes at the strike, both legs expire worthless and the entire premium is lost. A flat market is the straddle's worst environment, not a neutral one.

### Long straddle vs short straddle: what is the difference?

A long straddle buys both legs, pays premium, has capped loss, and profits from a big move. A short straddle sells both legs, collects premium, profits if the underlying stays near the strike, and carries unlimited risk on the upside. Beginners should not sell straddles naked.

### How much capital do you need for a straddle?

The total premium multiplied by your lot size, plus brokerage and statutory charges. In the worked example the premium is ₹230 per unit, so the premium cost is ₹230 times the number of units in your lot, plus charges. Check your broker's current lot size before trading — lot sizes change — and size the trade so the full premium at risk fits your risk-per-trade limit.

### Should you hold a straddle till expiry?

Usually not by default. A fast move or a rise in implied volatility can make the straddle profitable well before expiry, and holding to expiry exposes you to pinning at the strike — the maximum-loss point. Decide your exit triggers before entry, and treat "exit on the move" as the normal plan, with holding to expiry as the exception that needs its own reason.

---
title: "Long Strangle Strategy: The Cheaper Big-Move Bet — and Exactly How Far the Market Must Move Before It Pays"
description: "Long strangle strategy guide: OTM call + OTM put at different strikes, breakevens 25,665/24,335, max loss Rs 165/unit, flat payoff and when to use a strangle."
meta_description: "Long strangle strategy guide: OTM call + OTM put at different strikes, breakevens 25,665/24,335, max loss Rs 165/unit, flat payoff and when to use a strangle."
date: 2026-11-10
author: Kaizen
tag: "Indian options · Strategies"
keywords: ["long strangle strategy", "strangle breakeven", "strangle max loss", "long strangle vs long straddle", "when to use a strangle", "strangle strike selection"]
---

*By Kaizen · 10 November 2026 · Monks Of Market*

A long strangle strategy fits a very specific situation: you expect a very big move, you do not know which way it will go, and you want that bet at a lower upfront cost than a straddle. It achieves this by buying two out-of-the-money (OTM) options instead of at-the-money ones — one call and one put, at different strikes, with the same expiry.

That lower price comes with a catch to understand before paying anything. The market has to move further before a strangle pays than it would for a straddle. And if it stays anywhere between the two strikes at expiry, you lose the entire premium paid. This article works through one consistent example, end to end, so you can see exactly how far the move has to be.

The example used throughout is illustrative only. The underlying is an index-style level of 25,000 points — a round illustrative level, not a live quote. You buy a 24,500 put at an assumed ₹80 per unit and a 25,500 call at an assumed ₹85 per unit. Both premiums are assumed illustrative figures, never live market quotes. The total premium is ₹165 per unit, plus charges. At expiry, this strangle profits only above 25,665 or below 24,335, before charges. Everything that follows uses these same numbers — and nothing else.

The trade-off, in one line: **cheaper entry, wider dead zone.**

## What a Long Strangle Is: A Cheaper Bet on a Very Big Move in Either Direction

A long strangle buys one OTM call **and** one OTM put on the same underlying, at **different** strikes, with the **same** expiry. The call strike sits above the current price; the put strike sits below it. In the worked example, the underlying is at 25,000, the call strike is 25,500, and the put strike is 24,500.

It is direction-neutral and movement-dependent. Direction-neutral means you are not betting on up or down. Movement-dependent means the size of the move is what matters — a small move, even in the "right" direction, is not enough. You profit only if the underlying makes a very large move in either direction, far enough to cover both premiums.

That single fact is both the appeal of the strangle options strategy and its risk. You pay ₹165 per unit in the example — the assumed ₹80 put premium plus the assumed ₹85 call premium — and that whole payment is at risk if the move does not arrive.

The dead zone is the gap between the strikes: 24,500 to 25,500 in this example, a 1,000-point-wide zone. Unlike a straddle, where the maximum loss sits at a single point, a strangle's maximum loss stretches across that entire zone. Any expiry close inside it loses the full ₹165 per unit, plus charges.

## How a Long Strangle Is Constructed

The basic construction of this OTM strangle has two legs, in equal numbers, on the same underlying and the same expiry:

- **Buy one OTM call** — strike 25,500 in the example, 500 points (2.00%) above the underlying level of 25,000.
- **Buy one OTM put** — strike 24,500 in the example, 500 points (2.00%) below the underlying level of 25,000.

At entry, both legs are out of the money, so neither leg has any intrinsic value. The call's intrinsic value is max(0, 25,000 − 25,500) = 0, and the put's intrinsic value is max(0, 24,500 − 25,000) = 0. Both premiums are therefore pure time value — what options traders call extrinsic value.

That is why a strangle costs less than an at-the-money straddle on the same underlying and expiry: you are buying no intrinsic value at all, only time and volatility value. It is also why a strangle responds more slowly to a small move. Neither leg is in the money yet, so an early drift of a few hundred points does little for you. The legs only start gaining intrinsic value once the underlying crosses a strike. Even then, as the next sections show, crossing a strike is not the same as reaching profit.

You pay both premiums up front. That payment — ₹165 per unit in the example, plus charges — is the capital at risk and the maximum loss for the buyer. It is a defined-risk trade: you cannot lose more than the premium paid, plus charges, by holding this long strangle. What you can lose, easily and entirely, is all of it.

## Worked Example, End to End: From Two Premiums to Two Breakevens

Here are the stated assumptions, carried through the rest of the article unchanged:

- Underlying at entry: 25,000 (index-style illustrative level, not a live quote)
- Buy one OTM put, strike 24,500, at an assumed ₹80 per unit
- Buy one OTM call, strike 25,500, at an assumed ₹85 per unit
- Same expiry for both legs
- All amounts are per unit (per index point); charges are excluded from every payoff number and stated as "plus charges"
- No lot total is given, because no lot size is used in this article — capital is stated per unit and in formula form only (total premium × lot size + charges)

**Step 1 — Total premium paid = call premium + put premium = ₹85 + ₹80 = ₹165 per unit, plus charges.**

**Step 2 — Upper breakeven = call strike + total premium = 25,500 + 165 = 25,665.**

**Step 3 — Lower breakeven = put strike − total premium = 24,500 − 165 = 24,335.**

**Step 4 — Dead-zone width = call strike − put strike = 25,500 − 24,500 = 1,000 points, which is 4.00% of the 25,000 entry level.**

**Step 5 — Move needed from entry to profit: 665 points each way, or 2.66% of 25,000.** Upside: 25,665 − 25,000 = 665 points. Downside: 25,000 − 24,335 = 665 points. The symmetry here follows from the symmetric strikes — 500 points each way — and is not a general rule for asymmetric strikes. If your strikes sit unevenly around the underlying, the two moves needed will differ.

Notice what the breakevens demand. The underlying must not merely reach a strike. It must travel 500 points to a strike, then a further 165 points beyond it, just to break even before charges. After charges, the true breakevens sit slightly further out still. Judge any expected move against 25,665 and 24,335 — not against 25,500 and 24,500.

## Strangle Payoff Diagram at Expiry: The Flat-Bottomed Valley

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Long strangle payoff diagram showing flat maximum loss of Rs 165 per unit between strikes 24500 and 25500 and profit beyond breakevens 24335 and 25665" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Long strangle payoff at expiry — flat-bottomed valley</text>
<line x1="60" y1="190" x2="620" y2="190" stroke="#92a59c" stroke-width="1"/>
<rect x="200" y="190" width="280" height="64" fill="#e8825a" opacity="0.25"/>
<polyline points="60,60 200,254 480,254 620,60" fill="none" stroke="#e8825a" stroke-width="3"/>
<line x1="154" y1="60" x2="154" y2="260" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="526" y1="60" x2="526" y2="260" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<text x="154" y="278" text-anchor="middle" fill="#e8825a" font-size="12">BE 24,335</text>
<text x="340" y="278" text-anchor="middle" fill="#f2f7f4" font-size="12">Strikes 24,500 / 25,500</text>
<text x="526" y="278" text-anchor="middle" fill="#e8825a" font-size="12">BE 25,665</text>
<text x="340" y="240" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Flat max loss −₹165</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Profit beyond either breakeven</text>
</svg>
</figure>

The at-expiry payoff of a long strangle is flat-bottomed — a valley, not a V. There is a flat loss zone between the two strikes, profit beyond either breakeven, and, beyond breakeven, profit that grows roughly rupee-for-rupee with the underlying, before charges.

The flat part is the point most beginners miss. Between the strikes, the loss does **not** shrink as the underlying drifts toward a strike from inside the zone. Any expiry close strictly between 24,500 and 25,500 gives the same result: both legs expire worthless, and the loss is the full ₹165 per unit plus charges. An expiry at 25,000 (unchanged) loses ₹165 per unit. An expiry at 25,500 (a 500-point move) still loses ₹165 per unit. An expiry at 24,500 (a 500-point move the other way) still loses ₹165 per unit.

Only once the underlying passes a strike does the loss start to shrink, linearly, as the in-the-money leg gains intrinsic value. At 25,600, for example, the call has ₹100 of intrinsic value (25,600 − 25,500), so the net result is ₹100 − ₹165 = −₹65 per unit. The trade has moved — and it is still losing. Profit begins only beyond 25,665 on the upside or below 24,335 on the downside, before charges.

The expiry outcomes for the worked example, per unit and excluding charges, are:

| Expiry level | Net profit / loss per unit | What happened |
|---|---:|---|
| 27,000 | +₹1,335 | Large upside move, well beyond the upper breakeven |
| 26,000 | +₹335 | Upside move beyond the upper breakeven (25,665) |
| 25,665 | ₹0 | Exactly at the upper breakeven; break even before charges, a small loss after charges |
| 25,600 | −₹65 | Passed the call strike but stopped short of breakeven — still a loss |
| 25,500 | −₹165 | At the call strike: full maximum loss despite a 500-point move |
| 25,000 | −₹165 | Flat market: full maximum loss, both legs worthless |
| 24,500 | −₹165 | At the put strike: full maximum loss despite a 500-point move down |
| 24,335 | ₹0 | Exactly at the lower breakeven; break even before charges, a small loss after charges |
| 24,000 | +₹335 | Downside move beyond the lower breakeven (24,335) |
| 23,000 | +₹1,335 | Large downside move, well beyond the lower breakeven |
| 0 (floor case only) | +₹24,335 | Theoretical maximum downside profit; not a realistic expectation |

Maximum profit is theoretically unlimited on the call side: above 25,500, the call's intrinsic value grows rupee-for-rupee with the underlying, minus the ₹165 premium paid. On the put side it is bounded, because the underlying cannot fall below zero. Maximum downside profit per unit is put strike − total premium = 24,500 − 165 = ₹24,335, reached only if the underlying falls to zero (put intrinsic value 24,500 − 0 = 24,500; 24,500 − 165 = 24,335).

Take care here, because the numbers coincide. ₹24,335 is both the lower breakeven **level** and the bounded downside maximum **profit per unit**. These are different concepts that happen to share the same number in this example because the floor is zero. Do not confuse them: the breakeven is a price level the underlying must cross; the maximum profit is a rupee amount per unit earned only at the floor.

## Strangle Breakeven Formulas (and the Table to Check Them Against)

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 360" role="img" aria-label="Long strangle breakeven table for underlying 25000 with 24500 put at Rs 80 and 25500 call at Rs 85 showing breakevens 24335 and 25665 and maximum loss Rs 165 per unit" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Long strangle — breakevens and dead zone (worked example)</text>
<text x="340" y="58" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Underlying 25,000 · Put 24,500 @ ₹80 + Call 25,500 @ ₹85 = ₹165 total</text>
<text x="60" y="96" text-anchor="start" fill="#f2f7f4" font-size="13">Put strike</text><text x="620" y="96" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">24,500 (premium ₹80)</text>
<text x="60" y="126" text-anchor="start" fill="#f2f7f4" font-size="13">Call strike</text><text x="620" y="126" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">25,500 (premium ₹85)</text>
<text x="60" y="156" text-anchor="start" fill="#f2f7f4" font-size="13">Total premium</text><text x="620" y="156" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">₹165 per unit</text>
<text x="60" y="186" text-anchor="start" fill="#f2f7f4" font-size="13">Lower breakeven</text><text x="620" y="186" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">24,335</text>
<text x="60" y="216" text-anchor="start" fill="#f2f7f4" font-size="13">Upper breakeven</text><text x="620" y="216" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">25,665</text>
<text x="60" y="246" text-anchor="start" fill="#f2f7f4" font-size="13">Dead zone</text><text x="620" y="246" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">24,500–25,500 (1,000 points wide)</text>
<text x="60" y="276" text-anchor="start" fill="#f2f7f4" font-size="13">Move needed</text><text x="620" y="276" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">665 points either way from 25,000</text>
<text x="60" y="306" text-anchor="start" fill="#f2f7f4" font-size="13">Maximum loss</text><text x="620" y="306" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">₹165 per unit + charges</text>
<text x="340" y="350" text-anchor="middle" fill="#92a59c" font-size="12">Profit only beyond either breakeven, before charges</text>
</svg>
</figure>

The strangle breakeven formulas are simple, and they are the same for any strangle once you know its two premiums:

- **Total premium paid = call premium + put premium.** In the example: ₹85 + ₹80 = ₹165 per unit, plus charges.
- **Upper breakeven = call strike + total premium.** In the example: 25,500 + 165 = 25,665.
- **Lower breakeven = put strike − total premium.** In the example: 24,500 − 165 = 24,335.
- **Maximum loss at expiry (the strangle max loss) = total premium paid, plus charges**, suffered in full if the underlying closes anywhere between the two strikes at expiry.

The check table for the worked example:

| Item | Value |
|---|---:|
| Underlying at entry (illustrative) | 25,000 |
| Put strike / assumed premium | 24,500 / ₹80 per unit |
| Call strike / assumed premium | 25,500 / ₹85 per unit |
| Total premium paid | ₹165 per unit, plus charges |
| Dead zone (loss zone) | 24,500–25,500 (1,000 points, 4.00% of entry) |
| Upper breakeven | 25,665 |
| Lower breakeven | 24,335 |
| Move needed to profit | 665 points (2.66%) each way |
| Maximum loss at expiry | ₹165 per unit, plus charges |
| Maximum profit, upside | Theoretically unlimited |
| Maximum profit, downside | ₹24,335 per unit (floor case only) |

Remember the charges caveat on every number in this table: these are expiry breakevens **before** charges. After charges, the true breakevens sit slightly further out, and the "break even" rows at 25,665 and 24,335 would in reality be small losses. Judge any expected move against breakevens with that margin in mind.

## Long Strangle vs Long Straddle: Which Fits Your Expected Move?

The long strangle vs long straddle choice is a trade of cost against distance. Neither is better in general. Each fits a different expectation.

| | Long strangle | Long straddle |
|---|---|---|
| Legs | OTM call + OTM put, two different strikes | At-the-money legs at one strike |
| Upfront cost | Cheaper (no intrinsic value in either leg) | Costlier |
| Breakevens | Wider apart (25,665 / 24,335 in the example) | Tighter |
| Maximum-loss shape | A whole zone — the full gap between the strikes | A single point |
| Response to a small move | Slower; both legs start out of the money | Faster |
| Move needed in the example | 665 points (2.66%) each way | Smaller (a straddle's tighter breakevens need less movement) |
| Best fit | Budget tight, very large move expected | Move expected, smaller move must suffice, higher premium affordable |

Choose the strangle when your budget is tight and you expect a very large move — large enough to clear 25,665 or 24,335 in example terms, not merely to reach a strike. Choose the straddle when you expect a move but want a smaller move to suffice, and you can afford the higher premium. The companion long-straddle discussion, referenced here in plain text only, covers that alternative in full; this article does not re-teach its construction.

The strangle-specific heartbreak deserves stating plainly. A move that would have profited a straddle can still be a total or partial loss on a strangle if it stops inside the strikes or short of a breakeven. Expiry at 25,000 or 25,500 loses the full ₹165 per unit in the example. Expiry at 25,600 loses ₹65 per unit despite the underlying passing the call strike. The strangle did not fail because the market stood still — it failed because the market did not move far enough. That distinction is the entire cost of the cheaper entry.

## Strangle Strike Selection: Choosing the Strike Width — Cheaper, but a Bigger Move Needed

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Strangle strike width trade-off table comparing wider strikes with lower premium but wider dead zone against narrower strikes with higher premium but tighter breakevens" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Strangle strike width — the trade-off</text>
<text x="380" y="64" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">Wider strikes</text>
<text x="620" y="64" text-anchor="end" fill="#92a59c" font-size="12" font-weight="700">Narrower strikes</text>
<text x="60" y="108" text-anchor="start" fill="#f2f7f4" font-size="13">Premium</text><text x="380" y="108" text-anchor="middle" fill="#f2f7f4" font-size="13">Lower</text><text x="620" y="108" text-anchor="end" fill="#f2f7f4" font-size="13">Higher</text>
<text x="60" y="152" text-anchor="start" fill="#f2f7f4" font-size="13">Dead zone</text><text x="380" y="152" text-anchor="middle" fill="#f2f7f4" font-size="13">Wider</text><text x="620" y="152" text-anchor="end" fill="#f2f7f4" font-size="13">Tighter</text>
<text x="60" y="196" text-anchor="start" fill="#f2f7f4" font-size="13">Move needed</text><text x="380" y="196" text-anchor="middle" fill="#f2f7f4" font-size="13">Larger</text><text x="620" y="196" text-anchor="end" fill="#f2f7f4" font-size="13">Smaller</text>
<text x="60" y="240" text-anchor="start" fill="#f2f7f4" font-size="13">Small-move response</text><text x="380" y="240" text-anchor="middle" fill="#f2f7f4" font-size="13">Slower</text><text x="620" y="240" text-anchor="end" fill="#f2f7f4" font-size="13">Faster</text>
<text x="340" y="276" text-anchor="middle" fill="#92a59c" font-size="12">Wider = cheaper entry, harder payoff · Narrower = dearer entry, easier payoff</text>
</svg>
</figure>

There is no single best width for a strangle. Width is a trade-off, chosen from your expected move size and your budget:

| | Wider strikes | Narrower strikes |
|---|---|---|
| Premium cost | Lower | Higher |
| Dead-zone width | Wider | Narrower |
| Move needed before profit | Larger | Smaller |
| Breakevens | Further apart | Tighter |
| Response to a small move | Slower | Faster, closer to straddle behaviour |

The worked example is the anchor: strikes 1,000 points apart (24,500 to 25,500) around a 25,000 underlying, demanding a 665-point (2.66%) move each way. Widen the strikes further and the trade gets cheaper — but the dead zone widens with it and the move needed grows. Narrow the strikes and the trade gets costlier — but the dead zone narrows, the breakevens tighten, and the position starts behaving more like a straddle.

The decision rule follows directly. If you expect a smaller move, narrower strikes fit better, provided you can afford the higher premium. If budget is the binding constraint, wider strikes are the compromise — but only with eyes open about the larger move they require. Do not pick the widest, cheapest strikes and then expect a modest move to pay. That combination is precisely how a strangle loses while the market "moved in the right direction." No second worked example with different premiums is given here, deliberately, so the one consistent set of numbers above is never mixed with another.

## When to Use a Strangle: Three Conditions That Must Line Up

A long strangle earns its place only when three conditions line up:

1. **A known catalyst with unknown direction, where a very large move is possible.** Company earnings, Budget announcements, RBI policy decisions, election results, or another binary outcome — events where the direction is genuinely uncertain but the size of the reaction could be large. This is the classic strangle before earnings setup, and it is also where the strategy's biggest trap lives, as the next section explains.
2. **Implied volatility (IV) relatively low, so the premiums are not already inflated.** Low-IV entry keeps the breakevens as close as the strategy allows. If IV is already high, even OTM premiums are expensive, and the breakevens are pushed further out before the event even happens.
3. **The straddle's cost is more than you want to risk.** The strangle's natural home is the budget-constrained big-move bet: you want exposure to a very large move in either direction, and the at-the-money straddle's premium is too high for the capital you are willing to put at risk.

In India, index options are the liquid default for strangles — Nifty strangle positions on liquid index contracts are the usual starting point — and liquid index options are preferable to illiquid stock options for this strategy, for the execution reasons covered below.

If any of the three conditions fails, the strangle is usually the worse choice despite its lower price. If the expected move is only moderate, the wider breakevens will defeat it. If IV is already sky-high, the inflated breakevens will defeat it. A cheap ticket to a move that never arrives is still a lost ticket.

## When It Fails, Honestly: Five Ways a Strangle Loses

The winning leg of a strangle must earn back the cost of both legs. Most of the time, the market does not move far enough, fast enough, for that to happen. Each failure below comes with its symptom — how you will recognise it — and its fix.

### Flat or Range-Bound Market: Theta Bleeds Both Legs

**Symptom:** The underlying pins anywhere between 24,500 and 25,500 into expiry, and the loss is the full ₹165 per unit plus charges. Before expiry, the damage is already visible: both legs lose time value (theta) every quiet day, even without any price move. A move that arrives late may not recover the premium already bled away — there is less time value left for the winning leg to work with.

**Fix:** Decide a time stop in advance — how long you will wait for the move — rather than holding by default. Exit on the move instead of holding to expiry when the move arrives. And cap the premium paid as a small, defined risk per trade, so a full dead-zone loss is an affordable loss, not a damaging one.

### IV Crush After the Event

**Symptom:** IV is elevated before earnings, a Budget announcement, an RBI policy decision, or an election, which inflates both premiums. After the event, IV collapses and deflates both legs at once. The underlying can move in the expected direction — even sharply — and the strangle can still lose. The volatility component of both premiums has simply fallen faster than the winning leg's intrinsic value has grown.

**Fix:** Check IV before entry and prefer low-IV entry. Do not pay event-inflated premiums and assume the move alone will save the trade. If the event is the reason for the trade, the IV level at entry is part of the trade's price, and it must be judged like any other cost.

### Buying When IV Is Already Sky-High

**Symptom:** This is the entry-timing failure, distinct from the post-event crush above. Even OTM premiums are inflated when IV is already very high, which pushes the breakevens further apart — beyond 25,665 and 24,335 in example terms — and demands an even bigger move before profit. The cheaper-looking strangle quietly becomes an expensive bet on an extreme move.

**Fix:** Run the IV check before entry, every time. If the inflated breakevens exceed the move you realistically expect, pass on the trade. Skipping an overpriced strangle is not missing an opportunity. It is refusing to pay for a move that would have to be extraordinary to profit.

### A Moderate Move That Stops Short of Breakeven

**Symptom:** The underlying moves 500 points to a strike — 25,500 or 24,500 — yet the trade loses the full ₹165 per unit. Or it passes a strike but stops short, as at 25,600, losing ₹65 per unit — a move that could have paid on a tighter-breakeven straddle. The market moved, the direction was right, and the strangle still lost. This is the most frustrating failure because it feels unfair; it is, in fact, the strategy working exactly as priced.

**Fix:** Size and judge the trade for the dead zone, not the hope. Require the expected move to clear the breakeven — 665 points (2.66%) each way in the example — not merely to reach a strike. And if momentum stalls before breakeven, consider exiting on the move rather than waiting for expiry to confirm the shortfall.

### OTM Illiquidity and Slippage

**Symptom:** OTM legs are typically less liquid than at-the-money legs, so spreads can be wider and slippage worse. The premium you saw on screen — the mid-price — is not necessarily the premium you will pay. A mid-price assumption overstates the fill, which means the real total premium, and the real breakevens, are worse than the quoted ones.

**Fix:** Check liquidity before entry, prefer liquid index options, and use limit orders. Never assume a mid-price fill. No spread or slippage figure is quoted here, because none is assumed in the worked example. The point is procedural: verify the fill you can actually get before treating any premium as the trade's cost.

## Before Expiry vs At Expiry: Why Many Buyers Exit on the Move

Everything so far has been expiry maths. Real strangle trading often ends before expiry, and the two must not be confused.

A fast move, or a rise in implied volatility, can push a strangle to profit well before expiry, while time value is still in the options. That is why many buyers sell both legs to close on the move, rather than holding to expiry. Before-expiry profit or loss is simply credit received minus debit paid, before charges. It is not given by the expiry formulas, and it depends on IV and remaining time value as well as price.

Before-expiry profit is not guaranteed by a move alone. A move accompanied by falling IV, or a move that arrives with little time left, can still leave the position underwater. Conversely, a rise in IV alone can lift both legs before any price move.

Holding to expiry, by contrast, means accepting maximum time decay and, if the underlying pins between the strikes, the full maximum loss of ₹165 per unit plus charges in the example. The standard defences are the ones already named: a time stop decided in advance, and exiting on the move. Holding to expiry should be a deliberate choice, not the default for want of an exit plan.

## Execution and Capital: What You Actually Need to Put Up

Capital at risk per unit is the total premium paid plus charges — ₹165 plus charges in the worked example. For a full position, the formula is total premium × lot size + charges, stated in formula form only, with no rupee lot total given here.

Execution discipline matters as much as the maths, because OTM legs punish careless fills:

- Check OTM liquidity before entry, and prefer liquid index options over illiquid stock options.
- Use limit orders rather than market orders, so a wide spread does not silently raise your premium — and your breakevens — beyond the plan.
- Treat the premium paid as capital at risk, capped as a small, defined risk per trade. The full method for sizing that risk lives in the live position-sizing article, referenced here in plain text only and not re-taught.
- Charges appear in this article only as "plus charges" on the worked example. The full charge table lives in the live options-charges article, referenced here in plain text only and not re-taught. Similarly, why the premium paid must be capped as capital at risk is covered in the live risk-of-ruin article, referenced in plain text only.

## Contrast Box: The Short Strangle Is the Mirror Image — Not for Beginners

The short strangle is the mirror image of this article's subject. It is included here only as a contrast, not as a strategy to follow. Where the long strangle **buys** the OTM call and OTM put and **pays** premium, the short strangle **sells** the OTM call and OTM put and **collects** premium. It profits if the market stays relatively quiet between the strikes — the exact zone where the long strangle loses everything.

The risk, however, is the reverse of defined. On a sharp move, a short strangle faces unlimited risk on the upside and very large risk on the downside. Beginners must not sell naked strangles. This article does not teach the short strangle, and it is never recommended for beginners. If your market view is "quiet between two strikes," that view belongs to a different discussion — the option-trading-strategies hub, referenced in plain text only, maps the alternatives, including the iron condor, butterfly, covered call, and protective put approaches, none of which are taught here.

## Frequently Asked Questions

### What is a long strangle in options trading?

Buying an out-of-the-money call and an out-of-the-money put on the same underlying, at different strikes, with the same expiry. You pay both premiums. You profit only if the underlying makes a very large move in either direction, far enough to cover both premiums. In the worked example — underlying 25,000, 24,500 put at an assumed ₹80 and 25,500 call at an assumed ₹85 — you pay ₹165 per unit plus charges, and you need a move beyond 25,665 or below 24,335 to profit at expiry, before charges.

### How do you calculate strangle breakeven points?

First add the premiums: total premium = call premium + put premium. Then upper breakeven = call strike + total premium, and lower breakeven = put strike − total premium. In the worked example: ₹85 + ₹80 = ₹165; upper breakeven = 25,500 + 165 = 25,665; lower breakeven = 24,500 − 165 = 24,335. These are expiry breakevens before charges; after charges, the true breakevens sit slightly further out.

### What is the maximum loss in a long strangle?

The total premium paid, plus charges. In the worked example, that is ₹165 per unit plus charges, suffered in full if the underlying closes anywhere between the two strikes (24,500 and 25,500) at expiry, because both legs then expire worthless. The loss cannot exceed the premium paid, plus charges, for a long strangle — it is a defined-risk trade for the buyer.

### Long strangle vs long straddle: which is better?

Neither is better in general; they trade cost against distance. A straddle buys at-the-money legs at one strike, so it costs more but has tighter breakevens and responds faster to a small move. A strangle buys out-of-the-money legs at two strikes, so it costs less but has a wider dead zone — the whole gap between the strikes — and needs a bigger move. Choose the strangle when budget is tight and you expect a very large move; choose the straddle when you expect a move but want a smaller move to suffice and can afford the higher premium.

### When should you use a long strangle instead of a straddle?

When three conditions line up: a known catalyst with unknown direction (earnings, Budget, RBI policy, elections) where a very large move is possible; implied volatility is relatively low, so the premiums are not already inflated; and the straddle's at-the-money cost is more than you want to risk. If the expected move is only moderate, or IV is already sky-high, the strangle's wider breakevens make it the worse choice despite its lower price.

### Is a long strangle profitable? Why do most strangles lose money?

A strangle is profitable only when the move is big enough and fast enough: beyond 25,665 or below 24,335 at expiry in the worked example, before charges. Most strangles lose because most of the time the market does not move that far. It stays between the strikes or stops short of a breakeven, and both premiums bleed away to time decay. Add IV crush after the event — both legs deflating at once — and even a correct-direction move can lose. No return figure or win-rate statistic is quoted here, because none is assumed in this article.

### What happens to a long strangle if the market stays flat or stays between the strikes?

At expiry, both legs expire worthless and you lose the entire premium paid, plus charges. In the worked example, that is ₹165 per unit plus charges, whether the underlying closes at 25,000 (unchanged), at 24,500, or at 25,500. The loss is flat across the whole zone between the strikes — it does not shrink as the underlying drifts toward a strike from inside the zone. Before expiry, a flat market still hurts: both legs lose time value every quiet day.

### How far apart should strangle strikes be?

There is no single best width; it is a trade-off chosen from expected move size and budget. Wider strikes cost less but widen the dead zone and demand a bigger move before profit. Narrower strikes cost more but narrow the dead zone, tighten the breakevens, and behave more like a straddle. In the worked example, the strikes are 1,000 points apart (24,500 to 25,500) around a 25,000 underlying, giving a 665-point (2.66%) move needed each way. If you expect a smaller move, narrower strikes fit better; if budget is the binding constraint, wider strikes are the compromise — with eyes open about the larger move they require.

### Long strangle vs short strangle: what is the difference?

They are mirror images. A long strangle **buys** the OTM call and OTM put, **pays** premium, has a defined maximum loss (the premium paid, plus charges), and profits from a very large move in either direction. A short strangle **sells** the OTM call and OTM put, **collects** premium, and profits if the market stays relatively quiet between the strikes — but its risk on a sharp move is unlimited on the upside and very large on the downside. Beginners must not sell naked strangles; this article does not teach the short strangle.

### How much capital do you need for a strangle?

The capital at risk is the total premium paid plus charges. Per unit, that is ₹165 plus charges in the worked example. For a full position, the formula is total premium × lot size + charges — stated in formula form only, with no rupee lot total given here.

### Should you hold a strangle till expiry?

Not necessarily, and often not. A fast move or a rise in implied volatility can make a strangle profitable well before expiry, while time value is still in the options — that is why many buyers sell both legs to close on the move. Holding to expiry means accepting maximum time decay and, if the underlying pins between the strikes, the full maximum loss (₹165 per unit plus charges in the example). A time stop — deciding in advance how long you will wait for the move — and exiting on the move are the standard defences against theta bleed.

## Bottom Line: A Cheap Ticket That Needs a Very Big Move

Recap, in one line each: construction is an OTM call plus an OTM put, at different strikes, with the same expiry. Cost in the example is ₹165 per unit plus charges (assumed ₹80 put + assumed ₹85 call). Breakevens are 25,665 and 24,335, before charges. The dead zone is 24,500–25,500. Maximum loss is ₹165 per unit plus charges, suffered in full anywhere inside that zone at expiry.

Use a long strangle only when the conditions line up: a catalyst with unknown direction, a very large move possible, relatively low IV, and an expected move that clears the breakeven — not just a strike. Skip it when the expected move is moderate, when IV is already sky-high, or when the OTM legs are illiquid.

For the wider map, the option-trading-strategies hub is referenced here in plain text only. The long-straddle discussion is the tighter-breakeven alternative in the chooser table above. The live position-sizing and risk-of-ruin articles cover capping the premium at risk, and the live options-charges article covers the charges behind "plus charges" in the worked example. None of those are re-taught here. The strangle's question, answered honestly, is always the same: is the move you expect big enough to pay for two premiums — and are you comfortable losing both if it is not?

This article is educational only, not investment advice or a recommendation to trade. Options can lose their entire premium, plus charges, as the worked example shows, so any position should be sized as a loss you can afford.

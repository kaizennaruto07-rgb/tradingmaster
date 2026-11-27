---
title: "Stop Loss for Options Trading"
description: "Stop loss for options trading: underlying vs premium stops, theta and the time stop, buyer vs seller stops — one worked example, one 5-step procedure."
meta_description: "Stop loss for options trading: underlying vs premium stops, theta and the time stop, buyer vs seller stops — one worked example, one 5-step procedure."
date: 2026-11-15
author: Kaizen
tag: "Risk management · Stop loss"
keywords: ["stop loss for options trading", "stop loss in options trading", "options stop loss percentage", "premium-based stop loss", "underlying-based stop loss", "stop loss for option buyers", "stop loss for option sellers", "theta decay stop loss", "time stop options", "trailing stop loss options"]
---

*By Kaizen · 15 November 2026 · Monks Of Market*

A stop loss on an options trade is a preset exit level that closes the position when a chosen price is reached, so that one wrong trade cannot turn into an account-damaging loss. That much is the same as for any trade — the companion piece Stop Loss Meaning covers the definition, and Stop Loss in Trading covers placement in general. What is different about options is *which* price the stop watches, and what can move that price without the trade idea changing at all.

That difference is why so many options traders feel cheated by their stops. They copy a stock stop onto an option, the option gets stopped out, and then the underlying moves exactly the way they predicted — too late. The stop did its job on the price it was watching. It was watching the wrong price, or the right price with the wrong distance, or the right price with no time limit attached. This article fixes that, with one decision procedure and one worked example carried through every method, so the methods can be compared fairly instead of each getting its own flattering numbers.

This is educational content only, not investment advice. No stop loss method guarantees a profit, prevents losses, or guarantees an exit price.

## The one-sentence job of an options stop

An options stop is a preset exit, decided before entry, that closes the position when either the underlying reaches the level that invalidates the trade idea, or the option premium falls (for a buyer) or rises (for a seller) to a level that caps the loss. The choice between those two triggers — underlying or premium — is the single most important stop decision an options trader makes, and it has to be made before entry, not improvised while the position is losing money.

One example runs through this whole article, so every method is judged on the same numbers. All figures are per-unit premium arithmetic — the price of one unit of the option — and are never converted to any contract size. Capital is Rs 1,00,000. Account risk is 1% per trade, which is Rs 1,000. The buyer trade is a call bought at Rs 120 premium per unit. Keep those numbers in mind; every calculation below uses them.

## Why stock stops fail on options

A stock has one price, and a stop on a stock watches that price. An option premium moves on five inputs, not one: the underlying price, the time left until expiry, implied volatility, the distance between the strike and the underlying price, and interest rates. The first three do most of the damage to careless stops.

That means a premium can fall even when the underlying does exactly what the trader expected, just too slowly. Time passes, and the premium decays. Volatility falls after an event, and the premium collapses even though the underlying barely moved. The underlying moves in the trader's favour, but not far enough or fast enough to outrun the decay, and the premium still ends lower than where it started. A stock stop has none of these failure modes. An options stop has all of them, which is why the stop's basis matters more than its distance.

A second difference: a stock stop's loss is roughly the distance from entry to stop, and that distance is visible on the chart. An options stop's loss depends on which price it watches. Watch the underlying, and the rupee loss is only estimated in advance. Watch the premium, and the rupee loss is known in advance — but the stop can fire for reasons that have nothing to do with the trade idea. There is no basis that gives you both certainty about the loss and fidelity to the idea. Choosing consciously between them is the whole game.

## Underlying-based vs premium-based stops: the central choice

### What each basis means

An **underlying-based stop** sits on the underlying's chart, at the invalidation level — the price at which the reason for entering the trade is no longer true. When the underlying reaches it, the option position is closed at the market price of the premium at that moment. The stop protects the idea: the trade exits because the idea failed, not because the premium wobbled.

A **premium-based stop** sits on the option's own price. For a buyer, it is a premium level below the entry — for example, exit when the premium falls to Rs 60. For a seller, it is a premium level above the entry. The stop protects the rupees: the loss per unit is known in advance, provided the stop actually fills at that level.

### The comparison, on the carried example

| | Underlying-based stop | Premium-based stop |
|---|---|---|
| What triggers the exit | Underlying hits the invalidation level | Premium hits the preset level |
| Loss per unit known in advance? | No — only estimated (Rs 40 in the example, if the premium is about Rs 80 at invalidation) | Yes, if it fills (Rs 60 in the example, entry Rs 120 to stop Rs 60) |
| Maximum units at Rs 1,000 risk | 25 units (Rs 1,000 ÷ Rs 40) | 16 units (Rs 1,000 ÷ Rs 60) |
| Fires when the idea is still intact? | No — it fires only when the idea fails | Yes — IV crush, theta decay, or a wide spread can fire it |
| Fill risk | Fill can be worse than the Rs 80 estimate (gap, IV crush, spread) | Fill can be worse than Rs 60 for the same reasons |
| Best for | Directional trades with a clear invalidation level on the underlying's chart | Trades with no clean underlying level, or where capping the rupee loss matters more than the chart level |

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Stop loss for options trading diagram comparing an underlying-based stop at the invalidation level with a premium-based stop below the entry premium on the same trade." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">One trade, two stop bases — call bought at Rs 120</text>
<rect x="30" y="60" width="300" height="200" fill="none" stroke="#92a59c" stroke-width="1"/>
<rect x="350" y="60" width="300" height="200" fill="none" stroke="#e8825a" stroke-width="1"/>
<text x="180" y="92" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Underlying-based</text>
<text x="180" y="122" text-anchor="middle" fill="#f2f7f4" font-size="12">Watches invalidation level</text>
<text x="180" y="152" text-anchor="middle" fill="#f2f7f4" font-size="12">Premium ~Rs 80 at invalidation</text>
<text x="180" y="182" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Loss estimated Rs 40 / unit</text>
<text x="180" y="212" text-anchor="middle" fill="#f2f7f4" font-size="12">25 units at Rs 1,000 risk</text>
<text x="500" y="92" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Premium-based</text>
<text x="500" y="122" text-anchor="middle" fill="#f2f7f4" font-size="12">Watches premium Rs 60</text>
<text x="500" y="152" text-anchor="middle" fill="#f2f7f4" font-size="12">Entry Rs 120 to stop Rs 60</text>
<text x="500" y="182" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Loss known Rs 60 / unit if fills</text>
<text x="500" y="212" text-anchor="middle" fill="#f2f7f4" font-size="12">16 units at Rs 1,000 risk</text>
<text x="340" y="300" text-anchor="middle" fill="#92a59c" font-size="12">Protect the idea, or protect the rupees — never both at once</text>
</svg>
</figure>

### When the underlying-based stop fits — and when it fails

It fits directional trades with a clear invalidation level: a level below support for a long call, above resistance for a long put, identified from the underlying's structure before entry. It fails when there is no clean level — a trade entered on volatility, on an event, or on a broad market view may have no single price that proves it wrong. It also fails the trader who never estimates the premium at invalidation: without that estimate, the rupee risk is unknown, and the position size is a guess. In the carried example the estimate is about Rs 80 of premium if the underlying reaches invalidation, giving a distance of Rs 40 per unit and 25 units at Rs 1,000 risk. That Rs 80 is an estimate made at entry. It moves with delta, time left, and implied volatility, and the actual fill can be worse — a gap, a volatility crush, or a wide spread can all leave the trader selling below Rs 80.

### When the premium-based stop fits — and when it fails

It fits when the trade has no clean underlying level, or when capping the rupee loss matters more than the chart level. The commonly quoted rule of thumb is to exit at a 50% loss of premium: bought at Rs 120, stop at Rs 60, distance Rs 60 per unit, 16 units at Rs 1,000 risk. Treat that 50% as a rule of thumb to test, not a law. It is too tight for cheap, fast-decaying contracts, where normal daily decay and volatility noise can eat half the premium without the idea failing. It is too loose for expensive, slow-decaying contracts, where a 50% premium loss may mean the underlying has moved far past any sensible invalidation level. The percentage has to be chosen from the contract's character — cheaper and faster-decaying means a wider percentage, not a tighter one — and the tighter 25% stop in the example shows the trade-off plainly: stop at Rs 90, distance only Rs 30, 33 units at Rs 1,000 risk, but far more likely to trigger on theta or volatility noise alone. More units at a tighter stop is not a free lunch; it is a stop that fires more often.

## The 5-step options-stop procedure

### Step 1 — Choose the basis first

Underlying-based or premium-based, chosen before entry, with the reason stated. Default to underlying-based for directional trades with a clear invalidation level on the underlying's chart, following the invalidation principle from Stop Loss in Trading. Default to premium-based when the trade has no clean underlying level, or when capping the rupee loss matters more than the chart level. Never mix the two mid-trade without a reason stated in advance: switching from an underlying stop to a premium stop because the premium is falling faster than expected is not a strategy, it is moving the goalposts.

### Step 2 — Set the level on that basis

Underlying-based: structure first. Find the invalidation level on the underlying's chart, then estimate the premium at that level before entry, so the rupee risk is known approximately. In the example, that estimate is about Rs 80, giving a Rs 40 distance. Premium-based: choose the percentage from the contract's character, not from a copied 50%. A cheap contract that decays quickly needs a wider percentage; an expensive, slow-decaying contract can carry a narrower one. Write the level down before entry, in both forms where possible: "exit if the underlying hits X, expecting roughly Rs 80 premium" or "exit if the premium hits Rs 60."

### Step 3 — Add the time stop

A buyer sets a time stop alongside the price stop: if the position has not moved meaningfully in favour by a pre-set date or time, exit regardless of profit or loss. Do not carry a flat or losing long option into expiry week, where theta accelerates hardest. A seller's time stop works in reverse: time is on the seller's side, so the seller's discipline is a profit-taking or hedge trigger set in advance — for example, close or hedge when a set portion of the premium has been earned, rather than holding to expiry for the last rupees while the risk grows. The time stop is covered in depth in the theta section below.

### Step 4 — Size from the stop, not before it

Risk amount divided by premium-stop distance (per unit) equals maximum units. For the premium stop: Rs 1,000 ÷ Rs 60 = 16 units (floored). For the underlying stop: Rs 1,000 ÷ Rs 40 = 25 units. For the seller stop in the mirror example below: Rs 1,000 ÷ Rs 60 = 16 units. Skip the trade if the distance makes the size unworkable — a stop so tight that the size becomes absurd, or so wide that the risk/reward collapses — or if the risk/reward itself is unworkable. Sizing first and then forcing the stop to fit the size is the same mistake in reverse, and it is one of the classic failures listed below. The companion [position sizing guide](/articles/position-sizing/) covers the sizing arithmetic in full, and the [risk of ruin guide](/articles/risk-of-ruin-trading/) explains why capping the per-trade loss at a fixed fraction of capital protects the account across a run of losers.

### Step 5 — Decide the management rule in advance

When, if ever, does the stop move? A premium stop can trail upward as the premium rises: if the call bought at Rs 120 rises to Rs 180, trailing the stop up to, say, Rs 120 or Rs 150 locks in part of the gain. What never moves the stop is hope: never widen a stop to "give it room," never move it because the trade "just needs a bit more time" unless the time stop was set that way in advance. An implied-volatility spike that has not changed the underlying thesis is a reason to re-check the trade, not a reason to widen blindly — but if the spike has changed the thesis, the honest exit is to close, not to widen and pretend the original plan still holds.

## Buyer stops vs seller stops: different risks, different stops

A buyer's maximum loss is the premium paid: Rs 120 per unit in the example. A buyer's stop exists to exit before that maximum is reached, while some premium is still recoverable, and to free capital for the next idea. A seller's maximum gain is the premium received — also Rs 120 per unit in the mirror example — while a naked seller's loss can run to several multiples of that premium. That asymmetry means buyer stops and seller stops are different instruments, not mirror images.

The seller mirror on the same premium: a call sold at Rs 120 per unit, with the seller's stop at Rs 180 per unit (1.5 times the premium). The distance is Rs 60 per unit, so the maximum size at Rs 1,000 risk is 16 units. The seller's stop caps the loss at Rs 60 per unit only if it fills; a gap through the stop leaves a larger loss, and the seller's maximum gain stays Rs 120 per unit. The seller's stop must be set before entry, not improvised mid-trade, because the loss it caps is open-ended — by the time a seller without a stop decides to act, the loss may already be several times the premium received.

One more distinction matters for multi-leg positions. A stop on a spread position cannot be read off the individual legs. If one leg is winning and the other losing, the legs' individual prices say nothing useful about the position. The spread's own price — what the combined position could be closed for — is what the stop must watch. Traders who set stops on individual legs of a spread routinely exit half a position and discover they now hold a naked leg they never intended to own.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Buyer versus seller stop loss diagram for options trading: buyer stop below the entry premium capping loss at the premium paid, seller stop above the entry premium capping an otherwise open-ended loss." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Buyer vs seller — the stop sits on opposite sides</text>
<rect x="30" y="60" width="300" height="200" fill="none" stroke="#92a59c" stroke-width="1"/>
<rect x="350" y="60" width="300" height="200" fill="none" stroke="#e8825a" stroke-width="1"/>
<text x="180" y="92" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Buyer · bought Rs 120</text>
<text x="180" y="122" text-anchor="middle" fill="#f2f7f4" font-size="12">Stop below entry: Rs 60</text>
<text x="180" y="152" text-anchor="middle" fill="#f2f7f4" font-size="12">Loss capped at premium paid</text>
<text x="180" y="182" text-anchor="middle" fill="#f2f7f4" font-size="12">Exits early, keeps some premium</text>
<text x="500" y="92" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Seller · sold Rs 120</text>
<text x="500" y="122" text-anchor="middle" fill="#f2f7f4" font-size="12">Stop above entry: Rs 180</text>
<text x="500" y="152" text-anchor="middle" fill="#f2f7f4" font-size="12">Loss open-ended without a stop</text>
<text x="500" y="182" text-anchor="middle" fill="#f2f7f4" font-size="12">16 units at Rs 1,000 risk</text>
<text x="340" y="300" text-anchor="middle" fill="#92a59c" font-size="12">Seller stops are more urgent, not less</text>
</svg>
</figure>

## Theta and the time stop: why flat days still lose money

Theta is the daily charge for holding a long option. It is the rate at which the option's time value decays as expiry approaches, and it charges even on days the market is closed. Time value is the part of the premium above any intrinsic value; theta erodes only that time value, never intrinsic value. At-the-money options carry the most time value and therefore the largest rupee theta. Out-of-the-money options are all time value, so a small absolute decay is a large percentage decay — a cheap out-of-the-money option can lose a quarter of its value in a few flat days without the underlying moving at all.

On the carried example, the theta illustration is deliberately simple and labelled as illustrative, not a market quote: a daily theta of Rs 5 per unit eats Rs 25 per unit in five days. That is nearly half the Rs 60 distance to the 50% premium stop — consumed without any adverse price move. This is the mechanism behind the most confusing options experience: "the stock moved my way, but I still lost money." The move was too small, or too slow, to outrun the decay. It is also why a premium stop without a time stop is incomplete for a buyer: on a flat underlying, theta alone can walk the premium into the stop, and the trader exits a trade whose idea never actually failed — it simply ran out of time.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Theta decay curve for options trading showing premium falling day by day on a flat underlying, shrinking the distance to the stop loss without any price move." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Theta decay — the stop distance shrinks on flat days</text>
<text x="340" y="78" text-anchor="middle" fill="#f2f7f4" font-size="13">Day 0 · premium Rs 120 — stop Rs 60, distance Rs 60</text>
<text x="340" y="116" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="140" text-anchor="middle" fill="#f2f7f4" font-size="13">Theta Rs 5 / day — decay with no price move at all</text>
<text x="340" y="178" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="202" text-anchor="middle" fill="#f2f7f4" font-size="13">Day 5 · premium Rs 95 — Rs 25 eaten, distance now Rs 35</text>
<text x="340" y="240" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="264" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">No time stop? Theta alone walks the premium into the stop</text>
</svg>
</figure>

The time stop is the answer, and it has to be set alongside the price stop, not discovered afterwards. A buyer might set it as a date: "if this position has not moved meaningfully in my favour within five trading days, I exit." Or as a condition: "if the underlying is still flat at the midpoint of the option's life, I exit." Either form works; what does not work is no form at all. The expiry-week discipline follows from the same logic: theta accelerates hardest in the final days, so carrying a flat or losing long option into expiry week means paying the fastest decay for the smallest remaining chance of a favourable move. For the seller, the discipline runs the other way: time pays the seller, so the seller's pre-set trigger is about taking profits or hedging before a quiet position turns into a sudden adverse move, not about escaping decay.

## The classic mistakes

1. **Copying a stock percentage onto an option.** A 2% stop on a stock and a 2% stop on an option premium are unrelated numbers. The premium is a fraction of the underlying's price and moves several times faster in percentage terms.
2. **A premium stop too tight for the contract's decay.** Cheap, fast-decaying contracts need wider percentages. A tight stop on such a contract fires on noise, and repeated noise exits bleed the account faster than one honest loss.
3. **Widening the stop mid-trade.** Moving a stop further away because the trade is losing converts a capped loss into an open-ended one. If the thesis has changed, close the trade; do not reprice the exit.
4. **No time stop.** A buyer without a time stop can watch theta consume the position on a flat underlying, then blame the premium stop for firing "for no reason." The reason was time, and it was predictable.
5. **Sizing first, then forcing the stop to fit.** Deciding the number of units first and then placing the stop wherever the arithmetic allows inverts the procedure. The stop decides the size, never the reverse.
6. **Trusting a stop on a thin contract's bid/ask.** On a thinly traded contract, the quoted bid or ask can be far from any traded price. A premium stop watched against the bid/ask can trigger on a quote that no real trade would have produced — or fail to trigger at all because nothing trades for long stretches.

## Stop, target and size as one system

Before entry, three numbers have to work together: the stop distance, the target distance, and the size. The stop gives the risk per unit. The target gives the reward per unit. The ratio between them, checked before entry, tells the trader whether the trade is worth taking at all. In the carried example, the premium stop risks Rs 60 per unit; if the target is Rs 180 premium (a Rs 60 gain per unit), the trade risks as much as it can make, and most traders would pass or demand a better entry. If the target is Rs 240 premium (a Rs 120 gain per unit), the trade risks Rs 60 to make Rs 120. That check costs a minute and prevents the most common structural error in options trading: entering a trade whose stop and target were never compared.

The system only works if all three numbers are decided before entry. A stop decided after entry is a hope. A target decided after entry is a rationalisation. A size decided before the stop is a gamble. Decide all three, write them down, and let the trade either hit the stop, hit the target, or hit the time stop. Those are the only three exits a plan needs.

## The honest limits of any options stop

A stop loss guarantees neither price nor fill. In a gap or a fast move, the fill can be far worse than the stop level — the Rs 80 estimate in the underlying example and the Rs 60 level in the premium example are both levels at which an exit is *attempted*, not prices that are *promised*. Thin contracts may not trade for long stretches, so a premium trigger may never fire cleanly. Wide bid-ask spreads can trigger a stop on the bid or ask rather than on a real move. And on a spread position, as noted above, only the spread's own price is meaningful. A trader who understands these limits sizes accordingly: the stop caps the loss in normal conditions, and the account must survive the abnormal ones too — which is why the per-trade risk fraction, not any single stop, is the real protection.

## Frequently asked questions

### How do I set a stop loss in options trading?

Choose the basis first (underlying or premium), set the level on that basis, add a time stop, size from the stop distance, and decide the management rule in advance. That is the 5-step procedure above. The most common beginner error is starting from a percentage copied from a stock guide instead of from the trade's own invalidation level or the contract's character.

### Should my stop loss be based on the underlying price or the option premium?

Use the underlying price for directional trades with a clear invalidation level on the underlying's chart — it protects the idea. Use the premium when the trade has no clean underlying level, or when capping the rupee loss matters more than the chart level — it protects the rupees. Never switch bases mid-trade without a reason stated in advance.

### What percentage stop loss should I use for options?

There is no universal percentage. The commonly quoted 50% premium rule of thumb — exit when half the premium is gone — is a starting point to test, not a law. Cheaper, faster-decaying contracts need a wider percentage; expensive, slow-decaying contracts can carry a narrower one. A percentage chosen without looking at the contract's decay is a guess dressed as a rule.

### Why do I keep getting stopped out of options even when the stock moves my way?

Usually theta or volatility. If the move is too small or too slow, time decay eats more premium than the favourable move adds. If implied volatility falls — for example, after an event the market was pricing in — the premium can fall even as the underlying rises. A premium stop fires on the premium, not on the underlying, so it can fire while the directional call was right.

### What is a time stop for options, and do I need one as a buyer?

A time stop is a pre-set date or condition at which you exit if the position has not moved meaningfully in your favour, regardless of profit or loss. Yes, a buyer needs one: without it, theta can consume the position on a flat underlying, and the premium stop eventually fires for a reason that has nothing to do with the trade idea.

### How does theta decay affect my stop loss?

Theta shrinks the distance to a premium stop every day, even on flat days. In the carried example, an illustrative Rs 5 per unit of daily theta eats Rs 25 in five days — nearly half the distance to a 50% premium stop — without any adverse price move. For an underlying-based stop, theta shrinks the premium that will be recovered when the underlying hits invalidation, so the realised loss can exceed the estimate made at entry.

### Should option sellers use a stop loss, and how is it different from a buyer's stop?

Yes — more urgently, not less. A buyer's loss is capped at the premium paid even without a stop; a naked seller's loss is open-ended. A seller's stop sits above the entry premium (Rs 180 against a Rs 120 sale in the example) and caps the loss per unit only if it fills. It must be set before entry, because the loss it caps can grow faster than a trader can improvise.

### Can I use a trailing stop loss on an options position?

Yes, on a premium stop: as the premium rises, the stop trails upward, locking in part of the gain. Trail only in the trader's favour, and decide the trailing rule before entry. Never trail a stop downward (for a buyer) or upward (for a seller) to "give it room" — that is widening, not trailing, and it converts a capped loss into an open-ended one.

### Why does my option lose value when the market does nothing?

Because time value decays every day, including days the market is closed, and the decay accelerates as expiry approaches. A flat underlying means no new intrinsic value and no offset to the decay, so the premium falls. At-the-money options lose the most in rupee terms; out-of-the-money options lose the most in percentage terms.

### Does a stop loss guarantee my exit price on an options trade?

No. A stop triggers an exit attempt at the stop level; the actual fill depends on what the market is doing at that moment. Gaps, fast moves, volatility crushes, and wide spreads can all produce fills worse than the stop level. Size every trade so the account survives a worse-than-expected fill, not just a perfect one.

### How do I size an options trade from my stop loss?

Divide the rupees you are willing to risk on the trade by the stop distance per unit, and floor the result. At Rs 1,000 risk: a Rs 60 premium-stop distance gives 16 units; a Rs 40 underlying-stop distance gives 25 units; a Rs 30 tight-stop distance gives 33 units but fires far more often. If the resulting size or the risk/reward is unworkable, skip the trade.

### What goes wrong with stop losses on thinly traded options?

Two things. First, the position may not trade for long stretches, so a premium trigger never fires cleanly — the stop is set but nothing happens at the level. Second, a wide bid-ask spread means the quoted bid or ask can trigger a stop that no real trade would have produced, or leave the trader exiting far from the last traded price. On thin contracts, prefer underlying-based stops watched manually, and treat any premium stop as approximate.

## Where this fits

Stop Loss Meaning is the definitional flagship of this cluster: what a stop loss is, in full. Stop Loss in Trading is the core guide: placement, invalidation, sizing, and trailing in general. This article is the options segment spoke, applying those principles to the one instrument where the stop's basis, theta, and the buyer/seller asymmetry change the answer. The companion segment guides on intraday stops and crypto stops cover their own instruments' quirks in the same way. For the sizing arithmetic behind Step 4, see the live position sizing guide; for why a fixed per-trade risk fraction protects an account over a run of losers, see the live risk of ruin guide.

An options stop is not a prediction and not a punishment. It is a pre-decided exit, chosen on the right basis, set at the right level, bounded by time, sized from its own distance, and managed by a rule written before the trade. Set it that way, and the stop stops being the thing that ruins good ideas — and becomes the thing that lets you keep having them.
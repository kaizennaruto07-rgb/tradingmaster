---
title: "Butterfly Spread Strategy: How the Four Legs Work, Where the Peak Really Is, and Why the Profit Zone Is So Narrow"
description: "Butterfly spread strategy explained: 1-2-1 construction, breakevens, max profit and loss, and why the peak is a single point — one worked example."
meta_description: "Butterfly spread strategy explained: 1-2-1 construction, breakevens, max profit and loss, and why the peak is a single point — one worked example."
date: 2026-11-11
author: Kaizen
tag: "Indian options · Strategies"
keywords: ["butterfly spread strategy", "butterfly spread payoff", "butterfly spread breakeven", "butterfly spread max profit", "butterfly vs iron condor", "butterfly spread example"]
---

*By Kaizen · 11 November 2026 · Monks Of Market*

If you have heard that a butterfly spread is a "low-cost, high-reward" options trade, this guide answers the questions that matter before you pay any debit for it: how do the four contracts fit together, where exactly does it make money, why is the profit zone so narrow, and when does it fail?

The short answer is that a butterfly spread is a bet on a pin, not a bet on a range and not a bet on a move. You pay a small net debit for a position that makes its maximum profit only if the underlying closes at one specific strike at expiry. The reward-to-risk ratio looks impressive on paper. The catch is that the peak is a single point, and most expiry outcomes fall short of it. This article shows both sides of that trade-off, with one consistent worked example you can check at every step.

## What a Butterfly Spread Is

The **butterfly spread strategy** is a neutral, defined-risk, limited-profit options position on one underlying with one expiry. It is built from four contracts across three strikes, with equal spacing between the strikes. In its standard long form, it is entered for a net debit — you pay to put it on — and that debit is the most you can lose, before charges.

The classic call version is built in a 1-2-1 ratio:

- Buy 1 lower-strike call
- Sell 2 middle-strike calls
- Buy 1 higher-strike call

The put version — buy 1 higher-strike put, sell 2 middle-strike puts, buy 1 lower-strike put — gives the same expiry payoff shape. This article teaches the call version throughout and treats the put version as that one-line equivalence, not as a second construction to learn.

A butterfly is best understood as two spreads sharing a middle strike. The lower half is a bull call spread: long the lower call, short the middle call. The upper half is a bear call spread: short the middle call, long the upper call. Put them together and the two short middle legs are the same strike, which is why the ratio is 1-2-1 rather than 1-1-1-1. The two short middle legs fund most of the cost of the two long wings, which is why the position can be entered for a small net debit even though it contains four contracts.

That structure is what creates the shape the strategy is named after. At expiry, the payoff rises from the lower wing toward the middle strike, peaks there, and falls back toward the upper wing — a tent shape, with a peak in the middle and flat wings on both sides. Outside the wings, all four legs net to zero and the debit is gone.

## The Four Legs in Strike Order

From lowest strike to highest, the four legs are:

| Leg | Position | Role |
| --- | --- | --- |
| Long call (lowest strike) | Buy 1 | The lower wing; gains as the underlying rises above the lower strike |
| Short call (middle strike) | Sell 2 | The body; the two short legs fund most of the position and cap the upside of the lower spread |
| Long call (highest strike) | Buy 1 | The upper wing; caps the loss on the upside and completes the tent shape |

All four legs share one underlying and one expiry. That matters: a butterfly is not four independent trades that happen to be open at the same time. It is one structure, and a fill failure on any leg — above all on the doubled middle leg — unbalances the whole thing. That execution point returns in the checklist at the end.

### The Lower Half: A Bull Call Spread

The bull call spread is the lower half of the butterfly. You buy the lower-strike call and sell the middle-strike call. On its own, this spread gains as the underlying rises from the lower strike toward the middle strike, and its gain is capped at the middle strike because the short call starts to offset the long call above that level.

### The Upper Half: A Bear Call Spread

The bear call spread is the upper half. You sell the middle-strike call and buy the higher-strike call. On its own, this spread loses as the underlying rises from the middle strike toward the upper strike, and its loss is capped at the upper strike because the long call starts to offset the short call above that level.

Stack the two halves and the picture is complete. Rising from the lower strike to the middle strike, the lower spread gains. Rising from the middle strike to the upper strike, the upper spread gives that gain back. The result is a peak at the middle strike and flat ground on both sides — profit in a narrow zone around the middle, loss of the debit outside the wings.

## Beginners Warning: Removing a Leg Removes the Defined Risk

This warning comes before any numbers, because it is the most important guardrail in the whole strategy.

Every leg in a butterfly stays in place. If you remove a long wing, you no longer have a defined-risk spread. If you remove one of the two short middle legs, you no longer have a butterfly at all — you have an unbalanced spread with a different payoff, different breakevens, and different risk. Removing a leg is never presented in this article as a way to save premium or "improve" the trade. The wings are the protection that makes the worst case a known number. If you are not comfortable paying for all four legs, a butterfly is not the right structure for that trade.

## One Worked Example, Carried Through the Whole Article

Every number in this article comes from one consistent, illustrative example, carried through construction, the profit zone, both breakevens, the maximum-profit point, and the five expiry zones, so you can check each step against the last.

These are illustrative assumptions created for this article. They are not live market quotes, not traded prices, and not a recommendation at these levels.

- Underlying index level (illustrative): 25,000
- Lower strike: 24,900 — buy 1 call, illustrative premium ₹180 per unit
- Middle strike: 25,000 — sell 2 calls, illustrative premium ₹110 per unit each
- Upper strike: 25,100 — buy 1 call, illustrative premium ₹60 per unit
- Wing width: 100 points on each side (25,000 − 24,900 = 100; 25,100 − 25,000 = 100), so the spacing is equal, as it must be
- All figures in this article are per unit, before charges, unless stated otherwise. No lot-size total is given, because the lot size in force at trade time was not verified from a primary source for this run. Multiply a per-unit figure by the lot size in force at trade time and add charges to get a real-trade figure.

### Step 1: The Net Debit

Net debit = premiums paid for the two long legs − premiums collected on the two short legs.

- Paid: ₹180 (lower call) + ₹60 (upper call) = ₹240
- Collected: 2 × ₹110 (middle calls) = ₹220
- Net debit = ₹240 − ₹220 = ₹20 per unit

That ₹20 per unit is the price of the position and, before charges, the maximum loss. It is the amount at risk from the moment the trade is placed. Charges are additional, and because four contracts are involved, charges and slippage eat a larger share of a small ₹20 debit than they would of a large premium trade. The net debit after charges is the only debit that counts — a point the execution checklist returns to.

### Step 2: Maximum Profit

Maximum profit = wing width − net debit, before charges.

- Wing width: 100
- Net debit: 20
- Maximum profit = 100 − 20 = ₹80 per unit

That maximum is achieved only if the underlying closes exactly at the middle strike, 25,000, at expiry. At that point the long lower call is worth 100 (25,000 − 24,900), both short middle calls expire worthless, and the long upper call expires worthless: 100 − 20 debit = 80. Move even a little off the middle strike and the profit falls, as the zones below show.

The headline ratio is therefore 80 to 20, or 4:1 — four rupees of maximum profit for every rupee of maximum loss, before charges. Keep that number beside the next section. A ratio describes the best case against the worst case. It says nothing about how likely either case is.

### Step 3: The Two Breakevens

- Lower breakeven = lower strike + net debit = 24,900 + 20 = 24,920
- Upper breakeven = upper strike − net debit = 25,100 − 20 = 25,080

Between 24,920 and 25,080, the position is profitable at expiry, before charges. Outside that zone but inside the wings, the loss is partial. Outside the wings, the loss is the full ₹20 debit. The profit zone is 160 points wide (25,080 − 24,920), inside a 200-point wing span (24,900 to 25,100). Charges narrow the profitable zone further in practice, because the true debit after charges is larger than ₹20.

## The Payoff Diagram: A Peak, Not a Plateau

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Butterfly spread payoff diagram showing maximum profit of 80 at the middle strike and maximum loss of 20 beyond either wing" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Butterfly spread payoff at expiry — peaked tent</text>
<line x1="60" y1="200" x2="620" y2="200" stroke="#92a59c" stroke-width="1"/>
<polygon points="156,200 340,80 524,200 524,230 156,230" fill="#e8825a" opacity="0.25"/>
<polyline points="60,230 110,230 340,80 570,230 620,230" fill="none" stroke="#e8825a" stroke-width="3"/>
<line x1="156" y1="60" x2="156" y2="260" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="524" y1="60" x2="524" y2="260" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<text x="340" y="66" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Peak +₹80 at exactly 25,000</text>
<text x="110" y="252" text-anchor="middle" fill="#f2f7f4" font-size="12">24,900</text>
<text x="156" y="278" text-anchor="middle" fill="#e8825a" font-size="12">BE 24,920</text>
<text x="340" y="252" text-anchor="middle" fill="#f2f7f4" font-size="12">25,000</text>
<text x="524" y="278" text-anchor="middle" fill="#e8825a" font-size="12">BE 25,080</text>
<text x="570" y="252" text-anchor="middle" fill="#f2f7f4" font-size="12">25,100</text>
<text x="70" y="218" text-anchor="start" fill="#f2f7f4" font-size="12">−₹20</text>
<text x="610" y="218" text-anchor="end" fill="#f2f7f4" font-size="12">−₹20</text>
<text x="340" y="294" text-anchor="middle" fill="#92a59c" font-size="12">Profit only between the breakevens; loss flats beyond either wing</text>
</svg>
</figure>

The diagram is the whole strategy in one picture, and it is worth reading slowly. The peak is a point, not a plateau. That single visual difference separates the butterfly from its closest relative, the iron condor, whose payoff is a flat-topped trapezoid with a wide zone of full profit. A butterfly has no flat top. Every point away from the middle strike is worth less than the peak, and the slope down from the peak is steep: 50 points off the middle strike in either direction already cuts the profit from 80 to 30.

## Breakevens, Maximum Profit and Maximum Loss — in Five Expiry Zones

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Butterfly spread five expiry zones table showing profit only between breakevens 24920 and 25080 and maximum loss of 20 outside the wings" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Butterfly spread — five expiry zones (worked example)</text>
<text x="340" y="56" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Strikes 24,900 / 25,000 / 25,100 · Net debit ₹20 · Breakevens 24,920 / 25,080</text>
<text x="60" y="88" text-anchor="start" fill="#92a59c" font-size="12" font-weight="700">Expiry zone</text>
<text x="620" y="88" text-anchor="end" fill="#92a59c" font-size="12" font-weight="700">P/L per unit</text>
<text x="60" y="124" text-anchor="start" fill="#f2f7f4" font-size="13">Below lower strike (≤ 24,900)</text><text x="620" y="124" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">−₹20 (full debit lost)</text>
<text x="60" y="160" text-anchor="start" fill="#f2f7f4" font-size="13">Lower to middle (e.g. 24,950)</text><text x="620" y="160" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹30</text>
<text x="60" y="196" text-anchor="start" fill="#f2f7f4" font-size="13">Exactly middle strike (25,000)</text><text x="620" y="196" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹80 (maximum profit)</text>
<text x="60" y="232" text-anchor="start" fill="#f2f7f4" font-size="13">Middle to upper (e.g. 25,050)</text><text x="620" y="232" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹30</text>
<text x="60" y="268" text-anchor="start" fill="#f2f7f4" font-size="13">Above upper strike (≥ 25,100)</text><text x="620" y="268" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">−₹20 (full debit lost)</text>
<text x="340" y="326" text-anchor="middle" fill="#92a59c" font-size="12">All figures per unit, before charges</text>
</svg>
</figure>

| Expiry zone | What happens to the legs | Profit / loss per unit (before charges) |
| --- | --- | --- |
| Below the lower strike (at or below 24,900) | All four calls expire worthless | −20 (full debit lost) |
| Between lower strike and middle strike (e.g. 24,950) | Long lower call worth 50, shorts and upper worthless | +30 |
| Exactly at the middle strike (25,000) | Long lower call worth 100, all other legs worthless | +80 (maximum profit) |
| Between middle strike and upper strike (e.g. 25,050) | Long lower call worth 150, two shorts worth −100 combined, upper worthless | +30 |
| Above the upper strike (at or above 25,100) | Long lower worth 200, shorts worth −200 combined, upper worth 0 at 25,100 and rising in step thereafter — legs net to zero | −20 (full debit lost) |

Two checks confirm the table. At 24,950, the position is inside the profit zone but well below the peak: 50 − 20 = 30. At 25,050, symmetry gives the same result: 150 − 100 − 20 = 30. At 25,100, the legs net to exactly zero (200 − 200 + 0) and the debit is gone. Beyond either wing, the same netting holds at every level: the long legs and short legs cancel, and the ₹20 debit stays lost. That is what "defined risk" means here — the worst case is known in advance, and it is the debit, not an open-ended loss. It is also what "limited profit" means — no expiry outcome pays more than ₹80 per unit before charges, however the market behaves.

## The Pin-Probability Honesty Section

This is the section most butterfly explanations skip, and it is the reason this article exists.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 310" role="img" aria-label="Butterfly spread pin probability comparison showing 4 to 1 reward to risk beside a narrow 160 point profit zone and a single point peak" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The 4:1 headline beside the narrow profit zone</text>
<text x="60" y="84" text-anchor="start" fill="#f2f7f4" font-size="13">Maximum profit : maximum loss</text>
<text x="620" y="84" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">80 : 20  =  4:1</text>
<text x="60" y="128" text-anchor="start" fill="#f2f7f4" font-size="13">Profit zone (breakeven to breakeven)</text>
<text x="620" y="128" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">160 points</text>
<text x="60" y="172" text-anchor="start" fill="#f2f7f4" font-size="13">Wing span (24,900 to 25,100)</text>
<text x="620" y="172" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">200 points</text>
<text x="60" y="216" text-anchor="start" fill="#f2f7f4" font-size="13">Peak</text>
<text x="620" y="216" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">One point: exactly 25,000</text>
<text x="60" y="260" text-anchor="start" fill="#f2f7f4" font-size="13">50 points off the peak (24,950 / 25,050)</text>
<text x="620" y="260" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹30, not +₹80</text>
<text x="340" y="294" text-anchor="middle" fill="#92a59c" font-size="12">A ratio describes best vs worst case — not how likely either is</text>
</svg>
</figure>

A 4:1 ratio sounds like a trade that should be taken every time. It is not, for three reasons that all come from the same numbers.

First, the profit zone is narrow. The underlying must finish inside a 160-point window, 24,920 to 25,080, merely to make any profit at all before charges. A market that drifts 100 points in either direction from 25,000 — an ordinary move — still lands inside the zone, but only at a partial profit of 30, not the headline 80. A market that drifts 200 points either way loses the full debit.

Second, the peak is a single point. Maximum profit requires the underlying to pin the middle strike almost exactly at expiry. There is no range of prices that pays the full 80. Every point of distance from 25,000 costs a point of profit, on either side, until the breakevens are reached and profit turns to loss.

Third, most expiry outcomes lose some or all of the debit. Any close below 24,920 or above 25,080 loses money before charges, and any close outside the wings loses it all. A butterfly therefore loses money on most expiry outcomes unless the pin lands — and the pin landing is a precise forecast, not a vague one. "The market will stay roughly here" is an iron condor view, with a flat zone that forgives imprecision. "The market will finish at this level" is a butterfly view, and it should be sized accordingly.

The sizing rule follows directly: risk the debit, never size as if the peak were the expected outcome. The ₹20 per unit in the example is the amount at risk on every trade, including the ones that end at the peak. A trader who sizes a butterfly as though 80 per unit were the normal result is sizing for the best case and funding the far more common partial-loss and full-loss cases with money the trade never promised. No return is promised here, and no win rate is claimed: the article makes no probability claim about how often any underlying pins a strike, because no such figure was verified for this run. The honest statement is structural, not statistical — the peak is one point, the profit zone is 160 points wide, and everything outside it loses.

One practical consequence is the profit target. As a widely repeated rule of thumb, not a guarantee, many butterfly traders take profit at roughly 75–80% of maximum profit — ₹60 to ₹64 per unit in the example — rather than holding to expiry for the last of the peak. The reasoning is straightforward: once most of the peak is banked, the remaining reward no longer justifies the risk that the underlying drifts off the pin before expiry. Holding for the final ₹16 to ₹20 means risking a banked ₹60-plus profit for a small increment, with the pin still to survive until expiry.

## When to Use a Butterfly — and When to Avoid It

Use a butterfly when the view is precise, low-volatility, and pinned to a level:

- You expect the underlying to finish near one specific level at expiry, not merely to stay inside a broad range.
- The market has consolidated around that level, or you have a reason to expect it to be pinned there into expiry, and you are not expecting a large move in either direction.
- You are comfortable paying a small debit for a defined-risk position, and you accept that the most likely outcomes are a partial profit, a partial loss, or the full debit lost — not the peak.

Avoid a butterfly when any of these is true:

- Your view is directional. A butterfly profits from stillness at a level, not from a rise or a fall. A directional view belongs in a directional spread or an outright position, not in a structure that loses money if the market moves 200 points either way.
- Your view is only "the market will stay in a range". That wider, less precise view belongs to the iron condor, whose flat profit zone forgives imprecision that a butterfly punishes.
- You expect a big move, or an event that could cause one. The event cases that suit a straddle or strangle — a result that moves the market sharply in an unknown direction — are exactly the cases that break a pin thesis. An event that moves the market breaks the butterfly, and the debit is the price of that break.
- You expect volatility to expand against the position. Carefully stated, the standard account is this: the short middle, at-the-money legs dominate the position's time decay and volatility sensitivity, so a pinned position tends to benefit as those short legs decay, while a volatility expansion against the position hurts. No precise sensitivity figure is claimed here, and this tendency is not a guarantee — it is a reason to avoid the trade when a volatility expansion is the central expectation, not a promise that calm markets pay.
- Liquidity is thin on any leg, or the four bid-ask spreads and four sets of charges consume a large share of the debit. A ₹20 debit trade has little room for slippage. If the net debit after charges is materially larger than the quoted debit, the breakevens, the ratio, and the profit target all change — recompute them on the after-charges debit or do not take the trade.

### A Qualified Note on Pin Risk at Expiry

Near the middle strike at expiry, the short middle legs create friction that deserves an honest, qualified note — qualified by settlement type, because the mechanics differ.

For cash-settled index options, expiry settlement is in cash: the difference is settled in money and no shares change hands, so there is no delivery to arrange. For physically settled stock options, exercise and assignment near the middle strike can create delivery obligations on the short legs, and a trader holding such a position into expiry needs to understand what their broker and the exchange require. The two cases are not interchangeable, and no delivery-form sentence in this article should be read as applying to cash-settled index options. The practical point is the same in both cases: do not hold a butterfly into expiry near the middle strike without knowing your settlement mechanics, and prefer taking the profit target early over discovering those mechanics at expiry.

## Butterfly vs Iron Condor vs Straddle vs Strangle

The four strategies are often confused because all of them involve more than one leg. The comparison below keeps each one to its intent, its cost, and its payoff shape. Full constructions, examples, and diagrams for the straddle, strangle, and iron condor belong to their own articles and are not repeated here; those articles are named in plain text only, as they are staged and not yet live.

| Strategy | Intent | Entry | Maximum profit | Maximum loss | Payoff shape |
| --- | --- | --- | --- | --- | --- |
| Long butterfly | Pin one level | Small net debit | Wing width − debit, only at the middle strike | Net debit | Peaked tent |
| Iron condor | Stay inside a broad range | Net credit | Net credit, across a flat zone | Wing width − credit, on one side | Flat-topped trapezoid |
| Long straddle | Big move either way | Net debit (two at-the-money legs) | Unlimited in theory, grows with the move | Net debit paid | V shape |
| Long strangle | Big move either way, cheaper entry | Net debit (two out-of-the-money legs) | Unlimited in theory, grows with the move | Net debit paid | Flat-bottomed valley |

### Butterfly vs Iron Condor: Peak Against Plateau

This is the closest comparison, and the choice turns on the precision of the view. The iron condor is a credit position with a wide, flat profit zone between two distinct short strikes: it pays its full credit across a range and forgives imprecision. The butterfly is a debit position with a single-point peak: it pays its full profit at one level and punishes imprecision point for point. If the view is "somewhere inside this range", the condor fits. If the view is "at this level", the butterfly fits. Neither is blanket-better; the view decides.

### Butterfly vs Straddle: Pin Against Move

These are mirror images in intent. The straddle buyer pays a debit — typically a large one, for two at-the-money legs — for a big move in either direction, and risks only the premium paid. The butterfly buyer pays a small debit for no move away from a level, and risks only the debit paid. The straddle needs movement; the butterfly needs the absence of it. A trader who buys a butterfly while expecting a large move has bought the wrong structure: the move that makes a straddle profitable is the move that takes a butterfly to its full loss.

### Butterfly vs Strangle: Same Mirror, Cheaper Move

The strangle is the straddle's cheaper, wider cousin: two out-of-the-money legs, a smaller debit, and a move that must be larger before profit begins. Against the butterfly the contrast is the same as for the straddle — the strangle buyer pays for movement, the butterfly buyer pays for a pin — with the added note that the strangle's flat bottom between its two strikes is the mirror image of the butterfly's peak: a zone of maximum loss where the butterfly has a zone of profit, and vice versa.

## When It Fails, Honestly, and What to Do

| Failure | Symptom | Fix |
| --- | --- | --- |
| A moderate move either way | Profit erodes fast off the peak; 50 points off the middle strike already cuts profit from 80 to 30 | Accept partial profit early, or exit at the profit target (75–80% of maximum) rather than holding for the peak |
| A big move either way | Full debit lost; position is outside the wings and the legs net to zero | Exit if the underlying moves beyond a breakeven with meaningful time left, rather than hoping it drifts back; the debit is the defined worst case, not a reason to add risk |
| Volatility expansion against the position | The position loses value even if the underlying has not moved far, as the short-leg decay thesis reverses | Do not enter a butterfly when a volatility expansion is the central expectation; exit if the thesis changes rather than waiting for calm to return |
| Holding to expiry chasing the last of the peak | A banked 60-plus profit is risked for the final 16–20, and a late drift off the pin erases it | Take the 75–80% target; treat the last of the peak as a bonus, not the plan |
| Illiquid legs and charge-eaten debits | Fills away from mid-price, or charges that materially raise the true debit, silently move the breakevens | Check liquidity on all four legs, use limit orders, and recompute breakevens on the net-of-charges debit before entering |
| Pin and assignment friction near the middle strike | Uncertainty about expiry settlement on the short middle legs | Know your settlement type before expiry — cash settlement for index options, delivery mechanics for physically settled stock options — and prefer exiting early over discovering the mechanics at expiry |
| Averaging down a moved position | Adding a second butterfly doubles the debit at risk and needs a second pin to succeed | Do not add a second butterfly to a moved position without stating plainly that it doubles the debit at risk; in most cases, exit the broken thesis instead |

The common thread is discipline about the thesis. A butterfly thesis is broken when the underlying leaves the profit zone or the volatility view reverses. A broken thesis is exited, not defended with more debit. The defined worst case is a feature only if it is respected: the debit is small precisely because the position is entered with the knowledge that it can be lost in full, and sizing must reflect that.

## Execution Checklist Before You Pay the Debit

1. **Confirm the view is a pin, not a range and not a move.** If the honest view is "somewhere in this range", stop and reconsider the iron condor. If it is "a big move is coming", stop and reconsider the straddle or strangle.
2. **Check liquidity on all four legs.** A butterfly needs fills on the lower call, two middle calls, and the upper call. Thin legs mean wide spreads, and wide spreads on four contracts consume a small debit quickly.
3. **Use limit orders, not market orders.** Never assume mid-price fills on four legs. Price the whole structure as one order where your broker supports it, and check the net debit actually achieved.
4. **Recompute on the net-of-charges debit.** The breakevens, the maximum profit, and the profit target in this article use a ₹20 debit before charges. Your trade's numbers use your achieved debit after charges. If the after-charges debit is materially larger, the profit zone is narrower than the one shown here.
5. **Set the profit target and the exit rule before entry.** The target in this article's terms is 75–80% of maximum profit. The exit rule is: leave if the underlying moves beyond a breakeven with meaningful time left, or if the volatility thesis reverses. Write both down before paying the debit.
6. **Cap the size at the debit.** Size the position so that losing the full debit — the defined worst case — is an acceptable loss. Never size as if the peak were the expected outcome.
7. **Know your settlement mechanics.** Cash-settled index options settle in cash; physically settled stock options can involve delivery on exercise or assignment. Know which one you hold before expiry, and prefer exiting early to discovering the answer at expiry.
8. **Keep all four legs together.** Never remove a wing to save premium, and never leave a middle leg unfilled. An unbalanced butterfly is a different trade with different risk, and it is not the trade this article describes.

## Variants in One Box: Iron Butterfly, Broken Wing, Short Butterfly

These are pointers, not second teaches. The iron butterfly is the credit version using both puts and calls, with the short strikes at the same at-the-money level: it collects a larger credit, has a narrower profit zone, and most resembles a short straddle with wings. The broken-wing butterfly uses unequal wing widths, which changes the maximum profit, maximum loss, and breakevens, and can even be structured for a small net credit. The short butterfly is the mirror image — sell the wings, buy the body — a bet on a big move, with defined risk on the short version's own terms. None of these is constructed, worked, or diagrammed in this article; each would need its own treatment, and the iron butterfly in particular is not this article's strategy.

## Frequently Asked Questions

### What is a butterfly spread in options trading?

A butterfly spread is a neutral, defined-risk, limited-profit position on one underlying with one expiry, built from four contracts across three equally spaced strikes in a 1-2-1 ratio. In the call version you buy 1 lower-strike call, sell 2 middle-strike calls, and buy 1 higher-strike call, entering for a small net debit that is your maximum loss before charges.

### How do you construct a butterfly spread?

Choose three strikes with equal spacing, all on the same underlying and expiry. Buy 1 call at the lower strike, sell 2 calls at the middle strike, and buy 1 call at the upper strike. The two short middle legs fund most of the cost of the two long wings, so the position is entered for a net debit — ₹20 per unit in this article's example (180 + 60 − 2 × 110).

### What is the maximum profit and maximum loss in a butterfly spread?

Maximum loss is the net debit paid — ₹20 per unit in the example, before charges, suffered in full if the underlying closes at or below the lower strike or at or above the upper strike. Maximum profit is the wing width minus the net debit — 100 − 20 = ₹80 per unit before charges — achieved only if the underlying closes exactly at the middle strike at expiry.

### How do you calculate butterfly spread breakeven points?

Lower breakeven = lower strike + net debit; upper breakeven = upper strike − net debit. In the example: 24,900 + 20 = 24,920, and 25,100 − 20 = 25,080. Between those two levels the position is profitable at expiry before charges; charges narrow the zone in practice.

### Butterfly spread vs iron condor: what is the difference?

The iron condor is a credit position with a wide, flat profit zone between two distinct short strikes — it suits a view that the underlying will stay somewhere inside a range. The butterfly is a debit position with a single-point peak — it suits a view that the underlying will finish at one specific level. The condor forgives imprecision; the butterfly punishes it point for point.

### Butterfly spread vs straddle: which one should you use?

Use a straddle when you expect a big move in either direction and are willing to pay a larger debit for two at-the-money legs. Use a butterfly when you expect the underlying to finish near one specific level and are willing to accept a narrow profit zone for a small debit. They are mirror images: the move that makes a straddle profitable is the move that takes a butterfly to its full loss.

### When should you use a butterfly spread — and when should you avoid it?

Use it for a precise, low-volatility pin view: the underlying finishing near one level at expiry, with liquid legs and a debit you can afford to lose in full. Avoid it for directional views, for broad "stay in a range" views, when a big move or volatility expansion is expected, or when illiquid legs and charges would consume the small debit.

### What is an iron butterfly, and how is it different from a regular butterfly?

An iron butterfly is the credit version using both puts and calls, with the short strikes at the same at-the-money level. It collects a credit rather than paying a debit, has a narrower profit zone, and most resembles a short straddle with wings. A regular (long) butterfly, taught in this article, pays a debit for a peaked payoff with the maximum profit at the middle strike.

### What happens if the stock moves away from the middle strike before expiry?

Profit falls point for point with distance from the middle strike. Fifty points away in either direction in the example, profit is already down from 80 to 30. Beyond a breakeven (24,920 or 25,080) the position loses money, and beyond either wing (24,900 or 25,100) it loses the full ₹20 debit. The standard responses are to take a partial profit early, or to exit if the underlying moves beyond a breakeven with meaningful time left rather than hoping it drifts back.

### Is a butterfly spread good for beginners?

It can be a reasonable second spread to learn — after understanding single calls and simple vertical spreads — because its risk is defined and its worst case is a small, known debit. It is not a good first trade for a beginner who has not yet grasped that the peak is a single point: the common beginner error is sizing for the 4:1 headline ratio and discovering that most expiry outcomes pay far less than the peak, or lose the debit. Learn the construction, respect the pin requirement, keep all four legs in place, and size for the debit, not the peak.

---

*This article is educational only. It describes how a butterfly spread works; it is not a recommendation to trade one, and it promises no return. Options can lose the full premium paid, and a butterfly can lose its full net debit. Check the lot size and charges in force at trade time, and understand your settlement type before holding any position into expiry.*

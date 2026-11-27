---
title: "Iron Condor Strategy: How the Four Legs Work, Where Profit Ends, and What the Worst Case Really Costs"
description: "Learn the iron condor strategy: four legs, profit zone, breakevens, max profit and max loss, expectancy honesty, and adjustments — with one worked example."
meta_description: "Learn the iron condor strategy: four legs, profit zone, breakevens, max profit and max loss, expectancy honesty, and adjustments — with one worked example."
date: 2026-11-11
author: Kaizen
tag: "Indian options · Strategies"
keywords: ["iron condor strategy", "iron condor breakeven", "iron condor max profit", "iron condor max loss", "iron condor vs strangle", "iron condor adjustments"]
---

*By Kaizen · 11 November 2026 · Monks Of Market*

If you have heard that an iron condor "profits when the market goes nowhere", this guide answers the questions that matter before you sell anything: how do the four legs fit together, where exactly does profit end, and what does the worst case really cost?

## What an Iron Condor Is: Four Legs, One Range, and a Defined Worst Case

The **iron condor strategy** is a four-leg, non-directional, net-credit, defined-risk position on one underlying with one expiry. In this article, "iron condor" means the standard short, or credit, version. The long, debit inverse is a different position and is not taught here.

An iron condor combines two credit spreads. Below the current price sits a bull put spread. Above the current price sits a bear call spread. You collect a net credit when you open the position, and that credit is your maximum profit — but only if the underlying closes between your two short strikes at expiry.

The worst case is also defined in advance. It is the wider wing width minus the net credit received, suffered on one side only. The market cannot breach both wings at once, so only one side can reach maximum loss at a time. That defined worst case is the whole point of the structure — and, as this article shows, it is also larger than the credit you collect.

An iron condor is therefore not a bet that the market will stay exactly still. It is a bet that the market will stay inside a range wide enough to contain its expiry price, allowing room on both sides for the partial-loss slopes between each short strike and its protective long strike.

## The Four Legs in Strike Order

From lowest strike to highest, the four legs are: long put, short put, short call, long call. All four are on the same underlying and the same expiry. The two short legs are the ones you sell to collect premium. The two long legs are the protection that caps your loss on each side.

| Leg | Position | Role |
| --- | --- | --- |
| Long put (lowest strike) | Buy | Caps the downside loss |
| Short put | Sell | Collects premium; defines the lower edge of the full-profit zone |
| Short call | Sell | Collects premium; defines the upper edge of the full-profit zone |
| Long call (highest strike) | Buy | Caps the upside loss |

### The Bull Put Spread Below the Price

The bull put spread is the lower half of the iron condor. You sell the higher-strike, out-of-the-money put and buy the further out-of-the-money put below it. The premium you collect on the short put, minus the premium you pay for the long put, is the credit from this spread.

If the underlying stays above the short put strike at expiry, both puts expire worthless and you keep this spread's credit in full. If the underlying falls through the short put strike, the spread starts to lose value point for point, until the loss is capped at the long put strike.

### The Bear Call Spread Above the Price

The bear call spread is the upper half of the iron condor. You sell the lower-strike, out-of-the-money call and buy the further out-of-the-money call above it. Again, the short leg's premium minus the long leg's premium is the credit from this spread.

If the underlying stays below the short call strike at expiry, both calls expire worthless and you keep this spread's credit in full. If the underlying rises through the short call strike, the spread starts to lose value point for point, until the loss is capped at the long call strike.

Put the two spreads together and you have the iron condor: premium collected on both sides, loss capped on both sides, and a flat zone in the middle where the full credit is kept.

## Beginners Warning: Removing a Long Leg Removes the Defined Risk

This warning comes before any numbers, because it is the most important guardrail in the whole strategy.

Every short leg in an iron condor stays paired with its protective long leg. If you remove a long leg, you no longer have a defined-risk spread. You have an uncovered short option, whose loss is no longer capped at the wing width minus the credit.

Removing a long leg is never presented in this article as a way to collect more premium. The extra premium you might collect by dropping protection is small compared with the uncapped risk you take on in return. If you are not comfortable paying for all four legs, including both long legs, an iron condor is not the right structure for that trade.

## One Worked Example, Carried Through the Whole Article

Every number in this article comes from one consistent, illustrative example, carried through construction, the profit zone, both breakevens, both maximum-loss points, and the expectancy section, so you can check each step against the last.

These are illustrative assumptions created for this article. They are not live market quotes, not traded prices, and not a recommendation at these levels.

- Underlying index level (illustrative): 25,000
- Long put strike: 24,400 — buy for a premium of 15 (illustrative)
- Short put strike: 24,700 — sell for a premium of 45 (illustrative)
- Short call strike: 25,300 — sell for a premium of 45 (illustrative)
- Long call strike: 25,600 — buy for a premium of 15 (illustrative)

All maths in this article is per unit, meaning per index point. No lot-size totals are given, because the lot size was not verified from a primary source for this article. To work out a rupee amount for a real trade, multiply the per-unit figure by the lot size in force at trade time, and then add charges.

The two spreads each collect the same credit in this symmetric example. The bull put spread collects 45 − 15 = 30 per unit. The bear call spread also collects 45 − 15 = 30 per unit. The total net credit is therefore 30 + 30 = 60 per unit.

Both wing widths are 300 points: 24,700 − 24,400 on the put side, and 25,600 − 25,300 on the call side. The short strikes sit 300 points either side of the illustrative 25,000 level, which is why this example is symmetric. A skewed condor, with short strikes at unequal distances, would behave differently.

All breakevens and expiry outcomes in this article are before charges. Charges narrow the profitable zone in practice, as explained in the execution section below.

## Maximum Profit and Maximum Loss: The Formulas

The formulas for an **iron condor options strategy** are simple and worth learning before you look at any payoff chart.

**Net credit received = (short put premium + short call premium) − (long put premium + long call premium).**

In the example: (45 + 45) − (15 + 15) = 90 − 30 = 60 per unit. That net credit is the **iron condor max profit** per unit, before charges.

**Maximum loss per unit, before charges = wider wing width − net credit received.**

In the example, both wings are 300 points wide, so: 300 − 60 = 240 per unit. That is the **iron condor max loss** per unit, before charges.

The credit-to-risk ratio is therefore 60 to 240, or 1:4. You risk four rupees per unit to make one rupee per unit, before charges. The credit is always smaller than the wing width in a standard iron condor, so the maximum loss is always a multiple of the maximum profit. Keep that ratio in mind every time the credit looks attractive on its own.

Maximum profit is kept in full at expiry only if the underlying closes anywhere between the two short strikes, so that all four legs expire worthless. Maximum loss is suffered only if the underlying closes at or beyond the long strike on the tested side. Only one side can reach maximum loss at a time.

## The Iron Condor Profit Zone and the Five Expiry Zones

The **iron condor profit zone** has two layers, and confusing them is a common beginner error. The full-profit zone is the range between the two short strikes, 24,700 to 25,300 in the example, where the whole 60 per unit is kept. The wider profit zone, including partial profit, runs from the lower breakeven to the upper breakeven, 24,640 to 25,360, as worked out in the next section. Outside that wider zone, the position loses money at expiry.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 380" role="img" aria-label="Iron condor five expiry zones table showing profit of 60 between short strikes and maximum loss of 240 beyond either long strike" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Iron condor — five expiry zones (worked example)</text>
<text x="340" y="56" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Strikes 24,400 / 24,700 / 25,300 / 25,600 · Net credit ₹60 · Breakevens 24,640 / 25,360</text>
<text x="60" y="88" text-anchor="start" fill="#92a59c" font-size="12" font-weight="700">Expiry zone</text>
<text x="620" y="88" text-anchor="end" fill="#92a59c" font-size="12" font-weight="700">P/L per unit</text>
<text x="60" y="124" text-anchor="start" fill="#f2f7f4" font-size="13">Below 24,400</text><text x="620" y="124" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">−₹240 (max loss)</text>
<text x="60" y="160" text-anchor="start" fill="#f2f7f4" font-size="13">24,400 – 24,640</text><text x="620" y="160" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Partial loss, −₹240 to ₹0</text>
<text x="60" y="196" text-anchor="start" fill="#f2f7f4" font-size="13">24,640 – 25,360</text><text x="620" y="196" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Profit, ₹0 to +₹60 (full +₹60 between 24,700–25,300)</text>
<text x="60" y="232" text-anchor="start" fill="#f2f7f4" font-size="13">25,360 – 25,600</text><text x="620" y="232" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Partial loss, ₹0 to −₹240</text>
<text x="60" y="268" text-anchor="start" fill="#f2f7f4" font-size="13">Above 25,600</text><text x="620" y="268" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">−₹240 (max loss)</text>
<text x="340" y="326" text-anchor="middle" fill="#92a59c" font-size="12">Max loss ₹240 = wider wing width 300 − credit 60 · one side only</text>
<text x="340" y="354" text-anchor="middle" fill="#92a59c" font-size="12">All figures per unit, before charges</text>
</svg>
</figure>

| Expiry zone (underlying at expiry) | Expiry outcome per unit, before charges |
| --- | --- |
| At or below 24,400 (long put strike) | −240 (maximum loss) |
| Between 24,400 and 24,700 (put slope) | Rising point for point from −240 to +60; for example, 24,500 gives −140 |
| Between 24,700 and 25,300 (short strikes) | +60 (full maximum profit) |
| Between 25,300 and 25,600 (call slope) | Falling point for point from +60 to −240; for example, 25,500 gives −140 |
| At or above 25,600 (long call strike) | −240 (maximum loss) |

At exactly a long strike, the loss is already the maximum −240 per unit. At exactly a short strike, the profit is the full +60 per unit. Between a short strike and its long strike lies a partial-loss slope: profit shrinks point for point past the short strike, crosses zero at the breakeven, and reaches maximum loss at the long strike.

These are expiry outcomes. The value of the position before expiry is different, because time decay, implied volatility, and gamma move it day by day. Do not treat an expiry payoff table as a live position value.

## Iron Condor Breakevens: 24,640 and 25,360

The **iron condor breakeven** points are where the expiry profit crosses zero on each side.

**Lower breakeven = short put strike − net credit received.**
In the example: 24,700 − 60 = 24,640.

**Upper breakeven = short call strike + net credit received.**
In the example: 25,300 + 60 = 25,360.

So the position makes money at expiry if the underlying closes between 24,640 and 25,360, breaks even at exactly either breakeven, and loses money outside that range. The full 60 per unit is kept only inside the narrower 24,700 to 25,300 range between the short strikes. Between 24,640 and 24,700, and between 25,300 and 25,360, the position is profitable but only partly — the remaining profit is being eaten away along the slope towards the long strike.

Charges narrow this profitable zone in practice, because the breakevens above are before charges. Once charges are subtracted, the true breakevens move slightly inward — one more reason to judge a condor on its net-of-charges credit, not its headline credit.

## Payoff Diagram: Reading the Flat-Topped Trapezoid

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Iron condor payoff diagram showing maximum profit of 60 between the short strikes and maximum loss of 240 beyond either long strike" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Iron condor payoff at expiry — flat-topped trapezoid</text>
<line x1="60" y1="180" x2="620" y2="180" stroke="#92a59c" stroke-width="1"/>
<polyline points="60,260 130,260 235,90 445,90 550,260 620,260" fill="none" stroke="#e8825a" stroke-width="3"/>
<line x1="214" y1="70" x2="214" y2="270" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="466" y1="70" x2="466" y2="270" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<text x="340" y="76" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">+₹60 between 24,700–25,300</text>
<text x="235" y="106" text-anchor="middle" fill="#f2f7f4" font-size="12">24,700</text>
<text x="445" y="106" text-anchor="middle" fill="#f2f7f4" font-size="12">25,300</text>
<text x="70" y="248" text-anchor="start" fill="#f2f7f4" font-size="12">−₹240</text>
<text x="610" y="248" text-anchor="end" fill="#f2f7f4" font-size="12">−₹240</text>
<text x="130" y="288" text-anchor="middle" fill="#f2f7f4" font-size="12">24,400</text>
<text x="214" y="288" text-anchor="middle" fill="#e8825a" font-size="12">BE 24,640</text>
<text x="466" y="288" text-anchor="middle" fill="#e8825a" font-size="12">BE 25,360</text>
<text x="550" y="288" text-anchor="middle" fill="#f2f7f4" font-size="12">25,600</text>
</svg>
</figure>

The **iron condor payoff diagram** is a flat-topped trapezoid — sometimes described as a tent with a flat roof. Reading it from left to right:

- Far to the left, beyond the long put at 24,400, the line is flat at −240 per unit. That is the maximum-loss flat on the downside.
- Between 24,400 and 24,700, the line slopes upward as the loss shrinks point for point, crossing zero at the lower breakeven of 24,640.
- Between the short strikes, 24,700 and 25,300, the line is flat at +60 per unit. That flat roof is the full-profit zone.
- Between 25,300 and 25,600, the line slopes downward, crossing zero at the upper breakeven of 25,360.
- Far to the right, beyond the long call at 25,600, the line is flat again at −240 per unit. That is the maximum-loss flat on the upside.

The shape is visibly different from the mirror-image buying strategies: a long strangle's payoff is a flat-bottomed valley, and a straddle's is a V. The condor's flat roof is the visual signature of a seller collecting for stillness, and its two flat floors are the reminder that the worst case is capped but large.

## What Helps the Seller: Theta and Falling Implied Volatility

Two forces work in the iron condor seller's favour on quiet days.

The first is time decay, or theta. Theta is typically positive for a short iron condor: on quiet days, all four legs lose time value, and the seller wants the two short legs to decay. When the underlying stays in range, time decay is the primary profit source. One caveat: if one long leg goes deep in the money on a large move, position theta can turn negative. Theta is not positive in every state, so do not treat it as a guaranteed daily income.

The second force is falling implied volatility, or vega. Vega is typically negative for a short iron condor: the position loses value when implied volatility rises and gains when implied volatility falls, because the short legs inflate faster than the long legs. That is why traders prefer to enter when implied volatility is elevated — the credit is worth collecting, and it has room to contract after a known event passes.

The reverse is the risk. Rising implied volatility inflates the position against the seller even before the underlying moves. A condor can therefore show a loss mid-trade while the underlying is still inside the profit zone, purely because volatility rose.

For completeness, delta is near zero at initiation in this symmetric example, because the short strikes sit roughly equidistant from the illustrative 25,000 level. As the underlying moves towards one short strike, directional exposure develops. That near-zero starting delta is a property of this symmetric illustration, not a promise for skewed condors.

## Gamma Near Expiry: Why a Safe-Looking Condor Can Deteriorate Fast

Gamma is the enemy near expiry. Gamma is typically negative for a short iron condor and grows as expiry approaches. Inside roughly the last three weeks, a small move in the underlying swings the position's value sharply, so a condor that looked safe can deteriorate fast.

Gamma risk is highest near the short strikes and in the days immediately before expiry. That is the core reason for the time-based exit rule in the management section: past a certain point, the remaining credit to be collected is small, while the speed at which the position can move against you is large.

Think of it this way. Early in the trade, time decay does most of the work and a moderate move is absorbed. Late in the trade, near a short strike, the same-sized move can push the position down the partial-loss slope much faster than time decay can repair it. Holding on to squeeze out the last of the credit means holding through exactly the period when the position is most fragile.

## When to Use an Iron Condor — and When Not To

**When to use an iron condor** comes down to four conditions lining up together.

First, you need a range-bound or low-volatility view: you expect the underlying to stay inside a range through expiry, not to trend strongly in either direction. Second, implied volatility should be elevated, so the credit is worth collecting and has room to contract. Remember, though, that elevated volatility is a preference for credit size, not a timing signal, and volatility that rises further still hurts the seller. Third, the short strikes should sit well out of the money on both sides, giving the underlying room to move without testing either wing. Fourth, the underlying should be liquid.

For the Indian reader, a **Nifty iron condor** — or one on Bank Nifty index options — is the liquid default, preferred over illiquid stock options. This is a liquidity preference, not a claim about any share of market volume. Whatever the underlying, check liquidity leg by leg: all four legs need to be tradeable at sensible spreads, not just the short legs.

Do not use an iron condor when your view is directional, when you expect a large move in either direction, when volatility is so low that the credit is barely worth the risk, or when any leg is illiquid. In those cases, a different structure fits the view better — see the fair contrast section near the end of this article and the plain-text pointer to the Option Trading Strategies hub for the wider map of strategies.

### Be Careful Around Known Events

High implied volatility can look attractive before a known event, then crush or explode after it. Budget announcements, RBI policy decisions, and earnings seasons are the classic examples in Indian markets. Before the event, the elevated volatility inflates the credit on offer. After the event, volatility may collapse — which helps the seller — or the underlying may gap through a wing, which does not.

Treat this as event risk, not as a prediction about any specific upcoming event. If you hold a condor through a known event, you are accepting gap risk: the underlying can open well beyond a short strike, with no chance to adjust at prices in between.

Here, the weekly-versus-monthly comparison is kept qualitative. Weekly expiries decay faster and therefore offer faster premium collection, but they carry extremely high gamma sensitivity near expiry, notably in the final days before expiry. Monthly expiries decay more slowly and are more stable. Weekly condors only make sense where liquidity is strong across all four legs. No expiry-weekday claims are made in this article, since expiry-day arrangements have changed under recent reforms.

## Expectancy Honesty: Why a High Win Rate Can Still Break Even

The credit looks like a frequent win. The maths shows why frequency alone does not mean profit.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Iron condor expectancy table showing four quiet wins of 60 offset by one maximum loss of 240 at breakeven" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Iron condor expectancy — why 80% wins only break even</text>
<text x="60" y="84" text-anchor="start" fill="#f2f7f4" font-size="13">4 quiet expiries × +₹60</text>
<text x="620" y="84" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">+₹240</text>
<text x="60" y="128" text-anchor="start" fill="#f2f7f4" font-size="13">1 breached wing × −₹240</text>
<text x="620" y="128" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">−₹240</text>
<text x="60" y="172" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Net over 5 trades</text>
<text x="620" y="172" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">₹0</text>
<text x="60" y="216" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Break-even win rate (before charges)</text>
<text x="620" y="216" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">80%</text>
<text x="340" y="272" text-anchor="middle" fill="#92a59c" font-size="12">At 1:4 credit-to-risk, four wins pay for one max loss — charges push the hurdle higher</text>
</svg>
</figure>

At the example's 1:4 ratio, the break-even win rate before charges is:

**Maximum loss ÷ (maximum profit + maximum loss) = 240 ÷ (60 + 240) = 240 ÷ 300 = 80%.**

In other words, before charges, you need to win four out of five trades just to break even.

| Sequence (per unit, before charges) | Maths | Net result |
| --- | --- | --- |
| Four quiet expiries, then one breached wing | (4 × +60) − 240 = 240 − 240 | 0 |
| Five quiet expiries, then one breached wing | (5 × +60) − 240 = 300 − 240 | +60 |

This is arithmetic on the example's ratio, not a claim about real win rates. No real-world win rate is promised or implied here. The point is structural: a trader who wins three-quarters of the time at this ratio still loses money before charges, and a trader who wins 80% only breaks even before charges. Charges make the real hurdle higher still, because every trade pays four sets of charges out of a small credit.

That is why **iron condor risk** must always be shown beside the credit. A strategy can win most of the time and still lose money overall, if the occasional loss is four times the size of the typical win. Any description of the credit that does not mention the 240 per unit on the other side of the trade is incomplete.

For readers who want the deeper framework, the plain-text pointer here is to the live articles on What Is Trading Expectancy and Risk of Ruin in Trading. Those concepts are not re-taught in this article; the table above is enough to see why expectancy, not win rate, decides whether a condor strategy makes money over time.

## How Much Capital It Really Needs: Maximum Loss Per Unit, Not the Credit

Capital at risk is set by maximum loss, never by the credit. In the example, the capital at risk per unit is the maximum loss of 240 per unit, plus charges. The 60 per unit credit is money received, not money at risk — and it is far smaller than the amount that can be lost.

This is the single most common sizing error with iron condors: sizing a trade as if the credit were the stake. If you size on the credit, a single breached wing loses several times what you thought you were risking. Cap your position size at maximum loss. Work out, before entering, how much a maximum-loss outcome would cost across the whole position, and make sure that amount is an acceptable loss for your account.

As stated above, all maths here is per unit: multiply the per-unit maximum loss by the lot size in force at trade time, then add charges, to get the capital at risk for one lot. No lot-size total is published in this article, because the lot size was not verified from a primary source for this run. Position sizing itself is only a pointer in this article, not a re-teach; the live position-sizing material covers it in full.

## Execution Caveats: Four Spreads, Four Sets of Charges, Net-of-Charges Credit Only

Four legs mean four bid-ask spreads and four sets of charges. Slippage and charges eat a larger share of a small credit than of a large premium trade, because the credit itself is small. A 60 per unit headline credit can shrink noticeably once all four legs have been bought and sold at real prices.

The only credit that counts is the net credit after charges. Before entering, check liquidity on all four legs and use limit orders rather than assuming mid-price fills. Mid-price fills on four legs at once are an optimistic assumption, not a plan. If the legs are illiquid, the bid-ask spreads alone can turn an apparently workable condor into a poor trade.

On charges, only one component is verified for this article: the NSE exchange transaction charge plus IPFT for equity options, at 0.03553% per side, per NSE circular NSE/FA/73061 dated 27 February 2026 and effective 1 March 2026. The revised split is ₹3,552.99 transaction charge + ₹0.01 IPFT = ₹3,553 per crore of premium per side, and this component rate also applies to Nifty index options.

That verifies the exchange component only. It is not a total charge bill: brokerage, STT, stamp duty, SEBI fees, GST, and any other levy vary by broker and plan, and no total charge figure is presented as verified in this article. Any total charge amount you use in your own planning should be treated as your own explicit assumption, checked against your broker's schedule.

The full charge table is not re-taught here. The narrower point for the iron condor trader is this: judge the trade on the credit left after all charges, and be sceptical of any condor whose headline credit is mostly consumed by the cost of trading four legs.

## When It Fails, and What to Do: Management and Adjustments

**Iron condor adjustments** reshape risk; they never remove it. Every failure below is paired with its symptom and its fix, and every fix has a cost stated beside it.

- **Trending breakout on either side.** Symptom: the underlying approaches and then passes a short strike, and the position slides down the partial-loss slope. Fix: roll the tested spread, convert, or exit — see below. Waiting and hoping is not a fix.
- **Implied-volatility spike against the seller.** Symptom: the position loses value even though the underlying has barely moved. Fix: recognise that this is a volatility loss, not a range loss, and judge the exit on the position's current value and your remaining thesis, not on the hope that volatility must fall back.
- **Gamma acceleration inside the last three weeks.** Symptom: small underlying moves cause disproportionately large position swings, especially near a short strike. Fix: the time-based exit below exists for exactly this reason.
- **Holding to expiry to chase the last of the credit.** Symptom: a profitable position is held into expiry week for a shrinking remaining reward. Fix: take profit early, per the rule of thumb below.
- **Illiquid legs or charge-eaten credits.** Symptom: fills come far from mid-price, or the net-of-charges credit is far smaller than the headline credit. Fix: do not enter illiquid condors, use limit orders, and judge every trade net of charges.

### Take Profit Early and Exit on Time: Rules of Thumb, Not Guarantees

Two widely repeated rules of thumb govern iron condor exits. Both are presented here with their reasoning, and neither is a guarantee of profit.

The first is to close at around 50% of maximum profit. In the worked example, that means closing for a profit of about 30 per unit — buying the condor back at about 30 against the 60 credit received. The reasoning is that the first half of the credit tends to decay early, while the position still has room on both sides. Chasing the second half keeps the seller exposed to rising gamma for a shrinking remaining reward.

The second is a time-based exit: if the 50% target has not been reached, exit by roughly 21 days to expiration (21 DTE). The reasoning is that past about 21 DTE, shrinking daily time decay is traded for rising gamma, and holding into expiry week leaves the position exposed to sharp gamma-driven moves into settlement (pin and assignment complications in their delivery form apply to physically settled stock options, not to cash-settled index options like Nifty/Bank Nifty). Together, the two rules say the same thing in different words: take a good profit when it is offered, and do not pay rising risk for a dwindling reward.

### Rolling the Tested and Untested Spreads

When one side is tested, the standard management is to roll — but the two sides are rolled differently, and the difference matters.

**Roll the tested spread further out in strike and/or out in time.** Moving the tested spread away from the underlying gives the position more room. The cost is a narrower profit zone, or more time in the trade, and usually a net debit or a reduced credit. Rolling out in time means closing all four legs and re-establishing at a later expiry. A roll is never free, and it never removes risk: it trades one risk shape for another.

**Roll the untested spread closer to the current price at the same width.** Closing the cheap untested spread and reopening it nearer the price collects extra credit. That extra credit pushes the tested breakeven further out and lowers the worst case, because defined risk is the wing width minus total credit. The cost is a narrower profit zone, and over-rolling can make the untested side the new tested side if the underlying retraces. The width must stay the same: widening a rolled spread raises defined risk, and that is flagged as a mistake in the checklist below.

### When the Range Thesis Is Invalidated: Convert or Exit

If the original range view no longer holds — the underlying has broken out and is trending, or the event risk you accepted has changed the picture — the remaining options are to convert to a directional spread or exit outright. Converting reshapes the position into something that fits the new view. Exiting accepts the loss at its current size rather than risking the maximum loss.

Adding size to a tested trade to win the credit back is not recommended. It turns a defined-risk position with a known worst case into a larger bet made under stress, which is how a single bad condor becomes a damaging one. Bringing both short strikes together would create an iron butterfly variant, covered in the butterfly spread spoke — it is not taught here.

## Iron Condor vs Strangle vs Butterfly: A Fair Contrast

The **iron condor vs strangle** comparison is a mirror image, and it should be stated fairly in both directions. The long strangle buyer pays a debit for a big move and risks only the premium paid; if the move never comes, the premium is lost, but the loss cannot exceed it. The iron condor seller collects a credit for stillness and risks a multiple of the credit; if stillness never comes, the loss can be several times the credit collected. Neither side is "better" in the abstract — they are opposite bets on movement.

The **iron condor vs butterfly** comparison is about the shape of the range view. A butterfly is a different range-bound structure with a narrower profit peak: it pays most when the underlying lands close to a single central level. An iron condor's flat profit zone between two distinct short strikes is wider and flatter: it pays the full credit anywhere inside a range. Which fits better depends on how precise the range view is. A precise pin-point view suits a butterfly's peak; a broader "stays somewhere in this range" view suits a condor's flat roof. No blanket ranking is offered here, because the right choice follows the view, not the strategy's reputation.

| | Iron condor (short) | Long strangle | Butterfly spread |
| --- | --- | --- | --- |
| You pay or collect | Collect net credit | Pay net debit | Pay net debit (typically) |
| Profits when | Underlying stays in range | Underlying makes a big move either way | Underlying lands near a central level |
| Maximum profit | Net credit (60 per unit in the example) | Unlimited in theory, needs a large move | Capped, concentrated near the centre |
| Maximum loss | Wing width minus credit (240 per unit in the example) | Premium paid only | Premium paid (debit) |
| Worst-case shape | Flat loss beyond either long strike | Premium lost if no move | Premium lost if far from centre |

For the wider map, the plain-text pointers are to the Option Trading Strategies hub, the Long Strangle spoke, and the Butterfly spread spoke. The Covered Call spoke and the Protective Put spoke cover different market views again — income on a holding, and protection on a holding — and are named here only as pointers for readers whose view points elsewhere.

## Common Mistakes Checklist

Run through this list before trading an iron condor, and again when one side is tested:

- [ ] **Removing a long leg to collect more premium.** This removes the defined-risk property entirely and turns a spread into an uncovered short position.
- [ ] **Widening a rolled spread.** A wider wing width minus credit is a larger maximum loss, even though the wider spread collects more credit. Roll the untested side at the same width.
- [ ] **Sizing on the credit instead of maximum loss.** Capital at risk is 240 per unit in the example, not 60. Size on the loss side.
- [ ] **Selling on illiquid stock options.** Check liquidity on all four legs; prefer liquid index options where the spreads are tradeable.
- [ ] **Assuming mid-price fills or ignoring charges.** Four spreads and four sets of charges eat a small credit fast. Judge only the net-of-charges credit.
- [ ] **Chasing the last of the credit to expiry.** The 50% rule of thumb and the roughly 21 DTE exit exist to prevent exactly this.
- [ ] **Holding through a known event without respecting gap risk.** High pre-event volatility can look attractive, then gap through a wing overnight.

## Risks and Limitations

A single breached wing can erase several quiet wins, and at the example's 1:4 ratio it takes an 80% win rate before charges just to break even. Implied volatility can rise against the seller before the underlying moves at all. Gamma accelerates near expiry, most of all near the short strikes, so a position that looked safe can deteriorate fast in its final weeks.

Breakevens and zone outcomes in this article are expiry outcomes before charges. Intraday or pre-expiry values differ because of theta, vega, and gamma — and a position can show a loss mid-trade while still inside its profit zone. The worked example uses illustrative premiums, not live quotes, and per-unit maths only — real rupee amounts depend on the lot size in force at trade time and on your broker's charges.

No return is promised in this article, and the credit is never framed as recurring income. An iron condor is a defined-risk structure, not a risk-free one, and its defined risk is four times its credit in the example used here.

## Frequently Asked Questions

### What is an iron condor in options trading?

An iron condor is a four-leg, non-directional, net-credit, defined-risk position on one underlying with one expiry. It combines a bull put spread below the current price with a bear call spread above it. It keeps its full net credit at expiry only if the underlying closes between the two short strikes, and its maximum loss is the wider wing width minus the net credit, on one side only.

### How do you construct an iron condor?

In strike order, lowest to highest: buy a further out-of-the-money put (long put), sell a nearer out-of-the-money put (short put), sell a nearer out-of-the-money call (short call), and buy a further out-of-the-money call (long call). All four legs share one underlying and one expiry. Every short leg stays paired with its protective long leg on the same side.

### What is the maximum profit and maximum loss in an iron condor?

Maximum profit per unit, before charges, equals the net credit received. Maximum loss per unit, before charges, equals the wider wing width minus the net credit. In the worked example, the net credit is 60 per unit, so maximum profit is 60 per unit and maximum loss is 300 − 60 = 240 per unit, both before charges.

### How do you calculate iron condor breakeven points?

Lower breakeven = short put strike − net credit. Upper breakeven = short call strike + net credit. In the example: 24,700 − 60 = 24,640 on the downside, and 25,300 + 60 = 25,360 on the upside. Both are expiry breakevens before charges; charges narrow the profitable zone in practice.

### Iron condor vs long strangle: what is the difference?

They are mirror images in intent. The long strangle buyer pays a debit for a big move and risks only the premium paid. The iron condor seller collects a credit for stillness and risks a multiple of the credit — 240 per unit against a 60 per unit credit in the example. The strangle needs movement; the condor needs the absence of it.

### Iron condor vs butterfly spread: which is better for a range-bound market?

Neither is blanket-better; it depends on how precise the range view is. A butterfly has a narrower profit peak and suits a view that the underlying will land close to one central level. An iron condor has a wider, flat profit zone between two distinct short strikes and suits a broader view that the underlying will stay somewhere inside a range. Choose by the precision of the view, not by reputation.

### When should you use an iron condor instead of buying options?

Use an iron condor when your view is range-bound or low-volatility, implied volatility is elevated enough that the credit is worth collecting, the short strikes can sit well out of the money, and all four legs are liquid — liquid index options are the usual default in India. Buy options instead when your view is directional or you expect a large move, since a condor's profit is capped at the credit and a big move is exactly what breaches a wing.

### How much capital do you need for an iron condor?

Capital at risk is set by maximum loss, never by the credit. In the example, that is 240 per unit plus charges, before converting to a real trade size. Multiply the per-unit maximum loss by the lot size in force at trade time and add charges to get the capital at risk for one lot. No lot-size total is given in this article, because the lot size was not verified from a primary source for this run.

### When should you exit an iron condor?

As widely repeated rules of thumb, not guarantees: close at around 50% of maximum profit (about 30 per unit in the example), or by roughly 21 days to expiration if that target has not been reached. Exit sooner if a side is tested beyond your original thesis and rolling or converting no longer fits your view — do not hold a broken range thesis to expiry in the hope of recovering the credit.

### How do you adjust an iron condor when the market moves against you?

Roll the tested spread further out in strike and/or out in time to gain room, accepting a narrower profit zone or more time, usually for a net debit or reduced credit. Roll the untested spread closer to the current price at the same width to collect extra credit, which pushes the tested breakeven further out and lowers the worst case, at the cost of a narrower profit zone. If the range thesis is invalidated, convert to a directional spread or exit outright. Never widen a rolled spread to collect more premium, since widening raises defined risk.

### What happens to an iron condor if the market trends strongly?

The tested side slides down the partial-loss slope: past its short strike, profit shrinks point for point, crosses zero at the breakeven, and reaches maximum loss at the long strike. In the example, a strong fall to 24,400 or below loses 240 per unit, and a strong rise to 25,600 or above also loses 240 per unit, both before charges. The other side cannot also reach maximum loss at the same time, but that is cold comfort — one breached wing is the full worst case on its own.

### Is an iron condor profitable? Why do iron condors lose money despite a high win rate?

An iron condor can be profitable over a run of trades, but only if its win rate clears the hurdle its own ratio sets. At the example's 1:4 credit-to-risk ratio, the break-even win rate is 80% before charges — four quiet wins of 60 per unit are exactly erased by one breached wing losing 240 per unit. Charges raise the hurdle further. That is why a high win rate misleads on its own: frequent small wins and rare large losses can still net to zero or worse, and no return is promised here.

---
title: "Call vs Put Options: The Difference, the Four Positions, and How to Choose"
description: "Call vs put options explained for beginners: what each contract does, the four positions they create, a mirrored worked example, and a plain rule for choosing."
meta_description: "Call vs put options explained for beginners: what each contract does, the four positions they create, a mirrored worked example, and a plain rule for choosing."
date: 2026-11-24
author: Kaizen
tag: "Options trading · Beginners"
keywords: ["call vs put options", "difference between call and put option", "call option vs put option", "when to buy a call option", "when to buy a put option", "call option meaning", "put option meaning", "call vs put options for beginners", "CE vs PE", "long call vs long put", "call option breakeven", "put option breakeven", "what is a call option", "what is a put option", "call and put options explained", "can you lose more than the premium"]
---

*By Kaizen · 24 November 2026 · Monks Of Market*

> **Educational disclaimer:** This article is for education only and is not financial advice. Options trading carries a high risk of loss — never trade with money you can't afford to lose.

## Call vs put options, in one paragraph

A **call option** gives you the right to *buy* something at a fixed price before a fixed date. A **put option** gives you the right to *sell* something at a fixed price before a fixed date. That is the whole difference — and it is also the whole decision. You buy a call when you think the price will rise; you buy a put when you think the price will fall, or when you want to protect shares you already own. A call and a put are not two different products. They are the same contract pointed in opposite directions. The only question is: which way do you think the price is going, and are you buying the right — or taking on the obligation?

If you need the full definition of an option first — what a contract, a strike price, an expiry, and a premium actually are — read *What Is an Option?* in this same beginners series before continuing. This article assumes you know that much and spends its length on the comparison.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 270" role="img" aria-label="Call vs put summary cards: a call is the right to buy, bought when the price is expected to rise, profiting above strike plus premium; a put is the right to sell, bought when the price is expected to fall, profiting below strike minus premium" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Call vs put — the same contract, opposite directions</text>
<rect x="10" y="50" width="340" height="200" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="180" y="84" text-anchor="middle" fill="#e8825a" font-size="16" font-weight="700">CALL</text>
<text x="180" y="116" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Right to BUY</text>
<text x="180" y="146" text-anchor="middle" fill="#92a59c" font-size="12">View: price rises</text>
<text x="180" y="186" text-anchor="middle" fill="#f2f7f4" font-size="12">You profit when price rises</text>
<text x="180" y="208" text-anchor="middle" fill="#f2f7f4" font-size="12">above strike + premium</text>
<rect x="370" y="50" width="340" height="200" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="540" y="84" text-anchor="middle" fill="#e8825a" font-size="16" font-weight="700">PUT</text>
<text x="540" y="116" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Right to SELL</text>
<text x="540" y="146" text-anchor="middle" fill="#92a59c" font-size="12">View: price falls</text>
<text x="540" y="186" text-anchor="middle" fill="#f2f7f4" font-size="12">You profit when price falls</text>
<text x="540" y="208" text-anchor="middle" fill="#f2f7f4" font-size="12">below strike − premium</text>
</svg>
</figure>

## What is a call option?

An option is a contract that gives the buyer the right, but not the obligation, to buy or sell an underlying asset at a fixed price — the strike price — before a fixed date — the expiry — in exchange for a price paid up front, called the premium. A call option is the buy-side version of that contract: it gives the buyer the right to **buy** the underlying at the strike price before expiry.

You buy a call when your view is that the price will rise. If it does, the right to buy at the lower strike price becomes valuable. If it does not, the right is simply not worth exercising — and you lose what you paid for it.

Three facts hold for every call you buy:

- **What you pay:** the premium. That is the price of the right, and it is the most you can lose.
- **What you need:** the price must rise above your breakeven — strike price plus the premium — before expiry. Not eventually. Before expiry.
- **What you can lose:** the premium, and no more. If the price never gets there, the call expires worthless.

The premium is a price, not a mystery: it is what the market charges for the right, and it falls as expiry approaches. What makes a premium rise and fall — intrinsic value versus time value — is covered in full in *What Is Option Premium?*, the next article in this series.

## What is a put option?

A put option is the same contract pointed the other way: it gives the buyer the right to **sell** the underlying at the strike price before expiry.

You buy a put in two situations. The first is a falling view — you think the price will drop, and the right to sell at today's higher strike price becomes valuable as it does. The second is protection: you already own shares and you are worried about a fall. A put bought against shares you own is insurance. If the holding falls, the put pays off and offsets part of the loss — exactly like house insurance pays off when the house is damaged. A call has no equivalent use; there is no way to insure a holding by buying a call.

The same three facts hold for every put you buy:

- **What you pay:** the premium. Again, the most you can lose.
- **What you need:** the price must fall below your breakeven — strike price minus the premium — before expiry.
- **What you can lose:** the premium, and no more. If the price stays above the strike, the put expires worthless.

## The mirrored example: one index, one call, one put

Tables tell you the difference. An example makes you feel it. So here is the same index, the same two market moves, and one call and one put — carried through the whole article so you can see why the choice matters.

The setup: an index trades at **25,000**. The index level is an illustrative example, not a market claim. All arithmetic is per unit — premium per unit, profit per unit — and is never multiplied by any lot size.

### The call: buying the right to buy at 25,100

You buy a call with a strike price of **25,100** and pay a premium of **Rs 120** per unit.

Your breakeven is the strike plus the premium: **25,100 + 120 = 25,220**. The index must be above 25,220 at expiry for this call to make money.

- **If the index ends at 25,500:** the call is worth 25,500 − 25,100 = **Rs 400** per unit. You paid Rs 120, so your profit is 400 − 120 = **Rs 280** per unit.
- **If the index ends at 25,050:** the call is worthless — the index never reached the strike, let alone breakeven. You lose the **Rs 120** premium per unit.

### The put: buying the right to sell at 24,900

Now the mirror image. Same index at 25,000. You buy a put with a strike price of **24,900** and pay a premium of **Rs 110** per unit.

Your breakeven is the strike minus the premium: **24,900 − 110 = 24,790**. The index must be below 24,790 at expiry for this put to make money.

- **If the index ends at 24,500:** the put is worth 24,900 − 24,500 = **Rs 400** per unit. You paid Rs 110, so your profit is 400 − 110 = **Rs 290** per unit.
- **If the index ends above 24,900:** the put is worthless — the index never fell to the strike. You lose the **Rs 110** premium per unit.

### The same move, opposite results

Now put both contracts on the same market move and watch what happens:

| The index moves to | The call is worth | The put is worth |
| --- | --- | --- |
| **25,500** (up 500) | Rs 400 per unit — profit Rs 280 | Worthless — loss Rs 110 |
| **24,500** (down 500) | Worthless — loss Rs 120 | Rs 400 per unit — profit Rs 290 |

One move, two contracts, opposite outcomes. The call wins when the index rises; the put wins when it falls. Neither contract is "better" — each one is a bet on a direction, priced. Your job is not to pick the better contract. Your job is to pick the direction you actually believe in, and then check whether the move you expect is big enough and fast enough to beat breakeven before expiry.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 330" role="img" aria-label="Mirrored payoff diagram: one index axis, the call payoff rising above breakeven 25,220 and the put payoff rising below breakeven 24,790, both on the same per-unit scale" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The mirrored example: one index, two payoffs</text>
<line x1="60" y1="225" x2="700" y2="225" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="380" y1="45" x2="380" y2="280" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<polyline points="60,45 113,91 268,225 327,275 700,275" fill="none" stroke="#7fb069" stroke-width="3"/>
<polyline points="60,280 433,280 497,225 646,95 700,49" fill="none" stroke="#e8825a" stroke-width="3"/>
<circle cx="646" cy="95" r="5" fill="#e8825a"/>
<circle cx="113" cy="91" r="5" fill="#7fb069"/>
<text x="655" y="70" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">CALL · +Rs 280 at 25,500</text>
<text x="60" y="70" text-anchor="start" fill="#7fb069" font-size="12" font-weight="700">PUT · +Rs 290 at 24,500</text>
<text x="380" y="62" text-anchor="middle" fill="#92a59c" font-size="11">Index now 25,000</text>
<text x="60" y="312" text-anchor="middle" fill="#92a59c" font-size="11">24,400</text>
<text x="268" y="312" text-anchor="middle" fill="#92a59c" font-size="11">24,790 · put breakeven</text>
<text x="497" y="312" text-anchor="middle" fill="#92a59c" font-size="11">25,220 · call breakeven</text>
<text x="700" y="312" text-anchor="middle" fill="#92a59c" font-size="11">25,600</text>
<text x="52" y="44" text-anchor="end" fill="#92a59c" font-size="11">+Rs 400</text>
<text x="52" y="229" text-anchor="end" fill="#92a59c" font-size="11">0</text>
<text x="52" y="284" text-anchor="end" fill="#92a59c" font-size="11">−Rs 120</text>
</svg>
</figure>

## The four positions a call and a put create

Because you can buy *or* sell each of the two types, there are exactly four basic positions. Learn this matrix and you have the whole map of what an option can do:

| Position | What you do | Your view | Maximum profit | Maximum loss |
| --- | --- | --- | --- | --- |
| **Long call** (buy a call) | Buy the right to buy | Bullish | Large — in principle unlimited, since a price can keep rising | The premium paid |
| **Short call** (sell a call) | Sell the right to buy | Neutral to bearish | Limited to the premium received | Theoretically unlimited |
| **Long put** (buy a put) | Buy the right to sell | Bearish, or hedging shares owned | Large — capped at the strike minus the premium, since a price cannot fall below zero | The premium paid |
| **Short put** (sell a put) | Sell the right to sell | Neutral to bullish | Limited to the premium received | Large — up to the strike minus the premium |

The pattern is the one thing to memorise: **buyers always have limited loss and large potential profit; sellers always have limited profit and large potential loss.** That is why beginners are guided toward buying. Selling an option means taking on an obligation — if the buyer exercises, you must honour the contract — and it needs margin and can lose far more than the premium collected. Selling is not a beginner activity. It waits until margin, time decay, and assignment risk are properly understood.

You will also see calls and puts combined in named strategies — covered calls, protective puts, spreads and straddles are examples of where the two types get used together — but those are combinations, not new contracts, and they belong to the strategies guide in this series.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 360" role="img" aria-label="Four-positions matrix: long call, short call, long put, short put — each with its view, maximum profit, and maximum loss; buyers risk the premium for large potential profit, sellers collect the premium and accept large potential loss" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Four positions: buyers risk the premium, sellers risk more</text>
<rect x="10" y="50" width="340" height="132" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="180" y="78" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">LONG CALL — buy a call</text>
<text x="180" y="106" text-anchor="middle" fill="#92a59c" font-size="12">View: Bullish</text>
<text x="180" y="134" text-anchor="middle" fill="#f2f7f4" font-size="12">Max profit: Large — in principle unlimited</text>
<text x="180" y="160" text-anchor="middle" fill="#e8825a" font-size="12">Max loss: The premium paid</text>
<rect x="370" y="50" width="340" height="132" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="540" y="78" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">SHORT CALL — sell a call</text>
<text x="540" y="106" text-anchor="middle" fill="#92a59c" font-size="12">View: Neutral to bearish</text>
<text x="540" y="134" text-anchor="middle" fill="#f2f7f4" font-size="12">Max profit: Limited to the premium received</text>
<text x="540" y="160" text-anchor="middle" fill="#e8825a" font-size="12">Max loss: Theoretically unlimited</text>
<rect x="10" y="200" width="340" height="132" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="180" y="228" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">LONG PUT — buy a put</text>
<text x="180" y="256" text-anchor="middle" fill="#92a59c" font-size="12">View: Bearish, or hedging shares</text>
<text x="180" y="284" text-anchor="middle" fill="#f2f7f4" font-size="12">Max profit: Large — capped at strike − premium</text>
<text x="180" y="310" text-anchor="middle" fill="#e8825a" font-size="12">Max loss: The premium paid</text>
<rect x="370" y="200" width="340" height="132" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="540" y="228" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">SHORT PUT — sell a put</text>
<text x="540" y="256" text-anchor="middle" fill="#92a59c" font-size="12">View: Neutral to bullish</text>
<text x="540" y="284" text-anchor="middle" fill="#f2f7f4" font-size="12">Max profit: Limited to the premium received</text>
<text x="540" y="310" text-anchor="middle" fill="#e8825a" font-size="12">Max loss: Large — up to strike − premium</text>
</svg>
</figure>

## Call vs put: the side-by-side comparison

Here is the whole comparison in one table, for reference. The teaching already happened in the example above — this is the summary to come back to:

|  | **Call option** | **Put option** |
| --- | --- | --- |
| Right given | The right to **buy** at the strike price | The right to **sell** at the strike price |
| Your view | Bullish — price will rise | Bearish — price will fall |
| Buyer profits when | Price rises above strike + premium | Price falls below strike − premium |
| Buyer breakeven | Strike price + premium | Strike price − premium |
| Buyer maximum loss | The premium paid | The premium paid |
| Buyer maximum profit | In principle unlimited | Capped at strike − premium |
| Seller's side | Limited profit (the premium), theoretically unlimited loss | Limited profit (the premium), large loss up to strike − premium |
| Used for | Profiting from a rise | Profiting from a fall, or protecting shares owned |

One line of Indian market vocabulary, so you can read a contract name when you see one: on the Indian index market, contracts are labelled **CE** (Call European) and **PE** (Put European). A contract name reads as index + expiry + strike + CE or PE. European-style means the option can only be exercised at expiry, not before. How to read the full contract name, strike by strike, is covered in *How to Read an Option Chain*.

## How to choose: call, put, or neither

The decision rule is plain, and it has four branches:

1. **You think the price will rise meaningfully before expiry → buy a call.** Meaningfully matters: the rise has to clear breakeven, not just happen. A 50-point rise on a call that needs 220 points is still a loss.
2. **You think the price will fall meaningfully before expiry → buy a put.** Same test, the other direction: the fall has to clear breakeven.
3. **You own shares and fear a fall → buy a put as insurance.** Here the put is not a bet on direction — it is protection for something you already hold. The premium is the cost of the insurance.
4. **You have no view on direction, or the move you expect is small or slow → buy neither.** This is the branch beginners skip, and it is the most important one. An option is the wrong tool for a small, slow view: the premium decays every day, and the move must beat breakeven before expiry. If the move is small, the option will likely expire worthless even if your direction was right.

Before you buy either one, two honest checks from the rest of this site. First, the premium is not your whole cost — charges sit on top of it, so know what a round trip actually costs before you trade ([options trading charges in India](/articles/options-trading-charges-india/)). Second, the premium you pay is the most you can lose on that trade, which means it is also your risk budget for the trade — size it like one ([how much to risk per trade](/articles/position-sizing/)). And if you have never traded either contract with real money, practise the decision first ([paper trading vs real trading](/articles/paper-trading-vs-real-trading/)).

## The honest boundary

Three things to carry out of this article, because they are where beginners actually lose money:

**Being right on direction and wrong on timing still loses money.** The move has to happen before expiry and by more than the premium. A call bought on a correct rising view can expire worthless if the rise comes a week late. Direction is only half the trade; timing is the other half.

**A cheap far-out-of-the-money call or put is a lottery ticket, not a trade.** Those contracts look cheap because the market thinks the move they need is unlikely. Most of them expire worthless. Buying them hoping for a huge return is gambling with better branding.

**Selling options is not the beginner shortcut it looks like.** The premium collected feels like free income — until the market moves against the seller and the loss runs far past the premium. Sellers need margin, face obligations, and can lose multiples of what they collected. That is why this article guides beginners toward buying, and why the risk of ruin matters: a defined, limited loss is what keeps a bad trade survivable ([why defined risk matters](/articles/risk-of-ruin-trading/)).

One last boundary, and it is not about options at all. If trading is causing ongoing stress, sleep problems, or anxiety, a guide is not enough — talking to a qualified professional is the sensible step.

## Key takeaways

- A call is the right to buy; a put is the right to sell. Same contract, opposite directions.
- Call breakeven is strike + premium; put breakeven is strike − premium. The move must clear breakeven before expiry.
- Buying either type, the most you can lose is the premium. That is the beginner's safety rail — and the seller's risk.
- Four positions exist: long call, short call, long put, short put. Buyers risk the premium for large potential profit; sellers collect the premium and accept large potential loss.
- The choice is the view, priced: rising view → call; falling view or protection → put; no view or a small, slow move → neither.
- Being right on direction and wrong on timing still loses money. Cheap far-out-of-the-money options usually expire worthless.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 310" role="img" aria-label="Decision flow: which way do I think the price is going — up leads to a call, down to a put, owning shares and fearing a fall to a put as insurance, and no view or a small slow move to neither" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Which way do I think the price is going?</text>
<rect x="180" y="50" width="360" height="52" fill="none" stroke="#e8825a" rx="8"/>
<text x="360" y="82" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Which way do I think the price is going?</text>
<text x="360" y="120" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<rect x="15" y="140" width="168" height="150" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="99" y="166" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">UP</text>
<text x="99" y="196" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Buy a call</text>
<text x="99" y="228" text-anchor="middle" fill="#92a59c" font-size="11">Rise must clear</text>
<text x="99" y="250" text-anchor="middle" fill="#92a59c" font-size="11">breakeven 25,220</text>
<rect x="193" y="140" width="168" height="150" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="277" y="166" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">DOWN</text>
<text x="277" y="196" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Buy a put</text>
<text x="277" y="228" text-anchor="middle" fill="#92a59c" font-size="11">Fall must clear</text>
<text x="277" y="250" text-anchor="middle" fill="#92a59c" font-size="11">breakeven 24,790</text>
<rect x="371" y="140" width="168" height="150" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="455" y="166" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">OWN SHARES,</text>
<text x="455" y="196" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Put as insurance</text>
<text x="455" y="228" text-anchor="middle" fill="#92a59c" font-size="11">Fear a fall —</text>
<text x="455" y="250" text-anchor="middle" fill="#92a59c" font-size="11">the premium is the cost</text>
<rect x="549" y="140" width="168" height="150" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="633" y="166" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">NO VIEW /</text>
<text x="633" y="196" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Buy neither</text>
<text x="633" y="228" text-anchor="middle" fill="#92a59c" font-size="11">Small or slow move —</text>
<text x="633" y="250" text-anchor="middle" fill="#92a59c" font-size="11">the wrong tool</text>
</svg>
</figure>

## Frequently asked questions

### What is the difference between a call and a put option?

A call option gives the buyer the right to buy the underlying at the strike price before expiry; a put option gives the buyer the right to sell at the strike price before expiry. You buy a call when you think the price will rise and a put when you think it will fall — or when you want to protect shares you already own.

### When should I buy a call option?

When you think the price will rise meaningfully before expiry — meaningfully enough to clear your breakeven, which is the strike price plus the premium you paid. If the rise you expect is small or slow, a call is the wrong tool, because the premium decays every day and the option can expire worthless even if the direction was right.

### When should I buy a put option?

When you think the price will fall meaningfully before expiry — far enough to clear your breakeven, the strike price minus the premium. The other reason is protection: you own shares and want insurance against a fall, so you buy a put that pays off if the holding drops.

### Which is better, a call or a put?

Neither is better in general. A call wins when the price rises; a put wins when it falls. The right choice depends entirely on your view of the direction — and on whether the move you expect is big enough and fast enough to beat breakeven before expiry. If you have no directional view, neither is the right answer.

### What is the maximum profit on a call option vs a put option?

For a bought call, maximum profit is in principle unlimited, because a price can keep rising without a ceiling. For a bought put, maximum profit is capped at the strike price minus the premium, because a price cannot fall below zero. In both cases, the profit at expiry is the option's value minus the premium you paid.

### Can you lose more money than the premium you paid?

As a buyer, no — the most you can lose is the premium you paid, because you hold a right, not an obligation. As a seller, yes — selling an option takes on an obligation, and the loss can far exceed the premium collected. That asymmetry is why beginners are guided toward buying.

### What happens if I buy a call and the price falls?

The call loses value as the price falls, and if the price is below the strike at expiry, the call expires worthless and you lose the premium you paid. The loss is capped at the premium — but it is still a full loss of what you paid, which is why the move has to happen in your direction, by enough, before expiry.

### What is CE and PE in options?

On the Indian index market, contracts are labelled CE (Call European) and PE (Put European). A contract name reads as index + expiry + strike + CE or PE. European-style means the option can only be exercised at expiry, not before.

### Is it better to buy or sell options as a beginner?

Buy. As a buyer, your maximum loss is the premium paid and your potential profit is large. As a seller, your profit is limited to the premium received while your loss can be large — and selling needs margin and carries obligations. Selling waits until margin, time decay, and assignment risk are properly understood.

### Do call and put options expire?

Yes — both expire on a fixed date. At expiry, an option is either worth something (if the price has moved past the strike in your favour) or worthless. That deadline is what makes timing half the trade: the move has to happen before expiry, not eventually.

### What is the breakeven price for a call option?

Strike price plus the premium paid. In this article's example: a 25,100-strike call bought for a Rs 120 premium breaks even at 25,220. The index must be above 25,220 at expiry for the call to make money.

### What is the breakeven price for a put option?

Strike price minus the premium paid. In this article's example: a 24,900-strike put bought for a Rs 110 premium breaks even at 24,790. The index must be below 24,790 at expiry for the put to make money.

### Can I buy both a call and a put at the same time?

Yes — you can hold both at once. Buying both means you pay two premiums, and you profit if the price moves strongly in either direction but lose both premiums if it stays near the middle. Whether that combination makes sense depends on the trade, and combinations of calls and puts belong to the strategies guide in this series, not to a first comparison.

### What does it mean to sell a call option?

It means you take on the obligation to sell the underlying at the strike price if the buyer chooses to exercise. You receive the premium up front — that is your maximum profit. Your loss is theoretically unlimited, because the price can keep rising and you would have to sell at the fixed strike. Selling a call is a seller's position, not a beginner activity.

### Can a put option be used to protect shares I own?

Yes. A put bought against shares you own acts as insurance: if the holding falls, the put gains value and offsets part of the loss. The premium you pay is the cost of that insurance. A call has no equivalent use for protecting a holding.
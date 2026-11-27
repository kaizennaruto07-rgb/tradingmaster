---
title: "What Is Option Premium? Intrinsic Value, Time Value, and What You Actually Pay"
description: "What is option premium? A plain-language guide: intrinsic value plus time value, the five things that move a premium, time decay, and what you actually pay."
meta_description: "What is option premium? A plain-language guide: intrinsic value plus time value, the five things that move a premium, time decay, and what you actually pay."
date: 2026-11-25
author: Kaizen
tag: "Options trading · Beginners"
keywords: ["what is option premium", "option premium meaning", "option premium explained", "option premium definition", "how is option premium calculated", "option premium formula", "intrinsic value", "time value", "extrinsic value", "factors affecting option premium", "option premium vs margin", "time decay option premium", "implied volatility option premium", "Black-Scholes option premium", "option premium for beginners"]
---

*By Kaizen · 25 November 2026 · Monks Of Market*

The premium is the price of an option contract. It is what the buyer pays and the seller receives for the right, but not the obligation, to buy or sell something at a fixed price before a fixed date. That one sentence is the whole definition — and it is also the whole problem, because it tells you what the premium *is* without telling you what you are actually paying for.

Here is the one idea that reframes it: **the premium is not a fee for a service, and it is not a deposit you get back. It is the price of a right, and that price is always two things added together — what the option is already worth right now, plus what the market will pay for the chance it becomes worth more before the clock runs out.** Everything in this guide follows from that single sentence.

Before we go further, one short restatement, because the rest of the guide assumes it: an option is a contract that gives its buyer the right, but not the obligation, to buy or sell something at a fixed price — the strike — before a fixed date — the expiry — for a price called the premium. The guide on what an option is covers that definition in full; this guide is about the premium itself. A call is the right to buy; a put is the right to sell. The full comparison of the two lives in the guide on calls versus puts. Here, calls and puts appear only as the two contracts whose premiums we are about to pull apart.

## The Carried Example: One Index, Two Contracts

Every number in this guide comes from one example, and every number is simple per-unit arithmetic — never multiplied by anything. An index trades at 25,000. That level is an illustrative example, not a market claim, and it is the same level used in the earlier guides in this cluster so the numbers stay consistent as you read through them.

We will look at two contracts on that index:

- A call with a strike of 24,900, quoted at Rs 180 per unit.
- A call with a strike of 25,100, quoted at Rs 120 per unit.
- And, to see the other side, a put with a strike of 25,100, quoted at Rs 170 per unit.

The premium is quoted per unit of the underlying. The actual cash that changes hands is the premium per unit multiplied by the lot size of the contract — that relationship is worth knowing, and it is stated here in words only, because lot sizes change and the numbers you find in different guides right now do not agree with each other. What matters for understanding the premium is the per-unit price, and that is what we will pull apart.

Think of the premium the way you would think of paying a small, non-refundable amount to hold today's price. You pay it, and in return you get a chance: if the price moves your way, you can use it; if it does not, you walk away, and the amount you paid is gone. That is the whole deal. The question this guide answers is what that amount is made of.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 350" role="img" aria-label="Premium split as stacked bars: the 24,900-strike call at Rs 180 is Rs 100 intrinsic value plus Rs 80 time value, the 25,100-strike call at Rs 120 is all time value, and the 25,100-strike put at Rs 170 is Rs 100 intrinsic value plus Rs 70 time value" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">One premium, two parts — intrinsic + time value</text>
<text x="145" y="59.99999999999997" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Rs 180</text>
<rect x="80" y="168" width="130" height="122" fill="#7fb069"/>
<text x="145" y="232.88888888888889" text-anchor="middle" fill="#12211b" font-size="11" font-weight="700">Intrinsic Rs 100</text>
<rect x="80" y="70" width="130" height="98" fill="#e8825a"/>
<text x="145" y="122.88888888888887" text-anchor="middle" fill="#12211b" font-size="11" font-weight="700">Time value Rs 80</text>
<text x="145" y="312" text-anchor="middle" fill="#92a59c" font-size="12">24,900 call</text>
<text x="360" y="133.33333333333331" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Rs 120</text>
<rect x="295" y="143" width="130" height="147" fill="#e8825a"/>
<text x="360" y="220.66666666666666" text-anchor="middle" fill="#12211b" font-size="11" font-weight="700">Time value Rs 120</text>
<text x="360" y="312" text-anchor="middle" fill="#92a59c" font-size="12">25,100 call</text>
<text x="575" y="72.2222222222222" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Rs 170</text>
<rect x="510" y="168" width="130" height="122" fill="#7fb069"/>
<text x="575" y="232.88888888888889" text-anchor="middle" fill="#12211b" font-size="11" font-weight="700">Intrinsic Rs 100</text>
<rect x="510" y="82" width="130" height="86" fill="#e8825a"/>
<text x="575" y="129.0" text-anchor="middle" fill="#12211b" font-size="11" font-weight="700">Time value Rs 70</text>
<text x="575" y="312" text-anchor="middle" fill="#92a59c" font-size="12">25,100 put</text>
<text x="360" y="336" text-anchor="middle" fill="#92a59c" font-size="11">Premium per unit — never multiplied by a lot size</text>
</svg>
</figure>

## Part One: Intrinsic Value — What the Option Is Already Worth

Intrinsic value is the mechanical part of the premium. It is what the option would be worth if it expired right now, this minute, with the underlying exactly where it is.

For a call, intrinsic value is the spot price minus the strike price. For a put, it is the strike price minus the spot price. And it is never below zero — if the subtraction gives a negative number, the intrinsic value is zero.

Work it on the carried example. The index is at 25,000.

- The 24,900-strike call: 25,000 minus 24,900 is Rs 100. This call is already worth Rs 100 right now, because it gives you the right to buy something at 24,900 that is currently worth 25,000. That Rs 100 is real value that is already there.
- The 25,100-strike put: 25,100 minus 25,000 is Rs 100. This put is also already worth Rs 100 right now, because it gives you the right to sell something at 25,100 that is currently worth 25,000.
- The 25,100-strike call: 25,000 minus 25,100 is a negative number, so the intrinsic value is zero. The index is below the strike, so the right to buy at 25,100 is worth nothing *right now*.

That last line is the point beginners most often miss. An option that is at the money or out of the money has zero intrinsic value. The strike is above the index for a call, or below the index for a put, and there is nothing already there to be worth anything. Whatever the premium is for such an option, it is not paying for value that exists. It is paying for something else entirely.

## Part Two: Time Value — What You Pay for the Chance

Time value — also called extrinsic value — is everything else in the premium. It is the part above intrinsic value, and it is what the buyer pays for the possibility that the option becomes more valuable before expiry.

Go back to the carried example:

- The 24,900-strike call costs Rs 180, and Rs 100 of that is intrinsic value. The remaining Rs 80 is time value.
- The 25,100-strike call costs Rs 120, and its intrinsic value is zero. The whole Rs 120 is time value.
- The 25,100-strike put costs Rs 170, and Rs 100 of that is intrinsic value. The remaining Rs 70 is time value.

Time value is the price of a chance. You are paying for the time left on the clock and for the possibility that the underlying moves in your favour before that clock runs out. The more time is left, and the more the underlying is expected to move, the more that chance is worth — and the higher the time value.

Two facts about time value explain most beginner mistakes. First, it peaks for at-the-money options. When the strike is right at the index level, the option has no intrinsic value at all, so the entire premium is time value — and the uncertainty about which way the underlying will move is at its highest, so the market charges the most for the chance. Second, time value shrinks to zero at expiry. On the last day, there is no time left to buy a chance with, so the premium is only intrinsic value. An option that is out of the money at expiry is worth nothing.

That is why beginners overpay for far-out-of-the-money contracts. A contract with a strike far from the index can look cheap — a small premium for a big possible payoff. But every rupee of that premium is time value. There is no value already there. You are buying a chance, and the chance has a deadline.

## The Split, Worked: Three Premiums Pulled Apart

Here are the three carried contracts, pulled apart side by side:

| Contract | Premium per unit | Intrinsic value | Time value |
| --- | --- | --- | --- |
| 24,900-strike call | Rs 180 | Rs 100 | Rs 80 |
| 25,100-strike call | Rs 120 | Rs 0 | Rs 120 |
| 25,100-strike put | Rs 170 | Rs 100 | Rs 70 |

Read the table slowly, because it is the whole article in one place. The same index at 25,000 gives the in-the-money contracts real intrinsic value and the out-of-the-money contract none. The 24,900-strike call and the 25,100-strike put each carry Rs 100 of value that is already there. The 25,100-strike call carries none — its entire Rs 120 is a bet on time and movement.

Now the deciding comparison. The 24,900-strike call costs more than the 25,100-strike call — Rs 180 against Rs 120. The dearer contract carries Rs 100 of value that is already there; the cheaper one carries none. The time-value side runs the other way — Rs 80 against Rs 120 — which is why the price gap is Rs 60, not Rs 100. One buys Rs 100 of value that already exists plus Rs 80 of chance. The other buys Rs 120 of chance and nothing else. When you compare two premiums, always ask how much of each one is already there and how much is only a chance.

## The Five Things That Move a Premium

Five things move a premium. The first three do most of the work.

| Driver | Effect on a call premium | Effect on a put premium |
| --- | --- | --- |
| Underlying price rises | Rises — the call's intrinsic value grows | Falls — the put's intrinsic value shrinks |
| Strike price rises | Falls — a higher strike is further from being worth anything | Rises — a higher strike is closer to being worth something |
| Time to expiry increases | Rises — more time means more time value | Rises — more time means more time value |
| Implied volatility rises | Rises — a wider expected price range means a better chance of finishing in the money | Rises — the same wider range helps the put too |
| Interest rates rise | Rises slightly | Falls slightly |

A few of those rows deserve a sentence each, because the direction is the whole lesson.

When the underlying rises, the call gains and the put loses — that is just the intrinsic value arithmetic moving with the index. When the strike rises, the call becomes less valuable and the put more valuable, for the same reason: the strike is the line the underlying has to cross.

Time to expiry helps both sides, because time value is the price of a chance and more time means a better chance. Implied volatility helps both sides too: when the market expects bigger moves, the chance of finishing in the money improves for calls and for puts alike, so all premiums inflate. Interest rates are the smallest of the five — a higher rate nudges call premiums up and put premiums down, and for a beginner it is enough to know the direction exists.

The sensitivities have names — the Greeks. Delta measures how much a premium moves when the underlying moves. Theta measures how much it falls each day from time passing. Vega measures how much it moves when expected volatility changes. Those names are the measuring tools, nothing more; a full lesson on the Greeks is not what this guide is for.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 330" role="img" aria-label="Five things that move a premium: underlying price, strike price, time to expiry, implied volatility, and interest rates — each with its effect on a call premium and on a put premium" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Five things move a premium</text>
<rect x="10" y="50" width="220" height="118" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="120" y="80" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Underlying price rises</text>
<text x="120" y="112" text-anchor="middle" fill="#f2f7f4" font-size="12">Call: rises</text>
<text x="120" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12">Put: falls</text>
<rect x="250" y="50" width="220" height="118" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="360" y="80" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Strike price rises</text>
<text x="360" y="112" text-anchor="middle" fill="#f2f7f4" font-size="12">Call: falls</text>
<text x="360" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12">Put: rises</text>
<rect x="490" y="50" width="220" height="118" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="600" y="80" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Time to expiry increases</text>
<text x="600" y="112" text-anchor="middle" fill="#f2f7f4" font-size="12">Call: rises</text>
<text x="600" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12">Put: rises</text>
<rect x="130" y="190" width="220" height="118" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="240" y="220" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Implied volatility rises</text>
<text x="240" y="252" text-anchor="middle" fill="#f2f7f4" font-size="12">Call: rises</text>
<text x="240" y="280" text-anchor="middle" fill="#f2f7f4" font-size="12">Put: rises</text>
<rect x="370" y="190" width="220" height="118" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="480" y="220" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Interest rates rise</text>
<text x="480" y="252" text-anchor="middle" fill="#f2f7f4" font-size="12">Call: rises slightly</text>
<text x="480" y="280" text-anchor="middle" fill="#f2f7f4" font-size="12">Put: falls slightly</text>
</svg>
</figure>

## Time Decay: Why the Premium Shrinks Every Day

Time decay is the honest core of this guide, and it is the part that costs beginners the most money. The premium erodes every day purely from the passage of time. It works against buyers and in favour of sellers, and it does not wait for the market to move. Even if the index stays exactly still, a buyer's option loses value.

The erosion is not a straight line. It accelerates sharply in the final days before expiry. An option with weeks left loses a little each day; the same option with days left loses much more each day. The clock speeds up as it runs out.

Watch what that does to the carried example. The 25,100-strike call's Rs 120 is all time value — there is no intrinsic value in it at all. As the days pass, that Rs 120 shrinks, a little at first and then faster. If the index is still at 25,000 at expiry, the time value is zero, the intrinsic value is zero, and the whole Rs 120 is gone. The buyer was right that the index could have moved. It simply did not move in time.

That is the real test a buyer has to pass. It is not enough to be right on direction. You have to be right on direction *and* on timing *and* by more than the premium, before expiry. Buying a cheap far-out-of-the-money option hoping for a huge return is a lottery ticket, not a trade — and the ticket gets cheaper every day it sits in your hand, because the chance it represents is draining away.

The seller sits on the other side of exactly the same fact. The seller receives the premium and benefits as time value drains away — but the seller's risk is far larger than the premium received, which is why sellers must post margin. That distinction is the next section.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 330" role="img" aria-label="Time decay curve: the 25,100-strike call's Rs 120 of pure time value shrinking slowly at first and then steeply to zero by expiry, with the index held still at 25,000" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Time decay: Rs 120 of pure time value, draining to zero</text>
<line x1="60" y1="270" x2="700" y2="270" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<polyline points="60,70 180,82 320,105 460,140 560,185 640,240 700,270" fill="none" stroke="#e8825a" stroke-width="3"/>
<circle cx="60" cy="70" r="5" fill="#e8825a"/>
<circle cx="700" cy="270" r="5" fill="#e8825a"/>
<text x="70" y="55" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Rs 120 — all time value</text>
<text x="690" y="255" text-anchor="end" fill="#f2f7f4" font-size="12" font-weight="700">Rs 0 at expiry</text>
<text x="52" y="74" text-anchor="end" fill="#92a59c" font-size="11">Rs 120</text>
<text x="52" y="274" text-anchor="end" fill="#92a59c" font-size="11">Rs 0</text>
<text x="360" y="312" text-anchor="middle" fill="#92a59c" font-size="12">Index held still at 25,000 throughout</text>
</svg>
</figure>

## How to Calculate the Split Yourself in Three Steps

You do not need a pricing model to read a premium. You need three steps.

**Step 1 — Find the intrinsic value from spot and strike.** For a call, subtract the strike from the spot price; for a put, subtract the spot price from the strike. If the answer is negative, the intrinsic value is zero.

**Step 2 — Take the quoted premium.** The premium is the price shown against the strike — on the option chain, it is the last traded price listed next to each strike. Reading a chain in full belongs to the guide on how to read an option chain; here you only need the number.

**Step 3 — Subtract to get the time value.** Premium minus intrinsic value is time value. That is the whole calculation.

Try it on the carried example: the 24,900-strike call is quoted at Rs 180, its intrinsic value is Rs 100, so its time value is Rs 80. Three steps, no model required.

The market sets the premium by supply and demand. Pricing models exist — the most widely referenced is Black-Scholes, built in 1973 for European-style options, using five inputs: the underlying price, the strike price, the time to expiry, volatility, and the interest rate. Models like that only estimate a premium; they do not set it. On the Indian index market the contracts are labelled CE for a call and PE for a put — European-style, meaning exercisable only at expiry. A beginner's job is not to price the model. It is to read the split.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 230" role="img" aria-label="Three steps to calculate the split: spot minus strike gives intrinsic value, take the quoted premium, premium minus intrinsic value gives time value" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Read any premium in three steps</text>
<rect x="10" y="60" width="220" height="150" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="120" y="92" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">STEP 1</text>
<text x="120" y="126" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Spot minus strike</text>
<text x="120" y="152" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">gives intrinsic value</text>
<text x="120" y="184" text-anchor="middle" fill="#92a59c" font-size="11">(floored at zero)</text>
<text x="240" y="140" text-anchor="middle" fill="#e8825a" font-size="20" font-weight="700">→</text>
<rect x="250" y="60" width="220" height="150" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="360" y="92" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">STEP 2</text>
<text x="360" y="126" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Take the quoted</text>
<text x="360" y="152" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">premium</text>
<text x="360" y="184" text-anchor="middle" fill="#92a59c" font-size="11">(last price on the chain)</text>
<text x="480" y="140" text-anchor="middle" fill="#e8825a" font-size="20" font-weight="700">→</text>
<rect x="490" y="60" width="220" height="150" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="600" y="92" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">STEP 3</text>
<text x="600" y="126" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Premium minus</text>
<text x="600" y="152" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">intrinsic value</text>
<text x="600" y="184" text-anchor="middle" fill="#92a59c" font-size="11">= time value</text>
</svg>
</figure>

## Premium vs Margin: Not the Same Thing

This is the distinction beginners blur most often, and it is worth one clean paragraph. The premium and the margin are not the same thing, and they are paid by different people for different reasons.

An option buyer pays only the premium upfront. That is the whole cost of the contract, and it is also the most the buyer can lose. An option seller — the writer — receives the premium, but must post margin against the position, because the seller's potential loss is far larger than the premium received. The premium is the price of the right. The margin is the security held against the risk of having sold it.

If you remember one line from this section, make it this one: **buyers pay the premium and nothing else; sellers receive the premium and post margin on top of it.** Never confuse the two, and never think of the premium as a deposit — it is not returned, and it is not held as security. It is spent, the moment the contract is bought.

## The Honest Boundary: What the Premium Can and Cannot Do

The premium is the most you can lose as a buyer. That is the good news, and it is real: your loss on a bought option is capped at the premium you paid. That capped loss is why defined risk matters, and the guide on [the risk of ruin](/articles/risk-of-ruin-trading/) explains why it matters so much. But a capped loss is not a safe trade, and two honest limits belong here.

First, the premium can go to zero even when your view was eventually right. The move has to happen before expiry, and by more than the premium. Being right a week late is the same as being wrong — the contract has already expired worthless, and the premium is gone. Time is not a detail of options trading. It is the product.

Second, the premium is only one cost. The full costs of trading options — the charges around the premium — are covered in the guide on [the costs of trading options](/articles/options-trading-charges-india/), and they are worth reading before you trade with real money. Practice first, before real money, is covered in the guide on [paper trading versus real trading](/articles/paper-trading-vs-real-trading/). And how much of your capital to risk on any one trade is covered in the guide on [position sizing](/articles/position-sizing/) — because a capped loss per trade still hurts if the trade was too big.

One more boundary, and it matters more than the rest: if trading is causing ongoing stress, sleep problems, or anxiety, a guide is not enough. Talking to a qualified professional is the sensible step. No article, however honest, replaces that.

## Frequently Asked Questions

### What is option premium?

The option premium is the price of an option contract — what the buyer pays and the seller receives for the right, but not the obligation, to buy or sell the underlying at the strike price before or on expiry. It is made of two parts added together: intrinsic value and time value.

### How is option premium calculated?

Add its two parts. First find the intrinsic value from the spot price and the strike — for a call, spot minus strike; for a put, strike minus spot, floored at zero. Then take the quoted premium and subtract the intrinsic value to get the time value. Premium equals intrinsic value plus time value.

### What is the option premium formula?

Option premium = intrinsic value + time value. That is the formula a beginner needs. Pricing models like Black-Scholes estimate a theoretical premium from five inputs, but the market premium is set by supply and demand.

### What is intrinsic value in options?

Intrinsic value is what an option would be worth if it expired right now. For a call it is the spot price minus the strike price; for a put it is the strike price minus the spot price; it is never below zero. At-the-money and out-of-the-money options have zero intrinsic value. In the example in this guide, the 24,900-strike call at an index level of 25,000 has Rs 100 of intrinsic value.

### What is time value in options?

Time value — also called extrinsic value — is everything in the premium above intrinsic value. It is what the buyer pays for the possibility that the option becomes more valuable before expiry. It depends on how much time is left, how volatile the underlying is expected to be, and, to a small degree, interest rates. At expiry, time value is exactly zero.

### What factors affect option premium?

Five things: the underlying asset price, the strike price, the time to expiry, implied volatility, and interest rates. The first three dominate. Higher implied volatility inflates all premiums, and more time to expiry means more time value, all else equal.

### Why does option premium decrease with time?

Because time value shrinks as expiry approaches. The premium includes a payment for the chance the option becomes more valuable, and that chance gets smaller every day the clock runs down. The fall accelerates in the final days before expiry, and at expiry the time value is exactly zero.

### What is time decay in options?

Time decay is the daily erosion of an option's premium purely from the passage of time, measured by theta. It works against buyers and in favour of sellers. Even if the underlying stays still, a buyer's option loses value every day, and the loss accelerates near expiry.

### Is the premium the maximum loss for an option buyer?

Yes. The most a buyer can lose on a bought option is the premium paid. That capped loss is real, but it is not a guarantee of safety — the premium can still go to zero, and a trade that is too big still hurts even when the loss per trade is capped.

### Do you get the premium back if the option expires worthless?

No. The premium is not a deposit and it is not returned. It is the price paid for the right, and it is spent the moment the contract is bought. If the option expires worthless, the premium is gone.

### What is the difference between option premium and margin?

The premium is the price of the option: the buyer pays it upfront and the seller receives it. Margin is security the seller must post against the position, because the seller's potential loss is far larger than the premium received. Buyers pay the premium and nothing else; sellers receive the premium and post margin on top of it.

### Can option premium be negative?

No. A premium can never be negative, because intrinsic value is never below zero and time value is never below zero — the premium is the sum of the two. The lowest a premium can go is zero, which is what an out-of-the-money option is worth at expiry.

### What happens to option premium at expiry?

At expiry, time value is exactly zero, so the premium equals intrinsic value alone. An in-the-money option is worth its intrinsic value; an at-the-money or out-of-the-money option is worth zero. In the example in this guide, the 25,100-strike call's Rs 120 — all time value — would be gone entirely if the index is still at 25,000 at expiry.

### What is Black-Scholes and what does it have to do with option premium?

Black-Scholes is the most widely referenced model for estimating an option's theoretical premium. It was built in 1973 for European-style options and uses five inputs: the underlying price, the strike price, the time to expiry, volatility, and the interest rate. The market premium is set by supply and demand; the model only estimates it. A beginner does not need the formula — reading the split is the job.

### Why is the premium higher for at-the-money options?

Because time value peaks at the money. An at-the-money option has zero intrinsic value, so its entire premium is time value — and the uncertainty about which way the underlying will move is at its highest there, so the market charges the most for the chance.

### How much premium do I actually pay for one lot?

You pay the premium per unit multiplied by the lot size of the contract. The premium is quoted per unit, and the total cash outlay is the per-unit premium times the lot size. This guide states that relationship in words only, because lot sizes change and different guides quote different numbers for the same contract right now — check the contract's own specifications for the current figure before you trade.
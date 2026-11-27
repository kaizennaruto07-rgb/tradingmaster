---
title: "What Is an Option? The Contract, the Four Building Blocks, and What Happens at Expiry"
description: "What is an option? A plain-language guide for beginners: the four building blocks of every contract, call vs put, buyer vs seller, and what happens at expiry."
meta_description: "What is an option? A plain-language guide for beginners: the four building blocks of every contract, call vs put, buyer vs seller, and what happens at expiry."
date: 2026-11-24
author: Kaizen
tag: "Options trading · Beginners"
keywords: ["what is an option", "what is an option in trading", "what is an option contract", "what is a call option", "what is a put option", "what is strike price", "what is option expiry", "what is option premium", "how do options work", "call vs put options", "what happens when an option expires", "intrinsic value vs time value", "option buyer vs seller", "are options risky for beginners", "what is an option in simple words"]
---

*By Kaizen · 24 November 2026 · Monks Of Market*

An option is a contract that gives its buyer the right, but not the obligation, to buy or sell something at a fixed price before a fixed date — for a price called the premium. That one sentence is the whole definition. The rest of this guide is about making it concrete, because a definition you cannot picture is a definition you cannot use.

Here is the one idea that holds everything together: **with an option, time is the product, not just direction.** A share can wait for your view to come right. An option cannot. It has a deadline, and if the view does not play out before that deadline, the contract can become worthless — even if the view was eventually right. Keep that sentence in mind and every part of the contract below will make sense.

## What Is an Option, in Simple Words?

Imagine you want the chance to buy something at today's price, but you are not sure you will want it later. An option is a contract that sells you exactly that chance. You pay a small, non-refundable price for it. If the price moves your way, you can use the chance. If it does not, you walk away — and the price you paid is gone.

That is what an option is, in simple words: **a paid chance, with a deadline.** The chance is to buy or to sell at a price fixed in advance. The payment is the premium. The deadline is the expiry. And the difference between an option and a share is the difference between renting a chance and owning a thing.

A share is a piece of a business. You own it for as long as you hold it, with no deadline on that ownership. An option is a contract about a price. It gives you no ownership, no dividend, and no vote — only a choice, for a limited time, at a fixed price. Everything else in this guide follows from that single difference.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 320" role="img" aria-label="Anatomy of an option contract: four building blocks — underlying (the index at 25,000), strike (25,100), expiry (in a few weeks), premium (Rs 120 per unit) — each with the question it answers" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Four building blocks — one contract</text>
<rect x="10" y="50" width="340" height="112" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="180" y="80" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">UNDERLYING</text>
<text x="180" y="106" text-anchor="middle" fill="#92a59c" font-size="12">What is this contract about?</text>
<text x="180" y="138" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">Index at 25,000</text>
<rect x="370" y="50" width="340" height="112" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="540" y="80" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">STRIKE</text>
<text x="540" y="106" text-anchor="middle" fill="#92a59c" font-size="12">At what price?</text>
<text x="540" y="138" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">25,100</text>
<rect x="10" y="180" width="340" height="112" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="180" y="210" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">EXPIRY</text>
<text x="180" y="236" text-anchor="middle" fill="#92a59c" font-size="12">Until when?</text>
<text x="180" y="268" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">In a few weeks</text>
<rect x="370" y="180" width="340" height="112" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="540" y="210" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">PREMIUM</text>
<text x="540" y="236" text-anchor="middle" fill="#92a59c" font-size="12">For what cost?</text>
<text x="540" y="268" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">Rs 120 per unit</text>
</svg>
</figure>

## The Four Building Blocks of Every Option Contract

Every option contract, without exception, is built from the same four terms. Learn them once and you can read any option contract. Each one answers a single question, and together they describe the whole deal. We will carry one example through the entire section so you can watch the same contract from every angle:

> **The carried example.** An index trades at 25,000. You buy a call option with a strike of 25,100 for a premium of Rs 120 per unit, expiring in a few weeks. Every number in this guide comes from this example, and every number is simple per-unit arithmetic — never multiplied by anything.

### 1. The underlying: what is this contract about?

The underlying is the asset the option is based on. It is the thing whose price the contract is about. The underlying can be a single company's share, or it can be an index — a basket of shares tracked as one number.

The underlying matters because it is the only thing whose price movement can make the option valuable. If you buy a call on an index at 25,000, your contract is about that index's price and nothing else. The underlying does not change during the life of the contract; it is the subject the whole deal is written on.

### 2. The strike price: at what price?

The strike price is the fixed price written into the contract — the price at which the buyer may buy or sell the underlying if they choose to use the option. It never changes. It is agreed when the contract is created and it stays put until the contract ends.

In our example, the strike is 25,100. That is the price at which the call buyer may buy the underlying. The index trades at 25,000 today, so the strike sits 100 points above the current price. The strike is the line the underlying has to cross for the contract to be worth anything at expiry — and how far away that line is from the current price is one of the main things that decides how much the option costs.

### 3. The expiry: until when?

The expiry is the date the contract ends. After it, the option no longer exists. A share has no expiry; an option's entire value lives inside the time between now and expiry.

Our example contract expires in a few weeks. That window is the whole opportunity: the index has a few weeks to move above 25,100. If it does, the contract has value. If it does not, the contract ends worthless. This is why time is the product. An option is not just a bet on direction — it is a bet on direction *within a deadline*. A view that needs six months to play out is the wrong view for a contract that ends in a few weeks, however right it turns out to be in the end.

### 4. The premium: for what cost?

The premium is the price of the option itself — what the buyer pays and the seller receives for the right the contract carries. It is not the strike price, and it is not the value of the underlying. It is the price of the chance.

In our example, the premium is Rs 120 per unit. That is what the buyer pays to hold the right to buy at 25,100. It is also the most the buyer can lose: if the contract expires worthless, the Rs 120 is gone in full, and nothing more is owed. The premium is non-refundable. You do not get it back because the view did not work out, any more than you get an insurance premium back because your house did not burn down.

Put the four blocks together and the contract reads as one sentence: *a call on the index, strike 25,100, expiring in a few weeks, for a premium of Rs 120 per unit.* Four terms, four questions answered — what is it about, at what price, until when, for what cost.

## Call vs Put Options: The Two Kinds of Option

There are only two kinds of option, and the difference is one word: buy or sell.

A **call option** is the right to **buy** the underlying at the strike price before expiry. A call buyer generally expects the underlying to rise — or wants the chance to buy at the fixed strike if it does. In our example, the call buyer pays Rs 120 for the right to buy at 25,100. If the index rises well above 25,100, that right becomes valuable. If it does not, the right expires worthless.

A **put option** is the right to **sell** the underlying at the strike price before expiry. A put buyer generally expects the underlying to fall, or wants protection against a fall in something they already hold. The mirror of our example: a put with a strike of 24,900, bought for a premium of Rs 110 per unit. If the index falls well below 24,900, that right becomes valuable. If it stays above 24,900, the right expires worthless.

That is the whole distinction, and it is part of the definition itself. The full comparison — when a call fits a view better than a put, how the two behave side by side, and the mistakes beginners make confusing them — belongs to the guide named Call vs Put Options. It is not repeated here.

## Buyer vs Seller: One Contract, Two Opposite Positions

Every option contract has two sides, and they are opposites. The buyer holds a right. The seller holds an obligation. The premium is the price that moves from the buyer to the seller for that transfer of risk.

**The buyer** pays the premium and holds the right. The buyer decides whether to use the option or let it lapse. The buyer's maximum loss is the premium paid — Rs 120 per unit in our call example — and no more. The buyer can lose the whole premium, but never more than it.

**The seller** receives the premium and takes on the obligation. If the buyer chooses to use the option, the seller must buy or sell at the strike price, regardless of where the market price has gone. The seller's gain is capped at the premium received. The seller's loss is not capped in the same way: a seller of a naked call — a call sold without holding the underlying — faces a loss that is theoretically unlimited, because there is no ceiling on how high the underlying can rise. A seller of a put can lose up to the strike minus the premium, because the underlying can fall to zero but no further.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 300" role="img" aria-label="Buyer vs seller asymmetry: the buyer pays the premium, holds the right, decides, and can lose at most the premium; the seller receives the premium, holds the obligation, must perform, and its loss is not capped the same way" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">One contract, two opposite positions</text>
<rect x="10" y="50" width="340" height="230" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="180" y="80" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">THE BUYER</text>
<text x="180" y="116" text-anchor="middle" fill="#f2f7f4" font-size="12">Pays the premium</text>
<text x="180" y="146" text-anchor="middle" fill="#f2f7f4" font-size="12">Holds the right</text>
<text x="180" y="176" text-anchor="middle" fill="#f2f7f4" font-size="12">Decides — use it or let it lapse</text>
<text x="180" y="206" text-anchor="middle" fill="#f2f7f4" font-size="12">Maximum loss: the premium</text>
<text x="180" y="236" text-anchor="middle" fill="#92a59c" font-size="12">(Rs 120 per unit)</text>
<rect x="370" y="50" width="340" height="230" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="540" y="80" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">THE SELLER</text>
<text x="540" y="116" text-anchor="middle" fill="#f2f7f4" font-size="12">Receives the premium</text>
<text x="540" y="146" text-anchor="middle" fill="#f2f7f4" font-size="12">Holds the obligation</text>
<text x="540" y="176" text-anchor="middle" fill="#f2f7f4" font-size="12">Must perform if the buyer uses it</text>
<text x="540" y="206" text-anchor="middle" fill="#f2f7f4" font-size="12">Loss not capped the same way</text>
<text x="540" y="236" text-anchor="middle" fill="#92a59c" font-size="12">(a naked call can lose without limit)</text>
</svg>
</figure>

Why would anyone ever sell an option, given that asymmetry? Because the premium collected is income, and the obligation is the price of it. A seller is paid for taking on a risk the buyer does not want to carry. That is a legitimate exchange — as long as the seller understands the obligation they have accepted. The danger is not selling options; the danger is selling them without understanding that the premium received is the maximum gain and the obligation accepted is open-ended.

## What the Premium Is Made Of: Intrinsic Value and Time Value

The premium is not one number. It is two numbers added together: **intrinsic value** plus **time value**. And the carried example already contains both.

**Intrinsic value** is what the option is worth right now if it were used today. For a call, it is how far the underlying is above the strike — if it is above the strike at all. If the underlying is below the strike, the intrinsic value is zero; the right to buy at a price above the market is worth nothing on its own.

Run our example forward. The index ends at 25,500. The call's strike is 25,100, so the right to buy at 25,100 when the index is at 25,500 is worth 25,500 − 25,100 = **Rs 400 per unit**. That 400 is the intrinsic value. The buyer paid Rs 120 for the contract, so the profit is 400 − 120 = **Rs 280 per unit**. Notice what the breakeven was: the index had to reach the strike plus the premium, 25,100 + 120 = **25,220**, before the buyer made a single rupee. Below 25,220 the buyer still loses money, even though the index rose.

**Time value** is everything above intrinsic value. It is the price of the time left in the contract — the chance that the underlying moves further in the buyer's favour before expiry. Time value melts every day, slowly at first and then fast in the last days, and it is zero at expiry. That is why the same option is worth less tomorrow even if the index does not move: the contract has one fewer day of possibility in it.

The mirror put makes the same arithmetic plain from the other side. A 24,900-strike put bought for Rs 110 per unit breaks even when the index falls to 24,900 − 110 = **24,790**. If the index ends at 24,500, the put is worth 24,900 − 24,500 = **Rs 400 per unit**, and the profit is 400 − 110 = **Rs 290 per unit**. If the index ends above 24,900, the put expires worthless and the Rs 110 is lost in full.

Two numbers from the example are worth remembering. First, the buyer's profit on the call came from the intrinsic value of 400 minus the premium of 120 — the premium is a cost that has to be earned back before anything is profit. Second, the breakeven for a bought call is always strike plus premium, and for a bought put always strike minus premium. Those two formulas are the whole arithmetic of buying an option.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 330" role="img" aria-label="Hockey-stick payoff for the carried call example: flat at a loss of Rs 120 per unit below the 25,100 strike, rising past breakeven at 25,220, and marked at 25,500 with Rs 400 of value and Rs 280 of profit" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The carried call: payoff at expiry (per unit)</text>
<line x1="60" y1="225" x2="700" y2="225" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="243" y1="45" x2="243" y2="280" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="353" y1="45" x2="353" y2="280" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<polyline points="60,280 243,280 609,95 700,49" fill="none" stroke="#e8825a" stroke-width="3"/>
<circle cx="609" cy="95" r="5" fill="#e8825a"/>
<text x="150" y="258" text-anchor="middle" fill="#f2f7f4" font-size="12">Flat — loss of Rs 120 per unit</text>
<text x="595" y="68" text-anchor="end" fill="#f2f7f4" font-size="12" font-weight="700">Rs 400 value</text>
<text x="595" y="86" text-anchor="end" fill="#92a59c" font-size="12">Rs 280 profit</text>
<text x="60" y="312" text-anchor="middle" fill="#92a59c" font-size="11">24,900</text>
<text x="243" y="312" text-anchor="middle" fill="#92a59c" font-size="11">25,100 · strike</text>
<text x="353" y="312" text-anchor="middle" fill="#92a59c" font-size="11">25,220 · breakeven</text>
<text x="609" y="312" text-anchor="middle" fill="#92a59c" font-size="11">25,500</text>
<text x="52" y="44" text-anchor="end" fill="#92a59c" font-size="11">+Rs 400</text>
<text x="52" y="229" text-anchor="end" fill="#92a59c" font-size="11">0</text>
<text x="52" y="284" text-anchor="end" fill="#92a59c" font-size="11">−Rs 120</text>
</svg>
</figure>

## What Happens When an Option Expires?

At expiry, an option is either worthless or worth exactly how far it is in the money. There is nothing in between and nothing left over: the time value has melted to zero, and only the intrinsic value remains.

Our call, if the index ends at 25,050 — below the 25,100 strike — is worth nothing. The buyer loses the Rs 120 premium in full. If the index ends at 25,500, the call is worth Rs 400 per unit, exactly how far it is in the money. The same rule applies to the put: above 24,900 it is worthless; at 24,500 it is worth Rs 400 per unit.

Most option contracts never get exercised. Traders usually sell the option itself back to the market before expiry, to capture whatever time value is still in it. Exercising the option captures only the intrinsic value, so it generally makes sense only at or near expiry. The beginner's takeaway is simple: an option is a contract you hold, trade, or let expire — not a share you keep.

One further distinction belongs here, in a single line: some options can be exercised at any time before expiry, and others only at expiry. The first kind is called American-style; the second, European-style. Which kind a contract is changes when the choice can be used, not what the choice is.

## Why Do Options Exist at All?

Options exist for three purposes, and each is one line with a mechanism — not a strategy list.

**Insurance.** A put that pays off if a holding falls is insurance for that holding, in the same way house insurance pays off if the house is damaged. The premium is the cost of the protection, and the protection is the point.

**Leverage.** A small premium controls a large amount of underlying, so gains — and losses — are magnified relative to the money committed. The same view expressed through an option moves faster, in both directions, than the same view expressed through the underlying itself.

**Income.** Selling options against shares already owned collects premiums in exchange for accepting obligations. The premium is the income; the obligation is what is sold to earn it.

## How an Option Is Different From a Share

An option differs from a share in three fundamental ways, and the difference is worth stating plainly, because treating an option like a cheaper share is a common beginner error before a trade has even begun.

First, **it expires.** A share can wait. An option has a deadline, and if the view does not play out in time, the contract can become worthless. Timing is part of the trade itself.

Second, **it is leveraged.** A small premium moves a large exposure, so the same move in the underlying produces a much larger percentage move in the option's value — in both directions.

Third, **it confers no ownership.** A share is a piece of a business, with dividends and a vote. An option is a contract about a price. It gives you no part of the business and no say in it.

The full comparison — when an option fits a view better than a share and when it does not — belongs to the guide named Options vs Stocks for Beginners.

## The Honest Boundary: When an Option Is the Wrong Tool

An option is the wrong tool for a slow view, and the right tool for a timed one. That is the boundary to carry out of this guide.

You can be right on direction and wrong on timing, and still lose money. The index can rise exactly as you expected — just a week after your contract expired. The premium decays every day the contract is held, so a correct view that arrives late is a losing trade, not an unlucky one. This is not an exception. It is one of the normal ways option trades fail, and it is the direct consequence of the deadline built into the contract.

The same logic applies to the cheapest contracts. A far-out-of-the-money option bought for a tiny premium, hoping for a huge return, is a lottery ticket, not a trade. Those contracts usually expire worthless, because the move they need is large and the time they have is short. A small premium is not a small risk — it is a small price for a contract that will probably be worth nothing.

None of this makes options unusable. It makes them a tool with a shape: right for a view with a direction, a distance, and a deadline, wrong for a vague hope that something will happen eventually. Before any real money is at risk, the size of the risk is set by the maximum loss — the premium — and the guide on [position sizing](/articles/position-sizing/) shows how to size from that loss rather than from the money available. The guide on [risk of ruin](/articles/risk-of-ruin-trading/) explains why the premium being the maximum a buyer can lose is the single most important fact in this article. And the guide on [paper trading](/articles/paper-trading-vs-real-trading/) sets out how to practise with these contracts for weeks before risking real capital.

One last boundary, and it is not about markets. If trading is causing ongoing stress, sleep problems, or anxiety, a guide is not enough — talking to a qualified professional is the sensible step. No article can carry that weight for you.

## Where to Go Next

This guide owns the definition. The rest of the beginner journey is mapped in the guide named Option Trading for Beginners, and each piece of depth belongs to its own guide:

- **Call vs Put Options** — the full comparison of the two kinds of option, side by side.
- **What Is Option Premium?** — what the premium is made of, and what makes it move.
- **How to Read an Option Chain** — how to read the table where every contract's strike, expiry, and premium is listed.
- **How to Place Your First Option Trade** — the practical steps, in order, before any money is at risk.
- **Options vs Stocks for Beginners** — the full comparison, including when an option fits a view better than a share and when it does not.

Two habits belong to the journey before the first trade. Journal every trade with its stated view and its worst case — the guide on [trading journals](/articles/trading-journal-what-to-track-beyond-pnl/) shows what to track beyond profit and loss — and review the record after twenty trades, using the guide on [trading expectancy](/articles/what-is-trading-expectancy/) to judge whether the process is working. The costs that sit between the premium and the outcome are set out in the guide on [options trading charges](/articles/options-trading-charges-india/); the charges breakdown itself is not repeated here.

## Frequently Asked Questions

### What is an option in simple words?

An option is a paid chance, with a deadline. It is a contract that gives its buyer the right, but not the obligation, to buy or sell something at a fixed price — the strike — before a fixed date — the expiry — for a price called the premium. If the price moves your way, you can use the chance. If it does not, you walk away, and the premium is gone.

### What is the difference between a call and a put option?

A call option is the right to buy the underlying at the strike price before expiry; a put option is the right to sell the underlying at the strike price before expiry. Call buyers generally expect the underlying to rise; put buyers generally expect it to fall, or want protection against a fall. The full comparison belongs to the guide named Call vs Put Options.

### What is a strike price?

The strike price is the fixed price written into the option contract — the price at which the buyer may buy or sell the underlying if they choose to use the option. It never changes during the life of the contract. In the example in this guide, the call's strike is 25,100: the price at which the buyer may buy, and the line the underlying has to cross for the contract to be worth anything at expiry.

### What is an option premium?

The premium is the price of the option itself — what the buyer pays and the seller receives for the right the contract carries. It is not the strike price, and it is not the value of the underlying. In the example in this guide, the premium is Rs 120 per unit for the call and Rs 110 per unit for the put. The premium is non-refundable, and it is the most a buyer can lose. What the premium is made of, and what makes it move, is covered in full in the guide named What Is Option Premium?

### What is the expiry date of an option?

The expiry is the date the option contract ends. After it, the option no longer exists. An option's entire value lives inside the time between now and expiry, which is why time is the product: a view that does not play out before the deadline can lose money even if it turns out right later.

### What happens when an option expires?

At expiry, an option is either worthless or worth exactly how far it is in the money — the time value has melted to zero and only the intrinsic value remains. In the example in this guide, the 25,100-strike call is worthless if the index ends below 25,100 and worth Rs 400 per unit if the index ends at 25,500. Most option contracts never get exercised; traders usually sell the option itself back to the market before expiry to capture any remaining time value.

### Can you lose more money than the premium you paid?

As a buyer, no: the maximum loss on a bought option is the premium paid — Rs 120 per unit in the call example in this guide — and nothing more is owed. As a seller, yes: the seller takes on an obligation, and the loss is not capped the same way. A naked call seller's loss is theoretically unlimited, and a short put can lose up to the strike minus the premium.

### What is intrinsic value and time value?

Intrinsic value is what the option is worth right now if it were used today — for a call, how far the underlying is above the strike, or zero if it is below the strike. Time value is everything above intrinsic value: the price of the time left in the contract. Time value melts every day and is zero at expiry. In the example in this guide, the call at an index level of 25,500 has Rs 400 of intrinsic value per unit, and the buyer paid Rs 120 of premium, leaving a profit of Rs 280 per unit.

### What is the difference between an option and a stock?

A share is a piece of a business with no deadline on that ownership; an option is a contract about a price, with a deadline. An option expires, it is leveraged, and it confers no ownership — no dividends, no vote. A share can wait for a view to come right; an option cannot. The full comparison belongs to the guide named Options vs Stocks for Beginners.

### How do options make money?

A bought call makes money when the underlying rises above the breakeven — the strike plus the premium — before expiry. A bought put makes money when the underlying falls below the breakeven — the strike minus the premium — before expiry. In the example in this guide, the call breaks even at 25,220 and makes Rs 280 per unit if the index ends at 25,500; the put breaks even at 24,790 and makes Rs 290 per unit if the index ends at 24,500. Options also exist for insurance and for income, as set out in the Why Do Options Exist at All section above.

### Are options risky for beginners?

Yes, in the specific way this guide describes: the risk is not only direction but timing, because the premium decays every day and the contract expires. A beginner can lose the entire premium, and a beginner who sells options takes on obligations whose losses are not capped the same way. The risk is manageable only with the frame set out in this guide — size from the maximum loss, decide the exit before entry, and paper trade for weeks before risking real capital.

### Is option trading legal in India?

Yes. Options are traded on regulated exchanges under the market regulator's framework. Legality is not the question a beginner needs to answer; understanding the contract, the deadline, and the maximum loss is.

### What does it mean to exercise an option?

Exercising an option means using the right the contract carries — buying the underlying at the strike if you hold a call, or selling it at the strike if you hold a put. Exercising captures only the intrinsic value, so it generally makes sense only at or near expiry; most traders sell the option itself back to the market before expiry instead. Some options can be exercised at any time before expiry, and others only at expiry.

### Why do most options expire worthless?

Because the move they need is large and the time they have is short. An option is worthless at expiry unless the underlying has crossed the strike by then, and the time value — the price of the chance that it will — melts to zero as expiry approaches. Cheap far-out-of-the-money options are the clearest case: bought for a tiny premium, hoping for a huge return, they usually expire worthless because the underlying rarely travels that far that fast.
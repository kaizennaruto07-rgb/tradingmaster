---
title: "Stop Loss Meaning: What It Is and How It Actually Works"
description: "A stop loss is a pre-set order to exit when price hits your level. Learn trigger vs fill price, slippage, gaps and the guarantee trade-off, with one example."
meta_description: "A stop loss is a pre-set order to exit when price hits your level. Learn trigger vs fill price, slippage, gaps and the guarantee trade-off, with one example."
date: 2026-11-14
author: Kaizen
tag: "Risk management · Stop loss"
keywords: ["stop loss meaning", "what is stop loss", "what is a stop loss order", "stop loss meaning in trading", "how does a stop loss work", "stop loss vs stop limit", "trailing stop loss meaning", "stop loss trigger price vs execution price", "what is slippage stop loss", "stop loss for beginners"]
---

*By Kaizen · 14 November 2026 · Monks Of Market*

## What Is a Stop Loss? A Pre-Set Instruction to Exit Automatically

A stop loss is a pre-set instruction to your broker or trading platform to close a position automatically once the price reaches a level you chose in advance. You set it when you place the trade, or shortly after, and then it waits. If the price never reaches your level, the order does nothing. If the price does reach it, the order activates and your position is closed — or, in the case of one particular stop type, an attempt is made to close it.

That is the whole definition, and it is worth stating plainly because the term gets loaded with promises it cannot keep. A stop loss is an order type. It is not a strategy, not a profit tool, and not insurance. It does not make a bad trade good, and it does not decide whether a trade was worth taking. It does one job: it turns "I will exit if price reaches this level" into an instruction that does not depend on you being at your screen, watching the price, and acting in the moment.

Most traders first meet the stop loss as advice — "always use a stop loss" — without anyone explaining what actually happens between setting it and getting out. This article covers that gap: how the order works step by step, what it guarantees and what it does not, and what can go wrong even when the order works exactly as designed.

### What a Stop Loss Is Not

The slogan version needs correction on four points — no guaranteed exit price, no gap protection, no substitute for sizing, and no set-and-forget excuse — plus a fifth on moving a stop after entry. Each is explained in full, with numbers, in the "What a Stop Loss Does NOT Do" section below, so read that section before trusting any stop to save a trade.

## How a Stop Loss Order Works: Resting, Then Triggered

A stop loss order has two phases.

**Phase 1: Resting.** The order sits dormant. It is not in the market, it is not buying or selling anything, and it does nothing while the price stays away from your level. A resting stop is simply a standing instruction waiting for its condition to be met.

**Phase 2: Triggered.** When the market price reaches the stop price, the order converts and goes live. What it converts into depends on the type of stop:

- A plain stop loss — often called a stop-market order — becomes a market order. A market order fills at the next available price.
- A stop-limit order becomes a limit order at the limit price you set. A limit order fills only at that price or better.

That conversion is the whole mechanism. Everything important about stop losses — their usefulness, their limits, and the trade-off between stop types — follows from what happens at the moment of conversion.

One detail varies by platform and is worth knowing from the start: what counts as "reaching" the stop price is not defined the same way everywhere. Some platforms trigger on the last traded price; others trigger on bid or ask prices. Order-type availability, labels, validity, and behaviour outside trading hours also vary by platform. This article therefore describes the mechanics in general terms and tells you, near the end, exactly what to check on your own platform's order form.

### Trigger Price vs Fill Price: The Difference That Matters Most

The stop price is a trigger, not a promised exit price. When the trigger is hit, the order converts, and the fill price — the price at which your shares actually change hands — is whatever the market offers next. In a calm, liquid market, the fill is usually close to the stop price. In a fast-moving or thin market, it can be meaningfully worse.

Think of it as three distinct numbers, never to be confused with each other:

1. **Trigger price** — the level you set, at which the resting order activates.
2. **Fill price** (the execution price) — the price at which the order actually executes after conversion.
3. **Actual loss** — the difference between your entry price and the fill price, multiplied by your quantity.

A beginner's most expensive misunderstanding is treating the first number as if it were the second. The stop price decides *when* you exit. The market decides *at what price* you exit, within the rules of the order type you chose. A stop-limit order is the exception that proves the point: it protects the price, but only by accepting that the order may not fill at all.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Two-phase stop loss diagram: resting order, trigger price hit, conversion to a market or limit order, and fill at the next available price, with trigger and fill shown as different prices." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Two-phase stop loss — trigger price is not the fill price</text>
<text x="340" y="66" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">1 · Resting order waits dormant</text>
<text x="340" y="88" text-anchor="middle" fill="#92a59c" font-size="12">Nothing happens until the trigger price is reached</text>
<text x="340" y="112" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="134" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">2 · Trigger price hit — Rs 900 in the example</text>
<text x="340" y="156" text-anchor="middle" fill="#92a59c" font-size="12">The order converts and goes live</text>
<text x="340" y="180" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="202" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">3 · Converts to a market order or a limit order</text>
<text x="340" y="224" text-anchor="middle" fill="#92a59c" font-size="12">Plain stop → market order · Stop-limit → limit order</text>
<text x="340" y="248" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="270" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">4 · Fills at the next available price</text>
<text x="340" y="292" text-anchor="middle" fill="#92a59c" font-size="12">Rs 892 on slippage · Rs 850 on a gap — not Rs 900</text>
</svg>
</figure>

## One Example, Carried Through: Entry Rs 1000, Stop Rs 900, 50 Shares

This article uses one example throughout, so you can see exactly how the same trade changes under different conditions. Nothing is hidden by switching numbers between sections.

Suppose you buy a stock at Rs 1000 per share and set a stop loss at Rs 900 per share, holding 50 shares.

- Intended risk per share: Rs 1000 − Rs 900 = Rs 100 per share.
- Intended total loss: Rs 100 per share × 50 shares = Rs 5000 for 50 shares.

That Rs 5000 for 50 shares is the *intended* loss — the loss if the order filled exactly at the stop price. It is the number most traders have in mind when they set a stop. Whether the actual loss matches it depends on the fill price, which is why the same example returns later in this article, repriced under slippage and under an overnight gap.

This example excludes charges and taxes, which this article does not cover. The point here is the order mechanics, not a full cost calculation.

## The Three Stop Types: Stop-Market, Stop-Limit, and Trailing Stop

There are three stop types to understand at a definitional level. How far from the entry price to place a stop is a separate question, covered in the fuller guide mentioned at the end of this article — it is not answered here.

**Stop-market (plain stop loss).** The order you have met so far. On trigger, it becomes a market order and fills at the next available price. It prioritises execution: getting you out. Its weakness is price — in a fast fall, the fill can be worse than the stop price.

**Stop-limit.** This order uses two prices: the stop price (the trigger) and the limit price (the worst price you will accept). On trigger, it becomes a limit order at the limit price. It prioritises price: it will not fill worse than the limit. Its weakness is execution — if the price moves past the limit without trading at or better than it, the order does not fill, and the position stays open and still exposed.

For illustration only: a sell stop-limit might pair a stop price of Rs 900 with a limit price of Rs 895. The Rs 900 stop is the trigger; the Rs 895 limit is the worst price acceptable, so the order fills only at Rs 895 or better and may not fill at all if the price falls past Rs 895 without trading at or better than it. This shows the two-price setup only; it is not advice on where to set either price.

**Trailing stop.** A trailing stop is not a fixed price. It is a stop that moves with the price in your favour by a set amount or percentage, and stays put when the price moves against you. For example, a trailing sell stop on a rising stock rises as the stock rises, then locks in when the price reverses and hits the trailing level. On trigger, it behaves like whichever underlying stop type it is built on — market or limit — so it still carries slippage risk on exit if it is market-based, or non-fill risk if it is limit-based. A trailing stop can protect a gain as a trend runs, but it does not maximise profit: it exits on a reversal of the size you set, which may be well below the peak.

### The Guarantee Trade-Off: You Cannot Have Both Guarantees at Once

Here is the sentence to remember from this article: **a stop loss guarantees you are out, a stop-limit guarantees your price, and you cannot have both guarantees at once.** More precisely, a plain stop loss prioritises execution over price, while a stop-limit prioritises price over execution. Every stop type trades one guarantee for the other — even a market order's execution depends on tradable liquidity being available, so "guarantees you are out" means the order is sent as a market order on trigger, not that any market outcome is certain.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 290" role="img" aria-label="Guarantee trade-off table: stop-market guarantees the exit but risks price; stop-limit guarantees the price but risks no fill; trailing stop follows price in your favour but carries slippage or non-fill risk on exit." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Guarantee trade-off — you cannot have both guarantees</text>
<text x="20" y="62" text-anchor="start" fill="#92a59c" font-size="12" font-weight="700">Row</text>
<text x="235" y="62" text-anchor="start" fill="#92a59c" font-size="12" font-weight="700">Stop-market</text>
<text x="395" y="62" text-anchor="start" fill="#92a59c" font-size="12" font-weight="700">Stop-limit</text>
<text x="545" y="62" text-anchor="start" fill="#92a59c" font-size="12" font-weight="700">Trailing</text>
<text x="20" y="100" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Guarantees</text>
<text x="235" y="100" text-anchor="start" fill="#f2f7f4" font-size="12">The exit</text>
<text x="395" y="100" text-anchor="start" fill="#f2f7f4" font-size="12">The price</text>
<text x="545" y="100" text-anchor="start" fill="#f2f7f4" font-size="12">Follows price up</text>
<text x="20" y="144" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Risks</text>
<text x="235" y="144" text-anchor="start" fill="#f2f7f4" font-size="12">Price (slippage)</text>
<text x="395" y="144" text-anchor="start" fill="#f2f7f4" font-size="12">No fill</text>
<text x="545" y="144" text-anchor="start" fill="#f2f7f4" font-size="12">Slippage / no fill</text>
<text x="20" y="188" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Fails</text>
<text x="235" y="188" text-anchor="start" fill="#f2f7f4" font-size="12">Fast, thin, gap markets</text>
<text x="395" y="188" text-anchor="start" fill="#f2f7f4" font-size="12">Price skips limit</text>
<text x="545" y="188" text-anchor="start" fill="#f2f7f4" font-size="12">On exit, as its type</text>
<text x="20" y="232" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Suits</text>
<text x="235" y="232" text-anchor="start" fill="#f2f7f4" font-size="12">Wants out above all</text>
<text x="395" y="232" text-anchor="start" fill="#f2f7f4" font-size="12">Wants price control</text>
<text x="545" y="232" text-anchor="start" fill="#f2f7f4" font-size="12">Protecting a gain</text>
</svg>
</figure>

| Stop type | What it guarantees | What it risks | When it fails | Who it suits (definitional level) |
|---|---|---|---|---|
| Stop-market (plain stop loss) | The exit: on trigger it becomes a market order and is sent for execution | Price: the fill can be worse than the stop price (slippage, gaps) | On price, in fast-moving, thin, or gap markets | A trader who wants out above all else and accepts an uncertain fill price |
| Stop-limit | The price boundary: it will not fill worse than the limit price | Execution: the order may not fill at all | On execution, when price moves past the limit without trading at or better than it | A trader who refuses to accept worse than a set price and accepts the risk of staying in the trade |
| Trailing stop | A stop level that follows price in the trader's favour | Slippage (if market-based) or non-fill (if limit-based) on exit | The same way as its underlying stop type — on price or on execution | A trader who wants a stop that protects a gain as a trend runs, accepting an exit on a reversal |

## Slippage and Overnight Gaps: When the Fill Is Worse Than the Stop

Slippage is the difference between the expected price — here, the stop price — and the actual fill price. In calm, liquid markets, the fill lands close to the stop. In fast-moving or thin markets, it can land meaningfully worse, and in a thin market the fill may occur across several prices rather than at one single next price. The actual loss then exceeds the intended loss.

Return to the carried example: entry Rs 1000, stop Rs 900, 50 shares, intended total loss Rs 5000 for 50 shares.

**Under slippage.** Suppose the price falls quickly through Rs 900 and the plain stop loss fills at Rs 892. The loss per share is Rs 1000 − Rs 892 = Rs 108, and the total actual loss is Rs 108 per share × 50 shares = Rs 5400 for 50 shares — Rs 400 more than the Rs 5000 intended for 50 shares. The position still closed, as designed. It simply closed Rs 8 per share worse than the trigger.

**Under an overnight gap.** Suppose the stock closes at one price and, after news overnight, opens far lower, with no trades at the stop level in between. The plain stop loss triggers and fills at the next available price — say Rs 850. The loss per share is Rs 1000 − Rs 850 = Rs 150, and the total actual loss is Rs 150 per share × 50 shares = Rs 7500 for 50 shares — Rs 2500 more than the Rs 5000 intended for 50 shares. Again, the position still closed. The gap did not stop the exit; it changed the exit price.

A stop-limit order avoids that slippage only by risking no fill at all. In the gap example, a stop-limit with a limit at or near Rs 900 would simply not fill if no price at or better than the limit was available, and the position would stay open — possibly to fall further. That is the trade-off from the previous section, now with numbers attached.

The slippage fill of Rs 892 and the gap fill of Rs 850 are illustrative examples chosen for this article, not market statistics. No claim is made here about how often slippage or gaps occur, or how large they typically are.

There is one more trigger risk worth knowing. A stop order can be triggered by a short-term price move — a brief spike through the stop level — even if the price later recovers. The exit then happens at whatever the fill price was, and the trade is over regardless of what the price does afterwards. The stop price is a line that, once crossed, activates the order; the order does not wait to see whether the move was temporary.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Bar chart of the carried stop loss example: intended loss Rs 5000 for 50 shares, slippage fill loss Rs 5400 for 50 shares, gap fill loss Rs 7500 for 50 shares." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">One example, three fills — entry Rs 1000, stop Rs 900, 50 shares</text>
<rect x="115" y="137" width="70" height="113" fill="#e8825a"/>
<text x="150" y="126.66666666666669" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Rs 5000 intended</text>
<text x="150" y="272" text-anchor="middle" fill="#f2f7f4" font-size="12">Intended</text>
<text x="150" y="292" text-anchor="middle" fill="#92a59c" font-size="11">Fill at Rs 900</text>
<rect x="305" y="128" width="70" height="122" fill="#e8825a"/>
<text x="340" y="117.6" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Rs 5400 slippage</text>
<text x="340" y="272" text-anchor="middle" fill="#f2f7f4" font-size="12">Slippage fill</text>
<text x="340" y="292" text-anchor="middle" fill="#92a59c" font-size="11">Fill at Rs 892</text>
<rect x="495" y="80" width="70" height="170" fill="#e8825a"/>
<text x="530" y="70.0" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Rs 7500 gap</text>
<text x="530" y="272" text-anchor="middle" fill="#f2f7f4" font-size="12">Gap fill</text>
<text x="530" y="292" text-anchor="middle" fill="#92a59c" font-size="11">Fill at Rs 850</text>
<line x1="60" y1="250" x2="620" y2="250" stroke="#92a59c" stroke-width="1"/>
<text x="340" y="322" text-anchor="middle" fill="#92a59c" font-size="12">Fill price decides the actual loss, not the trigger price</text>
</svg>
</figure>

## Long vs Short: Sell Stop Below, Buy Stop Above

The direction of the stop depends on the direction of the position.

- **Long position** (you bought, expecting a rise): the stop is a **sell stop placed below** the current price. If the price falls to your level, the sell stop triggers and closes the position.
- **Short position** (you sold, expecting a fall): the stop is a **buy stop placed above** the current price. If the price rises to your level, the buy stop triggers and closes the position.

The same logic can also protect a profit — a stop placed above entry on a winning long, or below entry on a winning short — as explained under trailing stops above.

## What a Stop Loss Does NOT Do

This section comes before any how-to on purpose. If you only remember one section of this article, remember this one.

- **It does not guarantee an exit price.** A plain stop loss guarantees an exit attempt as a market order on trigger, not a price. The fill can be worse than the stop price through slippage or a gap, as the carried example shows: Rs 5400 for 50 shares instead of Rs 5000 for 50 shares on a slippage fill, and Rs 7500 for 50 shares instead of Rs 5000 for 50 shares on a gap fill.
- **It does not protect against gaps.** A gap changes the fill price; it does not cancel the order. A stop-limit order is the only variant that refuses a worse price, and it does so by risking no fill at all.
- **It is not a substitute for position sizing.** The stop sets the loss per share. The total loss is the loss per share multiplied by the quantity. A stop placed without checking the quantity can still risk far more in total than intended — the carried example's Rs 5000 for 50 shares would be twice as large for 100 shares at the same stop distance.
- **It is not a set-and-forget excuse.** Order behaviour outside trading hours and overnight varies by platform, and a stop-limit can sit unfilled, leaving the position open and still exposed. A stop reduces the need to watch every tick; it does not remove the need to know what your order will do when you are not watching.
- **Moving a stop further away after entry because "it just needs room" is abandoning the plan, not risk management.** The stop level was the pre-set exit; moving it further away after the price moves against you changes the risk you originally accepted.

A stop loss used with these limits in mind is a genuinely useful tool: it enforces an exit you decided in advance, without relying on your judgement in a fast-moving moment. A stop loss used as if it were a guaranteed price, gap insurance, or a complete risk plan is a misunderstanding waiting to cost money.

## How a Stop Connects to Position Sizing (Definitional Only)

The connection between a stop loss and position sizing is one piece of arithmetic: the distance from entry to stop, multiplied by quantity, equals the trade's intended risk in rupees. In the carried example, the entry-to-stop distance is Rs 100 per share, and Rs 100 per share × 50 shares = Rs 5000 of intended risk for 50 shares.

That is all this article teaches about sizing — deliberately. How to choose a quantity from that risk figure, and how to place the stop distance itself, belong to other guides. But the definitional link matters: without a stop distance, there is no per-share risk figure to multiply, and without a quantity, there is no total risk figure at all. The stop is what makes the trade's risk measurable in the first place.

A commonly cited convention in trading education is to risk no more than 1–2% of capital on a single trade. That figure is stated here strictly as a convention — not a rule, not a requirement, and not a promise of any outcome. It is mentioned only because it shows why the arithmetic above matters: the 1–2% convention is expressed as a share of capital, and the entry-to-stop distance times quantity is how a trader works out what share of capital a given trade actually risks.

For how position sizing works in practice, see [Position Sizing in Trading: How Much Should You Risk Per Trade?](/articles/position-sizing/). For why capping a single trade's loss matters for survival over many trades, see [Risk of Ruin in Trading: What It Is, How to Calculate It, and How to Survive It](/articles/risk-of-ruin-trading/).

## Before Your First Stop: Read Your Order Form

This is the article's only how-to, and it is a checklist of questions — not instructions for any specific platform, because order forms differ. Before placing your first stop loss, find the answers on your own platform:

1. **Is this a stop-market or a stop-limit order on my platform?** Know which conversion your order will make on trigger — to a market order, or to a limit order at a limit price.
   *Why it matters: it decides which side of the guarantee trade-off you are on — getting out, or holding a price boundary.*
2. **What triggers it — the last traded price, or bid/ask prices?** The trigger basis varies by platform, and it decides whether a brief quote movement can activate your order.
   *Why it matters: a bid/ask trigger basis can activate on quote movement even without a trade at your level, so it changes when your order goes live.*
3. **What validity does it carry?** Some orders last for the day only; others carry a longer, good-till-triggered-style validity. Know when your order stops existing if it never triggers.
   *Why it matters: a day-only order lapses if it never triggers, leaving you with no standing exit the next day.*
4. **What happens overnight and outside trading hours?** Know whether your resting order stays live through a gap open, and what happens to it outside market hours.
   *Why it matters: if a resting order does not stay live through a gap open, it cannot trigger at the open the way you expected.*
5. **What will I see if it gaps?** Know what fill price to expect if the price jumps past your stop level, and — for a stop-limit — what you will see if it does not fill.
   *Why it matters: knowing the expected fill — or, for a stop-limit, the no-fill outcome — in advance means the gap result is not a surprise.*

If any answer is unclear, that is the question to resolve before trading with a stop, not after. The order form is the only authoritative source for your platform's behaviour; general articles, including this one, can describe the mechanics but cannot settle platform-specific details.

## What Comes Next

This article covered the definition only: what a stop loss is, how it works in two phases, the trigger-versus-fill distinction, the three stop types, slippage and gaps, and what a stop loss does not do.

The fuller guide, Stop Loss in Trading: The Complete Guide, covers placement in full — how traders choose a stop distance, the common placement mistakes, and the psychology of moving stops. That guide is not yet published, so it is mentioned here in plain text only.

The live sizing and risk material linked in the position-sizing section above is the place to go next if you want to work out, in rupees, what a given stop distance and quantity mean for your capital.

## Frequently Asked Questions

### What is the meaning of stop loss in trading?

A stop loss is a pre-set instruction to close a position automatically once the price reaches a level you chose in advance. It is an order type, not a strategy, not a profit tool, and not insurance. While it rests, it does nothing; when the price reaches the stop level, it triggers and the position is closed — or, for a stop-limit, an attempt is made to close it at or better than the limit price.

### How does a stop loss order work?

In two phases. First, resting: the order sits dormant and does nothing until the market price reaches the stop price. Second, triggered: the order converts and goes live — a plain stop loss becomes a market order that fills at the next available price, while a stop-limit becomes a limit order at the limit price you set. What counts as reaching the stop price varies by platform (last traded price versus bid/ask), so check your own platform's order form.

### What is the difference between stop loss and stop limit?

A plain stop loss (stop-market) becomes a market order on trigger: it prioritises getting you out, and the fill price can be worse than the stop price. A stop-limit becomes a limit order on trigger: it prioritises price, using two prices — the stop price as the trigger and the limit price as the worst price you will accept — but it may not fill at all if the price moves past the limit. A plain stop loss prioritises getting you out (sent as a market order on trigger, subject to tradable liquidity); a stop-limit prioritises price; you cannot have both priorities at once.

### Does a stop loss guarantee I will exit at my stop price?

No. The stop price is a trigger, not a promised exit price. A plain stop loss fills at the next available price after conversion, which can be worse than the stop price in a fast-moving or thin market or on an overnight gap. In the carried example — entry Rs 1000, stop Rs 900, 50 shares — a slippage fill at Rs 892 gives a total actual loss of Rs 5400 for 50 shares, and a gap fill at Rs 850 gives Rs 7500 for 50 shares, against an intended Rs 5000 for 50 shares.

### What is slippage in a stop loss?

Slippage is the difference between the expected price (the stop price) and the actual fill price. In the carried example, a plain stop loss set at Rs 900 that fills at Rs 892 has slipped Rs 8 per share, turning an intended loss of Rs 100 per share into an actual loss of Rs 108 per share — Rs 5400 for 50 shares instead of the intended Rs 5000 for 50 shares. Slippage is most likely in fast-moving or thin markets, where the next available price after the trigger is worse than the stop price.

### What happens to my stop loss if the stock gaps down overnight?

A plain stop loss triggers and fills at the next available price, not at the stop price. In the carried example — entry Rs 1000, stop Rs 900, 50 shares — a gap fill at Rs 850 gives a loss of Rs 150 per share, or Rs 7500 for 50 shares, against the intended Rs 5000 for 50 shares. The position still closes; only the price changes. A stop-limit, by contrast, may remain unfilled if no price at or better than its limit is available, leaving the position open.

### What is a trailing stop loss?

A trailing stop is a stop whose level moves with the price in your favour by a set amount or percentage, and stays put when the price moves against you. As a stock rises, a trailing sell stop rises with it; when the price reverses by the set amount or percentage and hits the trailing level, the stop triggers and the position closes. On trigger it behaves like its underlying stop type, so it still carries slippage risk if market-based, or non-fill risk if limit-based. It can protect a gain as a trend runs, but it does not maximise profit, because it exits on a reversal rather than at the peak.

### What is the difference between a sell stop and a buy stop?

It depends on the direction of the position. A long position (bought, expecting a rise) uses a sell stop placed below the current price: if the price falls to that level, the position is sold. A short position (sold, expecting a fall) uses a buy stop placed above the current price: if the price rises to that level, the position is bought back. The stop always closes the position by trading in the opposite direction to how it was opened.

### Should I use a stop loss on every trade?

A stop loss sets a pre-set exit level, and without one there is no defined exit if the price moves against you — so as a matter of risk discipline, a defined exit is the norm, not the exception. But a stop loss on its own is not a complete risk plan: it does not guarantee an exit price, it does not protect against gaps, and it does not substitute for sizing, since the total loss also depends on quantity. The honest answer is that a stop is a necessary part of managing a trade's risk, not a sufficient one — it must be paired with a quantity that keeps the total risk, in rupees, at a level the trader has deliberately accepted.

### What is a stop loss trigger price?

The trigger price is the price at which a resting stop order converts and goes live. It is distinct from the fill price: the trigger price decides *when* the order activates, and the fill price is the price at which the order actually executes afterwards. In the carried example, Rs 900 is the trigger price; Rs 892 (slippage) or Rs 850 (gap) would be the fill price, and the actual loss follows from the fill price, not the trigger price.

### Stop loss vs take profit: what is the difference?

A stop loss closes a position when the price moves against it, at a level set to cap the loss. A take profit closes a position when the price reaches a favourable target — above the entry for a long position, below the entry for a short — to secure a gain. Both are pre-set, automatic exit instructions, but they operate in opposite directions: the stop loss guards the downside, the take profit collects the upside. This article makes no claim that a take profit guarantees its target price in all conditions.

### Can a stop loss order fail to execute?

Yes, in the stop-limit case: if the price moves past the limit without trading at or better than it, the stop-limit order does not fill, and the position remains open and still exposed. A plain stop loss, converted to a market order on trigger, is sent for execution at the next available price, but even its execution depends on tradable liquidity being available. Platform behaviour outside trading hours also varies, so an order may not trigger as expected outside market hours — another reason to check your own order form.

### Is a stop loss the same as a limit order?

No. A limit order sets a price-or-better condition with no trigger conversion: it simply waits to trade at that price or better. A stop order waits for its trigger price to be reached and *then* converts — to a market order (plain stop loss) or to a limit order (stop-limit). The trigger-and-convert step is what makes a stop order different: a limit order is live from the start, while a stop order is dormant until triggered.

### How does a stop loss decide how much I can lose on a trade?

It sets the loss per share, and the total follows from the quantity. The entry-to-stop distance is the intended risk per share, and multiplying it by the quantity gives the intended total risk in rupees. In the carried example, the distance from Rs 1000 to Rs 900 is Rs 100 per share, and Rs 100 per share × 50 shares = Rs 5000 of intended loss for 50 shares. That intended figure is the maximum the stop aims for only if the fill lands at the stop price — under slippage (fill Rs 892) the actual loss is Rs 5400 for 50 shares, and under a gap (fill Rs 850) it is Rs 7500 for 50 shares. So a stop loss decides the intended loss, while the fill price decides the actual loss.
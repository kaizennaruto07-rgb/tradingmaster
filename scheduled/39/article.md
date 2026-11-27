---
title: "What Is Futures Trading? A Plain-English Guide for Indian Retail Traders"
description: "What is futures trading? A plain-English guide for Indian traders: futures contracts, margin, leverage, daily settlement and expiry, with a worked example."
meta_description: "What is futures trading? A plain-English guide for Indian traders: futures contracts, margin, leverage, daily settlement and expiry, with a worked example."
date: 2026-11-13
author: Kaizen
tag: "Indian derivatives · Futures"
keywords: ["what is futures trading", "futures trading meaning", "how does futures trading work", "futures margin explained", "futures leverage", "mark to market futures", "futures expiry and settlement"]
---

*By Kaizen · 13 November 2026 · Monks Of Market*

If you have heard the term "futures trading" in market chatter and wondered what is actually being bought and sold, you are not alone. A futures contract sounds complicated, but the core idea is simple — and the risks that come with it are worth understanding before any money is involved.

This guide explains futures from the ground up: what a contract is, how one contract works in rupees, what margin and leverage really mean, why your account moves every single day, and what happens at expiry. It is a teach, not a recommendation to trade. No return is promised anywhere in it, because none can be.

## What is futures trading, in simple words?

Futures trading is trading in standardised contracts that agree a price today for a transaction that will happen on a set future date.

A futures contract is a standardised, exchange-traded, legally binding agreement to buy or sell a specific quantity of an underlying asset at a predetermined price on a set future date, called the expiry. Both parties are obligated to transact at expiry — unless they close the position beforehand by taking an equal and opposite trade.

That last point matters. You do not have to hold a futures contract to expiry, and most retail traders do not. But while you hold it, the obligation is real, the daily price moves are real, and the margin requirement is real.

### Why standardisation is the whole point

Left to themselves, two traders would have to negotiate everything: which asset, how much of it, what quality, when it changes hands, and on what terms. That is slow, and every deal would be different.

An exchange removes that negotiation. It fixes the asset, the quantity (the contract size, often called the lot size), the quality and delivery terms, and the expiry. Because every contract for the same underlying and expiry is identical, contracts can be bought and sold freely — you can exit by selling what you bought, or buying back what you sold, without finding the original counterparty.

Exchange-traded futures are also centrally cleared. The exchange's clearing corporation stands between buyer and seller — it becomes the buyer to every seller and the seller to every buyer. That greatly reduces counterparty risk compared with a private deal, where you depend on the other party keeping their word. It does not erase risk altogether: margin requirements and default procedures sit behind that guarantee, and your own position can still lose money.

## One futures contract, taken apart

The clearest way to understand futures is to take one contract apart, piece by piece, and then carry that same contract through the rest of this guide.

**Important label: the contract below is hypothetical.** Its round numbers were chosen for teaching only. It is not a real contract traded on NSE or BSE, and its lot size, price and margin percentage must not be read as a live contract's terms. Real lot sizes and margin percentages are contract-specific, change over time, and must be checked in the current contract specification for the contract you are looking at.

Here are the parts of any futures contract:

- **Underlying:** the asset the contract is based on — for example, a market index, an individual stock, or a commodity.
- **Contract size (lot size):** how many units one contract covers. In our illustrative contract, that is 100 units.
- **Price:** the price agreed in the contract. In our illustrative contract, that is ₹1,000 per unit.
- **Expiry:** the future date on which the contract settles if it is still open.
- **Settlement type:** how the contract settles at expiry — in cash, or by physical delivery. The detail comes later in this guide; for now, just know there are only these two ways.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Anatomy of a futures contract showing underlying, contract size, price, expiry and settlement type." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Anatomy of a futures contract (illustrative contract)</text>
<text x="60" y="84" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Underlying</text>
<text x="620" y="84" text-anchor="end" fill="#f2f7f4" font-size="13">Index, stock or commodity</text>
<text x="60" y="128" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Contract size</text>
<text x="620" y="128" text-anchor="end" fill="#f2f7f4" font-size="13">100 units per contract</text>
<text x="60" y="172" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Price</text>
<text x="620" y="172" text-anchor="end" fill="#f2f7f4" font-size="13">₹1,000 per unit agreed</text>
<text x="60" y="216" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Expiry</text>
<text x="620" y="216" text-anchor="end" fill="#f2f7f4" font-size="13">Future settlement date</text>
<text x="60" y="260" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Settlement type</text>
<text x="620" y="260" text-anchor="end" fill="#f2f7f4" font-size="13">Cash or physical delivery</text>
<text x="340" y="316" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Notional value: 100 × ₹1,000 = ₹1,00,000</text>
</svg>
</figure>

### Contract size × price = notional value

Multiply the contract size by the price and you get the notional value — the full value of exposure one contract controls:

**100 units × ₹1,000 = ₹1,00,000 notional value**

This is the single most important number in futures trading. When you hold this illustrative contract, you control ₹1,00,000 of exposure — not the smaller amount you posted as margin. Every later section in this guide depends on that distinction.

### Tick size and tick value: the smallest move, in rupees

Every futures contract has a tick size: the smallest price movement it can make. The rupee value of that smallest movement is the tick value, and the formula is simple:

**Tick value = tick size × lot size**

No specific tick size for a real contract is stated here, because none was verified for a named contract in this guide's research. To show how the formula works, here is one clearly-labelled hypothetical illustration only: if the tick size were ₹0.05, the tick value would be ₹0.05 × 100 units = ₹5 per tick — that is the value of a single smallest move, and it is not a real contract's tick size. Do not confuse that ₹5 tick value with the per-rupee conversion that follows: every ₹1 move in price is worth 100 units × ₹1 = ₹100 on the position. A ₹10 move is therefore worth ₹1,000, and a ₹100 move is worth ₹10,000. Keep that conversion in mind — it is how the worked example below is calculated.

## Long and short, without jargon

There are only two sides to a futures contract:

- **Long:** you agree to buy at the agreed price. You profit if the price rises above that price, and lose if it falls below it.
- **Short:** you agree to sell at the agreed price. You profit if the price falls below that price, and lose if it rises above it.

Going short in futures needs no borrowing of the underlying. That surprises people who know short-selling in shares, where you borrow stock to sell it. In futures, going short is simply taking the sell side of the contract — a contractual obligation to sell at the agreed price, not a borrowed-asset sale.

That does not make shorting safe. A long position's loss is bounded in theory by the price falling to zero; a short position's loss grows as the price rises, with no such natural ceiling. Both sides carry the same daily settlement and margin mechanics described below.

## The worked example: what a small move does to your account

Now carry the illustrative contract through a trade. Suppose you go long — you agree to buy — at ₹1,000, with a lot size of 100 units. Your notional value is ₹1,00,000. Suppose, purely as a teaching assumption, that the margin you must post is 10% of notional value:

**Margin posted = 10% × ₹1,00,000 = ₹10,000**

All figures in this example are before brokerage, taxes and charges. Those charges are real and come on top, but no specific futures charge rate is quoted here, so the example keeps them out and says so plainly. The charge heads that apply on top, without any rates quoted here, are brokerage, exchange charges, STT, GST, stamp duty and SEBI fees.

**A small favourable move.** The price rises by ₹10, or 1%, to ₹1,010. Your gain is ₹10 × 100 units = **₹1,000**. Against the ₹10,000 margin you posted, that is a 10% gain on margin — from a 1% move in price.

**A small adverse move.** The price falls by ₹10, or 1%, to ₹990. Your loss is ₹10 × 100 units = **₹1,000**, debited from your account that same day through daily settlement (explained below). Against the ₹10,000 margin, that is a 10% loss on margin — again, from a 1% move in price.

**A larger adverse move.** The price falls by ₹100, or 10%, to ₹900. Your loss is ₹100 × 100 units = **₹10,000** — the entire margin you posted, before brokerage, taxes and charges.

Notice what has happened. The price moved 1%, and your margin moved 10%. The price moved 10%, and your margin was wiped out. That is not a quirk of this example. It is how futures work whenever margin is a fraction of notional value: profit and loss are calculated on the full ₹1,00,000, not on the ₹10,000 you deposited.

If you had gone short instead, every number above would simply reverse: a ₹10 fall would gain ₹1,000, and a ₹10 rise would lose ₹1,000 the same day.

Here are those same moves in one table, assuming the account holds only the margin posted, starting from the ₹10,000 margin posted. All figures are before brokerage, taxes and charges.

| Price move | P&L ₹ | P&L as % of ₹10,000 margin | Account balance after the day |
|---|---|---|---|
| Long, price rises ₹10 | +₹1,000 | +10% | ₹11,000 |
| Long, price falls ₹10 | −₹1,000 | −10% | ₹9,000 |
| Long, price falls ₹100 | −₹10,000 | −100% | ₹0 |
| Short, price falls ₹10 | +₹1,000 | +10% | ₹11,000 |
| Short, price rises ₹10 | −₹1,000 | −10% | ₹9,000 |

The general rule behind every row is: P&L = price move × lot size × number of lots. So with 2 lots instead of 1, every figure in the table doubles — a ₹10 move becomes ₹2,000, and a ₹100 fall becomes a ₹20,000 loss, before brokerage, taxes and charges.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 310" role="img" aria-label="Leverage illustrated: a small price move on a futures contract translates into a much larger percentage move on the margin posted." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Leverage: small price moves, large margin moves (₹10,000 margin)</text>
<text x="20" y="89" text-anchor="start" fill="#f2f7f4" font-size="12">Price +1% (to ₹1,010)</text>
<rect x="340" y="72" width="42" height="22" fill="#e8825a"/>
<text x="392.0" y="89" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">+10% → ₹11,000</text>
<text x="20" y="151" text-anchor="start" fill="#f2f7f4" font-size="12">Price −1% (to ₹990)</text>
<rect x="298" y="134" width="42" height="22" fill="#e8825a"/>
<text x="288.0" y="151" text-anchor="end" fill="#f2f7f4" font-size="12" font-weight="700">-10% → ₹9,000</text>
<text x="20" y="213" text-anchor="start" fill="#f2f7f4" font-size="12">Price −10% (to ₹900)</text>
<rect x="-80" y="196" width="420" height="22" fill="#e8825a"/>
<text x="-90.0" y="213" text-anchor="end" fill="#f2f7f4" font-size="12" font-weight="700">-100% → ₹0 — margin wiped out</text>
<text x="340" y="290" text-anchor="middle" fill="#92a59c" font-size="12">P&L is computed on the full ₹1,00,000 notional, not the ₹10,000 margin</text>
</svg>
</figure>

## Margin explained: a performance bond, not a down payment

Margin is the money you must keep deposited to hold a futures position. Think of it as a performance bond — a good-faith deposit that shows both parties can fulfil their obligations — not as a down payment towards buying the asset, and not as a cap on your losses.

There are two levels to understand:

- **Initial margin:** the amount that must be deposited when you enter the contract. In Indian equity derivatives, initial margin is made up of two parts, explained here once in plain English: SPAN margin, which is calculated from the risk of the position, plus exposure margin, an additional buffer. Neither is a fee — both are deposits held against your position, and both can be called upon if the position moves against you.
- **Maintenance margin:** a lower level below which your account must not fall. If daily losses push your account below that level, you get a **margin call**: you must top up your account (this top-up is called variation margin) to bring it back up, or reduce or close the position. If you do neither, your broker may close the position for you.

Textbooks call that lower level maintenance margin. In Indian retail practice, brokers commonly frame the requirement as staying above the initial (SPAN + exposure) margin — either way, the action is identical: top up, reduce, or be closed. No specific Indian maintenance-margin percentage is asserted here, and the call can arrive on an ordinary bad day, not only in a crash.

**The warning that belongs in this section, not in a footnote: you can lose more than the margin you posted.** Because profit and loss are calculated on the full notional value, a move larger than your margin percentage wipes out the margin and keeps going. In our illustrative contract, a ₹150 fall (15%) would mean a loss of ₹150 × 100 = ₹15,000 — ₹5,000 more than the ₹10,000 margin posted, before brokerage, taxes and charges. You would owe that extra amount. Margin is a deposit, not a maximum loss.

## Leverage is room for error, not a return multiplier

Leverage is often sold as a way to multiply returns. That framing is backwards, and it is dangerous.

Leverage in futures follows directly from contract size: you control a large notional value with a smaller deposit, so a small price move becomes a proportionally larger move on your deposit, in either direction. In our example, 10% illustrative margin means a 1% price move is roughly a 10% move on margin. The same arithmetic that turns a ₹1,000 gain into a 10% gain on margin turns a ₹1,000 loss into a 10% loss on margin, on the same day.

A better way to think about leverage is as **room for error**. Higher leverage does not decide how much you make — the price move decides that. Higher leverage decides how little adverse movement you can survive before a margin call, a forced closure, or a loss beyond your deposit. The more leveraged the position, the smaller the move that puts it in trouble.

That is also why the margin percentage in any real contract is not a fixed, universal number. It varies by contract and by volatility, and it changes over time. The 10% in this guide's example is a teaching assumption for one hypothetical contract, not a claim about any real contract's margin.

## Mark-to-market: why gains and losses hit your account every day

This is the mechanic beginners most misunderstand, and it is the reason futures feel so different from holding shares.

When you hold shares, a fall in price is usually an unrealised loss on paper until you sell. A futures position does not work that way. It is **marked to market every trading day**: at the end of each trading day, the position is revalued at that day's daily settlement price, gains are credited to your account and losses are debited from it, that very day. The next day starts from the new settlement price.

The daily calculation is:

**(Today's daily settlement price − prior day's settlement price) × lot size × number of lots**

That result is positive for a long position on a rise and negative on a fall, and reversed for a short position. On non-expiry days, the daily settlement price for futures is generally the volume-weighted average price of the last 30 minutes of trading.

The consequence is blunt: losses cannot be "held and hoped" in silence. Every adverse day takes cash out of your account that day, and a margin call can follow that day too. A position that cannot survive normal daily movement will be closed by margin mechanics long before the trader's longer-term view is proven right or wrong. Before entering a futures position, the honest question is not only "will I be right eventually?" but "can my account survive the daily moves along the way?"

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Daily mark-to-market settlement flow for a futures position, showing gains credited and losses debited each trading day." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Daily mark-to-market settlement — the flow</text>
<text x="340" y="66" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">1 · Settlement price set each day</text>
<text x="340" y="88" text-anchor="middle" fill="#92a59c" font-size="12">Volume-weighted average price of the last 30 minutes</text>
<text x="340" y="112" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="134" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">2 · Gains credited, losses debited</text>
<text x="340" y="156" text-anchor="middle" fill="#92a59c" font-size="12">Cash moves the same day — no silent paper losses</text>
<text x="340" y="180" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="202" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">3 · Next day starts at the new price</text>
<text x="340" y="224" text-anchor="middle" fill="#92a59c" font-size="12">Every day revalues from the latest settlement price</text>
<text x="340" y="248" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="270" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">4 · Margin call if the account falls too low</text>
<text x="340" y="292" text-anchor="middle" fill="#92a59c" font-size="12">Top up or reduce risk, or the position is closed</text>
</svg>
</figure>

## The lifecycle in order: open, daily settlement, expiry

Here is the full lifecycle of a futures position, in order, using our illustrative long position as the thread:

1. **Open.** You agree to buy at ₹1,000, with 100 units per contract, and post the required initial margin — ₹10,000 in the hypothetical example. From this moment, you carry ₹1,00,000 of exposure.
2. **Daily settlement.** Each trading day, the position is marked to market. A ₹10 rise credits ₹1,000; a ₹10 fall debits ₹1,000. Your account balance moves daily, and margin calls arrive if it falls too low.
3. **Near expiry.** As expiry approaches, you face a choice: close, roll, or hold to expiry and accept whichever settlement type applies. This is the moment to decide deliberately, not to drift into expiry by accident.
4. **Expiry.** If the position is still open, it settles — in cash or by physical delivery, depending on the underlying, as explained in the cash-settlement section below.

Indian equity derivatives trade in a maximum three-month cycle: at any time there are near-month, next-month and far-month contracts, and new contracts are introduced on the trading day following near-month expiry. That is what makes rollover possible — there is always a next expiry to roll into.

On expiry timing, note a recent change that older articles get wrong. **Since 1 September 2025, NSE equity derivatives expire on the last Tuesday of the expiry month** (or the previous trading day, if that Tuesday is a holiday), **and BSE contracts expire on Thursdays.** The old "last Thursday" rule for NSE no longer applies to new contracts. Futures themselves are monthly contracts — do not expect weekly futures expiries. This guide covers the expiry weekday and the settlement type; for expiry-day timing for a specific contract, check its current contract specification.

### Why most retail traders close before expiry

Most retail futures traders close a position before expiry with an equal opposite trade: a long sells the same contract, a short buys it back. Closing ends the obligation entirely, avoiding delivery complications and final-settlement obligations. This is stated here as general market practice, not as a measured statistic — no percentage is claimed.

### Rollover: keeping the exposure, paying the spread

Rollover means closing the expiring contract and opening a position in the next expiry contract, to keep the same market exposure going. It is not free, and it is not automatic. You must actively place both trades, you pay the price gap — the spread — between the two expiries, whatever it happens to be at that moment, plus transaction costs on both legs.

As an illustration only, on the same hypothetical contract: if the near-month contract were ₹1,000 and the next-month contract were ₹1,005, the spread would be ₹5 × 100 units = ₹500 per lot to roll, before brokerage, taxes and charges — and charges would still apply on both legs, on top of that spread. That ₹500 is illustrative, not a market quote.

Weigh rollover against closing outright honestly. Rolling keeps your exposure but pays the spread and fresh charges, and the margin calls continue in the new contract. Closing ends the exposure and stops further margin calls. Rolling makes sense only if you still want the exposure and accept the cost of carrying it into the next month; it is not a way to avoid a loss, and it does not reset one.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 270" role="img" aria-label="Futures position lifecycle timeline from opening through daily settlement to closing, rollover or expiry." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Futures position lifecycle — open to expiry</text>
<line x1="70" y1="120" x2="610" y2="120" stroke="#92a59c" stroke-width="2"/>
<circle cx="100" cy="120" r="9" fill="#e8825a"/>
<text x="100" y="160" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Open</text>
<text x="100" y="182" text-anchor="middle" fill="#f2f7f4" font-size="11">Agree at ₹1,000,</text>
<text x="100" y="200" text-anchor="middle" fill="#f2f7f4" font-size="11">post ₹10,000 margin</text>
<circle cx="260" cy="120" r="9" fill="#e8825a"/>
<text x="260" y="160" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Daily settlement</text>
<text x="260" y="182" text-anchor="middle" fill="#f2f7f4" font-size="11">Gains credited,</text>
<text x="260" y="200" text-anchor="middle" fill="#f2f7f4" font-size="11">losses debited</text>
<circle cx="420" cy="120" r="9" fill="#e8825a"/>
<text x="420" y="160" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Near expiry</text>
<text x="420" y="182" text-anchor="middle" fill="#f2f7f4" font-size="11">Decide deliberately:</text>
<text x="420" y="200" text-anchor="middle" fill="#f2f7f4" font-size="11">close, roll or hold</text>
<circle cx="580" cy="120" r="9" fill="#e8825a"/>
<text x="580" y="160" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Expiry</text>
<text x="580" y="182" text-anchor="middle" fill="#f2f7f4" font-size="11">Close, rollover,</text>
<text x="580" y="200" text-anchor="middle" fill="#f2f7f4" font-size="11">or settlement</text>
<text x="340" y="250" text-anchor="middle" fill="#92a59c" font-size="12">Most retail traders close before expiry — never drift into it</text>
</svg>
</figure>

## Cash settlement vs physical delivery: what actually happens at expiry

If a futures position is still open at expiry, it settles in one of two ways — and which one applies depends on the underlying. The settlement type is determined by the underlying and is not chosen by the trader at expiry.

- **Cash settlement:** no asset changes hands. Only the cash difference between the contract price and the final settlement price is paid or received. This is how **index futures** are settled in India.
- **Physical delivery:** the actual asset changes hands. A long position held to expiry takes delivery of the underlying shares, and a short position must deliver them, with the funds and securities obligations following the cash-segment settlement mechanism. This is how **stock futures** are settled in India.

Futures have no exercise concept at all — there is no choice to exercise or not, as there is with some other instruments. The obligation at expiry is automatic. That is exactly why most retail traders close or roll stock futures before expiry: holding to expiry means being ready to take or make delivery of shares, with the full funds or securities to match. If you ever consider holding a stock future to expiry, check the contract specification for that specific underlying first, and be sure you can meet the delivery obligation.

## The three families: index, stock and commodity futures

For Indian readers, futures fall into three families:

- **Index futures:** the underlying is a market index, such as the Nifty 50 or the Sensex. They are cash-settled, as described above, and they give exposure to the broad market without owning any individual share.
- **Stock futures:** the underlying is an individual listed stock. They are physically settled if held to expiry, as described above.
- **Commodity futures:** the underlyings are metals, energy and agricultural products, traded on commodity exchanges such as MCX. Their delivery mechanics are their own and are out of scope for this guide — the family is named here so you recognise it, not taught in detail.

Currency futures also exist, but they are not taught in this guide.

## What futures are used for: hedging vs speculation

Futures exist for two purposes, and both deserve to be visible:

- **Hedging:** locking in a price for a real exposure. A producer who will sell a commodity in three months, or a portfolio holder worried about a market fall, can use futures to offset price risk — fixing today, in effect, a price for a transaction they already expect to make. In plain English, the sketch is this: the holder already faces a price — the sale price they will receive, or the value of a portfolio they already own — and takes the opposite futures position to lock that price in, so a fall in the market price is offset by a gain on the futures position (and, symmetrically, a rise is offset by a loss on it). What is offset is the price move on the existing exposure, not a new bet.
- **Speculation:** taking a directional bet on price movement, including index and commodity exposure without owning the underlying. This is what most retail futures trading is, in practice.

Speculation is not presented here as the default or recommended purpose. It is simply one of the two uses, and it is the use that carries the full leverage, daily-settlement and loss-beyond-margin risks described above, with no underlying business exposure to offset them. A hedger uses futures to reduce an existing risk; a speculator uses them to take on a new one. Knowing which one you are changes how you should judge the trade.

## Futures vs forwards: one paragraph, and no more

A forward is a private, customised, over-the-counter agreement between two parties, with terms tailored to them, no exchange trading, no daily settlement, and bilateral counterparty risk — the party on the other side may fail to honour it; a futures contract is the exchange-traded, standardised version of the same basic idea, centrally cleared through a clearinghouse that stands between buyer and seller, and settled daily, which is why strangers can trade futures with each other.

## Futures vs options: the one-paragraph boundary

The boundary is short: a futures contract obligates both parties to transact at expiry unless they close beforehand, while an option gives its buyer a choice — a right, not an obligation — for a premium. That is the whole distinction this guide needs; the full comparison, including which instrument suits which situation, belongs to the companion piece, Options vs Futures Trading. The companion beginners piece, Options vs Futures for Beginners, is not yet built.

## Perpetuals are not dated futures

You may also hear about crypto perpetual swaps, sometimes called perpetual futures. They are not standard dated futures, and the distinction matters. A perpetual swap has no expiry date, and instead of settling on a fixed date it uses periodic funding payments between long and short holders to anchor its price to the spot market. Because there is no expiry and no fixed settlement date, the mechanics, risks and costs are different from the dated, exchange-traded futures this guide teaches. Do not carry assumptions from one to the other.

## The risks and limitations of futures trading

Futures trading carries risks that should be stated plainly, together, before anyone considers trading:

- **Leverage risk:** small price moves become large moves on your margin, in either direction.
- **Loss beyond margin:** as shown in the worked example, losses can exceed the margin posted, and you can owe more than you deposited.
- **Daily margin-call and forced-closure risk:** adverse daily moves can trigger margin calls or forced closure even if your longer-term view would eventually have been right.
- **Expiry and delivery risk:** a stock future held to expiry means taking or making physical delivery, with the funds or securities to match.
- **Total loss of capital:** in an adverse move, you can lose your entire margin and more.

No discussion in this guide implies a guaranteed profit, and no strategy can remove these risks. They are inherent in the instrument itself, not a flaw in how any particular trader uses it.

## Who futures are for — and who should wait

Futures suit two kinds of participant, and the distinction is worth being honest about.

A **hedger** has a real exposure to protect — a price they need to lock in, a portfolio they need to shield. For them, futures reduce an existing risk, and the margin and daily settlement are the cost of that protection.

A **speculator** has no underlying exposure and is taking on price risk deliberately, for profit. That can be a legitimate choice, but it demands three things without exception: time to monitor the position daily, because settlement and margin calls arrive daily; margin discipline, meaning cash available to meet calls without panic; and a defined risk plan decided before entry — how much adverse movement you can survive, and at what point you exit.

Before entry, ask yourself these three questions, in rupees, not in general terms:

1. What adverse ₹ move can my account survive — how many rupees down, after that day's settlement, before I am in margin-call trouble?
2. At what price, or after what ₹ move, do I exit, no matter what I still believe about the longer term?
3. What cash do I hold ready, right now, to meet a margin call that same day?

If you cannot answer all three, the plain verdict is: **not yet**. Paper-trade and backtest first — the live paper-trading and backtesting articles on this site explain that practice path, without re-teaching it. The live position-sizing article and the live Position Size Calculator and Risk of Ruin Calculator tools are the next places to look once you do have a plan; sizing and ruin are not re-taught in this guide. Futures reward preparation and punish improvisation, and the cheapest tuition is practice that costs nothing.

Practical next step: before trading any real contract, check the exchange's current contract specification/master file for that specific underlying — for its lot size, margin and settlement type.

## Frequently asked questions

### What is futures trading in simple words?

Futures trading is trading in standardised contracts that agree a price today for a transaction on a set future date. You are not buying the asset itself on day one — you are entering a binding agreement about its future price, and your account moves with the price every day until you close, roll, or reach expiry.

### What is a futures contract?

A futures contract is a standardised, exchange-traded, legally binding agreement to buy or sell a specific quantity of an underlying asset at a predetermined price on a set future date. The exchange fixes the asset, quantity, quality and delivery terms and expiry, and both parties are obligated to transact at expiry unless they close the position beforehand.

### How does futures trading work?

You open a position — long if you agree to buy, short if you agree to sell — and post initial margin. Each trading day the position is marked to market at the daily settlement price, with gains credited and losses debited that day. You then close before expiry with an equal opposite trade, roll into the next expiry, or hold to expiry and settle in cash or by physical delivery, depending on the underlying.

### What is margin in futures trading?

Margin is a performance bond, not a down payment and not a loss limit. Initial margin is deposited on entry — in Indian equity derivatives, SPAN margin plus exposure margin — and if daily losses push your account below the maintenance level, a margin call requires you to top up or reduce or close the position, failing which your broker may close it.

### Can you lose more than your margin in futures trading?

Yes. Profit and loss are calculated on the full notional value, not on the margin. In this guide's illustrative contract, a ₹100 fall wipes out the entire ₹10,000 margin, and a ₹150 fall means a ₹15,000 loss — ₹5,000 more than the margin posted, before brokerage, taxes and charges.

### What is mark-to-market settlement in futures?

Mark-to-market settlement is the daily revaluation of your position at the daily settlement price. Gains are credited and losses debited to your account every trading day the position is open, and the next day starts from the new settlement price. Losses therefore arrive daily, not only at expiry.

### What happens when a futures contract expires?

If the position is still open at expiry, it settles automatically: index futures are cash-settled, with only the cash difference paid or received, while stock futures are physically settled, with the long taking delivery of shares and the short delivering them. Most retail traders close or roll before expiry to avoid this. In India, NSE monthly derivatives expire on the last Tuesday of the month since 1 September 2025, and BSE contracts expire on Thursdays.

### What is rollover in futures trading?

Rollover is closing an expiring contract and opening a position in the next expiry contract to keep the same exposure. It is not free and not automatic: you place both trades yourself, pay the price gap (spread) between the two expiries, and pay transaction costs on both legs.

### Are futures cash-settled or physically settled?

It depends on the underlying. In India, index futures are cash-settled and stock futures held to expiry are physically settled. Check the contract specification for the specific underlying before holding any future to expiry.

### What are index futures and stock futures?

Index futures are futures whose underlying is a market index, such as the Nifty 50 or the Sensex. They give exposure to the broad market without owning any individual share, and in India they are cash-settled at expiry, with only the cash difference paid or received. Stock futures are futures whose underlying is an individual listed stock, and in India they are physically settled if held to expiry — the long takes delivery of the shares and the short delivers them. The settlement type follows the underlying; it is not chosen by the trader at expiry.

### What is the difference between futures and forwards?

A forward is a private, customised, over-the-counter agreement with bilateral counterparty risk and no daily settlement, while a futures contract is exchange-traded, standardised, centrally cleared through a clearinghouse, and settled daily.

### What is the difference between futures and options?

A futures contract obligates both parties to transact at expiry unless they close beforehand, while an option gives its buyer a choice — a right, not an obligation — for a premium. The full comparison belongs to the companion piece, Options vs Futures Trading.

### Do you need a lot of capital to trade futures?

Margin is only a fraction of the notional value, so the deposit to open a position can look small — but the capital that matters is what the position's daily moves and margin calls can demand. A small margin does not mean small risk: in the illustrative contract, a 1% adverse move costs ₹1,000 in a single day, and a larger move can exceed the margin entirely. No universal margin percentage applies to all contracts, so check the current specification for any real contract.

### Is futures trading risky for beginners?

Yes, it is high-risk for a beginner without a defined risk plan, because of leverage, daily settlement, margin calls and the possibility of losing more than the margin posted. The honest starting point is to paper-trade and backtest first, as described in the live paper-trading and backtesting articles on this site, and only consider live futures once you can state in advance how much adverse movement you can survive and where you will exit.
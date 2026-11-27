---
title: "How to Place Your First Option Trade"
description: "Place your first option trade step by step — approval, one contract, the order ticket field by field, and the exit plan — worked on one carried trade."
meta_description: "Place your first option trade step by step — approval, one contract, the order ticket field by field, and the exit plan — worked on one carried trade."
date: 2026-11-26
author: Kaizen
tag: "Options trading · Beginners"
keywords: ["how to place your first option trade", "how to buy your first option", "first option trade for beginners", "how to buy a call option", "how to place an option trade in India", "option trading approval", "F&O activation", "paper trading options", "buy call option step by step", "limit order options", "option order types", "how much capital for options trading", "one lot option", "at the money option for beginners", "option expiry for beginners", "how to exit an option trade"]
---

*By Kaizen · 26 November 2026 · Monks Of Market*

> **Educational disclaimer:** This article is for education only and is not investment advice. The author is not SEBI-registered. Options trading carries a high risk of loss — never trade with money you can't afford to lose.

## A First Trade Is a Rehearsal With Real Money

An option is a contract that gives its buyer the right, but not the obligation, to buy or sell something at a fixed price — the strike — before a fixed date — the expiry — for a price called the premium. That is the whole definition, and this guide assumes you already know it; the full version is in *What Is an Option?* This guide is about what happens after the definitions: actually placing the trade.

Here is the one idea that reframes the whole thing: **a first trade is not a profit attempt. It is a rehearsal with real money.** One small, defined-risk buy, executed exactly as planned, where success means following the plan from start to finish — not making money. If you judge your first trade by whether it profits, you will learn the wrong lesson either way: a lucky win teaches you that guessing works, and an unlucky loss teaches you that trading is rigged. Neither lesson is true. Judge it by whether you did what you said you would do, and the trade teaches you something useful whatever the outcome.

That is why this guide does not stop at a list of steps. It walks one trade — one view, one contract, one order ticket, one exit plan — from the first click to the close. Every number in it is illustrative, a teaching example, not a market claim. By the end you will know exactly what to do, in what order, and what each field on the ticket is for.

## Before You Click Anything

A first trade is prepared before it is placed. Four things must be true before your money touches an option, and none of them is optional.

**First, options trading is approved on your account.** Buying options needs the futures-and-options segment activated on your trading account, which usually means uploading income proof to your broker. Check that the approval covers buying options before anything else — do not discover it is missing at the moment you try to place the order. How to activate it is in your broker's own account settings; the point here is that it must be done and confirmed first.

**Second, the account is funded and the trade's risk budget is set.** Decide before you look at any contract how much this one trade is allowed to lose. The widely-quoted rule is never more than 2% of your capital on a single trade — stated here as the widely-quoted rule, with the actual method in the guide on [position sizing](/articles/position-sizing/). The risk budget comes first; the contract is chosen to fit it, never the other way round.

**Third, the exact trade is paper-traded first.** Execute the trade you plan — the same contract, the same order type, the same exit lines — in a practice account, watch it for a few days, and get comfortable with how an option moves differently from a stock. Every honest guide says the same thing: the mechanics should feel boring before real money touches them. The guide on [paper trading versus real trading](/articles/paper-trading-vs-real-trading/) covers how to practise so the practice actually transfers.

**Fourth, the exit is written down before the entry.** Three lines, on paper, before you click buy: the price where you take profits, the price or event where the thesis is wrong, and the date you will close if nothing happens. A trade entered without these three lines is not a plan; it is a hope with a premium attached. You will meet these three lines again below, filled in with real numbers from the carried trade.

Nothing here is a re-teach. The costs of a trade are owned by the guide on [options trading charges in India](/articles/options-trading-charges-india/), and why defined risk matters — why a loss that is capped keeps a bad trade survivable — is in the guide on [risk of ruin](/articles/risk-of-ruin-trading/). Read them before your first real trade, not after it.

## The Carried Trade: One View, One Contract, One Exit Plan

Every number in this guide comes from one illustrative example — a teaching example, not a market claim. The index level is 25,000, the same level used in the earlier guides in this cluster, so the cluster reads consistently.

An index trades at **25,000**. The view: mildly bullish over the next few weeks — you expect it to drift up, not rocket. The trade: buy 1 lot of the **25,000 CE** (the at-the-money call), expiry a few weeks out, at a premium of **₹120 per unit** (illustrative). That is the whole trade. One contract, one lot, one direction.

The most you can lose on this trade is the premium you paid, plus charges. That is the whole reason the first trade is a buy: the loss is capped at the premium. But capped is not small — the premium can go to zero, and it often does on a first trade. Buying does not make losing safe; it makes losing bounded.

The breakeven at expiry is the strike plus the premium per unit: **25,000 + 120 = 25,120**. Below 25,120 at expiry, the trade loses money; above it, it makes money; exactly at 25,120, it breaks even before charges. That one line of arithmetic is the entire payoff of the trade, and it is worth doing by hand before you place it.

The exit plan, written before entry, has three lines:

- **Profit line: exit if the premium reaches ₹180.** That is a 50% gain on the ₹120 premium paid (₹120 × 1.5 = ₹180).
- **Wrong line: exit if the premium falls to ₹60.** That is a 50% loss of the premium paid (₹120 × 0.5 = ₹60).
- **Time line: close the position well before expiry**, regardless of where the premium sits. The final days are when time decay is fastest, and a first trade has no business in them.

The total cash outlay is the premium per unit multiplied by the lot size. No lot-size number appears in this guide — lot sizes are contested in live sources right now, and a wrong number here would cost a reader real money. Read the total on the order ticket before confirming, and confirm it is the amount you meant to pay. The ticket shows it; this guide will show you where to look.

The measuring tools traders use to describe how an option's price moves — the Greeks — are explained elsewhere; you do not need them to place a first trade.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 360" role="img" aria-label="Carried trade summary: index 25,000, mildly bullish view, buy 1 lot of the 25,000 CE, expiry a few weeks out, premium Rs 120 per unit, breakeven 25,120, profit line Rs 180, wrong line Rs 60, close well before expiry" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The carried trade — one view, one contract</text>
<text x="40" y="78" text-anchor="start" fill="#92a59c" font-size="13" font-weight="700">Index</text>
<text x="680" y="78" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">25,000</text>
<text x="40" y="118" text-anchor="start" fill="#92a59c" font-size="13" font-weight="700">View</text>
<text x="680" y="118" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Mildly bullish, next few weeks</text>
<text x="40" y="158" text-anchor="start" fill="#92a59c" font-size="13" font-weight="700">Contract</text>
<text x="680" y="158" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Buy 1 lot of the 25,000 CE</text>
<text x="40" y="198" text-anchor="start" fill="#92a59c" font-size="13" font-weight="700">Expiry</text>
<text x="680" y="198" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">A few weeks out</text>
<text x="40" y="238" text-anchor="start" fill="#92a59c" font-size="13" font-weight="700">Premium</text>
<text x="680" y="238" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">₹120 per unit (illustrative)</text>
<text x="40" y="278" text-anchor="start" fill="#92a59c" font-size="13" font-weight="700">Breakeven</text>
<text x="680" y="278" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">25,120</text>
<text x="40" y="318" text-anchor="start" fill="#92a59c" font-size="13" font-weight="700">Exit plan</text>
<text x="680" y="318" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">₹180 profit · ₹60 wrong · close early</text>
</svg>
</figure>

## The Ten Steps, in Order

### Steps 1–3: Approval, Funding, and a Practice Run

**Step 1 — Confirm approval.** The futures-and-options segment is activated on your account and the approval covers buying options. If it is not, stop here. No trade is placed on an unapproved account, and no shortcut around the approval exists.

**Step 2 — Fund the account and set the risk budget.** The account holds the money for this trade plus a cushion — survival needs enough left over that a few losing first trades do not end the experiment. The widely-quoted rule is never more than 2% of capital risked on a single trade; the method is in the guide on [position sizing](/articles/position-sizing/). Decide the budget, then choose a contract that fits it.

**Step 3 — Paper-trade the exact trade first.** Place the same trade — the 25,000 CE, one lot, limit order, the same three exit lines — in a practice account and watch it for a few days. You are not testing whether the trade wins. You are testing whether you can follow the plan: enter at the price you meant, watch the premium move without panicking, exit on a line instead of on a feeling. The guide on [paper trading versus real trading](/articles/paper-trading-vs-real-trading/) explains how to practise so it transfers. Only when the practice run felt boring does the real trade begin.

### Steps 4–6: The View, the Direction, and the Contract

**Step 4 — Pick the view, on an underlying you already follow.** A first trade is placed on an index you watch, not on a random stock you heard about this morning. The view in the carried trade is mildly bullish over the next few weeks. If you have no view, you have no trade — "I feel like doing something" is not a view, and it is the most expensive sentence in trading.

**Step 5 — Choose buy a call or buy a put.** Bullish means buy a call; bearish means buy a put. That is the whole choice, and it is the only choice this guide teaches: the first trade is a buy. Selling — writing — options is explicitly not a first trade. Selling needs margin, its loss is not capped the way a buyer's is, and it is not a beginner's trade. One paragraph is all selling gets here: it exists, it is not for your first trade, and there is no how-to for it in this guide.

**Step 6 — Find the contract on the chain.** Open the option chain for the index, find the expiry a few weeks out, and find the 25,000 strike row. Read the bid and the ask on that row — the bid is what buyers will pay you, the ask is what sellers want from you. The full read of a chain, every column and what it means, belongs to the guide named *How to Read an Option Chain*. Here the chain is only the place you go to pick the contract.

### Steps 7–8: The Strike and the Expiry

**Step 7 — Pick the strike near the money.** At-the-money is the balanced beginner choice, which is why the carried trade buys the 25,000 CE with the index at 25,000. One strike out-of-the-money is cheaper and riskier — you pay less, but the index has further to travel before the option is worth anything. Never chase the cheapest premium on the chain: the far out-of-the-money option that costs almost nothing has the lowest probability of finishing profitable, usually with a wide spread on top. Cheap is not value; it is a lottery ticket with a bid-ask spread.

**Step 8 — Pick an expiry a few weeks out.** The standard beginner guidance is 30–45 days out — one to three months rather than days — and close well before expiration. Short-dated options lose value fastest, and the nearest expiry decays fastest of all, so the nearest or current-week expiry is never the right choice for a first trade. Any guide that recommends the current-week expiry for a beginner has the reasoning backwards: the option that expires soonest is the one whose value melts fastest. The carried trade uses an expiry a few weeks out and closes well before it arrives. No expiry weekday is named in this guide — expiry days change, and the current day for any contract is on the exchange's official contract-specification page.

### Steps 9–10: The Spread, the Ticket, and the Exit

**Step 9 — Check the bid-ask spread, then place a limit order.** The spread is the gap between the bid and the ask, and it is a cost on every entry and exit: you buy at the ask and sell at the bid. A tight spread means the contract is liquid and easy to enter and exit; a wide spread means walk away and pick a different contract. Then place a **limit order** at or near the mid price between bid and ask — never a market order. Option spreads are wider than stock spreads, and a market order fills at whatever the other side is asking, which is how beginners overpay before the trade has even begun. If the limit order does not fill in a few minutes, adjust it a little toward the natural side; do not switch to a market order out of impatience.

**Step 10 — Fill in the ticket, check it field by field, confirm, then manage the plan.** The ticket is the next section, shown field by field, because the ticket is where costly mistakes happen. After it is filled, watch the plan, not the ticker: close on the profit line, the wrong line, or the time line — whichever comes first — well before expiry. A first trade that is managed to its plan is a success even if it loses money; a first trade that is held past its lines hoping for a recovery is a failure even if it wins.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 420" role="img" aria-label="Ten steps in order, grouped as preparation (steps 1 to 3), the trade (steps 4 to 6), the contract (steps 7 to 8), and the order (steps 9 to 10), with the carried trade's choice under each step" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Ten steps, in order</text>
<rect x="20" y="55" width="680" height="78" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="360" y="85" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">PREPARATION · Steps 1–3</text>
<text x="360" y="113" text-anchor="middle" fill="#92a59c" font-size="12">Confirm approval · fund and set the risk budget · paper-trade the exact trade</text>
<rect x="20" y="145" width="680" height="78" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="360" y="175" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">THE TRADE · Steps 4–6</text>
<text x="360" y="203" text-anchor="middle" fill="#92a59c" font-size="12">Pick a view · buy a call if bullish, a put if bearish · find the contract on the chain</text>
<rect x="20" y="235" width="680" height="78" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="360" y="265" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">THE CONTRACT · Steps 7–8</text>
<text x="360" y="293" text-anchor="middle" fill="#92a59c" font-size="12">Strike near the money · expiry a few weeks out — never the nearest</text>
<rect x="20" y="325" width="680" height="78" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="360" y="355" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">THE ORDER · Steps 9–10</text>
<text x="360" y="383" text-anchor="middle" fill="#92a59c" font-size="12">Check the spread, limit order at the mid · fill the ticket, check it, manage the plan</text>
</svg>
</figure>

## The Order Ticket, Field by Field

This is the practical core of the guide. The carried trade's ticket, with each field labelled and the one mistake that field catches:

| Field | What it must say | The mistake it catches |
|---|---|---|
| Transaction type | Buy to open | Selling by accident, or adding to a position you meant to close |
| Option type | Call (CE) | Buying a put when your view is bullish |
| Underlying | The index you follow | Trading an index you have never watched |
| Strike | 25,000 | The wrong strike — one row up or down on the chain |
| Expiry | A few weeks out | The nearest expiry, which decays fastest |
| Quantity | 1 lot | Ordering more than one lot on a first trade |
| Order type | Limit | A market order, which overpays on a wide spread |
| Limit price | ₹120 per unit (illustrative), at or near the mid price | Chasing the ask, or typing the wrong price entirely |
| Total | Premium per unit × lot size — read it on the ticket | Confirming a total you never actually checked |

Read the ticket twice before confirming: once for the fields, once for the total. The total is the amount that leaves your account. If it is not the amount you meant to pay, stop — do not confirm and hope. A wrong strike, a wrong expiry, and a market order are the three most common first-trade mistakes, and all three are caught on this ticket, in this order, before any money moves.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 500" role="img" aria-label="Order ticket field by field: transaction type, option type, underlying, strike, expiry, quantity, order type, limit price, and total — each with what it must say and the mistake it catches" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The order ticket, field by field</text>
<text x="20" y="58" text-anchor="start" fill="#92a59c" font-size="11" font-weight="700">FIELD</text>
<text x="200" y="58" text-anchor="start" fill="#92a59c" font-size="11" font-weight="700">MUST SAY</text>
<text x="430" y="58" text-anchor="start" fill="#92a59c" font-size="11" font-weight="700">CATCHES</text>
<text x="20" y="88" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Transaction type</text>
<text x="200" y="88" text-anchor="start" fill="#f2f7f4" font-size="12">Buy to open</text>
<text x="430" y="88" text-anchor="start" fill="#92a59c" font-size="12">Selling by accident</text>
<text x="20" y="130" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Option type</text>
<text x="200" y="130" text-anchor="start" fill="#f2f7f4" font-size="12">Call (CE)</text>
<text x="430" y="130" text-anchor="start" fill="#92a59c" font-size="12">Buying a put on a bullish view</text>
<text x="20" y="172" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Underlying</text>
<text x="200" y="172" text-anchor="start" fill="#f2f7f4" font-size="12">The index you follow</text>
<text x="430" y="172" text-anchor="start" fill="#92a59c" font-size="12">An index never watched</text>
<text x="20" y="214" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Strike</text>
<text x="200" y="214" text-anchor="start" fill="#f2f7f4" font-size="12">25,000</text>
<text x="430" y="214" text-anchor="start" fill="#92a59c" font-size="12">One row up or down</text>
<text x="20" y="256" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Expiry</text>
<text x="200" y="256" text-anchor="start" fill="#f2f7f4" font-size="12">A few weeks out</text>
<text x="430" y="256" text-anchor="start" fill="#92a59c" font-size="12">The nearest expiry</text>
<text x="20" y="298" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Quantity</text>
<text x="200" y="298" text-anchor="start" fill="#f2f7f4" font-size="12">1 lot</text>
<text x="430" y="298" text-anchor="start" fill="#92a59c" font-size="12">More than one lot</text>
<text x="20" y="340" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Order type</text>
<text x="200" y="340" text-anchor="start" fill="#f2f7f4" font-size="12">Limit</text>
<text x="430" y="340" text-anchor="start" fill="#92a59c" font-size="12">A market order overpays</text>
<text x="20" y="382" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Limit price</text>
<text x="200" y="382" text-anchor="start" fill="#f2f7f4" font-size="12">₹120 per unit</text>
<text x="430" y="382" text-anchor="start" fill="#92a59c" font-size="12">Chasing the ask</text>
<text x="20" y="424" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Total</text>
<text x="200" y="424" text-anchor="start" fill="#f2f7f4" font-size="12">Premium × lot size — read it</text>
<text x="430" y="424" text-anchor="start" fill="#92a59c" font-size="12">Confirming unchecked</text>
<text x="360" y="478" text-anchor="middle" fill="#92a59c" font-size="12">Read the ticket twice before confirming — once for the fields, once for the total.</text>
</svg>
</figure>

## What the First Trade Can and Cannot Lose

Buying an option caps the loss at the premium paid, plus charges. That is the whole reason the first trade is a buy, and it is worth saying plainly what it does and does not mean.

What it **can** lose: the entire premium. If the index stays below 25,120 and the option expires worthless, the ₹120 per unit is gone — the full amount, not a fraction of it. Most first trades lose money, and the honest expectation for a first trade is a small, bounded loss that teaches you something, not a profit.

What it **cannot** lose: more than the premium paid. A buyer cannot be asked for more money because the trade moved against them; the loss stops at the premium. That is the difference between buying and selling, and it is why selling is not a first trade.

What works against the buyer every single day: time decay. A bought option loses value with every day it is held, faster as expiry approaches, even if the index does not move at all. That is why the trade is closed well before expiry and why the nearest expiry is never the choice — you are paying for time, and time is the one thing that only moves against you.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 380" role="img" aria-label="Carried trade payoff at expiry: loss capped at the premium below breakeven 25,120, profit growing above it, with the Rs 180 profit line and Rs 60 wrong line shown as premium levels" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The carried trade at expiry — loss capped at the premium</text>
<line x1="60" y1="210" x2="700" y2="210" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="273" y1="45" x2="273" y2="310" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="401" y1="45" x2="401" y2="310" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<polyline points="60,310 273,310 401,210 593,60" fill="none" stroke="#e8825a" stroke-width="3"/>
<circle cx="593" cy="60" r="5" fill="#e8825a"/>
<text x="150" y="292" text-anchor="middle" fill="#f2f7f4" font-size="12">Flat — loss capped at ₹120 per unit</text>
<text x="600" y="42" text-anchor="end" fill="#f2f7f4" font-size="12" font-weight="700">Profit grows above breakeven</text>
<text x="60" y="335" text-anchor="middle" fill="#92a59c" font-size="11">24,800</text>
<text x="273" y="335" text-anchor="middle" fill="#92a59c" font-size="11">25,000 · strike</text>
<text x="401" y="335" text-anchor="middle" fill="#92a59c" font-size="11">25,120 · breakeven</text>
<text x="700" y="335" text-anchor="middle" fill="#92a59c" font-size="11">25,400</text>
<text x="52" y="64" text-anchor="end" fill="#92a59c" font-size="11">+₹120</text>
<text x="52" y="214" text-anchor="end" fill="#92a59c" font-size="11">0</text>
<text x="52" y="314" text-anchor="end" fill="#92a59c" font-size="11">−₹120</text>
<text x="360" y="362" text-anchor="middle" fill="#92a59c" font-size="12">Premium levels: ₹60 wrong line · ₹120 entry · ₹180 profit line</text>
</svg>
</figure>

## The Three Mistakes

**1. Placing a market order on an option.** The spread is the tax you pay for impatience. A market order on an option fills at the ask, which on a wide spread can be meaningfully above the price you meant to pay — and the same tax is paid again when you sell. The carried trade uses a limit order at or near the mid price. If it does not fill, adjust a little; never switch to market.

**2. Buying the cheapest far-out-of-the-money option and calling it value.** The cheapest premium on the chain is cheap for a reason: it has the lowest probability of finishing profitable, and it usually carries a wide spread on top. The carried trade buys at the money, where the premium is honest about what it costs. A ₹120 premium that has a real chance is worth more than a ₹5 premium that almost certainly expires worthless.

**3. Entering without an exit plan — and then holding to expiry hoping.** No profit line, no wrong line, no time line, and then the trade is held to the last day because closing it would mean admitting it did not work. The carried trade has all three lines written before entry: ₹180, ₹60, and close well before expiry. A line that is written down before entry is a decision; a line invented mid-trade is a rationalisation.

## After the Trade

When the trade is closed — on a line, not on a feeling — journal it: the plan, the entry, the exit, and what actually happened. The guide on [trading journal: what to track beyond profit and loss](/articles/trading-journal-what-to-track-beyond-pnl/) shows what to record and why the record matters more than the result. A first trade that is journaled teaches twice: once when it happens, once when you read it back.

Then the honest boundary. The goal of the first trade was to execute the plan cleanly, not to profit. Review what the trade taught — did you follow the ticket, did you exit on a line, did the premium move the way you expected — before sizing up. Sizing up after one good trade is how beginners turn a rehearsal into a loss they cannot afford.

And one more honest boundary: if trading is causing ongoing stress, sleep problems, or anxiety, a guide is not enough. Talking to a qualified professional is the sensible step, and it is not a failure to do so. No trade is worth your health.

Before the next trade, ask the question that makes the first trade useful: is the trade worth taking at all? The guide on [what trading expectancy is](/articles/what-is-trading-expectancy/) and the guide on [how to calculate real expectancy](/articles/how-to-calculate-real-expectancy/) give you the test. A first trade is a rehearsal; a second trade should be a decision.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 290" role="img" aria-label="Exit-plan card: profit line Rs 180 (a 50 percent gain on the premium), wrong line Rs 60 (a 50 percent loss), time line close well before expiry — close on the first line reached, whichever comes first" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The exit plan — written before entry</text>
<rect x="10" y="55" width="220" height="170" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="120" y="88" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">PROFIT LINE</text>
<text x="120" y="130" text-anchor="middle" fill="#f2f7f4" font-size="18" font-weight="700">₹180</text>
<text x="120" y="168" text-anchor="middle" fill="#f2f7f4" font-size="12">a 50% gain</text>
<text x="120" y="194" text-anchor="middle" fill="#92a59c" font-size="12">on the ₹120 premium</text>
<rect x="250" y="55" width="220" height="170" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="360" y="88" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">WRONG LINE</text>
<text x="360" y="130" text-anchor="middle" fill="#f2f7f4" font-size="18" font-weight="700">₹60</text>
<text x="360" y="168" text-anchor="middle" fill="#f2f7f4" font-size="12">a 50% loss</text>
<text x="360" y="194" text-anchor="middle" fill="#92a59c" font-size="12">of the premium paid</text>
<rect x="490" y="55" width="220" height="170" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="600" y="88" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">TIME LINE</text>
<text x="600" y="130" text-anchor="middle" fill="#f2f7f4" font-size="18" font-weight="700">Close early</text>
<text x="600" y="168" text-anchor="middle" fill="#f2f7f4" font-size="12">well before expiry</text>
<text x="600" y="194" text-anchor="middle" fill="#92a59c" font-size="12">whatever the premium</text>
<text x="360" y="268" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Close on the first line reached — whichever comes first</text>
</svg>
</figure>

## Frequently Asked Questions

### How do I place my first option trade?

Confirm options approval on your account, fund it and set the trade's risk budget, paper-trade the exact trade first, pick a view on an underlying you follow, buy a call if bullish or a put if bearish, find the contract on the chain, pick a strike near the money and an expiry a few weeks out, check the bid-ask spread, and place a limit order — then manage the trade against the exit plan you wrote before entry. This guide walks each step on one carried trade.

### How do I buy a call option step by step?

Confirm your account is approved for buying options, pick a bullish view on an index you follow, find the call on the option chain at a strike near the money with an expiry a few weeks out, check that the bid-ask spread is tight, and place a limit order to buy to open one lot at or near the mid price. Read the total on the order ticket before confirming, and have your profit line, wrong line, and time line written down before you click buy.

### How much money do I need to start options trading in India?

There is no single verified figure, and this guide will not invent one. What you pay for a trade is the premium per unit multiplied by the lot size — so the amount depends entirely on which contract you choose. A contract with a low premium costs less to buy than one with a high premium. Beyond the trade itself, you need a cushion: enough left over that a few losing first trades do not end the experiment. Decide how much one trade may risk first — the widely-quoted rule is never more than 2% of capital on a single trade — and choose a contract that fits it. The method is in the guide on [position sizing](/articles/position-sizing/).

### Can I start options trading with ₹5,000?

It depends on the premium of the contract you choose, because what you pay is the premium per unit multiplied by the lot size. Some contracts cost less than ₹5,000 in total; many cost more — and the cheapest contracts are usually the far out-of-the-money ones this guide warns against, because they have the lowest probability of finishing profitable. The honest answer is that ₹5,000 is not a yes or a no; it is a question about which contract you are buying. Whatever the amount, read the total on the order ticket before confirming, and keep a cushion beyond it.

### Do I need to buy a full lot, or can I buy one option?

Options trade in lots, and the smallest trade is one lot — you cannot buy a single unit on its own. Your first trade is one lot of one contract. The total you pay is the premium per unit multiplied by the lot size, and the ticket shows that total before you confirm. This guide states no lot-size number: lot sizes are contested in live sources right now, so read the quantity and the total on your own order ticket.

### How do I activate F&O in my trading account?

Activate the futures-and-options segment in your broker's account settings, which usually means uploading income proof. Confirm the approval covers buying options before you try to place an order. The process is described generically here on purpose — the exact screens differ by broker, and this guide names no broker or platform.

### What is options approval?

It is your broker confirming that your account may trade options. For a first trade, what matters is that the approval covers buying options — buying a call or a put. Confirm it is in place before anything else; do not discover it is missing at the moment you try to place the order.

### Which option should I buy first — a call or a put?

It depends on your view, not on the option. Bullish means buy a call; bearish means buy a put. If you have no view, you have no trade. The first trade is a buy either way — selling options is not a first trade, because it needs margin and its loss is not capped the way a buyer's is.

### Which expiry should I choose for my first trade?

An expiry a few weeks out — the standard beginner guidance is 30–45 days. Never the nearest or current-week expiry: short-dated options lose value fastest, and the nearest expiry decays fastest of all. Close the position well before expiry regardless of where the premium sits. No expiry weekday is named in this guide, because expiry days change; the current day for any contract is on the exchange's official contract-specification page.

### Should I use a market order or a limit order for options?

A limit order, always. Place it at or near the mid price between bid and ask. Option spreads are wider than stock spreads, and a market order fills at whatever the other side is asking — which is how beginners overpay before the trade has even begun. If a limit order does not fill in a few minutes, adjust it a little toward the natural side; do not switch to a market order.

### How do I exit an option trade?

The same way you entered, in reverse: place an order to sell the contract you bought, at a limit price, before expiry. The exit should already be decided before you enter — the profit line (₹180 on the carried trade, a 50% gain on the premium), the wrong line (₹60, a 50% loss), and the time line (close well before expiry). Close on whichever line comes first.

### What happens if I hold an option till expiry?

If the option is out of the money at expiry, it expires worthless and the premium you paid is gone. If it is in the money, it still holds value at expiry — how much depends on how far in the money it is. Either way, holding to expiry is not the plan for a first trade: time decay is fastest in the final days, so the carried trade is closed well before expiry regardless of where the premium sits.

### Should I paper trade before trading options with real money?

Yes. Execute the exact trade you planned in a practice account, watch it for a few days, and get comfortable with how options move differently from stocks — then place it for real, and even then small. The goal of the practice run is not to test whether the trade wins; it is to test whether you can follow the plan. The guide on [paper trading versus real trading](/articles/paper-trading-vs-real-trading/) covers how to practise so it transfers.

### How much can I lose when I buy an option?

At most the premium you paid, plus charges. That is the whole reason the first trade is a buy: the loss is capped at the premium, and a buyer cannot be asked for more money because the trade moved against them. But capped is not small — the premium can go to zero, and most first trades lose money. The carried trade's maximum loss is the ₹120 per unit premium (plus charges).

### How do I know if my first option trade is a good trade?

Not by whether it profited. A good first trade is one executed exactly as planned: approval confirmed, paper-traded first, one lot, a limit order, the exit lines written before entry, and closed on a line. A trade that follows its plan is a success even if it loses money; a trade held past its lines hoping for a recovery is a failure even if it wins. Whether a trade is worth taking at all is a separate question, answered by expectancy — see the guides on [what trading expectancy is](/articles/what-is-trading-expectancy/) and [how to calculate real expectancy](/articles/how-to-calculate-real-expectancy/) — and what it taught you belongs in your journal, as the guide on [trading journal: what to track beyond profit and loss](/articles/trading-journal-what-to-track-beyond-pnl/) explains.
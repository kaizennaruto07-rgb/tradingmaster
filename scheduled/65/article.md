---
title: "Options vs Stocks for Beginners: Which Should You Start With?"
description: "Options vs stocks for beginners: which to start with, what each really costs in rupees, and the risks, with a worked example, SEBI loss data and decision path."
meta_description: "Options vs stocks for beginners: which to start with, what each really costs in rupees, and the risks, with a worked example, SEBI loss data and decision path."
date: 2026-11-26
author: Kaizen
tag: "Options trading · Beginners"
keywords: ["options vs stocks for beginners", "options vs stocks", "stocks vs options", "options vs stocks which is better for beginners", "are options riskier than stocks", "options trading vs stock trading India", "difference between options and stocks", "can beginners trade options in India", "how much money to start options vs stocks", "options vs stocks returns", "options vs stocks capital required", "what is the difference between options and shares", "options vs stocks for long-term investing", "NSE options lot size", "SEBI F&O rules for beginners"]
---

*By Kaizen · 26 November 2026 · Monks Of Market*

If you are new to the Indian market and you keep hearing two words — stocks and options — you are probably asking which one to start with. The honest answer is not a coin toss between two equal choices. Stocks and options are not two flavours of the same thing. One is ownership of a business. The other is a time-limited contract about a price. That single difference decides the cost, the worst case, and how much you need to know before you start.

This article gives you the short answer first, then proves it with one worked example in rupees, then gives you a short decision path to follow. It does not teach options in full — the hub guide, Option Trading for Beginners, and the individual guides it links to do that — and it does not crown either instrument as safe. Read it as a risk-first starting guide for Indian retail traders who have not yet traded derivatives live.

A short disclosure first, because it shapes everything that follows: derivatives can lose money quickly, and a bought option can lose its entire premium. Nothing here is a recommendation to trade, and nothing here promises a profit. The 1–2% sizing figure and the practice periods in this article are widely used conventions, not rules, regulations, or guarantees of safety. Paper-trading success does not guarantee live results.

## The short answer: start with stocks — options are a later step, and only the bought side

Start with stocks. Learn how a share moves, how your own reactions move with it, and how to size a position so that one bad trade does not matter. Only after that — and only after paper-trading options for at least a month — consider a single bought option as your first live derivative trade. Never start with sold options. Never start with options because the premium looks cheap.

That order is deliberate, and it comes from the data, not from caution for its own sake. SEBI's studies of individual traders in the equity F&O segment found that 91.1% incurred net losses in FY24, about 91% in FY25, and 87.7% in FY26, with aggregate net losses of about ₹91,685 crore in FY26 alone. Across FY22 to FY24 combined, about 93% lost money. Those figures cover the F&O segment only — not all traders — but if you are choosing between stocks and options, they are the most relevant numbers in India. The cash segment is more forgiving: SEBI's cash-segment study found 7 out of 10 individual intraday traders made losses in FY2023. Losing is common in both, but in options it is faster, and the losses can be total.

The rest of this article shows you why: what you own in each case, what the same view costs in each case, and what time does to each case.

## What you actually own: a share vs a contract

### A share is part of a business

When you buy a share of a listed Indian company on NSE or BSE, you own a small part of that business. That ownership carries three things an option never gives you:

- **No deadline.** A share has no expiry date. You can hold it for a day, a year, or a decade. If your view takes longer than expected to play out, the share waits with you.
- **A claim on the company's cash.** Many companies pay dividends. A shareholder receives them; an option holder does not.
- **A vote.** In most cases, a shareholder can vote at shareholder meetings. An option holder cannot.

The price can fall, the company can disappoint, and the share can lose most of its value. But a share of a real, operating company very rarely goes to zero overnight, and while you hold it you are not paying anyone for the passage of time.

### An option is a contract about a price

An option is a contract that gives the buyer the right, but not the obligation, to buy (a call) or sell (a put) an underlying asset at a fixed strike price before a fixed expiry date. The buyer pays a premium for that right. The seller receives the premium and takes on the obligation if the buyer chooses to exercise.

Three consequences follow from that definition, and beginners miss all three:

- **There is a deadline.** Indian equity options are European-style, which means exercise happens only at expiry. If your view is right but arrives a week after expiry, the option still expires worthless.
- **There is no ownership.** Buying a call option on a company does not make you a shareholder. You get no dividend and no vote.
- **There are two sides with opposite risks.** The buyer's maximum loss on a single trade is the premium paid. The seller's risk is different and larger: the seller posts margin, takes on an obligation, and — for an uncovered call — faces theoretically unlimited loss. Any sentence about "options" being safe or risky is meaningless until you say which side you mean.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 330" role="img" aria-label="Diagram comparing stocks and options for beginners — ownership with no expiry versus a time-limited contract" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">A share vs an option</text>
<rect x="10" y="55" width="340" height="240" fill="none" stroke="#7fb069" stroke-width="2" rx="8"/>
<text x="180" y="92" text-anchor="middle" fill="#7fb069" font-size="14" font-weight="700">SHARE — YOU OWN</text>
<text x="180" y="122" text-anchor="middle" fill="#f2f7f4" font-size="13">Part of the business</text>
<text x="180" y="162" text-anchor="middle" fill="#f2f7f4" font-size="13">· No expiry</text>
<text x="180" y="194" text-anchor="middle" fill="#f2f7f4" font-size="13">· Dividends</text>
<text x="180" y="226" text-anchor="middle" fill="#f2f7f4" font-size="13">· Vote</text>
<rect x="370" y="55" width="340" height="240" fill="none" stroke="#e8825a" stroke-width="2" rx="8"/>
<text x="540" y="92" text-anchor="middle" fill="#e8825a" font-size="14" font-weight="700">OPTION — YOU RENT A RIGHT</text>
<text x="540" y="122" text-anchor="middle" fill="#f2f7f4" font-size="13">A right for a fixed time</text>
<text x="540" y="162" text-anchor="middle" fill="#f2f7f4" font-size="13">· Premium paid upfront</text>
<text x="540" y="194" text-anchor="middle" fill="#f2f7f4" font-size="13">· Expires worthless if wrong</text>
<text x="540" y="226" text-anchor="middle" fill="#f2f7f4" font-size="13">· Deadline: expiry</text>
<text x="360" y="322" text-anchor="middle" fill="#92a59c" font-size="12">One is ownership. The other is a contract about a price.</text>
</svg>
</figure>

### Settlement in India, in one line

Index options are cash-settled. Stock options held to expiry and in-the-money are physically settled, which means shares change hands. Out-of-the-money and at-the-money options expire worthless and deliver nothing. Do not plan as if every stock option ends in delivery.

## The same view, two ways: buy the share vs buy the call

Definitions are forgettable. Money is not. Take one view — "this company will rise over the next month" — and run it both ways with round, illustrative numbers. The numbers below are an illustration, not a real contract: the lot size and premium are chosen to keep the arithmetic clean.

**The setup.** A large Indian company's share trades at ₹2,000. You have a positive view for the next month.

- **Stocks:** you buy 50 shares at ₹2,000. Capital used: ₹1,00,000.
- **Options:** you buy 1 call option, strike ₹2,000, expiry one month away, premium ₹60 per share, lot size 50 shares. Premium paid: ₹60 × 50 = ₹3,000. Capital used: ₹3,000.

Same company, same view, same month. Three outcomes:

| After one month | Buy 50 shares (₹1,00,000) | Buy 1 call (₹3,000 premium) |
| --- | --- | --- |
| Share rises to ₹2,200 (+10%) | Gain ₹200 × 50 = ₹10,000 (+10%) | Intrinsic value ₹200 × 50 = ₹10,000, minus ₹3,000 premium = **₹7,000 profit (+233% on the ₹3,000)** |
| Share flat at ₹2,000 | ₹0 | Option expires worthless: **lose the full ₹3,000 (−100%)** |
| Share falls to ₹1,800 (−10%) | Loss ₹200 × 50 = ₹10,000 (−10%); you still own the shares and can wait | Option expires worthless: **lose the full ₹3,000 (−100%)**, and there is nothing left to wait with |

Read that table twice, because it contains the whole argument:

1. **When you are right, the option pays more in percentage terms — ₹7,000 on ₹3,000 against ₹10,000 on ₹1,00,000.** That is leverage, and it is the reason options look attractive. It is also the reason they are dangerous: leverage works in both directions, and it works on a clock.
2. **When you are flat, the share costs nothing and the option costs everything.** A share that goes nowhere loses nothing except opportunity. An option that goes nowhere loses 100% of the premium, because time decay eats the premium every day the share does not move.
3. **When you are wrong, the share loses 10% and can recover; the option loses 100% and cannot.** The share gives you time to be wrong and then right. The option gives you one month, and if the rise comes in month two, you still lose.

One more point the table hides: the option's ₹3,000 looks cheap next to ₹1,00,000, but the exposure behind it is not ₹3,000. The contract controls 50 shares worth ₹1,00,000. The premium is small because you are renting the exposure, not owning it — and the rent is non-refundable.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 360" role="img" aria-label="Chart comparing profit and loss of buying shares versus buying a call option at three share prices" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same view, two ways — one month, one company</text>
<line x1="60" y1="170" x2="700" y2="170" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="432" y1="60" x2="432" y2="280" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<text x="432" y="48" text-anchor="middle" fill="#92a59c" font-size="11">Breakeven ₹2,060</text>
<text x="52" y="74" text-anchor="end" fill="#92a59c" font-size="11">+₹10,000</text>
<text x="52" y="174" text-anchor="end" fill="#92a59c" font-size="11">₹0</text>
<text x="52" y="274" text-anchor="end" fill="#92a59c" font-size="11">−₹10,000</text>
<polyline points="120,270 360,170 600,70" fill="none" stroke="#7fb069" stroke-width="3"/>
<circle cx="120" cy="270" r="5" fill="#7fb069"/>
<circle cx="600" cy="70" r="5" fill="#7fb069"/>
<text x="590" y="52" text-anchor="end" fill="#7fb069" font-size="12" font-weight="700">50 shares</text>
<polyline points="120,200 432,200 600,100" fill="none" stroke="#e8825a" stroke-width="3"/>
<circle cx="120" cy="200" r="5" fill="#e8825a"/>
<circle cx="600" cy="100" r="5" fill="#e8825a"/>
<text x="590" y="124" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">1 call</text>
<text x="240" y="188" text-anchor="middle" fill="#e8825a" font-size="11">flat −₹3,000</text>
<text x="120" y="300" text-anchor="middle" fill="#92a59c" font-size="11">₹1,800</text>
<text x="360" y="300" text-anchor="middle" fill="#92a59c" font-size="11">₹2,000</text>
<text x="600" y="300" text-anchor="middle" fill="#92a59c" font-size="11">₹2,200</text>
<text x="360" y="330" text-anchor="middle" fill="#92a59c" font-size="12">Call floor: −₹3,000 — the premium, lost in full</text>
</svg>
</figure>

## Risk, stated honestly: what you can actually lose

### Per trade vs over many trades

Two different questions get confused into one. "What is the most I can lose on one trade?" and "What will I lose over a year of trading?" have different answers, and both matter.

- **On one trade, a bought option caps the loss at the premium.** That is a real advantage over many other leveraged positions. But a capped loss is not a small loss: it can be 100% of the money you put into that trade, and it can happen again and again. Ten losing bought options at ₹3,000 each is ₹30,000 gone, each loss total, with nothing to show for it.
- **On one trade, a share can lose up to the full amount invested** if the company fails — but a share of a large, operating company does not go to zero in a month, and it does not expire. The loss is usually partial and, crucially, recoverable if the price comes back.
- **Over many trades, the option buyer's per-trade cap does not cap the total.** This is the pattern the SEBI numbers describe: 9 in 10 individual F&O traders losing money year after year, not because any single trade was unlimited, but because full-premium losses repeat faster than wins arrive.

### The seller's risk is a different instrument

Everything above is the buyer's side. The seller's side is the opposite: the seller collects a small premium as the maximum reward and takes on an obligation. An uncovered call seller faces theoretically unlimited loss if the underlying rises without limit. A seller also posts margin, like a futures trader, and can face margin calls. If you are a beginner, the seller's side is not a later step — it is a different skill entirely, and this article's answer does not cover it. The full comparison of bought vs sold options belongs to the guides on what an option is and call vs put options; the comparison of options with futures belongs to Options vs Futures for Beginners.

### The risk that has no number: being right at the wrong time

A share forgives bad timing. An option does not. If you buy a share at ₹2,000, it falls to ₹1,800, and it recovers to ₹2,200 six months later, you made money. If you buy a one-month call at ₹2,000 and the same recovery happens in month two, you lost everything. Direction, timing, and volatility all have to be right for a bought option; for a share, direction alone is usually enough, given time. That is why experienced traders say options are a bet on direction *and* timing, while shares are a bet on direction *and* patience.

## Capital and costs: what each choice needs upfront in India

### How much money you need to start

- **Stocks:** you can start with very little. One share of a low-priced company can cost around ₹100, and there is no minimum contract size. You pay the full share price, and the shares are yours.
- **Options (buyer):** you pay only the premium, which looks cheap — a few thousand rupees for a contract. But the contract behind that premium is large. SEBI's 2024 framework sets the minimum value of a new index derivatives contract in a band of ₹15 lakh to ₹20 lakh (circular SEBI/HO/MRD/TPD-1/P/CIR/2024/132, 1 October 2024, effective 20 November 2024). The Nifty lot size is 75 units for contracts introduced after that date. A single Nifty option therefore controls roughly ₹15 lakh or more of notional exposure, even though the premium you pay is a fraction of that. "Cheap to start" describes the ticket, not the exposure.
- **Options (seller):** you post margin, which runs into lakhs for a single index position, plus a buffer for adverse moves. Selling is not a low-capital activity.

### Charges: where the two differ

Both routes pay brokerage, exchange charges, GST, SEBI charges and stamp duty. The differences that matter for a beginner:

- **Equity delivery** attracts Securities Transaction Tax on the trade value, and the shares sit in your demat account with no further cost.
- **Options** attract STT on the premium when you sell, and — for in-the-money options held to expiry and exercised — STT of 0.15% on the intrinsic value (Budget 2026, effective 1 April 2026). NSE equity options charges work out to 0.03553% per side all-in (₹3,553 per crore; revised split ₹3,552.99 transaction charge + ₹0.01 IPFT from 1 March 2026, per NSE circular NSE/FA/73061). The full charge-by-charge breakdown, for both routes, is in the guide on options trading charges in India — do not trade on this paragraph alone.
- **The hidden cost of options is not a charge at all: it is time decay.** Every day you hold a bought option, the premium erodes. A share has no equivalent cost.

### Tax, in headline terms only

Long-term capital gains on listed equity shares held over 12 months are taxed at 12.5% above the ₹1.25 lakh annual exemption; short-term gains on listed equity at 20% (Budget 2024, from 23 July 2024). F&O trading income is generally treated as business income for most retail traders. Tax depends on your own facts and the rules change — treat these as headline rates with dates, not as personal tax advice, and speak to a professional for your own situation.

## Time: the difference beginners underestimate most

A share has no clock. An option is a clock with money attached.

- **Theta (time decay)** erodes the premium of a bought option every day, even on days when the underlying does not move at all. A flat week costs an option buyer money and costs a shareholder nothing.
- **Weekly expiries** make the clock faster. Since 20 November 2024, each exchange offers weekly index contracts on only one benchmark index (Nifty on NSE, Sensex on BSE), under the same SEBI circular. Weekly options are cheaper and decay faster — the worst combination for a beginner who is still learning.
- **Expiry week behaves differently.** Volatility, premiums and margin requirements all change as expiry approaches, and short option positions carry an additional 2% Extreme Loss Margin on expiry day under the SEBI framework. If you have never traded through an expiry, you have not yet seen the instrument at its most expensive.
- **The premium is collected upfront.** Since 1 February 2025, brokers must collect the option premium from buyers upfront. You pay the full premium on day one; there is no paying later.

The practical consequence is simple: a beginner who buys shares can learn slowly, because the instrument waits. A beginner who buys options must learn quickly, because the instrument does not.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 330" role="img" aria-label="Time decay chart showing an option premium eroding daily to zero at expiry while the share price stays flat" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Time decay: the premium drains, the share waits</text>
<line x1="60" y1="137" x2="700" y2="137" stroke="#7fb069" stroke-width="2" stroke-dasharray="6 4"/>
<polyline points="60,70 180,82 320,105 460,140 560,185 640,240 700,270" fill="none" stroke="#e8825a" stroke-width="3"/>
<circle cx="60" cy="70" r="5" fill="#e8825a"/>
<circle cx="700" cy="270" r="5" fill="#e8825a"/>
<text x="52" y="74" text-anchor="end" fill="#92a59c" font-size="11">₹3,000</text>
<text x="52" y="141" text-anchor="end" fill="#92a59c" font-size="11">₹2,000</text>
<text x="52" y="274" text-anchor="end" fill="#92a59c" font-size="11">₹0</text>
<text x="70" y="55" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Premium: ₹3,000 → ₹0</text>
<text x="690" y="122" text-anchor="end" fill="#7fb069" font-size="12" font-weight="700">Share: ₹2,000 — flat</text>
<text x="690" y="255" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">₹0 at expiry</text>
<text x="360" y="312" text-anchor="middle" fill="#92a59c" font-size="12">Same flat underlying — the option still loses everything</text>
</svg>
</figure>

## Which fits which goal

| Your goal | The honest fit |
| --- | --- |
| Long-term wealth building (5+ years) | **Stocks.** No expiry, compounding, dividends, and time works for you. Options cannot be held for years and decay while you wait. |
| Regular income from your holdings | **Stocks.** Dividends come from ownership. Options produce no income for the buyer — the buyer pays. |
| A short-term view on a specific move | **Options can fit — later.** A bought option expresses a short-term view with defined per-trade risk, but only once you can price the premium, pick an expiry, and accept losing it in full. |
| Hedging shares you already own | **Options can fit — later.** A bought put is the standard hedge, but hedging is later learning: it has its own margin, expiry and cost questions, and it is not a first step. |
| Learning how markets work | **Stocks.** Simpler, slower, forgiving of timing mistakes, and the lessons transfer directly to options later. |
| Small capital, big ambitions | **Neither yet.** Small capital plus leverage is how the SEBI statistics are made. If the amount you can afford to lose is small, stocks with tiny position sizes are the only honest starting point. |

Notice what is missing from that table: there is no goal for which the right first step is selling options. Selling is not a beginner activity in any row.

## The decision path: five questions, then your answer

Answer these honestly, in order. The first "no" tells you where to stop.

1. **Can you afford to lose the entire amount you would put into one trade, without it affecting your life?** If no: neither yet. Save first, learn with paper trading.
2. **Have you bought and held shares, and watched them fall, without panic-selling?** If no: stocks first. The emotional lesson is cheaper in shares, because the instrument does not expire while you learn it.
3. **Can you explain, in your own words, what a premium, a strike and an expiry are — and what time decay does on a flat day?** If no: keep learning. The guides on what an option is, call vs put options, what an option premium is, and how to read an option chain cover exactly this, in that order.
4. **Have you paper-traded options for at least a month, including an expiry week, with a written log?** If no: paper trade first. A month of paper trading that includes a flat week and an expiry week teaches more than a year of reading.
5. **Is the amount you would risk on one bought option within 1–2% of your trading capital?** That 1–2% figure is a widely used convention, not a rule — but if one option trade risks 20% of your capital, the sizing is wrong before the trade is placed. The position sizing guide for small accounts shows the arithmetic.

**If you pass all five:** a single bought option, on a large well-known underlying, with an expiry one to three months out, sized so that losing the whole premium does not matter, is a reasonable first live step. Never a sold option, never a multi-leg strategy, never a weekly expiry first. The exact shape of that first trade is covered in the guide on how to place your first option trade.

**If you fail question 1:** the answer is neither yet. Build the capital and the knowledge first.

**If you fail questions 2–5:** the answer is stocks first, options later. That is not a rejection of options. It is the order that gives you the best chance of still being in the market when you are ready for them.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 470" role="img" aria-label="Flowchart of five questions deciding between stocks first, options later, or neither yet" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Five questions, then your answer</text>
<rect x="20" y="55" width="680" height="54" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="40" y="88" text-anchor="start" fill="#f2f7f4" font-size="13">Q1 · Can you afford to lose the whole trade?</text>
<text x="680" y="88" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">No → stop</text>
<text x="360" y="118" text-anchor="middle" fill="#92a59c" font-size="12">↓</text>
<rect x="20" y="121" width="680" height="54" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="40" y="154" text-anchor="start" fill="#f2f7f4" font-size="13">Q2 · Held shares through a fall, without panic-selling?</text>
<text x="680" y="154" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">No → stop</text>
<text x="360" y="184" text-anchor="middle" fill="#92a59c" font-size="12">↓</text>
<rect x="20" y="187" width="680" height="54" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="40" y="220" text-anchor="start" fill="#f2f7f4" font-size="13">Q3 · Can you explain premium, strike, expiry, decay?</text>
<text x="680" y="220" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">No → stop</text>
<text x="360" y="250" text-anchor="middle" fill="#92a59c" font-size="12">↓</text>
<rect x="20" y="253" width="680" height="54" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="40" y="286" text-anchor="start" fill="#f2f7f4" font-size="13">Q4 · Paper-traded options a month, incl. an expiry week?</text>
<text x="680" y="286" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">No → stop</text>
<text x="360" y="316" text-anchor="middle" fill="#92a59c" font-size="12">↓</text>
<rect x="20" y="319" width="680" height="54" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="40" y="352" text-anchor="start" fill="#f2f7f4" font-size="13">Q5 · One option within 1–2% of your capital?</text>
<text x="680" y="352" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">No → stop</text>
<rect x="10" y="395" width="220" height="55" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="120" y="418" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">Fail Q1</text>
<text x="120" y="442" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Neither yet</text>
<rect x="250" y="395" width="220" height="55" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="360" y="418" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">Fail Q2–Q5</text>
<text x="360" y="442" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Stocks first</text>
<rect x="490" y="395" width="220" height="55" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="600" y="418" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">Pass all five</text>
<text x="600" y="442" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">One bought option</text>
</svg>
</figure>

## Before your first option trade: the practice ladder in brief

This article deliberately does not repeat the full practice ladder — it exists, in full, in the options vs futures guide and in the first-option-trade guide, and repeating it here would make two pages serve the same purpose. The short version:

- **Stage 0 — mechanics:** read the hub guide and the four guides it maps (what an option is, call vs put, premium, option chain) until you can explain each one without notes.
- **Stage 1 — paper trading:** trade both shares and options on paper for at least a month, with a daily log. The log must show a flat week (what decay did to your paper premium), an expiry week, and at least one trade where you were right on direction and still lost on the option.
- **Stage 2 — one live bought option:** only after Stage 1, one contract, sized at 1–2% of capital at risk, expiry one to three months out, on a large well-known underlying. Judge it on whether you followed the plan and the sizing, not only on whether it made money.
- **Later learning only:** selling options, multi-leg strategies, and weekly expiries. These need margin, obligation, and daily monitoring that a beginner has not yet built.

If you cannot complete Stage 1, you have learned something valuable for free: you are not ready yet, and the market will still be there when you are.

## Frequently asked questions

### Which is better for beginners: options or stocks?

Stocks. They are simpler, have no expiry, pay dividends, and forgive timing mistakes — a share can wait for your view to come right. Options demand that you get direction, timing and volatility right before a fixed deadline, and a bought option can lose its entire premium. Start with stocks; consider options only after paper-trading them for at least a month and passing the five questions in the decision path above.

### Are options riskier than stocks?

For a buyer, yes, in the way that matters most to a beginner: a bought option can lose 100% of the premium, and it can do so in days, even if the underlying barely moves, because of time decay. A share of a large company rarely loses everything, and it does not expire. For a seller, the risk is different and larger — margin, obligation, and theoretically unlimited loss on an uncovered call. Always ask "buyer or seller?" before accepting any sentence about options being risky.

### Can I make more money with options vs stocks?

In percentage terms, yes — a bought option can return several times the premium when the view is right and on time, as the worked example shows (+233% against +10% for the shares). But the same leverage produces total losses just as fast: the option lost 100% in both the flat and the down scenarios, while the shares lost 10% and could recover. Over many trades, SEBI's data shows about 9 in 10 individual F&O traders lost money in FY22–FY25. Higher percentage upside is not higher expected wealth.

### Can beginners invest in options? Is it safe for beginners to trade in options?

Beginners can, legally — there is no rule that forbids it — but it is not safe in the sense that matters: options are complex, leveraged, and time-bound, and most individual F&O traders lose money. The safe order is stocks first, learning the mechanics, paper-trading options for at least a month, and only then a single bought option sized so that losing the whole premium does not matter. Never start with sold options.

### How much money do you need to start investing in options vs stocks?

Stocks can be started with very little — even one share of a low-priced company, from around ₹100. An option buyer pays only the premium, often a few thousand rupees, but the contract behind it is large: a new Nifty index contract is worth ₹15–20 lakh in notional terms (SEBI framework, 2024), so the exposure is far bigger than the ticket price suggests. An option seller needs margin running into lakhs. Do not confuse a small premium with a small trade.

### What is the main difference between options and stocks?

Stocks are ownership: you own part of a company, with no expiry, dividends and a vote. Options are contracts: you buy the right to transact at a fixed price before a fixed expiry, paying a premium for it, with no ownership, no dividends and no vote. A share can wait; an option cannot.

### Are options better than stocks for long-term investing?

No. Options expire, decay with time, and cannot be held for years. Long-term wealth building belongs to shares (and to diversified holdings), where compounding and dividends work for you and time is on your side. Options are a short-term instrument for a short-term view, or for hedging — both later learning.

### Can you lose more money with options than with stocks?

It depends on the side. A bought option's loss on one trade is capped at the premium — but that premium can be lost in full, repeatedly, which is how the total adds up. A seller can lose more than the premium received, and an uncovered call seller faces theoretically unlimited loss. A shareholder's loss is capped at the amount invested, and a share of a sound company rarely goes to zero. Over many trades, the option buyer's repeating full-premium losses are what the SEBI loss statistics describe.

### Which is easier to start with, stocks or options?

Stocks, by a wide margin. Buying a share means understanding one thing: the company. Buying an option means understanding the strike, the expiry, the premium, volatility and time decay together, and getting direction and timing right at once. Easier to learn does not mean risk-free — shares can still fall — but the learning curve is shorter and the mistakes are cheaper.

### Do options expire? What happens if an option expires worthless?

Yes — every option has a fixed expiry date, and Indian equity options are European-style, so exercise happens only at expiry. If a bought option is out-of-the-money at expiry, it expires worthless and the buyer loses the entire premium. The seller keeps it. That is a common outcome for bought options, not an exception, which is why the premium must be money you can afford to lose in full.
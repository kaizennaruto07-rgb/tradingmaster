---
title: "The Revenge Trading Circuit-Breaker"
description: "How to stop revenge trading, step by step: fill in the circuit-breaker contract, repair a breach, and compare what honouring it costs versus chasing a loss."
meta_description: "How to stop revenge trading, step by step: fill in the circuit-breaker contract, repair a breach, and compare what honouring it costs versus chasing a loss."
date: 2026-11-06
author: Kaizen
tag: "Trading psychology · Trading mathematics"
keywords: ["revenge trading circuit breaker", "stop revenge trading", "trading circuit breaker contract", "revenge trading stop rule", "breach repair trading"]
---

*By Kaizen · 6 November 2026 · Monks Of Market*

A loss has just hit your account, and your hand is already moving toward the next order — bigger, faster, and not in your plan. This page does not re-teach the protocol for that moment: the protocol itself lives in the live [Revenge Trading protocol article](/articles/revenge-trading/), and this page implements it. What you get here is the workbook for how to stop revenge trading in practice — the expanded contract to fill in before the session, the repair procedure for the day you break it, and a worked cost comparison that shows what honouring it versus chasing a loss actually costs.

Revenge trading, in one line, is trading to win back a loss immediately, with size and urgency set by the loss rather than by your plan. For the definition and why traders fall into it, read the [live protocol article](/articles/revenge-trading/) — this workbook does not repeat it.

## The Protocol This Workbook Implements

This workbook adopts the live article's rule as its baseline and defers to that article for the protocol itself. There is one stop rule on this site, stated identically here and there — session stop after 2 consecutive losses or at the daily loss limit, whichever comes first — and nothing in this workbook replaces or competes with it. This is the article's recommended protocol, not an exchange rule and not a SEBI rule.

Each element below is one sentence, with a link to the full teaching in the live article:

- **Cooldown:** after any loss, take a mandatory 15–30 minute cooldown away from the screen, on a timer, as taught in the [live protocol article](/articles/revenge-trading/).
- **Session stop:** stop trading for the day after 2 consecutive losses or when your daily loss limit is hit, whichever comes first — see the [live protocol article](/articles/revenge-trading/).
- **The streak rule (the count, defined):** a trade that ends flat or in profit — a scratch/breakeven trade or a win of any size — resets the consecutive-loss count to zero, and only a trade that loses money extends the count.
- **Daily loss limit:** set a fixed loss amount or percentage before the session, and when it is hit the day is over — see the [live protocol article](/articles/revenge-trading/).
- **Return size:** return at half your normal size, for a single pre-chosen number of trades you write in the contract below — see the [live protocol article](/articles/revenge-trading/).
- **Re-entry test:** take a post-loss trade only if you would take the exact same trade, at the exact same size, had the previous trade been a winner — see the [live protocol article](/articles/revenge-trading/).
- **Ledger tagging:** tag any trade taken in defiance of the breaker as a revenge trade in your journal and read its results back from your own numbers — see the [live protocol article](/articles/revenge-trading/).

Note what this breaker is not: it is not the market-wide circuit breaker that halts trading in a stock or index when prices move too far — that is an exchange price-band mechanism, a different concept entirely. This breaker is personal, and it trips on your losses, not on market prices. Everything from here on is implementation: filling in the contract, repairing a breach, reviewing the evening, and pricing the choice.

## The Expanded Contract: Fill In and Sign Before the Session

A protocol that lives in your head is not a protocol — it is an intention, and intentions dissolve after a loss. Copy this contract, fill in every blank, and sign it before the session starts. Keep it where you can see it while you trade: pinned next to your screen, or as the first page of your journal. No blank left empty — an empty blank is a decision you will make after a loss, which is exactly what the contract exists to prevent.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Fill-in circuit-breaker contract card: cooldown minutes, daily loss limit, half-size return trades, walk-away activity, platform-logout choice, swing-trader row, crypto session window, signature and date lines." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The circuit-breaker contract — fill in before the session</text>
<rect x="40" y="60" width="600" height="240" rx="12" fill="#2a3a34"/>
<text x="70" y="100" fill="#f2f7f4" font-size="13" font-weight="700">Cooldown after a loss:</text>
<text x="330" y="100" fill="#92a59c" font-size="13">______ minutes</text>
<text x="70" y="136" fill="#f2f7f4" font-size="13" font-weight="700">Daily loss limit:</text>
<text x="330" y="136" fill="#92a59c" font-size="13">₹ ______</text>
<text x="70" y="172" fill="#f2f7f4" font-size="13" font-weight="700">Return trades:</text>
<text x="330" y="172" fill="#92a59c" font-size="13">half size, winner-test only</text>
<text x="70" y="208" fill="#f2f7f4" font-size="13" font-weight="700">Walk-away activity:</text>
<text x="330" y="208" fill="#92a59c" font-size="13">______________________</text>
<text x="70" y="244" fill="#f2f7f4" font-size="13" font-weight="700">Session stop:</text>
<text x="330" y="244" fill="#92a59c" font-size="13">2 consecutive losses or daily limit</text>
<text x="70" y="280" fill="#f2f7f4" font-size="13" font-weight="700">Signature / date:</text>
<text x="330" y="280" fill="#92a59c" font-size="13">______________________</text>
</svg>
</figure>

**My circuit-breaker contract**

- **Cooldown after any loss:** ______ minutes (pick within 15–30 for day trading), timer-enforced, away from the screen.
- **Stop for the day after:** 2 consecutive losses OR my daily loss limit — whichever comes first, no exceptions. (This rule is pre-filled from the live protocol; do not rewrite it mid-session.)
- **Daily loss limit:** ₹ ______ (or ______ % of account). When hit, the day is over, whatever the cause.
- **Return size:** 50% of my normal size for the next ______ trades (fill in ONE number before the session — not a range), A-setups only. Never larger than normal after a loss.
- **Re-entry check:** the trade must pass the winner-test in the live protocol article — would I take this exact trade, at this exact size, if the previous trade had been a winner?
- **Walk-away activity:** when I stop for the day, I will ______________________ (walk, workout, cook — a specific activity that is immediately available, not "do something else").
- **Platform logout during cooldown:** Yes / No (circle one). Logging out adds a physical interruption between impulse and order; make it standard on days you know you are vulnerable.
- **Swing-trader row (fill in only if you hold positions overnight):** cooldown until the next session, instead of the 15–30 minute day-trading cooldown above. All other rows — stop at 2 consecutive losses or at the daily loss limit, half-size return, winner-test — stay exactly as written.
- **Crypto / 24-7 row (fill in only if you trade markets that never close):** my personal session window is ______ to ______ (clock times); my rolling loss limit over any 24 hours is ₹ ______; when it is hit, I stop until the window resets. There is no market close to stop you, so your window has to do that job.
- **Signed:** ______________________ **Date:** ______________

Two notes on filling it in. First, your "normal size" in the return-size blank must be a number you already know — it comes from your position-sizing rules, not from today's feelings. If you have not fixed a normal risk per trade yet, read the [position sizing guide](/articles/position-sizing/) before you sign this contract. Second, your walk-away activity must be specific and immediately available, or it will not happen when the stop trips.

### Filling the Daily Loss Limit Blank on First Use

The daily loss limit is a blank to fill in, not a number to copy — published practitioner ranges disagree, which is why this workbook does not prescribe one. If you need a first fill-in value to start with, here is one clearly labelled illustrative translation, not a prescription for your limit: express the limit as a multiple of your normal risk per trade.

For example, if your normal risk per trade is 1% of your account, then 3 times that risk gives a 3% first-fill figure to try — illustrative only, to be adjusted after you review your own ledger, never a rule that 3% is the right limit for you. A useful check on whatever number you write: pick a loss that would hurt but would not change how you trade tomorrow. If hitting the limit would leave you desperate to recover it the next morning, it is too large.

### The Swing Row and the Crypto Row, Explained

The swing row exists because a 15–30 minute cooldown makes little sense when your positions are held overnight and your decisions are spaced days apart. "Until the next session" keeps the principle — an enforced break after a loss, decided in advance — while fitting the timeframe. The crypto row exists because a session stop needs a session, and a market that never closes never supplies one. Defining your own window (for example, a fixed set of clock hours) plus a rolling 24-hour loss limit gives the stop-at-2-or-at-the-limit rule something to trip on. Without those two blanks filled in, a crypto trader has a stop rule with no day to stop.

## When the Breaker Fails: Breach Repair, Not a Shame Lecture

Breakers get breached. You will, at some point, skip a cooldown, trade past a stop, or talk yourself past your limit. That is not a character verdict; it is a breach, and breaches have a repair procedure. Follow it in order, without negotiating step 4:

1. **Stop trading immediately.** Not after one more trade to "fix" the breach. Now.
2. **Close breach positions immediately.** Close positions opened in breach of the breaker now, and accept the outcome — do not hold them open while you decide whether closing is impulsive.
3. **Log the breach honestly.** Write what happened, what you told yourself, and what it cost, in the ledger. A breach you hide from your own journal will repeat.
4. **Leave the desk.** Do your walk-away activity from the contract. Do not return today, even if the breach happened early in the session.
5. **Review tomorrow, not tonight.** Tonight's review is the honest log entry. Tomorrow's review asks what to change in the contract — a longer cooldown, a smaller daily loss limit, a platform logout you had marked optional.

The repair procedure does not restore losses, and it does not guarantee future discipline. It does one thing: it stops the breach from becoming a second breach, and it turns a bad day into data for the next contract.

## Evening Review and Next-Day Recovery

After every session in which the breaker tripped — or was breached — answer these questions in writing, the same day:

- Did the breaker trip today, and did it hold?
- If it failed, at which point — cooldown skipped, stop overruled, limit ignored?
- What was the impulse trade I did not take, and what would it have cost?
- What changes to tomorrow's contract, if any, does today justify?

Then, over a run of episodes, read the tagged trades back — their win rate and average outcome. A handful of episodes is directional only, not statistical proof — one practitioner guide suggests 30+ tagged trades before drawing firm conclusions. Either way, the point is the same: you stop arguing about revenge trading in general and start looking at what it costs you, specifically.

**Next-day recovery:** after a day the breaker stopped, return the next day at reduced size under extra-strict rules — half size, A-setups only, and the same stop rule armed from the first trade: stop at 2 consecutive losses or at the daily loss limit, whichever comes first. A stopped day is not a debt to be repaid the next morning; it is a day that ended, and the next day starts clean but cautious.

Why this matters beyond one afternoon: a single bad session must not be allowed to compound into a drawdown that threatens the account. The [risk of ruin guide](/articles/risk-of-ruin-trading/) explains why sequences of losses, not single losses, are what end trading accounts — and the breaker exists to break sequences.

## Worked Example (Illustrative): One Loss Honoured vs. One Revenge Sequence

This example is entirely illustrative — invented numbers for teaching, not a real trading record and not a claim about anyone's results. It uses NSE equity options, where every extra trade pays the full charge stack again. Charges below are computed trade by trade, on each trade, not netted against the final trade only.

**Assumptions, stated up front.** The trader's contract sets a daily loss limit of ₹15,000, a 20-minute cooldown, and a half-size return rule. Normal option trade size is ₹50,000 of premium value. Brokerage in this example is a flat ₹20 per executed order — an illustrative example only, not a market-wide rate; check your own broker's contract note for what you actually pay.

NSE equity-options transaction charges are quoted at their all-in total of 0.03553% per side (₹3,553 per crore per side). STT on options is 0.15% on the sell-side premium (from 1 April 2026). SEBI turnover fee is 0.0001% per side, stamp duty is 0.003% on the buy side, and GST is 18% on brokerage plus SEBI and transaction charges only — not on STT or stamp duty. Charges apply whether a trade wins or loses.

**The shared starting loss — Trade 1.** The trader buys options worth ₹50,000 in premium and sells them for ₹45,000: a trading loss of ₹5,000. Charges on this round trip: brokerage ₹40 (two orders), transaction charges ₹33.75, STT ₹67.50, SEBI fee ₹0.10, stamp duty ₹1.50, GST ₹13.29 — total charges ₹156.14. Total cost of Trade 1: **₹5,156.14**.

### Path A: the breaker is honoured

Trade 1 trips the cooldown. The trader sets a 20-minute timer, steps away, logs out of the platform. On return, the winner-test passes on one A-setup, so the trader takes it at half size: buys ₹25,000 of premium, sells for ₹23,500 — a ₹1,500 trading loss, plus ₹103.59 in charges, for a total of ₹1,603.59. That second consecutive loss trips the session stop — 2 consecutive losses, so the day is over under the live rule — and the trader stops with the ledger written up.

**Path A day total: ₹5,156.14 + ₹1,603.59 = ₹6,759.73.** The daily loss limit of ₹15,000 is intact, the stop rule did its job, and tomorrow starts clean.

### Path B: the revenge sequence

Same Trade 1, but the trader skips the cooldown and immediately trades at 2–3× size to win it back. Three extra trades, each losing, each paying the charge stack again:

| Trade | Size (premium bought → sold) | Trading loss | Charges (brokerage + transaction + STT + SEBI + stamp + GST) | Total cost |
|---|---|---|---|---|
| Trade 2 (2×) | ₹1,00,000 → ₹90,000 | ₹10,000 | ₹265.08 | ₹10,265.08 |
| Trade 3 (3×) | ₹1,50,000 → ₹1,32,000 | ₹18,000 | ₹368.26 | ₹18,368.26 |
| Trade 4 (3×) | ₹1,50,000 → ₹1,35,000 | ₹15,000 | ₹374.02 | ₹15,374.02 |

**Path B day total: ₹5,156.14 + ₹10,265.08 + ₹18,368.26 + ₹15,374.02 = ₹49,163.50.** The 2-loss session stop was ignored after Trade 2, and the all-in cost passed the ₹15,000 daily loss limit during Trade 2 (₹15,421.22 cumulative all-in) and the breach was ignored, with Trades 3 and 4 compounding after the breach. The charge stack alone across the three revenge trades is ₹1,007.36 — money paid for the privilege of losing faster.

The comparison is the point: the same starting loss became ₹6,760 on one path and ₹49,164 on the other — more than seven times worse — before any difference in market skill is even considered. And because both paths happened inside a single intraday session, there was no overnight break to interrupt the sequence. That concentration is exactly why the breaker must be time-based and written down, not feeling-based and improvised.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Worked-example contrast panel: the honoured path costs 6,760 rupees with the stop at 2 consecutive losses and the limit intact, versus the revenge sequence at 49,164 rupees with 1,007.36 rupees in charges across three revenge trades." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same starting loss — two very different days</text>
<rect x="40" y="70" width="290" height="150" rx="12" fill="#2a3a34"/>
<text x="185" y="104" text-anchor="middle" fill="#8fd6a0" font-size="13" font-weight="700">Path A: breaker honoured</text>
<text x="185" y="140" text-anchor="middle" fill="#f2f7f4" font-size="20" font-weight="700">₹6,760</text>
<text x="185" y="170" text-anchor="middle" fill="#92a59c" font-size="12">Stop at 2 losses · limit intact</text>
<rect x="350" y="70" width="290" height="150" rx="12" fill="#2a3a34"/>
<text x="495" y="104" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">Path B: revenge sequence</text>
<text x="495" y="140" text-anchor="middle" fill="#f2f7f4" font-size="20" font-weight="700">₹49,164</text>
<text x="495" y="170" text-anchor="middle" fill="#92a59c" font-size="12">Stop + limit ignored · ₹1,007.36 charges</text>
<text x="340" y="268" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">More than seven times worse — before any difference in market skill</text>
</svg>
</figure>

## Risks and Limits: What This Protocol Cannot Do

A circuit-breaker limits behaviour and loss sequences. It does not make any trade profitable, and it does not guarantee profit or prevent losses. A trader can follow every rule in this workbook and still lose money on ordinary, well-planned trades. That is normal trading risk, and no protocol removes it.

Three risks deserve explicit statement:

- **Loss of capital.** Trading can lose money, including the full amount risked on a position. A daily loss limit bounds one day's damage; it does not bound losses across days, weeks, or a run of limit-hitting days.
- **Leverage risk.** Leveraged F&O positions can lose more than the initial margin in adverse moves. A breaker that stops you after losses cannot retroactively un-leverage a position already held, which is why the breach procedure starts with closing positions.
- **Options expiry and time-decay risk.** Options lose value to time decay and can expire worthless. A cooldown does not pause expiry, and a half-size return trade in a fast-decaying option still carries expiry risk.

The scale of that ordinary risk is worth stating plainly: according to SEBI's July 2025 study, nearly 91% of individual traders incurred net losses in the equity derivatives segment in FY25, net of costs. That figure is about individual equity-derivatives traders in FY25 specifically — it is not a claim about all traders, all segments, or any other year. If your results resemble it, the breaker is damage control, not a cure; the deeper question is whether your strategy has an edge at all, which is a question for your position sizing and journal, not for a cooldown timer.

## Frequently Asked Questions

### What do I do after I break the breaker?

Follow the 5-step breach repair in this workbook, in order: stop trading immediately, close breach positions, log the breach honestly, leave the desk and do your walk-away activity with no return today, and review tomorrow — not tonight — what to change in the contract. A breach does not cancel the contract; the repair is part of using it.

### Does a scratch trade reset my consecutive-loss count?

Yes, under this workbook's streak rule: a trade that ends flat or in profit — a scratch/breakeven trade or a win of any size — resets the consecutive-loss count to zero. Only a trade that loses money extends the count, so two losses separated by a scratch are not two consecutive losses.

### How do I adapt the session stop for 24/7 crypto markets?

Define a personal session window and a rolling loss limit in the crypto row of the contract: your window's clock times, and a loss limit measured over any rolling 24 hours rather than a calendar day. When either the 2-consecutive-loss stop or the rolling limit is hit, you stop until the window resets — the window replaces the market close that day traders get for free.

### How do I pick a first number for my daily loss limit?

Use the illustrative translation in this workbook, not a copied prescription: express a first fill-in value as a multiple of your normal risk per trade — for example, 3 times a 1% risk per trade gives a 3% first-fill figure to try — then adjust it from your own ledger. If hitting the number would leave you desperate to recover it the next morning, it is too large.

### How does a swing trader adapt the cooldown?

Use the swing row of the contract: cooldown until the next session, instead of the 15–30 minute day-trading cooldown. The rest of the contract does not change — the session still stops at 2 consecutive losses or at the daily loss limit, whichever comes first, and returns are still at half size under the winner-test.

---

**Risk disclosure:** Trading involves risk of loss of capital. Leveraged F&O positions can lose more than the initial margin in adverse moves, and options lose value to time decay and can expire worthless. This circuit-breaker protocol limits behaviour and loss sequences; it does not guarantee profit, prevent losses, or make any trade profitable. Charges quoted here (including the NSE all-in total of 0.03553% per side for equity options) should be re-checked against your broker's contract note and current exchange circulars before you rely on them, as charges change by Budget and circular.

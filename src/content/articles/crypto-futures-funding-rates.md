---
title: "Crypto Futures Funding Rates, Explained: What It Actually Costs You to Hold a Leveraged Position"
description: "Funding a 10,000 USDT perpetual at 10x costs about 3 USDT a day at baseline rates — 9% of margin over a month. How funding works, when it settles in IST, and how to plan the holding cost before you enter."
meta_description: "Funding a $10,000 crypto perpetual at 10x costs ~3 USDT/day at a 0.01% 8-hour rate. How funding works, when it settles in IST, and how to plan holding costs."
date: 2026-10-03
author: Kaizen
tag: "Crypto futures · Funding"
keywords: ["crypto futures funding rate", "funding rate explained", "Delta Exchange funding", "crypto futures costs"]
---

*By Kaizen · 3 October 2026 · Monks Of Market*

## How much does funding actually cost you to hold a leveraged position?

Take a concrete example: you open a 10,000 USDT perpetual futures position at 10x leverage. That is 1,000 USDT of your own margin. If the funding rate holds steady at 0.01% per 8-hour period, you pay **1.00 USDT every 8 hours**, which works out to **3.00 USDT per day**, roughly **90 USDT over 30 days** — about **9% of your margin**, gone to holding costs alone.

One caveat before the math: this is an *illustrative constant-rate scenario*. Real funding rates are recalculated every 8 hours, they change with market conditions, and today's rate is not a forecast of tomorrow's. You cannot lock a rate in.

In one line: **funding is a recurring payment exchanged between long and short traders in perpetual futures, charged on your full position size, that keeps the futures price anchored to the spot price.** Everything else in this article is about what that payment actually costs you — and how to plan for it before you enter a trade.

### A quick rule of thumb: funding is charged on notional, not margin

**Funding is calculated on your full notional position size, not on your margin** — remember this above everything else in this article. On a 10,000 USDT position, you pay funding on 10,000 USDT — even though you only deposited 1,000 USDT of margin at 10x.

Leverage therefore multiplies funding as a percentage of your margin. At 1x, that 3.00 USDT/day is 0.03% of your capital. At 10x, it is 0.3% of your margin *per day* — which is why multi-day leveraged positions bleed quietly. The more leverage you use, the faster funding eats the capital you posted. Whenever you see a funding rate, multiply it by your leverage to feel what it really costs.

## What a funding rate is and why perpetuals need one

Traditional futures contracts have an expiry date. At expiry, the futures price must converge with the spot price — the contract settles, and that is that. Perpetual futures ("perps") never expire. They let you hold a position indefinitely, which is exactly what makes them useful — and it creates a problem: without an expiry forcing convergence, a perp contract could drift far away from the underlying asset's real price.

Funding is the mechanism that keeps them tethered. It is a small recurring payment that transfers value between traders on opposite sides of the market. When perps trade above spot (a premium), the payment flows one way; when they trade below spot (a discount), it flows the other. The direction and size of the payment nudges traders to take positions that pull the perp price back toward spot.

Two things worth being clear about:

- **Funding is peer-to-peer.** Longs pay shorts, or shorts pay longs. The exchange does not take a cut of the payment — it merely calculates and routes it.
- **Funding is the price of holding, not a fee for trading.** You pay trading fees (maker/taker) when you open and close. Funding is what the open position itself costs you while you keep it alive.

### Who pays whom: what positive and negative funding actually mean

The direction of funding tells you which side is paying:

| Funding rate | Market condition | Who pays whom |
|---|---|---|
| **Positive** | Perps trading at a premium to spot (more demand for longs) | Longs pay shorts |
| **Negative** | Perps trading at a discount to spot (more demand for shorts) | Shorts pay longs |
| **Near zero / zero** | Perps roughly in line with spot | Almost nothing changes hands |

So a positive funding rate is a cost of being long and a source of income for being short; a negative rate is the reverse. Note that funding is computed from the market premium itself — it follows from how traders are positioned, which brings us to a point many traders get wrong.

### Why funding exists as a mechanism, not a prediction

Funding is a **mechanical rebalancing incentive**. It is arithmetic applied to the observed premium between the perp and spot prices. It does not predict where the price is going, and reading it as a signal — "funding is high, so price must fall" — is a mistake.

Think of it like a bridge toll. The toll tells you nothing about what is on the other side; it just makes crossing expensive enough that only people who really want to cross will pay it. High positive funding makes holding longs expensive, which discourages more longs and attracts shorts — and that pressure is precisely what drags the perp price back toward spot. The mechanism works *because* it is dumb and automatic, not because it is clever about the future.

## When funding settles: the 8-hour cycle in IST

On Delta Exchange, the funding rate is computed at three fixed times each day:

| Computation (UTC) | Computation (IST) | Rate applies to |
|---|---|---|
| 00:00 | **05:30** | Next 8 hours |
| 08:00 | **13:30** | Next 8 hours |
| 16:00 | **21:30** | Next 8 hours |

So the rate calculated at 05:30 IST covers the next eight hours of your position, then it is recalculated at 13:30 IST, and again at 21:30 IST. When you read a funding rate on the contract's page, you are reading the rate computed at the most recent of these three timestamps. Three cycles per day is also why per-day math in this article multiplies the 8-hour rate by three.

### Delta settles funding continuously, not in one 8-hour charge

This is where Delta differs from many exchanges you may have used. On platforms like Binance, funding accrues and is charged as one lump payment at each 8-hour settlement — you pay it if you hold a position at the settlement timestamp, and nothing in between. **Delta settles funding continuously, minute by minute, on the prevailing rate.**

The formula per minute is:

> **Payment per minute = Position Value × Funding Rate × 1/480**

(480 is the number of minutes in 8 hours.) Add up 480 of those minute-by-minute payments and you get exactly the full 8-hour charge. In practice this means your funding cost accrues steadily the whole time your position is open — there is no settlement-timestamp trick where you can dodge a payment by closing a minute early, and no free ride for entering a minute after. Hold the position, pay the rate, second by second. This makes the continuous model more honest than discrete settlement — but do **not** assume it is universal. Other exchanges settle in discrete 8-hour chunks, and the behavior differs.

## Worked example: a 10x long held for 1 day, 7 days, and 30 days

All numbers below are an *illustrative constant-rate scenario*: 10,000 USDT notional, 10x leverage (1,000 USDT margin), funding held constant at 0.01% per 8 hours, on a USDT-margined contract. (On inverse contracts the same logic applies, but funding is paid and received in the base asset — e.g. BTC — rather than USDT.) Real rates change every 8 hours; this scenario exists only so you can feel the shape of the cost.

Per 8-hour period, the charge is:

> 10,000 × 0.0001 = **1.00 USDT**

The short side is the mirror image: if the rate were −0.01% and you were short, you would *receive* 1.00 USDT per period instead of paying it.

| Holding period | Funding paid | As % of 1,000 USDT margin |
|---|---|---|
| 8 hours (1 period) | 1.00 USDT | 0.10% |
| 1 day (3 periods) | 3.00 USDT | 0.30% |
| 7 days (21 periods) | 21.00 USDT | 2.10% |
| 30 days (90 periods) | 90.00 USDT | 9.00% |

Look at that last row carefully. After 30 days of holding, funding alone has consumed **9% of your margin** — and the market has not moved against you by even a single tick, nor have you paid any trading fees. The market can move sideways, your trade can be "correct" in direction, and funding still grinds your account down every eight hours. That is the reality of a carrying cost levied on full notional with leverage on top.

For reference, the rate math itself (verified against Delta's documentation): the funding rate equals the average premium plus a clamped adjustment — `Rate = Avg Premium + clamp(Interest Rate − Avg Premium, 0.05%, −0.05%)`, where the average premium is the 8-hour time-weighted average of `(Mark Price − Index Price) / Index Price`, sampled per minute. Delta's interest rate is 0.01% per 8 hours, so whenever the premium sits between −0.04% and +0.06%, funding is exactly 0.01% per 8 hours — the baseline used above. (The clamp binds outside that band, which is why the flat zone isn't symmetric around zero.)

### Annualizing the baseline: 10.95% APR, up to ~109.5% at the cap

Extend the baseline over a full year: 0.01% × 3 periods × 365 days = **10.95% APR**. That is the holding cost at baseline rates — already comparable to a personal loan.

But 0.01% is not the maximum. Delta caps the funding rate at **0.1% per 8-hour period** (set in May 2024; caps can differ per contract, so check the specific contract's specifications). Annualized at the cap:

> 0.1% × 3 × 365 = **~109.5% APR**

Let that number sit with you. In a heated market where everyone is piled into one side, funding can cost more than your entire margin in a year — and over 10% of your margin in a single month. This is why the pre-trade stress test in the checklist below uses the cap, not today's calm rate.

## Funding vs trading fees: when holding costs more than the trade itself

Trading fees are paid once per trade (entry + exit). Funding is paid continuously. So there is always a crossover point: a holding period short enough that fees dominate, and long enough that funding dominates. At the baseline 0.01% per 8 hours on a 10,000 USDT notional:

- Cumulative funding overtakes the **taker round-trip cost** after roughly **3.9 days**.
- It overtakes the **maker round-trip cost** after roughly **1.6 days**.

(These crossover points use the Monks Of Market crypto futures calculator's locked fee schedule — taker 0.05% per side plus 18% GST (0.059% per side, 0.118% round-trip), maker 0.02% per side plus 18% GST (0.0236% per side, 0.0472% round-trip) — verified 30 September 2026. On 10,000 USDT notional: taker round-trip ≈ 11.80 USDT vs 3.00 USDT/day funding → ~3.9 days; maker round-trip ≈ 4.72 USDT vs 3.00 USDT/day → ~1.6 days.)

The takeaway is structural, not tied to any one fee schedule: **within a few days, holding costs eclipse trading costs.** Most traders obsess over basis points on entry and exit while ignoring a cost that can be several times larger on any position held longer than a day or two. If you scalp or day-trade, fees are your main cost. If you swing-trade perps for a week or more, funding is — and it is not close.

## Putting funding in your trade plan before you enter

The fix is simple to state and worth making a habit: **subtract estimated funding from your gross P&L alongside trading fees, and look at the resulting net P&L at both your target and your stop-loss.** A trade whose gross P&L looks fine but whose net P&L is negative after a week of funding is not a trade you want to discover mid-hold.

The Monks Of Market crypto futures calculator bakes fees into net P&L at target and stop-loss already. When planning a multi-day position, add your funding estimate on top: take the current 8-hour rate, multiply by your notional and by the number of periods you expect to hold, and subtract that from the calculator's net figures.

Before every leveraged perp trade, run this checklist:

1. **Check the current funding rate** on the contract you are trading — look for it on the contract ticker in Delta's trading terminal — not yesterday's, not last week's.
2. **Convert it to a per-day cost in USDT** on your actual notional size: `notional × rate × 3`.
3. **Stress-test at the cap** (0.1% per 8 hours): `notional × 0.001 × 3 × days held`. If the trade cannot survive that, your holding period is too long or your position is too big.
4. **Cap your holding period** in the plan itself — decide in advance how many days of funding you are willing to pay, and what triggers an early exit.

Funding is a known cost. Known costs belong in the plan, not in the post-mortem.

### Common mistakes Indian traders make with funding

- **Ignoring funding on multi-day holds.** The classic one. You sized the trade on entry fee and stop distance, held for nine days, and funding quietly took 3–4% of your margin. Nothing "went wrong" with the trade — the cost model was just incomplete.
- **Assuming today's rate persists.** Funding is recalculated every 8 hours. A calm 0.01% can become 0.08% in two cycles if the market gets crowded. The current print is a data point, not a forecast.
- **Thinking in margin terms while paying on notional.** "It's only 0.01%," you think — forgetting that at 10x leverage it is 0.1% of your margin per period, 0.3% per day, and 9% per month. Always translate the rate into margin terms before judging whether it is cheap.
- **Mistaking funding direction for a signal.** Positive funding does not mean "the market knows price will fall." It means longs are currently paying shorts because perps trade at a premium. Trade your setup; use funding for cost planning, not direction calls.

## Risks and limits: what funding math doesn't tell you

A few things the numbers above do not capture, and you should know them before you trade:

- **Leverage can wipe capital fast.** All of the math here assumes your position survives. At 10x leverage, a 10% adverse move liquidates the position outright — funding becomes irrelevant when the margin is gone. Leveraged crypto derivatives can lose money fast; your capital is at risk.
- **Rates change every cycle and cannot be locked in.** There is no way to fix today's funding rate for a future holding period, and no reliable way to predict it. Any plan built on "funding will stay at 0.01%" is a hope, not a plan.
- **Caps are per-contract and changeable.** The 0.1% cap cited above is Delta's general cap set in May 2024, but exceptions exist across contracts and terms can change. Check the specific contract's specifications before assuming any ceiling.
- **Tax treatment is uncertain — talk to a CA.** How crypto futures profits and funding payments are taxed in India is disputed: some readings treat them under the 30% virtual-digital-asset regime, others as speculative business income with different set-off and rate implications. This article is not tax advice, and it does not take a side — consult a chartered accountant who understands derivatives before filing. The prevailing interpretation is that the 1% TDS provision (Section 194S) does **not** apply to futures contracts or funding payments, since no transfer of a virtual digital asset occurs — but confirm this with your CA as well.

## Key takeaways

- **Funding is a carrying cost on your full notional size**, not on your margin — leverage makes it hurt proportionally more as a share of your capital.
- **It accrues against you with time**: at a constant 0.01% per 8 hours, a 10,000 USDT position at 10x pays 3.00 USDT/day, 21.00 USDT/week, and 90.00 USDT — 9% of margin — over 30 days.
- **Within days, funding often exceeds trading fees**: at baseline rates it overtakes maker round-trip fees in about 1.6 days and taker round-trip in about 3.9 days.
- **Estimate funding before entry**: check the current rate, convert to a daily USDT cost, stress-test at the 0.1% cap, and decide your maximum holding period in advance. What you cannot lock in, you must plan around.

## Frequently Asked Questions

### What is the funding rate in crypto futures?

The funding rate is a recurring payment exchanged directly between long and short traders on perpetual futures contracts — not a fee paid to the exchange. When the perpetual contract trades above the spot price, funding is positive and longs pay shorts; when it trades below spot, funding is negative and shorts pay longs. This mechanism keeps the perpetual price anchored to the underlying spot market, since perpetuals never expire.

### How often is funding charged?

On most exchanges, funding settles every 8 hours — at 00:00, 08:00, and 16:00 UTC — and you pay or receive only if your position is open at the settlement timestamp. Close before settlement and no payment applies. Delta Exchange works differently: it settles funding continuously, minute by minute, on the prevailing rate, so there is no settlement-timestamp trick — you pay for exactly the time you hold. Always check your exchange's specific schedule.

### What does a negative funding rate mean?

A negative funding rate means the perpetual contract is trading below the spot price, so short position holders pay long holders. It usually signals that leveraged sellers outnumber leveraged buyers. A negative rate says nothing reliable about where the price will go next — the imbalance can persist for days — but if you are long, you receive funding instead of paying it for as long as the rate stays negative.

### How do I calculate the funding cost on my position?

Multiply your full position value (not your margin) by the funding rate: **Funding payment = Position Value × Funding Rate**. For example, a 10,000 USDT position at a +0.01% 8-hour rate pays 1 USDT per settlement, or 3 USDT per day across three settlements. Leverage does not change the payment amount — it is charged on the whole notional position — but it does change what the payment represents as a share of your margin.

### Can I avoid paying funding?

On exchanges with discrete 8-hour settlements, closing your position before the settlement timestamp means no payment is due — but this does not work on Delta, where funding accrues continuously. The only universal way to avoid funding entirely is to trade spot instead of perpetuals: spot positions carry no funding. For perpetuals, treat funding as a planned holding cost, not an avoidable fee.

### Do funding payments affect my liquidation risk?

Yes. Funding is deducted directly from your margin balance, so sustained positive funding steadily erodes your liquidation buffer even if the price does not move. A position that starts with a comfortable distance to liquidation can drift toward it purely from funding drag over days or weeks. This is why the article's worked examples convert funding into margin-percentage terms — that is the number that determines survival.

---

*Educational disclaimer: This article is for educational purposes only and is not financial advice. Crypto derivatives are high-risk instruments; leveraged positions can lose money rapidly. Nothing here is a recommendation to trade. Do your own research and consider consulting a qualified professional.*

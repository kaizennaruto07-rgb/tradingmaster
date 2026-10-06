---
title: "Options Trading Charges in India (2026): The Complete Cost Breakdown With a Real Worked Trade"
description: "Buying and selling one NIFTY lot at a ₹100 premium costs roughly ₹63 in total charges. Here is every line of the bill — STT, brokerage, exchange fees, GST and stamp duty — and the true breakeven it creates."
meta_description: "How much does an options trade really cost in India? STT, brokerage, exchange fees, GST and stamp duty explained with a rupee-by-rupee NIFTY trade example."
date: 2026-10-02
author: Kaizen
tag: "Indian options · Charges"
keywords: ["options trading charges india", "STT on options", "options brokerage charges", "NIFTY options cost"]
---

> **Educational disclaimer:** This article is for education only and is not financial advice. Options trading carries a high risk of loss — never trade with money you can't afford to lose.

## The short answer: what you'll actually pay on an options trade

Here's the headline number: **buying and selling one NIFTY option lot (premium ₹100, one lot of 65 shares) costs roughly ₹63 in total charges — ₹26.49 on the buy leg and ₹36.04 on the sell leg.** That's about ₹0.96 per share just to get in and out. The option has to move in your favour by that much before you've made a single rupee of profit.

This article breaks down every charge line by line, shows the exact maths for both **buying** and **selling** an option, and explains why most traders underestimate what they're really paying.

*Charge figures verified as of September 2026. Broker fee schedules change — always confirm with your broker's latest schedule before trading.*

## Why options traders underestimate their costs

Most traders look at one number: brokerage. A discount broker advertises "₹20 per order" (the Zerodha-style flat fee, verified September 2026 — the norm, though not universal; full-service brokers charge differently), and the trader files it away as "my cost is ₹20."

That is the advertised-brokerage trap. On a typical options round trip, brokerage is the single biggest line item — but it's only about 60% of the total bill. The rest comes from four charges the broker doesn't set and can't waive: **Securities Transaction Tax (STT), exchange transaction charges, SEBI turnover fee, and stamp duty**, plus **GST** on some of them. None of these show up in the broker's marketing. All of them come out of your P&L.

The other trap is assuming these are negligible. On a small option premium they are not. Paying ₹62.53 on ₹13,000 of round-trip premium turnover is roughly 0.48% of the trade — paid in full whether you win or lose.

## The six options trading charges, explained one by one

Every options trade in India carries some combination of these six charges. Here's the full picture:

| # | Charge | Rate | Who pays | Which leg |
|---|--------|------|----------|-----------|
| 1 | Brokerage | Flat ~₹20 per executed order (discount-broker norm) | Both buyer and seller | Both legs |
| 2 | STT (Securities Transaction Tax) | 0.15% of premium on sale; 0.15% of intrinsic value on exercise | Seller (sale) / purchaser (exercise) | Sale leg only |
| 3 | Exchange transaction charges | NSE: ₹35.03 per lakh (0.03503%); BSE Sensex/Bankex: ₹3,250 per crore (Oct-2024 figure) | Both | Both legs |
| 4 | SEBI turnover fee | ₹10 per crore (0.0001%) | Both | Both legs |
| 5 | Stamp duty | 0.003% of premium turnover | Both | **Buy side only** |
| 6 | GST | 18% on (brokerage + exchange transaction charges) | Both | Both legs |

Two rules underpin everything: **all charges are computed on premium turnover, never on notional value**, and **there are no DP (depository) charges in F&O** — that's an equity-delivery concept that doesn't apply here.

### Brokerage — the advertised number

Brokerage is what your broker charges per executed order. The discount-broker norm is a flat **₹20 per executed order** (Zerodha, verified September 2026), so a round trip — buy and sell, two orders — costs ₹40 in brokerage. Full-service brokers may charge a percentage instead, and even discount brokers' plans can vary by segment, so check your broker's schedule rather than assuming ₹20.

### STT — the one most traders get wrong

STT has two different treatments for options, and mixing them up is the most common costing mistake:

- **On the sale of an option:** 0.15% of the premium, paid by the seller. This rate is effective **1 April 2026** (it was 0.10% before). There is **no STT on buying** an option.
- **On an exercised option:** 0.15% of the intrinsic value, paid by the purchaser. If the option expires worthless, there is no exercise STT.

So STT follows whoever is selling premium or exercising — not whoever opens the trade. Keep this in mind — it's what creates the buyer/writer asymmetry explained below.

### Exchange transaction charges (NSE and BSE)

The exchanges charge a percentage of premium turnover on both the buy and sell sides:

- **NSE:** ₹35.03 per lakh of premium turnover — that's 0.03503%.
- **BSE (Sensex/Bankex options):** ₹3,250 per crore of premium turnover — the last verified figure is from October 2024. A cut to this rate has been reported for 2026 but is **unverified**, so use the Oct-2024 figure and **check the current BSE circular** before trading.

### SEBI turnover fee, stamp duty, and GST

- **SEBI turnover fee:** ₹10 per crore of premium turnover (0.0001%), on both sides. Tiny, but always there.
- **Stamp duty:** 0.003% of premium turnover, on the **buy side only**. This is the mirror image of STT: where STT hits the sale, stamp duty hits the purchase.
- **GST:** 18%, charged only on **brokerage + exchange transaction charges**. STT and stamp duty sit outside GST — you do not pay GST on either.

## Option buyers vs option sellers: what differs and why

The charge schedule is identical for everyone — what differs is *which side of each trade you're on*. Since STT applies to the sale leg and stamp duty applies to the buy leg, a round trip distributes the two charges differently depending on your role:

| Round trip | Entry leg | Exit leg |
|------------|-----------|----------|
| **Buyer** (buy first, sell later) | Stamp duty, no STT | STT, no stamp duty |
| **Writer/seller** (sell first, buy back later) | STT, no stamp duty | Stamp duty, no STT |

Brokerage, exchange transaction charges, and the SEBI fee apply to both legs for both roles. The asymmetry means a buyer's cheapest leg is the entry and the seller's cheapest leg is the exit — and it means you cannot reuse one "options cost" number for both roles. Now, the actual maths.

## Worked example 1: buying a NIFTY option, rupee by rupee

**Setup:** You buy 1 lot of a NIFTY call option at a premium of **₹100** (NIFTY lot size: 65 shares, effective January 2026). Premium turnover per leg = 100 × 65 = **₹6,500**. You sell it later at the same ₹100 premium, so this example shows pure cost — how much you must overcome just to break even.

### Buy leg (entry)

| Charge | Calculation | Amount |
|--------|-------------|--------|
| Brokerage | Flat per order | ₹20.00 |
| NSE transaction charge | 0.03503% × ₹6,500 | ₹2.28 |
| SEBI turnover fee | 0.0001% × ₹6,500 | ₹0.01 |
| Stamp duty (buy side) | 0.003% × ₹6,500 | ₹0.20 |
| STT | None on purchase | ₹0.00 |
| GST | 18% × (₹20.00 + ₹2.28) | ₹4.01 |
| **Buy leg total** | | **₹26.49** |

### Sell leg (exit)

| Charge | Calculation | Amount |
|--------|-------------|--------|
| Brokerage | Flat per order | ₹20.00 |
| NSE transaction charge | 0.03503% × ₹6,500 | ₹2.28 |
| SEBI turnover fee | 0.0001% × ₹6,500 | ₹0.01 |
| Stamp duty | None on sale | ₹0.00 |
| STT on sale of option | 0.15% × ₹6,500 | ₹9.75 |
| GST | 18% × (₹20.00 + ₹2.28) | ₹4.01 |
| **Sell leg total** | | **₹36.04** |

### Round-trip total

| | Amount |
|--|--------|
| Buy leg | ₹26.49 |
| Sell leg | ₹36.04 |
| **Total cost of the round trip** | **₹62.53** |

There it is: **₹62.53** — the headline figure from the top of this article. STT on the sale leg (₹9.75) is the single biggest non-brokerage charge. Spread across 65 shares, your cost is ₹62.53 ÷ 65 = **₹0.96 per share**. The option must move at least ₹0.96 in your favour before you break even.

*Figures rounded to paise; totals may differ by a paisa either way.*

## Worked example 2: selling an option, rupee by rupee

**Setup:** You sell (write) 1 lot of a NIFTY put at a premium of **₹150** (65 shares per lot). Premium turnover per leg = 150 × 65 = **₹9,750**. You buy it back later at the same ₹150 to close. Notice how the STT and stamp-duty positions flip versus the buyer example.

### Sell leg (entry for the writer)

| Charge | Calculation | Amount |
|--------|-------------|--------|
| Brokerage | Flat per order | ₹20.00 |
| NSE transaction charge | 0.03503% × ₹9,750 | ₹3.42 |
| SEBI turnover fee | 0.0001% × ₹9,750 | ₹0.01 |
| STT on sale of option | 0.15% × ₹9,750 | ₹14.63 |
| Stamp duty | None on sale | ₹0.00 |
| GST | 18% × (₹20.00 + ₹3.42) | ₹4.22 |
| **Sell leg total** | | **₹42.26** |

### Buy-back leg (exit for the writer)

| Charge | Calculation | Amount |
|--------|-------------|--------|
| Brokerage | Flat per order | ₹20.00 |
| NSE transaction charge | 0.03503% × ₹9,750 | ₹3.42 |
| SEBI turnover fee | 0.0001% × ₹9,750 | ₹0.01 |
| Stamp duty (buy side) | 0.003% × ₹9,750 | ₹0.29 |
| STT | None on purchase | ₹0.00 |
| GST | 18% × (₹20.00 + ₹3.42) | ₹4.22 |
| **Buy-back leg total** | | **₹27.93** |

### Round-trip total: **₹70.20**

| | Amount |
|--|--------|
| Sell leg | ₹42.26 |
| Buy-back leg | ₹27.93 |
| **Total cost of the round trip** | **₹70.20** |

That's ₹70.20 ÷ 65 = **₹1.08 per share**. The writer breaks even only if the buy-back premium is at least ₹1.08 below the sale premium (₹148.92 or lower against a ₹150 sale). Two lessons here: the writer pays STT up front on entry (₹14.63 — the biggest single non-brokerage charge in this trade), and because charges scale with premium, a higher-premium option costs more in absolute rupees than the ₹100 example — even though the structure is identical.

## True breakeven: how costs change which trades are worth taking

Breakeven on an options trade is not the strike price, and it's not the premium you paid. **True breakeven is your entry premium plus (for a buyer) or minus (for a seller) the per-share cost of the round trip.** Everything between gross P&L and net P&L is charges, and ignoring them means taking trades that can't win.

From the two worked examples:

| | Buyer (₹100 premium) | Writer (₹150 premium) |
|--|--|--|
| Round-trip charges | ₹62.53 | ₹70.20 |
| Cost per share | ₹0.96 | ₹1.08 |
| Breakeven premium move | +₹0.96 (exit ≥ ₹100.96) | −₹1.08 (buy-back ≤ ₹148.92) |

Put it in profit terms: if the buyer sells the ₹100 option at ₹120, the gross profit is (120 − 100) × 65 = ₹1,300, but the **net profit is ₹1,300 − ₹62.53 = ₹1,237.47**. The smaller the move, the more that gap matters — a ₹0.50 favourable move shows a "profit" on the screen but is a loss after charges.

This is where an **options breakeven calculator** earns its keep: plug in the premium, lot size, and exchange before you trade, and it tells you the real number the trade has to beat. Anything that can't clear that number isn't a trade — it's a donation.

## Estimate charges before you trade — and re-check what changes

Costs are knowable before you enter — treat the estimate as part of the trade plan, not an afterthought:

1. **Estimate the round trip before entering.** You know the premium, the lot size, and the exchange. That's everything needed to compute all six charges. If your broker's calculator is clunky, build the formula yourself — the rates in the table above are all you need.
2. **Know which exchange you're trading on.** NSE and BSE charge different transaction fees; the BSE Sensex/Bankex figure in this article is the Oct-2024 verified one, and a reported 2026 cut is unverified — check the current circular.
3. **Watch what you do near expiry.** If an in-the-money option is exercised instead of squared off, STT applies at 0.15% of intrinsic value, paid by the purchaser. On a deep-ITM option, intrinsic-value STT can dwarf every other charge. Squaring off before expiry is usually cheaper — verify the maths for your position.
4. **Count the conditional costs.** Auto square-off charges and call-and-trade fees (around ₹50 + GST per order) are not always-on costs, but if your broker squares you off or you phone in an order, they land on the bill. Add them to the estimate when they apply.
5. **Re-check rates periodically.** SEBI and exchanges revise fee schedules; STT itself changed in April 2026. A calculation from last year's rates is a guess, not an estimate.

## Risks and limitations you must accept

Costs are only half the story. The other half is that most options traders lose money — a SEBI study found that **roughly 9 out of 10 individual F&O traders lose money** (figures covering approximately the three years to FY24; treat the headline carefully, but the direction is unambiguous). Understanding charges does not change those odds by itself.

What understanding charges *does* change is your trade selection: it stops you from taking trades that can't win, and it forces honest P&L accounting. It does not guarantee profit, it does not make a strategy safe, and breakeven maths is not a trading signal.

Also note the framework limits: SEBI's F&O framework sets minimum contract sizes in the **₹15–20 lakh** range and one weekly expiry per exchange — options are leveraged instruments by construction, and leverage amplifies losses as readily as gains. This article is educational content, not financial advice, and nothing here should be read as a recommendation to trade.

## Key takeaways: the risk-first mindset

- A typical one-lot NIFTY option round trip costs **~₹63 in charges** (₹26.49 to buy, ₹36.04 to sell at ₹100 premium) — know this number before you trade, not after.
- Brokerage is the advertised cost; **STT, exchange charges, SEBI fee, stamp duty, and GST** make up the rest. The broker's headline number is not your cost.
- STT hits the **sale** leg (0.15% of premium); stamp duty hits the **buy** leg (0.003%). Buyers and writers therefore pay different totals for the same premium.
- All charges are computed on **premium turnover, never notional**. There are no DP charges in F&O.
- True breakeven = entry premium ± per-share round-trip cost. A trade that can't clear it is a loss by design.
- Around 9 in 10 individual F&O traders lose money (SEBI study, ~3 years to FY24). Estimate your costs, size for the worst case, and treat every trade as risk first.

## Frequently Asked Questions

### How much does it cost to trade one NIFTY options lot in India?

Buying and selling one NIFTY option lot at a ₹100 premium (lot size 65) costs roughly **₹63 in total charges** — ₹26.49 on the buy leg and ₹36.04 on the sell leg. That is about ₹0.96 per share just to get in and out. The option must move in your favour by at least that much before you have made a single rupee of profit. Your exact number varies with the premium and your broker's plan, so estimate it before every trade.

### Do I pay STT when buying options?

No. STT (Securities Transaction Tax) on options is charged only when you **sell** — 0.15% of the premium, effective 1 April 2026. There is no STT on the buy leg. The mirror image is stamp duty: 0.003% of premium turnover, charged on the **buy side only**. This is why buyers and writers pay different totals for the same premium.

### What is STT on options trading in India?

Two rates apply. On the **sale of an option**, STT is 0.15% of the premium (raised from 0.10% on 1 April 2026). On an **exercised option**, STT is 0.15% of the intrinsic value, paid by the purchaser. If the option expires worthless, there is no exercise and no exercise STT. These are government rates — identical at every broker.

### Which trading charges are the same at every broker?

Almost everything except brokerage. STT, exchange transaction charges (0.03553% of premium on NSE), the SEBI turnover fee (₹10 per crore), stamp duty, and GST (18% on brokerage + exchange + SEBI charges) are set by the government, exchanges, and regulators — your broker cannot change them. Only the brokerage itself varies: the discount-broker norm is a flat ~₹20 per executed order, while full-service brokers may charge a percentage.

### What happens to charges if I let my option expire?

If the option expires out of the money, it expires worthless — no sale leg, so no sale STT and no brokerage on exit. If it expires in the money and is exercised, STT of 0.15% applies on the intrinsic value, paid by the option holder. For deep in-the-money options this exercise STT can be meaningful, so factor it in before deciding to hold into expiry.

### Do intraday and positional option trades pay different charges?

The charge structure is identical — same brokerage, same STT, same exchange and regulatory charges. What differs is the holding cost: positional trades may face overnight margin requirements, and any option held into expiry faces the exercise-STT question above. The per-trade charge math in this article applies to both.


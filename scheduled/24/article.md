---
title: "Risk of Ruin: Fixed Fractional vs Fixed Ratio"
description: "Fixed fractional vs fixed ratio position sizing, compared across 20 trades: where they diverge, the Ryan Jones delta, and a labelled heuristic for delta."
meta_description: "Fixed fractional vs fixed ratio position sizing, compared across 20 trades: where they diverge, the Ryan Jones delta, and a labelled heuristic for delta."
date: 2026-11-05
author: Kaizen
tag: "Trading mathematics · Strategy validation"
keywords: ["fixed fractional vs fixed ratio", "Ryan Jones delta", "fixed ratio position sizing", "fixed fractional position sizing", "position sizing models"]
---

*By Kaizen · 5 November 2026 · Monks Of Market*

## Fixed Fractional vs Fixed Ratio: The One-Sentence Difference

Fixed fractional risks a fixed percentage of your current equity on every trade. Fixed ratio earns each bigger size with accumulated profit. That one difference — what your equity is now, versus how much profit you have banked — decides almost everything that follows.

Neither model is "safer" in the abstract. Fixed fractional is safer in a drawdown, because it shrinks your risk automatically as your account falls. Fixed ratio is safer against your own greed on the way up, because it makes you pay an ever-rising price in profit for each additional unit. This article does not re-teach general position sizing, expectancy, or the basics covered in sibling articles. It does one thing: it runs a single illustrative 20-trade sequence through both models, trade by trade, and names the exact trade where the two logics first split — and why. In other words, it answers the position sizing risk of ruin question in concrete form: which sizing rule shrinks risk when you are losing, and which one keeps you from over-scaling when you are winning.

If you need the foundations first, start with [risk of ruin explained](https://monksofmarket.com/articles/risk-of-ruin-trading/) and [position sizing basics](https://monksofmarket.com/articles/position-sizing/). What follows assumes you already know what a stop and a position size are, and spends its words on the head-to-head.

## Fixed Fractional, Fully Worked: A Fixed Percentage of Current Equity

Fixed fractional is the survival-first default most traders meet first. You decide a percentage, you apply it to whatever your account is worth right now, and you size the trade so that a loss at your stop costs roughly that amount. Nothing about your past profits matters directly. Only today's equity matters.

### The Formula: (Equity × Risk%) ÷ Per-Trade Risk

The formula is:

**Position size = (equity × risk%) ÷ per-trade risk**

Here, per-trade risk means the loss per unit if the trade hits its stop — the entry-to-stop distance, expressed in rupees per unit. The result is the number of units to trade. Because equity is current equity, the rupee risk budget moves every time the account moves. A smaller account means a smaller budget. A recovered account means a larger one.

The 1–2% range is a common convention, not a rule handed down from a primary source, and this article uses 1% throughout its worked examples. The percentage-risk idea is commonly presented in the Van Tharp framework; this article does not claim that any one author invented it. For the companion concepts behind the numbers here — what an edge means in the first place, and how a losing run eats into an account — see [what trading expectancy is](https://monksofmarket.com/articles/what-is-trading-expectancy/) and [how losing streaks affect trading accounts](https://monksofmarket.com/articles/how-losing-streaks-affect-trading-accounts/).

### The ₹ Anchor: ₹5,00,000 at 1% Is ₹5,000 of Risk — ₹4,50,000 at 1% Is ₹4,500

Take a ₹5,00,000 account at 1%. The risk budget is:

₹5,00,000 × 1% = ₹5,000

If the same account falls to ₹4,50,000, the same 1% is now:

₹4,50,000 × 1% = ₹4,500

No decision is needed to make that happen. The trader does not have to feel cautious, remember a rule, or cut size manually. The formula cuts it for them, by ₹500, on the very next trade. That automatic shrinkage is the whole point of the model — and, as the shared stream below shows, it is also the reason fractional size can stay stubbornly flat when units are indivisible.

All figures in this article are illustrative, with assumptions stated where they are used: flat per-trade risk, no costs unless stated, and rounding shown explicitly.

### What 10 Straight Losses Actually Do: 1% vs 5%

A losing streak under fixed fractional does not take a fixed rupee bite each time. It takes a percentage of a shrinking account, so each loss is slightly smaller in rupees than the one before. That is why the damage compounds non-linearly — and why the gain needed to recover after 10 losses at 5% (approx. 67.0%) is more than six times the gain needed at 1% (approx. 10.6%), even though the loss itself (approx. 40.1% vs approx. 9.6%) is about 4.2 times as large.

| Streak | Equity remaining | Loss | Gain needed to recover |
| --- | --- | --- | --- |
| 10 straight losses at 1% of current equity | ≈90.4% | ≈−9.6% | ≈+10.6% |
| 10 straight losses at 5% of current equity | ≈59.9% | ≈−40.1% | ≈+67.0% |

The unrounded figures are 90.44% remaining (−9.56%, needing +10.57%) at 1%, and 59.87% remaining (−40.13%, needing +67.02%) at 5%. These assume each loss is exactly the stated percentage of then-current equity, with no costs, no slippage, and no gap beyond the stop. They are arithmetic, not a prediction about any real system: no real streak lands exactly on its stop ten times in a row, and real costs and gaps make real outcomes worse than the idealised maths.

The lesson is the shape, not the decimals. At 1%, ten losses cost you roughly a tenth of the account and a tenth-plus to win back. At 5%, the same ten losses cost you roughly four-tenths of the account and two-thirds on the remainder to win back. That is the compounding cost of a larger percentage, and it is the reason this article's fractional lane uses 1% rather than a larger number. For the full recovery maths, see [drawdown recovery mathematics](https://monksofmarket.com/articles/trading-drawdown-mathematics-of-recovery/).

### Rounding Down: You Cannot Trade 0.57 of a Contract

The formula rarely returns a whole number. When it does not, you round **down** — never up. Rounding up would silently push your risk above the percentage you chose, which defeats the model.

Suppose your budget is ₹5,000 and the per-unit risk is ₹2,600. The formula gives ₹5,000 ÷ ₹2,600 = 1.92 units. You cannot trade 1.92 units of an indivisible contract or lot. You trade 1 unit, your actual risk is ₹2,600, and ₹2,400 of budget is left unused. That remainder is not a rounding error to ignore; it is capital that sits idle until the account grows enough to afford the next whole unit. Keep that remainder in mind. It drives the first divergence in the shared stream below.

This article uses only generic "per-unit risk" and "one lot/contract" language. No lot size, margin figure, or contract specification is assumed, because those vary by instrument and are not needed to compare the two models.

## Fixed Ratio, Fully Worked: Earn Each Bigger Size with Profit

Fixed ratio, developed by Ryan Jones in *The Trading Game* (1999), asks a different question. It does not ask what your equity is. It asks how much profit you have accumulated since you started using the method. Each additional unit must be earned with profit, and the price of each next unit rises. That rising price is the model's risk control on the way up.

### Delta and the Jones Formula — Including the Starting-Size Condition

The model's only freely chosen parameter is the **delta**: the profit per unit required to add one more unit. Delta is not a risk percentage. It is not a percentage of equity. It is a rupee amount of profit per unit.

The general Jones formula is:

**N = 0.5 × [√((2 × N₀ − 1)² + 8P/Δ) + 1]**

Here, N is the number of units, N₀ is the starting size, P is total closed-trade profit since the fixed-ratio method started, and Δ is the delta. Note what P is — and is not. P is closed-trade profit since the method started. It is not account equity, not peak equity, and not open, unrealised profit. If you start the method mid-way through an account's history, you must state where P starts, or the ladder figures will not reconcile with the equity figures. In the shared stream below, P starts at ₹0 at trade 1, on a ₹5,00,000 account.

The shorter form you will see most often is:

**N = 0.5 × [√(1 + 8P/Δ) + 1], valid only for starting size N₀ = 1**

That short form is the special case of the general formula when N₀ = 1, and it must always be stated in the same breath as that condition. Presenting the short form as the general formula is an error. This article uses starting size 1 throughout, so the short form applies — but the condition travels with it every time.

Because only P and Δ determine N, the formula ignores account equity and ignores per-trade risk. Changing the starting account size does not change N, provided equity stays above zero. That independence is both the model's strength and its blind spot, as the failure-modes section shows.

### The ₹50,000 Delta Ladder: Why Each Next Unit Costs More Than the Last

At a delta of ₹50,000, starting from 1 unit, the ladder is:

| Step | Extra profit needed for this step | Cumulative profit needed |
| --- | --- | --- |
| 1 → 2 units | ₹50,000 | ₹50,000 |
| 2 → 3 units | a further ₹1,00,000 | ₹1,50,000 |
| 3 → 4 units | a further ₹1,50,000 | ₹3,00,000 |
| 4 → 5 units | a further ₹2,00,000 | ₹5,00,000 |

The general rule behind the ladder is simple. Cumulative profit to reach N units is Δ × N × (N − 1) ÷ 2. The incremental cost of the next unit, going from N to N + 1 units, is N × Δ. So the second unit costs 1 × Δ, the third costs 2 × Δ, the fourth costs 3 × Δ, and so on. Each next unit costs more than the last. That escalating price is deliberate: it slows growth as profits grow, and it is what stops a hot run from scaling the trader into a size the account has not earned.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Fixed ratio delta ladder at 50,000 rupees: 2 units need 50,000 rupees of cumulative profit, 3 units need 150,000, 4 units need 300,000, and 5 units need 500,000 — each step costs more than the last." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The fixed-ratio delta ladder — each unit costs more profit</text>
<text x="340" y="66" text-anchor="middle" fill="#92a59c" font-size="12">Delta ₹50,000 · cumulative profit needed for each size</text>
<text x="40" y="116" fill="#f2f7f4" font-size="13" font-weight="700">2 units</text>
<text x="470" y="116" fill="#f2f7f4" font-size="13" font-weight="700">₹50,000</text>
<text x="40" y="152" fill="#f2f7f4" font-size="13" font-weight="700">3 units</text>
<text x="470" y="152" fill="#f2f7f4" font-size="13" font-weight="700">₹1,50,000</text>
<text x="40" y="188" fill="#f2f7f4" font-size="13" font-weight="700">4 units</text>
<text x="470" y="188" fill="#f2f7f4" font-size="13" font-weight="700">₹3,00,000</text>
<text x="40" y="224" fill="#f2f7f4" font-size="13" font-weight="700">5 units</text>
<text x="470" y="224" fill="#f2f7f4" font-size="13" font-weight="700">₹5,00,000</text>
<text x="340" y="282" text-anchor="middle" fill="#92a59c" font-size="12">The next unit always costs N × delta — growth slows by design</text>
</svg>
</figure>

### Rounding Under Fixed Ratio: 1.2 Contracts Means 1 Contract in Reality

Fixed ratio has the same rounding problem as fixed fractional, in the other direction. The formula returns fractional units most of the time, and you trade whole units only.

At Δ = ₹50,000, with P = ₹6,000, the short form (starting size 1 unit) gives N = 0.5 × [√(1 + 8 × ₹6,000 ÷ ₹50,000) + 1] = 1.2. In reality, you trade 1 contract, not 1.2. The ₹6,000 of profit is banked, but it buys nothing until P reaches the next rung. As with fractional sizing, never round up: rounding 1.2 up to 2 would hand you a size your profit has not earned, which is exactly what the ladder exists to prevent.

### What Happens When You Start Losing: Step-Down by Rung, Not by Every Loss

Here is the behaviour, stated plainly. Under the symmetric single-delta formula, fixed ratio **does** step down when cumulative profit falls below a ladder rung. It does not re-base off equity, and it does not shrink on every loss the way fractional does — but it does step down by rung.

At Δ = ₹50,000, P = ₹1,50,000 gives N = 3.0, exactly 3 units. If losses pull P down to ₹1,00,000, the formula gives N = 2.56, which is 2 units after rounding down. The trader has lost one unit of size — not because equity fell by a particular amount, but because cumulative profit crossed the ₹1,50,000 rung on the way down.

A smaller down-delta is an explicit choice that speeds that step-down. It is a variant you choose deliberately, not the default, and it is not a precondition for any step-down at all. Do not mistake the rung-based step-down for fractional-style shrinkage: between rungs, fixed-ratio size does not move at all, no matter how many losses arrive, as long as P stays above the rung. The shared stream shows both behaviours — flat between rungs, then a step down when a rung is crossed.

## Same 20 Trades, Both Models: Where They First Diverge — and Why That Trade Matters

Everything so far has been setup. This section is the article. One sequence, two models, no changing the trades in between to flatter either side.

### The Shared Stream: Setup, Assumptions and What P Means Here

The stream is illustrative, not a backtest and not a record of real trades. Its rules are fixed before trade 1 and never changed mid-stream:

- **Starting equity:** ₹5,00,000 in each lane, so both models start from the same account.
- **Per-unit result:** a win pays +₹5,200 per unit; a loss costs −₹2,600 per unit (the per-unit risk). The same per-unit result applies to both lanes on the same trade number, so the only difference is size.
- **Fractional lane:** 1% of current equity before each trade, size = floor((equity × 1%) ÷ ₹2,600), rounded down, remainder stated. Actual risk per trade = size × ₹2,600.
- **Ratio lane:** delta Δ = ₹50,000, starting size 1 unit, using the short form N = 0.5 × [√(1 + 8P/Δ) + 1] (valid only for starting size 1 unit). P starts at ₹0 at trade 1 and is total closed-trade profit in the ratio lane since the method started. Ratio size is floored to whole units; ratio risk per trade = size × ₹2,600.
- **Assumptions:** flat per-trade risk throughout, no costs, no slippage, no gap beyond the stop, no withdrawals or deposits. Every number below was computed from these rules, not estimated.
- **The sequence (W = win, L = loss):** W, W, W, W, W, W, L, W, W, W, W, W, W, L, L, L, L, W, W, L. It mixes wins and losses, includes a winning run, a four-loss run, and a late recovery — the shapes that expose both models.

Because the ratio lane starts on the same ₹5,00,000 account and has no other cash flows in this illustration, its P at any point equals its equity minus ₹5,00,000. That is a consequence of this stream's setup, not a definition: in general, P is profit since the method started, and equity is whatever the account holds. The distinction matters the moment a trader starts the method on an account that already has history, or withdraws funds mid-way.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Side-by-side equity curves for fixed fractional vs fixed ratio over 20 illustrative trades, marking the divergence trade and the ratio step-up and step-down trades." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same 20 trades, two logics — where they first diverge</text>
<text x="340" y="66" text-anchor="middle" fill="#92a59c" font-size="12">Schematic paths for the shared illustrative stream, not measured data</text>
<polyline points="40,240 140,210 200,230 260,190 320,170 400,150 470,120 540,140 620,110" fill="none" stroke="#8fd6a0" stroke-width="3"/>
<polyline points="40,240 140,215 200,235 260,200 320,175 400,130 470,150 540,170 620,150" fill="none" stroke="#e8825a" stroke-width="3" stroke-dasharray="7 5"/>
<text x="40" y="100" fill="#8fd6a0" font-size="12" font-weight="700">— Fixed fractional: shrinks on every loss</text>
<text x="40" y="282" fill="#e8825a" font-size="12" font-weight="700">- - Fixed ratio: steps up and down by rung only</text>
<text x="320" y="290" text-anchor="middle" fill="#92a59c" font-size="11">Trade 5: first divergence · Trades 13–17: ratio step-up and step-down</text>
</svg>
</figure>

### Side by Side, Trade by Trade: Equity, Size and Risk per Trade

Read the table in pairs. The fractional columns show equity before the trade, the 1% budget and the size it actually buys (with the unused remainder), and equity after. The ratio columns show cumulative profit P before the trade, the formula's raw size and the whole units actually traded, and equity after. "Risk" in both lanes is size × ₹2,600 — the loss if that trade hits its stop.

In short: both lanes trade the same size for trades 1–4, fractional steps up first at trade 5, ratio catches up at trade 13, then steps back down at trade 17. Everything else in the table is the working-out behind those four moments.

| # | Per-unit result | Fractional: equity before | Fractional size — budget → actual risk (remainder) | Fractional equity after | Ratio: P before | Ratio size (raw → traded) | Ratio risk | Ratio equity after |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Win +₹5,200 | ₹5,00,000 | 1 — ₹5,000 → ₹2,600 (₹2,400 left) | ₹5,05,200 | ₹0 | 1.00 → 1 | ₹2,600 | ₹5,05,200 |
| 2 | Win +₹5,200 | ₹5,05,200 | 1 — ₹5,052 → ₹2,600 (₹2,452 left) | ₹5,10,400 | ₹5,200 | 1.18 → 1 | ₹2,600 | ₹5,10,400 |
| 3 | Win +₹5,200 | ₹5,10,400 | 1 — ₹5,104 → ₹2,600 (₹2,504 left) | ₹5,15,600 | ₹10,400 | 1.32 → 1 | ₹2,600 | ₹5,15,600 |
| 4 | Win +₹5,200 | ₹5,15,600 | 1 — ₹5,156 → ₹2,600 (₹2,556 left) | ₹5,20,800 | ₹15,600 | 1.43 → 1 | ₹2,600 | ₹5,20,800 |
| 5 | Win +₹5,200 | ₹5,20,800 | **2 — ₹5,208 → ₹5,200 (₹8 left)** | ₹5,31,200 | ₹20,800 | 1.54 → 1 | ₹2,600 | ₹5,26,000 |
| 6 | Win +₹5,200 | ₹5,31,200 | 2 — ₹5,312 → ₹5,200 (₹112 left) | ₹5,41,600 | ₹26,000 | 1.64 → 1 | ₹2,600 | ₹5,31,200 |
| 7 | Loss −₹2,600 | ₹5,41,600 | 2 — ₹5,416 → ₹5,200 (₹216 left) | ₹5,36,400 | ₹31,200 | 1.72 → 1 | ₹2,600 | ₹5,28,600 |
| 8 | Win +₹5,200 | ₹5,36,400 | 2 — ₹5,364 → ₹5,200 (₹164 left) | ₹5,46,800 | ₹28,600 | 1.68 → 1 | ₹2,600 | ₹5,33,800 |
| 9 | Win +₹5,200 | ₹5,46,800 | 2 — ₹5,468 → ₹5,200 (₹268 left) | ₹5,57,200 | ₹33,800 | 1.77 → 1 | ₹2,600 | ₹5,39,000 |
| 10 | Win +₹5,200 | ₹5,57,200 | 2 — ₹5,572 → ₹5,200 (₹372 left) | ₹5,67,600 | ₹39,000 | 1.85 → 1 | ₹2,600 | ₹5,44,200 |
| 11 | Win +₹5,200 | ₹5,67,600 | 2 — ₹5,676 → ₹5,200 (₹476 left) | ₹5,78,000 | ₹44,200 | 1.92 → 1 | ₹2,600 | ₹5,49,400 |
| 12 | Win +₹5,200 | ₹5,78,000 | 2 — ₹5,780 → ₹5,200 (₹580 left) | ₹5,88,400 | ₹49,400 | 1.99 → 1 | ₹2,600 | ₹5,54,600 |
| 13 | Win +₹5,200 | ₹5,88,400 | 2 — ₹5,884 → ₹5,200 (₹684 left) | ₹5,98,800 | ₹54,600 | 2.06 → **2** | ₹5,200 | ₹5,65,000 |
| 14 | Loss −₹2,600 | ₹5,98,800 | 2 — ₹5,988 → ₹5,200 (₹788 left) | ₹5,93,600 | ₹65,000 | 2.19 → 2 | ₹5,200 | ₹5,59,800 |
| 15 | Loss −₹2,600 | ₹5,93,600 | 2 — ₹5,936 → ₹5,200 (₹736 left) | ₹5,88,400 | ₹59,800 | 2.13 → 2 | ₹5,200 | ₹5,54,600 |
| 16 | Loss −₹2,600 | ₹5,88,400 | 2 — ₹5,884 → ₹5,200 (₹684 left) | ₹5,83,200 | ₹54,600 | 2.06 → 2 | ₹5,200 | ₹5,49,400 |
| 17 | Loss −₹2,600 | ₹5,83,200 | 2 — ₹5,832 → ₹5,200 (₹632 left) | ₹5,78,000 | ₹49,400 | 1.99 → **1** | ₹2,600 | ₹5,46,800 |
| 18 | Win +₹5,200 | ₹5,78,000 | 2 — ₹5,780 → ₹5,200 (₹580 left) | ₹5,88,400 | ₹46,800 | 1.96 → 1 | ₹2,600 | ₹5,52,000 |
| 19 | Win +₹5,200 | ₹5,88,400 | 2 — ₹5,884 → ₹5,200 (₹684 left) | ₹5,98,800 | ₹52,000 | 2.03 → 2 | ₹5,200 | ₹5,62,400 |
| 20 | Loss −₹2,600 | ₹5,98,800 | 2 — ₹5,988 → ₹5,200 (₹788 left) | ₹5,93,600 | ₹62,400 | 2.16 → 2 | ₹5,200 | ₹5,57,200 |

Final illustrative outcome of this one sequence only: fractional ends at ₹5,93,600 (+₹93,600) and fixed ratio ends at ₹5,57,200 (+₹57,200). That gap is not a verdict that fractional "wins". It is an artefact of this sequence's order: fractional scaled up early (trade 5) and stayed at 2 units through the losing run, while ratio scaled up late (trade 13), took the losing run at 2 units, and stepped back down. Reverse the order — put the losing run first, the winning run second — and the same two models would tell a different story on the same trades. Never read a single illustrative stream as a return projection.

Three moments in the table deserve a second look. First, trade 12: ratio P is ₹49,400, just ₹600 short of the ₹50,000 rung, so the raw size is 1.99 — and the traded size is still 1. One more win changes everything, and the next trade proves it. Second, trades 14–16: ratio size stays at 2 through three losses, because P stays above ₹50,000 throughout; the model does not flinch on every loss. Third, trade 17: P falls to ₹49,400 before the trade, the raw size drops to 1.99, and the traded size steps down to 1 — the rung-based step-down in action, one trade after the fractional lane, which is still at 2 units, takes its fourth loss at ₹5,200 of risk.

### The Divergence Trade, Named: The Moment the Two Logics Split

**The divergence trade is trade 5.**

On trade 5, fixed fractional trades 2 units, risking ₹5,200. Fixed ratio trades 1 unit, risking ₹2,600. Same trade, same per-unit result (+₹5,200 per unit), double the risk on one side. From trade 5 onward, the two lanes are never trading the same size again in this stream except briefly at trades 13–16 and 19–20, when both happen to sit at 2 units for different reasons.

Why trade 5, and not earlier? Trades 1–4 are identical in size, and that is itself instructive: for four wins, both models agree, because neither has crossed a threshold yet. Fractional equity climbs from ₹5,00,000 to ₹5,20,800, but its 1% budget climbs only from ₹5,000 to ₹5,156 — still short of the ₹5,200 needed for a second unit at ₹2,600 of per-unit risk. Ratio profit climbs to ₹20,800, but the first rung demands ₹50,000. Both models are waiting.

Trade 5 is when fractional stops waiting. Equity before the trade is ₹5,20,800, so the budget is ₹5,208 — ₹8 more than the ₹5,200 cost of 2 units. The floor flips from 1 to 2, the remainder collapses from ₹2,556 to ₹8, and the fractional win that trade is worth ₹10,400 instead of ₹5,200. Ratio, meanwhile, is still waiting: P before trade 5 is ₹20,800, the formula gives 1.54, floored to 1, and its win is worth only ₹5,200.

The mechanism is the whole article in one trade. Fractional diverges because it answers "what is my equity now?" — and equity just crossed a whole-unit threshold. Ratio does not diverge, because it answers "how much profit have I banked?" — and ₹20,800 is not ₹50,000. One model moves on equity; the other moves only on rungs. Every later difference in the table traces back to that split in what each model measures.

### Geometric vs Square-Root Growth: Reading the Shapes Without Projecting Returns

The two models grow in different shapes, and the shapes explain the table's texture. Fixed fractional compounds geometrically in equity: each win adds a percentage of a growing account, so, in the idealised maths, equity growth accelerates as the account grows. Fixed-ratio units grow approximately with the square root of accumulated profit — for large P, N ≈ √(2P/Δ) — so each additional unit demands more profit than the last, and unit growth deliberately slows at scale.

Read those shapes as descriptions of the formulas, not as return forecasts. Square-root unit growth does not mean fixed ratio returns are lower in any given real run; in a different trade order, ratio's late scaling could outperform fractional's early scaling, or underperform it by more. The shared stream is the only outcome comparison this article offers, and it is explicitly illustrative. What the shapes do tell you, reliably, is temperament: fractional lets size ride equity wherever equity goes, up and down; ratio throttles size on the way up and leaves it flat between rungs on the way down. Choose the temperament you can actually live with, not the shape that looked better in one sequence.


## Which One Should You Choose? Account Size × Granularity × Drawdown Tolerance

No single sentence answers this for every trader, and any article that pretends otherwise is selling, not explaining. Work through three questions in order — account size, granularity, drawdown tolerance — and the choice usually makes itself. If the three answers point in different directions, the last one, tolerance, breaks the tie, because it is the one that decides whether you will actually keep using the model when it hurts.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Decision procedure for choosing fixed fractional vs fixed ratio position sizing by account size, granularity and drawdown tolerance." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Choose one: account size × granularity × drawdown tolerance</text>
<rect x="40" y="80" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="112" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Step 1 — Account size: can it carry the model?</text>
<text x="340" y="152" text-anchor="middle" fill="#92a59c" font-size="16">↓</text>
<rect x="40" y="168" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="200" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Step 2 — Granularity: divisible shares or indivisible lots?</text>
<text x="340" y="240" text-anchor="middle" fill="#92a59c" font-size="16">↓</text>
<rect x="40" y="256" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="288" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Step 3 — Drawdown tolerance: must size shrink on every loss?</text>
</svg>
</figure>

### Step 1 — Account Size: What Each Model Does to a Small vs Large Account

On a small account, fractional sizing re-bases continuously: every rupee of gain or loss changes the next trade's budget, even if rounding means the traded size does not change that day. That continuity is forgiving when capital is scarce, because risk never jumps in steps. Ratio, on a small account, is a waiting game: until cumulative profit reaches the first rung, size stays exactly where it started, and the trader can feel stuck at 1 unit for a long time.

On a large account, the balance shifts. Fractional size grows smoothly with equity, which is comfortable — but it also means a large account can scale into a losing run at full size without any profit test having been passed. Ratio's escalating rung prices become a genuine brake at scale: the fifth unit costs four times the delta, so growth slows exactly when over-scaling would hurt most.

There is no consensus winner on fixed fractional vs fixed ratio for small accounts, and this article does not invent one. Published comparisons conflict: some recommend fractional for beginners and smaller accounts, for simplicity and capital protection, while others present ratio as attractive for small accounts precisely because it scales once a profit threshold is met. Treat the small-account question as conditional — granularity and drawdown tolerance, the next two steps, decide it — not as a verdict to quote.

### Step 2 — Granularity: Divisible Shares vs Indivisible Lots

Granularity is the axis that most often decides the choice in practice. If you trade divisible shares, fractional sizing works almost as designed: the budget converts into a share count with only small rounding loss, and size tracks equity closely. Ratio's rung jumps, by contrast, feel coarse — you wait, wait, then jump a whole unit at once.

If you trade indivisible lots or contracts, both models bite, in different places. Fractional rounding-down strands remainder: in the shared stream, trade 4 leaves ₹2,556 of budget unused, and trade 5 leaves just ₹8 — the same model, wildly different waste, depending on where equity sits relative to the next whole unit. Ratio's all-or-nothing rungs overshoot or undershoot the size you actually want: at P = ₹49,400, you want something close to 2 units, and you get 1. A trader whose instrument forces indivisible units should therefore ask, honestly, which kind of waste they mind less: fractional's stranded remainder, or ratio's banked-but-unusable profit between rungs.

### Step 3 — Drawdown Tolerance: How Much Pain Before You Must Shrink

Drawdown tolerance is the amount of fall you can absorb — in rupees, stated before you trade — without abandoning the model, breaking its rules, or being forced out. Write it down as a number. Vague tolerance ("I can handle a bad month") is not a tolerance; it is a mood, and moods do not survive drawdowns.

A trader who must shrink on every loss needs fractional's automatic re-basing. Each loss cuts the next trade's budget, whether the trader feels like cutting or not. A trader whose priority is not over-scaling on the way up, and who can tolerate a losing run hitting a stepped-up size — as trades 14–16 hit the ratio lane at 2 units in the stream — can consider ratio, provided the delta cross-check in the next section passes. If you cannot tolerate that specific picture, a losing run at a size you stepped up into just before it started, ratio is not your model, however elegant its ladder looks on the way up.

For the language of drawdown limits themselves, see [maximum drawdown](https://monksofmarket.com/articles/maximum-drawdown/).

### Worked Example: One Reader, Three Answers, Tolerance Breaks the Tie

Take one illustrative reader, with assumptions stated: a ₹5,00,000 account, indivisible lots, per-unit risk ₹2,600 (the shared stream's figure, reused here only as an illustration), and a stated drawdown tolerance of ₹25,000 — the same tolerance figure used in the delta cross-check below.

- **Account size:** ₹5,00,000 is neither so small that ratio's wait for the first rung is obviously decisive, nor so large that ratio's brake at scale is obviously decisive. Account size alone leaves the choice tied.
- **Granularity:** indivisible lots bite under both models — fractional strands remainder, ratio banks profit between rungs — so granularity alone also leaves the choice tied.
- **Drawdown tolerance breaks the tie:** this reader cannot accept a losing run at a stepped-up size that breaches ₹25,000. A four-loss run at 3 units costs 4 × 3 × ₹2,600 = ₹31,200, which breaches it, while the same run at 2 units costs 4 × 2 × ₹2,600 = ₹20,800, which does not. Because ratio holds its size flat between rungs, it can carry a stepped-up size straight into such a run (as trades 14–16 do in the stream), while fractional re-bases its rupee budget on every loss. For this reader, tolerance therefore points to fractional — unless a much higher delta delays ratio's step-up enough to pass the same test, which is a delta decision, not a reason to ignore the tie-break.

### When to Switch Models — and What Breaks If You Switch Mid-Drawdown

Switching models is allowed. Switching mid-drawdown, without resetting the parameters, is where it breaks.

Switch at a defined checkpoint, after a review — for example, at a month-end, or when equity returns to a level you set in advance — and restate everything the new model needs. If you switch to fractional, restate the risk percentage and the per-unit risk it will be applied to. If you switch to ratio, re-base P explicitly and state the new start point in writing: P starts at ₹0 on the switch date, on the equity at that date, with the delta you have chosen. Without that restatement, ratio's ladder will silently carry profit (or losses) from the old regime into the new one, and its rungs will mean nothing.

Switching mid-drawdown breaks the new model in one of two ways. Switch to fractional on depressed equity, and the new model's first sizes are computed off a low base — you lock in a smaller size than the model intends for your normal account, and recovery, which needs size, starts from a handicap. Switch to ratio on depleted cumulative profit, and you either step into a size the drawdown has not earned (if you carry an old, high P forward) or restart the ladder from zero just when the account can least afford a long wait for the first rung.

Either way, the switch, not the market, has set your size. If you must switch mid-drawdown, say so explicitly, restate every parameter, and accept that the first sizes under the new model are a consequence of the switch date, not of the model alone.

Companion articles on R-multiples and on net expectancy (how expectancy looks after every cost and friction) are staged and not yet live, so they are mentioned here as plain-text pointers only, not as links. They cover how to measure whether the system behind either sizing model is worth sizing at all — a question this comparison deliberately does not re-teach. For the expectancy calculation itself, see [how to calculate real expectancy](https://monksofmarket.com/articles/how-to-calculate-real-expectancy/).

### Combining the Two: An Original Construction, Not Standard Practice

Can you combine the two models? As a clearly-labelled original construction for this article, yes — with rules stated, not implied. The construction is: **ratio gates the step-up, fractional caps the per-trade risk.**

The rules are: (1) size may only step up when the ratio ladder earns the next rung — no step-up on equity growth alone; (2) on every trade, the fractional cap still applies — actual risk per trade may not exceed 1% of current equity (or whatever percentage the trader has set), so if the ratio-earned size would breach the cap, the trader trades the smaller, cap-compliant size; (3) step-down follows whichever model shrinks first — a fractional budget cut or a ratio rung crossed downward — so protection is never waiting on the slower model.

This is not standard practice and is not presented as an established combined method. Only a passing mention of a hybrid was found in published material, with no method, rules, or evidence behind it. Treat the construction above as an idea to test on paper first, with its own rules written down, not as a method with a track record. If you use it, keep a log of every trade where the cap, rather than the rung, set the size — those trades are where the hybrid actually differs from pure ratio, and they are the first place to look if results surprise you.

## How to Choose a Delta: A Clearly-Labelled Heuristic, Not Jones's Method

No authoritative Jones delta-selection formula was found. Published material says only that a lower delta is more aggressive (faster scaling), a higher delta is more conservative (slower scaling), and a delta set too low collapses the method into aggressive scaling. No numeric "too low" threshold exists in the sources. What follows is therefore a practical answer to how to choose delta: **a heuristic for this article, not Jones's method**. It is computable, it is honest about its status, and it replaces vague advice with a number the reader can actually test.

### The Heuristic: Delta = Average Win per Unit × W (Illustrative W = 3–5)

**Delta = average win per unit × W**, where W is the number of average wins the trader requires as proof before scaling. Here, "average win per unit" means the average profit per unit on winning trades only, measured net of costs over a stated sample of past trades — and it must be computed that same way every time the delta is revisited, so the heuristic is not silently changed by switching definitions. It is not the average result across all trades (wins and losses), and it is not gross profit before costs.

The units work: average win per unit is rupees per unit, W is a dimensionless count of wins, and their product is rupees per unit — exactly delta's units. The spirit matches Jones's "earn the right to scale" idea, but no part of this rule is attributed to Jones, to any other author, or to any study. It is this article's heuristic.

Worked choice: suppose a system's average win is ₹10,000 per unit. Then W = 3 gives delta ₹30,000; W = 4 gives ₹40,000; W = 5 gives ₹50,000 — the article's ₹50,000 lane, at the demanding end of the illustrative range. That ₹10,000 figure is an independent illustration for this heuristic, not the shared stream's ₹5,200 per-unit win; the two numbers belong to different examples and are not interchangeable. A trader choosing W = 5 is saying: "I will not add a unit until I have banked, in profit per unit, the equivalent of five average wins." A trader choosing W = 3 is saying the same thing with less proof demanded, and will scale faster — and, when a losing run follows a step-up, will feel it sooner. W is a statement about how much proof you need, not a tuning knob to optimise on past data.

### The Drawdown-Tolerance Cross-Check: Raise Delta If Either Check Fails

A delta chosen from average wins alone is unfinished. Cross-check it against the drawdown tolerance you wrote down in the decision procedure, before trading it:

1. **The profit-proof check.** The profit that must be banked before the next step, going from N to N + 1 units, is N × Δ. At Δ = ₹50,000, going 2 → 3 requires ₹1,00,000 of cumulative profit before scaling, and 3 → 4 requires ₹1,50,000. This is a proof-and-patience test, not a loss-tolerance test: profit to be earned and loss that can be absorbed are different kinds of money, so this check asks only whether the profit required counts as enough proof before adding a unit. If it feels too small to count as proof — if you would scale on thin evidence — raise delta, so scaling waits for more proof. The genuine loss-tolerance test is check 2 below.
2. **The losing-run check.** Price a typical losing run at the new, larger size and check it against the same tolerance. In the shared stream's terms, where per-unit risk is ₹2,600, a four-loss run at 3 units costs 4 × 3 × ₹2,600 = ₹31,200, while the same run at 2 units costs ₹20,800. If your tolerance is ₹25,000, the run at 3 units breaches it and the run at 2 does not — so a delta that steps you up to 3 units on that tolerance fails the check. Raise delta until the step-up you are about to take survives a typical losing run within tolerance.

If either check fails, raise delta. Do not lower it to "get scaling sooner" — that is the direction that collapses the method into aggressive scaling. Re-run both checks after any change, and after any material change in the system's average win, because a delta built on an old average win is a delta built on a system that no longer exists.

### Sensitivity Pair: Too Low (₹25,000) vs Too High (₹1,00,000) Against the ₹50,000 Lane

Halving or doubling the delta shows, in one table, why delta choice matters more than most traders expect. These are arithmetic illustrations only, not recommendations and not thresholds.

| Cumulative profit needed | Δ = ₹25,000 (low) | Δ = ₹50,000 (article lane) | Δ = ₹1,00,000 (high) |
| --- | --- | --- | --- |
| For 2 units | ₹25,000 | ₹50,000 | ₹1,00,000 |
| For 3 units | ₹75,000 | ₹1,50,000 | ₹3,00,000 |
| For 4 units | ₹1,50,000 | ₹3,00,000 | ₹6,00,000 |

At Δ = ₹25,000, a trader reaches 3 units on ₹75,000 of profit — half what the article lane demands — and reaches 4 units on the same ₹1,50,000 of profit that only buys the article lane 3 units. A losing run after that early scaling hits a size earned on comparatively little proof. At Δ = ₹1,00,000, the same trader needs ₹3,00,000 just to reach 3 units, and may spend a long, frustrating period at 1–2 units while a working system banks profit that buys no additional size. The article lane sits between those two frustrations: slow enough that each unit is genuinely earned, fast enough that scaling is not a rumour. Only the verified direction is claimed here — lower delta, more aggressive and faster; higher delta, more conservative and slower — and no numeric threshold for "too low" is invented.

## Where Each Model Breaks: Failure Modes as Trade-Offs, Not Measured Findings

Neither model fails the way a machine fails. Each trades one risk for another, and the honest way to describe that is as trade-offs implied by the maths — not as named, measured findings, and with no statistics attached to any of them.

### Fixed Fractional's Trade-Offs: Slow Recovery and Over-Caution

Slow recovery follows directly from the formula. After a drawdown, the account is smaller, so the same percentage is fewer rupees, so each winning trade adds fewer rupees than it did before the drawdown. Recovery therefore takes more winning trades than the fall took losing trades, even with the same per-unit results. That is drawdown recovery position sizing in its simplest form: the maths of getting back is harder than the maths of falling, and fractional sizing, by shrinking risk on the way down, also shrinks the absolute gains on the way back up until equity recovers.

Over-caution after growth is the mirror image, and it is a judgement, not a measured effect. As the account grows, the trader who keeps the same percentage is, in rupee terms, risking more per trade than ever before — yet the percentage feels unchanged, and some traders respond by cutting the percentage informally, or by hesitating on trades the model would size normally. The model itself does not become cautious; the trader's relationship with larger rupee numbers does. If you notice yourself overriding the formula after growth, that override, not the formula, is what needs examining.

### Fixed Ratio's Trade-Offs: Profit-Blindness, a Delta Set Too Low, and Lot Granularity

Profit-blindness to equity drawdown is the central ratio trade-off, and it is a logical consequence of the formula, not an empirical study result. Because only cumulative profit P determines size, a trader can be "on schedule" by P while the account itself is well below its peak. In the shared stream, after trade 16, ratio equity is ₹5,49,400 — below its ₹5,65,000 peak after trade 13 — yet size is still 2 units, because P is still ₹54,600, above the ₹50,000 rung. The model sees profit banked; it does not see the peak-to-current fall.

And because step-ups happen on profit, the model can step up just before a losing run, as it does at trade 13 in the stream, so that the run hits the larger size. That is not a flaw the model hides; it is the price of ignoring equity.

A delta set too low collapses the method into aggressive scaling. The sensitivity pair above shows how fast that happens: at Δ = ₹25,000, the trader is at 3 units on profit that the ₹50,000 lane would still call 2 units. No threshold number rescues a careless delta; only the heuristic and its cross-check, applied honestly, slow the scaling down to something the trader's tolerance can survive.

Lot granularity is ratio's version of the rounding trap. Formula outputs between whole units — 1.54, 1.99, 2.06 — are untradable, and the gap between the formula's answer and the traded size is profit banked but unusable until the next rung. At P = ₹49,400, the formula is almost at 2 units, and the trader still trades 1. That gap is frustrating, and frustration is what tempts traders to round up. Do not. Rounding up is not a shortcut; it is a different delta, chosen in the moment, without the cross-check.

### The Granularity Trap Both Models Share

As Step 2 shows, both models promise a smooth size and deliver a stepped one whenever units are indivisible. The practical response is the same for both: track the remainder explicitly, in your journal, alongside size — unused budget for a fractional trader, P's distance to the next rung for a ratio trader — so the next threshold never comes as a surprise, and you are far less likely to force a size the model has not yet earned.

## Risks and Limitations You Must Accept Before Using Either Model

Before using either model, accept these limits plainly.

First, the ruin framing. Proportional fractional losses approach zero asymptotically but never reach exactly zero in the idealised model — repeated multiplication by (1 − risk%) gets smaller forever without ever arriving at zero. That is not the same as safety. Practical ruin is what matters: hitting a drawdown limit you set (or that is set for you), a margin call, or a size so small the account can no longer trade meaningfully.

Fixed fractional must never be claimed to "prevent ruin" without that qualification, and the asymptotic claim itself holds only if losses are capped exactly at the stated percentage. Real gaps beyond a stop, real costs, and forced liquidation can break that cap, so real accounts can be ruined in ways the idealised maths does not show.

Second, fixed ratio's protection is on the way up, through slow square-root growth, not on the way down. It ignores equity and per-trade risk by design, so a drawdown does not shrink its size until a rung is crossed, and a step-up can precede a losing run. A smaller down-delta speeds step-down, but it is an explicit choice, not a safety net that is there by default.

Third, no figure in this article is a return projection, and no combination of percentage, delta, or heuristic guarantees survival or any outcome. The 20-trade stream is one illustrative order of wins and losses; a different order gives different endings under both models. Test any model on paper, across many sequences, before trusting it with capital you cannot afford to lose — and remember that paper testing without costs still flatters every model it touches.

**Risk disclosure:** The author is not SEBI-registered. This article is educational content only and is not investment advice, nor a recommendation to trade any instrument or to use any position-sizing model. Trading involves the risk of loss, and position sizing manages the size of that risk — it does not remove it.

## Frequently Asked Questions

### What is fixed fractional position sizing?

Fixed fractional position sizing means risking a fixed percentage of your current equity on every trade. Size = (equity × risk%) ÷ per-trade risk, where per-trade risk is the loss per unit at your stop. Because it uses current equity, the rupee risk shrinks automatically in a drawdown and grows as the account recovers. At ₹5,00,000 and 1%, the budget is ₹5,000; at ₹4,50,000, the same 1% is ₹4,500. Sizes are rounded down to whole tradable units, with any remainder left unused.

### What is fixed ratio position sizing, and what is a delta?

Fixed ratio position sizing, developed by Ryan Jones in *The Trading Game* (1999), sizes trades from accumulated profit, not from equity or per-trade risk. Its only freely chosen parameter is the delta: the profit per unit required to add one more unit. The short formula, valid only for starting size 1 unit, is N = 0.5 × [√(1 + 8P/Δ) + 1], where P is total closed-trade profit since the method started. At delta ₹50,000, reaching 2 units needs ₹50,000 of cumulative profit, 3 units needs ₹1,50,000, and 4 units needs ₹3,00,000 — each next unit costs more than the last.

### Fixed fractional vs fixed ratio — which is better for a small account?

There is no consensus winner, and published sources conflict: some recommend fractional for beginners and smaller accounts, for simplicity and capital protection, while others present ratio as attractive for small accounts because it scales once a profit threshold is met. Decide conditionally, not by verdict. If you trade divisible shares, fractional's continuous re-basing usually fits better. If you trade indivisible lots, both models bite through rounding, so granularity and your stated drawdown tolerance decide: if you must shrink on every loss, choose fractional; if your priority is not over-scaling on the way up and you can tolerate a losing run hitting a stepped-up size, ratio is the candidate — provided its delta passes the cross-check in this article.

### Does fixed fractional position sizing prevent risk of ruin?

No, not in the practical sense. In the idealised maths, proportional losses approach zero asymptotically and never reach exactly zero, so the model alone cannot take an account to precisely zero. But practical ruin — hitting a drawdown limit, a margin call, or a size too small to trade meaningfully — is entirely possible, and real gaps beyond a stop, costs, and forced liquidation can break the percentage cap the maths assumes. Fixed fractional reduces the speed at which a drawdown compounds; it does not prevent ruin. For the foundations, see [risk of ruin explained](https://monksofmarket.com/articles/risk-of-ruin-trading/).

### How do I choose a delta for fixed ratio sizing?

No authoritative delta-selection formula was found, so use this article's clearly-labelled heuristic, not Jones's method: delta = average win per unit × W, where W is the number of average wins you require as proof before scaling (illustrative W = 3–5). With an average win of ₹10,000 per unit, W = 5 gives delta ₹50,000, the lane used in this article. Then cross-check: the profit proof required before the next step (N × Δ) must count as enough proof, and the cost of a typical losing run at the new size must stay within your stated drawdown tolerance; if either check fails, raise delta.

### Can you combine fixed fractional and fixed ratio sizing?

Only as a clearly-labelled original construction for this article, not as standard practice. The construction is: ratio gates the step-up, fractional caps the per-trade risk. Size steps up only when the ratio ladder earns the next rung, and on every trade the fractional cap still limits actual risk to your chosen percentage of current equity — if the ratio-earned size would breach the cap, you trade the smaller, cap-compliant size, and step-down follows whichever model shrinks first. No established combined method with rules and evidence was found, so treat this as an idea to test on paper, not a method with a track record.

### What happens to fixed ratio size when you start losing — does it step down?

Yes, but by rung, not by every loss. Under the symmetric single-delta formula, size steps down when cumulative profit falls below a ladder rung: at delta ₹50,000, P falling from ₹1,50,000 to ₹1,00,000 drops the formula from 3.0 to 2.56, which is 2 units after rounding down. It does not re-base off equity and does not shrink on every loss the way fractional does — between rungs, size stays flat no matter how many losses arrive. A smaller down-delta is an explicit choice that speeds step-down; it is not a precondition for stepping down at all.

### Why does fixed ratio growth slow down as profits grow?

Because each additional unit costs more profit than the last. Under the formula, units grow approximately with the square root of accumulated profit, and the incremental cost of the next unit is N × Δ: the 2nd unit costs 1 × delta, the 3rd costs 2 × delta, the 4th costs 3 × delta, and the 5th costs 4 × delta. At delta ₹50,000, that means ₹50,000, then a further ₹1,00,000, then a further ₹1,50,000, then a further ₹2,00,000. Growth slows because the price of growth keeps rising — which is exactly the control that stops a winning run from scaling the trader too fast.

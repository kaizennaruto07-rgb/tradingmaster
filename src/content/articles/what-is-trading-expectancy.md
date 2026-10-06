---
title: "What Is Trading Expectancy? A Complete Guide"
description: "What is trading expectancy? The expectancy formula in trading, how to calculate expectancy from your trade journal, and why win rate and gross numbers lie."
meta_description: "What is trading expectancy? The expectancy formula in trading, how to calculate expectancy from your trade journal, and why win rate and gross numbers lie."
date: 2026-10-04
author: Kaizen
tag: "Trading mathematics · Edge"
keywords: ["what is trading expectancy", "trading expectancy calculator", "how to calculate expectancy in trading", "expectancy formula trading", "trading expectancy vs win rate", "break-even win rate"]
---

*Educational content only — not financial advice. Trading involves risk of loss.*

## What Is Trading Expectancy? The Number That Tells You What Each Trade Is Worth

Trading expectancy answers one question: **on average, how much does each of your trades make or lose you?**

If your expectancy is +₹200, then over a large number of trades, every trade you take is "worth" ₹200 of profit on average. If it is −₹50, every trade costs you ₹50 on average, and nothing else you do — better timing, nicer charts, more screen time — will fix that.

It can be measured in money (rupees, USDT) or in R-multiples — units of your average risk. Both mean the same thing:

- **Expectancy = average profit or loss per trade.**

One-line example: you win ₹800 on half your trades and lose ₹400 on the other half. Your expectancy is (0.5 × 800) − (0.5 × 400) = ₹200 per trade.

That's it. No mystery. And yet most traders never compute it, because they confuse "I win a lot" with "I make money." Expectancy is the number that settles that argument.

## The Expectancy Formula (and the R-Multiple Version That Makes It Simple)

The expectancy formula in trading is:

**Expectancy = (Win Rate × Average Win) − (Loss Rate × Average Loss)**

Win rate is your wins divided by total trades. Average win is the mean profit of your winning trades; average loss is the mean loss of your losing trades (a positive number you subtract).

The R-multiple version makes this cleaner by expressing everything relative to your risk. If you risk ₹1,000 and make ₹2,000, that's a +2R win. If you risk ₹1,000 and lose it, that's a −1R loss. This is the framework Van Tharp popularised for comparing systems, because it strips out position size and account size entirely.

**Worked example (R-multiples):** Your system wins 40% of the time with an average win of +2R and an average loss of −1R.

Expectancy = (0.40 × 2R) − (0.60 × 1R) = 0.8R − 0.6R = **+0.2R per trade.**

Read that as: every trade you take is worth two-tenths of your risk unit in expected profit. Risk ₹1,000 per trade, and the system should earn about ₹200 per trade over enough trades.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 620 320" role="img" aria-label="Diagram breaking trading expectancy into three parts: positive win contribution, negative loss drag, and the cost drag that reduces net expectancy" class="viz viz-bars">
<line x1="310" y1="24" x2="310" y2="262" stroke="#21332b" stroke-width="1"/>
<rect x="310" y="40" width="200" height="34" rx="6" fill="#14d991" fill-opacity="0.85" class="bar-grow"/>
<text x="130" y="62" text-anchor="end" fill="#92a59c" font-size="12">Win contribution</text>
<text x="518" y="62" text-anchor="start" fill="#14d991" font-size="13" font-weight="700" font-family="monospace">+0.8R</text>
<rect x="160" y="102" width="150" height="34" rx="6" fill="#ff4f65" fill-opacity="0.85" class="bar-grow"/>
<text x="130" y="124" text-anchor="end" fill="#92a59c" font-size="12">Loss drag</text>
<text x="152" y="124" text-anchor="end" fill="#ff4f65" font-size="13" font-weight="700" font-family="monospace">−0.6R</text>
<rect x="298" y="164" width="12" height="34" rx="6" fill="#f6bd52" fill-opacity="0.85" class="bar-grow"/>
<text x="130" y="186" text-anchor="end" fill="#92a59c" font-size="12">Cost drag</text>
<text x="290" y="186" text-anchor="end" fill="#f6bd52" font-size="13" font-weight="700" font-family="monospace">−0.04R</text>
<line x1="360" y1="24" x2="360" y2="262" stroke="#14d991" stroke-width="2" stroke-dasharray="6 4"/>
<text x="360" y="16" text-anchor="middle" fill="#14d991" font-size="12" font-weight="700">Gross: +0.2R/trade</text>
<line x1="350" y1="24" x2="350" y2="262" stroke="#f6bd52" stroke-width="1.5" stroke-dasharray="3 3"/>
<text x="350" y="280" text-anchor="middle" fill="#f6bd52" font-size="11">Net after costs: +0.16R</text>
<text x="310" y="302" text-anchor="middle" fill="#92a59c" font-size="11">40% win rate · +2R avg win · −1R avg loss</text>
</svg>
<figcaption>Expectancy decomposed: +0.8R from wins, −0.6R from losses, −0.04R eaten by costs — leaving +0.16R of real edge per trade.</figcaption>
</figure>

## Why a 60% Win Rate Can Still Lose You Money (Expectancy Beats Win Rate)

Win rate is the most overrated number in trading. Here's why, using Tharp's marble-game thought experiment: imagine two games.

- **Game A:** you win 60% of the time, but the game's design gives you an expectancy of only 20 cents per play.
- **Game B:** you win only 36% of the time, but the expectancy is 78 cents per play.

Game B earns nearly four times as much per play despite losing far more often. A trader who "wins 60% of the time" can still bleed money if the wins are small and the losses are big — the classic pattern of cutting winners early and letting losers run. A 36% win rate looks ugly on a screenshot but can be a perfectly good business if each win pays for two losses.

**The rule:** win rate tells you how often you're right. Expectancy tells you whether being right pays. You want the second number.

### The Break-Even Win Rate Table: What Win Rate Your R:R Actually Needs

For a fixed reward-to-risk (R:R), there's a minimum win rate where expectancy crosses zero. Below it you lose; above it you win. Assuming your average win is W×R and your average loss is 1R, break-even happens when Win Rate × W = Loss Rate × 1, giving Win Rate = 1/(1 + W):

| Avg win (R:R) | Break-even win rate |
|---|---|
| 1R | 50.0% |
| 1.5R | 40.0% |
| 2R | 33.3% |
| 3R | 25.0% |
| 5R | 16.7% |

A 2R average win only needs you to be right one trade in three. A 1R average win needs a coin flip. And running it backwards, for a given win rate, the minimum average reward you need is:

**Required R = (1 / Win Rate) − 1**

Win 40% of the time? You need (1 / 0.40) − 1 = **1.5R** average wins just to break even. Everything above that is your edge.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 620 350" role="img" aria-label="Heatmap showing break-even win rate for each reward-to-risk ratio, with profitable combinations in green and losing ones in red" class="viz">
<text x="310" y="22" text-anchor="middle" fill="#92a59c" font-size="13" font-weight="600">Expectancy (R per trade) by win rate and reward-to-risk</text>
<text x="124" y="62" text-anchor="middle" fill="#92a59c" font-size="11">10%</text>
<text x="192" y="62" text-anchor="middle" fill="#92a59c" font-size="11">20%</text>
<text x="260" y="62" text-anchor="middle" fill="#92a59c" font-size="11">30%</text>
<text x="328" y="62" text-anchor="middle" fill="#92a59c" font-size="11">40%</text>
<text x="396" y="62" text-anchor="middle" fill="#92a59c" font-size="11">50%</text>
<text x="464" y="62" text-anchor="middle" fill="#92a59c" font-size="11">60%</text>
<text x="532" y="62" text-anchor="middle" fill="#92a59c" font-size="11">70%</text>
<text x="70" y="102" text-anchor="end" fill="#92a59c" font-size="12">1R</text>
<rect x="90" y="80" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.85"/><text x="124" y="104" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.80</text>
<rect x="158" y="80" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.7"/><text x="192" y="104" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.60</text>
<rect x="226" y="80" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.5"/><text x="260" y="104" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.40</text>
<rect x="294" y="80" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.3"/><text x="328" y="104" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">−0.20</text>
<rect x="362" y="80" width="68" height="40" rx="4" fill="#2a3a32" fill-opacity="1"/><text x="396" y="104" text-anchor="middle" fill="#92a59c" font-size="11" font-family="monospace">0.00</text>
<rect x="430" y="80" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.3"/><text x="464" y="104" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">+0.20</text>
<rect x="498" y="80" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.5"/><text x="532" y="104" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+0.40</text>
<text x="70" y="146" text-anchor="end" fill="#92a59c" font-size="12">1.5R</text>
<rect x="90" y="124" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.8"/><text x="124" y="148" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.75</text>
<rect x="158" y="124" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.6"/><text x="192" y="148" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.50</text>
<rect x="226" y="124" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.35"/><text x="260" y="148" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">−0.25</text>
<rect x="294" y="124" width="68" height="40" rx="4" fill="#2a3a32" fill-opacity="1"/><text x="328" y="148" text-anchor="middle" fill="#92a59c" font-size="11" font-family="monospace">0.00</text>
<rect x="362" y="124" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.32"/><text x="396" y="148" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">+0.25</text>
<rect x="430" y="124" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.5"/><text x="464" y="148" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+0.50</text>
<rect x="498" y="124" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.65"/><text x="532" y="148" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+0.75</text>
<text x="70" y="190" text-anchor="end" fill="#92a59c" font-size="12">2R</text>
<rect x="90" y="168" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.75"/><text x="124" y="192" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.70</text>
<rect x="158" y="168" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.5"/><text x="192" y="192" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.40</text>
<rect x="226" y="168" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.22"/><text x="260" y="192" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">−0.10</text>
<rect x="294" y="168" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.3"/><text x="328" y="192" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">+0.20</text>
<rect x="362" y="168" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.5"/><text x="396" y="192" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+0.50</text>
<rect x="430" y="168" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.68"/><text x="464" y="192" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+0.80</text>
<rect x="498" y="168" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.8"/><text x="532" y="192" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+1.10</text>
<text x="70" y="234" text-anchor="end" fill="#92a59c" font-size="12">3R</text>
<rect x="90" y="212" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.7"/><text x="124" y="236" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.60</text>
<rect x="158" y="212" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.3"/><text x="192" y="236" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">−0.20</text>
<rect x="226" y="212" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.3"/><text x="260" y="236" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">+0.20</text>
<rect x="294" y="212" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.58"/><text x="328" y="236" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+0.60</text>
<rect x="362" y="212" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.75"/><text x="396" y="236" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+1.00</text>
<rect x="430" y="212" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.88"/><text x="464" y="236" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+1.40</text>
<rect x="498" y="212" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.95"/><text x="532" y="236" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+1.80</text>
<text x="70" y="278" text-anchor="end" fill="#92a59c" font-size="12">5R</text>
<rect x="90" y="256" width="68" height="40" rx="4" fill="#ff4f65" fill-opacity="0.5"/><text x="124" y="280" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">−0.40</text>
<rect x="158" y="256" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.3"/><text x="192" y="280" text-anchor="middle" fill="#e8e8e8" font-size="11" font-family="monospace">+0.20</text>
<rect x="226" y="256" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.68"/><text x="260" y="280" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+0.80</text>
<rect x="294" y="256" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.88"/><text x="328" y="280" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+1.40</text>
<rect x="362" y="256" width="68" height="40" rx="4" fill="#14d991" fill-opacity="0.95"/><text x="396" y="280" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+2.00</text>
<rect x="430" y="256" width="68" height="40" rx="4" fill="#14d991" fill-opacity="1"/><text x="464" y="280" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+2.60</text>
<rect x="498" y="256" width="68" height="40" rx="4" fill="#14d991" fill-opacity="1"/><text x="532" y="280" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">+3.20</text>
<text x="310" y="318" text-anchor="middle" fill="#92a59c" font-size="11">Green = positive expectancy · Red = negative</text>
<text x="310" y="334" text-anchor="middle" fill="#92a59c" font-size="11">Break-even runs diagonally from top-right to bottom-left</text>
</svg>
<figcaption>At 2R average wins you only need a 33% win rate to break even. At 1R you need a coin flip. Bigger wins buy you room to be wrong more often.</figcaption>
</figure>

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 620 340" role="img" aria-label="Comparison chart of a 60 percent win-rate losing system versus a 36 percent win-rate winning system, showing per-trade results and final expectancy" class="viz">
<text x="155" y="26" text-anchor="middle" fill="#92a59c" font-size="14" font-weight="700">Game A — 60% win rate</text>
<text x="465" y="26" text-anchor="middle" fill="#92a59c" font-size="14" font-weight="700">Game B — 36% win rate</text>
<line x1="30" y1="240" x2="280" y2="240" stroke="#21332b" stroke-width="1"/>
<line x1="340" y1="240" x2="590" y2="240" stroke="#21332b" stroke-width="1"/>
<rect x="80" y="140" width="56" height="100" rx="6" fill="#14d991" fill-opacity="0.85" class="bar-grow-v"/>
<text x="108" y="130" text-anchor="middle" fill="#14d991" font-size="12" font-weight="700" font-family="monospace">+$1.00</text>
<text x="108" y="258" text-anchor="middle" fill="#92a59c" font-size="11">avg win</text>
<rect x="174" y="140" width="56" height="100" rx="6" fill="#ff4f65" fill-opacity="0.85" class="bar-grow-v"/>
<text x="202" y="130" text-anchor="middle" fill="#ff4f65" font-size="12" font-weight="700" font-family="monospace">−$1.00</text>
<text x="202" y="258" text-anchor="middle" fill="#92a59c" font-size="11">avg loss</text>
<text x="155" y="290" text-anchor="middle" fill="#ff4f65" font-size="15" font-weight="700" font-family="monospace">Expectancy: +$0.20</text>
<text x="155" y="310" text-anchor="middle" fill="#92a59c" font-size="11">wins often, earns little</text>
<rect x="390" y="62" width="56" height="178" rx="6" fill="#14d991" fill-opacity="0.85" class="bar-grow-v"/>
<text x="418" y="52" text-anchor="middle" fill="#14d991" font-size="12" font-weight="700" font-family="monospace">+$3.94</text>
<text x="418" y="258" text-anchor="middle" fill="#92a59c" font-size="11">avg win</text>
<rect x="484" y="140" width="56" height="100" rx="6" fill="#ff4f65" fill-opacity="0.85" class="bar-grow-v"/>
<text x="512" y="130" text-anchor="middle" fill="#ff4f65" font-size="12" font-weight="700" font-family="monospace">−$1.00</text>
<text x="512" y="258" text-anchor="middle" fill="#92a59c" font-size="11">avg loss</text>
<text x="465" y="290" text-anchor="middle" fill="#14d991" font-size="15" font-weight="700" font-family="monospace">Expectancy: +$0.78</text>
<text x="465" y="310" text-anchor="middle" fill="#92a59c" font-size="11">wins rarely, earns 4× more</text>
<text x="310" y="330" text-anchor="middle" fill="#92a59c" font-size="11">Same chart scale — Game B's wins are nearly 4× larger, overwhelming its losses</text>
</svg>
<figcaption>Game A wins 60% of the time but each win barely covers each loss (+$0.20/play). Game B wins only 36% — yet its +$3.94 average win makes it worth +$0.78/play, nearly 4× more.</figcaption>
</figure>

## How to Calculate Expectancy From Your Own Trade Journal (Step by Step)

A trading expectancy calculator is nothing more than this formula applied to your own data. Here's how to calculate expectancy in trading, by hand:

1. **Collect a block of trades** — the more, the better (see the sample-size section below). Same system, same rules, no cherry-picking.
2. **Split winners from losers.** Count them. Win rate = wins ÷ total trades.
3. **Average your wins.** Add up all winning profits, divide by the number of wins.
4. **Average your losses.** Add up all losing amounts, divide by the number of losses. Keep it a positive number — the formula subtracts it.
5. **Plug into the formula:** (Win Rate × Avg Win) − (Loss Rate × Avg Loss).

Two assumptions are baked into this formula. First, **independence**: it assumes each trade is its own event. Three NIFTY calls entered the same morning are not three independent trades — they're one correlated cluster wearing a costume. Compute expectancy per system-sample, not per correlated burst. Second, **uniform sizing**: R-multiple math assumes you risked the same amount on every trade. If your journal has ₹500 risks mixed with ₹2,000 risks, the R-based number is distorted — size uniformly during the sample, or normalise before averaging.

**Worked example:** You pull 50 trades from your journal. 19 are winners averaging +2.1R; 31 are losers averaging −1R. Win rate = 19/50 = 38%.

Expectancy = (0.38 × 2.1R) − (0.62 × 1R) = 0.798R − 0.62R ≈ **+0.18R per trade.**

A small positive edge. Now the part most traders skip:

6. **Outlier check.** Remove your single best trade and recompute. If your expectancy collapses or goes negative without that one lucky winner, you don't have a system — you have one good memory. A real edge survives its outliers. Cheap robustness check: compare your median win and median loss against the means. Means are what outliers exploit — if the median tells a much worse story than the mean, your edge is thinner than the formula says.
7. **Don't change the system mid-sample.** If you altered entries, stops, or sizing halfway through, you have two broken samples, not one good one. Start a fresh block.
8. **Don't curve-fit.** Tweaking rules until the backtest looks good is memorising the past, not research.

## Costs Eat Expectancy: Why You Must Use Net Numbers, Not Gross

Every expectancy you've computed so far is gross. Your broker, the exchange, and the tax department take their cut before you do. **Expectancy must be computed on net numbers, not gross** — otherwise you're modelling a business where your supplier doesn't exist.

What eats your edge:

- **Indian options:** brokerage, Securities Transaction Tax (STT), GST on brokerage, exchange/regulatory charges, slippage on stop-market exits — the exact exits retail traders use — and capital gains tax on net profits (STT is paid per trade, but tax on what you keep is part of the real net number). See the full breakdown in [options trading charges in India](/articles/options-trading-charges-india/).
- **Crypto futures:** trading fees on every fill, funding payments on leveraged positions (charged repeatedly while you hold), and slippage, especially on stop-market exits in fast markets. See [crypto futures funding rates](/articles/crypto-futures-funding-rates/).

A thin edge can be entirely costs. The next two sections prove it with verified numbers.

### Worked Example: Indian Options Expectancy After STT, GST and Brokerage (INR)

Use the locked, verified cost figures (last verified 30 September 2026): STT is **0.15% on sell premium and 0.15% on exercised ITM options** (effective 1 April 2026); NIFTY lot size is **65**. A verified round trade — 50 units bought at ₹100, targeting ₹120 with a ₹90 stop — carries **₹60.98 in total charges** (and nets ₹939.02 at target instead of the gross ₹1,000).

Spread ₹60.98 across the 50 units, and you get roughly ₹1.22 of cost per unit per round trade. One simplification worth stating plainly: STT is 0.15% of the exit premium, so the loss-side exit at ₹90 pays about ₹2.25 less STT than the target-side exit at ₹120 — the flat ₹1.22/unit splits the difference across both sides. The 61% conclusion still stands; this is just honest precision. So a trade with a gross win of +₹20 per unit is really +₹18.78 net; a gross loss of −₹10 is really −₹11.22 net.

Take a 40% win-rate system at those numbers:

- **Gross expectancy:** (0.40 × 20) − (0.60 × 10) = 8 − 6 = **+₹2.00 per unit** (₹100 per 50-unit trade).
- **Net expectancy:** (0.40 × 18.78) − (0.60 × 11.22) = 7.51 − 6.73 = **+₹0.78 per unit** (₹39 per trade).

Costs ate **61% of the edge**. Same system, same skill — one version looks comfortably profitable, the other barely breathes. Anyone calculating expectancy from gross P&L is running the second set of books and calling it the first.

### Worked Example: Crypto Futures Expectancy After Fees and Funding (USDT)

Crypto calculators here are USDT-based — no rupee fiction in the crypto section. The costs are trading fees (take the taker rate, since market orders and stops are how most retail entries and exits fill) and funding payments, which are a recurring drag for as long as you're leveraged, not a one-off.

Illustrative numbers (clearly marked, not your exchange's schedule): taker fee 0.05% per side → 0.10% round-trip. Funding 0.01% every 8 hours → 0.03% per day; hold a position 3 days and funding alone costs 0.09% of notional.

Say your system averages +2R gross wins and −1R gross losses, winning 40% — a +0.2R gross expectancy, same as the earlier example. Add up the drag: 0.10% + 0.09% = 0.19% of notional per trade. Convert that into R: at 20x leverage, 1R is 5% of notional (100% ÷ 20), so 0.19% of notional = 0.19 ÷ 5 ≈ **0.038R per trade** in cost drag. Net expectancy = 0.2R − 0.038R ≈ **+0.16R**. Costs ate 0.038 ÷ 0.2 ≈ **19% of the edge** — you handed nearly a fifth of it to the venue for the privilege of trading. Shorten your holding time, cut your leverage, or sharpen the system — the math doesn't care which.

## Positive vs Negative Expectancy: What the Sign Really Means (and Profit Factor)

- **Negative expectancy:** stop trading this system, or change a variable. Nothing else matters. A negative-expectancy system traded harder is just a faster way to lose.
- **Small positive expectancy (say, +0.05R to +0.2R):** survivable in theory, brutal in practice. The edge is real but the variance is savage — long losing streaks, deep drawdowns, and long flat stretches are guaranteed. You need iron discipline and small risk per trade, or the edge never gets to compound.
- **Strong positive expectancy (+0.3R and up):** a genuine business. Still subject to every caveat in the next section.

A related number worth knowing is **profit factor** — gross profit divided by gross loss. Above 1.0 means an edge (you made more than you lost); around 1.5 or higher is the practitioner convention for "solid" (not a statistical threshold, just what experienced system traders look for). Profit factor and expectancy tell the same story from different angles: expectancy is per-trade, profit factor is aggregate.

## The Catch: Positive Expectancy Does Not Guarantee Profit (Risk of Ruin)

This is the sentence that matters most in this article: **positive expectancy is necessary but NOT sufficient.**

Expectancy is an average over many trades. It says nothing about the *order* those trades arrive in. Ten losers in a row at the start will ruin a small account before the average ever gets to assert itself — and streaks far longer than your gut expects are normal, not anomalous, for positive-expectancy systems.

The following ruin figures are an **illustrative simulation only, not universal laws** — they apply to one specific system (55% win rate, 1.5R average win) over a fixed trade count, and different systems, risk sizes, and trade counts produce different numbers:

| Risk per trade | Illustrative risk of ruin |
|---|---|
| 1% | < 0.01% |
| 5% | 18% |
| 10% | 63% |

Same system, same positive expectancy — and at 10% risk per trade it ruins you almost two times out of three. The edge didn't change; the sizing did. Expectancy decides whether you *should* play. Position size decides whether you *survive* playing.

For the full treatment, read [risk of ruin in trading](/articles/risk-of-ruin-trading/), and stress-test your own numbers on the live [What-If Trade Simulator](/tools/what-if-simulator/) — it shows what your expectancy actually feels like across thousands of simulated futures, streaks included.

## How Many Trades Do You Need Before Expectancy Means Anything?

There is **no authoritative number** for this. Any site that gives you one as a law is selling certainty. What exists are practitioner ranges, offered here as guidance only:

- **30–50 trades:** a rough hint. Good enough to spot a disaster, not good enough to trust a success. Thirty trades and a positive number is a hypothesis, not a finding.
- **60–100 trades:** a working baseline. The picture is forming, but one regime shift or one lucky streak can still be driving it.
- **200–300 trades:** reliable enough to size real money around, if the market regime held.
- **500+ trades:** confident — you've likely seen more than one market mood.

Two warnings. First, historical expectancy is **backward-looking and regime-dependent**: a system tuned on a trending year can have its expectancy evaporate in a choppy one. That's curve-fitting, and it's how backtests lie. Second, watch outliers: **one 5R winner in a 30-trade sample contributes 5/30 ≈ 0.17R of expectancy all by itself.** Remove it and the "edge" may vanish — which is exactly the outlier check from the journal section, and why small samples are treacherous. A 10-trade winning run inside a negative-expectancy system is noise with a confident voice.

## The Expectancy Journal Checklist

Run this against your journal before you trust the number:

1. **Uniform sizing** during the sample — same risk per trade, or normalise before averaging ✓
2. **Same system and rules throughout** — no mid-sample changes; two broken samples are not one good one ✓
3. **Net numbers** — costs subtracted before the formula, not after ✓
4. **Outlier check done** — remove the best trade and recompute; median vs mean compared ✓
5. **60+ trades minimum** before treating a positive number as more than a hypothesis ✓
6. **No curve-fitting** — rules weren't tweaked until the backtest looked good ✓
7. **Recompute every 50–100 trades**, or after any regime shift ✓
8. **Correlated clusters counted once** — three NIFTY calls entered the same morning are one trade wearing a costume, not three ✓

## What to Do Next: Improve It, Validate It, Size Around It

You know your expectancy (or you will, after the journal exercise). Three levers can raise it:

1. **Raise your average win** — push it from 2R toward 3R and the break-even win rate drops from 33% to 25% (see the table above). Same win rate, far more room to breathe.
2. **Raise your win rate** — filter out low-quality setups, but watch the trade-off: at 40% wins you need 1.5R just to break even, so don't let your average R slip below that line while you do it.
3. **Cut your costs** — the only lever fully in your control. The options example showed costs alone ate 61% of the edge; the crypto example showed ~19%. Same system, same skill — costs decide which version of your edge you actually get to keep.

Then **validate before you size up**: forward-test on paper or in small size, run the system through the [What-If Trade Simulator](/tools/what-if-simulator/) to see the distribution of outcomes your expectancy implies, and check the [risk of ruin](/articles/risk-of-ruin-trading/) math for whatever risk-per-trade you're considering.

Finally, **size positions around it**. A modest expectancy with conservative sizing compounds; a strong expectancy with reckless sizing ruins. Expectancy decays silently — the most common way edges die. Recompute every 50-100 trades, or after any regime shift, and compare against your original number. If it's drifting down, the market changed or you did. And remember the drawdown recovery math, because you will need it: a −50% drawdown requires a **+100%** gain just to get back to even (see the [drawdown recovery math](/articles/risk-of-ruin-trading/)). That asymmetry is the strongest argument there is for protecting your downside while your edge does its work.

---

### Frequently asked questions

**What is a good trading expectancy?**
There is no universal "good" number — it depends on your risk per trade and trade frequency. As rough practitioner guidance, +0.1R to +0.2R per trade is a workable edge, and +0.3R or more is strong. But a small expectancy with high trade frequency can outperform a large expectancy that trades rarely; what matters is expectancy × number of trades, minus the variance you have to survive along the way.

**Can you make money with negative expectancy?**
No — not over a meaningful number of trades. Negative expectancy means each trade loses money on average, so more trading just loses more. Short lucky streaks can hide it temporarily, which is exactly why the formula exists: to separate the streak from the system.

**How is expectancy different from profit factor?**
They describe the same edge differently. Expectancy is average profit per trade (in money or R); profit factor is total gross profit divided by total gross loss. Expectancy tells you what each trade is worth; profit factor tells you the overall ratio. A system with positive expectancy always has a profit factor above 1.0, and vice versa.

**Is trading expectancy the same as expected value?**
Effectively yes. "Expected value" is the probability-theory term; "expectancy" is the trading community's name for the same concept — the probability-weighted average outcome per trade. Same math, different room.

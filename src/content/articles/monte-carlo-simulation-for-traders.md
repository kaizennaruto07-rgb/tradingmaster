---
title: "Monte Carlo Simulation for Traders: What It Is, How It Works, and How to Size From It"
description: "A backtest is one roll of the dice. Monte Carlo simulation in trading re-deals your trade list a thousand times — bootstrap, order-shuffle, execution honesty — and the fan it builds tells you the ruin probability, the drawdown distribution, and the position size you can actually survive. Indian NIFTY worked example inside."
meta_description: "A backtest is one roll of the dice. Monte Carlo simulation in trading rolls it a thousand times — here's what the fan tells you and how to set size from it."
date: 2026-10-14
author: Kaizen
tag: "Trading mathematics · Strategy validation"
keywords: ["monte carlo simulation trading", "monte carlo simulation for traders", "monte carlo vs backtesting", "how many monte carlo simulations", "monte carlo position sizing", "ruin probability trading", "backtest vs monte carlo"]
---

*By Kaizen · 14 October 2026 · Monks Of Market*

> **Educational disclaimer:** This article is for education only and is not financial advice. Trading involves substantial risk of loss. Nothing here guarantees a strategy will work live — it teaches you how to read a Monte Carlo fan honestly so you size from survivability, not from a single lucky backtest.

## Your Backtest Is One Roll of the Dice. Monte Carlo Rolls It a Thousand Times.

What does Monte Carlo simulation in trading actually tell you? It tells you what your strategy's future could *plausibly* look like — not one path, but a thousand of them. A backtest shows you a single sequence: the exact order your winners and losers happened to fall in, with all the drawdowns and streaks that one particular order produced. Monte Carlo takes that same trade-by-trade list and re-deals it — shuffles the order, skips a few trades, nudges the execution — thousands of times, and builds a distribution of equity curves from every reshuffled version.

From that distribution, you get the two things a backtest can never give you: the probability your account ever sinks past a ruin threshold *you* define, and the range of drawdowns you should honestly expect instead of the single drawdown number your backtest happened to print. That's the whole idea behind Monte Carlo simulation vs backtesting — the backtest drew one ordering of history; Monte Carlo draws a thousand.

This matters because the order of your trades decides whether a strategy survives, not just its average. Two traders can run an identical strategy with identical expectancy and get wildly different accounts — one catches losers early and quits, the other catches winners early and feels invincible. Your backtest is one roll of those dice. Monte Carlo rolls them a thousand times so you can see the full shape of your luck before you trade real money on it.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 410" role="img" aria-label="One highlighted backtest equity curve overlaid on a faint cloud of one thousand resampled paths, with a dashed ruin line at a 30 percent account loss" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">One backtest. One thousand alternate histories.</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Same trades, re-dealt — the fan is every ordering your sample could have produced</text>
<line x1="60" y1="278" x2="660" y2="278" stroke="#2a3a34" stroke-width="1"/><text x="52" y="282" text-anchor="end" fill="#92a59c" font-size="10">8</text>
<line x1="60" y1="226" x2="660" y2="226" stroke="#2a3a34" stroke-width="1"/><text x="52" y="230" text-anchor="end" fill="#92a59c" font-size="10">10</text>
<line x1="60" y1="174" x2="660" y2="174" stroke="#2a3a34" stroke-width="1"/><text x="52" y="178" text-anchor="end" fill="#92a59c" font-size="10">12</text>
<line x1="60" y1="122" x2="660" y2="122" stroke="#2a3a34" stroke-width="1"/><text x="52" y="126" text-anchor="end" fill="#92a59c" font-size="10">14</text>
<line x1="60" y1="70" x2="660" y2="70" stroke="#2a3a34" stroke-width="1"/><text x="52" y="74" text-anchor="end" fill="#92a59c" font-size="10">16</text>
<text x="30" y="200" text-anchor="middle" fill="#92a59c" font-size="11" transform="rotate(-90 30 200)">Account value (₹ lakh)</text>
<line x1="60" y1="304" x2="660" y2="304" stroke="#ff4f65" stroke-width="1.2" stroke-dasharray="6 4" stroke-opacity="0.8"/><text x="656" y="298" text-anchor="end" fill="#ff4f65" font-size="10">ruin line — 30% loss (₹7L)</text>
<g fill="none" stroke="#92a59c" stroke-width="1" opacity="0.28">
<path d="M60 226 C100 235, 150 250, 210 268 C260 285, 310 300, 360 312 C410 318, 460 322, 510 326 C560 328, 610 329, 660 330"/>
<path d="M60 226 C100 215, 150 228, 210 205 C260 218, 310 195, 360 205 C410 185, 460 198, 510 178 C560 188, 610 168, 660 155"/>
<path d="M60 226 C100 240, 150 232, 210 245 C260 238, 310 248, 360 242 C410 250, 460 244, 510 252 C560 248, 610 254, 660 250"/>
<path d="M60 226 C100 205, 150 215, 210 190 C260 200, 310 175, 360 185 C410 160, 460 170, 510 148 C560 158, 610 138, 660 122"/>
<path d="M60 226 C100 230, 150 245, 210 255 C260 265, 310 275, 360 282 C410 288, 460 292, 510 295 C560 297, 610 298, 660 300"/>
<path d="M60 226 C100 210, 150 195, 210 205 C260 190, 310 200, 360 185 C410 195, 460 180, 510 190 C560 175, 610 185, 660 170"/>
<path d="M60 226 C100 245, 150 260, 210 275 C260 288, 310 295, 360 305 C410 312, 460 315, 510 318 C560 320, 610 322, 660 322"/>
<path d="M60 226 C100 200, 150 208, 210 185 C260 192, 310 170, 360 178 C410 155, 460 162, 510 142 C560 150, 610 132, 660 112"/>
<path d="M60 226 C100 228, 150 220, 210 228 C260 220, 310 226, 360 218 C410 224, 460 216, 510 222 C560 214, 610 220, 660 212"/>
<path d="M60 226 C100 215, 150 200, 210 215 C260 200, 310 212, 360 198 C410 210, 460 196, 510 208 C560 194, 610 206, 660 192"/>
<path d="M60 226 C100 250, 150 268, 210 282 C260 292, 310 300, 360 308 C410 314, 460 318, 510 320 C560 322, 610 324, 660 326"/>
<path d="M60 226 C100 195, 150 180, 210 190 C260 175, 310 185, 360 168 C410 178, 460 162, 510 172 C560 155, 610 165, 660 148"/>
</g>
<path d="M60 226 C100 220, 150 212, 210 200 C260 214, 310 206, 360 210 C410 195, 460 185, 510 178 C560 168, 610 160, 660 148" fill="none" stroke="#14d991" stroke-width="3" stroke-linecap="round"/>
<text x="60" y="348" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 0</text>
<text x="210" y="348" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 3</text>
<text x="360" y="348" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 6</text>
<text x="510" y="348" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 9</text>
<text x="660" y="348" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 12</text>
<line x1="60" y1="372" x2="90" y2="372" stroke="#14d991" stroke-width="3" stroke-linecap="round"/><text x="96" y="376" fill="#f2f7f4" font-size="11">Your backtest — one path</text>
<line x1="280" y1="372" x2="310" y2="372" stroke="#92a59c" stroke-width="1" opacity="0.6"/><text x="316" y="376" fill="#f2f7f4" font-size="11">1,000 resampled paths (the fan)</text>
<line x1="540" y1="372" x2="570" y2="372" stroke="#ff4f65" stroke-width="1.2" stroke-dasharray="6 4"/><text x="576" y="376" fill="#f2f7f4" font-size="11">Ruin line</text>
<text x="340" y="398" text-anchor="middle" fill="#92a59c" font-size="11">Your backtest is one path. The fan is the set of alternate histories consistent with the same trades.</text>
</svg>
</figure>

## What Monte Carlo Simulation Actually Is (and Isn't)

Here's the quotable version: **Monte Carlo simulation in trading is a resampling technique. It takes your strategy's actual trade-by-trade results and re-deals them — shuffling the order, skipping trades, varying execution — thousands of times to build a distribution of plausible equity curves. It doesn't predict your future. It prices your uncertainty.**

That "doesn't predict" part is the load-bearing wall. Monte Carlo can't tell you whether your strategy has an edge. It assumes the edge is whatever your trade list shows, and then asks: *given these trades, how bad could the ride get?* If the trade list is honest — out-of-sample, costs included, no cherry-picking — the fan of curves is an honest picture of sequence risk: the risk that bad timing, not a bad strategy, is what takes you out.

Now compare it directly with backtesting. A backtest answers "what did this sample do, in the exact order it happened?" Monte Carlo answers "what could this sample do, across every order it could have happened in?" The backtest is a single realized history. The fan is the set of alternate histories consistent with your data. You need both — the backtest for the edge, the fan for the survivability.

### The Three Honest Resampling Methods — and the Garbage-In Rule

There are three standard ways to re-deal your trade list, and an honest simulation usually layers all three:

1. **Bootstrap (with replacement).** Draw, say, 300 trades from your 300-trade sample *with replacement* — some trades repeat, some never appear. Do this a thousand times. This captures sampling noise: the real world may hand you more of some trades and fewer of others than your sample had.

2. **Order-shuffle.** Keep every trade exactly once, but scramble their order. Same trades, different sequence. This isolates pure sequence risk — it answers the uncomfortable question "what if all the losers had arrived first?" Your backtest's drawdown is just the drawdown of the one order that happened to occur.

3. **Execution-honesty layer.** Real trading is messier than the spreadsheet. Randomly drop a small percentage of trades (you won't take them all — you'll be away, distracted, or frozen), and randomize the fill on each trade by a few basis points of slippage. This stops the fan from inheriting the backtest's perfect-execution fantasy.

Now the blunt part — the garbage-in rule: **Monte Carlo is only as honest as the sample you feed it.** If your trade list is overfit, cherry-picked, or backtest-only (no out-of-sample), then all a thousand paths are fantasies — garbage in, garbage out, multiplied a thousand times. A thousand beautifully drawn curves on top of a curve-fitted sample is just a well-decorated lie. Feed the fan only honest, out-of-sample trades; if you're unsure your sample qualifies, read [how to detect overfitting in a trading strategy](/articles/how-to-detect-overfitting-in-trading-strategy/) first, and check [how many trades it takes to validate a strategy](/articles/how-many-trades-to-validate-a-strategy/) before you resample a sample that's too small to mean anything.

## How Many Simulations Do You Actually Need?

Practitioners often use **1,000 simulations as the working standard** — enough paths that your percentile estimates (median, P10/P90, ruin probability) settle down instead of jumping around between runs. For serious studies where tail estimates really matter, 10,000 is the common choice. A quick ~100-path run gives you a rough read, but don't quote its tail numbers as gospel.

The reason is statistical, not moral: each simulation is one sample from the distribution, and more samples mean your *estimates converge* — the ruin probability stops wobbling and homes in on a stable value. More simulations never make the strategy better. They just stop the measuring instrument from shaking.

## Reading the Fan: What the Output Actually Tells You

The fan chart looks like a funnel of curves. Here's how to read it without fooling yourself.

**Median vs P10/P90.** The median (P50) path is the middle of the pack — half the paths do better, half do worse. The P10/P90 band is the honest range: roughly 80% of plausible paths land inside it. Don't plan your trading on the median. Plan on *surviving* the bad band. If the P10 path still keeps you in the game, the strategy is tradable at that size. If it doesn't, it isn't — no matter what the median says.

**Ruin probability — but define ruin first.** Monte Carlo can't compute "probability of ruin" until you define ruin, because ruin is a personal decision, not a statistic. Pick the line you'd actually stop trading at: losing 30% of the account, say, or 50%. Then read off what fraction of paths cross that line. Practitioners often use around **5% as roughly acceptable** and treat **more than 10% as a reason to avoid or resize** — those are third-party rules of thumb, not our data, and they only mean anything attached to a threshold you've genuinely committed to.

**The drawdown distribution — plural, not singular.** Your backtest gives you one max drawdown number. The fan gives you a *distribution* of max drawdowns: the median path's worst drawdown, the 90th-percentile path's worst drawdown, and everything between. This is what does the real psychological work. Knowing that your backtest's 8% drawdown is actually the *lucky* outcome — that a third of plausible paths draw down twice as far — is what stops you from quitting a working strategy at exactly the wrong moment.

**Max loss streaks.** The fan also shows the distribution of consecutive losers. If the 90th-percentile path strings together 11 losers in a row and you've never mentally rehearsed 11, you'll panic when it happens live. Monte Carlo lets you rehearse it on paper first.

As a one-line corroboration: the same edge you're feeding into the fan should also show up as a healthy profit factor — [profit factor](/articles/profit-factor/) and expectancy are the inputs, Monte Carlo is the stress test on top.

## A Worked Example: An Indian NIFTY Option-Buyer Through the Fan

Let's make this concrete with an illustrative example — round figures, assumptions stated plainly, nothing faked to look precise.

**The assumptions.** A ₹10,00,000 account trading NIFTY options as a buyer on the NSE. The strategy: 44% win rate, average win 1.8R, average loss 1R, roughly 60 trades a month. Costs are baked in at the locked Indian stack — about ₹63 per round trip per NIFTY lot at ₹100 premium, reflecting 0.15% STT on the option sale (effective 1 April 2026) and roughly ₹20 brokerage per order. The sample is a few hundred honest out-of-sample trades — not the data the strategy was tuned on. Net expectancy, costs included, is the *input* to the simulation: ([how to calculate real expectancy](/articles/how-to-calculate-real-expectancy/) covers that math; the fan starts where that article ends). Gross expectancy here is (0.44 × 1.8R) − (0.56 × 1R) = 0.232R per trade — a genuine, modest edge, costs already deducted. Risk per trade: 1% of the account.

**What the backtest said.** One sequence, one story: max drawdown 8%, six consecutive losers at worst, smooth-ish climb. The kind of backtest that makes you feel ready.

**What the fan said.** Run those same trades through 1,000 order-shuffled, execution-honest simulations and the picture changes: the *median* path's max drawdown is around 14% — nearly double the backtest. The 90th-percentile path draws down around 26%, with loss streaks stretching to 11 in a row. The probability of ever touching the 30%-account-loss ruin threshold? Roughly 4% — just under the line practitioners often treat as acceptable.

Read that again: the backtest's 8% drawdown was *fortunate* — the 90th percentile is far worse. The edge is identical in both readings. What changed is only the order the trades arrived in, which is pure luck. If you're trading this strategy at 1% risk per trade, you are not preparing for an 8% drawdown. You are preparing for a 26% one — and deciding in advance whether you can survive it.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 440" role="img" aria-label="Fan chart showing the P10 to P90 band around the median equity curve over a year of simulated trading, with the backtest single path drawn bold for contrast and a dashed ruin line" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Reading the fan: median, P10/P90, and the ruin line</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Same NIFTY example — 1,000 order-shuffled, execution-honest simulations, one year</text>
<line x1="60" y1="360" x2="660" y2="360" stroke="#2a3a34" stroke-width="1"/><text x="52" y="364" text-anchor="end" fill="#92a59c" font-size="10">5</text>
<line x1="60" y1="307.3" x2="660" y2="307.3" stroke="#2a3a34" stroke-width="1"/><text x="52" y="311" text-anchor="end" fill="#92a59c" font-size="10">7</text>
<line x1="60" y1="228.2" x2="660" y2="228.2" stroke="#2a3a34" stroke-width="1"/><text x="52" y="232" text-anchor="end" fill="#92a59c" font-size="10">10</text>
<line x1="60" y1="149.1" x2="660" y2="149.1" stroke="#2a3a34" stroke-width="1"/><text x="52" y="153" text-anchor="end" fill="#92a59c" font-size="10">13</text>
<line x1="60" y1="70" x2="660" y2="70" stroke="#2a3a34" stroke-width="1"/><text x="52" y="74" text-anchor="end" fill="#92a59c" font-size="10">16</text>
<text x="30" y="215" text-anchor="middle" fill="#92a59c" font-size="11" transform="rotate(-90 30 215)">Account value (₹ lakh)</text>
<polygon points="60,228.2 160,196.6 260,165.0 360,133.4 460,112.3 560,96.5 660,85.9 660,281.1 560,296.8 460,302.0 360,291.5 260,275.6 160,254.5 60,228.2" fill="#14d991" opacity="0.14"/>
<polyline points="60,228.2 160,196.6 260,165.0 360,133.4 460,112.3 560,96.5 660,85.9" fill="none" stroke="#14d991" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.55"/>
<polyline points="60,228.2 160,254.5 260,275.6 360,291.5 460,302.0 560,296.8 660,281.1" fill="none" stroke="#14d991" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.55"/>
<polyline points="60,228.2 160,217.7 260,204.5 360,196.6 460,186.1 560,170.3 660,154.5" fill="none" stroke="#14d991" stroke-width="2.5" stroke-linecap="round"/>
<polyline points="60,228.2 160,212.4 260,201.9 360,194.0 460,180.8 560,159.7 660,133.9" fill="none" stroke="#f2f7f4" stroke-width="3" stroke-linecap="round"/>
<line x1="60" y1="307.3" x2="660" y2="307.3" stroke="#ff4f65" stroke-width="1.2" stroke-dasharray="6 4" stroke-opacity="0.8"/><text x="656" y="301" text-anchor="end" fill="#ff4f65" font-size="10">ruin line — 30% loss (₹7L)</text>
<text x="652" y="78" text-anchor="end" fill="#14d991" font-size="11" font-weight="600">P90 — good luck</text>
<text x="652" y="146" text-anchor="end" fill="#14d991" font-size="11" font-weight="600">Median (P50)</text>
<text x="652" y="126" text-anchor="end" fill="#f2f7f4" font-size="11" font-weight="600">Backtest — one path</text>
<text x="652" y="273" text-anchor="end" fill="#14d991" font-size="11" font-weight="600">P10 — bad luck</text>
<text x="60" y="378" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 0</text>
<text x="210" y="378" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 3</text>
<text x="360" y="378" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 6</text>
<text x="510" y="378" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 9</text>
<text x="660" y="378" text-anchor="middle" fill="#92a59c" font-size="10.5">Month 12</text>
<rect x="60" y="392" width="26" height="10" rx="2" fill="#14d991" opacity="0.35"/><text x="92" y="401" fill="#f2f7f4" font-size="11">P10–P90 band (80% of paths)</text>
<line x1="290" y1="397" x2="316" y2="397" stroke="#14d991" stroke-width="2.5"/><text x="322" y="401" fill="#f2f7f4" font-size="11">Median (P50)</text>
<line x1="440" y1="397" x2="466" y2="397" stroke="#f2f7f4" stroke-width="3"/><text x="472" y="401" fill="#f2f7f4" font-size="11">Backtest</text>
<line x1="560" y1="397" x2="586" y2="397" stroke="#ff4f65" stroke-width="1.2" stroke-dasharray="6 4"/><text x="592" y="401" fill="#f2f7f4" font-size="11">Ruin line</text>
<text x="340" y="428" text-anchor="middle" fill="#92a59c" font-size="11">Plan on surviving the bad band, not on the median.</text>
</svg>
</figure>

## The Size Dial: Monte Carlo's Real Payoff

Everything so far was diagnosis. This is the payoff — the reason Monte Carlo earns its place in a trader's toolkit. Run the fan again at different risk-per-trade levels, and watch what happens to the ruin profile:

| Risk per trade | Ruin probability (30% account loss, illustrative) | Median max drawdown | 90th-percentile max drawdown |
|---|---|---|---|
| 0.5% | ~1% | ~7% | ~13% |
| 1% | ~4% | ~14% | ~26% |
| 2% | ~15% | ~27% | ~48% |
| 3% | ~30% | ~40% | ~68% |

These are illustrative numbers, not universal constants — your strategy's fan will differ. But the *shape* is universal, and it's the nonlinear trap: **doubling your size multiplies your severe-drawdown odds by far more than it lifts your expected return.** Expected returns scale roughly linearly with size; drawdowns and ruin scale convexly. At 3% risk per trade, nearly a third of plausible paths cross your ruin line — same edge, same strategy, different funeral.

So the Monte Carlo way to choose size is: **pick the largest risk per trade whose ruin profile you can genuinely survive** — the worst plausible path included, not the median one. If a 48% drawdown at 2% risk would make you abandon the strategy (and for most traders it would), then 2% is not your size, whatever the returns table promises.

Two links carry this further without re-teaching: [position sizing](/articles/position-sizing/) covers the mechanics of translating a chosen percentage into actual lots, and [risk of ruin in trading](/articles/risk-of-ruin-trading/) shows the closed-form math that Monte Carlo agrees with — the simulation is the intuitive, visual sibling of that formula.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 420" role="img" aria-label="Convex curve showing ruin probability rising from about 1 percent at 0.5 percent risk per trade to about 30 percent at 3 percent risk, with a shaded practitioners comfort zone under 5 percent" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The size dial: ruin probability vs risk per trade</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Same edge, same strategy — only the size changes. Returns scale linearly; ruin scales convexly.</text>
<line x1="70" y1="292.9" x2="650" y2="292.9" stroke="#2a3a34" stroke-width="1"/><text x="62" y="297" text-anchor="end" fill="#92a59c" font-size="10">5%</text>
<line x1="70" y1="255.7" x2="650" y2="255.7" stroke="#2a3a34" stroke-width="1"/><text x="62" y="260" text-anchor="end" fill="#92a59c" font-size="10">10%</text>
<line x1="70" y1="218.6" x2="650" y2="218.6" stroke="#2a3a34" stroke-width="1"/><text x="62" y="223" text-anchor="end" fill="#92a59c" font-size="10">15%</text>
<line x1="70" y1="181.4" x2="650" y2="181.4" stroke="#2a3a34" stroke-width="1"/><text x="62" y="186" text-anchor="end" fill="#92a59c" font-size="10">20%</text>
<line x1="70" y1="144.3" x2="650" y2="144.3" stroke="#2a3a34" stroke-width="1"/><text x="62" y="148" text-anchor="end" fill="#92a59c" font-size="10">25%</text>
<line x1="70" y1="107.1" x2="650" y2="107.1" stroke="#2a3a34" stroke-width="1"/><text x="62" y="111" text-anchor="end" fill="#92a59c" font-size="10">30%</text>
<line x1="70" y1="330" x2="650" y2="330" stroke="#2a3a34" stroke-width="1"/><text x="62" y="334" text-anchor="end" fill="#92a59c" font-size="10">0%</text>
<text x="30" y="200" text-anchor="middle" fill="#92a59c" font-size="11" transform="rotate(-90 30 200)">Probability of ruin</text>
<rect x="70" y="292.9" width="580" height="37.1" fill="#14d991" opacity="0.10"/>
<text x="360" y="317" text-anchor="middle" fill="#14d991" font-size="11" font-weight="600">practitioners' comfort zone — under ~5%</text>
<line x1="70" y1="292.9" x2="650" y2="292.9" stroke="#14d991" stroke-width="1" stroke-dasharray="5 4" opacity="0.6"/>
<line x1="70" y1="255.7" x2="650" y2="255.7" stroke="#92a59c" stroke-width="1" stroke-dasharray="5 4" opacity="0.5"/>
<path d="M70 328 C100 327, 115 325, 122.7 322.6 C160 314, 195 306, 228.2 300.3 C290 285, 360 255, 439.1 218.6 C510 185, 580 145, 650 107.1" fill="none" stroke="#ff4f65" stroke-width="3" stroke-linecap="round"/>
<circle cx="122.7" cy="322.6" r="4.5" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="228.2" cy="300.3" r="4.5" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="439.1" cy="218.6" r="4.5" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="650" cy="107.1" r="4.5" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<text x="122.7" y="308" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="600">0.5% → ~1%</text>
<text x="228.2" y="285" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="600">1% → ~4%</text>
<text x="439.1" y="203" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="600">2% → ~15%</text>
<text x="650" y="92" text-anchor="end" fill="#f2f7f4" font-size="11" font-weight="600">3% → ~30%</text>
<text x="70" y="352" text-anchor="middle" fill="#92a59c" font-size="10.5">0.25%</text>
<text x="122.7" y="352" text-anchor="middle" fill="#92a59c" font-size="10.5">0.5%</text>
<text x="228.2" y="352" text-anchor="middle" fill="#92a59c" font-size="10.5">1%</text>
<text x="439.1" y="352" text-anchor="middle" fill="#92a59c" font-size="10.5">2%</text>
<text x="650" y="352" text-anchor="middle" fill="#92a59c" font-size="10.5">3%</text>
<text x="360" y="372" text-anchor="middle" fill="#92a59c" font-size="11">Risk per trade</text>
<text x="340" y="400" text-anchor="middle" fill="#92a59c" font-size="11">Doubling size multiplies severe-drawdown odds far more than it lifts expected return.</text>
</svg>
</figure>

## What Monte Carlo Cannot Do

Be clear-eyed about the limits, because they're exactly where traders get hurt:

- **It cannot rescue an overfit sample.** Garbage in, garbage out — times a thousand. If your edge came from curve-fitting, Monte Carlo prices the sequence risk of a mirage. The verdict framework at [how to know if your trading strategy works](/articles/how-to-know-if-trading-strategy-works/) is the gate before the fan, not after.
- **It cannot predict regime shifts.** The fan assumes your sample represents the future. If volatility regimes change, if the market structure shifts, if costs or STT rules move again — the fan is priced on a world that no longer exists. All simulation answers are conditional: *if the future resembles the sample*.
- **It assumes the sample is the whole truth.** Structural gaps — skipped trades you'll actually take, live slippage beyond what you modeled, the five ways backtests lie that [why backtested strategies fail in live trading](/articles/why-backtested-strategies-fail-in-live-trading/) walks through — none of these are fixed by resampling. They're fixed by being honest before you resample.

## The Four-Step Workflow: Where This Fits in Your Validation

Monte Carlo is step two of four, in this order:

1. **Backtest honestly** — out-of-sample, costs in, no cherry-picking.
2. **Monte Carlo** — price the sequence risk on that honest sample; read the fan.
3. **Size** — choose risk per trade from the ruin curve, largest survivable size.
4. **Forward/paper test** — confirm the strategy behaves live the way the sample promised. (This evening's follow-up covers paper-vs-real testing in detail.)

Your lab for steps two and three is already on this site: the [What-If Trade Simulator](/tools/what-if-simulator/) runs your own trade list through exactly this fan — P10/P50/P90 bands, ruin probability, drawdown distribution. Run your own trade list through the same fan. One correction, stated plainly: the simulator prices *sequence risk on an existing sample* — it does not validate whether the edge is real. That's step one's job.

And a tease for what's next: once you've survived the fan and chosen your size, the next leak isn't ruin — it's giving back open profits. Tomorrow's follow-up is about that.

## Frequently Asked Questions

### What is Monte Carlo simulation in trading?

It's a resampling technique: your strategy's actual trade-by-trade results are re-dealt — shuffled in order, with trades skipped and execution varied — thousands of times to build a distribution of plausible equity curves. The output is a fan chart from which you read median vs P10/P90 paths, the drawdown distribution, and the probability of hitting a ruin threshold you define. It prices sequence risk; it doesn't predict your future.

### What is the difference between backtesting and Monte Carlo simulation?

A backtest shows one sequence: what your trades did in the exact order they happened to occur. Monte Carlo simulation shows what those same trades could do across a thousand different orderings — the set of alternate histories consistent with your data. Backtesting estimates the edge; Monte Carlo estimates how bumpy the ride to that edge could be. You need both, in that order.

### How many Monte Carlo simulations should I run?

Practitioners often use 1,000 as the working standard — enough paths for percentile and ruin-probability estimates to stabilize. Use 10,000 for serious studies where tail estimates matter, and treat ~100 as a quick rough read only.

### Can Monte Carlo simulation predict future trading results?

No. It assumes your trade sample represents the future and then explores what different orderings of that sample could produce. If the sample is overfit or the market regime changes, the fan's answers are conditional on a world that no longer exists. It's a risk-pricing tool, not a crystal ball.

### Does Monte Carlo work if my strategy is overfit?

No — this is the garbage-in rule. Monte Carlo resamples the trades you give it; if those trades are the product of curve-fitting rather than a real edge, all a thousand paths are fantasies of the same mirage. Validate out-of-sample first ([how to detect overfitting](/articles/how-to-detect-overfitting-in-trading-strategy/)); only then put the sample through the fan.

### How do I use Monte Carlo results to set position size?

Run the fan at several risk-per-trade levels (e.g. 0.5%, 1%, 2%, 3%) and compare the ruin probabilities and 90th-percentile drawdowns. Because doubling size multiplies severe-drawdown odds far more than it lifts returns, pick the largest size whose worst plausible path you can genuinely survive. Use [position sizing](/articles/position-sizing/) for the lot math and [risk of ruin](/articles/risk-of-ruin-trading/) for the closed-form comparison.

### What is an acceptable probability of ruin?

First define ruin — the account-loss line (say 30%) at which you'd stop trading the strategy. Practitioners often treat around 5% probability of crossing that line as roughly acceptable and more than 10% as a reason to avoid or resize. Those are third-party rules of thumb, not guarantees; the number only means something attached to a threshold you've truly committed to.

### Why do the worst Monte Carlo paths look so much worse than my backtest?

Because your backtest drew one lucky ordering of history. The fan explores orderings where losers cluster early and streaks stretch longer — sequences your sample contains but your single realized order happened to avoid. The worst paths aren't pessimistic; they're the honest price of the same trades dealt in a different order.

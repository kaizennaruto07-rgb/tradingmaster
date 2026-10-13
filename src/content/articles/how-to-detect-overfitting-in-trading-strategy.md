---
title: "How to Detect Overfitting in Trading Strategy (Before It Costs You Real Money)"
description: "Your backtest shows a 2.8 Sharpe and a smooth equity curve — but did the strategy find a real edge, or just memorize the past? Five concrete detection tests — the cliff test, the landscape test, the dice-count, walk-forward testing, and the rationale test — plus the Indian F&O angle on regime-fit, the cost stack, and expiry reality."
meta_description: "How to detect overfitting in a trading strategy: five tests — the cliff test, the landscape test, the dice-count, walk-forward testing, and the rationale test."
date: 2026-10-13
author: Kaizen
tag: "Trading mathematics · Strategy validation"
keywords: ["how to detect overfitting in trading strategy", "curve fitting trading strategy", "overfit backtest tests", "parameter cliff test trading", "walk-forward testing overfitting", "backtest overfitting detection"]
---

*By Kaizen · 13 October 2026 · Monks Of Market*

> **Educational disclaimer:** This article is for education only and is not financial advice. Trading involves substantial risk of loss. Nothing here guarantees a strategy will work live — it teaches you five tests that catch overfit backtests before they cost you real money.

Your backtest shows a 2.8 Sharpe, a smooth equity curve, and returns that would make your salary look like a rounding error. Here is the uncomfortable question this article answers: **how do you know the strategy found a real edge, or just memorized the past?**

There is a way to find out before you put real money at risk: learn how to detect overfitting in trading strategy with five concrete detection tests — the cliff test, the landscape test, the dice-count, the walk-forward test, and the rationale test. If a strategy passes all five, it is not guaranteed to work live — nothing is — but it has survived the standard ways overfit backtests get caught.

Think of a backtest like a practice exam. A student who actually understands the subject will do well on any version of the test. A student who memorized the answer key to *one specific* practice paper will score perfectly on it — and fail the real exam, because the questions moved. **Overfitting in a trading strategy is exactly that: the rules were tuned so tightly to one slice of history that they captured that dataset's noise, not a repeatable edge.**

The backtest is beautiful. The future is a stranger.

And here is the part most retail traders never hear: overfitting is not a rare technical footnote. It is the *default* state of every backtest that went through an optimizer. This article teaches you how to detect overfitting in a trading strategy while the damage is still on paper.

## Overfitting, explained: your strategy memorized the practice test

Overfitting — retail traders often call it **curve fitting in a trading strategy** — happens when you adjust rules and parameters until the historical results look great. Each tweak steers the strategy closer to the specific quirks of the data you tested on: the exact volatility of 2023, the exact way BANKNIFTY trended on budget day, the exact number of times NIFTY rejected a level that no longer matters.

The strategy did not learn *trading*. It learned *that dataset*.

The cruel part: this can happen to a backtest that passed every evidence test we covered earlier in this series. The sample can be large enough. The numbers can be computed honestly. The out-of-sample window can exist. And the strategy can still be a fantasy — because the optimizer searched until it found a winner, and the winner is the luckiest loser of a hundred quiet losers.

If you want the framework for judging whether a strategy works at all, that lives in our [verdict framework](/articles/how-to-know-if-trading-strategy-works/); what this article owns is the deeper question: **was the sample you measured even honest in the first place?**

One more thing to hold in your head for the whole article: detecting overfitting is not a guarantee of future profit. It is a filter that catches lies.

A strategy that passes all five tests can still lose money live — markets change, execution is imperfect, costs bite. Risk of losing capital is always on the table, in testing and in trading.

## The optimizer is your opponent

Most traders treat the optimizer like an assistant: a friendly tool that searches thousands of parameter combinations and reports the best one. Flip that around. **The optimizer is your opponent** — and the settings it hands you with the most confidence are statistically the most likely to be noise-fitted.

Why? This is a direct consequence of the multiple-testing math covered in Test 3 below. When you run hundreds of variants and keep the best, you are not selecting the best *strategy*. You are selecting the luckiest *draw*. The single best row of an optimization grid is the most over-fit row *by construction*: it is the one combination that happened to align with the noise of that specific dataset. With 100 random tries, even a strategy with zero edge produces an expected best result that looks impressively significant — the math grows like the square root of the logarithm of the number of trials — the √(2 ln N) rule.

This produces a psychological trap worth naming once, here and nowhere else: the more hours you spend systematically tuning, the more *confident* you feel — and the more *confident* you feel, the less the confidence is worth. The settings found after an afternoon of careful optimization carry the highest risk of being fitted to noise. That confidence is a feeling about your effort, not evidence about the edge.

(The deeper psychology of why we trust our own tuning belongs to Week 3 of this series; here it is just a warning label.)

## The warning-sign checklist: how curve fitting in a trading strategy shows up

Before the five tests, a quick scan. None of these is a guilty verdict on its own — every threshold below is a practitioner convention, not a statistical law — but a backtest that ticks three or more is waving a flag:

- **A suspiciously smooth equity curve.** A backtest equity line that climbs like a staircase with no real drawdowns is rarely describing a market you will trade. Some practitioners flag curves that look almost *too* straight (an R² above ~0.99 on the equity line) as a warning sign — markets have chop; an equity curve without it is usually memorizing the route.
- **The edge exists only at one precise parameter value.** If the strategy needs exactly 17.3 and dies at 17 or 18, that is not precision — it is a confession. (This becomes Test 1.)
- **In-sample dazzles, out-of-sample collapses.** If the strategy was tuned on 2021–2023 and limps through 2024–2025, one common practitioner rule of thumb says an in-sample profit factor more than roughly double the out-of-sample profit factor is a serious warning — but treat it as a flag, not a verdict.
- **It works on exactly one asset or timeframe.** A strategy that prints money on NIFTY 15-minute but loses on BANKNIFTY 15-minute — and has no reason why — memorized one instrument's quirks. Cross-asset consistency is one of the cheapest robustness checks there is.
- **More parameters than trades can support.** As a rough working convention, some practitioners get nervous beyond about one tuned parameter per 30 trades — tuning 12 parameters on 200 trades means the strategy had 12 dials to memorize 200 data points.
- **Most of the profit came from two or three trades.** If over ~30% of the total profit rests on the top three trades, you may not have an edge — you may have three lucky events with rules wrapped around them.
- **A suspiciously high win rate on too few trades.** Practitioners tend to raise an eyebrow at win rates above ~80% on fewer than ~100 trades: often a sign the rules were shaped to include winners and exclude losers after the fact.
- **Too few trades overall.** A dazzling Sharpe on 40 trades is a story about luck, not an edge — the [evidence contract](/articles/how-many-trades-to-validate-a-strategy/) covers the trade-count math in depth.
- **No logical market reason for the rules.** If you cannot explain *why* the rule should work in market terms, the optimizer probably just found noise. (This becomes Test 5.)

AI and machine-learning models deserve one extra line here: they are overfitting machines by nature. A model with thousands of internal parameters will fit *anything*, including pure noise — spurious correlations that look like discovered edges but vanish the moment the data changes. Simplicity is the defense; complexity without validation is the trap.

## Test 1 — The parameter cliff test: nudge every parameter and watch for the cliff

Here is the signature test of this article — and the detective question to ask of any strategy, including ones you bought from someone else:

**"Why 17.3 and not 20?"**

If the answer is "because 17.3 backtests better," you have learned nothing about the market and everything about the dataset. A robust edge is a **flat-topped hill**: change the parameter a little, and performance degrades a little, gracefully. An overfit edge is a **single sharp spike**: change the parameter a little, and performance falls off a cliff.

Run the nudge. For every parameter the optimizer tuned — the lookback length, the stop-loss multiple, the RSI threshold, all of them — shift it by ±10% and ±20% and re-run the backtest. Watch profit factor (the working metric here — the full breakdown lives in our [profit factor guide](/articles/profit-factor/)):

- A robust setting stays comfortably profitable across the whole ±20% range — the curve degrades like a gentle hill.
- An overfit setting prints a great number at exactly the chosen value and collapses when nudged — the curve is a needle.

As a working practitioner rule of thumb, some traders use this bar: profit factor should not collapse below ~1.2 on a ±10% shift, and holding above ~1.3 across the full ±20% range signals a genuine plateau. That is a convention from practitioner scorecards, not a proven threshold — other practitioners use different bars (for example, the metric staying within ~70% of baseline).

The point is the *shape*, not the number: flat hill good, sharp spike bad.

The folk wisdom "prefer round numbers" fits here as color, not as law: an edge that needs 17.3 but not 20 or 15 is a confession; an edge that survives at 20, 25, and 30 is a candidate. Precise parameters are not a feature. They are a suspect list.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Parameter sensitivity cliff test showing graceful degradation of a robust trading strategy versus the sharp performance cliff of an overfit strategy" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Nudge every parameter &#177;20% &#8212; read the shape, not the number</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Profit factor as one parameter is shifted from &#8722;20% to +20%</text>
<rect x="20" y="64" width="300" height="288" rx="12" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="170" y="88" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">ROBUST &#8212; flat-topped hill</text>
<line x1="58" y1="270.7" x2="305" y2="270.7" stroke="#2a3a34" stroke-width="1"/>
<text x="50" y="274.728" text-anchor="end" fill="#92a59c" font-size="10">1.0</text>
<line x1="58" y1="221.6" x2="305" y2="221.6" stroke="#2a3a34" stroke-width="1"/>
<text x="50" y="225.63799999999998" text-anchor="end" fill="#92a59c" font-size="10">1.5</text>
<line x1="58" y1="172.5" x2="305" y2="172.5" stroke="#2a3a34" stroke-width="1"/>
<text x="50" y="176.548" text-anchor="end" fill="#92a59c" font-size="10">2.0</text>
<line x1="58" y1="123.5" x2="305" y2="123.5" stroke="#2a3a34" stroke-width="1"/>
<text x="50" y="127.458" text-anchor="end" fill="#92a59c" font-size="10">2.5</text>
<line x1="58" y1="251.1" x2="305" y2="251.1" stroke="#14d991" stroke-width="1.2" stroke-dasharray="6 4" stroke-opacity="0.7"/>
<rect x="175.4" y="233.1" width="125.6" height="15" fill="#1d2b26"/>
<text x="301" y="244.09199999999998" text-anchor="end" fill="#14d991" font-size="10">practitioner bar ~1.2</text>
<line x1="181.5" y1="94" x2="181.5" y2="310" stroke="#2a3a34" stroke-width="1" stroke-dasharray="3 3"/>
<path d="M 58.0 253.1 C 78.6 252.1, 99.2 249.5, 119.8 247.2 C 140.3 244.9, 160.9 239.6, 181.5 239.3 C 202.1 239.0, 222.7 242.4, 243.2 245.2 C 263.8 248.0, 284.4 254.2, 305.0 256.0" fill="none" stroke="#14d991" stroke-width="3" stroke-linecap="round"/>
<circle cx="58.0" cy="253.1" r="4" fill="#14d991" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="119.8" cy="247.2" r="4" fill="#14d991" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="181.5" cy="239.3" r="4" fill="#14d991" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="243.2" cy="245.2" r="4" fill="#14d991" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="305.0" cy="256.0" r="4" fill="#14d991" stroke="#1d2b26" stroke-width="1.5"/>
<text x="58.0" y="328" text-anchor="middle" fill="#92a59c" font-size="10.5">-20%</text>
<text x="119.75" y="328" text-anchor="middle" fill="#92a59c" font-size="10.5">-10%</text>
<text x="181.5" y="328" text-anchor="middle" fill="#f2f7f4" font-size="10.5">chosen</text>
<text x="243.25" y="328" text-anchor="middle" fill="#92a59c" font-size="10.5">+10%</text>
<text x="305.0" y="328" text-anchor="middle" fill="#92a59c" font-size="10.5">+20%</text>
<text x="170" y="348" text-anchor="middle" fill="#14d991" font-size="11.5" font-weight="600">degrades gracefully &#8594; candidate</text>
<rect x="360" y="64" width="300" height="288" rx="12" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="510" y="88" text-anchor="middle" fill="#ff4f65" font-size="13" font-weight="700">OVERFIT &#8212; the cliff</text>
<line x1="398" y1="270.7" x2="645" y2="270.7" stroke="#2a3a34" stroke-width="1"/>
<text x="390" y="274.728" text-anchor="end" fill="#92a59c" font-size="10">1.0</text>
<line x1="398" y1="221.6" x2="645" y2="221.6" stroke="#2a3a34" stroke-width="1"/>
<text x="390" y="225.63799999999998" text-anchor="end" fill="#92a59c" font-size="10">1.5</text>
<line x1="398" y1="172.5" x2="645" y2="172.5" stroke="#2a3a34" stroke-width="1"/>
<text x="390" y="176.548" text-anchor="end" fill="#92a59c" font-size="10">2.0</text>
<line x1="398" y1="123.5" x2="645" y2="123.5" stroke="#2a3a34" stroke-width="1"/>
<text x="390" y="127.458" text-anchor="end" fill="#92a59c" font-size="10">2.5</text>
<line x1="398" y1="251.1" x2="645" y2="251.1" stroke="#14d991" stroke-width="1.2" stroke-dasharray="6 4" stroke-opacity="0.7"/>
<rect x="515.4" y="233.1" width="125.6" height="15" fill="#1d2b26"/>
<text x="641" y="244.09199999999998" text-anchor="end" fill="#14d991" font-size="10">practitioner bar ~1.2</text>
<line x1="521.5" y1="94" x2="521.5" y2="310" stroke="#2a3a34" stroke-width="1" stroke-dasharray="3 3"/>
<path d="M 398.0 285.5 C 418.6 282.2, 439.2 292.8, 459.8 265.8 C 480.3 238.8, 500.9 123.5, 521.5 123.5 C 542.1 123.5, 562.7 238.8, 583.2 265.8 C 603.8 292.8, 624.4 282.2, 645.0 285.5" fill="none" stroke="#ff4f65" stroke-width="3" stroke-linecap="round"/>
<circle cx="398.0" cy="285.5" r="4" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="459.8" cy="265.8" r="4" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="521.5" cy="123.5" r="4" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="583.2" cy="265.8" r="4" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="645.0" cy="285.5" r="4" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<text x="398.0" y="328" text-anchor="middle" fill="#92a59c" font-size="10.5">-20%</text>
<text x="459.75" y="328" text-anchor="middle" fill="#92a59c" font-size="10.5">-10%</text>
<text x="521.5" y="328" text-anchor="middle" fill="#f2f7f4" font-size="10.5">chosen</text>
<text x="583.25" y="328" text-anchor="middle" fill="#92a59c" font-size="10.5">+10%</text>
<text x="645.0" y="328" text-anchor="middle" fill="#92a59c" font-size="10.5">+20%</text>
<text x="510" y="348" text-anchor="middle" fill="#ff4f65" font-size="11.5" font-weight="600">one exact value works &#8594; reject</text>
</svg>
</figure>

### The test to run: the cliff protocol

1. List every parameter you tuned — the lookback lengths, thresholds, stop-loss multiples, all of them.
2. Re-run the backtest at −20%, −10%, +10%, and +20% of each chosen value.
3. Record profit factor at each point and sketch the curve.
4. Read the shape: graceful flat-topped degradation = plateau (candidate); vertical collapse = cliff (reject).
5. Working bar (practitioner rule of thumb, not a law): profit factor should not collapse below ~1.2 on a ±10% shift.

## Test 2 — The landscape test: pick the plateau, not the peak

The cliff test nudges one parameter at a time. The landscape test zooms out and reads the whole neighborhood — and it is the centerpiece of how to detect overfitting in a trading strategy, because **nobody should ever read the single best row of an optimization grid**.

Open your optimization results as a grid or heatmap. Ignore the winner for a moment and look at the rows *around* it. You are asking one question: is the best result a peak or a plateau?

- **The plateau:** a profit factor of, say, 1.3 — surrounded on all sides by neighbors that are also profitable. Modest, boring, and surrounded by friends. This is a region of genuine edge.
- **The isolated spike:** a profit factor of 2.5 — surrounded by neighbors that lose money. Spectacular, lonely, and statistically indistinguishable from the optimizer finding the one combination that happened to match the noise.

**Pick the plateau, not the peak.** A PF 1.3 surrounded by profitable neighbors is worth more live than an isolated 2.5 surrounded by losses. The uncomfortable corollary: the setting you would most proudly show a friend — the optimizer's top row — is the one you should trust least. The landscape is honest where the winner is not.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 462" role="img" aria-label="Optimization landscape showing an isolated overfit performance spike versus a broad plateau of robust parameter combinations in a trading strategy backtest" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The optimization grid &#8212; read the neighborhood, not the winner</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">pick the plateau, not the peak</text>
<rect x="25" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="59" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="93" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="127" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="161" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="195" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="229" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="263" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="25" y="104" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="59" y="104" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="93" y="104" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="127" y="104" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="161" y="104" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="195" y="104" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="229" y="104" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="263" y="104" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="104" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="25" y="138" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="59" y="138" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="93" y="138" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="127" y="138" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="161" y="138" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="195" y="138" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="229" y="138" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="263" y="138" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="138" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="25" y="172" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="59" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="93" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="127" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="161" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="195" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="229" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="263" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="25" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="59" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="93" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="127" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="161" y="206" width="30" height="30" rx="5" fill="#14d991" fill-opacity="0.92"/>
<rect x="195" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="229" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="263" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="25" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="59" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="93" y="240" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="127" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="161" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="195" y="240" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="229" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="263" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="25" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="59" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="93" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="127" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="161" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="195" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="229" y="274" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="263" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="25" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="59" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="93" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="127" y="308" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="161" y="308" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="195" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="229" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="263" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="25" y="342" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="59" y="342" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="93" y="342" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="127" y="342" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="161" y="342" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="195" y="342" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="229" y="342" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="263" y="342" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="297" y="342" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="159" y="204" width="34" height="34" rx="7" fill="none" stroke="#f2f7f4" stroke-width="2"/>
<text x="176.0" y="225.5" text-anchor="middle" fill="#0a0f0d" font-size="12" font-weight="700">2.5</text>
<rect x="353" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="387" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="421" y="70" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="455" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="489" y="70" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="523" y="70" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="557" y="70" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="591" y="70" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="625" y="70" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="353" y="104" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="387" y="104" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="421" y="104" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="455" y="104" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="489" y="104" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="523" y="104" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="557" y="104" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="591" y="104" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="625" y="104" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="353" y="138" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="387" y="138" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="421" y="138" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="455" y="138" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="489" y="138" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="523" y="138" width="30" height="30" rx="5" fill="#1e7f5f" fill-opacity="0.92"/>
<rect x="557" y="138" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="591" y="138" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="625" y="138" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="353" y="172" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="387" y="172" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="421" y="172" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="455" y="172" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="489" y="172" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="523" y="172" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="557" y="172" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="591" y="172" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="625" y="172" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="353" y="206" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="387" y="206" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="421" y="206" width="30" height="30" rx="5" fill="#1e7f5f" fill-opacity="0.92"/>
<rect x="455" y="206" width="30" height="30" rx="5" fill="#1e7f5f" fill-opacity="0.92"/>
<rect x="489" y="206" width="30" height="30" rx="5" fill="#1e7f5f" fill-opacity="0.92"/>
<rect x="523" y="206" width="30" height="30" rx="5" fill="#1e7f5f" fill-opacity="0.92"/>
<rect x="557" y="206" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="591" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="625" y="206" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="353" y="240" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="387" y="240" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="421" y="240" width="30" height="30" rx="5" fill="#1e7f5f" fill-opacity="0.92"/>
<rect x="455" y="240" width="30" height="30" rx="5" fill="#1e7f5f" fill-opacity="0.92"/>
<rect x="489" y="240" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="523" y="240" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="557" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="591" y="240" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="625" y="240" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="353" y="274" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="387" y="274" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="421" y="274" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="455" y="274" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="489" y="274" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="523" y="274" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="557" y="274" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="591" y="274" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="625" y="274" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="353" y="308" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="387" y="308" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="421" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="455" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="489" y="308" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="523" y="308" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="557" y="308" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="591" y="308" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="625" y="308" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="353" y="342" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="387" y="342" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="421" y="342" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="455" y="342" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="489" y="342" width="30" height="30" rx="5" fill="#7a2e35" fill-opacity="0.92"/>
<rect x="523" y="342" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<rect x="557" y="342" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="591" y="342" width="30" height="30" rx="5" fill="#2c5c46" fill-opacity="0.92"/>
<rect x="625" y="342" width="30" height="30" rx="5" fill="#6e5a28" fill-opacity="0.92"/>
<text x="470.0" y="191.5" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">1.3</text>
<text x="176" y="62" text-anchor="middle" fill="#ff4f65" font-size="12.5" font-weight="700">OVERFIT &#8212; the lonely winner</text>
<text x="504" y="62" text-anchor="middle" fill="#14d991" font-size="12.5" font-weight="700">ROBUST &#8212; the boring plateau</text>
<text x="176" y="396" text-anchor="middle" fill="#ff4f65" font-size="11.5" font-weight="600">the winner (2.5) &#8212; the row to trust least</text>
<text x="176" y="412" text-anchor="middle" fill="#92a59c" font-size="11">spectacular, lonely, indistinguishable from luck</text>
<text x="504" y="396" text-anchor="middle" fill="#14d991" font-size="11.5" font-weight="600">the plateau (1.3) &#8212; modest, boring, surrounded by friends</text>
<text x="504" y="412" text-anchor="middle" fill="#92a59c" font-size="11">worth more live than an isolated 2.5 surrounded by losses</text>
<rect x="150" y="423" width="14" height="14" rx="3" fill="#14d991" fill-opacity="0.92"/>
<text x="170" y="435" text-anchor="start" fill="#92a59c" font-size="11">PF &#8805; 2.0</text>
<rect x="270" y="423" width="14" height="14" rx="3" fill="#1e7f5f" fill-opacity="0.92"/>
<text x="290" y="435" text-anchor="start" fill="#92a59c" font-size="11">PF 1.4&#8211;2.0</text>
<rect x="390" y="423" width="14" height="14" rx="3" fill="#2c5c46" fill-opacity="0.92"/>
<text x="410" y="435" text-anchor="start" fill="#92a59c" font-size="11">PF 1.0&#8211;1.4</text>
<rect x="510" y="423" width="14" height="14" rx="3" fill="#7a2e35" fill-opacity="0.92"/>
<text x="530" y="435" text-anchor="start" fill="#92a59c" font-size="11">PF &lt; 1.0</text>
</svg>
</figure>

### The test to run: the landscape protocol

1. Open the full optimization grid — not just the top row, the whole table or heatmap.
2. Find the winner. Now look at the 20–30 nearest neighbors: are most of them profitable?
3. If yes — the winner sits on a plateau. Take the plateau's center (a round, unremarkable setting inside the profitable region), not the peak.
4. If the winner is an island surrounded by red — reject the peak. Either pick the center of the best profitable *cluster*, or accept that the grid has no robust answer.

## Test 3 — The dice-count: how many times did you roll the dice?

This is the pub version of a serious statistical idea. **Count how many strategy variants you tried — including the ugly ones you deleted.** Every variant you tested and threw away counts against the winner, because the winner was picked *from* that pile.

The logic is simple: if you roll a die once and get a six, that is mildly interesting. If you roll a hundred times and report only the six, nobody should be impressed. A backtest "winner" pulled from 100 discarded tries is the six you reported. The more times you rolled, the higher the bar the winner must clear before it means anything.

Practitioners have turned this into a rough rule of thumb for the bar the winner's Sharpe ratio must clear:

- **~100 variants tried → demand observed Sharpe ≥ ~2.5**
- **~10 variants tried → demand Sharpe ≥ ~1.8**
- **1 pre-registered hypothesis → Sharpe ≥ ~1.0 earns its nominal weight**

That ladder is a practitioner translation of real order-statistics math (the expected best result among N tries grows roughly like the square root of the logarithm of N — the √(2 ln N) rule), but it is a rule of thumb, not a theorem.

### Deflated Sharpe ratio explained

The formal version exists: the deflated Sharpe ratio, explained for retail traders, is this — a 2014-era peer-reviewed study by two quant researchers (*Bailey & López de Prado*, published in the *Journal of Portfolio Management*) asks not "is the Sharpe high?" but "given that I selected the best Sharpe out of N trials, what is the probability the *true* Sharpe is actually positive?" It deflates the winner for the number of trials, the sample length, the correlation among the trials, and the nastiness of the returns (skew and fat tails).

Third-party research, cited as such — not our invention, and not our data.

There is a related coin-flip test worth one line: the **Probability of Backtest Overfitting** (Bailey and co-authors, SSRN working paper 2013; published in the *Journal of Computational Finance* in 2017) estimates the chance that the strategy selected as best in-sample ends up *below the median* strategy out-of-sample. A value near 0.5 means the selection procedure is a coin flip — pure luck. Practitioners often use ~0.2 as a rough acceptance bar, but that line is a practitioner convention, not a finding of the paper.

And the cheapest fix of all is the one we made a contract about earlier: **pre-registration.** Write down your hypothesis, parameters, universe, and exit rules *before* you touch the data. A pre-registered single hypothesis carries a trial count of N = 1 — one die roll, an honest count.

That is why the dice-count only works if your N is honest, and why the [evidence contract](/articles/how-many-trades-to-validate-a-strategy/) exists: it is what makes the count possible. If you cannot count how many variants you tried, your N is unknown — and the Sharpe is guilty until proven innocent.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 412" role="img" aria-label="Dice-roll illustration showing how the required Sharpe ratio rises from 1.0 to 2.5 as the number of backtest trials grows from 1 to 100" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The dice-count: the more you rolled, the higher the bar</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">every discarded variant counts against the winner</text>
<line x1="40" y1="200" x2="640" y2="200" stroke="#2a3a34" stroke-width="1"/>
<rect class="bar-grow-v" x="85" y="155.0" width="90" height="45.0" rx="6" fill="#14d991" fill-opacity="0.85"/>
<text x="130" y="145.0" text-anchor="middle" fill="#14d991" font-size="12.5" font-weight="700">Sharpe &#8805; ~1.0</text>
<line x1="40" y1="200" x2="640" y2="200" stroke="#2a3a34" stroke-width="1"/>
<rect class="bar-grow-v" x="295" y="119.0" width="90" height="81.0" rx="6" fill="#14d991" fill-opacity="0.85"/>
<text x="340" y="109.0" text-anchor="middle" fill="#14d991" font-size="12.5" font-weight="700">Sharpe &#8805; ~1.8</text>
<line x1="40" y1="200" x2="640" y2="200" stroke="#2a3a34" stroke-width="1"/>
<rect class="bar-grow-v" x="505" y="87.5" width="90" height="112.5" rx="6" fill="#14d991" fill-opacity="0.85"/>
<text x="550" y="77.5" text-anchor="middle" fill="#14d991" font-size="12.5" font-weight="700">Sharpe &#8805; ~2.5</text>
<line x1="240" y1="66" x2="240" y2="368" stroke="#2a3a34" stroke-width="1"/>
<line x1="440" y1="66" x2="440" y2="368" stroke="#2a3a34" stroke-width="1"/>
<rect x="98" y="224" width="64" height="64" rx="11.5" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="117.2" cy="243.2" r="4.8" fill="#f2f7f4"/>
<circle cx="142.8" cy="243.2" r="4.8" fill="#f2f7f4"/>
<circle cx="117.2" cy="268.8" r="4.8" fill="#f2f7f4"/>
<circle cx="142.8" cy="268.8" r="4.8" fill="#f2f7f4"/>
<circle cx="117.2" cy="256.0" r="4.8" fill="#f2f7f4"/>
<circle cx="142.8" cy="256.0" r="4.8" fill="#f2f7f4"/>
<rect x="243" y="218" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="253.2" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="266.8" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="253.2" cy="241.8" r="2.5" fill="#f2f7f4"/>
<circle cx="266.8" cy="241.8" r="2.5" fill="#f2f7f4"/>
<rect x="283" y="218" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="293.2" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="306.8" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="300.0" cy="235.0" r="2.5" fill="#f2f7f4"/>
<circle cx="293.2" cy="241.8" r="2.5" fill="#f2f7f4"/>
<circle cx="306.8" cy="241.8" r="2.5" fill="#f2f7f4"/>
<rect x="323" y="218" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="333.2" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="346.8" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="333.2" cy="241.8" r="2.5" fill="#f2f7f4"/>
<circle cx="346.8" cy="241.8" r="2.5" fill="#f2f7f4"/>
<rect x="363" y="218" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="373.2" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="386.8" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="373.2" cy="241.8" r="2.5" fill="#f2f7f4"/>
<circle cx="386.8" cy="241.8" r="2.5" fill="#f2f7f4"/>
<rect x="403" y="218" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="413.2" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="426.8" cy="228.2" r="2.5" fill="#f2f7f4"/>
<circle cx="420.0" cy="235.0" r="2.5" fill="#f2f7f4"/>
<circle cx="413.2" cy="241.8" r="2.5" fill="#f2f7f4"/>
<circle cx="426.8" cy="241.8" r="2.5" fill="#f2f7f4"/>
<rect x="243" y="262" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="253.2" cy="272.2" r="2.5" fill="#f2f7f4"/>
<circle cx="266.8" cy="272.2" r="2.5" fill="#f2f7f4"/>
<circle cx="260.0" cy="279.0" r="2.5" fill="#f2f7f4"/>
<circle cx="253.2" cy="285.8" r="2.5" fill="#f2f7f4"/>
<circle cx="266.8" cy="285.8" r="2.5" fill="#f2f7f4"/>
<rect x="283" y="262" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="293.2" cy="272.2" r="2.5" fill="#f2f7f4"/>
<circle cx="306.8" cy="285.8" r="2.5" fill="#f2f7f4"/>
<rect x="323" y="262" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="333.2" cy="272.2" r="2.5" fill="#f2f7f4"/>
<circle cx="346.8" cy="285.8" r="2.5" fill="#f2f7f4"/>
<rect x="363" y="262" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="373.2" cy="272.2" r="2.5" fill="#f2f7f4"/>
<circle cx="386.8" cy="272.2" r="2.5" fill="#f2f7f4"/>
<circle cx="380.0" cy="279.0" r="2.5" fill="#f2f7f4"/>
<circle cx="373.2" cy="285.8" r="2.5" fill="#f2f7f4"/>
<circle cx="386.8" cy="285.8" r="2.5" fill="#f2f7f4"/>
<rect x="403" y="262" width="34" height="34" rx="6.1" fill="#1d2b26" stroke="#2a3a34" stroke-width="1.5"/>
<circle cx="413.2" cy="272.2" r="2.5" fill="#f2f7f4"/>
<circle cx="426.8" cy="272.2" r="2.5" fill="#f2f7f4"/>
<circle cx="413.2" cy="285.8" r="2.5" fill="#f2f7f4"/>
<circle cx="426.8" cy="285.8" r="2.5" fill="#f2f7f4"/>
<rect x="491" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="212" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="224" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="236" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="248" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="260" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="272" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="284" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="296" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="308" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="491" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="503" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="515" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="527" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="539" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="551" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="563" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="575" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="587" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<rect x="599" y="320" width="9" height="9" rx="2" fill="#31413a" stroke="#2a3a34" stroke-width="0.75"/>
<text x="130" y="344" text-anchor="middle" fill="#f2f7f4" font-size="12.5" font-weight="700">1 pre-registered hypothesis</text>
<text x="130" y="362" text-anchor="middle" fill="#92a59c" font-size="11.5">N = 1 &#8212; an honest count</text>
<text x="340" y="344" text-anchor="middle" fill="#f2f7f4" font-size="12.5" font-weight="700">10 variants tried</text>
<text x="340" y="362" text-anchor="middle" fill="#92a59c" font-size="11.5">N = 10 &#8212; the bar rises</text>
<text x="550" y="344" text-anchor="middle" fill="#f2f7f4" font-size="12.5" font-weight="700">100 variants tried</text>
<text x="550" y="362" text-anchor="middle" fill="#92a59c" font-size="11.5">N = 100 &#8212; the bar soars</text>
<text x="340" y="392" text-anchor="middle" fill="#92a59c" font-size="11">practitioner rule of thumb, not a theorem &#8212; the math grows like &#8730;(2 ln N)</text>
</svg>
</figure>

### The test to run: the dice-count protocol

1. Write down N: every variant you tried, including the deleted and abandoned ones. Be honest — the optimizer's history file is the witness.
2. Match N to the bar: ~100 tries → the winner needs Sharpe ≥ ~2.5; ~10 tries → ≥ ~1.8; one pre-registered hypothesis → ~1.0.
3. The Sharpe must clear *its* N-bar, not just look good in isolation.
4. If you cannot reconstruct N, treat the result as guilty until proven innocent — re-run from a pre-registered hypothesis.

## Test 4 — Walk-forward testing: make the strategy earn its future

This is the closest thing to real trading a backtest can produce — **walk-forward testing**. The procedure: optimize the parameters on an initial window of data, lock them, test the locked strategy unchanged on the next *unseen* slice, then roll both windows forward and repeat. Chain the out-of-sample segments together. At every point in that chained result, the strategy only ever saw data that was genuinely its future.

There is one hard rule, and it is where most retail traders quietly commit overfitting without knowing it: **the contamination rule.** The moment you peek at an out-of-sample slice to tweak the rules, it is no longer out-of-sample — the test is void. It is the practice test you graded before taking. An out-of-sample window may be spent exactly once, and never iterated on. Tweaking after seeing the result is just fitting to a slightly larger dataset.

How do you read the result? Practitioners compare the chained out-of-sample performance to the in-sample performance with a walk-forward efficiency ratio (annualized out-of-sample divided by annualized in-sample). The labels below are practitioner conventions — soften them in your head, never treat them as gates:

- Out-of-sample capturing roughly **70% or more** of in-sample performance — practitioners read this as strong robustness.
- **~50–70%** — acceptable; much of the edge survived.
- **Below ~30–50%** — the edge likely does not survive the future; overfitting is the leading suspect.

One caution that keeps this test honest: *some* out-of-sample degradation is normal. A strategy that drops from a great in-sample to a merely good out-of-sample is describing reality, not failing the test. Collapses driven by a market regime changing — a trend system meeting a choppy year — are a different problem from overfitting, and our [backtest-to-live guide](/articles/why-backtested-strategies-fail-in-live-trading/) explains why some decay is expected.

Do not confuse a regime gap with a fitting failure; this test hunts the second one.

As for how much data to reserve out-of-sample: one common convention is ~20–30% of the dataset spanning different market regimes (bull, chop, crash), and the classic textbook split is roughly 70% train / 15% validate / 15% test. Those are conventions, not rules — pick one, state it, and never move the boundary after you have seen what is inside.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 470" role="img" aria-label="Walk-forward testing diagram showing optimize-and-test windows rolling forward across historical price data with chained out-of-sample results" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Walk-forward testing: make the strategy earn its future</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">optimize &#8594; lock &#8594; test on the unseen &#8594; roll</text>
<text x="28" y="99.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Step 1</text>
<text x="28" y="114.0" text-anchor="start" fill="#92a59c" font-size="10.5">roll &#8594;</text>
<rect x="120" y="78" width="104" height="34" rx="6" fill="#24352f" stroke="#2a3a34" stroke-width="1"/>
<text x="172.0" y="99.0" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="600">optimize</text>
<rect x="230" y="78" width="104" height="34" rx="6" fill="#24352f" stroke="#2a3a34" stroke-width="1"/>
<text x="282.0" y="99.0" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="600">optimize</text>
<rect x="340" y="78" width="104" height="34" rx="6" fill="#0f2e23" stroke="#14d991" stroke-width="1.5"/>
<text x="392.0" y="99.0" text-anchor="middle" fill="#14d991" font-size="10.5" font-weight="600">locked test</text>
<rect x="450" y="78" width="104" height="34" rx="6" fill="#141c19" stroke="#2a3a34" stroke-width="1"/>
<text x="502.0" y="99.0" text-anchor="middle" fill="#92a59c" font-size="10.5" font-weight="600">future</text>
<rect x="560" y="78" width="104" height="34" rx="6" fill="#141c19" stroke="#2a3a34" stroke-width="1"/>
<text x="612.0" y="99.0" text-anchor="middle" fill="#92a59c" font-size="10.5" font-weight="600">future</text>
<line x1="664" y1="118" x2="664" y2="122" stroke="#92a59c" stroke-width="1.2"/>
<path d="M 658 118 L 664 124 L 670 118" fill="none" stroke="#92a59c" stroke-width="1.2"/>
<text x="28" y="149.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Step 2</text>
<text x="28" y="164.0" text-anchor="start" fill="#92a59c" font-size="10.5">roll &#8594;</text>
<rect x="120" y="128" width="104" height="34" rx="6" fill="#101413" stroke="#2a3a34" stroke-width="1"/>
<text x="172.0" y="149.0" text-anchor="middle" fill="#5b6a64" font-size="10.5" font-weight="600">spent</text>
<rect x="230" y="128" width="104" height="34" rx="6" fill="#24352f" stroke="#2a3a34" stroke-width="1"/>
<text x="282.0" y="149.0" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="600">optimize</text>
<rect x="340" y="128" width="104" height="34" rx="6" fill="#24352f" stroke="#2a3a34" stroke-width="1"/>
<text x="392.0" y="149.0" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="600">optimize</text>
<rect x="450" y="128" width="104" height="34" rx="6" fill="#0f2e23" stroke="#14d991" stroke-width="1.5"/>
<text x="502.0" y="149.0" text-anchor="middle" fill="#14d991" font-size="10.5" font-weight="600">locked test</text>
<rect x="560" y="128" width="104" height="34" rx="6" fill="#141c19" stroke="#2a3a34" stroke-width="1"/>
<text x="612.0" y="149.0" text-anchor="middle" fill="#92a59c" font-size="10.5" font-weight="600">future</text>
<line x1="664" y1="168" x2="664" y2="172" stroke="#92a59c" stroke-width="1.2"/>
<path d="M 658 168 L 664 174 L 670 168" fill="none" stroke="#92a59c" stroke-width="1.2"/>
<text x="28" y="199.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Step 3</text>
<rect x="120" y="178" width="104" height="34" rx="6" fill="#101413" stroke="#2a3a34" stroke-width="1"/>
<text x="172.0" y="199.0" text-anchor="middle" fill="#5b6a64" font-size="10.5" font-weight="600">spent</text>
<rect x="230" y="178" width="104" height="34" rx="6" fill="#101413" stroke="#2a3a34" stroke-width="1"/>
<text x="282.0" y="199.0" text-anchor="middle" fill="#5b6a64" font-size="10.5" font-weight="600">spent</text>
<rect x="340" y="178" width="104" height="34" rx="6" fill="#24352f" stroke="#2a3a34" stroke-width="1"/>
<text x="392.0" y="199.0" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="600">optimize</text>
<rect x="450" y="178" width="104" height="34" rx="6" fill="#24352f" stroke="#2a3a34" stroke-width="1"/>
<text x="502.0" y="199.0" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="600">optimize</text>
<rect x="560" y="178" width="104" height="34" rx="6" fill="#0f2e23" stroke="#14d991" stroke-width="1.5"/>
<text x="612.0" y="199.0" text-anchor="middle" fill="#14d991" font-size="10.5" font-weight="600">locked test</text>
<text x="28" y="258" text-anchor="start" fill="#f2f7f4" font-size="12.5" font-weight="700">Chained out-of-sample:</text>
<rect x="250" y="240" width="120" height="36" rx="6" fill="#0f2e23" stroke="#14d991" stroke-width="1.5"/>
<text x="310.0" y="263" text-anchor="middle" fill="#14d991" font-size="11.5" font-weight="700">OOS 1</text>
<rect x="370" y="240" width="120" height="36" rx="6" fill="#0f2e23" stroke="#14d991" stroke-width="1.5"/>
<text x="430.0" y="263" text-anchor="middle" fill="#14d991" font-size="11.5" font-weight="700">OOS 2</text>
<rect x="490" y="240" width="120" height="36" rx="6" fill="#0f2e23" stroke="#14d991" stroke-width="1.5"/>
<text x="550.0" y="263" text-anchor="middle" fill="#14d991" font-size="11.5" font-weight="700">OOS 3</text>
<text x="250" y="296" text-anchor="start" fill="#92a59c" font-size="11.5">the strategy only ever saw data that was genuinely its future</text>
<rect x="20" y="318" width="194" height="34" rx="17" fill="#1d2b26" stroke="#14d991" stroke-width="1.2"/>
<text x="117" y="340" text-anchor="middle" fill="#14d991" font-size="11.5" font-weight="600">&#8776; 70%+ &#8212; strong</text>
<rect x="243" y="318" width="194" height="34" rx="17" fill="#1d2b26" stroke="#f2a33c" stroke-width="1.2"/>
<text x="340" y="340" text-anchor="middle" fill="#f2a33c" font-size="11.5" font-weight="600">~ 50&#8211;70% &#8212; acceptable</text>
<rect x="466" y="318" width="194" height="34" rx="17" fill="#1d2b26" stroke="#ff4f65" stroke-width="1.2"/>
<text x="563" y="340" text-anchor="middle" fill="#ff4f65" font-size="11.5" font-weight="600">&lt; ~30&#8211;50% &#8212; likely overfit</text>
<text x="340" y="372" text-anchor="middle" fill="#92a59c" font-size="11">walk-forward efficiency = annualized OOS &#247; annualized IS (practitioner conventions, not gates)</text>
<rect x="20" y="388" width="640" height="68" rx="12" fill="#241416" stroke="#e5484d" stroke-width="1.5"/>
<text x="340" y="413" text-anchor="middle" fill="#e5484d" font-size="13" font-weight="700">Hard rule &#8212; the contamination rule</text>
<text x="340" y="434" text-anchor="middle" fill="#f2f7f4" font-size="11.5">peek at the test slice to tweak the rules, and the test is void &#8212; an out-of-sample</text>
<text x="340" y="449" text-anchor="middle" fill="#f2f7f4" font-size="11.5">window may be spent exactly once, and never iterated on</text>
</svg>
</figure>

### The test to run: the walk-forward protocol

1. Split the data (one common convention: ~70% train / 15% validate / 15% test, or ~20–30% out-of-sample spanning different regimes — a convention, not a law).
2. Optimize on the first window. Lock the parameters.
3. Test the locked strategy unchanged on the next unseen slice. Roll both windows forward. Repeat.
4. Chain the out-of-sample segments; compute efficiency = annualized OOS / annualized IS.
5. Read it softly: ~70%+ strong, ~50–70% acceptable, below ~30–50% likely overfit.
6. **Hard rule:** one peek at the test slice for tweaking voids the test. It is spent exactly once.

## Test 5 — The rationale test: explain it to a trader friend

The final test needs no software. **Explain the strategy, rule by rule, to a trader friend in plain words — and give the market reason for each rule.** Not the Sharpe reason. The market reason.

- "We buy when the 20-day breaks above the 50-day" → why should that work? What market behavior does it capture — trend persistence, institutional rebalancing flows, something real?
- "The stop-loss is 1.8× ATR" → why 1.8? What is it protecting against?
- "We exit at 3:15 PM" → because of what? (If the answer is "because exits after 3:20 kept getting whipsawed in 2023," that is a fitting artifact wearing a rule's clothing.)

Any rule whose only justification is *"the optimizer liked it"* is a fitting artifact until proven otherwise — delete it, or validate it on genuinely unseen data and across a second asset or timeframe. An edge that is real shows *some* consistency across similar instruments: a NIFTY intraday edge that evaporates on BANKNIFTY intraday, with no reason why, memorized one instrument's quirks.

(The full Indian-regime treatment of this is in the next section.)

"Prefer round numbers" earns its last appearance here as folk wisdom, not law: nobody's market theory says the edge lives at exactly 17.3 and dies at 17. If the parameter cannot be defended with market logic, it does not belong in the strategy — no matter what the backtest says.

### The test to run: the rationale protocol

1. Write each rule and parameter in one plain-English sentence, with its market reason attached.
2. Delete any rule whose only justification is "the optimizer liked it."
3. Explain the whole strategy to a trader friend. Any part that sounds like numerology gets cut.
4. Sanity pass: check the edge on a second asset or timeframe. Memorized quirks rarely travel.

## The Indian F&O angle: regime-fit, the cost stack, and expiry reality

This is where overfitting meets the Indian retail trader's actual battlefield — and it is the angle no competitor writes about. Overfitting has a cousin: **regime-fit**. A strategy optimized on the 2020–21 post-COVID bull — relentless uptrends, cheap volatility, dips that always recovered — then traded into a 2022-style drawdown environment is not necessarily curve-fit to parameters. It is curve-fit to *market weather*. The rules memorized one regime. Walk-forward testing across different regimes is the defense, and the contamination rule applies here too: if you noticed the 2022 collapse and "adjusted," you spent the window.

Then there is the cost stack, and it is where paper edges go to die. An over-optimized backtest with a gross edge of, say, ₹180 per trade can look robust through every test above — and still be a fantasy, because the Indian F&O cost stack takes its cut on every single round trip: STT on the sell leg, stamp duty on the buy leg, exchange charges, SEBI turnover fees, and GST on the brokerage and charges.

(The full schedule lives in our [options charges guide](/articles/options-trading-charges-india/) — linked, not repeated here.)

The nastiest cost is the one most backtests never model at all: **the option buyer's bid-ask spread.** A retail buyer lifting the offer on a weekly NIFTY option routinely pays several ticks of spread per leg — often the single largest cost of all, and completely invisible in a backtest that fills at mid-price or last-traded-price.

A strategy that churns — dozens of small trades, each tuned to capture ₹150 of "edge" — is exactly the profile where STT plus spread erases the paper profit and turns the live account red. Churning strategies are also exactly the profile where overfitting hides, because high trade counts make every metric look statistically confident. That combination — statistically confident backtest, negative live expectancy after costs — is the most expensive illusion in Indian retail options.

Expiry-week adds the last layer. Liquidity concentrates, spreads widen on strikes away from the money, gamma moves accelerate, and execution on Thursday afternoon bears little resemblance to the backtest's assumptions. A strategy optimized on mid-week fills and traded into expiry is fitting one execution regime and trading another.

So the Indian version of the detection protocol has three extra questions: does the edge survive across regimes (not just across parameters)? Does it survive the *real* cost stack, spread included — or only the broker's headline brokerage? And does it survive expiry-week execution, or only Tuesday-afternoon fills?

## Overfitting vs look-ahead bias: two different lies

One precise paragraph, because traders confuse these constantly. **Overfitting is fitting to past noise** — the strategy learned the wrong lesson from history; the backtest is honest about what the rules *did*, but the rules are useless going forward. **Look-ahead bias is using future information** — the strategy cheated; the backtest shows what the rules *would have done* if they could see tomorrow. The classic retail example is a **repainting indicator**: one that redraws its past values as new bars arrive, so historical signals look perfectly timed — signals that could never have been traded live, because the information they used did not exist yet. Both make the backtest lie, in different directions: overfitting lies about the future, look-ahead bias lies about the past.

## Why forward-testing isn't the shortcut you want

At this point a reasonable trader asks: why not skip all five tests and just forward-test everything — paper trade it or run tiny size live and watch? Because forward-testing is honest and *slow*. A strategy that trades twice a month needs a year of forward data before the sample says anything.

The five tests above are the fast filter that decides which strategies *deserve* that year. (Our [verdict framework](/articles/how-to-know-if-trading-strategy-works/) and the upcoming paper-vs-real piece cover the honest endpoint: start small live and compare.)

Two honest one-liners to close the loop on common questions. **Monte Carlo** prices the *path* — the distribution of possible equity curves — not the honesty of the sample; it cannot detect overfitting by itself. (Full treatment arrives with our Monte Carlo piece.) And our own [What-If Trade Simulator](/tools/what-if-simulator/) is a path-pricer, not a lie detector: it prices the path of an overfit-free sample, but feed it an overfit sample and you get priced garbage out — it cannot tell you the sample was dishonest.

## How to detect overfitting in trading strategy: the Week-2 protocol, in order

You now own the complete detection kit. Here is the run order, distilled into a signature table built from this article's five tests — our summary, in our words:

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 518" role="img" aria-label="Comparison table of overfit versus robust trading strategy signatures across parameter sensitivity, optimization landscape, and out-of-sample behavior" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="14.5" font-weight="700">Overfit vs robust &#8212; the signature table (our summary, built from the five tests)</text>
<rect x="20" y="56" width="640" height="44" rx="8" fill="#1d2b26"/>
<text x="100.0" y="83" text-anchor="middle" fill="#92a59c" font-size="12.5" font-weight="700">Signal</text>
<text x="302.0" y="83" text-anchor="middle" fill="#ff4f65" font-size="12.5" font-weight="700">Overfit signature</text>
<text x="542.0" y="83" text-anchor="middle" fill="#14d991" font-size="12.5" font-weight="700">Robust signature</text>
<line x1="20" y1="158" x2="660" y2="158" stroke="#2a3a34" stroke-width="1"/>
<text x="28" y="121.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Parameter nudge</text>
<text x="28" y="137.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">&#177;10&#8211;20%</text>
<text x="302.0" y="121.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Falls off a cliff &#8212; one exact</text>
<text x="302.0" y="137.0" text-anchor="middle" fill="#f2f7f4" font-size="12">value works</text>
<text x="542.0" y="121.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Flat-topped hill &#8212; degrades</text>
<text x="542.0" y="137.0" text-anchor="middle" fill="#f2f7f4" font-size="12">gracefully</text>
<rect x="20" y="158" width="640" height="58" fill="#161e1b"/>
<line x1="20" y1="216" x2="660" y2="216" stroke="#2a3a34" stroke-width="1"/>
<text x="28" y="179.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Optimization</text>
<text x="28" y="195.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">landscape</text>
<text x="302.0" y="179.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Isolated 2.5 spike, losing</text>
<text x="302.0" y="195.0" text-anchor="middle" fill="#f2f7f4" font-size="12">neighbors</text>
<text x="542.0" y="179.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Plateau of 1.3s, profitable</text>
<text x="542.0" y="195.0" text-anchor="middle" fill="#f2f7f4" font-size="12">neighbors</text>
<line x1="20" y1="274" x2="660" y2="274" stroke="#2a3a34" stroke-width="1"/>
<text x="28" y="245.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Dice-count</text>
<text x="302.0" y="245.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Unknown N; winner clears no bar</text>
<text x="542.0" y="245.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Known N; Sharpe clears its N-bar</text>
<rect x="20" y="274" width="640" height="58" fill="#161e1b"/>
<line x1="20" y1="332" x2="660" y2="332" stroke="#2a3a34" stroke-width="1"/>
<text x="28" y="303.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Walk-forward</text>
<text x="302.0" y="295.0" text-anchor="middle" fill="#f2f7f4" font-size="12">OOS far below IS &#8212; efficiency</text>
<text x="302.0" y="311.0" text-anchor="middle" fill="#f2f7f4" font-size="12">under ~30&#8211;50%</text>
<text x="542.0" y="303.0" text-anchor="middle" fill="#f2f7f4" font-size="12">OOS holds ~50%+ of in-sample</text>
<line x1="20" y1="390" x2="660" y2="390" stroke="#2a3a34" stroke-width="1"/>
<text x="28" y="361.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Cross-asset check</text>
<text x="302.0" y="353.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Works on one asset / timeframe</text>
<text x="302.0" y="369.0" text-anchor="middle" fill="#f2f7f4" font-size="12">only</text>
<text x="542.0" y="353.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Some consistency across similar</text>
<text x="542.0" y="369.0" text-anchor="middle" fill="#f2f7f4" font-size="12">instruments</text>
<rect x="20" y="390" width="640" height="58" fill="#161e1b"/>
<line x1="20" y1="448" x2="660" y2="448" stroke="#2a3a34" stroke-width="1"/>
<text x="28" y="419.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Market rationale</text>
<text x="302.0" y="419.0" text-anchor="middle" fill="#f2f7f4" font-size="12">&#8220;The optimizer liked it&#8221;</text>
<text x="542.0" y="419.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Every rule has a market reason</text>
<line x1="20" y1="506" x2="660" y2="506" stroke="#2a3a34" stroke-width="1"/>
<text x="28" y="477.0" text-anchor="start" fill="#f2f7f4" font-size="12" font-weight="700">Equity curve</text>
<text x="302.0" y="469.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Suspiciously smooth, no real</text>
<text x="302.0" y="485.0" text-anchor="middle" fill="#f2f7f4" font-size="12">drawdowns</text>
<text x="542.0" y="469.0" text-anchor="middle" fill="#f2f7f4" font-size="12">Chop and drawdowns, like real</text>
<text x="542.0" y="485.0" text-anchor="middle" fill="#f2f7f4" font-size="12">markets</text>
</svg>
</figure>

| Signal | Overfit signature | Robust signature |
|---|---|---|
| Parameter nudge (±10–20%) | Falls off a cliff — one exact value works | Flat-topped hill — degrades gracefully |
| Optimization landscape | Isolated 2.5 spike, losing neighbors | Plateau of 1.3s, profitable neighbors |
| Dice-count | Unknown N; winner clears no bar | Known N; Sharpe clears its N-bar |
| Walk-forward | Out-of-sample far below in-sample, efficiency below ~30–50% | Out-of-sample holds ~50%+ of in-sample |
| Cross-asset check | Works on one asset/timeframe only | Shows some consistency across similar instruments |
| Market rationale | "The optimizer liked it" | Every rule has a market reason |
| Equity curve | Suspiciously smooth, no real drawdowns | Has chop and drawdowns like a real market |

The run order:

1. **The cliff test** — nudge every parameter ±10–20%; reject the cliffs.
2. **The landscape test** — read the neighborhood; pick the plateau, not the peak.
3. **The dice-count** — write down N; make the Sharpe clear its bar.
4. **The walk-forward test** — optimize, lock, roll; never peek at the test slice.
5. **The rationale test** — explain it to a friend; cut what you cannot justify.

And the Week-2 arc, for series readers running the full protocol: the [verdict framework](/articles/how-to-know-if-trading-strategy-works/) told you how to judge a strategy → the [evidence contract](/articles/how-many-trades-to-validate-a-strategy/) told you what evidence counts → the [backtest-to-live guide](/articles/why-backtested-strategies-fail-in-live-trading/) showed you the gaps between paper and reality → [real expectancy](/articles/how-to-calculate-real-expectancy/) gave you the honest number → this article asked whether the sample was honest in the first place.

Next: the Monte Carlo piece prices the *path* that honest sample can take, and the paper-vs-real piece runs the final proof — start small live and compare.

The question this article opened with has a plain answer now. A great backtest is a claim, not a finding. Run the five tests. Keep what survives. The market will test everything you didn't.

## Questions traders actually ask about overfitting

### What is overfitting in trading?

Overfitting — often called curve fitting — is tuning a strategy's rules and parameters so tightly to one historical dataset that they capture that dataset's noise instead of a repeatable edge. The practice-test analogy: the strategy memorized the answers to one specific past paper instead of learning the subject. The result is a beautiful backtest with no predictive power — it tells you what worked on that data, not what will work next.

### How do I know if my backtest is overfit?

Run the warning signs as a checklist, not a verdict: a suspiciously smooth equity curve with no real drawdowns; an edge that exists only at one precise parameter value; in-sample numbers that dazzle while out-of-sample numbers collapse; a strategy that works on exactly one asset or timeframe; more tuned parameters than the trade count can support; most of the profit coming from two or three trades; and no logical market reason for the rules. Tick three or more, and run the five tests in the article above. For the trade-count math behind "too few trades," see the [evidence contract](/articles/how-many-trades-to-validate-a-strategy/).

### What is the parameter-cliff test?

The parameter-cliff test — the signature detection test in this article — works like this: take every parameter the optimizer tuned and nudge each one ±10–20%, re-running the backtest at each step. A robust edge degrades gracefully, like a flat-topped hill. An overfit edge falls off a cliff — one exact value works and the neighbors collapse. As a working practitioner rule of thumb, profit factor should not collapse below ~1.2 on a ±10% shift; an edge that needs exactly 17.3 and dies at 20 is a confession, not an edge. (Profit factor itself is the metric, not the lesson — the [profit factor guide](/articles/profit-factor/) covers it.)

### What is walk-forward testing?

Walk-forward testing means optimizing a strategy on an initial window of data, locking the parameters, testing the locked strategy unchanged on the next unseen slice, then rolling both windows forward and chaining the out-of-sample segments together. At every point, the strategy only ever saw data that was genuinely its future — the closest thing to real trading a backtest can produce. Practitioners softly read the efficiency (out-of-sample ÷ in-sample): roughly 70%+ is strong, ~50–70% acceptable, below ~30–50% likely overfit. And the hard rule: peek at the test slice to tweak the rules, and the test is void.

### How many strategies can I test before the winner stops meaning anything?

There is no fixed number — there is a rising bar. Every variant you tried and discarded counts against the winner, like dice rolls you are not allowed to hide. As a practitioner rule of thumb: if you tried ~100 variants, the winner needs an observed Sharpe of at least ~2.5 to mean anything; ~10 tries → ~1.8; one pre-registered hypothesis → ~1.0 earns its nominal weight. The formal version, a 2014-era peer-reviewed study (the Deflated Sharpe Ratio), asks: given N trials, what is the probability the *true* Sharpe is actually positive? And pre-registration — writing the hypothesis down before touching the data — is what makes your count of N honest; see the [evidence contract](/articles/how-many-trades-to-validate-a-strategy/).

### My Sharpe ratio is 3 — is my strategy amazing?

Maybe — but practitioner consensus says a Sharpe that good is *suspicious* first and amazing second. Far more often, a 3+ Sharpe on a retail backtest means one of three things: the strategy is overfit, the trade count is too small for the number to mean anything, or costs were ignored (a backtest Sharpe computed on gross returns in Indian F&O, where STT and spreads bite, is a laboratory number — our [charges guide](/articles/options-trading-charges-india/) shows the real stack). Run the cliff test and the dice-count before celebrating. For what Sharpe actually measures, see [real expectancy](/articles/how-to-calculate-real-expectancy/).

### What is backtest overfitting vs look-ahead bias?

Overfitting is fitting to past noise — the strategy learned the wrong lesson from history, so the backtest is honest about what the rules did but the rules are useless going forward. Look-ahead bias is using future information — the strategy cheated, so the backtest shows what the rules would have done if they could see tomorrow. The classic retail example is a repainting indicator that redraws past values, producing perfectly timed historical signals that could never have been traded live. Both make the backtest lie, in different directions: overfitting lies about the future, look-ahead bias lies about the past.

### Can a simple strategy with few parameters still be overfit?

Yes. Parameter count is only one source of fitting — the other is *selection*. A two-rule strategy is no defense if you ran hundreds of simple variants and kept the winner; that winner is the luckiest draw of the pile, and the dice-count test (Test 3) catches it. A simple strategy can also be overfit by being tuned to one short or one-regime sample, which no parameter count can fix. The defense is the honest trial count: pre-register the hypothesis before touching the data (N = 1) so the selection step never happens.

### Why does my strategy work on NIFTY but not on BANKNIFTY?

Treat it as a warning sign, not a verdict. The usual explanation is single-asset fitting: the rules memorized the quirks of one instrument's history — its typical volatility, its intraday rhythm, its specific reactions to news — rather than capturing a repeatable market behavior. The cross-asset check from Test 5 is the cheap way to find out: an edge that is real tends to show *some* consistency across similar instruments. There is one honest exception: a rule with a genuine market reason to be asset-specific (say, a structure unique to how NIFTY weekly options are priced). If you cannot name that reason, the difference is probably fitting, not edge.

---

*Monks Of Market is an educational publication. Nothing here is financial advice. Backtesting detects lies in historical data; it cannot guarantee future results, and all trading involves risk of loss.*

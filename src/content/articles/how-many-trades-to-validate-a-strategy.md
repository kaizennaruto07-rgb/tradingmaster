---
title: "How Many Trades to Validate a Trading Strategy? The Evidence Contract"
description: "How many trades prove a strategy works? The witness ladder — 100, 200–500, 1,000+ — plus the independence rule, retail power analysis and the frequency trap."
meta_description: "How many trades prove a strategy works? The witness ladder — 100, 200–500, 1,000+ — plus the independence rule, retail power analysis and the frequency trap."
date: 2026-10-11
author: Kaizen
tag: "Strategy validation · Statistics"
keywords: ["how many trades to validate a trading strategy", "how many trades to backtest a strategy", "sample size for trading strategy", "statistical power in trading", "how many trades before going live", "minimum trades to validate a strategy"]
---

*Educational content only — not financial advice. Trading involves risk of loss.*

Every trader asks for a number. "How many trades do I need before I can trust my strategy?" The internet answers with a ladder: 30… 50… 100. None of them tell you *why*.

Here's the honest answer: **the trade count is not a number, it's a contract with evidence.** You pick a number of trades *before* you test — 100 as an early hypothesis, 200–500 before a serious risk decision, 1,000+ to prove a small edge — and the contract has four clauses: what each tier proves, that every trade actually counts, that your edge is big enough to be seen, and that you've budgeted the calendar time to collect the trades.

This is the second chapter of the validation protocol. In [the previous article](/articles/how-to-know-if-trading-strategy-works/), we built the verdict framework: the pre-registration contract (you write your rules down *before* you test, not after you find something that looks good), the three-question verdict hierarchy, and the rule that 100 trades is the floor of a verdict. That floor was deliberately shallow — this article explains the statistics underneath it.

By the end, you'll have a four-line evidence contract and a testing protocol that fits your trading style — whether you scalp 40 times a week or swing-trade 3 times a month.

> **Honest risk note:** nothing in this article guarantees a strategy will be profitable. Testing more trades reduces your *uncertainty* about the edge — it does not create an edge, and no amount of evidence removes the risk of losing capital.

## The short answer: 100, 200–500, or 1,000+ — pick your number before you test

The most important sentence in this article: **decide the number before you start testing.** That's the pre-registration contract from [the verdict framework](/articles/how-to-know-if-trading-strategy-works/) — and it matters twice here. If you keep adding trades until the results look good, you aren't validating a strategy, you're shopping for one. Write your number down, run the tests, and let the contract do its job.

The number you pick depends on what decision you're making. Not all evidence is equal, and the statistics give us three clean tiers.

### What each tier actually proves: the witness ladder

Think of trades as witnesses in a trial. One witness is a rumor. A dozen is a story. A hundred is a pattern — and it takes still more before a careful judge convicts.

- **~100 trades = an early hypothesis.** This is the [verdict floor from the previous chapter](/articles/how-to-know-if-trading-strategy-works/). At 100 trades, the math says you can pin a 50% win rate to about ±10 percentage points at 95% confidence — the result is *somewhere* in a 20-point band. That's enough to say "there's something here worth investigating" and not enough to bet a career on.
- **200–500 trades = a serious risk decision.** With 196 trades, that same confidence band narrows to ±7 points; with 384, to ±5. Somewhere in this band, the fog lifts enough to make the decision that actually matters: position size, capital allocation, real money. This is where most retail traders should land before sizing up.
- **1,000+ trades = proof for small edges.** If your edge is small — and most real retail edges are, after costs — the noise swamps the signal until the sample is enormous. Detecting an edge of 0.08R per trade against 1R of trade-to-trade noise needs roughly 1,200 trades before the edge is statistically visible at 95% confidence and 80% power. (We'll unpack this math in plain language shortly.)

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Confidence bands for a 50 percent win rate narrowing from plus or minus 10 points at 96 trades to plus or minus 5 points at 384 trades." class="viz">
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">One 50% win rate, three verdicts &#8212; the band shrinks with &#8730;n</text>
<polygon points="296,90 384,90 362,290 318,290" fill="#f2a33c" fill-opacity="0.07"/>
<text x="60" y="64" fill="#92a59c" font-size="12">95% confidence band</text>
<text x="252" y="64" text-anchor="middle" fill="#92a59c" font-size="11">30%</text>
<text x="340" y="64" text-anchor="middle" fill="#92a59c" font-size="11">50%</text>
<text x="428" y="64" text-anchor="middle" fill="#92a59c" font-size="11">70%</text>
<line x1="252" y1="70" x2="252" y2="320" stroke="#2a3a34" stroke-width="1" stroke-dasharray="3,4"/>
<line x1="340" y1="70" x2="340" y2="320" stroke="#2a3a34" stroke-width="1"/>
<line x1="428" y1="70" x2="428" y2="320" stroke="#2a3a34" stroke-width="1" stroke-dasharray="3,4"/>
<rect x="296" y="76" width="88" height="28" rx="14" fill="#f2a33c" fill-opacity="0.25"/>
<line x1="340" y1="76" x2="340" y2="104" stroke="#f2a33c" stroke-width="3"/>
<circle cx="340" cy="90" r="6" fill="#f2a33c"/>
<text x="578" y="86" fill="#f2f7f4" font-size="13" font-weight="700">96 trades</text>
<text x="578" y="106" fill="#f2a33c" font-size="12">&#177;10pp &#8212; hypothesis</text>
<rect x="309" y="176" width="62" height="28" rx="14" fill="#f2a33c" fill-opacity="0.25"/>
<line x1="340" y1="176" x2="340" y2="204" stroke="#f2a33c" stroke-width="3"/>
<circle cx="340" cy="190" r="6" fill="#f2a33c"/>
<text x="578" y="186" fill="#f2f7f4" font-size="13" font-weight="700">196 trades</text>
<text x="578" y="206" fill="#f2a33c" font-size="12">&#177;7pp &#8212; sizing up</text>
<rect x="318" y="276" width="44" height="28" rx="14" fill="#14d991" fill-opacity="0.25"/>
<line x1="340" y1="276" x2="340" y2="304" stroke="#14d991" stroke-width="3"/>
<circle cx="340" cy="290" r="6" fill="#14d991"/>
<text x="578" y="286" fill="#f2f7f4" font-size="13" font-weight="700">384 trades</text>
<text x="578" y="306" fill="#14d991" font-size="12">&#177;5pp &#8212; risk decision</text>
<text x="340" y="358" text-anchor="middle" fill="#92a59c" font-size="12">Halving your uncertainty costs <tspan fill="#f2f7f4" font-weight="700">four times the trades</tspan> &#8212; the square-root law.</text>
<text x="340" y="382" text-anchor="middle" fill="#92a59c" font-size="12">A small edge (0.08R) needs ~1,200 trades before it is statistically visible.</text>
</svg>
<figcaption>The witness ladder: confidence bands for a 50 percent win rate narrowing from plus or minus 10 points at 96 trades to plus or minus 5 points at 384 trades.</figcaption>
</figure>

The math behind those bands is standard statistics — nothing proprietary, nothing secret. At 95% confidence, the uncertainty on a win-rate estimate shrinks with the square root of the trade count: the number of trades needed to reach a given precision follows n ≈ (1.96 ÷ (2 × desired band))² — the band sits in the denominator, which is why precision is expensive. That square-root law is the first contract clause to internalize: **halving your uncertainty costs four times the trades.**

And here's the corollary most traders miss: the ladder counts *independent* trades. One hundred trades that all saw the same market condition are not one hundred witnesses. Which brings us to the second clause.

## Not every trade counts: the independence rule

A witness who only repeats what the first witness said doesn't add evidence — he adds volume. Trades work the same way.

The principle is simple: **each trade counts as evidence only to the extent it represents a different bet on different market conditions.** Two hundred scalp trades taken on a single trending day are not 200 independent observations. They share one market condition — one trend, one volatility regime, one liquidity environment. They're 200 witnesses who all saw the same thing.

### One trend day's 200 scalps are not 200 votes

Imagine a coin-flip machine that you test by flipping the coin 200 times — but every flip happens while the machine is tilted 5 degrees to the left. You haven't tested the coin 200 times. You've tested the tilted machine 200 times. The number that matters isn't how many times you flipped — it's how many *different setups* you saw.

A scalper who fires 200 trades into a single strong trend day has tested his strategy's behavior in exactly one regime. The next day — chop, mean-reversion, a news shock — the evidence doesn't carry over. His sample isn't 200 trades deep; it's one day deep. The trade count lies; the *condition* count tells the truth.
<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Diagram showing 200 correlated trades on one trend day collapsing into one effective observation." class="viz">
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">200 trades &#8212; one trend day, one volatility regime</text>
<g>
<rect x="40" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="90" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="104" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="118" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="132" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="146" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="160" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="174" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="188" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="202" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
<rect x="40" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="54" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="68" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="82" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="96" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="110" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="124" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="138" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="152" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="166" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="180" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="194" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="208" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="222" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="236" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="250" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="264" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="278" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="292" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/><rect x="306" y="216" width="10" height="10" rx="2" fill="#f2a33c" fill-opacity="0.7"/>
</g>
<text x="180" y="250" text-anchor="middle" fill="#92a59c" font-size="12">200 trades</text>
<defs>
<marker id="ht-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#92a59c"/></marker>
</defs>
<line x1="345" y1="170" x2="445" y2="170" stroke="#92a59c" stroke-width="2" marker-end="url(#ht-arrow)"/>
<text x="395" y="155" text-anchor="middle" fill="#92a59c" font-size="12">same day,</text>
<text x="395" y="171" text-anchor="middle" fill="#92a59c" font-size="12">same regime</text>
<circle cx="540" cy="170" r="72" fill="none" stroke="#14d991" stroke-width="3"/>
<text x="540" y="164" text-anchor="middle" fill="#f2f7f4" font-size="34" font-weight="700">1</text>
<text x="540" y="196" text-anchor="middle" fill="#92a59c" font-size="13">condition</text>
<text x="540" y="262" text-anchor="middle" fill="#92a59c" font-size="12">one observation</text>
<text x="340" y="330" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Same evidence counted twice &#8212; the trade count lies, the condition count tells the truth.</text>
</svg>
<figcaption>The parable: 200 correlated trades on one trend day collapsing into one effective observation — same evidence counted twice.</figcaption>
</figure>

### Regime coverage: sample size is also width, not just count

This is why every serious validation guide insists the sample should span different market conditions: trending days, range-bound days, quiet days, volatile ones, expiry days and ordinary Tuesdays. A 300-trade backtest that spans two years of varied regimes is worth more than a 500-trade sample from a single three-month melt-up.

**The test to run:** after any test, write down the regimes it covered — trend, range, high-vol, low-vol, news-driven. If any box is empty, your sample has a hole no amount of extra trades from the other boxes will fill.

## Small edges need big samples: the power-analysis chapter

Now the part nobody in the retail blogosphere explains, and it's the one that changes how you think about evidence.

Your edge has a *size*. Your sample has a *count*. The question power analysis asks is: **is the count big enough to notice the size?**

Put it in trader terms. Your strategy earns, say, +0.1R per trade on average ([expectancy](/articles/what-is-trading-expectancy/) is the edge number entering this math — we take it as an input here, we don't compute it). But each individual trade swings around that average — call that noise ±1R per trade. The signal (0.1R) is buried inside the noise (1R). Every extra trade lets you average down the noise — the noise shrinks with √n — while the signal stays constant.

The one-line formula: **t = (average trade result) ÷ (noise ÷ √n).** When t crosses about 2, the edge is statistically visible at 95% confidence. Run the numbers:

- Edge of 0.08R per trade, noise of 1R → the edge becomes detectable at roughly **1,200 trades** (95% confidence, 80% power).
- Edge of 0.2R per trade, noise of 1R → roughly **200 trades**.
- Edge of 0.5R per trade, noise of 1R → roughly **30 trades**.

That's the inverse relationship the ladder alone never explained: **the smaller your edge, the more trades you need to prove it.** Big edges shout; small edges whisper, and you have to listen longer. Most genuinely profitable retail strategies have small edges — the whisper kind. Which is why most retail backtests are *underpowered*: they test 100 trades of a 0.08R edge and declare "no edge" when the test was never big enough to see it.

### Why Indian traders need to think in after-cost trades

Here's the Monks Of Market signature, and it's the article's hardest punch: **costs don't just take your profit — they multiply your evidence burden.**

Every round trip in Indian F&O pays brokerage, STT, exchange charges, GST, SEBI charges, stamp duty — plus slippage, the quiet killer that shows up in every real fill but never in a clean backtest. These costs shrink the *after-cost* edge. And because the required sample size grows with the inverse square of the edge, **halving your after-cost edge quadruples the trades you need to prove it.**

An illustrative example (assumptions labeled — use your own broker's schedule for real numbers): suppose your strategy shows a gross edge of 0.2R per trade with 1R noise. You'd need ~200 trades to validate it. Now costs of 0.1R per round trip eat half the edge, leaving 0.1R after costs. You now need not 400 trades but roughly **800**. The costs didn't just halve your profit — they quadrupled your evidence burden. That's why gross backtests lie twice: once about the money, once about how long the money takes to prove itself.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 460" role="img" aria-label="Diagram showing that halving the after-cost edge quadruples the number of trades needed to validate it." class="viz">
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Costs don&#8217;t just take your profit &#8212; they multiply your evidence burden</text>
<text x="80" y="80" fill="#92a59c" font-size="13" font-weight="700">Edge per trade</text>
<rect x="80" y="94" width="400" height="40" rx="8" fill="#f2a33c" fill-opacity="0.35"/>
<text x="280" y="120" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">0.2R per trade (gross)</text>
<defs>
<marker id="ht-arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff4f65"/></marker>
<marker id="ht-arrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#14d991"/></marker>
</defs>
<line x1="540" y1="100" x2="540" y2="196" stroke="#ff4f65" stroke-width="2" marker-end="url(#ht-arrow2)"/>
<text x="600" y="146" text-anchor="middle" fill="#ff4f65" font-size="12">costs</text>
<text x="600" y="162" text-anchor="middle" fill="#ff4f65" font-size="12">−0.1R</text>
<rect x="80" y="206" width="200" height="40" rx="8" fill="#f2a33c" fill-opacity="0.18" stroke="#f2a33c" stroke-width="1" stroke-dasharray="5,4"/>
<text x="180" y="232" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">0.1R per trade (after costs)</text>
<text x="340" y="300" text-anchor="middle" fill="#92a59c" font-size="13">Trades needed to prove it</text>
<rect x="80" y="316" width="120" height="40" rx="8" fill="#14d991" fill-opacity="0.30"/>
<text x="140" y="342" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">≈200</text>
<line x1="230" y1="336" x2="330" y2="336" stroke="#14d991" stroke-width="2" marker-end="url(#ht-arrow3)"/>
<text x="280" y="322" text-anchor="middle" fill="#14d991" font-size="12">×4</text>
<rect x="350" y="316" width="250" height="40" rx="8" fill="#14d991" fill-opacity="0.30"/>
<text x="475" y="342" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">≈800</text>
<text x="340" y="408" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">edge &#247; 2 &#8594; trades &#215; 4</text>
<text x="340" y="432" text-anchor="middle" fill="#92a59c" font-size="12">The required sample grows with the inverse square of the edge.</text>
</svg>
<figcaption>Double arrow: costs halve the edge per trade (0.2R to 0.1R) while the required trade count quadruples (200 to ~800) — edge divided by two, trades times four.</figcaption>
</figure>

This is also where [profit factor](/articles/profit-factor/) enters the picture: an efficient strategy (higher profit factor per trade) wastes less of its edge on costs and therefore needs less evidence. Edge efficiency isn't just a profitability number — it's an *evidence* number.

**The test to run:** compute your strategy's after-cost expectancy, not gross (your [expectancy article](/articles/what-is-trading-expectancy/) shows how). Divide your per-trade noise by the after-cost edge, multiply by roughly 3 (the statistical margin for 95% confidence at 80% power), and square it — that ballpark is the trade count your edge needs to be visible. If it's several times your current sample size, you don't have a failed strategy — you have an unfinished test.

### A caution about t-tests

One paragraph of honesty, courtesy of a recent experiment: a t-test asks "did this sample make money?", **not** "did the strategy predict anything?" A recent trading-statistics experiment ran thousands of simulated markets where *nothing was predictable* and found standard t-tests still cried "edge" far more often than their promised 5% false-positive rate in some market shapes. A shuffled-placebo test — comparing your strategy against randomized versions of itself — stayed honest at ~5%. The lesson: passing a t-test proves your sample made money. It does not prove your rules predicted the market. And one more discipline note: testing 11 variations and keeping the best is 11 tests, not 1 — the overfitting deep-dive lands in a later chapter, but count your tests honestly from day one.

## The two opposite mistakes small samples cause

Small samples are dangerous in *both* directions — and most traders only guard against one. The same thin evidence causes both believing too early and quitting too early, and a single framework explains both.

### Believing too early

Thirty trades can make a coin look loaded. A true 50% win-rate strategy prints anywhere from **32% to 68%** over 30 trades at 95% confidence — pure variance, no edge required. Hit the top of that band and your journal shows a 68% "proven" strategy; your spreadsheet says size up; your brain says genius. That is the believe-too-early trap: **variance wearing an edge's costume.** This is exactly why the pre-registration contract exists — if 30 trades weren't your contract's number, 30 lucky trades aren't a verdict.

### Quitting too early

The mirror image is crueler. A strategy with a genuine 55% win rate — a real, working edge — still deals **8 straight losses in roughly 1 out of every 12 hundred-trade runs** (8.4%, computed by exact probability analysis). Not because it's broken. Because that's what randomness does: 45% losers, scattered randomly across 100 trades, clump together more often than your gut expects.

So the trader takes 40 trades, hits the inevitable 8-trade losing streak, and quits — abandoning a working strategy mid-drawdown. This is the quit-too-early trap, and it's the single most expensive sentence in retail trading: *"it doesn't work"* — said at trade 40 of a 200-trade contract. If you've ever wondered why traders abandon good systems, [the streak math in the risk chapter](/articles/risk-of-ruin-trading/) is the full explanation.
<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 500" role="img" aria-label="Two panels showing how small samples both overstate luck and make normal losing streaks look like failure." class="viz">
<rect x="20" y="60" width="300" height="380" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<text x="170" y="100" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">30 trades</text>
<text x="170" y="122" text-anchor="middle" fill="#92a59c" font-size="12">a lucky print: 20W / 10L = 67%</text>
<g transform="translate(37,150)">
<rect x="0" y="0" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="27" y="0" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="54" y="0" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="81" y="0" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="108" y="0" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="135" y="0" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="162" y="0" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="189" y="0" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="216" y="0" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="243" y="0" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="0" y="27" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="27" y="27" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="54" y="27" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="81" y="27" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="108" y="27" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="135" y="27" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="162" y="27" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="189" y="27" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="216" y="27" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="243" y="27" width="22" height="22" rx="4" fill="#ff4f65" fill-opacity="0.9"/>
<rect x="0" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="27" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="54" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="81" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="108" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="135" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="162" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="189" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="216" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
<rect x="243" y="54" width="22" height="22" rx="4" fill="#14d991" fill-opacity="0.9"/>
</g>
<text x="170" y="260" text-anchor="middle" fill="#f2f7f4" font-size="13">The same coin prints 32&#8211;68%</text>
<text x="170" y="280" text-anchor="middle" fill="#f2f7f4" font-size="13">over 30 trades &#8212; pure variance.</text>
<text x="170" y="330" text-anchor="middle" fill="#f2a33c" font-size="15" font-weight="700">Variance, not a verdict.</text>
<text x="170" y="360" text-anchor="middle" fill="#92a59c" font-size="12">The believe-too-early trap:</text>
<text x="170" y="378" text-anchor="middle" fill="#92a59c" font-size="12">sizing up on luck.</text>
<rect x="360" y="60" width="300" height="380" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<text x="510" y="100" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">100 trades</text>
<text x="510" y="122" text-anchor="middle" fill="#92a59c" font-size="12">a genuine 55% edge, warts and all</text>
<g transform="translate(372,150)">
<rect x="0.0" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="11.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="23.0" y="0.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="34.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="46.0" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="57.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="69.0" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="80.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="92.0" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="103.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="115.0" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="126.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="138.0" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="149.5" y="0.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="161.0" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="172.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="184.0" y="0.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="195.5" y="0.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="207.0" y="0.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="218.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="230.0" y="0.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="241.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="253.0" y="0.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="264.5" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="276.0" y="0.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="0.0" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="11.5" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="23.0" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="1"/>
<rect x="34.5" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="1"/>
<rect x="46.0" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="1"/>
<rect x="57.5" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="1"/>
<rect x="69.0" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="1"/>
<rect x="80.5" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="1"/>
<rect x="92.0" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="1"/>
<rect x="103.5" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="1"/>
<rect x="115.0" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="126.5" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="138.0" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="149.5" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="161.0" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="172.5" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="184.0" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="195.5" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="207.0" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="218.5" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="230.0" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="241.5" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="253.0" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="264.5" y="11.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="276.0" y="11.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="0.0" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="11.5" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="23.0" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="34.5" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="46.0" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="57.5" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="69.0" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="80.5" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="92.0" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="103.5" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="115.0" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="126.5" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="138.0" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="149.5" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="161.0" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="172.5" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="184.0" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="195.5" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="207.0" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="218.5" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="230.0" y="23.0" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="241.5" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="253.0" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="264.5" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="276.0" y="23.0" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="0.0" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="11.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="23.0" y="34.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="34.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="46.0" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="57.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="69.0" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="80.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="92.0" y="34.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="103.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="115.0" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="126.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="138.0" y="34.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="149.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="161.0" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="172.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="184.0" y="34.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="195.5" y="34.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="207.0" y="34.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="218.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="230.0" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="241.5" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="253.0" y="34.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="264.5" y="34.5" width="9" height="9" rx="2" fill="#ff4f65" fill-opacity="0.45"/>
<rect x="276.0" y="34.5" width="9" height="9" rx="2" fill="#14d991" fill-opacity="0.45"/>
<rect x="17" y="5" width="102" height="22" rx="4" fill="none" stroke="#ff4f65" stroke-width="2" stroke-dasharray="5,3"/>
</g>
<text x="510" y="226" text-anchor="middle" fill="#f2f7f4" font-size="13">8 straight losses &#8212; ~8.4% chance</text>
<text x="510" y="244" text-anchor="middle" fill="#f2f7f4" font-size="13">per 100 trades at a 55% win rate.</text>
<text x="510" y="330" text-anchor="middle" fill="#14d991" font-size="15" font-weight="700">Variance, not a failure.</text>
<text x="510" y="360" text-anchor="middle" fill="#92a59c" font-size="12">The quit-too-early trap:</text>
<text x="510" y="378" text-anchor="middle" fill="#92a59c" font-size="12">abandoning a working strategy.</text>
<text x="340" y="478" text-anchor="middle" fill="#92a59c" font-size="12">Small samples are dangerous in <tspan fill="#f2f7f4" font-weight="700">both</tspan> directions.</text>
</svg>
<figcaption>Side by side: a 30-trade sample with a lucky 67% win rate — "variance, not a verdict" — and a 100-trade sample of a genuine 55% edge with an 8-loss clump highlighted — "variance, not a failure."</figcaption>
</figure>

**The test to run:** when results thrill you or terrify you, ask one question: *"Is this outside what my contract's trade count would produce by variance alone?"* If the answer is no, it's not a signal — it's noise. Re-read the contract, not the P&L.

## The frequency trap: sample size is denominated in trades, not months

Here's the practical question the ladder ignores: **how long does it take *you* to get 100 trades?**

The answer depends entirely on style — and it exposes the trap. Sample size is denominated in trades, not months:

| Style | Typical trades/month | Months to 100 trades |
|---|---|---|
| Scalping | 80–200 | 1–2 months |
| Intraday | 30–60 | 2–4 months |
| Swing (2–4 trades/month) | 2–4 | 2–4 **years** |
| Positional | 1–2 | 4–8 **years** |

*(Illustrative ranges; your actual frequency is what counts. A Nifty weekly-expiry option seller doing 4–6 trades a month, for instance, needs roughly 1.5–2 years of expiries to reach 100 trades.)*

The scalper's frequency trap is *impatience with conditions*: he collects 100 trades in six weeks — all from one market season — and mistakes speed for evidence. The swing trader's trap is the opposite: at 3 trades a month, 100 trades is three years of history. He either tests for a geological epoch or — far more commonly — he never reaches 100 and trades unvalidated forever.

The fix is the same for both, and it's two steps:

1. **Backtest for history.** An honest manual or automated backtest supplies the *calendar depth* no forward test can — years of regimes, crashes, and quiet stretches. It's how a swing trader gets his 100 trades.
2. **Forward-test the last 30–50 live on paper.** Then trade the recent window yourself, under real conditions, to confirm the backtest's edge survives your execution. This paper-vs-real bridge is its own chapter later — treat the forward window as a *confirmation*, not the verdict.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Bar chart of months needed to reach 100 trades by trading style, from one month for scalping to several years for positional." class="viz">
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Months to 100 trades &#8212; sample size is denominated in trades, not months</text>
<line x1="180" y1="360" x2="640" y2="360" stroke="#2a3a34" stroke-width="1"/>
<text x="180" y="380" text-anchor="middle" fill="#92a59c" font-size="11">0</text>
<text x="252" y="380" text-anchor="middle" fill="#92a59c" font-size="11">1 yr</text>
<text x="324" y="380" text-anchor="middle" fill="#92a59c" font-size="11">2 yrs</text>
<text x="396" y="380" text-anchor="middle" fill="#92a59c" font-size="11">3 yrs</text>
<text x="468" y="380" text-anchor="middle" fill="#92a59c" font-size="11">4 yrs</text>
<text x="540" y="380" text-anchor="middle" fill="#92a59c" font-size="11">5 yrs</text>
<text x="612" y="380" text-anchor="middle" fill="#92a59c" font-size="11">6 yrs</text>
<text x="170" y="100" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Scalping</text>
<rect x="180" y="86" width="10" height="28" rx="4" fill="#14d991" fill-opacity="0.85"/>
<text x="206" y="106" fill="#92a59c" font-size="12">1&#8211;2 months</text>
<text x="170" y="165" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Intraday</text>
<rect x="180" y="151" width="20" height="28" rx="4" fill="#14d991" fill-opacity="0.85"/>
<text x="216" y="171" fill="#92a59c" font-size="12">2&#8211;4 months</text>
<text x="170" y="230" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Swing</text>
<rect x="180" y="216" width="216" height="28" rx="4" fill="#f2a33c" fill-opacity="0.85"/>
<text x="410" y="236" fill="#f2f7f4" font-size="12" font-weight="700">2&#8211;4 years</text>
<text x="170" y="295" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">Positional</text>
<rect x="180" y="281" width="432" height="28" rx="4" fill="#ff4f65" fill-opacity="0.85"/>
<text x="600" y="301" text-anchor="end" fill="#0d1512" font-size="12" font-weight="700">4&#8211;8 years</text>
</svg>
<figcaption>Horizontal bar chart: months needed to reach 100 trades by trading style — a stub for scalpers stretching to years for swing and positional traders.</figcaption>
</figure>

**The test to run:** count your actual trades per month for the last quarter. Multiply out to your contract number. If the calendar says "longer than your patience," the answer is backtest depth now, not bigger risk later.

## One paragraph on overfitting (the full test lives in the next chapter)

The only thing worse than too few trades is too many *tweaks*. Every parameter you adjust, every filter you add after seeing the results, spends some of your sample's credibility — a backtest that tested 50 combinations and kept the best didn't run one test, it ran fifty, and its glowing results may just be the luckiest draw from a large bucket. The one-paragraph version ends here; the full multiple-testing correction and the parameter-cliff test belong to the overfitting chapter — the evidence contract assumes your rules were written before the test began.

## What a simulator can and cannot tell you

You may have noticed our [What-If Trade Simulator](/tools/what-if-simulator/) is live. It's a natural companion to this chapter: feed it your trade sample and it shows what the distribution does to an account — the drawdowns, the survival odds, the path shapes. Use it to feel the *weight* of your evidence.

But hold the honest disclaimer firmly: **the simulator measures sequence risk on your existing sample — it cannot validate the edge.** It answers "what if this sample played out in a different order?" It cannot answer "is this sample big and independent enough to trust?" That second question is this article's contract, and no simulation creates evidence that was never collected.

Tomorrow's chapter closes the loop from the other side: why even a properly-sized, pre-registered backtest's numbers lie to you live — slippage, execution leak, costs — and how to account for it. The protocol continues.

## Frequently Asked Questions

**How many trades do I need to backtest for valid results?**
Three tiers: ~100 trades is an early hypothesis, 200–500 supports a serious risk decision, and 1,000+ is needed to prove a small edge (a 0.08R-per-trade edge with 1R noise needs roughly 1,200 trades before it's statistically visible). But the count only works if the trades are independent and span different market regimes.

**Is 30 trades enough to judge a strategy?**
No — 30 trades is a pattern-spotter, not a verdict. A true 50% win rate prints anywhere from ~32% to ~68% over 30 trades at 95% confidence, on variance alone. The same thin sample feeds two opposite mistakes: believing a lucky 68% is an edge, or quitting a working strategy during a normal losing streak.

**Does a bigger sample always mean more certainty?**
Only if the trades are independent and rule-following. Two hundred scalps taken on one trend day share one market condition — they're one observation wearing a 200-trade costume. Regime coverage (trending, ranging, volatile, quiet) is part of what makes a sample genuinely "big."

**How long does it take a swing trader to get 100 trades?**
At 2–4 trades a month, roughly 2–4 years of history. The practical answer: backtest supplies the history (an honest manual or automated backtest across regimes), then forward-test the last 30–50 trades on paper to confirm the edge survives your execution. Sample size is denominated in trades, not months.

**What is statistical power in trading?**
Your edge has a size and your sample has a count; power asks whether the count is big enough to notice the size. The one-line math: t = (average trade result) ÷ (noise per trade ÷ √n). Bigger edge → fewer trades needed; bigger noise → more. Small edges whisper — you have to listen longer.

**Why do I need MORE trades if my edge is small?**
Because the required sample grows with the *inverse square* of the edge: t = edge × √n ÷ noise. Halve the edge, quadruple the trades. And Indian F&O costs shrink the after-cost edge — brokerage, STT, exchange charges, slippage — so costs don't just take your profit, they multiply the evidence burden.

**Does a t-test prove my strategy has an edge?**
No. A t-test asks "did this sample make money?", not "did the strategy predict anything?" A recent trading-statistics experiment ran thousands of simulated markets with nothing predictable and found naive t-tests cried "edge" far more often than their promised 5% rate in some market shapes — while a shuffled-placebo test stayed honest. Passing a t-test is not proof of prediction.

**How many parameter combinations can I test before the backtest is meaningless?**
Every tweak after seeing results spends some of the sample's credibility — testing 11 variations and keeping the best is 11 tests, not 1 (at a nominal 5% bar, ~43% chance at least one false positive). Keep tweaks to a minimum and lock rules before testing. The full treatment — multiple-testing corrections and the parameter-cliff test — lives in the overfitting chapter.

## The verdict: your four-line evidence contract

1. **Pick your number before you test.** 100 trades = hypothesis, 200–500 = risk decision, 1,000+ = small-edge proof. Write it down — the pre-registration contract from [the verdict framework](/articles/how-to-know-if-trading-strategy-works/).
2. **Count conditions, not just trades.** 200 correlated scalps are one observation. Cover trend, range, high-vol, low-vol — width is part of size.
3. **Size the sample to the edge.** Small edges need big samples (t = edge × √n ÷ noise), and Indian costs shrink the after-cost edge — which multiplies the evidence burden. Compute expectancy [the right way](/articles/what-is-trading-expectancy/) and feed the *after-cost* number into the math.
4. **Budget the calendar, not just the count.** A swing trader's 100 trades is years of history — backtest for depth, forward-test the last 30–50 for confirmation.

Sign the contract. Run the trades. Let variance make its noise — you'll know the difference between noise and a verdict, because you decided what a verdict looks like before the first trade fired.

*The validation protocol continues tomorrow: why your backtest's numbers lied to you anyway — and how to price the lie before you go live.*

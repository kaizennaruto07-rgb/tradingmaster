---
title: "Maximum Drawdown in Trading: How to Calculate It, What It Hides, and Whether You Can Survive It"
description: "Maximum drawdown is the worst peak-to-trough fall a strategy ever endured. Formula, an original ₹ worked example, acceptable bands, and the tradeability test."
meta_description: "Maximum drawdown is the worst peak-to-trough fall a strategy ever endured. Formula, an original ₹ worked example, acceptable bands, and the tradeability test."
date: 2026-10-19
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["maximum drawdown in trading", "how to calculate maximum drawdown", "maximum drawdown formula", "what is a good maximum drawdown", "drawdown vs maximum drawdown", "maximum drawdown recovery", "how to reduce drawdown in trading", "maximum drawdown example"]
---

*By Kaizen · 19 October 2026 · Monks Of Market*

Every strategy evaluation secretly dodges one question: how bad can it get, really? This article answers it with a single number: the price a strategy charges you to trade it.

## What Is Maximum Drawdown?

**Maximum drawdown (MDD) is the largest peak-to-trough decline in your account equity over a period, measured from the running peak — not from where you started.** If your account climbs to ₹5,00,000, then falls to ₹4,25,000 before reaching a new high, that is a 15% drawdown. The maximum drawdown is simply the largest such decline in the record: the historical worst case, the deepest pain the strategy ever inflicted.

The thesis of this piece: **maximum drawdown is the one number that tells you what a strategy actually costs you to trade.** Returns ask "how much did I make?" Maximum drawdown asks "how much pain would I have felt getting there?" Everything else in strategy evaluation is optional; this number is not.

Here is the gut-check that makes the frame real. A strategy shows 30% annual returns with a 60% maximum drawdown. Sounds fine on a spreadsheet. Now translate it: could you watch your ₹1,00,000 account become ₹40,000 — on the way to the promised returns — without touching the system, without changing a rule, without quitting? If the honest answer is no, the 30% return was never yours. The return was a rumour; the drawdown was the price.

Expectancy and maximum drawdown are the two halves of evaluation. [Expectancy tells you whether the strategy works; maximum drawdown tells you whether you can survive trading it](/articles/how-to-calculate-real-expectancy/). And if expectancy is the strategy's engine, drawdown is ruin's slower cousin — [ruin is the absorbing edge you never return from; maximum drawdown is the pain you walk through before you reach it](/articles/risk-of-ruin-trading/).

## Maximum Drawdown Formula and the ₹ Worked Example

The formula is simple:

**MDD = (Peak − Trough) ÷ Peak × 100**

Measured for every peak-to-trough decline before the next new high; the largest result is the maximum drawdown. Equity-based, marked to market — meaning open positions count, not just closed trades. A number computed on closed trades only is a different, flattering number. Before trusting any reported figure, check which basis your broker's report or strategy tool uses: the research behind this article notes that TradingView reports drawdown against initial capital, while MetaTrader 5 distinguishes balance from equity.

Here is how you actually compute it, on an Indian equity trading account:

1. Build the equity curve — account value over time.
2. Mark each **running peak**: every point that is the highest value seen so far.
3. For each running peak, measure the decline to the lowest trough **before the next new peak**.
4. Convert each decline to a percentage **of that peak**.
5. Keep the worst one. That is the maximum drawdown.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 420" role="img" aria-label="Equity curve with a stepped running-peak line: the drawdown is measured from each peak to the trough before the next new high, never from where you started." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Equity curve with running peak</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">Every drawdown is measured from the peak it fell from — never from where you started</text>
<g stroke="#24302c" stroke-width="1">
<line x1="60" y1="300" x2="640" y2="300"/><line x1="60" y1="240" x2="640" y2="240"/>
<line x1="60" y1="180" x2="640" y2="180"/><line x1="60" y1="120" x2="640" y2="120"/>
</g>
<path d="M 60 300 L 120 245 L 180 262 L 240 130 L 300 205 L 380 292 L 450 208 L 520 108 L 590 165 L 640 195" fill="none" stroke="#8fd6a0" stroke-width="3" class="draw-line"/>
<path d="M 60 300 L 240 300 L 240 130 L 520 130 L 520 108 L 640 108" fill="none" stroke="#92a59c" stroke-width="1.5" stroke-dasharray="7 5"/>
<text x="648" y="112" fill="#92a59c" font-size="10">running peak</text>
<polygon points="240,130 380,292 240,292" fill="#e8825a" opacity="0.14"/>
<line x1="315" y1="140" x2="315" y2="282" stroke="#e8825a" stroke-width="2"/>
<polygon points="315,140 309,152 321,152" fill="#e8825a"/>
<polygon points="315,282 309,270 321,270" fill="#e8825a"/>
<text x="330" y="205" fill="#e8825a" font-size="12" font-weight="700">drawdown A</text>
<text x="330" y="223" fill="#92a59c" font-size="10">(peak − trough) ÷ peak</text>
<circle cx="240" cy="130" r="6" fill="#8fd6a0"/>
<text x="240" y="112" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">P1 · peak</text>
<circle cx="380" cy="292" r="6" fill="#e8825a"/>
<text x="380" y="314" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">trough</text>
<circle cx="520" cy="108" r="6" fill="#8fd6a0"/>
<text x="520" y="90" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">P2 · new high</text>
<text x="70" y="396" fill="#92a59c" font-size="11">A new running peak resets the ruler — the next drawdown is measured from P2, not P1.</text>
</svg>
</figure>

Now the worked example — with the trap your eyes will fall into.

**Drawdown A.** The account peaks at ₹4,00,000, then falls to ₹3,60,000.

(₹4,00,000 − ₹3,60,000) ÷ ₹4,00,000 = ₹40,000 ÷ ₹4,00,000 = **10.00%**

The account later recovers, runs up, and reaches a new peak of ₹8,00,000. Then:

**Drawdown B.** Peak ₹8,00,000, falls to ₹7,36,000.

(₹8,00,000 − ₹7,36,000) ÷ ₹8,00,000 = ₹64,000 ÷ ₹8,00,000 = **8.00%**

**The ₹64,000 dip is the SMALLER drawdown.** The ₹40,000 dip — smaller in rupees, deeper in percent — is the maximum drawdown: **10.00%**.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="The twin-trap: Drawdown A lost only ₹40,000 but was 10% of its peak; Drawdown B lost ₹64,000 but only 8% — the smaller rupee loss was the maximum drawdown." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The twin-trap: bigger ₹ loss, smaller drawdown</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">Percentages are measured against the peak they fell from — rupees are not the ruler</text>
<rect x="60" y="80" width="250" height="290" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="185" y="112" text-anchor="middle" fill="#8fd6a0" font-size="13" font-weight="700">DRAWDOWN A</text>
<text x="120" y="150" text-anchor="middle" fill="#92a59c" font-size="10">peak</text>
<rect x="70" y="160" width="90" height="160" fill="#3a4d46"/>
<text x="115" y="180" text-anchor="middle" fill="#f2f7f4" font-size="10">₹4,00,000</text>
<text x="250" y="150" text-anchor="middle" fill="#92a59c" font-size="10">trough</text>
<rect x="205" y="176" width="90" height="144" fill="#e8825a" opacity="0.65"/>
<text x="250" y="196" text-anchor="middle" fill="#f2f7f4" font-size="10">₹3,60,000</text>
<line x1="182" y1="160" x2="182" y2="176" stroke="#e8825a" stroke-width="2"/>
<text x="185" y="145" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">−₹40,000</text>
<text x="185" y="352" text-anchor="middle" fill="#f2f7f4" font-size="26" font-weight="700">10.00%</text>
<rect x="370" y="80" width="250" height="290" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="495" y="112" text-anchor="middle" fill="#92a59c" font-size="13" font-weight="700">DRAWDOWN B</text>
<text x="430" y="150" text-anchor="middle" fill="#92a59c" font-size="10">peak</text>
<rect x="380" y="160" width="90" height="160" fill="#3a4d46"/>
<text x="425" y="180" text-anchor="middle" fill="#f2f7f4" font-size="10">₹8,00,000</text>
<text x="560" y="150" text-anchor="middle" fill="#92a59c" font-size="10">trough</text>
<rect x="515" y="173" width="90" height="147" fill="#e8825a" opacity="0.65"/>
<text x="560" y="193" text-anchor="middle" fill="#f2f7f4" font-size="10">₹7,36,000</text>
<line x1="492" y1="160" x2="492" y2="173" stroke="#e8825a" stroke-width="2"/>
<text x="495" y="145" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">−₹64,000</text>
<text x="495" y="352" text-anchor="middle" fill="#92a59c" font-size="26" font-weight="700">8.00%</text>
<text x="340" y="402" text-anchor="middle" fill="#f2f7f4" font-size="12">₹64,000 looks deeper — but 8.00% &lt; 10.00%. </text>
<text x="340" y="420" text-anchor="middle" fill="#92a59c" font-size="11">The ₹40,000 dip is the maximum drawdown. Percent of which peak? Always ask.</text>
</svg>
</figure>

This is the eyeball trap: the deepest-looking dip in rupees is not always the one threatening the account. Percentages are measured against the peak they fell from, so a later, larger rupee loss on a bigger base can be gentler than an earlier, smaller one. Whenever you compare two drawdowns — two strategies, two periods, two accounts — always ask: percent of *which* peak?

## Why Maximum Drawdown Is Measured From the Peak, Not From Where You Started

This is the counter-intuitive engine of the whole concept. Maximum drawdown is always measured from the **highest peak** — the high-water mark — never from your starting balance. Once equity climbs above where you began, the original balance becomes irrelevant to the measurement.

Why? Because the risk you *felt* is measured against what you had, not what you started with. If your ₹2,00,000 account grows to ₹8,00,000 and then falls to ₹6,40,000, the drawdown is 20% — a fifth of your capital gone — even though you are still "up" 220% from the start. Measuring from the starting balance would call this a *gain*, which understates the risk actually experienced to the point of meaninglessness.

The corollary is sharp: **two traders with identical P&L can report very different maximum drawdowns from curve shape alone.** The trader who fell 20% from a peak after a long run-up reports 20%. The trader who never had the run-up and lost 20% straight from the start also reports 20% — but their lived experience was entirely different. Peak-not-start is honest about the run-up case; starting-balance math flatters it.

## Drawdown vs Maximum Drawdown

A short, clean distinction worth making once:

- **Drawdown** is *any* temporary dip from a peak. Every equity curve has dozens of them. They are the ordinary weather of trading.
- **Maximum drawdown** is the *largest* such decline over the period — the historical worst case, the deepest pain endured.

One warning about quoted numbers: platforms compute drawdown on different bases — initial capital, running equity including open positions, or closed-trade balance only. There is no shared convention: platform documentation reviews show TradingView reports against initial capital while MetaTrader 5 distinguishes balance from equity, and Indian retail brokers' own reports vary as well. So before you trust any MDD figure — in a strategy ad, a backtest report, or your own broker statement — find out which base it used. A "12% max drawdown" that ignores floating losses is not comparable to a "12% max drawdown" that includes them.

## What Maximum Drawdown Hides

Here is the spine of this article, and the part no definition glossary gives you. Maximum drawdown is brutally honest about one thing — the deepest loss that *happened* — and silent about three things that matter just as much. Treat these three as decision inputs, not trivia. (This grouping is the article's analysis; the three limits themselves are well established.)

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Three dials showing what maximum drawdown hides: frequency of the pain, duration underwater, and sample luck — none of which the headline number tells you." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">What the number never shows: three dials</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">MDD reports the depth of the worst visit — and nothing about the visits</text>
<g>
<path d="M 50 220 A 80 80 0 0 1 210 220" fill="none" stroke="#3a4d46" stroke-width="12"/>
<path d="M 50 220 A 80 80 0 0 1 130 143.5" fill="none" stroke="#e8825a" stroke-width="12"/>
<line x1="130" y1="220" x2="130" y2="143.5" stroke="#e8825a" stroke-width="4"/>
<circle cx="130" cy="220" r="8" fill="#f2f7f4"/>
<text x="130" y="264" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">FREQUENCY</text>
<text x="130" y="288" text-anchor="middle" fill="#92a59c" font-size="10">One 25% in five years,</text>
<text x="130" y="304" text-anchor="middle" fill="#92a59c" font-size="10">or five 20–25% visits?</text>
<text x="130" y="320" text-anchor="middle" fill="#92a59c" font-size="10">Same headline. Different life.</text>
</g>
<g>
<path d="M 260 220 A 80 80 0 0 1 420 220" fill="none" stroke="#3a4d46" stroke-width="12"/>
<path d="M 260 220 A 80 80 0 0 1 186.5 150.7" fill="none" stroke="#e8825a" stroke-width="12"/>
<line x1="340" y1="220" x2="186.5" y2="150.7" stroke="#e8825a" stroke-width="4"/>
<circle cx="340" cy="220" r="8" fill="#f2f7f4"/>
<text x="340" y="264" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">DURATION UNDERWATER</text>
<text x="340" y="288" text-anchor="middle" fill="#92a59c" font-size="10">Three weeks to a new high,</text>
<text x="340" y="304" text-anchor="middle" fill="#92a59c" font-size="10">or eighteen months of</text>
<text x="340" y="320" text-anchor="middle" fill="#92a59c" font-size="10">trading while still underwater?</text>
</g>
<g>
<path d="M 470 220 A 80 80 0 0 1 630 220" fill="none" stroke="#3a4d46" stroke-width="12"/>
<path d="M 470 220 A 80 80 0 0 1 473.5 143.5" fill="none" stroke="#e8825a" stroke-width="12"/>
<line x1="550" y1="220" x2="473.5" y2="143.5" stroke="#e8825a" stroke-width="4"/>
<circle cx="550" cy="220" r="8" fill="#f2f7f4"/>
<text x="550" y="264" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">SAMPLE LUCK</text>
<text x="550" y="288" text-anchor="middle" fill="#92a59c" font-size="10">The recorded worst is the</text>
<text x="550" y="304" text-anchor="middle" fill="#92a59c" font-size="10">floor of the possible worst —</text>
<text x="550" y="320" text-anchor="middle" fill="#92a59c" font-size="10">never the ceiling.</text>
</g>
<text x="340" y="366" text-anchor="middle" fill="#92a59c" font-size="11">Time-to-new-high is the hidden cost of every drawdown. The MDD number never mentions it.</text>
</svg>
</figure>

**1. Frequency — how often the pain visits.** Consider two strategies, both with 25% maximum drawdown. One hit a single 25% drawdown in five years. The other hit five separate 20–25% drawdowns. Same headline number, completely different lived experience. The first asks you to endure one crisis; the second asks you to survive a lifestyle. MDD reports the depth of the worst visit and tells you nothing about how many visits there were.

**2. Duration underwater — how long recovery took.** A 25% drawdown that recovers in three weeks is a scare. The same 25% drawdown that takes eighteen months to claw back to the high-water mark is a different animal: eighteen months of trading while underwater, paying attention, staying disciplined, with the account still not back where it was. Time-to-new-high is the hidden cost of every drawdown, and the MDD number never mentions it.

**3. Sample luck — whether the worst that happened is the worst that could happen.** A backtest or a track record shows one ordering of trades; the same trades in a different order can produce a deeper drawdown. And adding time to a record can only deepen the MDD, never lighten it — so whatever number your strategy reports today is, strictly speaking, the *mildest* version of its worst. What does the full distribution of possible worst cases look like? [That is exactly what a Monte Carlo simulation estimates — the recorded MDD is the floor, the simulation shows how much deeper the floor could go](/articles/monte-carlo-simulation-for-traders/).

MDD without these three is a trophy number, not a decision input. And if you want to make the trio visible instead of theoretical, [this is what a trading journal is for — it is where MDD, time underwater, and drawdown frequency get tracked, month after month, beyond raw P&L](/articles/trading-journal-what-to-track-beyond-pnl/).

## What Is a Good Maximum Drawdown? The Acceptable Ladder for Indian Retail Traders

There is no universal "good" number, but there are style-specific bands that experienced risk thinking converges on. Adapted for Indian retail:

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="The acceptable maximum drawdown ladder: below 10% for intraday F&O, 20 to 30% for swing trading, positional judged case by case — with a 20% sanity line." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The acceptable-MDD ladder for Indian retail traders</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">No universal "good" number — only style-specific bands. 1/3 heuristic: MDD ≤ ~⅓ of annual return</text>
<text x="120" y="130" fill="#f2f7f4" font-size="13" font-weight="700">Intraday F&amp;O</text>
<rect x="230" y="112" width="115" height="30" rx="6" fill="#8fd6a0"/>
<text x="345" y="132" fill="#f2f7f4" font-size="12">below 10% — positions recycle daily; no overnight-gap excuse for deep drawdowns</text>
<text x="120" y="200" fill="#f2f7f4" font-size="13" font-weight="700">Swing trading</text>
<rect x="460" y="182" width="230" height="30" rx="6" fill="#d9a441"/>
<text x="230" y="202" fill="#92a59c" font-size="12">20%–30% — overnight gaps are part of the style; the number runs hotter by design</text>
<text x="120" y="270" fill="#f2f7f4" font-size="13" font-weight="700">Positional</text>
<rect x="230" y="252" width="300" height="30" rx="6" fill="none" stroke="#92a59c" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="380" y="272" text-anchor="middle" fill="#92a59c" font-size="12">higher — judged case by case</text>
<line x1="460" y1="92" x2="460" y2="300" stroke="#e8825a" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="460" y="322" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">20% sanity line</text>
<text x="340" y="356" text-anchor="middle" fill="#92a59c" font-size="11">Beyond 20%, recovery math gets steep and decision quality deteriorates — a guideline, not a rule.</text>
</svg>
</figure>

| Trading style | Acceptable MDD band | Why |
|---|---|---|
| **Intraday F&O** | Below 10% | Positions recycle daily; there is no overnight-gap excuse for deep drawdowns. A 15%+ intraday MDD is worth treating as a sizing problem rather than a market problem. |
| **Swing trading** | 20–30% | Multi-day exposure and overnight gaps are part of the style; the number runs hotter by design. |
| **Positional / longer-term** | Higher, judged case by case | Fewer, longer trades; the MDD must be weighed against the return (the 1/3 heuristic below). |

One rule of thumb worth knowing: maximum drawdown should not exceed roughly **one-third of the strategy's annual return** — a 30% annual return with more than 10% MDD fails the smell test. This is a heuristic from a trading glossary, not a law; related ratios rate "strong" differently. Treat it as a sniff test, not a verdict.

**The 20% sanity line.** Beyond 20%, two things degrade at once: the recovery math gets steep (see below), and decision quality deteriorates — traders report that past this point, the mental strain starts rewriting their rules. **This is a guideline, a decision-quality threshold — not a rule, not a hard ceiling.** A swing strategy with a well-understood 25% historical MDD is not "broken"; a trader who cannot function inside a 12% drawdown is in trouble at any number.

### The recovery asymmetry

This is the math that makes 50% so dangerous. To recover a drawdown *d*, the required gain is:

**G = d ÷ (1 − d)**

Losses and gains are not symmetric, because gains compound on a smaller base. One table, the full picture:

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 440" role="img" aria-label="Recovery asymmetry curve: a 10% drawdown needs 11.11% to recover, 20% needs 25%, 30% needs 42.86%, 50% needs 100%, and 75% needs 300% — the curve bends brutally upward past 30%." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Recovery asymmetry: G = d ÷ (1 − d)</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">Gains compound on a smaller base — losses and recoveries are not symmetric</text>
<g stroke="#24302c" stroke-width="1">
<line x1="80" y1="380" x2="620" y2="380"/>
<line x1="80" y1="380" x2="80" y2="80"/>
</g>
<text x="350" y="412" text-anchor="middle" fill="#92a59c" font-size="11">drawdown d →</text>
<text x="52" y="240" text-anchor="middle" fill="#92a59c" font-size="11" transform="rotate(-90 52 240)">gain needed →</text>
<path d="M 147.5 369.6 L 215 356.3 L 248.75 348 L 282.5 339.6 L 350 316.7 L 417.5 286.3 L 585.5 98" fill="none" stroke="#8fd6a0" stroke-width="3" class="draw-line"/>
<g font-size="10" fill="#f2f7f4">
<circle cx="147.5" cy="369.6" r="5" fill="#8fd6a0"/><text x="147.5" y="396" text-anchor="middle">10% → 11.11%</text>
<circle cx="215" cy="356.3" r="5" fill="#8fd6a0"/><text x="215" y="346" text-anchor="middle">20% → 25%</text>
<circle cx="248.75" cy="348" r="5" fill="#8fd6a0"/><text x="248.75" y="396" text-anchor="middle">25% → 33.33%</text>
<circle cx="282.5" cy="339.6" r="5" fill="#8fd6a0"/><text x="282.5" y="329" text-anchor="middle">30% → 42.86%</text>
<circle cx="350" cy="316.7" r="5" fill="#8fd6a0"/><text x="350" y="396" text-anchor="middle">40% → 66.67%</text>
<circle cx="417.5" cy="286.3" r="6" fill="#e8825a"/><text x="417.5" y="276" text-anchor="middle" fill="#e8825a" font-weight="700">50% → 100%</text>
<circle cx="585.5" cy="98" r="6" fill="#e8825a"/><text x="560" y="86" text-anchor="middle" fill="#e8825a" font-weight="700">75% → 300%</text>
</g>
<text x="505" y="230" text-anchor="middle" fill="#92a59c" font-size="11" font-style="italic">past 30%, the curve bends</text>
<text x="505" y="246" text-anchor="middle" fill="#92a59c" font-size="11" font-style="italic">brutally upward</text>
</svg>
</figure>

| Drawdown | Gain needed to recover |
|---|---|
| 10% | 11.11% |
| 20% | 25.00% |
| 25% | 33.33% |
| 30% | 42.86% |
| 40% | 66.67% |
| 50% | **100.00% — double the remaining capital** |
| 75% | **300.00%** |

A 50% drawdown does not need a 50% gain to heal. It needs you to *double* what is left. At 75%, you need to quadruple the remainder. The curve bends upward brutally past 30% — which is half the reason the 20% sanity line exists. The full recovery mathematics, with worked recovery paths, belongs to its own deep dive: Trading Drawdown: The Mathematics of Recovery.

## The Tradeability Test: A Protocol for Deciding Whether You Can Survive a Strategy

Here is the protocol nobody gives you. A strategy fails this test not when its maximum drawdown is "too high" in the abstract, but when **its historical MDD exceeds what you can sit through without breaking the system.** The test is a pre-commitment device: you run it before the losing streak, so the streak cannot rewrite it.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 560" role="img" aria-label="The tradeability test: six pre-commitments — get the number, add the hidden trio, translate it into rupees, run the tilt check, write it on paper, and size so a repeat doesn't end you." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The tradeability test: six pre-commitments</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">Run this before the losing streak — so the streak cannot rewrite it</text>
<g font-size="13">
<rect x="40" y="80" width="600" height="66" rx="10" fill="#2a3a34" stroke="#3a4d46"/>
<rect x="60" y="102" width="22" height="22" rx="5" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="96" y="110" fill="#f2f7f4" font-weight="700">1. Get the number</text>
<text x="96" y="132" fill="#92a59c" font-size="11">Historical MDD, equity-based, from the running peak. No number, no strategy — only hope.</text>
<rect x="40" y="158" width="600" height="66" rx="10" fill="#2a3a34" stroke="#3a4d46"/>
<rect x="60" y="180" width="22" height="22" rx="5" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="96" y="188" fill="#f2f7f4" font-weight="700">2. Add the hidden trio</text>
<text x="96" y="210" fill="#92a59c" font-size="11">How often did drawdowns of that scale occur? How long did recovery take? Was the sample long enough?</text>
<rect x="40" y="236" width="600" height="66" rx="10" fill="#2a3a34" stroke="#3a4d46"/>
<rect x="60" y="258" width="22" height="22" rx="5" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="96" y="266" fill="#f2f7f4" font-weight="700">3. Translate it into rupees</text>
<text x="96" y="288" fill="#92a59c" font-size="11">₹3,00,000 at 25% MDD = "I am signing up to watch this fall to ₹2,25,000 — maybe twice, maybe for months."</text>
<rect x="40" y="314" width="600" height="66" rx="10" fill="#2a3a34" stroke="#3a4d46"/>
<rect x="60" y="336" width="22" height="22" rx="5" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="96" y="344" fill="#f2f7f4" font-weight="700">4. Run the tilt check</text>
<text x="96" y="366" fill="#92a59c" font-size="11">Down ₹75,000 in month four — do you still take every signal exactly as written?</text>
<rect x="40" y="392" width="600" height="66" rx="10" fill="#2a3a34" stroke="#3a4d46"/>
<rect x="60" y="414" width="22" height="22" rx="5" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="96" y="422" fill="#f2f7f4" font-weight="700">5. Write it on paper</text>
<text x="96" y="444" fill="#92a59c" font-size="11">Your maximum acceptable drawdown — decided calm, written down, treated as a system rule.</text>
<rect x="40" y="470" width="600" height="66" rx="10" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<rect x="60" y="492" width="22" height="22" rx="5" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="96" y="500" fill="#f2f7f4" font-weight="700">6. Size so a repeat doesn't end you</text>
<text x="96" y="522" fill="#92a59c" font-size="11">Historical MDD + margin must be survivable. If the size makes it an account-ending event, the size is wrong.</text>
</g>
</svg>
</figure>

1. **Get the number.** What is the strategy's historical maximum drawdown, measured properly (equity-based, from the running peak)? If nobody can give you this number, you do not have a strategy — you have a hope.
2. **Add the hidden trio.** How often did drawdowns of that scale occur? How long did recovery take each time? Was the sample long enough to trust?
3. **Translate it into rupees.** If your account is ₹3,00,000 and the historical MDD is 25%, write this down: *"I am signing up to watch this account fall to ₹2,25,000, possibly more than once, possibly for months."*
4. **Run the tilt check.** Now the hard question: at that point — down ₹75,000, underwater for the fourth month — do you still take every signal exactly as written? [MDD is where tilt begins: every drawdown deep enough to trigger tilt is a drawdown the backtest never modeled](/articles/tilt-in-trading/). A backtest assumes perfect execution through the worst of it. If you cannot promise perfect execution through the worst of it, the backtest's MDD is understated.
5. **Write the number on paper, before the streak.** This is the pre-commitment: your maximum acceptable drawdown, decided in calm, written down, and treated as a system rule. [This is the paper-trading ethos — decide what you will tolerate before real money makes the decision for you](/articles/paper-trading-vs-real-trading/).
6. **Size so a repeat does not end you.** The historical MDD plus a margin is the drawdown you must be able to survive and keep trading. If your current size turns a repeat of history into an account-ending event, the size is wrong, not the strategy.

### The Indian intraday-F&O circuit

One texture of drawdown that global MDD articles never mention: in Indian intraday F&O, drawdowns concentrate into hours, not months. A swing trader's 15% drawdown unfolds over weeks with time to think; an intraday options trader can carve out the same percentage between 9:15 and 3:30, decision after decision, with no pause button. And every rupee of that drawdown paid the charge stack on the way down: STT at **0.15% on the sell premium** (and 0.15% on exercised ITM options), plus the NSE equity-options charge of **0.03553% per side all-in** (per NSE circular NSE/FA/73061, effective March 1, 2026). Drawdown in Indian F&O is not just equity foregone — it is equity foregone *plus* the transaction-cost stack on every losing trade that dug the hole. Size your intraday risk budget with that texture in mind: the hole is always slightly deeper than the price action alone suggests.

Losing streaks are one of the main engines that dig these holes — the probability machinery behind streaks gets its own treatment: How Losing Streaks Affect Trading Accounts.

## How to Reduce Maximum Drawdown

MDD is not a fixed property of the universe; it responds to structure. Four levers, in order of impact:

1. **Position sizing.** The single biggest lever. Smaller risk per trade shrinks every drawdown mechanically. This is a ladder, not a switch: cut size during losing streaks, restore it only as the equity curve makes new highs. You cannot control when streaks arrive; you can control how much they cost.
2. **Trailing stops and exit discipline.** Cap the tail of individual trades so no single position contributes a disproportionate share of a drawdown.
3. **Diversification — of systems, not just symbols.** Uncorrelated return streams draw down at different times; the portfolio MDD is typically shallower than any single system's.
4. **Lower your leverage.** Margin amplifies troughs as well as peaks; running the same strategy on a fraction of available leverage narrows the worst drawdown it can mechanically produce.

And borrow the prop-firm discipline — without copying their rules. Prop firms use maximum drawdown as a **live breach line, not a descriptive stat**: cross it in real time and the account ends. Their rule taxonomy is worth knowing as a design pattern — *static* floors (locked at starting balance) vs *trailing* floors (rising with the equity peak, never falling back); *balance*-based (closed trades only) vs *equity*-based (floating losses count, stricter); *end-of-day* recalculation (ignores intraday wicks) vs *intraday* floating (a temporary spike against you can breach even if the day closes fine). For a self-funded Indian retail trader, the frame is this: **set your own hard line** — written down, per the tradeability test — and treat breaching it the way a prop firm would: the system stops, you review, you do not negotiate with the line mid-drawdown.

## Maximum Drawdown as the Sizing Input: What This Number Is For

Maximum drawdown is not trivia and it is not a trophy stat. It is a **sizing input**. [The position-sizing framework already taught the risk budget; MDD is how you reality-check it](/articles/position-sizing/): if the strategy's historical MDD is 25%, are you sized so that a repeat — plus the sample-luck margin — does not end you? If the honest answer is no, the fix is the size, not the strategy.

The companion ratio comes tomorrow: the **Recovery Factor — net profit divided by maximum drawdown** — which asks whether the pain was worth it. That is tomorrow's article. The recovery-math deep dive lives at Trading Drawdown: The Mathematics of Recovery, and the risk-adjusted-return lens — the Sharpe Ratio for retail traders — follows after.

So the close is simple. Maximum drawdown is the price of admission your strategy charges you. The question was never whether the price exists — it always does. The question is whether you can afford to keep paying it, in rupees, in months underwater, and in discipline. Measure it honestly, add what it hides, test whether you can sit through it, and size accordingly.

**Tomorrow: recovery factor.**

## Maximum Drawdown FAQs

### What is maximum drawdown in trading?

The largest peak-to-trough decline in account equity over a period, measured from the running peak (high-water mark) before a new peak is reached. MDD = (Peak − Trough) ÷ Peak × 100. The defining point: it is measured from the peak, not from your starting balance.

### How do you calculate maximum drawdown?

Build the equity curve, mark each running peak, measure every decline to the trough before the next new high, convert each to a percentage of that peak, and keep the worst. The ₹ worked example earlier in this article walks through the full calculation, including the percent-vs-rupees trap.

### Why is maximum drawdown measured from the peak, not from where you started?

Because once equity climbs above the original balance, the next drawdown measures against the new high-water mark — the risk you actually felt. Using the starting balance understates risk after a strong run (a 20% fall from a peak can still show as a "gain" from the start) and makes two traders with identical P&L report misleadingly different risk from curve shape alone.

### What is a good maximum drawdown for a retail trader?

A 10–20% band is the sanity range for active retail strategies: below 10% for intraday F&O, 20–30% accepted for swing trading with multi-day exposure. Beyond 20%, both the recovery math and decision quality degrade — but that 20% line is a guideline, a decision-quality threshold, not a hard rule.

### Why is a 50% drawdown so dangerous?

The recovery asymmetry — the table in the section above shows why: a 50% fall needs +100% to come back, a gain compounded on a halved base. Beyond the math, deep drawdowns degrade decision quality — the strain starts rewriting your rules before the numbers recover. The full recovery mathematics is covered in Trading Drawdown: The Mathematics of Recovery.

### What is the difference between drawdown and max drawdown?

Drawdown is any temporary dip from a peak — the ordinary weather of trading. Maximum drawdown is the largest such decline over the period: the historical worst case, the deepest pain the strategy endured. It also gives you a baseline: if a current drawdown exceeds the strategy's historical maximum, that is an evidence-based signal something may have changed — though MDD alone cannot diagnose a live system in real time.

### What does maximum drawdown NOT tell you?

Three things it hides: **frequency** (one 25% drawdown vs five 20% ones — same headline, different life), **duration underwater** (how long recovery to a new high took), and **sample luck** (the recorded worst is the floor of the possible worst, never the ceiling). MDD without these three is a trophy number, not a decision input.

### How do prop firms use max drawdown?

As a live breach line, not a descriptive stat: static vs trailing floors, balance vs equity bases, end-of-day vs intraday recalculation. Cross it in real time and the account ends. For self-funded retail traders, the right takeaway is short: borrow the discipline, not the rules.

---

## Risk, honest limits, and what this article cannot do

The mandatory part, stated plainly and specifically:

- **Trading involves the risk of losing capital.** Every strategy discussed here — formulas, worked examples, the tradeability test — can lose money in live markets. No protocol, ladder, or heuristic in this article guarantees profit, and no honest one anywhere else does either.
- **Past performance does not indicate future results.** A historical maximum drawdown is a statement about the past, not a ceiling on the future — the recorded worst is the floor of the possible worst, never the ceiling.
- **This content is educational, not financial advice.** It teaches you how to measure and think about drawdown; it does not tell you what to trade, when, or how much.

And the honest limits of this article itself:

- **The 20% sanity line is a guideline, not a rule.** A well-understood 25% historical MDD is not "broken"; a trader who cannot function inside a 12% drawdown is in trouble at any number.
- **Recovery math is exact; recovery time is not.** The G = d ÷ (1 − d) formula tells you the gain needed — it says nothing about how long the market will take to deliver it.
- **Costs and rules change.** Fee figures in this article were verified on 2026-10-19 and must be re-verified on publish day; never treat a cost number as permanent.

---

**Risk disclosure:** This article is educational, not financial advice. Drawdown analysis improves risk visibility; it does not guarantee profits or prevent losses. Trading in equities, derivatives, and crypto involves substantial risk of capital loss, and leveraged products can lose more than your initial outlay. Verify all fee figures with your broker — fee schedules change via Budget and exchange circulars.

---
title: "Position Sizing in Trading: How Much Should You Risk Per Trade? (Indian Trader's Guide)"
description: "Position sizing formula explained with Indian rupee examples: the 1% rule, NSE lot sizes, fractional Kelly, and step-by-step calculations for Indian traders."
meta_description: "Position sizing formula explained with Indian rupee examples: the 1% rule, NSE lot sizes, fractional Kelly, and step-by-step calculations for Indian traders."
date: 2026-10-08
author: Kaizen
tag: "Trading mathematics · Position sizing"
keywords: ["position sizing", "how much should i risk per trade", "position sizing formula", "how to calculate position size in trading", "position size calculator", "what is the 1% rule in trading"]
---

*Educational content only — not financial advice. Trading involves risk of loss.*

# Position Sizing in Trading: How Much Should You Risk Per Trade? (Indian Trader's Guide)

You found a setup. You know your entry, your stop, your target. One question remains, and it decides whether this trade is a controlled cost or a gamble: **how many do I buy?**

Most beginners answer that question last, with whatever feels right — a round 100 shares, one lot because that's what everyone trades, or "all in" because the setup looks good. That habit, repeated, is what turns a strategy with a perfectly good edge into a wrecked account. This article gives you the arithmetic that replaces the habit.

This is the practical payoff of the whole Week 1 math series. [Risk of ruin](/articles/risk-of-ruin-trading/) showed you that ruin rises steeply with position size regardless of edge. [Expectancy](/articles/what-is-trading-expectancy/) gave you the profit-per-trade number. [Win rate and risk-reward](/articles/win-rate-vs-risk-reward/) gave you its two halves. Position sizing is where all of it gets converted into a number you type into your order ticket.

---

## The position sizing formula: how many to buy, in one calculation

Every position-sizing calculator in existence runs the same one-line formula:

**Position Size = (Account Equity × Risk%) ÷ (Entry Price − Stop-Loss Price)**

Each input has a job:

- **Account Equity × Risk%** — the maximum rupees you're willing to lose if this trade fails. Your risk budget for this one trade.
- **Entry Price − Stop-Loss Price** — the per-unit distance you're risking. How many rupees each share (or each lot-unit) costs you if the stop is hit. Use the absolute distance — direction doesn't matter.
- **Divide the first by the second** — and you get the quantity that turns exactly your risk budget into a real trade.

That's the whole thing. No mystery, no secret. And there's one load-bearing rule about how you use it, which gets its own section below: the stop is fixed first, from the chart; the size is derived from the stop. Never the other way around.

One refinement before you trust any number above: estimate your round-trip cost per share (brokerage + exchange charges + stamp duty + GST), add it to the stop distance before dividing, and size on that. The worked examples below keep the arithmetic clean by showing gross distance — your real sizing uses net.

### Worked example: the formula on a Rs 1,00,000 account

Take a concrete trade. Your account has Rs 1,00,000. You risk 1% per trade. You're buying a stock at Rs 450 with a stop at Rs 440.

| Step | Calculation | Result |
|---|---|---|
| 1. Risk budget | Rs 1,00,000 × 1% | Rs 1,000 |
| 2. Risk per share | Rs 450 − Rs 440 | Rs 10 |
| 3. Position size | Rs 1,000 ÷ Rs 10 | **100 shares** |
| 4. Check | 100 × Rs 10 = Rs 1,000 | Matches the budget |

Under one condition — no gap, no slippage — the loss is exactly 1%. Not "about 1%." Exactly 1%. The formula's promise is that precise, **under one condition: no gap, no slippage** — slippage being your stop order filling at a worse price than you set. A stop order filled normally in a liquid market costs you the plan. An overnight gap past your stop, or a thinly traded stock that skips your price, can make the real loss larger than the calculated one. Sizing controls the plan; it can't repeal the market. (The [limitations section](#limitations-and-risks-what-the-formula-cannot-protect-you-from) spells out the gap caveat once, properly.)

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 500" role="img" aria-label="Worked position sizing calculation table on a Rs 1,00,000 account showing how Rs 1,000 risk budget and Rs 10 per-share risk give 100 shares" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Position sizing, step by step — Rs 1,00,000 account, 1% risk</text>
<text x="70" y="70" fill="#92a59c" font-size="12">Step</text>
<text x="240" y="70" text-anchor="middle" fill="#92a59c" font-size="12">Calculation</text>
<text x="560" y="70" text-anchor="middle" fill="#92a59c" font-size="12">Result</text>
<line x1="20" y1="82" x2="660" y2="82" stroke="#2a3a34" stroke-width="1"/>
<circle cx="50" cy="118" r="16" fill="#f2a33c" fill-opacity="0.18"/><text x="50" y="123" text-anchor="middle" fill="#f2a33c" font-size="14" font-weight="700">1</text>
<text x="100" y="113" fill="#f2f7f4" font-size="13" font-weight="600">Risk budget</text>
<text x="100" y="133" fill="#92a59c" font-size="12">Rs 1,00,000 × 1%</text>
<text x="560" y="123" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Rs 1,000</text>
<line x1="20" y1="152" x2="660" y2="152" stroke="#2a3a34" stroke-width="1"/>
<circle cx="50" cy="188" r="16" fill="#f2a33c" fill-opacity="0.18"/><text x="50" y="193" text-anchor="middle" fill="#f2a33c" font-size="14" font-weight="700">2</text>
<text x="100" y="183" fill="#f2f7f4" font-size="13" font-weight="600">Risk per share</text>
<text x="100" y="203" fill="#92a59c" font-size="12">Rs 450 − Rs 440</text>
<text x="560" y="193" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Rs 10</text>
<line x1="20" y1="222" x2="660" y2="222" stroke="#2a3a34" stroke-width="1"/>
<rect x="20" y="238" width="640" height="58" rx="8" fill="#14d991" fill-opacity="0.10"/>
<rect x="20" y="238" width="4" height="58" rx="2" fill="#14d991"/>
<circle cx="50" cy="267" r="16" fill="#14d991" fill-opacity="0.22"/><text x="50" y="272" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">3</text>
<text x="100" y="262" fill="#f2f7f4" font-size="13" font-weight="600">Position size</text>
<text x="100" y="282" fill="#92a59c" font-size="12">Rs 1,000 ÷ Rs 10</text>
<text x="560" y="272" text-anchor="middle" fill="#14d991" font-size="15" font-weight="700">100 shares</text>
<line x1="20" y1="312" x2="660" y2="312" stroke="#2a3a34" stroke-width="1"/>
<circle cx="50" cy="348" r="16" fill="#f2a33c" fill-opacity="0.18"/><text x="50" y="353" text-anchor="middle" fill="#f2a33c" font-size="14" font-weight="700">4</text>
<text x="100" y="343" fill="#f2f7f4" font-size="13" font-weight="600">Check</text>
<text x="100" y="363" fill="#92a59c" font-size="12">100 × Rs 10 = Rs 1,000</text>
<text x="560" y="353" text-anchor="middle" fill="#14d991" font-size="13" font-weight="600">Matches the budget</text>
<text x="340" y="420" text-anchor="middle" fill="#92a59c" font-size="12">Under one condition — no gap, no slippage — the loss is exactly 1%. Not "about 1%." Exactly 1%.</text>
<text x="340" y="442" text-anchor="middle" fill="#92a59c" font-size="12">For real sizing, add round-trip cost per share to the stop distance before dividing.</text>
<text x="340" y="478" text-anchor="middle" fill="#92a59c" font-size="12">Formula: Position Size = (Account Equity × Risk%) ÷ (Entry − Stop).</text>
</svg>
<figcaption>The worked calculation: Rs 1,00,000 × 1% = Rs 1,000 risk budget; Rs 450 − Rs 440 = Rs 10 per-share risk; Rs 1,000 ÷ Rs 10 = 100 shares. The check row confirms the loss at the stop is exactly the budget.</figcaption>
</figure>

---

## What position sizing actually is (and what it is not)

Position sizing is **variance control**, not a profit engine. It answers one question — "how much of my capital rides on this one idea?" — and leaves everything else alone.

What it does:

- **Caps the damage of any single trade** to a number you chose in advance, while calm.
- **Controls drawdown depth** — the peak-to-trough fall in your account balance during a losing run — which decides whether you survive long enough for your edge to work. See [risk of ruin](/articles/risk-of-ruin-trading/) — ruin rises steeply with position size, regardless of how good your strategy is.
- **Auto-scales your risk with your capital** (when you use the standard method below), so losses shrink your size automatically — the opposite of revenge trading.

What it does *not* do:

- **It cannot make a losing strategy profitable.** A negative-expectancy system sized perfectly is just a slower, more orderly way of losing money. Sizing controls variance and drawdown; only edge controls expectancy. The full myth-bust is [later in this article](#can-position-sizing-make-a-losing-strategy-profitable).
- **It cannot remove risk.** Trading risk is not a bug you can size away; every method in this article still loses trades, and still loses money overall if the strategy has no edge.

Internalize this before the methods: sizing is the difference between a loss you budgeted for and a loss that ends you. It is not the difference between winning and losing.

---

## Rule 1: the stop comes first — size is calculated AFTER the stop, never before

The most common process-order mistake in retail trading looks innocent: pick a quantity ("100 shares feels right"), then squeeze the stop to fit whatever risk budget you have left. The formula becomes:

> quantity first → stop = whatever keeps the loss under Rs 1,000

That's backwards. Your stop belongs to the market — to structure, to invalidation, to the price level where your idea is provably wrong. It does not belong to your budget. When you shrink the stop to fit the size, you're no longer trading your analysis; you're trading a position whose exit was chosen by your arithmetic, not by the chart. The trade gets stopped out by noise, you "prove" stops don't work, and the formula takes the blame for a sequencing error.

The correct order is non-negotiable:

1. **Entry and stop come from your setup** — support, resistance, pattern invalidation, ATR multiple, whatever your method uses. The stop is where you are wrong.
2. **Choose your risk%** — your standing rule (see the next sections).
3. **Calculate size last**, from the formula above.

Sometimes the arithmetic will answer "zero" — the honest output the [Rs 3 stop problem](#the-rs-3-stop-problem-when-the-formula-says-you-cannot-afford-this-trade) is built on. "You cannot afford this trade at this stop" is a complete, correct answer. It means the setup's risk doesn't fit your account, and the right response is to skip it or find a setup whose stop does fit — not to move the stop.

One practical way to fix the stop first: size it from volatility, not from your budget. A common approach is the **ATR multiple** — place the stop 1.5× to 2× the Average True Range below/above your entry, so the stop breathes with the instrument's normal movement instead of getting clipped by everyday noise. The stop still comes from the market (volatility structure, in this case) — the account budget never touches it. Only after the ATR stop is placed does the formula convert it into a quantity.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 500" role="img" aria-label="Diagram showing how a 2x ATR stop distance feeds into the position sizing formula" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Fix the stop from the market first — then let it become a size</text>
<line x1="120" y1="120" x2="300" y2="120" stroke="#14d991" stroke-width="3"/>
<text x="310" y="124" fill="#f2f7f4" font-size="13" font-weight="600">Entry Rs 450</text>
<line x1="120" y1="230" x2="300" y2="230" stroke="#ff4f65" stroke-width="3"/>
<text x="310" y="234" fill="#f2f7f4" font-size="13" font-weight="600">Stop Rs 420</text>
<line x1="105" y1="120" x2="105" y2="230" stroke="#f2a33c" stroke-width="2"/>
<line x1="105" y1="120" x2="115" y2="120" stroke="#f2a33c" stroke-width="2"/>
<line x1="105" y1="230" x2="115" y2="230" stroke="#f2a33c" stroke-width="2"/>
<text x="52" y="172" text-anchor="middle" fill="#f2a33c" font-size="12" font-weight="600">2× ATR</text>
<text x="52" y="190" text-anchor="middle" fill="#f2a33c" font-size="12">Rs 30</text>
<text x="210" y="88" text-anchor="middle" fill="#92a59c" font-size="12">1. from volatility, not budget</text>
<rect x="80" y="300" width="520" height="66" rx="10" fill="#f2a33c" fill-opacity="0.10"/>
<text x="340" y="324" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">2. Size = (Account × Risk%) ÷ Stop distance</text>
<text x="340" y="346" text-anchor="middle" fill="#92a59c" font-size="12">(Rs 1,00,000 × 1%) ÷ Rs 30 = 33.3 → 33 shares (round down)</text>
<text x="340" y="404" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Rule 1: the stop comes first. Size is derived from the stop — never the other way around.</text>
<text x="340" y="430" text-anchor="middle" fill="#92a59c" font-size="12">Shrinking the stop to fit a quantity trades a budget, not a setup — the trade then dies by noise.</text>
<text x="340" y="470" text-anchor="middle" fill="#92a59c" font-size="12">Stop belongs to the chart (structure, invalidation, ATR) — size belongs to the formula.</text>
</svg>
<figcaption>The stop is placed from market structure — 2× ATR below entry in this example — and only then converted into quantity by the formula. Choosing the quantity first and squeezing the stop to fit is the process-order mistake from Rule 1.</figcaption>
</figure>

---

## The 1% rule and fixed-fractional sizing: the sane default for beginners

**The 1% rule: risk no more than 1% of your total account equity on any single trade.** If your account is Rs 1,00,000, your maximum loss on one trade is Rs 1,000. Not approximately — as a ceiling.

This is the beginner standard for a reason you can compute: at 1% risk, it takes **69 consecutive losses** to cut your account in half. At 10% risk, it takes about **7**. The 1% rule isn't cautious because traders are timid; it's cautious because the mathematics of compounding losses is crueler than intuition suggests. (Computation: ln(0.5) ÷ ln(1 − r), verified October 2026.)

The method behind the rule is called **fixed fractional sizing**: you risk the same *percentage* of your current equity on every trade, not the same rupees. The risk budget recalculates from whatever the account is worth now:

- Win, account grows → the rupee value of your 1% grows with it, so winning streaks compound faster.
- Lose, account shrinks → the rupee value of your 1% shrinks with it, so losing streaks decelerate automatically.

That second property is the quiet genius. Fixed fractional is **anti-martingale**: losses make you smaller, not bigger. Compare that to the revenge trader's instinct — double up after a loss, which is martingale thinking and a documented path to the [ruin math in Article #1](/articles/risk-of-ruin-trading/). Fixed fractional does the opposite by construction, no willpower required.

At 10 consecutive losses at 1% risk, by the way, you're down about 9.6% (1 − 0.99^10 = 0.0956) — annoying, recoverable, and exactly the kind of survivable drawdown the rule exists to produce.

### Choosing your risk%: what 0.5%, 1%, and 2% survive

"1% or less" is the standard answer, but the right number depends on your strategy's worst realistic streak and your own nerves. The table below is deterministic — how many *consecutive* losses it takes to halve the account at each risk%:

| Risk per trade | Consecutive losses to halve the account |
|---|---|
| 0.5% | 138 |
| 1% | 69 |
| 2% | 34 |
| 5% | 14 |
| 10% | 7 |

(Losses-to-halve computed as ln(0.5) ÷ ln(1 − r), October 2026.)

How to read it as a decision:

- **0.5%** — for learning a new strategy, or for anything where you expect long losing streaks (low-win-rate trend following). Boring. That's the point.
- **1%** — the default. Most retail strategies, most temperaments. Start here.
- **2%** — the experienced ceiling. Only with a verified edge, a real journal, and proof you can sit through a 34-loss-equivalent drawdown without changing the rules mid-stream.
- **5%+** — you are one bad month from a halved account. Fourteen consecutive losses sounds impossible until probability and a regime shift arrange a meeting. The [risk-of-ruin guide](/articles/risk-of-ruin-trading/) shows how fast ruin probability climbs at these levels, *regardless of edge*.

Your risk% is a function of your strategy's streak math and your psychology — pick the smallest number you can defend, not the largest number you can tolerate.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 500" role="img" aria-label="Table showing consecutive losses needed to halve an account at different risk percentages" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">How many consecutive losses halve your account?</text>
<text x="340" y="54" text-anchor="middle" fill="#92a59c" font-size="12">losses-to-halve = ln(0.5) ÷ ln(1 − r) · bars on a log scale — read the numbers, not the lengths</text>
<rect x="8" y="96" width="664" height="162" rx="10" fill="#14d991" fill-opacity="0.08"/>
<text x="620" y="118" text-anchor="end" fill="#14d991" font-size="11" font-weight="700">SAFE ZONE (0.5–2%)</text>
<text x="110" y="126" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="600">0.5%</text><rect x="120" y="108" width="430" height="24" rx="6" fill="#14d991" fill-opacity="0.85"/><text x="560" y="126" fill="#f2f7f4" font-size="13" font-weight="700">138</text><text x="110" y="176" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="600">1%</text><rect x="120" y="158" width="370" height="24" rx="6" fill="#14d991" fill-opacity="0.85"/><text x="500" y="176" fill="#f2f7f4" font-size="13" font-weight="700">69</text><text x="110" y="226" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="600">2%</text><rect x="120" y="208" width="308" height="24" rx="6" fill="#14d991" fill-opacity="0.85"/><text x="438" y="226" fill="#f2f7f4" font-size="13" font-weight="700">34</text><text x="110" y="276" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="600">5%</text><rect x="120" y="258" width="230" height="24" rx="6" fill="#f2a33c" fill-opacity="0.85"/><text x="360" y="276" fill="#f2f7f4" font-size="13" font-weight="700">14</text><text x="110" y="326" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="600">10%</text><rect x="120" y="308" width="170" height="24" rx="6" fill="#ff4f65" fill-opacity="0.85"/><text x="300" y="326" fill="#f2f7f4" font-size="13" font-weight="700">7</text>
<text x="340" y="404" text-anchor="middle" fill="#92a59c" font-size="12">At 10% risk, seven bad trades in a row cut the account in half. Fourteen losses in a row is not</text>
<text x="340" y="426" text-anchor="middle" fill="#92a59c" font-size="12">a freak event — regime shifts arrange it. The 1% default takes 69 consecutive losses to halve.</text>
<text x="340" y="470" text-anchor="middle" fill="#92a59c" font-size="12">Pick the smallest risk% you can defend, not the largest you can tolerate.</text>
</svg>
<figcaption>Consecutive losses to halve the account at each risk level: 138 at 0.5%, 69 at 1%, 34 at 2%, 14 at 5%, 7 at 10%. The safe zone is 0.5–2%.</figcaption>
</figure>

### Total portfolio heat: size the book, not just the trade

Your 1% rule protects each trade. It does not protect you from yourself. Add up the risk budgets of every open position — that sum is your portfolio heat — and cap total open risk at 3–6% of equity; when heat is already at the cap, the next trade is a pass, no matter how good the setup looks. The formula sizes each position in isolation; heat is the rule that makes the portfolio survive them together.

---

## The Rs 3 stop problem: when the formula says "you cannot afford this trade"

Here is the most useful thing position sizing math can tell you — and the one no calculator page advertises: **sometimes the answer is no.**

Back in October 2020, a trader posted on a popular Indian retail-trading community forum with arithmetic that confused him. He had a Rs 1,00,000 account, a 1% risk rule — Rs 1,000 per trade — and he was **shorting** a stock: sell at Rs 1,029, stop at Rs 1,032. A Rs 3 per-share risk. He ran the formula:

| Step | Calculation | Result |
|---|---|---|
| 1. Risk budget | Rs 1,00,000 × 1% | Rs 1,000 |
| 2. Risk per share | Rs 1,032 − Rs 1,029 (stop above entry — it's a short) | Rs 3 |
| 3. Position size | Rs 1,000 ÷ Rs 3 | 333 shares |
| 4. Notional | 333 × Rs 1,029 | **Rs 3,42,657** |

The risk math was perfect — 333 × Rs 3 = Rs 999, a hair under the Rs 1,000 budget. But the notional value of the short — the total rupee value of the position he controlled (333 shares × Rs 1,029) — was Rs 3.43 lakh, **more than three times his entire account**. The formula was right and the trade was unaffordable. Both can be true.

There are three honest responses, and only three:

1. **Skip the trade.** The formula's legitimate, complete output is "you cannot afford this trade." Not every setup fits every account. This is an answer, not a failure.
2. **Admit the stop is too tight for the account.** A Rs 3 stop on a Rs 1,029 stock is razor-thin — normal intraday noise. If the stop doesn't fit the account, the *setup* doesn't fit, and no amount of arithmetic fixes a mismatch between your capital and your instrument.
3. **Intraday margin covers the notional — but never changes the Rs 1,000 risk.** Under SEBI's peak-margin framework, a broker's intraday margin may let you *hold* a position larger than your capital. That changes the notional you can carry, not the risk you decided to take. The risk budget stays Rs 1,000 regardless of what leverage the margin lets you touch.

Notice what isn't on the list: move the stop further away so the quantity "fits," or round the size up to use the full capital. Both are the process-order mistake from Rule 1 wearing a costume.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 500" role="img" aria-label="Worked table of the Rs 3 stop short trade showing how correct position sizing produces a Rs 3.43 lakh notional on a Rs 1 lakh account" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The Rs 3 stop problem — correct math, unaffordable trade</text>
<text x="40" y="68" fill="#92a59c" font-size="12" font-weight="600">Rs 1,00,000 account · 1% risk = Rs 1,000 · SHORT: sell Rs 1,029, stop Rs 1,032</text>
<line x1="20" y1="80" x2="660" y2="80" stroke="#2a3a34" stroke-width="1"/>
<text x="40" y="112" fill="#f2f7f4" font-size="13">Risk budget</text><text x="620" y="112" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="600">Rs 1,000</text>
<text x="40" y="142" fill="#f2f7f4" font-size="13">Per-share risk (stop above entry — it's a short)</text><text x="620" y="142" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="600">Rs 3</text>
<text x="40" y="172" fill="#f2f7f4" font-size="13">Position size: Rs 1,000 ÷ Rs 3</text><text x="620" y="172" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="600">333 shares</text>
<line x1="20" y1="188" x2="660" y2="188" stroke="#2a3a34" stroke-width="1"/>
<rect x="20" y="202" width="640" height="56" rx="8" fill="#ff4f65" fill-opacity="0.10"/>
<rect x="20" y="202" width="4" height="56" rx="2" fill="#ff4f65"/>
<text x="40" y="224" fill="#f2f7f4" font-size="13" font-weight="700">Notional: 333 × Rs 1,029</text>
<text x="620" y="224" text-anchor="end" fill="#ff4f65" font-size="14" font-weight="700">Rs 3,42,657</text>
<text x="40" y="244" fill="#ff4f65" font-size="12" font-weight="600">more than 3× the entire account — 333 × Rs 3 = Rs 999 risk is perfect, the trade is still unaffordable</text>
<text x="340" y="300" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Three honest responses — only three:</text>
<rect x="30" y="318" width="200" height="72" rx="10" fill="#14d991" fill-opacity="0.10"/>
<text x="130" y="344" text-anchor="middle" fill="#14d991" font-size="12" font-weight="700">1. Skip the trade</text>
<text x="130" y="364" text-anchor="middle" fill="#92a59c" font-size="11">"Cannot afford this trade"</text>
<text x="130" y="380" text-anchor="middle" fill="#92a59c" font-size="11">is a complete answer</text>
<rect x="240" y="318" width="200" height="72" rx="10" fill="#f2a33c" fill-opacity="0.10"/>
<text x="340" y="344" text-anchor="middle" fill="#f2a33c" font-size="12" font-weight="700">2. Stop too tight</text>
<text x="340" y="364" text-anchor="middle" fill="#92a59c" font-size="11">Rs 3 on a Rs 1,029 stock</text>
<text x="340" y="380" text-anchor="middle" fill="#92a59c" font-size="11">is intraday noise</text>
<rect x="450" y="318" width="200" height="72" rx="10" fill="#92a59c" fill-opacity="0.10"/>
<text x="550" y="344" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">3. Margin covers notional</text>
<text x="550" y="364" text-anchor="middle" fill="#92a59c" font-size="11">but NEVER raises the</text>
<text x="550" y="380" text-anchor="middle" fill="#92a59c" font-size="11">Rs 1,000 risk budget</text>
<text x="340" y="430" text-anchor="middle" fill="#92a59c" font-size="12">Not on the list: move the stop further out so the quantity "fits," or round the size up</text>
<text x="340" y="452" text-anchor="middle" fill="#92a59c" font-size="12">to use the full capital. Both are the Rule 1 process-order mistake in a costume.</text>
<text x="340" y="482" text-anchor="middle" fill="#92a59c" font-size="12">Both can be true: the formula is right and the trade is unaffordable.</text>
</svg>
<figcaption>A Rs 1,00,000 account at 1% risk, short at Rs 1,029 with a Rs 1,032 stop: 333 shares is mathematically perfect (Rs 999 risk) but the Rs 3,42,657 notional exceeds the whole account. The three honest responses: skip it, accept the stop is too tight, or use intraday margin to carry the notional while keeping risk at Rs 1,000.</figcaption>
</figure>

---

## When the exchange decides your size: NSE lot sizes and F&O reality

In equity cash you can buy 100 shares, 127 shares, any number — the formula's output is directly tradable. In F&O, the exchange sets the dial and you don't get to turn it.

NSE index-derivative lot sizes are fixed per contract (verified October 2026, per NSE circular NSE/FAOP/70616 dated 3 October 2025 — the older 75/35/65/140 figures you may see online are superseded):

| Contract | Lot size (current) |
|---|---|
| NIFTY | 65 |
| BANKNIFTY | 30 |
| FINNIFTY | 60 |
| MIDCPNIFTY | 120 |

One NIFTY lot is 65 units. A 100-point stop on one lot risks 65 × 100 = **Rs 6,500** — that's **6.5% of a Rs 1,00,000 account** on a single trade. You cannot buy 0.15 of a lot to get back to your 1%. The dial doesn't exist.

For F&O traders, position sizing therefore becomes **trade selection, not quantity dialing**: you pick setups whose lot-level risk fits your budget. One NIFTY lot with a 15-point stop risks 65 × 15 = Rs 975 — just under a 1% budget on Rs 1,00,000. With a 100-point stop, the same single lot risks 6.5% — which means the trade doesn't fit a 1%-risk account at all, and the honest answer is the Rs 3 stop problem's answer: skip it, or size the account up, not the risk.

The rule holds at any account size: compute the *minimum* trade (one lot, your stop) first. If it already breaches your risk%, no sizing method saves the trade.

---

## Fixed fractional vs fixed dollar vs Kelly: which fits you?

Three ways to decide "how much," compared honestly. The question isn't which is best — it's which fits your strategy, your account, and your temperament. (Kelly gets its full breakdown in the section right after — read the table row as a preview.)

| | Fixed fractional | Fixed dollar | Kelly (full / fractional) |
|---|---|---|---|
| **The rule** | Risk the same % of current equity per trade (e.g. 1%) | Risk the same Rs amount per trade (e.g. Rs 1,000) | Risk the Kelly fraction of equity (see below) |
| **After losses** | Risk budget shrinks automatically (anti-martingale) | Risk budget stays flat — so the % of account *rises* as you lose | Shrinks with equity, like fixed fractional |
| **After wins** | Budget grows with equity — compounds faster | Budget stays flat — compounds slower | Grows with equity |
| **Growth** | Standard, steady | Slowest of the three on a growing account | Full Kelly: mathematically maximum long-run growth; fractional: half Kelly ≈ 75% of full-Kelly growth, quarter Kelly ≈ 44% (standard textbook figures) |
| **Drawdown** | Controlled, scales with your chosen % | Mild in rupees, but the flat amount gets relatively bigger as the account shrinks | Full Kelly: brutal — unusable in practice (see below); fractional: dramatically tamer |
| **Best for** | Almost everyone, especially beginners | Tiny accounts or fixed-income-style plans where simplicity beats optimization | Advanced traders with a verified, stable edge who understand the drawdown math |
| **The catch** | None serious — it's the default for a reason | Doesn't scale: on a Rs 50,000 account Rs 1,000 is 2%; after a bad run it's 4% | Requires accurate win-rate and payoff estimates; garbage in, terrifying drawdowns out |

One line each: **fixed fractional** is the sane default. **Fixed dollar** is simple and fine when the account is stable, but watch the percentage drift upward during drawdowns. **Kelly** is the mathematical ceiling — and, as the next two sections show, a ceiling you should admire from a safe distance.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 500" role="img" aria-label="Comparison table of fixed fractional, fixed dollar, and Kelly position sizing methods across growth, drawdown, and suitability" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Fixed fractional vs fixed dollar vs Kelly — which fits you?</text>
<rect x="30" y="74" width="204" height="184" rx="10" fill="#101b17" stroke="#2a3a34" stroke-width="1"/><rect x="30" y="74" width="204" height="34" rx="10" fill="#14d991" fill-opacity="0.16"/><text x="132" y="96" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">Fixed fractional</text><text x="180" y="108" text-anchor="middle" fill="#92a59c" font-size="11">Same % of equity per trade</text><text x="180" y="130" text-anchor="middle" fill="#92a59c" font-size="11">Losses: budget shrinks</text><text x="180" y="152" text-anchor="middle" fill="#92a59c" font-size="11">(anti-martingale)</text><text x="180" y="174" text-anchor="middle" fill="#92a59c" font-size="11">Wins: compounds faster</text><text x="180" y="196" text-anchor="middle" fill="#92a59c" font-size="11">Drawdown: controlled</text><text x="180" y="218" text-anchor="middle" fill="#92a59c" font-size="11">Best for: almost everyone</text>
<rect x="238" y="74" width="204" height="184" rx="10" fill="#101b17" stroke="#2a3a34" stroke-width="1"/><rect x="238" y="74" width="204" height="34" rx="10" fill="#f2a33c" fill-opacity="0.16"/><text x="340" y="96" text-anchor="middle" fill="#f2a33c" font-size="13" font-weight="700">Fixed dollar</text><text x="388" y="108" text-anchor="middle" fill="#92a59c" font-size="11">Same rupees per trade</text><text x="388" y="130" text-anchor="middle" fill="#92a59c" font-size="11">Losses: % of account RISES</text><text x="388" y="152" text-anchor="middle" fill="#92a59c" font-size="11">as you lose</text><text x="388" y="174" text-anchor="middle" fill="#92a59c" font-size="11">Growth: slowest</text><text x="388" y="196" text-anchor="middle" fill="#92a59c" font-size="11">Simple but doesn't scale</text><text x="388" y="218" text-anchor="middle" fill="#92a59c" font-size="11">Best for: tiny accounts</text>
<rect x="446" y="74" width="204" height="184" rx="10" fill="#101b17" stroke="#2a3a34" stroke-width="1"/><rect x="446" y="74" width="204" height="34" rx="10" fill="#ff4f65" fill-opacity="0.16"/><text x="548" y="96" text-anchor="middle" fill="#ff4f65" font-size="13" font-weight="700">Kelly (fractional)</text><text x="596" y="108" text-anchor="middle" fill="#92a59c" font-size="11">Kelly fraction of equity</text><text x="596" y="130" text-anchor="middle" fill="#92a59c" font-size="11">Full Kelly: 32.5% risk</text><text x="596" y="152" text-anchor="middle" fill="#92a59c" font-size="11">→ 98% drawdown possible</text><text x="596" y="174" text-anchor="middle" fill="#92a59c" font-size="11">Pros use 1/4 to 1/2 Kelly</text><text x="596" y="196" text-anchor="middle" fill="#92a59c" font-size="11">Needs verified p and b</text><text x="596" y="218" text-anchor="middle" fill="#92a59c" font-size="11">Best for: advanced only</text>
<text x="340" y="440" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">The sane default is fixed fractional. Kelly is the mathematical ceiling — admire it from a safe distance.</text>
<text x="340" y="466" text-anchor="middle" fill="#92a59c" font-size="12">No sizing method turns a negative-expectancy strategy profitable. Sizing controls variance and drawdown — never expectancy.</text>
</svg>
<figcaption>Fixed fractional is the sane default: it auto-shrinks risk in drawdowns and compounds on wins. Fixed dollar is simple but the flat amount becomes a bigger share of a shrinking account. Kelly is the mathematical growth ceiling, but full Kelly is unusable — professionals run 1/4 to 1/2 Kelly.</figcaption>
</figure>

### Kelly is Expectancy, weaponized: the math that plugs the whole week in

Here's the payoff for the Week 1 series. The Kelly formula for position sizing is:

**f\* = (p × b − q) ÷ b**

where **p** = your win rate, **q** = 1 − p, and **b** = your average win ÷ average loss (payoff ratio).

Read that again slowly. Win rate is [Article #3](/articles/win-rate-vs-risk-reward/). The payoff ratio is [expectancy's](/articles/what-is-trading-expectancy/) raw material, and its components are worked through step by step in the [break-even](/articles/break-even-win-rate/) and [30%-win-rate](/articles/profitable-with-30-percent-win-rate/) guides. **Every number this week taught you plugs into one sizing number.** Kelly isn't a new topic — it's the whole week, weaponized.

Worked check. A strategy with a 55% win rate and a 1:2 payoff (average win twice the average loss):

f\* = (0.55 × 2 − 0.45) ÷ 2 = (1.10 − 0.45) ÷ 2 = 0.65 ÷ 2 = **32.5%**

The formula says: bet 32.5% of your equity on each trade to maximize long-run growth. Which brings us to the honest turn.

### Why professionals never run full Kelly (the fractional-Kelly turn)

Full Kelly maximizes the long-run compounding rate of your equity — mathematically true, psychologically fictional. The drawdowns it demands are unusable by any human:

- A **10-loss streak at 32.5% full Kelly leaves about 2% of your capital** — a ~98% drawdown. (Computation: 0.675^10 ≈ 0.0196, verified October 2026.) At 55% win rate, a 10-loss streak is far from impossible — over long trading careers it becomes more likely than not (exact probability ~61% over 5,000 trades, ~17% over 1,000 trades) — and because your win rate is an estimate, sizing should assume it will eventually arrive.
- Roughly speaking, full Kelly carries about a **50% chance of a 50% drawdown** along the way. Half the time, you watch half your money vanish — while being "mathematically optimal."

This is why professionals use **fractional Kelly** — the same formula, deliberately scaled back:

- **Half Kelly (16.25%)** captures roughly **75% of full-Kelly growth** with far lower variance.
- **Quarter Kelly (~8.1%)** captures roughly **44% of full-Kelly growth** with a far more survivable equity curve. (A 10-loss streak at quarter Kelly draws down ~57%, not ~98%.)

Even quarter Kelly here lands well above the 2% experienced ceiling — always cross-check a Kelly output against the survivability table and size below the smaller of the two. The professional default is 1/4 to 1/2 Kelly. Note the irony: quarter Kelly on a 32.5% full-Kelly number is ~8% per trade — in the same neighborhood as the 2% ceiling from the survivability table, once you account for estimation error in p and b. All the roads converge: **size smaller than the math's maximum, because the math's maximum assumes you know the future and feel nothing.**

And the standing warning for everything Kelly: it is not a profit guarantee. It assumes your p and b are true, stable, and measured — and journal data is always an estimate. Sizing controls variance and drawdown, never expectancy.

---

## Round DOWN, never up: the last detail that protects your number

The formula says 128.4 shares. You buy 128. Not 129. Never 129.

Rounding up silently pushes your risk past the limit you set when you were thinking clearly. At Rs 10 per-share risk, "just one more share" is Rs 10 over budget — trivial once, and a habit that compounds into a broken rule. A calculated 127.5 shares becomes 127. Never 128. Never 129. **Down, never up.** It's the smallest discipline in this article and one of the most load-bearing: your risk number is a ceiling, not a target.

---

## Can position sizing make a losing strategy profitable?

No. Say it plainly, because the internet won't: **no sizing method — fixed fractional, fixed dollar, Kelly, or anything else — can turn a negative-expectancy strategy into a profitable one.**

The proof is one line: every sizing method multiplies your per-trade expectancy by a number. If expectancy is negative, multiplying it by any positive size keeps it negative — you're just choosing how fast to lose, and how violently. Sizing controls **variance** (how bumpy the ride is) and **drawdown** (how deep the worst dips go). It does not touch expectancy. Only the strategy's edge — win rate and payoff after costs — touches that. For the full treatment of how size drives survival odds independent of edge, see [risk of ruin](/articles/risk-of-ruin-trading/).

The flip side is equally important: a *good* strategy with reckless sizing dies anyway. Edge decides whether you win; sizing decides whether you survive to collect. You need both. Nobody gets to pick one.

---

## Common position sizing mistakes Indian traders actually make

**Oversizing after wins.** Three green trades and the brain upgrades you from 1% to 3% "because it's working." Recency bias with a calculator. Your edge didn't change; your euphoria did. The fixed-fractional method already grows your rupee risk automatically as the account grows — let the arithmetic do the compounding, not your mood.

**Ignoring gap risk.** The formula's Rs 1,000 promise assumes the stop fills at the stop. Overnight gaps in equity and F&O, circuit-filter days (when the exchange freezes trading after a sharp move), and illiquid option strikes can skip your price entirely. Size with the knowledge that any single trade can occasionally cost more than planned — one more reason the risk% should be small.

**Sizing to account size instead of risk%.** "I have Rs 5 lakh, so Rs 10,000 a trade is fine" — that's 2%, stated as if the account size justifies it. The account size is irrelevant; the streak math in the survivability table doesn't care how big the account is. Choose the %, then let the rupees follow.

**Forgetting costs.** Every round trip pays brokerage, exchange charges, GST, stamp duty — and, since Budget 2026 (effective 1 April 2026), higher STT on F&O: **0.05% on futures sales** (up from 0.02%), **0.15% on options premium sales** (up from 0.10%), and **0.15% on exercised in-the-money options** (profitable options settled at expiry; up from 0.125%). These come out of your real money, so your *net* payoff per trade is smaller than the chart suggests — which quietly raises the bar your sizing has to clear. Size on net numbers, never paper ones.

**Treating intraday margin as risk capacity.** Margin lets you carry a bigger notional; it does not raise the loss you can afford. The Rs 3,42,657 short on a Rs 1,00,000 account is still a Rs 1,000-risk trade — and a margin call waiting to happen if anything goes wrong.

---

## Limitations and risks: what the formula cannot protect you from

An honest list, once, so nothing here gets mistaken for a safety guarantee:

- **Stops assume liquidity.** Gaps, circuits, and illiquid instruments can make a real loss exceed the calculated risk budget. "Losing exactly Rs 1,000" is the plan, not a promise.
- **Estimates are not facts.** Your risk%, your stop distance, and (for Kelly) your win rate and payoff are all measured with error. Size with margin for being wrong about your own numbers.
- **No sizing method guarantees profit or prevents loss.** Position sizing manages how you lose and how deep the dips go; it cannot manufacture an edge or repeal market risk.
- **Leveraged F&O can lose more than your margin.** Size accordingly — the exchange's lot is fixed, your account is not.

---

## Test your sizing before real money: run it through the What-If Trade Simulator

You now have a risk%, a formula, and (from this week's articles) your win rate and payoff numbers. Before any of it touches real capital, run the combination through our [What-If Trade Simulator](/tools/what-if-simulator/): plug in your win rate, your risk-reward ratio (R:R), and your chosen risk% from the survivability table, and watch what hundreds of simulated runs do to an account your size. If your sizing can't survive the simulator's worst runs, it won't survive the market's — and if it survives the simulator, treat that as a necessary test, not a guarantee. It's far cheaper to learn that from a fan chart than from a drawdown. One thing the simulator won't check for you: [total portfolio heat](#total-portfolio-heat-size-the-book-not-just-the-trade) — it tests one sizing profile at a time, so the cap across concurrent trades stays your job.

---

## Position sizing: frequently asked questions

**What is the position sizing formula?**
Position Size = (Account Equity × Risk%) ÷ (Entry Price − Stop-Loss Price). Multiply your account by the percentage you're willing to risk (your risk budget), divide by the per-share distance to your stop, and you get the quantity that loses exactly your risk budget if the stop is hit. See the [worked example](#worked-example-the-formula-on-a-rs-100000-account) at the top of this article.

**What is the 1% rule in trading?**
Risk no more than 1% of your total account equity on any single trade. On a Rs 1,00,000 account, that's Rs 1,000 maximum loss per trade. It exists because of the compounding math of losses: at 1% risk it takes 69 consecutive losses to halve an account, versus about 7 at 10% risk.

**How much should a beginner risk per trade?**
0.5% to 1% of account equity per trade. Start at 1% as the standard default, drop to 0.5% while learning a new strategy or running anything with long expected losing streaks. The full [risk% decision table](#choosing-your-risk-what-05-1-and-2-survive) shows what each level survives.

**How do I calculate position size?**
1. Fix your entry and stop from your setup — the stop is where your idea is wrong. 2. Choose your risk% (1% default). 3. Multiply account equity by risk% for your rupee risk budget. 4. Divide the budget by (entry − stop) for your quantity. 5. Round DOWN to a tradable number. The classic edge case: a Rs 3 stop on a Rs 1,00,000 account at 1% risk gives 333 shares — a Rs 3.43 lakh notional that exceeds the account. The formula's honest answer there is "you cannot afford this trade."

**Is the Kelly Criterion good for traders?**
Mathematically optimal for long-run growth, psychologically unusable at full strength: a 10-loss streak at 32.5% full Kelly leaves ~2% of your capital (~98% drawdown). Professionals use fractional Kelly — 1/4 to 1/2 of the full number — which keeps most of the growth with far tamer drawdowns. Kelly also demands accurate win-rate and payoff estimates; with noisy journal data, treat it as a ceiling to stay well under, not a target. See [Kelly is Expectancy, weaponized](#kelly-is-expectancy-weaponized-the-math-that-plugs-the-whole-week-in).

**Fixed fractional vs fixed dollar vs Kelly — which is better?**
None is universally best. Fixed fractional (same % of equity per trade) is the standard default: simple, auto-scales down in drawdowns. Fixed dollar (same rupees per trade) is simpler but doesn't scale — the flat amount becomes a bigger % of a shrinking account. Kelly is the mathematical growth ceiling but demands verified inputs and fractional use. The [comparison table](#fixed-fractional-vs-fixed-dollar-vs-kelly-which-fits-you) lays out the trade-offs.

**What if my calculated position size exceeds my capital?**
Then the formula has given you a legitimate answer: you cannot afford this trade. Three honest responses — skip it, accept the stop is too tight for your account size, or (intraday) use margin to carry the notional while keeping the rupee risk unchanged. Never move the stop or round the size up to force it. See [the Rs 3 stop problem](#the-rs-3-stop-problem-when-the-formula-says-you-cannot-afford-this-trade).

**Can position sizing make a losing strategy profitable?**
No. Sizing controls variance and drawdown, not expectancy — multiplying a negative per-trade expectancy by any position size keeps it negative. It decides whether you survive long enough to collect your edge; only the edge itself decides whether you win. Full argument in [the myth-bust section](#can-position-sizing-make-a-losing-strategy-profitable) and our [risk-of-ruin guide](/articles/risk-of-ruin-trading/).

---

*Kaizen writes about the mathematics of trading at Monks Of Market — expectancy, risk, and the unglamorous arithmetic behind surviving markets.*

**Educational disclaimer:** This article is for educational purposes only and is not financial advice, investment advice, or a recommendation to trade any instrument. Trading — especially leveraged F&O — carries substantial risk of loss, including losses exceeding your margin. SEBI's FY26 study found ~87.7% of individual Indian F&O traders were net loss-makers. Past or hypothetical performance never guarantees future results. Consult a SEBI-registered investment adviser before making trading decisions.

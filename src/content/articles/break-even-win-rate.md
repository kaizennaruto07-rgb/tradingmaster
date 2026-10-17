---
title: "Break-Even Win Rate Formula: The Real Number Your Strategy Must Beat (With Indian Trading Costs)"
description: "Break even win rate formula: 1 ÷ (1 + R:R) — but costs change it. Compute your real breakeven with Indian F&O costs and the planned-vs-realized worksheet."
meta_description: "Break even win rate formula: 1 ÷ (1 + R:R) — but costs change it. Compute your real breakeven with Indian F&O costs and the planned-vs-realized worksheet."
date: 2026-10-06
author: Kaizen
tag: "Trading mathematics · Breakeven"
keywords: ["break even win rate formula", "breakeven win rate calculator", "what win rate to be profitable", "break even win rate with costs", "minimum win rate trading"]
---

*Educational content only — not financial advice. Trading involves risk of loss.*

Every trading strategy has a number it must beat. Fall below it, and you lose money — no matter how confident you felt about the entries. That number is the **break-even win rate**: the minimum win rate a strategy needs, given its average win and average loss, to stop bleeding.

Most traders have seen the textbook break even win rate formula. Far fewer have computed the version that includes their actual trading costs — and that is the only version that matters. This article gives you both, plus the worksheet that turns the number into something you can act on: comparing your *planned* breakeven against your *realized* breakeven from your own trade history.

The conceptual ground — how win rate and risk-reward relate — was mapped in our companion piece, [Win Rate vs Risk-Reward](/articles/win-rate-vs-risk-reward/). This article is the workshop: here you compute your own two breakeven numbers and the gap between them.

---

## What Win Rate Do You Actually Need to Break Even?

The honest answer: there is no single number. The break-even win rate depends on your average win relative to your average loss:

**Break-Even Win Rate = 1 ÷ (1 + R:R)**

where R:R is your average win divided by your average loss. A strategy with bigger wins relative to its losses needs a lower win rate to survive; a strategy whose wins barely cover its losses needs a high one.

That is the entire pre-costs picture. Everything else in this article is about what this simple formula leaves out — and how much that omission costs you.

### The Textbook Table (Before Costs)

Before costs, the formula produces this reference table. Treat it as a starting point, not an answer — the cost-inclusive version comes later in this article.

| Your R:R | Break-even win rate |
|----------|--------------------|
| 1 : 0.5 | 66.7% |
| 1 : 1 | 50.0% |
| 1 : 1.5 | 40.0% |
| **1 : 2** | **33.3%** |
| **1 : 3** | **25.0%** |
| 1 : 4 | 20.0% |
| 1 : 5 | 16.7% |

So the **break even win rate for a 1:2** setup is 33.3%, and the **break even win rate for a 1:3** setup is 25% — *before* costs. These are the numbers every breakeven win rate calculator hands you. They are also the numbers that will quietly lose you money, because no Indian retail trader actually trades at zero cost.

One caution: this table assumes your average win and average loss are stable. If your position size varies wildly, or you scale out of positions at multiple levels, the simple breakeven arithmetic stops being exact — at that point you want expectancy, which we cover in [What Is Trading Expectancy?](/articles/what-is-trading-expectancy/).

The full derivation of the win-rate/R:R relationship lives in [Win Rate vs Risk-Reward](/articles/win-rate-vs-risk-reward/); we link back rather than repeat it here.

---

## Why the Textbook 50% Is a Lie Once Costs Exist

Here is the statistic that should change how every scalper thinks. Take a 1:1 trader whose targets and stops sit 0.5% apart. The textbook says they need a 50% win rate to break even. But once a modest 0.07% round-trip cost (brokerage, spread, slippage) is included, the real breakeven win rate is **57%** — not 50%. Tighten the levels to 0.25%, and the real breakeven jumps to **64%**.

A 5-minute-chart scalper who "needs 50%" is actually losing money at 54%.

One mandatory caveat before anyone copies these numbers into a trading plan: the 0.07% round-trip figure is an **illustrative assumption** from a publicly shared with-costs derivation in an open-source worked example — not measured Indian retail trading data. It exists to demonstrate the shape of the math, not to describe your costs. Your own numbers come from the Indian cost stack below — and as you will see, they can be far worse than 0.07%.

### The derivation

Let p be your win rate, a your average win distance, b your average loss distance, and c your round-trip cost per trade — all as percentages. Each win nets (a − c) because costs come out of the win; each loss costs (b + c) because you pay costs on the loss too. Setting expected value to zero:

**E = p(a − c) − (1 − p)(b + c) = 0**

Solving for p:

**Break-Even Win Rate (with costs) = (b + c) ÷ (a + b)**

Notice the denominator simplifies cleanly: (a − c) + (b + c) = a + b. And when costs are zero, the formula collapses back to b ÷ (a + b) — the textbook version. The with-costs formula is a strict generalisation, not a competing idea.

Check the scalper stat with it: a = b = 0.5%, c = 0.07% gives (0.5 + 0.07) ÷ (0.5 + 0.5) = 0.57 ÷ 1.00 = **57%**. At 0.25% levels: (0.25 + 0.07) ÷ (0.25 + 0.25) = 0.32 ÷ 0.50 = **64%**.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 470" role="img" aria-label="Grouped bar chart comparing pre-cost and with-costs break-even win rates for risk-reward ratios from 1:0.5 to 1:5" class="viz viz-bars">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Breakeven win rate: textbook vs with-costs (5% stop, c &#8776; 2.2%)</text>
<rect x="214" y="44" width="14" height="14" rx="3" fill="#3f6f5f"/><text x="236" y="56" fill="#92a59c" font-size="12">Pre-cost (textbook)</text>
<rect x="398" y="44" width="14" height="14" rx="3" fill="#f2a33c"/><text x="420" y="56" fill="#92a59c" font-size="12">With-costs (this article&#8217;s worked example)</text>
<text x="140" y="101" text-anchor="end" fill="#92a59c" font-size="12" font-family="monospace">1 : 0.5</text>
<rect x="150" y="86" width="313.5" height="15" rx="4" fill="#3f6f5f" fill-opacity="0.9" class="bar-grow"/>
<text x="471.5" y="98" fill="#7fb89b" font-size="11" font-family="monospace">66.7%</text>
<rect x="150" y="106" width="451.2" height="15" rx="4" fill="#f2a33c" fill-opacity="0.9" class="bar-grow"/>
<text x="609.2" y="118" fill="#f2a33c" font-size="11" font-weight="700" font-family="monospace">96.0%</text>
<text x="140" y="147" text-anchor="end" fill="#92a59c" font-size="12" font-family="monospace">1 : 1</text>
<rect x="150" y="132" width="235.0" height="15" rx="4" fill="#3f6f5f" fill-opacity="0.9" class="bar-grow"/>
<text x="393.0" y="144" fill="#7fb89b" font-size="11" font-family="monospace">50.0%</text>
<rect x="150" y="152" width="338.4" height="15" rx="4" fill="#f2a33c" fill-opacity="0.9" class="bar-grow"/>
<text x="496.4" y="164" fill="#f2a33c" font-size="11" font-weight="700" font-family="monospace">72.0%</text>
<text x="140" y="193" text-anchor="end" fill="#92a59c" font-size="12" font-family="monospace">1 : 1.5</text>
<rect x="150" y="178" width="188.0" height="15" rx="4" fill="#3f6f5f" fill-opacity="0.9" class="bar-grow"/>
<text x="346.0" y="190" fill="#7fb89b" font-size="11" font-family="monospace">40.0%</text>
<rect x="150" y="198" width="270.7" height="15" rx="4" fill="#f2a33c" fill-opacity="0.9" class="bar-grow"/>
<text x="428.7" y="210" fill="#f2a33c" font-size="11" font-weight="700" font-family="monospace">57.6%</text>
<text x="140" y="239" text-anchor="end" fill="#92a59c" font-size="12" font-family="monospace">1 : 2</text>
<rect x="150" y="224" width="156.5" height="15" rx="4" fill="#3f6f5f" fill-opacity="0.9" class="bar-grow"/>
<text x="314.5" y="236" fill="#7fb89b" font-size="11" font-family="monospace">33.3%</text>
<rect x="150" y="244" width="225.6" height="15" rx="4" fill="#f2a33c" fill-opacity="0.9" class="bar-grow"/>
<text x="383.6" y="256" fill="#f2a33c" font-size="11" font-weight="700" font-family="monospace">48.0%</text>
<text x="140" y="285" text-anchor="end" fill="#92a59c" font-size="12" font-family="monospace">1 : 3</text>
<rect x="150" y="270" width="117.5" height="15" rx="4" fill="#3f6f5f" fill-opacity="0.9" class="bar-grow"/>
<text x="275.5" y="282" fill="#7fb89b" font-size="11" font-family="monospace">25.0%</text>
<rect x="150" y="290" width="169.2" height="15" rx="4" fill="#f2a33c" fill-opacity="0.9" class="bar-grow"/>
<text x="327.2" y="302" fill="#f2a33c" font-size="11" font-weight="700" font-family="monospace">36.0%</text>
<text x="140" y="331" text-anchor="end" fill="#92a59c" font-size="12" font-family="monospace">1 : 4</text>
<rect x="150" y="316" width="94.0" height="15" rx="4" fill="#3f6f5f" fill-opacity="0.9" class="bar-grow"/>
<text x="252.0" y="328" fill="#7fb89b" font-size="11" font-family="monospace">20.0%</text>
<rect x="150" y="336" width="135.4" height="15" rx="4" fill="#f2a33c" fill-opacity="0.9" class="bar-grow"/>
<text x="293.4" y="348" fill="#f2a33c" font-size="11" font-weight="700" font-family="monospace">28.8%</text>
<text x="140" y="377" text-anchor="end" fill="#92a59c" font-size="12" font-family="monospace">1 : 5</text>
<rect x="150" y="362" width="78.5" height="15" rx="4" fill="#3f6f5f" fill-opacity="0.9" class="bar-grow"/>
<text x="236.5" y="374" fill="#7fb89b" font-size="11" font-family="monospace">16.7%</text>
<rect x="150" y="382" width="112.8" height="15" rx="4" fill="#f2a33c" fill-opacity="0.9" class="bar-grow"/>
<text x="270.8" y="394" fill="#f2a33c" font-size="11" font-weight="700" font-family="monospace">24.0%</text>
<text x="340" y="426" text-anchor="middle" fill="#92a59c" font-size="11">Costs shift every row upward — brutally for tight scalps, gently for wide targets</text>
</svg>
<figcaption>Same risk-reward rows, two realities. At the worked example&#8217;s cost level a 1:1 setup needs 72% — not the textbook 50% — and a 1:0.5 scalp needs 96%, effectively untradeable.</figcaption>
</figure>

### The Indian Cost Stack: Doing the Arithmetic Yourself

Now the article's own deliverable: a real Indian F&O cost stack you can copy and adjust. Take a typical intraday options scalp — one lot of 25, entry premium ₹150 (notional ₹3,750 per side), a 5% target (+₹187.50) and a 5% stop (−₹187.50), a 1:1 setup.

Fee figures below are as of **2026-10-06** (verified 2026-10-06); broker fee pages can change without notice.

| Cost component | Buy side (₹3,750) | Sell side (₹3,937.50) |
|----------------|------------------|-----------------------|
| Brokerage (flat ₹20 per executed order at discount brokers, e.g. a discount broker's charges page) | ₹20.00 | ₹20.00 |
| STT: 0.15% on sell-side options premium; buy side nil (raised from 0.10% by Budget 2026, effective 2026-04-01) | — | ₹5.91 |
| Stamp duty: 0.003% on buy side | ₹0.11 | — |
| Transaction charges (NSE): 0.03553% of premium | ₹1.33 | ₹1.40 |
| SEBI charges: ₹10/crore | ≈ ₹0.00 | ≈ ₹0.00 |
| GST: 18% on (brokerage + transaction + SEBI charges) | ₹3.84 | ₹3.85 |
| **Subtotal per side** | **₹25.28** | **₹31.16** |
| **Round-trip fees** | **₹56.44** | |

That is ₹56.44 of certain cost on every round trip — **1.5% of the ₹3,750 notional**. Then comes the one cost no fee table will give you: **slippage**. There is no authoritative figure for typical Indian intraday-scalper slippage, so treat any number here as your own labeled assumption. Assume ₹0.50 per unit per side on a 25-unit lot: ₹25.00 per round trip, or 0.7% of notional. Substitute your own measured slippage — the arithmetic works identically.

**Total round-trip cost c = ₹56.44 + ₹25.00 = ₹81.44 ≈ 2.2% of notional.**

Feed it into the formula with a = b = 5%:

p = (5 + 2.2) ÷ (5 + 5) = 7.2 ÷ 10 = **72%**

The textbook said 50%. Your real breakeven at 1:1 is **72%**. A scalper winning 60% of these trades — feeling good about a "winning" strategy — is bleeding money on every cycle.

Now watch what happens across risk-reward ratios at this cost level (5% stop, cost c ≈ 2.2%):

| Your R:R | Pre-cost breakeven | With-costs breakeven |
|----------|-------------------|----------------------|
| 1 : 0.5 | 66.7% | 96.0% |
| 1 : 1 | 50.0% | 72.0% |
| 1 : 1.5 | 40.0% | 57.6% |
| 1 : 2 | 33.3% | 48.0% |
| 1 : 3 | 25.0% | 36.0% |
| 1 : 4 | 20.0% | 28.8% |
| 1 : 5 | 16.7% | 24.0% |

Every row above is computed at the worked example's cost level (5% stop, round-trip cost c ≈ 2.2%). Your own cost stack moves every row with it — substitute your numbers and the whole column shifts.

Two lessons. First, costs are regressive: they punish tight, small-target setups brutally (a 1:0.5 scalp needs 96% — essentially untradeable at these costs) and matter less as targets widen. Second, the textbook column is the one most calculators hand you, and for an Indian options scalper every entry in it is wrong by a double-digit margin.

A note on the exercised-options corner of the stack: if you hold an in-the-money option into expiry instead of squaring off, STT is 0.15% of the intrinsic value (raised from 0.125% by Budget 2026, effective 2026-04-01) — a different, heavier charge than the sell-side premium STT. Equity futures sellers face 0.05% STT. And remember: options can expire worthless, which is a 100% loss on the premium paid — no formula rescues a strategy that ignores expiry risk.

---

## The Flipped Question: What R:R Do You Need at Your Win Rate?

"What win rate do I need to be profitable?" is the question traders type into search boxes — and it is slightly the wrong question. It asks the formula to predict from your plan. The sharper question runs the other way: *you already know your win rate from your journal — what risk-reward ratio must your setups average to keep that win rate profitable?*

Invert the breakeven identity and you get:

**Minimum R:R = (1 ÷ win rate) − 1**

So a trader with a journaled 30% win rate needs setups averaging at least **1:2.33** (1 ÷ 0.30 − 1 = 3.333 − 1 = 2.333) just to break even before costs. With costs, the required ratio is higher still — which is why the flipped formula is a starting filter, and the with-costs breakeven from your own numbers is the real test.

| Your realized win rate | Minimum R:R to break even (pre-costs) |
|------------------------|--------------------------------------|
| 20% | 1 : 4.00 |
| 25% | 1 : 3.00 |
| 30% | 1 : 2.33 |
| 35% | 1 : 1.86 |
| 40% | 1 : 1.50 |
| 50% | 1 : 1.00 |
| 60% | 1 : 0.67 |

Use this as a sanity filter on your trade log: if your journaled win rate is 40% but your average realized risk-reward is 1:1.2, the arithmetic says the strategy cannot work — before you have paid a rupee of brokerage. No amount of entry-timing refinement fixes a combination that fails the flipped test.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 452" role="img" aria-label="Break-even win rate curve showing the profitable zone above the line and the bleed zone below, across risk-reward ratios" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">The breakeven line: p = 1 &#247; (1 + R)</text>
<path d="M 90.0 166.7 L 96.8 168.7 L 103.5 170.8 L 110.3 172.9 L 117.0 175.0 L 123.8 177.1 L 130.5 179.3 L 137.3 181.4 L 144.0 183.6 L 150.8 185.8 L 157.5 188.0 L 164.2 190.2 L 171.0 192.5 L 177.8 194.7 L 184.5 196.9 L 191.2 199.2 L 198.0 201.5 L 204.8 203.7 L 211.5 206.0 L 218.2 208.3 L 225.0 210.6 L 231.8 212.9 L 238.5 215.2 L 245.2 217.5 L 252.0 219.8 L 258.8 222.1 L 265.5 224.4 L 272.2 226.7 L 279.0 229.0 L 285.8 231.3 L 292.5 233.6 L 299.2 235.9 L 306.0 238.2 L 312.8 240.4 L 319.5 242.7 L 326.2 244.9 L 333.0 247.2 L 339.8 249.4 L 346.5 251.6 L 353.2 253.8 L 360.0 256.0 L 366.8 258.2 L 373.5 260.4 L 380.2 262.5 L 387.0 264.6 L 393.8 266.8 L 400.5 268.9 L 407.2 270.9 L 414.0 273.0 L 420.8 275.0 L 427.5 277.1 L 434.2 279.1 L 441.0 281.0 L 447.7 283.0 L 454.5 284.9 L 461.2 286.8 L 468.0 288.7 L 474.8 290.6 L 481.5 292.4 L 488.2 294.3 L 495.0 296.0 L 501.8 297.8 L 508.5 299.6 L 515.2 301.3 L 522.0 303.0 L 528.8 304.7 L 535.5 306.3 L 542.2 307.9 L 549.0 309.5 L 555.8 311.1 L 562.5 312.6 L 569.2 314.1 L 576.0 315.6 L 582.8 317.1 L 589.5 318.5 L 596.2 320.0 L 603.0 321.4 L 609.8 322.7 L 616.5 324.1 L 623.2 325.4 L 630.0 326.7 L 630.0 60.0 L 90.0 60.0 Z" fill="#14d991" fill-opacity="0.08"/>
<path d="M 90.0 166.7 L 96.8 168.7 L 103.5 170.8 L 110.3 172.9 L 117.0 175.0 L 123.8 177.1 L 130.5 179.3 L 137.3 181.4 L 144.0 183.6 L 150.8 185.8 L 157.5 188.0 L 164.2 190.2 L 171.0 192.5 L 177.8 194.7 L 184.5 196.9 L 191.2 199.2 L 198.0 201.5 L 204.8 203.7 L 211.5 206.0 L 218.2 208.3 L 225.0 210.6 L 231.8 212.9 L 238.5 215.2 L 245.2 217.5 L 252.0 219.8 L 258.8 222.1 L 265.5 224.4 L 272.2 226.7 L 279.0 229.0 L 285.8 231.3 L 292.5 233.6 L 299.2 235.9 L 306.0 238.2 L 312.8 240.4 L 319.5 242.7 L 326.2 244.9 L 333.0 247.2 L 339.8 249.4 L 346.5 251.6 L 353.2 253.8 L 360.0 256.0 L 366.8 258.2 L 373.5 260.4 L 380.2 262.5 L 387.0 264.6 L 393.8 266.8 L 400.5 268.9 L 407.2 270.9 L 414.0 273.0 L 420.8 275.0 L 427.5 277.1 L 434.2 279.1 L 441.0 281.0 L 447.7 283.0 L 454.5 284.9 L 461.2 286.8 L 468.0 288.7 L 474.8 290.6 L 481.5 292.4 L 488.2 294.3 L 495.0 296.0 L 501.8 297.8 L 508.5 299.6 L 515.2 301.3 L 522.0 303.0 L 528.8 304.7 L 535.5 306.3 L 542.2 307.9 L 549.0 309.5 L 555.8 311.1 L 562.5 312.6 L 569.2 314.1 L 576.0 315.6 L 582.8 317.1 L 589.5 318.5 L 596.2 320.0 L 603.0 321.4 L 609.8 322.7 L 616.5 324.1 L 623.2 325.4 L 630.0 326.7 L 630.0 380.0 L 90.0 380.0 Z" fill="#ff4f65" fill-opacity="0.08"/>
<path d="M 90.0 166.7 L 96.8 168.7 L 103.5 170.8 L 110.3 172.9 L 117.0 175.0 L 123.8 177.1 L 130.5 179.3 L 137.3 181.4 L 144.0 183.6 L 150.8 185.8 L 157.5 188.0 L 164.2 190.2 L 171.0 192.5 L 177.8 194.7 L 184.5 196.9 L 191.2 199.2 L 198.0 201.5 L 204.8 203.7 L 211.5 206.0 L 218.2 208.3 L 225.0 210.6 L 231.8 212.9 L 238.5 215.2 L 245.2 217.5 L 252.0 219.8 L 258.8 222.1 L 265.5 224.4 L 272.2 226.7 L 279.0 229.0 L 285.8 231.3 L 292.5 233.6 L 299.2 235.9 L 306.0 238.2 L 312.8 240.4 L 319.5 242.7 L 326.2 244.9 L 333.0 247.2 L 339.8 249.4 L 346.5 251.6 L 353.2 253.8 L 360.0 256.0 L 366.8 258.2 L 373.5 260.4 L 380.2 262.5 L 387.0 264.6 L 393.8 266.8 L 400.5 268.9 L 407.2 270.9 L 414.0 273.0 L 420.8 275.0 L 427.5 277.1 L 434.2 279.1 L 441.0 281.0 L 447.7 283.0 L 454.5 284.9 L 461.2 286.8 L 468.0 288.7 L 474.8 290.6 L 481.5 292.4 L 488.2 294.3 L 495.0 296.0 L 501.8 297.8 L 508.5 299.6 L 515.2 301.3 L 522.0 303.0 L 528.8 304.7 L 535.5 306.3 L 542.2 307.9 L 549.0 309.5 L 555.8 311.1 L 562.5 312.6 L 569.2 314.1 L 576.0 315.6 L 582.8 317.1 L 589.5 318.5 L 596.2 320.0 L 603.0 321.4 L 609.8 322.7 L 616.5 324.1 L 623.2 325.4 L 630.0 326.7" fill="none" stroke="#f2f7f4" stroke-width="2.5"/>
<line x1="90.0" y1="380" x2="90.0" y2="386" stroke="#3a4a44"/>
<text x="90.0" y="402" text-anchor="middle" fill="#92a59c" font-size="11" font-family="monospace">1:0.5</text>
<line x1="252.6" y1="380" x2="252.6" y2="386" stroke="#3a4a44"/>
<text x="252.6" y="402" text-anchor="middle" fill="#92a59c" font-size="11" font-family="monospace">1:1</text>
<line x1="347.6" y1="380" x2="347.6" y2="386" stroke="#3a4a44"/>
<text x="347.6" y="402" text-anchor="middle" fill="#92a59c" font-size="11" font-family="monospace">1:1.5</text>
<line x1="415.1" y1="380" x2="415.1" y2="386" stroke="#3a4a44"/>
<text x="415.1" y="402" text-anchor="middle" fill="#92a59c" font-size="11" font-family="monospace">1:2</text>
<line x1="510.2" y1="380" x2="510.2" y2="386" stroke="#3a4a44"/>
<text x="510.2" y="402" text-anchor="middle" fill="#92a59c" font-size="11" font-family="monospace">1:3</text>
<line x1="630.0" y1="380" x2="630.0" y2="386" stroke="#3a4a44"/>
<text x="630.0" y="402" text-anchor="middle" fill="#92a59c" font-size="11" font-family="monospace">1:5</text>
<line x1="84" y1="380.0" x2="90" y2="380.0" stroke="#3a4a44"/>
<text x="78" y="384.0" text-anchor="end" fill="#92a59c" font-size="11" font-family="monospace">0%</text>
<line x1="84" y1="300.0" x2="90" y2="300.0" stroke="#3a4a44"/>
<text x="78" y="304.0" text-anchor="end" fill="#92a59c" font-size="11" font-family="monospace">25%</text>
<line x1="84" y1="220.0" x2="90" y2="220.0" stroke="#3a4a44"/>
<text x="78" y="224.0" text-anchor="end" fill="#92a59c" font-size="11" font-family="monospace">50%</text>
<line x1="84" y1="140.0" x2="90" y2="140.0" stroke="#3a4a44"/>
<text x="78" y="144.0" text-anchor="end" fill="#92a59c" font-size="11" font-family="monospace">75%</text>
<line x1="84" y1="60.0" x2="90" y2="60.0" stroke="#3a4a44"/>
<text x="78" y="64.0" text-anchor="end" fill="#92a59c" font-size="11" font-family="monospace">100%</text>
<text x="480" y="150" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">PROFITABLE ZONE</text>
<text x="480" y="168" text-anchor="middle" fill="#7fb89b" font-size="11">above the line</text>
<text x="300" y="330" text-anchor="middle" fill="#ff4f65" font-size="13" font-weight="700">BLEED ZONE</text>
<text x="300" y="348" text-anchor="middle" fill="#c98a92" font-size="11">below the line</text>
<circle cx="252.6" cy="220.0" r="5" fill="#f2a33c" stroke="#0b1512" stroke-width="2"/>
<text x="264.6" y="210.0" fill="#f2a33c" font-size="11" font-family="monospace">1:1 &#8594; 50%</text>
<circle cx="415.1" cy="273.3" r="5" fill="#f2a33c" stroke="#0b1512" stroke-width="2"/>
<text x="427.1" y="263.3" fill="#f2a33c" font-size="11" font-family="monospace">1:2 &#8594; 33.3%</text>
<circle cx="510.2" cy="300.0" r="5" fill="#f2a33c" stroke="#0b1512" stroke-width="2"/>
<text x="522.2" y="290.0" fill="#f2a33c" font-size="11" font-family="monospace">1:3 &#8594; 25%</text>
<text x="360" y="436" text-anchor="middle" fill="#92a59c" font-size="11">Risk-reward ratio (R:R) — locate your own (win rate, R:R) point: above the line is a candidate edge, below it bleeds</text>
</svg>
<figcaption>The threshold, drawn once: everything above the curve can pay, everything below it cannot. The forecast — whether your setups actually land there — comes from your journal.</figcaption>
</figure>

---

## Your Planned Breakeven Is Lying to You

Most traders compute their breakeven from the plan: "I trade 1:2, so I need 33.3%." Then they trade something else entirely — targets cut short at the first sign of trouble, stops that slip past the planned level, entries chased after the move. The *planned* R:R is a fantasy; the *realized* average win and average loss are the truth. Call it the dishonest breakeven: the gap between the number you computed from your plan and the number your actual trades produce.

The fix is to compute breakeven **twice**:

1. **From the plan** — your intended average win, average loss, and cost per trade.
2. **From your last 30 closed trades** — your realized average win, realized average loss, and realized average cost per trade. The gap between the two is the number you should actually trade against.

A worked example. A trader's plan says 1:2, so the planned pre-cost breakeven is 33.3%. But the last 30 closed trades tell a different story: 12 wins averaging ₹800, 18 losses averaging ₹500, average round-trip cost ₹60 per trade.

- Realized win rate: 12 ÷ 30 = **40%** — above the planned 33.3%. Looking good?
- Realized R:R: 800 ÷ 500 = **1.6** — not the planned 2.0.
- Realized with-costs breakeven: (500 + 60) ÷ (800 + 500) = 560 ÷ 1300 = **43.1%**.

The trader is winning 40% against a real breakeven of 43.1%. Gross P&L: ₹9,600 − ₹9,000 = +₹600. Costs: 30 × ₹60 = ₹1,800. **Net: −₹1,200.** A "winning" month by the plan's math, a losing month in reality. The plan's breakeven was 10 points too optimistic.

Two honest notes about the "last 30 trades" convention. First, 30 closed trades is a starting snapshot, not statistical proof of an edge — journaling references suggest at least 50, ideally 100+, before a win/loss ratio reflects something real rather than variance. Start with 30 so the exercise actually gets done; keep updating it as the sample grows.

Second, computing from realized numbers only works if your journal records scratch trades honestly — which brings us to the next problem.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Planned versus realized break-even worksheet comparing plan numbers against last 30 trades" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">The two-breakeven worksheet</text>
<text x="250" y="62" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">From the plan</text>
<text x="510" y="62" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">From the last 30 closed trades</text>
<line x1="380" y1="44" x2="380" y2="288" stroke="#1c2a25"/>
<text x="120" y="101" fill="#92a59c" font-size="12">Average win (Rs)</text>
<line x1="120" y1="112" x2="280" y2="112" stroke="#3a4a44" stroke-dasharray="6 4"/>
<line x1="440" y1="112" x2="600" y2="112" stroke="#3a4a44" stroke-dasharray="6 4"/>
<text x="120" y="149" fill="#92a59c" font-size="12">Average loss (Rs)</text>
<line x1="120" y1="160" x2="280" y2="160" stroke="#3a4a44" stroke-dasharray="6 4"/>
<line x1="440" y1="160" x2="600" y2="160" stroke="#3a4a44" stroke-dasharray="6 4"/>
<text x="120" y="197" fill="#92a59c" font-size="12">Cost per trade (Rs)</text>
<line x1="120" y1="208" x2="280" y2="208" stroke="#3a4a44" stroke-dasharray="6 4"/>
<line x1="440" y1="208" x2="600" y2="208" stroke="#3a4a44" stroke-dasharray="6 4"/>
<text x="120" y="245" fill="#92a59c" font-size="12">With-costs breakeven (%)</text>
<line x1="120" y1="256" x2="280" y2="256" stroke="#3a4a44" stroke-dasharray="6 4"/>
<line x1="440" y1="256" x2="600" y2="256" stroke="#3a4a44" stroke-dasharray="6 4"/>
<rect x="60" y="292" width="560" height="64" rx="10" fill="#f2a33c" fill-opacity="0.12" stroke="#f2a33c" stroke-width="1.5"/>
<text x="340" y="314" text-anchor="middle" fill="#f2a33c" font-size="13" font-weight="700">GAP = realized win rate &#8722; with-costs breakeven</text>
<text x="340" y="336" text-anchor="middle" fill="#d9c8a6" font-size="11">Above 5 points: healthy &#183; below it: a cost problem, a realization problem, or both</text>
<text x="340" y="384" text-anchor="middle" fill="#92a59c" font-size="11">The plan&#8217;s breakeven is a fantasy; the realized one is the number you trade against</text>
</svg>
<figcaption>Compute breakeven twice — once from what you planned, once from what your last 30 closed trades actually did. The gap between them is the honest number.</figcaption>
</figure>

---

## Breakeven Is a Threshold, Not a Forecast

A 25% breakeven at 1:3 tells you what your strategy *must achieve*. It says nothing about whether your entries *actually reach* a 1:3 target at that frequency. This is the delusion the breakeven table quietly enables: a trader picks a wide target on paper, reads "25%," and feels the strategy is validated — when the table cannot know anything about their setups' reachability.

The formula is a threshold your results must clear, not a forecast of what they will be. The forecast comes from your journal. Choosing 1:3 does not *create* a 25% breakeven for your trading; it creates a 25% breakeven *if* your realized average win is genuinely three times your realized average loss — which, per the previous section, it usually is not.

Keep this distinction sharp every time you look at the table: the numbers describe the minimum requirement, never the expected outcome.

---

## The Scratch-Trade Problem: What's a "Win," Anyway?

The breakeven formula's "win rate" means wins divided by *all* trades. But trading platforms and traders do not always count that way — and the difference silently breaks the comparison.

One widely documented convention (described by a trading-metrics site's reading of a popular trading platform's strategy reports; the platform's own help documentation was not consulted for this article, so treat the attribution as secondary-sourced) is: **breakeven trades stay in the total trade count but are not counted as wins**. The loss rate equals 1 − win rate only when there are no breakeven trades.

Worked example: 45 wins, 50 losses, 5 breakevens out of 100 trades. Per the formula's definition, the win rate is 45 ÷ 100 = **45%**. A trader who excludes scratches from the denominator gets 45 ÷ 95 = **47.4%** — and then compares *that* against a breakeven computed on the formula's definition. The comparison is meaningless; the two numbers were never measuring the same thing.

This matters most for F&O traders who scratch a lot of trades — moving stops to breakeven is standard defensive practice in options and futures trading, so scratch-heavy logs are the norm, not the exception. If 15% of your trades are scratches, your "win rate" can drift several points from the formula's win rate, and every point of drift is a point of error in your breakeven comparison.

The rule is simple: **state your convention.** Wins ÷ all trades (including scratches) is the formula's definition — use it when comparing against breakeven. If your journal reports something else, convert before you compare.

---

## The Margin-of-Safety Rule: How Far Above Breakeven Are You?

Knowing your breakeven is step one. Knowing how far *above* it you sit is the step that keeps you alive. Define your margin:

**Margin = realized win rate − with-costs breakeven**

Measured in percentage points. A trader with a 45% realized win rate and a 38% with-costs breakeven has a 7-point margin. A trader at 40% against a 39% breakeven has a 1-point margin — and is one bad month of variance away from net losses.

Use this as a standing journal rule — the article's own five-zone version, tuned for Indian retail traders:

- **Strong margin (15+ points):** the strategy survives bad months. Keep doing what you are doing.
- **Healthy margin (5–15 points):** workable, but watch the trend across quarters.
- **Thin margin (1–5 points):** variance-bait. A normal losing streak can drag the realized win rate below breakeven for months.
- **Breakeven zone (within ±1 point):** you are working for the broker. Fees and slippage own the outcome.
- **Below breakeven:** losing. Change the strategy, the costs, or both — not your confidence.

The ~5-point line deserves emphasis: anything under about five points of margin means ordinary variance, not bad trading, can put you underwater. And this is exactly where the bridge to [Risk of Ruin](/articles/risk-of-ruin-trading/) stands — thin margins plus losing streaks are the ruin path. A strategy can have a positive expectancy and still die to a drawdown its thin margin could not absorb.

---

## The One Line That Connects Breakeven to Expectancy

Everything in this article is one equation away from expectancy:

**Expectancy E = (win rate × average win) − ((1 − win rate) × average loss)**

Set E = 0 — the exact boundary between a profitable and unprofitable strategy — and solve for the win rate. You get the break even win rate formula. The with-costs derivation above *is* the expectancy equation, rearranged. Breakeven is not a separate concept from expectancy; it is expectancy with the answer fixed at zero and the win rate left as the unknown.

That is why traders who outgrow the simple breakeven table — variable position sizes, partial exits, asymmetric costs — graduate to expectancy directly. The full treatment is in [What Is Trading Expectancy?](/articles/what-is-trading-expectancy/).

---

## The Worksheet: Compute Your Two Breakevens

This is the article's core deliverable, in five steps. Do it on paper or in a spreadsheet; the arithmetic is the same.

1. **Write down your plan's numbers.** Intended average win, intended average loss, and your per-trade round-trip cost from the cost stack above (with your own slippage substituted). Compute the planned with-costs breakeven: (loss + cost) ÷ (win + loss).
2. **Build your own round-trip cost %.** Copy the Indian cost-stack table, replace the example's premium and lot size with yours, and insert your measured slippage. This is your c.
3. **Compute the with-costs breakeven from the plan.** This is the number the textbook table was hiding from you.
4. **Pull your last 30 closed trades.** Realized average win, realized average loss (use the scratch-trade convention: wins ÷ all trades), realized average cost. Compute the realized with-costs breakeven. Remember: 30 trades is a starting snapshot — keep extending toward 100+ before drawing conclusions about edge.
5. **Compare and set your margin.** Compare your realized win rate against your **realized with-costs breakeven** (step 4) — not your **planned with-costs breakeven** (step 3). Realized win rate minus with-costs breakeven = your margin. Above 5 points: healthy. Below: you have a cost problem, a realization problem, or both — and now you know which.

Stated assumptions, because the formula has limits: average win and loss sizes are treated as constant, and costs as constant per trade. Variable position sizing, scaling in and out, or tiered brokerage break the simple arithmetic — in those cases, skip breakeven and compute expectancy per trade directly.

The worksheet is the call to action. A strategy you have not measured against its own costs is a hobby, not a system.

---

## What This Formula Can't Do (Limitations and Risk)

No formula in this article removes risk from trading, and several limits deserve to be stated plainly:

- **No win rate and risk-reward combination is a guaranteed-profit strategy.** Breakeven is the boundary of losing, not a promise of winning. Markets change, edges decay, and past realized numbers do not predict future ones.
- **Loss of capital is real.** Every trade discussed here can lose money, and leveraged F&O positions can lose it faster than the arithmetic suggests.
- **Leverage risk:** futures and options expose you to moves many times your margin. A breakeven computed on percentages says nothing about whether you can survive the rupee drawdown along the way.
- **Options expiry risk:** options can expire worthless — a total loss of the premium paid. Holding in-the-money options into expiry attracts 0.15% STT on the intrinsic value (Budget 2026, effective 2026-04-01), a heavier charge than the sell-side premium STT.
- **Time-sensitive figures:** STT rates (0.15% options sell-side premium, 0.15% exercised ITM options, 0.05% equity futures; buy-side options STT nil) and broker fee components are stated as of **2026-10-06** (verified 2026-10-06). Budget provisions and broker charges can change; re-verify before relying on them.
- **The 0.07% round-trip cost in the 57%/64% scalper illustration is an assumption from a publicly shared with-costs derivation in an open-source worked example**, not measured Indian retail data. Your costs come from your own cost stack.
- **Slippage has no authoritative Indian-retail figure.** Every slippage number in this article is a labeled assumption for you to replace with your own measured data.
- **No academic provenance is claimed** for the breakeven formula here — it is presented as working trader arithmetic, independently derived, not as a cited academic result.
- **30 trades is a starting snapshot**, not statistical proof of edge.

---

## Frequently Asked Questions

### What is the breakeven win rate formula?

The breakeven win rate formula is **1 ÷ (1 + R:R)**, where R:R is your average win divided by your average loss. With trading costs included, it becomes **(average loss + round-trip cost) ÷ (average win + average loss)**. For example, a 1:2 setup needs 33.3% before costs — but at typical Indian F&O costs, the real number is meaningfully higher (in our worked options-scalp example, a 1:1 setup needed 72%, not the textbook 50%).

### What win rate do I need to be profitable in trading?

There is no single number — it depends on your risk-reward ratio. Before costs: 66.7% at 1:0.5, 50% at 1:1, 40% at 1:1.5, 33.3% at 1:2, 25% at 1:3, 20% at 1:4, 16.7% at 1:5. But the textbook column is not the one you trade against: in our worked Indian options-scalp example, a 1:1 setup that reads 50% in the textbook table needed 72% once brokerage, STT, and slippage were included. The more useful question runs the other way: with your journaled win rate known, the minimum R:R you need is (1 ÷ win rate) − 1 — a 30% win rate needs at least 1:2.33. And every one of these figures rises once Indian brokerage, STT, and slippage are included, so compute the with-costs breakeven from your own numbers.

### Is a higher risk-reward ratio always better?

No. A higher R:R lowers the required win rate, but it also demands that your setups genuinely reach wider targets at the required frequency — and the breakeven formula says nothing about whether they do. A 1:5 target with a 16.7% textbook breakeven is worthless if your entries only reach that target 10% of the time. Wide targets also interact with costs: small wins relative to fixed per-trade costs get eaten alive. Judge a ratio by your *realized* average win and loss from your journal, not by the ratio you planned.

### Does the breakeven calculation include spread and slippage?

The textbook formula does not — it assumes zero costs. The with-costs version in this article does: build your own round-trip cost from the Indian cost stack (brokerage, STT, transaction charges, GST, stamp duty, SEBI charges) and add your own slippage as a labeled assumption, since no authoritative Indian-retail slippage figure exists. In our worked example, fees alone were 1.5% of notional per round trip; slippage assumptions push the total higher. Substitute your measured slippage — the formula works identically with your numbers.

---

---

*Kaizen writes about the mathematics of trading at Monks Of Market — expectancy, risk, and the unglamorous arithmetic behind surviving markets.*

**Educational disclaimer:** This article is for educational purposes only and is not financial advice, investment advice, or a recommendation to trade any instrument. Trading — especially leveraged F&O — carries substantial risk of loss, including losses exceeding your margin. SEBI's FY26 study found ~87.7% of individual Indian F&O traders were net loss-makers. Past or hypothetical performance never guarantees future results. Consult a SEBI-registered investment adviser before making trading decisions.

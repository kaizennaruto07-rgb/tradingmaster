---
title: "Why Backtested Strategies Fail in Live Trading: The 5 Gaps Between the Lab and the Field"
description: "Your backtest was honest — live is a different world. Learn the 5 gaps (execution, cost, data, regime, the trader) and the tests to run before risking capital."
meta_description: "Your backtest was honest — live is a different world. Learn the 5 gaps (execution, cost, data, regime, the trader) and the tests to run before risking capital."
date: 2026-10-12
author: Kaizen
tag: "Strategy validation · Backtesting"
keywords: ["why backtested strategies fail in live trading", "backtest vs live trading", "backtest vs live performance gap", "why does my backtest not work live", "why did my backtest fail in live trading", "backtest slippage costs impact", "how much slippage to add to a backtest", "why do backtests lie"]
---

*Educational content only — not financial advice. Trading involves risk of loss.*


You ran the backtest. It showed a smooth equity curve, a healthy profit factor, drawdowns you could live with. Then you went live — and the same strategy started bleeding. So you asked the obvious question: *why did my backtest show great results but I'm losing money live?*

Here is the short answer: **your backtest was probably honest, and it still told you a fiction.** A backtest is a laboratory. Live trading is the field. The backtest filled your orders at the exact signal price, instantly, at zero slippage, with costs roughly estimated, on clean adjusted data, in one market regime, while following the rules with robotic perfection. Live trading gives you none of that.

This is chapter 3 of the validation week — the execution chapter. [In the first chapter](/articles/how-to-know-if-trading-strategy-works/) you got the verdict framework: the pre-registration contract a strategy must pass before you trust it. [In the second chapter](/articles/how-many-trades-to-validate-a-strategy/) you got the evidence contract: the honest sample size a backtest needs before its numbers mean anything. This chapter prices the five ways reality taxes that evidence — even when the backtest itself was honest and well-sized. Every section below ends with **the test to run** — the same protocol format as the earlier chapters, so the week reads as one diagnostic sequence.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 470" role="img" aria-label="Diagram of the five gaps between backtest laboratory conditions and live trading reality." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The laboratory vs the field</text>
<text x="340" y="52" text-anchor="middle" fill="#92a59c" font-size="12">Five gaps between an honest backtest and live trading</text>
<rect x="16" y="70" width="280" height="330" rx="10" fill="#f2a33c" fill-opacity="0.05" stroke="#2a3a34"/>
<rect x="384" y="70" width="280" height="330" rx="10" fill="#e5484d" fill-opacity="0.05" stroke="#2a3a34"/>
<text x="156" y="100" text-anchor="middle" fill="#f2a33c" font-size="12" font-weight="700" letter-spacing="2">THE LABORATORY</text>
<text x="524" y="100" text-anchor="middle" fill="#e5484d" font-size="12" font-weight="700" letter-spacing="2">THE FIELD</text>
<g fill="#f2f7f4" font-size="11.5">
<circle cx="36" cy="126" r="3" fill="#f2a33c"/><text x="48" y="130">Perfect fills at the signal price</text>
<circle cx="36" cy="156" r="3" fill="#f2a33c"/><text x="48" y="160">Costs roughly estimated</text>
<circle cx="36" cy="186" r="3" fill="#f2a33c"/><text x="48" y="190">Clean, adjusted history</text>
<circle cx="36" cy="216" r="3" fill="#f2a33c"/><text x="48" y="220">One past market regime</text>
<circle cx="36" cy="246" r="3" fill="#f2a33c"/><text x="48" y="250">Emotionless rule-following</text>
<circle cx="404" cy="126" r="3" fill="#e5484d"/><text x="416" y="130">Live fills at the market&#8217;s price</text>
<circle cx="404" cy="156" r="3" fill="#e5484d"/><text x="416" y="160">Real costs, fully stacked</text>
<circle cx="404" cy="186" r="3" fill="#e5484d"/><text x="416" y="190">Messy, revised data</text>
<circle cx="404" cy="216" r="3" fill="#e5484d"/><text x="416" y="220">The next regime, unknown</text>
<circle cx="404" cy="246" r="3" fill="#e5484d"/><text x="416" y="250">Human hesitation</text>
</g>
<text x="156" y="360" text-anchor="middle" fill="#92a59c" font-size="11.5" font-style="italic">controlled, repeatable, kind</text>
<text x="524" y="360" text-anchor="middle" fill="#92a59c" font-size="11.5" font-style="italic">adversarial, messy, real</text>
<defs>
<marker id="gap-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#92a59c"/></marker>
</defs>
<g font-size="10.5" fill="#92a59c" text-anchor="middle">
<text x="340" y="118">Execution</text><line x1="304" y1="126" x2="376" y2="126" stroke="#92a59c" stroke-width="1.5" marker-end="url(#gap-arrow)"/>
<text x="340" y="148">Cost</text><line x1="304" y1="156" x2="376" y2="156" stroke="#92a59c" stroke-width="1.5" marker-end="url(#gap-arrow)"/>
<text x="340" y="178">Data</text><line x1="304" y1="186" x2="376" y2="186" stroke="#92a59c" stroke-width="1.5" marker-end="url(#gap-arrow)"/>
<text x="340" y="208">Regime</text><line x1="304" y1="216" x2="376" y2="216" stroke="#92a59c" stroke-width="1.5" marker-end="url(#gap-arrow)"/>
<text x="340" y="238">The trader</text><line x1="304" y1="246" x2="376" y2="246" stroke="#92a59c" stroke-width="1.5" marker-end="url(#gap-arrow)"/>
</g>
<text x="340" y="438" text-anchor="middle" fill="#92a59c" font-size="12.5">Your backtest was probably honest &#8212; and it still told you a fiction.</text>
</svg>
<figcaption>The five gaps between backtest laboratory conditions and live trading reality: execution, cost, data, regime, and the trader.</figcaption>
</figure>

## Gap 1: The execution gap — you filled at the signal price; the market filled you at its price

A backtest's most invisible lie is the fill. Most retail backtests assume your order filled at the exact price the signal appeared, instantly, in full, with zero slippage and no overnight gaps. Live trading imposes different fills, latency between signal and execution, partial fills and rejections, and gaps that skip over your orders entirely. Practitioner modeling guides put typical execution slippage at roughly 0.1–0.5% per trade for ordinary conditions, and 0.05–0.30% for liquid instruments — treat those as heuristics, not constants, because slippage is strategy- and liquidity-dependent.

There is a deeper layer here. In live markets you are not trading against a passive historical dataset. **You are trading against opponents.** Your orders tend to fill most easily exactly when conditions favor the counterparty — you get the clean fill when someone else is happy to take the other side, and you get the slip when the market is running away from your price. The backtest was a rehearsal against a recording. Live is the performance, against an audience that reacts to you. Some execution noise cancels out; the part that doesn't is the part that costs you money systematically.

**The test to run:** pad every backtest with realistic slippage on *every* trade — entries, exits, and stops — using conservative estimates for the instruments you actually trade. Then reconcile your real fills against the assumption for the first twenty trades live. If you consistently fill worse, your edge is smaller than the backtest said.

### Stops bleed more than entries: the stop-loss fill asymmetry

Here is an insight almost nobody puts in retail language, and it is the quietest account-killer in this whole article: **entry slippage roughly averages out over many trades; stop-loss slippage does not.**

Entries miss both ways — sometimes a better price, sometimes worse, roughly netting out over hundreds of trades. But stops are different: gaps and fast moves blow through stop levels *in the losing direction* — the direction the market was already moving when it hit your stop. You rarely get favorable gaps through a stop-loss, because the price motion that reaches a stop is, by definition, moving against you. A backtest that assumes exact stop fills therefore systematically understates your worst losses — the exact losses that determine your risk of ruin. (One practitioner's analysis of this asymmetry, published in September 2026, is the clearest statement of it we have found; the mechanism itself is uncontroversial market mechanics.)

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 440" role="img" aria-label="Illustration comparing symmetric entry slippage with directionally skewed stop-loss slippage." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Entry slippage averages out. Stop slippage does not.</text>
<rect x="16" y="56" width="312" height="300" rx="10" fill="#f2a33c" fill-opacity="0.05" stroke="#2a3a34"/>
<rect x="352" y="56" width="312" height="300" rx="10" fill="#e5484d" fill-opacity="0.05" stroke="#2a3a34"/>
<text x="172" y="86" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Entries</text>
<text x="172" y="106" text-anchor="middle" fill="#92a59c" font-size="11">roughly symmetric &#8212; misses both ways</text>
<text x="508" y="86" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Stop exits</text>
<text x="508" y="106" text-anchor="middle" fill="#92a59c" font-size="11">skewed &#8212; the tail points at your losses</text>
<path d="M 60,300 C 90,300 105,175 172,175 C 239,175 254,300 284,300 L 284,300 L 60,300 Z" fill="#f2a33c" fill-opacity="0.12"/>
<path d="M 60,300 C 90,300 105,175 172,175 C 239,175 254,300 284,300" fill="none" stroke="#f2a33c" stroke-width="2.5"/>
<line x1="172" y1="120" x2="172" y2="300" stroke="#2a3a34" stroke-width="1" stroke-dasharray="3,4"/>
<path d="M 392,300 C 412,300 420,220 458,220 C 488,220 498,242 528,270 C 558,298 600,304 636,306 L 636,306 L 392,306 L 392,300 Z" fill="#e5484d" fill-opacity="0.12"/>
<path d="M 392,300 C 412,300 420,220 458,220 C 488,220 498,242 528,270 C 558,298 600,304 636,306" fill="none" stroke="#e5484d" stroke-width="2.5"/>
<text x="60" y="322" fill="#92a59c" font-size="10.5">better fills</text>
<text x="284" y="322" text-anchor="end" fill="#92a59c" font-size="10.5">worse fills</text>
<text x="172" y="322" text-anchor="middle" fill="#92a59c" font-size="10.5">0</text>
<text x="392" y="322" fill="#92a59c" font-size="10.5">better fills</text>
<text x="636" y="322" text-anchor="end" fill="#92a59c" font-size="10.5">worse fills</text>
<text x="458" y="322" text-anchor="middle" fill="#92a59c" font-size="10.5">0</text>
<defs><marker id="asym-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#e5484d"/></marker></defs>
<text x="560" y="246" text-anchor="middle" fill="#e5484d" font-size="11">long tail of</text>
<text x="560" y="262" text-anchor="middle" fill="#e5484d" font-size="11">adverse gap-throughs</text>
<line x1="588" y1="268" x2="606" y2="290" stroke="#e5484d" stroke-width="1" marker-end="url(#asym-arrow)"/>
<text x="508" y="342" text-anchor="middle" fill="#e5484d" font-size="11.5" font-weight="700">stops bleed in the losing direction</text>
<text x="340" y="398" text-anchor="middle" fill="#92a59c" font-size="12">Indian frame: expiry-week gaps and overnight event risk hit stops hardest.</text>
</svg>
<figcaption>Entry slippage is roughly symmetric around zero, while stop-loss slippage is skewed with a long tail of adverse gap-throughs in the losing direction.</figcaption>
</figure>

For Indian traders, the frame is immediate: expiry-week gaps, overnight event risk on index options, and the opening spike on news days.

**The test to run:** add a dedicated stop-fill penalty to the backtest — model stop exits with an extra penalty beyond normal slippage, reflecting the worst gap-through you have actually seen in your instrument. Then reconcile live: on every stopped-out trade, record your assumed stop price and your actual fill. If the penalty you modeled covers reality, the backtest's loss distribution is honest. If not, raise it until it does.

## Gap 2: The cost gap — live costs are bigger and hide where the backtest ignored them

The backtest estimated costs — a flat brokerage number, maybe a percentage for charges. Live costs are larger, and they arrive where the backtest never looked: exchange transaction charges, SEBI turnover fees, stamp duty, GST stacked on top of those, and the bid-ask spread you pay every time you cross it. In Indian F&O, this stack is not a rounding error.

We priced the full statutory stack line by line in [chapter 1](/articles/how-to-know-if-trading-strategy-works/) — brokerage, STT, exchange transaction charges, stamp duty, SEBI fee, GST — so this chapter will not re-derive it. The compact result for the standard example (buy one NIFTY lot of 50 at ₹100 premium, exit at ₹110, ₹500 gross): **buy leg ≈ ₹25.86, sell leg ≈ ₹34.16** — about ₹60 of statutory friction on the round trip. All figures were verified against official charge schedules on 2026-10-12. One honest line before we move on: statutory charge schedules can be revised, so check the current official schedule before relying on the exact rupee figures.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 380" role="img" aria-label="Stacked bar of Indian F&O transaction costs on one option round trip." class="viz">
<defs>
<pattern id="hatch-spread" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
<rect width="8" height="8" fill="#f2a33c" fill-opacity="0.15"/><line x1="0" y1="0" x2="0" y2="8" stroke="#f2a33c" stroke-width="2"/>
</pattern>
<pattern id="hatch-slip" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
<rect width="8" height="8" fill="#e5484d" fill-opacity="0.15"/><line x1="0" y1="0" x2="0" y2="8" stroke="#e5484d" stroke-width="2"/>
</pattern>
</defs>
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">One NIFTY option round trip: the full friction stack</text>
<text x="340" y="52" text-anchor="middle" fill="#92a59c" font-size="12">Buy 1 lot (50) at &#8377;100, exit at &#8377;110 &#8212; &#8377;500 gross move</text>
<text x="150" y="76" text-anchor="middle" fill="#92a59c" font-size="11">statutory &#8776; &#8377;60</text>
<text x="430" y="76" text-anchor="middle" fill="#92a59c" font-size="11">illustrative estimates</text>
<rect x="40" y="88" width="136" height="46" fill="#f2a33c"/>
<rect x="176" y="88" width="28" height="46" fill="#d98a2b"/>
<rect x="204" y="88" width="13" height="46" fill="#14d991"/>
<rect x="217" y="88" width="16" height="46" fill="#0fa371"/>
<rect x="233" y="88" width="27" height="46" fill="#92a59c"/>
<rect x="260" y="88" width="170" height="46" fill="url(#hatch-spread)" stroke="#f2a33c" stroke-width="1"/>
<rect x="430" y="88" width="170" height="46" fill="url(#hatch-slip)" stroke="#e5484d" stroke-width="1"/>
<text x="108" y="117" text-anchor="middle" fill="#14100a" font-size="13" font-weight="700">&#8377;40</text>
<text x="345" y="117" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">&#8377;50</text>
<text x="515" y="117" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">&#8377;50</text>
<text x="606" y="117" fill="#f2f7f4" font-size="13" font-weight="700">&#8776; &#8377;160</text>
<g font-size="11.5" fill="#f2f7f4">
<rect x="40" y="162" width="12" height="12" fill="#f2a33c"/><text x="60" y="172">Brokerage &#8212; &#8377;20 per order &#215; 2 = &#8377;40</text>
<rect x="40" y="186" width="12" height="12" fill="#d98a2b"/><text x="60" y="196">STT &#8212; 0.15% on sell premium = &#8377;8.25</text>
<rect x="40" y="210" width="12" height="12" fill="#14d991"/><text x="60" y="220">Exchange charge &#8212; 0.03503%/side = &#8377;3.68</text>
<rect x="40" y="234" width="12" height="12" fill="#0fa371"/><text x="60" y="244">Stamp duty + SEBI fee = &#8377;0.16</text>
<rect x="360" y="162" width="12" height="12" fill="#92a59c"/><text x="380" y="172">GST &#8212; 18% on brokerage + exchange + SEBI = &#8377;7.86</text>
<rect x="360" y="186" width="12" height="12" fill="url(#hatch-spread)" stroke="#f2a33c"/><text x="380" y="196">Bid-ask spread = &#8377;50 <tspan fill="#92a59c">(illustrative)</tspan></text>
<rect x="360" y="210" width="12" height="12" fill="url(#hatch-slip)" stroke="#e5484d"/><text x="380" y="220">Slippage &#8377;0.50/leg &#215; 2 = &#8377;50 <tspan fill="#92a59c">(illustrative)</tspan></text>
</g>
<text x="40" y="286" fill="#92a59c" font-size="11">Stamp duty + SEBI enlarged for visibility (&#8377;0.16 combined).</text>
<text x="340" y="328" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Full friction &#8776; &#8377;150&#8211;160 &#8212; nearly a third of the &#8377;500 gross move.</text>
</svg>
<figcaption>Stacked bar of Indian F&amp;O transaction costs on one NIFTY option round trip: about sixty rupees of statutory charges plus illustrative spread and slippage estimates, totaling roughly one hundred fifty to one hundred sixty rupees.</figcaption>
</figure>

### Where backtests actually bleed: the costs that never entered the model

The statutory stack is the part your backtest *might* have modeled. The costs that kill backtests are the ones that never entered the model at all:

**Option-buyer spread realities.** Most retail backtests value trades at mid-price — the average of bid and ask. Live, you buy the ask and sell the bid: you pay the full spread, every round trip. On a ₹100 option, a ₹1–2 wide spread is another ₹50–100 of friction per lot of 50 — often larger than the average win on tight setups. The backtest shows a pretty win rate; live, the spread eats the entire target before the trade even has a chance.

**Expiry-day execution costs.** Spreads widen, liquidity thins, and slippage spikes on expiry day — exactly when many retail option strategies take most of their trades. A backtest that averaged costs across the week understates the costs on the day the strategy actually trades.

**The ITM-expiry STT trap, as it applies to backtests.** A backtest that holds a long option into expiry prices the trade at settlement value — it never pays the STT on intrinsic value that a live exercised ITM option actually owes ([the trap itself is stated in chapter 1](/articles/how-to-know-if-trading-strategy-works/)). If your backtest holds through expiry, its winning trades are overstated by exactly the cost it ignored.

Add a modest spread and ₹0.50 slippage per leg to the statutory ≈₹60 and total friction approaches **₹150–160** — nearly a third of the ₹500 gross move. Carry this away: for the typical NIFTY option round trip in the worked example, full friction lands around ₹150–160 — use that as your mental per-trade floor.

And frequency: none of these numbers hurt once. A strategy that trades 5 times a day pays the stack 5 times a day.

**The test to run:** take your last backtest and rebuild the cost model — brokerage per order, STT on the correct side, exchange charges, stamp duty, SEBI fee, GST on the subtotal, plus the spread you would actually cross and a realistic slippage figure. If your backtest tool only accepts a single "commission" field, set it to the full stacked friction, not just brokerage.

### The tightness ratio: your average win divided by your per-trade friction

Here is the one ratio that decides whether a strategy has any margin for reality:

**Tightness ratio = average winning trade (gross) ÷ total friction per trade**

A strategy whose average win is small relative to its per-trade friction has no margin for the field. Half a point of unexpected slippage *is its whole edge*. If your average win is ₹400 and your friction is ₹160, the ratio is 2.5 — you have room. If your average win is ₹150 against ₹160 of friction, the ratio is below 1: **you are running a friction-transfer machine**, moving money from your account to the exchange and your broker, no matter how clever the signal. This is also why friction attacks the [profit factor](/articles/profit-factor/) directly — every rupee of cost is subtracted from gross profit and added to gross loss.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 470" role="img" aria-label="Diagram comparing a healthy tightness ratio against a ratio below one." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The tightness ratio: average win &#247; per-trade friction</text>
<rect x="110" y="290" width="460" height="70" fill="#e5484d" fill-opacity="0.10"/>
<line x1="110" y1="290" x2="570" y2="290" stroke="#e5484d" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="340" y="330" text-anchor="middle" fill="#e5484d" font-size="12">below 1 &#8212; the backtest was donating to the exchange</text>
<line x1="110" y1="220" x2="570" y2="220" stroke="#f2a33c" stroke-width="1" stroke-dasharray="5,4"/>
<text x="564" y="208" text-anchor="end" fill="#f2a33c" font-size="11">2.0 &#8212; fragile below this</text>
<g fill="#92a59c" font-size="11" text-anchor="end">
<text x="100" y="364">0</text><text x="100" y="294">1</text><text x="100" y="224">2</text><text x="100" y="154">3</text><text x="100" y="84">4</text>
</g>
<rect x="170" y="143" width="120" height="217" rx="6" fill="#14d991" fill-opacity="0.85"/>
<rect x="390" y="294" width="120" height="66" rx="6" fill="#e5484d" fill-opacity="0.85"/>
<text x="230" y="128" text-anchor="middle" fill="#14d991" font-size="17" font-weight="700">3.1</text>
<text x="450" y="282" text-anchor="middle" fill="#e5484d" font-size="17" font-weight="700">0.94</text>
<text x="230" y="384" text-anchor="middle" fill="#f2f7f4" font-size="12">Avg win &#8377;500 &#183; friction &#8377;160</text>
<text x="230" y="404" text-anchor="middle" fill="#14d991" font-size="12" font-weight="700">healthy margin</text>
<text x="450" y="384" text-anchor="middle" fill="#f2f7f4" font-size="12">Avg win &#8377;150 &#183; friction &#8377;160</text>
<text x="450" y="404" text-anchor="middle" fill="#e5484d" font-size="12" font-weight="700">friction-transfer machine</text>
<text x="340" y="444" text-anchor="middle" fill="#92a59c" font-size="11">Bands are this article&#8217;s working rule of thumb, not an industry standard.</text>
</svg>
<figcaption>The tightness ratio compares average win to per-trade friction: 3.1 is a healthy margin, 0.94 sits below the red line at 1 — a friction-transfer machine.</figcaption>
</figure>

The Indian frame that makes this concrete: option-buying scalps backtested on mid-prices. On tight targets, the bid-ask spread alone can exceed the average win. The backtest shows a pretty win rate; live, the spread eats the entire target before the trade even has a chance.

**The test to run:** compute the tightness ratio from your backtest's average win and the full friction stack from the previous section. Below 2, treat the strategy as fragile. Below 1, do not trade it. These bands are this article's own working rule of thumb, not an industry standard.

### The test to run: the double-cost stress test

This is the centerpiece of the article, and it is simple enough to actually do: **re-run your backtest with every cost doubled — brokerage, charges, the spread, and slippage all at 2× — and check whether the strategy still survives.**

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 520" role="img" aria-label="Flowchart of the double-cost stress test decision." class="viz">
<defs><marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#92a59c"/></marker></defs>
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The double-cost stress test</text>
<rect x="150" y="56" width="380" height="60" rx="10" fill="#f2a33c" fill-opacity="0.08" stroke="#2a3a34"/>
<text x="340" y="92" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Base backtest with realistic costs</text>
<line x1="340" y1="116" x2="340" y2="146" stroke="#92a59c" stroke-width="2" marker-end="url(#flow-arrow)"/>
<rect x="110" y="146" width="460" height="78" rx="10" fill="#f2a33c" fill-opacity="0.08" stroke="#f2a33c"/>
<text x="340" y="178" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Re-run with ALL costs doubled</text>
<text x="340" y="200" text-anchor="middle" fill="#92a59c" font-size="12">(brokerage, charges, spread, slippage)</text>
<line x1="340" y1="224" x2="340" y2="254" stroke="#92a59c" stroke-width="2" marker-end="url(#flow-arrow)"/>
<polygon points="340,254 442,316 340,378 238,316" fill="#f2f7f4" fill-opacity="0.05" stroke="#f2f7f4" stroke-width="1.5"/>
<text x="340" y="322" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Still profitable?</text>
<line x1="252" y1="336" x2="172" y2="392" stroke="#92a59c" stroke-width="2" marker-end="url(#flow-arrow)"/>
<line x1="428" y1="336" x2="508" y2="392" stroke="#92a59c" stroke-width="2" marker-end="url(#flow-arrow)"/>
<rect x="42" y="392" width="260" height="66" rx="10" fill="#e5484d" fill-opacity="0.08" stroke="#e5484d"/>
<text x="172" y="420" text-anchor="middle" fill="#e5484d" font-size="14" font-weight="700">No &#8594; fantasy</text>
<text x="172" y="442" text-anchor="middle" fill="#92a59c" font-size="12">abandon or redesign</text>
<rect x="378" y="392" width="260" height="66" rx="10" fill="#14d991" fill-opacity="0.08" stroke="#14d991"/>
<text x="508" y="420" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">Yes &#8594; robust</text>
<text x="508" y="442" text-anchor="middle" fill="#92a59c" font-size="12">proceed to out-of-sample</text>
<text x="340" y="494" text-anchor="middle" fill="#92a59c" font-size="12">Passing earns the strategy the right to the next test &#8212; nothing more.</text>
</svg>
<figcaption>The double-cost stress test flowchart: re-run the backtest with every cost doubled — survival means robust, failure means fantasy.</figcaption>
</figure>

One lineage note, because honesty matters here: this test is the protocol version of [chapter 1's rule of thumb](/articles/how-to-know-if-trading-strategy-works/) — where chapter 1 asks that net expectancy clear roughly 2× your all-in round-trip cost, this test re-runs the backtest with all costs doubled and demands survival. Same 2× logic; here it is an operation you perform, not a threshold you eyeball.

The honest caveat, stated plainly: this test proves *robustness to cost uncertainty*. It is not a guarantee of live success. A strategy can survive the double-cost test and still fail live on the other four gaps. Passing the test earns the strategy the right to the next test — nothing more. (This is also the tax on [expectancy](/articles/what-is-trading-expectancy/): expectancy minus unmodeled friction is the number that actually reaches your account.)

## Gap 3: The data gap — the backtest read clean history; you trade messy reality

The backtest used complete, survivorship-cleaned, adjusted historical data. Live data is messy: feeds drop ticks, adjustments arrive late, your broker's vendor revises bars after the fact — and your live signal path may differ from the backtest's signal path. The indicator you coded in your backtesting library and the indicator running on your live charting platform can disagree on edge cases: different smoothing, different handling of incomplete bars, a rounding difference in the data feed. If the live path fires signals the backtest never saw, you are not trading your backtest's strategy. You are trading a cousin of it.

**The test to run:** build the live signal path separately — on the actual platform and data feed you will trade with — and run it side-by-side with the backtest's signals on the same historical days. Reconcile every disagreement before trusting either. Minimum-viable version: for one week, log every signal your live platform fires and compare it against what your backtest said should fire on those same days. Any disagreement is the data gap, priced in one sentence.

## Gap 4: The regime gap — the backtest tested one past; live trades the next market

A backtest is a test of *one past*. Live trades *the next market* — and markets change. Strategies get crowded, edges decay as information spreads, volatility regimes shift. There is real academic evidence for the decay: a well-known study of 97 published stock-return predictors found their returns were **26% lower out-of-sample** than in-sample (McLean & Pontiff, 2016, *Journal of Finance*) — and the decline was larger for the predictors with the most spectacular in-sample returns. The louder the backtest brags, the more of it may have been noise.

On overfitting, one honest paragraph is all this article allows — the deep-dive is its own chapter next week: a strategy that memorized its sample's noise shows exactly this symptom, because out-of-sample is the first taste of data it has never seen. But do not automatically diagnose every live failure as overfitting. Edge decay, crowding, and regime change are real causes too, and they demand different responses (adapt or retire, not re-optimize).

### Some degradation is normal: the backtest-to-live calibration table

Most retail traders have never been told that *some* degradation is normal, so they either expect zero degradation (then panic at the first losing month) or accept anything (then bleed for a year on a dead strategy). One practitioner's calibration framework — guidance, not a law of nature — gives you the bands:

| Live performance vs backtest | Reading |
|---|---|
| Live metric at 70–80% of backtest | Good — normal degradation |
| 50–70% of backtest | Acceptable — monitor closely |
| Below 50% of backtest | Concerning — stop and diagnose |
| Live negative when backtest was positive | Action required — the strategy is broken |

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 420" role="img" aria-label="Calibration table of live versus backtest performance bands." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Backtest-to-live calibration</text>
<text x="340" y="52" text-anchor="middle" fill="#92a59c" font-size="12">Place your first month&#8217;s live results on the table</text>
<rect x="40" y="76" width="480" height="58" rx="8" fill="#14d991" fill-opacity="0.10" stroke="#14d991"/>
<text x="62" y="111" fill="#f2f7f4" font-size="13" font-weight="700">70&#8211;80% of backtest</text>
<text x="300" y="111" fill="#92a59c" font-size="12.5">Good &#8212; normal degradation</text>
<rect x="40" y="144" width="480" height="58" rx="8" fill="#f2a33c" fill-opacity="0.10" stroke="#f2a33c"/>
<text x="62" y="179" fill="#f2f7f4" font-size="13" font-weight="700">50&#8211;70% of backtest</text>
<text x="300" y="179" fill="#92a59c" font-size="12.5">Acceptable &#8212; monitor closely</text>
<rect x="40" y="212" width="480" height="58" rx="8" fill="#e07b39" fill-opacity="0.12" stroke="#e07b39"/>
<text x="62" y="247" fill="#f2f7f4" font-size="13" font-weight="700">Below 50% of backtest</text>
<text x="300" y="247" fill="#92a59c" font-size="12.5">Concerning &#8212; stop and diagnose</text>
<rect x="40" y="280" width="480" height="58" rx="8" fill="#e5484d" fill-opacity="0.10" stroke="#e5484d"/>
<text x="62" y="315" fill="#f2f7f4" font-size="13" font-weight="700">Live negative, backtest positive</text>
<text x="300" y="315" fill="#92a59c" font-size="12.5">Action required &#8212; strategy broken</text>
<line x1="548" y1="76" x2="548" y2="338" stroke="#2a3a34" stroke-width="1" stroke-dasharray="4,4"/>
<polygon points="548,200 560,208 548,216" fill="#f2a33c"/>
<g font-size="12" fill="#92a59c" text-anchor="middle">
<text x="610" y="196">mark your</text>
<text x="610" y="214">first month</text>
<text x="610" y="232">here</text>
</g>
<text x="340" y="384" text-anchor="middle" fill="#92a59c" font-size="11.5">One practitioner&#8217;s framework &#8212; guidance, not a law of nature.</text>
</svg>
<figcaption>Calibration bands for live versus backtest performance: seventy to eighty percent is good, fifty to seventy acceptable, below fifty concerning, and negative live means action required.</figcaption>
</figure>

Treat these as one practitioner's framework, not a peer-reviewed standard. But use them: after your first month live, place your results on the table. If you land below 50%, stop and diagnose — do not double down. Degraded edges also produce longer losing streaks than the backtest showed, which is exactly when the next gap — the trader — breaks. (See [risk of ruin](/articles/risk-of-ruin-trading/) for the streak math under degraded expectancy.)

**The test to run:** demand out-of-sample confirmation *before* going live — a clean, untouched period the strategy has never been tuned on. Then track your live metric against the backtest weekly and plot yourself on the table. It tells you when to persist and when to pull the plug.

## Gap 5: The trader — the backtest never hesitated, never moved the stop, never revenge-traded

The fifth gap is the one nobody prices, and it is you. The backtest followed the rules perfectly: it took every signal, honored every stop, never skipped an entry because the last three lost, never widened a stop because "it might come back," never revenge-traded after a drawdown. The backtest had no fear, no fatigue, no ego. You do.

The realistic failures are unglamorous: skipping the valid setup after two losers (and skipping exactly the winner that would have paid for them), moving the stop "just a little wider" on the trade that becomes the month's biggest loss, doubling size to "make it back." The strategy the backtest validated and the strategy you actually traded are two different strategies — and only one of them has the backtest's numbers.

**The test to run:** forward-test at tiny size — or on paper — for long enough to produce a meaningful sample, and log your *deviations* from the plan, not just your P&L. Skipped entries, moved stops, sized-up trades: count them. If your deviation rate is high, the strategy has not failed — the operator has. Fix the operator before adding capital. (The full paper-vs-real bridge comes in the series' later chapter; treat this test as its audition.)

## The full funnel: how a backtest earns the right to go live

Put the chapters together and you get the decision funnel — one path, no shortcuts:

**Idea → backtest → stress test → out-of-sample → paper → live small.**

The stress test is this article (the double-cost run, the stop-fill penalty, the friction stack). Out-of-sample is the untouched data the strategy never saw. Paper trading runs forward without capital — slower, but it removes look-ahead risk by construction. Live small is the audition at a size where the tuition is affordable. One honest line on our own tool: the [What-If Trade Simulator](/tools/what-if-simulator/) prices sequence risk — the drawdown your sample implies — but it validates nothing and fixes none of these five gaps.

## Risk and limitations: what these tests cannot do

Every strategy discussion on this site carries this, because it is the truth that keeps you solvent:

- **Nothing here guarantees profit.** The double-cost stress test proves robustness to cost uncertainty, not that the strategy will work live.
- **All trading risks loss of capital.** Indian F&O adds leverage risk, expiry risk (including the ITM-expiry STT trap above), and gap risk that backtests structurally understate.
- **The benchmark bands and slippage figures are practitioner heuristics**, not rules of nature — guidance for calibration, not guarantees.
- **Degraded live results are not, by themselves, a diagnosis of overfitting.** They can mean overfitting, cost underestimation, regime change, execution problems, or operator error — diagnose before you act.
- This article is educational content, not financial advice. Size every live test at an amount you can afford to lose completely.

## Questions traders actually ask about backtest vs live performance

### Why did my backtest show great results but I am losing money live?

Because your backtest was a laboratory and live is the field. The backtest filled orders at the signal price with costs roughly estimated, on clean historical data, in one past market regime, while following the rules perfectly. Live differs in five ways: the execution gap (you fill at the market's price, not the signal price), the cost gap (real costs are larger and hide in spreads, charges, and taxes the backtest ignored), the data gap (live data is messy and your live signal path may differ), the regime gap (the market changed), and the trader gap (you do not follow the rules like the backtest did). Work through the five tests above; the failure is usually in one of them.

### Does slippage really matter in backtesting?

It depends on the tightness ratio: your average win divided by per-trade friction. For a swing trader with wide targets, a fraction of a percent of slippage is noise. For a scalper, half a point of slippage per trade can be the entire edge — and frequency multiplies it. For Indian option buyers there is an extra layer: backtests built on mid-prices, but live you buy the ask and sell the bid, paying the full spread every round trip — often larger than the average win on tight setups. Model slippage and spread explicitly; never trust the tool's default.

### Why do my stops get filled worse than my entries?

Entry slippage roughly balances out over many trades — you miss both ways. Stop-loss slippage is directional: gaps blow through stops in the losing direction. A backtest assuming exact stop fills systematically understates the worst losses. The fix is the stop-fill penalty: model stop exits with an extra adverse penalty and reconcile your actual stop fills against it on every trade.

### How much slippage should I add to a backtest?

Start with realistic practitioner estimates for your instrument — liquid NIFTY options behave very differently from illiquid stock-option strikes — then run the double-cost stress test: double every cost, including slippage and the spread. If the strategy survives, it is robust to cost uncertainty. If it only works with perfect fills, it does not work. The exact numbers are estimates; the stress test matters more than any single figure.

### Why do backtests work in-sample but fail out-of-sample?

In-sample, a strategy can memorize the sample's noise — patterns that existed by chance in that specific period. Out-of-sample is the first taste of data the strategy has never seen, and chance patterns do not repeat. The industry's published research points the same way: one widely discussed analysis of crowd-sourced strategies found backtest performance offered little predictive value for out-of-sample results, and in the McLean–Pontiff academic study, published predictors lost about 26% out-of-sample. (How strategies memorize noise — and how to detect it — gets its own chapter next week.)

### Why is there such a big gap between backtest and live performance?

Some gap is normal — and most traders were never told that. One practitioner's calibration framework: live performance at 70–80% of the backtest is good, 50–70% is acceptable, below 50% is concerning, and a live strategy going negative when the backtest was positive needs action. If your gap is larger than the bands allow, work the five gaps above.

### Does a backtest account for emotions?

No. The backtest never hesitated, never skipped a setup, never moved a stop, never revenge-traded. You will — and the moment you do, you are no longer trading the strategy the backtest validated. Forward-test at tiny size or on paper and measure your deviations from the plan before you size up. The strategy must survive the market *and* the person trading it.

### Is backtesting the same as paper trading?

No. A backtest replays history — fast, but it carries all four structural gaps (execution, cost, data, regime). Paper trading runs forward, live, without capital — slow, but it removes look-ahead risk by construction and gives you real-time fills and real data messiness. The backtest asks "did this work in the past"; paper trading asks "does it work now, with me operating it." The honest funnel uses both: backtest, stress test, out-of-sample, paper, then live small.

## What comes next: pricing the real number

The backtest told you what was possible. These five gaps tell you what was real. Once you have priced them — padded the fills, stacked the costs, reconciled the data, calibrated the degradation, measured your own deviations — one number remains: the expectancy that actually reaches your account.

Tomorrow, #23 calculates exactly that: real expectancy, the number these five gaps have been eating. Then the week continues: #19 gives overfitting a detection toolkit — how to tell a memorized backtest from a live edge; #22 stress-tests the strategy with Monte Carlo simulation; and #30 builds the paper-vs-real bridge for the operator gap.

---

*Kaizen writes about the mathematics of survival for Indian retail traders. This article is educational content, not financial advice — every strategy discussed here can lose money, and no test can guarantee live results.*

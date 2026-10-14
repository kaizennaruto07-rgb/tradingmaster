---
title: "Paper Trading vs Real Trading: Why Paper Profits Disappear With Real Money — and the Honest Go-Live Protocol"
description: "On a simulator you test the logic; with real money you test the trader. Why paper profits vanish live — execution fiction and the psychological switch — plus the honest go-live protocol: one written plan, real size, costs ON, 20–50 trades at ~90% adherence, streak plans, pre-committed size and kill-switches, and the reconciliation rule for after go-live."
meta_description: "Paper trading vs real trading: why paper profits vanish with real money, when you are ready to go live, and how small to start — the honest go-live protocol."
date: 2026-10-14
author: Kaizen
tag: "Strategy validation · Trading psychology"
keywords: ["paper trading vs real trading", "does paper trading work", "when to stop paper trading", "how long should you paper trade before going live", "why am I profitable paper trading but losing live", "paper trading vs live trading psychology"]
---

> **Educational disclaimer:** This article is for education only and is not financial advice. Trading involves substantial risk of loss. Nothing here guarantees a strategy will work live — it teaches you a go-live protocol that proves, in writing, whether you can execute your plan before real money tests you.

## Yes — paper trading tells you whether you can execute this one written plan consistently in real time, and readiness is documented, not felt

Paper trading is not a rehearsal of profit. It is a rehearsal of execution.

On a simulator, you test the logic. With real money, you test the trader. That distinction is the whole point of this article. It frames the one question paper trading is allowed to answer: *can I execute this one written plan consistently in real time?* It can never answer a different question — *will I make money?* — because a simulator removes the two things that decide that answer: real fills and real stakes.

This is the sixth and final chapter of the Week 2 Validation sequence at Monks Of Market, and the last gate before real money. The earlier chapters built the machine: **Article #16** gave the verdict framework — the decision paper trading must serve. **Article #17** set the evidence contract and what counts as enough evidence. **Article #20** exposed the backtest's laboratory fiction. **Article #23** did the honest calculation. **Article #19** warned about overfitting. **Article #22** ran the thousand simulated paths. This chapter asks the one question none of those could: can *you* — the trader, not the strategy — hold up under real conditions?

The bottom line, up front: go live only when the honest-protocol checklist later in this article is satisfied and documented in your log. Never go live because paper profits looked good. Never go live because you "feel ready."

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 592" role="img" aria-label="Validation ladder diagram showing six validation chapters leading through the paper trading gate to live trading" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The validation ladder &#8212; six chapters, one gate</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Paper trading is the last gate &#8212; every chapter before it built the machine</text>
<rect x="90" y="70" width="500" height="46" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<circle cx="124" cy="93" r="13" fill="#2a3a34"/>
<text x="124" y="97" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="700">#16</text>
<text x="148" y="90" fill="#f2f7f4" font-size="12.5" font-weight="600">The verdict</text>
<text x="148" y="106" fill="#92a59c" font-size="11">which decision the test must serve</text>
<rect x="90" y="130" width="500" height="46" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<circle cx="124" cy="153" r="13" fill="#2a3a34"/>
<text x="124" y="157" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="700">#17</text>
<text x="148" y="150" fill="#f2f7f4" font-size="12.5" font-weight="600">The evidence</text>
<text x="148" y="166" fill="#92a59c" font-size="11">what counts as enough data</text>
<rect x="90" y="190" width="500" height="46" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<circle cx="124" cy="213" r="13" fill="#2a3a34"/>
<text x="124" y="217" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="700">#20</text>
<text x="148" y="210" fill="#f2f7f4" font-size="12.5" font-weight="600">The backtest's fiction</text>
<text x="148" y="226" fill="#92a59c" font-size="11">the five laboratory gaps</text>
<rect x="90" y="250" width="500" height="46" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<circle cx="124" cy="273" r="13" fill="#2a3a34"/>
<text x="124" y="277" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="700">#23</text>
<text x="148" y="270" fill="#f2f7f4" font-size="12.5" font-weight="600">The honest calculation</text>
<text x="148" y="286" fill="#92a59c" font-size="11">real expectancy math</text>
<rect x="90" y="310" width="500" height="46" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<circle cx="124" cy="333" r="13" fill="#2a3a34"/>
<text x="124" y="337" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="700">#19</text>
<text x="148" y="330" fill="#f2f7f4" font-size="12.5" font-weight="600">The overfit warning</text>
<text x="148" y="346" fill="#92a59c" font-size="11">five detection tests</text>
<rect x="90" y="370" width="500" height="46" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<circle cx="124" cy="393" r="13" fill="#2a3a34"/>
<text x="124" y="397" text-anchor="middle" fill="#f2f7f4" font-size="10.5" font-weight="700">#22</text>
<text x="148" y="390" fill="#f2f7f4" font-size="12.5" font-weight="600">The thousand paths</text>
<text x="148" y="406" fill="#92a59c" font-size="11">Monte Carlo fan</text>
<line x1="340" y1="116" x2="340" y2="130" stroke="#2a3a34" stroke-width="2"/>
<polygon points="340,129 335,121 345,121" fill="#92a59c"/>
<line x1="340" y1="176" x2="340" y2="190" stroke="#2a3a34" stroke-width="2"/>
<polygon points="340,189 335,181 345,181" fill="#92a59c"/>
<line x1="340" y1="236" x2="340" y2="250" stroke="#2a3a34" stroke-width="2"/>
<polygon points="340,249 335,241 345,241" fill="#92a59c"/>
<line x1="340" y1="296" x2="340" y2="310" stroke="#2a3a34" stroke-width="2"/>
<polygon points="340,309 335,301 345,301" fill="#92a59c"/>
<line x1="340" y1="356" x2="340" y2="370" stroke="#2a3a34" stroke-width="2"/>
<polygon points="340,369 335,361 345,361" fill="#92a59c"/>
<line x1="340" y1="416" x2="340" y2="446" stroke="#2a3a34" stroke-width="2"/>
<polygon points="340,445 335,437 345,437" fill="#92a59c"/>
<rect x="90" y="446" width="500" height="56" rx="10" fill="#0f2e22" stroke="#14d991" stroke-width="1.5"/>
<text x="340" y="468" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">THIS ARTICLE &#183; #30 &#8212; THE PAPER GATE</text>
<text x="340" y="489" text-anchor="middle" fill="#f2f7f4" font-size="12">Can you execute this one plan consistently in real time?</text>
<line x1="340" y1="502" x2="340" y2="518" stroke="#2a3a34" stroke-width="2"/>
<polygon points="340,517 335,509 345,509" fill="#92a59c"/>
<rect x="90" y="518" width="500" height="52" rx="10" fill="#2b1d1f" stroke="#ff4f65" stroke-width="1.5"/>
<text x="340" y="540" text-anchor="middle" fill="#ff4f65" font-size="13" font-weight="700">LIVE TRADING</text>
<text x="340" y="558" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Real money &#183; real fills &#183; real you &#8212; the education paper can&#8217;t give</text>
</svg>
</figure>

## The two engines of the gap: execution fiction and the psychological switch

Paper profits disappear live for two distinct reasons. They are easy to confuse, and confusing them is expensive, because each one needs a different fix. The first engine is mechanical: paper fills are fiction. The second is human: the trader changes when money is real.

This section covers the *paper* layer of the gap. The five backtest-to-live gaps — the laboratory fiction inside backtests themselves — are covered in **Article #20**. Backtests and paper trading fail in different ways; this article is about the paper layer.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 412" role="img" aria-label="Comparison table of paper trading versus real trading across money at risk, emotions, order fills, rule-following, and consequences of error" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Same plan. Different game.</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">What actually changes when real money is on the line</text>
<text x="175" y="74" text-anchor="middle" fill="#14d991" font-size="12.5" font-weight="700">PAPER TRADING</text>
<text x="505" y="74" text-anchor="middle" fill="#ff4f65" font-size="12.5" font-weight="700">REAL TRADING</text>
<text x="20" y="104" fill="#92a59c" font-size="11" font-weight="700" letter-spacing="1">MONEY AT RISK</text>
<rect x="20" y="112" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<rect x="350" y="112" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="175" y="134" text-anchor="middle" fill="#f2f7f4" font-size="11.5">&#8377;0 &#8212; nothing at stake</text>
<text x="505" y="134" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Real money, real P&#38;L</text>
<text x="20" y="166" fill="#92a59c" font-size="11" font-weight="700" letter-spacing="1">EMOTIONS</text>
<rect x="20" y="174" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<rect x="350" y="174" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="175" y="196" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Calm, detached</text>
<text x="505" y="196" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Fear, greed, ego kick in</text>
<text x="20" y="228" fill="#92a59c" font-size="11" font-weight="700" letter-spacing="1">ORDER FILLS</text>
<rect x="20" y="236" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<rect x="350" y="236" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="175" y="258" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Filled at the quoted price</text>
<text x="505" y="258" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Spread, slippage, partial fills</text>
<text x="20" y="290" fill="#92a59c" font-size="11" font-weight="700" letter-spacing="1">RULE-FOLLOWING</text>
<rect x="20" y="298" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<rect x="350" y="298" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="175" y="320" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Easy to follow the plan</text>
<text x="505" y="320" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Moved stops, skipped signals</text>
<text x="20" y="352" fill="#92a59c" font-size="11" font-weight="700" letter-spacing="1">CONSEQUENCES OF ERROR</text>
<rect x="20" y="360" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<rect x="350" y="360" width="310" height="34" rx="8" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="175" y="382" text-anchor="middle" fill="#f2f7f4" font-size="11.5">A number on a screen</text>
<text x="505" y="382" text-anchor="middle" fill="#f2f7f4" font-size="11.5">Drawdowns you actually feel</text>
</svg>
</figure>

### Execution fiction: the fills, costs, and rejections paper never charges you for

On paper, you fill at the quoted price. Live, you pay the liquidity price. That single difference quietly eats edges.

A market buy order pays the ask. A market sell order receives the bid. The bid-ask spread is a real cost on every live trade, and a simulator that fills you at mid-price or at the last traded price simply never charges it. A triggered stop-loss becomes a market order, and in a gap or a fast market it can fill away from the trigger price — your stop was a line on a chart, but the fill was whatever the market offered when the order arrived. A market order larger than the quantity available at the best price walks the book, filling at successively worse prices across price levels — partial fills at prices you never planned for.

Then there are the fills that never happen on paper at all. A limit order that never fills because price never reached it. An order rejected for margin, quantity, or a circuit filter. On a simulator, these frictions are often absent entirely, so the plan looks smoother than it is.

And then there are costs. Many simulators default to ignoring costs — or model them loosely — so paper results can be flattered relative to live results. The honest protocol later in this article corrects this by turning costs ON with real Indian cost math.

Put that friction together and the conclusion follows: a marginally profitable paper strategy can become marginally unprofitable live once execution friction and costs are included. That conclusion follows from the cost and execution facts in this article, not from a study result — but it is why thin paper edges deserve suspicion, not celebration.

### The psychological switch: the strategy does not change, the trader does

The second engine is the one no simulator can model. Fear, greed, ego, and expectations change the trader while the strategy stays identical. The same setups, the same rules, the same chart — a different human sitting in front of them.

On paper, a drawdown is a number. Live, it is money you could have spent, a red day you have to explain to yourself, a streak that makes you want to *do something*. That is when the failure modes appear: moving a stop because the loss feels too close, sizing up after a win because confidence feels like evidence, skipping a signal because the last one hurt. The strategy did not change. The trader did.

This is the standard practitioner and behavioural explanation for the paper-to-live gap — not a neuroscience finding, and not a measured causal claim. But it is the explanation that fits what traders actually report: the plan survives contact with the market, and then the trader stops following the plan.

It is also the bridge into what comes next. The validation ladder ends with this article; the psychology chapters begin with **Article #31**, on giving back profits. Paper trading cannot teach you to sit through a real drawdown — because nothing is at stake. What it *can* do is prove, in writing, whether you followed the plan when following it was easy. That proof is worth having before money makes it hard.

## The size trap: the same strategy, different account survival

Here is the clearest proof that paper trading rarely lies about the strategy — the trader changes the risk.

A common pattern: a trader paper-trades a plan risking 2% per trade, then goes live and — freed from the simulator's discipline, or chasing the paper returns — risks 10% per trade. Same strategy. Same signals. Radically different survival.

| Risk per trade | Capital after 5 straight losses (on ₹1,00,000) | Drawdown |
|---|---|---|
| 2% | ₹90,392.08 | 9.61% (loss of ₹9,607.92) |
| 10% | ₹59,049.00 | 40.95% (loss of ₹40,951.00) |

**Compounding assumption, stated explicitly:** risk is a fixed fraction of *current* (shrinking) capital each trade; each loss equals exactly the risked fraction; the table includes no costs, slippage, or partial fills. The formula is remaining capital = (1 − r)⁵. At 2%: 0.98⁵ = 0.903921. At 10%: 0.90⁵ = 0.590490. Rounded, that is roughly 9.6% versus roughly 41% — but the precise figures above are the ones to use. (If risk were a fixed amount based on *original* capital, five losses would be 10% and 50% instead. That is a different assumption, and not the one used here.)

The 2% trader survives five straight losses with the account — and the plan — intact. The 10% trader has lost more than two-fifths of the account on the same five losses, and is now trading under the kind of pressure that produces the psychological switch. Paper did not lie about the strategy. The trader changed the risk.

The fix is sizing discipline. Position sizing and the 1%-rule are covered in full in **Article #8** — but the size trap is why the go-live size in the protocol below is pre-committed, not improvised.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 368" role="img" aria-label="Table comparing drawdown after five straight losses at 2 percent risk per trade versus 10 percent risk per trade on one lakh rupees" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The size trap: same strategy, different survival</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">&#8377;1,00,000 &#183; five straight losses &#183; fixed fraction of current capital</text>
<rect x="20" y="64" width="310" height="128" rx="12" fill="#1d2b26" stroke="#14d991" stroke-width="1.5"/>
<text x="175" y="92" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">2% RISK PER TRADE</text>
<text x="175" y="126" text-anchor="middle" fill="#f2f7f4" font-size="22" font-weight="700">&#8377;90,392.08</text>
<text x="175" y="152" text-anchor="middle" fill="#92a59c" font-size="12">&#8722;9.61% drawdown &#183; loss &#8377;9,607.92</text>
<text x="175" y="174" text-anchor="middle" fill="#14d991" font-size="11.5">account &#38; plan survive</text>
<rect x="350" y="64" width="310" height="128" rx="12" fill="#1d2b26" stroke="#ff4f65" stroke-width="1.5"/>
<text x="505" y="92" text-anchor="middle" fill="#ff4f65" font-size="13" font-weight="700">10% RISK PER TRADE</text>
<text x="505" y="126" text-anchor="middle" fill="#f2f7f4" font-size="22" font-weight="700">&#8377;59,049.00</text>
<text x="505" y="152" text-anchor="middle" fill="#92a59c" font-size="12">&#8722;40.95% drawdown &#183; loss &#8377;40,951.00</text>
<text x="505" y="174" text-anchor="middle" fill="#ff4f65" font-size="11.5">more than two-fifths gone</text>
<text x="20" y="216" fill="#92a59c" font-size="11" font-weight="700" letter-spacing="1">CAPITAL REMAINING</text>
<rect x="20" y="226" width="542" height="26" rx="6" fill="#14d991"/>
<text x="574" y="244" fill="#f2f7f4" font-size="12" font-weight="600">&#8377;90,392</text>
<rect x="20" y="262" width="354" height="26" rx="6" fill="#ff4f65"/>
<text x="386" y="280" fill="#f2f7f4" font-size="12" font-weight="600">&#8377;59,049</text>
<text x="20" y="322" fill="#92a59c" font-size="11">Compounding assumption: fixed fraction of current (shrinking) capital each trade &#183; each loss equals the risked fraction</text>
<text x="20" y="340" fill="#92a59c" font-size="11">Five straight losses &#183; no costs, slippage, or partial fills &#183; remaining capital = (1 &#8722; r)&#8309;</text>
</svg>
</figure>

## The honest protocol: the go-live checklist

Competence, not a calendar. That is the whole protocol in four words.

Waiting "until you feel ready" is avoidance — advice, not a finding — but it matches what the checklist below is designed to prevent. The moment of feeling ready never reliably arrives, and waiting for it is its own way of never going live.

Every readiness number in this section is practitioner consensus with a wide published range — attribute it that way, because that is what it is. A common practitioner bar is described below; other protocols demand more, up to 100–200 trades or 3–6 months. None of this is our research, a study, or a standard, and none of it guarantees anything. It is a checklist for deciding whether you have evidence — not a certificate.

One more boundary, stated once: paper trading will not catch an overfit sample either. If the plan was fitted to noise, paper-trading it just replays the noise in real time. Overfitting is covered in **Article #19**.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 522" role="img" aria-label="Checklist of the honest go-live protocol for paper trading, from one written plan through costs on to pre-committed kill-switch rules" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The honest go-live protocol</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Competence, not a calendar &#8212; every box checkable in your log</text>
<circle cx="40" cy="88" r="12" fill="none" stroke="#14d991" stroke-width="2"/>
<path d="M 33 88 l 5 5 l 9 -10" fill="none" stroke="#14d991" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="64" y="84" fill="#f2f7f4" font-size="13" font-weight="600">One written plan</text>
<text x="64" y="104" fill="#92a59c" font-size="11.5">one plan, traded consistently &#8212; no mid-session edits</text>
<circle cx="40" cy="144" r="12" fill="none" stroke="#14d991" stroke-width="2"/>
<path d="M 33 144 l 5 5 l 9 -10" fill="none" stroke="#14d991" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="64" y="140" fill="#f2f7f4" font-size="13" font-weight="600">Real account size</text>
<text x="64" y="160" fill="#92a59c" font-size="11.5">paper balance equals the intended live size</text>
<circle cx="40" cy="200" r="12" fill="none" stroke="#14d991" stroke-width="2"/>
<path d="M 33 200 l 5 5 l 9 -10" fill="none" stroke="#14d991" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="64" y="196" fill="#f2f7f4" font-size="13" font-weight="600">Costs ON</text>
<text x="64" y="216" fill="#92a59c" font-size="11.5">real Indian cost math &#8212; no hidden simulator subsidy</text>
<circle cx="40" cy="256" r="12" fill="none" stroke="#14d991" stroke-width="2"/>
<path d="M 33 256 l 5 5 l 9 -10" fill="none" stroke="#14d991" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="64" y="252" fill="#f2f7f4" font-size="13" font-weight="600">20&#8211;50 logged trades</text>
<text x="64" y="272" fill="#92a59c" font-size="11.5">date, fill, costs, rule-break Y/N on every row</text>
<circle cx="40" cy="312" r="12" fill="none" stroke="#14d991" stroke-width="2"/>
<path d="M 33 312 l 5 5 l 9 -10" fill="none" stroke="#14d991" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="64" y="308" fill="#f2f7f4" font-size="13" font-weight="600">~90% rule adherence</text>
<text x="64" y="328" fill="#92a59c" font-size="11.5">trades following every rule &#247; total trades</text>
<circle cx="40" cy="368" r="12" fill="none" stroke="#14d991" stroke-width="2"/>
<path d="M 33 368 l 5 5 l 9 -10" fill="none" stroke="#14d991" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="64" y="364" fill="#f2f7f4" font-size="13" font-weight="600">Streak plans</text>
<text x="64" y="384" fill="#92a59c" font-size="11.5">written plans for after losing AND winning streaks</text>
<circle cx="40" cy="424" r="12" fill="none" stroke="#14d991" stroke-width="2"/>
<path d="M 33 424 l 5 5 l 9 -10" fill="none" stroke="#14d991" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="64" y="420" fill="#f2f7f4" font-size="13" font-weight="600">Pre-committed live size</text>
<text x="64" y="440" fill="#92a59c" font-size="11.5">decided now, in writing &#8212; not mid-drawdown</text>
<circle cx="40" cy="480" r="12" fill="none" stroke="#14d991" stroke-width="2"/>
<path d="M 33 480 l 5 5 l 9 -10" fill="none" stroke="#14d991" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="64" y="476" fill="#f2f7f4" font-size="13" font-weight="600">Kill-switch categories</text>
<text x="64" y="496" fill="#92a59c" font-size="11.5">daily loss, streak, spread, connection halts</text>
</svg>
</figure>

### One written plan, paper balance equal to your intended live size

One plan only, traded consistently. Not three plans rotated by mood, not one plan with quiet mid-session edits. The plan is written before the first paper trade, and a paper trade counts only if it followed the written plan.

And the paper balance must equal the intended live account size. An unrealistic balance is the most common protocol violation. A ₹10 lakh paper balance rehearses decisions a ₹50,000 live account will never face.

To be precise about the mechanism: percentages are scale-free in pure arithmetic — 2% is 2% at any account size. The practical difference across sizes is real, though: minimum quantity and lot granularity (a small account may not be able to take the exact fractional position the plan calls for), affordability of stops, and psychology. A stop that costs ₹500 on a large paper account and ₹500 on a small live account is the same amount of money and a very different experience. Paper-trading at your real size is how you rehearse the decisions you will actually face.

### Costs ON: the Indian paper-trader's hidden subsidy, corrected

Many simulators default to ignoring costs. That is not a universal claim — some model costs well — but it is common enough that the correction must be deliberate: turn costs ON, and compute them with real cost math. Until you do, Indian paper results are structurally flattered, because the cost stack that live trading charges on every trade is missing from the paper ledger.

The verified rates below were checked on 2026-10-14. STT rates are effective 1 April 2026 (Budget 2026-27). NSE exchange charges are effective 1 March 2026. Rates change; check the current schedule before you trade, and treat anything below as a snapshot with its verification date attached.

**Securities Transaction Tax (STT) — verified 2026-10-14, effective 1 April 2026:**

- Equity futures, sale: 0.05% of contract value.
- Equity options, sale of premium: 0.15% of premium.
- Exercised options, sale: 0.15% of intrinsic value.
- Equity delivery: 0.10% on both buy and sell.
- Equity intraday: 0.025% on the sell side only.

**Exchange transaction charges, per side — verified 2026-10-14, NSE effective 1 March 2026.** NSE and BSE charges differ, so give them per exchange — never present NSE figures as universal. The NSE figures below are the worked example for cost math:

- NSE: cash market 0.00307% per side (₹307 per crore, including IPFT); equity futures 0.00183% per side (₹183 per crore); equity options 0.03553% of premium per side (₹3,553 per crore of premium).
- BSE: cash market 0.00375% per side; equity futures listed at nil on the broker charge page used for verification (confirm against a BSE circular before leaning on that figure). BSE equity options charges vary by contract type — check your broker's current charge list for the BSE contract you trade.

**Stamp duty, buy side only — verified 2026-10-14:** equity delivery 0.015% (capped at ₹1,500 per crore); equity intraday 0.003%; equity futures 0.002%; equity options 0.003%. Stamp duty applies on the buy side only — never apply it to sells.

**Other charges — verified 2026-10-14:** GST is 18% on brokerage plus SEBI turnover charges plus exchange transaction charges. GST does *not* apply to STT or stamp duty. The exact GST base follows your broker's published schedule — sources conflict on whether SEBI charges sit in the base, and the amount at stake is tiny either way (SEBI charges are ₹10 per crore, so the GST difference is about ₹1.80 per crore of turnover). SEBI turnover charges are ₹10 per crore of turnover (0.0001%).

**Brokerage — one broker's schedule, not universal.** For example, one discount broker charges ₹0 for equity delivery, the lower of 0.03% or ₹20 per executed order for intraday and futures, and a flat ₹20 per executed order for options. That is one broker's published schedule. Brokerage varies by broker and plan; full-service brokers charge percentage brokerage far above this. Check your own broker. And note that DP charges apply on delivery sells — delivery is not literally zero-cost even where brokerage is ₹0.

The practical correction is simple: run your paper log through real cost math — the Monks Of Market Indian options-cost calculator and crypto-futures cost calculator exist for exactly this — and judge the plan on after-cost paper results. A plan that is only profitable before costs is not a profitable plan.

### 20–50 logged trades, ~90% rule adherence, and a plan for after streaks

A common practitioner bar is: **20–50 logged trades on that one plan, with costs enabled, at roughly 90% rule adherence, sizing at the same amounts you intend to trade live.** State it exactly that way — a common practitioner bar — because that is what it is. Other protocols demand more, up to 100–200 trades or 3–6 months of paper trading. There is no study validating ~90% adherence as a threshold, and no authority sets 20–50 trades as a requirement. The range is wide; the honest version admits it.

What the bar is really testing is not the trade count. It is whether you can point to a log and show: one plan, real size, costs on, rules followed almost every time. A log of 30 trades with 90% adherence and costs enabled is evidence. A log of 200 trades with no costs, a fantasy balance, and rules bent whenever they hurt is not.

**Adherence, defined.** Adherence = trades following every rule ÷ total paper trades. A rule break is any deviation from the written plan: entering a setup the plan excludes, skipping a valid signal, moving a stop, changing size mid-trade, or trading outside the plan's instruments or hours. A fill that lands slightly away from the planned price because the market moved is execution noise, not a rule break — the rule was the signal, the size, and the stop; the fill was the market's. Worked example: 30 paper trades, 27 followed every rule, 3 broke one — adherence is 27 ÷ 30 = 90%.

**The paper-log spec.** Each paper trade gets one log row with these columns: date, signal, planned vs actual fill, costs, rule-break Y/N. Without those columns, neither costs-ON nor adherence is checkable — the log is the evidence the bar stands on.

**The streak plans.** Write both plans before the first paper trade. The decisions below are example templates, not prescriptions — fill them with your own numbers:

After a losing streak — example decisions:

- 3 consecutive losses: stop for the rest of the session; no new entries.
- 5 consecutive losses: halve size for the next 5 trades.
- 8 consecutive losses: stop trading the plan and re-validate — re-check the log against the backtest before the next trade.

After a winning streak — example decisions:

- 3 consecutive wins: no size increase; keep the pre-committed size.
- 5 consecutive wins: no loosening stops, no added instruments, no extra sessions.
- Any win that came from a rule break: it counts as a break in the adherence count, not as evidence the plan works.

And the pre-committed live size: decided now, in writing, before real money arrives — not negotiated with yourself after the first live win or loss. The sizing mechanics are covered in **Article #8**; the commitment is made here.

### Pre-committed kill-switch rules: the categories, not one universal number

Kill-switch rules are pre-committed halts that stop trading when a predefined threshold is breached. They exist for one reason: pre-commitment removes the in-the-moment decision that tilt and revenge trading exploit. You decide the halt before trading, when you are calm — never mid-session, when you are not.

The categories to pre-commit, with your own thresholds set before trading:

- **Daily loss limit** — a halt that caps one bad session.
- **Consecutive-loss limit** — a halt that forces a pause after a streak.
- **Spread blowout halt** — a halt when spreads widen beyond what the plan can trade.
- **Connection-failure halt** — a halt when the data feed or connection breaks, so you never trade on broken data or untradeable prices.

**The threshold-setting method.** Express each threshold in one of two units: a percentage of account equity, or a multiple of your average loss per losing trade from the paper log. Pick the unit when you write the plan; never switch units mid-session to make a breach disappear. For the spread halt, derive the threshold from your own paper log — for example, a multiple of the average spread you actually observed for that instrument.

**Where the thresholds live, and how they are enforced.** Write the thresholds in the written plan itself, on the same page as the rules, before the first paper trade. Enforce them two ways: set the halt in the platform wherever automatic halts are supported — an automatic halt is stronger than a manual-only one, because a manual halt still depends on the trader obeying it in the worst moment. And log every halt. A halt overridden mid-session counts as a rule break in the adherence count.

**One complete worked example set — EXAMPLE ONLY, not a prescription.** Your numbers will differ; the method is the point. Account ₹1,00,000; average loss per losing trade in the paper log ₹800:

- Daily loss limit: 2.5× average loss = ₹2,000 (which is also 2% of the account).
- Consecutive-loss limit: 4 straight losses.
- Spread blowout halt: halt when the spread exceeds 2× the average spread observed in your paper log for that instrument.
- Connection-failure halt: halt on any loss of live feed or order confirmation.

Deliberately, this article prescribes no universal numeric threshold for any category. No validated universal threshold exists; the right numbers depend on your plan, your size, and your instruments. The categories are the discipline. Your numbers, written down before you trade, are the commitment.

Kill-switches and the shadow-account check below are protocol reasoning, not findings proven by study. They are presented here as discipline — the kind of structure that removes decisions from the moments you are least fit to make them.

## Monte Carlo vs paper trading: the division of labour

Monte Carlo simulation (**Article #22**) checks whether the *number* is robust across a thousand simulated paths. Paper trading checks whether *execution* holds up in real conditions. One tests the arithmetic; the other tests the trader. You need both, because each catches failures the other cannot see. Monte Carlo catches what paper cannot: a plan whose clean backtest came from one lucky ordering of trades — resampling exposes the ruin risk the single path hid. Paper catches what Monte Carlo cannot: the trader who skips the third signal after two losses, or moves a stop mid-trade — execution failures no resampling can see. The What-If Trade Simulator sits before paper in the sequence: its fan chart told you the survivable size — paper tests whether you can actually take the trades.

## The handoff: going live small, reconciling, and knowing when to stop

Going live is not the end of validation. It is the start of the part paper trading could never do — and the part competing guides mostly omit. What you do *after* going live matters as much as the go-live bar itself.

### Go live small — and expect friction to appear

Go live at the smallest real size the 1%-rule allows. The 1%-rule — risk no more than about 1% of account equity on any single trade — is a widely used risk-budgeting guideline, not a law, regulation, or guarantee. It controls drawdown speed, not profitability: a negative-expectancy strategy still loses with small size, only more slowly. At 1% risk per trade, five straight losses cost 4.90% of capital (1 − 0.99⁵ = 0.0490), under the same compounding assumption as the size-trap table — fixed fraction of current shrinking capital, each loss equal to the risked fraction, no costs or slippage. Small size buys you time to learn. It does not create edge.

And expect friction to appear. Results often get worse before they stabilise, because live trading adds the one variable the simulator could never supply: real money, real fills, real psychology. That is an expectation, not a law — some traders' live results match or beat paper over a short window by luck. But the honest framing is that the first live weeks are where the missing variable arrives, and the plan should be judged on whether it survives that arrival, not on whether the first week is green. The education paper trading cannot give you begins the day real money is on the line, and a small live account is where that education is cheapest.

### Reconcile live vs backtest: a persistent gap is a modelling error, not bad luck

The reconciliation rule is the ongoing honesty test after go-live: track live performance against what the backtest predicted for the *same* period. Compare like with like — same signals, same sizing logic, same costs, same dates.

The rule, made operational:

- **Metric:** net P&L per trade after all costs — the live expectancy per trade — against the backtest-predicted net P&L per trade over the same trades.
- **Minimum window:** this protocol's minimum is 30 live trades over at least 4 weeks. Shorter windows are variance, not evidence.
- **Model-review trigger:** if live net P&L per trade trails the backtest-predicted figure by more than 25%, review the model — re-check cost assumptions, fill assumptions, and whether the regime changed.
- **Persistent means:** the gap is still present at the end of two consecutive review windows after costs and fills have been checked — not one bad week.

Worked example (illustrative figures): over the same 30 trades, the backtest predicted +₹450 net P&L per trade; live delivered +₹280 per trade after costs. The gap is ₹170 per trade — about 38% below predicted — past the 25% trigger, so the model gets reviewed. If the gap is still there at the next review, it is persistent, and the fix is in the model, not in your confidence.

If live results sit stubbornly below what the backtest predicted, something in the model was wrong: a cost left out, a fill assumption too generous, a market regime the backtest never saw. That is a modelling problem, and it is fixed by correcting the model, not by trying harder or believing more.

Two qualifications keep the rule honest. First, a short-term gap alone proves nothing — variance explains short gaps; persistence is the signal. Second, reconciliation is a discipline, not an empirical finding: a protocol for staying honest, not a proven law. The backtest gaps themselves are covered in **Article #20**, and what counts as enough evidence is covered in **Article #17**.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 384" role="img" aria-label="Reconciliation tracker chart comparing live net profit and loss per trade against backtest-predicted net profit and loss per trade over the same period" class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The reconciliation rule</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Live vs backtest-predicted net P&#38;L per trade &#183; 30 trades &#183; after costs</text>
<line x1="70" y1="330.0" x2="650" y2="330.0" stroke="#2a3a34" stroke-width="1"/>
<text x="62" y="334.0" text-anchor="end" fill="#92a59c" font-size="10">&#8377;0</text>
<line x1="70" y1="280.0" x2="650" y2="280.0" stroke="#2a3a34" stroke-width="1"/>
<text x="62" y="284.0" text-anchor="end" fill="#92a59c" font-size="10">&#8377;100</text>
<line x1="70" y1="230.0" x2="650" y2="230.0" stroke="#2a3a34" stroke-width="1"/>
<text x="62" y="234.0" text-anchor="end" fill="#92a59c" font-size="10">&#8377;200</text>
<line x1="70" y1="180.0" x2="650" y2="180.0" stroke="#2a3a34" stroke-width="1"/>
<text x="62" y="184.0" text-anchor="end" fill="#92a59c" font-size="10">&#8377;300</text>
<line x1="70" y1="130.0" x2="650" y2="130.0" stroke="#2a3a34" stroke-width="1"/>
<text x="62" y="134.0" text-anchor="end" fill="#92a59c" font-size="10">&#8377;400</text>
<line x1="70" y1="80.0" x2="650" y2="80.0" stroke="#2a3a34" stroke-width="1"/>
<text x="62" y="84.0" text-anchor="end" fill="#92a59c" font-size="10">&#8377;500</text>
<rect x="70" y="161.2" width="580" height="168.8" fill="#ff4f65" opacity="0.08"/>
<line x1="70" y1="105.0" x2="650" y2="105.0" stroke="#14d991" stroke-width="2" stroke-dasharray="7 5"/>
<text x="78" y="97.0" fill="#14d991" font-size="11">backtest-predicted &#8377;450/trade</text>
<line x1="70" y1="161.2" x2="650" y2="161.2" stroke="#ff4f65" stroke-width="1.5" stroke-dasharray="7 5"/>
<text x="78" y="177.2" fill="#ff4f65" font-size="11">model-review trigger &#183; live trails by &#62;25% (&#8377;337.5)</text>
<path d="M 70 122 C 120 118, 160 140, 210 138 S 290 165, 340 168 S 420 182, 470 176 S 560 200, 610 196 S 630 190, 650 190" fill="none" stroke="#ff4f65" stroke-width="3" stroke-linecap="round"/>
<circle cx="70" cy="122" r="4" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<circle cx="650" cy="190" r="4.5" fill="#ff4f65" stroke="#1d2b26" stroke-width="1.5"/>
<text x="640" y="212" text-anchor="end" fill="#ff4f65" font-size="11.5" font-weight="600">live &#8377;280 &#183; &#8722;38% &#8594; review</text>
<text x="70" y="352" text-anchor="start" fill="#92a59c" font-size="10.5">trade 1</text>
<text x="360" y="352" text-anchor="middle" fill="#92a59c" font-size="10.5">trade 15</text>
<text x="650" y="352" text-anchor="end" fill="#92a59c" font-size="10.5">trade 30</text>
</svg>
</figure>

### Optional drift check: a shadow paper account alongside the micro live account

For a short period after going live, consider running the *same* signals on paper and live in parallel — a shadow paper account alongside the micro live account. Holding signals, timing, and sizing identical across the two accounts isolates the execution path as the only variable, so a persistent paper-vs-live gap must come from fills, costs, or data — not from different decisions. It is a drift check: a way to surface slippage, routing, and data-feed divergence before it becomes expensive.

Bound the check: run it for the first 30 live trades or the first 4 weeks, whichever comes first. Stop it early once a full review window shows live fills tracking the shadow log with no model-review gap. Stop it at the bound in any case. And stop it immediately if the shadow log ever diverges from the live signals — a missed signal or a different timestamp invalidates the comparison.

The comparison is only valid if the shadow account mirrors the live signals exactly, with the same timestamps. And it has a hard limit: a shadow account does *not* reproduce live psychology. It tells you about your fills, not about yourself. No study quantifying its benefit was found, so no measured savings are claimed here. It is an optional, short-term diagnostic — not a second validation ladder.

### Monitor for decay and pre-commit your retirement conditions

Keep reconciling after go-live. Monitor for decay: live results drifting away from what the plan predicted as conditions change. A plan that worked in one regime can quietly stop working in another, and the drift usually shows up as a widening reconciliation gap long before it shows up as a single catastrophic loss.

Run the check on a cadence: a fortnightly reconciliation review while live, plus a full review every 30 trades. The decay metric is the rolling net P&L per trade over the last 30 live trades, against the backtest-predicted figure — the same metric as reconciliation, tracked over time.

And pre-commit the conditions under which the strategy is retired or re-validated — decided before trading, not mid-drawdown. Example retirement conditions — examples only, set your own before trading:

- Rolling 30-trade net P&L per trade stays below zero across two consecutive reviews.
- The reconciliation gap exceeds the model-review trigger in two consecutive windows after the model has already been re-checked.
- Live drawdown from the peak exceeds the retirement drawdown written in the plan (example: 10% of the account — example only).

On retirement, the plan goes back to validation — paper and backtest re-check — not back to the market with tweaks. Retirement conditions are kill-switches at the strategy level: the lines that, crossed, mean the plan returns to validation. Like every other pre-commitment in this article, they are written when you are calm, because they will be needed when you are not.

## Risks and limitations: what paper trading cannot protect you from

Trading can lose money. Leveraged and derivatives trading can lose more than the amount risked on a trade and can lose the account. For cash equity, the loss is capped at the amount invested — the "lose more than you risked" limb applies to leveraged and margined products, and it is stated here without softening. Past paper or backtest performance does not predict live results. No strategy in this article is presented as guaranteed profit, because none is.

Paper trading cannot teach staked drawdown behaviour, real-liquidity execution, or your own failure modes — moving stops, sizing up after wins, skipping signals. A zero-stakes simulation cannot, by construction, teach staked behaviour. It can only show you whether you followed the plan when following it was easy.

Small size limits drawdown speed. It does not turn a losing plan into a winning one: a negative-expectancy strategy still loses with small size, only more slowly — and the honest protocol is designed to surface that fact cheaply, not to hide it.

Two pitfalls deserve naming. First, overtrading with no risk on paper: when nothing is at stake, it is easy to trade far more often than the plan allows, and to mistake activity for evidence. That pitfall is covered in **Article #35**, on overtrading. Second, the honest log is required: every fill logged as if it cost you, every rule break journaled, because the log is the evidence the go-live bar stands on. The journal deep-dive is in **Article #44**.

## The validation ladder ends here — the first live drawdown is where giveback begins

Six chapters, one protocol: **#16** the verdict, **#17** the evidence, **#20** the backtest's fiction, **#23** the honest calculation, **#19** the overfit warning, **#22** the thousand paths — and this article, the last gate. You built the machine. You tested the logic. You rehearsed the execution. The validation ladder ends here.

What begins now is the part no protocol can rehearse for you: real money, real drawdowns, and the trader you become inside them. The first live drawdown is where giving back profits begins — where the plan survives but the trader starts negotiating with it, where wins get handed back trade by trade. That is where the psychology chapters start, and **Article #31**, on giveback profits, opens Psychology week. The ladder ends where the psychology begins.

## FAQ: the questions paper traders actually ask

### Is paper trading worth it?

Yes as a rehearsal of execution — no as a predictor of profit. It teaches order mechanics, sizing math, honest logging, and plan-following. It cannot teach drawdown psychology or execution friction. It is worth it if you know which questions it is allowed to answer — and whether you will make money is not one of them.

### Why do I make money paper trading but lose with real money?

Two engines. First, execution fiction: paper fills at the quoted price, with no slippage, no bid-ask spread cost, no partial fills or rejections, and costs often ignored. Second, the psychological switch: fear, greed, ego, and expectations change the trader while the strategy stays identical. Same setups, different human. The first engine is mechanics; the second is the standard practitioner and behavioural explanation, not neuroscience.

### How long should I paper trade before going live?

Competence, not a calendar. A common practitioner bar is: one plan, 20–50 logged trades with costs enabled, roughly 90% rule adherence (adherence = trades following every rule ÷ total trades), sizing at the intended live amounts — then the smallest real size. Those numbers are practitioner consensus with a wide published range (other protocols demand up to 100–200 trades or 3–6 months). They are never presented here as our research, a study, or a standard. Readiness is documented in your log, not felt.

### What does paper trading NOT teach you?

Sitting through a real drawdown with money at stake, execution under real liquidity, and your own behavioural failure modes — moving stops, sizing up after wins, skipping signals. This is definitional: a zero-stakes simulation cannot, by construction, teach staked behaviour.

### Should I paper trade with the same account size I plan to use live?

Yes — as protocol advice, this is non-negotiable. An unrealistic paper balance rehearses decisions the live account will never face. The practical difference is minimum quantity and lot granularity, affordability of stops, and psychology — not a claim that percentages themselves change. Percentages are scale-free in pure arithmetic; the decisions, the fills, and the experience are not.

### How do I make paper trading as realistic as possible?

Four rules: real account size; costs ON; log every fill as if it cost you; journal the rule breaks. Costs ON means real cost math at the verified 2026-10-14 rates in the Costs ON section above — STT, per-exchange charges, stamp duty, GST, SEBI charges, and your own broker's brokerage. The cost calculators are the correction for paper results that ignore this stack.

### When I go live, how small should I start?

Small enough that a full losing streak at real size costs tuition, not trauma: the 1%-rule — a widely used risk-budgeting guideline, not a law — at the minimum viable size. At 1% risk per trade, five straight losses cost 4.90% of capital (1 − 0.99⁵ = 0.0490), under the same compounding assumption as the size-trap table. Small size buys time to learn. It does not create edge.

### How do I know if my live results match my backtest?

Reconcile live performance against what the backtest predicted for the *same* period, over a minimum of 30 live trades and 4 weeks, on net P&L per trade after all costs. A gap of more than 25% below the backtest-predicted figure triggers a model review; a gap still present after two consecutive reviews is persistent — a modelling error (costs, fills, or regime), not bad luck. A short-term gap alone proves nothing; persistence is the signal. This is a discipline for staying honest, not an empirical finding — and the fix, when the gap persists, is in the model.

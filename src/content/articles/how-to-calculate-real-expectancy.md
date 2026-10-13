---
title: "How to Calculate Real Expectancy of a Trading Strategy (Gross vs Net, With the Indian Cost Stack)"
description: "Your backtest reports one number; your account keeps another. Learn both ways to calculate trading expectancy — the weighted-average formula and the net-profit-per-trade shortcut — then walk a real NIFTY option trade through the full Indian cost stack, where a +0.05R edge flips to a −0.03R loss. Plus the honesty-ledger rules for what counts as a trade, and how to turn per-trade expectancy into monthly money."
meta_description: "Calculate real trading expectancy: the two-method cross-check, the Indian gross-vs-net cost stack, and the honesty-ledger rules that make the number real."
date: 2026-10-13
author: Kaizen
tag: "Trading mathematics · Validation"
keywords: ["how to calculate real expectancy trading", "honest expectancy calculation", "gross vs net expectancy", "expectancy after costs", "expectancy vs profit factor", "trading cost stack expectancy"]
---

*By Kaizen · 13 October 2026 · Monks Of Market*

> **Educational disclaimer:** This article is for education only and is not financial advice. Trading involves substantial risk of loss. Nothing here tells you whether your strategy will work — it teaches you how to measure what your strategy actually earns, after the costs you cannot trade around.

Yesterday's chapter ended with an uncomfortable question. Your backtest reported a number — say, a handsome expectancy per trade. But the [four gaps between the lab and the field](/articles/why-backtested-strategies-fail-in-live-trading/) silently taxed that number, and your account kept a different one. The question hanging in the air: *so how do I calculate the number that's actually real?*

The thesis is one line: **every strategy has two expectancies — the gross one the backtest reports, and the net one the account keeps.** This chapter is not the formula tutorial — [Chapter 1 taught what expectancy measures and how to build it from your journal](/articles/what-is-trading-expectancy/). This chapter teaches only the honest-calculation mechanics: two ways to compute the number and force them to agree, the Indian cost stack that decides whether the number is gross or net, the bookkeeping ledger that decides whether the sample deserves the math, and how to translate the result into monthly money. [Chapter 2's three-question verdict](/articles/how-to-know-if-trading-strategy-works/) is the framework this number feeds into.

## Two ways to compute it — and the identity that checks your bookkeeping

Expectancy is the expected value of one trade: the average money one trade of your system makes or loses, once costs are in. There are two ways to compute it, and they are not approximations of each other — they are the same number wearing two different suits. That is exactly why you should always compute both.

### Way 1: the weighted formula, in one line and one rule

The formula: **Expectancy = (win rate × average win) − (loss rate × average loss)** — a standard formulation in trading-statistics references (checked October 2026). The full journal build is [Chapter 1's tutorial](/articles/what-is-trading-expectancy/); what matters here is the one bookkeeping rule that decides whether your answer is real.

**The bookkeeping rule:** average loss enters the formula as a **positive magnitude**. The minus sign in the formula already does the subtracting. Write the loss as negative (say, −₹2,000) *and* keep the minus sign, and you subtract a negative — adding the loss back to your wins. On a 60-trade log with a real expectancy of ₹480, that one sign error fabricates ₹2,880: six times the real number, invented by a minus sign.

Don't rely on willpower — bake the rule into your spreadsheet. Never type the averages by hand: **use AVERAGEIF on wins and losses separately** — `AVERAGEIF(result_range, ">0")` for the average win, `ABS(AVERAGEIF(result_range, "<0"))` for the average loss. That one recipe enforces the positive-magnitude rule automatically.

### Way 2: net profit ÷ number of closed trades

Forget win rates. Add up the net result of every closed trade — wins positive, losses negative, breakevens and scratches as zero — and divide by the total number of trades. That is it.

One explicit rule before the arithmetic: **only closed trades — never open positions.** Unrealized P&L is not an observation, and an open position in the sample mixes a maybe into the average.

The worked check, on 60 closed trades: 24 wins averaging ₹4,200 (gross ₹1,00,800), 36 losses averaging ₹2,000 (gross ₹72,000). Net profit = ₹28,800. Divide by 60 trades: **₹480 per trade.**

### The two-method identity cross-check: disagreement means a bookkeeping error

Now run Way 1 on the same 60 trades: (0.40 × ₹4,200) − (0.60 × ₹2,000) = ₹1,680 − ₹1,200 = **₹480 per trade.** Same number, to the paisa.

This is a mathematical identity — both methods agreed exactly on a 100-trade synthetic log we ran to confirm it. Way 2 is the cross-check on Way 1. Two different routes, one destination. **If your two answers disagree, your inputs are wrong somewhere — a missing trade, a wrongly signed loss, an open position that snuck in, a breakeven dropped from the count. Hunt the error; never average the answers.** An expectancy computed two ways that agree is worth more than one computed one way that happens to look good.

### ₹ or R? ₹ pays the bills, R compares strategies

One line on units, because the question recurs: use **₹ expectancy for P&L projections** and **R-expectancy for system comparison** — R travels across account sizes and position sizes, ₹ doesn't. The conversion is exact: **₹ expectancy = R-expectancy × ₹ risk per trade.** The full unit framing is in [Chapter 1](/articles/what-is-trading-expectancy/); here it matters only as the cross-check above, in whichever unit your journal runs.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 380" role="img" aria-label="Diagram comparing rupee expectancy and R expectancy — rupees answer what the strategy pays, R answers how good the strategy is." class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Two units, two jobs — one conversion</text>
<rect x="20" y="52" width="295" height="258" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<rect x="365" y="52" width="295" height="258" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<text x="167" y="80" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">&#8377; expectancy</text>
<text x="167" y="102" text-anchor="middle" fill="#92a59c" font-size="12">what does this pay me?</text>
<rect x="92" y="120" width="150" height="80" rx="8" fill="#14d991" fill-opacity="0.12" stroke="#14d991" stroke-width="1.5"/>
<text x="167" y="168" text-anchor="middle" fill="#14d991" font-size="28" font-weight="700">&#8377;</text>
<text x="167" y="192" text-anchor="middle" fill="#f2f7f4" font-size="12">+&#8377;480 / trade</text>
<text x="167" y="234" text-anchor="middle" fill="#f2f7f4" font-size="13">80 trades &#215; +&#8377;480</text>
<text x="167" y="258" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">= +&#8377;38,400 / month</text>
<text x="167" y="288" text-anchor="middle" fill="#92a59c" font-size="11">P&amp;L projection — bills, rent, reality</text>
<text x="512" y="80" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">R expectancy</text>
<text x="512" y="102" text-anchor="middle" fill="#92a59c" font-size="12">how good is the strategy?</text>
<rect x="412" y="118" width="200" height="70" rx="8" fill="none" stroke="#f2a33c" stroke-width="1.5"/>
<line x1="424" y1="150" x2="600" y2="150" stroke="#f2a33c" stroke-width="2"/>
<text x="512" y="140" text-anchor="middle" fill="#f2a33c" font-size="13" font-weight="700">+0.24R / trade</text>
<text x="512" y="176" text-anchor="middle" fill="#92a59c" font-size="11">identical across account sizes</text>
<text x="512" y="222" text-anchor="middle" fill="#f2f7f4" font-size="13">&#8377;2L account &#8594; +0.24R</text>
<text x="512" y="246" text-anchor="middle" fill="#f2f7f4" font-size="13">&#8377;10L account &#8594; +0.24R</text>
<text x="512" y="288" text-anchor="middle" fill="#92a59c" font-size="11">system comparison — size-independent</text>
<line x1="328" y1="170" x2="352" y2="170" stroke="#92a59c" stroke-width="2"/>
<polygon points="328,170 336,165 336,175" fill="#92a59c"/>
<polygon points="352,170 344,165 344,175" fill="#92a59c"/>
<rect x="20" y="322" width="640" height="44" rx="10" fill="#0f2b23" stroke="#14d991" stroke-width="1"/>
<text x="340" y="350" text-anchor="middle" fill="#14d991" font-size="14" font-weight="700">&#8377; expectancy = R-expectancy &#215; &#8377; risk per trade</text>
</svg>
</figure>

### The test to run

Pull your last 50+ closed trades. Compute expectancy both ways — the weighted formula *and* net profit ÷ trade count — in ₹ and in R. If Way 1 and Way 2 disagree, your bookkeeping has an error. Fix it before you trust the number.

## Gross vs net: the Indian cost stack that your backtest ignored

Here is the central move of this chapter. The expectancy you just computed is **gross** — the laboratory number, before the market's tax collectors take their cut. Your account keeps the **net** number. On Indian options, the gap between the two is not a rounding error; it is a fixed tax per trade, and it falls hardest on exactly the thin edges retail traders tend to run.

### The cost stack on one NIFTY option trade

Take one NIFTY lot (lot size 65, in force from the January 2026 series) bought at ₹100 premium: turnover ₹6,500 per leg. Figures below are recomputed from the verified official charges schedule (checked 12 October 2026) — brokerage at the standard flat ₹20 per executed order assumption:

| Charge | Buy leg (₹) | Sell leg (₹) |
|---|---|---|
| Brokerage (flat, per executed order) | 20.00 | 20.00 |
| NSE transaction charge (0.03553% of premium turnover) | 2.31 | 2.31 |
| SEBI fee (₹10 per crore) | 0.01 | 0.01 |
| Stamp duty (0.003%, buy side only) | 0.20 | — |
| STT (0.15% of premium, sell side; effective 1 April 2026) | — | 9.75 |
| GST (18% on brokerage + SEBI + transaction charges) | 4.02 | 4.02 |
| **Leg total** | **26.54** | **36.09** |

**Round trip: ₹62.61 — about ₹0.96 per share.** (Leg totals are rounded to the paisa; the round-trip figure uses unrounded values.) Note what sits where: stamp duty hits only the entry, STT only the exit, and GST applies to brokerage, SEBI and transaction charges — not to STT or stamp duty. On top of this sit the two costs no schedule can quote: **slippage** and the **bid-ask spread** — both are estimates and must be treated as assumptions, never as verified figures. An illustrative assumption of ₹0.25/share combined slippage and spread would add about ₹16.25 to the round trip, pushing the all-in cost near ₹79. Before your strategy earns a rupee, the trade is roughly ₹63–79 underwater.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 470" role="img" aria-label="Gross-to-net expectancy waterfall: each Indian trading cost subtracts from gross edge until only the net expectancy remains." class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The &#8377;60 gross edge walks the cost stack&#8230;</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">&#8230;and limps out as &#8722;&#8377;18.88 net. Thin edges don&#8217;t survive the stack.</text>
<line x1="90" y1="293.8" x2="640" y2="293.8" stroke="#2a3a34" stroke-width="1.5"/>
<text x="84" y="297" text-anchor="end" fill="#92a59c" font-size="11">&#8377;0</text>
<rect class="bar-grow-v" x="100" y="78.4" width="46" height="215.4" fill="#14d991" fill-opacity="0.85"/>
<text x="123" y="68" text-anchor="middle" fill="#14d991" font-size="12" font-weight="700">+&#8377;60</text>
<text x="123" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11">Gross</text>
<text x="123" y="416" text-anchor="middle" fill="#f2f7f4" font-size="11">edge</text>
<line x1="146" y1="222" x2="158" y2="222" stroke="#6b7b74" stroke-width="1" stroke-dasharray="3,3"/>
<rect class="bar-grow-v" x="158" y="78.4" width="46" height="143.6" fill="#ff4f65" fill-opacity="0.80"/>
<text x="181" y="70" text-anchor="middle" fill="#ff4f65" font-size="11" font-weight="700">&#8722;40</text>
<text x="181" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11">Broker-</text>
<text x="181" y="416" text-anchor="middle" fill="#f2f7f4" font-size="11">age</text>
<line x1="204" y1="238.6" x2="216" y2="238.6" stroke="#6b7b74" stroke-width="1" stroke-dasharray="3,3"/>
<rect class="bar-grow-v" x="216" y="222" width="46" height="16.6" fill="#ff4f65" fill-opacity="0.80"/>
<text x="239" y="214" text-anchor="middle" fill="#ff4f65" font-size="11" font-weight="700">&#8722;4.62</text>
<text x="239" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11">NSE</text>
<text x="239" y="416" text-anchor="middle" fill="#f2f7f4" font-size="11">charge</text>
<line x1="262" y1="238.7" x2="274" y2="238.7" stroke="#6b7b74" stroke-width="1" stroke-dasharray="3,3"/>
<rect class="bar-grow-v" x="274" y="238.6" width="46" height="0.1" fill="#ff4f65" fill-opacity="0.80"/>
<text x="297" y="230" text-anchor="middle" fill="#ff4f65" font-size="11" font-weight="700">&#8722;0.02</text>
<text x="297" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11">SEBI</text>
<text x="297" y="416" text-anchor="middle" fill="#f2f7f4" font-size="11">fee</text>
<line x1="320" y1="239.4" x2="332" y2="239.4" stroke="#6b7b74" stroke-width="1" stroke-dasharray="3,3"/>
<rect class="bar-grow-v" x="332" y="238.7" width="46" height="0.7" fill="#ff4f65" fill-opacity="0.80"/>
<text x="355" y="230" text-anchor="middle" fill="#ff4f65" font-size="11" font-weight="700">&#8722;0.20</text>
<text x="355" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11">Stamp</text>
<text x="355" y="416" text-anchor="middle" fill="#f2f7f4" font-size="11">duty</text>
<line x1="378" y1="274.4" x2="390" y2="274.4" stroke="#6b7b74" stroke-width="1" stroke-dasharray="3,3"/>
<rect class="bar-grow-v" x="390" y="239.4" width="46" height="35" fill="#ff4f65" fill-opacity="0.80"/>
<text x="413" y="231" text-anchor="middle" fill="#ff4f65" font-size="11" font-weight="700">&#8722;9.75</text>
<text x="413" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11">STT</text>
<line x1="436" y1="303.3" x2="448" y2="303.3" stroke="#6b7b74" stroke-width="1" stroke-dasharray="3,3"/>
<rect class="bar-grow-v" x="448" y="274.4" width="46" height="28.9" fill="#ff4f65" fill-opacity="0.80"/>
<text x="471" y="266" text-anchor="middle" fill="#ff4f65" font-size="11" font-weight="700">&#8722;8.04</text>
<text x="471" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11">GST</text>
<line x1="494" y1="361.7" x2="506" y2="361.7" stroke="#6b7b74" stroke-width="1" stroke-dasharray="3,3"/>
<rect class="bar-grow-v" x="506" y="303.3" width="46" height="58.4" fill="#ff4f65" fill-opacity="0.80"/>
<text x="529" y="295" text-anchor="middle" fill="#ff4f65" font-size="11" font-weight="700">&#8722;16.25</text>
<text x="529" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11">Slippage</text>
<text x="529" y="416" text-anchor="middle" fill="#f2f7f4" font-size="11">+ spread</text>
<rect class="bar-grow-v" x="564" y="293.8" width="46" height="67.9" fill="#ff4f65"/>
<text x="587" y="378" text-anchor="middle" fill="#ff4f65" font-size="12" font-weight="700">&#8722;&#8377;18.88</text>
<text x="587" y="402" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">Net</text>
<text x="587" y="416" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">expectancy</text>
<text x="340" y="448" text-anchor="middle" fill="#92a59c" font-size="11">Verified statutory stack: &#8377;62.61 round trip + &#8377;16.25 illustrative slippage/spread = &#8377;78.88 per trade</text>
</svg>
</figure>

### Costs can flip the sign: +0.05R gross becomes −0.03R net

Now the reveal. Take a strategy with a genuine but thin gross edge: 35% win rate, average win 2R, average loss 1R. Gross expectancy = (0.35 × 2) − (0.65 × 1) = 0.70 − 0.65 = **+0.05R per trade**. A small green number — the kind backtests hand out freely.

Now pay the stack. Suppose total friction — the statutory stack plus an illustrative slippage-and-spread allowance — runs 0.08R per trade. (To ground that: at an initial risk of ₹800 per trade, the verified ₹62.61 round trip alone is about 0.078R — the assumption is the risk size, not the schedule figure.) Net expectancy = 0.05 − 0.08 = **−0.03R per trade**. The sign flipped. The strategy didn't change. Nobody made a mistake in the entries. The backtest's green number was simply gross, and the account pays net.

This is not hypothetical fear. A recent independent backtest audit (public repo, ~226 implementations of 46 retail trading concepts on NIFTY/BANKNIFTY) found no validated edge; its intraday long-option bots were net-negative in a one-year holdout after full statutory costs. The research is third-party, not ours — but it confirms the mechanism this section teaches: **the stack is a fixed tax per trade, so it hurts thin edges most — and retail scalpers live exactly there.**

### Subtract costs as their own term — never fold them into the averages

One honest-math rule for the formula. Net expectancy = **gross expectancy − average cost per trade**. The cost average must be taken over the *same trade set* — every closed trade, breakevens included. Do not smear fees into the average win and average loss instead. Fold them in and you corrupt both inputs: your "average win" no longer describes your winners, and you can never isolate what the costs actually cost you. Keep the stack as its own term — gross edge, minus the per-trade tax, equals the number the account keeps.

The flip side also matters: because the stack is roughly fixed per trade, **costs move your breakeven point** — you need a higher win rate or a wider payoff to stay green after the tax. The full [breakeven win-rate table](/articles/break-even-win-rate/) is in its own chapter; the point here is that the breakeven you must clear is the *net* one.

### The test to run

Compute your own per-trade cost stack. Our [Indian options-cost calculator](/tools/options-cost/) (the full statutory stack: brokerage, STT, exchange charges, SEBI fee, stamp duty, GST) and our [crypto-futures cost calculator](/tools/crypto-futures/) (maker/taker fees, funding estimates) will do the arithmetic from your inputs — the companion [Indian options charges guide](/articles/options-trading-charges-india/) walks the full breakdown, and the [crypto futures funding guide](/articles/crypto-futures-funding-rates/) covers the holding-time drag. Re-run your expectancy net of the stack. If the sign flipped, you don't have a losing strategy — you have a *gross* strategy. And one bridge, for later: [position sizing only matters after expectancy is established](/articles/position-sizing/) — no size can rescue a negative net number.

For slippage, don't guess twice: log fill vs signal price on your next 30 trades and use the mean as your per-trade allowance — then it stops being an assumption.

## The honesty ledger: what counts as a trade

Two formulas and a cost stack are worthless if the sample you feed them is dishonest. Four ledger rules decide whether your input sample is honest before the number means anything. The first three are one-liners serving the formula above; the skipped-signals rule is the one almost no trading article teaches, so this chapter teaches it in full.

**Closed trades only.** Open positions never enter either method — unrealized P&L is not an observation. (The mirror of the Way 2 rule.)

**Breakevens and scratches count — as zero.** They enter the count: in Way 2 they contribute ₹0 to the numerator and +1 to the denominator. Excluding them is cherry-picking — it drops zeros from the average while keeping the trades that cost time and charges. The scratch that cost ₹63 in charges and made ₹0 is a real −₹63 observation. Log it.

**Keep risk flat while you measure.** R-expectancy is an average of trade results divided by initial risk — that average only means something if the denominator was the same across the whole window. If your biggest positions happened to hold your worst trades, your ₹ expectancy is contaminated by position sizing and your R expectancy describes a strategy that never existed. Fix risk flat for the measurement window, measure, then size. ([Position sizing](/articles/position-sizing/) is where the sizing conversation happens — after the measurement, never during it.)

### Skipped signals must be logged

A strategy you trade selectively is not the strategy you measured. Every signal your system fired that you skipped — because it "didn't feel right," because you were at lunch, because the previous trade was still open — is selection bias in disguise. The measured expectancy belongs to the trades you *took*, but the skipped ones are precisely where your fear or your schedule intervened, and intervention is the part of the system you are not measuring. Log the skip with a one-word reason. If the skipped signals would have won, your measured expectancy understates the system and your discipline is the edge leak. If they would have lost, your measured number is flattered and your skipping is unmeasured alpha. Either way: unlogged skips make the sample a story, not data.

One line on the bigger honesty question: even a cleanly kept sample can be overfit — curve-fit to noise in the testing window — which is exactly why the sample you measured must be honest *first*, before asking whether it generalizes. That question gets its own chapter, on overfitting, next in the protocol.

### The test to run

Audit your trade log against the four ledger rules before you trust the number from sections 1 and 2: are only closed trades in the sample? Are breakevens and scratches in the count as zeros? Are skipped signals logged with reasons? Was initial risk flat across the window? Any "no" means your expectancy is a rumor with good formatting. Fix the ledger, recompute.

## Expectancy vs profit factor: the one distinction that matters

Profit factor gets a full chapter of its own — this is the one crisp distinction you need here, not a re-teach. They are two questions asked of the same ledger.

### Profit factor is efficiency; expectancy is pay

- **Profit factor = gross profit ÷ gross loss.** An efficiency ratio: for every rupee lost, how many rupees were won.
- **Expectancy = net profit ÷ number of trades.** Money per trade: what one average trade pays.

A high profit factor with very few trades can pay almost nothing in rupees. A modest profit factor on high frequency can still add up to substantial rupee gains. The full deep-dive — including what a "good" profit factor looks like — lives in the [profit factor chapter](/articles/profit-factor/).

### The identity: PF = p×R ÷ (1−p) — the profit-factor chapter's equation in different notation

With p = win rate and R = the payoff ratio (average win ÷ average loss — the same ratio at the heart of the [win rate vs risk-reward discussion](/articles/win-rate-vs-risk-reward/)), the two are algebraically linked: **PF = p × R ÷ (1 − p)**. This is the profit-factor chapter's equation written with different symbols, not a new reveal — its only job here is to show the two metrics are the same ledger viewed twice. Rearranged, it even recovers the win rate: p = PF ÷ (PF + R). Check it on our example: p = 0.44, payoff R = 1.93 → PF = 0.44 × 1.93 ÷ 0.56 = 1.516. Recover p: 1.516 ÷ (1.516 + 1.93) = 0.44 — the actual win rate. Same ledger, different questions: profit factor asks "how efficient was the operation," expectancy asks "what did each trade pay me."

One line on the mechanism where the distinction bites: a single lucky outlier can inflate profit factor dramatically while spreading thinly across per-trade expectancy — so when PF looks heroic and expectancy looks thin, run the [profit factor chapter's outlier test](/articles/profit-factor/) and [Chapter 2's outlier deletion test](/articles/how-to-know-if-trading-strategy-works/) (remove the best trade, recompute) before believing either number.

And one confusion to clear permanently: some pages call **average win ÷ average loss** the "expectancy ratio." It is not expectancy at all — it is the **payoff ratio**. Expectancy is the per-trade average in ₹ or R, never a ratio.

### The test to run

Compute both profit factor and expectancy on your log. If they tell the same story — decent PF, decent per-trade pay — both questions have the same answer. If PF looks heroic while expectancy is thin, hunt the outlier: sort your trades by result, find the tail, and ask whether it belongs to the strategy or to luck.

## From per-trade to per-month: turning expectancy into money

A per-trade number is an abstraction. Money arrives per month. The translation is one multiplication — plus two honesty rules: use your realistic frequency, and remember the average says nothing about the path.

### Net expectancy × honest frequency = expected money

**Expected money per month = net per-trade expectancy × realistic trades per month.** The honesty rule: frequency must be your *realistic live frequency* — after skipped signals, no-trade days, holidays, and the days you simply don't trade. Backtest trade counts overstate live frequency, and every phantom trade in the multiplier inflates the monthly number. Use the frequency you actually sustained over the last few months, not the frequency the backtest fired.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Table translating per-trade net expectancy and monthly trade frequency into expected monthly return, with the honest-frequency caveat." class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Net expectancy / trade &#215; honest frequency = expected R / month</text>
<text x="190.0" y="82.2" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700"></text>
<rect x="240" y="56" width="100" height="44" fill="#1d2b26"/>
<text x="290.0" y="82.2" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">25 trades</text>
<rect x="340" y="56" width="100" height="44" fill="#1d2b26"/>
<text x="390.0" y="82.2" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">50 trades</text>
<rect x="440" y="56" width="100" height="44" fill="#1d2b26"/>
<text x="490.0" y="82.2" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">80 trades</text>
<rect x="540" y="56" width="100" height="44" fill="#1d2b26"/>
<text x="590.0" y="82.2" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">200 trades</text>
<rect x="140" y="100" width="100" height="44" fill="#1d2b26"/>
<text x="190.0" y="126.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">+0.05R</text>
<text x="290.0" y="126.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">1.25R</text>
<text x="390.0" y="126.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">2.50R</text>
<text x="490.0" y="126.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">4.00R</text>
<text x="590.0" y="126.55" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">10.00R</text>
<rect x="140" y="144" width="100" height="44" fill="#1d2b26"/>
<text x="190.0" y="170.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">+0.10R</text>
<text x="290.0" y="170.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">2.50R</text>
<text x="390.0" y="170.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">5.00R</text>
<text x="490.0" y="170.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">8.00R</text>
<text x="590.0" y="170.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">20.00R</text>
<rect x="140" y="188" width="100" height="44" fill="#1d2b26"/>
<text x="190.0" y="214.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">+0.24R</text>
<text x="290.0" y="214.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">6.00R</text>
<text x="390.0" y="214.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">12.00R</text>
<text x="490.0" y="214.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">19.20R</text>
<text x="590.0" y="214.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">48.00R</text>
<rect x="140" y="232" width="100" height="44" fill="#1d2b26"/>
<text x="190.0" y="258.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">+0.40R</text>
<text x="290.0" y="258.55" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">10.00R</text>
<text x="390.0" y="258.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">20.00R</text>
<text x="490.0" y="258.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">32.00R</text>
<text x="590.0" y="258.55" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="400">80.00R</text>
<line x1="140" y1="56" x2="140" y2="276" stroke="#2a3a34" stroke-width="1"/>
<line x1="240" y1="56" x2="240" y2="276" stroke="#2a3a34" stroke-width="1"/>
<line x1="340" y1="56" x2="340" y2="276" stroke="#2a3a34" stroke-width="1"/>
<line x1="440" y1="56" x2="440" y2="276" stroke="#2a3a34" stroke-width="1"/>
<line x1="540" y1="56" x2="540" y2="276" stroke="#2a3a34" stroke-width="1"/>
<line x1="640" y1="56" x2="640" y2="276" stroke="#2a3a34" stroke-width="1"/>
<line x1="140" y1="56" x2="640" y2="56" stroke="#2a3a34" stroke-width="1"/>
<line x1="140" y1="100" x2="640" y2="100" stroke="#2a3a34" stroke-width="1"/>
<line x1="140" y1="144" x2="640" y2="144" stroke="#2a3a34" stroke-width="1"/>
<line x1="140" y1="188" x2="640" y2="188" stroke="#2a3a34" stroke-width="1"/>
<line x1="140" y1="232" x2="640" y2="232" stroke="#2a3a34" stroke-width="1"/>
<line x1="140" y1="276" x2="640" y2="276" stroke="#2a3a34" stroke-width="1"/>
<text x="340" y="316" text-anchor="middle" fill="#92a59c" font-size="12">Frequency must be your realistic live frequency (after skipped signals and no-trade days) &#8212;</text>
<text x="340" y="336" text-anchor="middle" fill="#92a59c" font-size="12">and the number says nothing about the path.</text>
<text x="340" y="372" text-anchor="middle" fill="#14d991" font-size="12" font-weight="700">Green cells: two totally different systems, same +10R/month.</text>
</svg>
</figure>

### Thin edge, high frequency vs fat edge, low frequency

Two strategies, same monthly expectation, completely different lived experience:

- **Scalper:** +0.05R net per trade × 200 trades/month = **+10R/month.** Needs relentless screen time, generates 200 chances for execution error, pays the cost stack 200 times, and lives on a knife-edge where any cost creep flips the sign.
- **Swing trader:** +0.40R net per trade (say, 40% win rate, 2.5R average win, 1R average loss — arithmetic checks: 0.40 × 2.5 − 0.60 × 1 = +0.40R) × 25 trades/month = **+10R/month.** A win rate under 50% is no obstacle when the payoff ratio does the heavy lifting — [the 30%-win-rate case study](/articles/profitable-with-30-percent-win-rate/) walks exactly that arithmetic. Fewer decisions, fewer fees, far more variance per month — a bad month is a handful of trades, not a statistical sample.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Comparison of a thin-edge high-frequency strategy versus a fat-edge low-frequency strategy — same expected monthly return, different costs, screen time, and variance." class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Same +10R/month — completely different lived experience</text>
<rect x="20" y="52" width="310" height="258" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<rect x="350" y="52" width="310" height="258" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<text x="175" y="84" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">thin edge &#215; high frequency</text>
<text x="505" y="84" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">fat edge &#215; low frequency</text>
<circle cx="52" cy="116" r="4" fill="#14d991"/><text x="64" y="121" fill="#f2f7f4" font-size="13">+0.05R / trade</text>
<circle cx="52" cy="148" r="4" fill="#14d991"/><text x="64" y="153" fill="#f2f7f4" font-size="13">200 trades / month</text>
<circle cx="52" cy="180" r="4" fill="#ff4f65"/><text x="64" y="185" fill="#f2f7f4" font-size="13">high fee drag — pays the stack 200&#215;</text>
<circle cx="52" cy="212" r="4" fill="#ff4f65"/><text x="64" y="217" fill="#f2f7f4" font-size="13">high screen time</text>
<circle cx="52" cy="244" r="4" fill="#14d991"/><text x="64" y="249" fill="#f2f7f4" font-size="13">smoother monthly equity</text>
<text x="64" y="286" fill="#92a59c" font-size="11">knife-edge: any cost creep flips the sign</text>
<circle cx="382" cy="116" r="4" fill="#f2a33c"/><text x="394" y="121" fill="#f2f7f4" font-size="13">+0.40R / trade</text>
<circle cx="382" cy="148" r="4" fill="#f2a33c"/><text x="394" y="153" fill="#f2f7f4" font-size="13">25 trades / month</text>
<circle cx="382" cy="180" r="4" fill="#14d991"/><text x="394" y="185" fill="#f2f7f4" font-size="13">low fee drag — pays the stack 25&#215;</text>
<circle cx="382" cy="212" r="4" fill="#14d991"/><text x="394" y="217" fill="#f2f7f4" font-size="13">low screen time</text>
<circle cx="382" cy="244" r="4" fill="#ff4f65"/><text x="394" y="249" fill="#f2f7f4" font-size="13">lumpier monthly equity</text>
<text x="394" y="286" fill="#92a59c" font-size="11">a bad month is a handful of trades</text>
<rect x="20" y="326" width="640" height="48" rx="10" fill="#0f2b23" stroke="#14d991" stroke-width="1"/>
<text x="340" y="356" text-anchor="middle" fill="#14d991" font-size="15" font-weight="700">both = +10R/month — same pay, different fragility</text>
<text x="340" y="404" text-anchor="middle" fill="#92a59c" font-size="11">The monthly number is identical; the lived experience — and the fragility — is not.</text>
</svg>
</figure>

Same pay. One pays the tax collector 200 times; the other pays 25 times. The monthly number is identical; the lived experience — and the fragility — is not.

On benchmarks: [Chapter 1's FAQ owns that answer](/articles/what-is-trading-expectancy/). The contract that matters here is the sample-size one. An expectancy number without a sample size is a rumor: the practitioner contract is under 30 trades directional only (do not size on it), 30–100 usable but noisy (watch the trend, not the point), 100+ stable enough to size on — with Kelly-style math wanting 200+ before it trusts the inputs. The one-liner that makes it visceral: an expectancy of +0.20R measured over just 40 trades, with a typical per-trade standard deviation of 1.4R, has a standard error of about 0.22R — the "edge" is statistically indistinguishable from zero. The full evidence contract — power, independence, regime change — is in the [sample-size chapter](/articles/how-many-trades-to-validate-a-strategy/).

### The test to run

Translate your net expectancy into monthly money at your *honest* trade frequency, then re-check the contract: is your n big enough for the number to mean something? A +0.30R expectancy on 18 trades is not a strategy — it is a hypothesis with good manners.

## The honest limit: expectancy is silent on the path

An average tells you where you land. It tells you nothing about whether you survive the trip. Three failure modes, all compatible with a genuinely positive expectancy — each a bridge, not a re-teach:

1. **The sample was too small.** Variance dominates small samples — the [sample-size chapter](/articles/how-many-trades-to-validate-a-strategy/) owns this evidence contract. The measured edge may be noise wearing a green shirt.
2. **The costs weren't in the math.** Gross, not net — section 2's lesson. A +0.05R laboratory edge that pays 0.08R in friction is a −0.03R loser, and it loses *reliably*.
3. **The sequence hit a drawdown the account couldn't survive.** Expectancy is an average over trades, not over time — the [risk-of-ruin chapter](/articles/risk-of-ruin-trading/) prices survival, which no average can.

To put a scale on the third failure mode, take a publicly published 10,000-run simulation study — reproducible if you want to check it: 250 trades drawn from a 55% win rate with a 1.2R payoff (+0.21R expectancy). Its outcomes: median year +51R, a worst-5% year of +23R, and a worst-5% maximum drawdown of *15R or more*. Same edge, three different lived years. The average arrived for almost everyone; the path nearly killed the unlucky ones. Expectancy never promised survival.

### Risk disclosure: what expectancy can never promise

This is mandatory, and it is not decoration. **Trading can lose capital** — the per-month translation above is an expectation, not a schedule. **Options are leveraged instruments whose premia decay with time (theta)**; a positive expectancy computed on clean fills still faces gap risk and time decay you never modeled. Treat the headline carefully, but the direction is unambiguous: roughly **9 in 10 individual F&O traders lose money** (SEBI's study of individual F&O participation, covering approximately the three years to FY24). Expectancy is a long-run average, never a guarantee — and the average only pays the traders who are still in the game when it arrives. Two bridge lines for later chapters: Kelly-style and fixed-fractional sizing only make sense *after* expectancy is established — sizing on a negative or thin expectancy accelerates losses, it doesn't recover them. And our [What-If simulator](/tools/what-if-simulator/) prices the *path*, not the per-trade number: it measures sequence risk on an existing sample — it does not validate the edge.

### The test to run

Take your net expectancy and ask the survival question, not the average question: *what drawdown could the sequence inflict before the average arrives — and would my account still be alive?* Then read the [risk-of-ruin chapter](/articles/risk-of-ruin-trading/) before sizing anything. Expectancy tells you the edge is real. Ruin math tells you whether you'll live to collect it.

## Frequently asked questions

### What is the formula for trading expectancy?

(Win rate × average win) − (loss rate × average loss), with average loss entered as a positive magnitude. Or the shortcut: net profit ÷ number of closed trades, with breakevens and scratches counted as zero. Both give the same number — compute both and let them cross-check each other. The full journal build is [Chapter 1's tutorial](/articles/what-is-trading-expectancy/).

### Should expectancy be calculated in rupees or in R?

Both, for different jobs. ₹ answers "what does this pay me" — use it for P&L projections (net expectancy × realistic monthly frequency). R answers "how good is the strategy" — R-multiple comparisons travel across account sizes and position sizes, ₹ doesn't. Convert with: ₹ expectancy = R-expectancy × ₹ risk per trade.

### What is a good expectancy for a trading system?

The benchmark answer lives in [Chapter 1's FAQ](/articles/what-is-trading-expectancy/). The contract that matters more than the tier: whatever your number, know your n before you believe it.

### How many trades do I need before my expectancy number is reliable?

Under 30 trades is directional only; 30–100 is usable but noisy (watch the trend, not the point); 100+ is stable enough to size on. As a rule of thumb: an expectancy number without a sample size is a rumor. The full evidence contract is in the [sample-size chapter](/articles/how-many-trades-to-validate-a-strategy/).

### What is the difference between expectancy and profit factor?

Profit factor (gross profit ÷ gross loss) is an efficiency ratio; expectancy (net profit ÷ trades) is money per trade. One lucky outlier can inflate profit factor while barely representing the system; expectancy spreads every trade's weight evenly across the count. They're linked by PF = p×R ÷ (1−p) — same ledger, different questions. The full treatment is in the [profit factor chapter](/articles/profit-factor/).

### Do I subtract brokerage and taxes when calculating expectancy?

Yes — this is the article's central move. Gross expectancy is the laboratory number; net expectancy (after brokerage, STT, exchange charges, stamp duty, SEBI fee, GST, plus slippage and spread) is the account's number. On a worked NIFTY option trade, the verified statutory round trip is ₹62.61 before slippage — and that fixed tax per trade can flip a thin +0.05R gross edge into a −0.03R net loss. Subtract costs as their own term; never fold them into the averages. One line on income tax: tax on F&O profits is computed annually on your net income and is NOT subtracted per trade — your per-trade net expectancy is what feeds the tax return, not the other way round.

### How do I convert expectancy per trade into monthly income?

Multiply net per-trade expectancy by your realistic monthly trade frequency — realistic meaning after skipped signals and no-trade days, not the backtest's trade count. And remember the limit: the number says nothing about the path (drawdown) between here and the average.

### Can a strategy have positive expectancy and still lose money?

Yes, three ways: the sample was too small (variance), the costs weren't in the math (gross vs net), or the sequence hit a drawdown the account couldn't survive. Expectancy is an average — it is silent on the path.

### What is expectancy ratio vs payoff ratio?

A naming confusion worth clearing once: some pages call average win ÷ average loss the "expectancy ratio." It's the payoff ratio. Expectancy is the per-trade average in ₹ or R — never a ratio.

## What comes next in the Week-2 protocol

This chapter gave you the honest number: two ways to compute it and the identity that checks your bookkeeping, the gross-vs-net cost stack that decides whether the number survives contact with your account, the honesty ledger that decides whether the sample deserves the math, the profit-factor distinction, and the monthly translation with its silent-on-the-path limit.

The protocol now turns the lens inward. Next: **was the sample you just measured even honest in the first place?** The overfitting chapter asks whether your edge was curve-fit to noise — the one question this chapter's arithmetic cannot answer for you. After that, the Monte Carlo chapter prices the path the average hides, and the paper-vs-real chapter asks what changes when real money is on the line. The number is only the beginning. The validation is the work.

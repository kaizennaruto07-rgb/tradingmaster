---
title: "When to Quit a Strategy: How to Tell a Broken System From a Normal Drawdown"
description: "Drawdown or broken? Use the three-numbers quit contract, rolling expectancy across 30–50 trades, and the retire-vs-adjust rule to decide with evidence."
meta_description: "Drawdown or broken? Use the three-numbers quit contract, rolling expectancy across 30–50 trades, and the retire-vs-adjust rule to decide with evidence."
date: 2026-10-20
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["when to quit a trading strategy", "how to know if a trading strategy is broken", "when to stop trading a strategy", "drawdown vs broken strategy", "trading strategy decay", "how many losing trades before quitting a strategy", "rolling expectancy trading", "when to retire a trading strategy"]
---

*By Kaizen · 20 October 2026 · Monks Of Market*

Every trader has asked the question in the red months: is this just a drawdown, or is my strategy actually broken? Most answer it with their stomach. They quit a perfectly good system because the pain got loud — or they nurse a dead one for another year because they refuse to believe the evidence.

Both mistakes are the same disease: deciding without a protocol. This article gives you one: a way to separate a broken system from a normal drawdown using your own numbers, before the pain or the pride makes the decision for you.

## Dead or Drawdown? The Answer in Three Numbers

Here is the short answer, up front: **a strategy is dead when it breaks its own historical bounds.** Not when it hurts. Not when you're bored of it. When it does something it has never done before, in the wrong direction, across three specific numbers:

1. **Max historical drawdown depth** — the deepest peak-to-trough loss your own trade history has ever produced.
2. **Max drawdown duration** — the longest your account has ever stayed underwater before making a new high.
3. **Longest losing streak** — the worst run of consecutive losses in your record.

If your live trading breaks one of these bounds meaningfully, the system is no longer behaving like the system you tested. That does not *prove* it is broken — no statistic can, and more on that caveat shortly — but it is the pre-agreed trigger that forces you to stop, evaluate, and either retire the system or find a genuine structural explanation for the breach.

Notice what this does not include: how you feel. Your feelings about a drawdown are real, but they are also guaranteed to be worst exactly when the data says "normal." Write the three numbers in a calm month. Execute them in a bad one.

## Why Most Traders Get Quitting Wrong in Both Directions

This is the part nobody wants to hear: there are two failure modes, and most traders cycle between both.

**Error one: quitting a live system too early.** A strategy with a real edge can produce a disproportionate share of its annual return in a handful of weeks — particularly for systems with fat-tailed return distributions (trend, breakout) — and spend long stretches underwater in between. That lumpiness is not a universal fact about every system (a high-win-rate mean-reversion scalper pays out very differently), but the general point holds: quitting at the bottom of a normal drawdown is how traders spend their careers funding their brokers — they pay the drawdown, then miss the recovery. As the companion piece on [recovery factor](/articles/recovery-factor/) puts it, the drawdown is the price of admission; walking away before the show starts is just paying admission for nothing.

**Error two: keeping a dead system too long.** Sunk-cost pride, fear of admitting the backtest was fantasy, the hope that "it worked in 2023." Every month you run a genuinely decayed system, you're not just losing money — you're losing the opportunity to be running something that works, and you're collecting evidence that teaches you nothing.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Two-column cost table comparing type-I error, quitting a live system too early, with type-II error, nursing a dead system too long." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Two ways to get quitting wrong</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">Both errors cost you &#8212; in opposite directions</text>
<rect x="40" y="80" width="290" height="250" rx="14" fill="#2a3a34" stroke="#e8825a" stroke-width="2"/>
<text x="185" y="112" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">TYPE-I ERROR</text>
<text x="185" y="140" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Quit too early</text>
<text x="185" y="168" text-anchor="middle" fill="#f2f7f4" font-size="11">You absorb the full drawdown</text>
<text x="185" y="184" text-anchor="middle" fill="#f2f7f4" font-size="11">and forfeit the recovery.</text>
<line x1="110" y1="205" x2="260" y2="205" stroke="#3a4d46" stroke-width="1"/>
<text x="185" y="228" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">Typical damage:</text>
<text x="185" y="248" text-anchor="middle" fill="#f2f7f4" font-size="11">repeated churn through strategies,</text>
<text x="185" y="264" text-anchor="middle" fill="#f2f7f4" font-size="11">compounding broker fees,</text>
<text x="185" y="280" text-anchor="middle" fill="#f2f7f4" font-size="11">edge never held long enough</text>
<text x="185" y="296" text-anchor="middle" fill="#f2f7f4" font-size="11">to collect.</text>
<rect x="350" y="80" width="290" height="250" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="495" y="112" text-anchor="middle" fill="#8fd6a0" font-size="12" font-weight="700">TYPE-II ERROR</text>
<text x="495" y="140" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Nurse a dead system</text>
<text x="495" y="168" text-anchor="middle" fill="#f2f7f4" font-size="11">Every new trade runs at</text>
<text x="495" y="184" text-anchor="middle" fill="#f2f7f4" font-size="11">negative expectancy.</text>
<line x1="420" y1="205" x2="570" y2="205" stroke="#3a4d46" stroke-width="1"/>
<text x="495" y="228" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">Typical damage:</text>
<text x="495" y="248" text-anchor="middle" fill="#f2f7f4" font-size="11">slow bleed of capital, plus the</text>
<text x="495" y="264" text-anchor="middle" fill="#f2f7f4" font-size="11">hidden opportunity cost of</text>
<text x="495" y="280" text-anchor="middle" fill="#f2f7f4" font-size="11">not trading anything else.</text>
<text x="340" y="366" text-anchor="middle" fill="#92a59c" font-size="12">Both mistakes are the same disease: deciding without a protocol.</text>
</svg>
</figure>

The entire rest of this article is machinery for making the type-I error and the type-II error both unlikely. Not impossible — unlikely.

## The Quit Contract: Your Three Numbers, Written Before the Drawdown

The quit contract is a document you write once, in a calm period, and sign like a contract with a calmer version of yourself. It contains your three numbers, computed from your full trade history (backtest plus live, net of costs):

- **My max historical drawdown depth:** ___% (or ₹___)
- **My max historical drawdown duration:** ___ (in trading days, or number of trades — not calendar days, since weekends distort calendar-day counts)
- **My longest losing streak:** ___ trades

For the duration number, pick the unit that matches how you trade: trading days if you trade daily, number of trades if you trade infrequently. Calendar days look precise but quietly inflate your bounds with weekends and holidays your system was never exposed to.

Then, beneath them, the rule: *if live trading breaks any of these bounds by a meaningful margin — say 20–30% beyond the historical mark — I stop trading the system, run the post-mortem protocol below, and decide whether to retire, adjust, or resume with evidence.*

Here is what a finished contract looks like, so you are not filling in blanks blind:

**Example contract — My max historical drawdown depth: 11.4% | duration: 63 trading days | longest losing streak: 8 trades — breach rule: 25% beyond any of these.** That means this trader stops the system at roughly a 14.25% drawdown, ~79 trading days underwater, or a 10-loss streak — and runs the post-mortem before doing anything else.

One important honesty line before you write yours: if your history is under ~100 trades, treat your bounds as provisional — see Limitations. Young-system bounds get breached by normality itself; the contract still works, but your breach margin should be wider and your verdicts more tentative until the history deepens.

Two discipline points separate a protocol from a suggestion:

- **Write it before the drawdown.** A contract written mid-drawdown is a hostage negotiation. Yours gets written when everything is fine, and you commit to obeying it when things are not.
- **Log it where you will actually read it.** Put it at the front of your trading journal — the same instrument where you log every trade's planned-vs-actual R. The journaling piece on [what to track beyond P&L](/articles/trading-journal-what-to-track-beyond-pnl/) covers exactly how to build that instrument.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Quit contract diagram: three cards for drawdown depth, underwater duration, and longest losing streak, each with a breach line feeding into one decision — breach means stop, post-mortem, retire, adjust, or resume with evidence." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The quit contract: three numbers, one decision</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">Written in a calm month &#8212; executed in a bad one</text>
<rect x="35" y="80" width="190" height="190" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="130" y="110" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">DRAWDOWN DEPTH</text>
<text x="130" y="150" text-anchor="middle" fill="#f2f7f4" font-size="26" font-weight="700">11.4%</text>
<text x="130" y="172" text-anchor="middle" fill="#92a59c" font-size="10">max peak-to-trough loss</text>
<line x1="55" y1="196" x2="205" y2="196" stroke="#e8825a" stroke-width="2" stroke-dasharray="5 4"/>
<text x="130" y="218" text-anchor="middle" fill="#e8825a" font-size="10">breach +25%: 14.25%</text>
<rect x="245" y="80" width="190" height="190" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="340" y="110" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">UNDERWATER DURATION</text>
<text x="340" y="150" text-anchor="middle" fill="#f2f7f4" font-size="26" font-weight="700">63 days</text>
<text x="340" y="172" text-anchor="middle" fill="#92a59c" font-size="10">trading days, not calendar</text>
<line x1="265" y1="196" x2="415" y2="196" stroke="#e8825a" stroke-width="2" stroke-dasharray="5 4"/>
<text x="340" y="218" text-anchor="middle" fill="#e8825a" font-size="10">breach +25%: ~79 days</text>
<rect x="455" y="80" width="190" height="190" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="550" y="110" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">LONGEST LOSING STREAK</text>
<text x="550" y="150" text-anchor="middle" fill="#f2f7f4" font-size="26" font-weight="700">8 trades</text>
<text x="550" y="172" text-anchor="middle" fill="#92a59c" font-size="10">worst consecutive run</text>
<line x1="475" y1="196" x2="625" y2="196" stroke="#e8825a" stroke-width="2" stroke-dasharray="5 4"/>
<text x="550" y="218" text-anchor="middle" fill="#e8825a" font-size="10">breach +25%: 10 losses</text>
<line x1="130" y1="276" x2="130" y2="302" stroke="#3a4d46" stroke-width="2"/>
<line x1="340" y1="276" x2="340" y2="302" stroke="#3a4d46" stroke-width="2"/>
<line x1="550" y1="276" x2="550" y2="302" stroke="#3a4d46" stroke-width="2"/>
<rect x="150" y="306" width="380" height="88" rx="14" fill="#2a3a34" stroke="#e8825a" stroke-width="2"/>
<text x="340" y="342" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">BREACH &#8594; stop, run the post-mortem</text>
<text x="340" y="366" text-anchor="middle" fill="#92a59c" font-size="11">retire &#183; adjust &#183; resume with evidence</text>
</svg>
</figure>

## Signal 1 — Broken Bounds: The Drawdown Exceeds Its Own History

This is the primary quit trigger, and it comes straight from the three numbers. If your system has never, in its entire tested and live history, lost more than 12% peak-to-trough, and it is now down 18%, it is behaving like something that is not the system you bought. Stop it. Run the post-mortem.

But the honest caveat, and it matters: **a new all-time maximum drawdown will eventually happen to ANY stationary system.** Expected maximum drawdown grows with sample length — the more trades you take, the deeper the worst one you will eventually see. So "breaking bounds" is a *decision trigger*, not proof of breakdown. It says: this is now unusual enough that trading through it on faith is no longer defensible. You stop and demand evidence, in both directions — evidence it broke, or evidence it hasn't.

That framing protects you from both errors at once. The trigger catches you before pride keeps you in too long; the "trigger, not verdict" discipline stops panic from quitting a live system too early.

For the full mechanics of measuring drawdown properly — depth, duration, and why underwater time hurts more than most traders expect — see [maximum drawdown](/articles/maximum-drawdown/).

## Signal 2 — Deteriorating Rolling Expectancy: The 30–50 Trade Rule

Drawdown depth tells you something broke. Rolling expectancy tells you *what*: is the engine still producing edge per trade, or is it running on fumes?

**The rule:** compute your expectancy (average R-multiple per trade, net of costs — see [how to calculate real expectancy](/articles/how-to-calculate-real-expectancy/)) across your most recent 30–50 trades, and compare it against your full-history expectancy. One bad window is almost always variance; genuine deterioration shows up across windows.

To build the two windows: take your most recent 60 trades, split them at the midpoint into two non-overlapping 30-trade blocks, and compare each block against your full history.

The math backs this up. Take a strategy with a 40–60% baseline win rate. A single 30-trade window running 15 percentage points below baseline has about a 5% chance of happening by pure noise (computed via the normal approximation to binomial sampling error, 2026-10-19). Uncomfortable, but common. Now take *two non-overlapping* 30-trade windows, both 15+ points below baseline: the chance of that under no real change is roughly 0.22–0.25% — about 1 in 400. That is no longer noise. That is a signal worth acting on.

In plain terms: one bad 30-trade stretch can be luck; two bad stretches in a row, on separate blocks of trades, almost never is.

A sharper illustration: a win rate collapsing from 50% to 30% measured over 100+ trades has roughly a 0.003% chance (z ≈ 4) of happening by chance if nothing actually changed. That is not variance. That is a different system.

Three mandatory warnings on this signal:

- **The two windows must be non-overlapping.** Overlapping rolling windows are correlated with each other — two overlapping "bad windows" are mostly the same trades counted twice, and the 1-in-400 math collapses. Compare clean, separate blocks of trades.
- **Win rate without payoff context is incomplete.** A 40% win-rate system with 2:1 payoffs is healthy; a 60% win-rate system with 0.5:1 payoffs can be dead. Win-rate deterioration is supporting evidence only — the quit verdict lives in expectancy and R-multiples.
- **Judge expectancy net of costs.** A strategy whose gross expectancy has decayed to near-zero is not "still working, just unlucky" — in Indian markets, costs can be the difference between a marginal system and a negative one. Which brings us to the fee checklist later in this article.

## Signal 3 — The Losers Change Shape

Beyond win rate and expectancy, look at *how* the trades are losing. Two structural changes in your R-multiple distribution are worth taking seriously:

- **Average losing trade growing in R terms.** If your historical losers averaged −1.0R and your recent losers average −1.4R, something has changed in your execution or your market.
- **Winners' realized R-multiples underperforming history.** If your system used to produce winners at +1.8R average and now they stall at +1.1R, the payoff side of the expectancy equation is decaying — even if the win rate looks fine.

But here is the crucial diagnostic step most traders skip: **drifting losers are usually an execution problem, not a strategy problem.** Growing average losses in R terms most commonly come from stop-loss violations — moving stops, widening stops, "giving it room." That is slippage in your discipline, not decay in the market. Before you retire the system, audit your recent trades: did the losers that grew in size actually execute the plan, or did you override it? Check your journal's plan-followed field first (see the [journaling instrument](/articles/trading-journal-what-to-track-beyond-pnl/)).

If execution was clean and the R-distribution has still shifted — losers bigger, winners smaller, plan followed faithfully — that is genuine evidence of decay. The takeaway: execution problems are fixable and the system survives; distribution decay with clean execution means the market changed or the edge is gone.

## Signal 4 — Regime Shift: It's Not Broken, It's in the Wrong Market

A trend-following system in a six-month sideways market is not a broken system. It is a working system in the wrong market — the classic "sports car on a beach" problem. Before you declare anything dead, check the regime:

- **Has volatility changed structurally?** Some practitioners use a rule of thumb like "ATR running 50%+ above baseline" as a regime-shift flag — but be honest that this is an arbitrary heuristic with no published basis, not a law. Use it as a prompt to investigate, not as a verdict.
- **Have correlations shifted?** A strategy built on Nifty/BankNifty divergence behaves differently when the two start moving in lockstep.
- **Did the instrument's character change?** New lot sizes, expiry structures, or liquidity regimes can quietly rewrite a system's environment. (Indian traders: Nifty options lots moved from 75 to 65 in late 2025 — if your backtest's position sizing was built on the old lots, your "system" changed even though your rules didn't.)

The diagnostic question is simple: *is the current market the kind of market this system was built for?* If yes and it's failing anyway, suspect decay. If no, you haven't found a broken system — you've found an out-of-regime one. Parking it until its regime returns is not quitting; it's the archive protocol in the next section.

To build an intuition for what "normal" looks like across different market conditions — including stretches where a good system simply doesn't fire — [Monte Carlo simulation](/articles/monte-carlo-simulation-for-traders/) is the right tool. It shows you the range of outcomes a healthy system produces, so you can recognize when live results have genuinely left that range.

## Why Losing Streaks Are Terrible Alarms

Ask most traders when they decided their strategy was dead, and they'll say: "I had eight losses in a row." Streaks *feel* like evidence. Statistically, they are almost always normal variance — and this is one place where exact math, computed by dynamic programming over all possible trade sequences (cross-checked with Monte Carlo, 2026-10-19), is worth seeing in full:

**Median longest losing streak by win rate** (assuming constant win rate and independent trades):

| Win rate | Over 100 trades | Over 200 trades |
|----------|-----------------|-----------------|
| 60% | 4 | 5 |
| 55% | 5 | 6 |
| 50% | 6 | 7 |
| 45% | 6 | 8 |
| 40% | 7 | 9 |

Read that table twice. A **40% win-rate strategy will, in a typical 200-trade run, produce a 9-trade losing streak** — not as a disaster, as the *median* outcome. Over 100 trades, a 6-loss streak is **87% likely**; over 200 trades, **98.5% likely**. Your "the system is broken" moment is, statistically, Tuesday.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Table graphic of median longest losing streak by win rate: at 40 percent win rate the median is 7 over 100 trades and 9 over 200 trades, highlighted with the callout that a 9-loss streak is the median outcome, not evidence of failure." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Median longest losing streak</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="10">Exact math: dynamic programming over all trade sequences, cross-checked by Monte Carlo</text>
<line x1="60" y1="86" x2="620" y2="86" stroke="#3a4d46" stroke-width="1"/>
<text x="130" y="110" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">Win rate</text>
<text x="340" y="110" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">Over 100 trades</text>
<text x="510" y="110" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">Over 200 trades</text>
<line x1="235" y1="92" x2="235" y2="322" stroke="#3a4d46" stroke-width="1"/>
<line x1="425" y1="92" x2="425" y2="322" stroke="#3a4d46" stroke-width="1"/>
<line x1="60" y1="126" x2="620" y2="126" stroke="#3a4d46" stroke-width="1"/>
<text x="130" y="150" text-anchor="middle" fill="#f2f7f4" font-size="13">60%</text>
<text x="340" y="150" text-anchor="middle" fill="#f2f7f4" font-size="13">4</text>
<text x="510" y="150" text-anchor="middle" fill="#f2f7f4" font-size="13">5</text>
<line x1="60" y1="166" x2="620" y2="166" stroke="#3a4d46" stroke-width="1"/>
<text x="130" y="190" text-anchor="middle" fill="#f2f7f4" font-size="13">55%</text>
<text x="340" y="190" text-anchor="middle" fill="#f2f7f4" font-size="13">5</text>
<text x="510" y="190" text-anchor="middle" fill="#f2f7f4" font-size="13">6</text>
<line x1="60" y1="206" x2="620" y2="206" stroke="#3a4d46" stroke-width="1"/>
<text x="130" y="230" text-anchor="middle" fill="#f2f7f4" font-size="13">50%</text>
<text x="340" y="230" text-anchor="middle" fill="#f2f7f4" font-size="13">6</text>
<text x="510" y="230" text-anchor="middle" fill="#f2f7f4" font-size="13">7</text>
<line x1="60" y1="246" x2="620" y2="246" stroke="#3a4d46" stroke-width="1"/>
<text x="130" y="270" text-anchor="middle" fill="#f2f7f4" font-size="13">45%</text>
<text x="340" y="270" text-anchor="middle" fill="#f2f7f4" font-size="13">6</text>
<text x="510" y="270" text-anchor="middle" fill="#f2f7f4" font-size="13">8</text>
<line x1="60" y1="286" x2="620" y2="286" stroke="#3a4d46" stroke-width="1"/>
<rect x="60" y="290" width="560" height="36" fill="#e8825a" opacity="0.16"/>
<text x="130" y="314" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">40%</text>
<text x="340" y="314" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">7</text>
<text x="510" y="314" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">9</text>
<line x1="60" y1="326" x2="620" y2="326" stroke="#3a4d46" stroke-width="1"/>
<rect x="60" y="346" width="560" height="60" rx="12" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="340" y="370" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">A 9-loss streak is the MEDIAN outcome for a 40%-win-rate system</text>
<text x="340" y="390" text-anchor="middle" fill="#92a59c" font-size="11">over 200 trades &#8212; not evidence of failure.</text>
</svg>
</figure>

One more trap to avoid, because it poisons a lot of retail advice: you may read that "with a 40% win rate, 6 losses in a row happens about once in 21." That figure — 0.6⁶ ≈ 4.67% — is the probability that **any specific six-trade stretch** is all losses. It is a per-block probability, not a frequency over your trading career. Over a real run of 100 trades, that "once in 21" streak is 87% likely. Anyone quoting it as a frequency is misreading the math — never phrase it that way.

And the deeper caveat: these figures assume a constant win rate and independent trades. If your edge varies by regime — strong in trending markets, weak in chop — streaks cluster *worse* than the table shows. A regime-shifted system can produce nightmare streaks that still aren't "broken" in any fixable sense. That is why streaks are an alarm that tells you to check the three numbers and the rolling expectancy, never a verdict on their own.

## Should You Retire It or Adjust It?

This is the question the drawdown eventually forces: fix the system, or kill it? Practitioner guidance from experienced system traders offers a clean decision rule:

**Adjust only when you can name the specific structural change that justifies the adjustment.** "The market now gaps through my stop level regularly since the lot-size change, so I'm moving entries to the first 15-minute close" is a structural justification. "I'm going to try a 20-period moving average instead of 50 because the last three months would have looked better" is not — that is hunting for a parameter that would have dodged the drawdown, which is fitting to noise.

And the boundary that goes with it: **never adjust parameters mid-drawdown.** Parameter changes made on a losing stretch are optimized on pain, not on evidence. If the system needs structural surgery, you retire it from live trading first, do the work calmly on fresh data, and reintroduce it only with forward-test evidence. Adjusting a live, bleeding system is how you turn a bad quarter into a backtest-fitted fantasy that fails worse.

The mirror-image trap: **adjusting when you should have retired.** If no structural change justifies the surgery — if the honest answer is "the market just doesn't reward this anymore and I don't know why" — that is retirement, not adjustment. A parameter tweak you can't defend structurally is noise-fitting with extra steps.

One more distinction worth making, borrowed from the overfitting literature (see [how to detect overfitting](/articles/how-to-detect-overfitting-in-trading-strategy/)): **decay vs was-never-real.** A system that dies within its first 100 live trades probably didn't decay — it was overfit from birth and the live market is its first honest test. Genuine decay is a system that worked across a long live history and then changed. The retire decision is the same, but the lesson is different: one teaches you about markets, the other teaches you about your backtest.

## Archive, Don't Delete: The Retirement Protocol

Retired does not mean deleted. Markets cycle; volatility regimes return; a setup that starved in a quiet range can feast when volume comes back. So the answer to "can a retired setup work again?" is genuinely yes — but only under a protocol, not a hope:

1. **Write the post-mortem.** One page: what the system did, what changed, what the three numbers looked like at retirement, and why you retired it (decay, regime, execution failure, or was-never-real).
2. **Set a re-examination date.** Six to twelve months out. Not "when I feel like it" — a date on your calendar.
3. **Demand fresh forward-test evidence before re-sizing.** A retired system comes back through [paper trading](/articles/paper-trading-vs-real-trading/) first, with a small live test only after the forward test confirms the regime has returned. It never comes back at full size on nostalgia.

This discipline also answers the deeper fear behind the question: "what if I quit right before it recovers?" If you archived properly, you haven't lost the system — you've shelved it with a return date. The only cost of quitting was the drawdown you already paid, which you would have paid anyway had you stayed.

One honest boundary: **luck-looking-like-skill cuts both ways.** Some "working" systems were never edge — they were lucky streaks on a flat-expectancy system, and their "decay" is just regression to the mean. If your early wins can't pass the [edge-vs-luck checks](/articles/trading-edge-vs-luck/) — hundreds of trades, stable R-distribution, out-of-sample confirmation — then the retirement protocol is really a burial. Archive the lesson, not the system.

## The Indian Trader's Fee-Drag Checklist

None of the retail blogs ranking for this topic cover the Indian cost stack. It belongs in your quit decision, because sometimes "broken" is really "fee-dragged into negative expectancy."

The locked figures:

- **STT on sale of options: 0.15%** (raised from 0.10%, effective 1 April 2026 via the Finance Act 2026; sell-side premium STT). STT on exercised ITM options is also 0.15% (raised from 0.125%). Futures sale STT is 0.05%.
- **NSE equity-options all-in charge: 0.03553% per side** — ₹3,553 per crore of premium turnover (₹3,552.99 transaction charge + ₹0.01 IPFT contribution), per NSE circular NSE/FA/73061, effective 1 March 2026. This is the total-outflow figure traders actually pay; do not use the superseded 0.03503% component-only figure.
- **Nifty lot size: 65** (revised from 75, effective 28-Oct-2025).

A quick illustration of why this matters for the quit decision. Suppose you sell one lot of Nifty options and collect ₹30,000 in premium. The STT on the sale side alone is 0.15% × ₹30,000 = **₹45**. The NSE all-in charge at 0.03553% is roughly **₹10.66 per side** — about ₹21 round-trip before brokerage, stamp duty, SEBI charges, and GST. Against a small edge — say 0.1R per trade on a ₹2,000 risk, or ₹200 of expected value per trade — a ~₹66+ round-trip cost stack is not a rounding error. It is a third of your edge, gone before the market moves.

One caution, in both directions: **fee drag turns marginal expectancy negative; it does not alone break a system.** A deeply negative-expectancy system is broken regardless of fees — don't blame costs for a strategy that was never profitable gross. And a strongly positive system survives costs easily. The quit-decision question fees answer is the narrow one: *is my gross edge real but too thin for this cost structure?* If yes, the fix may be fewer trades, wider targets, or a different instrument — not retirement. For the full segment-by-segment cost math, the [options charges breakdown](/articles/options-trading-charges-india/) works it through completely.

## Limitations: What This Protocol Can't Tell You

No protocol is complete without its boundary lines:

- **Your bounds depend on your sample length.** The three numbers are only as trustworthy as the history behind them. Bounds computed from 80 trades are fragile; expected max drawdown grows as you trade more, so early bounds will be breached by normality itself. Treat young-system bounds as provisional.
- **Regime-varying edges break the streak table.** The median-streak math assumes constant win rate and independent trades. Real edges wax and wane with regime, which clusters losing streaks worse than the table shows. The table tells you what's normal for a stable system — not the worst a real one can do.
- **Win-rate signals need payoff context, always.** Stated once more because it's the most common analytical error: a collapsing win rate with expanding payoffs can be a *healthier* system, not a dying one. The verdict lives in expectancy.
- **SQN-based quit signals need large samples.** A note for the indicator-minded: System Quality Number scales with the square root of trade count, so a healthy system with a long-run SQN of 3.0 will show a rolling 30-trade SQN below 1.6 roughly 73% of the time (Monte Carlo, 30,000 simulations, 2026-10-19) — with zero decay. Comparing a small-window SQN against a full-history threshold is a biased comparison. Use SQN quit signals only on 100+ trade samples, or against a baseline computed on the same window size.
- **This is education, not financial advice.** This protocol organizes your thinking; it does not guarantee returns, and no protocol can. Markets are uncertain, past performance — including your own backtest — does not predict future results, and you can lose money running even a statistically sound system. Never risk capital you cannot afford to lose.

## The One-Page Quit Protocol

Tear this out. Tape it to your monitor.

1. **Write the quit contract** (in a calm month): your three numbers — max historical drawdown depth, max underwater duration (trading days or trades, not calendar days), longest losing streak — plus the breach rule: *20–30% beyond any bound → stop trading the system.*
2. **On breach, run the two-window expectancy check:** take your last 60 trades, split at the midpoint into two non-overlapping 30-trade blocks, and compare each block's net-of-costs expectancy against full history. One bad window = variance; two non-overlapping bad windows ≈ 1-in-400 = act.
3. **Check the losers' shape:** average losing R growing, or winners' R-multiples shrinking? First audit execution (stop violations) — if execution was clean and the distribution shifted, that's decay evidence.
4. **Check the regime:** is this market the kind your system was built for? If not, park it — don't retire it. If yes and it's still failing, suspect the system.
5. **Run the retire-vs-adjust test:** can you name the specific structural change that justifies an adjustment? If yes, adjust in calm, forward-test, reintroduce small. If no, retire.
6. **Archive, don't delete:** one-page post-mortem, a re-examination date 6–12 months out, and a forward test before any re-sizing.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 560" role="img" aria-label="Flowchart of the six-step quit protocol: breach of bounds, two-window expectancy check, losers shape and execution audit, regime check, retire versus adjust test, archive protocol." class="viz">
<defs>
<marker id="wq-arrow" markerWidth="10" markerHeight="8" refX="5" refY="4" orient="auto">
<polygon points="0,0 10,4 0,8" fill="#8fd6a0"/>
</marker>
</defs>
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The one-page quit protocol</text>
<text x="340" y="56" text-anchor="middle" fill="#92a59c" font-size="11">Tear this out. Tape it to your monitor.</text>
<rect x="170" y="80" width="340" height="56" rx="14" fill="#2a3a34" stroke="#e8825a" stroke-width="2"/>
<text x="340" y="114" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">1 &#183; Breach of bounds?</text>
<line x1="340" y1="140" x2="340" y2="152" stroke="#8fd6a0" stroke-width="2" marker-end="url(#wq-arrow)"/>
<rect x="170" y="156" width="340" height="56" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="340" y="190" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">2 &#183; Two-window expectancy check</text>
<line x1="340" y1="216" x2="340" y2="228" stroke="#8fd6a0" stroke-width="2" marker-end="url(#wq-arrow)"/>
<rect x="170" y="232" width="340" height="56" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="340" y="266" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">3 &#183; Losers&#8217; shape / execution audit</text>
<line x1="340" y1="292" x2="340" y2="304" stroke="#8fd6a0" stroke-width="2" marker-end="url(#wq-arrow)"/>
<rect x="170" y="308" width="340" height="56" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="340" y="342" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">4 &#183; Regime check</text>
<line x1="340" y1="368" x2="340" y2="380" stroke="#8fd6a0" stroke-width="2" marker-end="url(#wq-arrow)"/>
<rect x="170" y="384" width="340" height="56" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="340" y="418" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">5 &#183; Retire vs adjust test</text>
<line x1="340" y1="444" x2="340" y2="456" stroke="#8fd6a0" stroke-width="2" marker-end="url(#wq-arrow)"/>
<rect x="170" y="460" width="340" height="56" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="340" y="494" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">6 &#183; Archive protocol</text>
</svg>
</figure>

## FAQ

### How do I know if my trading strategy is no longer working?
Your strategy is no longer working when it breaks its own historical bounds: a drawdown deeper than its max historical depth, an underwater period longer than its longest, or a losing streak beyond its worst — combined with deteriorating rolling expectancy (last 30–50 trades vs full history, net of costs). No single number proves it; the combination of broken bounds plus a two-window expectancy decline is the practical verdict. Losing streaks alone are not evidence — they're usually normal variance.

### How many trades does it take to know if a strategy is dead?
You need enough trades for the statistics to mean something: at minimum 30–50 recent trades for a rolling expectancy read, and 100+ trades for a strong verdict (a 50%→30% win-rate collapse over 100 trades has roughly a 0.003% chance of being noise). One bad 30-trade window is almost always variance; two non-overlapping 30-trade windows both deteriorating is about a 1-in-400 event and worth acting on. There is no magic number — there are confidence levels, and they grow with sample size.

### What is the difference between a drawdown and a broken strategy?
A drawdown is a loss within the system's historical bounds — deep, painful, but precedented. A broken strategy is one whose behavior has left its historical bounds: deeper drawdowns, longer underwater stretches, or structurally changed R-multiples than its own record shows. The practical difference: a drawdown in a live system is the price of admission you pay to collect the edge; a broken system has no edge left to collect. Your pre-written quit contract (the three numbers) is what tells them apart, because it was written when you could think clearly.

### How many losing trades in a row means a setup has stopped working?
More than you'd think. Exact math (dynamic programming, cross-checked by Monte Carlo): a 40% win-rate system has a *median* longest losing streak of 9 over 200 trades, and a 6-loss streak is 87% likely over 100 trades. Even at 50% win rate, the median is 7 over 200 trades. So no streak length by itself means the setup stopped working — streaks are terrible alarms. Use them as a prompt to check your three numbers and rolling expectancy, never as the verdict.

### Do trading setups really stop working?
Yes — strategy decay is real, and it's one of the best-documented phenomena in finance. In the published version of Hou, Xue &amp; Zhang's "Replicating Anomalies" (Review of Financial Studies, 2020), 65% of 452 tested anomaly variables failed to clear the single-test significance hurdle (t = 1.96), and 82% failed the stricter multiple-testing hurdle (t = 2.78) — many edges that "worked" in-sample don't survive out-of-sample. (The replication debate has legitimate arguments on both sides, but the decay direction is well established.) Edges decay because markets adapt, crowds pile in, regimes change, and costs rise. The question was never whether setups stop working — it's whether *yours* has, which is what the protocol above answers.

### Should you retire a setup or adjust it?
Adjust only when you can name the specific structural change that justifies it — a regime shift, a rule change, a market-structure event. If you're hunting for a parameter that would have dodged the recent drawdown, you're fitting to noise: retire the system. And never adjust parameters mid-drawdown — do the work in calm, on fresh data, and reintroduce the system through forward testing. If you can't name a structural reason, retirement is the honest answer.

### Can a retired trading setup start working again?
Yes — dead regimes return. A trend system shelved in a sideways market can work again when trends return; a volatility setup starved in quiet ranges can feast when volume comes back. But "again" has to be earned, not assumed: write the post-mortem, set a re-examination date 6–12 months out, and demand fresh forward-test evidence (paper trading first) before re-sizing. A retired system never comes back at full size on nostalgia. And if the early "working" period was really luck on a flat-expectancy system, the right move is burial, not resurrection.

### What is strategy decay in trading?
Strategy decay is the gradual erosion of a trading edge over time: the same rules produce less expectancy per trade, smaller winners, or more frequent losses than their history. It happens because markets adapt (crowding arbitrages away the mispricing), regimes shift (the conditions the edge exploited disappear), or costs rise relative to the edge (fee drag eats a thinning margin). Decay is different from a drawdown (temporary, within bounds) and different from overfitting (the edge was never real). You detect it the same way you detect anything in this article: broken historical bounds plus deteriorating rolling expectancy with clean execution.

---

*Educational content only — not financial advice. Trading involves substantial risk of loss, and no decision protocol can guarantee returns. Past performance, including backtested and historical live results, does not predict future outcomes. Never trade with money you cannot afford to lose.*

---
title: "Trading Drawdown: The Mathematics of Recovery"
description: "How much must you gain to recover from a drawdown in trading? The d/(1−d) recovery formula, an exact ₹2,00,000 table, time-to-climb math, and a protocol."
meta_description: "How much must you gain to recover from a drawdown in trading? The d/(1−d) recovery formula, an exact ₹2,00,000 table, time-to-climb math, and a protocol."
date: 2026-10-21
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["drawdown in trading", "how to recover from drawdown in trading", "drawdown recovery formula", "trading drawdown meaning", "how much gain to recover from loss", "what is a good drawdown in trading", "drawdown recovery time", "recover trading losses math"]
---

*By Kaizen · 21 October 2026 · Monks Of Market*

A trading drawdown is the peak-to-trough decline in your account equity from its most recent peak, expressed as a percentage. And here is the sentence that ends most traders' recovery before it begins: **a drawdown doesn't ask you to win — it asks you to win MORE than you lost, on less money.**

The fall is measured from the peak; the climb is measured from the hole. Everything in this article follows from that one frame.

This is the recovery manual of the mathematics-of-survival sequence — for the Indian retail trader who is very likely sitting in a loss right now. No motivation, no pep talk. Just the exact formula, the table that makes it visceral in rupees, why the hole gets deeper than your losses, how long the climb takes (illustrated, not promised), and a pre-committed protocol for what to do while you're in the hole.

---

## The Drawdown Recovery Formula: How Much Do You Need to Gain?

There is exactly one formula to remember:

> **Required gain % = Drawdown % ÷ (100% − Drawdown %) × 100**

or, in compact form, **d/(1−d)**.

Why does it work? After a d% fall from your peak P, your account sits at P × (1 − d). To climb back to P, you must earn the difference — P × d — on the smaller base P × (1 − d). That ratio is d/(1−d). The recovery is earned on the trough, not the peak.

Now watch what that does as drawdowns deepen. For a ₹2,00,000 peak account, here is the exact arithmetic at every rung — required gain displayed to full computed precision, with the rupee trough and the rupees you must re-earn beside it:

| Drawdown % | Exact gain required to recover | Trough value (₹2,00,000 peak) | ₹ to re-earn |
|---|---|---|---|
| 5% | 5.2631578947% | ₹1,90,000 | ₹10,000 |
| 10% | 11.1111111111% | ₹1,80,000 | ₹20,000 |
| 15% | 17.6470588235% | ₹1,70,000 | ₹30,000 |
| 20% | 25.0000000000% | ₹1,60,000 | ₹40,000 |
| 25% | 33.3333333333% | ₹1,50,000 | ₹50,000 |
| 30% | 42.8571428571% | ₹1,40,000 | ₹60,000 |
| 40% | 66.6666666667% | ₹1,20,000 | ₹80,000 |
| 50% | 100.0000000000% | ₹1,00,000 | ₹1,00,000 |
| 60% | 150.0000000000% | ₹80,000 | ₹1,20,000 |
| 70% | 233.3333333333% | ₹60,000 | ₹1,40,000 |
| 80% | 400.0000000000% | ₹40,000 | ₹1,60,000 |
| 90% | 900.0000000000% | ₹20,000 | ₹1,80,000 |

Read the 30% row twice. A 30% drawdown — the kind an options trader can collect in a bad fortnight — demands a 42.86% gain to repair. At 50%, you must *double* your account. At 90%, you need 900%. Notice the cruelty of the curve: the first 20% of loss is expensive, and every rung past 30% is a cliff.

These are the exact computed values, not rounded approximations. Treat them as what they are: the price tag of every drawdown, quoted in full.


<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Drawdown recovery asymmetry chart — required gain % vs drawdown % for a ₹2,00,000 trading account, showing the recovery curve accelerating past 30% drawdown." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The recovery curve bends — the fall is linear, the climb is not</text>
<text x="340" y="50" text-anchor="middle" fill="#92a59c" font-size="11">₹2,00,000 peak account · required gain % = d ÷ (1 − d)</text>
<g font-size="10" fill="#92a59c">
<text x="52" y="93" text-anchor="end">900</text><text x="52" y="123" text-anchor="end">800</text><text x="52" y="153" text-anchor="end">700</text><text x="52" y="183" text-anchor="end">600</text><text x="52" y="213" text-anchor="end">500</text><text x="52" y="243" text-anchor="end">400</text><text x="52" y="273" text-anchor="end">300</text><text x="52" y="303" text-anchor="end">200</text><text x="52" y="333" text-anchor="end">100</text><text x="52" y="363" text-anchor="end">0</text>
</g>
<g stroke="#3a4a44" stroke-width="1">
<line x1="60" y1="90" x2="640" y2="90"/><line x1="60" y1="120" x2="640" y2="120"/><line x1="60" y1="150" x2="640" y2="150"/><line x1="60" y1="180" x2="640" y2="180"/><line x1="60" y1="210" x2="640" y2="210"/><line x1="60" y1="240" x2="640" y2="240"/><line x1="60" y1="270" x2="640" y2="270"/><line x1="60" y1="300" x2="640" y2="300"/><line x1="60" y1="330" x2="640" y2="330"/><line x1="60" y1="360" x2="640" y2="360"/>
</g>
<g font-size="10" fill="#92a59c">
<text x="60" y="378" text-anchor="middle">0</text><text x="124" y="378" text-anchor="middle">10</text><text x="189" y="378" text-anchor="middle">20</text><text x="253" y="378" text-anchor="middle">30</text><text x="318" y="378" text-anchor="middle">40</text><text x="382" y="378" text-anchor="middle">50</text><text x="447" y="378" text-anchor="middle">60</text><text x="511" y="378" text-anchor="middle">70</text><text x="576" y="378" text-anchor="middle">80</text><text x="640" y="378" text-anchor="middle">90</text>
</g>
<text x="640" y="398" text-anchor="end" fill="#92a59c" font-size="11">drawdown %</text>
<text x="20" y="225" text-anchor="middle" fill="#92a59c" font-size="11" transform="rotate(-90 20 225)">required gain %</text>
<line x1="253" y1="90" x2="253" y2="360" stroke="#92a59c" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="253" y="80" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">30% — the cliff starts here</text>
<path d="M60,360 L124.4,356.7 L188.9,352.5 L253.3,347.1 L317.8,340 L382.2,330 L446.7,315 L511.1,290 L575.6,240 L640,90 L640,333 Z" fill="#e8825a" opacity="0.12"/>
<line x1="60" y1="360" x2="640" y2="333" stroke="#92a59c" stroke-width="2" stroke-dasharray="7 5"/>
<path class="draw-line" d="M60,360 L124.4,356.7 L188.9,352.5 L253.3,347.1 L317.8,340 L382.2,330 L446.7,315 L511.1,290 L575.6,240 L640,90" fill="none" stroke="#e8825a" stroke-width="3"/>
<circle cx="382" cy="330" r="4.5" fill="#e8825a"/><circle cx="640" cy="90" r="4.5" fill="#e8825a"/>
<text x="398" y="318" fill="#f2f7f4" font-size="11" font-weight="700">50% fall → +100% back</text>
<text x="628" y="76" text-anchor="end" fill="#e8825a" font-size="11" font-weight="700">90% fall → +900% back</text>
<text x="480" y="185" text-anchor="middle" fill="#e8825a" font-size="12" font-style="italic">the gap explodes past 30%</text>
<g font-size="12">
<line x1="60" y1="415" x2="100" y2="415" stroke="#92a59c" stroke-width="2" stroke-dasharray="7 5"/>
<text x="108" y="419" fill="#92a59c">fall % (linear)</text>
<line x1="240" y1="415" x2="280" y2="415" stroke="#e8825a" stroke-width="3"/>
<text x="288" y="419" fill="#f2f7f4" font-weight="600">required gain % = d ÷ (1 − d)</text>
</g>
</svg>
</figure>


### The ₹2,00,000 Worked Example: 20% Down, 25% Back

Make it concrete. You peak at ₹2,00,000. A rough patch takes you to ₹1,60,000.

- Drawdown = (₹2,00,000 − ₹1,60,000) ÷ ₹2,00,000 × 100 = **20.0%**
- To recover, you must re-earn ₹40,000 — but your account is no longer ₹2,00,000. It is ₹1,60,000.
- Required gain = ₹40,000 ÷ ₹1,60,000 × 100 = **25.0%**

Twenty percent down, twenty-five percent back. Every rupee you lost must be re-earned by a smaller account — and a smaller account earns smaller rupees per percentage point. Percentages hide the pain; rupees don't.

---

## What a Drawdown Actually Is (and How It's Different From a Loss)

A **drawdown** is the peak-to-trough decline in account equity from the most recent account peak, expressed as a percentage:

> **DD% = (Peak − Trough) ÷ Peak × 100**

Two details matter. First, it is measured from the peak — *not* from your initial deposit. If you started with ₹1,00,000, ran it to ₹2,00,000, and fell to ₹1,60,000, your drawdown is 20%, not a 60% gain still in hand. Second, a drawdown includes floating, unrealized declines — it is a temporary state that ends only when a new peak is made.

A **loss**, by contrast, is the result of a single closed trade that went negative. A drawdown is the aggregate decline in account equity over a period — driven by position sizing and compounding, not just the win/loss ratio. You can have a 60% win rate and still sit in a deep drawdown if your losers are sized bigger than your winners.

And one boundary: profit given back from a peak — the giveback pattern — has its own guide: [Why Traders Give Back Their Profits](/articles/why-traders-give-back-profits/). This article is about the climb, not the giveback.


<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Equity curve diagram showing peak, trough, and recovery to a new peak — drawdown measured peak-to-trough." class="viz">
<defs>
<marker id="dd-arr" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
<path d="M1,1 L9,5 L1,9 Z" fill="#e8825a"/>
</marker>
</defs>
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Drawdown is measured from the peak — the climb starts from the hole</text>
<line x1="200" y1="112" x2="650" y2="112" stroke="#92a59c" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="648" y="100" text-anchor="end" fill="#92a59c" font-size="10">old peak level — the climb must reach it</text>
<path class="draw-line" d="M60,205 L100,180 L140,152 L170,130 L200,112 L230,142 L270,192 L310,232 L350,252 L400,262 L450,240 L490,205 L530,165 L560,138 L590,100" fill="none" stroke="#8fd6a0" stroke-width="3"/>
<circle cx="200" cy="112" r="6" fill="#8fd6a0"/>
<text x="200" y="94" text-anchor="middle" fill="#8fd6a0" font-size="12" font-weight="700">PEAK</text>
<circle cx="400" cy="262" r="6" fill="#e8825a"/>
<text x="400" y="292" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">TROUGH</text>
<text x="590" y="84" text-anchor="middle" fill="#92a59c" font-size="11">new peak</text>
<line x1="300" y1="112" x2="300" y2="262" stroke="#e8825a" stroke-width="2.5" marker-start="url(#dd-arr)" marker-end="url(#dd-arr)"/>
<text x="318" y="178" fill="#e8825a" font-size="13" font-weight="700">drawdown</text>
<text x="318" y="196" fill="#92a59c" font-size="11">peak → trough</text>
<rect x="150" y="330" width="380" height="34" rx="9" fill="#22302a" stroke="#3a4a44"/>
<text x="340" y="352" text-anchor="middle" fill="#92a59c" font-size="12.5" font-style="italic">measured from the peak — never from the deposit</text>
</svg>
</figure>


---

## Why the Hole Gets Deeper Than Your Losses

Two forces deepen a drawdown beyond what the raw losses suggest.

**The first is compounding.** Under fixed-fractional sizing, each loss is taken from a smaller base than the one before — the full derivation is in [How Losing Streaks Affect Trading Accounts](/articles/how-losing-streaks-affect-trading-accounts/), and this article owns the *recovery* side of the math, not the decline side. The point that carries over: losses multiply downward, so a string of ordinary losing trades digs a deeper hole than adding up the individual trade losses would suggest.

**The second force is behavioural, and it is yours to refuse.** The moment a trader sees the table above and feels the climb steepening, the most common instinct is to *widen* risk — to "make it back faster" with bigger size. That instinct is [tilt](/articles/tilt-in-trading/): emotion overriding process, usually revenge-shaped. And it is exactly what deepens the hole: bigger size on a smaller base, compounding against you at the steepest part of the recovery curve.

The overtrading-revenge loop — trade, lose, size up, lose bigger, trade again — is the drawdown accelerant. It doesn't just cost you money; it costs you at the rung where the recovery math is least forgiving. The risk-disclosure line: drawdowns deepen fastest when discipline breaks, and discipline breaks exactly when the hole looks deepest.

---

## How Long the Climb Takes: Time-to-Recovery, Illustrated

Here is the money beat of this article: a 30% drawdown doesn't just cost ₹60,000. It costs **weeks of disciplined trading** — and that is the real price.

The method is simple:

> **Expected trades to recover ≈ Required gain % ÷ Expectancy per trade**
>
> **Weeks to recover ≈ Expected trades ÷ Trades per week**

Expectancy per trade is an input here — the EV of your system, covered in full in [What Is Trading Expectancy?](/articles/what-is-trading-expectancy/). Now one worked illustration, recomputed from scratch for an Indian account. Every step is shown so you can check it:

**The setup:** ₹2,00,000 peak → 30% drawdown → trough ₹1,40,000. Required gain = exactly 300/7 = **42.86%**.

**The strategy inputs:** 45% win rate, 1.75:1 reward-to-risk, 1.25% risk per trade.

**Step 1 — expectancy per trade:**
- Average win = 45% × 1.75 × 1.25% = 0.984375% of capital
- Average loss = 55% × 1.25% = 0.6875% of capital
- EV per trade = 0.984375% − 0.6875% = **0.296875%** of capital (exactly 19/6400)

**Step 2 — expected trades to recover:**
- 42.86% ÷ 0.296875 = exactly 19200/133 = 144.3609022556391 ≈ **144 trades**

**Step 3 — weeks at the trader's pace:**
- At 4 trades per week: ≈ **36 weeks** (~8.3 months)
- At 3 trades per week: ≈ **48 weeks** (~11 months)
- At 5 trades per week: ≈ **29 weeks** (~6.7 months)

Say it plainly: eight to eleven months of disciplined execution, at a realistic pace, to climb out of one 30% hole — *if* the system keeps delivering its average the whole way up. That is what a drawdown actually costs. Not ₹60,000. The better part of a year of your trading life.

> **Illustration, not forecast — expectancy is an average, not a guarantee; variance means the realized climb can be far shorter or far longer than the expectation.** This is one worked example with one set of inputs, never a promise of recovery speed. Run your own win rate, your own reward-to-risk, your own pace through the same three steps. And if the Rung-3 audit says the system is broken rather than unlucky, this expected-trades math does not apply at all — the answer is the rebuild path, not a steeper climb. (A dedicated drawdown recovery calculator is planned as part of a later tool cluster — until then, the formula above is the honest version.)


<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 420" role="img" aria-label="Weeks-to-recover ladder for a 30% drawdown at different trading paces, with illustration-not-forecast caveat." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The 30% climb — how long at your pace?</text>
<text x="340" y="50" text-anchor="middle" fill="#92a59c" font-size="11">30% drawdown · required gain 42.86% · EV 0.296875% per trade · ≈144 trades to recover</text>
<g>
<text x="160" y="118" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">3 trades / week</text>
<rect class="bar-grow" x="180" y="92" width="460" height="44" rx="9" fill="#e8825a"/>
<text x="196" y="120" fill="#1c2622" font-size="13" font-weight="700">≈48 weeks (~11 months)</text>
<text x="160" y="198" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">4 trades / week</text>
<rect class="bar-grow" x="180" y="172" width="345" height="44" rx="9" fill="#e8825a"/>
<text x="196" y="200" fill="#1c2622" font-size="13" font-weight="700">≈36 weeks (~8.3 months)</text>
<text x="160" y="278" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">5 trades / week</text>
<rect class="bar-grow" x="180" y="252" width="278" height="44" rx="9" fill="#e8825a"/>
<text x="196" y="280" fill="#1c2622" font-size="13" font-weight="700">≈29 weeks (~6.7 months)</text>
</g>
<rect x="60" y="336" width="560" height="46" rx="10" fill="none" stroke="#e8825a" stroke-width="1.5"/>
<text x="340" y="364" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="600">Illustration, not forecast — expectancy is an average, not a guarantee.</text>
</svg>
</figure>


---

## How to Recover From a Drawdown in Trading: The Response Protocol

No global calculator gives you this part — the part that matters when you're actually in the hole. This is a pre-committed protocol: you write these rules when you're calm, so you can follow them when you're not. Adapted for Indian retail, with the family frame this series has built.

### Rung 1 — At 5% drawdown: cut risk per trade in half

Cut your risk per trade in half — if you were risking 1.25% per trade, you are now risking ~0.6–0.65%. The system may be fine; the market may be choppy; but you are now climbing, and the climb is measured from a smaller base. Smaller size keeps the hole shallow while you find out what's happening. **Tilt check:** are you already thinking about "making it back"? If yes, that's the signal to slow down, not speed up — see [Tilt in Trading](/articles/tilt-in-trading/).

### Rung 2 — At 10% drawdown: halve size and review the system

Cut size in half and open the hood. Review your last 20–30 trades: is the system taking its normal losses (variance), or have entries, exits, or discipline drifted? Halving size does two things — it caps further damage and it forces the slower pace that honest review needs. **Tilt check:** at 10%, the urge to double down is strongest. Halving is the anti-tilt move.

### Rung 3 — At 15–20% drawdown: stop trading and run a full audit

Close the terminal. A full audit means: re-verify the system's edge on recent data, check whether market conditions have shifted against the setup, and answer the one question this protocol exists to force — *is this normal variance, or is the system broken?* That diagnosis has its own complete guide: [When to Quit a Strategy](/articles/when-to-quit-a-strategy/) — go there for the signals, which are not re-taught here. **Tilt check:** past 15%, almost every further decision is emotional. The audit happens with the terminal closed.

### The Intraday Circuit Breaker: The Daily Loss Limit

The rungs above are for account drawdowns. Inside a single session, one rule overrides everything: a **daily loss limit** — decide it in advance (for most retail traders, 2–3% of capital per day is the zone), and when it hits, the day is over. No "one more trade". The daily limit is the circuit breaker that stops an intraday slide from becoming a Rung-1 drawdown.

### The two branches

Every drawdown at every rung resolves into one of two branches:

1. **Normal variance** — the system is behaving as its history says it should; the losses are the statistical cost of the edge. Sit it out, keep size discipline, keep trading the plan.
2. **Broken system** — the edge has decayed or discipline has collapsed. The audit at Rung 3 exists to make this call. If it's branch two, the answer is not a steeper climb — it's the rebuild path in [When to Quit a Strategy](/articles/when-to-quit-a-strategy/).

### The 20% line

Past ~20%, two things degrade at once: the recovery math (the table above — 20% needs 25%, 30% needs 42.86%) *and* decision quality. A common industry rule of thumb is that most professional traders cap personal drawdowns at 15–20%, and many funds close up shop at 20%. Past the 20% line, your account is in the zone where professionals stop. Treat 20% as the retail sanity threshold — the line professionals treat as a rule: past it, the protocol's answer is "stop and audit". And this is where the ruin math gets personal: deep drawdowns are where ruin probability stops being theoretical — the full treatment is in [Risk of Ruin in Trading](/articles/risk-of-ruin-trading/).

**Re-entry: when full size comes back.** The protocol ratchets down; it must also say how it ratchets back up. Full size is restored only when a new account-equity peak is printed — the drawdown is over — or after 10–20 disciplined trades at reduced size following a clean audit, with no tilt violations. Until then, reduced size is the position. The climb back up is earned, never assumed.


<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 560" role="img" aria-label="Drawdown response protocol ladder for Indian retail traders — size-down rules at 5%, 10%, and 15–20% drawdown with tilt checks and the daily-loss-limit circuit breaker." class="viz">
<defs>
<marker id="br-arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
<path d="M1,1 L9,5 L1,9 Z" fill="#92a59c"/>
</marker>
</defs>
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The drawdown response protocol — decided calm, followed in the hole</text>
<rect x="40" y="52" width="600" height="58" rx="10" fill="#3a2a26" stroke="#e8825a" stroke-width="1.5"/>
<text x="340" y="76" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">DAILY LOSS LIMIT — the circuit breaker</text>
<text x="340" y="97" text-anchor="middle" fill="#92a59c" font-size="11">2–3% of capital per day · when it hits, the day is over</text>
<g>
<rect x="40" y="130" width="600" height="80" rx="12" fill="#2a3a34"/>
<text x="60" y="160" fill="#e8825a" font-size="12" font-weight="700">RUNG 1 · 5% drawdown → cut risk per trade in half</text>
<text x="60" y="184" fill="#92a59c" font-size="11.5" font-style="italic">Tilt check: already thinking about “making it back”? Slow down — don’t speed up.</text>
<rect x="40" y="222" width="600" height="80" rx="12" fill="#2a3a34"/>
<text x="60" y="252" fill="#e8825a" font-size="12" font-weight="700">RUNG 2 · 10% drawdown → halve size + review the system</text>
<text x="60" y="276" fill="#92a59c" font-size="11.5" font-style="italic">Tilt check: the urge to double down is strongest here. Halving is the anti-tilt move.</text>
<rect x="40" y="314" width="600" height="80" rx="12" fill="#2a3a34"/>
<text x="60" y="344" fill="#e8825a" font-size="12" font-weight="700">RUNG 3 · 15–20% drawdown → stop trading, run a full audit</text>
<text x="60" y="368" fill="#92a59c" font-size="11.5" font-style="italic">Tilt check: past 15%, almost every further decision is emotional. Terminal stays closed.</text>
</g>
<text x="340" y="420" text-anchor="middle" fill="#92a59c" font-size="12">the audit forces one of two calls:</text>
<line x1="300" y1="398" x2="190" y2="432" stroke="#92a59c" stroke-width="2" marker-end="url(#br-arr)"/>
<line x1="380" y1="398" x2="490" y2="432" stroke="#92a59c" stroke-width="2" marker-end="url(#br-arr)"/>
<rect x="40" y="434" width="290" height="86" rx="12" fill="#1f2f28" stroke="#8fd6a0" stroke-width="1.5"/>
<text x="185" y="464" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">NORMAL VARIANCE</text>
<text x="185" y="488" text-anchor="middle" fill="#f2f7f4" font-size="12">sit it out · keep trading the plan</text>
<rect x="350" y="434" width="290" height="86" rx="12" fill="#33272a" stroke="#e05252" stroke-width="1.5"/>
<text x="495" y="464" text-anchor="middle" fill="#e05252" font-size="11" font-weight="700">BROKEN SYSTEM</text>
<text x="495" y="488" text-anchor="middle" fill="#f2f7f4" font-size="12">rebuild path — not a steeper climb</text>
</svg>
</figure>


---

## What Counts as a Good Drawdown — in Recovery Terms

"Good drawdown" is usually framed as a risk label. Frame it as a recovery question instead — *what does this number mean for your climb?*

| Context | Drawdown zone | What it means for the climb |
|---|---|---|
| Intraday trader | Below 10% | Recoverable with discipline; the required gain (up to 11.1111111111%) is within a few good weeks |
| Swing / positional trader | 10–20% | Serious but climbable; 20% needs exactly 25% back — this is the retail sanity threshold |
| The sanity line | Past 20% | The climb steepens brutally (30% → 42.8571428571%); decision quality degrades; professionals stop here |
| Borrowed discipline | Prop-firm limits, 8–12% total | Hard caps, breach means the account is gone — the strictest version of the protocol above |

One distinction to keep clean: **drawdown is ANY temporary dip from a peak; maximum drawdown is the LARGEST peak-to-trough decline in the period.** MDD — how it's measured, what it hides, and the tradeability test — is owned in full by [Maximum Drawdown](/articles/maximum-drawdown/). And the ratio that judges whether a climb was worth it — return divided by maximum drawdown — is the [recovery factor](/articles/recovery-factor/), the scoreboard this whole climb is played for.


<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Acceptable drawdown ladder in recovery terms — intraday, swing, the 20% sanity line, and prop-firm hard limits." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Drawdown zones — in recovery terms</text>
<g>
<rect x="60" y="64" width="560" height="56" rx="10" fill="#2a3a34"/>
<rect x="60" y="64" width="6" height="56" fill="#8fd6a0"/>
<text x="84" y="88" fill="#f2f7f4" font-size="13" font-weight="700">Intraday · below 10%</text>
<text x="84" y="108" fill="#92a59c" font-size="11.5">Recoverable with discipline — ≤11.11% back is a few good weeks</text>
<rect x="60" y="132" width="560" height="56" rx="10" fill="#2a3a34"/>
<rect x="60" y="132" width="6" height="56" fill="#d4b05a"/>
<text x="84" y="156" fill="#f2f7f4" font-size="13" font-weight="700">Swing / positional · 10–20%</text>
<text x="84" y="176" fill="#92a59c" font-size="11.5">Serious but climbable — 20% needs exactly 25% back</text>
</g>
<line x1="60" y1="196" x2="620" y2="196" stroke="#e05252" stroke-width="3"/>
<text x="52" y="200" text-anchor="end" fill="#e05252" font-size="11" font-weight="700">20%</text>
<g>
<rect x="60" y="204" width="560" height="56" rx="10" fill="#2a3a34"/>
<rect x="60" y="204" width="6" height="56" fill="#e8825a"/>
<text x="84" y="228" fill="#f2f7f4" font-size="13" font-weight="700">Past 20% · the sanity line</text>
<text x="84" y="248" fill="#92a59c" font-size="11.5">The climb steepens brutally — decision quality degrades</text>
<rect x="60" y="272" width="560" height="56" rx="10" fill="#2a3a34"/>
<rect x="60" y="272" width="6" height="56" fill="#e05252"/>
<text x="84" y="296" fill="#f2f7f4" font-size="13" font-weight="700">Prop-firm hard limits · 8–12% total</text>
<text x="84" y="316" fill="#92a59c" font-size="11.5">Breach means the account is gone — the strictest protocol</text>
</g>
<text x="340" y="362" text-anchor="middle" fill="#e05252" font-size="13" font-weight="700" font-style="italic">past this line, professionals stop</text>
</svg>
</figure>


---

## The Tax on the Climb: India's Transaction-Cost Headwind

Here is what no global drawdown calculator mentions: **every trade on the fall AND the climb pays the Indian cost stack.** The recovery climb is taxed.

Quoted verbatim from the locked figures: NSE equity-options: 0.03553%/side all-in (Rs. 3,553/crore = Rs. 3,503 transaction charge + Rs. 50 IPFT, per NSE circular NSE/FA/73061 eff Mar 1, 2026); STT 0.15% on exercised ITM options and sell-premium; Nifty lot size 65 (w.e.f. 28-Oct-2025 per NSE/FAOP/70616).

Think about what that means for the 144-trade climb in the illustration above. Each of those recovery trades pays exchange transaction charges on both legs, and any exercised ITM option pays 0.15% STT. The required 42.86% is the *gross* climb — your system has to earn that *plus* the cost stack just to touch the old peak. A drawdown in India is therefore always deeper than the table says, by roughly the cost of every trade it takes to get out.

This is why prevention math beats recovery math. The cheapest drawdown is the one you never take — which is tomorrow's question.

A dedicated drawdown recovery calculator (enter your peak, your trough, your system's expectancy, and get the climb mapped in trades and weeks) is planned as part of a later tool cluster. Until it ships, the formula and the three steps above are the honest version — no black box, nothing hidden.

**So: how do you make sure the next drawdown is smaller?** That is the question for tomorrow morning — [*The 3-Day Rule*](/articles/the-3-day-rule/) — and the sizing answer to the depth question lives in position sizing, because the depth of every drawdown is decided before it begins, in the size of the trades that dug it.

---

## Frequently Asked Questions

### What is a drawdown in trading?

A drawdown is the peak-to-trough decline in your account equity from the most recent account peak, expressed as a percentage: (Peak − Trough) ÷ Peak × 100. It is distinct from a loss: a loss is realized on a single closed trade, while a drawdown is the aggregate decline over a period, includes floating/unrealized declines, and is a temporary state that ends only when a new peak is made.

### How much do I need to gain to recover from a drawdown?

Required gain % = Drawdown % ÷ (100% − Drawdown %) × 100, because the recovery is earned on the smaller remaining base. See the article's exact table for the full 5%→90% ladder. The anchor example: a 20% drawdown (₹2,00,000 peak → ₹1,60,000 trough) requires ₹40,000 re-earned on the ₹1,60,000 base = exactly +25%.

### Why does a 50% loss need a 100% gain to recover?

Because the fall is measured from the peak and the climb is measured from the hole. A ₹2,00,000 account at a 50% drawdown sits at ₹1,00,000 — halved. To return to ₹2,00,000 it must earn ₹1,00,000 on a ₹1,00,000 base, which is +100%. Halved capital must double. The asymmetry steepens from there: 70% down needs 233.33% back; 90% down needs 900%.

### What is a good drawdown in trading?

In recovery terms: intraday traders should treat anything approaching 10% as the reassess zone; swing traders can operate in the 10–20% band with discipline; 20% is the retail sanity threshold — past it, both the recovery math and decision quality degrade, and most professionals stop at 15–20%. Prop-firm hard limits (8–12% total) are the strictest version of the same discipline. See the article's ladder for the full framing.

### How long does it take to recover from a drawdown?

Expected trades to recover ≈ required gain % ÷ expectancy per trade, then divide by your trades per week. The article's worked illustration: a 30% drawdown (required gain 42.86%) with a 45%-win / 1.75:1 / 1.25%-risk system (EV 0.296875%/trade) needs ≈144 trades — roughly 36 weeks at 4 trades per week. Illustration, not forecast — expectancy is an average, not a guarantee; variance means the realized climb can be far shorter or far longer than the expectation.

### What is the difference between drawdown and maximum drawdown?

Drawdown is ANY temporary dip from a peak; maximum drawdown is the LARGEST peak-to-trough decline in the period — [MDD explained in full here](/articles/maximum-drawdown/).

### What should I do when my account is in a drawdown?

Follow a pre-committed protocol: at 5% drawdown cut risk per trade in half; at 10% halve size and review the system; at 15–20% stop trading and run a full audit. Keep a daily loss limit as your intraday circuit breaker. Run a tilt check at every rung ([Tilt in Trading](/articles/tilt-in-trading/)), and if the audit suggests the system itself is broken rather than unlucky, follow [When to Quit a Strategy](/articles/when-to-quit-a-strategy/).

### How do I know if a drawdown is normal or my strategy is broken?

That is the variance-vs-breakdown question, and it has its own complete guide: [When to Quit a Strategy](/articles/when-to-quit-a-strategy/) owns the diagnosis signals and is not re-taught here. The short version: normal variance matches what your system's own history says its losing stretches look like; a broken system shows losses the history can't explain. The protocol's Rung 3 — stop and audit with the terminal closed — exists to force exactly this call.

### Can drawdowns be avoided completely?

No — manage them, don't try to avoid them. Position sizing, stop losses, and the size-down protocol keep drawdowns shallow; nothing keeps them at zero. And remember the tax on the climb: every drawdown pays the transaction-cost stack on both the fall and the recovery (NSE equity-options 0.03553%/side all-in; STT 0.15% on exercised ITM options and sell-premium) — which is why prevention math always beats recovery math.

---

*Kaizen writes about the mathematics of surviving markets. This article is educational — it explains recovery arithmetic and risk-management process, not trading advice. Kaizen is not SEBI-registered, nothing here is a trade call, and no illustration in this article is a promise of recovery speed or returns.*

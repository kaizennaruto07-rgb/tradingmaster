---
title: "Trading Journal: What to Track Beyond P&L (The Ledger, the Mirror, the Microscope)"
description: "What to track in a trading journal beyond P&L: the 8 ledger fields, plan-followed yes/no, process score, net R after Indian costs, and the Sunday review ritual."
meta_description: "What to track in a trading journal beyond P&L: the 8 ledger fields, plan-followed yes/no, process score, net R after Indian costs, and the Sunday review ritual."
date: 2026-10-18
author: Kaizen
tag: "Strategy validation · Journaling"
keywords: ["what to track in a trading journal", "trading journal beyond pnl", "trading journal fields", "what to track in trading journal beyond entry exit", "net r trading journal", "trading journal process score", "how often to review trading journal", "trading journal review ritual", "r multiple trading explained"]
---

*By Kaizen · 18 October 2026 · Monks Of Market*

Every Indian retail trader has a spreadsheet that records entry, exit, and profit. Almost none of them can answer the only question that matters: **is my trading repeatable, or did I just get lucky?**

That question is what a trading journal is actually for — and it is why most journals fail. A journal that logs only what the broker statement already tells you is a scoreboard, not an instrument. Below is the instrument: what to track in a trading journal beyond P&L, organized as three layers.

**The short answer:** track 8 non-negotiable ledger fields (date/time, instrument, direction, entry/stop/target/exit, size, result in R, net P&L, setup name from a fixed list), plus the fields most traders skip — whether you followed your plan, your execution score, planned vs actual R:R, the rule you broke and what it cost you in ₹ *and* in R, your emotional state, a screenshot, the session and time of day, and the valid setups you missed. Then review it every Sunday in 30 minutes. The structure that holds all of it: the **Ledger** (what happened), the **Mirror** (what you did), and the **Microscope** (why it keeps happening).

## The P&L lie: your statement is a scoreboard, not an instrument

Your broker statement tells you where you ended up. It cannot tell you whether the journey is repeatable — and it hides two lies every trader must learn to see through.

**Lie one: gross P&L is a fiction.** A trade that grossed ₹3,250 did not make you ₹3,250. It paid brokerage, STT, exchange charges, stamp duty, SEBI fee, and GST — and on smaller trades, those fixed costs eat a much larger share of the R you thought you earned. A journal that records gross R is measuring fiction. (The Indian cost truth has its own section below.)

**Lie two: outcomes lie.** A winning trade taken off-plan is a *failure that paid you* — it taught you that breaking rules gets rewarded, which is the most expensive lesson a trader can learn. A losing trade taken exactly on-plan is data, not a mistake. If your journal records outcomes but not process, it will reward you for the behavior that eventually blows up accounts.

The thesis, stated plainly: **your P&L tells you where you ended up; your journal tells you whether the journey is repeatable — and whether you, not the market, are the variable.**

## Net R, not gross R: the Indian cost truth your journal must log

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="Net-R truth table: one Nifty options trade grossed 3,250 rupees and 1.63R, but after 84.26 rupees of Indian costs it netted 3,165.74 rupees and 1.58R." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The net-R truth: one Nifty options trade, priced honestly</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">buy 1 lot (65 qty) at ₹200, sell at ₹250 — ₹2,000 initial risk</text>
<rect x="30" y="84" width="300" height="120" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="52" y="116" fill="#d98c8c" font-size="12" font-weight="700">GROSS — the fiction</text>
<text x="180" y="156" text-anchor="middle" fill="#f2f7f4" font-size="26" font-weight="700">₹3,250</text>
<text x="180" y="182" text-anchor="middle" fill="#92a59c" font-size="13">+1.63R before costs</text>
<rect x="350" y="84" width="300" height="120" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="372" y="116" fill="#8fd6a0" font-size="12" font-weight="700">NET — the truth</text>
<text x="500" y="156" text-anchor="middle" fill="#f2f7f4" font-size="26" font-weight="700">₹3,165.74</text>
<text x="500" y="182" text-anchor="middle" fill="#92a59c" font-size="13">+1.58R after costs</text>
<text x="340" y="234" text-anchor="middle" fill="#92a59c" font-size="12">the ₹84.26 that separates them</text>
<g font-size="11" text-anchor="middle">
<rect x="30" y="250" width="100" height="52" rx="8" fill="#24332d" stroke="#3a4d46"/><text x="80" y="271" fill="#92a59c">Brokerage</text><text x="80" y="289" fill="#f2f7f4" font-weight="700">₹40</text>
<rect x="136" y="250" width="100" height="52" rx="8" fill="#24332d" stroke="#3a4d46"/><text x="186" y="271" fill="#92a59c">STT</text><text x="186" y="289" fill="#f2f7f4" font-weight="700">₹24.38</text>
<rect x="242" y="250" width="100" height="52" rx="8" fill="#24332d" stroke="#3a4d46"/><text x="292" y="271" fill="#92a59c">NSE charges</text><text x="292" y="289" fill="#f2f7f4" font-weight="700">₹10.39</text>
<rect x="348" y="250" width="100" height="52" rx="8" fill="#24332d" stroke="#3a4d46"/><text x="398" y="271" fill="#92a59c">Stamp duty</text><text x="398" y="289" fill="#f2f7f4" font-weight="700">₹0.39</text>
<rect x="454" y="250" width="100" height="52" rx="8" fill="#24332d" stroke="#3a4d46"/><text x="504" y="271" fill="#92a59c">SEBI fee</text><text x="504" y="289" fill="#f2f7f4" font-weight="700">₹0.03</text>
<rect x="560" y="250" width="90" height="52" rx="8" fill="#24332d" stroke="#3a4d46"/><text x="605" y="271" fill="#92a59c">GST</text><text x="605" y="289" fill="#f2f7f4" font-weight="700">₹9.08</text>
</g>
<text x="340" y="330" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">₹3,250 gross − ₹84.26 costs = ₹3,165.74 net</text>
<text x="340" y="352" text-anchor="middle" fill="#92a59c" font-size="12">+1.63R is the story your broker tells · +1.58R is what you kept</text>
<text x="340" y="392" text-anchor="middle" fill="#e0b36a" font-size="12">gross R is fiction — log net, or log fiction</text>
</svg>
</figure>

Every journal field for P&L and R must be computed **net of costs**, or the journal is lying to you in the most respectable way possible. Here is the locked fee stack every Indian trader's journal is built on (all verified against primary sources, current as of October 2026):

- **Brokerage:** flat ₹20 per order at discount brokers (₹40 round trip per trade).
- **STT:** 0.15% on the sale of option contracts (premium) — and 0.15% of intrinsic value on *exercised* ITM options, both effective 1 April 2026 per Budget 2026 (raised from 0.10% and 0.125%).
- **NSE exchange charges:** 0.03553% per side on options premium turnover — the *total outflow* line (₹3,553 per crore: ₹3,503 transaction charge + ₹50 IPFT contribution), effective 1 March 2026 per NSE circular NSE/FA/73061. Always use the total outflow line, not the transaction-charge component alone.
- **Stamp duty:** buy side only — 0.003% for options (₹300 per crore).
- **SEBI turnover fee:** ₹10 per crore of turnover.
- **GST:** 18% on brokerage + exchange charges + SEBI fee (not on trade value).
- **Nifty lot size:** 65 (revised from 75; effective for trading from 29 October 2025).

The illustration — one real trade: **buy 1 lot of Nifty options (65 quantity) at ₹200 premium, sell at ₹250.** Gross P&L is ₹3,250 (65 × ₹50). The cost stack: brokerage ₹40, STT 0.15% on the ₹16,250 sell premium (₹24.38), NSE charges 0.03553% per side (₹10.39), stamp duty on the buy side (₹0.39), GST (₹9.08), SEBI fee (a few paise). Total: roughly **₹84.26** — net P&L **₹3,165.74**. If your initial risk on the trade was ₹2,000, gross R was +1.63R; net R was +1.58R — R meaning your result in units of that initial risk (the full R-multiple definition sits in the Ledger section below). At this scale costs are about 2.6% of gross — but on smaller trades, the fixed ₹40 brokerage dominates and the gap widens.

The rule is simple: **log net, or log fiction.** Our [options-cost calculator](/tools/options-cost/) is the honest mirror for this — run every trade through it before the journal entry, and your R-multiples start telling the truth.

## The three-layer architecture: your journal is three instruments in one

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 560" role="img" aria-label="Three-layer journal architecture: Layer 1 the Ledger with 8 fields asks what did the market give me; Layer 2 the Mirror with plan-followed, execution score and process score asks what did I give the market; Layer 3 the Microscope with emotional state, session timing and setup expectancy asks what keeps breaking and when." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Three layers, three questions — one journal</text>
<rect x="30" y="62" width="620" height="148" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="56" y="98" fill="#8fd6a0" font-size="14" font-weight="700">LAYER 1 · THE LEDGER</text>
<text x="624" y="98" text-anchor="end" fill="#92a59c" font-size="12" font-style="italic">what did the market give me?</text>
<text x="56" y="128" fill="#f2f7f4" font-size="12.5">date/time · instrument · direction · entry/stop/target/exit</text>
<text x="56" y="152" fill="#f2f7f4" font-size="12.5">size · net P&amp;L in ₹ · result in R · setup name from a fixed list</text>
<text x="56" y="182" fill="#92a59c" font-size="11.5">the facts of the trade — no interpretation, no judgment</text>
<rect x="30" y="228" width="620" height="148" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="56" y="264" fill="#e0b36a" font-size="14" font-weight="700">LAYER 2 · THE MIRROR</text>
<text x="624" y="264" text-anchor="end" fill="#92a59c" font-size="12" font-style="italic">what did I give the market?</text>
<text x="56" y="294" fill="#f2f7f4" font-size="12.5">plan followed (yes/no) · execution score · planned vs actual R:R</text>
<text x="56" y="318" fill="#f2f7f4" font-size="12.5">rule-break crime report · process score — the headline number</text>
<text x="56" y="348" fill="#92a59c" font-size="11.5">the layer that predicts your account better than your P&amp;L</text>
<rect x="30" y="394" width="620" height="148" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="56" y="430" fill="#d98c8c" font-size="14" font-weight="700">LAYER 3 · THE MICROSCOPE</text>
<text x="624" y="430" text-anchor="end" fill="#92a59c" font-size="12" font-style="italic">what keeps breaking, and when?</text>
<text x="56" y="460" fill="#f2f7f4" font-size="12.5">emotional state (before/during/after) · session &amp; time of day</text>
<text x="56" y="484" fill="#f2f7f4" font-size="12.5">missed valid setups · setup-by-setup expectancy · giveback ledger</text>
<text x="56" y="514" fill="#92a59c" font-size="11.5">the patterns across dozens of trades — the journal earns its keep here</text>
</svg>
</figure>

Every field in this article lands in exactly one layer. The layers answer three different questions:

- **Layer 1 — the Ledger:** *What did the market give me?* The facts of the trade.
- **Layer 2 — the Mirror:** *What did I give the market?* Your execution of the plan.
- **Layer 3 — the Microscope:** *What keeps breaking, and when?* The patterns across trades.

No competitor structures a journal this way — field lists tell you *what*; the three layers tell you *where each thing belongs and what it does for you*.

### Layer 1 — the Ledger: what happened (the 8 non-negotiable fields)

The Ledger is the facts of the trade — no interpretation, no judgment. Eight fields, no exceptions:

1. **Date and time** (entry and exit timestamps)
2. **Instrument** (Nifty weekly options, Bank Nifty futures, Reliance equity intraday…)
3. **Direction** (long/short)
4. **Entry, stop, target, exit** — the four prices
5. **Size** (lots, quantity, capital deployed)
6. **Result in R** — profit or loss in units of the initial risk. Risk ₹2,000, make ₹4,000: +2R. Lose the full risk: −1R. R-multiples let a 10-share trade and a 500-share trade be compared on equal terms.
7. **Net P&L in ₹** — after the full Indian cost stack above. Gross goes in the trash column or nowhere.
8. **Setup name — from a fixed list.** This is the discipline the professionals use: define your setups once (breakout retest, opening-range fakeout, trend-pullback…), pick from the list, never invent names per trade. Free-text tags drift into uselessness within a month — "breakout", "Breakout trade", "BO", "break out" become four different setups and your statistics die.

This layer answers *what did the market give me?* — and nothing more.

### Layer 2 — the Mirror: what you did (the layer that predicts your account)
<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 380" role="img" aria-label="Process-score gauge: the percentage of trades fully on-plan, with an 85 percent threshold below which execution, not strategy, is the bottleneck." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Process score: the journal's headline number</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">% of trades taken fully on-plan · last 30 trades</text>
<path d="M 140 290 A 200 200 0 0 1 401.8 99.8" fill="none" stroke="#d98c8c" stroke-width="26"/>
<path d="M 401.8 99.8 A 200 200 0 0 1 518.2 199.2" fill="none" stroke="#e0b36a" stroke-width="26"/>
<path d="M 518.2 199.2 A 200 200 0 0 1 540 290" fill="none" stroke="#8fd6a0" stroke-width="26"/>
<line x1="340" y1="290" x2="491.5" y2="212.8" stroke="#f2f7f4" stroke-width="5" stroke-linecap="round"/>
<circle cx="340" cy="290" r="14" fill="#1d2b26" stroke="#f2f7f4" stroke-width="3"/>
<text x="132" y="322" text-anchor="middle" fill="#92a59c" font-size="12">0%</text>
<text x="548" y="322" text-anchor="middle" fill="#92a59c" font-size="12">100%</text>
<text x="340" y="78" text-anchor="middle" fill="#92a59c" font-size="12">50%</text>
<text x="540" y="168" text-anchor="start" fill="#e0b36a" font-size="13" font-weight="700">85%</text>
<text x="340" y="330" text-anchor="middle" fill="#e0b36a" font-size="12">below it: execution, not strategy, is the bottleneck</text>
<text x="340" y="356" text-anchor="middle" fill="#92a59c" font-size="11">a practitioner heuristic — scaffolding, not science</text>
</svg>
</figure>

If the Ledger records the trade, the Mirror records *the trader*. This is the layer that predicts your account better than your P&L ever will.

- **Plan followed: yes or no.** The single most revealing field in the entire journal. Professionals call it the non-negotiable binary — no "sort of", no "mostly". Either the trade matched the written plan at entry, management, and exit, or it didn't.
- **Execution score.** A 1–10 per-trade score across entry precision, stop placement, trade management, emotional control, and exit discipline. Be honest, not generous.
- **Planned R:R vs actual R:R.** Your *true* risk-to-reward is not the one you planned — it is what you actually took home after costs and after your own early exits. The [What-If simulator](/tools/what-if-simulator/) puts planned-vs-actual trade-offs in context: run your planned R:R through it, then compare what your journal says you actually captured.
- **The rule-break crime report.** When a rule breaks, write it like a crime report: *which* rule, *why* you broke it (boredom, revenge, fear, greed — be specific), and *what it cost you* in ₹ **and** in R. A broken rule that cost −2R is a different crime than one that cost −0.5R, and the journal should show both.

From these fields comes the journal's headline number: **process score** — the percentage of your trades taken fully on-plan. One journal system uses ~85% as its threshold: below it, execution — not strategy — is your bottleneck. That framing is a practitioner heuristic, not research; but it points at the right thing. Your process score predicts your account, because a strategy you don't execute is not a strategy at all.

One line, while you're in the Mirror: rule breaks are ruin in disguise — run your position sizing through the [risk-of-ruin calculator](/tools/risk-of-ruin/) and you'll see exactly what repeated rule-breaking does to long-term survival.

### Layer 3 — the Microscope: why it keeps happening

The Microscope zooms out: patterns across dozens of trades. This is where the journal earns its keep.

- **Emotional state — before, during, after.** Not a diary entry: three quick fields per trade. "Calm / neutral / urgent" before entry, "patient / anxious / numb" during, "satisfied / regretful / relieved" after. These fields connect directly to our psychology articles — [tilt](/articles/tilt-in-trading/), [FOMO](/articles/fomo-trading/), [revenge trading](/articles/revenge-trading/), and [overtrading](/articles/overtrading/) — one link each, because those chapters own the mechanics and this one owns the measurement.
- **Session and time of day.** Morning session vs afternoon, expiry day vs normal day. You may discover your 9:15–10:30 trades carry the account and your 2:00 PM trades burn it. The journal is the only place that pattern exists.
- **Missed valid setups — the hesitation ledger.** Valid setups you *didn't* take: what the setup was, why you skipped it, what it would have done. Fear hides here, and so does the data to price it.
- **Setup-by-setup expectancy reports.** Pivot the Ledger by setup name: expectancy per setup, win rate per setup, average win vs average loss in R, profit factor. The journal is where expectancy gets *computed* from your own data — the formula and its meaning live in [our real-expectancy article](/articles/how-to-calculate-real-expectancy/), which you should read alongside this one.
- **The giveback-ledger payoff.** Article #31 ended with a promise: the giveback ledger — *intraday peak → close → the trades between* — lives in the journal. Here it is: on every green day, record your intraday equity peak, your close, and the trades between them. The gap is your giveback tax, priced per day. Run it through the [giveback chapter](/articles/why-traders-give-back-profits/) if you haven't; the ledger is the instrument that makes its lessons measurable.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Giveback-ledger payoff panel: one green day shows an intraday peak, the close, and the trades between, with the gap labeled your giveback tax priced per day." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The giveback ledger: one green day, priced</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">peak → close → the trades between — the journal's own per-day reckoning</text>
<rect x="20" y="84" width="200" height="110" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="44" y="118" fill="#8fd6a0" font-size="12" font-weight="700">INTRADAY PEAK</text>
<text x="120" y="160" text-anchor="middle" fill="#f2f7f4" font-size="20" font-weight="700">₹1,28,400</text>
<text x="120" y="182" text-anchor="middle" fill="#92a59c" font-size="11">13:05</text>
<rect x="240" y="84" width="180" height="110" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="264" y="118" fill="#92a59c" font-size="12" font-weight="700">CLOSE</text>
<text x="330" y="160" text-anchor="middle" fill="#f2f7f4" font-size="20" font-weight="700">₹1,22,150</text>
<text x="330" y="182" text-anchor="middle" fill="#92a59c" font-size="11">15:30</text>
<rect x="440" y="84" width="220" height="110" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="464" y="118" fill="#92a59c" font-size="12" font-weight="700">THE TRADES BETWEEN</text>
<text x="464" y="142" fill="#f2f7f4" font-size="12">10:12 · breakout retest · <tspan fill="#8fd6a0">+₹9,100</tspan></text>
<text x="464" y="164" fill="#f2f7f4" font-size="12">11:40 · trend pullback · <tspan fill="#8fd6a0">+₹2,300</tspan></text>
<text x="464" y="186" fill="#f2f7f4" font-size="12">14:05 · no setup · <tspan fill="#d98c8c">−₹5,750</tspan></text>
<line x1="220" y1="140" x2="236" y2="140" stroke="#92a59c" stroke-width="2"/>
<line x1="420" y1="140" x2="436" y2="140" stroke="#92a59c" stroke-width="2"/>
<rect x="20" y="216" width="640" height="86" rx="14" fill="#1d2b26" stroke="#d98c8c" stroke-width="2"/>
<text x="44" y="252" fill="#d98c8c" font-size="14" font-weight="700">YOUR GIVEBACK TAX: −₹6,250</text>
<text x="44" y="280" fill="#92a59c" font-size="12">the peak-minus-close gap, priced per day — one unplanned 2:05 PM trade did this</text>
<text x="340" y="340" text-anchor="middle" fill="#92a59c" font-size="11">log it nightly — the giveback chapter shows how to stop paying it</text>
</svg>
</figure>

Advanced dashboards also track things like daily loss-limit utilisation and profit-distribution evenness — but that's a later article's territory.

This layer answers *what keeps breaking, and when?* — the question your P&L can never answer.

## The adoption ladder: start at 5 fields, reach the full stack by day 90

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 480" role="img" aria-label="Adoption ladder: Week 1 has 5 fields to build the habit, Week 4 has 12 fields to wake the Mirror and Microscope, Day 90 has the full stack." class="viz">
<text x="340" y="34" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The adoption ladder: journals die from front-loaded complexity</text>
<rect x="30" y="60" width="620" height="118" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="56" y="96" fill="#8fd6a0" font-size="13" font-weight="700">RUNG 1 · WEEK 1 — 5 fields</text>
<text x="516" y="96" text-anchor="end" fill="#92a59c" font-size="11" font-style="italic">build the habit</text>
<text x="56" y="122" fill="#f2f7f4" font-size="12">date/time · instrument + direction · entry/stop/target/exit · size · net P&amp;L</text>
<text x="56" y="152" fill="#92a59c" font-size="11.5">one goal: log every trade the same day it happens</text>
<rect x="30" y="196" width="620" height="118" rx="14" fill="#2a3a34" stroke="#3a4d46"/>
<text x="56" y="232" fill="#e0b36a" font-size="13" font-weight="700">RUNG 2 · WEEK 4 — 12 fields</text>
<text x="516" y="232" text-anchor="end" fill="#92a59c" font-size="11" font-style="italic">the Mirror wakes up</text>
<text x="56" y="258" fill="#f2f7f4" font-size="12">+ result in R · setup name (fixed list) · plan followed · execution score</text>
<text x="56" y="280" fill="#f2f7f4" font-size="12">+ emotional state (before/after) · session &amp; time of day</text>
<rect x="30" y="332" width="620" height="118" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="1.5"/>
<text x="56" y="368" fill="#8fd6a0" font-size="13" font-weight="700">RUNG 3 · DAY 90 — the full stack</text>
<text x="516" y="368" text-anchor="end" fill="#92a59c" font-size="11" font-style="italic">the Microscope runs itself</text>
<text x="56" y="394" fill="#f2f7f4" font-size="12">+ planned vs actual R:R · rule-break crime report · missed setups</text>
<text x="56" y="416" fill="#f2f7f4" font-size="12">+ giveback ledger · setup-by-setup expectancy · screenshots</text>
</svg>
</figure>

Journals die from front-loaded complexity. A trader who tries to log 25 fields on day one quits by Friday. So the adoption is sequenced:

- **Week one — 5 fields:** date/time, instrument + direction, entry/stop/target/exit, size, net P&L. That's it. Build the *habit* of logging every trade the same day.
- **Week four — 12 fields:** add result in R, setup name (from your fixed list), plan followed yes/no, execution score, emotional state (before/after), session/time of day. The Mirror and Microscope start waking up.
- **Day 90 — the full stack:** planned vs actual R:R, the rule-break crime report, missed valid setups, the giveback ledger, setup-by-setup expectancy reports, screenshots.

By day 90, logging takes minutes per trade and the journal runs itself. The mistake is never starting too small — it's starting too big and stopping entirely.

## The Sunday 30-minute review ritual: three questions that turn entries into edges

Logging without reviewing is hoarding. Once a week — 30 minutes on the weekend, a practitioner-standard cadence from the journaling literature — sit with the journal and answer exactly three questions:

1. **Which setup paid?** Sort by setup. Your best setup by net R, your worst, and the one you traded most. Trade more of the first, less of the last.
2. **Which rule broke?** Read every crime report from the week. Which rule broke most often, why, and what did it cost in total ₹ and R? One broken rule costing −6R in a week is a strategy-independent emergency.
3. **Which hour bled?** Sort by session and time of day. If your afternoon trades are a slow donation to the market, you now have data for the conversation, not just a feeling.

Once you have **30+ trades** logged, add a monthly review: setup-by-setup expectancy, profit factor, max consecutive losses, and the plan-followed vs not-followed comparison side by side — the report that shows, in your own numbers, whether breaking rules is your business model.

The journal is also three things beyond itself: the **out-of-sample diary** that keeps backtested strategies honest ([how to detect overfitting](/articles/how-to-detect-overfitting-in-trading-strategy/)); the **bridge metric** between paper trading and live trading ([paper vs real](/articles/paper-trading-vs-real-trading/)); and the record that reveals **ruin-driving behavior** — rule breaks, oversizing — before the account does ([risk of ruin](/articles/risk-of-ruin-trading/)). Your risk-per-trade field, meanwhile, connects to [position sizing](/articles/position-sizing/) — the mechanics live there, not here.

## What a trading journal cannot do (the honest limitations)

A journal improves *process visibility*. It never guarantees profit, and journaling a bad strategy only documents the losses faster — with better formatting. Three honest limits:

- **A journal cannot fix an unvalidated strategy.** If your setups have negative expectancy, perfect journaling gives you perfect records of a system that deserves no capital. Measure first, then trust.
- **Practitioner heuristics are not research.** The ~85% process-score threshold, the weekly 30-minute review cadence, and the 90-day adoption frame in this article come from practitioner journaling systems and this article's own editorial framework — not from peer-reviewed findings. Use them as scaffolding, not science.
- **Fees and lot sizes change.** The fee stack above is locked to primary sources as of October 2026 (STT 0.15% from Budget 2026 eff 1 Apr 2026; NSE 0.03553%/side eff 1 Mar 2026; Nifty lot 65). Recheck the primary circulars before acting on old figures.

Standard disclosure, because it matters: all options and leveraged-derivative trades carry loss-of-capital risk, leverage risk, and expiry risk. No journaling system makes trading risk-free. (And one thing this article will never cite: a widely-shared "25% improvement from journaling" statistic attributed to a financial-markets study — on investigation the attribution conflicts across sources and no such paper exists. Treat it as marketing copy, not evidence.)

## Frequently asked questions

### What should I track in a trading journal?

Three layers. **The Ledger** (what happened): date/time, instrument, direction, entry/stop/target/exit prices, position size, net P&L after Indian costs, result in R, and setup name from a fixed list. **The Mirror** (what you did): whether you followed your plan (yes/no), your execution score, planned vs actual R:R, the rule you broke and what it cost in ₹ and R, and a chart screenshot. **The Microscope** (why it keeps happening): your emotional state, the session/time of day, and the valid setups you missed.

### What is the most important thing to track in a trading journal?

Beyond the basics: your emotional state and whether you followed your trading plan on each trade. Practitioner consensus is blunt — most trading losses come from rule-breaking, not bad strategy — and tracking these two fields makes destructive patterns visible before they become account statements.

### How often should I review my trading journal?

Once a week: 30 minutes on the weekend, answering exactly three questions — which setup paid, which rule broke, and which hour bled. Once you accumulate 30+ trades, add a monthly review with setup-by-setup expectancy and the plan-followed vs not-followed comparison.

### Is a spreadsheet good enough for a trading journal?

Yes, as the starting point — free, flexible, and it handles the basics fine. It breaks down past roughly 5–10 trades a day, when manual entry and limited analytics become the bottleneck. The habit matters more than the tool; upgrade when volume forces it, not before.

### What is an R-multiple in trading?

A trade's result expressed in units of its initial risk: risk ₹2,000 and make ₹4,000, that's +2R; lose the full risk, that's −1R. R-multiples normalize performance across position sizes and setups, so a 10-share trade and a 500-share trade can be compared on equal terms — which is exactly why the journal's result field is measured in R, not just rupees.

### What goes in a trading journal beyond entry and exit prices?

The plan layer — the part the Mirror owns: plan-followed yes/no, planned vs actual R:R, the rule you broke and what it cost in ₹ and R, your execution score, and your emotional state before, during, and after the trade. Entry and exit prices record the trade; these fields record whether the trader showed up.

## Tonight: the instrument hands off to the verdict

Your P&L tells you where you ended up. Your journal tells you whether the journey is repeatable. But there is one question the journal alone cannot answer — the hardest one: **is what your journal measures actually edge, or is it luck wearing a costume?**

The journal is the instrument. Tonight's article reads the verdict.

---

**Risk disclosure:** This article is educational, not financial advice. Journaling improves process visibility; it does not guarantee profits or prevent losses. Trading in equities, derivatives, and crypto involves substantial risk of capital loss, and leveraged products can lose more than your initial outlay. Verify all fee figures with your broker — fee schedules change via Budget and exchange circulars.

---

*This article is for education only and is not financial advice. Trading in equity and F&O markets involves substantial risk of loss. Consider whether it suits your financial situation before trading.*

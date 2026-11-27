---
title: "After the Blow-Up: A Recovery Protocol"
description: "Recovery after blowing up a trading account: pause 7 days, autopsy the log, rebuild five rules, then prove 20 rule-compliant trades at 0.5% before sizing up."
meta_description: "Recovery after blowing up a trading account: pause 7 days, autopsy the log, rebuild five rules, then prove 20 rule-compliant trades at 0.5% before sizing up."
date: 2026-10-31
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["after blowing up trading account recovery", "blown trading account", "recover from blown account", "trading account recovery plan", "restart trading after losing everything", "how to come back after blowing up", "trading recovery protocol", "rebuild trading account", "stop revenge trading after loss"]
---

*By Kaizen · 31 October 2026 · Monks Of Market*

This feels awful, and the urge that follows it is the dangerous part: reload, trade bigger, and win it back today. This article is about recovery after blowing up a trading account, set out in an order that makes that urge harder to act on.

It is a trading account recovery plan, not a comeback story. The sequence below is a protocol this article proposes — it is not a measured fact, a proven method, or a guarantee. Stop first, then diagnose the exact failure from your own trade log, then rebuild the rules on paper, then prove you can follow them at small size before you are allowed to trade bigger. At every gate there is also an honest exit: stopping, at least for now, can be a successful outcome of the protocol.

This article is educational only. It is not a recommendation to fund an account or to trade, and it is not personal financial advice. Every money figure in it is illustrative arithmetic, not a funding recommendation.

## Hour Zero: Stop the Bleeding Before Anything Else

Do three things, in this order, before you do anything else:

1. **Close the platform.** No new trade, no new funding, no new evaluation today.
2. **Save the full trade history and your journal before memory edits it.** Export whatever your record-keeping holds — every trade, with its date, size, entry, exit, and any note you made at the time. Do this before you start explaining the loss to yourself, because the version you remember tomorrow will be kinder to you than the log is.
3. **Confirm the administrative facts, briefly.** Is the account actually at zero or terminated? Are any positions still open? Is any money owed or blocked? Answer those questions, deal with anything still open, and then move on. Admin is a brief check here, not the main task — do not let sorting out paperwork become a reason to keep staring at the platform.

That is hour zero. Nothing in this hour involves a plan to win the money back, because a plan made in this hour is almost always just the urge to trade again, dressed up as a plan.

## Why "Win It Back" Fails First: The +150% Asymmetry

Here is the worked example this article uses throughout. It is illustrative arithmetic, not a real account:

- Starting capital: Rs 3,00,000
- After the blow-up: Rs 1,20,000
- Loss: Rs 3,00,000 − Rs 1,20,000 = Rs 1,80,000, which is **−60%**

Recovering from Rs 1,20,000 back to Rs 3,00,000 needs a gain of Rs 1,80,000. But Rs 1,80,000 measured against what is left — Rs 1,20,000 — is **+150%**, not +60%.

That is the trap. The maths of the hole is worse than the maths of the fall. A trader who lost 60% does not need a 60% gain to get back; they need a 150% gain on what remains. Any plan that needs a 150% gain quickly is a blow-up plan, not a recovery plan, because the only way to chase a gain that large that fast is to take the same kind of oversized risk that created the hole.

This is why "win it back" sizing fails first, before psychology or strategy even enter the picture. It is also why the protocol below is gated by compliance — by trades in which you followed your rules — rather than by profit. Profit is the wrong gate after a blow-up, because profit at oversized risk is exactly what the hole rewards.

For the fuller treatment of this asymmetry, see [the mathematics of drawdown and recovery](/articles/trading-drawdown-mathematics-of-recovery/) — this article uses only its own example above and does not reproduce its full table.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Asymmetry chart: Rs 3,00,000 account falling 60 percent to Rs 1,20,000 needs a 150 percent gain to recover." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The maths of the hole is worse than the maths of the fall</text>
<text x="40" y="90" fill="#f2f7f4" font-size="13" font-weight="700">Start</text>
<rect x="40" y="104" width="600" height="34" rx="12" fill="#2a3a34"/><rect x="40" y="104" width="600" height="34" rx="12" fill="#8fd6a0"/><text x="340" y="126" text-anchor="middle" fill="#1c2b26" font-size="12" font-weight="700">Rs 3,00,000</text>
<text x="40" y="170" fill="#f2f7f4" font-size="13" font-weight="700">After the blow-up · −60%</text>
<rect x="40" y="184" width="600" height="34" rx="12" fill="#2a3a34"/><rect x="40" y="184" width="240" height="34" rx="12" fill="#e8825a"/><text x="160" y="206" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">Rs 1,20,000</text>
<text x="40" y="250" fill="#f2f7f4" font-size="13" font-weight="700">To get back · +150% on what is left</text>
<rect x="40" y="264" width="600" height="34" rx="12" fill="#2a3a34"/><rect x="40" y="264" width="600" height="34" rx="12" fill="#e8c15a"/><text x="340" y="286" text-anchor="middle" fill="#1c2b26" font-size="12" font-weight="700">Rs 1,80,000 gain needed — not 60%</text>
</svg>
</figure>

## The Trading Recovery Protocol, Phase by Phase

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 380" role="img" aria-label="Trading recovery protocol flowchart from hour zero through the 20-trade gate to sizing up or stepping back." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The protocol, in order — no gate skipped</text>
<rect x="90" y="56" width="500" height="38" rx="12" fill="#2a3a34"/><text x="340" y="81" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Hour 0 · Stop and save the log</text>
<rect x="90" y="106" width="500" height="38" rx="12" fill="#2a3a34"/><text x="340" y="131" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Phase 1 · 7-day pause, no live trading</text>
<rect x="90" y="156" width="500" height="38" rx="12" fill="#2a3a34"/><text x="340" y="181" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Phase 2 · Autopsy — from the log, not memory</text>
<rect x="90" y="206" width="500" height="38" rx="12" fill="#2a3a34"/><text x="340" y="231" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Phase 3 · Five written rules, on paper</text>
<rect x="90" y="256" width="500" height="38" rx="12" fill="#8fd6a0"/><text x="340" y="281" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">Phase 4 · 20-trade gate at 0.5% risk</text>
<rect x="90" y="306" width="500" height="38" rx="12" fill="#2a3a34"/><text x="340" y="331" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Phase 5 · Step up to 1% — or step back</text>
<text x="340" y="366" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">Stop branch: a valid exit at any gate — stopping protects the rest of your money.</text>
</svg>
</figure>

The phases below are the trading recovery protocol this article proposes. Each phase states what to do, its exit gate in bold, and the most common way traders cheat that gate. You do not move to the next phase until the gate is met.

### Phase 1 — The Pause: Minimum 7 Days, No Live Trading

What to do: take a minimum 7-day pause with no live trading. No "just one small trade to feel better." Reviewing your old trades on paper is allowed during the pause. New-idea sim trading is prohibited during the 7-day pause and first becomes allowed only after the Phase 1 exit gate (7 days elapsed AND autopsy written), before any Phase 4 live trade; reviewing old trades in sim during the pause stays allowed; sim profit never counts toward any gate. Sim trading done to soothe the loss becomes shadow revenge trading — the same urge, with no money at stake to slow it down.

**Exit Gate (Phase 1): 7 days have elapsed AND the autopsy in Phase 2 is written. Whichever takes longer controls. A date alone never clears you to return.**

#### How Traders Cheat This Gate

Counting days while sim-trading new ideas to scratch the itch, then calling the pause complete because a week has passed. If the itch was scratched in sim, the pause did not do its job, and the autopsy is still unwritten.

### Phase 2 — The Autopsy: From the Log, Not From Memory

What to do: classify ALL losing trades in the log — that is the definition used throughout this article, with no subset or exception — using the log, not your memory of the session. For each trade, record the trade itself, the percentage of the account risked, whether a stop existed and whether it was moved, whether size grew after a loss, and how many trades were taken in that session. Then classify it using one of five labels borrowed from The 5 Ways Traders Blow Up, Ranked by Math, mentioned here in plain text only: no stop, oversizing, averaging down/martingale, revenge re-entry, or overtrading. This article does not re-rank those five ways — it borrows only their labels as a classification tool. If a trade fits none of the five labels, record it as "unclassified — describe what happened in one line and treat it as a journaling gap, not as a sixth cause". A rule-breaking winning trade is not a losing-trade classification: rule-breaking winning trades count as rule breaks for gate purposes even though they made money.

Your output is one named primary cause and one named secondary cause, each tied to specific trade IDs or dates in the log. The fuller diagnosis of why blow-ups repeat is covered in Why Do I Keep Blowing Up My Trading Account?, mentioned here in plain text only. No cause may be asserted without a log entry behind it. "Bad discipline" is not a cause; it is a label for not having looked. A cause sounds like this: "Revenge re-entry — after the morning loss, I re-entered larger in the same session," with the trades that prove it listed beside it.

If the log does not exist, or is too thin to classify trades this way, say so plainly: the autopsy is incomplete. That is not a reason to skip to the rules. It is a finding, and your first rebuild task in Phase 3 becomes a journaling rule — a rule that every future trade gets logged with the fields in the template below — before anything else.

A changed setup should be tested before it carries real money, after the Phase 1 exit gate and before any Phase 4 live trade. New-idea sim trading is prohibited during the 7-day pause and first becomes allowed only after the Phase 1 exit gate (7 days elapsed AND autopsy written), before any Phase 4 live trade; reviewing old trades in sim during the pause stays allowed; sim profit never counts toward any gate. That is the only line this article gives on testing a changed setup; it makes no claim about sample sizes or methods, because that subject belongs to a separate article on backtesting.

**Exit Gate (Phase 2): A written autopsy naming one primary cause and one secondary cause, each tied to specific log entries.**

#### How Traders Cheat This Gate

Diagnosing from memory, or from one bad trade, instead of from the log — and naming a vague cause with no trade behind it. Memory after a blow-up protects the trader, not the truth. The log does not.

### Phase 3 — Rebuild the Rules on Paper, Before Any Money Moves

What to do: write exactly five rules, each tied to what the autopsy found. These are the five written rules this protocol proposes:

1. **Fixed risk per trade, decided outside the session** — 1% per trade as the default, and 0.5% for the restart phase.
2. **A hard stop placed with every order, never moved away.**
3. **Never add to a losing position.**
4. **No re-entry to recover a loss in the same session.**
5. **A daily loss cap and a daily trade cap, with trading stopped for the day when either is hit.**

Write one quit condition alongside them — the condition from Phase 6 under which you stop trading, at least for now, instead of funding another restart. The five rules and the quit condition must be written down, not mental. A rule that lives only in your head is the pre-blow-up setup, restated in nicer language.

This article deliberately gives no universal numeric values for the daily loss cap or the daily trade cap beyond their structure. Those caps are yours to set when you write the rules, tied to your restart stake and your autopsy — inventing a universal number here would be inventing a fact.

Illustration only — not a universal rule or recommendation: on the illustrative Rs 50,000 restart stake, with Rs 250 risk per trade, an illustrative daily loss cap could be Rs 500 = 2 × Rs 250, and an illustrative daily trade cap could be 3 trades. Pick your own cap before the session, as a small multiple of your per-trade risk and a small number of trades, and write both down. Do not copy these illustration numbers as required values; set your own caps by this method on your own restart stake before Phase 4.

**Exit Gate (Phase 3): All five rules plus the quit condition are written down, not mental, before any money moves.**

#### How Traders Cheat This Gate

Keeping the rules mental — "I know what I did wrong" — and funding the restart before anything is written down. If it is not written, it is not a rule yet. It is an intention, and intentions do not survive the first losing session.

### Phase 4 — Prove It Small: 20 Rule-Compliant Trades at 0.5%

What to do: restart live only with a smaller sum than the blown account — where "smaller than the blown account" means smaller than the ORIGINAL Rs 3,00,000 starting capital — funded only from money you can afford to lose — never borrowed money, never money needed for living costs. The restart stake is your own affordable-money decision; this article gives the risk arithmetic, not a funding recommendation. The illustrative Rs 50,000 restart stake is separate affordable money used as the illustration, not an instruction to carve Rs 50,000 from the remainder. The rest of the Rs 1,20,000 balance is NOT traded during the 20-trade gate — only the restart stake trades, at 0.5% risk.

The illustrative restart used here: a Rs 50,000 restart stake at 0.5% risk per trade = **Rs 250 risk per trade**. For the sizing arithmetic on your own stake, see the [position size calculator](/tools/position-size/). Trade at 0.5% risk until 20 consecutive rule-compliant trades are logged. Wins and losses both count. Compliance, not profit, is the gate — a losing trade that followed every rule counts toward the 20; a winning trade that broke a rule does not, and it resets the count.

Sim may be used after the Phase 1 exit gate and before Phase 4 live trades to test the mechanics of a changed setup. New-idea sim trading is prohibited during the 7-day pause and first becomes allowed only after the Phase 1 exit gate (7 days elapsed AND autopsy written), before any Phase 4 live trade; reviewing old trades in sim during the pause stays allowed; sim profit never counts toward any gate. Only rule-compliant live trades count, because sim carries no emotional cost, and emotional cost is exactly what the gate is testing.

**Exit Gate (Phase 4): 20 consecutive rule-compliant live trades logged at 0.5% risk, with any rule break resetting the count for the current phase.**

#### How Traders Cheat This Gate

Counting sim profit toward the gate, counting a winning streak as proof of discipline, or sizing up early because the small account "feels too slow." A winning streak at small size is not evidence of discipline — it is evidence that the market was kind for a while. The gate is the count, not the feeling.

### Phase 5 — Size Up in Steps, or Step Back

What to do: only after the 20-trade gate, move to 1% risk per trade — Rs 500 per trade on the same illustrative Rs 50,000 stake — with the same daily loss cap and trade cap from Phase 3. The [risk of ruin calculator](/tools/risk-of-ruin/) covers the ruin maths behind keeping risk per trade small. Sizing up is earned by compliance, never by a winning streak. A hot streak at small size is not evidence of discipline, and treating it as evidence is how a trader arrives at the new size with the old habits intact.

**Exit Gate (Phase 5): The step to 1% is earned only by the completed 20-trade compliance gate at 0.5%. No completed count, no step up.**

#### How Traders Cheat This Gate

Sizing up on a winning streak instead of a completed compliance count, and staying at the new size after a rule break instead of stepping back.

#### The Step-Back Rule

**A rule break at 1% drops you back to 0.5% until 20 more compliant trades are logged. Restart the current step, not the whole protocol.** Stepping back is not failure. It is the protocol working — the size was earned by compliance, and compliance is what keeps it.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Risk size ladder: 0.5 percent risk for 20 compliant trades, then 1 percent risk, stepping back to 0.5 percent on a rule break." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Size up in steps — compliance earns the step</text>
<rect x="40" y="70" width="280" height="80" rx="12" fill="#8fd6a0"/><text x="180" y="106" text-anchor="middle" fill="#1c2b26" font-size="12" font-weight="700">RESTART SIZE</text><text x="180" y="132" text-anchor="middle" fill="#1c2b26" font-size="15" font-weight="700">0.5% · 20 trades</text>
<text x="340" y="118" text-anchor="middle" fill="#92a59c" font-size="20">→</text>
<rect x="360" y="70" width="280" height="80" rx="12" fill="#2a3a34"/><text x="500" y="106" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">AFTER THE GATE</text><text x="500" y="132" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">1% risk per trade</text>
<text x="340" y="196" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">Rule break at 1%? Step back to 0.5% — 20 more compliant trades.</text>
<text x="340" y="232" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">A hot streak at small size is not evidence of discipline.</text>
<text x="340" y="260" text-anchor="middle" fill="#92a59c" font-size="11">Compliance, not profit, is the gate — wins and losses both count.</text>
</svg>
</figure>

## The Autopsy Template: A Copyable Checklist

Copy this table into your journal. One row is filled as an illustration from the worked account's story — labelled as illustrative, not as a real trade — and the rest are blank for you to complete from your own log. A row without a log entry behind it is not an autopsy row; it is a guess. Leave it blank until the log supplies it.

| Trade (ID / date) | % of account risked | Stop present / moved? | Size after a loss | Trades in session | Classification (one of the five ways) |
|---|---|---|---|---|---|
| Illustrative row only — final session of the worked example: after a losing trade, the trader re-entered larger in the same session with no stop in place | More than the written rule allowed (illustrative, not a measured figure) | No stop placed (illustrative) | Increased after the previous loss (illustrative) | Multiple trades in one session (illustrative) | Revenge re-entry (illustrative) |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

Work through ALL losing trades in the log, one row each. If a trade fits none of the five labels, record it as "unclassified — describe what happened in one line and treat it as a journaling gap, not as a sixth cause". A rule-breaking winning trade is not a losing-trade classification: rule-breaking winning trades count as rule breaks for gate purposes even though they made money. When you are done, read the classifications back: the cause that appears with the most log entries behind it is your primary cause, and the next is your secondary cause. If you cannot fill the table because the log is missing or too thin, the autopsy is incomplete — record that, and make the journaling rule your first rebuild task in Phase 3.

For guidance on keeping a journal that can actually support this kind of review, see [what to track beyond profit and loss](/articles/trading-journal-what-to-track-beyond-pnl/). The [position sizing](/articles/position-sizing/) and [risk of ruin](/articles/risk-of-ruin-trading/) discussions cover the arithmetic behind the 0.5% and 1% risk levels used above.

## Phase 6 — The Stop Branch: When Stopping Is the Right Call

This section is given full weight, not tucked away as a footnote, because for some traders it is the correct outcome of the protocol — and a trader who cannot see stopping as a legitimate outcome will keep funding restarts the protocol says should not be funded.

**Stop trading, at least for now, if any of these is true:**

- The restart cannot be funded from money you can afford to lose. Borrowed money, or money needed for living costs, is not a restart stake. It is a second blow-up with a deadline attached.
- The same primary cause has now blown up two or more accounts, with no rule change between them. If the autopsy names the same cause, and the rules did not change, and the account blew up again, the protocol has already told you what it knows. Running it a third time unchanged is not persistence; it is repetition.
- You cannot complete the autopsy honestly — no log, and no willingness to look at one. A protocol gated on a written autopsy cannot clear a trader who will not write one.

Stopping here is framed as protecting the rest of your money, not as personal failure. It is also explicitly not "quit forever." If you choose to return later, you return through the same gates: pause, autopsy, written rules, small proof trades. The gates do not expire because time passed, and time passing does not substitute for them.

**Exit Gate (Phase 6): If a stop condition is met, the protocol's answer is to stop — and returning later still means passing through the same gates. That is a successful outcome of the protocol, not a failure of it.**

#### How Traders Cheat This Gate

Borrowing money or dipping into living costs to fund a restart the protocol says should not be funded, and re-entering without an honest autopsy. Both are ways of refusing the branch while pretending to follow the protocol. The branch only works if it is allowed to say no.

This is also where the wider question of how to come back after blowing up gets its honest answer: sometimes the comeback is not a trade. Sometimes it is the decision, made while you still have money left to protect, not to put more of it at risk under the same rules that just failed.

## The Funded-Account Difference: One Short Branch

The main protocol above is for your own capital. A blown funded or evaluation account is different, and it gets one short branch here, not a second protocol.

A blown funded or evaluation account is normally terminated with no reset, so continuing means a new evaluation. That is the whole branch: the protocol's phases do not resurrect a terminated account, and the restart arithmetic above applies to your own money, not to an evaluation you no longer hold. No firm names, fee figures, or payout figures are given here, because none are needed to make that decision.

## What Recovery Actually Looks Like

Recovery, under this protocol, is boring by design. It looks like this:

- Small size, held longer than feels satisfying.
- Capped days — trading stopped when the daily loss cap or the daily trade cap is hit, even when the session feels unfinished.
- A log full of followed rules, including losing trades that followed every rule and still lost.
- No single trade that turns the story around. No one good month that erases the hole. No revenge-trade redemption story in which the trade that broke the rules is the trade that saves the account.

There is no comeback montage in this version, because a montage is editing: it cuts out the sizing, the caps, and the count, and leaves only the winning trade. The 150% hole in the worked example does not get climbed in a montage. It gets climbed, if it gets climbed at all, by a sequence of small, capped, rule-compliant days — or it does not get climbed, and the trader stops with money still protected. Both are the protocol working.

In the end, to [stop revenge trading after loss](/articles/revenge-trading/) is not a matter of feeling calmer. It is a matter of structure: a pause you cannot shorten, an autopsy you cannot fake, rules you have written down, and a count you cannot round up. That is what this protocol is for. If you restart trading after losing everything without that structure, you are not recovering — you are re-entering, and re-entering under the same rules is how the second blow-up happens.

## Risk and Limitations: What This Protocol Is Not

This article is educational only, not a recommendation to fund an account or to trade. The restart stake and risk figures are illustrative arithmetic, not personal financial advice. The gates in this protocol — the 7-day minimum pause, the 20 rule-compliant trades, the 0.5% to 1% step — are a protocol this article proposes, labelled as such. They are not measured facts, not clinically established requirements, and not universally required rules. No return projection is made or implied: nothing here says how fast, or whether, any account recovers. No fee figures, brand names, or unverified statistics appear in this article, and no cause is asserted without a log entry behind it in the autopsy.

## Frequently Asked Questions

### What should I do immediately after blowing up my trading account?

Stop trading immediately. Close the platform, save the full trade history and your journal before memory edits it, and confirm the administrative facts: whether the account is actually at zero or terminated, whether any positions are still open, and whether any money is owed or blocked. Do not place a new trade, fund a new account, or start a new evaluation today. That is hour zero; the rest of the protocol starts after it.

### How long should I stay away from trading after a blow-up?

Under the protocol this article proposes, a minimum of 7 days with no live trading — and return only when the autopsy is written as well, whichever takes longer. A date alone never clears you to return. Reviewing old trades during the pause is allowed; trading new ideas in sim to soothe the loss is not, because it becomes shadow revenge trading.

### Should I fund a new account right away to win the money back?

No. The asymmetry is the reason: recovering from Rs 1,20,000 to Rs 3,00,000 after a 60% loss needs a Rs 1,80,000 gain, which is +150% on what is left, not +60%. Funding immediately to chase a 150% gain quickly means sizing up the same way that created the hole. Funding waits until the gates are passed: the pause, the written autopsy, and the five written rules — and then only from money you can afford to lose.

### How do I figure out what actually caused my account to blow up?

From the log, not from memory. Classify ALL losing trades in the log using the five labels — no stop, oversizing, averaging down/martingale, revenge re-entry, overtrading — recording the percentage of account risked, whether a stop existed and whether it was moved, whether size grew after a loss, and how many trades were taken in that session. If a trade fits none of the five labels, record it as "unclassified — describe what happened in one line and treat it as a journaling gap, not as a sixth cause". A rule-breaking winning trade is not a losing-trade classification: rule-breaking winning trades count as rule breaks for gate purposes even though they made money. Your primary cause and secondary cause are the classifications with log entries behind them. If the log is missing or too thin, the autopsy is incomplete, and a journaling rule becomes your first rebuild task.

### How small should I start when I return to trading?

Smaller than the blown account — where "smaller than the blown account" means smaller than the ORIGINAL Rs 3,00,000 starting capital — funded only from money you can afford to lose, at 0.5% risk per trade. On the illustrative Rs 50,000 restart stake, that is Rs 250 risk per trade. The illustrative Rs 50,000 restart stake is separate affordable money used as the illustration, not an instruction to carve Rs 50,000 from the remainder. The rest of the Rs 1,20,000 balance is NOT traded during the 20-trade gate — only the restart stake trades, at 0.5% risk. The stake itself is your own affordable-money decision — this article gives the risk arithmetic, not a funding recommendation — and the 20-trade compliance gate applies regardless of stake size.

### How do I know I am ready to trade live again?

Not by a feeling, and not by a winning streak. Under this protocol, readiness is the gates: 7 days elapsed, a written autopsy naming a primary and a secondary cause from the log, and five written rules plus a quit condition — followed by proof, which is 20 consecutive rule-compliant live trades at 0.5% risk. Compliance, not profit, is what the gate measures.

### Should I go back to paper trading after blowing up?

Sim or paper trading may be used after the Phase 1 exit gate and before Phase 4 live trades to test the mechanics of a changed setup. New-idea sim trading is prohibited during the 7-day pause and first becomes allowed only after the Phase 1 exit gate (7 days elapsed AND autopsy written), before any Phase 4 live trade; reviewing old trades in sim during the pause stays allowed; sim profit never counts toward any gate. Only rule-compliant live trades count, because sim carries no emotional cost, and emotional cost is what the gate is testing.

### What is different about recovering a blown funded/prop account?

A blown funded or evaluation account is normally terminated with no reset, so continuing means a new evaluation. The main protocol in this article is for your own capital; it does not resurrect a terminated account. No firm names, fee figures, or payout figures are relevant to that decision, and none are given here.

### How much do I need to gain to recover from a 60% loss?

On this article's worked example, +150% on what is left — not +60%. Rs 3,00,000 falling to Rs 1,20,000 is a Rs 1,80,000 loss, and Rs 1,80,000 measured against the remaining Rs 1,20,000 is 150%. That figure is for this example only; it is the reason win-it-back sizing is a trap, not a promise about any real account.

### When should I stop trading instead of trying to recover?

Stop trading, at least for now, if the restart cannot be funded from money you can afford to lose, if the same primary cause has blown up two or more accounts with no rule change between them, or if you cannot complete the autopsy honestly. Stopping protects the rest of your money and is a successful outcome of this protocol, not a personal failure — and returning later, if you choose to, still means passing through the same gates.

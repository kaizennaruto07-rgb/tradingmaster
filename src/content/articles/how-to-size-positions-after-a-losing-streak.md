---
title: "How to Size Positions After a Losing Streak"
description: "How to size positions after a losing streak: step down 1% to 0.5% to 0.25% to halt, with a worked ₹2,00,000 example and the rule for earning full size back."
meta_description: "How to size positions after a losing streak: step down 1% to 0.5% to 0.25% to halt, with a worked ₹2,00,000 example and the rule for earning full size back."
date: 2026-10-25
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["how to size positions after a losing streak", "position size after losing streak", "reduce position size after losing streak", "risk per trade after losing streak", "how much to risk after consecutive losses", "trading smaller after losses", "position sizing during drawdown", "when to increase position size again", "step down position sizing", "losing streak position sizing strategy"]
---

*By Kaizen · 25 October 2026 · Monks Of Market*

You are mid-streak, and the question in front of you is not theoretical. It is practical, and it is about the very next trade: what size do I trade now?

This article answers that question with a protocol. It is a ladder you decide before the streak, write down, and follow mechanically while the streak is running. It tells you when to cut size, by how much, when to stop live trading altogether, and — the part most advice skips — exactly how you earn full size back.

## The Short Answer: Step Down on a Ladder, Step Back Up One Rung at a Time

Here is the whole protocol for how to size positions after a losing streak, up front:

| Situation | Risk per trade | What you do |
|---|---|---|
| Baseline (no streak) | 1% of account | Trade normal size |
| After 3 consecutive losses | 0.5% of account | Halve your size |
| After 5 consecutive losses | 0.25% of account | Quarter your size |
| After 7 consecutive losses, or −3R in a day, or −6R in a week | 0% (halt) | Stop live trading; paper trading and review only |

And here is the way back up, which matters just as much as the way down:

- Move up **one rung at a time**, and only after **3 consecutive rule-following trades** at your current rung.
- Wins and well-executed losses both count toward those 3 trades. What is being proved is execution, not luck.
- Never jump two rungs. Never return to full size on the back of a single win.
- After a halt, the return starts differently: **5 consecutive rule-following paper/demo trades** first, then live trading resumes at the **quarter rung**, stepping up normally from there. Paper trades do **not** count toward the live step-up count.

Counting the streak itself needs one explicit rule, because the word "consecutive" alone leaves it implied. **A win resets the consecutive-loss count to zero**, whatever rung you are on. A breakeven trade — one exited at entry, with no profit and no loss — is not a loss, so it does not add to the count, but it does not reset the count either: the count holds where it was until the next win resets it or the next loss adds to it. A scratch trade therefore cannot be used to dodge a step-down. Keep the two counts separate: the loss count is about outcomes, so a loss counts toward the streak whether or not it followed your rules; the step-up count is about execution, so only rule-following trades count toward it, and a rule-breaking trade resets the step-up count at the current rung.

Two things about this ladder need to be stated plainly. First, it is a protocol to follow, not a proven optimum. No study has established that 3, 5, and 7 are the mathematically best thresholds, or that 3 rule-following trades is the ideal step-up sample. These are decision rules chosen to be clear enough to follow under pressure. Second, the promise of the ladder is survival plus clean execution data, not faster recovery and not profitability. It caps how much a streak can cost you while you work out what is actually going wrong. It does not promise to make you profitable.

One piece of context before the detail: losing streaks are normal, even for sound strategies. That conclusion is borrowed from the longer treatment of [how losing streaks affect trading accounts](/articles/how-losing-streaks-affect-trading-accounts/), which owns the streak mathematics; this article does not re-derive it. The streak itself is not the verdict. How you size through it is the decision you control.

## Why the Trigger Is Consecutive Losses, Not Drawdown Percentage

There is a reasonable alternative protocol that triggers on drawdown percentage instead of loss count: cut size in half at a 5% account decline, pause at 10%, and reassess the strategy at 15%. That is a useful guardrail, and it is compatible with this ladder. But it is not the primary trigger here, for one reason: a streak can be shallow in percentage terms and still be the moment execution breaks.

Five consecutive losses at 1% risk each cost roughly 5% compounded. By a drawdown trigger alone, you would only just be reaching the first cut at the point where the streak is already five deep — and where the real danger, revenge sizing and tilt, is at its worst. The consecutive-loss count catches the behavioural danger earlier, because it measures what is actually happening trade by trade: repeated losses in a row, each one tempting you to change something.

The two triggers answer different questions. The loss count asks, "is my execution under pressure right now?" The drawdown percentage asks, "how much has the account actually fallen?" Use the count as the trigger for sizing decisions, and keep the drawdown tiers as a backstop. If you ever hit a 10% decline, pause regardless of where you are on the ladder. The ladder is the primary protocol; the drawdown tiers are the safety net underneath it.

## The Worked Example: A ₹2,00,000 Account, 200 / 100 / 50 Shares

The prerequisite, stated once: position size = (account × risk%) ÷ stop distance. Risk% is the loss if the trade is stopped out, not the capital deployed. The full method, including how to apply it across setups, lives in the [position sizing](/articles/position-sizing/) guide; here it is applied at each rung of the ladder.

One denominator rule governs every rung, and it is stated here so the table and the equity path below cannot be read two ways: **risk% at each rung is calculated on your current equity at the time of the trade, not frozen at the starting account.** The table that follows is the starting illustration, at the starting ₹2,00,000 equity. Take a 1% baseline. That is ₹2,000 of risk per trade. Take a single example trade: entry ₹500, stop ₹490, so ₹10 of risk per share.

| Rung | Risk % | Risk per trade | Shares |
|---|---|---|---|
| Baseline | 1% | ₹2,000 | 200 |
| After 3 consecutive losses | 0.5% | ₹1,000 | 100 |
| After 5 consecutive losses | 0.25% | ₹500 | 50 |

The arithmetic is straightforward: ₹2,00,000 × 1% = ₹2,000, and ₹2,000 ÷ ₹10 per share = 200 shares. At the half rung, ₹2,00,000 × 0.5% = ₹1,000, giving 100 shares. At the quarter rung, ₹2,00,000 × 0.25% = ₹500, giving 50 shares. Notice what does not change: the entry and the stop. Only the share count moves, because the share count is the output of the formula, not an input you choose.

Reconciliation, so the table and live trading agree: the table shows the rungs at the starting equity, but live trading sizes off current equity. After three losses, equity is ₹1,94,059.80 (see the path below), so the half rung is 0.5% of ₹1,94,059.80, which is about ₹970 — giving 97 shares at ₹10 of risk per share, not 100. The rung percentages never change; the rupee budget shrinks as equity falls, and the share count follows it. The 7-loss path below already uses this current-equity basis throughout, so the two sections are consistent.

The rungs are fractions of your own baseline, not fixed figures that only work at 1%: half, then quarter. A trader whose baseline is 2% steps down to 1%, then 0.5%; a trader whose baseline is 0.5% steps down to 0.25%, then 0.125%. The percentages are the protocol; the ₹2,00,000 figures are only the illustration.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Share counts at each ladder rung for the ₹500 entry and ₹490 stop example: 200 shares at the 1% baseline, 100 shares at the 0.5% half rung, and 50 shares at the 0.25% quarter rung." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">One setup, three share counts — only the size moves</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">₹500 entry · ₹490 stop · ₹10 risk per share · ₹2,00,000 starting equity</text>
<text x="90" y="108" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Baseline 1%</text>
<rect x="170" y="92" width="440" height="22" rx="11" fill="#8fd6a0"/><text x="620" y="108" text-anchor="end" fill="#f2f7f4" font-size="12" font-weight="700">200 shares</text>
<text x="90" y="158" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Half 0.5%</text>
<rect x="170" y="142" width="220" height="22" rx="11" fill="#e8c15a"/><text x="400" y="158" fill="#f2f7f4" font-size="12" font-weight="700">100 shares</text>
<text x="90" y="208" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Quarter 0.25%</text>
<rect x="170" y="192" width="110" height="22" rx="11" fill="#e8825a"/><text x="290" y="208" fill="#f2f7f4" font-size="12" font-weight="700">50 shares</text>
<text x="340" y="258" text-anchor="middle" fill="#92a59c" font-size="11">Entry and stop never move. The share count is the output of (account × risk%) ÷ stop distance.</text>
<text x="340" y="278" text-anchor="middle" fill="#92a59c" font-size="11">Live, risk% is on current equity — after three losses the half rung is 97 shares, not 100.</text>
</svg>
</figure>

### The 7-Loss Equity Path: Full Size vs the Ladder

Now run seven straight losses through both paths. The compounding basis is labelled explicitly and used consistently throughout: **each loss is the stated percentage of the then-current equity**, not of the original account. No fixed-account figures are mixed in.

**At full 1% size, all seven losses:**

₹2,00,000 → ₹1,98,000.00 → ₹1,96,020.00 → ₹1,94,059.80 → ₹1,92,119.20 → ₹1,90,198.01 → ₹1,88,296.03 → **₹1,86,413.07**

Total loss: ₹13,586.93, or 6.79% of the starting account.

**On the ladder (1%, 1%, 1%, 0.5%, 0.5%, 0.25%, 0.25%):**

₹2,00,000 → ₹1,98,000.00 → ₹1,96,020.00 → ₹1,94,059.80 → ₹1,93,089.50 → ₹1,92,124.05 → ₹1,91,643.74 → **₹1,91,164.63**

Total loss: ₹8,835.37, or 4.42% of the starting account.

The ladder saves ₹4,751.56 over seven straight losses (₹1,91,164.63 − ₹1,86,413.07). That is the whole point in one number: the first three losses cost the same on both paths, because the ladder has not stepped down yet. The savings come entirely from losses four through seven, where the ladder is trading at half and then quarter size. The ladder does not prevent losses. It makes the later losses in a streak smaller, which is exactly when a trader is most likely to be trading badly.

For the full mathematics of what a drawdown then takes to recover, see [Trading Drawdown: The Mathematics of Recovery](/articles/trading-drawdown-mathematics-of-recovery/).

The same ladder scales to any account size: the percentages are the protocol, not the rupee figures, so a smaller account follows the same rungs. Small-account sizing gets its own dedicated treatment elsewhere; nothing about this ladder depends on the ₹2,00,000 figure.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Equity path over seven straight losses on a ₹2,00,000 account: full 1% size falls to ₹1,86,413.07, a 6.79% loss, while the ladder falls only to ₹1,91,164.63, a 4.42% loss — saving ₹4,751.56." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Seven straight losses: full size vs the ladder</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">Each loss is a percentage of then-current equity, compounded — same basis on both lines</text>
<line x1="70" y1="250" x2="630" y2="250" stroke="#3a4a44" stroke-width="1"/>
<line x1="70" y1="60" x2="630" y2="60" stroke="#3a4a44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="60" y="64" text-anchor="end" fill="#92a59c" font-size="11">₹2,00,000</text>
<text x="60" y="254" text-anchor="end" fill="#92a59c" font-size="11">₹1,86,000</text>
<polyline points="70.0,60.0 150.0,87.1 230.0,114.0 310.0,140.6 390.0,167.0 470.0,193.0 550.0,218.8 630.0,244.4" fill="none" stroke="#e8825a" stroke-width="3" stroke-linejoin="round"/>
<polyline points="70.0,60.0 150.0,87.1 230.0,114.0 310.0,140.6 390.0,153.8 470.0,166.9 550.0,173.4 630.0,179.9" fill="none" stroke="#8fd6a0" stroke-width="3" stroke-linejoin="round"/>
<circle cx="630" cy="244.4" r="5" fill="#e8825a"/><text x="630" y="230.4" text-anchor="end" fill="#e8825a" font-size="12" font-weight="700">₹1,86,413.07 (−6.79%)</text>
<circle cx="630" cy="179.9" r="5" fill="#8fd6a0"/><text x="630" y="165.9" text-anchor="end" fill="#8fd6a0" font-size="12" font-weight="700">₹1,91,164.63 (−4.42%)</text>
<text x="340" y="292" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">The ladder saves ₹4,751.56 — entirely from smaller sizes on losses four through seven.</text>
<text x="340" y="312" text-anchor="middle" fill="#92a59c" font-size="11">The first three losses cost the same on both paths: the ladder has not stepped down yet.</text>
</svg>
</figure>

## The Step-Up Ladder: How You Earn Full Size Back

Reducing position size after a losing streak is the easy half of the problem. Every trader knows they should trade smaller after losses. The hard half is the return: when, exactly, do you go back to normal size? Without a rule, the answer is usually "after the next win" — and that is how a streak that ended turns into a new streak at full size.

The rule here is mechanical. Suppose you are at the quarter rung, 0.25% risk per trade. You stay there until you have completed 3 consecutive rule-following trades at that rung. A rule-following trade is one where you followed your plan: the entry, the stop, and the exit all matched what you wrote down before the trade. A win that broke your rules does not count. A loss executed exactly to plan does count, because it proves the execution is back even though the outcome was not.

Once you have those 3 trades, you move up one rung — from 0.25% to 0.5%. Then the count restarts: 3 more consecutive rule-following trades at 0.5% before you return to the 1% baseline. Any trade that breaks your rules resets the count at the current rung. There is no shortcut and no partial credit for a good week.

This rule is deliberately positioned between two looser and stricter variants you may come across. One variant lets you step up after three wins, or after a net gain of +2R. That version is looser on the wrong dimension: it counts wins, and wins can come from luck. Our rule is stricter than that one, because it demands rule-following rather than winning. Another variant demands ten consecutive rule-following trades, then a stage at 75% of normal size, before full size returns. That version is stricter on sample size, and in practice many traders will not follow a rule that long — a rule nobody follows protects nobody. Three rule-following trades per rung is enough to prove the execution is back, and small enough that a trader will actually follow it. That is the justification, stated honestly: it is a judgement about followability, not a measured optimum.

This is also why the ladder must be pre-written, not decided mid-streak. Deciding your size while you are losing is deciding under the exact emotional conditions the ladder exists to protect you from. That is the connection to [tilt in trading](/articles/tilt-in-trading/): tilt is what happens when sizing decisions get made in the heat of a streak, and a pre-written ladder removes the decision from that moment entirely.

The halt has its own return path, different from the rung-to-rung step-up above: after a halt, five paper trades come first and live trading resumes at the quarter rung. That rule is set out in full in Anti-Pattern 5 and in the protocol card below.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 380" role="img" aria-label="The step-down and step-up ladder: baseline 1% risk, after 3 consecutive losses 0.5%, after 5 losses 0.25%, after 7 losses or minus 3R in a day or minus 6R in a week halt live trading; step back up one rung at a time after 3 consecutive rule-following trades." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Down the ladder, one rung at a time — and back the same way</text>
<rect x="140" y="60" width="400" height="44" rx="12" fill="#8fd6a0"/><text x="340" y="88" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">Baseline · 1% risk per trade</text>
<text x="340" y="124" text-anchor="middle" fill="#92a59c" font-size="12">▼ after 3 consecutive losses</text>
<rect x="140" y="132" width="400" height="44" rx="12" fill="#e8c15a"/><text x="340" y="160" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">Half rung · 0.5% risk per trade</text>
<text x="340" y="196" text-anchor="middle" fill="#92a59c" font-size="12">▼ after 5 consecutive losses</text>
<rect x="140" y="204" width="400" height="44" rx="12" fill="#e8825a"/><text x="340" y="232" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">Quarter rung · 0.25% risk per trade</text>
<text x="340" y="268" text-anchor="middle" fill="#92a59c" font-size="12">▼ after 7 losses, or −3R in a day, or −6R in a week</text>
<rect x="140" y="276" width="400" height="44" rx="12" fill="#c0503c"/><text x="340" y="304" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">HALT · paper trading and review only</text>
<text x="340" y="348" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Way back: up one rung after 3 consecutive rule-following trades. Never two rungs. Never on one win.</text>
<text x="340" y="368" text-anchor="middle" fill="#92a59c" font-size="11">After a halt: 5 rule-following paper trades first, then live resumes at the quarter rung.</text>
</svg>
</figure>

## Size Down First, Diagnose Second: The Diagnosis Fork

The ladder and the diagnosis run in parallel, and the order matters: size down first, diagnose second. Stepping down is automatic. It is not a verdict on your strategy, and it does not require you to know yet whether the streak is bad luck or bad trading. You step down because the count says so, and you diagnose while trading small, where further losses cost less and the data you collect is cleaner.

The diagnosis itself uses one measure: your rule-following percentage over the last 10–20 trades. Go through the journal trade by trade and mark each one as rule-following or not, honestly. Then:

| Rule-following over last 10–20 trades | Lane | What it means |
|---|---|---|
| 80% or more | Variance lane | You are mostly following the plan and still losing. The streak is most plausibly normal variance. Stay on the ladder, keep executing, let the sample grow. |
| 70–80% | — | No label is assigned to this middle band. Re-measure rule-following after the next 10 trades. Meanwhile, stay at the current rung — do not step down further on the diagnosis alone; step down only if the consecutive-loss count triggers it. |
| Under 70% | Execution lane | The problem is execution, not the strategy. The fixes are process fixes: pre-trade checklists, fewer setups, a pause rule — not a new strategy. |

One further guardrail: do not declare the strategy broken on fewer than 30 trades. A 30-trade sample is the minimum before any verdict on the strategy itself. Switching strategies mid-streak, before that sample exists, destroys the very data the diagnosis needs. The ladder buys you the time to reach 30 trades without the streak doing fatal damage in the meantime.

Note what the diagnosis fork does not do: it does not tell you to stop trading at the first sign of trouble. Trading smaller on the ladder is the default. Stopping live trading completely is reserved for the halt trigger, covered below.

## Anti-Pattern 1: Martingale, or Doubling Up to Win It Back

Martingale means doubling your risk after each loss so that a single win recovers everything. It is the most dangerous response to a losing streak, and the arithmetic shows why.

Start at 1% risk. After one loss, double to 2%. Then 4%, then 8%, then 16%. After five straight losses, the risk sequence is 1%, 2%, 4%, 8%, 16% — a sum of 31% of the original account committed across those five trades, with the fifth trade alone risking 16 times what the first trade risked. A normal five-loss streak, the kind that happens routinely, has now put nearly a third of the account at risk. One more doubling, to 32%, and a single stopped-out trade is a catastrophic loss.

The ladder does the exact opposite at every step: as losses accumulate, risk per trade falls. Martingale bets that the streak must end soon. The ladder assumes it might not, and sizes accordingly. Sizing up after losses to recover faster is not a recovery strategy; it is [revenge trading](/articles/revenge-trading/) with a formula attached.

## Anti-Pattern 2: Widening the Stop to Keep the Share Count

A subtler way to break the ladder is to keep trading 200 shares by moving the stop further away. The setup says the stop belongs at ₹490, but ₹490 only allows 100 shares at the half rung — so the trader moves the stop to ₹480, away from the ₹500 entry, and keeps the 200 shares. The risk budget is now broken, and the arithmetic proves it.

At the genuine setup stop of ₹490, each share risks ₹10, so the half-rung budget of ₹1,000 buys exactly 100 shares. Move the stop to ₹480 and each share risks ₹20. Kept at 200 shares, the trade now risks 200 × ₹20 = ₹4,000 — four times the ₹1,000 half-rung budget, or 2% of the starting account instead of 0.5%. That is a widening in the true sense: the stop moved away from the entry, the risk per share doubled, and holding the share count fixed multiplied the total risk.

The stop is set by the chart and the setup, not by the desired share count. The share count is the output of (account × risk%) ÷ stop distance. If the chart genuinely puts the stop at ₹480, the rung still rules the shares: ₹1,000 ÷ ₹20 = 50 shares at the half rung, not 200. If the setup's stop does not fit the rung you are on, the correct responses are to take fewer shares or to skip the trade. Moving the stop to fit the shares is the ladder in reverse.

## Anti-Pattern 3: Switching Strategy Mid-Streak

Mid-streak is the worst moment to change strategies, for a reason that follows directly from the diagnosis fork: you have no data yet. A strategy switch resets your sample to zero. The 30 trades you needed for a verdict now have to be collected all over again, under a new set of rules you have not tested, while you are already frustrated.

The urge to switch is understandable — it feels like doing something. But "doing something" here means abandoning the sample that would tell you whether anything was actually wrong. The ladder exists precisely to buy time for that sample: trade small, follow the existing rules, collect the 30 trades, and then judge. If the verdict after 30 trades is that the strategy is broken, change it then, deliberately, with the data in front of you. Changing it at loss number six is not a decision. It is a reaction.

## Anti-Pattern 4: Jumping Straight Back to Full Size After One Win

This is the single most common step-up failure, and the core warning of this article. You have stepped down to half size. You take a good trade at half size and it wins. The relief is enormous, and the temptation is to go straight back to full size on the next trade — after all, the streak is over, is it not?

One win proves nothing about execution. A win can come from a setup you chased, a stop you moved, or a market that bailed out a bad entry. Returning to full size on one win means the next loss — which may come immediately — lands at full size, before you have any evidence that your execution is actually back. Worse, if that full-size loss starts a new streak, you are back on the ladder having learned nothing.

The step-up rule exists for this exact moment. Three consecutive rule-following trades, one rung at a time. A single win is not three trades, and a win that broke the rules is not a rule-following trade at all. If the rule feels slow, that is the point: the slowness is what separates a return to full size from a relapse into full size.

## Anti-Pattern 5: Trading Through the Halt Trigger

The halt is the ladder's last rung, not a suggestion. After 7 consecutive losses, or −3R in a day, or −6R in a week, live trading stops. What continues is paper or demo trading and review — going through the journal, checking rule-following, and working out which lane of the diagnosis fork you are in.

"Just one more at quarter size" is not an exception to the halt. It is the halt being ignored, and it is usually said at the exact moment when judgement is worst. The halt trigger is valuable precisely because it is not discretionary: it fires on a count, not on a feeling about whether you have learned your lesson. A related pause rule worth knowing alongside it is [the 3-day rule](/articles/the-3-day-rule/), the compatible pause after three red days — a different trigger for a different situation, but the same principle: the pause is decided in advance, not negotiated mid-streak.

If you find yourself arguing with the halt trigger, that argument is itself information. It means the streak has reached the point where live decisions should not be trusted, which is exactly what the trigger is for.

The way back from a halt is fixed, not negotiated. After a halt, complete **5 consecutive rule-following paper/demo trades**. Those paper trades prove execution is back, but they do **not** count toward the live step-up count — the live count starts fresh when live trading resumes. Live trading resumes at the **quarter rung** (0.25% on the 1% baseline; a quarter of your own baseline if yours differs), not at half size and not at the baseline. From there, step up normally: 3 consecutive rule-following live trades at the quarter rung earn the half rung, then 3 more earn the baseline. If a paper trade breaks your rules, the paper count restarts. If a live trade after resumption breaks your rules, the live step-up count restarts at the quarter rung.

## One Line on Costs: Smaller Size Does Not Shrink Percentage Charges

One line of cost honesty, because it is easy to misunderstand what stepping down actually saves: percentage charges do not shrink with position size — smaller trades cap the loss per trade, but they do not make costs disappear (for scale, NSE equity-options charges run at 0.03553%/side all-in). Stepping down limits what a stopped-out trade costs you in market loss; it does not reduce the percentage the market's plumbing takes.

## The One-Page Protocol Card

This is the whole protocol on one card. Screenshot it, print it, tape it to the monitor — wherever you will actually see it before the next trade.

**The ladder (risk per trade):** Baseline 1% → after 3 consecutive losses, 0.5% → after 5 consecutive losses, 0.25% → after 7 consecutive losses, or −3R in a day, or −6R in a week, HALT live trading. The rungs are fractions of your own baseline (half, then quarter; for example, 2% → 1% → 0.5%).

**The way back:** Up one rung at a time, only after 3 consecutive rule-following trades at the current rung. Wins and well-executed losses both count. Never jump two rungs. Never return to full size on a single win. **After a halt:** 5 consecutive rule-following paper/demo trades first; paper trades do NOT count toward the live step-up count; live resumes at the quarter rung, then steps up normally.

**Counting the streak:** A win resets the consecutive-loss count to zero. A breakeven trade does not add to the count and does not reset it — the count holds until the next win or loss.

**The diagnosis, in parallel:** Size down first, diagnose second. Rule-following over the last 10–20 trades: 80% or more is the variance lane, under 70% is the execution lane, 70–80% is unlabelled — re-measure after the next 10 trades and stay at the current rung meanwhile, stepping down only if the consecutive-loss count triggers it — and no strategy verdict before 30 trades.

**The five things never to do:** Do not double up. Do not widen the stop to keep the share count. Do not switch strategy mid-streak. Do not jump back to full size after one win. Do not trade through the halt.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 440" role="img" aria-label="One-page protocol card: the ladder from 1% to 0.5% to 0.25% to halt, the step-up rule, the streak-counting rule, the diagnosis fork, and the five things never to do." class="viz">
<rect x="30" y="20" width="620" height="400" rx="16" fill="#2a3a34"/>
<text x="340" y="56" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The streak-sizing protocol — one card</text>
<text x="60" y="96" fill="#8fd6a0" font-size="13" font-weight="700">THE LADDER</text>
<text x="60" y="118" fill="#f2f7f4" font-size="12">1% → 0.5% after 3 losses → 0.25% after 5 losses → HALT after 7,</text>
<text x="60" y="138" fill="#f2f7f4" font-size="12">or −3R in a day, or −6R in a week. Rungs are fractions of your baseline.</text>
<text x="60" y="176" fill="#8fd6a0" font-size="13" font-weight="700">THE WAY BACK</text>
<text x="60" y="198" fill="#f2f7f4" font-size="12">One rung at a time, after 3 consecutive rule-following trades per rung.</text>
<text x="60" y="218" fill="#f2f7f4" font-size="12">After a halt: 5 paper trades first, then live at the quarter rung.</text>
<text x="60" y="256" fill="#8fd6a0" font-size="13" font-weight="700">COUNTING THE STREAK</text>
<text x="60" y="278" fill="#f2f7f4" font-size="12">A win resets the count to zero. A breakeven trade neither adds nor resets.</text>
<text x="60" y="316" fill="#8fd6a0" font-size="13" font-weight="700">DIAGNOSIS, IN PARALLEL</text>
<text x="60" y="338" fill="#f2f7f4" font-size="12">80%+ rule-following = variance lane · under 70% = execution lane ·</text>
<text x="60" y="358" fill="#f2f7f4" font-size="12">70–80% = re-measure after 10 trades. No strategy verdict before 30 trades.</text>
<text x="60" y="396" fill="#e8825a" font-size="13" font-weight="700">NEVER: double up · widen the stop · switch strategy mid-streak · jump back on one win · trade through the halt.</text>
</svg>
</figure>

## Risks and Limitations

Trading involves the risk of loss of capital. This ladder reduces the size of losses during a streak; it does not prevent losses, and it does not guarantee profit or survival. A trader can follow the ladder perfectly and still lose money, because the underlying trades can simply be wrong, and because no sizing rule fixes a strategy without an edge. Nothing in this article is a promise of recovery speed or profitability — the promise is only survival plus clean execution data, and even that depends on actually following the rules.

Leveraged instruments carry additional risk: futures and options can lose more than the initial outlay, and options carry expiry risk, meaning a correct view can still lose money if the timing is wrong. The ladder's percentages apply to risk per trade, but leverage changes how fast a stopped-out trade can move against you, so the same 1% budget demands extra care in leveraged products.

The ladder's thresholds are this article's own protocol rules, not findings from a study. The 3/5/7 loss counts, the −3R daily and −6R weekly halt triggers, the 3-trade step-up sample, and the 80%/70% diagnosis bands are decision rules chosen for clarity and followability. Other reasonable protocols use different numbers. What matters is not that these numbers are optimal — they are not claimed to be — but that a rule is chosen in advance and followed without renegotiation mid-streak.

A final limitation: a 50% loss needs a 100% gain to recover, so the damage a streak does is asymmetric — losses hurt more than equal-sized gains help. That asymmetry is the deeper reason to cap streak damage early rather than chase it later.

Giving back wins is a different problem from losing streaks, and it is treated separately in [why traders give back their profits](/articles/why-traders-give-back-profits/); do not conflate the two.

One last scope note: [Kelly sizing](/articles/kelly-criterion-calculator-for-traders/) answers a different question — how big to bet given your edge — and it gets its own treatment elsewhere. It is not the streak ladder, and the two should not be mixed.

## Frequently Asked Questions

### Should I reduce position size after a losing streak?

Yes. On this ladder, mechanically: halve your risk per trade to 0.5% after 3 consecutive losses, quarter it to 0.25% after 5, and halt live trading after 7. The decision is made before the streak, not during it, so you are following a rule rather than negotiating with yourself after each loss.

### How much should I reduce position size after consecutive losses?

From a 1% baseline, cut to 0.5% after 3 consecutive losses and to 0.25% after 5 consecutive losses. On a ₹2,00,000 account with a ₹500 entry and a ₹490 stop, that means going from 200 shares to 100 shares, then to 50 shares at the starting equity. Live, risk% is on current equity: after three losses, 0.5% of ₹1,94,059.80 is about ₹970, or 97 shares. The entry and stop do not change; only the share count moves.

### How many consecutive losses before I should stop trading for the day?

Live trading halts after 7 consecutive losses, or after −3R in a day, or after −6R in a week — whichever comes first. At the halt, live trading stops and only paper or demo trading and review continue. There is no "just one more at quarter size" exception. The way back is 5 consecutive rule-following paper/demo trades, then live resumes at the quarter rung, stepping up normally; paper trades do not count toward the live step-up count.

### Should I increase position size after losses to recover faster?

No. Increasing size after losses to recover faster is the core anti-pattern this article warns against: it is sizing up at the exact moment when judgement is worst, and doubling risk after each loss turns an ordinary five-loss streak into a commitment of 31% of the original account across those five trades. The ladder sizes down during a streak, never up.

### When can I go back to normal position size after a losing streak?

One rung at a time, and only after 3 consecutive rule-following trades at your current rung. From 0.25%, that earns a move to 0.5%; from 0.5%, another 3 consecutive rule-following trades earn a return to the 1% baseline. A single win never earns a return to full size, and a win that broke your rules does not count toward the 3 trades at all. After a halt, the return starts with 5 consecutive rule-following paper/demo trades and live resumption at the quarter rung; paper trades do not count toward the live step-up count.

### What position size should I use during a losing streak?

The size the streak count puts you on: 1% at baseline, 0.5% after 3 consecutive losses, 0.25% after 5 consecutive losses, and no live size at all after the halt trigger. Work it through the formula — position size = (account × risk%) ÷ stop distance — so on the ₹2,00,000 starting illustration the rungs are 200, 100, and 50 shares for the ₹500 entry and ₹490 stop, with risk% always on current equity at trade time.

### How much drawdown do consecutive losses actually cause?

On the compounded basis used throughout this article — each loss as a percentage of then-current equity — seven straight losses at full 1% size take a ₹2,00,000 account to ₹1,86,413.07, a loss of ₹13,586.93 or 6.79%. On the ladder, the same seven losses take it to ₹1,91,164.63, a loss of ₹8,835.37 or 4.42%. The ladder saves ₹4,751.56, entirely from the smaller sizes on losses four through seven.

### How do I know if a losing streak means my strategy is broken?

You do not know from the streak alone — that is what the diagnosis fork is for. Measure rule-following over your last 10–20 trades: 80% or more rule-following points to the variance lane, under 70% points to the execution lane, and the middle 70–80% band means re-measure after the next 10 trades, stay at the current rung meanwhile, and step down only if the consecutive-loss count triggers it. Either way, do not declare the strategy broken before a 30-trade sample. Size down first, diagnose second.

### Is risking 1% per trade enough to survive a losing streak?

1% is the baseline that makes this ladder work, not a guarantee of survival. At 1%, seven straight losses cost 6.79% compounded at full size, and the ladder cuts that to 4.42% — survivable damage from a bad run, but not a promise. No risk percentage guarantees survival or profit; what 1% plus the ladder gives you is bounded damage and clean execution data while you diagnose the streak.

### Should I stop trading completely after a losing streak, or trade smaller?

Trade smaller first. The default response to a losing streak is the ladder: halve, then quarter your size, and keep trading small while you diagnose. Stop live trading completely only at the halt trigger — 7 consecutive losses, −3R in a day, or −6R in a week — at which point you switch to paper or demo trading and review: 5 consecutive rule-following paper/demo trades, then live resumes at the quarter rung, stepping up normally. Paper trades do not count toward the live step-up count.

## Risk Disclosures

Trading can result in the **loss of your entire capital** — no sizing protocol removes that possibility. **Leverage** magnifies losses as well as gains. **Options expiry** carries specific risks: time decay accelerates into expiry and short-option positions face theoretically unlimited loss. **No sizing rule fixes a strategy without an edge, and no ladder guarantees profit or survival.** This article is **educational content, not financial advice**; it does not recommend any strategy, instrument, or trade.

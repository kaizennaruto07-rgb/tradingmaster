---
title: "Prop Firm Drawdown Rules: Daily, Max & Trailing Explained"
description: "Daily drawdown is 4–5% and resets; max drawdown is 6–12% and never resets. A trailing floor rises with your peak — you can be up 1.5% and still fail."
meta_description: "Daily drawdown is 4–5% and resets; max drawdown is 6–12% and never resets. A trailing floor rises with your peak — you can be up 1.5% and still fail."
date: 2026-10-27
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["prop firm drawdown rules", "prop firm daily drawdown", "prop firm maximum drawdown", "trailing vs static drawdown", "daily loss limit vs max drawdown", "end-of-day trailing drawdown", "intraday trailing drawdown", "balance-based vs equity-based drawdown", "what happens if you breach prop firm drawdown", "how to avoid breaching prop firm drawdown"]
---

*By Kaizen · 27 October 2026 · Monks Of Market*

Most accounts don't end on one bad idea. They end on a misunderstood rule — usually a drawdown rule — discovered at the exact moment it killed the account.

That's understandable. In ordinary trading, "drawdown" is a loose word for how far an account has fallen from its peak. At a prop firm, it's nothing of the sort. It's a set of hard floors, each with its own size, its own reset behaviour, and its own consequence. Cross one and the account can be gone — even if the trade that crossed it later turns around.

This article decodes those rules before your first trade. It's the companion to the October 27 morning article on risk per trade to pass a challenge: that one sizes backward from the daily limit; this one explains the limits themselves.

## Drawdown at a prop firm is not one rule: it is two floors plus a moving floor

Here's the whole decoder in one paragraph. A prop-firm account is governed by **two independent floors**: a **daily loss limit** and a **maximum drawdown**. Breach either one on its own and you can lose the day — or the account. On top of that, the maximum floor may be **static** (fixed in place) or **trailing** (rising with your account's peak, never moving back down). And a breach may be **hard** (the account closes immediately) or, in some cases, **soft** (trading pauses until the next session).

Before your first trade, you need three answers from your firm's current published rules:

1. **Which floor is which** — what is the daily limit, and what is the maximum drawdown?
2. **Does the floor move, and on what measurement** — is the maximum floor static or trailing, and if trailing, does it move on every intraday tick, on the end-of-day close, or on balance?
3. **Is a breach a hard fail or a soft stop?** — does breaching close the account, or pause trading?

Everything else — how you size, how you pace a challenge, whether a particular challenge is worth taking at all — follows from those three answers. The rest of this article works through each one on a single worked example, so you can see exactly how the floors behave.

A note on figures throughout: firm rules change, and published figures are snapshots, not permanent rulebooks. This article therefore uses published ranges — a daily loss limit typically 4–5%, a maximum drawdown typically 6–12% — and a single worked example to show the mechanics. Always confirm the exact figures in your firm's current published rules before you trade. No firm publishes a verified breakdown of what share of traders fail by drawdown, so this article quotes no such statistic; drawdown failure is described here as the mechanism the rules are built to produce, not as a measured failure rate.

## The two floors, side by side: daily loss limit vs maximum drawdown

Think of the two floors as two tripwires at different heights. The daily tripwire sits closer to where you're trading today. The maximum tripwire sits further away, but it never moves out of the way — cross it once and there's no second chance on that account.

| | Daily loss limit | Maximum drawdown |
|---|---|---|
| What it caps | Losses within a single trading day | Losses over the whole life of the account |
| Typical size | 4–5% of account size | 6–12% of account size |
| Does it reset? | Yes — every day, at the firm's server rollover | No — never within an account's life (see the evaluation-to-funded note below) |
| What a breach does | Ends the day, or the account — consequence varies by firm (see soft vs hard below) | Ends the account outright; hard closure is the norm here |

The two floors are independent. A good week does not cancel a bad day, and a cautious day does not cancel a slow bleed toward the lifetime floor. You must stay above both, every day. In other words, the prop firm daily drawdown is the floor for a single day, and the prop firm maximum drawdown is the floor for the account's whole life.

### The daily loss limit: typically 4–5%, resets every day, and usually binds first

The daily loss limit caps how much you can lose in one trading day. Published figures typically sit at 4–5% of account size, though some sources give a wider 3–5% range. It resets every trading day at the firm's server rollover — midnight server time, though the exact zone varies by firm and platform, so do not assume a single universal reset time.

The daily limit usually binds first on a bad day. That is a tendency, not a measured statistic: it follows from the relative sizes alone. A 4–5% daily limit is smaller than a 6–12% maximum, and it applies within a single day, while the maximum accumulates over the whole account life. On any single bad day, you will tend to hit the daily floor before you reach the lifetime floor — which is why the companion article on risk per trade sizes backward from the daily limit.

### The maximum drawdown: typically 6–12%, never resets within an account's life, and ends the account outright

The [maximum drawdown](/articles/maximum-drawdown/) caps how far the account can fall from its reference point over its entire life — evaluation or funded account alike. Published figures typically sit at 6–12% of account size. Unlike the daily limit, it never resets within an account's life. A new day, a new week, or a profitable run does not restore maximum-drawdown room you have already used. Losses only shrink that room; under a static floor, profits widen the buffer above it.

That permanence is what makes the maximum floor the more dangerous of the two over a long challenge. The daily floor forgives you tomorrow. The maximum floor never forgives you.

One clarification on "never resets": it applies within an account's life. Whether a funded account starts with a fresh floor or carries the evaluation floor forward varies by firm and stage rules, and must be confirmed per firm — do not assume either transition. The table and sections above describe life within one account, not the transition between stages.

## The worked anchor: a $100,000 account with a $5,000 daily room and a $90,000 floor

To keep every number in this article consistent, we will carry one anchor account through it: **$100,000 starting balance, a 5% daily loss limit, and a 10% static maximum drawdown**.

- **Daily room:** 5% of $100,000 = **$5,000 per day**. Lose $5,000 in a day, and you have hit the daily floor.
- **Maximum floor:** $100,000 minus 10% = **$90,000**. Fall to $90,000 at any point, and the account ends.
- **The buffer grows under a static floor:** grow the account to $112,000, and your buffer above the $90,000 floor is $112,000 − $90,000 = **$22,000**. The floor has not moved; your profits have widened the room above it.

Hold those three numbers — $5,000 a day, $90,000 absolute floor, $22,000 buffer at $112,000 — and the rest of the article becomes a set of variations on them. Where a different model is used, it is labelled as a different model and never mixed into this account.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Diagram of prop firm drawdown rules showing a daily loss limit floor that resets each day and a maximum drawdown floor that never resets on a 100,000 dollar account." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Two floors plus a moving floor</text>
<rect x="40" y="70" width="280" height="130" rx="12" fill="#2a3a34"/><text x="180" y="106" text-anchor="middle" fill="#8fd6a0" font-size="12" font-weight="700">DAILY LOSS LIMIT</text><text x="180" y="136" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">4–5% · $5,000 a day</text><text x="180" y="162" text-anchor="middle" fill="#f2f7f4" font-size="12">Resets every day</text><text x="180" y="184" text-anchor="middle" fill="#92a59c" font-size="11">Binds first on a bad day</text>
<rect x="360" y="70" width="280" height="130" rx="12" fill="#2a3a34"/><text x="500" y="106" text-anchor="middle" fill="#e8c15a" font-size="12" font-weight="700">MAXIMUM DRAWDOWN</text><text x="500" y="136" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">6–12% · $90,000 floor</text><text x="500" y="162" text-anchor="middle" fill="#f2f7f4" font-size="12">Never resets in an account</text><text x="500" y="184" text-anchor="middle" fill="#92a59c" font-size="11">Ends the account outright</text>
<text x="340" y="240" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Either floor, breached on its own, can end the day or the account.</text>
</svg>
</figure>

## Do floating losses count? At most firms, yes — a wick through the floor ends the account

This is the trap that ends accounts that "would have been fine." At most firms, floating — unrealised, open — losses count toward the drawdown floors, not just closed trades. If price wicks through your floor while a position is open, the account ends, even if price reverses minutes later. A triggered breach is never undone by a later recovery.

There is a minority exception: some balance-based models count only closed trades. Under such a model, an open position dipping below the floor would not by itself trigger a breach until the loss is realised. That exception is exactly why you must confirm which measurement your firm uses before your first trade. Never assume floating losses do not count — at most firms, they do, and assuming otherwise is how an account ends on a wick.

The practical consequence is simple: your stop-loss placement and your position size must keep even your open, floating loss above both floors, not just your closed loss. A trade that is "safe if it closes here" is not safe if it wicks there first.

## Static vs trailing maximum drawdown: one floor stays put, the other climbs with your peak

The daily floor resets; the maximum floor's behaviour depends on its type. This trailing vs static drawdown distinction decides how much real room you actually have as an account grows — and it is where the $100,000 anchor splits into two very different stories.

- **Static maximum drawdown:** the floor is fixed at starting balance minus the limit, forever. Profits widen your buffer. Losses shrink it. The floor itself never moves.
- **Trailing maximum drawdown:** the floor equals the account's highest peak minus the limit, and it never moves back down. Profits raise the floor. Losses then bring you closer to a floor that your own profits set.

Under a static floor, a good run makes you safer. Under a trailing floor, a good run makes the next pullback more dangerous. That inversion is the single most important idea in this article.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Chart comparing static vs trailing drawdown on a 100,000 dollar prop firm account, showing a fixed 90,000 dollar static floor against a trailing floor that rises with the account peak." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Static floor stays put; trailing floor climbs</text>
<text x="110" y="86" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Static</text>
<rect x="200" y="70" width="360" height="26" rx="13" fill="#2a3a34"/><text x="210" y="88" fill="#8fd6a0" font-size="12" font-weight="700">Floor $90,000 forever</text>
<text x="110" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">At $112,000</text>
<rect x="200" y="124" width="360" height="26" rx="13" fill="#2a3a34"/><text x="210" y="142" fill="#f2f7f4" font-size="12">Buffer above floor: $22,000</text>
<text x="110" y="194" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Trailing</text>
<rect x="200" y="178" width="360" height="26" rx="13" fill="#2a3a34"/><text x="210" y="196" fill="#e8825a" font-size="12" font-weight="700">Floor rises with the peak</text>
<text x="340" y="248" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Under static, a good run makes you safer. Under trailing, it raises the bar.</text>
<text x="340" y="276" text-anchor="middle" fill="#92a59c" font-size="11">Trailing floor = highest peak minus the limit, and it never moves back down.</text>
</svg>
</figure>

### Static drawdown: the floor is fixed from starting balance, so profits widen your buffer

On our anchor account, static is straightforward: $100,000 at 10% gives a $90,000 floor, forever, regardless of later profits. Grow to $112,000, and you have $22,000 of room. Grow further, and the room grows with you. The only way to breach a static floor is to lose enough, in total, to fall all the way back to $90,000 — which, after a good run, means giving back a large amount.

Static floors reward patience and penalise only genuine, large losses. That is why some traders prefer them when they have the choice, and why the choice between static and trailing (covered later) matters so much.

### Trailing drawdown: the floor rises with your highest peak and never moves back down

A trailing floor is defined by the peak, not by the start. The formula is simple and unforgiving:

**Trailing floor = highest account peak − trailing limit**

Once the peak rises, the floor rises with it. When the account pulls back, the floor stays where the peak put it — it never moves back down to give you room again. Under a trailing floor, you don't just have to avoid losing too much. You have to avoid giving back too much of what you've already made.

## A separate trailing illustration, labelled as a different model: peak $108,000, floor $101,520

This section uses a **different model from the anchor account above** — a 6% trailing limit, not the 10% static limit. The two models are never mixed into one account. Read this illustration on its own terms.

Take a $100,000 account with a **6% trailing** maximum drawdown. The account runs up to a peak of $108,000. The trailing floor is then:

$108,000 − 6% of $108,000 ($6,480) = **$101,520**

Now the account pulls back. If it falls to $101,500, it has breached the floor — by just $20 — and the account ends. Yet $101,500 is still $1,500 above the $100,000 starting balance. The trader is **up 1.5% overall and has still failed**.

That's the trailing-floor trap in its purest form: profitability is not safety. Under a trailing floor, the question is never just "am I up?" It's "how far have I fallen from my peak?"

A smaller version of the same trap shows how tight the maths gets. On a $50,000 account with a $2,000 trailing limit, a peak of $53,000 gives a floor of $53,000 − $2,000 = **$51,000**. A give-back of $2,001 from the peak — to $50,999 — breaches the floor, even though the account is still almost at its starting balance.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Illustration of the trailing drawdown trap showing a 108,000 dollar peak, a 101,520 dollar trailing floor, and a pullback that fails the account while still profitable overall." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Profitable overall — and still failed</text>
<rect x="40" y="70" width="180" height="90" rx="12" fill="#2a3a34"/><text x="130" y="106" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">PEAK</text><text x="130" y="136" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">$108,000</text>
<text x="240" y="118" text-anchor="middle" fill="#92a59c" font-size="20">−</text>
<rect x="270" y="70" width="180" height="90" rx="12" fill="#2a3a34"/><text x="360" y="106" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">6% TRAILING</text><text x="360" y="136" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">$6,480</text>
<text x="470" y="118" text-anchor="middle" fill="#92a59c" font-size="20">=</text>
<rect x="500" y="70" width="140" height="90" rx="12" fill="#e8825a"/><text x="570" y="106" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">FLOOR</text><text x="570" y="136" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">$101,520</text>
<text x="340" y="200" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Pullback to $101,500 breaches by $20 — while still up 1.5% overall.</text>
<text x="340" y="228" text-anchor="middle" fill="#92a59c" font-size="11">Under trailing, distance from the peak matters, not just profitability.</text>
</svg>
</figure>

## Intraday trailing vs end-of-day trailing: when the floor moves matters as much as how far

Trailing floors come in two measurements, and the difference between them can end an account on a spike that never lasted until the close.

- **Intraday (live) trailing:** the floor moves on every tick of unrealised profit. This is the strictest trailing variant. An unrealised peak you never banked — a spike that retraced before the close — still permanently raises your floor. The floor remembers a peak your balance never kept.
- **End-of-day trailing:** the floor moves only on the closing balance. Intraday spikes that retrace by the close do not count toward the new floor. Only what survives until the close moves the floor.

The practical difference is stark. Under intraday trailing, a brief intraday run to a new high, followed by a retracement, leaves you with a higher floor and a lower balance — squeezed from both sides. Under end-of-day trailing, that same intraday excursion is forgiven if it does not survive to the close.

How to tell which one your firm uses: wording such as "live," "real-time," or "high-water mark on equity" points to intraday trailing, while wording such as "end-of-day" or "closing balance" points to end-of-day trailing. If the wording is ambiguous, treat the model as intraday until the firm confirms otherwise in writing — the stricter reading is the safe one.

Some firms now offer static or end-of-day models as alternatives to intraday trailing. If you are choosing between models, the measurement — tick or close — is one of the first things to confirm, because it changes how much an intraday spike can hurt you.

## The lock mechanism: when some trailing floors stop climbing — verify it per firm

Some trailing models have a release valve: the **lock**. In a locking model, once the trailing floor reaches the starting balance (or the starting balance plus a small buffer), it stops trailing. From that point on, further profit becomes real cushion, much like a static floor.

That sounds generous, and in the models that offer it, it is. But the lock is a **firm-specific mechanism, not a universal rule**, and it must be verified per firm:

- Some firms lock the floor at the starting balance.
- Some lock it at the starting balance plus a small buffer.
- Some firms never lock at all — the floor trails indefinitely.

Do not treat any one lock point as standard. A trader who assumes a lock exists, and sizes as though profits beyond the starting balance were safe cushion, will discover the error the same way as every other drawdown error: at the floor.

One concrete, labelled illustration — firm-specific, not a universal lock point: on a 6% trailing model, the floor reaches the $100,000 starting balance once the peak reaches about $106,383 (check: $106,383 × 6% = $6,383; $106,383 − $6,383 = $100,000). In a model that locks at the starting balance, the floor would stop climbing there; in a model with no lock, it would keep climbing past $100,000. The illustration shows when a lock would help — it does not prove your firm has one.

A related variant appears mainly on futures accounts: a buffer or threshold concept, under which the trailing floor locks once the balance clears the starting balance plus a buffer. Treat it in exactly the same verify-per-firm framing, and do not adopt any specific buffer figure as a general rule. The variant matters only if your account type uses it — confirm that first.

## Daily-limit measurement traps: balance vs equity, relative vs fixed, and the rollover trap

The daily limit has its own measurement traps, and they shrink real room without the trader realising it. There are three, and they can combine.

### Balance-based vs equity-based: does the daily reference include open trades?

- **Balance-based:** the daily reference is the start-of-day balance, and open trades are ignored at reset. What you have open does not change today's reference point.
- **Equity-based:** the daily reference is the start-of-day equity, including open profit and loss. What you have open does change today's reference point.

Equity-based is the stricter and more common model in the sources; balance-based is the more forgiving minority model. Either way, confirm which one applies to your account. The difference decides whether an open position's floating loss is already eating today's room before you place a new trade.

### Relative vs fixed daily limits: does yesterday's profit widen today's room?

- **Relative daily:** the reference is the higher of the starting balance or the previous close, so yesterday's profit widens today's room.
- **Fixed daily:** the reference is always the initial balance, whatever has happened since.

A worked comparison makes the difference concrete. With a 5% relative daily limit and a previous close of $102,000, today's floor is $102,000 − $5,100 = **$96,900**. With a 5% fixed daily limit on a $100,000 initial balance, today's floor is **$95,000**. The relative model gives $1,900 more room after a profitable day; the fixed model gives the same room every day, regardless. Confirm which model your firm uses — the same percentage means a different floor under each.

### The overnight/rollover trap: a position held across rollover can shrink tomorrow's allowance before the session opens

Under an equity-based reference, the daily limit resets at rollover — but that does not mean you start the new day with a clean slate if you hold a position across it. The new day's equity-based reference already reflects the open position's profit or loss, so a position carried overnight can shrink tomorrow's allowance before the new session has even opened. Under a balance-based reference, by contrast, open trades are ignored at reset, so the trap as described does not apply in the same way.

Never promise yourself a clean slate at rollover for open positions. The exact effect depends on whether your firm resets on balance or equity, which is another reason that measurement question matters before your first trade.

## Soft vs hard breach: the consequence question you must answer before your first trade

Knowing where the floors are is only half the decoder. The other half is what happens when you cross one — and here, assuming the gentler outcome is a dangerous mistake. The consequences must be split by floor:

- **Maximum drawdown — hard closure is the norm:** breaching the maximum drawdown closes the evaluation or funded account immediately. This is the standard consequence, regardless of prior profitable days. There is no warning trade, no second chance on that account.
- **Daily loss limit — consequence varies by firm and segment:** for the daily limit, some firms use hard closure and some — including some futures models — use soft daily limits. Do not treat hard as the settled norm for the daily limit. You must confirm your exact account type and stage: the same firm can use different setups per stage or account type, so the evaluation rules and the funded rules may not match.

Here, "soft" means a daily pause and lock: positions are closed and trading is locked until the next session, but the account survives. The day does not survive; the account does. The word is used inconsistently elsewhere for different things, and conflating those meanings leads to false comfort. Above all: **never assume soft**. Confirm hard versus soft in your firm's current published rules before your first trade.

## What a breach costs: the account, the fee, and the way back

Stated plainly, a breach costs three things:

1. **The account.** A hard breach closes the evaluation or funded account immediately. A maximum-drawdown breach ends the account outright; a hard daily breach ends it the same way.
2. **The fee already paid — and, in general, nothing more in trading losses.** On the consensus of published sources, you do not owe the firm trading losses beyond the challenge fee already paid, for ordinary trading losses. This is a general description, not legal advice, and individual contracts vary; intentional misconduct or prohibited practices are a different matter entirely and are outside this claim.
3. **The way back, if there is one.** The usual route is a paid reset or a new challenge. Policies vary, and some firms offer no resets at all. Budget for the possibility that the way back is a full new challenge fee, not a discounted retry.

On a funded account, one further question must not be left silent: whether accrued profits or pending payouts survive a maximum-drawdown breach varies by contract and must be confirmed — do not assume payouts are kept, and do not assume they are automatically lost. Read your contract for this point specifically before you trade funded.

That's also why drawdown discipline matters more than any single trade idea. A breach doesn't cost you a bad day. It costs you the account, the fee, and the time you put into it — with no guarantee of a cheap way back.

## How to calculate your remaining drawdown room before a trade

Before every trade, check two rooms separately — the daily room and the maximum room — and let the tighter of the two govern the trade. The formula depends on the basis your firm uses. Do not combine them:

- **Balance-based room = balance − floor − open floating loss.** Balance does not yet include the open loss, so you must subtract it.
- **Equity-based room = equity − floor.** Equity already includes open profit and loss, so the floating loss is already counted — do not subtract it a second time.

In practice:

1. Find today's daily floor (from the daily limit and today's reference) and your maximum floor (static, or trailing from your peak).
2. On a balance-based model, subtract each floor from your balance, then subtract any floating loss already open on existing positions. On an equity-based model, subtract each floor from your equity, with no second subtraction.
3. Trade only within the smaller of the two remaining rooms.

A worked example, stated explicitly as **balance-based**: a $5,000 daily room (balance minus floor) with a $1,200 floating loss already open leaves **$3,800** of daily room, not $5,000. The $1,200 is not hypothetical; it is already spent. Traders who size from the headline room, ignoring open floating loss, routinely size a trade that breaches on its first adverse move. Under an equity-based model, the same account would simply be equity minus floor, with no second $1,200 subtraction.

One more drain on room that sizing often misses: commissions, spreads, and slippage also consume drawdown room, because they reduce equity. Reserve room for them — sizing to exactly the headline room can breach on costs alone, before any market move goes against you.

If you want help turning that room into a position size, the live [position-size tool](/tools/position-size/) and the live [position-sizing article](/articles/position-sizing/) walk through sizing within a risk budget, and the live [risk-of-ruin tool](/tools/risk-of-ruin/) shows how repeated small losses compound toward ruin over many trades.

## Choosing between a static and a trailing drawdown account

If you have the choice, the decision turns on one question: **how much give-back can you tolerate?**

- **Choose static if** you want profits to build a real, permanent buffer, and you cannot afford — financially or psychologically — to fail while still profitable. Static floors forgive a pullback after a good run, as long as you stay above the fixed floor. They suit traders whose edge produces runs followed by retracements, and traders who want the maths of the account to get easier, not harder, as it grows.
- **Choose trailing only with eyes open if** you accept that every new peak raises the bar for survival, and you have verified the measurement (intraday or end-of-day), the lock (if any), and the breach consequence. Trailing demands tighter give-back discipline: you must bank profits, defend peaks, or accept that a normal retracement can end the account. It suits traders who already manage give-back tightly — and it punishes traders who do not.

The tie-breaker rule is explicit: if you cannot state your firm's measurement, lock, and breach consequence in writing, do not choose trailing. A trailing account with an end-of-day measurement and a lock at the starting balance is a very different proposition from an intraday trailing account with no lock — and both are sold under the same word, "trailing." Do not choose on marketing. Choose on verified floor mechanics: does the floor move, on what measurement, whether it locks, and whether a breach is hard or soft?

## Your pre-first-trade checklist: three questions before a single trade

Before a single trade, get written answers — from the firm's current published rules, not from a forum post or a marketing page — to the three questions this article opened with:

1. **Which floor is which?** What is the daily loss limit, and what is the maximum drawdown, in figures, for your exact account type and stage?
2. **Does the floor move, and on what measurement?** Is the maximum floor static or trailing? If trailing, does it move on every intraday tick, on the end-of-day close, or on balance — and does it lock, and at what point?
3. **Is a breach a hard fail or a soft stop?** Does breaching the daily limit or the maximum close the account immediately, or pause trading until the next session — and does that answer differ between evaluation and funded stages?

How to verify, concretely: start on the firm's rules or FAQ page, then check the dashboard account panel for your account's own limits, and check the platform server clock for the rollover time rather than assuming your local midnight. Search for the exact terms "daily loss limit," "trailing drawdown," "equity vs balance," "live/intraday," and "end-of-day" — if a term returns no clear answer for your account type and stage, that answer is not yet verified.

If any answer is unclear, don't trade until it is clear. Every drawdown story that ends badly starts with one of these three questions unanswered.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Pre-first-trade checklist graphic listing three questions: which floor is which, does the floor move and on what measurement, and is a breach a hard fail or a soft stop." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Three questions before a single trade</text>
<rect x="90" y="60" width="500" height="52" rx="12" fill="#8fd6a0"/><text x="340" y="92" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">1 · Which floor is which?</text>
<rect x="90" y="126" width="500" height="52" rx="12" fill="#e8c15a"/><text x="340" y="158" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">2 · Does the floor move, and on what measurement?</text>
<rect x="90" y="192" width="500" height="52" rx="12" fill="#e8825a"/><text x="340" y="224" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">3 · Is a breach a hard fail or a soft stop?</text>
<text x="340" y="282" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Get the answers in writing, from the firm's current rules.</text>
<text x="340" y="310" text-anchor="middle" fill="#92a59c" font-size="11">If any answer is unclear, do not trade until it is clear.</text>
</svg>
</figure>

## The sizing bridge: your daily limit is your risk budget

The floors decoded here are not abstract. They are your risk budget. The daily limit, in particular, constrains every trade you place that day: the [companion article on risk per trade to pass a challenge](/articles/how-much-to-risk-per-trade-to-pass-a-prop-firm-challenge/) sizes backward from the daily limit, using a 0.5% default and a 1% ceiling for risk per trade. Those figures are framed explicitly as that companion article's derived guideline — a practitioner consensus, not a rule set by any firm or regulator — and they are cited here only as the companion's guideline.

That's why this decoder comes first. You can't size sensibly until you know which floor binds, whether it moves, and what crossing it costs. Once you know the floors, sizing is arithmetic: room divided by risk per trade, checked against both floors, before every trade.

Add one behavioural guardrail on top of the arithmetic — a personal circuit-breaker: stop trading for the day at half the daily room. On the anchor account that means stopping at $2,500 of daily loss, well before the firm's $5,000 floor. A circuit-breaker answers "how to avoid breaching" in behaviour, not just in maths: it leaves a buffer for costs, for a wick, and for the judgement errors that cluster after losses.

For the general sizing maths behind that arithmetic, the live [position-sizing article](/articles/position-sizing/) and the live [risk-of-ruin article](/articles/risk-of-ruin-trading/) cover position sizing and the ruin mathematics of repeated losses. And if you are weighing whether a challenge is worth taking at all, the follow-up article ["Are Prop Firms Worth It?"](/articles/are-prop-firms-worth-it-the-traders-math/) takes up that decision directly.

## Risks and limitations: what this decoder cannot tell you

This article decodes rule mechanics. It can't tell you your firm's exact current rules — the figures here are published ranges (daily typically 4–5%, maximum typically 6–12%), not any named firm's current rulebook, and they change. Lock points, rollover zones, and soft-versus-hard setups vary by firm, stage, and account type. Always read your firm's current published rules for your exact account before trading.

This article is education about rule mechanics. It is not a guarantee of passing any challenge, not a trading recommendation, and not legal advice on any firm's contract. Individual contracts vary, and the general description of breach costs here does not replace reading yours.

One scope note: crypto prop variants exist, but they are out of scope for this decoder, which covers the standard dollar-denominated challenge models described above.

## Frequently asked questions

### What is the difference between daily drawdown and maximum drawdown?

Daily caps losses within one day (typically 4–5%) and resets daily; maximum caps losses over the account's life (typically 6–12%) and never resets within an account's life. Either can end the day or the account. See "The two floors, side by side" — the daily limit tends to bind first on a bad day, as a tendency from the relative sizes, not a measured statistic.

### What is trailing drawdown, and why is it more dangerous than static?

Trailing sets the floor at peak minus the limit, never moving back down, so profits tighten room instead of widening it. See "Static vs trailing" and the $108,000 peak illustration: a static floor leaves a growing buffer, while a trailing floor raises the bar after every good run.

### What is the difference between intraday trailing and end-of-day trailing drawdown?

Intraday moves the floor on every tick of unrealised profit, including unbanked peaks; end-of-day moves it only on the closing balance. See "Intraday trailing vs end-of-day trailing" for the wording tells ("live/real-time" vs "end-of-day/closing balance").

### Does the drawdown floor move down if I lose money?

No. A trailing floor never moves back down on losses, and a static floor never moves at all. See "Trailing drawdown" — losses only bring you closer to the floor, unless a firm-specific lock has already stopped the floor climbing.

### Can I be profitable overall and still breach a trailing drawdown?

Yes. See the labelled 6% trailing illustration: peak $108,000, floor $101,520, pullback to $101,500 fails while still up 1.5% overall. Under trailing, distance from peak matters, not just profitability.

### Do open (floating) losses count toward the drawdown limit?

At most firms, yes, under the equity-based model — a wick through the floor ends the account even if price reverses. A minority of balance-based models count only closed trades. See "Do floating losses count?" and confirm your firm's measurement before trading.

### What happens when I breach the daily loss limit — soft vs hard?

It varies by firm and segment: hard closure ends the account, while a soft breach (mainly some futures models) closes positions and locks trading until the next session, with the account surviving. Never assume soft — confirm your exact account type and stage. See "Soft vs hard breach."

### What happens when I breach maximum drawdown on a funded account?

The funded account is closed immediately — hard closure is the norm for maximum drawdown. In general you do not owe trading losses beyond the challenge fee already paid, for ordinary losses (not legal advice; contracts vary). Whether accrued profits or pending payouts survive varies by contract and must be confirmed. See "What a breach costs."

### How do I calculate my remaining drawdown room before a trade?

Balance-based: balance − floor − open floating loss. Equity-based: equity − floor, with no second subtraction (floating loss is already in equity). Check daily and maximum rooms separately; the tighter governs. See "How to calculate your remaining drawdown room" — the balance-based example there is $5,000 room minus $1,200 open loss = $3,800.

### How do I choose between a static and a trailing drawdown account?

Choose on give-back tolerance and verified mechanics, not marketing. Static suits traders who want profits to build a permanent buffer; trailing demands tight give-back discipline. Tie-breaker: if you cannot state your firm's measurement, lock, and breach consequence in writing, do not choose trailing. See "Choosing between a static and a trailing drawdown account."

---

*Risk disclosure: Trading involves substantial risk of loss. Prop-firm challenges add hard account-ending rules on top of market risk: a single breach of a daily or maximum drawdown floor can close an account regardless of your trading ideas. Nothing in this article guarantees passing a challenge or making a profit. Read your firm's current published rules and contract before trading, and never risk money you cannot afford to lose.*

---
title: "How to Stop Revenge Trading After a Loss: The Loss-Side Protocol"
description: "Revenge trading after a loss feels like collecting a debt the market owes you. The debt delusion, the revenge-sequence math that turns one ₹2,000 stop into a ₹12,000 afternoon, and the four-part pre-commitment loss protocol that breaks the circuit."
meta_description: "A pre-commitment loss protocol to stop revenge trading: cooldown, session stop, halved size, and a re-entry checklist — mechanical rules, not willpower."
date: 2026-10-15
author: Kaizen
tag: "Trading psychology"
keywords: ["how to stop revenge trading", "revenge trading", "stop revenge trading after loss", "revenge trading psychology", "revenge trading meaning", "tilt trading", "overtrading after loss", "trading psychology"]
---

*By Kaizen · 15 October 2026 · Monks Of Market*

> **Educational disclaimer:** This article is for education only and is not financial advice. Trading involves substantial risk of loss. The loss protocol described here is a behavioral safeguard, not a profit strategy — it is designed to stop you from making a loss worse, not to win anything back.

## Tonight's Mirror: Giveback Was the Win Side — Revenge Trading Is the Loss Side

How do you stop revenge trading after a loss? With a contract you write before the session, not with willpower during it: a mandatory cooldown after any loss, a session stop after two consecutive losses or at your daily loss budget, halved position size when you return, and a re-entry checklist where every plan criterion must be met.

This morning's article covered [what winning does to you — the giveback trap](/articles/why-traders-give-back-profits/). That was the win side: dopamine, the impulse to press size upward while it feels good, and a pre-set finish line that protects profits from you. Tonight is the mirror. The loss side runs on different fuel — the feeling that the loss is a debt the market owes you — and it needs a different system: not a finish line, but a circuit breaker. One contrast paragraph is all they share. The rest of this article stays on the loss side.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 360" role="img" aria-label="Win-side vs loss-side pair map: the win side runs on a winner, presses size, and needs a finish line; the loss side runs on a loss, chases a recovery trade, and needs a circuit breaker. Both share one principle: decide before the session, not during it." class="viz">
<rect x="20" y="8" width="640" height="46" rx="10" fill="#2a3a34" stroke="#2a3a34" stroke-width="1"/>
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">One principle: decide before the session, not during it</text>
<rect x="20" y="72" width="300" height="238" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="170" y="106" text-anchor="middle" fill="#8fd6a0" font-size="13" font-weight="700">WIN SIDE &#8212; giveback</text>
<text x="170" y="126" text-anchor="middle" fill="#92a59c" font-size="11.5">this morning&#8217;s article</text>
<text x="48" y="158" fill="#92a59c" font-size="12">trigger &#8594;</text>
<text x="48" y="180" fill="#f2f7f4" font-size="12.5">a winner — dopamine</text>
<text x="48" y="210" fill="#92a59c" font-size="12">impulse &#8594;</text>
<text x="48" y="232" fill="#f2f7f4" font-size="12.5">press size / keep playing</text>
<text x="48" y="262" fill="#92a59c" font-size="12">fix &#8594;</text>
<text x="48" y="284" fill="#f2f7f4" font-size="12.5" font-weight="600">a pre-set finish line</text>
<rect x="360" y="72" width="300" height="238" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="510" y="106" text-anchor="middle" fill="#d98c8c" font-size="13" font-weight="700">LOSS SIDE &#8212; revenge</text>
<text x="510" y="126" text-anchor="middle" fill="#92a59c" font-size="11.5">tonight&#8217;s article</text>
<text x="388" y="158" fill="#92a59c" font-size="12">trigger &#8594;</text>
<text x="388" y="180" fill="#f2f7f4" font-size="12.5">a loss — the debt delusion</text>
<text x="388" y="210" fill="#92a59c" font-size="12">impulse &#8594;</text>
<text x="388" y="232" fill="#f2f7f4" font-size="12.5">recovery trade, usually larger</text>
<text x="388" y="262" fill="#92a59c" font-size="12">fix &#8594;</text>
<text x="388" y="284" fill="#f2f7f4" font-size="12.5" font-weight="600">a loss-protocol circuit breaker</text>
<text x="340" y="342" text-anchor="middle" fill="#92a59c" font-size="12.5">the principle is one &#8212; decide before, not during &#8212; and the circuits are two</text>
</svg>
</figure>

## What Revenge Trading Actually Is (and Why the Market Doesn't Owe You the Money Back)

Revenge trading is the attempt to recover a loss quickly with a new, usually larger, often unplanned position. The first trade honored your plan and your stop. The next trade does not.

The mechanism is a one-line delusion: **the loss gets filed in your head as a debt the market owes you, and every new trade becomes "collection."** It is not really about the setup on the screen. It is about the loss behind you.

The consensus from trader journals is consistent: revenge sequences multiply the original loss far more often than they restore it. That is practitioner consensus — the mechanics of it make it almost inevitable, as you will see in the math below — not a lab result. The market does not know your trade exists. It has no debt to settle.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 380" role="img" aria-label="The debt-delusion circuit: a planned loss gets filed as a debt the market owes, the brain marks it for collection, and an unplanned larger recovery trade feeds a new loss back into the loop. The circuit breaks only when the loss is accepted, not collected." class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The debt-delusion circuit</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">why a loss becomes a collection attempt</text>
<rect x="30" y="80" width="180" height="110" rx="10" fill="#1d2b26" stroke="#d98c8c" stroke-width="1"/>
<text x="120" y="108" text-anchor="middle" fill="#d98c8c" font-size="13" font-weight="700">1. Planned loss</text>
<text x="120" y="132" text-anchor="middle" fill="#f2f7f4" font-size="12">&#8377;2,000 stop honored</text>
<text x="120" y="152" text-anchor="middle" fill="#92a59c" font-size="11.5">the plan worked</text>
<rect x="250" y="80" width="180" height="110" rx="10" fill="#1d2b26" stroke="#d98c8c" stroke-width="1"/>
<text x="340" y="108" text-anchor="middle" fill="#d98c8c" font-size="13" font-weight="700">2. Filed as a debt</text>
<text x="340" y="132" text-anchor="middle" fill="#f2f7f4" font-size="12">brain marks it</text>
<text x="340" y="152" text-anchor="middle" fill="#92a59c" font-size="11.5">&#8220;the market owes me&#8221;</text>
<rect x="470" y="80" width="180" height="110" rx="10" fill="#1d2b26" stroke="#d98c8c" stroke-width="1"/>
<text x="560" y="108" text-anchor="middle" fill="#d98c8c" font-size="13" font-weight="700">3. The collection</text>
<text x="560" y="132" text-anchor="middle" fill="#f2f7f4" font-size="12">unplanned, larger entry</text>
<text x="560" y="152" text-anchor="middle" fill="#92a59c" font-size="11.5">no setup, just appetite</text>
<line x1="210" y1="135" x2="246" y2="135" stroke="#92a59c" stroke-width="2"/>
<polygon points="250,135 242,130 242,140" fill="#92a59c"/>
<line x1="430" y1="135" x2="466" y2="135" stroke="#92a59c" stroke-width="2"/>
<polygon points="470,135 462,130 462,140" fill="#92a59c"/>
<line x1="560" y1="196" x2="560" y2="238" stroke="#d98c8c" stroke-width="2"/>
<line x1="560" y1="238" x2="120" y2="238" stroke="#d98c8c" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="120" y1="238" x2="120" y2="196" stroke="#d98c8c" stroke-width="2"/>
<text x="340" y="232" text-anchor="middle" fill="#d98c8c" font-size="11.5">new loss &#8594; filed as a bigger debt &#8594; back to step 1</text>
<text x="340" y="288" text-anchor="middle" fill="#f2f7f4" font-size="13.5" font-weight="600">The circuit breaks only when the loss is accepted,</text>
<text x="340" y="310" text-anchor="middle" fill="#f2f7f4" font-size="13.5" font-weight="600">not collected.</text>
<text x="340" y="342" text-anchor="middle" fill="#92a59c" font-size="12">acceptance ends the loop; collection feeds it</text>
</svg>
</figure>

### The Bias Stack: What's Running in Your Head in the Minutes After a Loss

The protocol is the point of this article, not a psychology lecture — so here is the bias stack, one line each, for what is running in your head in the minutes after a stop-loss:

- **Loss aversion** (Kahneman & Tversky, 1979): losses loom larger than equivalent gains — roughly twice as impactful — which is why a small loss feels like it demands an immediate response.
- **Recency bias:** your brain overweights the last trade. The stop that just hit becomes the whole story, and the plan you traded with yesterday feels irrelevant.
- **Illusion of control:** the belief that you can force the market to comply — that more effort, more screen time, or a bigger position can make it give the money back.
- **Sunk cost fallacy:** the loss already taken must be "earned back." The unrecoverable money keeps steering the next decision.

Once these activate, instinct overwrites the system. That is exactly why the fix cannot be "think clearly while this is happening." The fix has to be mechanical — decided before the session, executed while impaired.

## The Revenge-Sequence Math: How One ₹2,000 Loss Becomes a ₹12,000 Afternoon

This is the visual nobody draws. Watch what happens to an account when the stop is honored versus when it is chased — with a **hypothetical illustration** (all three trades lose; this is the math of the circuit, not a typical-outcome claim).

Say the account is ₹1,00,000 and the trader risks a fixed 2% per trade — a ₹2,000 planned loss. The first trade hits the stop: down ₹2,000, exactly as the plan allowed. Then the debt delusion starts collecting:

| Trade | Size rule | Outcome (hypothetical) | Account impact |
|---|---|---|---|
| Planned trade | 1× (2% risk) | Hits stop | −₹2,000 |
| Revenge trade 1 | 2× (4% risk) | Loses | −₹4,000 |
| Revenge trade 2 | 3× (6% risk) | Loses | −₹6,000 |
| **Sequence total** | | | **−₹12,000 = 12% of the account = 6× the planned loss** |

Reverse compounding: the same compounding that grows an account when you risk a fixed fraction runs backward when you scale size up after losses. One honored stop cost 2%. The recovery circuit cost 12%. Ask any journaled trader — the sequence multiplies the original loss instead of restoring it, almost as a matter of arithmetic.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 420" role="img" aria-label="Revenge-sequence reverse-compounding math: one honored stop costs ₹2,000 (2%); the recovery circuit stacks ₹2,000, ₹4,000, ₹6,000 into a ₹12,000 total — 6× the planned loss. Hypothetical illustration assuming all three trades lose." class="viz">
<text x="340" y="28" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The revenge-sequence math</text>
<text x="340" y="48" text-anchor="middle" fill="#92a59c" font-size="12">one honored stop vs. the recovery circuit</text>
<rect x="30" y="80" width="250" height="210" rx="10" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="155" y="110" text-anchor="middle" fill="#92a59c" font-size="12.5" font-weight="600">HONORED STOP</text>
<rect x="95" y="170" width="120" height="54" rx="4" fill="#d98c8c"/>
<text x="155" y="202" text-anchor="middle" fill="#101615" font-size="12.5" font-weight="700">&#8377;2,000 (2%)</text>
<text x="155" y="246" text-anchor="middle" fill="#f2f7f4" font-size="12">one stop, one cost</text>
<text x="155" y="266" text-anchor="middle" fill="#92a59c" font-size="11.5">the plan working</text>
<rect x="400" y="80" width="250" height="210" rx="10" fill="#1d2b26" stroke="#d98c8c" stroke-width="1"/>
<text x="525" y="110" text-anchor="middle" fill="#d98c8c" font-size="12.5" font-weight="600">RECOVERY CIRCUIT</text>
<rect x="425" y="216" width="56" height="54" rx="4" fill="#d98c8c"/>
<text x="453" y="248" text-anchor="middle" fill="#101615" font-size="11" font-weight="700">&#8377;2k</text>
<rect x="491" y="162" width="56" height="108" rx="4" fill="#d98c8c"/>
<text x="519" y="218" text-anchor="middle" fill="#101615" font-size="11" font-weight="700">&#8377;4k</text>
<rect x="557" y="108" width="56" height="162" rx="4" fill="#d98c8c"/>
<text x="585" y="192" text-anchor="middle" fill="#101615" font-size="11" font-weight="700">&#8377;6k</text>
<line x1="420" y1="270" x2="630" y2="270" stroke="#2a3a34" stroke-width="1"/>
<rect x="30" y="312" width="620" height="52" rx="10" fill="#2a3a34" stroke="#d98c8c" stroke-width="1"/>
<text x="340" y="335" text-anchor="middle" fill="#f2f7f4" font-size="13.5" font-weight="700">&#8377;12,000 total &#8212; 6&#215; the planned loss (12% of the account)</text>
<text x="340" y="384" text-anchor="middle" fill="#92a59c" font-size="11.5">HYPOTHETICAL ILLUSTRATION &#8212; assumes all three trades lose.</text>
<text x="340" y="400" text-anchor="middle" fill="#92a59c" font-size="11.5">Shows the circuit&#8217;s math, not a typical outcome.</text>
</svg>
</figure>

And every one of those revenge attempts pays the Indian cost stack again. This is the part nobody feels in the moment but the ledger always feels later:

- **STT: 0.15% of the premium** on the options sell leg (effective since Budget 2026, April 1, 2026) — and 0.15% of intrinsic value if you hold ITM to expiry. Options buyers pay no STT on entry, only when selling or settling. It is 0.15% of the premium, not of contract value.
- **Exchange transaction charges:** roughly 0.03503% of premium on **both** the buy and the sell leg for equity options (per NSE's revised schedule, effective March 1, 2026).
- **SEBI turnover fee** (₹10 per crore) plus **18% GST** on brokerage and charges.

Three revenge attempts = three rounds of the stack, stacked on top of three rounds of oversized risk. If you want the honest mirror of what each attempt actually costs, the options-cost calculator on this site will show it trade by trade — run one revenge attempt through it and read the fee row before you ever take one.

The sequence is also the fastest path to the ladder described in [how one bad sequence leads to risk of ruin](/articles/risk-of-ruin-trading/) — that article owns the math, so this one will not re-teach it.

## The Loss Protocol: Your Pre-Commitment Contract (the Spine of This Article)

Willpower is not a system. The loss protocol is — a behavioral safeguard you write before the session, while you are calm, and execute while you are not. It has four components:

1. **Mandatory cooldown after any loss.** Fifteen to thirty minutes, away from the screens. Not watching the chart "to see," not scrolling prices — physically away. Walk, make tea, or write one line in your notes app about what you feel — no charts, no terminal. This is a practitioner recommendation from journaled traders, not a rule from SEBI or NSE. Professionals do not become less emotional; they build systems for psychologically imperfect humans.
2. **Session stop after 2 consecutive losses, or at your daily loss budget — no negotiation.** Your daily loss budget is your own number (a practitioner example often quoted is 3% of the account; pick your own and defend it like a covenant). When it is hit, the session is over. The market will be there tomorrow; your impaired judgment is not a trading instrument.
3. **Halved position size on return.** When you come back after the circuit breaker, the next trades go at half size — the practitioner default is 50% size for the next 3 trades; write your own number in the contract card. If the urge was about recovering money, smaller size defuses it; if the setup was real, it still pays. Size mechanics — including why fixed fractional risk is the default — live in [the position-sizing article](/articles/position-sizing/).
4. **A re-entry checklist before any trade after a loss.** Every criterion of the plan must be met — not "it looks good."

This protocol is a behavioral safeguard, not a profit strategy. It cannot guarantee profits, it will not win any money back, and it was never designed to. Its entire purpose is to **stop** you. Say that to yourself plainly before you sign it.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 470" role="img" aria-label="The loss-protocol contract card: four fill-in rows — cooldown minutes after any loss, session stop after 2 consecutive losses or at a daily loss budget, half size for a set number of trades on return, and a re-entry rule requiring every plan criterion — with a signature line signed before the session." class="viz">
<rect x="20" y="8" width="640" height="440" rx="14" fill="#1d2b26" stroke="#2a3a34" stroke-width="1"/>
<text x="340" y="44" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The loss-protocol contract</text>
<text x="340" y="64" text-anchor="middle" fill="#92a59c" font-size="12">fill your own numbers &#8212; the defaults are practitioner recommendations, not regulations</text>
<text x="60" y="106" fill="#92a59c" font-size="12.5" font-weight="600">COOLDOWN AFTER ANY LOSS</text>
<text x="60" y="130" fill="#f2f7f4" font-size="13">_________ minutes, away from the screens (default: 15&#8211;30)</text>
<line x1="60" y1="150" x2="620" y2="150" stroke="#2a3a34" stroke-width="1"/>
<text x="60" y="178" fill="#92a59c" font-size="12.5" font-weight="600">SESSION STOP</text>
<text x="60" y="202" fill="#f2f7f4" font-size="13">2 consecutive losses OR daily loss budget of _________ %</text>
<text x="60" y="224" fill="#92a59c" font-size="11.5">no negotiation &#8212; the market will be there tomorrow</text>
<line x1="60" y1="244" x2="620" y2="244" stroke="#2a3a34" stroke-width="1"/>
<text x="60" y="272" fill="#92a59c" font-size="12.5" font-weight="600">ON RETURN</text>
<text x="60" y="296" fill="#f2f7f4" font-size="13">half size for the next _________ trades (default: 3)</text>
<line x1="60" y1="316" x2="620" y2="316" stroke="#2a3a34" stroke-width="1"/>
<text x="60" y="344" fill="#92a59c" font-size="12.5" font-weight="600">RE-ENTRY RULE</text>
<text x="60" y="368" fill="#f2f7f4" font-size="13">every plan criterion met, or no trade</text>
<line x1="60" y1="398" x2="360" y2="398" stroke="#92a59c" stroke-width="2"/>
<text x="420" y="394" fill="#92a59c" font-size="11.5">signed before the session</text>
<text x="340" y="430" text-anchor="middle" fill="#92a59c" font-size="11.5">Print it. These numbers belong to you, not the rulebook.</text>
</svg>
</figure>

### Sign It Before the Session: Filling in Your Own Numbers

The circuit-breaker numbers are yours, not the rulebook's. Fifteen or thirty minutes? A 3% daily budget or 2%? Half size for three trades or five? There is no universal answer, and anyone selling you one is selling something. The right numbers are the ones you will actually obey when your hands are shaking.

Fill them in before the market opens. Sign it — a real signature, on paper or in your notes app. A contract you wrote while calm is the only authority that outranks you while impaired. The ethos of pre-commitment is the same principle behind a pre-session plan; this contract is its loss-side edition.

### The Re-Entry Checklist: Every Criterion of the Plan, Not "It Looks Good"

Here is the single test that decides whether the next trade is a real setup or the loss talking:

**Would you take this exact trade, at this exact size, if the previous trade had been a winner?**

If the answer depends on what happened before, the loss is trading, not you. Before you re-enter, fill in all five — if any blank cannot be answered honestly, there is no trade:

1. Entry trigger: ___ (the exact condition from your plan — not "it looks good")
2. Stop placement: ___ (the exact level, sized per plan)
3. Size: ___ (per plan — half size if this follows a loss-break)
4. Session window: ___ (are you still inside your trading hours?)
5. The winner test: would I take this exact trade, at this exact size, if the previous trade had been a winner? ___ (yes / no)

One honest "no" anywhere ends the trade.

## The Revenge Ledger: Tag Your Revenge Trades and Let the Win Rate Kill the Delusion

Feelings argue. Ledgers do not. Here is the instrument: tag every trade you take within your cooldown window, after a loss, or above your size rule with one tag — **REVENGE**. Then compute the win rate of that tag.

The sharpest illustration of why comes from practitioner data: trading journal Thrive reports, in its explicitly labeled sample data, that revenge trades run at a 22% win rate. That is *their* reported sample — not our finding, not research, and not a universal statistic. But it points at the exercise that kills the delusion: your own revenge tag, with your own number, computed from your own trades. Argued feelings lose to a ledger every time.

This is also the live example of a broken ledger from [the net-expectancy article](/articles/how-to-calculate-real-expectancy/) — revenge trades are what a negative-expectancy tag looks like in the wild. And the full journaling method, including emotional tagging, belongs to the trading-journal article coming later this week — tag the trades now, and that article will tell you what to do with them.

## Where Revenge Trading Sits: One Form of Tilt, One Trigger of Overtrading

Two boundary lines, drawn once so this article never swallows its neighbors:

- **Revenge trading is one form of tilt** — specifically the post-loss recovery form. Tilt is the family this belongs to, and the full framework arrives in the tilt article later this week. Think of it this way: tilt is the weather; revenge trading is one specific storm inside it.
- **Revenge is one of overtrading's three triggers.** The other two are boredom and overconfidence — and tomorrow morning's article on overtrading maps all three. Revenge is the one that costs the most per episode, because it pairs frequency with size inflation.

Everything else this article touched in passing belongs elsewhere: the size mechanics are owned by [position sizing](/articles/position-sizing/), the sequence's endpoint by [risk of ruin](/articles/risk-of-ruin-trading/), the ledger by expectancy and the journal. This article owns one circuit: the debt delusion and the protocol that breaks it.

## The Honest Limitation: The Protocol Stops You — It Doesn't Make You Profitable

Read this as the contract's fine print:

- The loss protocol is a **behavioral safeguard, not a profit strategy**. Following it will not make you money. It will not win back the loss. It was built for one job: stopping you from making the loss worse.
- Trading carries the risk of capital loss. Leverage and expiry risk are real — an option can go to zero, a leveraged position can lose more than planned if a stop gaps.
- Never present this protocol to yourself or anyone else as a way to recover losses. The moment the protocol becomes a recovery plan, it is just revenge trading with paperwork.
- If you find you cannot honor the contract three sessions in a row, the problem is no longer the loss, it is the system around the loss — shrink size, extend the cooldown, or step back for a week.

The protocol's entire purpose is to stop trading. That is the feature, not a bug.

## The Pair Close: Both Sides Fail the Same Test — Accepting What Just Happened

This morning's giveback and tonight's revenge trading are the same failure wearing opposite clothes: **a refusal to accept what just happened.** On the win side, you cannot accept that the win is over, so you keep playing until the market takes it back. On the loss side, you cannot accept that the loss is real, so you keep collecting a debt the market never agreed to.

Both are fixed the same way: by decisions made **before** the session, not during it. The finish line for the win side; the circuit breaker for the loss side. The principle is one — decide before, not during — and the circuits are two.

Tomorrow morning brings the neighbor: overtrading, the mechanism revenge trading shares with boredom and overconfidence. Tonight, sign the contract.

## Frequently Asked Questions

**How do I stop revenge trading after a loss?**
With mechanical rules, not willpower: a mandatory 15–30 minute cooldown after any loss (away from screens), a session stop after 2 consecutive losses or at your daily loss budget, and halved position size when you return. These interrupt the emotional surge before it can dictate action. Willpower is not a system; a pre-commitment contract is.

**What is revenge trading?**
The attempt to recover a loss quickly by entering a new position — frequently larger than normal and often without a valid setup. The defining fact: revenge sequences commonly multiply the original loss and rarely restore it. The loss gets filed mentally as a debt the market owes, and every new trade becomes "collection."

**Why do traders revenge trade?**
The bias stack: loss aversion makes a loss feel roughly twice as impactful as an equal-sized gain; recency bias overweights the last trade; the illusion of control says you can force the market to comply; the sunk cost fallacy says the money already lost must be "earned back." Once these activate, instinct overwrites the system.

**Should I stop trading after a big loss?**
Yes. A session-stop circuit breaker is one of the highest-leverage habits a trader can build — journaled traders consistently report that stopping early costs the least and saves the most. The market will be there tomorrow; your impaired judgment will not be. A loss day ends when your loss protocol says it ends — not when you feel calm again.

**How long should I wait before trading again after a loss?**
A minimum of 15–30 minutes for day traders (longer for higher timeframes); two consecutive losses means the session is over. The clock matters less than the circuit: you are not waiting to feel calm, you are waiting for the plan to be in charge again.

**How do I know if I'm revenge trading or taking a real setup?**
Ask yourself: would you take this exact trade, at this exact size, if the previous trade had been a winner? If the answer depends on what happened before, the loss is trading, not you. Every plan criterion must be met — not "it looks good."

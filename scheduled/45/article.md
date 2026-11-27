---
title: "Stop Loss in Crypto Trading"
description: "Stop loss in crypto trading: risk budget first, structure and ATR placement, sizing from the stop, and order, trigger and trailing rules for a 24/7 market."
meta_description: "Stop loss in crypto trading: risk budget first, structure and ATR placement, sizing from the stop, and order, trigger and trailing rules for a 24/7 market."
date: 2026-11-16
author: Kaizen
tag: "Risk management · Stop loss"
keywords: ["stop loss in crypto trading", "crypto stop loss", "stop loss crypto", "crypto stop loss percentage", "ATR stop loss crypto", "trailing stop loss crypto", "stop loss for bitcoin", "stop market vs stop limit crypto", "mark price vs last price stop loss", "crypto liquidation stop loss", "stop loss for altcoins", "how to set stop loss in crypto"]
---

*By Kaizen · 16 November 2026 · Monks Of Market*

A stop loss in crypto trading is a preset exit level, decided before entry, that closes the trade automatically when price moves against it. The companion pieces Stop Loss Meaning, Stop Loss in Trading, Stop Loss for Options Trading and Stop Loss for Intraday Trading cover the definition, placement in general, and the options and intraday versions of this procedure; this article does something narrower and more urgent. It gives you the crypto procedure, for a market that never closes, moves several percent on an ordinary day, and can liquidate a leveraged position while you sleep.

That last point is the whole reason this article exists. On a trade in a market with sessions, a bad day can be slept on; the position is still there in the morning, and the trader can decide afresh. In crypto there is no session end to rescue an unmanaged position. There is no overnight pause, no close at which everything stops, and no morning to reconsider. A sharp move can happen at any hour, including the hours you are asleep, and a position left without a stop is not a position you are managing patiently. It is a position you have abandoned to the market.

This article builds the procedure in order. Set the risk budget before the first trade. Choose the stop basis — structure, then ATR, then percentage as a sanity check only. Size from the stop, never before it. Place the stop the moment the entry fills, with the order type, trigger type and reduce-only setting chosen deliberately. Manage with trailing and altcoin rules fixed in advance. And check the liquidation ordering before entry, because a stop that sits beyond liquidation is no stop at all.

One example runs through every method in this article, so the methods can be compared fairly instead of each getting its own flattering numbers. All figures are asset-unit arithmetic on a hypothetical asset, with illustrative prices only. Capital is $10,000. The one-trade risk budget is 1% of capital, which is $100 — a common rule of thumb to test, not a law. The trade is a long entry at $60,000 per unit, and the daily ATR — the average size of a daily candle's range — is $1,800, which is 3% of entry. Sizes in this article are shown to four decimal places, asset units first, and every profit or loss figure is computed on the rounded size shown, consistently. Keep those numbers in mind; every calculation below uses them.

This is educational content only, not investment advice. No stop loss method guarantees a profit, prevents losses, or guarantees an exit price.

## Stop Loss in Crypto Trading: A Preset Exit, Because the Market Never Sleeps

The crypto stop has one job: to turn a wrong trade into a known, bounded loss at any hour, without the trader needing to be awake, watching, or quick. It does that job only if three things are true before the entry is placed. First, the level is written down, not carried in the trader's head — a level in your head moves when price approaches it, and that is the first step toward an unplanned loss. Second, the size of the trade is derived from the distance to that level, so the dollar loss if the stop fires is already known. Third, the stop is actually placed, as an order, the moment the entry fills — because in a market that never closes, a mental stop is not a stop at all. It is a hope with a bedtime attached.

Most crypto stop problems are not placement problems at all. They are sequence problems. The trader picks a size first, then finds a stop that fits the size. Or the trader places a stop but never checks whether liquidation would arrive first, so the stop is a decoration on a position that cannot survive to reach it. Or the trader copies a percentage that worked for a major asset onto an altcoin, where the same percentage sits inside ordinary noise, and then concludes that stops do not work. The procedure below fixes the sequence first, and the placement second, because a well-placed stop in a bad sequence still loses money the same way.

## Why an Equity-Style Stop Fails in Crypto

A stop designed for a market with sessions assumes time is on the trader's side: price can wander, retrace, and come back, and the stop only needs to catch a genuine change of trend, with a close to reassess at. A crypto stop lives in a different world, and five differences break the session-style stop.

First, there is no close. A position that is "almost stopped out" at the end of a session in another market gets a pause; a crypto position that is almost stopped out at midnight simply keeps moving, in either direction, while you are not there to decide. Planning for the hours you are absent is not optional. It is the plan.

Second, the ordinary daily swing is large. An asset whose daily ATR is 3% of its price moves, on a normal day, by more than many traders' entire stop distance. A stop placed at a tight fixed percentage can be clipped by an ordinary day while the trade idea is still perfectly sound. That feels unfair every time it happens, which is why it keeps happening: the trader blames the market instead of a distance that never respected the asset's own movement.

Third, the trigger itself can be gamed by a wick. In a market with thin books and round-number stop clusters, a brief spike can touch an obvious level, trigger a pile of stops, and reverse — all in minutes. A stop placed just under an obvious level, triggered by the wrong price type, is not bad luck. It is a predictable outcome of an obvious placement.

Fourth, leverage changes what a stop means. On an unleveraged spot position, a stop that fires late still exits at some price. On a leveraged position, there is a second exit — liquidation — that arrives without asking, and if it arrives before the stop, the stop never gets its chance. A procedure that ignores that ordering is incomplete, however good its placement looks on a chart.

Fifth, the books are sometimes thin. On a low-volume pair, a triggered stop that becomes a market order walks an empty order book, filling at prices far below the trigger. The stop did its job — it got the trader out — but the exit price was not the planned price. Any crypto procedure that promises the trigger price as the exit price is selling something the market does not offer.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 310" role="img" aria-label="A 24-hour timeline with no close — night hours shaded, a sharp overnight move marked, and the stop's job annotated at each phase: placed on fill, working while the trader sleeps, and never a mental note" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">24 hours, no close — the stop works every hour</text>
<text x="340" y="70" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Placed on fill</text>
<text x="340" y="94" text-anchor="middle" fill="#92a59c" font-size="12">Stop is an order, not a note</text>
<text x="340" y="114" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="128" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Working while you sleep</text>
<text x="340" y="152" text-anchor="middle" fill="#92a59c" font-size="12">No session end rescues it</text>
<text x="340" y="172" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="186" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Sharp overnight move</text>
<text x="340" y="210" text-anchor="middle" fill="#92a59c" font-size="12">Trigger type resists wicks</text>
<text x="340" y="230" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="244" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Never a mental note</text>
<text x="340" y="268" text-anchor="middle" fill="#92a59c" font-size="12">A hope with a bedtime is not a stop</text>
</svg>
</figure>

## Step 1: Set the Risk Budget Before the First Trade

Before any placement, one number is fixed, and it is not negotiable during the trade.

The one-trade risk budget is the maximum dollar loss you accept if this single trade's stop fires. On the carried example it is $100: 1% of $10,000 of capital. That 1% is a common rule of thumb to test, not a law, and not a promise. Some traders use a smaller budget; the procedure works identically at any budget, because the budget is an input, not a conclusion. What matters is that it is decided before entry, written down, and never revised upward mid-trade to accommodate a stop that turned out wider than expected.

The risk budget is in account currency. The stop distance converts it into asset units. That conversion is the whole sizing method, and it comes in Step 3. For now, the discipline is only this: no trade is entered until its worst case, in dollars, is a number you have already accepted. A trade whose worst case you have not named is not a trade with a stop. It is a trade with a wish.

## Step 2: Choose the Stop Basis — Structure, Then ATR, Then Percentage as a Check

There are three ways to choose where the stop goes. They are not equals. Use them in this order, and the order itself is part of the method.

### Structure first: the level that proves the idea wrong

Structure means the chart level that, if broken, means the trade idea is wrong. For a long, that is below support, or below the recent swing low, with a small buffer for noise and for the stop-cluster sweeps that gather just under obvious levels. The buffer is the point: a stop placed exactly on support gets touched by ordinary wobble around that level, while a stop a little below it only fires when the level has genuinely failed.

On the carried example, support sits at $58,200. A $300 buffer below it puts the stop at $57,900. The distance from the $60,000 entry is $2,100. That distance is the input to sizing, and it is honest about what it is: the price at which you admit the idea failed, plus room for the market to breathe around the level.

Structure fits when a clean level exists. It fails when there is no clean level — a parabolic move, a fresh listing, a chart with no meaningful support nearby — and then the next basis takes over rather than a level being invented to fill the gap.

### ATR second: a distance that breathes with volatility

ATR, the average true range, measures how much the asset actually moves per candle. A stop set as a multiple of ATR scales with the asset's own volatility: a calm asset gets a tighter stop, a wild asset gets a wider one, and the same rule applied to both does not pretend they are the same trade. The commonly quoted multiple is 1.5 to 2 times ATR, with wider multiples for more volatile assets.

On the carried example, 1.5 times the $1,800 daily ATR is $2,700. The stop is $60,000 minus $2,700, which is $57,300. The distance is $2,700. Notice what ATR does here that a fixed percentage cannot: it asks the asset how far it normally moves, and then places the stop outside that ordinary movement, instead of imposing a number from outside.

ATR fits when no clean structure level exists, or as a cross-check on a structure stop. It fails when volatility itself is spiking — during a panic, ATR measured over recent candles can be so large that the stop it implies makes the trade unworkable, which is information, not a problem to override. A stop distance that makes the size or the risk-to-reward unworkable is the market telling you to skip the trade, not to shrink the stop until the trade fits.

### Percentage last, and only as a sanity check

A fixed percentage stop — say, 2% below entry — is the easiest to compute and the easiest to get wrong, because it ignores both the chart and volatility. It treats a calm major asset and a wild altcoin identically, and it treats a quiet week and a panicked week identically. That is why it sits last in this procedure: as a check, never as the basis.

On the carried example, a 2% stop is a $1,200 distance, giving a stop at $58,800. It allows the largest size of the three methods, which is exactly why it is tempting — and exactly why it is rejected here. $1,200 is less than one daily ATR of $1,800. The stop sits inside the asset's ordinary daily noise, so it will be clipped by a normal day while the idea is still right. A bigger allowed size is not a benefit when it comes with a stop that fires on noise. The percentage check did its job: it showed that the easy number was the wrong number for this asset, on this day.

The commonly quoted range for fixed-percentage crypto stops, 3 to 8% for majors on active trades and wider for altcoins, is a rough guide, never a rule. The procedure above is why: a percentage that works for a major will sit inside noise for an altcoin, and a percentage that survives an altcoin's noise will be absurdly wide for a major. Percentages describe other people's trades. Structure and ATR describe this trade.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 310" role="img" aria-label="Comparison table of the three bases on the carried example — structure stop $57,900 / 0.0476 units, ATR stop $57,300 / 0.0370 units, 2% check stop $58,800 / 0.0833 units rejected as below one ATR — with distance, size and verdict in each row" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">One example, three bases — distance decides the size</text>
<text x="340" y="78" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Structure · $57,900 · $2,100 · 0.0476 units · ACCEPTED</text>
<text x="340" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">ATR 1.5x · $57,300 · $2,700 · 0.0370 units · ACCEPTED</text>
<text x="340" y="202" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">2% check · $58,800 · $1,200 · 0.0833 units · REJECTED</text>
<text x="340" y="280" text-anchor="middle" fill="#92a59c" font-size="12">$1,200 is below one daily ATR of $1,800 — inside ordinary noise</text>
</svg>
</figure>

## Step 3: Size From the Stop, Not Before It

Size is not a decision. It is a division. Risk budget divided by stop distance, in the same units, gives the maximum asset units. The [position sizing guide](/articles/position-sizing/) covers this sizing arithmetic in full, and the [risk of ruin guide](/articles/risk-of-ruin-trading/) explains why repeatedly risking more than the budget does damage that compounds faster than most traders expect. This article's contribution is narrower: in crypto, sizing from the stop is what stops the trader from choosing a size first — because leverage makes a large size feel affordable, or because a winning streak makes today feel safe — and then hunting for a stop distance that justifies it. A stop found to justify a size is not a stop. It is an excuse.

On the carried example, the three bases give three sizes for the same $100 budget:

- Structure: $100 divided by $2,100 is 0.0476 units. The planned loss on the rounded size is 0.0476 times $2,100, which is $99.96, inside the budget.
- ATR: $100 divided by $2,700 is 0.0370 units. The planned loss on the rounded size is 0.0370 times $2,700, which is $99.90, inside the budget.
- Percentage check: $100 divided by $1,200 is 0.0833 units, but this stop is already rejected for sitting inside one ATR, so its larger size is irrelevant.

Asset units first, account currency second, every time. That ordering is deliberate: the unit size is what the market moves, and the dollar figure is what you lose. A trader who thinks in dollar risk but sizes in units without converting is guessing in two currencies at once.

Two filters apply before entry, and either one can kill the trade. First, the target filter: the trade's target should be at least 1.5 to 2 times the risk, as a common bar, stated as a filter, not a promise. On the ATR stop, 1.5 times the $2,700 distance is $4,050, so the target must sit at or above $64,050 for the trade to pass the filter. A trade that risks $2,700 of distance to make less than $4,050 is not a bad trade with a good stop. It is a trade whose arithmetic never worked. Second, the liquidation ordering check, for any leveraged version of the trade: the stop must sit on the safe side of liquidation, with room to spare. Liquidation is covered conceptually only here — no leverage multiple is recommended and no liquidation formula is given — because the check itself is the point. If the position is sized so that liquidation would arrive before the stop, the position is too large, full stop. The fix is a smaller position. It is never a moved stop, and it is never a wider stop invented to sit on the safe side of a sizing mistake.

Skip the trade if the distance makes the size unworkable or the risk-to-reward unworkable. Skipping is not a failure of the procedure. Skipping is the procedure working.

## Step 4: Place the Stop the Moment the Entry Fills — and Pick the Settings Deliberately

The stop is placed the moment the entry fills. Not after coffee, not after watching the first candle, and never "just for tonight" as a mental note. The market does not sleep, so a mental stop is an unmanaged position, and an unmanaged position in a 24/7 market is the one position guaranteed to find you at your least ready hour.

Three settings are chosen deliberately, before entry, not discovered after:

**Stop-market or stop-limit: what matters more, getting out or the price?** A stop-market order triggers a market order when the stop price is reached. It guarantees exit, not price: in a fast market, or into a thin book, the fill can be far below the trigger. A stop-limit order triggers a limit order when the stop price is reached. It controls the price, but it may not fill at all: in a fast drop, price can run past the limit and leave the order sitting unfilled while the position keeps losing. Use stop-market when getting out matters more than the exact fill price — fast markets, leveraged positions, any position you cannot afford to still hold. Use stop-limit only when the price matters more than guaranteed exit, and say plainly to yourself that it can sit unfilled. Never expect one type to give you the other type's guarantee.

**Mark price or last price: what should be allowed to trigger you?** The trigger price type decides which price series can fire the stop. A last-price trigger can be fired by a single wick in the last traded price — a brief spike that touches your level and reverses, in a market where such spikes are routine. A mark-price trigger is designed to resist exactly that: a wick in last price alone should not be able to trigger a well-set stop. Confirm the trigger type before entry. A stop whose trigger type you have not checked is a stop whose behaviour in a wick you have not chosen.

**Reduce-only on leveraged positions: can this stop ever open a new position?** On a leveraged position, a stop order that is not marked reduce-only can, in edge cases, leave a reversed position open instead of a closed one. Confirm reduce-only before entry, so the stop can only ever shrink or close the position, never accidentally reverse it. This is a one-time setting check, not a trading decision, which is precisely why it is forgotten most often.

None of this is a walkthrough of any particular venue's order ticket — order types and settings are described generically here, because the procedure is the same wherever you trade, and the venue's labels are not the lesson. The lesson is that each setting is a choice with a named cost, made before entry, not a default accepted in a hurry after the entry has filled.

## Step 5: Manage With Rules Fixed in Advance

A stop that is managed by feel is a stop that moves when you are scared and stays when you are hopeful, which is the opposite of a rule. The management rules are fixed before entry, and they move the stop in only one direction: the direction that reduces risk.

**Trail only toward safety.** The rule on the carried example is two-stage, and it is worth following in full because it shows what trailing actually buys. The position is the ATR-sized one: 0.0370 units, stop at $57,300. Price reaches $66,000. Move the stop to breakeven, $60,000. Risk is now zero, which is not profit — it is the removal of loss. Price reaches $69,000. Trail to 1.5 times ATR below the peak: $69,000 minus $2,700 is $66,300, and never below breakeven. A reversal to $66,300 exits the trade at $6,300 per unit above entry, times 0.0370 units, which is $233.10 kept, instead of giving the whole move back.

Notice what trailing did not do. It did not predict the top. It did not keep the whole move. It exchanged the possibility of the whole move for the certainty of part of it, by a rule written before the move happened. That exchange must be accepted knowingly, not discovered afterwards as a disappointment.

**Never widen a stop to give it room.** Widening converts a planned loss into an unplanned one, and it is done most often at the exact moment the stop exists to protect you. If the stop is wrong, the trade was wrong: exit, reassess, and re-enter on a fresh plan if the setup still justifies it. There is no version of widening that is not, in effect, deciding mid-trade to risk more than the budget you set before the trade.

**The altcoin adjustment: same procedure, wider multiple, smaller size.** The same procedure applies to altcoins, but the inputs change, and copying a major asset's stop onto an altcoin is one of the most common crypto errors. An altcoin moves more per candle, so the same percentage stop sits deeper inside its noise, and the same ATR multiple may still be too tight. The adjustment is a wider ATR multiple and a smaller position for the same account risk — never the same percentage stop copied across. On the carried example's numbers, a wider 2 times ATR multiple gives a $3,600 distance, a stop at $56,400, and a size of 0.0278 units for the same $100 budget. Same risk, wider stop, smaller size. That is the whole adjustment, and it is why altcoin stops that look "too wide" are usually the honest ones.

**Plan for thin hours.** Weekend and low-liquidity hours, clustered round-number stops, and flash drops are when trigger type and order type matter most. A stop that behaves perfectly in liquid hours can be wick-triggered, slippage-filled, or left unfilled in thin hours, and those are the hours when you are least likely to be watching. The countermeasure is not vigilance. It is the settings chosen in Step 4: a trigger type that resists wicks, an order type chosen for guaranteed exit where exit matters, and a stop distance that respects the asset's movement rather than a percentage borrowed from liquid hours.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Trailing walk diagram — entry $60,000, stop $57,300, breakeven move at $66,000, trailing stop $66,300 at the $69,000 peak, exit keeping $233.10 on 0.0370 units" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Trailing walk — breakeven first, then trail, never widen</text>
<text x="340" y="78" text-anchor="middle" fill="#f2f7f4" font-size="12">Entry $60,000 · stop $57,300 — ATR-sized 0.0370 units</text>
<text x="340" y="116" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12">Price $66,000 · stop to breakeven $60,000 — risk now zero</text>
<text x="340" y="178" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="202" text-anchor="middle" fill="#f2f7f4" font-size="12">Price $69,000 · trailing stop $66,300 — 1.5x ATR below peak</text>
<text x="340" y="240" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="264" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Exit at $66,300 keeps $233.10 — the move is not given back</text>
</svg>
</figure>

## The Crypto-Only Failure Modes

Each of these has a countermeasure, and the countermeasure is always a decision made before entry, not a reaction during the move.

**Ordinary-volatility shakeout.** A stop tighter than one ATR gets clipped by a normal day. Countermeasure: the ATR check in Step 2 — if the distance is below one ATR, the stop is inside noise, whatever the percentage says.

**Stop-cluster sweep.** Stops gathered just under an obvious level, or at a round number, get swept by a brief move that then reverses. Countermeasure: the structure buffer, and a stop placed where the idea fails, not where the crowd's stops sit.

**Wick trigger on last price.** A single spike in last traded price fires a stop that a mark-price trigger would have ignored. Countermeasure: confirm the trigger type in Step 4, before entry.

**Stop-limit non-fill in a flash drop.** Price runs past the limit and the order sits unfilled while losses grow. Countermeasure: stop-market where guaranteed exit matters, chosen knowingly, with slippage accepted as its cost.

**Stop-market slippage through a thin book.** The triggered market order walks an empty book and fills far below the trigger. Countermeasure: size for the pair's liquidity, and accept that on a thin pair the planned loss is a best case, not a promise — or do not trade that pair with a market stop at all.

**Trailing whipsaw in chop.** In a range-bound market, a trailing stop exits the trade on a normal pullback, again and again. Countermeasure: trail only by ATR or by structure, never by a tight percentage, and do not trail at all in a market you already know is chopping — trailing is a trending-market tool.

**Liquidation before the stop.** An oversized leveraged position is liquidated before its stop can fire. Countermeasure: the ordering check in Step 3 — if liquidation would come first, the position is too large, and the fix is a smaller position, never a moved stop.

## Mistakes That Turn a Planned Loss Into an Unplanned One

The failure modes above are market mechanics. These are trader decisions, and they are more expensive, because they are chosen.

Moving the stop further away once price nears it. Trading without a placed stop "just for tonight". Sizing first and finding a stop to fit the size. Copying a major asset's percentage onto an altcoin. Using a stop-limit where guaranteed exit matters, and discovering the non-fill during a flash drop. Trailing by feel — up when confident, untouched when nervous — which is the same as having no trailing rule. And the quietest one: entering a leveraged trade without checking the liquidation ordering, so the stop is a story told about a position that cannot survive to reach it.

Every one of these converts a number you chose before the trade into a number discovered during it. The procedure in this article exists to keep that conversion from happening, because a loss discovered mid-trade is always larger than a loss chosen before it.

## The Pre-Trade Checklist, and a Worked Trade That Keeps Part of the Move

Before entry, the checklist is short, and it is written down, not recited:

1. Risk budget fixed: $100 on the carried example, 1% of $10,000, a rule of thumb to test, not a law.
2. Stop basis chosen in order: structure, else ATR, percentage only as a check (carried example: $57,900 by structure, $57,300 by ATR, $58,800 by the rejected 2% check).
3. Size computed from the stop, asset units first (carried example: 0.0476 units by structure, 0.0370 units by ATR).
4. Target clears the 1.5 to 2 times filter, or the trade is skipped (carried example: at least $64,050 on the ATR stop).
5. Liquidation ordering checked on any leveraged version: the stop sits on the safe side of liquidation with room to spare, or the position is smaller.
6. Order type chosen deliberately: stop-market where exit matters, stop-limit only where price matters more, knowing it may not fill.
7. Trigger type confirmed (mark price resists wick triggers) and reduce-only confirmed on leveraged positions.
8. Trailing rule written down before entry: breakeven, then peak minus 1.5 times ATR, never below breakeven, never widened.
9. Stop placed the moment the entry fills — no live crypto position without a placed stop, not for an hour, not for a night.

Now the worked trade, using the ATR-sized position throughout. Entry $60,000, 0.0370 units, stop $57,300, planned loss $99.90. Price rises to $66,000; the stop moves to breakeven $60,000, and the trade can no longer lose. Price rises to $69,000; the stop trails to $66,300. Price reverses to $66,300 and the trade exits, keeping $233.10 instead of giving the whole move back. The trade did not keep everything — the move beyond $69,000, had it continued, was given up by the trailing rule — but it kept a known part of it, by a rule, while the trader could have been asleep for the entire move. That is what the crypto stop buys. It does not buy winning trades. It buys the right to keep trading in a market that never closes.

## Frequently Asked Questions

### What is a stop loss in crypto trading?

A preset exit level, decided before entry, that closes the trade automatically when price moves against it. Crypto makes it non-negotiable because the market never closes: there is no session end to rescue an unmanaged position, and a sharp move can happen while you are asleep.

### What percentage stop loss is best for crypto?

There is no single number. The commonly quoted range for a fixed-percentage stop is 3 to 8% for majors on active trades, and wider for altcoins, but that range is a rough guide, never a rule, because a percentage ignores both the chart and volatility. On the carried example, a 2% stop gives $58,800, but $1,200 of distance is less than one daily ATR of $1,800, so it sits inside ordinary noise and is rejected even though it allows 0.0833 units. Prefer structure first, ATR second, percentage only as a check — and expect the right percentage, if you compute one at all, to be wider for an altcoin than for a major asset.

### How do I calculate a crypto stop loss?

Decide the risk budget first, then the stop distance, then divide: size in asset units equals risk budget divided by stop distance. On the carried example: $100 risk budget divided by the $2,700 ATR distance (entry $60,000, stop $57,300) is 0.0370 units. The planned loss on the rounded size is 0.0370 times $2,700, which is $99.90, inside the budget. Never reverse the order and pick a size first.

### Stop-market vs stop-limit vs trailing stop in crypto — which should I use when?

Use stop-market when getting out matters more than the exact fill price — fast markets, leveraged positions, any position you cannot afford to still hold — knowing the fill can be below the trigger. Use stop-limit only when the price matters more than guaranteed exit, knowing it can sit unfilled in a fast drop. Use a trailing stop, which follows price in your favour and never moves back, when the trade is moving in your favour and you want to lock in part of the move by a pre-set rule, not when the market is chopping, where it will whipsaw you out on normal pullbacks.

### Mark price vs last price — which should trigger my stop?

Prefer a mark-price trigger where the choice is available, because a wick in last traded price alone should not be able to trigger a well-set stop. A last-price trigger can be fired by a single brief spike that touches your level and reverses — a routine event in crypto. Whichever you use, confirm the trigger type before entry, so the stop's behaviour in a wick is a choice you made, not a surprise you discover.

### Should my stop be different for bitcoin vs altcoins?

Yes. The procedure is the same, but the inputs change. An altcoin moves more per candle, so the same percentage stop sits deeper inside its noise, and the same ATR multiple may still be too tight. Use a wider ATR multiple and a smaller position for the same account risk. On the carried example's numbers, a wider 2 times ATR multiple gives a $3,600 distance, a stop at $56,400, and 0.0278 units for the same $100 budget. Never copy a major asset's percentage stop onto an altcoin unchanged.

### Do I need a stop loss if I hold spot long term?

Not in the same way, and the distinction matters. A long-term spot holding, bought with money you do not need and sized so a large drawdown does not force a sale, is an investment position, not a trade with a thesis that a price level can disprove. A stop on such a holding can do real harm: it can sell a long-term position into a flash wick that then reverses, locking in a loss on an asset you intended to hold. If you do use one, use it as a thesis check — the level at which your reason for holding is wrong — not as a tight percentage copied from a trading procedure. The procedure in this article is for trades, where the entry thesis has a price at which it fails.

### Can a stop loss prevent liquidation?

Only if it is placed and ordered correctly. A stop prevents liquidation when it sits on the safe side of liquidation, with room to spare, and fires before liquidation arrives — which is why the ordering check in Step 3 comes before entry. A stop cannot prevent liquidation if the position is sized so liquidation arrives first, if a stop-limit sits unfilled through a flash drop, or if slippage carries the fill past the liquidation level. In those cases the stop was never in a position to help, and the fix is a smaller position, never a moved stop.

### What happens to my stop in a flash crash?

It depends on the order type you chose, and that is why the choice is made before entry. A stop-market will trigger and exit, but into a thin, falling book, so the fill can be far below the trigger — the planned loss is a best case, not a promise. A stop-limit may not fill at all if price runs past the limit, leaving the position open through the drop. A mark-price trigger resists wick-only triggers better than a last-price trigger, but no trigger type protects a fill price in a genuine crash. Size so the account survives a worse-than-planned fill, or do not hold that position through conditions you cannot monitor.

### When does a trailing stop hurt?

In choppy, range-bound markets, and on thin pairs. A trailing stop follows price in your favour and never moves back, so in chop it exits the trade on a normal pullback, again and again, and on a thin pair a wick can trigger the trail and exit a trade that then resumes. It also hurts, by design, when it exits a trade that then runs much further — on the carried example the $66,300 exit keeps $233.10 but gives up any move beyond $69,000. That exchange, certainty of part of the move for the possibility of the whole move, is the price of trailing, and it must be accepted knowingly, not discovered afterwards.

### Should I move my stop loss once the trade is live?

Only in the direction that reduces risk, and only by the pre-set trailing rule. Move it to breakeven and then trail it behind price, never back. Never widen it to give the trade room — widening converts a planned loss into an unplanned one, and it is done most often at the exact moment the stop exists to protect you. If the stop is wrong, the trade was wrong: exit, reassess, and re-enter on a fresh plan if the setup still justifies it.

### How do you keep a stop working in a market that never closes?

You do not watch it. You place it as an order the moment the entry fills, with the trigger type, order type and reduce-only setting already chosen, and then you let the order work while you sleep. A mental stop, a stop you intend to place later, and a stop you plan to manage by watching are all unmanaged positions in a market that never pauses. The system that works overnight is the one that was fully decided before the entry: budget, basis, size, settings, trailing rule, and liquidation check, all written down, all already in place as orders.

## What a Stop Loss Cannot Do

A stop loss cannot guarantee an exit price, and a limit stop cannot guarantee a fill at all. It cannot distinguish a noise dip from a genuine reversal in real time — that is why buffers and ATR multiples exist, and why they sometimes still fail. It cannot make a bad trade good, or a strategy with no edge profitable; it can only bound what a wrong trade costs. It cannot protect against a gap or flash drop larger than its distance, and it cannot stop a trader from widening it, cancelling it, trading a thin pair with the wrong order type, or sizing a leveraged position so liquidation arrives first. Those last protections are not in the order. They are in the trader, and they are the reason the rules in this article are written down before entry, not decided during the trade.

What a stop loss can do, done the way this article sets out, is narrower and more valuable: it can make every crypto loss a known, bounded, pre-accepted number; it can make every night's worst case a number chosen before the trade, not discovered in the morning; and it can keep a trader in the game long enough for an edge, if one exists, to show up in results rather than being erased by a single overnight move. Start here, with the procedure — budget, basis, size, settings, trailing rule, liquidation check — and the rest of the system slots into place around it.

*This article is for education only. It is not investment advice, and the author is not a registered investment adviser. Trading involves risk of loss, including the loss of capital; no stop loss method removes that risk.*
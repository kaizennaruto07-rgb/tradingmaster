---
title: "Stop Loss for Intraday Trading"
description: "Stop loss for intraday trading: risk budget, daily stop, structure and ATR placement, sizing from the stop, trailing rules and the planned square-off."
meta_description: "Stop loss for intraday trading: risk budget, daily stop, structure and ATR placement, sizing from the stop, trailing rules and the planned square-off."
date: 2026-11-16
author: Kaizen
tag: "Risk management · Stop loss"
keywords: ["stop loss for intraday trading", "intraday stop loss", "stop loss in intraday trading", "intraday stop loss percentage", "ATR stop loss intraday", "trailing stop loss intraday", "intraday stop loss strategy", "stop loss for day trading", "intraday trading stop loss calculation", "square off stop loss"]
---

*By Kaizen · 16 November 2026 · Monks Of Market*

A stop loss on an intraday trade is a preset exit level, decided before entry, that closes the trade automatically when price reaches it. The companion piece Stop Loss Meaning covers the definition in full, and Stop Loss in Trading covers placement in general. This article does something narrower and more urgent: it gives you the procedure for a single session, where there is no tomorrow to wait for.

That last point is the whole reason this article exists. On a longer-term trade, a bad day can be slept on; the position is still there in the morning, and the trader can decide afresh. On an intraday trade, there is no "hold and hope" overnight. The position must be closed by the session's end, whether the trader likes the price or not. A stop that ignores that constraint — a stop copied from a swing trade, placed at a comfortable distance and left alone — will either get clipped by the morning's noise or leave the trader trapped in the forced square-off window at the end of the day, closing at whatever price the market offers. Neither outcome is an accident. Both are what happens when the session's own rules are not built into the stop.

This article builds those rules in, in order. Set the risk budget and the daily stop before the first trade. Choose the stop basis — structure, then ATR, then percentage as a cap only. Size from the stop, never before it. Place the stop the moment the entry fills, with the order type chosen deliberately. Manage inside the session with trailing and time-stop rules fixed in advance. And plan the square-off, because the session end is an exit whether you plan it or not.

One example runs through every method in this article, so the methods can be compared fairly instead of each getting its own flattering numbers. All figures are per-share arithmetic on a hypothetical stock. Capital is Rs 1,00,000. The one-trade risk budget is 1% of capital, which is Rs 1,000 — a common rule of thumb to test, not a law. The trade is a long entry at Rs 1,000 per share, and the intraday 15-minute ATR — the average size of a 15-minute candle's range — is Rs 12. Keep those numbers in mind; every calculation below uses them.

This is educational content only, not investment advice. No stop loss method guarantees a profit, prevents losses, or guarantees an exit price.

## Stop Loss for Intraday Trading: A Preset Exit, Because the Session Ends

The intraday stop has one job: to turn a wrong trade into a known, bounded loss before the session forces the issue. It does that job only if three things are true before the entry is placed. First, the level is written down, not carried in the trader's head — a level in your head moves when price approaches it, and that is the first step toward an unplanned loss. Second, the size of the trade is derived from the distance to that level, so the rupee loss if the stop fires is already known. Third, the exit at the session's end is treated as a second, equally real stop: if the trade is still open and the stop has not fired, the trader closes it on purpose, at a planned moment, rather than drifting into the forced square-off window.

Most intraday stop problems are not placement problems at all. They are sequence problems. The trader picks a size first, then finds a stop that fits the size. Or the trader places the stop but leaves the daily limit undecided, so a bad morning gets a revenge-trading afternoon. Or the trader trails the stop by feel, moving it up when confident and leaving it alone when nervous, which is the same as having no trailing rule at all. The procedure below fixes the sequence first, and the placement second, because a well-placed stop in a bad sequence still loses money the same way.

## Why a Swing-Style Stop Fails Inside One Session

A stop designed for a trade held over days or weeks assumes time is on the trader's side: price can wander, retrace, and come back, and the stop only needs to catch a genuine change of trend. An intraday stop lives in a different world, and four differences break the swing-style stop.

First, the session has a hard end. A swing stop that is "almost hit" at the close is still a live position; an intraday stop that is "almost hit" near the session's end is about to be closed anyway, at whatever price the square-off produces. Planning for that second exit is not optional.

Second, the noise is front-loaded. The first 15–30 minutes of a session are the noisiest part of the day, as overnight orders, opening positions and early reactions all hit the market at once. A stop distance that survives midday chop comfortably can be clipped in the first half-hour while the trade idea is still perfectly sound. Sizing a stop for the calm middle of the day and trading it at the open is one of the most common intraday errors, and it feels unfair every time it happens — which is why it keeps happening.

Third, the trader is watching. A swing trader checks a position a few times a day; an intraday trader watches every candle. That proximity makes it far more tempting to move the stop, widen it "just a little", or cancel it "just for a minute" while the trader waits for a bounce. Every one of those moves converts a planned loss into an unplanned one, and the screen makes each one feel reasonable in the moment.

Fourth, the feedback loop is same-day. Two losses before lunch are not an abstract drawdown statistic; they are a mood, and moods trade. Without a daily stop decided in advance, the afternoon becomes an attempt to win the morning back, usually with larger size and looser stops — the exact combination that turns a bad day into a damaging one.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 250" role="img" aria-label="Session timeline — a horizontal intraday timeline marking opening noise, midday chop, and the planned square-off window, with the stop's job annotated at each phase" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">One session, three phases — the stop has a job in each</text>
<rect x="65" y="60" width="170" height="120" fill="none" stroke="#92a59c" stroke-width="1"/>
<text x="150" y="95" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Opening noise</text>
<text x="150" y="125" text-anchor="middle" fill="#92a59c" font-size="11">Stop guards the first swings</text>
<text x="255" y="120" text-anchor="middle" fill="#e8825a" font-size="16">→</text>
<rect x="255" y="60" width="170" height="120" fill="none" stroke="#92a59c" stroke-width="1"/>
<text x="340" y="95" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Midday chop</text>
<text x="340" y="125" text-anchor="middle" fill="#92a59c" font-size="11">Daily stop guards the afternoon</text>
<text x="445" y="120" text-anchor="middle" fill="#e8825a" font-size="16">→</text>
<rect x="445" y="60" width="170" height="120" fill="none" stroke="#92a59c" stroke-width="1"/>
<text x="530" y="95" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Planned square-off</text>
<text x="530" y="125" text-anchor="middle" fill="#92a59c" font-size="11">Session end is an exit too</text>
<text x="340" y="220" text-anchor="middle" fill="#92a59c" font-size="12">No holding overnight to wait for a recovery</text>
</svg>
</figure>

## Step 1: Set the Risk Budget and the Daily Stop Before the First Trade

Before the first trade of the day, two numbers are fixed, and neither is negotiable during the session.

The first is the one-trade risk budget: the maximum rupees you are willing to lose on a single trade. The common rule of thumb is about 1% of trading capital. On the carried example, capital of Rs 1,00,000 gives a risk budget of Rs 1,000 per trade. Treat that figure as a starting point to test against your own results, not as a law of nature — but whatever figure you choose, it is chosen before the session, written down, and used to size every trade that day. A risk budget chosen after a loss, or adjusted to fit a trade you already want, is not a budget at all.

The second is the daily stop: the point at which you stop trading for the day, full stop. It can be set as a fixed number of losing trades or as a fixed rupee loss, and either form works — what matters is that it is set before the first trade and honoured without renegotiation. On the carried example, the daily stop is Rs 2,000: two losing trades at Rs 1,000 each, and the day is over. No third trade, no "one more to get even", no exception for a setup that looks perfect at 2 PM. The daily stop is what prevents one bad morning from becoming a revenge-trading afternoon, and it is the single most protective rule in this whole article. Traders who skip it usually know, afterwards, exactly which trade of the day should never have happened.

Set both numbers in the same minute, before the market opens or before your first trade, whichever comes first. If you cannot state your one-trade risk and your daily stop without thinking, you are not ready to place the first trade yet.

## Step 2: Choose the Stop Basis — Structure, Then ATR, Then Percentage as a Cap

A stop needs a basis: a reason for being at that particular price, rather than another. There are three honest bases, and the order in which you prefer them matters more than any single one of them. The order is: structure first, ATR second, percentage last and only as a cap. Each method below is worked on the same carried example — entry Rs 1,000, 15-minute ATR Rs 12, risk budget Rs 1,000 — so you can see what each one actually costs you.

### Structure first: the level that proves the idea wrong

A structure stop sits just beyond the level that, if reached, proves the intraday idea wrong. For a long trade, that is below the intraday support — the recent low, the opening-range low, or the level buyers have defended during the session — with a small buffer for ordinary noise. For a short trade, it is the mirror image: above intraday resistance or the opening-range high, with a buffer.

On the carried example, the intraday support for the long trade is Rs 984. A stop placed exactly at Rs 984 would be hit by any ordinary touch of that level, including a touch that holds and bounces — which is exactly what support is supposed to do. So a Rs 2 buffer is added, and the stop goes to Rs 982. The distance from entry is Rs 18 (Rs 1,000 minus Rs 982). That Rs 18 is not a round number chosen for comfort; it is the distance to invalidation, plus a little room for the market to breathe.

Structure is preferred first because it is the only basis tied to the trade idea itself. If price reaches Rs 982, the reason for being long — buyers defending Rs 984 — is no longer true, and staying in the trade means holding a position whose premise has failed. A structure stop also fails honestly: when there is no clean intraday level, it says so, and you move to the next basis instead of inventing a level.

### ATR second: a distance that breathes with volatility

When no clean intraday level exists — the stock is trending without clear support, or the opening range is too wide to be useful — the ATR basis takes over. ATR, the average true range, measures how much the stock actually moves per candle. An ATR stop is a multiple of that movement, so the distance scales with the stock's own behaviour: a calm stock gets a tight stop, a wild stock gets a wide one, and neither gets a distance copied from a different stock.

On the carried example, the 15-minute ATR is Rs 12, and the multiple used here is 1.5x. That gives a distance of Rs 18 (1.5 × Rs 12), and a stop at Rs 982 — exactly the same level the structure method produced. That agreement is the point, not a coincidence to hide. When two independent bases point at the same level, the stop has earned its place. When they disagree wildly, that disagreement is information: the trade's structure and its volatility are telling different stories, and a cautious trader treats that as a reason to size smaller or skip the trade, not to pick whichever distance allows the bigger size.

The 15-minute ATR is the natural intraday reading because it matches the timeframe the trade lives on. A daily ATR would size the stop for a multi-day move and leave it far too wide for a session trade; a 1-minute ATR would chase every flicker. Match the measurement to the trade's horizon.

### Percentage last, and only as a cap

A fixed-percentage stop is the easiest to compute and the easiest to get wrong, because it ignores both the chart and volatility. One percent of a Rs 1,000 entry is Rs 10, so a percentage stop would sit at Rs 990, a Rs 10 distance. That looks tidy, and it allows a larger size — Rs 1,000 ÷ Rs 10 = 100 shares, against 55 shares on the Rs 18 distance. But Rs 10 is less than one 15-minute ATR of Rs 12. It sits inside ordinary noise. A stock that moves Rs 12 in a typical 15-minute candle will wander through a Rs 10 stop routinely, on days when the trade idea is right and the only error was the stop's distance.

That is why percentage is last, and why it is used here only as a cap: a sanity check that the structure or ATR distance is not absurdly wide for the trade. If the structure stop demanded, say, a distance far beyond what the trade's target could justify, the percentage cap would flag it and the trade would be skipped. Used that way, percentage protects you from one kind of error. Used as the primary basis, it guarantees the other kind: stops that are the same distance on a calm stock and a wild one, on a clean level and a messy one, and that therefore fail for different reasons on different days while always looking reasonable on paper.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 310" role="img" aria-label="Carried-example comparison table — structure stop, ATR stop and percentage cap on the same entry, showing stop level, distance, size and the reason each is accepted or rejected" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same entry Rs 1,000 — two bases agree, the cap is rejected</text>
<text x="340" y="78" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Structure · Rs 982 · Rs 18 · 55 shares · ACCEPTED</text>
<text x="340" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">ATR 1.5x · Rs 982 · Rs 18 · 55 shares · ACCEPTED</text>
<text x="340" y="202" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Percentage 1% · Rs 990 · Rs 10 · 100 shares · REJECTED</text>
<text x="340" y="280" text-anchor="middle" fill="#92a59c" font-size="12">Rs 10 sits inside one 15-minute ATR of Rs 12 — ordinary noise</text>
</svg>
</figure>

| Basis | Stop level | Distance | Size (Rs 1,000 ÷ distance, floored) | Verdict |
|---|---|---|---|---|
| Structure (support Rs 984, Rs 2 buffer) | Rs 982 | Rs 18 | 55 shares | Accepted — tied to invalidation |
| ATR (1.5 × Rs 12) | Rs 982 | Rs 18 | 55 shares | Accepted — agrees with structure |
| Percentage cap (1% of entry) | Rs 990 | Rs 10 | 100 shares | Rejected here — less than one ATR, inside ordinary noise |

## Step 3: Size From the Stop, Not Before It

Once the stop is set, the size follows by one division, and the order is not negotiable: risk budget ÷ stop distance (per share) = maximum shares, floored. On the carried example, Rs 1,000 ÷ Rs 18 = 55.55, floored to 55 shares. Flooring is deliberate. Rounding up to 56 would push the planned risk past the budget (56 × Rs 18 = Rs 1,008); rounding down keeps it inside (55 × Rs 18 = Rs 990). The Rs 10 left unspent is not inefficiency. It is the gap between a budget and a breach.

The [position sizing guide](/articles/position-sizing/) covers this sizing arithmetic in full, and the [risk of ruin guide](/articles/risk-of-ruin-trading/) explains why repeatedly risking more than the budget does damage that compounds faster than most traders expect. This article's contribution is narrower: in intraday trading, sizing from the stop is what stops the trader from choosing a size first — because a setup looks exciting, or because yesterday's win makes today feel safe — and then hunting for a stop distance that justifies it. A stop found to justify a size is not a stop. It is an excuse.

Then apply the skip filter. If the stop distance makes the size unworkable — so small that the trade is not worth its own attention, or so large relative to the target that the arithmetic fails — skip the trade. The common bar used here as a filter, not a promise, is a target of at least 1.5–2x the risk: on the carried example, a Rs 18 risk needs a target of at least Rs 27–36 per share to pass. A trade that cannot clear that bar on its own chart is not a trade made better by a tighter stop. It is a trade to leave alone, and leaving trades alone is a skill intraday traders underrate, because an empty hour feels like wasted opportunity while a stopped-out hour feels like bad luck. In fact the stopped-out hour costs rupees and the empty hour costs nothing.

## Step 4: Place the Stop the Moment the Entry Fills — and Pick SL or SL-M Deliberately

The stop is placed the moment the entry fills, not after the trader has watched the first candle, not "once it settles", not after lunch. A live intraday position without a stop, even for a minute, is an unprotected position in the fastest-moving part of the day, and the minute it is left unprotected is reliably the minute something moves. Place it first, then watch.

Placing it means choosing the order type deliberately, because the two order types every intraday trader meets solve different problems, and choosing the wrong one for the conditions is a real, avoidable loss.

A stop-loss limit order (SL) works in two steps: when price reaches the trigger, it creates a limit order at a price you set. That protects the price — you will not be filled worse than your limit — but it does not guarantee a fill. In a fast intraday move, price can run straight past the limit without ever trading there, and the stop sits unfilled while the loss grows. Use SL when the exact fill price matters more than guaranteed exit: a calm, liquid stock, a normal session, a stop placed well away from obvious cluster levels.

A stop-loss market order (SL-M) also triggers at a level, but it creates a market order: getting out matters more than the exact fill price. That guarantees the exit attempt — the order will trade — but not the price. In a fast move, a gap, or a spike, the fill can be noticeably worse than the trigger. Use SL-M when getting out matters more than the exact price: fast markets, news-driven moves, expiry-day swings, or any position that must be closed before the session's end regardless of price.

The rule of thumb is simple: if the market is moving fast enough that you are worried about getting out at all, that is an SL-M situation, and accepting possible slippage is the honest price of the guarantee. If the market is calm and the price matters more, SL is the honest choice, and accepting possible non-fill is its price. What is never honest is placing one type while expecting the other's guarantee — an SL that you assume will always fill, or an SL-M that you assume will fill at the trigger. Every guide that lists these two types lists the same distinction, because it is the whole story in fast intraday moves: trigger versus fill, and which one you are actually buying.


## Step 5: Manage Inside the Session — Trail, Time-Stop, and Plan the Square-Off

A stop that is placed and then never revisited is only half a system. Inside the session, three management rules are fixed in advance — before entry, in writing, alongside the stop itself — so that no decision has to be improvised while money is moving.

**Trail only in the direction that reduces risk, and only by a pre-set rule.** A trailing stop follows price in the trader's favour and never moves back. The rule used on the carried example has two stages, and both are decided before entry. Stage one: once the trade has moved favourably by Rs 30 per share, move the stop to breakeven — the entry price of Rs 1,000. At that point the risk on the trade is zero, not profit: if price reverses to Rs 1,000, the trade exits flat, having cost nothing but time. Stage two: from there, trail by ATR — the stop becomes the highest price reached minus 1.5 × ATR (Rs 18), and it never moves below breakeven.

Walk it through. Price reaches Rs 1,030: the stop moves to breakeven, Rs 1,000. Price reaches Rs 1,050: the stop trails to Rs 1,032 (Rs 1,050 minus Rs 18). A reversal to Rs 1,032 exits the trade at +Rs 32 per share, and 55 shares × Rs 32 = Rs 1,760 kept — instead of watching the whole move come back and give the gain away. Notice what the rule does not do: it never widens. A trailing stop that moves away from price to "give the trade room" is not a trailing stop. It is a widened stop, and widening is covered below as a mistake, not a technique.

Trailing also has a cost that honest guides name: a trailing stop can exit a trade that then goes on to a much larger gain. The Rs 1,032 exit keeps Rs 1,760, but if price had dipped to Rs 1,032 and then run to Rs 1,100, the trader would have left a large part of the move behind. That is the trade being made, knowingly: certainty of keeping part of the move, in exchange for the possibility of the whole move. Traders who cannot accept that exchange should not trail tightly; they should use a wider trailing multiple or trail by structure (below the latest higher low for a long) and accept giving back more. What they should not do is trail by feel, tightening when nervous and loosening when greedy, because a rule that changes with mood is not a rule.

**Add the time stop.** If a breakout has not moved as expected within a pre-set window, exit — a stalled intraday trade is a decaying trade. The window is set before entry (a number of candles, or a portion of the session, chosen by the trader and written down), and it applies even when the price stop has not been hit. The logic is specific to intraday: a swing trade can wait for its thesis to play out over days, but an intraday trade bought for a move that has not arrived is tying up attention and risk budget in a position whose reason for existing is already weakening, while the session's end approaches. Exit, free the attention, and let the next setup earn the risk budget instead.

**Plan the square-off.** The stop and the session end are both exits, and the second one needs as much planning as the first. Decide before entry at what point in the session you will close an open trade on purpose — well before the forced square-off window — and close it there, at a price you choose, rather than drifting into the window where every other unplanned position is being closed at once and prices can jump. Never carry an intraday position overnight by accident: check, before the planned close, that nothing is still open, and treat that check as part of the trade, not as admin after it. The forced square-off is not a penalty imposed by the market. It is the session's end doing what the trader was supposed to do earlier.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Trailing walk diagram — price path Rs 1,000 → Rs 1,030 → Rs 1,050 → reversal to Rs 1,032, with the stop stepping to breakeven Rs 1,000 then to Rs 1,032, and the Rs 1,760 kept gain shaded" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Trailing walk — breakeven first, then trail, never widen</text>
<text x="340" y="78" text-anchor="middle" fill="#f2f7f4" font-size="12">Price Rs 1,000 · stop Rs 982 — entry, stop placed at once</text>
<text x="340" y="116" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12">Price Rs 1,030 · stop Rs 1,000 — breakeven, risk now zero</text>
<text x="340" y="178" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="202" text-anchor="middle" fill="#f2f7f4" font-size="12">Price Rs 1,050 · stop Rs 1,032 — trail by 1.5x ATR (Rs 18)</text>
<text x="340" y="240" text-anchor="middle" fill="#e8825a" font-size="15">↓</text>
<text x="340" y="264" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Reversal exit at Rs 1,032 · +Rs 32/share · Rs 1,760 kept</text>
</svg>
</figure>

## The Intraday-Only Failure Modes

These four failures belong to intraday trading specifically. Naming them in advance is what lets a trader recognise one while it is happening, instead of afterwards.

**Opening-range noise.** The first 15–30 minutes are the noisiest part of the session. A stop sized for midday chop gets clipped at the open while the trade idea is still right, and the trader watches the stock go on to do exactly what was predicted — without them. The countermeasures are in the procedure above: size the stop from the opening range's own structure or from an ATR reading that includes the open's volatility, not from a calm midday reading; or simply wait out the opening noise before entering at all. A trade entered after the noise has settled needs a smaller, more honest stop than the same trade entered into the noise.

**Midday chop.** The middle of the session often produces tight ranges that fake breakouts in both directions: price breaks out, triggers entries, reverses, and stops out the breakout traders, then does the same on the other side. A stop placed just beyond a midday range boundary, with no buffer, is the favourite victim. The countermeasure is the buffer in the structure stop and the ATR multiple: the stop must sit beyond the range that chop routinely reaches, or the trader must accept that chop sessions are for staying out, not for trading tighter.

**News and event spikes, and expiry-day swings.** A scheduled announcement, an unexpected headline, or an expiry session can move a stock by more than any ATR multiple measured from a calm morning predicts. No multiple from a quiet morning forecasts a spike afternoon. The countermeasures are blunt and effective: know the day's events before trading, reduce size or stay out around them, and use SL-M rather than SL when exit certainty matters more than price. A stop cannot protect against a gap it was never sized for; the protection is in the decision not to be fully exposed when the gap is likely.

**Round-number clustering.** Stops pile up on obvious levels — round numbers, yesterday's high or low, the same support level every guide reader can see — and price is routinely swept through those levels before the real move begins, collecting the clustered stops on the way. The countermeasure is the buffer, again, and a willingness to place the stop somewhere slightly less obvious: below support plus a buffer, not on support itself; beyond the level, not at it. If your stop is at exactly the price every other trader's stop is at, you are not placing a stop. You are joining a queue for the same exit.

## Mistakes That Turn a Planned Loss Into an Unplanned One

**Widening the stop once price nears it.** This is the most expensive mistake in intraday trading, and the most human. Price approaches the stop, the trader moves the stop further away to "give it room", and the planned Rs 1,000 loss becomes a Rs 1,500 loss, then a Rs 2,000 loss, then a loss that hits the daily stop by itself. The stop was the plan. Moving it because the plan is about to trigger is cancelling the plan at the exact moment it exists to protect you. If a stop is wrong, the trade was wrong; exit, reassess, and re-enter on a fresh plan if the setup still justifies it. Never widen.

**Moving the stop to breakeven too early.** Moving to breakeven feels safe, but done too early — before the trade has genuinely moved in your favour — it converts a trade with room to breathe into a trade that gets stopped out flat by ordinary noise, again and again. Breakeven is stage one of trailing, and like every stage, it has a trigger: on the carried example, a Rs 30 favourable move. Before that trigger, the stop stays where the procedure put it.

**Placing the stop from the size, not the size from the stop.** Covered in Step 3, and worth repeating because it is the mistake that feels like discipline: the trader decides on 100 shares, then finds a Rs 10 stop to make the rupees work. The rupees work. The trade does not, because the stop is inside one ATR and will be hit by noise. If the stop distance gives a size you do not like, the answer is a different trade or no trade, not a different stop.

**Trading without a daily stop.** A trader with a one-trade budget but no daily stop has a speed limit but no destination: each individual loss is bounded, but the day's total is not, and the afternoon's trades are made by a trader who is already down. The daily stop is the only rule that protects the trader from themselves, and it is the rule most often broken precisely when it matters most — after the second loss, when the third trade feels like the way back.

**Watching the screen without a stop because "I am watching anyway".** This is addressed directly in the FAQs below, but it belongs here too: watching is not a stop. A fast move, a distraction, a frozen screen, or a moment's hesitation all defeat a manual exit, and they defeat it exactly when the exit matters most.

## The Pre-Trade Checklist, and a Worked Day That Ends Early

Before every intraday trade, run this checklist, in order. It takes under a minute, and it catches the sequence errors this article is about.

1. One-trade risk budget written down (carried example: Rs 1,000).
2. Daily stop written down, and not yet hit (carried example: Rs 2,000).
3. Stop basis chosen in order: structure, else ATR, percentage only as a cap (carried example: Rs 982, by both structure and ATR).
4. Size computed from the stop and floored (carried example: 55 shares).
5. Target clears the 1.5–2x filter, or the trade is skipped.
6. Order type chosen deliberately: SL or SL-M, for the conditions, not by habit.
7. Trailing rule, time stop and planned square-off point written down before entry.
8. Stop placed the moment the entry fills — no live position without a stop, not for a minute.

Now the worked day. The trader starts with the carried example's numbers. First trade: long at Rs 1,000, stop Rs 982, 55 shares. The trade fails; the stop fires at Rs 982. Loss: 55 × Rs 18 = Rs 990, inside the Rs 1,000 budget (the floored size saw to that). Second trade, same discipline, different setup: it also fails, for a similar Rs 1,000 loss. Total daily loss: about Rs 2,000. The daily stop is hit. The trader stops for the day.

Notice what did not happen. There was no third trade to "win it back". There was no widened stop on the second trade. There was no afternoon of larger size. The day ended early, down Rs 2,000 on Rs 1,00,000 of capital — a bad day, not a damaging one, and a day the trader can return from tomorrow with the system intact. That is what the daily stop buys. It does not buy winning days. It buys the right to keep trading.

## Frequently Asked Questions

### What is a stop loss in intraday trading?

A preset exit level, decided before entry, that closes the trade automatically when price reaches it. Intraday makes it non-negotiable because the position must be closed by the session's end — there is no holding overnight to wait for a recovery. The companion piece Stop Loss Meaning covers the definition in full; this article covers the session procedure around it.

### How do I calculate a stop loss for intraday trading?

Decide the risk budget first, then the stop distance, then divide: size = risk budget ÷ stop distance, floored. On the carried example: Rs 1,000 risk budget ÷ Rs 18 distance (entry Rs 1,000, stop Rs 982) = 55.55, floored to 55 shares. The planned loss is 55 × Rs 18 = Rs 990, inside the budget. Never reverse the order and pick a size first.

### What percentage stop loss is best for intraday trading?

There is no universal percentage. The commonly quoted range for a fixed-percentage intraday stop is 0.5–1% of entry, but a percentage ignores both the chart and volatility, so this article uses it only as a cap, not as the basis. On the carried example, 1% of Rs 1,000 is Rs 10, giving a stop at Rs 990 — but Rs 10 is less than one 15-minute ATR (Rs 12), so it sits inside ordinary noise and is rejected here even though it allows 100 shares. Prefer structure first, ATR second, percentage only as a check.

### Should my stop be based on percentage, support/resistance, or ATR?

In this order: structure first, ATR second, percentage last as a cap. Structure — below intraday support for a long, above resistance for a short, with a small buffer — is tied to the trade idea itself: if that level breaks, the idea is wrong. ATR — a multiple of the stock's own per-candle movement, 1.5 × Rs 12 = Rs 18 on the carried example — scales with volatility when no clean level exists. Percentage is the easiest to compute and the easiest to get wrong, because it treats a calm stock and a wild one identically.

### What is a trailing stop loss in intraday trading, and when does it hurt?

A trailing stop follows price in the trader's favour and never moves back, locking in part of a move. On the carried example the rule is two-stage: at +Rs 30, move to breakeven (Rs 1,000, risk now zero, not profit); then trail at the highest price minus 1.5 × ATR (Rs 18), so at Rs 1,050 the stop is Rs 1,032, and a reversal there keeps 55 × Rs 32 = Rs 1,760. It hurts when it exits a trade that then runs much further — the Rs 1,032 exit keeps Rs 1,760 but gives up any move beyond it. That exchange, certainty of part of the move for the possibility of the whole move, is the price of trailing, and it must be accepted knowingly, not discovered afterwards.

### SL vs SL-M — which should I use intraday?

It depends on what matters more in the moment. SL (stop-loss limit) triggers a limit order: it protects the price but does not guarantee a fill, and in a fast move it can sit unfilled while price runs past it. SL-M (stop-loss market) triggers a market order: it prioritises getting out, but does not guarantee the fill price, and in a fast move or gap the fill can be worse than the trigger. Use SL-M when getting out matters more than the exact price — fast markets, spikes, or a position that must close before the session's end. Use SL when the price matters more and the market is calm. Never expect one type to give you the other's guarantee.

### Should I move my stop loss once the trade is live?

Only in the direction that reduces risk, and only by the pre-set trailing rule. Move it to breakeven and then trail it up behind price, never back. Never widen it to "give the trade room" — widening converts a planned loss into an unplanned one, and it is done most often at the exact moment the stop exists to protect you. If the stop is wrong, the trade was wrong: exit, reassess, and re-enter on a fresh plan if the setup still justifies it.

### What is a daily stop loss, and when should I stop trading for the day?

A daily stop is a pre-set limit — a fixed number of losing trades or a fixed rupee loss — after which you stop trading for the day, without renegotiation. On the carried example it is Rs 2,000: two losing trades at Rs 1,000 each, and the day is over, no third trade. It exists because a bad morning, left unchecked, becomes a revenge-trading afternoon, and the afternoon's trades are made by a trader who is already down.

### Do I need a stop loss if I watch the screen all day?

Yes. Watching is not a stop. A fast move can run past your intended exit before you react; a distraction, a frozen screen, or a moment's hesitation defeats a manual exit exactly when it matters most; and watching every candle makes it more tempting, not less, to move the stop by feel. The stop is placed the moment the entry fills, whether you are watching or not, and it works when you cannot.

### What happens if my stop loss is not hit by market close?

The position must still be closed by the session's end — the session end is itself an exit. Plan the square-off before entry: close open trades on purpose, at a planned point before the forced square-off window, at a price you choose, rather than drifting into the window where unplanned positions are all being closed at once. And check that nothing is still open before that point: never carry an intraday position overnight by accident.

## What a Stop Loss Cannot Do

A stop loss cannot guarantee an exit price, and a limit stop cannot guarantee a fill at all. It cannot distinguish a noise dip from a genuine reversal in real time — that is why buffers and ATR multiples exist, and why they sometimes still fail. It cannot make a bad trade good, or a strategy with no edge profitable; it can only bound what a wrong trade costs. It cannot protect against a gap larger than its distance, and it cannot stop a trader from widening it, cancelling it, or trading past a daily stop. Those last protections are not in the order. They are in the trader, and they are the reason the rules in this article are written down before the session, not decided during it.

What a stop loss can do, done the way this article sets out, is narrower and more valuable: it can make every intraday loss a known, bounded, pre-accepted number; it can make every day's worst case a number chosen in the morning, not discovered in the afternoon; and it can keep a trader in the game long enough for an edge, if one exists, to show up in results rather than being erased by a single session. The companion pieces carry the rest of the system — Stop Loss Meaning for the definition, Stop Loss in Trading for placement in general, and Stop Loss for Options Trading for the options-specific version of this procedure — and a crypto stop-loss companion covers that market separately. Start here, with the session procedure, and the rest of the system slots into place around it.

*This article is for education only. It is not investment advice, and the author is not a registered investment adviser. Trading involves risk of loss, including the loss of capital; no stop loss method removes that risk.*
---
title: "Stop Loss in Trading: The Complete Guide"
description: "Stop loss placement, sizing from the stop, and trailing rules in one complete system — with a worked example, so every trade enters with its exit decided."
meta_description: "Stop loss placement, sizing from the stop, and trailing rules in one complete system — with a worked example, so every trade enters with its exit decided."
date: 2026-11-15
author: Kaizen
tag: "Risk management · Stop loss"
keywords: ["stop loss in trading", "how to set a stop loss", "stop loss placement", "stop loss methods", "ATR stop loss", "trailing stop loss", "percentage stop loss", "structure stop loss", "stop loss vs take profit", "stop loss mistakes"]
---

*By Kaizen · 15 November 2026 · Monks Of Market*

Most traders choose their stop loss backwards. They decide how much they are willing to lose, or how many shares they want to buy, and then they fit a stop to that decision. The stop ends up wherever the arithmetic is convenient — a round number, a fixed percentage, a comfortable distance from the entry — instead of where the trade idea actually dies.

This guide fixes that order. A stop loss is placed at the invalidation level: the price at which the reason for entering the trade is no longer true. The distance from the entry to that level then decides the position size. And the rule for moving the stop is decided before entry, not during the trade, when hope is doing the thinking. Follow that order on every trade and the stop stops being a source of frustration and becomes what it is meant to be: the cheapest, clearest exit in your system.

This is educational content only. The author is not SEBI-registered, nothing here is investment advice, and no stop loss method guarantees a profit or prevents losses.

## Stop Loss in Trading: Where the Idea Dies, Not Where the Pain Starts

Here is the whole guide in one paragraph. Before you enter a trade, find the price that proves your idea wrong. Put the stop just beyond it. Measure the distance from your entry to that stop. Divide the rupees you are willing to risk on this trade by that distance, and that is your position size. Decide in advance when, if ever, the stop moves — to breakeven, then trailing in your favour, never further away. And after a stopped-out trade, ask whether the stop was wrong or the trade was wrong, because those are different failures with different fixes. Everything below is that paragraph, expanded.

## The One-Sentence Job of a Stop Loss

A stop loss is a pre-set exit level that closes a trade automatically when price reaches it, so that a single bad trade cannot become a catastrophic one. It caps the loss on the trade before emotions get a vote.

That is the whole recap, deliberately. The full definition — what kind of instruction a stop is, how it behaves once triggered, and which order types carry it — belongs to the companion guide Stop Loss Meaning, and this guide does not re-teach it. If you have never used a stop before, read that guide first; what follows assumes you already know roughly what a stop is and now need a system for placing one.

## The Invalidation Principle

Every trade is a claim about the market. A long trade claims that buyers are in control above some level; a short trade claims sellers are in control below one. The invalidation level is the price that disproves that claim. For a long trade, it is usually just below a support level or a recent swing low: if price falls through that floor, buyers were not in control after all. For a short trade, it is just above resistance or a recent swing high.

The word "just" matters. The stop goes beyond the level, not on it, because levels are tested. Price routinely dips a little below support and recovers; a stop sitting exactly on support gets filled by the test, not by the breakdown. Giving the level a small buffer — a few rupees in our example, enough to clear the noise around the level — is what separates a stop placed at invalidation from a stop placed at the most obvious target for a shakeout.

The deeper point is psychological, and it is the reason most stops fail. Traders place stops where the loss starts to hurt, or where they feel comfortable, and then defend that placement as if comfort were analysis. Pain is not information. A stop placed at "I can afford to lose this much" has no relationship to whether the trade idea is still valid. A stop placed at invalidation has exactly one job: to get you out the moment the market tells you that you were wrong, and not one rupee sooner.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Stop loss placement diagram showing entry at Rs 1,000, support at Rs 960, and the stop loss placed just below support at Rs 950." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Invalidation first — stop sits below support, not on it</text>
<text x="340" y="78" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Entry Rs 1,000 — the trade idea starts here</text>
<text x="340" y="120" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="146" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Support Rs 960 — the level the idea rests on</text>
<text x="340" y="188" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="214" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Stop Rs 950 — just below support, Rs 10 buffer</text>
<text x="340" y="300" text-anchor="middle" fill="#92a59c" font-size="12">Buffer keeps ordinary touches from stopping you out</text>
</svg>
</figure>

One carried example runs through this entire guide, so every method below can be compared on identical numbers. The setup: capital of Rs 1,00,000, risk of 1% of capital per trade, which is Rs 1,000. Entry at Rs 1,000. Support at Rs 960. Keep those numbers in mind; every method below is applied to this same trade.

## Five Placement Methods, One Trade: Structure, ATR, Percentage, Indicator, Time

There are five ways traders commonly place stops. They are not equals. One of them — structure — should be the default. One — volatility, through ATR — is the best backup when structure is unclear. One — percentage — is a sanity cap, not a method. And two — indicator and time — are supplements with specific jobs. Judged on the same trade, the differences become concrete.

### Structure Stops: Beyond Support or Resistance

The structure stop is placed just beyond the level that, if broken, invalidates the trade. In our example, support is Rs 960, so the stop goes just below it at Rs 950. The distance is Rs 50. With Rs 1,000 at risk, the position is Rs 1,000 ÷ Rs 50 = 20 shares, worth Rs 20,000 at the Rs 1,000 entry.

Structure stops fit whenever the chart gives you a clear level: a support or resistance zone, a swing high or low, a range boundary. They fit because they are tied to the market's own structure rather than to your preferences. They fail when there is no clear level — in a strong trend with no recent swing to anchor to, or in a choppy range where every level has been broken repeatedly. In those cases, reach for the ATR stop below rather than inventing a level.

The common error with structure stops is placing them exactly on the level instead of beyond it, and the common refinement is sizing the buffer to the market's noise: in a quiet stock a small buffer is enough; in a volatile one, the buffer needs to be wider, which is precisely what the ATR method formalises.

### ATR Stops: Let Volatility Set the Distance

The Average True Range (ATR) measures how much a stock typically moves over a recent period. An ATR stop places the exit a multiple of that typical movement away from the entry, so the stop automatically widens in volatile conditions and tightens in quiet ones. The multiples most commonly used are 1.5x to 2x ATR, with some guides going up to 3x.

In our example, suppose the ATR is Rs 30. A 2x ATR stop sits Rs 60 from the entry, at Rs 940, giving a position of Rs 1,000 ÷ Rs 60 = 16 shares (16.67 floored, since you cannot buy a fraction of a share in this example). A 1.5x ATR stop sits Rs 45 away, at Rs 955, giving 22 shares (22.22 floored). A 3x ATR stop sits Rs 90 away, at Rs 910, giving 11 shares (11.11 floored).

Notice what the multiple does. A wider multiple means fewer stop-outs from ordinary noise, but a larger loss when the stop is hit — and therefore a smaller position, because the same Rs 1,000 of risk is spread over a longer distance. There is no free choice here: distance and size are two sides of one decision, and the ATR multiple is how you trade one against the other. ATR stops fit best when structure is unclear, when volatility has recently changed, or as a cross-check on a structure stop: if your structure stop is far tighter than 1.5x ATR, ordinary noise alone is likely to stop you out, and you should either widen the stop (and shrink the size) or skip the trade.

### Percentage Stops: Simple, Arbitrary, Sometimes Useful

A percentage stop risks a fixed percentage of the entry price: for example, 2% below the entry for a long trade. In our example, 2% of Rs 1,000 is Rs 20, so the stop sits at Rs 980 and the position is Rs 1,000 ÷ Rs 20 = 50 shares. A 1% stop sits at Rs 990 and gives 100 shares.

Percentage stops are popular because they are effortless: no chart reading, no volatility calculation. That is also their flaw. The percentage has no relationship to the stock, the setup, or the market. A 2% stop on a stock that routinely moves 4% a day will be hit by noise; the same 2% stop on a slow stock may be so wide that the loss, when it comes, is far larger than the trader imagined. Used as the primary method, a percentage stop is arbitrary. Used as a sanity cap, it is genuinely useful: if your structure stop implies risking far more than your usual percentage, that is a warning to check the trade, not to override the structure stop with the percentage. The method decides the level; the percentage only flags when the level looks extreme.

### Indicator Stops: Below the Moving Average and Friends

An indicator stop places the exit just beyond a technical indicator: below a moving average for a long trade, beyond a trend line, or outside a volatility band. Suppose the relevant moving average sits at Rs 970 in our example; a stop just below it at Rs 960 gives a distance of Rs 40 and a position of Rs 1,000 ÷ Rs 40 = 25 shares.

Indicator stops fit trend-following trades, where the indicator itself is part of the trade's logic: if price closes below the average you are following, the trend claim is damaged. They fail in sideways markets, where price crosses the average constantly and the stop fires on every crossing. They also lag: a moving average is an average of past prices, so by the time it turns, price may already be well past it. Treat an indicator stop as a trend-health check, not as a precision instrument, and prefer structure when a clean level exists.

### Time Stops: When the Trade Has Not Worked

A time stop exits a trade that has not moved in your favour within a set period — say, a few sessions for a swing trade — regardless of price. It is not a price level at all; it is a deadline. Its job is to free capital from dead trades: a trade that goes nowhere is tying up money that could be working elsewhere, and a trader holding it is spending attention on a position with no payoff.

A time stop is a supplement, never a sole stop. A trade can go badly wrong long before its deadline, and only a price stop protects against that. Use the time stop alongside a price stop: the price stop caps the loss, the time stop caps the wasted time. Traders who hold losing, motionless trades for weeks "because the stop has not been hit yet" are missing half the system.

### The Methods Compared on One Trade

| Method | Stop level | Distance from Rs 1,000 entry | Position (Rs 1,000 risk) | Best when |
|---|---|---|---|---|
| Structure (support Rs 960) | Rs 950 | Rs 50 | 20 shares | A clear level exists |
| ATR 2x (ATR Rs 30) | Rs 940 | Rs 60 | 16 shares | Structure unclear, volatility changed |
| ATR 1.5x | Rs 955 | Rs 45 | 22 shares | Tighter volatility-based stop wanted |
| Percentage 2% | Rs 980 | Rs 20 | 50 shares | Only as a sanity cap, not the method |
| Indicator (average Rs 970) | Rs 960 | Rs 40 | 25 shares | Trend-following trades |
| Time | No price level | — | — | Supplement only, with a price stop |

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Comparison chart of stop loss methods on the same trade: structure stop Rs 50 away, ATR stop Rs 60 away, percentage stop Rs 20 away from a Rs 1,000 entry." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same Rs 1,000 risk, three distances — size follows the stop</text>
<rect x="115" y="108" width="70" height="142" fill="#e8825a"/>
<text x="150" y="98.33333333333334" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Rs 50 · 20 shares</text>
<text x="150" y="272" text-anchor="middle" fill="#f2f7f4" font-size="12">Structure</text>
<rect x="305" y="80" width="70" height="170" fill="#e8825a"/>
<text x="340" y="70.0" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Rs 60 · 16 shares</text>
<text x="340" y="272" text-anchor="middle" fill="#f2f7f4" font-size="12">ATR 2x</text>
<rect x="495" y="193" width="70" height="57" fill="#e8825a"/>
<text x="530" y="183.33333333333334" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Rs 20 · 50 shares</text>
<text x="530" y="272" text-anchor="middle" fill="#f2f7f4" font-size="12">Percentage 2%</text>
<line x1="60" y1="250" x2="620" y2="250" stroke="#92a59c" stroke-width="1"/>
<text x="340" y="292" text-anchor="middle" fill="#92a59c" font-size="12">Wide stop: hit less often, loses more per hit</text>
</svg>
</figure>

The table makes the core lesson visible: the same Rs 1,000 of risk buys 50 shares with a tight percentage stop and 16 shares with a wide ATR stop. Neither is "better" in isolation. The wide stop is hit less often by noise but loses more when hit; the tight stop loses less per hit but gets hit more often. What matters is that the level comes first and the size follows from it — never the reverse.

## The 5-Step Pre-Trade Procedure

Run these five steps before every trade, in order, and write the answers down before you enter. A stop decided in advance is a system; a stop decided mid-trade is a negotiation with yourself, and you will lose it.

**Step 1: Find the invalidation level.** Ask: at what price is this trade idea wrong? Look for structure first — support or resistance, a swing level, a range boundary. If no clean level exists, use ATR (commonly 2x) to set the distance. Use a percentage only as a sanity check on the result, never as the level itself.

**Step 2: Measure the stop distance.** Entry minus stop for a long trade; stop minus entry for a short trade. In our example, Rs 1,000 − Rs 950 = Rs 50. If the distance looks absurdly large or small compared with how the stock normally moves, go back to Step 1 — something about the level is off.

**Step 3: Size the position from the distance.** Divide the rupees you will risk on this trade by the distance. Rs 1,000 ÷ Rs 50 = 20 shares. If the resulting size is unworkable — too small to be worth the effort, or so large that it breaches your total exposure — the answer is not to move the stop. The answer is to skip the trade or reduce the risk amount. A commonly cited guideline is risking 1–2% of capital per trade; treat it as a starting point to test against your own system, not as a guarantee of safety. The companion guide on position sizing works through this conversion in full, and the guide on risk of ruin explains why keeping per-trade risk small is what keeps a string of losses survivable. Both are linked at the end of this article.

**Step 4: Decide the management rule in advance.** Write down when, if ever, the stop moves. The two legitimate moves are to breakeven once the trade has moved meaningfully in your favour, and then trailing in your favour as price continues. Everything else — especially moving the stop further away — is decided now as forbidden, while you are calm, rather than later, while you are losing.

**Step 5: Review stopped-out trades.** After the exit, ask one question: was the stop wrong, or was the trade wrong? A stop that fired exactly at invalidation on a trade idea that was simply wrong did its job perfectly; changing the stop method after such a loss is fixing the wrong part. A stop that fired on noise before the idea had a chance to play out is a placement failure; that is when the method, the buffer, or the ATR multiple needs adjusting. Keeping a short note on each stopped-out trade — level, reason, verdict — is how a placement system improves instead of just repeating.

If any step cannot be completed — no invalidation level exists, the distance makes the size unworkable, the risk-to-reward is unworkable — do not enter the trade. A skipped trade costs nothing. A trade entered without an exit plan costs whatever the market decides to take.

## Trailing Stops: Moving Only in Your Favour

A trailing stop follows price upward on a long trade (or downward on a short trade), maintaining a fixed distance behind it, and it never moves backwards. It converts an open-ended gain into a progressively protected one: each new high in your favour raises the floor under the trade, and the floor never drops again.

Return to the example. The trade is long at Rs 1,000 with a Rs 50 trail. Price rises to Rs 1,100. The stop moves to Rs 1,100 − Rs 50 = Rs 1,050. From here, two outcomes exist and both are acceptable: if price pulls back to Rs 1,050, the trade exits with Rs 50 per share kept — Rs 1,000 across the 20-share position. If price continues higher, the stop keeps stepping up behind it, and the kept gain keeps growing. The trail trades one thing for another: it gives up some of the maximum possible gain in exchange for protecting most of the gain from an ordinary reversal.

Trailing helps most in strong trends and in strategies that depend on occasional big winners: it lets winners run while protecting most of the gain from an ordinary reversal (gaps can still slip past the stop). It harms in choppy, sideways markets, where price oscillates without trending: a tight trail gets triggered by every oscillation, producing a string of small exited trades that would each have recovered. It also harms when the trail is set too tight for the stock's volatility — a Rs 20 trail on a stock that routinely swings Rs 40 in a session is not protection, it is an exit timer. Match the trail distance to volatility the same way you match the initial stop: a common approach is to trail by the same distance or multiple you used for the initial stop, and to start trailing only after the trade has moved meaningfully in your favour, rather than from the first rupee of profit.

The breakeven move deserves its own note because it is the most misused "safe" move. Moving the stop to your entry price once the trade is profitable feels risk-free — you cannot lose on the trade anymore. But a stop at breakeven is still a stop: it can be hit by a normal pullback, closing a trade that would have gone on to win, and a string of breakeven exits is a string of wasted opportunities. Move to breakeven only when the trade has moved far enough that a return to entry genuinely means the idea has weakened, not merely that price breathed. And remember the iron rule of trailing: the stop moves in your favour or not at all. The moment a stop moves away from price to give a losing trade "more room", it is no longer a stop — it is a hope, and hope is not a risk control.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Trailing stop ladder diagram: as price rises from Rs 1,000 to Rs 1,100, the stop loss steps up from Rs 950 to Rs 1,050 and never moves back." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Trailing ladder — the stop steps up only, never back</text>
<text x="340" y="78" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Price Rs 1,000 · stop Rs 950 — the starting position</text>
<text x="340" y="120" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="146" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Price Rs 1,100 · stop Rs 1,050 — stop steps up Rs 100</text>
<text x="340" y="188" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<text x="340" y="214" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Price falls back · stop stays Rs 1,050 — never moves down</text>
<text x="340" y="300" text-anchor="middle" fill="#92a59c" font-size="12">Exit at Rs 1,050 keeps Rs 50 per share on 20 shares</text>
</svg>
</figure>

## Five Classic Stop Loss Mistakes

**1. The arbitrary percentage.** Picking "2%" because it sounds disciplined, with no reference to the stock's structure or volatility. Fix: let structure or ATR set the level; use the percentage only as a sanity cap.

**2. The round-number stop.** Placing the stop at Rs 1,000, Rs 950, or any other round figure because it is easy to remember. Round numbers attract clustered stops from many traders, which makes them magnets for sharp moves that trigger the cluster and then reverse. Fix: place the stop at invalidation plus a buffer, even if the resulting number is ugly — Rs 947 beats Rs 950 if Rs 947 is where the idea dies.

**3. Moving the stop away.** Widening the stop mid-trade to avoid being stopped out. This converts a planned small loss into an unplanned large one, and it teaches the trader that stops are negotiable, which makes the next widening more likely. Fix: decide the management rule before entry, and treat a stop moved away as a broken rule to log, not a decision to defend.

**4. No stop, or a "mental stop" never honoured.** Trading without a stop, or with a level "in mind" that is abandoned the moment price approaches it. A mental stop has no mechanism; under stress, the mind renegotiates. Fix: the stop is placed with the order, before entry, every time. No exceptions for trades you feel confident about — confidence is when you need it most.

**5. Sizing first, then forcing the stop to fit.** Deciding to buy 100 shares and then placing the stop wherever 100 shares implies an acceptable loss. This inverts the system: the stop distance should decide the size, never the reverse. Fix: run the procedure in order — level, distance, size — and skip the trade if the size does not work.

## Stop Loss, Take Profit, and Position Size as One System

A stop loss alone is half a system. Before entry, three numbers must agree with each other: the stop (where you are wrong), the take-profit target (where you will bank the gain), and the position size (how much the distance lets you hold). The check that binds them is risk versus reward. In our example, the structure stop risks Rs 50 per share; if the target is Rs 1,100, the reward is Rs 100 per share, a 2-to-1 ratio: two rupees of potential gain for each rupee risked. That ratio is checked before entry, because after entry the temptation is to move the target, move the stop, or both, until any ratio can be justified.

The three pieces also explain why position sizing articles always start from the stop. The risk amount (Rs 1,000 in our example) is a capital decision; the stop distance (Rs 50) is a market decision; the size (20 shares) is simply their quotient. Change the stop and the size must change with it — a trader who keeps the size fixed while widening the stop has silently multiplied their risk. For the full treatment of that conversion, see the position sizing guide linked at the end of this article; for why keeping each loss small is what keeps a trading account alive through losing streaks, see the risk of ruin guide linked there too.

## The Honest Limits of a Stop Loss

A stop loss is necessary, and it is not sufficient, and it is not magic. Four limits must stay in view.

First, a stop guarantees neither price nor fill in gaps and fast moves. If a stock closes at Rs 1,000 and opens at Rs 900, a stop at Rs 950 does not produce an exit at Rs 950 — the market never traded there, and the exit happens near the open instead. Slippage is not a malfunction; it is the market reminding you that a stop is an instruction to exit, not a contract at a price.

Second, obvious levels attract clustered stops. When many traders place stops at the same round number, the same recent low, or the same moving average, a sharp move through that level can trigger many exits at once and then reverse. A buffer beyond the level, and a preference for less obvious invalidation points, reduces — but never eliminates — this risk.

Third, a stop does not make a bad strategy good. A system that loses on most trades will still lose with perfect stops; the stops only control the size of each loss. If review after review shows the trades were wrong rather than the stops, the fix is the strategy, not the placement method.

Fourth, a stop is only as good as the trader's willingness to leave it alone. Every rule in this guide is easy to write down and hard to follow at the moment price approaches the level. That is why the procedure is run before entry, in writing, when nothing is at stake yet. Discipline is not a personality trait; it is a pre-commitment device, and the stop is the simplest one a trader owns.

## Frequently Asked Questions

**How do I set a stop loss in trading?**

Find the invalidation level first — the price at which your trade idea is wrong, usually just beyond support for a long trade or resistance for a short trade. Place the stop just beyond that level, measure the distance from your entry, and divide the rupees you will risk by that distance to get your position size. Decide before entry when, if ever, the stop moves.

**What percentage should I set my stop loss at?**

There is no universal percentage, because the right distance depends on the stock's structure and volatility, not on a fixed number. A 2% stop on a stock that moves 4% a day will be hit by ordinary noise, while the same 2% on a slow stock may be far too wide. Use a percentage only as a sanity cap: if your structure or ATR stop implies a percentage far outside your usual range, check the trade before entering.

**Where exactly should I place a stop loss — below support, or a fixed distance?**

Below support (for a long trade), with a small buffer beyond it — not on support itself, which gets tested, and not at an arbitrary fixed distance, which has no connection to the trade idea. If no clear support exists, use a volatility-based distance such as 2x ATR instead.

**What is an ATR stop loss, and what multiple should I use?**

An ATR stop places the exit a multiple of the Average True Range — a measure of the stock's typical movement — away from the entry, so the stop widens in volatile conditions and tightens in quiet ones. Multiples of 1.5x to 2x ATR are the most commonly used, with some guides going to 3x. A wider multiple means fewer noise stop-outs but a larger loss per hit, and therefore a smaller position for the same risk.

**What is a trailing stop loss, and when does it hurt?**

A trailing stop follows price in your favour at a fixed distance and never moves backwards, progressively locking in gains. It hurts in choppy, sideways markets, where it exits trades on every oscillation, and when the trail is too tight for the stock's volatility, which turns it into an exit timer rather than protection. It helps most in strong trends and in strategies that depend on occasional big winners.

**Should I ever move my stop loss?**

Only in your favour, and only under a rule decided before entry: to breakeven once the trade has moved meaningfully, and then trailing as price continues. Never move a stop further away to avoid being stopped out — that converts a planned small loss into an unplanned large one and teaches you that stops are negotiable.

**Does a stop loss guarantee I exit at that price?**

No. In gaps and fast moves, the market may never trade at your stop level, and the exit happens at the next available price, which can be worse. Slippage is a normal market mechanic, not a malfunction. Size positions knowing that the actual loss on a gapped trade can exceed the planned loss.

**Why do I keep getting stopped out before the price reverses?**

Usually one of three causes: the stop sits exactly on an obvious level that gets tested, the stop is tighter than the stock's normal noise (check it against ATR), or the buffer beyond the level is too small. Review each stopped-out trade and record whether the stop was wrong or the trade was wrong — only the first case calls for changing the placement.

**How does a stop loss relate to position size?**

The stop decides the size, not the reverse. Divide the rupees you will risk on the trade by the distance from entry to stop, and the result is the position: Rs 1,000 of risk divided by a Rs 50 distance is 20 shares; the same risk divided by a Rs 60 distance is 16 shares. Keeping the size fixed while widening the stop silently multiplies your risk.

**Stop loss vs take profit — how do they work together?**

They are the two pre-decided exits of a single plan: the stop marks where you are wrong, the target marks where you bank the gain, and their ratio — reward divided by risk — is checked before entry. In the worked example, risking Rs 50 per share for a Rs 100 target is a 2-to-1 ratio. Checking it after entry invites moving both levels until any ratio can be justified.

**Is a stop loss enough on its own to manage risk?**

No. A stop caps the loss on one trade, but risk management also needs a position size derived from the stop, a per-trade risk amount kept small relative to capital, and a strategy worth trading in the first place. A perfect stop on a bad strategy still loses money — it only loses it in controlled pieces.

**What is a time-based stop loss?**

A time stop exits a trade that has not moved in your favour within a set period, regardless of price, to free capital from dead trades. It is a supplement to a price stop, never a replacement: a trade can go badly wrong long before its deadline, and only a price stop protects against that.

## Where to Go Next

If you have not yet read the definitional companion, the guide Stop Loss Meaning covers what a stop loss is, how it behaves once triggered, and which order types carry it. Separate guides cover stop loss for options trading, stop loss for intraday trading, and stop loss for crypto trading; each applies this core placement system to its own segment's conditions, and none of their methods are needed to use this guide. For the two live companions most directly connected to this system, see the [position sizing guide](/articles/position-sizing/) for the full size-from-stop conversion, and the [risk of ruin guide](/articles/risk-of-ruin-trading/) for why small, consistent per-trade risk is what keeps an account alive through losing streaks.

The procedure itself fits on an index card: invalidation level, distance, size from distance, management rule fixed in advance, review after exit. Run it before every trade, in writing, and the stop becomes the least emotional part of your trading — which is exactly what it was designed to be.
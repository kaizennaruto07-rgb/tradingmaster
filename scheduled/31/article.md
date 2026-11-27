---
title: "Option Trading Strategies: The Complete Guide"
description: "Option strategies by market view: straddle, strangle, iron condor, butterfly, covered call, protective put — breakeven, max profit, max loss, when each fails."
meta_description: "Option strategies by market view: straddle, strangle, iron condor, butterfly, covered call, protective put — breakeven, max profit, max loss, when each fails."
date: 2026-11-09
author: Kaizen
tag: "Indian options · Strategies"
keywords: ["option trading strategies", "option strategies by market view", "long straddle breakeven", "iron condor max loss", "covered call vs protective put", "how to choose an option strategy"]
---

*By Kaizen · 9 November 2026 · Monks Of Market*

Most guides to option trading strategies hand you a list. A straddle is this, a strangle is that, an iron condor is something else — twenty definitions, no decision. That is backwards. You do not pick a strategy and then hope the market cooperates. You start with a view — a big move coming, a range holding, a stock you already own — and then you pick the combination of option legs that expresses exactly that view, with a risk you can state in advance.

This guide is a map, not six mini-guides. It covers the six strategies that form the core of this series — long straddle, long strangle, iron condor, butterfly spread, covered call and protective put — one compact section each, in the same template every time: setup, market view, breakeven, max profit, max loss, and when it fails. The full payoff diagrams, full worked examples and adjustment rules for each strategy live in its own dedicated guide in this series; here you get enough to choose correctly, and pointers to go deeper.

This is educational content only, not investment advice. The author is not SEBI-registered. Every strategy here can lose money, including the full premium paid, and some can lose much more if used without their hedges. Nothing here promises a return.

## What an Option Strategy Actually Is

An option is a contract, not a share. A call gives you the right to buy the underlying at a fixed strike price before or on expiry; a put gives you the right to sell it at the strike. The premium is the price of that right — paid by the buyer, received by the seller. A strategy is simply a combination of two or more such legs, chosen so that the combined payoff matches a market view: direction, volatility, time, income or protection.

That last sentence is the whole subject. A single bought call bets on direction. A straddle bets on movement itself, in either direction. An iron condor bets on stillness. A protective put bets on nothing at all — it buys insurance for something you already own. If you cannot state your view in one sentence, you do not yet have a strategy; you have a guess with extra legs.

Two conventions run through every example below. First, all breakevens, maximum profits and maximum losses are at expiry, before charges, unless stated otherwise. Before expiry, time value and volatility change what a position is worth, so a position can be closed at a profit or loss well before its expiry payoff. Second, figures are per share (per unit of the underlying). An option contract covers a lot of units, so multiply every per-share figure by the contract's lot size to get the real rupee amount — and check that amount before you trade, because a small-looking premium becomes a large outlay once the lot is applied.

On charges: NSE equity-options charges are 0.03553% per side all-in (Rs 3,553 per crore in total), with the revised split from 1 March 2026 of Rs 3,552.99 transaction charge plus Rs 0.01 IPFT. Charges are one reason the examples below are labelled "before charges": on small-premium strategies they are not negligible, and a full breakdown lives in the companion piece on options trading charges in India. Brokerage, taxes and other charges sit on top of the exchange figure.

## Start With Your Market View: The Chooser

Decide in this order: market view first, then volatility view, then whether the risk is defined, then whether you can afford the position in lots. The table below is the article in miniature. Read it before any strategy section.

| Your view | Strategy | You pay or receive | Risk shape |
|---|---|---|---|
| A big move is coming, direction unknown | Long straddle | Pay a debit (both premiums) | Defined: max loss is the total premium |
| A big move is coming, direction unknown, and you want a cheaper ticket | Long strangle | Pay a smaller debit | Defined: max loss is the total premium, but a bigger move is needed |
| The market stays in a range, volatility falls or stays low | Iron condor | Receive a net credit | Defined: max loss is spread width minus credit |
| The market lands almost exactly on one price | Butterfly spread | Pay a net debit | Defined: max loss is the net debit |
| You own the underlying and want income from it | Covered call | Receive a premium | Capped upside; downside still substantial |
| You own the underlying and want a floor under it | Protective put | Pay a premium | Defined floor; upside kept, minus the premium cost |

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Option strategy chooser by market view: big move to straddle or strangle, range to iron condor or butterfly, holding to covered call or protective put." class="viz">
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Start with your market view, then pick the strategy</text>
<rect x="30" y="60" width="270" height="44" fill="#2a3a34"/><text x="165" y="87" text-anchor="middle" fill="#f2f7f4" font-size="13">Big move, direction unknown</text>
<text x="330" y="87" text-anchor="middle" fill="#92a59c" font-size="16">→</text>
<rect x="370" y="60" width="280" height="44" fill="#2a3a34"/><text x="510" y="87" text-anchor="middle" fill="#f2f7f4" font-size="13">Straddle · Strangle — pay debit</text>
<rect x="30" y="130" width="270" height="44" fill="#2a3a34"/><text x="165" y="157" text-anchor="middle" fill="#f2f7f4" font-size="13">Range holds, volatility falls</text>
<text x="330" y="157" text-anchor="middle" fill="#92a59c" font-size="16">→</text>
<rect x="370" y="130" width="280" height="44" fill="#2a3a34"/><text x="510" y="157" text-anchor="middle" fill="#f2f7f4" font-size="13">Iron condor · Butterfly — defined</text>
<rect x="30" y="200" width="270" height="44" fill="#2a3a34"/><text x="165" y="227" text-anchor="middle" fill="#f2f7f4" font-size="13">Already holding the underlying</text>
<text x="330" y="227" text-anchor="middle" fill="#92a59c" font-size="16">→</text>
<rect x="370" y="200" width="280" height="44" fill="#2a3a34"/><text x="510" y="227" text-anchor="middle" fill="#f2f7f4" font-size="13">Covered call · Protective put</text>
<text x="340" y="280" text-anchor="middle" fill="#92a59c" font-size="12">Every row is defined-risk when hedged as described — no naked short legs</text>
</svg>
</figure>

No row in that table is "the best strategy". There is no best strategy in general — only a fit between a view and a payoff. Anyone crowning one strategy for all markets is selling, not teaching. The rest of this guide works through each row in turn.

## Big Move, Direction Unknown: Long Straddle and Long Strangle

These two are the volatility pair. You buy them when you expect a large move but genuinely do not know its direction — typically around a known event such as results or a major announcement. You are paying for movement itself. If the market stands still, time decay eats both positions day by day, and that is not a defect: it is the price of the bet.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Straddle versus strangle payoff shapes at expiry: straddle V-shape, strangle flat-bottomed U-shape." class="viz">
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Volatility pair at expiry: straddle vs strangle</text>
<line x1="60" y1="260" x2="620" y2="260" stroke="#92a59c" stroke-width="1"/>
<polyline points="60,70 340,230 620,70" fill="none" stroke="#e8825a" stroke-width="3"/>
<polyline points="60,90 200,200 480,200 620,90" fill="none" stroke="#f2f7f4" stroke-width="3"/>
<line x1="242" y1="60" x2="242" y2="260" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="438" y1="60" x2="438" y2="260" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<text x="242" y="278" text-anchor="middle" fill="#e8825a" font-size="12">BE 24,650</text>
<text x="438" y="278" text-anchor="middle" fill="#e8825a" font-size="12">BE 25,350</text>
<text x="60" y="50" fill="#e8825a" font-size="12">Straddle (V)</text>
<text x="480" y="50" fill="#f2f7f4" font-size="12">Strangle (flat U)</text>
<text x="340" y="248" text-anchor="middle" fill="#92a59c" font-size="12">Strike 25,000 — straddle max loss ₹350, strangle max loss ₹185</text>
</svg>
</figure>

### Long Straddle

**Setup.** Buy a call and a put at the same strike, same expiry. One illustration, used consistently: the underlying trades at ₹25,000, you buy the 25,000 call for ₹180 and the 25,000 put for ₹170. Total premium paid: ₹350 per share.

**Market view.** A big move in either direction, larger than the premium paid.

**Breakeven.** Strike ± total premium: ₹25,000 − ₹350 = ₹24,650 on the downside, and ₹25,000 + ₹350 = ₹25,350 on the upside. The underlying must move beyond one of those levels by expiry for the position to profit.

**Max profit.** Unlimited in theory on the call side if the underlying keeps rising; on the put side it is bounded, because the underlying cannot fall below zero — at most the strike minus the premium, ₹24,650 per share, if it fell to zero.

**Max loss.** The total premium paid, ₹350 per share, if the underlying expires exactly at the strike. That is the defined-risk appeal: you know the worst case before you enter.

**When it fails.** In a flat market, both legs decay and you lose the premium gradually, then entirely. The second failure is subtler: if you buy before a big event, the premiums already contain high expected volatility. When the event passes without a large enough move, volatility collapses — the so-called volatility crush — and both legs can lose value even if the underlying moves a little in your favour. A straddle is a bet that the actual move beats the move already priced in, not merely that "something happens".

Full guide: Long Straddle Strategy — coming in this series.

### Long Strangle

**Setup.** Buy an out-of-the-money put and an out-of-the-money call at different strikes, same expiry. Illustration: buy the 24,500 put for ₹90 and the 25,500 call for ₹95. Total premium paid: ₹185 per share — cheaper than the straddle above, deliberately so.

**Market view.** The same as a straddle — a big move, direction unknown — but you are willing to accept a higher hurdle in exchange for a lower ticket price.

**Breakeven.** Put strike − total premium = ₹24,500 − ₹185 = ₹24,315 on the downside; call strike + total premium = ₹25,500 + ₹185 = ₹25,685 on the upside. Compare the straddle's ₹24,650/₹25,350: the strangle needs a materially larger move.

**Max profit.** Unlimited in theory on the call side; bounded on the put side by the put strike minus the premium.

**Max loss.** The total premium paid, ₹185 per share, if the underlying expires anywhere between the two strikes.

**When it fails.** Exactly like the straddle, only more so: flat markets bleed it through time decay, and a post-event volatility collapse hurts it. Because both legs start out-of-the-money, even a decent move that stops between a strike and its breakeven still loses money. The strangle is cheaper, not safer — it trades a lower cost for a lower probability of profit.

Full guide: Long Strangle Strategy — coming in this series.

## Range-Bound Markets: Iron Condor and Butterfly Spread

This pair bets on stillness rather than movement. Both collect value when the underlying stays put — but they differ in how wide the winning zone is, and that difference is the whole choice between them. Neither is set-and-forget. A breakout hurts both, and both need an exit plan before entry, not after the breakout.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Iron condor versus butterfly payoff shapes at expiry: condor flat profit plateau, butterfly peaked profit at the middle strike." class="viz">
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Range pair at expiry: condor plateau vs butterfly peak</text>
<line x1="60" y1="260" x2="620" y2="260" stroke="#92a59c" stroke-width="1"/>
<polyline points="60,240 200,90 480,90 620,240" fill="none" stroke="#e8825a" stroke-width="3"/>
<polyline points="200,240 340,70 480,240" fill="none" stroke="#f2f7f4" stroke-width="3"/>
<text x="60" y="50" fill="#e8825a" font-size="12">Iron condor — wide plateau</text>
<text x="440" y="50" fill="#f2f7f4" font-size="12">Butterfly — pinpoint peak</text>
<text x="340" y="110" text-anchor="middle" fill="#f2f7f4" font-size="12">Peak at 25,000: +₹415</text>
<text x="340" y="278" text-anchor="middle" fill="#92a59c" font-size="12">Condor zone 24,380–25,620 (+₹120) · Butterfly zone 24,585–25,415</text>
</svg>
</figure>

### Iron Condor

**Setup.** Sell an out-of-the-money put spread and an out-of-the-money call spread, same expiry: short the 24,500 put, long the 24,000 put, short the 25,500 call, long the 26,000 call. Each spread is 500 points wide. Suppose the combined position brings in a net credit of ₹120 per share. Note what matters here: every short leg has a long leg hedging it in the same section. An iron condor is a defined-risk structure precisely because of those long legs; selling the short spreads without them is a different, far riskier trade and is not what is described here.

**Market view.** The underlying stays between the two short strikes, and volatility stays low or falls.

**Breakeven.** Short put strike − net credit = ₹24,500 − ₹120 = ₹24,380 on the downside; short call strike + net credit = ₹25,500 + ₹120 = ₹25,620 on the upside. The profit zone is wider than just the gap between the short strikes, by the credit on each side.

**Max profit.** The net credit received, ₹120 per share, if the underlying expires anywhere between the two short strikes and all legs expire worthless.

**Max loss.** Spread width − net credit = ₹500 − ₹120 = ₹380 per share, if the underlying blows through one side entirely. The loss is capped, but note the asymmetry: you risk ₹380 to make ₹120. A single full loss wipes out more than three full wins. That ratio is why position sizing, not the strategy's win rate, decides whether an iron condor trader survives.

**When it fails.** On a breakout in either direction, the losing spread widens towards its maximum loss while time decay no longer helps. It also fails quietly: a trader who keeps re-entering condors after small wins, sizing up on the strength of the win rate, meets the one breakout that takes back several wins at once. Iron condors are not "very safe" and are not a monthly-income machine — the credit is rent for carrying breakout risk, and some months the rent is collected by the market instead.

Full guide: Iron Condor Strategy — coming in this series.

### Butterfly Spread

**Setup.** A long call butterfly uses three strikes: buy the 24,500 call, sell two 25,000 calls, buy the 25,500 call, all the same expiry. Suppose the net debit paid is ₹85 per share. (An iron butterfly uses the same middle strike for both spreads; it is a close cousin, and its full treatment belongs to the dedicated butterfly guide, not this hub.)

**Market view.** The underlying lands very near the middle strike — ₹25,000 in this illustration — at expiry.

**Breakeven.** Lowest strike + net debit = ₹24,500 + ₹85 = ₹24,585 on the downside; highest strike − net debit = ₹25,500 − ₹85 = ₹25,415 on the upside. The profit zone is narrow: just 830 points wide.

**Max profit.** The distance between strikes minus the net debit: ₹500 − ₹85 = ₹415 per share, achieved only if the underlying expires exactly at the middle strike. A few points either way and the profit falls quickly.

**Max loss.** The net debit paid, ₹85 per share, if the underlying expires outside the outer strikes.

**When it fails.** Almost everywhere except the pinpoint. That is the butterfly's bargain stated honestly: a large maximum profit per rupee risked (₹415 against ₹85 here) in exchange for a narrow winning zone and a low probability of landing in it. Compare the iron condor: the condor profits across a wide range but makes less; the butterfly profits in a narrow zone but makes more when it hits. Range versus pinpoint — that is the choice, and it is a trade-off, not a ranking.

Full guide: Butterfly Spread Strategy — coming in this series.

## Already Holding the Underlying: Covered Call and Protective Put

This pair is different in kind: you already own something, and the option changes what owning it feels like. One trades away upside for income; the other pays for a floor. Neither changes the fact that you own an asset that can fall.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Covered call versus protective put payoff shapes: covered call capped above the strike, protective put floored below the put strike." class="viz">
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Holding pair at expiry: capped upside vs floored downside</text>
<line x1="60" y1="260" x2="620" y2="260" stroke="#92a59c" stroke-width="1"/>
<polyline points="60,230 400,80 620,80" fill="none" stroke="#e8825a" stroke-width="3"/>
<polyline points="60,230 280,230 620,80" fill="none" stroke="#f2f7f4" stroke-width="3"/>
<text x="60" y="50" fill="#e8825a" font-size="12">Covered call — flat above 1,900</text>
<text x="380" y="50" fill="#f2f7f4" font-size="12">Protective put — flat below 1,750</text>
<text x="340" y="278" text-anchor="middle" fill="#92a59c" font-size="12">Shares bought at 1,850: call caps profit at +₹85, put caps loss at −₹128</text>
</svg>
</figure>

### Covered Call

**Setup.** Own the underlying and sell a call against it. Illustration: you hold shares bought at ₹1,850 and sell the 1,900 call for ₹35 per share.

**Market view.** Neutral to mildly bullish: you are content if the underlying stays flat or rises modestly, and you accept giving up gains above the strike.

**Breakeven.** Purchase price − premium received = ₹1,850 − ₹35 = ₹1,815 per share. Below that, the position loses money despite the premium.

**Max profit.** Strike − purchase price + premium received = ₹50 + ₹35 = ₹85 per share, reached if the underlying is at or above ₹1,900 at expiry and your shares are called away at the strike.

**Max loss.** Purchase price − premium received = ₹1,815 per share, if the underlying fell to zero. The premium is a cushion, not protection: a ₹35 cushion against a fall of hundreds of rupees is small comfort, and it must never be described as downside protection.

**When it fails.** In two opposite ways, and holders regret both. In a strong rally, you watch the underlying run far past ₹1,900 while your gain stops at ₹85 — the capped upside is the cost of the income, and it stings most exactly when the market is most exciting. In a large fall, the premium barely dents the loss. A covered call suits a holder who genuinely prefers steady premium to full upside, not one who expects both.

Full guide: Covered Call Strategy — coming in this series.

### Protective Put

**Setup.** Own the underlying and buy a put against it. Illustration: you hold shares bought at ₹1,850 and buy the 1,750 put for ₹28 per share.

**Market view.** Bullish long-term, worried short-term: you want to keep the upside and put a floor under a fall.

**Breakeven.** Purchase price + premium paid = ₹1,850 + ₹28 = ₹1,878 per share. The underlying must rise above that level by expiry for the combined position to profit.

**Max profit.** Uncapped in theory, minus the premium: every rupee above ₹1,878 is yours, less the ₹28 already paid.

**Max loss.** Purchase price − put strike + premium paid = ₹100 + ₹28 = ₹128 per share, if the underlying falls to or below ₹1,750. Below the strike, the put gains offset further falls in the shares, rupee for rupee.

**When it fails.** Slowly, in flat markets: the premium is a recurring cost. Buy protection every month, watch the market go nowhere, and the premiums quietly drag your return down month after month — insurance you keep paying for without ever claiming on. It also fails if you buy too little protection (a strike too far away leaves a large deductible) or let it expire and forget to renew it before the fall you feared. A protective put is a floor with a rent, not a free hedge.

Full guide: Protective Put Strategy — coming in this series.

## How to Choose a Strategy Without Fooling Yourself

Work in this order, and do not skip steps:

1. **State your market view in one sentence.** Direction, range, big move, or "I own it and want income/protection". If you cannot, stop — you are not ready to pick a strategy.
2. **Add your volatility view.** Are you expecting volatility to rise (favouring long straddle/strangle) or fall (favouring condor/butterfly)? Buying premium before an event means paying for volatility that may collapse afterwards.
3. **Demand defined risk.** Prefer structures where the maximum loss is known before entry — all six strategies above qualify, provided the short legs in the condor are hedged as described. Undefined-risk positions have no place in a beginner's plan.
4. **Check affordability in lots.** Multiply every per-share figure by the lot size. If the maximum loss of one lot exceeds the amount you planned to risk on the trade, the strategy does not fit at that size — reduce size or skip the trade. Sizing rules themselves are covered in the companion piece on position sizing; risk-of-ruin arithmetic, which shows why repeated full losses end accounts, is covered in its own companion piece. Neither is re-taught here, deliberately: this hub's job is choosing, and pointers keep it that job.
5. **Write down the exit before entry.** At what loss do you close? At what profit do you take it? For range strategies especially, "I will manage it if it breaks out" is not a plan — it is a hope with a margin call attached.

Then ask the question most strategy guides skip: what happens if you are wrong in the specific way this strategy punishes? Flat market, volatility crush, breakout, capped rally, premium bleed — each strategy above has its own named failure. Choose the failure you can live with, not just the payoff you like.

## What Not to Do as a Beginner

Three rules, stated plainly:

- **Never sell options naked as a beginner.** Selling a call or put without owning the underlying or holding a hedging long leg exposes you to losses that are large, in the case of a short call theoretically unlimited, plus margin calls and assignment risk you may not have planned for. Every short leg in this guide appears inside a hedged structure. Keep it that way.
- **Never size from the maximum profit.** Size from the maximum loss. The iron condor example above risks ₹380 to make ₹120; a trader who sizes for the ₹120 and meets the ₹380 has sized three times too big.
- **Never treat premium received as income already earned.** A credit is yours only if the position expires or is closed favourably. Until then it is a liability wearing an income costume, and breakouts collect it back.

Risk disclosure, restated because it matters more than any payoff diagram: options can expire worthless, leverage through lots magnifies both gains and losses, and past payoffs say nothing about the next expiry. Trade only with capital you can afford to lose, and paper-trade a strategy through several expiries before committing real money to it.

## Frequently Asked Questions

### What are option trading strategies?

Option trading strategies are combinations of option legs — bought and sold calls and puts, sometimes alongside shares you own — chosen to create a defined risk-reward profile for a particular market view. Instead of betting only on direction, a strategy can bet on a big move in either direction, on a range holding, on income from a holding, or on protection for a holding. The legs, not any single option, create the payoff.

### Which option trading strategy is best for beginners?

There is no single best strategy for beginners — fit depends on your market view, as the chooser table above shows. Sensible starting points are defined-risk structures with a small size: a covered call or protective put around shares you already own, or a long straddle or strangle around a known event where the total premium paid is the known maximum loss. Naked selling is excluded for beginners entirely, because its risk is undefined. Start small, paper-trade first, and size from the maximum loss.

### What is the difference between a straddle and a strangle?

A straddle buys a call and a put at the same strike; a strangle buys an out-of-the-money call and an out-of-the-money put at different strikes. The straddle costs more — ₹350 per share in this guide's illustration against ₹185 for the strangle — but needs a smaller move to profit, with breakevens of ₹24,650 and ₹25,350 against the strangle's ₹24,315 and ₹25,685. The strangle is cheaper; the straddle is more likely to profit. Both lose to time decay in flat markets and to volatility collapse after an event.

### What is an iron condor?

An iron condor sells an out-of-the-money put spread and an out-of-the-money call spread with the same expiry, for a net credit. It profits when the underlying stays between the two short strikes. Maximum profit is the net credit received (₹120 per share in this guide's illustration); maximum loss is the spread width minus the credit (₹500 − ₹120 = ₹380). The long legs hedge the short legs, which is what makes the risk defined — and the loss-to-profit ratio is why sizing matters more than win rate.

### What is the difference between an iron condor and a butterfly spread?

A condor profits across a range; a butterfly profits at a point. The iron condor in this guide profits anywhere between its short strikes (₹24,380 to ₹25,620 after the credit), while the butterfly profits only between ₹24,585 and ₹25,415, peaking at the middle strike of ₹25,000. The condor's winning zone is wider but its maximum profit is smaller (₹120 against the butterfly's ₹415 in these illustrations); the butterfly's maximum profit is larger but its zone is far narrower. Wider zone, smaller prize versus narrower zone, bigger prize — that is the trade-off.

### What is a covered call?

A covered call means owning the underlying and selling a call against it. You collect the premium (₹35 per share in this guide's illustration, selling the 1,900 call against shares bought at ₹1,850), which lowers your breakeven to ₹1,815 and caps your maximum profit at ₹85 per share. The premium cushions small falls but does not prevent large ones, and in a strong rally you give up all gains above the strike. It is an income-for-upside trade, not downside protection.

### What is a protective put?

A protective put means owning the underlying and buying a put against it. In this guide's illustration you hold shares bought at ₹1,850 and buy the 1,750 put for ₹28, which caps your maximum loss at ₹128 per share while keeping unlimited upside minus the premium. The breakeven rises to ₹1,878. The cost is recurring: in flat markets the premium drags returns, month after month, which is the price of the floor.

### How do you choose an option strategy?

Choose in this order: market view first, then volatility view, then defined versus undefined risk, then affordability in lots. A big unknown-direction move points to a straddle or strangle; a range points to an iron condor or butterfly; a holding you want income from points to a covered call; a holding you want protected points to a protective put. Then size from the maximum loss, write down your exit before entry, and pick the failure mode you can live with — because every strategy fails in its own specific way, and that failure, not the best-case payoff, is what you are really choosing.

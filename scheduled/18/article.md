---
title: "The 3-5-7 Rule in Trading: The Honest Definition, the Survival Math, and Where It Breaks"
description: "What is the 3-5-7 rule in trading? No single definition exists — learn the working 3% / 5% / 7% risk budget, its survival math, and where it breaks in India."
meta_description: "What is the 3-5-7 rule in trading? No single definition exists — learn the working 3% / 5% / 7% risk budget, its survival math, and where it breaks in India."
date: 2026-11-02
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["3-5-7 rule in trading", "what is the 3-5-7 rule", "3 percent risk per trade", "5 percent total risk cap", "position sizing rule", "risk budget trading", "streak survival math", "risk reward 2.3R"]
---

*By Kaizen · 2 November 2026 · Monks Of Market*

## What Is the 3-5-7 Rule? Four Versions, One Name — and the Definition This Article Uses

Before anything else, an honest disclosure: **the 3-5-7 rule has no single settled definition.** So if you came here asking what is the 3-5-7 rule in trading, the honest answer starts with that disagreement, not with a single settled formula.

It is an informal, trader-created guideline. No regulator, broker, or exchange has issued it, and it appears in no official trading standard. It is a risk-budget framework — it tells you how much to risk, not when to enter a trade — and different sources use the same three digits to mean different things.

That matters more than it sounds. If two traders both say they "follow the 3-5-7 rule" but mean different versions, they are not following the same rule at all. So this article lays out the disagreement first, then adopts one coherent version and applies it consistently. Whenever you see "3-5-7" elsewhere, check which version the writer means before using any of its numbers.

Here are the four conflicting versions found in current trading-education sources:

### Variant 1 — Risk, exposure, reward (the working definition)

- **3** = maximum account risk on any single trade.
- **5** = maximum total risk across all open trades at once.
- **7** = minimum reward target, roughly 2.3 times the per-trade risk.

This is the version this article adopts. It is the most internally coherent: all three numbers run on the same logic — account risk. The 3 limits one trade, the 5 limits everything open together, and the 7 sets how large a winner must be to justify the risk. From this point on, every number here uses this version, and no other.

### Variant 2 — Price distances, not account risk

In this telling, the numbers are read as price percentages — for example, a 3% stop-loss distance below entry, a 5% profit target above entry, and in another telling a 7% stop-loss distance.

This is a genuinely confusing reading, and it is worth flagging plainly: **a price percentage is not an account-risk percentage.** A 7% price stop on a large position can risk far more than 3% of the account. Mix these two ideas up, and the "3" in 3-5-7 gives you no protection at all. That is why this article uses account risk throughout, never price distance, for the 3 and the 5.

### Variant 3 — Single trade, sector, portfolio

In this version, 3% is single-trade risk, 5% is a sector-concentration cap, and 7% is a total-portfolio risk cap.

Notice the overlap with Variant 1: the same digits appear, but the 5 and the 7 have different jobs. In Variant 1, 5% is the total open-risk cap and 7% is a reward target; here, 5% is a sector cap and 7% is the total cap. Same numbers, different rule — which is exactly why the ambiguity warning has to come first.

### Variant 4 — Triggers: breakeven moves and loss cutoffs

In this family, 3% is per-trade risk, 5% is the profit level at which the stop moves to breakeven or starts trailing, and 7% is a maximum floating-loss cutoff for one position. Even within this family, the jobs swap: a related telling uses 5% as the trailing or partial-profit level and 7% as the full profit target.

So Variant 4 is best read as one inconsistent family, not as two settled rules. Its numbers describe *actions during a trade*, whereas Variant 1's numbers describe *a budget decided before the trade*.

### The lookalike to set aside: EMA 3/5/7

One more note, in a single line: an EMA 3/5/7 setup — three exponential moving averages of 3, 5, and 7 periods used as a trend tool — shares only the digits. It is a different tool, not this rule, and it plays no part in this article.

## The Three Numbers of the 3-5-7 Rule, Defined as Account Risk

The thesis of this article is simple: **the 3-5-7 rule, as a risk management framework, is not a strategy and does not tell you when to enter. It is a three-layer survival budget — one trade, all trades, and the size a winner must be — and its real value is the second number, the 5% cap, which most traders ignore.**

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="3-5-7 rule three-layer defence: 3 percent risk per trade as the first layer, 5 percent total open risk as the middle layer constraining all open positions together, and 7 percent reward target as the third layer." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Three layers — one budget, not three separate rules</text>
<rect x="40" y="70" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="102" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Layer 1 — 3% risk on any single trade</text>
<rect x="40" y="138" width="600" height="52" rx="12" fill="#e8c15a"/><text x="340" y="170" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">Layer 2 — 5% total risk across ALL open trades (the constraint)</text>
<rect x="40" y="206" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="238" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Layer 3 — 7% reward target, about 2.3 times the per-trade risk</text>
<text x="340" y="284" text-anchor="middle" fill="#92a59c" font-size="11">The 5% middle layer is what stops five “safe” trades becoming one big bet.</text>
</svg>
</figure>

Before the numbers, one distinction that matters more than any other, because confusing it is the most common reader error with this rule:

**3% is the loss if the stop is hit. It is not 3% of capital invested.**

A position worth ₹1,00,000 can risk only ₹6,000 under this rule, as the worked example below shows. The rule caps the loss at the stop, never the size of the position itself. Position size is worked backwards from that risk budget and the distance to the stop — which is why a tight stop allows a larger position than a wide stop, for the same ₹6,000 at risk.

### 3 — The single-trade cap

Never risk more than 3% of account equity on one trade, measured as the loss if the stop-loss is hit.

The position-size formula at 3% is:

**Shares or units = (account equity × 0.03) ÷ (entry price − stop-loss price)**

Risk is set by the stop distance, never by position value. A ₹60 stop distance and a ₹6,000 risk budget give 100 shares; a ₹30 stop distance with the same budget gives 200 shares. The budget stays fixed; the share count moves. (For sizing help, see the Position Size Calculator tool — this article uses the formula only where the 3-5-7 budget needs it, and does not re-teach position sizing as a standalone topic.)

### 5 — The total open-risk cap

Never have more than 5% of account equity at risk across all open trades combined.

This is the number that actually limits how many positions you can hold. Two simultaneous trades at 3% risk each total 6% — already over the cap. So with one full-size 3% trade open, a second trade cannot also be full-size. Either it is sized to 2%, or it waits, or the first trade's stop must first move to breakeven so its open risk falls. The cap, not the per-trade number, is the binding constraint. The combinations are worked through in full below.

### 7 — The winner-size target

Aim for winners of at least ~7% of account equity in reward terms — about 2.3 times the 3% risk, a ~2.3R target.

The 7 is a target that filters trades, not a promise. If a setup cannot honestly reach a reward of about 2.3 times its risk, the rule's answer is to skip it or redesign it — not to shrink the target until the trade looks acceptable. What that 2.3R target buys, and what it does not, is covered in detail below.

## The ₹2,00,000 Worked Example, Step by Step

This is an illustration with round numbers, not a forecast and not a recommendation. It shows how the three numbers turn into rupees, shares, and a decision — nothing more.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="3-5-7 rule worked example: a 2,00,000 rupee account gives a 6,000 rupee per-trade risk budget at 3 percent and a 10,000 rupee combined cap at 5 percent, converting to 100 shares at a 1,000 rupee entry and a 940 rupee stop." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Worked example — ₹2,00,000 account, step by step</text>
<text x="40" y="80" fill="#f2f7f4" font-size="13" font-weight="700">Account</text>
<text x="300" y="80" fill="#f2f7f4" font-size="13" font-weight="700">₹2,00,000</text>
<text x="40" y="120" fill="#f2f7f4" font-size="13" font-weight="700">3% per-trade budget</text>
<text x="300" y="120" fill="#8fd6a0" font-size="13" font-weight="700">₹6,000</text>
<text x="40" y="160" fill="#f2f7f4" font-size="13" font-weight="700">5% combined cap</text>
<text x="300" y="160" fill="#e8c15a" font-size="13" font-weight="700">₹10,000</text>
<rect x="40" y="196" width="600" height="52" rx="12" fill="#2a3a34"/><text x="340" y="228" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹6,000 ÷ ₹60 risk per share = 100 shares · entry ₹1,000 · stop ₹940</text>
<text x="340" y="276" text-anchor="middle" fill="#92a59c" font-size="11">Risk is (entry − stop) × shares — never the position value.</text>
</svg>
</figure>

**Step 1: The budgets.** On a ₹2,00,000 account:

- 3% per trade = **₹6,000** maximum loss per trade.
- 5% combined open risk = **₹10,000** maximum risk across all open trades.
- 7% reward target = **~₹14,000** per winner (about 2.3 × ₹6,000).

**Step 2: The trade.** Suppose the entry price is ₹1,000 and the stop-loss is ₹940. The risk per share is ₹1,000 − ₹940 = ₹60.

**Step 3: The share count.** Maximum shares = ₹6,000 ÷ ₹60 = **100 shares**.

**Step 4: Read the result correctly.** The position value is 100 × ₹1,000 = ₹1,00,000 — half the account. But the risk the rule caps is ₹6,000, not ₹1,00,000. That is the risk-versus-investment distinction in action: a large-looking position can still be a 3% risk, and a small-looking position with a wide stop can quietly risk far more.

**Step 5: Add the cost stack, and the warning that comes with it.** Trading costs sit on top of the ₹6,000. For options, the locked figures to know are: STT of 0.15% on the sell side, and the NSE equity-options charge of 0.03553% per side, all-in. For an exercised in-the-money option, STT of 0.15% applies to intrinsic value, not to premium — so the exercise cost can be far larger than STT on premium alone.

Illustration only, separate from the share example above: on ₹1,00,000 of options premium turnover, the NSE charge at 0.03553% per side is about ₹35.53, and STT at 0.15% on the sell side is ₹150. On an illustrative exercised in-the-money option with ₹10,000 of intrinsic value, STT at 0.15% is ₹15 — small in that illustration, but on a large intrinsic value it can dwarf the premium-based figure.

And the warning that must travel with this example: **a stop-loss does not guarantee a ₹6,000 loss.** Overnight gaps and fast markets can push the actual exit well past ₹940, so the realised loss can exceed ₹6,000 even with a stop in place. The budget is a plan, not a guarantee.

## Why 3% Survives and 10% Does Not: The Streak Math

Risk rules are easy to agree with in calm markets and easy to abandon after losses. The streak math makes the case for 3% without slogans. It assumes each loss is exactly the stated percentage of the then-current (compounding) account value, before costs, slippage, and gaps — costs and slippage would make both cases worse.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Streak survival curve: capital remaining after 5, 10 and 20 consecutive losses is about 85.9, 73.7 and 54.4 percent at 3 percent risk, versus about 59.0, 34.9 and 12.2 percent at 10 percent risk." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Streak survival — why 3% survives and 10% does not</text>
<text x="200" y="76" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">After 5 losses</text>
<text x="360" y="76" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">After 10 losses</text>
<text x="520" y="76" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">After 20 losses</text>
<text x="40" y="116" fill="#8fd6a0" font-size="13" font-weight="700">3% risk</text>
<text x="200" y="116" text-anchor="middle" fill="#f2f7f4" font-size="13">85.9%</text>
<text x="360" y="116" text-anchor="middle" fill="#f2f7f4" font-size="13">73.7%</text>
<text x="520" y="116" text-anchor="middle" fill="#f2f7f4" font-size="13">54.4%</text>
<text x="40" y="156" fill="#e8825a" font-size="13" font-weight="700">10% risk</text>
<text x="200" y="156" text-anchor="middle" fill="#f2f7f4" font-size="13">59.0%</text>
<text x="360" y="156" text-anchor="middle" fill="#f2f7f4" font-size="13">34.9%</text>
<text x="520" y="156" text-anchor="middle" fill="#f2f7f4" font-size="13">12.2%</text>
<text x="340" y="212" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">At 3%, ten straight losses cost about 26.3% — survivable.</text>
<text x="340" y="240" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">At 10%, the same run costs about 65.1% — recovery needs +186%.</text>
<text x="340" y="284" text-anchor="middle" fill="#92a59c" font-size="11">Before costs. The maths, not the mood, decides survival.</text>
</svg>
</figure>

| Consecutive losses | Capital remaining at 3% risk | Capital remaining at 10% risk |
|---|---|---|
| 5 | 85.9% | 59.0% |
| 10 | ~73.7% | ~34.9% |
| 20 | 54.4% | 12.2% |

Read the 10-loss row slowly. Ten consecutive 3% losses leave about 73.7% of the account — a drawdown of about 26.3%. Ten consecutive 10% losses leave about 34.9%. The first account is hurt and still tradeable; the second has lost roughly two-thirds of its capital and faces a recovery climb that is, in practical terms, a different problem altogether.

That is the asymmetry worth naming, even briefly: a 26.3% drawdown needs about a 35.7% gain just to break even. Losses demand larger percentage gains to recover than the percentages lost — which is why keeping the drawdown contained matters more than chasing a quick win back. (For the full treatment of that asymmetry, see the drawdown asymmetry article; this article uses only the one figure it needs.)

The point is not that 10 straight losses are likely. A rule should be judged by what it leaves you with when a bad run arrives, not by how it feels on a winning day. At 3%, a bad run costs roughly a quarter of the account. At 10%, the same run ends the account's practical life.

## The 5% Cap: The Total Exposure Limit Everyone Skips

Most discussions of the 3-5-7 rule spend their time on the 3 and the 7, and treat the 5 as an afterthought. That is backwards: the 5 is the number that stops a trader who is obeying every per-trade limit from still blowing up through sheer concurrency.

The logic is arithmetic, not philosophy. Each trade may be within its 3% limit, yet five such trades open at once put 15% of the account at risk. The per-trade cap alone allows unlimited concurrent risk. The 5% cap is what limits how many positions can be held — and it is the cap, not the 3%, that forces the hard choice of waiting, sizing down, or passing on a new setup.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="5 percent total risk cap combinations: 3 plus 2 percent fits exactly at the cap, 2 plus 2 plus 1 percent fits exactly, 2 plus 2 percent fits with 1 percent headroom, 3 plus 1 plus 1 percent fits exactly, while 3 plus 3 percent and 3 plus 2 plus 1 percent breach the cap at 6 percent." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Which combinations fit under the 5% cap?</text>
<text x="40" y="76" fill="#f2f7f4" font-size="13" font-weight="700">3% + 2% = 5%</text>
<text x="470" y="76" fill="#8fd6a0" font-size="13" font-weight="700">Fits — at the cap</text>
<text x="40" y="112" fill="#f2f7f4" font-size="13" font-weight="700">2% + 2% + 1% = 5%</text>
<text x="470" y="112" fill="#8fd6a0" font-size="13" font-weight="700">Fits — at the cap</text>
<text x="40" y="148" fill="#f2f7f4" font-size="13" font-weight="700">2% + 2% = 4%</text>
<text x="470" y="148" fill="#8fd6a0" font-size="13" font-weight="700">Fits — 1% headroom</text>
<text x="40" y="184" fill="#f2f7f4" font-size="13" font-weight="700">3% + 1% + 1% = 5%</text>
<text x="470" y="184" fill="#8fd6a0" font-size="13" font-weight="700">Fits — at the cap</text>
<text x="40" y="220" fill="#f2f7f4" font-size="13" font-weight="700">3% + 3% = 6%</text>
<text x="470" y="220" fill="#e8825a" font-size="13" font-weight="700">BREACHES</text>
<text x="40" y="256" fill="#f2f7f4" font-size="13" font-weight="700">3% + 2% + 1% = 6%</text>
<text x="470" y="256" fill="#e8825a" font-size="13" font-weight="700">BREACHES</text>
<text x="340" y="296" text-anchor="middle" fill="#92a59c" font-size="11">The cap counts stop-risk, not position value. “Wait” is a legitimate outcome.</text>
</svg>
</figure>

### Which combinations fit under 5% — and which breach it

The cap counts risk — the loss if stops are hit — not position value.

| Combination (risk per open trade) | Total open risk | Verdict |
|---|---|---|
| 3% + 2% | 5% | Fits, exactly at the cap |
| 2% + 2% + 1% | 5% | Fits, exactly at the cap |
| 2% + 2% | 4% | Fits, with 1% headroom |
| 3% + 1% + 1% | 5% | Fits, exactly at the cap |
| 3% + 3% | 6% | **Breaches the cap** |
| 3% + 2% + 1% | 6% | **Breaches the cap** |

With one full-size 3% trade open, the second trade can risk at most 2%. A third trade then has no room at all unless something changes: the first trade's stop moves to breakeven (cutting its open risk), a position closes, or the new trade simply waits. "Wait" is a legitimate outcome of the rule, not a failure of it — the cap exists to make waiting the default when the budget is full.

### The correlation test: when 5% on paper is more in practice

The cap is necessary but not sufficient. It adds up stop-risk as if each trade fails independently. Correlated positions do not fail independently — they can all hit their stops on the same news, the same sector move, or the same market-wide fall.

Before adding a trade, ask one question: **would one headline hurt all of these at once?**

If the answer is yes, count their risk together against the cap, not separately. If you are unsure whether positions are correlated, treat them as correlated. A portfolio of trades that all lean the same way is, for risk purposes, closer to one large trade than to several small ones — and a 5% cap that ignores that is 5% on paper and more in practice. The failure-modes section below returns to this point.

## The 7% Profit Target: What 2.3R Buys You — and What It Does Not

A reward target of about 2.3 times risk buys a forgiving breakeven. The breakeven win rate at 2.3R is about 30.3% before costs: a system with that payoff profile can lose roughly 7 trades in 10 and still break even, before costs. That is the mathematical appeal of the 7 — winners need not be frequent if they are large enough relative to losers.

But "before costs" does heavy work in that sentence, and it must not be dropped. Brokerage, taxes, spreads, and slippage all widen every loss and shrink every win, so the real breakeven win rate is higher than 30.3%. (For the expectancy context behind this breakeven, see the article on trading expectancy; this article does not re-teach expectancy.)

What the 7% target does not buy is equally important:

- **It does not promise the target will be reached.** A target filters trades; it does not pull prices toward itself. Many setups that look capable of 2.3R will stop out at 1R of loss instead.
- **It is not a reason to hold a winner past its plan.** The target is set before entry, from the setup's structure — not adjusted mid-trade to justify staying in.
- **It does not rescue a setup with no edge.** A 2.3R target on entries chosen at random still loses money after costs; the payoff ratio changes the breakeven, but entries still have to clear it.

In short: the 7 disciplines trade selection. It says "only take trades whose structure can plausibly pay about 2.3 times what they risk." A useful filter — not a profit mechanism.

## Where the Rule Breaks

A risk rule that is only ever praised is a rule nobody has stress-tested. Each failure mode below is a concrete break, not a generic warning, and each keeps the Indian-retail angle this article is built around.

### Correlated positions: several trades, one bet

As the correlation test above shows, summed stop-risk understates true exposure when positions move together. Sector concentration and same-direction market bets turn several trades into one bet. The cap still helps — 5% of correlated risk is far better than 15% — but never read it as "5% is the worst a bad day can do." When everything correlates, a bad day can take the full capped amount at once, surprising a trader who counted positions separately and thought the loss was diversified away.

### Overnight gaps and slippage: the stop is not a guarantee

Stops execute at available prices, not at the stop price, when markets gap or move fast. An overnight gap past ₹940 on the worked example means the exit happens below ₹940, and the realised loss exceeds ₹6,000. Slippage works the same way in fast intraday markets, and costs widen every loss further. Any version of the 3-5-7 rule presented as a hard ceiling on losses overstates what a stop can do. The honest statement is: the rule caps *planned* risk at 3% per trade and 5% combined; *realised* risk can exceed both.

### Options: premium decay vs equity stops, and the real cost stack

Options behave differently from equity stops, and the difference breaks naive applications of the rule. Time decay erodes an option position even when the underlying price moves favourably — an equity stop-loss has no equivalent decay. An option can therefore lose money where the directional view was right but the timing was slow.

The cost stack matters here too, with the locked figures stated plainly: STT of 0.15% on the sell side, and the NSE equity-options charge of 0.03553% per side, all-in. As noted in the worked example, an exercised in-the-money option carries STT of 0.15% on intrinsic value, not on premium — a cost that can dwarf the premium-based figure a trader budgeted for. No per-instrument performance claim is made here: options are simply a place where the rule's stop-based logic fits less neatly, and traders using it there need to budget for decay and exercise costs explicitly.

### Small accounts and lot-size rounding

On a ₹50,000 account, 3% is ₹1,500 — a thin budget that lot sizes can break: a single lot's stop distance can force risk above the cap, depending on the instrument and the stop. The Nifty lot size is 65, and a wide stop on even one lot can push the loss past ₹1,500 before the trader has any say in the matter.

The break point is exact: ₹1,500 ÷ 65 shares = about ₹23.08 per share. A stop ₹25 away on one lot risks 65 × ₹25 = ₹1,625 — already above the ₹1,500 budget — and a ₹30 stop risks ₹1,950.

When the percentages do not fit lot sizes, the rule's answer is uncomfortable and correct: trade smaller, trade fewer, or do not trade that instrument at all. Widening the budget to force the trade is not following the rule with an exception — it is abandoning the rule at exactly the moment it is most needed. Small accounts may therefore find 3% not practically usable on every instrument, which is a reason to tighten, not to cheat.

### Futures: leverage, gaps, and margin calls

Futures deserve their own line because they combine two breaks at once. Leverage lets a small margin control a large notional position, so a move that looks small in price terms can still push the realised loss past the planned 3% budget — and an overnight gap can do the same before any stop can act. A margin call then adds a second pressure: the trader must add funds or have the position reduced, at the worst moment to make that decision. None of this makes the 3-5-7 budget unusable for futures, but the budget only holds if the stop is real, the gap risk is accepted in advance, and the margin requirement is sized for, not discovered mid-trade.

### Intraday leverage without a real stop

Intraday leverage scales position value, not the risk budget — and that distinction is where leverage breaks the rule. A leveraged position with no live stop has no defined risk at all: "3% of account" is meaningless if no stop price turns it into a share count and a loss figure. A mental stop is not a stop; it executes only if the trader acts in the moment, under stress, against the very loss they hoped would reverse.

So the rule's intraday condition is blunt: no real, live stop, no 3-5-7 budget. Leverage without that is not a tighter or looser version of the rule — it is the absence of the rule.

## Who Should Tighten It: The 1% and 2% Variants

This is the article's one short cross-rule section, and it deliberately does not rank rules — ranking rules against each other is a separate question, covered elsewhere. The comparison here — a 3-5-7 rule vs 1% rule comparison, with 2% in between — is only between risk levels, for one practical purpose: helping readers decide whether 3% is the right level for them.

| Risk per trade | Capital remaining after 10 consecutive losses |
|---|---|
| 1% | 90.4% |
| 2% | 81.7% |
| 3% | ~73.7% |

The pattern is clear: lower risk buys survival at the price of slower compounding, and higher risk buys speed at the price of deeper drawdowns. Three practical conclusions follow:

- **Beginners and small accounts should usually start at 1%.** The education is cheaper: 10 straight losses cost about a tenth of the account rather than about a quarter, and the trader survives long enough to learn. Move up to 3% only once rule-following is consistent, not after a winning week.
- **2% is the middle setting** for traders who find 1% too slow but have not yet earned the discipline that 3% demands — or for accounts where lot sizes make 3% awkward but 2% fits.
- **3% is defensible** for a trader with a tested approach, disciplined stop placement, and the 5% cap genuinely obeyed — and only then. Without those three, 3% is aggressive relative to the 1% guideline, and the honest move is to tighten rather than to hope.

Risk level is not a badge of courage. It is a budget, and the right budget is the one the trader can actually obey through a losing streak.

## The Pre-Trade 3-5-7 Checklist

Use this before every trade, not after. It is completed per trade, at the moment of entry — deliberately different from any daily routine — and it takes minutes.

1. **Write down account equity, then the budgets in rupees.** 3% = the maximum loss on this trade; 5% = the maximum combined open risk. No percentages left abstract — write the rupee figures.
2. **Write down entry, stop, and target before entry.** If the target is not at least ~2.3 times the risk, skip the trade or re-plan it. Do not enter first and find a target later.
3. **Compute share count as risk budget ÷ risk per share, and round down.** Never round up to "use the full budget" — rounding up is how a 3% trade quietly becomes more.
4. **Check total open risk against the 5% cap before adding the trade** — including the correlation test. If one headline would hurt everything open at once, count that risk together.
5. **Confirm a real, live stop is in place** (not a mental note), especially for leveraged intraday trades. No live stop, no trade under this rule.
6. **Commit to no averaging down and no stop-widening mid-trade.** Moving the stop to avoid a loss redefines the budget after the fact, which means the budget never actually existed.
7. **Accept the gap warning.** The planned loss is 3%; the realised loss can be more. If that possibility is unacceptable on this trade, the trade is too large.

One line, for completeness, on neighbouring disciplines: the 5% cap and a monthly stop are cousins of circuit-breakers against revenge trading and tilt, not replacements for them — but this checklist is about the trade in front of you, and ends there.

## The Verdict: A Survival Budget, Not a Strategy

The 3-5-7 rule, in the working definition this article adopts, is worth using for what it is and dangerous to mistake for what it is not. It is not a strategy, not an entry signal, and not a guarantee. It is a survival budget decided in advance: 3% on one trade, 5% across everything open, winners sized at about 2.3 times risk — with the 5% cap doing the quiet work that the flashier numbers get credit for.

Its value is the cap decided before the trade, when judgement is calm, rather than during the trade, when it is not. Obeyed consistently, it keeps a bad run to roughly a quarter of the account instead of two-thirds of it. Ignored — or obeyed only on the 3 while the 5 is skipped — it is a slogan with numbers attached.

For a gentler introduction to the same digits, there is a related beginner explainer on this site covering what the rule is at an introductory level. This article is the analytical companion: the ambiguity, the math, and the failure modes behind it.

**Educational disclaimer:** This article is educational content only, not investment advice. No risk rule guarantees profits or prevents losses. The 3-5-7 rule is an informal, unregulated guideline, not a regulated standard. Trade only with capital you can afford to lose, and consider professional advice for decisions affecting your finances.

## Frequently Asked Questions

### What is the 3-5-7 rule in trading?

In the working definition used in this article, the 3-5-7 rule is a risk budget: risk no more than 3% of account equity on any single trade, keep total risk across all open trades at or below 5% of account equity, and aim for winners of at least ~7% of account equity — about 2.3 times the per-trade risk. One honest caveat travels with that definition: other sources define the same digits differently, as the opening section shows, so always check which version a writer means.

### How do you calculate position size with 3% risk?

Divide the risk budget by the risk per share: shares = (account equity × 0.03) ÷ (entry price − stop-loss price). On a ₹2,00,000 account, the budget is ₹6,000; with an entry of ₹1,000 and a stop of ₹940 (₹60 risk per share), the maximum is 100 shares. Remember: 3% is the loss if the stop is hit, not 3% of capital invested — the position value here is ₹1,00,000, but the risk capped by the rule is ₹6,000.

### Why does the 5% cap matter if each trade is already under 3%?

Because per-trade caps alone allow unlimited concurrent risk. Five trades at 3% each put 15% of the account at risk, even though every single trade obeyed its limit. The 5% cap is what limits how many positions can be held: with one 3% trade open, a second trade can risk at most 2%, or it must wait.

### How many trades can I hold under the 5% cap?

It depends on their risk sizes, not on a fixed count. Combinations that fit include 3% + 2%, 2% + 2% + 1%, and 3% + 1% + 1%. Two full 3% trades (6%) do not fit. And if the positions are correlated — one headline would hurt them all — count their risk together, which may mean holding fewer than the arithmetic alone suggests.

### What happens if I break the 5% rule?

More than 5% of account equity is at risk if all stops are hit at once, so a single bad session can cost more than the budget allows. Correlated positions make the breach worse than the sum suggests, because they can all fail together. Breaking the cap does not guarantee a loss — it means that a loss, when it comes, can be larger than the plan allowed.

### What does a 7% profit target mean in practice?

It means aiming for a winner of about 7% of account equity — about 2.3 times the 3% risk on the trade. In practice it is a filter: if a setup cannot honestly reach about 2.3 times its risk, skip it or re-plan it. It is not a promised payout, and costs, spreads, and slippage move the real breakeven above the before-costs figure of about a 30.3% win rate.

### What is a good risk-reward ratio?

As a guideline, 2:1 or better is commonly treated as a sound minimum — winners at least twice the size of losers. The 3-5-7 rule implies about 2.3:1, which lowers the breakeven win rate to about 30.3% before costs: larger winners mean fewer wins are needed to break even. But the ratio alone does not create an edge; entries still have to clear that breakeven after costs.

### How does the 3-5-7 rule compare to the 1% or 2% rule?

Only the risk level differs in this comparison. After 10 consecutive losses, 1% risk leaves 90.4% of capital, 2% leaves 81.7%, and 3% leaves about 73.7%. Beginners and small accounts usually do better starting at 1% and graduating to 3% only after consistent rule-following; 2% sits between the two. This article does not rank trading rules against each other — that is a separate question.

### Is the 3-5-7 rule an official or regulated standard?

No. It is an informal, trader-created guideline, not issued by any regulator, broker, or exchange, and it appears in no official trading standard. Treat it as a discipline framework you choose to adopt, not as a rule anyone enforces.

### Is the 3-5-7 rule good for beginners?

It is usable by beginners as a cap, but 1% is the cheaper education while learning. A beginner who starts at 3% pays about a 26.3% drawdown for 10 straight losses; at 1%, the same run costs about 9.6%. Graduate to 3% only after consistent rule-following, and note that small accounts may find lot sizes force tighter sizing or fewer trades regardless of experience.

### Is 3% risk per trade too much?

Relative to the 1% guideline, yes, it is aggressive — 10 straight losses cost about 26.3% of the account, and the recovery needed from that drawdown is about 35.7%. It is defensible only with a tested approach, disciplined stop placement, and the 5% cap genuinely obeyed. Without those, tightening to 1% or 2% is the honest move.

### Does the 3-5-7 rule work for intraday, futures, and options?

It can be applied to each, but with different failure modes — not equally, and with no performance claim for any instrument. Intraday trading needs a real, live stop, because leverage without one voids the cap entirely. Futures carry gap and leverage risk that can push realised losses past planned risk. Options carry premium decay, which erodes a position even when the price view is right, plus the cost stack: STT of 0.15% on the sell side and the NSE equity-options charge of 0.03553% per side, all-in — with STT of 0.15% on intrinsic value for exercised in-the-money options.

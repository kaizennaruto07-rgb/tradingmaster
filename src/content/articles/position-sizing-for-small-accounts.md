---
title: "Position Sizing for Small Accounts: Risk 1%, Size from Stop"
description: "On a ₹50,000 account, 1% risk is ₹500 — a ₹20 stop gives 25 shares. The ₹ formula, round-down rule and skip-trade rule for ₹25,000–₹1,00,000 accounts."
meta_description: "On a ₹50,000 account, 1% risk is ₹500 — a ₹20 stop gives 25 shares. The ₹ formula, round-down rule and skip-trade rule for ₹25,000–₹1,00,000 accounts."
date: 2026-10-26
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["position sizing for small accounts", "position size small account", "how to size positions small account", "1 percent risk rule", "round down position size", "skip trade rule", "position sizing formula rupees", "small account trading risk"]
---

*By Kaizen · 26 October 2026 · Monks Of Market*

A small account does not need a different formula. It needs the same formula applied more strictly, because a small account has less room to absorb a sizing mistake. Here is that formula in rupees — with the rounding rule and the skip rule that matter most when capital is limited.

## Position sizing for a small account: risk 1%, size from your stop

How do you size positions when your account is small, so one trade or one losing streak cannot wipe you out? Start from your stop, not from how many shares you want to own.

This article recommends risking 1% of your account per trade as its default. Risk budget = account × risk%. Divide it by the distance between entry and stop, and round down to whole shares. That gives you: Shares = floor[(Account × Risk%) ÷ (Entry − Stop)].

Three problems make this harder for small accounts than for large ones. The formula often gives a fraction of a share, and Indian cash-segment shares are bought in whole shares. 1% can feel so small that traders raise their risk to 5% or 10%. And a trade risking only 1% can still tie up a large share of the account in one stock. The general method is explained in the [Position Sizing article](/articles/position-sizing/); this article applies it specifically to small accounts.

## The small-account trap: why small accounts blow up on sizing, not on entries

Entries get most of the attention, but sizing is what usually turns an ordinary [losing streak](/articles/how-losing-streaks-affect-trading-accounts/) into a blown account. You can be wrong several trades in a row and still be in the game if each loss is small. The same streak at large risk per trade does far more damage, because losses compound: each loss shrinks the account the next loss is taken from.

The compounded figures make the difference concrete (arithmetic recomputation, 2026-10-25):

| Risk per trade | Drawdown after 10 straight losses (compounded) |
|---|---|
| 1% | ≈ 9.6% |
| 10% | ≈ 65.1% |

These are not the loose approximations sometimes quoted as "10 losses = 10%" or "10 losses = 100%". Compounded, 10 losses at 1% leave the account down about 9.6%, while 10 losses at 10% leave it down about 65.1% — a drawdown that needs roughly 186% growth on the remaining capital just to get back to breakeven. That is why "1% feels too small" is dangerous: raising risk because the rupee amount looks insignificant is how small accounts become smaller. The account is small, not the rule.

If you want to see what a losing streak does to an account at different risk levels, try the [Risk of Ruin Calculator](/tools/risk-of-ruin/). The [Risk of Ruin article](/articles/risk-of-ruin-trading/) explains why small per-trade risk is what keeps a small account alive through losing streaks.

## The formula, in ₹: how to calculate position size for a small account

### Set the stop from the setup — before you size

The stop is not chosen to make the share count come out nicely. It is the price at which the setup is wrong, fixed from the setup itself — before any sizing maths happens.

Take one clearly hypothetical example, not a real trade: you plan to buy at ₹400 because the price has broken above that level, and the setup fails if price falls back below ₹380, the recent swing low. The stop is therefore ₹380, and the risk per share is ₹400 − ₹380 = ₹20. That distance — ₹20 — is what goes into the formula. Never tighten the stop artificially to inflate the share count: moving the stop to ₹390 would halve the risk per share to ₹10 and double the shares, but ₹390 is not where the setup fails — so ordinary movement would stop you out while the original setup stays intact. A stop moved to manufacture shares is not a valid stop, and sizing from it is not position sizing.

The formula has three inputs. Decide each one before you size the trade:

- **Risk budget** = account × risk%. At 1% risk, a ₹50,000 account has a ₹500 risk budget.
- **Risk per share** = entry price − stop price. If you enter at ₹400 with a stop at ₹380, the risk per share is ₹20.
- **Shares** = floor(risk budget ÷ risk per share). Floor means round down to the nearest whole share, always.

Worked through for the ₹50,000 example: ₹500 ÷ ₹20 = 25 shares. The position value is 25 × ₹400 = ₹10,000. If the stop is hit, the planned loss is 25 × ₹20 = ₹500, which is the 1% risk budget — no more, by construction.

The same method works at three account sizes. All prices below are hypothetical arithmetic illustrations with round numbers, not real trades, recommendations, or evidence of past performance (arithmetic recomputation, 2026-10-25):

| Account | Risk at 1% | Entry | Stop | Risk per share | Shares | Position value | Capital deployed |
|---|---|---|---|---|---|---|---|
| ₹25,000 | ₹250 | ₹500 | ₹490 | ₹10 | 25 | ₹12,500 | 50% |
| ₹50,000 | ₹500 | ₹400 | ₹380 | ₹20 | 25 | ₹10,000 | 20% |
| ₹1,00,000 | ₹1,000 | ₹500 | ₹490 | ₹10 | 100 | ₹50,000 | 50% |

Check the ₹25,000 row: ₹250 ÷ ₹10 = 25 shares, and 25 × ₹500 = ₹12,500 deployed. Check the ₹1,00,000 row: ₹1,000 ÷ ₹10 = 100 shares, and 100 × ₹500 = ₹50,000 deployed. The formula is for long cash-segment shares and assumes a defined entry and stop.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Position size formula flow for small accounts: a 50,000 rupee account at 1 percent risk gives a 500 rupee risk budget, divided by 20 rupees risk per share gives 25 shares, floored to whole shares." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same formula, applied more strictly</text>
<rect x="40" y="80" width="170" height="90" rx="12" fill="#2a3a34"/><text x="125" y="116" text-anchor="middle" fill="#8fd6a0" font-size="12" font-weight="700">RISK BUDGET</text><text x="125" y="144" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">₹50,000 × 1%</text><text x="125" y="162" text-anchor="middle" fill="#f2f7f4" font-size="12">= ₹500</text>
<text x="228" y="136" text-anchor="middle" fill="#92a59c" font-size="20">÷</text>
<rect x="255" y="80" width="170" height="90" rx="12" fill="#2a3a34"/><text x="340" y="116" text-anchor="middle" fill="#e8c15a" font-size="12" font-weight="700">RISK PER SHARE</text><text x="340" y="144" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">₹400 − ₹380</text><text x="340" y="162" text-anchor="middle" fill="#f2f7f4" font-size="12">= ₹20</text>
<text x="443" y="136" text-anchor="middle" fill="#92a59c" font-size="20">=</text>
<rect x="470" y="80" width="170" height="90" rx="12" fill="#8fd6a0"/><text x="555" y="116" text-anchor="middle" fill="#1c2b26" font-size="12" font-weight="700">SHARES</text><text x="555" y="144" text-anchor="middle" fill="#1c2b26" font-size="20" font-weight="700">25</text><text x="555" y="162" text-anchor="middle" fill="#1c2b26" font-size="12">floored, always</text>
<text x="340" y="214" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Position value ₹10,000 · planned loss at the stop ₹500 · the 1% budget, by construction.</text>
<text x="340" y="242" text-anchor="middle" fill="#92a59c" font-size="11">Set the stop from the setup first. Never move the stop to manufacture shares.</text>
</svg>
</figure>

To try the maths on your own numbers, use the [Position Size Calculator](/tools/position-size/).

### What each number means — and what the formula cannot do

The stop must be a real, valid stop, set from the trade setup before you size the position. Never widen the stop — or the risk budget — to fit a share count you would prefer. If the stop distance changes, the share count changes; the risk budget does not.

The formula sizes the *planned* loss at the stop, not a guaranteed maximum. A stop-loss order does not guarantee execution at the stop price. If price gaps past the stop, or slippage occurs, the realised loss can be larger than the planned risk. The formula manages risk; it is not loss protection, and never a guarantee of profit.

One hypothetical illustration — not a real trade, and not a typical outcome — shows how large that gap can be. Take the ₹50,000 example above: 25 shares bought at ₹400 with a stop at ₹380, for a planned loss of 25 × ₹20 = ₹500 if the stop is hit. If the price gaps past the stop and the first available exit is ₹360 instead, the realised loss is 25 × (₹400 − ₹360) = 25 × ₹40 = ₹1,000 — double the planned ₹500, from the same 25 shares. That is why the planned loss is a plan, not a cap.

[Full Kelly sizing](/articles/kelly-criterion-calculator-for-traders/) is covered in separate articles in this series and is not re-derived here.

## Risk vs deployment: how 1% risk can still mean 50% of your capital in one stock

Risk and deployment are two different numbers, and confusing them is a specifically small-account mistake.

Risk is what you lose if the stop is hit. Deployment is the capital tied up while the trade is open. In the table above, the ₹25,000 account risks only ₹250 (1%) but deploys ₹12,500 — 50% of the account — in a single stock. The ₹50,000 account risks ₹500 (1%) and deploys ₹10,000 (20%). In both cases the risk is the same 1%, but the capital committed is very different — because a tight stop with a high share price can require a large position value to risk a small amount.

That matters for two practical reasons. First, a large deployment in one stock leaves little capital free for anything else, and for delivery trades it concentrates the account in a single name. Second, deployment is what you must actually fund: the position value has to fit in the account, even though the planned loss is only 1%. The examples above illustrate the distinction; they do not set a maximum deployment rule, and no universal deployment cap is claimed in this article. Before judging a trade as "small" because its risk is 1%, check both numbers: the rupees at risk if the stop hits, and the rupees deployed.

Open trades add up too — something the single-trade framing hides. Consider a hypothetical ₹50,000 account holding two trades at once, each sized at 1%: the first is the table's ₹50,000 example — ₹500 of risk deploying ₹10,000 (25 shares at ₹400 with a ₹380 stop) — and the second risks the same ₹500 on a ₹500 entry with a ₹490 stop, giving 50 shares (₹500 ÷ ₹10) and deploying ₹25,000. Added together, the account carries ₹500 + ₹500 = ₹1,000 of risk, which is 2% of the account, and ₹10,000 + ₹25,000 = ₹35,000 deployed, which is 70% of the account. Neither trade breaks the 1% rule on its own, but together they are a 2%-risk, 70%-deployed account. Always add open trades together before judging risk or deployment.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 340" role="img" aria-label="Risk versus capital deployed: the 25,000 rupee account risks 250 rupees, 1 percent, but deploys 12,500 rupees, 50 percent, while the 50,000 rupee account risks 500 rupees, 1 percent, but deploys 10,000 rupees, 20 percent." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">1% risk can still mean 50% of your capital in one stock</text>
<text x="140" y="80" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹25,000 account</text>
<text x="140" y="106" fill="#92a59c" font-size="11">Risk 1%</text><rect x="140" y="114" width="12" height="18" rx="6" fill="#8fd6a0"/><text x="162" y="128" fill="#f2f7f4" font-size="12">₹250</text>
<text x="140" y="152" fill="#92a59c" font-size="11">Deployed 50%</text><rect x="140" y="160" width="280" height="18" rx="9" fill="#e8825a"/><text x="430" y="174" fill="#f2f7f4" font-size="12">₹12,500</text>
<text x="140" y="212" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹50,000 account</text>
<text x="140" y="238" fill="#92a59c" font-size="11">Risk 1%</text><rect x="140" y="246" width="12" height="18" rx="6" fill="#8fd6a0"/><text x="162" y="260" fill="#f2f7f4" font-size="12">₹500</text>
<text x="140" y="284" fill="#92a59c" font-size="11">Deployed 20%</text><rect x="140" y="292" width="112" height="18" rx="9" fill="#e8825a"/><text x="262" y="306" fill="#f2f7f4" font-size="12">₹10,000</text>
<text x="340" y="332" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Check both numbers before calling a trade “small”.</text>
</svg>
</figure>

## Rounding down and the skip-trade rule: when the formula gives you a fraction — or zero shares

Indian cash-segment shares are bought in whole shares, so a fractional result must be rounded down, never up. Rounding up breaches the risk budget by definition — it buys more risk than the budget allows.

Take a small illustration (arithmetic recomputation, 2026-10-25): a ₹100 risk budget divided by ₹7.50 risk per share gives 13.33 shares. The correct size is 13 shares, which puts ₹97.50 at risk — under the ₹100 budget. Rounding up to 14 shares would put ₹105 at risk, over budget.

Sometimes the formula gives zero shares. That is an answer, not an error. Worked in full: a ₹10,000 account at 1% risk has a ₹100 risk budget. A setup with ₹150 risk per share cannot be taken at that stop with even one share, because floor(₹100 ÷ ₹150) = 0 shares. The correct responses are to skip the trade, or to find a tighter *valid* stop that the setup genuinely supports. What you must never do is widen the risk budget to fit the trade. Skipping a trade your account cannot afford is position sizing working as intended, not a missed opportunity.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 360" role="img" aria-label="Skip trade flowchart: risk budget divided by risk per share gives whole shares, a fraction rounded down, or zero shares — and zero shares means skip the trade." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Floor the shares — or skip the trade</text>
<rect x="170" y="60" width="340" height="44" rx="12" fill="#2a3a34"/><text x="340" y="88" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Shares = floor(budget ÷ risk per share)</text>
<text x="340" y="124" text-anchor="middle" fill="#92a59c" font-size="12">▼</text>
<rect x="90" y="134" width="500" height="44" rx="12" fill="#8fd6a0"/><text x="340" y="162" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">Whole number → take that many shares</text>
<rect x="90" y="192" width="500" height="44" rx="12" fill="#e8c15a"/><text x="340" y="220" text-anchor="middle" fill="#1c2b26" font-size="13" font-weight="700">Fraction → round DOWN (13.33 → 13, never 14)</text>
<rect x="90" y="250" width="500" height="44" rx="12" fill="#c0503c"/><text x="340" y="278" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">Zero shares → SKIP. Never widen the budget to fit.</text>
<text x="340" y="322" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Example: ₹100 budget ÷ ₹150 risk per share = 0 shares. The trade waits.</text>
</svg>
</figure>

## Costs on a small risk budget: why charges must be checked, not ignored

Charges matter disproportionately when the risk budget is only ₹250 to ₹1,000. A charge that looks trivial on a large account eats a visible share of a small risk budget — and it comes out of the trade's outcome whether or not you planned for it. No charge figure is stated in this section, because none is asserted here — what follows is a method you run on your own broker's figures, not a figure to copy.

Run it before sizing, in three steps, for the exact trade type you are about to place:

1. Open your own broker's charge breakdown for that trade type and nothing else — delivery and intraday breakdowns are different documents, and the wrong one gives the wrong total.
2. Add up every line item your broker shows for that trade type, so you have one total charge figure in rupees for the trade.
3. Set that total beside your risk budget — ₹250, ₹500, or whatever 1% of your account gives — before you calculate shares, and judge the trade on the two numbers together: the planned loss at the stop is not the whole cost picture, because charges are paid on top of it.

Delivery and intraday also change the sizing picture itself, not just the charges. A delivery trade is funded with the full position value and carries overnight gap exposure: the price can reopen well past the stop, as the gap illustration above shows. An intraday trade uses margin or leverage, so less capital is posted upfront, and the position does not carry overnight — but leverage does not change the loss at the stop, and it never justifies sizing by the margin posted instead of by the risk budget.

The decision rule follows. If charges take a material bite out of a small risk budget, the trade needs a tighter valid stop the setup genuinely supports, or it needs to be skipped. It never justifies a bigger risk budget: widening the budget to absorb charges is the same error as widening it to fit a share count. A trade that only works if you pretend charges do not exist is sized on incomplete maths.

## The scale-up ladder: when your position size is allowed to grow

Size grows in two ways. Only one of them needs a decision.

First, as the account grows, 1% automatically grows in rupee terms. A ₹25,000 account risking 1% risks ₹250 per trade; if that account grows to ₹50,000, the same 1% rule risks ₹500 per trade, and the share counts in the table above rise with it. No separate decision to "increase size" is needed for the rupee risk to rise — the formula does it on its own.

Second, any step-up in the risk percentage itself is earned by behaviour, not by hitting a balance number. The ladder here is guidance, not a rule with thresholds: consistent application of the sizing rule, stops set before sizing, rounding down every time, and skipping trades the account cannot afford. There are no streak counts, win-rate gates, or balance milestones in this ladder, and none should be read into it. If the sizing, stop, and skip rules are not being followed consistently, the account is not ready for more risk per trade — whatever its balance says. If they are being followed, the rupee risk is already growing with the account at the same percentage.

That behaviour standard can be made self-checkable without inventing a threshold. As guidance only — not a pass mark, and not a rule — run this short review checklist over your recent trades:

- Was the stop set from the setup before sizing, every time?
- Was the share count rounded down, every time?
- Were unaffordable trades skipped rather than forced?
- Were there no [revenge](/articles/revenge-trading/) or conviction overrides, where risk was raised after a loss or because a setup felt certain?

One workable habit, again as guidance only, is a short review against this checklist at the end of each week, looking back over that week's trades. The checklist tells you whether the behaviour standard is being met; it does not set a number of clean weeks, a win rate, or a balance that unlocks more risk, because none of those is claimed here.

## What not to do: conviction sizing, revenge sizing, and leverage-as-sizing

The formula does not prevent three failure modes, because all three override it.

**Conviction sizing** is raising risk because a setup "feels certain". Certainty does not change the stop maths: a wider risk budget on a confident trade still loses that larger amount if the stop is hit — and confidence is not an input in the formula.

**Revenge sizing** is raising risk after a loss to win it back quickly. The compounded losing-streak maths shows why: at 10% risk per trade, 10 straight losses compound to about a 65.1% drawdown, needing roughly 186% growth on what remains just to break even. Raising risk after losses pushes an account towards that column of the table, not away from it.

**Leverage-as-sizing** is using leverage to take a size the risk budget cannot afford. Leverage changes the margin posted, not the loss at the stop — and that holds only if the stop actually fills and liquidation does not happen first. Higher leverage moves liquidation closer to the entry price, so a leveraged position can be liquidated before the stop, making the realised loss larger than planned. Leverage is not a way to make a small account tradeable at a size its risk budget cannot afford.

## Risks and limitations: what position sizing cannot protect you from

Position sizing manages how much is at risk on a trade. It does not remove risk, and it guarantees no profit.

Trading can lose capital, including the full amount risked on a trade. A stop-loss order does not guarantee execution at the stop price: gaps and slippage can make realised losses larger than the planned risk. Leveraged positions can be liquidated before the stop is reached, making losses larger still. Futures and options are not a starting point for small accounts, because lot sizes and margins make them capital-heavy; that is practical guidance, not a regulatory prohibition. Nothing in this article is a stock recommendation, and the worked examples are hypothetical arithmetic illustrations, not real trades.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 320" role="img" aria-label="Compounded drawdown comparison across 10 straight losses: risking 1 percent per trade loses about 9.6 percent, while risking 10 percent per trade loses about 65.1 percent." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">10 straight losses: 1% vs 10% per trade</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">Losses compound — the same streak, two very different accounts left</text>
<text x="110" y="108" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Risk 1%</text>
<rect x="200" y="92" width="54" height="22" rx="11" fill="#8fd6a0"/><text x="264" y="108" fill="#f2f7f4" font-size="12" font-weight="700">−9.6% lost · 90.4% left</text>
<text x="110" y="158" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Risk 10%</text>
<rect x="200" y="142" width="366" height="22" rx="11" fill="#e8825a"/><text x="576" y="158" fill="#f2f7f4" font-size="12" font-weight="700">−65.1%</text>
<text x="340" y="208" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">At 10% risk, the account needs about 186% to recover. At 1%, about 11%.</text>
<text x="340" y="238" text-anchor="middle" fill="#92a59c" font-size="11">Small risk is not timidity. It is the difference between a bad week and a dead account.</text>
</svg>
</figure>

## Frequently asked questions

### How do I calculate position size for a small account?

Use the same formula as any account, then round down. Risk budget = account × risk% (at 1%, a ₹50,000 account gives ₹500). Risk per share = entry price − stop price (₹400 − ₹380 = ₹20). Shares = floor(₹500 ÷ ₹20) = 25 shares. The formula does not change for a small account; the rounding-down step and the occasional skip matter more, because whole shares and small budgets make fractions and zero-share results common.

### How much should I risk per trade with a small account?

This article recommends 1% per trade as its default guideline. It is a risk guideline, not a guarantee of profit or survival. The reason for keeping it small is the compounded streak maths: 10 straight losses at 1% risk compound to about a 9.6% drawdown, while the same streak at 10% risk compounds to about a 65.1% drawdown, needing roughly 186% growth on the remainder to break even (arithmetic recomputation, 2026-10-25).

### Is the 1% rule too conservative for a small account?

It feels small, and that feeling is the trap. Raising risk because ₹250 or ₹500 looks insignificant is how small accounts become smaller: the account is small, not the rule. A small risk budget still produces real share counts — 25 shares in both the ₹25,000 and ₹50,000 examples above — and it is what lets the account survive the losing streaks that every trader faces.

### What is the minimum capital needed to start trading in India?

For delivery trading, the technical minimum is the price of one share: there is no fixed exchange minimum beyond being able to buy a share. As practical guidance — not a regulation or exchange rule — one source suggests a learning range of ₹10,000–₹50,000 for delivery and swing trading. That range is practical guidance only, and it is the range in which the ₹25,000 and ₹50,000 examples in this article sit. Futures and options are not a starting point for small accounts, because lot sizes and margins make them capital-heavy.

### What if the formula gives me a fraction of a share?

Round down to whole shares, always. A result of 13.33 shares becomes 13 shares, because rounding up would breach the risk budget. If the result is below one share — for example, a ₹100 risk budget against ₹150 risk per share — the result is zero shares: skip the trade or re-plan it around a tighter valid stop. Never widen the risk budget to make a fractional or zero-share result fit.

### Should I use the same position size for every trade?

Use the same *risk* every trade, not the same share count. Share counts vary because stop distances vary: the ₹50,000 example gives 25 shares at ₹20 risk per share, while the ₹1,00,000 example gives 100 shares at ₹10 risk per share. Fix the risk percentage, let the stop distance set the share count, and the position size will differ from trade to trade by design.

### Does leverage change my position size?

No — leverage changes the margin posted, not the loss at the stop. A position sized to risk ₹500 at its stop still risks ₹500 at that stop whether leverage is used or not, provided the stop fills. The caveat matters: if the price gaps past the stop, or if higher leverage brings liquidation closer to the entry price and the position is liquidated before the stop, the realised loss can be larger than planned. Leverage must never be used to take a size the risk budget cannot afford.

### How much of my small account should one trade deploy?

There is no universal deployment cap to quote; the answer comes from the article's own worked maths. The ₹50,000 example deploys ₹10,000 (20% of the account) for 1% risk, while the ₹25,000 example deploys ₹12,500 (50%) for the same 1% risk. Deployment therefore has to be checked separately from risk on every trade, with a short checklist of questions per trade:

- How much capital is left free after this deployment?
- How concentrated is the account in this one name?
- Can the account fund the full position value, not just the planned loss?

If any of those answers is uncomfortable, that is the prompt to take a second look — not a cap, but a check that keeps the "no universal cap" answer actionable.

### When should I skip a trade because my account is too small?

Skip it when the formula gives zero shares at a valid stop. The worked case is a ₹10,000 account at 1% risk — a ₹100 risk budget — facing a setup with ₹150 risk per share: floor(₹100 ÷ ₹150) = 0 shares, so the trade cannot be taken at that stop. The alternatives are to skip it or to find a tighter valid stop the setup genuinely supports. Widening the risk budget to fit the trade is not a valid alternative.

### When can I increase my position size as my account grows?

In rupee terms, it increases automatically: 1% of a larger account is a larger amount, so the same rule produces larger risk budgets and larger share counts as the account grows. Any further increase in the risk percentage itself is behaviour-based guidance, not a threshold to pass: consistent use of the sizing rule, stops set before sizing, rounding down every time, and skipping unaffordable trades. No streak count, win-rate gate, or balance milestone is set here, because none was verified as a rule. As guidance only, a short weekly review against that checklist — stop set before sizing every time, rounded down every time, unaffordable trades skipped, no revenge or conviction overrides — is one workable way to judge your own consistency.

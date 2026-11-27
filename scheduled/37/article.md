---
title: "Protective Put Strategy: How to Insure Shares You Own, What It Costs, and When It Fails"
description: "A protective put caps loss at ₹130 per share in our ₹2,000/₹1,900/₹30 example. Learn the at-expiry floor, breakeven, payoff and when the premium is worth it."
meta_description: "A protective put caps loss at ₹130 per share in our ₹2,000/₹1,900/₹30 example. Learn the at-expiry floor, breakeven, payoff and when the premium is worth it."
date: 2026-11-12
author: Kaizen
tag: "Indian options · Strategies"
keywords: ["protective put strategy", "protective put payoff", "protective put breakeven", "protective put max loss", "protective put vs stop loss", "protective put vs covered call", "married put"]
---

*By Kaizen · 12 November 2026 · Monks Of Market*

You already own the shares. You do not want to sell them, but you do not want an ugly fall to wipe out months of patience either. A protective put strategy is the tool built for exactly that tension: you keep the shares, you pay a premium upfront, and in return your loss at expiry stops growing once the stock falls below a level you chose in advance.

That deal sounds simple, and the mechanics are. The judgement is harder, because the premium is gone whether the fall comes or not. This article works through one consistent example from start to finish, so you can see the floor, the breakeven, the cost in a flat market, and the ways the protection can still disappoint — before you pay anything.

All numbers in this article are per share, before brokerage, taxes and other charges; excluding charges is a stated assumption, not a separate calculation here. The ₹30 premium in the worked example is an illustrative assumption, not a live market quote, and no specific stock or expiry date is being recommended.

## What Is a Protective Put? Insurance for Shares You Already Own

A protective put is a two-part position on the same underlying: long stock you already own (or buy at entry) plus one long — that is, bought — put option against those shares, one put per lot of shares held.

The put gives you the right, not the obligation, to sell your shares at the strike price. If the stock finishes below the strike at expiry, the put lets you sell at the strike instead of at the fallen market price. Your loss therefore stops growing, no matter how far the stock falls below the strike — at expiry.

If the stock rises, you keep the upside. The put simply expires worthless, and the premium you paid is gone. That is the whole bargain, and the insurance analogy describes it well, provided you keep its limit in view:

- The **premium** is the insurance payment. You pay it upfront and it is a sunk cost whatever happens next.
- The gap between your purchase price and the strike is the **deductible**. You absorb that fall yourself before the protection bites.
- The **strike** is the coverage level. Below it, at expiry, the put pays out rupee for rupee against further falls.

Buying the stock and the put at the same time is often called a **married put**. That is the same position under a timing label, not a second strategy: the construction, the payoff, the maximum loss and the breakeven are identical. This article uses "protective put" throughout.

One qualification matters from the first paragraph onward. The floor a protective put gives you is an **at-expiry floor**. Before expiry, the put's value moves with implied volatility and time decay (theta), so the value of your combined position during the life of the option is not a guaranteed floor. Everything that follows about capped loss is expiry maths, not a promise about what your position will be worth next week.

## How a Protective Put Works, Step by Step

The construction follows a fixed order:

1. **Own, or buy, the shares.** A protective put protects shares you hold. Without the shares, a bought put on its own is a different position entirely — a directional bet on a fall, not insurance on a holding.
2. **Buy a put on the same underlying, in the matching quantity.** One put per lot of shares held. The put must be on the very same stock: an index put does not hedge a single stock, because its payoff depends on the index level, not on your stock's price. A stock can fall while its index rises, leaving the "hedge" paying nothing.
3. **Pay the premium upfront.** This is the full price of the insurance. It leaves your account at entry and is not refunded if the stock rises, stays flat, or falls only a little.
4. **Hold to expiry for the floor to be fully realised.** The protection, as priced in the formulas below, is an expiry outcome. You can sell the put in the market before expiry — selling a position is not the same act as exercising an option — but the price you get then will reflect time value and implied volatility at that moment, not just the stock's price.
5. **Settle at expiry.** In India, stock options are European-style, which means they can be exercised only at expiry, not early. They are also physically settled at expiry, so an exercised in-the-money stock put results in shares changing hands — for a holder who already owns them, they can be delivered against the exercised put.

That European-style, physically settled structure is why the expiry framing matters. There is no early-exercise story here: you cannot exercise a protective put halfway through because the market looks scary. You hold a right that becomes exercisable at expiry, and until then its market value will move for reasons — time decay, volatility changes — that have nothing to do with whether your shares are up or down today.

## The Worked Example: Buy at ₹2,000, ₹1,900 Put, ₹30 Premium

Here is the one example this article uses throughout. The numbers are deliberately round so every later section can be checked against them:

- Buy the stock at **₹2,000 per share**.
- Buy a put with a strike price of **₹1,900 per share**.
- Pay a premium of **₹30 per share** (illustrative assumption, not a live quote).

From those three numbers, the position's shape is fixed:

- The **deductible** is ₹2,000 − ₹1,900 = **₹100 per share**. You absorb the first ₹100 of any fall yourself.
- The **maximum loss** is ₹100 + ₹30 = **₹130 per share**, before charges. That is the worst expiry outcome, suffered whenever the stock finishes at or below ₹1,900.
- The **floor** is the ₹1,900 strike level: at expiry, the combined value of stock plus put is ₹1,900 per share whenever the stock is at or below ₹1,900. That is the position's value before the ₹30 premium already paid — it is not a net floor of ₹1,900. Against your ₹2,000 purchase price plus ₹30 premium paid, the ₹1,900 expiry value is exactly the ₹130 maximum loss.
- The **breakeven** is ₹2,000 + ₹30 = **₹2,030 per share**. The stock must rise ₹30 above your purchase price before the position turns profitable at expiry.
- The **upside is unlimited in principle, minus the ₹30 premium**. A stock can, in theory, rise without limit, and every rupee above ₹1,900 flows to the combined position, less the premium already paid. "Unlimited" here is a property of the payoff shape, not a forecast.

Now walk through the four expiry zones, using the formula: profit or loss per share = (expiry price − ₹2,000) + put payoff − ₹30, where the put payoff is ₹1,900 minus the expiry price when that is positive, and zero otherwise.

| Expiry price per share | Stock gain/loss | Put payoff | Less premium | Net profit/loss per share |
|---|---:|---:|---:|---:|
| ₹1,500 | −₹500 | +₹400 | −₹30 | **−₹130** |
| ₹1,700 | −₹300 | +₹200 | −₹30 | **−₹130** |
| ₹1,900 (at the strike) | −₹100 | ₹0 | −₹30 | **−₹130** |
| ₹1,950 | −₹50 | ₹0 | −₹30 | **−₹80** |
| ₹2,000 (purchase price) | ₹0 | ₹0 | −₹30 | **−₹30** |
| ₹2,030 (breakeven) | +₹30 | ₹0 | −₹30 | **₹0** |
| ₹2,100 | +₹100 | ₹0 | −₹30 | **+₹70** |
| ₹2,500 | +₹500 | ₹0 | −₹30 | **+₹470** |

Read the zones in order:

**Well below the strike — ₹1,500 or ₹1,700.** The loss is ₹130 either way. That is the point of the hedge: once the stock is below ₹1,900 at expiry, every further rupee of stock loss is matched by a rupee of put payoff, so the net loss stops growing.

**At the strike — ₹1,900.** This is the boundary case, and it is also a maximum-loss case. The put has zero intrinsic value at expiry here, so the full ₹100 deductible plus the ₹30 premium is lost.

**Between the strike and the breakeven — ₹1,950 and ₹2,000.** The loss narrows as the price rises: −₹80 at ₹1,950, −₹30 at ₹2,000. Notice that the put pays nothing in this zone — the stock is above the strike — so the position is simply the stock's movement minus the premium. The loss does not jump from −₹130 to zero; it narrows gradually.

**Above the breakeven — ₹2,030, ₹2,100, ₹2,500.** At ₹2,030 the position breaks even. At ₹2,100 it makes ₹70 per share. At ₹2,500 it makes ₹470 per share. Above the strike, the payoff rises linearly with the stock, one rupee for one rupee, minus the premium.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Protective put payoff diagram showing a flat maximum loss of ₹130 per share below the ₹1,900 strike, a rising line above it, the ₹1,900 to ₹2,000 deductible zone, and breakeven at ₹2,030." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Protective put payoff at expiry — floored loss, open upside</text>
<line x1="60" y1="210" x2="620" y2="210" stroke="#92a59c" stroke-width="1"/>
<rect x="258" y="180" width="42" height="90" fill="#e8825a" opacity="0.20"/>
<polyline points="90,256 258,256 300,221 313,210 510,46" fill="none" stroke="#e8825a" stroke-width="3"/>
<line x1="258" y1="60" x2="258" y2="285" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="313" y1="60" x2="313" y2="285" stroke="#92a59c" stroke-width="1" stroke-dasharray="4 4"/>
<text x="174" y="278" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Flat at −₹130 (max loss)</text>
<text x="258" y="300" text-anchor="middle" fill="#e8825a" font-size="12">Strike ₹1,900</text>
<text x="313" y="66" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">BE ₹2,030</text>
<text x="279" y="196" text-anchor="middle" fill="#f2f7f4" font-size="11">Deductible ₹100</text>
<text x="90" y="236" text-anchor="middle" fill="#f2f7f4" font-size="12">₹1,500</text>
<text x="510" y="66" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">+₹470 at ₹2,500</text>
<text x="340" y="316" text-anchor="middle" fill="#92a59c" font-size="12">At-expiry floor: loss stops growing below the strike</text>
</svg>
</figure>

## Protective Put Formulas: Maximum Loss, Breakeven, and Maximum Profit

Stated per share, before charges, and tied to the example above:

- **Maximum loss = (purchase price − strike price) + premium paid.** In the example: (₹2,000 − ₹1,900) + ₹30 = **₹130 per share**. Suffered at any expiry price at or below the strike.
- **Breakeven = purchase price + premium paid.** In the example: ₹2,000 + ₹30 = **₹2,030 per share**. The stock must rise by at least the premium above your purchase price before the position is profitable at expiry.
- **Maximum profit = unlimited in principle, minus the premium paid.** In the example, profit above the strike is (expiry price − ₹2,000) − ₹30. There is no cap built into the position, unlike an income strategy that sells away upside — but "unlimited" is maths, not a promise that any stock will rise.

One formula note, not a second example: if the strike equalled the purchase price — an at-the-money put — the deductible would be zero and the maximum loss would be simply the premium. That is the same formula with the purchase-price-minus-strike term at zero, and it shows why tighter protection costs more: shrinking the deductible means buying a higher strike, and higher strikes generally carry higher premiums.

## Is the Insurance Worth Buying? Held Outright vs Held With a Protective Put

Compare the same stock, held outright versus held with the ₹1,900 put at ₹30 premium, at three expiry outcomes. The outright column is just the stock's movement; the protected column is the stock's movement plus any put payoff, minus the premium.

| Expiry outcome | Held outright (per share) | Held with protective put (per share) | What the put did |
|---|---:|---:|---|
| Sharp fall to ₹1,500 | −₹500 | **−₹130** | Saved ₹370; loss capped at expiry |
| Flat at ₹2,000 | ₹0 | **−₹30** | Cost the full premium; nothing to protect against |
| Strong rally to ₹2,500 | +₹500 | **+₹470** | Trimmed the rally by exactly the ₹30 premium |

In the sharp fall, the put earns its keep: a ₹500 outright loss becomes a ₹130 loss at expiry. In the flat outcome, the put is pure cost — the shares went nowhere, and ₹30 per share is gone. In the strong rally, the put is a small, fixed tax on a good outcome: ₹470 instead of ₹500. The upside is not capped; it is reduced by the premium, and only by the premium.

Any talk of "peace of mind" has to sit beside the next number, because insurance bought repeatedly is a recurring drag, not a one-off fee. Suppose the feared fall never comes, and you repeat the same hedge for four quarters, paying the assumed ₹30 premium each time. That is 4 × ₹30 = **₹120 per share** in premium, which is **6.0% of the ₹2,000 purchase price**, before charges. That figure is arithmetic on the stated assumption that each quarter's premium is ₹30 — real premiums will differ by strike, expiry and volatility — but the point stands: a hedge repeated in calm markets quietly eats returns quarter after quarter, even when every individual decision looked prudent at the time.

So the worth question is not "is insurance good?" but "is this fall, of this size, over this window, worth ₹30 per share to insure against?" As a hypothetical illustration, unrelated to this example's own 1.5% premium (₹30 on ₹2,000), insuring a 5% wobble with a 4% premium is a bad trade even when the mechanics work perfectly. The premium must be judged against the size of the fall being insured against, not against the comfort of holding the put.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 345" role="img" aria-label="Comparison chart of holding a stock outright versus with a protective put at expiry: sharp fall, flat outcome and strong rally, per share." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Held outright vs held with a protective put — per share at expiry</text>
<rect x="98" y="170" width="52" height="110" fill="#92a59c"/>
<text x="124" y="302.0" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹-500</text>
<rect x="162" y="170" width="52" height="29" fill="#e8825a"/>
<text x="188" y="220.6" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹-130</text>
<text x="156" y="326" text-anchor="middle" fill="#f2f7f4" font-size="12">Sharp fall to ₹1,500</text>
<rect x="298" y="170" width="52" height="3" fill="#92a59c"/>
<text x="324" y="162.0" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹+0</text>
<rect x="362" y="170" width="52" height="7" fill="#e8825a"/>
<text x="388" y="198.6" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹-30</text>
<text x="356" y="326" text-anchor="middle" fill="#f2f7f4" font-size="12">Flat at ₹2,000</text>
<rect x="498" y="60" width="52" height="110" fill="#92a59c"/>
<text x="524" y="52.0" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹+500</text>
<rect x="562" y="67" width="52" height="103" fill="#e8825a"/>
<text x="588" y="58.599999999999994" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">₹+470</text>
<text x="556" y="326" text-anchor="middle" fill="#f2f7f4" font-size="12">Rally to ₹2,500</text>
<text x="170" y="56" text-anchor="middle" fill="#92a59c" font-size="12">■ Outright</text>
<text x="300" y="56" text-anchor="middle" fill="#e8825a" font-size="12">■ With protective put</text>
<line x1="60" y1="170" x2="620" y2="170" stroke="#92a59c" stroke-width="1"/>
</svg>
</figure>

## Protective Put vs Stop Loss: Why a Gap-Down Is the Real Contrast

A stop loss and a protective put are often presented as interchangeable forms of protection. They are not, and a gap-down shows why. The contrast is strictly between expiry maths and order-execution mechanics — not a promise about interim value.

A protective put's expiry payoff does not depend on the path the stock took to get there. Whether the stock drifted down to ₹1,500 or gapped straight through the ₹1,900 strike overnight, the expiry maths in the worked example is the same: loss capped at ₹130 per share, provided the position is held to expiry. The put does not need to be "triggered" at a price, and it cannot be skipped over by a gap.

A stop-loss market order works differently. Once triggered, it becomes a market order and executes at the next available price — which, after a gap-down, can be well below the stop level. That is slippage, and it is the ordinary mechanics of market orders, not a malfunction. A stop-limit order avoids the worst fill, but at a different cost: it risks not filling at all if the price never comes back to the limit.

That is the protective put's real edge over a stop loss, and also its limit. The edge is about the expiry payoff surviving a gap. It is not a promise that the put's interim value during the gap will look like the expiry payoff — before expiry, implied volatility and time decay still move the put's market value. And a stop loss has its own genuine advantages this article does not dismiss: it costs no upfront premium, and it exits the position rather than paying to hold through trouble. The choice is between paying premium for gap-proof expiry maths, and paying nothing for an order that may fill far from where you intended.

## Protective Put vs Covered Call: A Mirror Image, Not a Second Strategy

The protective put and the covered call are mirror images of each other, and the contrast is worth exactly one clear statement. A protective put **costs premium and keeps upside uncapped**: you pay ₹30 per share in the example to put a floor under losses while keeping every rupee of a rally above breakeven. A covered call does the opposite: it **earns income and caps upside**, taking in premium in exchange for giving away gains above a chosen level.

That is the whole comparison this article needs: a trader who wants income and accepts a ceiling on gains is describing a different problem from one who wants downside insurance and is willing to pay for it. The covered call is mentioned here only as a pointer to the staged sibling spoke on the topic — it gets no construction, worked example or payoff diagram here. If your actual goal is income from shares you hold, the protective put is the wrong tool.

## When to Use a Protective Put

A protective put fits when the reason for hedging is specific, temporary, and honestly stated. The genuine use cases are:

- **Staying invested through a named risk window without selling.** Earnings, a results season, or a policy announcement is coming, you want to keep the shares, and you want the downside of that window bounded at expiry. The expiry should cover the window and no longer — protection bought for a calm year is premium burned month after month.
- **Sitting on a gain you do not want to give back, but do not want to bank by selling.** The put sets a floor under the position at expiry while leaving the shares in place, so a further rally is still yours, minus the premium.
- **Conviction intact, near-term downside tolerance limited.** You still believe in the holding over your real horizon, but you cannot comfortably absorb a sharp near-term fall. The put bridges that mismatch between long-term conviction and short-term tolerance.

A protective put is not for hedging every position permanently. A standing, always-on hedge turns the repeated-premium drag from the earlier section — ₹120 per share over four quarters on the illustrative assumption — into a permanent cost of holding shares. Insurance is bought for a risk window. If there is no window, there is no hedge to justify.

## How to Choose the Strike and Expiry

Strike and expiry are the two choices that set both the protection and its price, and both are directional trade-offs, not rules with quoted premiums. Actual premiums depend on volatility, time to expiry and market conditions at the time, none of which are quoted here.

**Strike choice is a deductible choice.** A higher strike gives a tighter floor — a smaller deductible — but generally costs more premium. A lower strike is cheaper but leaves a bigger deductible, so a modest fall may barely be cushioned at all. Decide the deductible before you buy: how much of a fall are you willing to absorb yourself? The answer to that question picks the strike; shopping for the cheapest premium first picks it backwards.

**Expiry choice is a window choice.** A longer expiry generally costs more and decays more slowly; a shorter expiry is cheaper but its protection ends sooner, and its value decays faster near expiry. Match the expiry to the named risk window — long enough to cover the event you are actually worried about, not so long that you are paying for months of calm you do not need to insure. Choosing the cheapest premium regardless of expiry is how a holder ends up unprotected on the day the event actually lands.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 290" role="img" aria-label="Protective put strike selection illustration showing how a higher strike means a smaller deductible and higher premium, and a lower strike means a bigger deductible and lower premium." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Strike choice is a deductible choice (purchase ₹2,000)</text>
<line x1="410" y1="80" x2="470" y2="80" stroke="#e8825a" stroke-width="10" opacity="0.55"/>
<circle cx="410" cy="80" r="5" fill="#e8825a"/>
<circle cx="470" cy="80" r="5" fill="#f2f7f4"/>
<text x="410.0" y="66" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Strike ₹1,950</text>
<text x="440.0" y="106" text-anchor="middle" fill="#f2f7f4" font-size="11">Deductible ₹50</text>
<line x1="350" y1="145" x2="470" y2="145" stroke="#e8825a" stroke-width="10" opacity="0.55"/>
<circle cx="350" cy="145" r="5" fill="#e8825a"/>
<circle cx="470" cy="145" r="5" fill="#f2f7f4"/>
<text x="350.0" y="131" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Strike ₹1,900</text>
<text x="410.0" y="171" text-anchor="middle" fill="#f2f7f4" font-size="11">Deductible ₹100</text>
<line x1="230" y1="210" x2="470" y2="210" stroke="#e8825a" stroke-width="10" opacity="0.55"/>
<circle cx="230" cy="210" r="5" fill="#e8825a"/>
<circle cx="470" cy="210" r="5" fill="#f2f7f4"/>
<text x="230.0" y="196" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Strike ₹1,800</text>
<text x="350.0" y="236" text-anchor="middle" fill="#f2f7f4" font-size="11">Deductible ₹200</text>
<text x="470.0" y="56" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Purchase ₹2,000</text>
<text x="340" y="268" text-anchor="middle" fill="#92a59c" font-size="12">Higher strike = smaller deductible, higher premium; lower strike = bigger deductible, lower premium</text>
</svg>
</figure>

## When a Protective Put Fails — and What to Do About Each Failure

A protective put can fail without anything going wrong mechanically. Knowing the failure modes in advance is what separates using the tool from merely buying it.

**1. The feared fall never comes — the premium is lost in full.**
If the stock stays above the strike to expiry, the put expires worthless and the ₹30 per share is gone, whatever the shares did. That is not a defect; it is the price of insurance that was not claimed on. The fix is discipline before entry: hedge only a named risk window, with expiry matched to that window, and never run an open-ended standing hedge by default.

**2. A small fall lands inside the deductible — the put barely helps.**
If the stock falls from ₹2,000 to ₹1,950, the put pays nothing at expiry: the stock is still above the ₹1,900 strike. The position loses ₹80 per share — ₹50 on the stock plus the ₹30 premium — and the holder can feel cheated by a hedge that did nothing. The fix is the strike choice made honestly beforehand: a deductible is a deductible, and a fall smaller than it was never going to be covered.

**3. Volatility crush after the event — interim value shrinks even if the stock drifts down a little.**
After a scheduled event passes, implied volatility often falls, and that can shrink the put's time value overnight — even on a day when the stock moved in the holder's favour. The fix is not a strike or expiry choice that prevents the crush — it is to choose expiry and strike for the event itself, not the cheapest premium, and to remember the distinction: at expiry only intrinsic value remains, so volatility crush does not change the expiry payoff maths. It changes what the put is worth if you sell it before expiry, which is a different decision from holding the hedge to expiry.

**4. A mismatched hedge — an index put for a stock, or the wrong quantity.**
An index put pays on the index, not on your stock, so stock-specific falls go unhedged. Buying too few puts leaves part of the position naked; the unhedged shares fall without any floor. The fix is a quantity check before entry: same underlying as the shares held, one put per lot, and no substitution of an index product for a single-stock hedge.

**5. Illiquid chains and wide spreads eat the protection.**
In a thinly traded option chain, the gap between buying and selling prices can be wide enough that a meaningful slice of the protection is lost to trading costs alone, before any market move. No spread figure is quoted here — the point is the check, not a threshold. The fix is a liquidity and net-of-charges check before buying: if the chain is too thin to trade at a sensible price, the hedge is not worth entering at that strike or expiry.

**6. Selling the put early in a panic — for less than its expiry value.**
Mid-fall, the combined position's market value can look worse than the expiry maths promises, because time value and volatility are moving against the holder at that moment. Selling the put then locks in that interim value and abandons the floor the hedge was bought for. The fix is to remember the hedge's job: it is an expiry instrument. Interim value is not the floor, and judging an expiry hedge by an interim quote is how a holder pays the premium and still takes the full fall.

## Protective Put Checklist Before You Enter

Run this in order, before paying any premium:

1. **Same underlying.** The put is on the exact stock you hold — not an index, not a related company.
2. **Correct quantity.** One put per lot of shares held, checked before entry, so no part of the position is left naked.
3. **Strike chosen as a deductible you accept.** You can state, in rupees per share, how much of a fall you will absorb yourself before protection bites.
4. **Expiry matched to the named risk window.** The window is named — an event, a results season, a date range — and the expiry covers it without paying for months beyond it.
5. **Liquidity and net-of-charges check done.** The chain trades at a sensible price, and the premium is judged after charges, not before them.
6. **Premium judged against the fall being insured.** The premium is small relative to the fall you are insuring against. Insuring a hypothetical 5% wobble with a 4% premium — unrelated to this example's 1.5% premium — is a bad trade even when the mechanics work.
7. **No permanent-hedge drift.** This hedge has an end date. If the window passes without a fall, the premium is gone, the hedge ends, and the next hedge — if any — needs a fresh reason, not inertia.

## Protective Put FAQs

**What is a protective put in options trading?**
A protective put is long stock you own plus one long put option on the same underlying, one put per lot of shares held. The put gives you the right to sell at the strike price, so at expiry your loss stops growing once the stock falls below the strike — in exchange for the premium you paid upfront.

**How does a protective put work, step by step?**
Own or buy the shares, buy a put on the same stock in the matching quantity, pay the premium upfront as a sunk cost, and hold to expiry for the floor to be fully realised. Indian stock options are European-style and physically settled, so exercise happens only at expiry; before expiry the put's market value moves with implied volatility and time decay, and selling the put early is not the same act as exercising it.

**What is the maximum loss and breakeven in a protective put?**
In the worked example — buy at ₹2,000, ₹1,900 put, ₹30 premium — the maximum loss is (₹2,000 − ₹1,900) + ₹30 = ₹130 per share, before charges, suffered at any expiry price at or below ₹1,900. The breakeven is ₹2,000 + ₹30 = ₹2,030 per share. In general, maximum loss = (purchase price − strike) + premium, and breakeven = purchase price + premium.

**Is a protective put worth the premium cost?**
It depends on the fall you are insuring against and the window you are insuring over. In the example, the put turns a ₹500 outright loss at ₹1,500 into a ₹130 loss, but costs the full ₹30 if the stock ends flat at ₹2,000, and trims a rally to ₹2,500 from ₹500 to ₹470. Repeated every quarter at the assumed ₹30, the drag is ₹120 per share, or 6.0% of the purchase price, before charges. The premium is worth it when the insured fall is large relative to the premium and the window is real; it is not worth it as a permanent, always-on cost.

**Protective put vs stop loss: which protects better in a gap-down?**
On expiry maths, the protective put protects better: a gap through the strike does not change its expiry payoff, so the loss in the example stays capped at ₹130 per share. A stop-loss market order triggered by a gap executes at the next available price, which can be well below the stop level, while a stop-limit order risks not filling at all. That contrast is about expiry maths versus order execution — it is not a promise about the put's interim value during the gap, and a stop loss has the genuine advantage of costing no upfront premium.

**Protective put vs covered call: what is the difference?**
They are mirror images. A protective put costs premium and keeps upside uncapped: you pay to put a floor under losses. A covered call earns income and caps upside: you take in premium in exchange for giving away gains above a level. One buys insurance, the other sells upside for income — they solve different problems, and the covered call is covered in its own staged sibling spoke.

**What is a married put, and is it the same as a protective put?**
Yes. A married put is the same position — long stock plus a long put on the same underlying — named for the timing of buying the stock and the put at the same time. It is a synonym, not a second strategy, and its payoff, maximum loss and breakeven are identical.

**When should you use a protective put?**
When you want to stay invested through a named risk window without selling, when you are sitting on a gain you do not want to give back but do not want to bank by selling, or when your conviction is intact but your near-term downside tolerance is limited. In each case, match the expiry to the window, and do not hedge every position permanently.

**Can you lose money with a protective put?**
Yes. In the worked example the maximum loss is ₹130 per share, before charges — the ₹100 deductible plus the ₹30 premium — and that loss is suffered in full at any expiry price at or below ₹1,900. If the stock ends above the strike, the full ₹30 premium is lost even though the shares may have risen. A protective put limits loss at expiry; it does not remove it.

**Does a protective put cap your upside?**
No. Above the strike, the position rises rupee for rupee with the stock, with no cap — in the example, a rally to ₹2,500 gives ₹470 per share. The premium trims the rally by exactly ₹30 per share, and the stock must first rise to the ₹2,030 breakeven before the position is profitable.

**How do you choose the strike price for a protective put?**
Choose it as a deductible, not by shopping for the cheapest premium. A higher strike means a smaller deductible and a tighter floor, but generally a higher premium; a lower strike is cheaper but leaves a bigger deductible, so small falls go uncompensated. Decide how much of a fall you will absorb yourself, then pick the strike that matches that deductible, with expiry matched to your risk window.

**What happens if the stock rises and the put expires worthless?**
You keep the shares and the full rally, minus the premium. In the example, a rise to ₹2,100 leaves a ₹70 per share profit (₹100 on the stock, less ₹30 premium), and a rise to ₹2,500 leaves ₹470. The put expiring worthless is the normal outcome of insurance that was not needed — the cost was the premium, paid upfront, and it is gone whether or not the protection was used.

---

*Risk note: this article explains how a protective put works; it is not a recommendation to buy any particular option or to hedge any particular holding. Option premiums are illustrative here, not live quotes. All expiry figures are per share, before brokerage, taxes and other charges, and the floor described is an at-expiry floor — interim values move with volatility and time decay. A protective put can still lose money, up to its maximum loss, and repeating the hedge adds premium cost each time.*
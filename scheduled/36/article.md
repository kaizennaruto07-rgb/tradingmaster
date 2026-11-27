---
title: "Covered Call Strategy: How Selling a Call Against Shares You Own Really Works — and Where It Fails"
description: "Covered call strategy: one worked example (buy ₹2,000, sell ₹2,100 call for ₹40) with payoff, breakeven, max profit, max loss, and the honest income test."
meta_description: "Covered call strategy: one worked example (buy ₹2,000, sell ₹2,100 call for ₹40) with payoff, breakeven, max profit, max loss, and the honest income test."
date: 2026-11-12
author: Kaizen
tag: "Indian options · Strategies"
keywords: ["covered call strategy", "covered call payoff", "covered call breakeven", "covered call max profit", "covered call vs protective put", "covered call example"]
---

*By Kaizen · 12 November 2026 · Monks Of Market*

If you own shares and someone offers you money for the right to buy them from you at a fixed price, should you take it? That is the covered call in one sentence — and the answer depends entirely on what you give up in exchange. This guide answers the questions that matter before you sell a call against shares you own: how the trade is built, exactly where the profit caps, what happens if the stock falls hard, and when the trade fails.

The short answer is that a covered call trades upside for income. You collect a premium upfront and keep it whatever happens. In exchange, your profit stops at the strike price, no matter how far the stock runs — and you still own nearly all of the downside if the stock falls. Whether that trade is worth making depends on your view of the stock, the strike you choose, and whether you are genuinely happy to sell your shares at that strike.

## What a Covered Call Is — and the Deal You Are Making

A **covered call strategy** is a neutral-to-moderately-bullish, income-oriented position built from two legs on the same underlying:

- **Long stock:** shares you already own, or buy at entry.
- **Short call:** one call option sold against those shares — one short call per lot of shares held.

It is called "covered" because the shares you hold cover the delivery obligation if the call buyer exercises. If the stock finishes at or above the strike at expiry, your shares are called away at the strike. Sell the same call without owning the shares and you have a naked call — a different and far riskier trade, named here only as the contrast.

The deal, stated plainly, is this: you collect the call premium upfront and keep it whatever happens, in exchange for capping your upside at the strike price. If the stock finishes at or above the strike, you keep the stock gain up to the strike plus the premium, and you forfeit every rupee of upside beyond the strike. If the stock finishes below the strike, the call expires worthless, you keep the premium and the shares, and you may sell another call.

One Indian-market point matters before anything else: a covered call is a **stock option** trade. You must actually hold the shares, in the market lot for that stock. Index options cannot be "covered" by holding shares in the same way, and this article does not present them as a covered-call vehicle. Indian stock options are European-style — they can only be exercised at expiry — and they are physically settled, meaning actual shares change hands at expiry. The classic early-assignment-before-ex-dividend story you may read elsewhere belongs to American-style stock options traded abroad, not to Indian stock options.

## How a Covered Call Works, Step by Step

1. **Own (or buy) the shares.** The position starts with the stock, not the option. The shares are the cover.
2. **Sell one call per lot held.** Choose a strike above the current price and an expiry. The premium lands in your account upfront.
3. **Wait, manage, or close early.** You can buy the call back before expiry, roll it to another strike or expiry, or hold it to expiry — each choice is covered later in this article.
4. **At expiry, one of two things happens.** If the stock is below the strike, the call expires worthless and you keep the premium and the shares. If the stock is at or above the strike, the call is exercised and your shares are delivered at the strike — you keep the gain up to the strike plus the premium, and the upside beyond the strike is gone.

That is the whole machine. Everything else in this article is about pricing that machine correctly: what the premium is actually paying you for, and what it is not paying you for.

## One Worked Example, End to End

Every number in this article comes from one example, carried through every section so you can check each figure against the last. The assumptions are stated here once and hold throughout:

- You buy (or already own) the stock at **₹2,000 per share**.
- You sell a call with a strike of **₹2,100**, expiring in about a month.
- You receive a premium of **₹40 per share**.
- The premium is **illustrative** — it is a teaching number, not a live market quote.
- All figures are **per share** and **before brokerage, taxes, and exchange charges**. Charges narrow every profit and deepen every loss in practice; they are a stated assumption here, not a table.

### Four Expiry Zones, One Set of Numbers

**Below breakeven — stock at ₹1,900.** The call expires worthless and you keep the ₹40 premium, but the stock has fallen ₹100. Net result: a loss of **₹60 per share** (₹100 stock loss minus ₹40 premium). The premium softened the fall; it did not prevent it.

**Between breakeven and strike — stock at ₹2,050.** The call still expires worthless. The stock has gained ₹50 and you keep the ₹40 premium. Net result: a profit of **₹90 per share**.

**At the strike — stock at ₹2,100.** The call is exercised and your shares are delivered at ₹2,100. You keep the ₹100 stock gain plus the ₹40 premium. Net result: a profit of **₹140 per share** — the maximum this position can make.

**Above the strike — stock at ₹2,300.** Your shares are still delivered at ₹2,100, not ₹2,300. The profit is still **₹140 per share**. The ₹200 per share of upside above the strike belongs to the call buyer, not to you. Compared with simply holding the stock, which would have gained ₹300 per share at ₹2,300, you have given up ₹160 per share net of the premium you collected.

| Stock price at expiry | Call outcome | Profit / loss per share |
| --- | --- | --- |
| ₹1,900 | Expires worthless | −₹60 |
| ₹1,960 | Expires worthless | ₹0 (breakeven) |
| ₹2,050 | Expires worthless | +₹90 |
| ₹2,100 | Exercised, shares delivered | +₹140 (maximum profit) |
| ₹2,300 | Exercised, shares delivered | +₹140 (upside capped) |

## The Three Formulas: Maximum Profit, Breakeven, Maximum Loss

From the example, the three formulas a covered call writer needs:

- **Maximum profit (per share, before charges) = (strike price − stock purchase price) + premium received.** In the example: (₹2,100 − ₹2,000) + ₹40 = **₹140 per share**, achieved only when the stock is at or above the strike at expiry and the shares are called away.
- **Breakeven (per share) = stock purchase price − premium received.** In the example: ₹2,000 − ₹40 = **₹1,960**. Below this price at expiry the position loses money; above it (up to the strike) it profits.
- **Maximum loss (per share, before charges) = stock purchase price − premium received.** In the example: ₹2,000 − ₹40 = **₹1,960 per share**, suffered only if the stock falls to zero. Read that number twice: the premium is a small cushion, not downside protection. The position keeps essentially the whole downside of owning the stock.

## Reading the Payoff Diagram

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Covered call payoff diagram showing breakeven at ₹1,960, maximum profit of ₹140 per share at the ₹2,100 strike, and capped upside above the strike." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Covered call payoff at expiry — rise, then a hard ceiling</text>
<line x1="60" y1="210" x2="620" y2="210" stroke="#92a59c" stroke-width="1"/>
<polygon points="420,90 620,90 620,30 420,30" fill="#e8825a" opacity="0.25"/>
<polyline points="420,90 620,30" fill="none" stroke="#e8825a" stroke-width="2" stroke-dasharray="6 4"/>
<polyline points="60,270 240,210 420,90 620,90" fill="none" stroke="#e8825a" stroke-width="3"/>
<line x1="240" y1="70" x2="240" y2="270" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="420" y1="70" x2="420" y2="270" stroke="#e8825a" stroke-width="1" stroke-dasharray="4 4"/>
<text x="240" y="288" text-anchor="middle" fill="#e8825a" font-size="12">BE 1,960</text>
<text x="420" y="288" text-anchor="middle" fill="#f2f7f4" font-size="12">Strike 2,100</text>
<text x="520" y="76" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Ceiling +₹140 / share</text>
<text x="540" y="48" text-anchor="middle" fill="#92a59c" font-size="12">Forfeited upside</text>
<text x="70" y="258" text-anchor="start" fill="#f2f7f4" font-size="12">Fall = stock-like</text>
<text x="340" y="294" text-anchor="middle" fill="#92a59c" font-size="12">Above the strike the profit stops at ₹140, however high the stock runs</text>
</svg>
</figure>

The shape tells the whole story at a glance. From the breakeven at ₹1,960, the payoff rises rupee for rupee with the stock until the strike at ₹2,100. Then it stops — a hard, flat ceiling at ₹140 per share — no matter how high the stock climbs. Below the breakeven, the line falls with the stock, almost exactly as owning the stock outright would. It is the mirror image of the protective put's floored shape: where a protective put puts a floor under your losses, a covered call puts a ceiling over your gains.

## The Income Honesty Test: Same Stock, Three Outcomes

This is the section most "earn steady income" pitches skip. Take the same stock, held two ways, and compare the outcomes at expiry:

| Outcome at expiry | Holding the stock outright | Holding it with a covered call | Difference |
| --- | --- | --- | --- |
| Flat at ₹2,000 | ₹0 | +₹40 (premium kept) | Call wins by ₹40 |
| Strong rally to ₹2,300 | +₹300 | +₹140 (capped at strike) | Call loses ₹160 of opportunity |
| Sharp fall to ₹1,500 | −₹500 | −₹460 (premium cushions ₹40) | Call cushions only ₹40 |

The call wins small in the flat case, loses big in opportunity cost in the rally case, and barely cushions the fall case. That is the honest arithmetic of "income" from covered calls: the premium is real money, collected upfront, and it is genuinely yours to keep — but it is compensation for capping your upside, not a salary. Premium collected in flat months does not compensate for one capped rally plus one hard fall, and repeated writing is a strategy with losing months, not a monthly income machine. Any pitch that shows you only the flat case is hiding two-thirds of the trade.

## When to Use a Covered Call — and When to Avoid It

**Use it when:**

- Your view is **flat to mildly rising** over the life of the call. A covered call is not a trade for a stock you expect to run hard.
- The stock is one you are **genuinely happy to sell at the strike**. Treat the strike as a target exit, not a random level. If the stock gets called away at ₹2,100 and you would be upset, ₹2,100 was the wrong strike.
- **Implied volatility is fair to rich** for the premium collected. Premium is the entire compensation for capping your upside — selling when volatility is depressed means selling your upside cheaply.

**Strike and expiry — practitioner guidelines, not rules.** The most commonly cited starting point is a call expiring in roughly **30–45 days**, out of the money, often around **0.20–0.30 delta**. Higher strikes leave more upside room but pay less premium; lower strikes pay more premium but carry a higher chance of assignment. Delta here is a practitioner shorthand, not a promised probability of assignment — treat it as a way to compare strikes, not as a guarantee.

**Avoid it when:**

- You expect a strong rally, or you would regret selling the shares at the strike.
- The option chain is illiquid, with wide bid-ask spreads that eat the premium before you have even started.
- Volatility is depressed and the premium on offer is small relative to the upside you are giving up.
- You cannot afford the downside of the stock itself. The call does not change the size of the stock risk — and that risk is the position.

## Managing the Position: Close Early, Roll With a Reason

A covered call is not a set-and-forget trade. Three management habits separate careful writers from careless ones:

- **Close early rather than milking the last of the premium.** A common practitioner habit is to buy the call back once roughly 50–85% of the maximum profit is captured, or with about 7–10 days left to expiry, rather than holding for the final rupees of premium. The remaining premium no longer justifies the gap and assignment risk of the last days.
- **Roll only with an explicit reason.** Rolling means buying back the short call and selling a later or different-strike one. Roll up and out after a rally if you still want to hold the stock and the new strike is a genuine exit target; roll out in time after a fall if you still believe in the position. Never roll as an automatic monthly loop — that is how a bad stock position gets dressed up as an income strategy.
- **Never sell below your cost basis after a decline without an explicit exit decision.** If the stock has fallen to ₹1,800 and you sell a ₹1,900 call, assignment locks in a loss on the shares. That may occasionally be the right decision — to exit a position you no longer want — but it must be made as an exit decision, stated plainly, not as routine income collection.

## The Risks, Stated Plainly

- **Capped upside — the single biggest cost.** Invisible in flat markets, painful in strong rallies, where you watch the stock run far past the strike while locked at the strike. This is the cost the premium pays for, and in a strong rally it is usually underpriced.
- **Near-full downside.** A sharp fall overwhelms the small premium cushion, and you still own a falling stock. The call is not protection. If you want real downside cover, that is what the protective put is for — a different trade, covered separately.
- **Assignment friction.** At expiry, shares you wanted to keep can be called away at the strike. Because Indian stock options are European-style and physically settled, assignment happens at expiry with shares delivered — there is no early-exercise surprise mid-cycle in India, but the expiry outcome itself can still arrive before you wanted to sell.
- **Dividend timing.** If your shares are called away at expiry, you no longer hold them. If a dividend's ex-date falls after assignment, that dividend goes to the new owner, not to you. Check the dividend calendar before writing over an ex-date.
- **Illiquidity.** Wide spreads and thin chains eat the premium and make closing or rolling expensive. A premium that looks good on screen is worthless if you cannot transact near it. Always check the net-of-charges outcome before writing.

## When It Fails, and What to Do

**A strong rally past the strike.** Your shares are called away and the upside is forfeited. Fix: choose the strike as a genuine target exit in advance, and set your roll-up rule before the rally, not during it. Never chase by buying the stock back higher just to keep writing calls on it.

**A sharp fall.** The premium cushion is overwhelmed and you own a falling stock. Fix: accept that the call was never protection. The real fixes are the ones that belong to the stock position itself — a position-size cap on the stock, and the protective put as the pointer for genuine downside cover — not another call sold into the fall.

**Selling below cost basis after a decline.** Assignment locks in a loss on the shares. Fix: strike never below cost basis without an explicit exit decision, made deliberately and recorded as such.

**Dividend timing.** Shares called away before you expected, dividend lost. Fix: check the ex-dividend calendar before writing, and buy back or roll before expiry if holding through the ex-date matters to you.

**Illiquid chains and wide spreads.** The premium evaporates in transaction costs. Fix: a liquidity and net-of-charges check before writing — if the spread is wide or the chain is thin, skip the trade.

## Covered Call vs Protective Put vs Naked Call

| | Covered call | Protective put | Naked call |
| --- | --- | --- | --- |
| Construction | Long stock + short call | Long stock + long put | Short call alone, no shares |
| View | Flat to mildly rising | Worried about a fall | Bearish or flat, with no cover |
| Upside | Capped at the strike | Unlimited (minus put cost) | Capped at the premium received |
| Downside | Near-full stock downside | Floored by the put strike | Unlimited in theory |
| Cost / income | Premium received | Premium paid | Premium received, with no cover |

The protective put is the natural partner trade: it is what genuine downside protection looks like, and it costs premium rather than paying it. The naked call is the contrast case — selling a call without owning the shares leaves the upside exposure completely uncovered, and it is not a trade for beginners under any framing.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Comparison of covered call, protective put, and naked call payoff shapes: ceiling, floor, and uncovered risk." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Covered call vs protective put vs naked call — payoff shapes</text>
<text x="140" y="56" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Covered call</text>
<text x="340" y="56" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Protective put</text>
<text x="540" y="56" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Naked call</text>
<line x1="60" y1="180" x2="220" y2="180" stroke="#92a59c" stroke-width="1"/>
<line x1="260" y1="180" x2="420" y2="180" stroke="#92a59c" stroke-width="1"/>
<line x1="460" y1="180" x2="620" y2="180" stroke="#92a59c" stroke-width="1"/>
<polyline points="60,260 140,100 220,100" fill="none" stroke="#e8825a" stroke-width="3"/>
<polyline points="260,100 340,100 420,260" fill="none" stroke="#f2f7f4" stroke-width="3"/>
<polyline points="460,100 540,100 620,260" fill="none" stroke="#e8825a" stroke-width="3"/>
<text x="140" y="200" text-anchor="middle" fill="#f2f7f4" font-size="12">Ceiling over gains</text>
<text x="340" y="200" text-anchor="middle" fill="#f2f7f4" font-size="12">Floor under losses</text>
<text x="540" y="200" text-anchor="middle" fill="#f2f7f4" font-size="12">Uncovered as price rises</text>
<text x="140" y="240" text-anchor="middle" fill="#92a59c" font-size="12">Premium kept</text>
<text x="340" y="240" text-anchor="middle" fill="#92a59c" font-size="12">Premium paid</text>
<text x="540" y="240" text-anchor="middle" fill="#92a59c" font-size="12">Loss grows with price</text>
<text x="340" y="288" text-anchor="middle" fill="#92a59c" font-size="12">One trades upside for income; one pays for protection; one is uncovered</text>
</svg>
</figure>

## Before You Sell a Covered Call: A Checklist

- [ ] Is my view flat to mildly rising over the call's life — not a strong rally?
- [ ] Am I genuinely happy to sell these shares at the strike I chose?
- [ ] Is the premium worth the upside I am giving up — and is volatility fair, not depressed?
- [ ] Is the chain liquid, with a tight enough spread that the premium survives transaction costs?
- [ ] Have I checked the dividend calendar for ex-dates inside the call's life?
- [ ] Is the stock position itself sized so that I can live with its full downside?
- [ ] Do I have a close-early rule (around 50–85% of maximum profit, or 7–10 days left) and a roll rule decided in advance?
- [ ] If the stock falls below my cost basis, will I refuse to sell a below-cost strike without an explicit exit decision?

If any box is unchecked, the trade waits. A covered call sold for the wrong reason — to manufacture income from a stock you do not want to sell, or to rescue a falling position — is not income. It is a capped upside attached to a falling stock.

## Frequently Asked Questions

### What is a covered call in options trading?

A covered call is a position combining shares you own with one short call option sold against those shares — one short call per lot held. You collect the premium upfront and keep it whatever happens, in exchange for capping your upside at the strike price. It is called "covered" because your shares cover the delivery obligation if the call is exercised.

### How does a covered call work, step by step?

Own or buy the shares, sell one call per lot held at a strike above the current price, and collect the premium upfront. If the stock finishes below the strike at expiry, the call expires worthless and you keep the premium and the shares. If it finishes at or above the strike, your shares are delivered at the strike — you keep the gain up to the strike plus the premium, and forfeit upside beyond the strike.

### What is the maximum profit and maximum loss in a covered call?

Maximum profit per share, before charges, is (strike − purchase price) + premium received — ₹140 per share in this article's example (₹2,100 − ₹2,000 + ₹40), achieved only when the stock is at or above the strike at expiry. Maximum loss per share, before charges, is purchase price − premium received — ₹1,960 per share in the example, suffered only if the stock falls to zero.

### How do you calculate the covered call breakeven price?

Breakeven per share is the stock purchase price minus the premium received. In the example: ₹2,000 − ₹40 = ₹1,960. Below ₹1,960 at expiry the position loses money; above ₹1,960 (up to the strike) it profits.

### Is a covered call profitable — and when is it most profitable?

It is most profitable when the stock finishes at or above the strike at expiry, where it earns the maximum profit — the stock gain up to the strike plus the premium. In flat markets it earns just the premium. It is least attractive in strong rallies, where the capped profit is far below what holding the stock outright would have earned, and in sharp falls, where the premium barely cushions the loss.

### What is the main risk of a covered call?

Capped upside is the single biggest cost — in a strong rally you watch the stock run far past the strike while your profit stays locked at the strike. The second risk is near-full downside: a sharp fall overwhelms the small premium cushion and you still own a falling stock.

### Does a covered call protect against a stock decline?

No — not in any meaningful sense. The premium cushions the fall by exactly the premium amount: ₹40 per share in this article's example, against a ₹500 per share fall to ₹1,500. If you want real downside protection, the protective put is the trade built for that job.

### Covered call vs protective put: what is the difference?

A covered call sells a call against shares you own: you receive premium, your upside is capped at the strike, and your downside is nearly the full stock downside. A protective put buys a put on shares you own: you pay premium, your upside stays unlimited, and your downside is floored at the put strike. One trades upside for income; the other pays for protection.

### What happens if the stock rises above the strike price?

At expiry, the call is exercised and your shares are delivered at the strike price. You keep the stock gain up to the strike plus the premium — ₹140 per share in the example — and every rupee of upside above the strike goes to the call buyer.

### Can you lose money on a covered call?

Yes. If the stock finishes below the breakeven (purchase price minus premium — ₹1,960 in the example), the position loses money at expiry, and the loss grows with the fall, up to ₹1,960 per share if the stock falls to zero. The premium reduces the loss; it does not prevent it.

### When should you use a covered call — and when should you avoid it?

Use it when your view is flat to mildly rising, the stock is one you are genuinely happy to sell at the strike, and volatility is fair to rich for the premium on offer. Avoid it when you expect a strong rally, would regret selling the shares at the strike, face an illiquid chain with wide spreads, or cannot afford the stock's full downside.

### What happens to dividends when your shares are called away?

If your shares are delivered at expiry, you no longer hold them. If a dividend's ex-date falls after assignment, that dividend goes to the new owner, not to you. Check the dividend calendar before writing a call that spans an ex-date, and buy back or roll before expiry if holding through the ex-date matters to you.

---

*Educational content only, not investment advice. Options involve risk, including the risk of losing the value of the underlying shares. All figures in the worked example are illustrative and before brokerage, taxes, and exchange charges.*

---
title: "Option Volatility and Pricing — Summary (Sheldon Natenberg)"
description: "A plain-language summary of Natenberg's Option Volatility and Pricing: implied vs historical volatility, skew, the Greeks on one position, and how to use it."
meta_description: "A plain-language summary of Natenberg's Option Volatility and Pricing: implied vs historical volatility, skew, the Greeks on one position, and how to use it."
date: 2026-11-21
author: Kaizen
tag: "Options trading · Books"
keywords: ["option volatility and pricing summary", "option volatility and pricing", "sheldon natenberg", "natenberg summary", "implied volatility vs historical volatility", "volatility skew and smile", "option greeks explained", "black-scholes model simplified", "delta gamma theta vega rho", "volatility trading strategies", "dynamic hedging options", "option pricing models", "best book on option volatility", "option volatility and pricing review", "natenberg book summary"]
---

*By Kaizen · 21 November 2026 · Monks Of Market*

> **Affiliate disclosure:** Some buy links on this page are affiliate links, marked as such and carrying `rel="sponsored"`. If you buy through one, the site may earn a commission at no extra cost to you. **Important: every buy link on this page currently uses a clearly marked PLACEHOLDER affiliate token — no Associates ID has been confirmed yet — and the links must be replaced with real IDs before this page goes live.** The recommendation below does not depend on any link: the book earned its place on its content, not on a commission.

## The short answer: an option's price is mostly a volatility price

If you have ever bought a call because the stock was going to rise, watched the stock rise, and still lost money, you have already met the subject of this book. The direction was right and the trade still lost — because the price was wrong. The premium you paid assumed more future movement than the market actually delivered, or time decay ate the premium faster than the move could pay for it.

That is the whole argument of Sheldon Natenberg's *Option Volatility and Pricing* in one sentence: **an option's price is mostly a volatility price, not a direction price.** Natenberg puts it more sharply in the book itself: "Volatility is the single most important factor in determining the future value of an option."

This summary does what the other summaries of this book do not. It turns the book into a system you can actually use: how to read implied volatility against historical volatility and ask whether an option is expensive or cheap, what volatility skew means for the strikes you should even look at, how the five Greeks move together on one real position, and how a pricing model gives you a reference price to compare against the market's price. It also tells you honestly who should read the book, who should not, and the order in which to approach it.

One boundary, stated up front: a book teaches pricing and strategy. It does not hand you an edge. The edge still has to be tested — and if your method loses money over time, no book makes it profitable. If you do not yet know whether your method has an edge at all, our guide to [what trading expectancy is](/articles/what-is-trading-expectancy/) matters more than any book on this page.

## Who wrote it, and why traders trust it

Sheldon Natenberg began trading in 1982 as an independent market maker in equity options. From 1985 to 2000 he traded commodity options as an independent floor trader. From 2000 to 2015 he was Director of Education at a proprietary derivatives trading firm, teaching option seminars to traders around the world.

That biography is the book's authority, and it is worth pausing on. This was not written by an academic who studied options from the outside. It was written by someone who priced options for a living, stood in the market making prices, and then spent fifteen years teaching other traders to do the same. When the book says something about how volatility behaves in practice, it is reporting what the author watched happen, day after day, from inside the market.

The book's publication history matters because it tells you which edition this summary follows:

- **First published 1988**, revised in 1994.
- **Second edition, 2014** — revised, updated and expanded. This is the edition this summary follows.
- A companion **Workbook** of hands-on practice exercises was published in December 2017, for readers who learn by doing the maths themselves.

The publisher's own description says firms around the world often give this book to new professional traders as their first text on the subject. Reviewers consistently call it one of the most widely read advanced options texts — the book professional traders study. That reputation is real, and it is also a warning: this is an advanced book, and reading it before you are ready is how a good book becomes a confusing one. The readiness ladder later in this article handles that.

The book is organised in four parts. Part I lays the foundations of option theory and pricing models. Part II is the heart of the book: volatility — what it is, how it is measured, how it is forecast, and how it shows up in prices. Part III covers trading strategies — spreads, straddles, strangles, condors, butterflies, dynamic hedging, position management and risk analysis. Part IV looks at how market makers operate. You do not need to read it in order, and most readers should not. The ladder at the end of this article gives you a better order.

## Volatility, taught as a decision input: historical vs implied

Every guide to this book starts with the same distinction, because it is the distinction the whole book turns on. Here it is, taught as a decision input rather than a definition list.

**Historical volatility** looks backwards. It measures how much the underlying actually moved in the past — the standard deviation of its past returns over some window. It is a fact about what happened.

**Implied volatility** looks forwards. It is not measured from the underlying's price history at all. It is backed out of the option's market price: given the option's price and the other pricing inputs, what level of future volatility would make that price fair? It is the market's expectation of how much the underlying will move over the option's life. It is, in effect, the price of uncertainty.

The relationship between the two is the trader's first pricing question, and it is the question this book trains you to ask before every trade:

> **Is this option expensive or cheap relative to what the underlying usually does?**

If implied volatility is well above historical volatility, the market is charging a high price for future movement — it expects more movement than the underlying has recently delivered. If implied volatility is well below historical volatility, the market is charging a low price for future movement. Neither reading is a signal on its own. A high implied volatility can be entirely justified — an event is coming, and the market knows it. A low implied volatility can be a trap — calm markets end. But without the comparison, you are not even asking the pricing question. You are buying a number you have never examined.

Three practical points the book makes that most summaries skip:

1. **Volatility is not one number.** Different strikes and different expiries on the same underlying carry different implied volatilities. The number you read off one option is not "the" volatility of the underlying. It is that option's price of uncertainty, and it changes across the chain.
2. **Volatility moves.** Implied volatility rises and falls with events, sentiment and realised movement. A position that was fairly priced on Monday can be mispriced by Friday, not because the underlying moved, but because the market's expectation of movement changed. That is why the book spends so much time on volatility forecasting and on what happens to a position when volatility changes after entry.
3. **There is a market-wide version of the same idea.** A gauge built from index options gives a single number for what the market expects, over roughly a 30-day horizon, across the broad market. Think of it as the same implied-volatility question, asked about the whole market at once instead of one stock. When that gauge is high, options across the board are expensive; when it is low, they are cheap. It is context, not a signal — but it is the context in which every individual option price sits.

### The one comparison that matters: is this option expensive or cheap?

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 325" role="img" aria-label="Historical versus implied volatility: what the underlying did against what the market expects — compare: IV above HV means expensive options, IV below HV means cheap options" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Is this option expensive or cheap?</text>
<rect x="30" y="55" width="290" height="170" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="175" y="82" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">HISTORICAL VOLATILITY</text>
<text x="175" y="112" text-anchor="middle" fill="#f2f7f4" font-size="12">What the underlying DID</text>
<text x="175" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12">Past price movement</text>
<text x="175" y="168" text-anchor="middle" fill="#f2f7f4" font-size="12">Measured from returns</text>
<text x="175" y="196" text-anchor="middle" fill="#92a59c" font-size="12">A fact about the past</text>
<text x="340" y="140" text-anchor="middle" fill="#e8825a" font-size="18">↔</text>
<rect x="360" y="55" width="290" height="170" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="505" y="82" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">IMPLIED VOLATILITY</text>
<text x="505" y="112" text-anchor="middle" fill="#f2f7f4" font-size="12">What the market EXPECTS</text>
<text x="505" y="140" text-anchor="middle" fill="#f2f7f4" font-size="12">Backed out of the option's price</text>
<text x="505" y="168" text-anchor="middle" fill="#f2f7f4" font-size="12">A forecast priced into the premium</text>
<text x="505" y="196" text-anchor="middle" fill="#92a59c" font-size="12">A price of uncertainty</text>
<rect x="40" y="245" width="600" height="58" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="340" y="268" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">COMPARE: IV above HV = expensive options</text>
<text x="340" y="290" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">IV below HV = cheap options</text>
</svg>
</figure>

Before you trade any option, run this check and write the answer down in one line in your journal:

- **What is the implied volatility of the option you are considering?** Read it off the option chain.
- **What is the historical volatility of the underlying over a similar window?** The same length of time as the option has left, if you can get it.
- **Which is higher, and by how much?** That gap is the market's pricing judgement, and your job is to decide whether you agree with it.
- **Why would the market price it this way?** An event, an earnings date, a recent sharp move, or plain calm? If you cannot name a reason, you do not yet understand the price.

That four-line check is the single most useful habit in this book. It takes a minute, it costs nothing, and it is the difference between buying an option and buying a price you have actually examined.

## Volatility skew and smile — and what to do about it

Plot implied volatility across strikes for one expiry and you do not get a flat line. You get a curve. Options further from the current price tend to carry higher implied volatility than at-the-money options — that U-shape is the **volatility smile**. And in equity markets the curve is usually tilted: out-of-the-money puts tend to carry higher implied volatility than out-of-the-money calls — that tilt is the **volatility skew**.

Why? Because the market charges more for protection against the thing it fears most. A sharp fall hurts more, and happens faster, than a gradual rise, so the market prices downside protection at a premium. Far-out-of-the-money options are cheap in absolute terms but expensive in volatility terms — you are paying a high rate for a small amount of coverage.

Every competitor summary states this. None of them tells you what to do about it. Here is what it means for the trade in front of you:

- **When you buy an out-of-the-money put as protection, you are buying the most expensive volatility on the chain.** That does not mean you should not buy it. It means you should know you are paying the skew, and you should ask whether a nearer strike — or a spread, where you sell another option to offset the cost — gives you the protection you actually need at a price you can defend.
- **When you sell options, the skew is on your side — and that is exactly why it is dangerous.** The options with the highest implied volatility pay the most premium, which is tempting. But they pay the most because the market has priced in the risk of the sharp move. Selling the most expensive volatility on the chain is selling the insurance the market is most worried about needing.
- **When you compare two strikes, compare their implied volatilities, not just their premiums.** Two options can look similar in price and be very different trades, because one of them is priced at a much higher volatility than the other. The premium tells you what you pay. The implied volatility tells you what you are paying *for*.
- **When implied volatility is high across the whole chain, step back and ask why.** A flat, elevated curve usually means the market expects a big move somewhere. That is information about the environment, not an invitation to trade bigger.

The honest summary of skew is this: the market is not stupid. It charges more where the risk is. Your job is not to find the market's mistake. Your job is to decide, strike by strike, whether the price of the risk you are taking — or selling — is one you can live with.

## The Greeks as dials on one position

The Greeks are the book's working tools, and most summaries teach them as five separate definitions. That is the wrong way to learn them. On a live position they are not five separate facts. They are five dials on the same machine, and turning one moves the others.

Here is one position, walked through all five dials together. The numbers below are a clearly labelled **illustration**, not a real position and not a recommendation — they exist so you can see how the dials interact.

**The illustration:** you buy one call option. The underlying trades at ₹1,000. The call costs ₹25. It has 30 days to expiry. Its Greeks read: delta 0.50, gamma 0.02, theta −₹0.80 per day, vega ₹1.20 per one-point move in implied volatility, rho ₹0.30 per one-point move in interest rates.

- **Delta (0.50)** says how much the option moves with the underlying. Roughly, a ₹1 rise in the underlying adds about ₹0.50 to the option's value. Delta is your directional exposure. A delta of 0.50 means you own about half the directional exposure of the underlying itself.
- **Gamma (0.02)** says how fast delta changes. If the underlying rises ₹10, delta rises by roughly 0.20 — so your directional exposure grows as the trade goes your way, and shrinks as it goes against you. Gamma is why a bought option's risk profile bends instead of running in a straight line. It is also why the position's behaviour changes fastest near expiry and near the strike.
- **Theta (−₹0.80 per day)** says what each passing day costs. Every day that passes with no move in the underlying, the option loses about ₹0.80 of value to time decay. Over 30 days, that is nearly the whole premium — which is the point. Time is not neutral for a buyer. It is a daily bill, and the underlying has to move enough, fast enough, to pay it.
- **Vega (₹1.20 per one-point move in implied volatility)** says what a volatility move does. If implied volatility rises by one point, the option gains about ₹1.20 — even if the underlying does not move at all. If implied volatility falls by five points after you buy, you lose about ₹6.00 of premium to the volatility move alone. This is the dial that kills the trade in the opening story of this article: the direction was right, the stock rose, and the position still lost — because implied volatility collapsed and theta kept billing.
- **Rho (₹0.30 per one-point move in interest rates)** says what rates do. For most retail positions over short horizons, rho is the smallest dial. It matters more for long-dated options and for positions held across rate changes. Know it exists, know it is usually small for you, and do not let it distract you from the other four.

Now the trade-off, which is the real lesson. **The same position cannot be good on every dial at once.** A bought call gives you positive delta and positive gamma and positive vega — but you pay for all three with negative theta. You are buying movement and paying rent for it every day. A sold option flips the signs: you collect theta every day, but you are short gamma and short vega, which means the position gets worse exactly when the market moves hard or volatility spikes. There is no free dial. Every Greek you want costs you on another one.

That is the sentence to carry out of this section: **before you enter a position, name which dial you are betting on and which dial you are paying.** If you cannot name both, you do not understand the trade yet.

### The second-order Greeks you can ignore for now

Charm and vanna are real, and the book covers them. Charm measures how delta changes as time passes. Vanna measures how delta changes as volatility changes. They matter to market makers managing large books across many strikes and expiries, because small second-order effects add up across a big portfolio. For a retail trader running one or two positions, they are refinements, not foundations. Learn the five main Greeks until you can read them on a position without thinking. Then, and only then, come back for charm and vanna.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 320" role="img" aria-label="Five Greeks as dials on one bought call: delta, gamma, theta, vega and rho, with what each measures and whether it helps or costs the buyer" class="viz">
<text x="360" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Five dials on one bought call — the illustration</text>
<rect x="20" y="55" width="132" height="240" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="86" y="84" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">DELTA</text>
<text x="86" y="110" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">0.50</text>
<text x="86" y="146" text-anchor="middle" fill="#f2f7f4" font-size="11">Moves with the</text>
<text x="86" y="168" text-anchor="middle" fill="#f2f7f4" font-size="11">underlying</text>
<text x="86" y="190" text-anchor="middle" fill="#f2f7f4" font-size="11">+₹0.50 per ₹1 rise</text>
<text x="86" y="268" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">HELPS the buyer</text>
<rect x="162" y="55" width="132" height="240" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="228" y="84" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">GAMMA</text>
<text x="228" y="110" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">0.02</text>
<text x="228" y="146" text-anchor="middle" fill="#f2f7f4" font-size="11">Delta grows as</text>
<text x="228" y="168" text-anchor="middle" fill="#f2f7f4" font-size="11">the trade goes</text>
<text x="228" y="190" text-anchor="middle" fill="#f2f7f4" font-size="11">your way</text>
<text x="228" y="268" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">HELPS the buyer</text>
<rect x="304" y="55" width="132" height="240" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="370" y="84" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">THETA</text>
<text x="370" y="110" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">−₹0.80 / day</text>
<text x="370" y="146" text-anchor="middle" fill="#f2f7f4" font-size="11">Time decay bills</text>
<text x="370" y="168" text-anchor="middle" fill="#f2f7f4" font-size="11">you every day</text>
<text x="370" y="268" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">COSTS the buyer</text>
<rect x="446" y="55" width="132" height="240" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="512" y="84" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">VEGA</text>
<text x="512" y="110" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">₹1.20</text>
<text x="512" y="146" text-anchor="middle" fill="#f2f7f4" font-size="11">A volatility rise</text>
<text x="512" y="168" text-anchor="middle" fill="#f2f7f4" font-size="11">pays you</text>
<text x="512" y="268" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">HELPS the buyer</text>
<rect x="588" y="55" width="132" height="240" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="654" y="84" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">RHO</text>
<text x="654" y="110" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">₹0.30</text>
<text x="654" y="146" text-anchor="middle" fill="#f2f7f4" font-size="11">Rates move it</text>
<text x="654" y="168" text-anchor="middle" fill="#f2f7f4" font-size="11">a little</text>
<text x="654" y="268" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">SMALLEST DIAL</text>
</svg>
</figure>

## Pricing models without the maths wall

The Black-Scholes model is the pricing model the book builds from, and it is the model most readers are afraid of. You do not need to be. Here is the whole model in plain language.

A pricing model takes five inputs — the underlying's price, the strike price, the time to expiry, the interest rate, and volatility — and produces one output: a theoretical value for the option. That is all it does. It answers the question: *if the world behaved the way this model assumes, what should this option be worth?*

The point of the model is not the formula. The point is the comparison. The model gives you a reference price. The market gives you an actual price. Your job is to compare the two and ask why they differ. If the market's price is well above the model's value, the market is charging more for something — usually volatility — than the model assumes. If it is well below, the market is charging less. The difference is the beginning of an analysis, not the end of one.

And the model has assumptions that real markets violate, which the book is honest about:

- **It assumes volatility is constant.** Real volatility is not. It rises and falls, it spikes around events, it calms afterwards. That is why implied volatility differs across strikes and expiries — the market is telling you the constant-volatility assumption is wrong.
- **It assumes returns are normally distributed.** Real returns are not. Sharp moves happen more often than a normal distribution predicts, and they happen faster on the downside. That is one reason the skew exists: the market prices in the fat tail the model ignores.
- **It assumes you can hedge continuously and frictionlessly.** Real hedging costs money, takes time, and leaves gaps. That is why the book spends a whole section on dynamic hedging — the practical, imperfect, real-world version of what the model assumes away.

None of this makes the model useless. A map is not the territory, and a pricing model is not the market — but you navigate better with a map than without one. Use the model as a reference price, not as a truth. And when the market disagrees with the model, assume the market knows something the model does not, until you can prove otherwise.

## Trading volatility, not just direction

This is the section that separates this book from every strategy book, and it is the section most summaries rush past. The book's strategies are not taught as "here is a trade that makes money". They are taught as answers to a volatility question: **are you buying volatility or selling it, and what happens to this position when implied volatility moves after you enter?**

- **Spreads.** A spread buys one option and sells another, and the volatility question is which leg dominates. If you buy the cheaper-volatility leg and sell the more expensive one, you have a view on the gap between them, not just on direction. Spreads are also how you control the cost of the skew: selling a further-out option against the one you buy pays for some of the premium the skew charges you.
- **Straddles and strangles.** Buying a straddle (a call and a put at the same strike) or a strangle (a call and a put at different strikes) is buying volatility outright. You profit if the underlying moves a lot in either direction — and you lose if it does not move enough to cover the premium and the time decay. The question to ask before entering is not "will it move?" but "will it move *more than the premium already assumes it will?*" That is the implied-volatility question, asked in trade form. If implied volatility falls after you enter, a straddle can lose even on a decent move.
- **Condors and butterflies.** These are defined-risk, limited-profit structures, and the volatility question is the same one with the signs reversed: you are usually selling volatility and collecting premium, and your risk is the sharp move that the market priced in. The premium you collect is the market's payment for taking that risk. The book's discipline here is position management — knowing when the structure has done its job and when it is time to adjust or exit, rather than holding a losing structure to expiry because the premium looked attractive on day one.
- **Dynamic hedging and position management.** This is the risk discipline that keeps a volatility trade alive. A position's Greeks change as the market moves, so a hedge that was right on Monday is wrong by Wednesday. Dynamic hedging means adjusting the position as the dials move, keeping the exposure you actually want rather than the exposure you started with. It costs money and it is never perfect. The book's point is that the cost of hedging is part of the trade, not an afterthought — and that a volatility trade without a plan for managing it is a hope, not a strategy.

None of this is a re-teach of the strategy mechanics. If you need the mechanics of a straddle or a condor from first principles, our guide to [option trading strategies](/articles/option-trading-strategies/) covers them. What this book adds — and what this summary is for — is the volatility lens: every strategy in this section is a different answer to the same question, and the question is always about volatility, not direction.

And the risk disclosure, because it is not optional: every one of these strategies can lose money, and the ones that sell volatility can lose far more than the premium they collect if the market moves sharply. No strategy in this book is a guaranteed profit. A volatility trade is a bet on the market's expectation being wrong, and the market is wrong less often than traders hope.

## Who should read it, who should not — and the readiness ladder

**Who should read it:** the intermediate trader who already knows basic calls and puts, has placed real or paper trades, and has started noticing that volatility — not direction — is deciding whether those trades make money. If implied volatility, skew, and the shape of the volatility surface have started shaping your trade selection, this is your book. Motivated beginners who already understand the mechanics can read it too, but they should expect to work through it slowly and re-read chapters.

**Who should not read it yet:** anyone who has not yet learned basic options mechanics — what a call and a put are, how expiry works, how to read an option chain. That reader will drown in this book, and drowning is not learning. Read the mechanics first, place some trades — real or paper — and come back when volatility is already a question you are asking, not before. The hub guide to the best option trading books (plain-text pointer: *Best Option Trading Books* on this site) matches the right first book to your stage.

**The readiness ladder — three steps, in order:**

1. **Learn to read implied vs historical volatility on one underlying you follow.** Pick one stock or index you already watch. For two weeks, write down its implied volatility and its historical volatility every day, and note the gap. You are not trading. You are training your eye to see the pricing question.
2. **Paper-trade one volatility idea and journal what volatility did to it.** A straddle around an event is the classic first idea: buy the straddle, watch what happens to the premium as the event approaches and passes, and write down what implied volatility did to the position versus what the underlying did. Track it in a [trading journal](/articles/trading-journal-what-to-track-beyond-pnl/) — the journal is where the lesson becomes a rule.
3. **Only then read Natenberg cover to cover, with the Workbook exercises.** Work the exercises as you go. The Workbook (December 2017) exists precisely because this book is learned by doing the maths, not by reading about it. A chapter you have worked through is worth five chapters you have skimmed.

**One honest limitation, specific to Indian readers:** the book's examples come from US options markets. Indian market mechanics — expiries, contract structure, how weekly and monthly contracts work — differ, so the reader must translate concepts, not copy trades. The concepts travel: volatility, the Greeks, skew, and pricing models work the same way everywhere. The mechanics do not. Read the book for the concepts, and translate the mechanics to the market you actually trade in.

## The expectancy tie-in: a volatility idea is still an edge to test

Buying "cheap" volatility sounds like an edge. It is not one until your tested results say so. A volatility idea, like any trading idea, still has to survive the same test every other idea faces: does it make money over a series of trades, after costs, with a risk you can actually live with?

That means the ladder above does not end with reading the book. It ends with testing. Paper-trade the volatility idea. Journal the results — what implied volatility did, what the underlying did, what the position actually made or lost. Then ask the expectancy question: over those trades, did the idea earn more than it lost, and would you trust it with real money at a size that respects [risk of ruin](/articles/risk-of-ruin-trading/)? If the tested answer is no, the idea is not an edge, however elegant the book made it sound.

Natenberg's own second sentence in this book says it better than any summary can: "The essence of trading options is not predicting the future. It is understanding the structure of the prices." The structure of the prices is what this book teaches. Whether you can turn that understanding into a tested, positive-expectancy method is a separate question — and it is the question that decides whether any of this makes you money.

One final, honest boundary. If trading is causing ongoing stress, sleep problems, or anxiety, a book is not enough. The sensible step is to talk to a qualified professional. No trading book, however good, is a substitute for that.

## Where to buy it

Buy link (affiliate, placeholder): [*Option Volatility and Pricing* on Amazon.in (affiliate link — placeholder token)](https://www.amazon.in/dp/PLACEHOLDER?tag=PLACEHOLDER-AFFILIATE-ID) · [*Option Volatility and Pricing* on Amazon.com (affiliate link — placeholder token)](https://www.amazon.com/dp/PLACEHOLDER?tag=PLACEHOLDER-AFFILIATE-ID)

The links above are incidental. The value of this page is the volatility-and-pricing system it teaches, not the link. If you buy the book, buy the second edition (2014), and consider the Workbook (December 2017) alongside it if you learn by doing.

## Frequently asked questions

### Is Option Volatility and Pricing good for beginners?

Not as a first book. It is the benchmark text on volatility and pricing, and the book to read once implied volatility and the volatility surface start shaping your trade selection — but a reader with no mechanics yet will struggle with it. Several guides list it even for motivated beginners, because understanding volatility early saves money, and that is fair — but only if the beginner already understands calls, puts, and expiry. Learn the mechanics first, then read Natenberg.

### What is implied volatility in simple terms?

Implied volatility is the market's expectation of how much the underlying will move in the future, read off the option's price. It is not measured from past prices. It is backed out of what the option actually costs: given the option's price and the other pricing inputs, what level of future volatility would make that price fair? Higher implied volatility means more expensive options, because the market is charging more for expected movement.

### What is the difference between historical and implied volatility?

Historical volatility looks backwards: it measures how much the underlying actually moved in the past. Implied volatility looks forwards: it is the market's expectation of how much the underlying will move, priced into the option. The comparison between the two is the trader's first pricing question — is this option expensive or cheap relative to what the underlying usually does?

### What are the option Greeks and why do they matter?

The Greeks measure how an option's price responds to different changes: delta to the underlying's price, gamma to how fast delta changes, theta to passing time, vega to volatility, and rho to interest rates. They matter because on a live position they move together — a bought call gains from direction, gamma, and volatility, but pays for all three with time decay every day. Reading them together, on one position, is what tells you what you are actually betting on and what you are paying for it.

### Is Natenberg's book worth reading?

Yes, if you are at the right stage. It is one of the most widely read advanced options texts, the book professional traders study, and the deepest treatment of volatility and pricing in print. It is worth reading once you already know basic options mechanics and have started noticing that volatility, not direction, is deciding your results. It is not worth reading as a first book, and it will not tell you when to trade.

### What is volatility skew and smile?

If you plot implied volatility across strikes for one expiry, you do not get a flat line. Options further from the current price tend to carry higher implied volatility than at-the-money options — that U-shape is the volatility smile. In equity markets the curve is usually tilted, with out-of-the-money puts carrying higher implied volatility than out-of-the-money calls — that tilt is the volatility skew. The market charges more for downside protection because sharp falls hurt more and happen faster than gradual rises.

### Do I need maths to read Natenberg?

You need comfort with the idea that an option's price is a statement about the future, and that volatility is the loudest part of that statement — but you do not need advanced mathematics to follow the book's argument. Natenberg builds from what volatility means to how it shows up in prices, step by step. If you can follow a worked explanation and you already understand the mechanics, you can read it. The companion Workbook, published in December 2017, lets you practise the maths with exercises if you learn by doing.

### What is the Black-Scholes model in simple terms?

It is a pricing model that takes five inputs — the underlying's price, the strike price, the time to expiry, the interest rate, and volatility — and produces one output: a theoretical value for the option. Its point is not the formula but the comparison: the model gives you a reference price, the market gives you an actual price, and your job is to ask why they differ. Real markets violate its assumptions — volatility is not constant and returns are not perfectly normal — so use it as a reference, not as a truth.

### Which is better, Options as a Strategic Investment or Option Volatility and Pricing — and which first?

They do different jobs, so "better" is the wrong question. *Options as a Strategic Investment* by Lawrence G. McMillan is the complete reference you return to by chapter whenever a strategy needs thinking through. *Option Volatility and Pricing* is the deep explanation of why options are priced the way they are. Read Natenberg first if volatility and pricing are your current question, and keep McMillan on the desk as the reference from the start. If you only buy one of the two, buy the one that matches your current stage.

### How long does it take to read Option Volatility and Pricing?

There is no single answer, because this is not a book to read once and shelve. A motivated reader with the mechanics already in place can work through the second edition over several weeks of steady reading — but the book is meant to be read slowly, with the exercises, and re-read as your trading raises new questions. The honest measure is not the reading time but the working time: a chapter you have worked through is worth five chapters you have skimmed.

### Should I read Natenberg before trading options?

No — not before your first trades. Learn the mechanics first, place some trades (real or paper), and track them. Read Natenberg when volatility is already a question you are asking, because that is when the book's answers land. The ladder in this article gives the order: read implied vs historical volatility on one underlying, paper-trade one volatility idea and journal it, and only then read the book cover to cover with the Workbook.
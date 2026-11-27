---
title: "Options as a Strategic Investment — Summary (Lawrence G. McMillan)"
description: "A plain-language summary of McMillan's Options as a Strategic Investment: the strategy-selection map, the volatility fork, and how to use the book well."
meta_description: "A plain-language summary of McMillan's Options as a Strategic Investment: the strategy-selection map, the volatility fork, and how to use the book well."
date: 2026-11-21
author: Kaizen
tag: "Options trading · Books"
keywords: ["options as a strategic investment summary", "options as a strategic investment", "lawrence mcmillan", "mcmillan book summary", "options as a strategic investment review", "options as a strategic investment 5th edition", "mcmillan vs natenberg", "leaps strategy", "naked put selling vs covered call", "sell time value buy intrinsic value", "best book on options strategies", "options strategies reference book", "volatility trading vs directional trading", "neutral trading options", "options hedging strategies"]
---

*By Kaizen · 21 November 2026 · Monks Of Market*

> **Affiliate disclosure:** Some buy links on this page are affiliate links, marked as such and carrying `rel="sponsored"`. If you buy through one, the site may earn a commission at no extra cost to you. **Important: every buy link on this page currently uses a clearly marked PLACEHOLDER affiliate token — no Associates ID has been confirmed yet — and the links must be replaced with real IDs before this page goes live.** The recommendation below does not depend on any link: the book earned its place on its content, not on a commission.

## The short answer: an option strategy is a bet on time as much as on direction

Ask experienced options traders which single book they would keep if they could keep only one, and the same title comes up again and again: Lawrence G. McMillan's *Options as a Strategic Investment*. Traders call it the options "bible" — the most comprehensive single-volume options strategy reference available, over 1,000 pages, organised so that each chapter stands largely on its own. It is not a story you read cover to cover. It is a reference you consult, chapter by chapter, whenever a strategy needs thinking through.

But a reference is only useful if you know how to choose from it. Most traders pick a strategy first — the one they read about last, or the one a friend uses — and then hope the market cooperates. This book runs the other way: it matches the strategy to what you believe about the market, and it treats time decay as a cost or an income depending on which side of the trade you are on. A trader who buys options only because a stock will rise is paying for time they may not need, and the decay is a silent tax on every such trade. A trader who sells options is on the other side of that tax, collecting a little each day the underlying does not move against them.

This summary does what the other summaries of this book do not. It turns the book into a system you can actually use: a map from your market view to the strategy family that fits it, a self-test for whether you should be trading direction or trading volatility, a reader-side decision for the book's most-cited comparison — naked puts against covered calls — and the single time-decay principle that ties the book's long-dated option trades together. It also tells you honestly who should read the book, who should not, and how to use a 1,000-page reference without drowning in it.

One boundary, stated up front: a book teaches strategy. It does not hand you an edge. A strategy family picked from a map still has to be tested — paper-traded, journalled, and reviewed — before real size goes on it. If you do not yet know whether your method has an edge at all, our guide to [what trading expectancy is](/articles/what-is-trading-expectancy/) matters more than any book on this page.

## Who wrote it, and why traders trust it

Lawrence G. McMillan has spent decades trading options and writing about volatility, hedging, and strategic position structuring. He founded an options research and advisory firm and has published a long-running options strategy newsletter. That practitioner background is the book's authority, and it is worth pausing on. This was not written by an academic who studied options from the outside. It was written by someone who structured option positions for a living and then spent years explaining those structures to other traders.

Reviewers treat that background as the reason the book has lasted. The first edition appeared in 1980. The fifth edition, published in 2012, is the edition this summary follows. The fifth edition updates the market structure and margin discussion and adds two new chapters — on volatility skew and on portfolio margin — that the fourth edition does not have. The fourth edition is still a legitimate way in for the core strategy framework, and the reading plan later in this article covers the choice between the two.

The book is organised in six parts. Part I covers the basic properties of stock options. Part II covers call option strategies. Part III covers put option strategies. Part IV covers additional considerations. Part V covers index options and futures. Part VI covers measuring and trading volatility. Because each chapter is designed to stand largely on its own, a reader can go straight to covered calls, straddles, or portfolio margin without reading everything before it — and most readers should.

The publisher's own description says the book gives traders tools for improving the earnings potential of a portfolio while reducing downside risk, no matter how the market is performing. Read that as a description of what the book attempts, not as a promise of results. No book can promise results. What the book can do — and what this summary focuses on — is give you a framework for choosing strategies deliberately instead of by habit.

## The one idea that reframes options trading: sell time value, buy intrinsic value

Every strategy in this book traces back to one idea, and McMillan states it in a single short sentence: "The basic philosophy of option strategy is to sell time value and buy intrinsic value."

An option's price has two parts. Intrinsic value is the part that comes from the option already being in the money — the part that would survive if the option expired right now. Time value is everything else: the premium the market charges for the time remaining before expiry, during which the underlying might move in the option's favour. Time value decays. It decays every day, and it decays faster as expiry approaches. Intrinsic value does not decay.

That split reframes the whole business. When you buy an option, you are usually buying time value — you are paying for time you may not need. When you sell an option, you are usually selling time value — you are collecting the decay. The trader who buys options only because a stock will rise is paying for time they do not need, and the decay is the silent tax on every such trade. The trader who sells options is on the other side of that tax, collecting a little each day the underlying does not move against them — but carrying the risk that a sharp move wipes out weeks of collected premium in a day.

Neither side is "right". The book's point is that you should know which side of the split you are on, in every trade, and choose deliberately. A bought call is a bet that the move will be large enough and fast enough to outrun the decay. A sold put is a bet that the underlying will stay flat or rise, and that the decay will do the work. A spread is a way to buy the intrinsic value you want while selling some of the time value you do not want. Once you see trades this way, the book's hundreds of strategies stop looking like a catalogue and start looking like variations on one question: in this trade, am I buying time value or selling it — and am I being paid enough for the risk?

That question is the frame for everything that follows.

## From market view to strategy family — the selection map

The book's real value is not its list of strategies. It is its matching of strategy to view. Most traders pick a strategy first and then hope the market cooperates. McMillan's approach runs the other way: start with what you believe about the market, then pick the family of strategies that needs that belief to be right.

There are four views, and each one points to a different family.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 340" role="img" aria-label="Market view to strategy family selection map: bullish, bearish, neutral, and volatile-but-directionless views, each matched to the strategy family that needs that view to be right, with what it needs and one line on the risk" class="viz">
<text x="360" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">From market view to strategy family</text>
<rect x="15" y="50" width="168" height="46" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="99" y="70" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">BULLISH</text>
<text x="99" y="88" text-anchor="middle" fill="#92a59c" font-size="11">expects a rise</text>
<text x="99" y="116" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<rect x="15" y="128" width="168" height="196" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="99" y="156" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Covered writing</text>
<text x="99" y="178" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">and naked puts</text>
<text x="99" y="200" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Spreads for direction</text>
<text x="99" y="230" text-anchor="middle" fill="#f2f7f4" font-size="11">Needs: direction up</text>
<text x="99" y="252" text-anchor="middle" fill="#92a59c" font-size="11">Risk: upside capped,</text>
<text x="99" y="270" text-anchor="middle" fill="#92a59c" font-size="11">stock can still fall</text>
<rect x="193" y="50" width="168" height="46" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="277" y="70" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">BEARISH</text>
<text x="277" y="88" text-anchor="middle" fill="#92a59c" font-size="11">expects a fall</text>
<text x="277" y="116" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<rect x="193" y="128" width="168" height="196" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="277" y="156" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Put spreads and</text>
<text x="277" y="178" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">protective puts</text>
<text x="277" y="208" text-anchor="middle" fill="#f2f7f4" font-size="11">Needs: direction down</text>
<text x="277" y="230" text-anchor="middle" fill="#92a59c" font-size="11">Risk: defined, but</text>
<text x="277" y="248" text-anchor="middle" fill="#92a59c" font-size="11">time still costs</text>
<rect x="371" y="50" width="168" height="46" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="455" y="70" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">NEUTRAL</text>
<text x="455" y="88" text-anchor="middle" fill="#92a59c" font-size="11">expects a range</text>
<text x="455" y="116" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<rect x="371" y="128" width="168" height="196" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="455" y="156" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Covered writing,</text>
<text x="455" y="178" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">naked puts,</text>
<text x="455" y="200" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">neutral trading</text>
<text x="455" y="230" text-anchor="middle" fill="#f2f7f4" font-size="11">Needs: range holds</text>
<text x="455" y="252" text-anchor="middle" fill="#92a59c" font-size="11">Risk: a breakout</text>
<text x="455" y="270" text-anchor="middle" fill="#92a59c" font-size="11">either way hurts</text>
<rect x="549" y="50" width="168" height="46" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="633" y="70" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">VOLATILE</text>
<text x="633" y="88" text-anchor="middle" fill="#92a59c" font-size="11">expects a big move</text>
<text x="633" y="116" text-anchor="middle" fill="#e8825a" font-size="16">↓</text>
<rect x="549" y="128" width="168" height="196" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="633" y="156" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">Straddles and</text>
<text x="633" y="178" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">strangles</text>
<text x="633" y="208" text-anchor="middle" fill="#f2f7f4" font-size="11">Needs: a big move</text>
<text x="633" y="230" text-anchor="middle" fill="#92a59c" font-size="11">Risk: a quiet market</text>
<text x="633" y="248" text-anchor="middle" fill="#92a59c" font-size="11">decays the premium</text>
</svg>
</figure>

**Bullish — you expect the underlying to rise.** The book's income family fits here: covered writing and naked puts, which collect premium if the underlying stays flat or rises. Spreads fit here too, for the trader who wants defined risk on a directional view — a spread caps both the profit and the loss, so the trade is a bet on direction with the downside fenced in. The question to ask is not "which strategy is best" but "what do I need to be right about?" A covered write needs the stock not to fall much. A spread needs the direction to be right and the move to arrive before expiry.

**Bearish — you expect the underlying to fall.** Put strategies and put spreads carry this view, again with the choice between collecting premium and buying a defined-risk directional bet. The same discipline applies: name what the trade needs to be right about, and check whether that is actually what you believe.

**Neutral — you expect the underlying to stay roughly where it is.** This is the view most traders neglect, because doing nothing feels like not trading. The book treats it as a full strategy family in its own right: covered writing, naked puts, and neutral trading are all ways to profit from a market that goes nowhere — by collecting time value while it decays. A neutral trade needs time to pass without a large move. If you cannot say why the underlying will stay in a range, you do not have a neutral view; you have a hope.

**Volatile but directionless — you expect a large move, but you do not know which way.** Straddles and strangles belong here: structures that profit from movement in either direction. What they need to be right about is volatility, not direction. They need the move to be large enough to cover the premium paid for both sides — and that is a harder bar than most traders realise, because the market charges for expected movement in advance.

The map is the whole point of the book in one picture. A trader who can look at a market, name their view honestly, and then pick the family that matches it has already absorbed most of what the book teaches. The rest is detail — and the book has a thousand pages of it, chapter by chapter, for when a specific trade needs it.

## The fork in the road: directional trading vs volatility trading

The book's most important passage for a working trader is its fork in the road. McMillan's argument, in plain terms: if directional trading is too time-consuming, or your stops keep getting whipsawed, concentrate more heavily on volatility trading instead.

Directional trading is the job most traders know: predict the direction, pick the entry, set the stop, manage the exit. It demands constant watching, and its failure mode is specific and miserable — you are right about the direction, but the stop gets hit on a wobble first, and then the market goes your way without you. Traders who live through that a few times start to suspect the problem is not their analysis. Often they are right. The problem is the job itself: directional trading pays you only when your timing is right as well as your direction.

Volatility trading is a different job. The profit comes from the move in implied volatility and the passage of time, not from picking the right direction. A volatility trader asks whether options are expensive or cheap relative to how much the underlying usually moves, and whether the coming move — in either direction — will be larger than the market has priced in. That is not an easier job. It is a different one, with different failure modes: you can be right that a large move is coming and still lose if the move arrives too late, or if volatility was already priced so high that the premium you paid assumed the move.

Here is a self-test you can run on your own trading journal. It takes ten minutes and it answers the fork honestly:

1. **Look at your last 30 to 40 trades.** For each one, write down whether your direction call was right — not whether the trade made money, but whether the underlying actually went the way you expected.
2. **Count the trades where the direction was right but the trade still lost.** If that number is high — if stops kept getting hit on wobbles, or time decay ate the premium before the move arrived — your direction was not the problem. Your job was.
3. **Count the hours you spend watching the market each day.** If directional trading needs you glued to the screen all day to survive, and that is not sustainable for you, that is data, not a character flaw.
4. **Ask what you would need to learn to trade volatility instead.** The answer is in this book's Part VI and in the volatility material on this site — but the honest version of the question is whether you are willing to learn a new job, not whether you want an easier one.

If the self-test says your direction is fine and your timing is the problem, or that the screen-watching is unsustainable, you belong on the volatility side of the fork. If it says your direction calls are the problem, volatility trading will not save you — a volatility trade still needs a view on how much the market will move, and the book is blunt that there is no shortcut around doing the work. Either way, the test replaces a vague feeling ("trading is hard") with a specific diagnosis, and that is what a reference book is for.

If you run the test, keep the journal. Our guide to [what to track in a trading journal beyond profit and loss](/articles/trading-journal-what-to-track-beyond-pnl/) covers the fields that make a test like this possible — direction right or wrong, stop behaviour, time in the trade — because a journal that only records profit and loss cannot answer the fork.

## Naked puts vs covered calls — the decision, not the verdict

The book's most-cited practical section compares two ways to earn premium income, and competitors summarise its verdict in one line. The verdict matters less than the decision behind it, so here it is rebuilt as a reader-side choice.

**The two structures.** A covered call means you own the stock and sell a call against it: you collect the premium, and if the stock rises past the strike you give up the further upside. A naked put means you own no stock and sell a put: you collect the premium, and if the stock stays flat or rises you keep it. If the stock falls below the strike, you are obliged to buy it at the strike — which is where the risk lives.

**The book's verdict, as reviewers report it:** for a strategist who owns no stock and wants premium income if the underlying stays flat or rises, selling naked puts is generally the better structure than buying stock and selling calls. The reason is capital efficiency — the naked put does not tie up the money needed to own the stock outright. Covered writing still fits traders who already own the stock, or who want the incremental-return approach of adding a little premium income to a holding they intend to keep anyway.

**The decision, on your side.** Ask one question first: do you already own the stock? If yes, covered writing is the natural fit — you are adding income to a position you already hold. If no, and you are starting from cash and want premium income if the stock stays flat or rises, the naked put is the structure the book points to. That is the whole decision, and it is a question about your starting position, not about which strategy is "better" in the abstract.

**The honest risk side, in plain language.** A sold put carries real downside exposure and must be sized and planned like any short position. If the underlying falls sharply, the put seller is obliged to buy it at the strike — at a price far above the market — and the loss is the gap between the strike and where the underlying actually trades, minus the premium collected. That loss is not theoretical. It is the reason the premium exists: the market pays you precisely because you are carrying that risk. Before selling any put, know the position size you can carry if the underlying falls hard, and know your exit plan before the trade is on. Our guides to [position sizing](/articles/position-sizing/) and [risk of ruin](/articles/risk-of-ruin-trading/) cover the maths the book assumes you will do — the book gives you the structure, not the size.

**The long-dated angle.** The book also uses long-dated options for naked-put selling: a long-dated put decays slowly, so the premium collected is spread over a longer period and the position needs less active management. The same logic appears in the next section — it is the time-decay principle again, applied to income.

## LEAPS and time decay as one idea

LEAPS are long-dated options — options with a long time to expiry, often a year or more. The book returns to them again and again, in three different trades, and competitors list the three trades without noticing they are the same idea. They are one idea, and it is the idea from the first section of this article: own the option that decays slowly, sell the one that decays fast.

**Calendar and diagonal spreads.** Buy the long-dated option, which decays slowly, and sell the short-dated option, which decays fast. Each day, the option you sold loses value faster than the option you own. The difference is your profit — provided the underlying stays near the strike of the option you sold. If the underlying moves far away, the structure stops working, which is why the book treats these as range trades, not direction trades.

**Deep in-the-money LEAPS against a short-term call.** Buy a deep in-the-money long-dated put, which behaves almost like the underlying itself but decays slowly, and sell a short-term call against it. The sold call decays fast; the bought put barely decays at all. The same principle, wearing different clothes.

**Naked-put selling with LEAPS.** Sell a long-dated put and collect premium that decays slowly, so the position can be held longer with less urgency. Same principle, third application.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Time decay: the long-dated LEAPS leg loses value slowly on a shallow curve while the short-dated leg falls fast; the shaded band between the curves is the spread the trader collects" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Time decay: sell the fast leg, own the slow leg</text>
<path d="M 70,90 C 250,100 450,140 640,190 L 640,290 C 350,200 200,120 70,90 Z" fill="#e8825a" fill-opacity="0.18"/>
<line x1="70" y1="55" x2="70" y2="262" stroke="#5b7a6e"/>
<line x1="70" y1="262" x2="640" y2="262" stroke="#5b7a6e"/>
<path d="M 70,90 C 250,100 450,140 640,190" fill="none" stroke="#f2f7f4" stroke-width="2.5"/>
<path d="M 70,90 C 200,120 350,200 640,290" fill="none" stroke="#e8825a" stroke-width="2.5"/>
<circle cx="70" cy="90" r="4" fill="#f2f7f4"/>
<circle cx="640" cy="190" r="4" fill="#f2f7f4"/>
<circle cx="640" cy="290" r="4" fill="#e8825a"/>
<text x="300" y="108" text-anchor="start" fill="#f2f7f4" font-size="12">Long-dated (LEAPS) — decays slowly</text>
<text x="430" y="232" text-anchor="start" fill="#f2f7f4" font-size="12">Short-dated — decays fast</text>
<text x="400" y="172" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">The spread the</text>
<text x="400" y="190" text-anchor="middle" fill="#f2f7f4" font-size="12" font-weight="700">trader collects</text>
<text x="70" y="45" text-anchor="start" fill="#92a59c" font-size="12">Option value</text>
<text x="355" y="296" text-anchor="middle" fill="#92a59c" font-size="12">Time to expiry →</text>
</svg>
</figure>

Teach the principle once and the three applications follow. That is what turns a 1,000-page reference into a single usable rule: in any spread, ask which leg decays faster, and make sure you are selling that one.

One more note on LEAPS, because it matters for Indian readers. LEAPS, PERCS, and the book's tax discussion come from US options markets. The concept — long-dated options decay slowly — translates everywhere. The specific instruments and the tax treatment do not. Indian market mechanics, including expiries and contract structure, differ from the US market the book describes. Use the principle; do not copy the trade.

## Hedging and neutral trading — the portfolio view

The later parts of the book make a shift that the title promises: from trading one option position to managing a portfolio. This is the difference between a trader and a strategist, and it is where the book earns its title.

**Hedging a stock position with options.** A trader who owns stock and worries about a fall can buy puts as protection — paying premium to cap the downside, the way insurance caps a loss. The book treats hedging as a cost-benefit question, not a reflex: protection costs premium, and premium is paid every time, while the fall it protects against happens only sometimes. The decision is whether the protection is worth its price for this holding, at this moment — not whether hedging is "good" in general.

**Index options and futures to protect a portfolio.** Instead of hedging each holding separately, a trader can hedge the portfolio as a whole with index options or futures — one position that offsets the broad market risk of everything held. The book covers this in Part V, and the logic is the same as the single-stock hedge, scaled up: you are buying protection against a market-wide fall, and the question is still whether the price is worth paying.

**Synthetic positions.** Options can replicate a stock's risk and reward without owning the stock — a combination of options that behaves, in profit and loss, like holding the underlying. The book uses synthetic positions to show that "owning the stock" and "having the stock's exposure" are two different things, and that the cheaper or more flexible route is sometimes the synthetic one. For the reader, the value is conceptual: once you see that a position is a bundle of exposures — direction, time, volatility — you can build the bundle you want instead of accepting the one the market hands you.

**Neutral trading.** The book's treatment of neutral trading — profiting when the market goes nowhere — is the clearest expression of the portfolio view. A neutral trader is not betting on direction at all. They are betting that the market will stay in a range while time passes, and collecting the decay while it does. Done well, neutral trading can improve the overall profit picture of a portfolio because it earns in the flat periods when directional trades earn nothing. Done carelessly, it is the trade that looks safe until the range breaks — and the book is clear that a neutral position still needs an exit plan for the day the market leaves the range.

The thread through all four is the same: stop thinking about one trade and start thinking about the portfolio. A strategy is not a single position. It is a set of positions, each carrying a different exposure, managed together.

## How to actually use a 1,000-page reference

A 1,000-page reference is only useful if you know how to use it, and most readers of this book fail at exactly this point. They start at page one, grind through the basic properties of stock options, and give up somewhere in Part II. Here is a better order, built from how the book is actually organised.

**If you already know calls, puts, and basic spreads, start with these three chapters.** Read the philosophy chapter that states the time-value principle, then the chapter on covered writing and naked puts, then the chapter on straddles and strangles. Those three give you the book's core: the principle, the income decision, and the volatility trade. Everything else is detail you can fetch when a specific trade needs it.

**Skip until a specific trade needs them.** The chapters on individual strategy variations — the many spreads, the ratio spreads, the specialised structures — are reference material. Read them when you are about to put on that structure, not before. A chapter read the week you need it is worth five chapters read "for later".

**Read only after 30 to 40 tracked trades.** The chapters on portfolio margin, on measuring and trading volatility in depth, and on index options and futures for portfolio protection assume you have live experience to attach them to. Without tracked trades, they read as theory. With a journal full of real trades — including the ones where the direction was right and the trade still lost — they read as answers. If you have not tracked that many trades yet, our guide to [how many trades it takes to validate a strategy](/articles/how-many-trades-to-validate-a-strategy/) explains why that number matters.

**The 4th-vs-5th-edition call.** Buy the fifth edition if you want a living reference: it is the current edition, it updates the market structure and margin discussion, and it adds the chapters on volatility skew and portfolio margin. Buy the fourth edition if the core strategy framework is all you need and you would rather spend less — the philosophy, the strategy families, and the time-decay principle are all there. Either way, the edition matters far less than the reading order.

**Translate, do not copy.** The book's examples come from US options markets — long-dated LEAPS, PERCS, and the tax discussion are US-specific. Indian market mechanics differ, including expiries and contract structure. When the book shows a trade, ask what principle it demonstrates, then ask how that principle works in the market you actually trade. A trader who copies a US trade into an Indian expiry calendar is not using the book. A trader who takes the principle and rebuilds the trade for their own market is.

## The honest limitations

A book this widely praised still has honest limitations, and the reviewers who love it name them. They are worth knowing before you buy.

**It is dense, and it is long.** Over 1,000 pages, with organisation and redundancy criticised in places. This is not a book to read in a weekend, and it is not a book to read straight through. The reading plan above exists because the book's own structure fights against casual reading.

**Volatility comes late and unevenly.** The book's full treatment of volatility sits in Part VI, at the end, and reviewers note it is treated unevenly. That is a real gap in a book whose central idea is partly about volatility — and it is the reason the reading order in this article pulls the volatility material forward. If volatility and pricing are your current question, the companion read is *Option Volatility and Pricing* by Sheldon Natenberg — the other book traders call a bible, the one that goes deep on volatility and pricing while McMillan goes deep on strategy and hedging. Both are necessary reads for a serious options trader, and the verdict on which to read first is in the next section.

**A conservative tilt on risk.** The book's risk posture is conservative, which is a strength for a reader who needs restraint and a limitation for a reader who wants the book to push them. Take the conservatism as the book's character, not as a rule — your own risk limits are yours to set, and the position-sizing maths is yours to do.

**The commission-cost advice is dated.** Reviewers unanimously note this: the book's focus on commission costs reflects an era when commissions were a large part of a trader's costs, and commission costs have fallen sharply since the book was written. One honest paragraph is all this deserves. The strategy framework is the durable part; the cost discussion is a period piece.

None of these limitations change the verdict. They change how you use the book — as a reference, in the right order, with the volatility material pulled forward and the cost advice taken as history.

## A strategy is only an edge if your results say so

Here is the sentence the book cannot write for you: a strategy family picked from a map is still only a hypothesis. It becomes an edge when your tested results say so — when you have paper-traded it, journalled the trades, and reviewed the results over enough trades to separate skill from luck.

That means the work after reading is as important as the reading. Pick one strategy family from the map. Paper-trade it for a fixed number of trades. Journal every trade — not just the profit and loss, but the market view you held, whether the direction was right, what time decay did to the position, and whether the exit followed your plan. Then review: did the family earn money in the conditions it was supposed to earn money in? Our guide to [how to calculate real expectancy](/articles/how-to-calculate-real-expectancy/) walks through the maths — expectancy is the number that tells you whether a method makes money over many trades, after all costs — and it is the number that turns a book's strategy into your strategy.

And a boundary that matters more than any strategy: if trading is causing ongoing stress, sleep problems, or anxiety, a book is not enough. That is not a trading problem to solve with a better strategy. Talking to a qualified professional is the sensible step, and it is worth saying plainly because the traders who most need to hear it are the ones least likely to say it themselves.

> **Risk disclosure:** Trading involves substantial risk of loss, including in leveraged products such as futures and options, where losses can exceed your initial margin in adverse conditions. Nothing in this article or in the book it summarises guarantees profit, and no author's results imply results you should expect. Never trade with money you cannot afford to lose, and treat every method — including your own — as something to validate over many trades before trusting it with size.

## Verdict: who should read it, and what to read first

**Read it if** you already know calls, puts, and basic spreads, you have placed at least a few option trades, and you want one reference that goes deep on strategy, volatility, and hedging — a book you return to by chapter whenever a strategy needs thinking through. It is the book most often cited as the field's core reference text, and that reputation is earned: no other single volume covers this much strategy ground.

**Do not read it first if** you are still building basic vocabulary. Reviewers are unanimous: the length and density will overwhelm a trader who has not yet learned calls, puts, quotes, and basic terms such as support and resistance. Complete beginners should start with a lighter book first, then come back to McMillan. Motivated beginners who already know the mechanics can manage it — but only if they use the reading plan above instead of starting at page one.

**McMillan or Natenberg first?** They do different jobs, so "better" is the wrong question. *Options as a Strategic Investment* is the complete reference you keep on the desk from the start and return to by chapter. *Option Volatility and Pricing* is the deep explanation of why options are priced the way they are. Read Natenberg first if volatility and pricing are your current question, and keep McMillan on the desk as the reference from the start. If you only buy one of the two, buy the one that matches your current stage. Both are necessary reads for a serious options trader — McMillan for strategy and hedging, Natenberg for volatility and pricing depth. The full summary of Natenberg's book is the companion spoke under the Best Option Trading Books hub, and the hub itself carries the stage-matched reading ladder for the whole cluster, including the lighter books to start with and the later spokes on *Understanding Options*, *The Options Playbook*, and *The Bible of Options Strategies*.

**Is it worth reading?** Yes, if you are at the right stage. It is the strategy reference the field keeps returning to, and the one book that turns "which strategy should I use?" from a guess into a decision. It will not tell you when to trade, it will not hand you an edge, and it will not read itself. But for a trader ready to move from placing trades to choosing strategies, there is no better single book to have on the desk.

Reader ratings on one seller page put the book at 4.22 out of 5 across 514 reviews, with "comprehensive", "reference-worthy" and "thorough" the most common praise words — a rating that matches what reviewers say, and worth reporting as a seller-page figure rather than as this site's own judgement.

## Where to buy the book

- **India:** [Buy *Options as a Strategic Investment* on Amazon.in](https://www.amazon.in/dp/PLACEHOLDER-AFFILIATE-TOKEN-IN) *(affiliate link, placeholder token — to be replaced with a real Associates ID before this page goes live)*
- **Global:** [Buy *Options as a Strategic Investment* on Amazon.com](https://www.amazon.com/dp/PLACEHOLDER-AFFILIATE-TOKEN-COM) *(affiliate link, placeholder token — to be replaced with a real Associates ID before this page goes live)*

The links are incidental. The article's value is the strategy system above, not the link — buy the book from wherever you prefer, in whichever edition fits your stage.

## Frequently asked questions

### Is *Options as a Strategic Investment* good for beginners?

Not as a first book. It is the benchmark strategy reference, and the book to read once you already know calls, puts, and basic spreads and have placed a few trades. A reader with no mechanics yet will struggle with it — reviewers warn the length and density can overwhelm a trader still building basic vocabulary, and the book assumes familiarity with calls, puts, quotes, and basic terms such as support and resistance. Complete beginners should start with a lighter book first, then come back to McMillan. Motivated beginners who already know the mechanics can manage it if they follow the reading plan in this article instead of starting at page one.

### *Options as a Strategic Investment* vs *Option Volatility and Pricing* — which should I read first?

They do different jobs. McMillan's book is the complete strategy reference you keep on the desk and return to by chapter. Natenberg's *Option Volatility and Pricing* is the deep explanation of why options are priced the way they are. Read Natenberg first if volatility and pricing are your current question, and keep McMillan on the desk as the reference from the start. If you only buy one of the two, buy the one that matches your current stage. Both are necessary reads for a serious options trader — McMillan for strategy and hedging, Natenberg for volatility and pricing depth.

### What is the difference between the 4th and 5th editions?

The fifth edition, published in 2012, is the edition this summary follows. It updates the market structure and margin discussion and adds two new chapters — on volatility skew and on portfolio margin — that the fourth edition does not have. The fourth edition is still a legitimate way in for the core strategy framework: the philosophy, the strategy families, and the time-decay principle are all there. Buy the fifth edition if you want a living reference; buy the fourth if the core framework is all you need.

### How long does it take to read *Options as a Strategic Investment*?

There is no single answer, because this is not a book to read once and shelve. It is over 1,000 pages, organised so each chapter stands largely on its own — and it is meant to be read slowly, worked through chapter by chapter, and re-read as your trading raises new questions. The honest measure is not the reading time but the working time: a chapter you have worked through is worth five chapters you have skimmed. A motivated reader with the mechanics already in place can work through the core chapters over several weeks of steady reading, but the book stays on the desk for years.

### Is McMillan's book worth reading?

Yes, if you are at the right stage. It is the most comprehensive single-volume options strategy reference available, the book most often cited as the field's core reference text, and the one book that turns "which strategy should I use?" from a guess into a decision. It is worth reading once you already know basic options mechanics and have started noticing that strategy selection — not just direction — is deciding your results. It is not worth reading as a first book, and it will not tell you when to trade or hand you an edge.

### What does "sell time value and buy intrinsic value" mean?

An option's price has two parts: intrinsic value, which comes from the option already being in the money and does not decay, and time value, which is the premium charged for the time remaining before expiry and decays every day. McMillan's philosophy — "The basic philosophy of option strategy is to sell time value and buy intrinsic value" — means: in any trade, know which side of that split you are on. When you sell an option you are usually selling time value and collecting the decay. When you buy an option you are usually buying time value and paying for time you may not need. A spread lets you buy the intrinsic value you want while selling some of the time value you do not want.

### What is a LEAPS option?

A LEAPS is a long-dated option — an option with a long time to expiry, often a year or more. Because it has so much time left, it decays slowly. McMillan uses LEAPS in three trades that are really one idea: calendar and diagonal spreads (buy the long-dated option that decays slowly, sell the short-dated one that decays fast), buying deep in-the-money put LEAPS against a short-term call, and naked-put selling with LEAPS. In every case the principle is the same — own the option that decays slowly, sell the one that decays fast. Note for Indian readers: LEAPS come from US options markets, so the concept translates but the specific instruments do not; Indian market mechanics differ.

### Naked put selling vs covered call writing — which is better?

Neither is better in the abstract — the answer depends on your starting position. If you already own the stock, covered call writing fits: you sell a call against a holding you already have and collect premium on top of it. If you own no stock and want premium income if the underlying stays flat or rises, selling naked puts is generally the better structure, because it does not tie up the money needed to own the stock outright. Either way, a sold put carries real downside exposure and must be sized and planned like any short position — if the underlying falls sharply, the put seller is obliged to buy it at the strike.

### What is volatility trading vs directional trading?

Directional trading means predicting the direction: the underlying will rise or fall, and you pick the entry, the stop, and the exit. It pays only when your timing is right as well as your direction, and its failure mode is being right about direction but stopped out on a wobble first. Volatility trading means profiting from the move in implied volatility and the passage of time, not from picking the right direction — you ask whether options are expensive or cheap relative to how much the underlying usually moves, and whether the coming move in either direction will be larger than the market has priced in. McMillan's fork: if directional trading is too time-consuming, or your stops keep getting whipsawed, concentrate more heavily on volatility trading. It is a different job, not an easier one.

### Do I need maths to read McMillan?

You need comfort with the ideas, not advanced mathematics. The book assumes familiarity with calls, puts, quotes, and basic technical-analysis terms such as support and resistance, and it works through strategy structures step by step — but it is a practitioner's reference, not a maths textbook. If you can follow a worked explanation and you already understand the mechanics, you can read it. The hard part is not the maths; it is the density and the length, which is why the reading plan in this article matters more than any maths preparation.

### Is *Options as a Strategic Investment* the best book on options strategies?

It is the book most often cited as the field's core reference text, and reviewers consistently call it the most comprehensive single-volume options strategy reference available — the book traders call the options "bible". For strategy and hedging depth in one volume, no other book covers as much ground. But "best" depends on your stage: it is not the best first book, and for volatility and pricing depth, Natenberg's *Option Volatility and Pricing* is the deeper book. The two together — McMillan for strategy, Natenberg for pricing — are the pair serious options traders keep returning to.

### Can I read McMillan before ever trading options?

You can, but you will get far less from it. The book assumes you already know calls, puts, and basic spreads, and its chapters on portfolio protection and volatility assume you have live experience to attach them to. Learn the mechanics first, place some trades — real or paper — and track them. Read McMillan when strategy selection is already a question you are asking, because that is when the book's answers land. The reading plan in this article gives the order: start with the philosophy chapter, the covered-writing and naked-put chapter, and the straddle chapter, then fetch the rest when a specific trade needs it.
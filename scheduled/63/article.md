---
title: "How to Read an Option Chain"
description: "Learn how to read an option chain step by step — layout, bid-ask, volume, open interest, PCR and max pain — worked on one illustrative chain for beginners."
meta_description: "Learn how to read an option chain step by step — layout, bid-ask, volume, open interest, PCR and max pain — worked on one illustrative chain for beginners."
date: 2026-11-25
author: Kaizen
tag: "Options trading · Beginners"
keywords: ["how to read an option chain", "how to read option chain", "option chain explained", "option chain for beginners", "how to read NIFTY option chain", "open interest", "change in open interest", "put call ratio", "PCR", "max pain", "option chain support and resistance", "implied volatility option chain", "option chain columns", "bid ask spread option chain", "volume vs open interest", "at the money strike"]
---

*By Kaizen · 25 November 2026 · Monks Of Market*

> **Educational disclaimer:** This article is for education only and is not investment advice. The author is not SEBI-registered. Options trading carries a high risk of loss — never trade with money you can't afford to lose.

## An Option Chain Is a Menu With a Map Built In

An option is a contract that gives its buyer the right, but not the obligation, to buy or sell something at a fixed price — the strike — before a fixed date — the expiry — for a price called the premium. That is the whole definition, and this guide assumes you already know it; the full version is in *What Is an Option?* This guide is about the table where every such contract is listed — and the wall of numbers you see when you open it.

Here is the one idea that reframes the whole table: **an option chain is not a wall of numbers to memorise. It is a menu with a map built in.** Every row is one strike, every column is one fact about that strike, and the two facts that matter most are where the money is parked — open interest — and whether new money is arriving or leaving — change in open interest. This guide follows a six-step order to read those facts, plus the price, on one chain:

1. **Identify the underlying and its current price.**
2. **Choose an expiration date.**
3. **Locate the at-the-money strike.**
4. **Read the bid and ask.**
5. **Check volume and open interest.**
6. **Note implied volatility.**

Every step below lands on a real cell of one carried chain, not on an abstract definition. By the end, you will know what the chain can tell you — and, just as importantly, what it cannot.

## The Layout: Calls on the Left, Puts on the Right, Strikes Down the Centre

An option chain is a table listing every available option contract for one underlying — an index or a stock — organised by expiration date and strike price, and the layout is the same wherever you see it: your broker's option chain view or the exchange's official option chain page.

Calls sit on the left side of the table, puts on the right, and strike prices run down the centre column. Each row is one strike; each column is one piece of data about that strike. Across the top are expiry tabs — the nearest expiry, expiries a few weeks out, monthly expiries, and longer-dated ones. Pick an expiry tab and the whole table refills with that expiry's contracts.

The strike prices are the spine of the table, at regular intervals — 100 points apart in the example you are about to read — with the current price sitting somewhere among them. The strike nearest the current price is the **at-the-money** strike, usually highlighted. Strikes above it are out-of-the-money calls and in-the-money puts; below it, the reverse. That split is all the moneyness you need to read a chain. What the premium is made of at each strike belongs to the guide named *What Is Option Premium?*

The chain defaults to the nearest expiry, but beginners are usually told to start with expiries a few weeks out, because the nearest expiry decays fastest. Weekly expiries exist alongside monthly ones; the current expiry day for a contract is on the exchange's official contract-specification page.

## The Carried Chain: One Index, One Expiry, Three Strikes

Every number in this guide comes from one illustrative example — a teaching example, not a market claim. An index trades at **25,000**, the same level used in the earlier guides in this cluster. One expiry, a few weeks out. Three strikes: 24,900, 25,000, and 25,100, with 25,000 the at-the-money strike.

**Calls — the left side of the table**

| Strike | Last (Rs) | Bid (Rs) | Ask (Rs) | Volume | Open interest | Change in OI |
| --- | --- | --- | --- | --- | --- | --- |
| 24,900 | 145 | 142 | 148 | 12,400 | 85,000 | +9,200 |
| **25,000** | **95** | **93** | **97** | **21,300** | **120,000** | **+15,600** |
| 25,100 | 58 | 56 | 60 | 9,800 | 145,000 | +11,400 |

**Puts — the right side of the table**

| Strike | Last (Rs) | Bid (Rs) | Ask (Rs) | Volume | Open interest | Change in OI |
| --- | --- | --- | --- | --- | --- | --- |
| 24,900 | 52 | 50 | 54 | 8,100 | 140,000 | +12,800 |
| **25,000** | **88** | **86** | **90** | **19,600** | **110,000** | **+10,300** |
| 25,100 | 152 | 149 | 155 | 11,200 | 78,000 | +6,700 |

All premiums are quoted per unit; the total cash outlay is the premium per unit multiplied by the lot size — stated here in words only, because lot sizes change and different guides quote different numbers for the same contract right now.

The 24,900 call is in the money and the 25,100 call is out of the money; the mirror image holds for puts. The 25,000 row — the at-the-money strike — is where both sides meet. The in-the-money contracts carry intrinsic value of Rs 100 per unit at 25,000: the 24,900 call, because the index sits 100 points above its strike, and the 25,100 put, because it sits 100 points below its strike.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 330" role="img" aria-label="Carried option chain as an annotated table: calls on the left, puts on the right, strikes down the centre, the 25,000 at-the-money row highlighted, with last price and open interest shown for each strike" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The carried chain — calls left, puts right, strikes centre</text>
<text x="110" y="70" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">Call last (Rs)</text>
<text x="235" y="70" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">Call OI</text>
<text x="360" y="70" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">Strike</text>
<text x="485" y="70" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">Put OI</text>
<text x="610" y="70" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">Put last (Rs)</text>
<text x="110" y="120" text-anchor="middle" fill="#f2f7f4" font-size="13">145</text>
<text x="235" y="120" text-anchor="middle" fill="#f2f7f4" font-size="13">85,000</text>
<text x="360" y="120" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">24,900</text>
<text x="485" y="120" text-anchor="middle" fill="#f2f7f4" font-size="13">140,000</text>
<text x="610" y="120" text-anchor="middle" fill="#f2f7f4" font-size="13">52</text>
<rect x="10" y="150" width="700" height="55" fill="none" stroke="#e8825a" stroke-width="2" rx="8"/>
<text x="110" y="180" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">95</text>
<text x="235" y="180" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">120,000</text>
<text x="360" y="180" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">25,000</text>
<text x="485" y="180" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">110,000</text>
<text x="610" y="180" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">88</text>
<text x="415" y="180" text-anchor="start" fill="#e8825a" font-size="11" font-weight="700">· ATM</text>
<text x="110" y="240" text-anchor="middle" fill="#f2f7f4" font-size="13">58</text>
<text x="235" y="240" text-anchor="middle" fill="#f2f7f4" font-size="13">145,000</text>
<text x="360" y="240" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">25,100</text>
<text x="485" y="240" text-anchor="middle" fill="#f2f7f4" font-size="13">78,000</text>
<text x="610" y="240" text-anchor="middle" fill="#f2f7f4" font-size="13">152</text>
<text x="360" y="310" text-anchor="middle" fill="#92a59c" font-size="12">Columns that matter: last price · volume · open interest · change in OI</text>
</svg>
</figure>

## Reading the Chain, Step by Step

**Step 1 — Identify the underlying and its current price.** The underlying is the index, at 25,000. Everything on the chain is priced relative to that one number.

**Step 2 — Choose an expiration date.** This chain is one expiry, a few weeks out, so every number you read belongs to the same deadline.

**Step 3 — Locate the at-the-money strike.** The strike nearest 25,000 is the 25,000 strike — the highlighted middle row. Above it (25,100) sit out-of-the-money calls and in-the-money puts; below it (24,900), the reverse. Find this row first; it is your anchor.

**Step 4 — Read the bid and ask.** On the 25,000 call, the bid is Rs 93 and the ask is Rs 97; on the 25,000 put, Rs 86 and Rs 90. Those are the live prices — more current than the last traded price, as the next section explains.

**Step 5 — Check volume and open interest.** The 25,000 call traded 21,300 contracts today and has 120,000 still open; the 25,000 put traded 19,600 and has 110,000 still open. Those are the busiest rows on the chain, which is normal: the at-the-money strike is usually the most active.

**Step 6 — Note implied volatility.** It is a column on the chain, covered in its own short section near the end of this guide, and it describes how the market prices future movement.

That is the whole walk. The sections that follow take each column in turn, on these same cells.

## Bid, Ask, and the Spread: The Cost Hiding in Plain Sight

The **bid** is the highest price buyers will pay; the **ask** is the lowest price sellers will accept; the **last** price is the most recent traded price. The last price can be stale — if a contract has not traded recently, its last price may be hours old. The bid and ask are live quotes, which is why you should read them first.

The gap between bid and ask is the **spread**, a cost on every entry and exit — you buy at the ask and sell at the bid. On the 25,000 call the spread is Rs 97 minus Rs 93, or Rs 4 per unit; on the 24,900 call it is Rs 6. Every spread on this illustrative chain is small, which is what a liquid contract looks like.

Tight spreads mean easy entry and exit. Wide spreads warn of illiquidity — a hidden cost that eats into a trade before it starts. Always check the spread before entering, and be most suspicious of it on the quiet, far-away strikes where few contracts trade.

On the chain, the premium appears only as this price column — last price, bid, ask. What it is made of is covered in full in the guide named *What Is Option Premium?*

## Volume Counts Trades. Open Interest Counts Positions.

**Volume** is the number of contracts traded today. **Open interest** — OI — is the number of contracts at a strike still open: created, but not yet closed out or expired. The distinction is the single most useful sentence in this guide: **volume counts trades, open interest counts positions.**

If a contract is bought and sold an hour later, that adds to volume and zero to open interest — the trade happened twice, but no position is still open at the end of it. OI only rises when a genuinely new position is created. That is why OI tells you where money is parked, not where it is moving.

On the carried chain, the 25,000 call has the highest volume (21,300) and the second-highest call OI (120,000) — busy today and heavily parked. The 25,100 call is the opposite shape: modest volume of 9,800, but the heaviest call OI at 145,000. A strike can be quiet today and still matter enormously, because of what is already parked there.

## Change in Open Interest: The Video, Not the Photograph

Static open interest is a photograph: how many positions are open right now. **Change in open interest** is the video: how many positions were added or removed during the session. If you learn only one column beyond the price, learn this one.

Change in OI only means something read together with the price: the same rise in OI means opposite things depending on whether the premium rose or fell. There are four combinations.

On the carried chain, the 25,000 call's open interest rose by **15,600** while its premium rose from Rs 88 to Rs 95. Price up and OI up together means new positions were created while the price was rising — **new longs coming in**, the strongest bullish read of the four: genuine buying, with fresh money committing as the price climbs.

Here are all four combinations, as a grid to keep beside any chain you read:

| Price | Open interest | What it usually means |
| --- | --- | --- |
| Up | Up | New longs — genuine buying, fresh money committing |
| Up | Down | Short covering — shorts exiting; rallies like this often fade |
| Down | Up | Fresh shorts building — bearish |
| Down | Down | Longs unwinding — buyers leaving, not new bears arriving |

The two middle rows are where beginners get fooled. A price rising while OI falls looks like strength, but it is shorts rushing to exit — and once they have exited, nothing is left pushing the price up. A price falling while OI falls may only be existing buyers giving up, with no new sellers arriving. The price tells you what happened; the change in OI tells you who did it.

Every change-in-OI figure on the carried chain is positive — OI grew at all six strikes, most of all the 25,000 call at +15,600. New positions were being created on both sides. That is a fact about positioning, not a prediction about where the index goes next.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 360" role="img" aria-label="Change in open interest, four combinations: price up with OI up means new longs, price up with OI down means short covering, price down with OI up means fresh shorts, price down with OI down means longs unwinding" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Change in OI: the video, not the photograph</text>
<rect x="10" y="50" width="340" height="132" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="180" y="78" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">PRICE UP · OI UP</text>
<text x="180" y="108" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">New longs</text>
<text x="180" y="138" text-anchor="middle" fill="#92a59c" font-size="12">Genuine buying —</text>
<text x="180" y="162" text-anchor="middle" fill="#92a59c" font-size="12">fresh money committing</text>
<rect x="370" y="50" width="340" height="132" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="540" y="78" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">PRICE UP · OI DOWN</text>
<text x="540" y="108" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Short covering</text>
<text x="540" y="138" text-anchor="middle" fill="#92a59c" font-size="12">Shorts exiting —</text>
<text x="540" y="162" text-anchor="middle" fill="#92a59c" font-size="12">rallies often fade</text>
<rect x="10" y="200" width="340" height="132" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="180" y="228" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">PRICE DOWN · OI UP</text>
<text x="180" y="258" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Fresh shorts</text>
<text x="180" y="288" text-anchor="middle" fill="#92a59c" font-size="12">Bearish —</text>
<text x="180" y="312" text-anchor="middle" fill="#92a59c" font-size="12">new sellers arriving</text>
<rect x="370" y="200" width="340" height="132" fill="none" stroke="#5b7a6e" rx="8"/>
<text x="540" y="228" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">PRICE DOWN · OI DOWN</text>
<text x="540" y="258" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Longs unwinding</text>
<text x="540" y="288" text-anchor="middle" fill="#92a59c" font-size="12">Buyers leaving —</text>
<text x="540" y="312" text-anchor="middle" fill="#92a59c" font-size="12">not new bears arriving</text>
</svg>
</figure>

## Open Interest as Support and Resistance

This is the practical core of reading a chain. A strike with very heavy call OI above the current price often behaves like resistance, because call sellers are sitting there; heavy put OI below the current price often behaves like support, for the same reason. The chain is a map of where sellers are positioned.

On the carried chain, the heaviest call open interest above 25,000 sits at the 25,100 strike: **145,000** contracts — the resistance read. Below the current price, the heaviest put open interest sits at the 24,900 strike: **140,000** contracts — the support read.

So the chain sketches a rough range — support near 24,900, resistance near 25,100, the index at 25,000 in the middle.

Now the honest caveat, as important as the reading itself. **These levels hold until they do not — and when they break, they break violently.** OI clusters are a map of where sellers are positioned, not a guarantee. A support level built from put OI is not a wall, only a concentration of traders who would rather the price stayed above it. If the price pushes through anyway, those sellers may rush to exit and the move can accelerate through the level instead of stopping at it; the same holds in reverse at resistance. Use the OI map like a weather forecast: it shows where pressure is building, not what will happen. The chain maps positioning. It does not predict price.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 310" role="img" aria-label="Open interest as support and resistance: the 25,100 call-OI cluster of 145,000 above the index at 25,000 as resistance, the 24,900 put-OI cluster of 140,000 below as support, with the caveat that these levels hold until they do not" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Where sellers sit: the OI map</text>
<line x1="360" y1="115" x2="360" y2="245" stroke="#5b7a6e" stroke-width="1" stroke-dasharray="4 4"/>
<rect x="180" y="55" width="360" height="60" fill="none" stroke="#e8825a" rx="8"/>
<text x="360" y="80" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">RESISTANCE · 25,100</text>
<text x="360" y="104" text-anchor="middle" fill="#92a59c" font-size="12">Call OI 145,000</text>
<text x="360" y="155" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Index 25,000</text>
<rect x="180" y="185" width="360" height="60" fill="none" stroke="#7fb069" rx="8"/>
<text x="360" y="210" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">SUPPORT · 24,900</text>
<text x="360" y="234" text-anchor="middle" fill="#92a59c" font-size="12">Put OI 140,000</text>
<text x="360" y="290" text-anchor="middle" fill="#92a59c" font-size="12">These levels hold until they do not — breaks through them are violent</text>
</svg>
</figure>

## Put-Call Ratio: A Mood Reading, Not a Signal

The **put-call ratio** — PCR — is a sentiment gauge built from the chain's own totals:

**PCR = total put open interest ÷ total call open interest**

On the carried chain, total call OI is 85,000 + 120,000 + 145,000 = **350,000** and total put OI is 140,000 + 110,000 + 78,000 = **328,000**, so PCR = 328,000 ÷ 350,000 = **about 0.94**.

Above 1 means more put OI than call OI, read as bullish — counterintuitively, because put writers expect the puts they wrote to expire worthless. Below 1 is read as bearish. The rough zones are:

- **Above about 1.2** — crowded put writing.
- **Around 0.9 to 1.1** — fairly neutral.
- **Below about 0.8** — crowded call writing.

Our chain's 0.94 sits inside the neutral zone — positioning is balanced, nothing crowded, nothing extreme.

Two caveats. First, the PCR is a **contrarian** indicator at the extremes: a very high reading means positioning is crowded on one side, which is often when reversals happen — a warning that everyone is already on the same side, not a green light to join them. Second, the absolute number is **nearly meaningless without context**, because each instrument has its own typical range; what matters is where today's reading sits relative to that instrument's own recent range.

The zones above are rough zones, and they are instrument-dependent. They are not trigger levels. The PCR is a mood reading, never a buy or sell button.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 720 250" role="img" aria-label="Put-call ratio gauge: below about 0.8 crowded call writing, around 0.9 to 1.1 neutral, above about 1.2 crowded put writing, with the carried chain's 0.94 marked inside the neutral zone" class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Put-call ratio: a mood reading, not a signal</text>
<line x1="60" y1="130" x2="660" y2="130" stroke="#5b7a6e" stroke-width="2"/>
<rect x="60" y="110" width="150" height="40" fill="none" stroke="#5b7a6e" rx="4"/>
<text x="135" y="128" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">Below ~0.8</text>
<text x="135" y="178" text-anchor="middle" fill="#92a59c" font-size="11">crowded call writing</text>
<rect x="285" y="110" width="150" height="40" fill="none" stroke="#5b7a6e" rx="4"/>
<text x="360" y="128" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">0.9–1.1 · neutral</text>
<text x="360" y="178" text-anchor="middle" fill="#92a59c" font-size="11">fairly balanced</text>
<rect x="510" y="110" width="150" height="40" fill="none" stroke="#5b7a6e" rx="4"/>
<text x="585" y="128" text-anchor="middle" fill="#f2f7f4" font-size="11" font-weight="700">Above ~1.2</text>
<text x="585" y="178" text-anchor="middle" fill="#92a59c" font-size="11">crowded put writing</text>
<line x1="315" y1="95" x2="315" y2="165" stroke="#e8825a" stroke-width="3"/>
<text x="315" y="82" text-anchor="middle" fill="#e8825a" font-size="12" font-weight="700">0.94 — this chain</text>
<text x="360" y="225" text-anchor="middle" fill="#92a59c" font-size="12">Rough zones, instrument-dependent — never a buy or sell trigger</text>
</svg>
</figure>

## Max Pain: The Expiry-Week Curiosity

**Max pain** is the strike where the most options — calls and puts together — would expire worthless, where option buyers as a group lose the most. It is mostly looked at around weekly expiry, especially on expiry morning. Near expiry, price sometimes drifts toward it; sometimes it does not.

To find it, ask for each strike: if the index expired exactly there, what would all six contracts be worth together? The strike with the lowest total is max pain.

- **At 24,900:** the 25,000 put is worth Rs 100 × 110,000 contracts (Rs 11,000,000) and the 25,100 put Rs 200 × 78,000 (Rs 15,600,000); the rest are worthless. Total: **Rs 26,600,000**.
- **At 25,000:** the 24,900 call is worth Rs 100 × 85,000 contracts (Rs 8,500,000) and the 25,100 put Rs 100 × 78,000 (Rs 7,800,000); the rest are worthless. Total: **Rs 16,300,000**.
- **At 25,100:** the 24,900 call is worth Rs 200 × 85,000 contracts (Rs 17,000,000) and the 25,000 call Rs 100 × 120,000 (Rs 12,000,000); the rest are worthless. Total: **Rs 29,000,000**.

The lowest total is at 25,000, so **max pain on this illustrative chain is 25,000**. Max pain is a curiosity that sometimes rhymes with price near expiry, never a target — price drifts toward it sometimes and ignores it other times.

## Implied Volatility and the Greeks, in Brief

**Implied volatility** — IV — is the market's expectation of future movement, backed out from the option's price. High IV means expensive options; low IV means cheap ones. Compare IV across strikes and expiries to see how the market prices risk differently across the chain — an at-the-money strike and a far-away strike can carry very different IV. That is the whole lesson here — IV is not this guide's depth.

The Greeks — delta, theta, vega — are the measuring tools, explained elsewhere. They appear as optional columns on the chain; they are named here only so they do not surprise you.

## Three Mistakes Beginners Make Reading a Chain

**Mistake 1 — Treating the PCR like a buy or sell button.** A PCR of 0.94 on our chain is a neutral mood reading, not an instruction. The moment a single number becomes the reason to trade, the chain has stopped being a map and started being a signal service — and it was never one. The zones are rough, the reading is contrarian at extremes, and the number means little without the instrument's own typical range.

**Mistake 2 — Reading open interest without the change in open interest.** The photograph without the video. The 25,100 call's OI of 145,000 looks like a wall of resistance — until you check whether that OI is growing or shrinking. A heavy OI level where positions are unwinding is a very different picture from the same level where fresh positions are being built.

**Mistake 3 — Chasing the cheapest premium on the chain and calling it value.** The cheapest options are the furthest out of the money, with the lowest probability of finishing profitable. On our chain, the 25,100 call at Rs 58 per unit is the cheapest call — and it needs the index to travel 100 points just to reach its strike. Add a wide spread on top and the cost of getting in and out eats what little chance there was. A small premium is not a small risk.

## What the Chain Can and Cannot Tell You

The chain tells you where other traders have placed their bets and what the market charges for each strike — the menu of every contract and price, and the map of where money is parked and whether new money is arriving. That is enough to read any chain you open and understand what you are looking at.

What it does not tell you is where the price is going. Reading a chain well does not guarantee a profitable trade: a neutral PCR, a clean support level, and a textbook change-in-OI read can all be right about positioning and still be followed by a move nobody on the chain expected. The chain maps positioning and pricing. It does not predict price.

Three habits belong before the first real trade. First, know the full costs around the premium ([options trading charges in India](/articles/options-trading-charges-india/)). Second, decide how much of your capital one trade may risk, and size from that — not from the money available ([position sizing](/articles/position-sizing/)). Third, practise reading chains with no real money at stake ([paper trading vs real trading](/articles/paper-trading-vs-real-trading/)). And remember why defined risk matters: the most a buyer can lose is the premium paid, which is what keeps a bad trade survivable ([risk of ruin](/articles/risk-of-ruin-trading/)).

One last boundary, and it is not about markets. If trading is causing ongoing stress, sleep problems, or anxiety, a guide is not enough — talking to a qualified professional is the sensible step. No article can carry that weight for you.

*This article is for education only and is not investment advice. The author is not SEBI-registered.*

## Frequently Asked Questions

### How to read an option chain for beginners?

Follow six steps: note the underlying and its current price, choose an expiry a few weeks out, find the at-the-money strike, read the bid and ask, check volume and open interest, and note implied volatility. Calls sit left, puts right, strikes centre. The two columns that matter most are open interest — where money is parked — and change in open interest — whether new money is arriving or leaving.

### What is an option chain?

A table listing every available option contract for one underlying — an index or a stock — organised by expiration date and strike price. Calls sit on the left, puts on the right, strikes down the centre, expiry tabs across the top. Each row is one strike; each column is one fact about that strike: bid, ask, last price, volume, open interest, change in open interest.

### What is open interest in an option chain?

The number of contracts at a strike still open — created but not yet closed out or expired. It shows where money is parked, not where it is moving. On the illustrative chain here, the 25,100 call holds the heaviest call open interest (145,000 contracts) and the 24,900 put the heaviest put open interest (140,000).

### What is change in open interest?

How much open interest rose or fell during the session. Static open interest is a photograph; change in open interest is the video. On the illustrative chain here, the 25,000 call's open interest rose by 15,600 while its premium rose from Rs 88 to Rs 95 — new longs coming in.

### What does a high open interest mean?

Many positions are parked at that strike — many traders have committed money there. Heavy call open interest above the current price often behaves like resistance, and heavy put open interest below it like support, because sellers are positioned there. It is a map of where sellers sit, not a guarantee: levels hold until they do not, and breaks through them are violent.

### How do I find support and resistance from an option chain?

Take the heaviest open interest on each side: the heaviest call open interest above the current price is the resistance read; the heaviest put open interest below it is the support read. On the illustrative chain here, that gives resistance near 25,100 (145,000 call contracts) and support near 24,900 (140,000 put contracts), with the index at 25,000 in between.

### What is put-call ratio (PCR)?

Total put open interest divided by total call open interest — a sentiment gauge from the chain's own totals. Above 1 means more put than call open interest, read as bullish because put writers expect the puts they wrote to expire worthless; below 1 is read as bearish. On the illustrative chain here, PCR is 328,000 divided by 350,000, or about 0.94.

### What is a good PCR value?

There is no single good value — each instrument has its own typical range. As rough zones: above about 1.2 is crowded put writing, below about 0.8 crowded call writing, and around 0.9 to 1.1 fairly neutral. The chain here reads about 0.94, inside the neutral zone. Never use a PCR level as a buy or sell trigger.

### What is max pain in options?

The strike where the most options — calls and puts together — would expire worthless, where option buyers as a group lose the most. It is mostly looked at around weekly expiry, especially on expiry morning, and price sometimes drifts toward it and sometimes does not. On the illustrative chain here, max pain is 25,000: the total value of all six contracts at expiry is lowest there (Rs 16,300,000), against Rs 26,600,000 at 24,900 and Rs 29,000,000 at 25,100.

### What is the difference between volume and open interest?

Volume counts trades; open interest counts positions. Volume is contracts traded today; open interest is contracts still open — created but not yet closed out or expired. If a contract is bought and sold an hour later, that adds to volume and zero to open interest; open interest only rises when a genuinely new position is created.

### What is implied volatility in an option chain?

The market's expectation of future movement, backed out from the option's price. High implied volatility means expensive options; low means cheap ones. Compare it across strikes and expiries to see how the market prices risk differently across the chain.

### Which expiry should I choose on an option chain?

Start with expiries a few weeks out rather than the nearest expiry, because the nearest expiry decays fastest. The chain defaults to the nearest expiry; the tabs across the top let you pick a later one. Weekly expiries exist alongside monthly ones; the current expiry day for a contract is on the exchange's official contract-specification page.

### What does the bid-ask spread tell me on an option chain?

The gap between the bid and the ask is a cost on every entry and exit, because you buy at the ask and sell at the bid. Tight spreads mean easy entry and exit; wide spreads warn of illiquidity. Always check the spread before entering. On the illustrative chain here, spreads are small — Rs 4 per unit on the 25,000 call.

### How do I read an option chain for NIFTY?

Exactly the same way as any other index chain. NIFTY is the underlying index; its chain has the same layout and the same columns. Follow the same six steps: note the index level, pick an expiry a few weeks out, find the at-the-money strike, read the bid and ask, check volume and open interest, and note implied volatility.

### Can the option chain predict where the market will go?

No. The chain maps positioning and pricing — where traders have placed their bets, what the market charges for each strike, and what mood the totals describe. It does not predict price. A neutral PCR and a clean support level can both be right about positioning and still be followed by a move nobody on the chain expected. Reading a chain well does not guarantee a profitable trade.
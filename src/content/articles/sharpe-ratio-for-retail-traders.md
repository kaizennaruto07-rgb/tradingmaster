---
title: "Sharpe Ratio for Retail Traders: Calculate It, Judge It, and Never Trust It Alone"
description: "Sharpe ratio for Indian retail traders: calculate it from your ledger using the RBI 91-day T-bill and net-of-cost returns, judge tiers, spot blind spots."
meta_description: "Sharpe ratio for Indian retail traders: calculate it from your ledger using the RBI 91-day T-bill and net-of-cost returns, judge tiers, spot blind spots."
date: 2026-10-20
author: Kaizen
tag: "Trading mathematics · Risk management"
keywords: ["sharpe ratio", "how to calculate sharpe ratio", "what is a good sharpe ratio", "sharpe ratio formula", "sharpe ratio vs sortino ratio", "sharpe ratio trading strategy", "sharpe ratio limitations", "rbi 91 day t-bill risk free rate"]
---

*By Kaizen · 20 October 2026 · Monks Of Market*

## The Direct Answer: Compute It From Your Ledger, Judge It With Tiers, Never Trust It Alone

A Sharpe ratio on a screenshot is a claim. A Sharpe ratio from your own ledger is an audit — but the auditor has blind spots.

Here is the trustworthy answer to "what is a Sharpe ratio" in one line: it is **what your strategy earned above the risk-free rate, divided by how bumpy the ride was**. A trustworthy Sharpe for an Indian retail trader comes from your own trade ledger — net-of-cost period returns, minus the RBI 91-day T-bill rate, mean divided by standard deviation, annualized with ×√252. Judge it against rough tiers (below 1 = weak, 1–2 = good, 2–3 = very good, 3+ = suspect, not stellar), and never trust it alone, because it punishes good volatility, leans on a tidy bell-curve view of the world, and ignores the order your returns arrived in.

Start where most retail traders actually meet this number: in marketing, not in a ledger. A tipster advertises a Sharpe of 2.9. Your broker dashboard, looking at the same kind of account, shows 1.8 — while another platform shows 1.2 for the same trades. Those are not three different strategies. They are three different sets of inputs: a different risk-free rate, gross returns instead of net-of-cost returns, a different period construction, a flattering window. Internal comparisons and published research document gaps of 20–65% between computed Sharpe figures for the same strategy (the platform-discrepancy section below explains why, and where each end of that range comes from).

The auditor's rule follows from that gap: **the only Sharpe that counts is the one you can reproduce from your own ledger.** If you cannot rebuild the numerator, the denominator, and the annualization from your trades — after every Indian cost — the number on the dashboard is not yours to trust, however precise it looks. This article teaches you to run that audit yourself, judge the result honestly, and know exactly where even an honest auditor cannot see.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 470" role="img" aria-label="Comparison card showing three advertised Sharpe ratios, 2.9, 1.8 and 1.2, for the same trades beside one ledger-computed ratio of 1.67, with only the ledger number marked reproducible." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same trades. Four Sharpes.</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">The inputs differ &#8212; so the numbers differ. Only one is yours.</text>
<rect x="40" y="84" width="186" height="180" rx="14" fill="#2a3a34"/>
<text x="133" y="114" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">TIPSTER AD</text>
<text x="133" y="152" text-anchor="middle" fill="#92a59c" font-size="38" font-weight="700">2.9</text>
<text x="133" y="182" text-anchor="middle" fill="#92a59c" font-size="11">flattering window,</text>
<text x="133" y="198" text-anchor="middle" fill="#92a59c" font-size="11">gross returns</text>
<text x="133" y="228" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">&#10007; not reproducible</text>
<rect x="247" y="84" width="186" height="180" rx="14" fill="#2a3a34"/>
<text x="340" y="114" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">BROKER DASHBOARD</text>
<text x="340" y="152" text-anchor="middle" fill="#92a59c" font-size="38" font-weight="700">1.8</text>
<text x="340" y="182" text-anchor="middle" fill="#92a59c" font-size="11">their risk-free rate,</text>
<text x="340" y="198" text-anchor="middle" fill="#92a59c" font-size="11">their construction</text>
<text x="340" y="228" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">&#10007; not reproducible</text>
<rect x="454" y="84" width="186" height="180" rx="14" fill="#2a3a34"/>
<text x="547" y="114" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">OTHER PLATFORM</text>
<text x="547" y="152" text-anchor="middle" fill="#92a59c" font-size="38" font-weight="700">1.2</text>
<text x="547" y="182" text-anchor="middle" fill="#92a59c" font-size="11">different period,</text>
<text x="547" y="198" text-anchor="middle" fill="#92a59c" font-size="11">no cost deduction</text>
<text x="547" y="228" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">&#10007; not reproducible</text>
<rect x="40" y="290" width="600" height="120" rx="14" fill="#101815" stroke="#8fd6a0" stroke-width="2"/>
<text x="340" y="322" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">LEDGER-COMPUTED &#8212; YOUR NUMBER</text>
<text x="340" y="362" text-anchor="middle" fill="#8fd6a0" font-size="38" font-weight="700">1.67</text>
<text x="340" y="390" text-anchor="middle" fill="#f2f7f4" font-size="11">net of every Indian cost &#183; T-bill excess &#183; &#10003; reproducible from your trades</text>
<text x="340" y="444" text-anchor="middle" fill="#92a59c" font-size="11">The only Sharpe that counts is the one you can rebuild.</text>
</svg>
</figure>

## The Sharpe Formula, Demystified

Forget the academic wrapping. William F. Sharpe introduced this in 1966 as the "reward-to-variability ratio" (restated in 1994 with a time-varying benchmark), and the version retail traders need is the ex-post one:

> **Sharpe ratio = (mean per-period return − risk-free rate) ÷ standard deviation of per-period returns**

Numerator: your average excess return per period — what you earned above what you'd have gotten risk-free. Denominator: the standard deviation of those same per-period returns — the wobble. Divide the two and you get a **dimensionless** number: return per unit of bumpiness. Higher is better, but only within the honest input discipline and blind spots this article covers.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 380" role="img" aria-label="Formula anatomy card: Sharpe ratio equals mean excess return divided by standard deviation, with each part labeled in plain words." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The formula, in plain words</text>
<rect x="40" y="64" width="270" height="120" rx="14" fill="#2a3a34"/>
<text x="175" y="94" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">NUMERATOR</text>
<text x="175" y="122" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Mean excess return</text>
<text x="175" y="148" text-anchor="middle" fill="#92a59c" font-size="11">what you earned above</text>
<text x="175" y="164" text-anchor="middle" fill="#92a59c" font-size="11">the risk-free rate</text>
<text x="330" y="140" text-anchor="middle" fill="#e8825a" font-size="34" font-weight="700">&#247;</text>
<rect x="370" y="64" width="270" height="120" rx="14" fill="#2a3a34"/>
<text x="505" y="94" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">DENOMINATOR</text>
<text x="505" y="122" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Standard deviation</text>
<text x="505" y="148" text-anchor="middle" fill="#92a59c" font-size="11">the wobble of those</text>
<text x="505" y="164" text-anchor="middle" fill="#92a59c" font-size="11">same period returns</text>
<rect x="40" y="210" width="600" height="110" rx="14" fill="#101815"/>
<text x="340" y="244" text-anchor="middle" fill="#f2f7f4" font-size="14" font-weight="700">Sharpe = reward-to-variability</text>
<text x="340" y="270" text-anchor="middle" fill="#92a59c" font-size="11">excess return = your return &#8722; the risk-free rate</text>
<text x="340" y="296" text-anchor="middle" fill="#92a59c" font-size="11">The result is dimensionless: return per unit of bumpiness.</text>
<text x="340" y="352" text-anchor="middle" fill="#92a59c" font-size="11">Note what the numerator is <tspan font-style="italic">not</tspan>: not compounded return, not expectancy &#8212;</text>
<text x="340" y="370" text-anchor="middle" fill="#92a59c" font-size="11">those lanes belong to the linked guides below.</text>
</svg>
</figure>

Note what the numerator is *not*: it is not your compounded annual return, and it is not your expectancy. It is the arithmetic mean of per-period excess returns. (If the numerator's cousin — expectancy — is what you want, the [trading expectancy guide](/articles/what-is-trading-expectancy/) and the [real expectancy math](/articles/how-to-calculate-real-expectancy/) own that lane.)

### A Numeric Walkthrough, Computed From Scratch

Every number below is computed from scratch for this article — not copied from any other guide. Take a 12-month net-return series from a fictional retail strategy (% per month):

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Return | 3.20 | −1.10 | 2.40 | 5.10 | −2.30 | 1.80 | 4.40 | −0.90 | 2.90 | 3.60 | −1.40 | 2.10 |
| Less T-bill (0.46) | 2.74 | −1.56 | 1.94 | 4.64 | −2.76 | 1.34 | 3.94 | −1.36 | 2.44 | 3.14 | −1.86 | 1.64 |

The monthly T-bill slice: ~5.56% annual ÷ 12 ≈ 0.46% per month (the RBI 91-day T-bill cut-off, cited as-of below — never a constant).

1. **Mean excess return:** (2.74 − 1.56 + 1.94 + 4.64 − 2.76 + 1.34 + 3.94 − 1.36 + 2.44 + 3.14 − 1.86 + 1.64) ÷ 12 = 14.28 ÷ 12 ≈ **1.19% per month**.
2. **Standard deviation** of the 12 excess returns (sample basis): ≈ **2.47% per month**.
3. **Monthly Sharpe:** 1.19 ÷ 2.47 ≈ **0.48**.
4. **Annualize** (monthly NSE-style data → ×√12): 0.48 × 3.464 ≈ **1.67**.

For context: the strategy's total annual net return is roughly 19.8% (sum of the monthly returns). That makes 1.67 a genuinely decent retail number — and now you can see exactly where it came from. But this 1.67 is arithmetic for illustration: a 12-month sample fails the track-record rule below (~36 months minimum, prefer 60+) and cannot distinguish skill from noise. Nothing in the formula is hidden.

## Indian Input Discipline: The Three Numbers Most Traders Get Wrong

A Sharpe ratio is only as honest as its inputs. Indian retail traders get three of them wrong — and each one flatters the number.

### Use the RBI 91-Day T-Bill, Cited As-Of

Your risk-free rate must be the rate *you* could actually earn risk-free: the **RBI 91-day T-bill**, auctioned weekly (typically on Wednesdays). The most recent verifiable cut-off at the time of writing was **~5.56% (cut-off price ₹98.6331 against notified ₹12,000 crore), auction ~2026-10-14**. It moves every Wednesday, so cite the as-of date at computation time — never treat it as a fixed constant, and never copy a US 3-month T-bill number into an Indian computation. A wrong risk-free rate shifts your numerator, and the whole audit shifts with it.

### Returns Must Be Net of Indian Costs

This is where most retail Sharpe ratios become fiction. The numerator must be built from **net** returns — after the full Indian cost stack: brokerage, STT, exchange transaction charges, stamp duty, and GST. Costs shave a nearly constant amount off your per-period mean while leaving the wobble roughly unchanged — so computing on gross returns quietly inflates your Sharpe.

For NSE equity options, use the locked charge of **0.03553% per side, all-in** (NSE circular NSE/FA/73061, effective 2026-03-01).

### Annualize With ×√252 — and State the Assumption

The square-root rule: multiply a per-period Sharpe by √N, where N is the number of periods per year. For NSE strategies that's **×√252** for daily data (252 is the convention for trading days, not the exact annual NSE count — holidays vary year to year), **×√12** for monthly, and ×√365 only for true 24/7 crypto markets. The walkthrough above used ×√12 correctly for monthly data.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Annualization strip: a per-period Sharpe of 0.48 times the square root of 12 becomes an annualized 1.67, with the stated assumption that returns are serially uncorrelated and stable." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Annualize honestly</text>
<rect x="40" y="64" width="170" height="110" rx="14" fill="#2a3a34"/>
<text x="125" y="94" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">PER-PERIOD</text>
<text x="125" y="130" text-anchor="middle" fill="#f2f7f4" font-size="26" font-weight="700">0.48</text>
<text x="125" y="154" text-anchor="middle" fill="#92a59c" font-size="11">monthly Sharpe</text>
<text x="235" y="126" text-anchor="middle" fill="#e8825a" font-size="28" font-weight="700">&#215;</text>
<rect x="260" y="64" width="160" height="110" rx="14" fill="#2a3a34"/>
<text x="340" y="94" text-anchor="middle" fill="#92a59c" font-size="11" font-weight="700">SCALE</text>
<text x="340" y="130" text-anchor="middle" fill="#f2f7f4" font-size="26" font-weight="700">&#8730;12</text>
<text x="340" y="154" text-anchor="middle" fill="#92a59c" font-size="11">periods per year</text>
<text x="445" y="126" text-anchor="middle" fill="#e8825a" font-size="28" font-weight="700">=</text>
<rect x="470" y="64" width="170" height="110" rx="14" fill="#101815" stroke="#8fd6a0" stroke-width="2"/>
<text x="555" y="94" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">ANNUALIZED</text>
<text x="555" y="130" text-anchor="middle" fill="#8fd6a0" font-size="26" font-weight="700">1.67</text>
<text x="555" y="154" text-anchor="middle" fill="#92a59c" font-size="11">daily NSE &#8594; &#215;&#8730;252</text>
<rect x="40" y="200" width="600" height="76" rx="14" fill="#2a3a34"/>
<text x="340" y="230" text-anchor="middle" fill="#d8a75a" font-size="11" font-weight="700">STATE THE ASSUMPTION</text>
<text x="340" y="254" text-anchor="middle" fill="#f2f7f4" font-size="11">&#8730;N scaling assumes returns are serially uncorrelated,</text>
<text x="340" y="270" text-anchor="middle" fill="#f2f7f4" font-size="11">with stable mean and variance. Write it next to the number.</text>
<text x="340" y="310" text-anchor="middle" fill="#92a59c" font-size="11">When returns trend or cluster &#8212; very common in real strategies &#8212; naive scaling overstates the truth.</text>
</svg>
</figure>

Here is the assumption, stated plainly: the √N scaling assumes your per-period returns are **serially uncorrelated with stable mean and variance**. When returns trend or cluster — very common in real strategies — naive scaling overstates the true Sharpe. Andrew W. Lo's MIT work (2002, *Financial Analysts Journal*) found that serial correlation can overstate annualized Sharpe ratios for hedge funds by **as much as 65%**, enough to flip strategy rankings. Your honest move: state the assumption whenever you quote an annualized Sharpe, and be suspicious of any number that only survives under perfect assumptions.
## The 5-Step Ledger Method: Compute Your Own Sharpe

Run this on any strategy, backtest, or tipster's track record. Five steps, no software required:

1. **Export your trade ledger** — date, instrument, buy/sell prices, quantities, and charges per trade.
2. **Build the per-period net-return series.** Group net P&L (after every cost in the Indian stack) by day, week, or month, and express each period's result as a percentage of the capital at the start of that period.
3. **Subtract the period risk-free rate.** T-bill annual rate ÷ 252 for daily periods, ÷ 12 for monthly. This turns returns into *excess* returns.
4. **Take mean ÷ standard deviation** of the excess series. Mean is the numerator; standard deviation (sample basis) is the denominator.
5. **Annualize honestly.** Daily → ×√252; monthly → ×√12. Write the assumption down next to the number.

In a spreadsheet on daily data, that is: `=AVERAGE(excess_range)/STDEV.S(excess_range)*SQRT(252)` — the four steps in one cell, every input visible.

### Why Your Platform's Sharpe May Differ by 20–65%

There is no industry consensus on the inputs: platforms differ on the risk-free rate used, whether returns are gross or net of costs, daily versus per-trade return construction, and whether autocorrelation is corrected at all. Analyses of these differences document gaps of **20–65%** between computed Sharpe figures for the same strategy — Lo's 65% is the verified academic anchor for serial-correlation effects; the 20% lower bound reflects production-internal analysis of platform input differences. The takeaway is not to pick the highest number. **Compute the ratio yourself from your own ledger.** A metric you can't reproduce isn't yours — which is why your broker can show 1.8 while another platform shows 1.2 for the same account.

## What Counts as a Good Sharpe Ratio? Tiers, Not Cutoffs

The retail tiers below come from third-party guides. Treat them as rough and context-dependent — never as guarantees:

| Tier | Meaning |
|---|---|
| Below 1.0 | Weak to mediocre — the wobble is costing more than the excess return is worth |
| 1.0–2.0 | **Good** — a retail strategy clearing 1.0 after all costs is doing honest work |
| 2.0–3.0 | **Very good** — exceptional territory for a sustained retail track record |
| Above 3.0 | **Suspect, not stellar** — see the note below |

For context: long-run diversified buy-and-hold portfolios typically sit around **0.3–0.6** — so don't panic if your number isn't above 1. Compare like with like: an intraday NSE strategy and a buy-and-hold mutual fund are not judged on the same scale.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 400" role="img" aria-label="Interpretation tier card: below 1 weak, 1 to 2 good, 2 to 3 very good, above 3 suspect; footer reads tiers are rough guides, never cutoffs." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Judge it with tiers, not cutoffs</text>
<rect x="40" y="62" width="600" height="64" rx="14" fill="#2a3a34"/>
<text x="70" y="101" text-anchor="start" fill="#92a59c" font-size="18" font-weight="700">Below 1.0</text>
<text x="610" y="101" text-anchor="end" fill="#92a59c" font-size="12">Weak &#8212; the wobble costs more than the return</text>
<rect x="40" y="138" width="600" height="64" rx="14" fill="#2a3a34" stroke="#8fd6a0" stroke-width="2"/>
<text x="70" y="177" text-anchor="start" fill="#8fd6a0" font-size="18" font-weight="700">1.0 &#8211; 2.0</text>
<text x="610" y="177" text-anchor="end" fill="#f2f7f4" font-size="12">Good &#8212; honest work after all costs</text>
<rect x="40" y="214" width="600" height="64" rx="14" fill="#2a3a34"/>
<text x="70" y="253" text-anchor="start" fill="#d8a75a" font-size="18" font-weight="700">2.0 &#8211; 3.0</text>
<text x="610" y="253" text-anchor="end" fill="#f2f7f4" font-size="12">Very good &#8212; exceptional retail territory</text>
<rect x="40" y="290" width="600" height="64" rx="14" fill="#101815" stroke="#e8825a" stroke-width="2"/>
<text x="70" y="329" text-anchor="start" fill="#e8825a" font-size="18" font-weight="700">Above 3.0</text>
<text x="610" y="329" text-anchor="end" fill="#f2f7f4" font-size="12">Suspect, not stellar &#8212; audit it first</text>
<text x="340" y="382" text-anchor="middle" fill="#92a59c" font-size="11">Tiers are rough guides from third-party sources &#8212; never cutoffs, never guarantees.</text>
</svg>
</figure>

Above 3.0, be suspicious first: a Sharpe that high, sustained on a retail backtest, rarely survives an honest audit — the full breakdown of why belongs to the [overfitting checklist](/articles/how-to-detect-overfitting-in-trading-strategy/), not to celebration here.

**The track-record rule:** a Sharpe estimate's reliability depends on sample size. With roughly 36 monthly observations, the standard error of an estimated Sharpe of 1.0 is about **0.2** (Lo, 2002) — meaning short track records cannot distinguish skill from noise.

Practitioner convention: treat **~36 months as the minimum** and prefer 60+. A Sharpe of 1.4 measured over four months is an audit with too little evidence; measured over four years, it starts to become evidence.

## The Auditor's Three Blind Spots

The ratio is an auditor, and every auditor has blind spots. These three are mandatory reading — the reader who knows them can never say they weren't warned.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 420" role="img" aria-label="Three-blind-spots panel: first, Sharpe punishes good volatility with the Sortino ratio as companion; second, it assumes a well-behaved world with maximum drawdown and recovery factor as companions; third, it ignores the order of returns with Monte Carlo simulation as companion." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Every auditor has blind spots</text>
<rect x="40" y="62" width="186" height="290" rx="14" fill="#2a3a34"/>
<text x="133" y="96" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">BLIND SPOT 1</text>
<text x="133" y="124" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Punishes good</text>
<text x="133" y="142" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">volatility</text>
<text x="133" y="170" text-anchor="middle" fill="#92a59c" font-size="11">up-swings inflate</text>
<text x="133" y="186" text-anchor="middle" fill="#92a59c" font-size="11">the denominator too</text>
<line x1="70" y1="208" x2="196" y2="208" stroke="#3a4d46" stroke-width="1"/>
<text x="133" y="232" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">COMPANION</text>
<text x="133" y="256" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Sortino ratio</text>
<text x="133" y="278" text-anchor="middle" fill="#92a59c" font-size="11">downside deviation</text>
<text x="133" y="294" text-anchor="middle" fill="#92a59c" font-size="11">only &#8212; upside kept</text>
<rect x="247" y="62" width="186" height="290" rx="14" fill="#2a3a34"/>
<text x="340" y="96" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">BLIND SPOT 2</text>
<text x="340" y="124" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Assumes a</text>
<text x="340" y="142" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">well-behaved world</text>
<text x="340" y="170" text-anchor="middle" fill="#92a59c" font-size="11">mean and SD say</text>
<text x="340" y="186" text-anchor="middle" fill="#92a59c" font-size="11">nothing about tails</text>
<line x1="277" y1="208" x2="403" y2="208" stroke="#3a4d46" stroke-width="1"/>
<text x="340" y="232" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">COMPANIONS</text>
<text x="340" y="256" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Max drawdown +</text>
<text x="340" y="272" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Recovery factor</text>
<text x="340" y="294" text-anchor="middle" fill="#92a59c" font-size="11">how deep &#183; how fast</text>
<rect x="454" y="62" width="186" height="290" rx="14" fill="#2a3a34"/>
<text x="547" y="96" text-anchor="middle" fill="#e8825a" font-size="11" font-weight="700">BLIND SPOT 3</text>
<text x="547" y="124" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Ignores the order</text>
<text x="547" y="142" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">of returns</text>
<text x="547" y="170" text-anchor="middle" fill="#92a59c" font-size="11">same Sharpe, different</text>
<text x="547" y="186" text-anchor="middle" fill="#92a59c" font-size="11">path to ruin</text>
<line x1="484" y1="208" x2="610" y2="208" stroke="#3a4d46" stroke-width="1"/>
<text x="547" y="232" text-anchor="middle" fill="#8fd6a0" font-size="11" font-weight="700">COMPANION</text>
<text x="547" y="256" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Monte Carlo</text>
<text x="547" y="278" text-anchor="middle" fill="#92a59c" font-size="11">the paths the ratio</text>
<text x="547" y="294" text-anchor="middle" fill="#92a59c" font-size="11">averages away</text>
<text x="340" y="384" text-anchor="middle" fill="#92a59c" font-size="11">Sharpe is one gate, never the verdict.</text>
<text x="340" y="402" text-anchor="middle" fill="#92a59c" font-size="11">Pair it &#8212; always &#8212; with the companions.</text>
</svg>
</figure>

### Blind Spot 1: It Punishes Good Volatility

The denominator is *total* standard deviation — up-swings and down-swings count identically. A strategy with explosive winning months gets a fat denominator and a lower ratio for being *good at winning*. Revisit the walkthrough: months 4 and 7 posted +5.10% and +4.40% — great months that *increased* the denominator and dragged the Sharpe down.

The companion metric is the **Sortino ratio** (Frank A. Sortino, early 1990s): excess return over a target divided by **downside deviation only** — the standard deviation of below-target periods. It doesn't punish upside wobble. The target used here is 0% on the excess-return series, so the downside months in the walkthrough are the four with negative excess returns (−1.56%, −2.76%, −1.36%, −1.86%), and downside deviation counts those months only, averaged across all 12 months. On the same 12 months from the walkthrough, monthly downside deviation is only ≈1.13%, versus total volatility of ≈2.47%. So the Sortino comes out around **1.05 monthly / 3.63 annualized**, against the Sharpe's **0.48 / 1.67** — and annualizing the Sortino by ×√12 carries the same serial-correlation caveat stated for the Sharpe above. The gap is the upside penalty made visible. For asymmetric strategies — trend following, anything that cuts losses and lets winners run — Sortino is the more informative companion. It doesn't replace Sharpe; it sits beside it.

### Blind Spot 2: It Assumes a Normal, Well-Behaved World

Sharpe leans on a roughly symmetric, bell-curve view of returns. Real retail returns have fat tails — and option selling is the classic case. A short-option strategy collecting steady premium prints a gorgeous Sharpe right up until the one tail event lands (the "steamroller" problem: steady income, then the one bad day). The ratio cannot see the tail coming, because mean and standard deviation say nothing about rare, large losses.

The companions are [maximum drawdown](/articles/maximum-drawdown/) and [recovery factor](/articles/recovery-factor/): how deep the pain can go, and how fast the strategy digs out. A Sharpe of 2 with a 40% drawdown history is a different animal than a Sharpe of 2 that never dipped past 8%.

### Blind Spot 3: It Ignores the Order of Your Returns

Two equity curves can share an identical Sharpe while their losses arrive in a completely different order — one spread thinly across the year, the other clustered into a single deep drawdown. Mean and standard deviation do not know *when* the losses happened, so the ratio cannot tell the livable path from the one that triggers margin calls or makes a trader quit. That sequencing point is the whole blind spot here; the full treatment of return order belongs to the [Monte Carlo simulation guide](/articles/monte-carlo-simulation-for-traders/), which owns that problem.

## The 5-Metric Triage: Never Judge a Strategy on Sharpe Alone

Sharpe is one gate, never the verdict. Judge it only alongside the other four metrics, and require a strategy to clear all five — not ace just one. The full triage protocol lives in the [3-question strategy verdict guide](/articles/how-to-know-if-trading-strategy-works/):

- [Trading expectancy](/articles/what-is-trading-expectancy/) and [profit factor](/articles/profit-factor/)
- [Maximum drawdown](/articles/maximum-drawdown/)
- [Recovery factor](/articles/recovery-factor/)
- [Risk of ruin](/articles/risk-of-ruin-trading/)

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 470" role="img" aria-label="Five-metric triage checklist: Sharpe for efficiency, expectancy and profit factor for per-trade edge, maximum drawdown for depth of pain, recovery factor for speed of repair, and risk of ruin for survival; the rule is clear all five, ace none." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">The 5-metric triage</text>
<text x="340" y="58" text-anchor="middle" fill="#92a59c" font-size="11">Clear all five &#8212; ace none.</text>
<rect x="40" y="78" width="600" height="58" rx="12" fill="#2a3a34"/>
<rect x="58" y="96" width="22" height="22" rx="6" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="69" y="112" text-anchor="middle" fill="#8fd6a0" font-size="14" font-weight="700">&#10003;</text>
<text x="96" y="104" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Sharpe ratio</text>
<text x="96" y="122" text-anchor="start" fill="#92a59c" font-size="11">efficiency &#8212; return per unit of risk</text>
<rect x="40" y="146" width="600" height="58" rx="12" fill="#2a3a34"/>
<rect x="58" y="164" width="22" height="22" rx="6" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="69" y="180" text-anchor="middle" fill="#8fd6a0" font-size="14" font-weight="700">&#10003;</text>
<text x="96" y="172" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Expectancy + Profit factor</text>
<text x="96" y="190" text-anchor="start" fill="#92a59c" font-size="11">per-trade edge &#8212; is there an edge at all</text>
<rect x="40" y="214" width="600" height="58" rx="12" fill="#2a3a34"/>
<rect x="58" y="232" width="22" height="22" rx="6" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="69" y="248" text-anchor="middle" fill="#8fd6a0" font-size="14" font-weight="700">&#10003;</text>
<text x="96" y="240" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Maximum drawdown</text>
<text x="96" y="258" text-anchor="start" fill="#92a59c" font-size="11">depth of pain &#8212; the worst the record shows</text>
<rect x="40" y="282" width="600" height="58" rx="12" fill="#2a3a34"/>
<rect x="58" y="300" width="22" height="22" rx="6" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="69" y="316" text-anchor="middle" fill="#8fd6a0" font-size="14" font-weight="700">&#10003;</text>
<text x="96" y="308" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Recovery factor</text>
<text x="96" y="326" text-anchor="start" fill="#92a59c" font-size="11">speed of repair &#8212; was the pain worth it</text>
<rect x="40" y="350" width="600" height="58" rx="12" fill="#2a3a34"/>
<rect x="58" y="368" width="22" height="22" rx="6" fill="none" stroke="#8fd6a0" stroke-width="2"/>
<text x="69" y="384" text-anchor="middle" fill="#8fd6a0" font-size="14" font-weight="700">&#10003;</text>
<text x="96" y="376" text-anchor="start" fill="#f2f7f4" font-size="13" font-weight="700">Risk of ruin</text>
<text x="96" y="394" text-anchor="start" fill="#92a59c" font-size="11">survival &#8212; does the account live to collect</text>
<text x="340" y="440" text-anchor="middle" fill="#92a59c" font-size="11">A strategy that aces Sharpe and fails the other four is not a strategy. It is a story.</text>
</svg>
</figure>
## How Sharpe Gets Gamed

Retail traders mostly meet Sharpe ratios in marketing, not in ledgers. The Sharpe-specific tricks are these three:

- **Annualization tricks:** using the wrong √N for the period length, or scaling up without disclosing the serial-correlation assumption — Lo (2002) showed that alone can inflate the number by up to 65%.
- **Cherry-picked windows:** starting the measurement right after the strategy's worst drawdown, or ending it at a peak, moves the mean and the wobble in the ratio's favour. Pair any single-window Sharpe with rolling-window results before you believe it.
- **The leverage illusion:** doubling position size doubles both excess return and volatility, so Sharpe is unchanged by leverage — the ratio stays put while tail risk and ruin probability grow. Anyone selling a leveraged product's Sharpe as proof of genius is selling arithmetic.

For the general backtest-bias catalogue, see the [overfitting checklist](/articles/how-to-detect-overfitting-in-trading-strategy/) — it owns that list, and this article does not repeat it. When a marketed number looks too good, run the 5-step ledger method on it first.

## Putting It Together: Your Strategy-Evaluation Tripod

Three articles, one discipline. The [maximum drawdown guide](/articles/maximum-drawdown/) taught you the depth of pain; the [recovery factor guide](/articles/recovery-factor/) taught you the speed of repair; this article taught you **efficiency** — return per unit of risk. Together they are the tripod: pain, repair, efficiency.

Around the tripod stands the backtest discipline: the [overfitting checklist](/articles/how-to-detect-overfitting-in-trading-strategy/) for cooked numbers, [Monte Carlo](/articles/monte-carlo-simulation-for-traders/) for the paths the ratio averages away, and [paper vs real](/articles/paper-trading-vs-real-trading/) for the live-market haircut. For the exit itself, see the [when-to-quit guide](/articles/when-to-quit-a-strategy/) — this article's audit informs that decision.

Next step: the system-building guide will make Sharpe **one acceptance gate** in the strategy checklist — never the whole gate.

You are the auditor now — and an auditor who knows their own blind spots is the only kind worth trusting.

## Sharpe Ratio FAQ

### What is a good Sharpe ratio?

For a retail trading strategy: below 1.0 is weak, 1.0–2.0 is good (after all costs), 2.0–3.0 is very good, and above 3.0 sustained should make you suspicious, not proud. These are rough guides from third-party sources, never cutoffs; long-run buy-and-hold portfolios often sit at 0.3–0.6.

### How do I calculate the Sharpe ratio?

Export your trade ledger, build a per-period series of **net** returns, subtract the period risk-free rate (the RBI 91-day T-bill, cited as-of), and compute mean ÷ standard deviation of the excess series — then annualize (×√252 for daily NSE data, ×√12 for monthly). In a spreadsheet on daily data: `=AVERAGE(excess_range)/STDEV.S(excess_range)*SQRT(252)`.

### What is the difference between the Sharpe ratio and the Sortino ratio?

Sharpe divides excess return by **total** volatility, so it punishes upside wobble; Sortino divides by **downside deviation only**, ignoring the good months. For asymmetric strategies (trend following, options, anything that cuts losses and lets winners run), Sortino is the more informative companion — not a replacement.

### Can the Sharpe ratio be negative?

Yes. It means the strategy returned less than the risk-free rate over the measured period — you'd have done better sitting in T-bills. A negative Sharpe is the audit's bluntest verdict: the risk taken wasn't compensated at all.

### Why does the Sharpe ratio penalize upside volatility?

Because standard deviation counts all deviation from the mean, up or down — a huge winning month inflates the denominator and lowers the ratio. The formula cannot tell a +5% month from a −5% month; it only sees distance from average. This is Blind Spot 1, and the Sortino ratio is its companion.

### Which risk-free rate should an Indian trader use?

The one you could actually earn risk-free: the **RBI 91-day T-bill**, auctioned weekly — about **5.56% cut-off at the 2026-10-14 auction**, always cited with the as-of date. Never a copied US T-bill number, never a constant.

### Why is the Sharpe ratio different on every platform?

There is no industry consensus: platforms differ on the risk-free input, gross versus net returns, daily versus per-trade return construction, and whether they correct for autocorrelation. Internal comparisons and published research document gaps of 20–65%. Compute it yourself from your own ledger — a metric you can't reproduce isn't yours.

### Can a high Sharpe ratio be misleading?

Yes. Above 3.0, apply suspicion first and work through the [overfitting checklist](/articles/how-to-detect-overfitting-in-trading-strategy/) before admiring the result; Sharpe also understates tail risk and ignores the order of returns — see the three blind spots above. Always pair it with drawdown and recovery factor.

## Risk Disclosures

Trading can result in the **loss of your entire capital** — no metric, Sharpe included, removes that possibility. **Leverage** magnifies losses as well as gains and can erase an account faster than any backtest suggests (note: leverage leaves the Sharpe ratio itself unchanged, so never read a leveraged Sharpe as extra safety). **Options expiry** carries specific risks: time decay accelerates into expiry and short-option positions face theoretically unlimited loss. **Backtests — and the Sharpe ratios computed from them — do not predict future returns.** This article is **educational content, not financial advice**; it does not recommend any strategy, instrument, or trade.

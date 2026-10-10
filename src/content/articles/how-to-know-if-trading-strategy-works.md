---
title: "How to Know If Your Trading Strategy Actually Works: The 3-Question Verdict"
description: "Learn how to validate a trading strategy: the 3-question verdict — net edge after Indian F&O costs, trustworthy sample, survivability. Full validation protocol."
meta_description: "Learn how to validate a trading strategy: the 3-question verdict — net edge after Indian F&O costs, trustworthy sample, survivability. Full validation protocol."
date: 2026-10-10
author: Kaizen
tag: "Strategy validation · Validation"
keywords: ["how to know if trading strategy works", "how to validate a trading strategy", "strategy validation trading", "backtest overfitting check", "trading strategy losing streak probability", "when to go live trading"]
---

*Educational content only — not financial advice. Trading involves risk of loss.*

You've been trading a strategy for two months. Some weeks it prints money. This week it has taken five losses in a row, and a thought you don't say out loud keeps circling: *what if the strategy never worked, and I just got lucky at the start?*

That question — how do I know if my trading strategy actually works — is the most important question in retail trading, and almost nobody answers it in an honest way. What most traders have instead of an answer is a mood. Green weeks mean "it works." A drawdown means "it's broken." Neither is a verdict; both are weather reports.

A verdict is a number, computed after costs, from a sample you committed to before you started. This article is the protocol for reaching one — three questions, asked in order, each with a test to run. It also opens the second week of this series: the later chapters deepen each step, so this page stays the one-page validation protocol you can return to.

## The Short Answer: One Verdict, Asked in the Right Order

Your strategy works if — and only if — all three of these hold:

1. **Is there an edge?** Net expectancy per trade is clearly above zero **after all costs** — brokerage, STT, exchange charges, stamp duty, SEBI charges, GST — computed from a pre-registered sample of rule-following trades.
2. **Can I trust the verdict?** The sample is large enough, covers an out-of-sample period the strategy was never fitted to, spans multiple market regimes, and shows no overfitting signatures.
3. **Can I survive it?** The worst losing streak and maximum drawdown the strategy will produce fit your position sizing and keep your risk of ruin acceptably low.

The order matters when you test a trading strategy. There is no point asking whether you can survive a strategy (question 3) before you've established it makes money (question 1). And a profitable backtest you can't trust (question 2) is a profitable-looking fiction. Each question has its test, and the rest of this article walks you through all three.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 430" role="img" aria-label="The three-question verdict hierarchy for validating a trading strategy: edge, trust, survivability." class="viz">
<defs>
<marker id="sw-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#92a59c"/></marker>
</defs>
<text x="340" y="32" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">The 3-question verdict &#8212; ask them in order</text>
<rect x="60" y="54" width="560" height="86" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<circle cx="112" cy="97" r="27" fill="#f2a33c"/>
<text x="112" y="105" text-anchor="middle" fill="#0d1512" font-size="20" font-weight="700">1</text>
<text x="156" y="90" fill="#f2f7f4" font-size="15" font-weight="700">Is there an edge?</text>
<text x="156" y="114" fill="#92a59c" font-size="12">Net expectancy after costs &#8212; clearly above zero</text>
<line x1="340" y1="140" x2="340" y2="166" stroke="#92a59c" stroke-width="2" marker-end="url(#sw-arrow)"/>
<rect x="60" y="166" width="560" height="86" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<circle cx="112" cy="209" r="27" fill="#f2a33c"/>
<text x="112" y="217" text-anchor="middle" fill="#0d1512" font-size="20" font-weight="700">2</text>
<text x="156" y="202" fill="#f2f7f4" font-size="15" font-weight="700">Can I trust the verdict?</text>
<text x="156" y="226" fill="#92a59c" font-size="12">Sample trust &#38; overfit check &#8212; 100+ logged trades, no cliffs</text>
<line x1="340" y1="252" x2="340" y2="278" stroke="#92a59c" stroke-width="2" marker-end="url(#sw-arrow)"/>
<rect x="60" y="278" width="560" height="86" rx="12" fill="none" stroke="#2a3a34" stroke-width="1"/>
<circle cx="112" cy="321" r="27" fill="#14d991"/>
<text x="112" y="329" text-anchor="middle" fill="#0d1512" font-size="20" font-weight="700">3</text>
<text x="156" y="314" fill="#f2f7f4" font-size="15" font-weight="700">Can I survive it?</text>
<text x="156" y="338" fill="#92a59c" font-size="12">Worst streaks &#38; ruin &#8212; sizing must fit the worst path</text>
<text x="340" y="404" text-anchor="middle" fill="#92a59c" font-size="12">Skip a question and the verdict is fiction &#8212; never a mood, always a number.</text>
</svg>
<figcaption>The verdict hierarchy: edge first, trust second, survivability third. Each question gates the next.</figcaption>
</figure>

## The Uncomfortable Truth: Most Strategies Were Never Tested — They Were Interrupted

Here's the pattern that plays out in thousands of Indian trading accounts: a retail trader backtests (or informally paper-trades) a strategy for a few weeks. It works. They go live with real capital. Three weeks later the strategy hits a losing streak the math said was likely — five, six, seven losses in a row — and they kill the strategy at the worst possible moment, during a normal drawdown.

Then they find a new strategy. And repeat.

The tragedy isn't that they tested badly. It's that they never reached the end of a test at all. **Most strategies that get abandoned were never fully tested — they were cut off mid-drawdown, before the pre-committed sample was complete.** The verdict was never delivered because the trial was interrupted. A losing streak feels like proof the strategy is broken, but a losing streak is exactly what a working strategy looks like sometimes. Later in this article you'll see the exact math: a 40%-win-rate strategy over 100 trades has a **68.9% chance** of at least one 7-trade losing streak. The drawdown that makes people quit is the drawdown the math said was likely.

The fix for this isn't willpower or "conviction." It's a contract: decide the sample size, the pass/fail criteria, and the stop rule **before** testing begins — then honour the contract through the streaks. That's the discipline this protocol is built around.

## Question 1 — Is There an Edge? Net Expectancy After Indian F&O Costs

Question 1 is the verdict itself, and the verdict is expectancy — the average expected profit or loss per trade — recomputed on **net** P&L after every cost. The expectancy formula is:

**Expectancy = (Win Rate × Average Win) − (Loss Rate × Average Loss)**

(The ingredients — win rate, average win, average loss — were covered in full in our [expectancy guide](/articles/what-is-trading-expectancy/); we link rather than re-derive here. Similarly, gross profit ÷ gross loss is your profit factor, covered in our [profit factor guide](/articles/profit-factor/).)

Now the Monks Of Market signature point: **the only expectancy that counts is after-cost expectancy.** Every rupee in round-trip costs — brokerage, STT, exchange transaction charges, stamp duty, SEBI charges, GST — comes off your gross P&L before the verdict is computed. Here is exactly what that costs, computed from the verified charge schedule (fetched 10 October 2026, from the current Zerodha charges page and NSE circular FA/73061 effective 1 March 2026):

**Option round trip, ₹5,000 premium per leg (illustrative assumption): ~₹59.05 all-in.** That's ₹40 flat brokerage (₹20 per order on the standard discount-broker plan — illustrative, since plans vary), ₹7.50 sell-side STT at 0.15% of premium (post-Budget-2026 rate, effective 1 April 2026), ₹3.55 NSE transaction charges at 0.03552% of premium, and ₹0.15 stamp duty at 0.003% on the buy side. Add a negligible SEBI/IPFT contribution (~₹0.01) and 18% GST on the brokerage + transaction + SEBI portion (~₹7.84; stamp duty is not in the GST base). Statutory charges are identical at every broker.

**Futures round trip, ₹1,00,000 turnover per side: ~₹104.12 all-in** — of which ₹50.00 is sell-side STT alone (0.05% post-April-2026). Notice how dominant STT has become in futures costs after the Budget 2026 hike; any futures scalping strategy must clear that bar first.

### Compute YOUR All-In Round-Trip Cost

The two figures above are worked examples, not your number. Your own round-trip cost comes from the same six components — and knowing which ones scale means you estimate instead of guess:

- **Flat per order:** brokerage (₹20/order on the illustrative discount-broker plan; check your plan).
- **Scale with premium or turnover:** STT (0.15% of option premium on sell, 0.05% of futures turnover on sell), exchange transaction charges, stamp duty on the buy side.
- **Percentages on percentages:** SEBI charges and 18% GST sit on the brokerage + transaction + SEBI subtotal — stamp duty is not in the GST base.

Plug in your actual premium per leg (or turnover per side) and your brokerage plan, and you get your own all-in figure. If you don't want to do the arithmetic by hand, the options-cost calculator on this site computes the exact stack for your inputs. Whatever you get, that number becomes the toll every trade must pay in the examples below.

### The Gross-vs-Net Trap: A +0.35R Backtest Can Print Negative Net

Take a strategy with a 35% win rate, average win ₹2,000, average loss ₹800. Gross expectancy:

(0.35 × ₹2,000) − (0.65 × ₹800) = ₹700 − ₹520 = **+₹180 per trade.**

Looks healthy. Now subtract the ~₹59 option round-trip cost (₹5,000-premium assumption): **+₹121 net per trade.** Still positive — this strategy survives costs.

But watch the trap flip. A strategy with gross expectancy of just +₹40 per trade — on the same small option trades — nets roughly **−₹19 per trade** after costs. That's not a small deduction; that's a guaranteed loser wearing a profitable-looking mask. No amount of confidence, discipline, or "conviction" can fix a strategy whose gross expectancy sits below its per-trade cost. The backtest lied because it never paid the toll.

The general principle is the article's core line: **net expectancy = gross expectancy minus all-in round-trip cost. Any strategy with gross expectancy below its per-trade cost is a guaranteed loser.** The same trap applies to profit factor — a gross profit factor of 1.3 that becomes 0.95 after costs is the same fiction in different clothing (see the after-cost variant discussion in our [profit factor guide](/articles/profit-factor/)).

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Gross versus net expectancy bar chart: strategy A survives Indian F&amp;O costs, strategy B turns negative after costs." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Same Rs 59 toll booth &#8212; two outcomes (Rs per trade)</text>
<text x="208" y="62" text-anchor="middle" fill="#f2a33c" font-size="14" font-weight="700">STRATEGY A &#183; 35% WR</text>
<text x="448" y="62" text-anchor="middle" fill="#ff4f65" font-size="14" font-weight="700">STRATEGY B</text>
<line x1="60" y1="212" x2="620" y2="212" stroke="#2a3a34" stroke-width="1"/>
<text x="628" y="216" fill="#92a59c" font-size="11">zero</text>
<rect x="160" y="100" width="56" height="112" rx="4" fill="#14d991" fill-opacity="0.85" class="bar-grow-v"/>
<text x="188" y="90" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">+Rs 180</text>
<text x="188" y="236" text-anchor="middle" fill="#92a59c" font-size="12">gross</text>
<rect x="240" y="137" width="56" height="75" rx="4" fill="#14d991" fill-opacity="0.85" class="bar-grow-v"/>
<text x="268" y="127" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">+Rs 121</text>
<text x="268" y="236" text-anchor="middle" fill="#92a59c" font-size="12">net</text>
<rect x="400" y="187" width="56" height="25" rx="4" fill="#92a59c" fill-opacity="0.85" class="bar-grow-v"/>
<text x="428" y="177" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">+Rs 40</text>
<text x="428" y="236" text-anchor="middle" fill="#92a59c" font-size="12">gross</text>
<rect x="480" y="212" width="56" height="12" rx="4" fill="#ff4f65" fill-opacity="0.9" class="bar-grow-v"/>
<text x="508" y="256" text-anchor="middle" fill="#ff4f65" font-size="13" font-weight="700">&#8722;Rs 19</text>
<text x="508" y="236" text-anchor="middle" fill="#92a59c" font-size="12">net</text>
<text x="208" y="288" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">survives</text>
<text x="448" y="288" text-anchor="middle" fill="#ff4f65" font-size="13" font-weight="700">guaranteed loser</text>
<text x="340" y="314" text-anchor="middle" fill="#92a59c" font-size="12">All-in option round trip ~Rs 59. Gross below cost = guaranteed loser.</text>
</svg>
<figcaption>Same Rs 59 toll on every trade: strategy A nets +Rs 121 and survives; strategy B&#8217;s +Rs 40 gross becomes &#8722;Rs 19 net &#8212; a guaranteed loser.</figcaption>
</figure>

### What Counts as "Clearly Above Zero"? A Working Rule of Thumb

"Clearly above zero" is too vague to run a test on, so here's a working rule — a practitioner's bar, presented as a rule of thumb, not a statistical law:

**Treat net expectancy as a pass only if it is at least roughly 2× your all-in round-trip cost per trade — and the outlier deletion test below leaves it positive.**

On the illustrative ₹5,000-premium option trades above (~₹59 round trip), that means roughly **₹118+ net per trade** before you take the result seriously. The logic is plain: a net expectancy equal to one round-trip cost is one bad assumption — slightly higher slippage, slightly lower win rate — away from a loss. Doubling the cost as a hurdle forces the edge to have margin for the things the test can't measure. Compute the bar from *your* round-trip cost, not the example's.

### The Outlier Deletion Test: Delete Your 2–3 Best Trades and Re-Judge

Question 1 has one more check, and it's the one that hurts. Open your trade log, delete your 2–3 best trades entirely, and recompute net expectancy. If the verdict collapses — if the edge depended on two lucky runners — you don't have an edge. You have a screenshot.

Run the mechanics on the earlier scenario as an illustration. Say your 100-trade log nets **+₹12,100 total** (that's ₹121/trade, the example above). Your two best trades netted **+₹9,000 combined** — one perfect expiry-day runner, one fat winner on a gap-up open. Delete them: 98 trades, net **+₹3,100**, or about **₹32 per trade**. That sits *below* the 2×-cost rule of thumb (~₹118), and it barely clears zero — the verdict has flipped from "edge" to "fragile." The strategy's entire profitability was two trades wearing a hundred-trade costume. No specific P&L-concentration threshold makes this a law; it's a smell test, run with real numbers from your log.

This mirrors the outlier-removal test in our [profit factor guide](/articles/profit-factor/), and the logic deserves a place in your validation protocol: a strategy is only as real as its median trade, not its loudest one.

Question 1's pass criteria: **net expectancy clearly above zero by the working rule of thumb above, computed from logged rule-following trades, with the outlier deletion test not flipping the verdict.** If your strategy can't clear that bar, questions 2 and 3 are irrelevant — there is nothing to trust and nothing to survive.

## Question 2 — Can I Trust the Verdict? The Four Checks

A positive net expectancy from question 1 is a *claim*. Question 2 asks whether the claim is trustworthy. Four checks, kept short — each is a full chapter later this week:

**1. Trade count.** As a community convention (not a law of nature), 100 logged trades is the common minimum for a first verdict; 100–400 is the typical quoted range for detecting an edge; thin edges (profit factor around 1.1) can need 1,000+ trades before they're statistically detectable. But here's the real point — and the heart of this article: **decide the number before you start testing.** A verdict you can trust is a verdict with no moving goalposts. The deep version of trade counts and statistical power lands tomorrow in our sample-size chapter (#17, Oct 11).

**2. Out-of-sample check.** Develop the strategy on one portion of historical data, then evaluate it on a separate, untouched portion it was never fitted to — a common convention is a 70/30 in-sample/out-of-sample split. If performance collapses from in-sample to out-of-sample, that's the classic signature of overfitting: the strategy memorised the past instead of learning something the future respects.

**3. Regime coverage.** An edge that only works in a trending market isn't validated — it's conditionally lucky. Your sample should span multiple market conditions before "edge" earns its place in your vocabulary.

**4. Overfit signatures.** Four red flags, in our own words:
- **parameter cliffs** — tiny parameter changes swing results dramatically (a robust strategy is smooth, not twitchy);
- **in-sample → out-of-sample collapse** — great on the fitted data, dead on the untouched data;
- **an unnaturally smooth equity curve** — real strategies have drawdowns; a perfect curve is usually a fitted one;
- **rules with no market rationale** — if you can't explain *why* a rule should work in plain words, you probably curve-fitted it.

The overfitting deep-dive — including the parameter-cliff test — lands on Oct 14 (#19).

One more concept, kept deliberately light: the conventional "is this just luck?" bar in statistical practice is a **t-statistic around 2** — roughly, the mean net P&L per trade divided by its variability, scaled by the square root of the trade count. You don't need to learn t-tests for this article; the intuition is enough: the result must be big enough, relative to its noise and sample size, that luck is an unlikely explanation. #17 goes deeper.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 388" role="img" aria-label="Overfit versus robust strategy signatures: parameter cliffs, out-of-sample collapse, equity curve shape, and rule rationale." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Overfit vs robust &#8212; the four signatures</text>
<text x="320" y="62" text-anchor="middle" fill="#ff4f65" font-size="13" font-weight="700">OVERFIT</text>
<text x="540" y="62" text-anchor="middle" fill="#14d991" font-size="13" font-weight="700">ROBUST</text>
<line x1="20" y1="78" x2="640" y2="78" stroke="#2a3a34" stroke-width="1"/>
<text x="20" y="108" fill="#f2f7f4" font-size="13" font-weight="700">Parameter cliffs</text>
<text x="320" y="108" text-anchor="middle" fill="#ff4f65" font-size="12">Twitchy &#8212; tiny tweaks swing results</text>
<text x="540" y="108" text-anchor="middle" fill="#14d991" font-size="12">Smooth &#8212; small tweaks, small moves</text>
<line x1="20" y1="136" x2="640" y2="136" stroke="#2a3a34" stroke-width="1"/>
<text x="20" y="176" fill="#f2f7f4" font-size="13" font-weight="700">In-sample &#8594; out-of-sample</text>
<text x="320" y="176" text-anchor="middle" fill="#ff4f65" font-size="12">Collapses on the untouched data</text>
<text x="540" y="176" text-anchor="middle" fill="#14d991" font-size="12">Stays consistent on new data</text>
<line x1="20" y1="204" x2="640" y2="204" stroke="#2a3a34" stroke-width="1"/>
<text x="20" y="244" fill="#f2f7f4" font-size="13" font-weight="700">Equity curve</text>
<text x="320" y="244" text-anchor="middle" fill="#ff4f65" font-size="12">Unnaturally smooth &#8212; no drawdowns</text>
<text x="540" y="244" text-anchor="middle" fill="#14d991" font-size="12">Jagged, with real drawdowns</text>
<line x1="20" y1="272" x2="640" y2="272" stroke="#2a3a34" stroke-width="1"/>
<text x="20" y="312" fill="#f2f7f4" font-size="13" font-weight="700">Rule rationale</text>
<text x="320" y="312" text-anchor="middle" fill="#ff4f65" font-size="12">No reason &#8212; can&#8217;t explain it</text>
<text x="540" y="312" text-anchor="middle" fill="#14d991" font-size="12">Plain-words reason it works</text>
<line x1="20" y1="340" x2="640" y2="340" stroke="#2a3a34" stroke-width="1"/>
<text x="340" y="368" text-anchor="middle" fill="#92a59c" font-size="12">Two or more red flags = fitted to the past, not predictive of the future.</text>
</svg>
<figcaption>Four signatures that separate a fitted backtest from a robust one: parameter cliffs, out-of-sample collapse, an unnaturally smooth equity curve, and rules with no market rationale.</figcaption>
</figure>

### 'Sign the Contract With Yourself': Pre-Register Trade Count, Pass/Fail Criteria, and the Stop Rule

This is the article's core discipline, and it deserves its own name. Before you run a single test trade, write down three things:

1. **The trade count.** "I will log exactly 100 rule-following trades." Not "I'll see how it goes." Exactly 100.
2. **The pass/fail criteria.** "Net expectancy after all costs must clear roughly 2× my round-trip cost, and the outlier deletion test must not flip the verdict." Written down, dated.
3. **The stop rule.** The stop rule is the leg everyone skips, so here are three concrete ones you can write verbatim:
   - *"If I take 3 rule-breaking trades, I pause the test and restart the count."*
   - *"If net expectancy is still negative at the halfway mark (50 of 100 trades), I stop early and re-examine rather than grinding to 100."*
   - *"If the underlying market regime changes materially mid-test (e.g. an expiry-day structure change), I note the date and re-evaluate the sample instead of pretending it's one continuous regime."*

Then you trade through the drawdowns — including the 7-trade losing streaks the math says are likely (~69% chance at a 40% win rate) — without touching the contract. Moving the goalposts mid-drawdown is the #1 self-deception in retail trading: it turns every test into a Rorschach inkblot you read however your P&L feels that day.

This isn't our invention. Pre-registration — fixing your sample size and success criteria before collecting data — is an established scientific discipline, standard practice in clinical trials and experimental research, specifically to prevent researchers from shifting the finish line after seeing the results. We're just giving it a retail-trader name: **sign the contract with yourself.** If no trade log exists at all — no count, no rules, no costs subtracted — then the absence is itself the answer to "is my trading strategy profitable." You don't have a strategy to validate; you have a habit to document.

## Question 3 — Can I Survive It? Worst Streaks, Drawdowns, and the Position Sizing Math

Question 3 is where positive-expectancy strategies go to die. A strategy can be genuinely profitable and still ruin an overleveraged account, because profit is an average and ruin is a sequence.

The streaks that make traders quit aren't anomalies — they're randomness behaving exactly the way the math says it does. The exact figures (Markov-chain computation, 10 October 2026 — not back-of-envelope estimates):

- A **40%-win-rate** strategy over 100 trades has a **68.9% chance** of at least one 7-trade losing streak, a **20.5% chance** of at least one 10-trade streak, and a **7.7% chance** of at least one 12-trade streak.
- A **50%-win-rate** strategy over 100 trades has a **17.0% chance** of at least one 8-trade streak; over 200 trades that rises to **32.0%**.
- A **35%-win-rate** strategy over 100 trades has a **36.8% chance** of at least one 10-trade streak.

Read that again. More than two-thirds of 40%-win-rate strategies will print a 7-loss streak in their first 100 trades. Every one of those traders will feel — with total sincerity — that "something broke." Nothing broke. The contract said this was likely; the math gave it a ~69% chance.

Question 3's components, briefly — each links out to a Week-1 chapter rather than repeating the derivation here:

- **Worst streak → drawdown.** Convert your expected worst losing streak into rupees at your position size. That rupee figure is the drawdown you should plan for, not the average loss.
- **Max drawdown.** Your account must be able to absorb that drawdown and keep trading the strategy unchanged. If surviving the expected worst case requires you to shrink size or skip trades, your question-1 expectancy no longer applies — you've changed the strategy.
- **Position sizing.** The math that converts streak probabilities into per-trade risk is covered in full in our [position sizing guide](/articles/position-sizing/). Question 3's verdict is simply: the worst-case path fits the sizing.
- **Risk of ruin.** The probability that the strategy's worst paths wipe the account, covered in our [risk of ruin guide](/articles/risk-of-ruin-trading/). If ruin probability isn't acceptably low at your size, the strategy "works" in theory and kills in practice.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 360" role="img" aria-label="Probability of losing streaks by win rate: chart showing streak probabilities for 35, 40, and 50 percent win rates over 100 trades." class="viz">
<text x="340" y="30" text-anchor="middle" fill="#f2f7f4" font-size="15" font-weight="700">Losing streaks are not anomalies &#8212; they are the math</text>
<text x="280" y="56" fill="#92a59c" font-size="11">0</text>
<text x="600" y="56" text-anchor="end" fill="#92a59c" font-size="11">70%</text>
<text x="20" y="74" fill="#f2f7f4" font-size="13">35% WR &#183; 10-loss streak</text>
<rect x="280" y="59" width="171" height="22" rx="6" fill="#f2a33c" fill-opacity="0.85" class="bar-grow"/>
<text x="459" y="75" fill="#f2a33c" font-size="13" font-weight="700">36.8%</text>
<text x="20" y="114" fill="#f2f7f4" font-size="13">40% WR &#183; 7-loss streak</text>
<rect x="280" y="99" width="320" height="22" rx="6" fill="#f2a33c" fill-opacity="0.85" class="bar-grow"/>
<text x="592" y="115" text-anchor="end" fill="#0d1512" font-size="12" font-weight="700">68.9%</text>
<text x="20" y="154" fill="#f2f7f4" font-size="13">40% WR &#183; 10-loss streak</text>
<rect x="280" y="139" width="95" height="22" rx="6" fill="#f2a33c" fill-opacity="0.85" class="bar-grow"/>
<text x="383" y="155" fill="#f2a33c" font-size="13" font-weight="700">20.5%</text>
<text x="20" y="194" fill="#f2f7f4" font-size="13">40% WR &#183; 12-loss streak</text>
<rect x="280" y="179" width="36" height="22" rx="6" fill="#f2a33c" fill-opacity="0.85" class="bar-grow"/>
<text x="324" y="195" fill="#f2a33c" font-size="13" font-weight="700">7.7%</text>
<text x="20" y="234" fill="#f2f7f4" font-size="13">50% WR &#183; 8-loss (100 trades)</text>
<rect x="280" y="219" width="79" height="22" rx="6" fill="#f2a33c" fill-opacity="0.85" class="bar-grow"/>
<text x="367" y="235" fill="#f2a33c" font-size="13" font-weight="700">17.0%</text>
<text x="20" y="274" fill="#f2f7f4" font-size="13">50% WR &#183; 8-loss (200 trades)</text>
<rect x="280" y="259" width="149" height="22" rx="6" fill="#f2a33c" fill-opacity="0.85" class="bar-grow"/>
<text x="437" y="275" fill="#f2a33c" font-size="13" font-weight="700">32.0%</text>
<text x="340" y="330" text-anchor="middle" fill="#92a59c" font-size="11">Markov-chain computation, 10 October 2026 &#8212; a 40% strategy prints a 7-loss streak ~69% of the time.</text>
</svg>
<figcaption>A 40%-win-rate strategy prints a 7-trade losing streak roughly 69% of the time in 100 trades. The drawdown that makes traders quit is the drawdown the math said was likely.</figcaption>
</figure>

## Backtest vs Forward Test vs Live: What Each One Actually Proves

The backtest vs forward test confusion is constant. Here's the clean separation — each gets a short definition here, and the failure modes between them get their full chapter on Oct 12 (#20):

- **Backtesting** uses historical data. It proves your *logic* is testable and — if you're honest about costs — whether it would have made money. It proves nothing about your *execution*.
- **Forward (paper) testing** uses live market conditions with no capital at risk. It proves you can actually follow the rules in real time, through real boredom and real streaks. It is a bridge between backtest and live trading — not the verdict itself.
- **Live trading** is the only environment that proves the strategy survives execution reality: slippage (the gap between expected and actual fill prices), missed fills, and the full cost stack. Any slippage figure in an example is an illustrative assumption — its magnitude is strategy- and market-specific and can't be looked up. The execution leak — slippage, missed fills, costs ignored — is the category where backtest profits most often die live. #20 owns that story in full.

Paper trading gets its own complete chapter on the last day of the week (#30) — the bridge deserves a blueprint, not a paragraph.

## When Do You Stop Testing and Go Live? The Pre-Registered Exit Rule

You stop when the criteria you wrote down before testing are met. Not when you "feel good." Not when the last ten trades were green. When the contract says so:

- **100+ logged, rule-following trades** (the number you pre-registered — more if your edge is thin),
- **net expectancy after all costs clearing the working rule of thumb (~2× your round-trip cost),**
- **modest out-of-sample degradation** — the untouched-data performance is in the same ballpark as the fitted-data performance, not a collapse,
- and **no moving the goalposts** — the criteria are the ones from before the test, not the ones you wish you'd written after seeing the drawdown.

One honest boundary about a popular shortcut: **Monte Carlo analysis does not validate your edge.** It takes your sampled trades and measures sequence risk — the distribution of drawdown paths the sample could produce. That's valuable for question 3 (survivability), but it cannot create information your sample lacks. A Monte Carlo of 100 lucky trades just simulates 100 lucky trades in different orders. The full treatment lands Oct 16 (#22).

And a note on tomorrow's tool: the **What-If Trade Simulator launches Oct 11** — one day after this article. It shows you what your trade distribution can do to an account across thousands of simulated paths. Sequence-risk framing, honestly held: it tells you whether you can *survive* the strategy. It does not tell you whether the edge is *real*. That distinction is the whole point of this article's hierarchy — and the tool slots into question 3, not question 1.

## Your One-Page Validation Protocol: The Checklist

Tear this out (metaphorically). One page, three questions, every step:

**Question 1 — Is there an edge?**
1. Log every trade with full detail — per trade record: date, instrument, rule-set version, entry/exit, quantity, gross P&L, full cost stack, net P&L, and rule-followed (yes/no). Compute gross expectancy from win rate, average win, average loss. *(Ingredients: [expectancy](/articles/what-is-trading-expectancy/))*
2. Subtract the full Indian F&O cost stack — brokerage, STT (options sell 0.15%, exercised ITM 0.15% of intrinsic, futures sell 0.05%; post-April-2026), NSE transaction charges, stamp, SEBI, GST. Net expectancy must clear the working rule of thumb (~2× your all-in round-trip cost).
3. Compute profit factor on net figures; check the after-cost variant. *(Efficiency: [profit factor](/articles/profit-factor/))*
4. Run the outlier deletion test: remove your 2–3 best trades and re-judge. The verdict must survive.

**Question 2 — Can I trust the verdict?**
5. Pre-register before testing: trade count, pass/fail criteria, stop rule. Sign the contract with yourself.
6. Hit the trade count you committed to (100 as a common community minimum for a first verdict — the number is your choice, made *before*). *(Deep dive: #17, Oct 11)*
7. Check the out-of-sample portion: no collapse, no parameter cliffs. *(Deep dive: #19, Oct 14)*
8. Confirm regime coverage and rule rationale — rules you can explain in plain words.

**Question 3 — Can I survive it?**
9. Convert the expected worst streak into rupees at your position size. *(Sizing: [position sizing](/articles/position-sizing/))*
10. Verify max drawdown is absorbable and risk of ruin is acceptably low. *(Ruin math: [risk of ruin](/articles/risk-of-ruin-trading/))*
11. Stress-test the distribution's sequence risk (tomorrow's simulator helps here — but it measures survival, not edge). *(Deep dive: #22, Oct 16)*

**The exits.**
12. Go live only when the pre-registered criteria are met — 100+ trades, net expectancy clearing the rule of thumb, modest OOS degradation. No goalpost-moving. *(Backtest→live failure modes: #20, Oct 12; paper-trading blueprint: #30; real-expectancy refinement: #23)*

That is the protocol — three questions, in order, no moving the goalposts.

## Limitations and Risk Disclosure

This protocol tests whether a strategy has shown an edge *in the sample you measured*. It cannot guarantee future results — markets change, regimes shift, and past backtested performance does not guarantee live results.

Trading F&O carries real, specific risks you must carry into any verdict: leverage magnifies losses beyond the premium or margin you put up; options can expire worthless, and exercised ITM options attract 0.15% STT on intrinsic value since April 2026 — a charge that can dwarf the premium-based STT on deep in-the-money expiry positions; no strategy, however well validated, can be presented as guaranteed profit.

Validate honestly, size for the worst streak you computed rather than the average trade you hope for, and never risk capital whose loss would change your life.

## Frequently Asked Questions

**How do I know if my trading strategy works?**
Compute net expectancy from 100+ logged, rule-following trades — all costs subtracted — and check it's clearly above zero; then delete your 2–3 best trades and re-judge. If the verdict survives, you have evidence of an edge. If no trade log exists, that absence is itself the answer.

**How many trades before trusting a strategy?**
As a community convention — not a law of nature — 100 trades is the common minimum for a first verdict, 100–400 is the typical quoted range for detecting an edge, and thin edges (profit factor around 1.1) may need 1,000+ trades. But the more important rule: **decide the number before you start testing.** A verdict with moving goalposts is an opinion. Tomorrow's chapter (#17, Oct 11) goes deep on trade counts and statistical power.

**How do I know my backtest isn't overfitted?**
Run the signature check: sharp parameter cliffs (tiny changes swing results), performance collapse from in-sample to out-of-sample data, an unnaturally smooth equity curve, or rules you can't explain in plain words. If two or more are present, treat the backtest as fitted to the past, not predictive of the future. The full overfitting deep-dive, including the parameter-cliff test, lands Oct 14 (#19).

**Why is my backtest profitable but live trading loses money?**
Three usual suspects: the execution leak (slippage, missed fills, and costs the backtest never paid), overfitting (the strategy memorised history), or costs ignored entirely — the gross-vs-net trap from question 1. Paper-trade 30+ trades in live conditions before committing real capital, and compare live fills to backtest assumptions line by line. The complete backtest-to-live failure-mode map is Oct 12's chapter (#20).

**What's the difference between backtesting and forward testing?**
Backtesting runs your rules against historical data — it tests the logic. Forward (paper) testing runs your rules against live market conditions with no capital at risk — it tests your execution and discipline in real time. Demo trading is the bridge between backtest and live, not the verdict itself. (#30 closes the week with the full paper-trading blueprint.)

**When do I stop testing and go live?**
When the criteria you pre-registered before testing are met: 100+ logged trades, net expectancy clearly above zero after all costs, and only modest degradation on the out-of-sample portion. Not when you feel confident, not after a lucky week — when the contract you signed with yourself says the conditions are satisfied. No moving the goalposts.

**Does Monte Carlo prove my strategy works?**
No. Monte Carlo analysis on your trade results measures **sequence risk** — the range of drawdown paths your sampled trades could produce in different orders. It cannot create information your sample lacks: a Monte Carlo of 100 lucky trades simulates 100 lucky trades in different orders. Use it for question 3 (can I survive it?), never for question 1 (is there an edge?). The full treatment, alongside the What-If simulator, lands Oct 16 (#22).

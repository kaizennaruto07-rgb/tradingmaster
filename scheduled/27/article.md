---
title: "How Many Losing Trades in a Row Is Normal?"
description: "How many losing trades in a row is normal? It depends on win rate and sample size. Look up your expected streak and apply the keep, reduce, or pause verdict."
meta_description: "How many losing trades in a row is normal? It depends on win rate and sample size. Look up your expected streak and apply the keep, reduce, or pause verdict."
date: 2026-11-07
author: Kaizen
tag: "Trading mathematics"
keywords: ["how many losing trades in a row is normal", "losing streak probability", "expected longest losing streak", "losing trades in a row", "when to stop trading losing streak"]
---

*By Kaizen · 7 November 2026 · Monks Of Market*

You have just lost several trades in a row, and one question is doing all the damage: is this normal, or is my strategy broken?

There is no single number that answers it. A streak of 5 losses means something very different for a trader who wins 70% of the time than for a trader who wins 40% of the time, and something very different again over 100 trades than over 1,000 trades. This article gives you a verdict, not reassurance: look up your expected longest losing streak for your win rate and sample size, check the two probabilities behind it, compare the streak against your own backtest, and land on one of three actions — keep trading, reduce size, or pause and review.

## The Short Answer: There Is No Universal Normal Number

How many losing trades in a row is normal depends on two inputs only: your win rate, which we will call W, and your sample size, which we will call T. The loss rate is q, where q = 1 − W. A trader with a 60% win rate loses 40% of trades; a trader with a 40% win rate loses 60% of trades. Over the same number of trades, the lower win rate should expect a much longer worst run — and that is normal, not a sign of failure.

The procedure in this article is short. First, find your expected longest losing streak in the table below. The normal band is defined by one rule, used everywhere in this article without exception: take the log-formula point value for your win rate and sample size, expected = log(T) / log(1/q), and a streak of N losses is in the normal band if and only if N ≤ expected + 1, compared as a real number — not against the rounded top of the band. For example, a 55% win rate over 100 trades has a point value of 5.77, so the normal band runs to 5.77 + 1 = 6.77: a streak of 6 is normal, a streak of 7 is beyond it.

Second, compute the two probabilities for your streak length — both labelled, because confusing them is the most common error in this whole topic. Third, and decisively, compare your streak against your own backtested maximum consecutive losses and your own backtested maximum drawdown. If either of your own maximums is breached, the verdict is pause and review, whatever the generic table says.

The rest of this article works through that procedure.

## The Expected-Longest-Streak Table: Look Up Your Win Rate and Sample Size

The table below is recomputed from the formula for the expected longest losing streak, approximately log(T) / log(1/q), where log can be any base because only the ratio matters. It is an approximation under the assumption that trades are independent and the win rate stays constant, so the results are given as bands, not false precision. The longest run varies widely from one sample to another, and a band is the honest way to present it.

| Win rate (W) | Loss rate (q) | 100 trades | 200 trades | 500 trades | 1,000 trades |
| --- | --- | --- | --- | --- | --- |
| 70% | 30% | 3–4 in a row | 4–5 in a row | 5–6 in a row | 5–6 in a row |
| 60% | 40% | 4–5 in a row | 5–6 in a row | 6–7 in a row | 7–8 in a row |
| 55% | 45% | 5–6 in a row | 6–7 in a row | 7–8 in a row | 8–9 in a row |
| 50% | 50% | 6–7 in a row | 7–8 in a row | 8–9 in a row | 9–10 in a row |
| 45% | 55% | 7–8 in a row | 8–9 in a row | 10–11 in a row | 11–12 in a row |
| 40% | 60% | 9–10 in a row | 10–11 in a row | 12–13 in a row | 13–14 in a row |

Each band brackets its log-formula point value (for example, the 100-trade point values are 3.82 at 70%, 5.03 at 60%, 5.77 at 55%, 6.64 at 50%, 7.70 at 45%, and 9.02 at 40%). Remember the point-value rule defined above: the normal band is the point value plus one, compared as a real number — not the top of the band plus one.

Longer samples stretch the expectation. A 60% win-rate system over 1,000 trades expects about 7–8 in a row, and over 10,000 trades about 10 in a row. A 40% win-rate system over 500 trades expects about 12 in a row. Those longer horizons are lookup context only: they tell you what a longer sample should contain, not what your lifetime worst streak will be.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Expected-longest-streak table: win rates from 70 percent down to 40 percent against sample sizes of 100, 200, 500 and 1,000 trades, with the normal band defined as the point value plus one." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Expected longest losing streak — look up your win rate and sample</text>
<text x="170" y="68" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">Win rate</text>
<text x="310" y="68" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">100</text>
<text x="410" y="68" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">200</text>
<text x="510" y="68" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">500</text>
<text x="610" y="68" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">1,000</text>
<text x="170" y="100" text-anchor="middle" fill="#f2f7f4" font-size="13">70%</text><text x="310" y="100" text-anchor="middle" fill="#f2f7f4" font-size="13">3–4</text><text x="410" y="100" text-anchor="middle" fill="#f2f7f4" font-size="13">4–5</text><text x="510" y="100" text-anchor="middle" fill="#f2f7f4" font-size="13">5–6</text><text x="610" y="100" text-anchor="middle" fill="#f2f7f4" font-size="13">5–6</text>
<text x="170" y="132" text-anchor="middle" fill="#f2f7f4" font-size="13">60%</text><text x="310" y="132" text-anchor="middle" fill="#f2f7f4" font-size="13">4–5</text><text x="410" y="132" text-anchor="middle" fill="#f2f7f4" font-size="13">5–6</text><text x="510" y="132" text-anchor="middle" fill="#f2f7f4" font-size="13">6–7</text><text x="610" y="132" text-anchor="middle" fill="#f2f7f4" font-size="13">7–8</text>
<text x="170" y="164" text-anchor="middle" fill="#f2f7f4" font-size="13">55%</text><text x="310" y="164" text-anchor="middle" fill="#f2f7f4" font-size="13">5–6</text><text x="410" y="164" text-anchor="middle" fill="#f2f7f4" font-size="13">6–7</text><text x="510" y="164" text-anchor="middle" fill="#f2f7f4" font-size="13">7–8</text><text x="610" y="164" text-anchor="middle" fill="#f2f7f4" font-size="13">8–9</text>
<text x="170" y="196" text-anchor="middle" fill="#f2f7f4" font-size="13">50%</text><text x="310" y="196" text-anchor="middle" fill="#f2f7f4" font-size="13">6–7</text><text x="410" y="196" text-anchor="middle" fill="#f2f7f4" font-size="13">7–8</text><text x="510" y="196" text-anchor="middle" fill="#f2f7f4" font-size="13">8–9</text><text x="610" y="196" text-anchor="middle" fill="#f2f7f4" font-size="13">9–10</text>
<text x="170" y="228" text-anchor="middle" fill="#f2f7f4" font-size="13">45%</text><text x="310" y="228" text-anchor="middle" fill="#f2f7f4" font-size="13">7–8</text><text x="410" y="228" text-anchor="middle" fill="#f2f7f4" font-size="13">8–9</text><text x="510" y="228" text-anchor="middle" fill="#f2f7f4" font-size="13">10–11</text><text x="610" y="228" text-anchor="middle" fill="#f2f7f4" font-size="13">11–12</text>
<text x="170" y="260" text-anchor="middle" fill="#f2f7f4" font-size="13">40%</text><text x="310" y="260" text-anchor="middle" fill="#f2f7f4" font-size="13">9–10</text><text x="410" y="260" text-anchor="middle" fill="#f2f7f4" font-size="13">10–11</text><text x="510" y="260" text-anchor="middle" fill="#f2f7f4" font-size="13">12–13</text><text x="610" y="260" text-anchor="middle" fill="#f2f7f4" font-size="13">13–14</text>
<text x="340" y="290" text-anchor="middle" fill="#92a59c" font-size="12">Normal band: streak N ≤ point value + 1, compared as a real number</text>
</svg>
</figure>

### How to Use the Table Without Over-Reading It

Find W from your own traded or backtested sample, and always state it together with T. A win rate from a recent hot streak, or a rate you hope to achieve, is not an input — it is a wish. A "55% win rate over 100 trades" is a usable input; "about 55%" with no sample size is not.

If your live and backtested win rates disagree, the backtested rate governs the lookup unless the live sample, at or above about 20 trades, shows drift. A live rate falling below the backtested rate is a possible execution-drift or regime signal, not something to average away.

Then apply the point-value rule defined above: a current streak is in the normal band if and only if it is at or below the point value plus one, compared as a real number. A 50% trader over 100 trades has a point value of 6.64, so the normal band runs to 6.64 + 1 = 7.64: a streak of 7 sits inside the normal band, and a streak of 8 sits in the grey zone. The table alone, however, is only the first check. It is a baseline for independent trades, and your own backtest maximums — covered in the verdict procedure below — can override it in either direction.

## The Two Probabilities Traders Constantly Confuse

Losing streak probability causes more confusion than any other number in trading, because two very different questions sound almost identical. One asks about a specific run. The other asks about a streak appearing anywhere inside a sample. The first number is tiny. The second is material. Both are correct — for their own question — and quoting either without saying which question it answers is an error.

One method is used throughout this article, so the numbers are comparable. Specific-run probabilities are computed with q^N. At-least-one-streak probabilities are computed by exact dynamic programming over all outcome sequences: track the current run of consecutive losses, reset it to zero on a win, extend it on a loss, and count the sequences that ever reach N in a row. That method counts overlapping windows correctly.

Approximations that treat overlapping windows as if they were independent overstate the answer, which is one reason other pages disagree with each other: they are often answering different questions, or using different unstated win rates, sample sizes, or methods, without saying so. This article states its method and sticks to it.

### Probability 1: This Specific Next N Trades All Lose (q^N)

Probability 1, the specific-run probability, answers: "What is the chance that my next N trades, starting now, all lose?" The formula is q^N, where q is your loss rate.

For a 60% win rate, the specific-run probability of 5 in a row is 0.4^5, about 1.0%. For a 55% win rate, the specific-run probability of 7 in a row is 0.45^7, about 0.37%. These numbers are small, and they should be: the chance that a particular, pre-specified run of trades all loses is genuinely low.

But this is not the number most traders actually care about when they ask whether a streak is normal. Nobody sits down and asks only about the next five trades starting from this exact moment. They ask whether a streak of that length will show up somewhere in their trading. That is the second probability.

### Probability 2: At Least One N-Streak Somewhere Inside T Trades (Exact DP)

Probability 2, the at-least-one-streak probability, answers: "What is the chance that at least one streak of N losses appears somewhere inside my next T trades?" It is computed by exact dynamic programming, as described above — never by an approximation that treats overlapping windows as independent.

The headline pair shows why the distinction matters. For a 55% win rate over 200 trades, the specific-run probability of the next 7 trades all losing is about 0.37%. But the exact-DP probability of at least one 7-streak appearing somewhere inside those 200 trades is 33.4%, about one sample in three. Same streak length, same win rate — two very different numbers, because they answer two different questions.

The same pattern holds at the most commonly quoted cell. For a 60% win rate over 100 trades, the exact-DP probability of at least one 5-streak somewhere inside those 100 trades is 45.9%, about 46%. That is the value used throughout this article for that cell. A trader who only knew the specific-run figure of about 1.0% would be shocked by a 5-streak; a trader who knew the at-least-one figure of about 46% would recognise it as an ordinary event in a 100-trade sample.

For the most common lookups, the at-least-one probabilities below are computed by the same method — exact dynamic programming over all outcome sequences, as described above. No other cells are claimed here; if your combination is not in this grid, do not extrapolate from it — use the table lookup and the verdict procedure, and treat that combination as uncovered.

| Win rate | Sample size (T) | Streak length (N) | At least one N-streak somewhere inside T trades (exact DP) |
| --- | --- | --- | --- |
| 60% | 100 trades | 5 | 45.9% |
| 55% | 200 trades | 7 | 33.4% |
| 50% | 100 trades | 7 | 31.8% |
| 60% | 200 trades | 5 | 71.4% |
| 40% | 100 trades | 10 | 20.5% |
| 50% | 500 trades | 10 | 21.5% |
| 50% | 1,000 trades | 10 | 38.5% |

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 330" role="img" aria-label="Exact dynamic-programming at-least-one probability grid: 60 percent over 100 trades with a 5-streak at 45.9 percent, 55 percent over 200 trades with a 7-streak at 33.4 percent, 50 percent over 100 trades with a 7-streak at 31.8 percent, 60 percent over 200 trades with a 5-streak at 71.4 percent, 40 percent over 100 trades with a 10-streak at 20.5 percent, 50 percent over 500 trades with a 10-streak at 21.5 percent, and 50 percent over 1,000 trades with a 10-streak at 38.5 percent." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">At least one N-streak somewhere inside T trades (exact DP)</text>
<rect x="40" y="60" width="600" height="230" rx="12" fill="#2a3a34"/>
<text x="70" y="96" fill="#f2f7f4" font-size="13">60% · 100 trades · 5-streak</text><text x="610" y="96" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">45.9%</text>
<text x="70" y="128" fill="#f2f7f4" font-size="13">55% · 200 trades · 7-streak</text><text x="610" y="128" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">33.4%</text>
<text x="70" y="160" fill="#f2f7f4" font-size="13">50% · 100 trades · 7-streak</text><text x="610" y="160" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">31.8%</text>
<text x="70" y="192" fill="#f2f7f4" font-size="13">60% · 200 trades · 5-streak</text><text x="610" y="192" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">71.4%</text>
<text x="70" y="224" fill="#f2f7f4" font-size="13">40% · 100 trades · 10-streak</text><text x="610" y="224" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">20.5%</text>
<text x="70" y="256" fill="#f2f7f4" font-size="13">50% · 500 trades · 10-streak</text><text x="610" y="256" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">21.5%</text>
<text x="70" y="288" fill="#f2f7f4" font-size="13">50% · 1,000 trades · 10-streak</text><text x="610" y="288" text-anchor="end" fill="#f2f7f4" font-size="13" font-weight="700">38.5%</text>
<text x="340" y="318" text-anchor="middle" fill="#92a59c" font-size="12">If your combination is not in this grid, do not extrapolate — use the table lookup</text>
</svg>
</figure>

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 280" role="img" aria-label="Two-probability contrast for the same streak: a 55 percent trader over 200 trades faces about 0.37 percent for the specific next 7 trades all losing, but 33.4 percent for at least one 7-streak somewhere inside those 200 trades." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Same streak, two questions — two very different numbers</text>
<rect x="40" y="60" width="290" height="150" rx="12" fill="#2a3a34"/>
<text x="185" y="92" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">This specific next 7 trades</text>
<text x="185" y="112" text-anchor="middle" fill="#92a59c" font-size="12">all lose (q^N)</text>
<text x="185" y="150" text-anchor="middle" fill="#f2f7f4" font-size="28" font-weight="700">0.37%</text>
<text x="185" y="182" text-anchor="middle" fill="#92a59c" font-size="12">55% win rate · tiny, as it should be</text>
<rect x="350" y="60" width="290" height="150" rx="12" fill="#2a3a34"/>
<text x="495" y="92" text-anchor="middle" fill="#92a59c" font-size="12" font-weight="700">At least one 7-streak inside</text>
<text x="495" y="112" text-anchor="middle" fill="#92a59c" font-size="12">200 trades (exact DP)</text>
<text x="495" y="150" text-anchor="middle" fill="#f2f7f4" font-size="28" font-weight="700">33.4%</text>
<text x="495" y="182" text-anchor="middle" fill="#92a59c" font-size="12">About one sample in three</text>
<text x="340" y="250" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">Always ask which question a quoted probability answers</text>
</svg>
</figure>

Whenever you see a losing streak probability quoted anywhere — including in this article — ask which of the two it is. If it is not labelled, it is not usable.

## Why 3–4 Losses Feels Like the Breaking Point (and Why the Feeling Is Not the Verdict)

Many traders report 3–4 losses in a row as the psychological breaking point: the point where they abandon a sound strategy or double size to "win it back". Some accounts put the novice "must correct something" point at 3 losses. Treat that as consensus and interpretation, not as a verified statistic — it describes how traders commonly feel, not a measured property of markets.

Two biases drive the feeling. The first is the gambler's fallacy: the belief that a win is "due" after a run of losses. Under the independence baseline used for the table, it is not. Each trade's odds are unchanged by previous results, so the probability that the next trade loses is still q, whatever has just happened. A coin does not remember its last five tosses, and a strategy evaluated under independence does not owe you a win.

The second is recency bias: overweighting the last handful of trades. Four losses feel like the whole strategy because they are the most recent evidence, even when they sit inside a 100-trade sample that is otherwise behaving exactly as expected. The feeling is real, and it is a useful alarm bell — it tells you to run the verdict procedure. It is not the verdict itself. Run the numbers first, then decide.

## The Verdict Procedure: Six Steps From 'I Have Lost N in a Row' to Keep, Reduce, or Pause-and-Review

This is the core of the article. Follow the steps in order, and do not skip to the branch that feels most comfortable.

### Steps 1–2: Your Win Rate and Sample Size, Then the Table Lookup

Step 1: find your win rate W from your own traded or backtested sample, and state it with its sample size T. Never use a rate from a recent hot streak or a hoped-for rate.

Step 2: look up your expected longest streak in the table. If your current streak satisfies the point-value rule defined above — streak N ≤ expected point value + 1, compared as a real number — it is in the normal band. That is a pass on the first check only — not the final verdict.

### Steps 3–4: Both Probabilities, Then Your Own Backtest Maximums

Step 3: compute both probabilities for your streak length N, and state both, labelled. Probability 1 is the specific-run probability, q^N: this specific next N trades all lose. Probability 2 is the at-least-one probability by exact dynamic programming: at least one N-streak somewhere inside T trades. The pair tells you whether the streak is a rare specific event or an ordinary event somewhere in a sample of your size.

Step 4 is decisive: compare against your own backtest. Compare your live streak against your strategy's own backtested maximum consecutive losses, and compare your live drawdown against your strategy's own backtested maximum drawdown. If either maximum is breached, the verdict is pause and review, regardless of what the generic table says. Your own backtest maximums are decisive over the generic table, because they describe your strategy, not an average strategy with your win rate.

### Steps 5–6: The 20-Trade Floor and the Three Branches

Step 5 is the sample-size floor. Do not deliver a verdict on fewer than about 20 trades since the last review. Below that floor, the only verdict is "not enough data — keep size small, keep logging". A 3-loss streak inside 5 trades tells you almost nothing, and judging a strategy on it is how sound strategies get abandoned early. For the full treatment of sample size, see the article on [how many trades you need to validate a strategy](/articles/how-many-trades-to-validate/).

Step 6 branches, with one clear rule per branch:

- **Normal band — trade the plan at normal size.** Your streak satisfies the point-value rule defined above (streak N ≤ expected point value + 1, compared as a real number), neither backtest maximum is breached, and you have at least about 20 trades since the last review. No change. The streak is the price of a strategy with your win rate.
- **Grey zone — reduced size, no new discretionary tweaks until a win at reduced size.** Your streak is around expected plus two, or within 1 loss of the backtested maximum consecutive losses — that is what "approaching a backtested maximum" means here: for example, a streak of 5 against a backtested maximum of 6. You are not stopping, but you are not trading full size while you are near the edge either, and you do not redesign the strategy mid-streak.
- **Red flag — stop, review out of sample, paper-trade the review.** Your streak is beyond a backtested maximum, or a streak breach and a drawdown breach occur together, or your losses are clustering with a regime or market change. Stop live trading of the strategy, review it on out-of-sample data, and paper-trade the reviewed version before risking capital again. For what a losing streak does to an account while you work through this, see [how losing streaks affect trading accounts](/articles/how-losing-streaks-affect-trading-accounts/).

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Verdict flow: look up the expected streak, compute both labelled probabilities, check your own backtest maximums, respect the 20-trade floor, then branch to keep at normal size, reduce size, or pause and review." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">Six steps from streak to verdict — in order, no skipping</text>
<rect x="40" y="60" width="600" height="160" rx="12" fill="#2a3a34"/>
<text x="70" y="96" fill="#f2f7f4" font-size="13">1–2. Win rate + sample size → table lookup (point value + 1)</text>
<text x="70" y="128" fill="#f2f7f4" font-size="13">3. Both probabilities, labelled: q^N and exact-DP at-least-one</text>
<text x="70" y="160" fill="#f2f7f4" font-size="13">4. Own backtest maximums — decisive over the generic table ★</text>
<text x="70" y="192" fill="#f2f7f4" font-size="13">5. 20-trade floor — below it, only “not enough data”</text>
<text x="340" y="246" text-anchor="middle" fill="#8fd6a0" font-size="13" font-weight="700">Normal band → keep · Grey zone → reduce · Red flag → pause and review</text>
<text x="340" y="274" text-anchor="middle" fill="#92a59c" font-size="12">A breached backtest maximum means pause and review, whatever the table says</text>
</svg>
</figure>

## The Session Rule Is a Different Decision From the Strategy Verdict

Stopping a session is not the same decision as judging a strategy, and confusing the two causes both kinds of error: traders who keep trading a broken session because "the streak is normal", and traders who abandon a sound strategy because they stopped a session.

The session rule, adopted identically from the staged article on the revenge-trading circuit-breaker, is this: stop the session after 2 consecutive losses or on hitting the daily loss limit, whichever comes first. For the full post-loss protocol, see that staged article on the revenge-trading circuit-breaker in plain terms — it is not linked here because it is staged, not live, and this article does not rebuild its protocol.

Note what this means in practice. A streak can be in the normal band and still trigger a session stop: the strategy may be fine, but the session is over. Equally, a session stop does not mean the strategy is broken: it means today is done. The strategy verdict comes from the six-step procedure above, over your full sample, not from one session. A related pre-trade gate is covered in plain terms by the staged article on the tilt-control pre-trade checklist.

## Worked Example: One Streak Judged Three Ways

Consider one concrete illustrative trader — not a real person, not a testimonial, just an illustration with stated inputs so every number can be checked. The trader trades intraday equity, holds a Rs 1,00,000 account, and has a win rate of 55% over a sample of 100 trades. The current streak is 7 losses in a row. The trader's own backtest, on separate data, recorded a maximum of 6 consecutive losses and a maximum drawdown of 10%. The question is the same one you are asking: is 7 in a row normal, or a red flag?

### Judged Against the Generic Table

Against the generic table, 7 in a row is in the grey zone, not the normal band. A 55% win rate over 100 trades has a log-formula point value of 5.77 — log(100) / log(1/0.45) — so under the point-value rule defined above the normal band runs to 5.77 + 1 = 6.77. A streak of 7 exceeds 6.77, so on the table alone this trader would reduce size.

That is exactly why the table alone is not the verdict. It describes an average strategy with a 55% win rate, not this trader's strategy.

### Judged Against the Trader's Own Backtest Maximum

Against the trader's own backtest, the verdict hardens from reduce to pause and review. The live streak of 7 exceeds the backtested maximum of 6 consecutive losses. That single breach is enough: the verdict is pause and review, regardless of what the generic table said.

The drawdown check sharpens the picture rather than softening it. At 1% risk per trade, 7 straight losses cost 6.79% compounded, inside the 10% backtested maximum drawdown. At 2% risk per trade, the same 7 losses cost 13.19% compounded, beyond it. So at 2% risk this trader breaches both maximums at once — streak and drawdown together — which is the clearest red flag in the procedure. The generic table said "grey — reduce". The trader's own maximums said "stop". The maximums win, because they are decisive.

### Judged Through the Survival Math at 1% Versus 2% Risk

The survival math, on the same Rs 1,00,000 account and compounded with charges excluded, is as follows. At 1% risk per trade, 7 losses leave Rs 93,207, a 6.79% drawdown. At 2% risk per trade, 7 losses leave Rs 86,813, a 13.19% drawdown. The real cost is higher once charges are included, because these figures exclude charges, slippage, and partial wins — but no charge figure is invented here; the point is the gap between 1% and 2% risk, not a precise all-in total.

Put the three judgements together and the lesson is plain. The generic table says the streak is in the grey zone, calling for reduced size. The trader's own backtest maximum says it is a red flag. The survival math says the cost of being wrong about that distinction is far larger at 2% risk than at 1%. A trader who only checked the table would have kept trading at reduced size into a breach of their own strategy's history, instead of pausing.

<figure class="article-visual" data-reveal>
<svg viewBox="0 0 680 300" role="img" aria-label="Survival math on a 1,00,000 rupee account: 10 losses in a row at 1 percent risk per trade leave 90,438 rupees, a 9.56 percent drawdown, versus 81,707 rupees, an 18.29 percent drawdown, at 2 percent risk; 7 losses leave 93,207 versus 86,813 rupees." class="viz">
<text x="340" y="36" text-anchor="middle" fill="#f2f7f4" font-size="16" font-weight="700">What a streak costs, compounded — Rs 1,00,000 account</text>
<rect x="40" y="60" width="290" height="150" rx="12" fill="#2a3a34"/>
<text x="185" y="96" text-anchor="middle" fill="#8fd6a0" font-size="13" font-weight="700">1% risk per trade</text>
<text x="185" y="132" text-anchor="middle" fill="#f2f7f4" font-size="20" font-weight="700">Rs 90,438</text>
<text x="185" y="162" text-anchor="middle" fill="#92a59c" font-size="12">10 losses → −9.56%</text>
<text x="185" y="186" text-anchor="middle" fill="#92a59c" font-size="12">7 losses → Rs 93,207 (−6.79%)</text>
<rect x="350" y="60" width="290" height="150" rx="12" fill="#2a3a34"/>
<text x="495" y="96" text-anchor="middle" fill="#e8825a" font-size="13" font-weight="700">2% risk per trade</text>
<text x="495" y="132" text-anchor="middle" fill="#f2f7f4" font-size="20" font-weight="700">Rs 81,707</text>
<text x="495" y="162" text-anchor="middle" fill="#92a59c" font-size="12">10 losses → −18.29%</text>
<text x="495" y="186" text-anchor="middle" fill="#92a59c" font-size="12">7 losses → Rs 86,813 (−13.19%)</text>
<text x="340" y="250" text-anchor="middle" fill="#f2f7f4" font-size="13" font-weight="700">Double the risk, roughly double the hole — charges excluded</text>
</svg>
</figure>

## The Survival Check: What a Streak Costs, Compounded

A losing streak does not subtract a fixed amount per loss; it compounds. The compounded drawdown after N straight losses at fixed risk r per trade is 1 − (1−r)^N, so each loss is taken from a slightly smaller account than the last.

On a Rs 1,00,000 account, compounded with charges excluded, 10 losses in a row at 1% risk per trade leave Rs 90,438, a 9.56% drawdown. The same 10 losses at 2% risk leave Rs 81,707, an 18.29% drawdown — roughly double the percentage for double the risk, and a much harder hole to trade out of. Five losses at 2% cost about 9.6% compounded from peak, which is close to a typical 10% total-drawdown limit used as an example by some prop firms. That figure is typical only, never a universal rule, and no specific firm's rule is stated here — but it shows why a streak that looks short can still be dangerous at larger size.

Risking about 1–2% of the account per trade is the widely cited convention at which these figures are shown. It is a convention, not a verified rule and not a guarantee of survival. For the sizing maths themselves, see [how to size positions after a losing streak](/articles/how-to-size-positions-after-a-losing-streak/) and the [position size tool article](/articles/position-size/); they are not re-taught here. For the survival framing behind these numbers — how drawdown relates to the risk of ruin — see [risk of ruin in trading](/articles/risk-of-ruin-trading/). Drawdown appears in this article only as this survival check, not as a full comparison against other measures.

To survive a losing streak, then, the first lever is not a better prediction. It is a risk per trade small enough that a normal streak costs a survivable amount, combined with a verdict procedure that stops you before a red-flag streak costs much more.

## The Independence Caveat: The Table Is a Baseline, Not a Verdict by Itself

Everything above — the table, the q^N figures, and the exact-DP probabilities — assumes independent trades with a constant win rate. That is a baseline, stated plainly, not a description of every real strategy.

Real strategies cluster losses. A regime change can turn a strategy's edge off for weeks. Correlated positions can lose together, so five "separate" trades behave like one large bet. Execution drift — slippage, missed entries, widened spreads — can quietly lower the live win rate below the backtested one. When losses cluster for one of these reasons, the table understates how long a streak can run, because the independence assumption no longer holds.

That is why a streak that clusters with a regime or market change is reviewed even if its length alone looks normal, and why the own-backtest check is decisive rather than decorative. The table tells you what independence predicts. Your backtest, your drawdown, and the market context tell you whether independence is still a fair description of what you are trading.

## The Indian Intraday Angle: One Afternoon, No Second Session to Fix the Day

For an Indian intraday trader, a streak has a shape it does not have for a trader with days to recover. A single afternoon's intraday session concentrates the whole streak into one session, with no second session to fix the day. Losses arrive quickly, one after another, and the temptation to "win it back before close" arrives with them.

Every revenge re-entry inside the streak also pays the charge stack again — STT, exchange charges, brokerage, and GST are charged on each attempt, named here with no figures attached. The streak is therefore taxed on every attempt to escape it, and the survival figures above, which exclude charges, understate the real cost of a revenge-traded streak. That is a further reason the session rule matters: stopping after 2 consecutive losses or the daily loss limit, whichever comes first, also stops the charge stack from compounding alongside the losses.

If the strategy verdict later says pause and review, that review happens away from the live market, out of sample, and paper-traded first. It does not happen as another re-entry in the same afternoon. For the broader question of when a strategy should be abandoned altogether, as opposed to paused and reviewed, see [when to quit a strategy](/articles/when-to-quit-a-strategy/) — the verdict here feeds into that decision, it does not replace it.

## Frequently Asked Questions

### How many losing trades in a row is normal?

It depends on your win rate and sample size — there is no universal normal number. Over 100 trades, a 50% win rate expects 6–7 in a row, a 60% win rate expects 4–5, and a 40% win rate expects 9–10. Find your win rate and sample size, look up the band, apply the point-value rule (a streak is in the normal band if and only if it is at or below the log-formula point value plus one, compared as a real number), and then run the full verdict procedure: both labelled probabilities, your own backtest maximums, and the 20-trade floor.

### What is the probability of losing 5 trades in a row?

Both probabilities, labelled, because they answer different questions. Probability 1, the specific-run probability (q^N): for a 60% win rate, the chance that a specific next 5 trades all lose is 0.4^5, about 1.0%. Probability 2, the at-least-one probability by exact dynamic programming: for a 60% win rate over 100 trades, the chance that at least one 5-streak appears somewhere inside those 100 trades is 45.9%, about 46%. The first number describes one pre-specified run; the second describes a streak appearing anywhere in your sample. Never quote one without its label.

### Can a good strategy lose 10 trades in a row?

Yes, at low win rates and long horizons — and the numbers show which combinations make 10 normal and which make it a red flag. By exact dynamic programming, the probability of at least one 10-streak is 20.5% for a 40% win rate over 100 trades, about one sample in five, so a 10-streak there is not a red flag by length alone. It is 21.5% for a 50% win rate over 500 trades, and 38.5% for a 50% win rate over 1,000 trades. By contrast, the specific-run probability of 10 straight losses at a 60% win rate is only 0.011% — which is why the two probabilities must never be confused. In every case, the final word belongs to your own backtest maximums: a 10-streak beyond your backtested maximum consecutive losses, or beyond your backtested maximum drawdown, is a red flag whatever the generic table says.

### How do I know if my losing streak means my strategy is broken?

Run the verdict procedure. Look up your expected longest streak for your win rate and sample size, compute both labelled probabilities, and then compare against your own backtest — live streak versus backtested maximum consecutive losses, and live drawdown versus backtested maximum drawdown. Either maximum breached means pause and review. Apply the 20-trade floor first: below about 20 trades since the last review, the only verdict is "not enough data". Then branch: normal band means trade the plan at normal size, the grey zone means reduced size with no new discretionary tweaks until a win at reduced size, and a red flag means stop, review out of sample, and paper-trade the review.

### Should I stop trading after 3 losses in a row?

Separate the two decisions. The session rule is to stop the session after 2 consecutive losses or on hitting the daily loss limit, whichever comes first — so yes, a session can be over well before 3 losses, and that is a session decision, not a strategy verdict. The strategy verdict is a different decision, made over your full sample with the table, both probabilities, and your backtest maximums. Stopping a session does not mean your strategy is broken, and a normal-band streak does not override a session stop.

### Does a win become more likely after several losses?

No. This is the gambler's fallacy. Under the independence baseline, each trade's odds are unchanged by previous results, so the probability that the next trade loses is still q, whatever the streak so far. A win is not due after losses. The caveat is that real strategies can cluster losses when the regime changes, positions correlate, or execution drifts — and clustering is a reason to review, not a reason to believe a win is owed.

### How much should I risk per trade so a losing streak does not ruin me?

The widely cited convention is about 1–2% of the account per trade, shown here with the compounded survival math rather than as a guarantee. On a Rs 1,00,000 account, charges excluded, 10 losses in a row cost 9.56%, leaving Rs 90,438, at 1% risk per trade, and 18.29%, leaving Rs 81,707, at 2% risk per trade. No risk level guarantees survival, and the real cost is higher once charges are included. For the sizing maths, see [how to size positions after a losing streak](/articles/how-to-size-positions-after-a-losing-streak/) and the [position size tool article](/articles/position-size/); they are not re-taught here.

### How many trades do I need before judging a strategy?

At least about 20 trades since the last review before any verdict at all — and below that floor, the only verdict is "not enough data — keep size small, keep logging". A 3-loss streak inside 5 trades tells you almost nothing. For the full treatment of how many trades validate a strategy, see [how many trades you need to validate a strategy](/articles/how-many-trades-to-validate/); this article gives the short answer only.

## Risk and Limitations: What This Verdict Cannot Tell You

This verdict is a baseline with stated limits, and those limits matter as much as the table. The table and all probabilities assume independent trades with a constant win rate; clustered losses, regime change, correlated positions, and execution drift all break that baseline, so a streak that clusters with a market change is reviewed even when its length looks normal. The survival figures exclude charges, slippage, and partial wins, so real costs are higher than the Rs balances shown. The 1–2% risk convention is a convention, not a guarantee of survival. The verdict procedure itself is this article's editorial procedure, not a market statistic. And no number here is a return projection, a promise of survival, or a claim about what any other trader will experience.

Use the procedure as it is designed to be used: look up, label both probabilities, check your own backtest maximums, respect the 20-trade floor, and act on the branch you land in. A streak is normal until your own numbers say otherwise — and when your own numbers say otherwise, believe them over the generic table.

---

*Risk disclosure: Trading involves substantial risk of loss. Past and backtested performance do not guarantee future results, and no streak-length table or verdict procedure can remove the risk of losing capital. Trade only with money you can afford to lose, and consider professional advice before acting on any strategy discussed here.*

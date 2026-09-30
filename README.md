# Tradingmaster

An AdSense-ready trading education and calculator platform for **Indian traders** —
genuine utility, original content, risk-first education. No "get rich quick" claims, ever.

## What's inside

- **Crypto futures position-size calculator** — built for Indian crypto futures traders
  on Delta Exchange India: maker/taker fees, 18% GST on fees, funding estimates,
  and an optional 1% TDS toggle. See `docs/crypto-futures-calculator-spec.md`.
- **Indian options total-cost calculator** — every real-life charge: STT, GST,
  exchange transaction charges, SEBI turnover fee, stamp duty, brokerage.
  See `docs/options-cost-calculator-spec.md`.
- **Free beginner trading course**, option trading guides, stop-loss & risk
  management, trading psychology — original, substantial articles.
- **Trust pages**: About, Contact, Privacy Policy, Terms, Disclaimer,
  Advertising Disclosure.

## Project plan

See `docs/project-plan.md` for phases and the AdSense-readiness checklist.

## Tech

Static HTML/CSS/JS site — full control, fast loading, modern trading UI with
3D touches and animations. 100 rotating trading quotes on the homepage.

## Status

🚧 Phase 1 in progress — site shell, both calculators, trust pages, initial content.

## Fee research notes

Exchange/broker fee structures change. Both calculators ship with **editable
fee-rate overrides**, and the specs in `docs/` record the sources and dates
each figure was verified against.

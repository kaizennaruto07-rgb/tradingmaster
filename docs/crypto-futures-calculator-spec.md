# Crypto Futures Position-Size Calculator — Spec

Target user: **Indian crypto futures traders on Delta Exchange India**.
Fees are included *in advance* when computing position sizing and risk/reward.

## Fee structure (researched 2026-09-30)

| Item | Value |
|---|---|
| Maker fee | 0.02% of notional |
| Taker fee | 0.05% of notional |
| Fee base | Full notional (not margin), charged on entry **and** exit |
| GST | 18% on the trading fee |
| All-in maker cost | 0.0236% per side |
| All-in taker cost | 0.059% per side |
| Funding baseline | 0.01% per 8 hours (±0.05% clamp mechanics; per-symbol intervals may vary) |
| Reported max leverage | up to 100× on BTC/ETH (minimum-size info not fully verified) |

Caveats:
- No verified public VIP-tier table was found — the calculator must allow
  **fee-rate overrides** because exchange rates may change.
- TDS applicability to INR-settled crypto futures was disputed among sources,
  so the calculator uses an optional **1% TDS toggle, default OFF**, with a
  consult-a-tax-professional disclaimer.

## Required inputs

Entry price, stop-loss price, take-profit price, account risk (₹ or %),
leverage, order type per side (maker/taker), holding period (for funding),
optional TDS toggle, fee-rate overrides.

## Required outputs

- Position size (contracts) and notional value
- Margin required
- Entry fee + GST, exit fee + GST
- Funding estimate for the holding period
- Round-trip cost
- Gross and net P&L
- Effective risk:reward **after costs**
- Breakeven price move
- Optional TDS effect

## Self-test (must pass)

- ₹100,000 notional, 10× leverage, taker entry and exit
- Expected: ₹50 fee + ₹9 GST per side → **₹118 round-trip cost**

## References

- https://www.delta.exchange/support/solutions?articleId=80001177869
- https://global.delta.exchange/support/solutions/articles/80001140285-fees-on-options-and-futures-trading
- https://global.delta.exchange/support/solutions/articles/80001014551-summary-of-changes-made-to-funding-mechanism-for-perpetual-contracts
- https://github.com/delta-exchange/user-guide/blob/HEAD/docs/tutorials/perpetual-contracts.md

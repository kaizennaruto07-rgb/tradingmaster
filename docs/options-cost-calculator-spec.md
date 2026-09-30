# Indian Options Total-Cost Calculator — Spec

Target user: **Indian options traders**. Accounts for every real-life cost:
STT, GST, exchange charges, SEBI fee, stamp duty, brokerage.

## Charge structure (researched 2026-09-30)

| Item | Value |
|---|---|
| Brokerage (Zerodha default) | ₹20 per executed order per side |
| STT on options sale | 0.15% of sell premium turnover |
| STT on exercised ITM option | 0.15% of intrinsic value |
| NSE options transaction charge | 0.03553% per side |
| SEBI turnover fee | ₹10/crore per side |
| Stamp duty | 0.003% on buy turnover |
| GST | 18% of (brokerage + exchange transaction charges + SEBI fee), per leg |
| BSE selector rates (proposed) | 0.005% most equity options; 0.0325% Sensex/Bankex |

Notes:
- Intraday and positional option charges are otherwise the same.
- Zerodha auto-square-off warning: ₹50 + GST per order.
- No DP charges for F&O.
- Broker selector includes Zerodha plus **editable brokerage** for other brokers.
- ⚠️ Verify Zerodha brokerage and the SEBI rate against Zerodha's official
  charge page before public launch (consistent across consulted sources,
  but re-check at launch).

## Required outputs

- Brokerage, STT, exchange fee (buy & sell), SEBI fee, stamp duty, GST (buy & sell)
- Total charges
- Gross P&L and net P&L
- Breakeven sell price
- Warning about the ITM-expiry **"STT trap"**

## Self-test (must pass)

- Buy 50 @ ₹100; sell 50 @ ₹120
- Gross P&L: ₹1,000 → total charges **₹60.98** → net P&L **₹939.02**
- Breakeven: **₹101.22**

## References

- NSE circular NSE/FA/73061 (2026-02-27) — revision in transaction charges:
  https://avantiscdnprodstorage.blob.core.windows.net/legalupdatedocs/53156/NSE-issued-a-circular-regarding-the-revision-in-Transaction-Charges-February272026.pdf
- Budget 2026 STT coverage:
  https://news.webindia123.com/news/Articles/Business/20260201/4411435.html
  https://www.newkerala.com/news/a/except-fo-stt-rates-remain-same-others-income-243.htm
- SEBI turnover fee / GST reference:
  https://avantiscdnprodstorage.blob.core.windows.net/legalupdatedocs/53129/Bombay-Stock-Exchange-notified-regarding-Payment-of-SEBI-Turnover-Fees-across-segments--including-applicable-GST-February272026.pdf

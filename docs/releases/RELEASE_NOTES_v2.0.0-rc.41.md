# K2E Local v2.0.0-rc.41 — Household Timeline & Bill History

Release date: 2026-08-30

## What changed

- Added **Household Timeline**, a local history workspace for modeled monthly snapshots.
- Added month selection and one-click save/replace for the current K2E household model.
- Retains up to 24 snapshots locally, including modeled kWh, modeled cost, rate, device count, and home profile.
- Added month-over-month modeled cost comparison and plain-language trend context.
- Added timeline context to **Home Pulse**.
- Added **What changed over time?** to the local AI Advisor cockpit.
- Added per-month removal and a clear-history action.

## Guardrails

- Timeline history stays in browser localStorage under `k2e-v2-history`.
- Snapshots are K2E planning records, not verified utility-bill history.
- No cloud sync, account system, telemetry, or external AI service was added.
- RC40 seasonal forecasting and the existing deterministic household calculations remain intact.

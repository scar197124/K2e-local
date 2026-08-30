# K2E Local — Next Handoff

Current build: **v2.0.0-rc.44**

## Product structure

K2E Local is now one unified guided application. There is no Simple Mode / Advanced Mode split.

The guided household setup and live estimate are the primary experience. Deeper tools live below under **Explore your energy** and use the same household state.

## Locked foundation

- Guided household setup
- Electricity rate and local utility-file import
- Recommended device setup
- Live estimate, estimate quality, top energy users, and savings guidance
- Adjust Devices quick editor with bounded internal scrolling

## RC2 changes

- Removed duplicate mode navigation and duplicate advanced overview.
- Fixed desktop grid reflow by anchoring setup and estimate side by side and placing Adjust Devices in a dedicated full-width row.
- Replaced blank Add Device creation with categorized presets using editable typical wattage/runtime/duty-cycle values.
- Preserved optional smart-home, AI Advisor, rates/schedules, and reports tools in the unified application.

## RC19 AI Advisor foundation

- Structured local Advisor Snapshot now separates facts, estimates/defaults, imported values, calculated values, and unknowns.
- Deterministic K2E calculations remain the numeric source of truth.
- AI Advisor ranks no more than three useful recommendations and can return **No urgent change flagged**.
- Advisor UI exposes confidence, device input quality, rate source, and local-calculation status.
- `window.K2EAdvisorSnapshot` is the future handoff point for consent-controlled connected AI.

## RC20 Smart Home lock candidate

- Smart Home is manual-first; connection is optional.
- The card now distinguishes **Not connected**, future **Smart Insights**, and separate future **Controls**.
- Connection does not imply control.
- Permission scope is disclosed before future integrations are added.
- Current thermostat, plug, and lighting toggles remain planning scenarios only and do not control devices.
- Provider connection is intentionally not simulated in this release.


## RC37 stabilization pass

- Reconciled release metadata that had drifted across the repository.
- Standardized the active build label to `v2.0.0-rc.39`, matching the newer application code markers already present in `app.html`.
- Rotated the service-worker cache to the RC37 release key.
- Restored the GitHub Pages validation/deployment workflow expected by the repository.
- No household calculations, device behavior, utility parsing, Smart Home planning, AI Advisor logic, rates/schedules logic, reports logic, or persistence model were intentionally changed in this pass.

## Next testing focus

- Desktop: Apartment → Adjust Devices → close/reopen; confirm no blank columns or estimate reflow.
- Mobile/tablet: confirm setup, estimate, and Adjust Devices stack cleanly.
- Add Device: test presets, custom device, edit values, remove device, and persistence after refresh.
- Utility import: verify the bounded importer and imported-rate summary remain stable.


## RC38 evolution checkpoint
- Added Home Pulse for whole-house status, projected cost, largest-load focus, and a local planning score.
- Added What-If Lab for non-destructive device wattage/runtime and upgrade-cost scenarios.
- Added Savings Missions with local completion progress and scenario-to-mission handoff.
- New evolution UI is isolated in `assets/k2e-evolution-rc38.css` and `assets/k2e-evolution-rc38.js`.
- Existing setup, devices, utility import, Smart Home, AI Advisor, rates, and reports remain intact.

## RC40 seasonal bill forecasting

- Added a local seasonal forecast layer with Summer, Winter, Spring/Fall, current, and custom climate-load modes.
- Seasonal factors only affect recognized heating/cooling device names.
- Added Home Pulse forecast signals, Advisor seasonal reasoning, Savings Mission handoff, and What-If Lab handoff.
- No external weather/utility API and no mutation of the saved household model.


## RC41 household timeline

- Adds a local Household Timeline tab beside Bill Forecast and Rates.
- Users can save or replace a modeled monthly snapshot for a selected month.
- Up to 24 snapshots are retained under `k2e-v2-history` in localStorage.
- Each snapshot records modeled kWh, modeled cost, current rate, device count, and home profile.
- The latest two snapshots produce a transparent month-over-month comparison.
- Home Pulse receives a timeline status/trend insight.
- AI Advisor adds “What changed over time?” and explains that rate, device inputs, and seasonal assumptions may contribute.
- Timeline entries are planning snapshots, not imported utility bills, and are removed if browser storage is cleared.

### RC41 testing focus

- Save a snapshot for two different months and verify the trend calculation.
- Replace a snapshot for the same month and confirm there is only one entry for that month.
- Remove one month and clear all history.
- Verify Home Pulse trend text updates after history changes.
- Verify Advisor “What changed over time?” works with zero, one, and two snapshots.
- Verify mobile timeline rows stack without horizontal page scrolling.

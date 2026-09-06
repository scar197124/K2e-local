# K2E Local v2.0.0-rc.45

Release date: 2026-09-06

## What changed

- Refreshed the public `index.html` landing experience with the approved K2E Local visual direction, balanced dark/light presentation, and a clear path into the planner.
- Rebuilt the internal application UI as one cohesive experience while preserving the existing K2E household setup and calculation logic.
- Kept the low-friction setup flow: Apartment, Townhouse, House, or Custom; bedrooms; household size; and electricity rate.
- Reworked K2E Insights, estimate presentation, and the detailed tools workspace so the inside now belongs to the same visual family as the front door.
- Tightened the internal header and clarified the difference between passive status information and real actions.
- Kept Light/Dark mode and Start over as explicit actions; Start over remains hidden until a household has actually been started.
- Removed browser-style reset confirmation dialogs from the startup/reset experience. Start over now performs a one-click clean reset of K2E household/planning data while preserving the theme, so a fresh state returns to 0 kWh and $0.00 until the user selects a home type or adds a device.
- Preserved the existing device model, utility import, Smart Home planning, AI Advisor, rates and schedules, reports, forecast, timeline, goals, persistence, and offline behavior.
- Updated README and release-prep documentation to match the final RC45 UI direction.
- Confirmed the root public entry point, `sitemap.xml`, and `robots.txt` are included for deployment.

## Public entry and discovery files

- `index.html` — public landing page / root entry
- `app.html` — K2E Local planner
- `sitemap.xml` — includes the production root and planner URL
- `robots.txt` — allows indexing and points crawlers to the production sitemap
- `manifest.json` — installable app metadata
- `sw.js` — offline application shell

## Scope

This remains a UI, presentation, and release-hardening pass. The K2E calculation engine and household logic were intentionally not redesigned.

- Final blank-start correction: first load and Start over now begin with no home, bedroom, or people selection; rate/cost/energy are zero; and stale preview household state is migrated away once so prior 214.4 kWh test data cannot reappear automatically.

### Synchronized household model fix
- The primary estimate now renders directly from the core household model before advanced-tool UI updates, preventing the estimate from remaining at zero while device charts or Home Pulse have already updated.
- Added a shared `k2e-state-changed` signal so Home Pulse, Advisor, Forecast, Timeline, Smart Energy Hub, Goal Mode, UI polish, and solar comparison refresh from the same saved household state.
- Fresh/reset state remains fully blank: no home, bedroom, people, rate, devices, energy, cost, or energy score is carried in.
- Selecting Apartment, Townhouse, or House now creates the household preset while leaving Bedrooms visibly unselected until the user chooses a bedroom count; that selection refines the same device model.
- Top energy users, primary monthly energy, Home Pulse monthly use/score, and deeper tools are kept in sync from one local household state.

- Full cost wiring correction: the app remains completely zeroed before planning begins, but selecting a home type or adding a device now activates a clearly labeled typical planning rate when no rate has been entered. This removes disconnected $0.00 values from Estimated Cost, Cost per Day, Rate Used, Home Pulse Projected Cost, Forecast, Goals, Advisor, Smart Home scenarios, solar comparison, and reports.
- Typical time-of-use planning defaults are also activated only after planning begins so the Rates & Schedules estimate is not left at zero while the household model is active.
- State schema advanced to `rc45-full-wire-4` so stale zero-rate preview state cannot survive into this corrected build.

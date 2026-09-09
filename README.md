# K2E Local

![K2E Local — Plan household energy privately and offline](assets/k2e-local-social-preview.png)

**Kilowatts to Efficiency**

K2E Local is a local-first household energy simulator for planning electricity use, estimating costs, comparing scenarios, and reviewing appliance insights privately on your device.

[**Launch K2E Local →**](https://nrg-roan.vercel.app/)

**Local-first · Offline-capable · No account required**

## What it does

- Models household devices and electricity use
- Estimates daily and monthly energy costs
- Compares saved homes and scenarios
- Highlights major energy contributors
- Produces structured local guidance and action plans
- Keeps household data in the browser unless the user exports it

## One guided application

K2E Local now uses one connected experience instead of separate modes. The redesigned internal interface keeps the original low-friction setup — Apartment, Townhouse, House, or Custom; bedrooms; household size; and electricity rate — then reveals deeper tools only when the user asks for them.

The internal presentation has been refreshed to match the new K2E Local front door while preserving the existing household model, calculations, persistence, device logic, forecast, timeline, goals, advisor, smart-home planning, and reporting behavior.

## Privacy and offline use

K2E Local is designed to work locally in the browser. After the first successful load, the application shell and bundled chart library can operate offline. No account is required.

Household planning data stays in the browser by default. The current K2E Advisor uses the household values already stored locally and does not require sending household data to an external AI service. Any future online AI connection should remain separate, off by default, and explicitly consent-controlled.

## K2E Advisor

K2E Advisor turns the household model already stored on the device into practical, plain-language guidance. It can identify the largest modeled loads, point out assumptions worth verifying, surface runtime and scheduling checks, compare applicable Smart Home planning scenarios, and recommend which K2E area to review next.

Advisor guidance is derived from the same local household state used by the estimate, Home Pulse, Forecast, Goals, Smart Home planning, and reports. It is guidance for planning—not a diagnosis of real-world appliance behavior.

## Planning boundary

K2E is a household energy planning and estimation tool. It is not a utility bill, an electrical-safety diagnostic, a measurement instrument, or a guarantee of savings. Real usage can differ from modeled results because of appliance condition, weather, occupancy, behavior, utility tariffs, and other factors.

## Deployment

This repository is prepared for GitHub Pages through the included GitHub Actions workflow.

1. Upload the contents of this folder to the repository root.
2. Commit and push to the `main` branch.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. GitHub Pages will publish the repository URL after the workflow completes.

The current official hosted build is [https://nrg-roan.vercel.app/](https://nrg-roan.vercel.app/). GitHub Pages is an additional supported deployment path.

The public entry page is `index.html`; the simulator is `app.html`.

### Public and discovery files

- `index.html` — root landing page / public entry
- `app.html` — K2E Local planner
- `sitemap.xml` — production sitemap for the landing page and planner
- `robots.txt` — crawler policy and sitemap pointer
- `manifest.json` — installable app metadata
- `sw.js` — offline application shell

No special Vercel-only index file is required for this static build; the root `index.html` is the deployment entry point.

## Local preview

Run the repository through a local HTTP server so the service worker can operate:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Validation

```bash
node scripts/validate-release.mjs
sha256sum -c SHA256SUMS.txt
```

## Current release

**v2.0.0-rc.45 — Consolidation + Visual Refresh**

- Introduces a redesigned public landing experience and a cohesive internal visual system while keeping the K2E engine and household logic unchanged.
- Preserves the simple guided home setup as the primary entry point, with estimates and deeper tools presented progressively.
- Tightens the internal header and clearly separates passive privacy/local status from real action buttons.
- Improves context handoffs between Home Pulse, What-If Lab, Savings Missions, Advisor, Timeline, Smart Energy Hub, Forecast, and Goal Mode.
- Tightens mobile spacing, card density, and primary-action hierarchy for faster scanning on smaller screens.
- Keeps the existing household, measurement, forecast, timeline, mission, and goal data models unchanged.
- Adds no new major feature layer; this release is focused on consistency, clarity, visual polish, and preserving the simple K2E workflow.
- Stabilizes the Detailed Workspace so longer Home Pulse, Devices, Smart Home, Advisor, and related sections remain reachable instead of being clipped.
- Tightens the landing-page privacy/insight highlight strip so it uses less vertical space while preserving all five messages.
- Clarifies K2E Advisor as local household-model guidance and makes its recommended next action easier to scan.

See [`docs/releases/RELEASE_NOTES_v2.0.0-rc.45.md`](docs/releases/RELEASE_NOTES_v2.0.0-rc.45.md).

## Documentation

The K2E Local wiki is versioned with the repository so documentation can keep improving without changing the locked application runtime.

Start here: [`docs/wiki/Home.md`](docs/wiki/Home.md)

The wiki covers the current RC45 product state, local-first and privacy principles, blank-start behavior, planning assumptions and rates, Detailed Workspace, K2E Advisor, validation boundaries, and the roadmap for additional documentation pages.

## Project notes

Development handoff details are available in [`docs/NEXT_HANDOFF.md`](docs/NEXT_HANDOFF.md).

## Licensing

No open-source license has been selected. Add a `LICENSE` file before inviting unrestricted reuse or outside contributions.

## Social preview

Current recommended asset: `assets/k2e-local-social-preview.png`.

The README banner and site social metadata use the same approved artwork so the project presents consistently on GitHub and when shared.


## Interface notes

- **Front door:** the landing page uses the approved K2E Local home-energy visual with matching dark and light treatments.
- **Inside K2E:** the household setup, estimate snapshot, K2E Insights, and detailed workspace now share one visual language.
- **Status vs. actions:** Runs locally, No account, and Private by design are informational status labels. Light/Dark mode and Start over are the primary header actions.
- **Start over behavior:** the reset action remains hidden until a household has actually been started. One click clears the active K2E household/planning data while preserving the selected theme, returning Monthly energy and Estimated cost to zero until the user selects a home type or manually adds a device.

### Blank-start behavior

A fresh RC45 session and **Start over** now begin with no selected home type, no bedroom selection, no people selection, a $0.00/kWh manual rate, no devices, 0.0 kWh monthly energy, and $0.00 estimated cost. The bedroom selector remains disabled until Apartment, Townhouse, or House is chosen. This build also uses a blank-start state schema so stale household data from earlier RC45 previews is not silently restored on first load.

- All internal views share the same local household state: the main estimate, Top Energy Users, Home Pulse, Advisor, Forecast, Smart Energy Hub, Goals, and reports refresh together after household changes.

### Full household cost wiring

RC45 now keeps the true blank-start behavior while ensuring cost-dependent views become live as soon as planning begins. Before a home or device is selected, household use, cost, rate, and projections remain at zero. When the user selects Apartment, Townhouse, House, Custom, or adds a device manually, K2E activates a typical planning rate of $0.18/kWh when no utility rate has been entered yet, along with typical time-of-use planning values (peak $0.24/kWh, off-peak $0.12/kWh, 40% peak share). The rate remains clearly labeled as a typical planning value and can be replaced at any time with a manual or imported utility rate.

That same saved household state drives the primary estimate, cost per day, rate used, Home Pulse projected cost, Forecast baseline/projected bill, Goals, Advisor, Smart Home planning, solar comparison, and reports.

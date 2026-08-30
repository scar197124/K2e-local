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

K2E Local now uses one connected experience instead of separate modes. Start with the guided household estimate, then use optional device controls, smart-home planning, AI guidance, rates and schedules, and reports when needed.

## Privacy and offline use

K2E Local is designed to work locally in the browser. After the first successful load, the application shell and bundled chart library can operate offline. No account is required.

## Deployment

This repository is prepared for GitHub Pages through the included GitHub Actions workflow.

1. Upload the contents of this folder to the repository root.
2. Commit and push to the `main` branch.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. GitHub Pages will publish the repository URL after the workflow completes.

The current official hosted build is [https://nrg-roan.vercel.app/](https://nrg-roan.vercel.app/). GitHub Pages is an additional supported deployment path.

The public entry page is `index.html`; the simulator is `app.html`.

## Local preview

Run the repository through a local HTTP server so the service worker can operate:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Validation

```bash
node scripts/validate-release.mjs
```

## Current release

**v2.0.0-rc.45 — Consolidation Pass**

- Unifies navigation labels, action wording, badges, and workspace styling across the existing K2E experience.
- Improves context handoffs between Home Pulse, What-If Lab, Savings Missions, Advisor, Timeline, Smart Energy Hub, Forecast, and Goal Mode.
- Tightens mobile spacing, card density, and primary-action hierarchy for faster scanning on smaller screens.
- Keeps the existing household, measurement, forecast, timeline, mission, and goal data models unchanged.
- Adds no new major feature layer; this release is focused on consistency, clarity, and polish.

See [`docs/releases/RELEASE_NOTES_v2.0.0-rc.45.md`](docs/releases/RELEASE_NOTES_v2.0.0-rc.45.md).

## Project notes

Development handoff details are available in [`docs/NEXT_HANDOFF.md`](docs/NEXT_HANDOFF.md).

## Licensing

No open-source license has been selected. Add a `LICENSE` file before inviting unrestricted reuse or outside contributions.

## Social preview

Current recommended asset: `assets/k2e-local-social-preview.png`.

The README banner and site social metadata use the same approved artwork so the project presents consistently on GitHub and when shared.

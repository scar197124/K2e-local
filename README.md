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

**v2.0.0-rc.24 — Landing Page Balance & Border Light**

- Raises landing-page border contrast across the shell, panels, cards, and assurance elements.
- Adds restrained blue/green edge light so the landing page feels brighter without changing its structure.
- Moves the local/privacy assurance and guided-start message into a balanced two-column row beneath the hero/launch area.
- Stacks that assurance row cleanly on smaller screens.

See [`docs/releases/RELEASE_NOTES_v2.0.0-rc.24.md`](docs/releases/RELEASE_NOTES_v2.0.0-rc.24.md).

## Project notes

Development handoff details are available in [`docs/NEXT_HANDOFF.md`](docs/NEXT_HANDOFF.md).

## Licensing

No open-source license has been selected. Add a `LICENSE` file before inviting unrestricted reuse or outside contributions.

## Social preview

Current recommended asset: `assets/k2e-local-social-preview.png`.

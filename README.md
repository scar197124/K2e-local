# K2E Local

![K2E Local — Plan household energy privately and offline](assets/k2e-local-readme-banner.jpg)

**Kilowatts to Efficiency**

[**Launch K2E Local →**](https://scar197124.github.io/K2E-Local/)

![Local-first](https://img.shields.io/badge/Local--first-yes-20c997) ![Offline capable](https://img.shields.io/badge/Offline-capable-20c997) ![No account required](https://img.shields.io/badge/Account-not%20required-20c997)

K2E Local is a privacy-focused household energy simulator for estimating electricity use and cost, comparing scenarios, reviewing appliance insights, and building practical local action plans. Household data remains in the browser unless the user deliberately exports it.

## Current release

**v1.12.5 — Metadata, README, and Release Consistency Polish**

- Adds complete Open Graph and X/Twitter image metadata with accessibility text.
- Adds a cache-busted social-preview URL for more reliable refreshes.
- Cleans the README and adds a direct launch link and trust badges.
- Synchronizes `VERSION`, `manifest.json`, service-worker cache naming, release notes, and validation.
- Adds a compact README banner and a repeatable release-preview checklist.
- Does not change the interface layout or calculation engine.

See [`RELEASE_NOTES_v1.12.5.md`](RELEASE_NOTES_v1.12.5.md).

## Main capabilities

- Simple and Advanced planning modes
- Household and appliance energy estimates
- Daily, monthly, and annualized cost projections
- Scenario comparison and saved local homes
- Ranked actions, transparent assumptions, and confidence guidance
- Printable/downloadable local reports
- Multiple themes and accessible chart views
- Offline application shell after the first successful load

## Privacy and offline boundary

K2E Local is a static, local-first application. Saved homes, scenarios, preferences, and estimates stay in browser storage unless they are explicitly exported. Chart.js is bundled locally, and the service worker caches the application shell for offline reuse.

## Deploy to GitHub Pages

1. Upload the contents of this folder to the repository root.
2. Preserve `.github`, `.nojekyll`, `assets`, `docs`, and `scripts`.
3. Commit and push to the `main` branch.
4. In **Repository Settings → Pages**, select **GitHub Actions** as the source.
5. For the GitHub repository card, upload `GITHUB_SOCIAL_PREVIEW_UPLOAD.png` under **Settings → Social preview**.

The public landing page is `index.html`; the simulator is `app.html`.

## Local preview

A service worker requires HTTP instead of opening files directly:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Validation

```bash
node scripts/validate-release.mjs
```

The validator checks required files, release-version consistency, social metadata, service-worker cache naming, and core historical modules.

## Release checklist

Use [`RELEASE_PREVIEW_CHECKLIST.md`](RELEASE_PREVIEW_CHECKLIST.md) before each public deployment.

## Documentation

- [`SOCIAL_PREVIEW_SETUP.md`](SOCIAL_PREVIEW_SETUP.md)
- [`SECURITY.md`](SECURITY.md)
- [`docs/NEXT_HANDOFF.md`](docs/NEXT_HANDOFF.md)
- Historical release notes are retained in the repository root.

## Licensing

No open-source license has been selected. Add a `LICENSE` file before inviting unrestricted reuse or outside contributions.

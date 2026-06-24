# K2E Local

Current build: v1.7.2 — Offline Charts and Clarity Polish

**Kilowatts to Efficiency**

K2E Local is a local-first home energy simulator with appliance insights, accessible charts, offline support, and privacy-focused analysis.


## v1.7.2 — Offline Charts and Clarity Polish

- Bundles Chart.js locally so charts work without an internet connection.
- Adds the local chart library to the service-worker application shell.
- Replaces visible “AI Advisor” wording with clearer “Structured Advisor” language while preserving existing internal IDs and behavior.
- Adds a landing-page trust line: runs locally, no account, and household data stays on this device.
- Clarifies what improves estimate confidence: device details, usage hours, electricity rate, and schedules.
- Preserves calculations, modes, themes, saved homes, scenarios, and browser-stored data.

## v1.6.0 — Brand Foundation

- Renames the former MyVera/NRG project to K2E Local.
- Introduces new K2E Local wordmark and app mark assets.
- Updates public UI, metadata, manifest, service worker, documentation, sitemap, and robots directives.
- Preserves legacy local-storage keys so existing browser data remains available after the rename.
- Keeps simulator behavior and chart logic unchanged.

## v1.5.32 brand consistency

- Replaced the legacy NRG landing-page image with the K2E Local wordmark.
- Matched landing-page and application-header branding.
- Updated icons, build metadata, manifest version, and service-worker cache.


## v1.5.32

- Added a compact save-status indicator.
- Added a non-destructive Reset view action that closes transient menus and editors.
- Hardened duplicate mode-control cleanup.
- Added recovery text for empty contributor areas.
- Preserved the v1.5.32 layout and feature set.

## v1.5.32 panel containment

- Component Breakdown now has a fixed internal viewport with sticky headers and totals.
- Top Contributors now has a fixed internal viewport with a sticky heading.
- Overflow scrolls inside each panel instead of increasing page height.
- Mobile portrait uses a compact stack; mobile landscape uses a wider side-by-side layout where space allows.

# K2E Local Simulator

**Baseline release:** v1.5.32  
**Deployment target:** GitHub Pages  
**Architecture:** static HTML/CSS/JavaScript, local-first

K2E Local is a household energy planning dashboard for modeling devices, estimating daily and monthly electricity use, projecting cost, comparing energy shares, and reviewing local Energy Advisor guidance.

## Baseline status

This repository is the frozen **v1.5.32 GitHub base**. It includes:

- Welcome page and single-card dashboard
- Simple and Advanced modes
- Light, Dark, Ocean, Solar, Sunburst, and High Contrast themes
- Home presets and custom devices
- Donut / Bar chart switch with Top 10 / All controls
- Components Breakdown and ranked Top Contributors
- Local Energy Advisor foundation
- Mobile-responsive layouts
- Local preference and device persistence
- Accessibility foundation: keyboard focus, reduced motion, larger text, live announcements, and structural checks
- Offline shell through a service worker

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root, preserving `.github`, `.nojekyll`, `assets`, `docs`, and `scripts`.
3. Commit and push to the `main` branch.
4. In **Repository Settings → Pages**, choose **GitHub Actions** as the source.
5. The included workflow validates and deploys the static site.

The public entry page is `index.html`; the simulator is `app.html`.

## Local preview

A service worker requires HTTP rather than opening the file directly. From the repository root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Validation

With Node.js installed:

```bash
node scripts/validate-release.mjs
```

This checks required files, metadata alignment, local asset references, and basic release markers.

## Offline boundary

Chart.js 4.4.0 is bundled at `assets/chart.umd.js` and cached with the application shell. The landing page, simulator, and charts can run without a live network connection after the first successful load.

## Next development layer

Read [`docs/NEXT_HANDOFF.md`](docs/NEXT_HANDOFF.md). The recommended next layer is **v29.0 Product Architecture**, beginning with named homes, scenario comparison, import/export, and structured onboarding. A future advisor layer should follow only after the data model is stable.

## Licensing

No open-source license has been selected. Add a `LICENSE` file before inviting unrestricted reuse or outside contributions.


## Homes, scenarios, and data portability

K2E Local v1.5.32 adds named local homes, independent scenarios, duplicate/rename/archive controls, and validated JSON import/export. Scenario changes remain local to the active browser unless explicitly exported.


## v1.5.32 Mode Integrity
- Landing-page Simple/Advanced choice is authoritative.
- In-app mode switching was replaced with a mode badge and Return-to-Welcome action.
- Simple Mode hides scenarios, schedules, import/export, detailed breakdown, and advanced advisor controls.
- User data remains stored locally when changing modes.

## v1.5.32

- Removes the empty Component Breakdown shell from Simple Mode.
- Restores a live Energy Snapshot and Quick Actions workspace.
- Keeps Component Breakdown available in Advanced Mode only.

### v1.5.32
- Theme-safe horizontal bar labels in Simple Mode.
- Light Mode now uses dark, high-contrast device names, values, and axis text.
- Dark Mode preserves bright chart labels and grid visibility.
- The chart card receives a clearer visual frame without changing its layout.


## v1.5.32
- Hardened horizontal bar-chart labels, values, grids, borders, and tooltips across Light, Dark, Ocean, Solar, Sunburst, and High Contrast themes.


## v1.5.32
- Simplified the application header to one non-clickable current-mode badge and one **Change mode** action.
- Removed duplicate Simple/Advanced header controls that could conflict with the landing-page mode choice.
- Preserved the locked Simple/Advanced mode behavior and all dashboard layouts.


## v1.5.32 recovery

- Restores the stylized K2E Local landing-page wordmark on top of the v1.5.26 stability base.
- Replaces canvas-rendered device names with normal HTML horizontal bars and labels.
- Device labels inherit the active theme text variable and remain readable across all themes.


## v1.5.37
- Bar chart viewport now fits the visible rows exactly.
- Removed phantom bottom space and clipping inside the bar card.
- Internal scrolling begins only after seven device rows.


## v1.5.37 Stable UI Restore

This build restores the exact v1.5.34 user interface and removes the later entry/cache experiments.

## v1.5.43 production UI cleanup
The customer-facing build now hides unfinished/internal interface elements by default: the roadmap/trajectory panel, local accessibility diagnostic, visible build chip, smart-device preview entry point, and online-provider preview. Their implementation remains in the source for later development and testing.


## v1.5.43 UI simplification
- Removed the non-functional Bar Thickness and Category Spacing controls.
- Kept the working Donut Cutout control.
- Removed obsolete listeners and saved-preference fields for the deleted controls.


## v1.5.43 chart appearance simplification
- Removed the non-working Bar Thickness control and its saved preference/event code.
- Kept Donut Thickness as the only chart appearance adjustment.
- Chart Appearance is shown only in Donut view and can be collapsed with a working Show/Hide toggle.

## v1.5.44 chart UI and mobile polish

- Improved Donut and Bar view switching with larger, clearer controls.
- Added a short live description of the selected chart view.
- Added a Reset appearance button for Donut Thickness.
- Tightened mobile chart spacing and touch targets.
- Collapsed Chart Appearance uses less vertical space when controls are hidden.
- Updated the service-worker cache for the new release.


## v1.6.0 UI QA Polish
- Clearer chart-view active states and focus indicators.
- Renamed the remaining chart option to Donut Appearance.
- Reset Thickness is disabled at the default value and activates only after adjustment.
- Reduced visual weight of the appearance card and improved mobile chart-header stacking.
- Added reduced-motion handling for chart-view button transitions.

# K2E Local v2.0.0-rc.25

Release date: 2026-08-08

## Mobile containment fix

- Corrected a mobile width mismatch where **Explore Your Energy** could render wider than the guided cards above it.
- Prevented wide internal content from shifting the entire K2E interface sideways during a horizontal swipe.
- Preserved intentional horizontal scrolling for the detailed device-control table, but contained that movement inside the table wrapper.
- Added `min-width: 0` / `max-width: 100%` containment across the energy-tool shell, navigation, sections, workspaces, and scroll bodies.

## Scope

No planning calculations, household state logic, Smart Home behavior, AI Advisor behavior, or landing-page layout were changed.

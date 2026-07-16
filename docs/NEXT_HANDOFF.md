# K2E Local v1.10.0 — Next Handoff

Current release adds a local ranked Household Action Plan and a printable/downloadable Energy Report. The implementation is appended in `app.html` under `k2e-v110-action-report-script` and preserves the existing workspace schema.

Recommended next work: real-device testing, report-print testing across Safari/Chrome/mobile, wording refinement, and calculation audit. Avoid adding cloud services until the local workflow is proven.

# K2E Local v1.8.3 Handoff

## Current product direction
K2E Local is a private household energy decision tool. The immediate priority is clarity and trust, not additional feature breadth.

## Test this journey
1. Open Advanced Mode.
2. Add a device, runtime, and electricity rate.
3. Duplicate the current scenario.
4. Change one input in the duplicate.
5. Compare current setup with proposed change.
6. Confirm the result clearly distinguishes estimate, range, confidence, and uncertainty.

## Regression checks
- Simple Mode must not show scenario comparison.
- Existing localStorage data must load without migration.
- Home and scenario selectors must continue working.
- Comparison must reject identical scenario selections.
- Mobile layouts must stack without horizontal overflow.
- Light and dark themes must preserve contrast.

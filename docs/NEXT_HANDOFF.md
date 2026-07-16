# K2E Local v1.8.1 Handoff

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

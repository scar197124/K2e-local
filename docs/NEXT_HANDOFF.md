# K2E Local — Next Handoff

Current build: **v2.0.0-rc.21**

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

## Next testing focus

- Desktop: Apartment → Adjust Devices → close/reopen; confirm no blank columns or estimate reflow.
- Mobile/tablet: confirm setup, estimate, and Adjust Devices stack cleanly.
- Add Device: test presets, custom device, edit values, remove device, and persistence after refresh.
- Utility import: verify the bounded importer and imported-rate summary remain stable.

# K2E Local v2.0.0-rc.2

## Unified guided application

- Removed the Simple Mode / Advanced Mode split from the application and landing page.
- Preserved the guided household setup and live estimate as the primary K2E flow.
- Reframed deeper features as optional tools under **Explore your energy**.
- Removed the duplicated advanced overview.

## Layout stability

- Locked the desktop layout into explicit grid areas so **Tell us about your home** and **Your estimate** stay aligned.
- **Adjust devices** now occupies its own full-width row and retains bounded internal scrolling, preventing blank columns and row-height reflow.

## Device presets

- **Add device** now opens a compact preset picker instead of creating a blank row immediately.
- Added categorized presets for kitchen, laundry, climate, entertainment, computers, always-on equipment, and common household devices.
- Presets provide typical planning wattage, runtime, and duty-cycle values and remain editable after insertion.
- Added a custom-device option for equipment not listed.

Typical values are planning assumptions, not measurements. Users should replace them with manufacturer or measured values when available.

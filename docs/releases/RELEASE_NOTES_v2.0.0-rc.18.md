# K2E Local v2.0.0-rc.18

## Four-choice guided home selection

- Added **Custom** beside Apartment, Townhouse, and House in **Tell us about your home**.
- All four choices use the same visible **Selected** state and only one home type can be active at a time.
- Adding a device before choosing a home type still automatically selects **Custom**.
- Selecting Custom manually keeps the current device list intact.
- Switching from Custom to Apartment, Townhouse, or House no longer deletes user-added devices. K2E keeps the existing devices and adds only missing suggested devices for the selected home type.
- Desktop shows the four home choices as one balanced row; smaller screens use a clean 2×2 layout.
- Custom is described as **Build your setup manually** so it has a clear purpose rather than duplicating another start option.

No energy formulas, utility-import behavior, Smart Home logic, AI Advisor logic, or rate calculations changed in this release candidate.

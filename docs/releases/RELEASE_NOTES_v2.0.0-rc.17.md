# K2E Local v2.0.0-rc.17

## Custom household flow finalization

- Removed the visible **Start empty** home option to eliminate a duplicate setup path.
- Home presets are now optional shortcuts rather than a required first step.
- Adding the first device without choosing Apartment, Townhouse, or House automatically creates a **Custom household**.
- Custom households use only the devices the user adds and no longer display misleading “choose a home first” messaging.
- Existing saved device lists with no home type are normalized into the Custom household state on load.
- Selecting a home preset after building a custom household protects the existing device list: the user can add non-duplicate suggested devices, replace the current list, or keep the custom setup.
- Estimate, Insights, Smart Home, AI Advisor, and reports continue to work with custom households.
- Updated zero-device copy so users can begin either from a home preset or by adding devices manually.

No energy calculation formulas, utility-import behavior, or Device Controls math changed in this release candidate.

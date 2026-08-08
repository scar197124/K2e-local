# K2E Local v2.0.0-rc.15

## Start Over reliability fix

- Fixed Start Over so confirming the action explicitly removes the persisted household state before rebuilding a clean model.
- Preserves the current theme while clearing home selection, devices, rates, imported utility state, and temporary panels.
- Returns the user to the first guided setup step and Device Controls as the default Explore Your Energy tool.
- Added validation checks for the persistent-state reset path.

No energy calculation formulas or device presets changed in this release.

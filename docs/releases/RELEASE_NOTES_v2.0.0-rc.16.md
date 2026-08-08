# K2E Local v2.0.0-rc.16

## Device Controls scanability polish

- Added compact visual device icons beside device names.
- Tightened the Watts, Hours/day, Quantity, and Duty columns to use table space more efficiently.
- Added clearer sticky-header unit hints: W, h/day, count, %, and kWh/mo.
- Added a subtle **Typical preset** marker when a catalog device still matches K2E's default wattage, runtime, and duty-cycle assumptions.
- Bounded Hours/day to 24 and Quantity to 99 in Device Controls.
- Preserved sticky column headers, sticky device names, internal scrolling, and all existing energy calculations.

No energy calculation formulas or utility-import behavior changed in this release candidate.

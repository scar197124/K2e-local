# K2E Local Advanced Mode Startup Flicker Fix

The Advanced Mode workspace previously rendered legacy wording first and replaced it after startup:

- `Homes & scenarios`
- `Compare plans without overwriting your original`

It then changed to the guided Homes & Changes wording, producing a visible overlap/flicker.

This build places the final guided wording, field labels, and action labels directly in the original HTML and runs the enhancement pass immediately at DOM ready.

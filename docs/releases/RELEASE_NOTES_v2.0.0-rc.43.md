# K2E Local v2.0.0-rc.43

Release date: 2026-08-30

## What changed

- Added a five-part Smart Energy Hub summary strip: Devices, Measured, Smart, Estimated, and Data confidence.
- Elevated the two highest-current-load device cards so the Hub communicates priority faster.
- Standardized Smart Hub action language around Test savings and Remove reading.
- Added source/confidence explanations to measurement badges without changing measurement storage or device modeling.
- Improved empty-state guidance and added a direct Add devices handoff.
- Reduced spacing and control density on mobile while preserving readable tap targets.

## Safety / behavior

This release is a UI polish pass. It does not add cloud accounts, hardware control, or external APIs. CT/imported/smart-device context remains local and separate from the original watts/runtime model.

# K2E Local v1.8.4

## Corrected vertical energy bars

- Removed the legacy horizontal-bar override that was still running after chart initialization.
- Device bars now reliably render as vertical columns rising from the bottom.
- Added 18% headroom above the highest-energy device.
- Preserved the fixed donut-sized chart viewport.
- Additional devices use horizontal scrolling instead of increasing card height.
- Added a version query to app launch links and advanced the service-worker cache key.

# K2E Local v2.0.0-rc.20

## Smart Home trust and permission clarity

This release tightens the Smart Home card around a manual-first, consent-first model without adding a fake device integration.

### Smart connection status

- The Smart Home workspace now starts at **Not connected**.
- Manual household planning remains fully usable with no smart-home connection.
- The primary future-facing action is **Connect for Smart Insights**.
- The local release explicitly says when provider connections are not yet available rather than pretending a device was connected.

### Connection is separate from control

K2E now states **Connection does not enable control.** A future Controls action is kept hidden until a compatible connection actually exists. This preserves a staged model:

1. Manual planning
2. Optional read-only Smart Insights with explicit permission
3. Separate, explicit control permission when supported

### Permission disclosure

A compact **What K2E can access** disclosure explains the manual, Smart Insights, control, and disconnect expectations before any future integration is introduced.

### Planning scenarios remain hypothetical

The Smart thermostat, Smart plugs, and Smart lighting options are clearly labeled as planning scenarios. They continue to adjust the modeled estimate only; they do not send commands to real devices.

No household formulas, device calculations, utility import behavior, home-selection behavior, or AI Advisor calculations changed in this release candidate.

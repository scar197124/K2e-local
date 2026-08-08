# K2E Local v2.0.0-rc.8

## Richer K2E Insights

This release turns K2E Insights into a fuller interpretation layer while keeping the calculation and device model unchanged.

### Changes

- Renamed the guided results action to **View Insights**.
- Expanded K2E Insights with dynamic **Accuracy check**, **Schedule check**, **Always-on use**, and **Household model** sections.
- Accuracy guidance now reminds users to verify device power (watts), hours of use, and quantity.
- K2E identifies devices that still match typical preset assumptions and distinguishes them from customized values.
- Schedule guidance highlights longer-running devices and reminds users to account for weekday, school/work, weekend, and seasonal routines.
- Always-on guidance summarizes devices entered near 24 hours per day and their approximate share of estimated use.
- Household-model guidance reflects whether the electricity rate is manual, typical, or imported.
- Existing top opportunity and secondary device-review suggestions remain in the Insights card.
- No household energy formula, utility import parser, or Device Controls behavior changed.

### Release metadata

- Version synchronized to v2.0.0-rc.8.
- Offline cache rotated to k2e-local-v2.0.0-rc.8.

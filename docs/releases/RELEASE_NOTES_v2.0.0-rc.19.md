# K2E Local v2.0.0-rc.19

## Structured local AI Advisor layer

This release moves the AI Advisor from generic top-load messaging to a structured, deterministic planning pipeline.

### Advisor Snapshot

K2E now builds a local `K2EAdvisorSnapshot` from the active household state. It contains:

- household inputs and rate source
- per-device input provenance
- calculated monthly kWh and cost
- largest modeled load and share
- long-runtime and always-on observations
- typical-preset versus customized device counts
- an overall data-confidence level
- up to three ranked recommendations

### Trust and provenance

Advisor inputs are classified as user-provided/customized, imported, estimated/default, calculated, or unknown. The AI Advisor UI now surfaces data confidence, device-input quality, rate source, and the fact that energy math is calculated locally.

### Deterministic-first policy

K2E calculations remain the source of truth. The advisor does not invent replacement energy math; it interprets the calculated household model, explains why an item matters, suggests the next check, and attaches a confidence label.

### Recommendation policy

- Main guidance is capped at three recommendations.
- Highest-leverage or highest-uncertainty items are prioritized first.
- Long runtimes and always-on loads can become schedule/watch recommendations.
- The advisor may explicitly say **No urgent change flagged** when customized inputs do not show a clear high-leverage issue.
- Always-on guidance warns against switching essential or safety-critical equipment solely for energy savings.

### Future integration hook

The current snapshot is exposed locally as `window.K2EAdvisorSnapshot`. This provides a clean structured payload for a future online AI layer while preserving the existing consent-controlled architecture.

No household formulas, device energy calculations, utility-import calculations, or home-selection behavior changed in this release candidate.

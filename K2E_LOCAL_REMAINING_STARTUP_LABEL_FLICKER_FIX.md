# Remaining Advanced Mode startup label flicker fix

Removed the legacy workspace decorator that temporarily replaced the stable version helper with “Protected original” during startup.

The version field now retains one consistent label from the first render:

- Which version are you viewing?
- Current setup or one saved change.

Protected-original behavior for rename/remove controls remains enforced; only the competing label rewrite was removed.

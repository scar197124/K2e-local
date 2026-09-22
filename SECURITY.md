# Security and Privacy

K2E Local v2.0.0-rc.45 is a client-side static application. User-entered device information and preferences are stored locally in the browser unless a future feature explicitly states otherwise.

## Quantrae privacy boundary

Quantrae is K2E's privacy boundary. The current release operates in **Local only** mode: household planning, utility-file parsing, backup creation, and backup restoration happen on the user's device. K2E does not require an account and does not send household data to an online AI service.

Any future external data exchange must be off by default, identify the destination and purpose in plain language, and obtain explicit consent immediately before sending data. Connection for insights must never silently enable device control.

Do not add online AI, analytics, authentication, or cloud synchronization without documenting:

- Data collected
- Destination and retention
- User consent
- Deletion controls
- Error and outage behavior

Imported files must be treated as untrusted data and validated before use. Never evaluate imported content as JavaScript.


## Import validation

K2E Local validates schema version, home/scenario counts, device fields, numeric ranges, and file size before accepting JSON. Imported text is parsed as data and is never executed.

Full-backup restoration accepts only the documented K2E storage keys, enforces file and entry size limits, parses every stored value as JSON, validates the current household schema and device bounds, and restores transactionally with rollback on failure.

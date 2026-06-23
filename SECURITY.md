# Security and Privacy

K2E Local v1.4.0 is a client-side static application. User-entered device information and preferences are stored locally in the browser unless a future feature explicitly states otherwise.

Do not add online AI, analytics, authentication, or cloud synchronization without documenting:

- Data collected
- Destination and retention
- User consent
- Deletion controls
- Error and outage behavior

Imported files must be treated as untrusted data and validated before use. Never evaluate imported content as JavaScript.


## Import validation

K2E Local validates schema version, home/scenario counts, device fields, numeric ranges, and file size before accepting JSON. Imported text is parsed as data and is never executed.

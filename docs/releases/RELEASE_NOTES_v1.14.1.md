# K2E Local v1.14.1

Release date: 2026-08-03

## What changed

- Tightened the bottom trust row in the social preview so **Local-first · No account · Works offline** stays fully visible in Facebook/mobile share crops.
- Re-exported the preview image with a new cache-busting filename: `assets/k2e-local-social-preview-v1.14.1.png`.
- Updated `index.html`, `app.html`, and the service worker to use the new preview asset.
- Bumped package metadata from **1.14.0** to **1.14.1**.

## Deployment note

Use the root URL `https://nrg-roan.vercel.app` in a fresh Facebook post after redeploy so platforms pick up the tightened preview image.

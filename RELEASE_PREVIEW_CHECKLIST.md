# K2E Local Release Preview Checklist

## Before pushing

- Run `node scripts/validate-release.mjs`.
- Confirm `VERSION`, `manifest.json`, release notes, and service-worker cache all use the same version.
- Confirm the social image exists at `assets/k2e-local-social-preview.png`.
- Confirm the README banner loads from `assets/k2e-local-readme-banner.jpg`.

## After GitHub Pages deploys

- Open the live landing page on desktop.
- Open the live simulator on desktop.
- Test the landing page on a phone.
- Reload once while online, then test an offline reload.
- Share the live GitHub Pages URL in a private message and confirm the image, title, and description appear.
- Confirm the GitHub repository Social preview setting still uses `GITHUB_SOCIAL_PREVIEW_UPLOAD.png`.
- When a platform shows an older image, use that platform's sharing debugger or wait for its cached preview to refresh.

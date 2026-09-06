# K2E Local v2.0.0-rc.45 Release Preview Checklist

## Before pushing

- Run `node scripts/validate-release.mjs`.
- Run `sha256sum -c SHA256SUMS.txt`.
- Confirm `VERSION`, `manifest.json`, release notes, and the service-worker cache use RC45 consistently.
- Confirm `index.html` is present at the repository root and links to `app.html`.
- Confirm `sitemap.xml` includes `https://nrg-roan.vercel.app/` and `https://nrg-roan.vercel.app/app.html`.
- Confirm `robots.txt` points to `https://nrg-roan.vercel.app/sitemap.xml`.
- Confirm the social image exists at `assets/k2e-local-social-preview.png`.
- Confirm the README banner uses `assets/k2e-local-social-preview.png`.
- Confirm Light/Dark mode works on both the landing page and planner.
- Confirm Start over is hidden before a household is started.
- Confirm there are no browser alert/confirm/prompt dialogs in the normal startup/reset flow.

## After deployment

- Open the root landing page on desktop and mobile.
- Open `/app.html` on desktop and mobile.
- Verify `/sitemap.xml` and `/robots.txt` return successfully.
- Reload once while online, then test an offline reload.
- Confirm the service worker upgrades to the RC45 cache and older caches are removed.
- Share the live URL privately and verify the social title, description, and preview image.
- Confirm the GitHub repository Social preview still uses `GITHUB_SOCIAL_PREVIEW_UPLOAD.png` if that repository setting is used.

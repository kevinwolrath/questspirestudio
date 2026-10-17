# Validation

- `npm ci --cache /tmp/questspire-npm`: passed, frozen lockfile unchanged.
- `npm run build`: passed (TypeScript + Vite).
- `npm run lint`: passed.
- `npm test`: 6 tests passed, including navigation, product routing, privacy,
  not-found routing, and missing-artwork fallback.
- Chromium against the production preview: no horizontal document overflow at
  360, 390, 768, 1024 and 1440px; screenshots at 390 and 1440px.
- Mobile menu opened and closed after selecting Our Worlds.
- Direct visits to /questforge, /dino-duel, /privacy, /about and an unknown route
  rendered the expected headings.
- At 390px with root font size 200%: no horizontal document overflow.
- Reduced-motion preference disables continuous tower animation.

Both original product images were subsequently supplied in a ZIP, extracted,
visually inspected and optimised to WebP. Full images total 774,612 bytes;
768px responsive variants total 242,390 bytes. All five viewport checks were
repeated with successful image decoding for both products before screenshots.
Screenshots now show the supplied artwork. Build, lint and all 6 tests passed
again after integration. Missing-image fallback behaviour remains tested.

Live-site inspection was blocked by an HTTP proxy 403. The selected branch
contained only the design brief, so the implementation was brought forward by
fast-forwarding to the fetched main commit 0084bb5a496376561daf873ba028b6f3d9fa38e0
before visual changes. React/Vite dependencies, lockfile, privacy wording, and
Cloudflare wrangler configuration were preserved. No deployment was performed.

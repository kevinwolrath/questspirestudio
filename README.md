# Questspire Studio

Responsive website for Questspire Studio and the QuestForge companion app. The studio name on the site is **Questspire Studio**. QuestForge is the product. The design mockup in `design/` still shows the earlier Questfire name and is a visual reference only.

## Scripts

```bash
npm install
npm run dev      # local development
npm run test     # menu and routing tests
npm run lint
npm run build    # typecheck and static build into dist/
npm run preview  # serve the production build
```

This project was built and checked with Node.js 24.18.1. Vite 8 requires Node.js `^20.19.0` or `>=22.12.0`. `.node-version` pins **24.18.1** for Cloudflare builds, matching the previously verified runtime and the test dependencies’ engine requirements.

## Cloudflare Workers

Cloudflare Workers Builds is connected to this repository. Production must use `main`; the design branch contains only the mockup.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: repository root
- Node.js version: 24.18.1 (from `.node-version`)
- Static output: `dist`

The committed `wrangler.jsonc` serves `dist` and enables `assets.not_found_handling: "single-page-application"`. Direct visits to `/questforge`, `/about`, and `/privacy` load the app; unknown navigation paths render the in-app not-found page. Do not restore the Pages `/* /index.html 200` rule in `public/_redirects`: Workers rejects it as an infinite loop.

The build runs once in the dashboard build step; Wrangler deploys the existing output without auto-configuring Vite. Pushes to `main` trigger a fresh build. No public hostname is hard-coded. Set the production domain in metadata when it exists. HTTPS comes from Cloudflare.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/#apps` | Home, product section |
| `/questforge` | QuestForge |
| `/about` | About the studio |
| `/privacy` | QuestForge privacy policy |
| anything else | Not found |

Header links are Our Apps, About, and Privacy. There is no Contact link until a real destination is supplied.

## Privacy policy

The page at `/privacy` keeps the wording retrieved on 11 October 2026 from [kevinwolrath/kevinwolrath privacy.html](https://github.com/kevinwolrath/kevinwolrath/blob/main/privacy.html). The policy’s own last-updated date is **19 September 2026**.

## Still needed before a public release

- An approved studio logo. The site uses an original mark for now.
- Approved hero artwork. The hero is an original illustration, not the mockup and not a photograph.
- Real QuestForge screenshots. The product cards are labelled previews and are not captures of the app.
- A contact destination, if Contact should appear in the header or footer.
- Public App Store and Google Play listing URLs. No store badges are shown.
- Confirmation of current iOS availability. The site does not claim Android or iOS availability. The privacy policy still mentions Google Play where that policy already did.
- The production domain, once chosen.

Fonts are Inter and Libre Baskerville, bundled from Fontsource under the SIL Open Font License. See `licenses/`.

## Verification

Checked in this workspace:

- `npm run lint` — passed with no warnings
- `npm test` — 5 tests passed (menu open/close, Escape, route changes, privacy wording, not-found page, no Questfire name, no Contact or store links)
- `npm run build` — passed
- Production preview at `http://127.0.0.1:4173`: `/`, `/questforge`, `/about`, `/privacy`, and `/missing-page` returned `200` HTML; the built JavaScript asset returned `text/javascript`. This historical preview check predates the Workers configuration; the Pages `_redirects` file has since been removed.
- Browser, emulated viewports: 1440, 1024×768, 768×1024, 390, and 360. No horizontal overflow. At 1024 and above the hero is two columns and the values are three across. Under 640 the menu button is 44×44, the nav is hidden until opened, and the hero text and actions come before the artwork.
- Mobile menu: opened, closed with Escape, and focus returned to the button. Choosing Explore QuestForge opened `/questforge`.
- Our Apps from the About page landed on `/#apps`.
- Privacy, About, and an unknown URL (`/not-a-page`) rendered the expected pages, including the preserved policy date.
- 200% root font size at a 1024px-wide viewport: sections stack to one column, the headline stays intact, and the page does not scroll sideways.

Not checked on a physical phone or tablet. Viewport checks used the browser’s device metrics.

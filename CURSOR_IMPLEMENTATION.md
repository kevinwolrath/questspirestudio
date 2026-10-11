# Cursor implementation brief: Questspire Studio

## Task

Build a responsive React website for Questspire Studio using the adjacent
`design/questspire-studio-mockup.png` as the visual reference. Implement working HTML,
CSS and components; do not display the entire mockup as a website background.
The repository currently contains a design reference, not an existing app.
Inspect the latest repository before scaffolding and preserve any work added
since this brief was written.

Deliver a production build suitable for Cloudflare Pages. Keep the implementation
simple enough to extend with interactive functionality later.

## Stack and structure

Use React, TypeScript and Vite, with React Router for page routes. Use normal CSS
with variables and component styles. Avoid a backend, account system, database
or heavyweight UI framework for this initial site. Pin compatible dependency
versions and commit the lockfile. Provide dev, build and lint scripts.

Suggested structure (adapt to existing project conventions if present):

- `src/components/`: Header, Footer, Button, Container, Hero, ProductFeature, Values.
- `src/pages/`: HomePage, QuestForgePage, AboutPage, PrivacyPage, NotFoundPage.
- `src/styles/`: tokens.css, global.css, component styles.
- `public/images/`: individually exported, approved artwork and product screenshots.
- `public/_redirects`: SPA route handling for Cloudflare Pages.

Use routes `/`, `/questforge`, `/about`, `/privacy`. Each route must work when
opened directly or refreshed. Set meaningful page titles and descriptions.

## Visual direction

Warm D&D tavern / adventurer's journal aesthetic. Light parchment against dark
walnut/leather panels, restrained antique brass decoration, ember orange and
burgundy accents. Make the content easy to read; decoration must not obscure
text or controls. The mockup is a visual direction, not a pixel-perfect mandate. The reference
image uses the earlier “Questfire Studios” name; use **Questspire Studio** in
all live website copy, metadata and branding. Keep the product name QuestForge.

Start with these CSS variables, then tune to match the reference:

```css
:root {
  --parchment: #f2dfbd;
  --parchment-light: #fbf1dc;
  --ink: #291b12;
  --walnut: #211710;
  --walnut-light: #34231a;
  --brass: #bc8a43;
  --ember: #b84917;
  --burgundy: #681e14;
  --text-on-dark: #fff3df;
  --text-muted: #67503c;
  --content-width: 1200px;
  --radius-control: 6px;
}
```

Use a readable serif such as Libre Baskerville for headings, and a clean sans
serif such as Inter for body text. Prefer locally hosted font files with their
license notices; system font fallbacks must remain usable. Load only necessary
weights. Use fluid heading sizes with `clamp()`, comfortable line height and
paragraph widths around 60–70 characters. Check actual colour contrast; adjust
these initial tokens where needed. Decorative gold is not automatically a
suitable small-text colour.

Use subtle borders and corner flourishes sparingly. Buttons need clear hover,
focus and active states. Text must stay real selectable HTML. Avoid gratuitous
animation; honour `prefers-reduced-motion`.

## Homepage content and order

1. Header: Questspire Studio wordmark/logo; links Our Apps (home product-section
   anchor), About and Privacy. Contact appears only when a real destination is
   configured. At narrow widths use an accessible navigation toggle.
2. Hero: eyebrow “TOOLS FOR YOUR NEXT ADVENTURE”; heading “Less bookkeeping.
   More adventure.”; description “Thoughtful companions for tabletop stories,
   built for players and Game Masters.” Primary link “Explore QuestForge” to
   `/questforge`; secondary “About the studio” to `/about`. Pair with warm
   original tabletop artwork (journal, dice, candlelight).
3. Featured product: heading “Meet QuestForge”; description “Keep your
   characters, campaigns and adventures close at hand.” Three benefits:
   Character sheets, Campaign reference, Adventure tracking. CTA “Discover
   QuestForge” to `/questforge`. Show product visuals alongside this text.
4. Values: “Made for the table”, “Your stories, organised”, “Built with care”.
   Keep descriptions short and avoid unsupported product promises.
5. Footer: studio identity, QuestForge Privacy Policy (`/privacy`), and the
   current copyright year. Add Contact only after its destination is supplied.

Do not invent testimonials, download counts, prices, release dates, company
registration details, addresses or contact emails. Do not add App Store or
Google Play badges until real public listing URLs are provided. QuestForge is
an Android/iOS companion, not a browser-based game. Confirm current iOS support
before presenting availability claims; use neutral copy while unconfirmed.

## Other pages

### QuestForge

Present the same product identity, its three supported feature areas and
approved real app screenshots. Link to `/privacy`. Do not promise functionality
that is not present in the app or advertise downloads without verified URLs.

### About

A short, editable introduction to Questspire Studio as a studio creating
companions for tabletop adventures. Avoid invented staff biographies, founding
dates, corporate information or credentials.

### Privacy

Provide a publicly accessible HTML privacy page at `/privacy`, with the policy's
actual last-updated date. The existing QuestForge policy source is
`https://github.com/kevinwolrath/kevinwolrath/blob/main/privacy.html`.
Retrieve and preserve the current policy wording. Do not draft or silently
rewrite legal claims. If the source is unavailable, flag that content as a
publication blocker rather than inventing a replacement. Never require login.

## Responsive behaviour

Use CSS Grid/Flexbox, fluid widths and `max-width`, not a fixed-size canvas.
Use content-driven layout adjustments around these starting breakpoints:

| Width | Layout |
| --- | --- |
| Under 640px | Single-column hero and product sections; mobile navigation; values stacked |
| 640–1023px | Comfortable tablet spacing; values may use two columns; stack product/hero when two columns become cramped |
| 1024px and above | Two-column hero and product sections; three values; centred content container |

On mobile, put the hero's heading and CTA before its artwork. Product text
should precede product screenshots. Maintain source order that also makes sense
for keyboard and screen-reader users. Use a single-column layout when space or
text zoom requires it, even if a nominal breakpoint would allow two columns.

Use gutters around 16px on small phones, 24px on tablets and 32px on large
screens. Header controls must remain reachable. The mobile menu toggle needs
an accessible name, `aria-expanded`, `aria-controls`, keyboard support and
visible focus. Close the menu after selecting a route and on Escape; if using
a modal drawer, handle focus correctly. Use buttons for toggles and links for
navigation. Aim for touch controls at least 44×44 CSS pixels.

Hero imagery must have a sensible crop at every size. Images need explicit
width/height or aspect ratios to avoid layout jumps; use responsive sizes and
lazy-load below-the-fold imagery. Decorative art has empty alt text; meaningful
product screenshots need concise descriptions. Keep ornamental textures out
of the accessibility tree.

Avoid horizontal page scrolling, clipped headings, tiny body text and rigid
phone mockup heights. Overlapping phone compositions are optional on desktop;
use a clean single screenshot or normal grid on mobile. At 200% text zoom the
navigation, buttons and body content must still work.

## Artwork and assets

The supplied PNG is a concept image. Its phone screens and logo are illustrated
concepts, not screenshots or an existing official studio logo. It also contains
an identifiable tabletop rulebook; do not reuse that book cover or product
branding as website artwork. Use original/approved generic fantasy imagery.

Use separate approved art, icons and real QuestForge screenshots. If final
assets are missing, use clearly named, tasteful placeholders and list them in
the handoff. Do not ship the full mockup, with its baked-in text, as a hero
image. Do not use unapproved third-party art or present fabricated app screens
as genuine captures. Preserve the original design reference in `design/`.

## Cloudflare Pages deployment

Use a static Vite build with no runtime server:

- Build command: `npm run build`.
- Build output directory: `dist`.
- Set a supported Node version matching the chosen Vite version (record it in
  `.node-version` and the deployment README).
- Supply SPA fallback handling so `/privacy`, `/questforge` and `/about` work
  on direct navigation. For example, `public/_redirects` can contain:

```text
/* /index.html 200
```

Verify emitted assets are served as assets and unknown URLs show the site’s
Not Found page. Do not leave a hard-coded `pages.dev` hostname in metadata;
configure the final public domain when known. HTTPS comes from Cloudflare.
Do not register a domain, connect accounts or deploy without the user's direction.

## Verification and delivery

Run the production build and lint. Check the site at 360px, 390px, 768px, 1024px
and 1440px widths, both relevant tablet orientations, and 200% text zoom. Check
keyboard navigation, focus visibility, the mobile menu and all links. Confirm
there is no horizontal page overflow. Verify direct-route refreshes against a
static preview with SPA handling, particularly `/privacy`.

Add tests only for meaningful behaviour such as the menu or routing; do not
create snapshot tests solely to mirror markup. Respect any repository rules
that govern browser automation. Distinguish checks actually run from those
still pending, and do not claim screenshots or device checks without evidence.

Deliver the website code, an implementation/deployment README, a list of
missing final assets/contact/store URLs, and exact verification results.
Keep incomplete legal content and unapproved imagery out of a public release.

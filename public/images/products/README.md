# Product artwork

User-supplied promotional artwork from the uploaded ZIP:

- `QuestForge Offline RPG Companion.png` → `questforge.webp`
- `Dino Duel_ Kids’ Crayon Card Adventure.png` → `dino-duel.webp`

Full images: 1536 × 1024, WebP quality 82. Each has a 768 × 512 variant named
`<product>-768.webp`. Combined full-size payload is approximately 775 KB; the
responsive variants total approximately 242 KB. No composition was cropped,
no artwork was generated, and the original uploads remain outside the checkout.

To replace artwork, convert the approved source to these WebP sizes and filenames.
Keep the full promotional composition. Update image dimensions in ProductArtwork
if the aspect ratio changes. The component uses responsive sources and contain
rather than crop, so embedded text and screenshots remain visible.

Product metadata and paths live in `src/content/products.ts`. Add another entry
and its detail route to extend the showcase. ProductArtwork handles missing images
with a designed title treatment. Do not substitute generated app screens or
invent store, release, or platform availability.

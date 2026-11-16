# Mars Outpost — Mission Trainer

A static, one-page showcase for the Roblox cooperative Mars outpost game. Feature copy is based on the supplied project brief and a skim of `OutpostSim.lua`; this is not a complete source-code audit. The mission's 98%/93% water-recovery values are game mechanics. The game's debrief is described as showing sourced NASA facts; this website does not independently verify those sources.

## Screenshots

The gallery currently uses original artwork placeholders, clearly labeled as not gameplay screenshots. Preview your own images locally at `https://winnet101.github.io/project-game-showcase/?edit=1`; these previews stay in your browser and do not publish files.

To publish screenshots, upload them to `assets/screenshots/` in the GitHub repository, then update the three `gallery` entries in `content.json`: set each `image` to its file path, write an accurate `caption`, and set `draft` to `false`. Commit both changes to `main`; GitHub Pages deploys automatically. Use images you have permission to share.

## Site files

- `index.html` — one-page layout and mission content
- `styles.css` — responsive editorial layout
- `script.js` — gallery rendering and local-only screenshot preview
- `content.json` — editable title, details, and gallery
- `assets/placeholder-*.svg` — decorative artwork, not game screenshots
- `.nojekyll` — serve static assets without Jekyll processing

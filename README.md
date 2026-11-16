# Mars Outpost — Mission Trainer

A static, one-page showcase for the Roblox cooperative Mars outpost game. Feature copy is based on the supplied project brief and a skim of `OutpostSim.lua`; this is not a complete source-code audit. The mission's 98%/93% water-recovery values are game mechanics. The game's debrief is described as showing sourced NASA facts; this website does not independently verify those sources.

## Screenshots

The page uses ten supplied screenshots: one launch-pad hero and nine WebP frames placed alongside the mission, power, hazard, and job sections. The duplicate `preview.png` was left out. The palette follows the game HUD: dark blue-black, Mars orange, and the yellow, teal, and green status colors.

To add or move a screenshot, upload it to `assets/screenshots/` and edit its entry in the `gallery` array in `content.json`. Set `image`, an accurate `caption`, and `section` to `mission`, `power`, `hazards`, or `jobs`. The hero image path is in `index.html`. Commit to `main`; GitHub Pages deploys automatically. Use images you have permission to share.

Preview mode at `https://winnet101.github.io/project-game-showcase/?edit=1` previews selected files locally in your browser. It does not upload or publish them.

## Site files

- `index.html` — one-page layout and mission content
- `styles.css` — responsive editorial layout
- `script.js` — gallery rendering and local-only screenshot preview
- `content.json` — editable title, details, and gallery
- `assets/screenshots/` — supplied gameplay screenshots, optimized as WebP
- `.nojekyll` — serve static assets without Jekyll processing

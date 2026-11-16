# Mars Outpost — Mission Trainer

A static, one-page showcase for the Roblox cooperative Mars outpost game. Feature copy is based on the supplied project brief and a skim of `OutpostSim.lua`; this is not a complete source-code audit. The mission's 98%/93% water-recovery values are game mechanics. The game's debrief is described as showing sourced NASA facts; this website does not independently verify those sources.

## Screenshots

The page now uses ten of the supplied screenshots: one launch-pad hero and nine gallery frames. The duplicate `preview.png` was left out. They are optimized WebP files in `assets/screenshots/`.

To add more screenshots, upload files to `assets/screenshots/` in GitHub, then add or update an entry in the `gallery` array in `content.json`: set `image` to the file path, write an accurate `caption`, and set `draft` to `false`. The hero image path is set in `index.html`. Commit to `main`; GitHub Pages deploys automatically. Use images you have permission to share.

Preview mode at `https://winnet101.github.io/project-game-showcase/?edit=1` previews selected files locally in your browser. It does not upload or publish them.

## Site files

- `index.html` — one-page layout and mission content
- `styles.css` — responsive editorial layout
- `script.js` — gallery rendering and local-only screenshot preview
- `content.json` — editable title, details, and gallery
- `assets/screenshots/` — supplied gameplay screenshots, optimized as WebP
- `.nojekyll` — serve static assets without Jekyll processing

# Project — Roblox showcase

A dependency-free, static one-page showcase. GitHub Pages can serve the files directly; no build step, package install, credentials, or game scripts are included.

## What is verified

The page uses the supplied display name **Project** and Roblox place ID **105448697403731**. The game-specific mechanics, player count, release/availability, and other feature details have not been verified. They are intentionally shown as unconfirmed rather than invented. Roblox access is subject to Roblox permissions and experience settings.

The gallery graphics are original abstract placeholders, **not screenshots**. The current sky/space-inspired visual direction is decorative artwork, not a representation of gameplay or a claim about game features.

## Preview locally

Open the deployed page with `?edit=1` appended to its URL (for example, `https://example.github.io/project-game-showcase/?edit=1`). Choose an image next to a gallery frame to preview it in that browser. Preview files stay local and are not uploaded or saved. The public page has no upload panel.

## Publish real screenshots with GitHub's website

1. In this repository, select **Add file → Upload files**.
2. Upload your image files into `assets/screenshots/` (create the folder first if needed). Use simple names such as `frame-01.webp`, `frame-02.webp`, and `frame-03.webp`. Use screenshots you have permission to publish.
3. Commit the upload to the repository's default branch.
4. Edit `content.json` on GitHub. For each entry in `gallery`, replace its `image` value with the uploaded path, e.g. `assets/screenshots/frame-01.webp`. Update the caption to accurately describe the image and set `draft` to `false` when it is a real screenshot.
5. Commit the edit. GitHub Pages will update after its normal deployment delay.

The visible “PLACEHOLDER · NOT A SCREENSHOT” labels intentionally remain so while the gallery is placeholder art. When replacing an image, update the gallery label in `script.js` if you want the label to change. Do not leave a placeholder label on a real screenshot, and do not label concept art as gameplay.

## Update project details

`content.json` is the editable source for the display title, short description, details, coverage list, and gallery captions/image paths. Only change factual details after confirming them. For each item, `draft: true` marks unconfirmed information; update `status` and `draft` in the coverage list to match what has actually been checked. The Roblox link in `index.html` is based on the supplied place ID.

## Files

- `index.html` — page structure, metadata, Roblox links, local preview controls
- `styles.css` — responsive visual design and accessibility styles
- `script.js` — content rendering and local-only screenshot previews
- `content.json` — editable copy and explicit information coverage
- `assets/placeholder-*.svg` — original decorative placeholders, not in-game images
- `.nojekyll` — tells GitHub Pages to serve files without Jekyll processing

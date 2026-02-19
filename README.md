# Symbiotic Enterprise Localization System — Interactive Gallery Intro

A single-page, framework-free portfolio website for **Duygu TAŞ** that presents the **Symbiotic Enterprise Localization System (EN→TR | EN→IT)** as a minimal white-gallery experience.

## Concept

The page is designed like a curated exhibition journey:
1. **Landing** — a calm entry point with a “Grab your ticket” CTA.
2. **Ticket** — a museum-style admission card with download link to a ticket PDF.
3. **Doors** — two gallery doors slide open to reveal the experience.
4. **Intro** — a typewriter sequence with human typo-and-correction (“Welcom” → “Welcome”).
5. **Exhibition wall** — six expandable exhibits explaining the operating model.

The visual direction is intentionally restrained: white surfaces, subtle borders, soft shadows, and smooth transitions.

## Project structure

- `index.html` — all scenes and exhibit content.
- `styles.css` — minimal gallery styling, responsive layout, transitions, and animations.
- `script.js` — scene orchestration, door reveal, typewriter effect, and exhibit expand/collapse behavior.
- `assets/ticket.pdf` — downloadable placeholder ticket file.

## Run locally

Because this site is static, you can open `index.html` directly.

Or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Open your published URL:
   - `https://<your-username>.github.io/<repo-name>/`

No backend or build process is required.

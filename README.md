# Sultan Kirigha — Portfolio (React)

A React + Vite conversion of the single-file HTML portfolio page. Same content, same design, same scroll/hover animations — just split into components.

## Structure

```
src/
  App.jsx                 — assembles all sections in order
  index.css                — global styles (converted 1:1 from the original <style> block)
  main.jsx                 — React entry point
  assets/
    hero-portrait.png      — hero illustration
    joy-peek.png            — "enough product talk" illustration
  components/
    Reveal.jsx              — reusable scroll-in-view animation wrapper (replaces the old
                               vanilla-JS IntersectionObserver script)
    Nav.jsx
    Hero.jsx
    Question.jsx            — "01. Prioritisation" + the process flow
    Trust.jsx                — "02. Trust, safety & fraud"
    AI.jsx                   — "03. AI in my product work"
    Technical.jsx            — "04. Working with technical teams"
    Discovery.jsx            — "05. Product discovery"
    Example.jsx              — "06. A real example" (case study)
    Joy.jsx                   — "Enough product talk" personal section
    Closing.jsx
    Footer.jsx
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to sanity-check the production build locally
```

The build output goes to `dist/`, ready to deploy anywhere that serves static files (Vercel, Netlify, GitHub Pages, S3, etc).

## Notes

- All content (copy, links, images) is carried over exactly from the HTML version, including the
  LinkedIn (`linkedin.com/in/sultan-kirigha`) and Email (`mailto:sultankirigha@gmail.com`) links in the closing section.
- The `<Reveal>` component respects `prefers-reduced-motion` the same way the original inline script did:
  if a visitor has that OS setting on, content just appears with no animation.
- The two illustrations live as real PNG files under `src/assets/` and are imported normally,
  rather than being inlined as base64 like they were in the single HTML file. This keeps the
  JS bundle lean and lets Vite handle caching/hashing for them properly.

# LocalClicks.eu

German landing page for a "Smart Website + local search marketing" service for local businesses in DACH. Owner: Gerrit Halfmann (halfmage). Modeled on the section structure of localclicks.ai, all copy is original German.

## Stack
- Astro 5, Tailwind 4 (`@tailwindcss/vite`), static output. No framework components, no client JS except the mobile nav toggle.
- `npm run dev` / `npm run build` -> `dist/`. Node 24.

## Where things live
- `src/data/site.ts`: ALL content (brand, price, nav, results, cases, testimonials, features, FAQ). Edit text here first.
- `src/pages/index.astro`: the landing page sections, in order: hero, platforms, problem, services (#leistungen), results (#ergebnisse), references, smart website, pricing (#preise), analysis form (#analyse), FAQ (#faq), final CTA.
- `src/pages/impressum.astro`, `datenschutz.astro`: legal drafts, noindex. `danke.astro`: form thank-you. `404.astro`.
- `src/layouts/Base.astro`: head, meta, OG, fonts, JSON-LD slot. `src/components/Header.astro`, `Footer.astro`.
- `src/styles/global.css`: Tailwind theme tokens and small utilities (`btn-*`, `card`, `check-list`, `cross-list`, `browser`).
- `public/og.png`: OG image, generated from an SVG with ImageMagick. `public/favicon.svg`.

## Rules
- Language: German, "du" form. Keep sentences short. No English marketing filler.
- Numbers in the results section come from Google Search Console (8 Sept 2026). Do not invent numbers. Ask Gerrit before changing them.
- Price 990 EUR/month is a PLACEHOLDER. Do not present it as final.
- Do not change legal pages without asking.
- Testimonials are translated from English originals on halfmage.com. Do not edit the wording.

## Deployment (VPS)
- `astro.config.mjs` has `site: "https://localclicks.eu"`. Canonicals, sitemap and JSON-LD use it. On any staging host (e.g. dev.halfmage.com) add `X-Robots-Tag: noindex` at the web server level.
- Static build: serve `dist/` with Nginx or Caddy. No Node process needed at runtime.
- The form (`#analyse`) currently uses Netlify Forms attributes (`data-netlify`). On the VPS this does nothing. Replace with an external form service or a small mail endpoint before going live. `action="/danke"` is the success page.
- Fonts load from Google Fonts. For strict DSGVO, self-host them and remove section 5 in `datenschutz.astro`.

## Open decisions (Gerrit owns these)
- Final monthly price. "du" vs "Sie". Contact email hello@localclicks.eu must exist. Client approval for testimonials. Legal review.

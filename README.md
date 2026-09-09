# LocalClicks.eu

Astro 5 + Tailwind 4 Landingpage. Deutsch. Statisch.

## Befehle

    npm install
    npm run dev       # http://localhost:4321
    npm run build     # dist/
    npm run preview

## Inhalt anpassen

Alle Texte, Preise, Referenzen, Testimonials und FAQ liegen in `src/data/site.ts`.
Seiten liegen in `src/pages/`. Layout in `src/layouts/Base.astro`.

## Offene Punkte

- Preis: 990 €/Monat ist ein Platzhalter (`site.price` in `src/data/site.ts`).
- E-Mail: hello@localclicks.eu muss existieren.
- Formular: nutzt Netlify Forms (`data-netlify`). Bei anderem Hosting Endpoint ändern.
- Schriften kommen von Google Fonts. Für DSGVO lokal einbinden (z. B. @fontsource) und Abschnitt 5 in `datenschutz.astro` entfernen.
- Impressum und Datenschutz: Entwurf. Rechtlich prüfen lassen.
- Testimonials: aus dem Englischen übersetzt. Freigabe der Kunden einholen.
- Zahlen im Abschnitt "Echte Zahlen" stammen aus der Google Search Console (Stand 8. September 2026).

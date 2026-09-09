export const site = {
  name: "AskMention",
  url: "https://askmention.com",
  tagline: "Lokale Sichtbarkeit für Dienstleister in Deutschland",
  title: "AskMention | Mehr lokale Anfragen aus Google, Google Maps und ChatGPT",
  description:
    "Smart Website plus lokales Suchmarketing für Dienstleister in Deutschland. Sichtbar in Google, Google Maps und KI-Suchen wie ChatGPT. Alles aus einer Hand, monatlich kündbar.",
  email: "hello@askmention.com",
  owner: "Gerrit Halfmann",
  ownerHandle: "@halfmage",
  ownerSite: "https://halfmage.com",
  ownerSince: 2005,
  // TODO: Preis bestätigen. Platzhalter.
  price: { monthly: 999, currency: "€" },
  nav: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Ergebnisse", href: "#ergebnisse" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const platforms = [
  "Google Suche",
  "Google Maps",
  "ChatGPT",
  "Google AI Overviews",
  "Perplexity",
  "Bing Copilot",
  "Apple Maps",
  "Gemini",
];

// Zahlen aus der Google Search Console, Stand 8. September 2026.
export const results = [
  {
    value: "3,0×",
    label: "mehr Klicks pro Monat aus der Google-Suche",
    note: "Praxis-Website, Mai 2025 bis August 2026",
  },
  {
    value: "4,9 Mio.",
    label: "Suchimpressionen in 16 Monaten für einen Kunden",
    note: "Google Search Console, verifiziert",
  },
  {
    value: "Platz 1",
    label: "für die wichtigsten lokalen Suchbegriffe",
    note: "Ernährungsberatung, Schermbeck / Dorsten",
  },
];

export const cases = [
  {
    name: "Existential Psychiatry",
    type: "Praxis · USA",
    domain: "existentialpsychiatry.com",
    chart: { key: "existentialpsychiatry", metric: "clicks" as const },
    text: "Branding, Website und SEO für eine psychiatrische Praxis. Inhalte so gebaut, dass sie für Suchanfragen mit hoher Absicht ranken.",
    metrics: [
      { v: "4,9 Mio.", l: "Impressionen" },
      { v: "3,0×", l: "Klicks / Monat" },
    ],
    hue: "#dfe9e4",
  },
  {
    name: "Ernährungsberatung Ute Becker",
    type: "Ernährungsberatung · Schermbeck",
    domain: "eb-becker.de",
    chart: null,
    text: "Neue Website für eine lokale Ernährungsberatung. Klare Struktur, klare Leistungen, klarer Weg zur Anfrage.",
    metrics: [
      { v: "Platz 1", l: "Name + Ort" },
      { v: "Neu", l: "seit 2026" },
    ],
    hue: "#f3e7d2",
  },
  {
    name: "Smella",
    type: "Konsumgüter · Deutschland",
    domain: "smella.de",
    chart: { key: "smella", metric: "impressions" as const },
    text: "Branding, Website und SEO für eine neue Marke. Von Tag eins für die Suche strukturiert.",
    metrics: [
      { v: "14×", l: "Impressionen / Monat" },
      { v: "4,9 %", l: "Klickrate organisch" },
    ],
    hue: "#e4e6f2",
  },
  {
    name: "Camino Network",
    type: "Plattform · Schweiz",
    domain: "camino.network",
    chart: null,
    text: "Designsystem und Website für eine Reise-Plattform. Komplexe Technik in verständlicher Sprache.",
    metrics: [
      { v: "534 Tsd.", l: "Impressionen" },
      { v: "120+", l: "B2B-Partner" },
    ],
    hue: "#dfe3ea",
  },
];

export const testimonials = [
  {
    quote:
      "Meine Website ist klar, verständlich und für meine Kunden gut strukturiert. Auch nach dem Start war Gerrit immer erreichbar, hat bei Problemen sofort geholfen und immer die neuesten Updates geliefert.",
    name: "Ute Becker",
    role: "Ernährungsberatung Ute Becker",
  },
  {
    quote:
      "Ich arbeite seit fast zwei Jahren mit Gerrit und schätze sein umfangreiches Wissen, seine kreative Problemlösung, sein professionelles Auftreten und dass ihm Qualität sichtbar wichtig ist.",
    name: "David Zacharias",
    role: "Inhaber, Existential Psychiatry",
  },
  {
    quote:
      "Mit Gerrit habe ich einen Entwicklungspartner und nicht nur einen Dienstleister. Die Zusammenarbeit war immer kundenorientiert, pünktlich und sehr engagiert.",
    name: "Reinhold Rapp",
    role: "CEO, GrowthBox",
  },
  {
    quote:
      "Gerrit ist engagiert, verantwortungsbewusst und liefert pünktlich oder früher. Er bringt Ideen ein, die die Bedürfnisse unserer Kunden besser treffen als wir ursprünglich dachten.",
    name: "Alesia Kunts",
    role: "CEO, LearnSlice",
  },
];

export const smartFeatures = [
  {
    title: "Online-Terminbuchung",
    text: "Kunden buchen selbst. Termine landen in deinem Kalender. Erinnerungen gehen automatisch raus.",
    icon: "calendar",
  },
  {
    title: "Bewertungen auf Autopilot",
    text: "Nach jedem Auftrag geht eine Bewertungsanfrage raus. Kein unangenehmes Nachfragen mehr.",
    icon: "star",
  },
  {
    title: "Anfragen direkt aufs Handy",
    text: "Formular, E-Mail, WhatsApp: jede Anfrage erreicht dich sofort. Nichts geht verloren.",
    icon: "phone",
  },
  {
    title: "Google Business Profile Pflege",
    text: "Öffnungszeiten, Fotos, Beiträge, Antworten auf Bewertungen. Dein Profil bleibt aktuell.",
    icon: "pin",
  },
  {
    title: "Sichtbar in KI-Suchen",
    text: "Inhalte und Struktur so aufgebaut, dass ChatGPT, Perplexity und Google AI dich empfehlen.",
    icon: "sparkle",
  },
  {
    title: "Klartext-Report jeden Monat",
    text: "Was bringt Anfragen, was nicht. In einer Seite, ohne Fachchinesisch.",
    icon: "chart",
  },
];

export const oldWay = [
  "1 bis 3 Monate Bauzeit",
  "Kein Marketing, kein SEO enthalten",
  "Änderungen dauern und kosten extra",
  "Statische Formulare, keine Automation",
  "Keine Bewertungs-Automation",
  "Nicht für KI-Suchen optimiert",
  "Rankt weder auf Maps noch in Google",
  "Sieht nach zwei Jahren alt aus",
];

export const newWay = [
  "Live in 7 Tagen oder weniger",
  "Lokales Suchmarketing inklusive",
  "Änderungen innerhalb von 48 Stunden",
  "Automationen, die Anfragen erhöhen",
  "Mehr 5-Sterne-Bewertungen automatisch",
  "Optimiert für Google und KI-Suchen",
  "Rankt auf Maps, in Google und in ChatGPT",
  "Design, das frisch bleibt",
];

export const faq = [
  {
    q: "Ist AskMention eine Software oder eine Agentur?",
    a: "Beides, und keins von beidem. KI übernimmt die Routinearbeit: Inhalte, Optimierung, Monitoring, Verzeichniseinträge. Ein Mensch, Gerrit Halfmann, prüft jeden Monat dein Konto, passt die Strategie an und trifft die Entscheidungen, die Software allein nicht treffen kann. Deshalb kostet AskMention einen Bruchteil einer klassischen Agentur und liefert trotzdem ein fertiges Ergebnis statt eines Dashboards.",
  },
  {
    q: "Was kostet AskMention?",
    a: `AskMention kostet ${site.price.monthly} ${site.price.currency} pro Monat. Keine Einrichtungsgebühr, keine Mindestlaufzeit, keine versteckten Kosten. Enthalten sind die Smart Website, Hosting in der EU, lokales SEO, Pflege des Google Business Profile, Optimierung für KI-Suchen, Bewertungs-Automation und ein monatlicher Report. Es gibt keine Zusatzpakete. Alles ist im Monatspreis enthalten.`,
  },
  {
    q: "Wie starte ich?",
    a: "Der erste Schritt ist eine kostenlose Sichtbarkeits-Analyse. Ich prüfe, wie dein Unternehmen aktuell in Google, Google Maps, KI-Suchen und Bewertungsportalen erscheint, und zeige dir, wo du Kunden an den Wettbewerb verlierst. Wenn es passt, füllst du ein kurzes Formular zu Leistungen, Einzugsgebiet und Wettbewerbern aus. Den Rest übernehme ich. Du brauchst keine technische Vorarbeit.",
  },
  {
    q: "Gibt es eine Vertragslaufzeit?",
    a: "Nein. AskMention ist monatlich kündbar. Ich binde niemanden, weil ich von den Ergebnissen überzeugt bin und weil gute Arbeit jeden Monat neu verdient werden muss. Lokales SEO baut allerdings aufeinander auf. Kunden, die sechs Monate oder länger dabei sind, sehen die stärksten Ergebnisse.",
  },
  {
    q: "Für welche Unternehmen ist das gedacht?",
    a: "Für lokale Dienstleister in Deutschland, Österreich und der Schweiz: Handwerksbetriebe, Praxen, Kanzleien, Studios, Beratungen, Pflegedienste, Gastronomie. Alle, deren Kunden zuerst 'in meiner Nähe' suchen. Weitere europäische Märkte folgen.",
  },
  {
    q: "Ist die Website DSGVO-konform?",
    a: "Ja. Hosting in der EU, keine Tracking-Cookies von Drittanbietern, datenschutzfreundliche Statistik ohne Cookie-Banner-Zwang, Impressum und Datenschutzerklärung inklusive. Für rechtliche Detailfragen empfehle ich trotzdem eine Prüfung durch einen Anwalt.",
  },
];

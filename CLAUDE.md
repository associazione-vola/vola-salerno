# VOLA Salerno — Contesto di Progetto

## Progetto

**Nome:** VOLA — Volontari per l'Ambiente  
**Scopo:** Sito web pubblico per un'associazione di volontariato ambientale e tutela degli animali con sede a Salerno. Il sito presenta l'associazione, racconta storie di animali salvati, gestisce le adozioni e offre un canale di contatto.  
**Tipo:** SPA (Single Page Application), mobile-first, completamente in italiano.

---

## Stack tecnologico

| Strumento | Versione | Ruolo |
|---|---|---|
| Vite | ^8.0 | Build tool e dev server |
| React | ^19.2 | Framework UI |
| TypeScript | ~6.0 | Tipizzazione |
| Tailwind CSS | ^4.2 | Styling (via plugin `@tailwindcss/vite`) |
| lucide-react | ^1.9 | Icone (nota: Facebook/Instagram/YouTube sono state rimosse dalla libreria — sostituiti con SVG custom in `SocialIcons.tsx`) |

> **Nota Tailwind v4:** la configurazione avviene tramite `@import "tailwindcss"` in `index.css` e il plugin `tailwindcss()` in `vite.config.ts`. Non esiste un file `tailwind.config.js` separato.

---

## Architettura

```
src/
├── App.tsx                     ← Root: compone Navbar + sezioni + Footer
├── index.css                   ← Import Tailwind + reset base
├── main.tsx                    ← Entry point React
├── data/
│   └── animals.ts              ← Dati mock animali (tipo Animal, successStories[], adoptionAnimals[])
└── components/
    ├── Navbar.tsx              ← Barra fissa in alto, hamburger menu su mobile
    ├── Hero.tsx                ← Sezione hero fullscreen con gradiente verde, statistiche e CTA
    ├── ChiSiamo.tsx            ← Missione, 4 card valori, banner statistiche
    ├── StorieSuccess.tsx       ← Griglia 3 colonne di storie a lieto fine (foto Unsplash)
    ├── InCercaDiCasa.tsx       ← Griglia adozioni con CTA mailto per ogni animale
    ├── Contatti.tsx            ← Form contatto (mailto), indirizzo, telefono, social
    ├── Footer.tsx              ← Footer con nav, contatti, social, copyright
    └── SocialIcons.tsx         ← SVG inline: FacebookIcon, InstagramIcon, YoutubeIcon
```

### Navigazione (anchor links)
`#hero` → `#chi-siamo` → `#storie` → `#adozioni` → `#contatti`

### Contatti mock usati nel sito
- Email generica: `info@vola-salerno.it`
- Email adozioni: `adozioni@vola-salerno.it`
- Email volontari: `volontari@vola-salerno.it`
- Tel: `089 234 5678` / Urgenze: `333 456 7890`
- Indirizzo: Via Irno, 45 – 84135 Salerno SA

---

## Stato del progetto

### Completato
- [x] Setup Vite + React + TypeScript
- [x] Configurazione Tailwind CSS v4
- [x] Installazione lucide-react
- [x] Componente `Navbar` (responsive, hamburger mobile)
- [x] Sezione `Hero` (gradiente verde, statistiche, CTA)
- [x] Sezione `Chi Siamo` (missione, valori, banner)
- [x] Sezione `Storie a Lieto Fine` (6 card con foto Unsplash)
- [x] Sezione `In Cerca di Casa` (6 animali adottabili, CTA mailto)
- [x] Sezione `Contatti` (form mailto, mappa info, social)
- [x] `Footer` completo
- [x] Dati mock in `src/data/animals.ts`
- [x] Build di produzione (`npm run build`) — OK, 0 errori
- [x] `git init` + commit iniziale
- [x] Remote GitHub configurato: `https://github.com/alessiobsc/vola-salerno.git`

### Comandi utili
```bash
npm run dev      # Dev server locale
npm run build    # Build produzione (output: dist/)
npm run preview  # Preview della build
```

---

## Prossimi Passi

<!-- Compilare qui le attività future -->

-
-
-

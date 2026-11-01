# VOLA – Volontari per l'Ambiente ODV

Sito ufficiale dell'associazione **VOLA – Volontari per l'Ambiente ODV**, Delegazione Regione Campania: **https://vola-salerno.org**

L'associazione si occupa della tutela degli animali e della difesa dell'ambiente nel territorio salernitano. Il sito è una pagina unica che racconta chi siamo, cosa facciamo e come aiutarci: adottare un animale, segnalarne uno in difficoltà, donare (bonifico, 5×1000, raccolte fondi) e contattarci.

Il sito è statico: **nessun backend, database, form o cookie**. L'unico trattamento di dati è quello tecnico dell'hosting (vedi [public/privacy.html](public/privacy.html)).

---

## Requisiti

- **Node.js 20.19 o superiore** (oppure 22.12+): richiesto da Vite 8 e ESLint 10
- **npm** (incluso in Node.js)
- Git

Le librerie si installano da sole con `npm install`: l'elenco è in `package.json` e le versioni esatte in `package-lock.json` (vanno entrambi committati).

## Avvio rapido

```bash
npm install        # installa le dipendenze
npm run dev        # sito di sviluppo su http://localhost:5173
npm run lint       # controllo del codice
npm run build      # controllo dei tipi + build di produzione in dist/
npm run preview    # serve la build di produzione in locale
```

Prima di pubblicare servono sempre `npm run lint` e `npm run build` senza errori.

---

## Tecnologie

| Pacchetto | A cosa serve |
|---|---|
| **React 19** + **react-dom** | interfaccia a componenti |
| **TypeScript 6** | tipi e controlli in fase di build |
| **Vite 8** + `@vitejs/plugin-react` | sviluppo locale e build |
| **Tailwind CSS 4** + `@tailwindcss/vite` | stile (classi nei componenti, nessun file di configurazione: si importa in `src/index.css`) |
| **lucide-react** | icone (quelle dei social sono SVG propri in `SocialIcons.tsx`) |
| `@vercel/speed-insights`, `@vercel/analytics` | misure anonime di velocità e visite, senza cookie |
| **ESLint** + `typescript-eslint` + plugin React | controllo del codice |

Hosting su **Vercel**; dominio e DNS su Cloudflare.

## Struttura

```
index.html              # meta tag SEO, dati strutturati (JSON-LD), testo per chi non esegue JavaScript
vercel.json             # header di sicurezza e Content-Security-Policy
src/
  main.tsx, App.tsx     # ingresso e ordine delle sezioni
  index.css             # Tailwind, font Tangerine, animazioni
  components/            # una sezione della pagina per file
    Navbar.tsx          # barra di navigazione
    Hero.tsx            # sezione iniziale e dati per il bonifico
    CinquePerMille.tsx  # info 5×1000
    ChiSiamo.tsx        # missione; compone i due pezzi qui sotto
    chi-siamo/
      ActivitiesChart.tsx   # grafico a ciambella delle attività
      QuoteCarousel.tsx     # carosello delle citazioni
    StorieSuccess.tsx   # galleria delle storie di adozione; compone i pezzi qui sotto
    storie/
      StoryCard.tsx         # card di una storia
      MoreStoriesCard.tsx   # ultima card, con i link ai social
      GalleryArrow.tsx      # freccia di scorrimento per il mouse
      useGalleryScroll.ts   # logica delle frecce e accenno di scorrimento iniziale
    AdozioniERaccolte.tsx # adozioni (Instagram) e raccolte fondi (GoFundMe)
    EmergenciesHub.tsx  # cosa fare se si trova un animale in difficoltà
    Contatti.tsx        # contatti e sede legale
    Footer.tsx
    SocialIcons.tsx     # icone Facebook, Instagram, WhatsApp
  data/
    contact.ts          # indirizzo, email, telefono, social, IBAN, codice fiscale: unica fonte per i componenti
    success-stories.ts  # dati delle storie di adozione
public/
  animali/              # foto delle storie (WebP, < 150 KB)
  fonts/                # font Tangerine, ospitato in locale
  privacy.html          # informativa privacy (pagina statica separata)
  llms.txt, robots.txt, sitemap.xml
  logo.svg, favicon.png, apple-touch-icon.png, og-image.jpeg, hero.webp, mobile_hero.webp
```

---

## Come modificare i contenuti

### Aggiungere una storia di adozione

1. Ottimizza la foto con [Squoosh](https://squoosh.app): WebP, qualità 75–80%, larghezza massima 800 px, meno di 150 KB.
2. Salvala in `public/animali/nome-animale.webp` (senza spazi né accenti).
3. Aggiungi la storia in fondo a `src/data/success-stories.ts`, copiando una voce esistente. `id` deve essere unico; `gender` è `'M'` (Adottato), `'F'` (Adottata) o `'P'` (Adottati); `instagramUrl` è facoltativo.

La galleria le mostra tutte, in ordine casuale. Non serve altro.

### Cambiare dati che compaiono in più file

I dati dell'associazione che compaiono nei componenti stanno in un solo file, `src/data/contact.ts`. Restano però copie statiche in `index.html` (che non può importare codice) e in `public/llms.txt`: se un dato cambia, vanno aggiornati **tutti** i file della riga:

| Dato | File da aggiornare |
|---|---|
| IBAN | `src/data/contact.ts`, `public/llms.txt` |
| Codice fiscale 5×1000 | `src/data/contact.ts`, `index.html` (blocco `<noscript>`), `public/llms.txt` |
| Telefono, email, indirizzo | `src/data/contact.ts`, `index.html` (`<noscript>` e JSON-LD), `public/llms.txt` |
| Link Instagram, Facebook, WhatsApp | `src/data/contact.ts`, `index.html` (JSON-LD), `public/llms.txt` |
| Link GoFundMe | `src/data/contact.ts`, `public/llms.txt` |
| Indirizzo del sito | `index.html` (canonical, `og:*`, `twitter:image`, JSON-LD), `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt` |

### Aggiungere una sezione

Crea il componente in `src/components/`, aggiungilo in `src/App.tsx` e, se deve comparire nel menu, in `NAV_LINKS` e `SECTION_IDS` di `Navbar.tsx`.

---

## Regole da rispettare

- **Content-Security-Policy.** `vercel.json` ammette solo risorse del sito stesso. Se aggiungi un font, uno script, un'immagine o un incorporamento da un altro dominio, la CSP lo blocca: va provato sulla preview e la policy aggiornata.
- **Nessun cookie né servizio esterno senza dirlo.** Ogni servizio che tratta dati dei visitatori va indicato in `public/privacy.html`.
- **Immagini in WebP**, leggere, con testo alternativo. Il logo e l'immagine di anteprima sono i soli JPEG/SVG/PNG.
- **Un solo `<h1>` per pagina.** Quello visibile è nell'Hero; in `index.html` ce n'è uno nascosto che serve a chi legge la pagina senza JavaScript.
- **La galleria delle storie non usa lo scroll-snap**: provato, fa oscillare lo scorrimento e rende macchinoso il touchpad.
- **Rispetta `prefers-reduced-motion`** quando aggiungi animazioni.
- **Non committare mai** password, chiavi o file `.env`. Il repository è pubblico.

## Branch e pubblicazione

| Branch | Scopo |
|---|---|
| `main` | produzione: ogni push viene pubblicato da Vercel su vola-salerno.org |
| `dev` | sviluppo: ogni push genera un indirizzo di anteprima su Vercel |

Flusso consigliato: lavora su `dev`, controlla l'anteprima (console senza errori, sito identico a prima dove non hai toccato niente), poi unisci `dev` in `main`.

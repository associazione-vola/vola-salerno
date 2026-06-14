# VOLA – Volontari per l'Ambiente ODV

Sito ufficiale dell'associazione **VOLA – Volontari per l'Ambiente ODV**, Delegazione Regione Campania. L'associazione si occupa della tutela degli animali e della difesa dell'ambiente nel territorio salernitano.

## Cos'è questo sito

Una pagina web che racconta chi siamo, cosa facciamo e come aiutarci. Chiunque voglia adottare un animale, segnalare un'emergenza, fare una donazione o semplicemente conoscerci troverà qui tutte le informazioni.

Il sito è pubblico, gratuito e non raccoglie dati personali.

---

## Stack Tecnologico

- **React 19** + **TypeScript 6** — struttura e logica dell'interfaccia
- **Vite 8** — build e sviluppo locale
- **Tailwind CSS 4** — stile e layout
- **Lucide React** — icone
- **Vercel** — deploy e hosting

### Struttura

```
src/
  components/
    Navbar.tsx          # barra di navigazione
    Hero.tsx            # sezione iniziale
    CinquePerMille.tsx  # info 5x1000
    ChiSiamo.tsx        # missione + grafico fondi + citazioni
    StorieSuccess.tsx   # galleria storie di adozione
    InCercaDiCasa.tsx   # animali da adottare
    EmergenciesHub.tsx  # guida emergenze
    Contatti.tsx        # contatti e sede legale
    Footer.tsx
    SocialIcons.tsx
  data/
    success-stories.ts  # dati tipizzati delle storie di successo
public/
  animali/              # foto animali (WebP, ottimizzate < 150 KB)
```

### Avvio locale

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Branch

| Branch | Scopo |
|--------|-------|
| `main` | produzione — deployato automaticamente su Vercel |
| `dev`  | sviluppo — genera una preview URL su Vercel ad ogni push |

### Aggiungere una storia di successo

1. Ottimizzare la foto con [Squoosh](https://squoosh.app) → WebP, qualità 75–80%, larghezza max 800px, target < 150 KB
2. Salvare il file in `public/animali/nome-animale.webp`
3. Aggiungere la storia in `src/data/success-stories.ts` seguendo l'interfaccia `SuccessStory`

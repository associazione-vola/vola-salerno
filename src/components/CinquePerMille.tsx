const CODICE_FISCALE = '95199730656';

const steps = [
  { n: '1', text: 'Fai la dichiarazione dei redditi (730, Unico o CU)' },
  { n: '2', text: 'Firma nel riquadro "Sostegno del Terzo Settore"' },
  { n: '3', text: `Scrivi il nostro codice fiscale: ${CODICE_FISCALE}` },
];

export default function CinquePerMille() {
  return (
    <section
      id="5x1000"
      className="pt-20 pb-48 relative -mt-px"
      style={{ background: '#0f1f0f' }}
    >
      {/* FADE TOP: Sale di 128px (-top-32) sopra la Hero sfumando dalla trasparenza al nero-verde */}
      <div
        className="absolute left-0 right-0 h-32 pointer-events-none -top-32 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #0f1f0f)' }}
      />
      
      {/* SEPARATORE BOTTOM: Arco Dolce */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none translate-y-[1px]">
        <svg 
          className="relative block w-full h-[40px] sm:h-[80px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* intestazione */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Destina il tuo 5×1000<br />
            <span className="text-green-400">a VOLA Salerno</span>
          </h2>
        </div>

        {/* CF prominente */}
        <div className="flex justify-center mb-14">
          <div
            className="px-8 py-5 rounded-full text-center"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(134,239,172,0.25)',
            }}
          >
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-1">
              Codice fiscale
            </p>
            <p className="text-white font-mono font-black text-2xl sm:text-3xl tracking-widest">
              {CODICE_FISCALE}
            </p>
          </div>
        </div>

        {/* steps cerchiati */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 max-w-xs text-left sm:text-center flex-1">
              {/* numero cerchiato */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-green-300 font-black text-lg"
                style={{ border: '1.5px solid rgba(134,239,172,0.40)', background: 'rgba(21,128,61,0.15)' }}
              >
                {step.n}
              </div>

              <p className="text-white/65 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-white/60 text-xs mt-12">
          Il 5×1000 non sostituisce l'IRPEF — è una quota già trattenuta dallo Stato che puoi scegliere dove destinare.
        </p>
      </div>
    </section>
  );
}
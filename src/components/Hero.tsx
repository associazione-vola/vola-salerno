import { ArrowDown, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const IBAN = 'IT74 E062 3015 2000 0003 1403 747';

const IMG_PORTRAIT = '/mobile_hero.webp';
const IMG_LANDSCAPE = '/hero.webp';

function DonationForm({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  return (
    <>
      <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Sostienici</p>
      <h2 className="text-white text-xl font-black mb-5 leading-tight">
        Ogni donazione<br />salva una vita
      </h2>

      <div
        className="rounded-xl p-4 mb-4 text-sm"
        style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.15)' }}
      >
        <p className="text-white/60 text-xs mb-1">Bonifico bancario</p>
        <p className="text-white font-mono font-bold text-xs break-all">{IBAN}</p>
        <p className="text-white/60 text-xs mt-2">Intestatario: VOLA – Volontari per l'Ambiente</p>
        <p className="text-white/60 text-xs mt-1">Causale: Donazione VOLA</p>
      </div>

      <button
        onClick={onCopy}
        className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
        style={{ background: copied ? 'rgba(34,197,94,1)' : 'rgba(34,197,94,0.85)', color: '#fff', boxShadow: '0 4px 16px rgba(34,197,94,0.30)' }}
      >
        {copied ? 'IBAN copiato ✓' : 'Copia IBAN'}
      </button>

      <p className="text-white/40 text-xs text-center mt-3">
        Donazione sicura · Associazione ETS
      </p>
    </>
  );
}

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(IBAN).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback per HTTP o browser senza permessi clipboard
      const el = document.createElement('textarea');
      el.value = IBAN;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] bg-[#05140a] flex items-center justify-center overflow-hidden"
    >
      <picture>
        <source media="(max-width: 1023px)" srcSet={IMG_PORTRAIT} />
        <img
          src={IMG_LANDSCAPE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.4] origin-[center_68%] lg:scale-100 lg:origin-center lg:object-[center_10%]"
          aria-hidden="true"
        />
      </picture>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(5,15,8,0.2) 0%, rgba(5,20,10,0.45) 50%, rgba(5,20,10,0.80) 100%)' }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 lg:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* colonna sinistra */}
        <div className="flex-1 text-white text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-green-300 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 lg:mb-5">
            Associazione di volontariato · Salerno
          </p>
          <h1 className="text-6xl sm:text-8xl font-black mb-2 lg:mb-4 leading-none tracking-tight">
            VOLA
          </h1>
          <p
            className="text-2xl sm:text-4xl text-white/90 mx-auto lg:mx-0 mb-8 lg:mb-10"
            style={{ fontFamily: "'Tangerine', cursive", fontWeight: 700 }}
          >
            Volerò sino a quando vivrà l'ultimo albero
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#adozioni"
              className="bg-green-600 hover:bg-green-500 text-white px-7 py-3 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5 text-sm"
            >
              Adotta un amico
            </a>
            <a
              href="#chi-siamo"
              className="border border-white/40 text-white px-7 py-3 rounded-full font-bold hover:bg-white/10 transition-all text-sm"
            >
              Scopri chi siamo
            </a>
            {/* Dona Ora — solo mobile */}
            <button
              onClick={() => setModalOpen(true)}
              className="lg:hidden flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-7 py-3 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <Heart size={16} fill="currentColor" />
              Dona Ora
            </button>
          </div>
        </div>

        {/* colonna destra: form donazione — solo desktop */}
        <div
          className="hidden lg:block w-full lg:w-80 xl:w-96 rounded-2xl p-6 flex-shrink-0"
          style={{
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.20)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          }}
        >
          <DonationForm copied={copied} onCopy={handleCopy} />
        </div>
      </div>

      <a
        href="#chi-siamo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce"
        aria-label="Scorri verso il basso"
      >
        <ArrowDown size={26} />
      </a>

      {/* Modal donazione — solo mobile */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-white overflow-y-auto"
          onClick={() => setModalOpen(false)}
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative w-full max-w-sm py-10" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-0 right-0 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Chiudi"
              >
                <X size={20} />
              </button>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: '#0a1f11',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.30)',
                }}
              >
                <DonationForm copied={copied} onCopy={handleCopy} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

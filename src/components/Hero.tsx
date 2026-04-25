import { ArrowDown } from 'lucide-react';
import { useState } from 'react';

const PRESET_AMOUNTS = [5, 10, 25, 50];
const PAYPAL_ME = 'https://www.paypal.me/volasalerno'; // placeholder — sostituire con link reale
const IBAN = 'IT00 X000 0000 0000 0000 0000 000'; // placeholder — sostituire con IBAN reale

type PaymentMethod = 'paypal' | 'bonifico';

export default function Hero() {
  const [amount, setAmount] = useState<number | ''>(10);
  const [customAmount, setCustomAmount] = useState('');
  const [method, setMethod] = useState<PaymentMethod>('paypal');
  const [showIban, setShowIban] = useState(false);

  const finalAmount = customAmount !== '' ? Number(customAmount) : amount;

  const handleDonate = () => {
    if (method === 'paypal') {
      const url = finalAmount ? `${PAYPAL_ME}/${finalAmount}EUR` : PAYPAL_ME;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setShowIban(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1728065015087-b1fbb15e5480?w=2560&q=95&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(5,15,8,0.52) 0%, rgba(5,20,10,0.72) 100%)' }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* — colonna sinistra — */}
        <div className="flex-1 text-white text-center lg:text-left">
          <p className="text-green-300 font-semibold text-sm tracking-widest uppercase mb-5">
            Associazione di volontariato · Salerno
          </p>
          <h1 className="text-7xl sm:text-8xl font-black mb-4 leading-none tracking-tight">
            VOLA
          </h1>
          <p
            className="text-3xl sm:text-4xl text-white/85 mx-auto lg:mx-0 mb-10"
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
          </div>
        </div>

        {/* — colonna destra: form donazione — */}
        <div
          className="w-full lg:w-80 xl:w-96 rounded-2xl p-6 flex-shrink-0"
          style={{
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.20)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          }}
        >
          <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Sostienici</p>
          <h2 className="text-white text-xl font-black mb-5 leading-tight">
            Ogni donazione<br />salva una vita
          </h2>

          {/* tabs metodo */}
          <div className="flex rounded-xl overflow-hidden mb-5" style={{ background: 'rgba(0,0,0,0.20)' }}>
            {(['paypal', 'bonifico'] as PaymentMethod[]).map((m) => (
              <button
                key={m}
                onClick={() => { setMethod(m); setShowIban(false); }}
                className={`flex-1 py-2 text-sm font-semibold transition-all ${
                  method === m
                    ? 'bg-white/20 text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {m === 'paypal' ? 'PayPal' : 'Bonifico'}
              </button>
            ))}
          </div>

          {/* importi preset */}
          <p className="text-white/60 text-xs mb-2">Scegli un importo</p>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {PRESET_AMOUNTS.map((a) => (
              <button
                key={a}
                onClick={() => { setAmount(a); setCustomAmount(''); }}
                className={`py-2 rounded-lg text-sm font-bold transition-all ${
                  amount === a && customAmount === ''
                    ? 'bg-green-500 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                style={
                  amount === a && customAmount === ''
                    ? {}
                    : { background: 'rgba(255,255,255,0.10)' }
                }
              >
                €{a}
              </button>
            ))}
          </div>

          {/* importo libero */}
          <div className="relative mb-5">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">€</span>
            <input
              type="number"
              min="1"
              placeholder="Altro importo"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
              className="w-full pl-7 pr-3 py-2.5 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
              style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}
            />
          </div>

          {/* state bonifico */}
          {method === 'bonifico' && showIban ? (
            <div
              className="rounded-xl p-4 mb-4 text-sm"
              style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <p className="text-white/60 text-xs mb-1">IBAN</p>
              <p className="text-white font-mono font-bold text-xs break-all">{IBAN}</p>
              <p className="text-white/60 text-xs mt-2">Intestatario: VOLA – Volontari per l'Ambiente</p>
              {finalAmount ? (
                <p className="text-white/60 text-xs mt-1">Causale: Donazione VOLA €{finalAmount}</p>
              ) : null}
            </div>
          ) : null}

          <button
            onClick={handleDonate}
            className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: 'rgba(34,197,94,0.85)', color: '#fff', boxShadow: '0 4px 16px rgba(34,197,94,0.30)' }}
          >
            {method === 'paypal'
              ? `Dona ${finalAmount ? `€${finalAmount}` : ''} con PayPal`
              : showIban ? 'Copia IBAN sopra ↑' : 'Mostra IBAN'}
          </button>

          <p className="text-white/40 text-xs text-center mt-3">
            Donazione sicura · Associazione ETS
          </p>
        </div>
      </div>

      <a
        href="#chi-siamo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce"
        aria-label="Scorri verso il basso"
      >
        <ArrowDown size={26} />
      </a>
    </section>
  );
}

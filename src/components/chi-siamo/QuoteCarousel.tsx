import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const quotes = [
  {
    text: "L'Associazione persegue lo scopo di promuovere e sviluppare la sensibilità verso i temi ambientali e verso il rispetto degli animali, rivolgendosi a tutte le fasce d'età ma, soprattutto, ai bambini e ai giovani.",
    source: 'Le Cronache',
    date: '2024',
  },
  {
    text: "Noi del VOLA crediamo fortemente che l'attività dimostrativa degli addestratori e dei veterinari e l'apertura delle visite alle Oasi aiutino le persone a sviluppare sensibilità e rispetto verso gli animali.",
    source: 'Ulisse Online',
    date: '2024',
  },
  {
    text: "A dimostrazione che l'impegno, la caparbietà, la determinazione spesi nel richiamare l'attenzione della politica locale verso i temi dei gatti liberi a volte vengono premiati! La Giunta Comunale di Salerno ha espresso la volontà di realizzare un Rifugio-Gattile comunale.",
    source: 'Il sogno di un rifugio felino',
    date: 'Dicembre 2025',
  },
  {
    text: "L'Associazione VOLA continuerà ad impegnarsi in questo progetto per arrivare quanto prima alla sua piena realizzazione, anche per onorare la memoria di Eleonora Melfi che ha fortemente creduto in questo sogno.",
    source: 'FINALMENTE – Rifugio Felino',
    date: 'Dicembre 2025',
  },
];

// Carosello delle citazioni dalla stampa e dai post dell'associazione
export default function QuoteCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [quoteAnimating, setQuoteAnimating] = useState(false);
  const isAnimating = useRef(false);

  // Dissolvenza in uscita, cambio di citazione e dissolvenza in entrata; ignora i clic durante l'animazione
  const changeQuote = (newIdx: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setQuoteAnimating(true);
    setTimeout(() => {
      setCurrentQuote(newIdx);
      setQuoteAnimating(false);
      isAnimating.current = false;
    }, 280);
  };

  const nextQuote = () => changeQuote((currentQuote + 1) % quotes.length);
  const prevQuote = () => changeQuote((currentQuote - 1 + quotes.length) % quotes.length);

  return (
    <div className="mt-20 bg-green-50 rounded-3xl p-8 sm:p-12 text-center shadow-sm border border-green-100 relative">
      <Quote size={40} className="text-green-200 mx-auto mb-6" />

      {/* Citazione con animazione */}
      <div
        className="min-h-[140px] flex flex-col justify-center items-center"
        style={{
          opacity: quoteAnimating ? 0 : 1,
          transform: quoteAnimating ? 'translateY(10px)' : 'translateY(0)',
          transition: 'opacity 0.25s ease, transform 0.28s ease',
        }}
      >
        <p className="text-xl sm:text-2xl text-gray-800 font-medium italic mb-6 max-w-3xl mx-auto leading-relaxed">
          "{quotes[currentQuote].text}"
        </p>
        <div>
          <span className="block font-bold text-green-800 uppercase tracking-wide text-sm">
            {quotes[currentQuote].source}
          </span>
          <span className="text-sm text-gray-500">{quotes[currentQuote].date}</span>
        </div>
      </div>

      {/* Navigazione */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prevQuote}
          className="w-10 h-10 rounded-full bg-white border border-green-200 flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition-colors shadow-sm"
          aria-label="Citazione precedente"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicatori a pillola */}
        <div className="flex gap-2 items-center">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => changeQuote(idx)}
              aria-label={`Vai alla citazione ${idx + 1}`}
              style={{
                minWidth: '24px',
                minHeight: '24px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <span style={{
                width: currentQuote === idx ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: currentQuote === idx ? '#15803d' : '#bbf7d0',
                transition: 'width 0.3s ease, background-color 0.3s ease',
                display: 'block',
              }} />
            </button>
          ))}
        </div>

        <button
          onClick={nextQuote}
          className="w-10 h-10 rounded-full bg-white border border-green-200 flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition-colors shadow-sm"
          aria-label="Citazione successiva"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

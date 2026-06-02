import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// r = 15.9155 → circumference = 2π × 15.9155 ≈ 100, so percentages map 1-to-1
const CIRC = 100;

const chartData = [
  { label: 'Attività di programma',        value: 75, color: '#4ade80' },
  { label: 'Attività di raccolta fondi',    value: 18, color: '#fb923c' },
  { label: 'Altri oneri',                   value: 5,  color: '#fbbf24' },
  { label: 'Attività di supporto generale', value: 2,  color: '#94a3b8' },
];

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

// Precompute each segment's start offset (negative = clockwise shift)
const segments = chartData.map((item, i) => ({
  ...item,
  dashoffset: -chartData.slice(0, i).reduce((sum, d) => sum + d.value, 0),
}));

export default function ChiSiamo() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [quoteAnimating, setQuoteAnimating] = useState(false);
  const [chartVisible, setChartVisible] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const isAnimating = useRef(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const donutRef = useRef<HTMLDivElement>(null);

  // Trigger donut + bar animations when chart scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  // Angle-based hover detection: maps mouse position to a donut segment
  const handleDonutMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = donutRef.current;
    if (!div) return;
    const rect = div.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    // Only activate within the ring band (inner hole to outer edge)
    const dist = Math.sqrt(dx * dx + dy * dy);
    const scale = rect.width / 42; // viewBox is 42×42
    const outerR = (15.9155 + 3.8) * scale;
    const innerR = (15.9155 - 3.8) * scale;
    if (dist < innerR || dist > outerR) {
      setHoveredSegment(null);
      return;
    }

    // Normalize angle: 0° = top (12 o'clock), clockwise
    // SVG is rotated -90deg visually, so top in screen = -90deg from atan2's right=0 reference
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle = (angle + 90 + 360) % 360;
    const pct = (angle / 360) * 100;

    let cumulative = 0;
    for (let i = 0; i < segments.length; i++) {
      cumulative += segments[i].value;
      if (pct < cumulative) {
        setHoveredSegment(i);
        return;
      }
    }
    setHoveredSegment(null);
  };

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
    <section id="chi-siamo" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission + Chart */}
        <div className="grid lg:grid-cols-2 gap-10 lg:items-start">

          {/* Left: Missione */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Organizzazione no-profit
            </span>
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold text-gray-800">Volontari per l'Ambiente ODV – Delegazione Regione Campania.</span>{' '}
              Ci occupiamo della tutela degli animali allo scopo di difendere, proteggere e valorizzare
              l'ambiente del territorio Salernitano.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contatti"
                className="bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-600 transition-colors text-sm"
              >
                Unisciti a noi
              </a>
              <a
                href="#storie"
                className="border-2 border-green-700 text-green-700 px-6 py-2.5 rounded-full font-semibold hover:bg-green-50 transition-colors text-sm"
              >
                Le nostre storie
              </a>
            </div>
          </div>

          {/* Right: Donut Chart — deep forest green card */}
          <div
            ref={chartRef}
            className="rounded-2xl p-7 sm:p-8 text-white shadow-xl lg:mt-[198px]"
            style={{ backgroundColor: '#0d2118' }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
              Come usiamo i fondi raccolti
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* SVG Donut with hover detection on container */}
              <div
                ref={donutRef}
                className="relative w-36 h-36 flex-shrink-0 cursor-default"
                onMouseMove={handleDonutMouseMove}
                onMouseLeave={() => setHoveredSegment(null)}
              >
                <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90" aria-hidden="true">
                  {/* Background track */}
                  <circle r="15.9155" cx="21" cy="21" fill="none" stroke="#1c3828" strokeWidth="7" />
                  {/* Animated + hoverable segments */}
                  {segments.map((seg, i) => {
                    const isHovered = hoveredSegment === i;
                    const dimmed = hoveredSegment !== null && !isHovered;
                    return (
                      <circle
                        key={i}
                        r="15.9155"
                        cx="21"
                        cy="21"
                        fill="none"
                        stroke={seg.color}
                        strokeLinecap="butt"
                        strokeDasharray={chartVisible ? `${seg.value} ${CIRC}` : `0 ${CIRC}`}
                        strokeDashoffset={seg.dashoffset}
                        strokeWidth={isHovered ? 9.5 : 7}
                        style={{
                          opacity: dimmed ? 0.25 : 1,
                          transition: chartVisible
                            ? `stroke-dasharray 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.14}s,
                               stroke-width 0.2s ease,
                               opacity 0.2s ease`
                            : 'stroke-width 0.2s ease, opacity 0.2s ease',
                        }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Legend with mini progress bars */}
              <div className="flex flex-col gap-3.5 w-full">
                {segments.map((seg, i) => {
                  const isHovered = hoveredSegment === i;
                  const dimmed = hoveredSegment !== null && !isHovered;
                  return (
                    <div
                      key={i}
                      style={{
                        opacity: dimmed ? 0.35 : 1,
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className="rounded-full flex-shrink-0"
                            style={{
                              width: isHovered ? '11px' : '10px',
                              height: isHovered ? '11px' : '10px',
                              backgroundColor: seg.color,
                              transition: 'width 0.2s ease, height 0.2s ease',
                            }}
                          />
                          <span
                            className="text-xs leading-snug"
                            style={{
                              color: isHovered ? '#ffffff' : '#d1d5db',
                              transition: 'color 0.2s ease',
                            }}
                          >
                            {seg.label}
                          </span>
                        </div>
                        <span
                          className="text-xs font-bold flex-shrink-0"
                          style={{
                            color: seg.color,
                            fontSize: isHovered ? '13px' : '12px',
                            transition: 'font-size 0.2s ease',
                          }}
                        >
                          {seg.value}%
                        </span>
                      </div>
                      <div
                        className="rounded-full overflow-hidden"
                        style={{ height: isHovered ? '5px' : '4px', backgroundColor: '#1c3828', transition: 'height 0.2s ease' }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: chartVisible ? `${seg.value}%` : '0%',
                            backgroundColor: seg.color,
                            transition: chartVisible
                              ? `width 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.14}s`
                              : 'none',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Gallery */}
        <div className="mt-20 bg-green-50 rounded-3xl p-8 sm:p-12 text-center shadow-sm border border-green-100 relative">
          <Quote size={40} className="text-green-200 mx-auto mb-6" />

          {/* Animated quote content */}
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

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevQuote}
              className="w-10 h-10 rounded-full bg-white border border-green-200 flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition-colors shadow-sm"
              aria-label="Citazione precedente"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pill-shaped dot indicators */}
            <div className="flex gap-2 items-center">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => changeQuote(idx)}
                  aria-label={`Vai alla citazione ${idx + 1}`}
                  style={{
                    width: currentQuote === idx ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: currentQuote === idx ? '#15803d' : '#bbf7d0',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width 0.3s ease, background-color 0.3s ease',
                    padding: 0,
                  }}
                />
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

      </div>
    </section>
  );
}

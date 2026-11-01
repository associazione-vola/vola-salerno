import { useState, useRef, useEffect } from 'react';

// r = 15.9155 → circonferenza = 2π × 15.9155 ≈ 100, così le percentuali corrispondono 1 a 1
const CIRC = 100;

const chartData = [
  { label: 'Interventi di salvataggio',      value: 55, color: '#4ade80' },
  { label: 'Segnalazioni PEC alle autorità competenti',   value: 20, color: '#60a5fa' },
  { label: 'Raccolte fondi',                              value: 12, color: '#fb923c' },
  { label: 'Formazione nelle scuole',                     value: 8,  color: '#a78bfa' },
  { label: 'Altre attività',                              value: 5,  color: '#fbbf24' },
];

// Calcola in anticipo dove inizia ogni spicchio (negativo = spostamento in senso orario)
const segments = chartData.map((item, i) => ({
  ...item,
  dashoffset: -chartData.slice(0, i).reduce((sum, d) => sum + d.value, 0),
}));

// Card "Le nostre attività": grafico a ciambella con legenda e barre
export default function ActivitiesChart() {
  const [chartVisible, setChartVisible] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const chartRef = useRef<HTMLDivElement>(null);
  const donutRef = useRef<HTMLDivElement>(null);

  // Fa partire le animazioni di ciambella e barre quando il grafico entra nella parte visibile
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

  // Rileva lo spicchio sotto il mouse in base all'angolo
  const handleDonutMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = donutRef.current;
    if (!div) return;
    const rect = div.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    // Attivo solo sulla corona (dal foro interno al bordo esterno)
    const dist = Math.sqrt(dx * dx + dy * dy);
    const scale = rect.width / 42; // il viewBox è 42×42
    const outerR = (15.9155 + 3.8) * scale;
    const innerR = (15.9155 - 3.8) * scale;
    if (dist < innerR || dist > outerR) {
      setHoveredSegment(prev => prev !== null ? null : prev);
      return;
    }

    // Angolo normalizzato: 0° = in alto (ore 12), in senso orario.
    // L'SVG è ruotato di -90°, quindi "in alto" sullo schermo è -90° rispetto al riferimento di atan2
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
    setHoveredSegment(prev => prev !== null ? null : prev);
  };

  return (
    <div
      ref={chartRef}
      className="rounded-2xl p-7 sm:p-8 text-white shadow-xl"
      style={{ backgroundColor: '#0d2118' }}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
        Le nostre attività
      </h3>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Ciambella SVG: l'hover si rileva sul contenitore */}
        <div
          ref={donutRef}
          className="relative w-36 h-36 flex-shrink-0 cursor-default"
          onMouseMove={handleDonutMouseMove}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90" aria-hidden="true">
            {/* Pista di sfondo */}
            <circle r="15.9155" cx="21" cy="21" fill="none" stroke="#1c3828" strokeWidth="7" />
            {/* Spicchi animati e sensibili all'hover */}
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

        {/* Legenda con mini barre di avanzamento */}
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
                    {/* L'ingrandimento in hover usa transform (e non width/height/font-size): non cambia lo spazio
                        occupato, quindi la card non cresce e il testo a sinistra, centrato rispetto ad essa, non si sposta */}
                    <span
                      className="rounded-full flex-shrink-0"
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: seg.color,
                        transform: isHovered ? 'scale(1.1)' : 'none',
                        transition: 'transform 0.2s ease',
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
                      transform: isHovered ? 'scale(1.0833)' : 'none', // da 12 a 13 px
                      transformOrigin: 'right center',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    {seg.value}%
                  </span>
                </div>
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    height: '4px',
                    backgroundColor: '#1c3828',
                    transform: isHovered ? 'scaleY(1.25)' : 'none', // da 4 a 5 px, verso il basso
                    transformOrigin: 'top',
                    transition: 'transform 0.2s ease',
                  }}
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

      <p className="mt-5 text-center text-[10px] italic leading-relaxed text-white/40">
        *Percentuali indicative, stimate dall'associazione.
      </p>
    </div>
  );
}

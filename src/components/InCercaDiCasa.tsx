const Instagram = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const features = [
  '200+ adozioni riuscite',
  'Aggiornamenti quotidiani',
  'Community attiva',
];

export default function AdozioniPermanenti() {
  return (
    <section
      id="adozioni"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fffbeb 0%, #fff7ed 100%)' }}
    >
      {/* Decorative radial glows */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Brand icon */}
        <div className="mb-8 flex justify-center">
          <div
            className="w-16 h-16 rounded-[20px] flex items-center justify-center shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 55%, #ec4899 100%)',
              boxShadow: '0 8px 32px rgba(249,115,22,0.30)',
            }}
          >
            <Instagram size={30} className="text-white" />
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight">
          Chi cerca casa
          <span
            className="block"
            style={{
              background: 'linear-gradient(90deg, #f97316 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            oggi?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
          Aggiorniamo le nostre adozioni quotidianamente su Instagram. Unisciti alla nostra
          community per scoprire i cuccioli che hanno bisogno di te.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {features.map((feat) => (
            <span
              key={feat}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700"
              style={{
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.instagram.com/vola_volontariambiente?igsh=MW5uNWNkdnd6cHVkYg=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ec4899 100%)',
            boxShadow: '0 4px 24px rgba(249,115,22,0.30)',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 36px rgba(249,115,22,0.45)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(249,115,22,0.30)'; }}
        >
          <Instagram size={22} />
          Vai al nostro profilo Instagram
        </a>
      </div>
    </section>
  );
}

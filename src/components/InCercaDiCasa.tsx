import { InstagramIcon as Instagram } from './SocialIcons';

export default function AdozioniPermanenti() {
  return (
    <section
      id="adozioni"
      className="py-20 sm:py-28 relative overflow-hidden bg-white"
    >

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
            className="block pb-2"
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

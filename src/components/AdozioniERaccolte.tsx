import { ExternalLink, Heart } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

const INSTAGRAM_URL = 'https://www.instagram.com/vola_volontariambiente?igsh=MW5uNWNkdnd6cHVkYg==';
const GOFUNDME_URL = 'https://www.gofundme.com/u/91b48491-f950-4077-a51a-f85b0a2a0883';

// Due azioni affiancate: trovare casa a un animale (Instagram) e sostenere le raccolte fondi (GoFundMe)
export default function AdozioniERaccolte() {
  return (
    <section id="adozioni" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-2">

        {/* Adozioni su Instagram */}
        <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6 sm:p-12 flex flex-col items-center text-center">
          <div
            className="mb-8 w-16 h-16 rounded-[20px] flex items-center justify-center shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 55%, #ec4899 100%)',
              boxShadow: '0 8px 32px rgba(249,115,22,0.30)',
            }}
          >
            <InstagramIcon size={30} className="text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5 leading-tight">
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

          <p className="text-base sm:text-lg text-gray-600 max-w-md leading-relaxed mb-10">
            Aggiorniamo le nostre adozioni quotidianamente su Instagram. Unisciti alla nostra
            community per scoprire i cuccioli che hanno bisogno di te.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 sm:gap-3 text-white px-5 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-lg shadow-[0_4px_24px_rgba(249,115,22,0.30)] hover:shadow-[0_8px_36px_rgba(249,115,22,0.45)] hover:-translate-y-1 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ec4899 100%)' }}
          >
            <InstagramIcon size={22} />
            Vai al profilo Instagram
          </a>
        </div>

        {/* Raccolte fondi su GoFundMe */}
        <div className="rounded-3xl bg-green-50 border border-green-100 p-6 sm:p-12 flex flex-col items-center text-center">
          <div className="mb-8 w-16 h-16 rounded-[20px] bg-green-700 flex items-center justify-center shadow-[0_8px_32px_rgba(21,128,61,0.30)]">
            <Heart size={30} className="text-white" fill="currentColor" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5 leading-tight">
            Raccolte fondi
            <span className="block text-green-700 pb-2">attive</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-md leading-relaxed mb-10">
            Le raccolte in corso sono sul nostro profilo GoFundMe. Scegli quella a cui contribuire:
            ogni aiuto, grande o piccolo, conta per gli animali che assistiamo.
          </p>

          <a
            href={GOFUNDME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-700 hover:bg-green-600 text-white px-5 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-lg shadow-[0_4px_24px_rgba(21,128,61,0.30)] hover:shadow-[0_8px_36px_rgba(21,128,61,0.45)] hover:-translate-y-1 transition-all duration-300"
          >
            Vedi le raccolte su GoFundMe
            <ExternalLink size={20} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}

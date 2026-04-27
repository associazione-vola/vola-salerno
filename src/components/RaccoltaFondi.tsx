const GOFUNDME_URL = 'https://www.gofundme.com/u/91b48491-f950-4077-a51a-f85b0a2a0883';

export default function RaccoltaFondi() {
  return (
    <section id="raccolta-fondi" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Sostienici
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Raccolte Fondi Attive
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Le tue donazioni rendono possibile il nostro lavoro. Ogni contributo, grande o piccolo,
            fa la differenza per gli animali che assistiamo e per il territorio che proteggiamo.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aiutaci a fare di più</h3>
            <p className="text-gray-500 text-sm">
              Visita il nostro profilo GoFundMe per vedere tutte le raccolte fondi in corso
              e scegliere quella a cui contribuire.
            </p>
          </div>
          <a
            href={GOFUNDME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors text-base shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
            </svg>
            Sostienici su GoFundMe
          </a>
          <p className="text-xs text-gray-400">
            Verrai reindirizzato al profilo ufficiale di VOLA Salerno su GoFundMe
          </p>
        </div>
      </div>
    </section>
  );
}

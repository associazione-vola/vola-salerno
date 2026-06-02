import { AlertTriangle, Clock } from 'lucide-react';

export default function EmergenciesHub() {
  return (
    <section id="emergenze" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            <AlertTriangle size={12} />
            Emergenze e Soccorsi
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
            Hai trovato un animale
            <span className="text-green-700 block">in difficoltà?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Mantieni la calma. Segui questi passi nell'ordine giusto per garantire
            il massimo aiuto all'animale.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="w-full max-w-xl">
            {/* Card 1: Cosa fare subito */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-orange-600" />
                </div>
                <h3 className="font-black text-gray-900 text-lg">Cosa fare subito</h3>
              </div>
              <ol className="space-y-3">
                {[
                  'Non spostare l\'animale se gravemente ferito — rischio di aggravamento o morso difensivo.',
                  'Scatta una foto geolocalizzata.',
                  'Se in strada e in pericolo di traffico, avvisa la Polizia Municipale.',
                  'Per ferite gravi, chiama subito la ASL Veterinaria.',
                  'Contatta VOLA tramite i nostri social per supporto e coordinamento.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

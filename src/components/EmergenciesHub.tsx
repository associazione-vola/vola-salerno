import { AlertTriangle, Phone, Clock, CheckCircle, MessageCircle, Info } from 'lucide-react';

const WHATSAPP_NUMBER = '393334567890';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao VOLA, ho trovato un animale in difficoltà. Vi contatto per avere supporto.')}`;

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

        <div className="grid md:grid-cols-3 gap-6 mb-10">

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
                'Contatta VOLA su WhatsApp per supporto e coordinamento.',
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

          {/* Card 2: Quando contattarci */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-blue-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Info size={20} className="text-blue-600" />
              </div>
              <h3 className="font-black text-gray-900 text-lg">Quando contattarci</h3>
            </div>

            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-3">Possiamo aiutarti con:</p>
            <ul className="space-y-2 mb-5">
              {[
                'Animali smarriti (cani e gatti)',
                'Cuccioli abbandonati senza cure urgenti',
                'Animali randagi che necessitano di adozione',
                'Segnalazioni di maltrattamenti o abbandono',
                'Consigli pre- e post-adozione',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">{item}</p>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-3">Non gestiamo:</p>
            <ul className="space-y-2">
              {[
                'Emergenze veterinarie acute (→ ASL)',
                'Animali di grossa taglia o esotici',
                'Rimozione forzata da proprietà private',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-3.5 h-3.5 border-2 border-gray-300 rounded-full mt-0.5" />
                  <p className="text-gray-500 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Numeri di emergenza */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-red-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-red-600" />
              </div>
              <h3 className="font-black text-gray-900 text-lg">Numeri di emergenza</h3>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+390892345678"
                className="block bg-red-50 hover:bg-red-100 transition-colors rounded-xl p-4 group"
              >
                <p className="font-bold text-gray-900 text-sm group-hover:text-red-700 transition-colors">
                  ASL Veterinaria Salerno
                </p>
                <p className="text-red-600 font-mono font-bold text-lg">089 234 5678</p>
                <p className="text-gray-500 text-xs mt-1">Animali feriti · H24 per urgenze</p>
              </a>

              <a
                href="tel:+390892345679"
                className="block bg-red-50 hover:bg-red-100 transition-colors rounded-xl p-4 group"
              >
                <p className="font-bold text-gray-900 text-sm group-hover:text-red-700 transition-colors">
                  Polizia Municipale Salerno
                </p>
                <p className="text-red-600 font-mono font-bold text-lg">089 662 111</p>
                <p className="text-gray-500 text-xs mt-1">Animali in strada · Abbandono</p>
              </a>

              <a
                href="tel:112"
                className="block bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl p-4 group"
              >
                <p className="font-bold text-gray-900 text-sm group-hover:text-gray-700 transition-colors">
                  Numero Unico di Emergenza
                </p>
                <p className="text-gray-700 font-mono font-bold text-lg">112</p>
                <p className="text-gray-500 text-xs mt-1">Pericolo immediato per persone</p>
              </a>
            </div>
          </div>

        </div>

        {/* CTA WhatsApp */}
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-green-500/30"
          >
            <MessageCircle size={22} fill="currentColor" />
            Contatta VOLA su WhatsApp
          </a>
          <p className="text-gray-500 text-sm mt-3">
            Risposta entro poche ore · Disponibili Lun–Dom
          </p>
        </div>

      </div>
    </section>
  );
}

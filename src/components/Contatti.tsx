import { Mail, MapPin, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

export default function Contatti() {
  return (
    <section id="contatti" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Contatti
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Siamo qui
            <span className="text-green-700 block">per te</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-xl mx-auto leading-relaxed">
            Hai domande o vuoi segnalare un animale in difficoltà? Contattaci direttamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card: Dove siamo */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 text-xl mb-6">Dove siamo</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sede operativa</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Via Irno, 45 – 84135 Salerno SA
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Aperto: Lun–Ven 9:00–13:00 / 15:00–19:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:associazionevola.salerno1@gmail.com"
                    className="text-green-700 text-sm hover:underline"
                  >
                    associazionevola.salerno1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telefono</p>
                  <a
                    href="tel:+393669129650"
                    className="text-gray-600 text-sm hover:text-green-700 transition-colors"
                  >
                    366 912 9650
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Seguici sui social */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 text-xl mb-6">Seguici sui social</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1aW6P36ibh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                <FacebookIcon size={18} />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/vola_volontariambiente"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                <InstagramIcon size={18} />
                Instagram
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center">
              Seguici per aggiornamenti quotidiani sugli animali e gli eventi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

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
          <div className="rounded-2xl border-2 border-green-700 overflow-hidden">
            <div className="bg-green-700 px-8 py-5">
              <h3 className="font-bold text-white text-xl">Dove siamo</h3>
              <p className="text-green-200 text-sm mt-0.5">Sede e recapiti ufficiali</p>
            </div>

            <div className="bg-white p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sede operativa</p>
                  <p className="text-gray-600 text-sm mt-1">Via Salvador Allende, 161 A – Salerno</p>
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
                    className="text-green-700 text-sm hover:underline break-all"
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
                    href="tel:+393514929152"
                    className="text-gray-600 text-sm hover:text-green-700 transition-colors"
                  >
                    351 492 9152
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Seguici sui social */}
          <div className="rounded-2xl border-2 border-green-700 overflow-hidden flex flex-col">
            <div className="bg-green-700 px-8 py-5">
              <h3 className="font-bold text-white text-xl">Seguici sui social</h3>
              <p className="text-green-200 text-sm mt-0.5">Aggiornamenti quotidiani su animali ed eventi</p>
            </div>

            <div className="bg-white p-8 flex flex-col gap-4 flex-1">
              <a
                href="https://www.facebook.com/share/1aW6P36ibh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FacebookIcon size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">Facebook</p>
                  <p className="text-blue-200 text-xs mt-0.5">Notizie, eventi e aggiornamenti</p>
                </div>
                <ArrowUpRight size={18} className="text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.instagram.com/vola_volontariambiente"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 hover:opacity-90 text-white px-6 py-5 rounded-xl transition-opacity group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <InstagramIcon size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">Instagram</p>
                  <p className="text-pink-100 text-xs mt-0.5">Foto degli animali in cerca di casa</p>
                </div>
                <ArrowUpRight size={18} className="text-pink-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://whatsapp.com/channel/0029VatJw7J7tkj7q2uS5N2R"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-5 rounded-xl transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">Canale WhatsApp</p>
                  <p className="text-green-100 text-xs mt-0.5">Novità e aggiornamenti dall'associazione</p>
                </div>
                <ArrowUpRight size={18} className="text-green-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="mt-auto pt-4 border-t border-gray-100 text-center">
                <p className="text-gray-400 text-xs">
                  Seguici per non perdere nessun animale da adottare
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

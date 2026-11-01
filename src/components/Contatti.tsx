import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { ADDRESS, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, PHONE, PHONE_LINK, WHATSAPP_URL } from '../data/contact';

// Le tre card social differiscono solo per testi, colori e icona
const SOCIAL_CARDS = [
  {
    label: 'Facebook',
    description: 'Notizie, eventi e aggiornamenti',
    href: FACEBOOK_URL,
    Icon: FacebookIcon,
    background: 'bg-blue-600 hover:bg-blue-700',
    transition: 'transition-colors',
    descriptionColor: 'text-blue-200',
    arrowColor: 'text-blue-300',
  },
  {
    label: 'Instagram',
    description: 'Foto degli animali in cerca di casa',
    href: INSTAGRAM_URL,
    Icon: InstagramIcon,
    background: 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 hover:opacity-90',
    transition: 'transition-opacity',
    descriptionColor: 'text-pink-100',
    arrowColor: 'text-pink-200',
  },
  {
    label: 'Canale WhatsApp',
    description: "Novità e aggiornamenti dall'associazione",
    href: WHATSAPP_URL,
    Icon: WhatsAppIcon,
    background: 'bg-[#25D366] hover:bg-[#1ebe5d]',
    transition: 'transition-colors',
    descriptionColor: 'text-green-100',
    arrowColor: 'text-green-200',
  },
];

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
                  <p className="font-semibold text-gray-900">Sede legale</p>
                  <p className="text-gray-600 text-sm mt-1">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-green-700 text-sm hover:underline break-all"
                  >
                    {EMAIL}
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
                    href={`tel:${PHONE_LINK}`}
                    className="text-gray-600 text-sm hover:text-green-700 transition-colors"
                  >
                    {PHONE}
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
              {SOCIAL_CARDS.map(({ label, description, href, Icon, background, transition, descriptionColor, arrowColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 ${background} text-white px-6 py-5 rounded-xl ${transition} group`}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">{label}</p>
                    <p className={`${descriptionColor} text-xs mt-0.5`}>{description}</p>
                  </div>
                  <ArrowUpRight size={18} className={`${arrowColor} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
                </a>
              ))}

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

import { Leaf, Mail, MapPin, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white relative">
      {/* Wave bridge: Contatti (gray-50 #f9fafb) → Footer (green-900) */}
      <div className="absolute top-0 left-0 right-0 leading-none pointer-events-none" style={{ height: '60px' }}>
        <svg className="block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,60 Q600,0 1200,60 L1200,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Leaf size={20} className="text-green-300" />
              </div>
              <div>
                <span className="font-black text-xl block leading-none">VOLA</span>
                <span className="text-green-300 text-xs">Volontari per l'Ambiente</span>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed max-w-sm">
              Associazione di volontariato per la tutela dell'ambiente e degli animali del territorio
              salernitano. Iscritta al Registro del Terzo Settore.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: <FacebookIcon size={18} />, href: 'https://facebook.com', label: 'Facebook' },
                { icon: <InstagramIcon size={18} />, href: 'https://instagram.com', label: 'Instagram' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-green-300 mb-5">
              Navigazione
            </h4>
            <ul className="space-y-3 text-sm text-green-200">
              {[
                ['Chi Siamo', '#chi-siamo'],
                ['Storie a Lieto Fine', '#storie'],
                ['In Cerca di Casa', '#adozioni'],
                ['Contatti', '#contatti'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-green-300 mb-5">
              Contatti
            </h4>
            <ul className="space-y-3 text-sm text-green-200">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                Via Irno, 45 – 84135 Salerno SA
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-green-400 flex-shrink-0" />
                <a href="mailto:info@vola-salerno.it" className="hover:text-white transition-colors">
                  info@vola-salerno.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-green-400 flex-shrink-0" />
                <a href="tel:+390892345678" className="hover:text-white transition-colors">
                  089 234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-green-400 text-sm">
          <p>© {year} VOLA – Volontari per l'Ambiente. Tutti i diritti riservati.</p>
          <p>Fatto con ❤️ a Salerno</p>
        </div>
      </div>
    </footer>
  );
}

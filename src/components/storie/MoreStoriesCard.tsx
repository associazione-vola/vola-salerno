import { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../SocialIcons';
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from '../../data/contact';

// Ultima card della galleria: invita a seguire i social per altre storie.
// L'animazione parte una sola volta, quando la card entra nella parte visibile della galleria.
export default function MoreStoriesCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = 'opacity-0 motion-reduce:opacity-100';

  const socialLinks = [
    { label: 'Instagram', href: INSTAGRAM_URL, icon: <InstagramIcon size={20} /> },
    { label: 'Facebook', href: FACEBOOK_URL, icon: <FacebookIcon size={20} /> },
    { label: 'Canale WhatsApp', href: WHATSAPP_URL, icon: <WhatsAppIcon size={20} /> },
  ];

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-72 sm:w-80 self-stretch rounded-2xl bg-green-50 border border-green-100 p-6 flex flex-col items-center justify-center text-center gap-4 ${
        visible ? 'animate-story-in motion-reduce:animate-none' : hidden
      }`}
    >
      <Heart
        size={28}
        className={`text-green-600 ${visible ? 'animate-story-pop motion-reduce:animate-none' : hidden}`}
        style={{ animationDelay: '250ms' }}
        fill="currentColor"
        aria-hidden="true"
      />
      <h3 className="font-black text-xl text-gray-900 leading-snug">Vuoi leggere altre storie?</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Seguici sui nostri canali social per scoprire altre storie a lieto fine.
      </p>
      <div className="flex gap-3">
        {socialLinks.map(({ label, href, icon }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{ animationDelay: `${450 + i * 120}ms` }}
            className={`w-11 h-11 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-600 transition-colors ${
              visible ? 'animate-story-pop motion-reduce:animate-none' : hidden
            }`}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}

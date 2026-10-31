import { useCallback, useEffect, useRef, useState } from 'react';
import { Heart, Quote, ChevronDown, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { successStories, type SuccessStory } from '../data/success-stories';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

// Ultima card della galleria: invita a seguire i social per altre storie.
// L'animazione parte una sola volta, quando la card entra nella parte visibile della galleria.
function MoreStoriesCard() {
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
    { label: 'Instagram', href: 'https://www.instagram.com/vola_volontariambiente', icon: <InstagramIcon size={20} /> },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1aW6P36ibh/', icon: <FacebookIcon size={20} /> },
    { label: 'Canale WhatsApp', href: 'https://whatsapp.com/channel/0029VatJw7J7tkj7q2uS5N2R', icon: <WhatsAppIcon size={20} /> },
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


function StoryCard({ story }: { story: SuccessStory }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col">
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={story.image}
          alt={`${story.name} — storia di adozione`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute bottom-3 left-4 text-white">
          <h3 className="font-black text-2xl leading-none">{story.name}</h3>
          {story.character && <p className="text-white/80 text-sm">{story.character}</p>}
        </div>
        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Heart size={10} fill="currentColor" />
          {story.gender === 'F' ? 'Adottata' : story.gender === 'P' ? 'Adottati' : 'Adottato'}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <Quote size={20} className="text-green-600 mb-2 opacity-60 flex-shrink-0" />
        <p className={`text-gray-600 text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
          {story.story}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-green-700 font-semibold text-sm hover:text-green-600 transition-colors"
          >
            {expanded ? 'Chiudi' : 'Leggi di più'}
            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>

          {story.instagramUrl && (
            <a
              href={story.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-700 hover:text-pink-800 font-semibold text-sm transition-colors"
            >
              Vedi su Instagram
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// Quota della larghezza della galleria, a sinistra e a destra, in cui il cursore fa comparire la freccia
const EDGE_ZONE = 0.1;

// Freccia per scorrere la galleria con il mouse: compare solo quando il cursore è vicino al lato
// (o quando riceve il focus da tastiera), così non copre le card e resta raggiungibile con Tab.
function GalleryArrow({ side, visible, onClick }: { side: 'left' | 'right'; visible: boolean; onClick: () => void }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Mostra le storie precedenti' : 'Mostra altre storie'}
      className={`absolute top-1/2 -translate-y-1/2 ${side === 'left' ? 'left-3' : 'right-3'} z-20 w-11 h-11 rounded-full bg-white text-green-700 border border-green-100 shadow-md flex items-center justify-center hover:bg-green-50 transition-opacity duration-200 motion-reduce:transition-none ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none focus-visible:opacity-100 focus-visible:pointer-events-auto'
      }`}
    >
      <Icon size={22} aria-hidden="true" />
    </button>
  );
}

export default function StorieSuccess() {
  const [shuffled] = useState(() => {
    const arr = [...successStories];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  const galleryRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState<'left' | 'right' | null>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  // Le frecce si nascondono all'inizio e alla fine della galleria
  const updateCanScroll = useCallback(() => {
    const el = galleryRef.current;
    if (!el) return;
    const left = el.scrollLeft > 4;
    const right = el.scrollLeft < el.scrollWidth - el.clientWidth - 4;
    setCanScroll((prev) => (prev.left === left && prev.right === right ? prev : { left, right }));
  }, []);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateCanScroll);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateCanScroll]);

  // Piccolo accenno di scorrimento la prima volta che la galleria compare, per far capire che si può scorrere.
  // Parte una sola volta, si ferma appena l'utente interagisce e non parte con "riduci animazioni".
  useEffect(() => {
    const el = galleryRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    let timerId = 0;
    let cancelled = false;

    const stop = () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.clearTimeout(timerId);
    };
    const userEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
    userEvents.forEach((type) => el.addEventListener(type, stop, { passive: true }));

    const nudge = () => {
      if (cancelled || el.scrollLeft > 0) return;
      const distance = 72;
      const duration = 1500;
      const startTime = performance.now();
      let lastSet = 0;

      const step = (now: number) => {
        if (cancelled) return;
        // Se la posizione non è quella che ho impostato, qualcun altro ha mosso la galleria: non ostacolarlo
        if (Math.abs(el.scrollLeft - lastSet) > 1.5) return;
        const t = Math.min((now - startTime) / duration, 1);
        lastSet = distance * Math.sin(Math.PI * t) ** 2; // 0 → distanza → 0, con andamento morbido
        el.scrollLeft = lastSet;
        if (t < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timerId = window.setTimeout(nudge, 600);
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      stop();
      userEvents.forEach((type) => el.removeEventListener(type, stop));
    };
  }, []);

  // Il cursore vicino al lato sinistro o destro della galleria fa comparire la freccia di quel lato
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const next = x < EDGE_ZONE ? 'left' : x > 1 - EDGE_ZONE ? 'right' : null;
    setEdge((prev) => (prev === next ? prev : next));
  };

  const scrollByCards = (direction: 1 | -1) => {
    const el = galleryRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('article')?.getBoundingClientRect().width ?? 320;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: direction * (cardWidth + 20) * 2, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section id="storie" className="py-24 bg-white relative overflow-hidden">

      {/* 3. Contenuto con z-10 per stare sopra lo sfondo */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Ce l'abbiamo fatta
            <span className="text-green-700 block">insieme</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Ogni animale salvato è una vittoria. Scorri per scoprire tutte le storie che ci
            danno la forza di andare avanti ogni giorno.
          </p>
        </div>
      </div>

      <div className="relative z-10" onMouseMove={handleMouseMove} onMouseLeave={() => setEdge(null)}>
        {/* Le frecce stanno prima delle card nel codice, così con Tab si raggiungono subito (a schermo sono sovrapposte ai lati) */}
        {canScroll.left && <GalleryArrow side="left" visible={edge === 'left'} onClick={() => scrollByCards(-1)} />}
        {canScroll.right && <GalleryArrow side="right" visible={edge === 'right'} onClick={() => scrollByCards(1)} />}

        <div
          ref={galleryRef}
          onScroll={updateCanScroll}
          className="flex items-start gap-5 overflow-x-auto overscroll-x-contain pb-4 pl-4 sm:pl-6 lg:pl-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          role="region"
          aria-label="Galleria storie di adozione a lieto fine"
        >
          {shuffled.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
          <MoreStoriesCard />
          <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
import { useState, useMemo } from 'react';
import { Heart, Quote, ChevronDown, ExternalLink } from 'lucide-react';
import { successStories, type SuccessStory } from '../data/success-stories';


function StoryCard({ story }: { story: SuccessStory }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex-shrink-0 w-72 sm:w-80 snap-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col">
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
          {story.gender === 'F' ? 'Adottata' : 'Adottato'}
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
              className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-semibold text-sm transition-colors"
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

export default function StorieSuccess() {
  const shuffled = useMemo(() => {
    const arr = [...successStories];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

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

      <div
        className="flex items-start gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pl-4 sm:pl-6 lg:pl-8 relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
        role="region"
        aria-label="Galleria storie di adozione a lieto fine"
      >
        {shuffled.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
        <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" aria-hidden="true" />
      </div>

      <div className="text-center mt-10 px-4 relative z-10">
        <a
          href="#adozioni"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
        >
          Aiuta il prossimo animale
        </a>
      </div>
    </section>
  );
}
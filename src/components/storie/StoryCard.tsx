import { useState } from 'react';
import { Heart, Quote, ChevronDown, ExternalLink } from 'lucide-react';
import type { SuccessStory } from '../../data/success-stories';

// Card di una storia di adozione, con testo espandibile
export default function StoryCard({ story }: { story: SuccessStory }) {
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

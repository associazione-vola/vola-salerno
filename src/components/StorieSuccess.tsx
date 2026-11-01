import { useState } from 'react';
import { successStories } from '../data/success-stories';
import StoryCard from './storie/StoryCard';
import MoreStoriesCard from './storie/MoreStoriesCard';
import GalleryArrow from './storie/GalleryArrow';
import { useGalleryScroll } from './storie/useGalleryScroll';

export default function StorieSuccess() {
  const [shuffled] = useState(() => {
    const arr = [...successStories];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  const { galleryRef, edge, canScroll, updateCanScroll, handleMouseMove, clearEdge, scrollByCards } = useGalleryScroll();

  return (
    <section id="storie" className="py-24 bg-white relative overflow-hidden">

      {/* Titolo e introduzione */}
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

      <div className="relative z-10" onMouseMove={handleMouseMove} onMouseLeave={clearEdge}>
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

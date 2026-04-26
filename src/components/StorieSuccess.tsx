import { Heart, Quote } from 'lucide-react';
import { successStories } from '../data/animals';

export default function StorieSuccess() {
  return (
    <section id="storie" className="py-24 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            <Heart size={14} />
            Storie a lieto fine
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Ce l'abbiamo fatta
            <span className="text-green-700 block">insieme</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Ogni animale salvato è una vittoria. Queste sono alcune delle storie che ci danno
            la forza di andare avanti ogni giorno.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:[&>*:last-child]:col-span-2 sm:[&>*:last-child]:justify-self-center sm:[&>*:last-child]:max-w-sm md:[&>*:last-child]:col-span-1 md:[&>*:last-child]:justify-self-stretch md:[&>*:last-child]:max-w-none">
          {successStories.slice(-3).reverse().map((animal) => (
            <article
              key={animal.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="font-black text-2xl leading-none">{animal.name}</h3>
                  <p className="text-white/80 text-sm">{animal.age} · {animal.character}</p>
                </div>
                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Heart size={10} fill="currentColor" />
                  Adottato
                </div>
              </div>
              <div className="p-5">
                <Quote size={20} className="text-green-600 mb-2 opacity-60" />
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {animal.story}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">
            E tante altre storie ancora da scrivere...
          </p>
          <a
            href="#adozioni"
            className="inline-block mt-4 bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            Aiuta il prossimo animale
          </a>
        </div>
      </div>
    </section>
  );
}

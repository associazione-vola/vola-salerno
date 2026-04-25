import { Calendar, Heart, MessageCircle, Star } from 'lucide-react';
import { adoptionAnimals } from '../data/animals';

export default function InCercaDiCasa() {
  const handleContact = (name: string) => {
    const subject = encodeURIComponent(`Richiesta adozione: ${name}`);
    const body = encodeURIComponent(
      `Ciao VOLA,\n\nSono interessato/a ad adottare ${name}.\nVorrei avere maggiori informazioni.\n\nGrazie!`
    );
    window.location.href = `mailto:adozioni@vola-salerno.it?subject=${subject}&body=${body}`;
  };

  return (
    <section id="adozioni" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            <Heart size={14} />
            Adozioni
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            In cerca
            <span className="text-green-700 block">di una famiglia</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Questi meravigliosi animali aspettano solo te. Adottare è un atto d'amore che
            cambia due vite: la loro e la tua.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <Star size={20} className="text-amber-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Come funziona l'adozione?</p>
            <p className="text-gray-600 text-sm mt-1">
              Compilare il modulo di interesse, colloquio con i nostri volontari, visita domiciliare
              facoltativa e consegna dell'animale già vaccinato, microchippato e sterilizzato.
              Tutti i nostri animali sono seguiti post-adozione per 6 mesi.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {adoptionAnimals.slice(-3).reverse().map((animal) => (
            <article
              key={animal.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                  Cerca casa
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-black text-2xl text-gray-900 mb-1">{animal.name}</h3>

                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {animal.age}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-5">
                  <Star size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{animal.character}</p>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => handleContact(animal.name)}
                    className="w-full bg-green-700 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    <MessageCircle size={16} className="group-hover/btn:scale-110 transition-transform" />
                    Contattaci per {animal.name}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500">
          <p>Non hai trovato il tuo compagno ideale?</p>
          <a href="#contatti" className="text-green-700 font-semibold hover:underline">
            Scrivici e ti aiuteremo a trovare il match perfetto →
          </a>
        </div>
      </div>
    </section>
  );
}

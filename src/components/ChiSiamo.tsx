import ActivitiesChart from './chi-siamo/ActivitiesChart';
import QuoteCarousel from './chi-siamo/QuoteCarousel';

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Missione e grafico delle attività */}
        <div className="grid lg:grid-cols-2 gap-10 lg:items-center">

          {/* A sinistra: missione */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Organizzazione no-profit
            </span>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-snug">
              Volontari per l'Ambiente ODV
              <span className="block text-green-700 text-xl sm:text-2xl font-semibold mt-1">Delegazione Regione Campania</span>
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Ci occupiamo della tutela degli animali allo scopo di difendere, proteggere e valorizzare
              l'ambiente del territorio Salernitano.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I nostri volontari stanno organizzando percorsi di formazione nelle scuole per sensibilizzare
              le nuove generazioni al rispetto degli animali e della natura.
            </p>
          </div>

          {/* A destra: grafico delle attività */}
          <ActivitiesChart />
        </div>

        {/* Citazioni */}
        <QuoteCarousel />

      </div>
    </section>
  );
}

import { Leaf, Recycle, ShieldCheck, Users } from 'lucide-react';

const values = [
  {
    icon: <Leaf size={28} className="text-green-700" />,
    title: 'Tutela Ambientale',
    desc: 'Organizziamo pulizie del litorale salernitano, piantiamo alberi nelle periferie e educhiamo i giovani alla cura dell\'ecosistema locale.',
  },
  {
    icon: <ShieldCheck size={28} className="text-green-700" />,
    title: 'Protezione Animali',
    desc: 'Soccorriamo animali in difficoltà, gestiamo colonie feline nel centro storico e collaboriamo con i veterinari locali per campagne di sterilizzazione.',
  },
  {
    icon: <Users size={28} className="text-green-700" />,
    title: 'Comunità Attiva',
    desc: 'Siamo oltre 150 volontari tra Salerno, Pontecagnano, Cava de\' Tirreni e il Cilento. Chiunque può unirsi a noi: basta la voglia di fare del bene.',
  },
  {
    icon: <Recycle size={28} className="text-green-700" />,
    title: 'Economia Circolare',
    desc: 'Promuoviamo mercatini del riuso, raccolta differenziata nelle scuole e progetti di compostaggio per i quartieri di Salerno.',
  },
];

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Dal 2010 a Salerno
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              La nostra
              <span className="text-green-700 block">missione</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                VOLA nasce nel 2010 da un gruppo di cittadini salernitani convinti che il rispetto per
                l'ambiente e per gli animali non siano opzionali, ma fondamentali per una comunità sana.
              </p>
              <p>
                Operiamo lungo tutta la costa del Golfo di Salerno, nelle aree interne del Cilento e
                nell'entroterra campano, con un'attenzione particolare alla biodiversità marina e alle
                specie selvatiche in difficoltà.
              </p>
              <p>
                Ogni weekend i nostri volontari sono in strada: nelle pinete di Pontecagnano, sulle
                spiagge di Paestum, nei vicoli del centro storico di Salerno. Perché l'ambiente si
                protegge ogni giorno, non solo nelle grandi occasioni.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#contatti"
                className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                Unisciti a noi
              </a>
              <a
                href="#storie"
                className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
              >
                Le nostre storie
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-green-50 border border-green-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-800 to-green-600 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-black mb-4">
            Il nostro impegno per il territorio salernitano
          </h3>
          <p className="text-green-100 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Collaboriamo con il Comune di Salerno, la ASL Veterinaria, le scuole locali e decine di
            associazioni del terzo settore. Perché cambiare le cose richiede unità.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              ['50+', 'eventi all\'anno'],
              ['20', 'scuole coinvolte'],
              ['5 ton', 'rifiuti raccolti'],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-black">{num}</div>
                <div className="text-green-200 text-sm capitalize">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

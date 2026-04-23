import { ArrowDown, Heart, Leaf, TreePine } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #14532d 0%, #166534 30%, #15803d 60%, #4d7c0f 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Leaf size={24} className="text-green-200" />
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Heart size={24} className="text-red-300" />
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <TreePine size={24} className="text-green-200" />
          </div>
        </div>

        <p className="text-green-200 font-semibold text-lg tracking-widest uppercase mb-4">
          Volontari per l'Ambiente
        </p>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-none">
          <span className="block">VOLA</span>
          <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-green-200">
            Salerno
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-green-100 max-w-2xl mx-auto mb-4 leading-relaxed">
          Proteggiamo l'ambiente e gli animali del territorio salernitano,
          perché ogni vita merita rispetto.
        </p>
        <p className="text-base text-green-200/80 max-w-xl mx-auto mb-12">
          Dal 2010 al fianco della natura e degli animali abbandonati della Campania.
          Insieme facciamo la differenza.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#adozioni"
            className="bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Adotta un amico
          </a>
          <a
            href="#chi-siamo"
            className="border-2 border-white/60 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Scopri chi siamo
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-green-200">
          <div className="text-center">
            <div className="text-3xl font-black text-white">300+</div>
            <div className="text-sm">Animali salvati</div>
          </div>
          <div className="w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-black text-white">150+</div>
            <div className="text-sm">Volontari attivi</div>
          </div>
          <div className="w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-black text-white">14</div>
            <div className="text-sm">Anni di impegno</div>
          </div>
        </div>
      </div>

      <a
        href="#chi-siamo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scorri verso il basso"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
}

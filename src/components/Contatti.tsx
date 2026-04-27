import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

export default function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Messaggio da ${form.nome} - Sito VOLA`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.messaggio}`
    );
    window.location.href = `mailto:info@vola-salerno.it?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contatti" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Contatti
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Siamo qui
            <span className="text-green-700 block">per te</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-xl mx-auto leading-relaxed">
            Hai domande, vuoi fare volontariato, o hai bisogno di segnalare un animale in difficoltà?
            Scrivici!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-xl mb-6">Mandaci un messaggio</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome *</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Il tuo nome"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="la.tua@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Messaggio *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.messaggio}
                    onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                    placeholder="Come possiamo aiutarti?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  {sent ? (
                    'Messaggio inviato!'
                  ) : (
                    <>
                      <Send size={18} />
                      Invia messaggio
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-xl mb-6">Dove siamo</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sede operativa</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Via Irno, 45 – 84135 Salerno SA
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Aperto: Lun–Ven 9:00–13:00 / 15:00–19:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:info@vola-salerno.it"
                      className="text-green-700 text-sm hover:underline"
                    >
                      info@vola-salerno.it
                    </a>
                    <br />
                    <a
                      href="mailto:adozioni@vola-salerno.it"
                      className="text-green-700 text-sm hover:underline"
                    >
                      adozioni@vola-salerno.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefono</p>
                    <a
                      href="tel:+390892345678"
                      className="text-gray-600 text-sm hover:text-green-700 transition-colors"
                    >
                      089 234 5678
                    </a>
                    <p className="text-gray-500 text-xs mt-1">
                      Segnalazioni urgenti: <a href="tel:+393334567890" className="text-green-700 hover:underline">333 456 7890</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-xl mb-6">Seguici sui social</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  <FacebookIcon size={18} />
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm"
                >
                  <InstagramIcon size={18} />
                  Instagram
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4 text-center">
                Seguici per aggiornamenti quotidiani sugli animali e gli eventi!
              </p>
            </div>

            <div className="bg-green-700 text-white rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-2">Vuoi diventare volontario?</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-4">
                Ogni sabato mattina alle 9:30 teniamo una riunione di benvenuto per i nuovi
                volontari nella nostra sede di Via Irno. Vieni a trovarci!
              </p>
              <a
                href="mailto:volontari@vola-salerno.it"
                className="inline-block bg-white text-green-700 px-5 py-2 rounded-full font-bold text-sm hover:bg-green-50 transition-colors"
              >
                Iscriviti come volontario
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

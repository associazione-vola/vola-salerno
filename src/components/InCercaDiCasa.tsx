import { Heart, MessageCircle } from 'lucide-react';

const Instagram = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function AdozioniPermanenti() {
  // 3 foto rappresentative fisse (non scadono mai)
  const gridPhotos = [
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80", // Cane sorridente
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80", // Gatto
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80", // Cane adulto
  ];

  return (
    <section id="adozioni" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Intestazione */}
        <div className="text-center mb-12">
          <Instagram size={40} className="mx-auto text-pink-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Chi cerca casa oggi?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aggiorniamo le nostre adozioni quotidianamente su Instagram. Unisciti alla nostra community per scoprire i cuccioli che hanno bisogno di te.
          </p>
        </div>

        {/* LA GRIGLIA "FINTO WIDGET" (Permanente) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 sm:[&>*:last-child]:col-span-2 sm:[&>*:last-child]:justify-self-center sm:[&>*:last-child]:max-w-xs md:[&>*:last-child]:col-span-1 md:[&>*:last-child]:justify-self-stretch md:[&>*:last-child]:max-w-none">
          {gridPhotos.map((photo, index) => (
            <a
              key={index}
              href="https://www.instagram.com/vola_volontariambiente?igsh=MW5uNWNkdnd6cHVkYg=="
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-200 rounded-xl"
            >
              {/* L'immagine statica */}
              <img
                src={photo}
                alt="Animale in cerca di adozione"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* L'overlay scuro che appare quando ci passi sopra col mouse (Stile Instagram) */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2 font-bold">
                  <Heart fill="currentColor" size={24} />
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <MessageCircle fill="currentColor" size={24} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action chiara */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/vola_volontariambiente?igsh=MW5uNWNkdnd6cHVkYg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-1"
          >
            <Instagram size={20} />
            Vai al nostro profilo Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
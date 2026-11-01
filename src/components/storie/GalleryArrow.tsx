import { ChevronLeft, ChevronRight } from 'lucide-react';

// Freccia per scorrere la galleria con il mouse: compare solo quando il cursore è vicino al lato
// (o quando riceve il focus da tastiera), così non copre le card e resta raggiungibile con Tab.
export default function GalleryArrow({ side, visible, onClick }: { side: 'left' | 'right'; visible: boolean; onClick: () => void }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Mostra le storie precedenti' : 'Mostra altre storie'}
      className={`absolute top-1/2 -translate-y-1/2 ${side === 'left' ? 'left-3' : 'right-3'} z-20 w-11 h-11 rounded-full bg-white text-green-700 border border-green-100 shadow-md flex items-center justify-center hover:bg-green-50 transition-opacity duration-200 motion-reduce:transition-none ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none focus-visible:opacity-100 focus-visible:pointer-events-auto'
      }`}
    >
      <Icon size={22} aria-hidden="true" />
    </button>
  );
}

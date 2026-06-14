import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Ordered to match page scroll flow
const NAV_LINKS = [
  { label: '5×1000',    href: '#5x1000',    id: '5x1000'    },
  { label: 'Chi Siamo', href: '#chi-siamo', id: 'chi-siamo' },
  { label: 'Storie',    href: '#storie',    id: 'storie'    },
  { label: 'Emergenze', href: '#emergenze', id: 'emergenze' },
  { label: 'Contatti',  href: '#contatti',  id: 'contatti'  },
];

// All trackable section IDs in scroll order (includes adozioni for the CTA)
const SECTION_IDS = ['5x1000', 'chi-siamo', 'storie', 'adozioni', 'emergenze', 'contatti'];

// A section is "active" when its top edge has passed 100px below the viewport top
const THRESHOLD = 100;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    let ticking = false;

    const update = () => {
      let found = '';
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.getBoundingClientRect().top <= THRESHOLD) {
          found = SECTION_IDS[i];
          break;
        }
      }
      setActiveId(prev => (prev === found ? prev : found));
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const ctaActive = activeId === 'adozioni';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group flex-shrink-0" onClick={closeMenu}>
            <img src="/logo.svg" alt="VOLA logo" className="w-14 h-14 object-contain" />
            <div className="leading-tight">
              <span className="font-bold text-green-800 text-lg block leading-none">VOLA</span>
              <span className="text-xs text-green-800 font-medium">Salerno</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 rounded-lg font-medium text-sm transition-colors duration-150 group"
                  style={{ color: isActive ? '#15803d' : '#4b5563' }}
                >
                  {/* Subtle bg pill on active */}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-lg"
                      style={{ backgroundColor: 'rgba(21,128,61,0.07)' }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                  {/* Animated underline */}
                  <span
                    className="absolute bottom-1 left-3 right-3 h-0.5 bg-green-600 rounded-full transition-all duration-300 origin-left"
                    style={{
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </a>
              );
            })}

            {/* CTA: Adotta ora — active ring when #adozioni is in view */}
            <a
              href="#adozioni"
              className="ml-3 px-4 py-2 rounded-full text-sm font-semibold bg-green-700 text-white hover:bg-green-600 transition-all duration-200"
              style={{
                boxShadow: ctaActive
                  ? '0 0 0 3px rgba(21,128,61,0.28), 0 2px 8px rgba(21,128,61,0.25)'
                  : '0 1px 3px rgba(0,0,0,0.10)',
              }}
            >
              Adotta ora
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white bg-green-600 hover:bg-green-600 transition-colors shadow-sm"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-green-100 bg-white/98 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-2 py-3 text-sm font-medium transition-colors border-b border-gray-50 last:border-0"
                  style={{ color: isActive ? '#15803d' : '#374151' }}
                >
                  {/* Active dot */}
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                    style={{ backgroundColor: isActive ? '#15803d' : 'transparent' }}
                  />
                  {link.label}
                </a>
              );
            })}
            <a
              href="#adozioni"
              onClick={closeMenu}
              className="mt-3 bg-green-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors text-center"
            >
              Adotta ora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

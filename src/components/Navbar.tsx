import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const links = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Storie', href: '#storie' },
  { label: 'Adozioni', href: '#adozioni' },
  { label: 'Raccolte Fondi', href: '#raccolta-fondi' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
              <Leaf size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-green-800 text-lg block leading-none">VOLA</span>
              <span className="text-xs text-amber-700 font-medium">Salerno</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-green-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#adozioni"
              className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              Adotta ora
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-green-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#adozioni"
              className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors text-center"
              onClick={() => setOpen(false)}
            >
              Adotta ora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

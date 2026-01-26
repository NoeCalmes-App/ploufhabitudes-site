import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/image/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'Confidentialité', path: '/privacy' },
    { label: 'Conditions', path: '/terms' },
    { label: 'Support', path: '/support' }
  ];

  return (
    <header className="bg-plouf-card sticky top-0 z-50 border-b border-plouf-border shadow-soft">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Plouf Habitudes Logo" className="h-7" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? 'text-plouf-title'
                  : 'text-plouf-subtitle hover:text-plouf-title'
              } transition-colors font-medium`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-plouf-title"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-plouf-card border-b border-plouf-border shadow-soft">
          <div className="px-6 py-4">
            <div className="flex flex-col gap-3">
              {links.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-plouf-title bg-plouf-background-secondary'
                      : 'text-plouf-subtitle'
                  } font-semibold hover:bg-plouf-background-secondary transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

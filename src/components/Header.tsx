import { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoFr from '../assets/logo.svg';
import logoEn from '../assets/logo.en.svg';

interface HeaderProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = {
    en: [
      { label: 'Privacy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
      { label: 'Support', path: '/support' }
    ],
    fr: [
      { label: 'Confidentialité', path: '/privacy' },
      { label: 'Conditions', path: '/terms' },
      { label: 'Support', path: '/support' }
    ]
  };

  const languages = {
    en: 'English',
    fr: 'Français'
  };

  const links = navLinks[lang];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-plouf-card sticky top-0 z-50 border-b border-plouf-border shadow-soft">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={lang === 'en' ? logoEn : logoFr} alt="Plouf Habitudes Logo" className="h-7" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-plouf-background-secondary rounded-lg border border-plouf-border text-plouf-title font-medium hover:bg-plouf-background transition-colors"
            >
              <span>{languages[lang]}</span>
              <ChevronDown size={16} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 bg-plouf-card rounded-lg shadow-soft-lg overflow-hidden min-w-[140px] border border-plouf-border">
                <button
                  onClick={() => {
                    setLang('fr');
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-plouf-background-secondary transition-colors ${
                    lang === 'fr' ? 'bg-plouf-background-secondary text-plouf-title font-semibold' : 'text-plouf-subtitle'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => {
                    setLang('en');
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-plouf-background-secondary transition-colors ${
                    lang === 'en' ? 'bg-plouf-background-secondary text-plouf-title font-semibold' : 'text-plouf-subtitle'
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>

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
              <div className="px-4 py-2 bg-plouf-background-secondary rounded-lg border border-plouf-border">
                <div className="flex items-center gap-2 text-plouf-subtitle text-sm mb-2">
                  <Globe size={16} />
                  <span className="font-medium">Langue</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setLang('fr');
                      setMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg border border-plouf-border text-sm font-medium transition-colors ${
                      lang === 'fr' ? 'bg-plouf-button-bg text-plouf-button-text' : 'bg-plouf-background text-plouf-subtitle'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => {
                      setLang('en');
                      setMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg border border-plouf-border text-sm font-medium transition-colors ${
                      lang === 'en' ? 'bg-plouf-button-bg text-plouf-button-text' : 'bg-plouf-background text-plouf-subtitle'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

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

import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';

export default function Footer() {
  const text = {
    privacy: 'Confidentialité',
    terms: 'Conditions',
    support: 'Support',
    copyright: '© 2025 Plouf Habitudes. Tous droits réservés.'
  };

  return (
    <footer className="bg-plouf-background text-plouf-title py-12 px-6 border-t border-plouf-border shadow-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-plouf-title">Plouf Habitudes</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-plouf-subtitle hover:text-plouf-title transition-colors">
              {text.privacy}
            </Link>
            <Link to="/terms" className="text-plouf-subtitle hover:text-plouf-title transition-colors">
              {text.terms}
            </Link>
            <Link to="/support" className="text-plouf-subtitle hover:text-plouf-title transition-colors">
              {text.support}
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-sm text-plouf-subtitle">
          {text.copyright}
        </div>
      </div>
    </footer>
  );
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'plouf': {
          'background': '#fdefeb',           // Fond principal (blanc chaud)
          'background-secondary': '#fcebe4', // Fond secondaire (crème rosé)
          'title': '#3F3A36',                // Titres (gris foncé chaud)
          'subtitle': '#7A6F68',             // Sous-titres (brun doux)
          'button-bg': '#E99483',            // Boutons principaux (corail)
          'button-text': '#FFFFFF',          // Texte sur boutons
          'icon': '#FFFFFF',                 // Icônes sur boutons
          'border': '#F7E1CE',               // Bordures (beige)
          'card': '#FFFFFF',                 // Cartes (blanc pur)
          'success': '#aabfad',              // Vert progression
          'inactive': '#DADADA',             // Gris inactif
        }
      },
      boxShadow: {
        'soft': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};

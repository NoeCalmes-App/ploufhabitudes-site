import appLogo from '../assets/image/app.png';

interface HeroProps {
  lang: 'en' | 'fr';
}

const AppleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
);

export default function Hero({ lang }: HeroProps) {
  const content = {
    en: {
      title: 'Build habits that stick',
      subtitle: 'Your daily companion for positive routines',
      description: 'Track your habits with ease. Set daily goals, maintain streaks, and celebrate your progress. Simple, beautiful, and effective.',
      appStore: 'Download on the App Store',
      googlePlay: 'Get it on Google Play'
    },
    fr: {
      title: 'Crée des habitudes qui durent',
      subtitle: 'Ton compagnon quotidien pour des routines positives',
      description: 'Suis tes habitudes facilement. Définis tes objectifs quotidiens, maintiens tes séries, et célèbre tes progrès. Simple, beau, et efficace.',
      appStore: 'Télécharger sur l\'App Store',
      googlePlay: 'Disponible sur Google Play'
    }
  };

  const text = content[lang];

  return (
    <section className="bg-plouf-background pt-12 pb-16 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <p className="text-lg md:text-2xl text-plouf-subtitle mb-2 md:mb-4 font-normal">
              {text.subtitle}
            </p>
            <h1 className="text-3xl md:text-6xl font-bold text-plouf-title mb-4 md:mb-4">
              {text.title}
            </h1>
            <p className="text-sm md:text-lg text-plouf-subtitle mb-7 md:mb-9">
              {text.description}
            </p>
            <div className="flex flex-row gap-2 md:gap-4 w-full md:w-auto">
              <a
                href="#"
                className="flex-1 md:flex-initial flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-plouf-button-bg text-plouf-button-text rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg whitespace-nowrap"
              >
                <AppleIcon />
                <span className="hidden sm:inline">{text.appStore}</span>
                <span className="sm:hidden">App Store</span>
              </a>
              <a
                href="#"
                className="flex-1 md:flex-initial flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-plouf-card text-plouf-title border border-plouf-border rounded-xl text-sm md:text-base font-semibold hover:bg-plouf-background-secondary transition-all hover:-translate-y-1 shadow-lg whitespace-nowrap"
              >
                <GooglePlayIcon />
                <span className="hidden sm:inline">{text.googlePlay}</span>
                <span className="sm:hidden">Play Store</span>
              </a>
            </div>
          </div>

          <div className="order-2">
            <img src={appLogo} alt="Plouf Habitudes App" className="w-52 h-52 md:w-72 md:h-72 rounded-2xl mx-auto shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

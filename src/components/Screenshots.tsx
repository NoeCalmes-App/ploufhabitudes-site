import image1 from '../assets/image/1.png';
import image2 from '../assets/image/2.png';
import image3 from '../assets/image/3.png';
import image4 from '../assets/image/4.png';

interface ScreenshotsProps {
  lang: 'en' | 'fr';
}

export default function Screenshots({ lang }: ScreenshotsProps) {
  const content = {
    en: {
      title: 'See it in action'
    },
    fr: {
      title: 'Découvre l\'app'
    }
  };

  const text = content[lang];
  const screenshots = [image1, image2, image3, image4];

  return (
    <section className="py-20 px-6 bg-plouf-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-plouf-title mb-10 md:mb-16">
          {text.title}
        </h2>
        <div className="flex gap-6 md:justify-center overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 snap-center hover:shadow-xl transition-shadow duration-300 rounded-3xl"
            >
              <img
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-auto rounded-3xl border-2 border-plouf-border border-opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle, Flame, Calendar, Bell, Sparkles, BarChart3 } from 'lucide-react';

interface FeaturesProps {
  lang: 'en' | 'fr';
}

export default function Features({ lang }: FeaturesProps) {
  const content = {
    en: {
      title: 'Features',
      features: [
        {
          icon: CheckCircle,
          title: 'Daily Tracking',
          description: 'Mark your habits as done with a simple tap. Track your progress day by day.'
        },
        {
          icon: Flame,
          title: 'Streaks',
          description: 'Keep your motivation high with streaks. See how many days in a row you\'ve completed your habits.'
        },
        {
          icon: Calendar,
          title: 'Flexible Schedule',
          description: 'Set habits for specific days or every day. Your routine, your rules.'
        },
        {
          icon: Bell,
          title: 'Smart Reminders',
          description: 'Never forget a habit with customizable notifications at the perfect time.'
        },
        {
          icon: Sparkles,
          title: 'Beautiful Design',
          description: 'A warm and cozy interface that makes tracking your habits a pleasure.'
        },
        {
          icon: BarChart3,
          title: 'Statistics',
          description: 'Visualize your progress with clear charts and celebrate your achievements.'
        }
      ]
    },
    fr: {
      title: 'Fonctionnalités',
      features: [
        {
          icon: CheckCircle,
          title: 'Suivi Quotidien',
          description: 'Marque tes habitudes comme faites d\'un simple tap. Suis tes progrès jour après jour.'
        },
        {
          icon: Flame,
          title: 'Séries',
          description: 'Garde ta motivation avec les séries. Vois combien de jours consécutifs tu as complété tes habitudes.'
        },
        {
          icon: Calendar,
          title: 'Planning Flexible',
          description: 'Définis des habitudes pour certains jours ou tous les jours. Ta routine, tes règles.'
        },
        {
          icon: Bell,
          title: 'Rappels Intelligents',
          description: 'N\'oublie jamais une habitude grâce aux notifications personnalisables au moment idéal.'
        },
        {
          icon: Sparkles,
          title: 'Design Soigné',
          description: 'Une interface chaleureuse et cocooning qui rend le suivi de tes habitudes agréable.'
        },
        {
          icon: BarChart3,
          title: 'Statistiques',
          description: 'Visualise tes progrès avec des graphiques clairs et célèbre tes réussites.'
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className="py-20 px-6 bg-plouf-background-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-plouf-title mb-10 md:mb-16">
          {text.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {text.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-plouf-card p-8 rounded-2xl shadow-soft hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-plouf-button-bg rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-plouf-icon" />
                </div>
                <h3 className="text-xl font-bold text-plouf-title mb-3">
                  {feature.title}
                </h3>
                <p className="text-plouf-subtitle text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

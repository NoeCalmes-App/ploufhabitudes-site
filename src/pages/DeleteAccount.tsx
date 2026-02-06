import { useContext } from 'react';
import { LanguageContext } from '../App';
import { Link } from 'react-router-dom';
import { Trash2, Mail, Smartphone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DeleteAccount() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Account & Data Deletion',
      subtitle: 'Plouff Habitudes',
      howTo: 'How to delete your account',
      howToDescription: 'You can request the deletion of your account and all associated data using one of the following methods:',
      option1Title: 'Option 1: In the app',
      option1Description: 'Open the app \u2192 Settings \u2192 Delete my account. Your account and all data will be permanently deleted.',
      option2Title: 'Option 2: By email',
      option2Description: 'Send an email to',
      option2Suffix: 'with the subject "Account Deletion Request". Please include the email address associated with your account. We will process your request within 7 business days.',
      whatDeleted: 'What data is deleted',
      whatDeletedDescription: 'When you request account deletion, the following data is permanently removed:',
      deletedData: [
        'Your user profile and authentication data',
        'Personal habits and daily tracking history',
        'Personal quotes and favorites',
        'Mood entries',
        'All synced data stored on our servers (Firebase)'
      ],
      retention: 'Data retention',
      retentionText1: 'All user data is deleted within 30 days of the deletion request. No personal data is retained after this period.',
      retentionText2: 'Anonymous, aggregated analytics data (not linked to your identity) may be retained.',
      backHome: '\u2190 Back to home'
    },
    fr: {
      title: 'Suppression de compte et donn\u00e9es',
      subtitle: 'Plouff Habitudes',
      howTo: 'Comment supprimer ton compte',
      howToDescription: 'Tu peux demander la suppression de ton compte et de toutes les donn\u00e9es associ\u00e9es en utilisant l\'une des m\u00e9thodes suivantes :',
      option1Title: 'Option 1 : Dans l\'application',
      option1Description: 'Ouvre l\'application \u2192 Param\u00e8tres \u2192 Supprimer mon compte. Ton compte et toutes tes donn\u00e9es seront d\u00e9finitivement supprim\u00e9s.',
      option2Title: 'Option 2 : Par email',
      option2Description: 'Envoie un email \u00e0',
      option2Suffix: 'avec le sujet "Demande de suppression de compte". Inclus l\'adresse email associ\u00e9e \u00e0 ton compte. Nous traiterons ta demande sous 7 jours ouvrables.',
      whatDeleted: 'Quelles donn\u00e9es sont supprim\u00e9es',
      whatDeletedDescription: 'Lorsque tu demandes la suppression de ton compte, les donn\u00e9es suivantes sont d\u00e9finitivement supprim\u00e9es :',
      deletedData: [
        'Ton profil utilisateur et tes donn\u00e9es d\'authentification',
        'Tes habitudes personnelles et ton historique de suivi',
        'Tes citations personnelles et tes favoris',
        'Tes entr\u00e9es d\'humeur',
        'Toutes les donn\u00e9es synchronis\u00e9es stock\u00e9es sur nos serveurs (Firebase)'
      ],
      retention: 'Conservation des donn\u00e9es',
      retentionText1: 'Toutes les donn\u00e9es utilisateur sont supprim\u00e9es dans les 30 jours suivant la demande de suppression. Aucune donn\u00e9e personnelle n\'est conserv\u00e9e apr\u00e8s cette p\u00e9riode.',
      retentionText2: 'Les donn\u00e9es analytiques anonymes et agr\u00e9g\u00e9es (non li\u00e9es \u00e0 ton identit\u00e9) peuvent \u00eatre conserv\u00e9es.',
      backHome: '\u2190 Retour \u00e0 l\'accueil'
    }
  };

  const text = content[lang];

  return (
    <div className="min-h-screen bg-plouf-background">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-4xl font-bold text-plouf-title mb-2">{text.title}</h1>
        <p className="text-sm text-plouf-subtitle mb-8 italic">{text.subtitle}</p>

        <div className="bg-plouf-card rounded-2xl shadow-soft p-6 space-y-8 text-plouf-subtitle">
          <section>
            <h2 className="text-xl font-bold text-plouf-title mb-4">{text.howTo}</h2>
            <p className="leading-relaxed mb-4">{text.howToDescription}</p>

            <div className="bg-plouf-background-secondary rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <Smartphone size={24} className="text-plouf-button-bg" />
                <h3 className="font-bold text-plouf-title">{text.option1Title}</h3>
              </div>
              <p className="leading-relaxed">{text.option1Description}</p>
            </div>

            <div className="bg-plouf-background-secondary rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={24} className="text-plouf-button-bg" />
                <h3 className="font-bold text-plouf-title">{text.option2Title}</h3>
              </div>
              <p className="leading-relaxed">
                {text.option2Description}{' '}
                <a href="mailto:support@plouff-habitudes.com" className="text-plouf-button-bg hover:underline font-semibold">
                  support@plouff-habitudes.com
                </a>{' '}
                {text.option2Suffix}
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Trash2 size={24} className="text-plouf-button-bg" />
              <h2 className="text-xl font-bold text-plouf-title">{text.whatDeleted}</h2>
            </div>
            <p className="leading-relaxed mb-3">{text.whatDeletedDescription}</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              {text.deletedData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plouf-title mb-4">{text.retention}</h2>
            <p className="leading-relaxed">{text.retentionText1}</p>
            <p className="leading-relaxed mt-3">{text.retentionText2}</p>
          </section>

          <section className="pt-4 text-center">
            <Link
              to="/"
              className="text-plouf-button-bg hover:text-plouf-subtitle font-semibold"
            >
              {text.backHome}
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

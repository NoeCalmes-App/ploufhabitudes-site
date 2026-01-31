import { useContext } from 'react';
import { LanguageContext } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Terms and Conditions',
      lastUpdate: 'Last updated: January 26, 2025',
      sections: [
        {
          title: '1. PREAMBLE',
          paragraphs: [
            'These General Terms of Use (hereinafter the "Terms") aim to define the terms and conditions under which the Plouff Habitudes mobile application (hereinafter the "Application") is made available and used by any user.',
            'The Application is published by:\nCompany name / Publisher: Noé Calmes\nLegal form: Micro Enterprise\nContact email: support@plouff-habitudes.com',
            'The Application is intended for worldwide use. Certain provisions may vary according to applicable local legislation.'
          ]
        },
        {
          title: '2. DEFINITIONS',
          paragraphs: [
            'Application: the Plouff Habitudes mobile application.',
            'User: any individual using the Application.',
            'Account: personal space created by the User.',
            'Services: all features offered by the Application.',
            'Subscription: paid plan giving access to certain premium features.'
          ]
        },
        {
          title: '3. ACCEPTANCE OF TERMS',
          paragraphs: [
            'Access to and use of the Application implies full acceptance of these Terms.',
            'The User acknowledges having read the Terms before any use of the Application and accepts them without reservation.',
            'In case of disagreement with all or part of the Terms, the User must immediately cease using the Application.'
          ]
        },
        {
          title: '4. APPLICATION DESCRIPTION',
          paragraphs: [
            'Plouff Habitudes is a habit tracking application aimed at helping users build and maintain positive daily routines.',
            'The concept is based on:'
          ],
          list: [
            'Creating and tracking daily habits,',
            'Maintaining streaks to encourage consistency,',
            'Viewing progress statistics,',
            'Receiving customizable reminders.'
          ],
          footer: 'The User acknowledges that the Application is a tool to assist with habit building and that results depend on their personal commitment and consistency.'
        },
        {
          title: '5. APPLICATION ACCESS',
          paragraphs: [
            'The Application is freely accessible, with optional features accessible via subscription.',
            'Certain features require an Internet connection, Account creation and acceptance of system permissions (notifications, etc.).',
            'The User is solely responsible for configuring their device and activating necessary permissions.'
          ]
        },
        {
          title: '6. ACCOUNT CREATION',
          paragraphs: [
            'Account creation can be done via email or via third-party services such as Sign in with Apple.',
            'The User undertakes to provide accurate information and keep it updated.',
            'The User is responsible for the confidentiality of their credentials and any use of their Account.'
          ]
        },
        {
          title: '7. CONDITIONS OF USE',
          paragraphs: [
            'The User undertakes to use the Application in accordance with its purpose, not to divert features for fraudulent or illicit purposes, not to infringe the rights of the publisher or third parties and not to attempt to hinder proper operation of the Application.',
            'Any abusive use may result in suspension or deletion of the Account.'
          ]
        },
        {
          title: '8. SUBSCRIPTIONS',
          paragraphs: [
            'Certain features are accessible via subscription (monthly, annual or other plan).',
            'Pricing, renewal and cancellation terms are specified in the General Sales Conditions.'
          ]
        },
        {
          title: '9. INTELLECTUAL PROPERTY',
          paragraphs: [
            'The Application, its content, code, design and trademarks are protected by intellectual property law.',
            'Any unauthorized reproduction, representation or exploitation is strictly prohibited.'
          ]
        },
        {
          title: '10. APPLICATION AVAILABILITY',
          paragraphs: [
            'The publisher strives to ensure 24/7 access to the Application, without however guaranteeing continuous availability.',
            'Interruptions may occur particularly for maintenance or updates.'
          ]
        },
        {
          title: '11. LIABILITY',
          paragraphs: [
            'The Application is provided "as is".',
            'The publisher cannot be held liable for malfunctions related to hardware or operating system, data loss or indirect damages.'
          ]
        },
        {
          title: '12. PERSONAL DATA',
          paragraphs: [
            'Personal data is processed in accordance with applicable regulations, particularly the General Data Protection Regulation (GDPR).',
            'Processing terms are detailed in the Application\'s Privacy Policy.'
          ]
        },
        {
          title: '13. CHANGES TO TERMS',
          paragraphs: [
            'The publisher reserves the right to modify these Terms at any time.',
            'The User will be informed of any substantial modification.'
          ]
        },
        {
          title: '14. DURATION AND TERMINATION',
          paragraphs: [
            'The Terms are concluded for an indefinite period.',
            'The User may stop using the Application at any time.',
            'The publisher may suspend or terminate access in case of Terms violation.'
          ]
        },
        {
          title: '15. APPLICABLE LAW AND JURISDICTION',
          paragraphs: [
            'These Terms are governed by French law.',
            'In case of dispute, and failing amicable resolution, the competent courts will be those of the publisher\'s registered office, subject to applicable mandatory provisions.'
          ]
        },
        {
          title: '16. CONTACT',
          paragraphs: [
            'For any question relating to these Terms and Conditions:'
          ]
        }
      ]
    },
    fr: {
      title: 'Conditions générales d\'utilisation',
      lastUpdate: 'Dernière mise à jour : 26 janvier 2025',
      sections: [
        {
          title: '1. PRÉAMBULE',
          paragraphs: [
            'Les présentes Conditions Générales d\'Utilisation (ci-après les « CGU ») ont pour objet de définir les modalités et conditions dans lesquelles l\'application mobile Plouff Habitudes (ci-après l\'« Application ») est mise à disposition et utilisée par tout utilisateur.',
            'L\'Application est éditée par :\nNom de la société / Éditeur : Noé Calmes\nForme juridique : Micro Entreprise\nEmail de contact : support@plouff-habitudes.com',
            'L\'Application est destinée à être utilisée dans le monde entier. Certaines dispositions peuvent varier selon la législation locale applicable.'
          ]
        },
        {
          title: '2. DÉFINITIONS',
          paragraphs: [
            'Application : l\'application mobile Plouff Habitudes.',
            'Utilisateur : toute personne physique utilisant l\'Application.',
            'Compte : espace personnel créé par l\'Utilisateur.',
            'Services : ensemble des fonctionnalités proposées par l\'Application.',
            'Abonnement : formule payante donnant accès à certaines fonctionnalités premium.'
          ]
        },
        {
          title: '3. ACCEPTATION DES CGU',
          paragraphs: [
            'L\'accès et l\'utilisation de l\'Application impliquent l\'acceptation pleine et entière des présentes CGU.',
            'L\'Utilisateur reconnaît avoir pris connaissance des CGU avant toute utilisation de l\'Application et les accepter sans réserve.',
            'En cas de désaccord avec tout ou partie des CGU, l\'Utilisateur doit cesser immédiatement l\'utilisation de l\'Application.'
          ]
        },
        {
          title: '4. DESCRIPTION DE L\'APPLICATION',
          paragraphs: [
            'Plouff Habitudes est une application de suivi d\'habitudes visant à aider les utilisateurs à construire et maintenir des routines quotidiennes positives.',
            'Le concept repose notamment sur :'
          ],
          list: [
            'La création et le suivi d\'habitudes quotidiennes,',
            'Le maintien de séries pour encourager la régularité,',
            'La visualisation de statistiques de progression,',
            'La réception de rappels personnalisables.'
          ],
          footer: 'L\'Utilisateur reconnaît que l\'Application est un outil d\'aide à la création d\'habitudes et que les résultats dépendent de son engagement personnel et de sa régularité.'
        },
        {
          title: '5. ACCÈS À L\'APPLICATION',
          paragraphs: [
            'L\'Application est accessible gratuitement, avec des fonctionnalités optionnelles accessibles via abonnement.',
            'Certaines fonctionnalités nécessitent une connexion Internet, la création d\'un Compte et l\'acceptation de permissions système (notifications, etc.).',
            'L\'Utilisateur est seul responsable de la configuration de son appareil et de l\'activation des autorisations nécessaires.'
          ]
        },
        {
          title: '6. CRÉATION DE COMPTE',
          paragraphs: [
            'La création d\'un Compte peut s\'effectuer via une adresse email ou via des services tiers tels que Sign in with Apple.',
            'L\'Utilisateur s\'engage à fournir des informations exactes et à les maintenir à jour.',
            'L\'Utilisateur est responsable de la confidentialité de ses identifiants et de toute utilisation de son Compte.'
          ]
        },
        {
          title: '7. CONDITIONS D\'UTILISATION',
          paragraphs: [
            'L\'Utilisateur s\'engage à utiliser l\'Application conformément à sa finalité, à ne pas détourner les fonctionnalités à des fins frauduleuses ou illicites, à ne pas porter atteinte aux droits de l\'éditeur ou de tiers et à ne pas tenter d\'entraver le bon fonctionnement de l\'Application.',
            'Toute utilisation abusive pourra entraîner la suspension ou la suppression du Compte.'
          ]
        },
        {
          title: '8. ABONNEMENTS',
          paragraphs: [
            'Certaines fonctionnalités sont accessibles via abonnement (mensuel, annuel ou autre formule).',
            'Les modalités tarifaires, de renouvellement et de résiliation sont précisées dans les Conditions Générales de Vente.'
          ]
        },
        {
          title: '9. PROPRIÉTÉ INTELLECTUELLE',
          paragraphs: [
            'L\'Application, son contenu, son code, son design et ses marques sont protégés par le droit de la propriété intellectuelle.',
            'Toute reproduction, représentation ou exploitation non autorisée est strictement interdite.'
          ]
        },
        {
          title: '10. DISPONIBILITÉ DE L\'APPLICATION',
          paragraphs: [
            'L\'éditeur s\'efforce d\'assurer l\'accès à l\'Application 24h/24 et 7j/7, sans toutefois garantir une disponibilité continue.',
            'Des interruptions peuvent intervenir notamment pour maintenance ou mise à jour.'
          ]
        },
        {
          title: '11. RESPONSABILITÉ',
          paragraphs: [
            'L\'Application est fournie « en l\'état ».',
            'L\'éditeur ne saurait être tenu responsable des dysfonctionnements liés au matériel ou au système d\'exploitation, de pertes de données ou de dommages indirects.'
          ]
        },
        {
          title: '12. DONNÉES PERSONNELLES',
          paragraphs: [
            'Les données personnelles sont traitées conformément à la réglementation applicable, notamment le Règlement Général sur la Protection des Données (RGPD).',
            'Les modalités de traitement sont détaillées dans la Politique de Confidentialité de l\'Application.'
          ]
        },
        {
          title: '13. MODIFICATION DES CGU',
          paragraphs: [
            'L\'éditeur se réserve le droit de modifier les présentes CGU à tout moment.',
            'L\'Utilisateur sera informé de toute modification substantielle.'
          ]
        },
        {
          title: '14. DURÉE ET RÉSILIATION',
          paragraphs: [
            'Les CGU sont conclues pour une durée indéterminée.',
            'L\'Utilisateur peut cesser d\'utiliser l\'Application à tout moment.',
            'L\'éditeur peut suspendre ou résilier l\'accès en cas de violation des CGU.'
          ]
        },
        {
          title: '15. DROIT APPLICABLE ET JURIDICTION COMPÉTENTE',
          paragraphs: [
            'Les présentes CGU sont régies par le droit français.',
            'En cas de litige, et à défaut de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social de l\'éditeur, sous réserve des dispositions impératives applicables.'
          ]
        },
        {
          title: '16. CONTACT',
          paragraphs: [
            'Pour toute question relative aux présentes Conditions Générales d\'Utilisation :'
          ]
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <div className="min-h-screen bg-plouf-background">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-4xl font-bold text-plouf-title mb-2">{text.title}</h1>

        <p className="text-sm text-plouf-subtitle mb-8 italic">
          {text.lastUpdate}
        </p>

        <div className="bg-plouf-card rounded-2xl shadow-soft p-6 space-y-8 text-plouf-subtitle">
          {text.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-bold text-plouf-title mb-4">{section.title}</h2>

              {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className={`leading-relaxed ${pIndex > 0 ? 'mt-3' : ''}`}>
                  {paragraph.split('\n').map((line, lIndex) => (
                    <span key={lIndex}>
                      {line.includes('Noé Calmes') || line.includes('support@plouff-habitudes.com') ? (
                        <strong>{line}</strong>
                      ) : (
                        line
                      )}
                      {lIndex < paragraph.split('\n').length - 1 && <><br /></>}
                    </span>
                  ))}
                </p>
              ))}

              {section.list && (
                <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-3">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="leading-relaxed mt-3">{section.footer}</p>
              )}

              {index === text.sections.length - 1 && (
                <p className="leading-relaxed mt-3">
                  Email: <a href="mailto:support@plouff-habitudes.com" className="text-plouf-button-bg hover:underline font-semibold">
                    support@plouff-habitudes.com
                  </a>
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { useContext } from 'react';
import { LanguageContext } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdate: 'Last updated: January 26, 2025',
      sections: [
        {
          title: '1. PREAMBLE',
          paragraphs: [
            'This Privacy Policy aims to inform users of the Plouff Habitudes mobile application (hereinafter the "Application") about how their personal data is collected, used and protected.',
            'Plouff Habitudes attaches particular importance to respect for privacy and processes personal data in accordance with the General Data Protection Regulation (EU) 2016/679 ("GDPR") and applicable French legislation.'
          ]
        },
        {
          title: '2. DATA CONTROLLER',
          paragraphs: [
            'The controller of personal data is:',
            'Company name / Publisher: Noé Calmes\nLegal form: Micro Enterprise\nContact email: support@plouff-habitudes.com',
            'For any question relating to personal data, the User can contact the publisher at the address indicated above.'
          ]
        },
        {
          title: '3. PERSONAL DATA COLLECTED',
          paragraphs: [
            'Depending on the use of the Application, the following data may be collected:'
          ],
          list: [
            'Identification data: email address, user identifier, information related to login via Apple (Sign in with Apple),',
            'Account data: user preferences, habit settings, progress data,',
            'Payment data: subscription-related information (no access or storage of banking data),',
            'Technical data: device type, operating system, logs, performance and crash data.'
          ]
        },
        {
          title: '4. PROCESSING PURPOSES',
          paragraphs: [
            'Personal data is collected for the following purposes:'
          ],
          list: [
            'Provide and ensure proper operation of the Application,',
            'Track habits and display progress statistics,',
            'Manage user accounts,',
            'Manage subscriptions and payments,',
            'Allow integration of third-party services (Apple),',
            'Improve user experience and Application stability,',
            'Provide customer support and respond to User requests.'
          ]
        },
        {
          title: '5. LEGAL BASIS FOR PROCESSING',
          paragraphs: [
            'Personal data processing is based on the following legal bases:'
          ],
          list: [
            'User consent (notifications),',
            'Performance of the contract between the User and the publisher (use of the Application and subscriptions),',
            'Compliance with legal obligations (billing, accounting),',
            'Legitimate interest of the publisher (security, service improvement).'
          ]
        },
        {
          title: '6. DATA RECIPIENTS',
          paragraphs: [
            'Personal data is intended exclusively for the Application publisher.',
            'They may be transmitted to technical service providers acting as subcontractors, including:'
          ],
          list: [
            'Payment platforms (Apple, Google),',
            'Hosting services,',
            'Analytics and crash reporting services.'
          ],
          footer: 'These providers are required to respect data confidentiality and security.'
        },
        {
          title: '7. TRANSFERS OUTSIDE THE EUROPEAN UNION',
          paragraphs: [
            'Some data may be transferred outside the European Union, particularly via third-party services.',
            'In this case, the publisher ensures that appropriate safeguards are in place in accordance with GDPR (standard contractual clauses, adequacy decisions).'
          ]
        },
        {
          title: '8. RETENTION PERIOD',
          paragraphs: [
            'Personal data is kept only for the time necessary for the purposes for which it is collected.',
            'Account data is kept as long as the Account is active. Data related to legal obligations are kept in accordance with applicable legal periods.'
          ]
        },
        {
          title: '9. USER RIGHTS',
          paragraphs: [
            'In accordance with GDPR, the User has the following rights:'
          ],
          list: [
            'Right of access to their data,',
            'Right of rectification,',
            'Right to erasure ("right to be forgotten"),',
            'Right to restriction of processing,',
            'Right to data portability,',
            'Right to object,',
            'Right to withdraw consent at any time.'
          ],
          footer: 'These rights can be exercised by contacting the publisher at the address indicated.'
        },
        {
          title: '10. DATA SECURITY',
          paragraphs: [
            'The publisher implements appropriate technical and organizational measures to ensure the security and confidentiality of personal data.',
            'However, the User acknowledges that no system is completely secure.'
          ]
        },
        {
          title: '11. CHILDREN\'S DATA',
          paragraphs: [
            'The Application is not intended for children under 13 years of age.',
            'No personal data is knowingly collected from minors without parental authorization.'
          ]
        },
        {
          title: '12. PRIVACY POLICY CHANGES',
          paragraphs: [
            'This Privacy Policy may be modified at any time.',
            'The User will be informed of any substantial modification.'
          ]
        },
        {
          title: '13. COMPLAINTS',
          paragraphs: [
            'In case of dispute relating to the processing of personal data, the User may file a complaint with the competent supervisory authority, in particular the CNIL (www.cnil.fr).'
          ]
        },
        {
          title: '14. CONTACT',
          paragraphs: [
            'For any question relating to this Privacy Policy or to the exercise of GDPR rights:'
          ]
        }
      ]
    },
    fr: {
      title: 'Politique de confidentialité',
      lastUpdate: 'Dernière mise à jour : 26 janvier 2025',
      sections: [
        {
          title: '1. PRÉAMBULE',
          paragraphs: [
            'La présente Politique de Confidentialité a pour objet d\'informer les utilisateurs de l\'application mobile Plouff Habitudes (ci-après l\'« Application ») sur la manière dont leurs données personnelles sont collectées, utilisées et protégées.',
            'Plouff Habitudes accorde une importance particulière au respect de la vie privée et traite les données personnelles conformément au Règlement Général sur la Protection des Données (UE) 2016/679 (« RGPD ») et à la législation française applicable.'
          ]
        },
        {
          title: '2. RESPONSABLE DU TRAITEMENT',
          paragraphs: [
            'Le responsable du traitement des données personnelles est :',
            'Nom de la société / Éditeur : Noé Calmes\nForme juridique : Micro Entreprise\nEmail de contact : support@plouff-habitudes.com',
            'Pour toute question relative aux données personnelles, l\'Utilisateur peut contacter l\'éditeur à l\'adresse indiquée ci-dessus.'
          ]
        },
        {
          title: '3. DONNÉES PERSONNELLES COLLECTÉES',
          paragraphs: [
            'Selon l\'utilisation de l\'Application, les données suivantes peuvent être collectées :'
          ],
          list: [
            'Données d\'identification : adresse email, identifiant utilisateur, informations liées à la connexion via Apple (Sign in with Apple),',
            'Données de compte : préférences utilisateur, paramètres d\'habitudes, données de progression,',
            'Données de paiement : informations liées aux abonnements (sans accès ni stockage des données bancaires),',
            'Données techniques : type d\'appareil, système d\'exploitation, logs, données de performance et de crash.'
          ]
        },
        {
          title: '4. FINALITÉS DU TRAITEMENT',
          paragraphs: [
            'Les données personnelles sont collectées pour les finalités suivantes :'
          ],
          list: [
            'Fournir et assurer le bon fonctionnement de l\'Application,',
            'Suivre les habitudes et afficher les statistiques de progression,',
            'Gérer les comptes utilisateurs,',
            'Gérer les abonnements et les paiements,',
            'Permettre l\'intégration de services tiers (Apple),',
            'Améliorer l\'expérience utilisateur et la stabilité de l\'Application,',
            'Assurer le support client et répondre aux demandes des Utilisateurs.'
          ]
        },
        {
          title: '5. BASES LÉGALES DU TRAITEMENT',
          paragraphs: [
            'Les traitements de données personnelles reposent sur les bases légales suivantes :'
          ],
          list: [
            'Le consentement de l\'Utilisateur (notifications),',
            'L\'exécution du contrat liant l\'Utilisateur à l\'éditeur (utilisation de l\'Application et abonnements),',
            'Le respect d\'obligations légales (facturation, comptabilité),',
            'L\'intérêt légitime de l\'éditeur (sécurité, amélioration du service).'
          ]
        },
        {
          title: '6. DESTINATAIRES DES DONNÉES',
          paragraphs: [
            'Les données personnelles sont destinées exclusivement à l\'éditeur de l\'Application.',
            'Elles peuvent être transmises à des prestataires techniques agissant en tant que sous-traitants, notamment :'
          ],
          list: [
            'Plateformes de paiement (Apple, Google),',
            'Services d\'hébergement,',
            'Services d\'analyse et de crash reporting.'
          ],
          footer: 'Ces prestataires sont tenus de respecter la confidentialité et la sécurité des données.'
        },
        {
          title: '7. TRANSFERTS HORS UNION EUROPÉENNE',
          paragraphs: [
            'Certaines données peuvent être transférées en dehors de l\'Union européenne, notamment via des services tiers.',
            'Dans ce cas, l\'éditeur s\'assure que des garanties appropriées sont mises en place conformément au RGPD (clauses contractuelles types, décisions d\'adéquation).'
          ]
        },
        {
          title: '8. DURÉE DE CONSERVATION',
          paragraphs: [
            'Les données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles sont collectées.',
            'Les données de compte sont conservées tant que le Compte est actif. Les données liées aux obligations légales sont conservées conformément aux durées légales en vigueur.'
          ]
        },
        {
          title: '9. DROITS DES UTILISATEURS',
          paragraphs: [
            'Conformément au RGPD, l\'Utilisateur dispose des droits suivants :'
          ],
          list: [
            'Droit d\'accès à ses données,',
            'Droit de rectification,',
            'Droit à l\'effacement (« droit à l\'oubli »),',
            'Droit à la limitation du traitement,',
            'Droit à la portabilité des données,',
            'Droit d\'opposition,',
            'Droit de retirer son consentement à tout moment.'
          ],
          footer: 'Ces droits peuvent être exercés en contactant l\'éditeur à l\'adresse indiquée.'
        },
        {
          title: '10. SÉCURITÉ DES DONNÉES',
          paragraphs: [
            'L\'éditeur met en œuvre des mesures techniques et organisationnelles appropriées afin de garantir la sécurité et la confidentialité des données personnelles.',
            'Toutefois, l\'Utilisateur reconnaît qu\'aucun système n\'est totalement sécurisé.'
          ]
        },
        {
          title: '11. DONNÉES DES MINEURS',
          paragraphs: [
            'L\'Application n\'est pas destinée aux enfants de moins de 13 ans.',
            'Aucune donnée personnelle n\'est collectée sciemment auprès de mineurs sans autorisation parentale.'
          ]
        },
        {
          title: '12. MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ',
          paragraphs: [
            'La présente Politique de Confidentialité peut être modifiée à tout moment.',
            'L\'Utilisateur sera informé de toute modification substantielle.'
          ]
        },
        {
          title: '13. RÉCLAMATION',
          paragraphs: [
            'En cas de litige relatif au traitement des données personnelles, l\'Utilisateur peut introduire une réclamation auprès de l\'autorité de contrôle compétente, notamment la CNIL (www.cnil.fr).'
          ]
        },
        {
          title: '14. CONTACT',
          paragraphs: [
            'Pour toute question relative à la présente Politique de Confidentialité ou à l\'exercice des droits RGPD :'
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

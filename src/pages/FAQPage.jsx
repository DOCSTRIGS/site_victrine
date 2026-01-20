import { useState } from 'react';

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Général',
      questions: [
        {
          q: 'Qui est DevCore?',
          a: 'DevCore est une agence web créative basée à Lomé, spécialisée dans la création de solutions numériques innovantes. Nous travaillons avec des entreprises locales et internationales pour transformer leurs idées en réalité.'
        },
        {
          q: 'Depuis combien de temps opérez-vous?',
          a: 'DevCore a été fondée en 2016 et a plus de 8 années d\'expérience dans le développement web. Nous avons complété avec succès plus de 10 projets majeurs.'
        },
        {
          q: 'Travaillez-vous avec des clients hors Togo?',
          a: 'Oui absolument! Nous travaillons avec des clients du monde entier. Toute la collaboration peut se faire à distance via vidéoconférence, email et autres outils collaboratifs.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          q: 'Quels services offrez-vous?',
          a: 'Nous offrons une gamme complète: sites vitrines, applications web, design UX/UI, intégrations API, optimisation de performance, et support/maintenance long terme.'
        },
        {
          q: 'Pouvez-vous refondre mon site existant?',
          a: 'Oui! Nous effectuons d\'abord un audit complet de votre site actuel, puis nous proposons une refonte qui améliore l\'expérience utilisateur, la performance et l\'SEO.'
        },
        {
          q: 'Offrez-vous du support après lancement?',
          a: 'Absolument. Nous proposons plusieurs niveaux de support et maintenance, de la simple correction de bugs aux mises à jour régulières et monitoring 24/7.'
        }
      ]
    },
    {
      category: 'Processus & Délais',
      questions: [
        {
          q: 'Quel est votre processus de travail?',
          a: 'Notre processus comprend 5 étapes: (1) Audit & Découverte, (2) Conception & Prototypage, (3) Développement Itératif, (4) Tests & Optimisation, (5) Déploiement & Support.'
        },
        {
          q: 'Combien de temps dure un projet?',
          a: 'Les délais varient selon le projet. Un site vitrine simple prend 3-6 semaines. Les applications complexes peuvent prendre 2-6 mois. Nous discutons toujours du calendrier dès le départ.'
        },
        {
          q: 'Pouvez-vous respecter les délais serrés?',
          a: 'Nous faisons de notre mieux pour respecter les délais. Cependant, nous ne compromettrons jamais la qualité. Si le délai est très court, nous discutons des compromis possibles.'
        }
      ]
    },
    {
      category: 'Tarifs & Budget',
      questions: [
        {
          q: 'Quels sont vos tarifs?',
          a: 'Nos tarifs varient selon le type et la complexité du projet. Les sites vitrines commencent à partir de 2000€. Pour les applications, nous proposons un devis personnalisé.'
        },
        {
          q: 'Puis-je obtenir un devis gratuit?',
          a: 'Oui! Nous offrons une consultation de 30 minutes gratuite pour discuter de votre projet et vous proposer une estimation initiale.'
        },
        {
          q: 'Comment fonctionnent les paiements?',
          a: 'Nous proposons généralement un calendrier de paiement en 3 étapes: (1) Acompte au démarrage, (2) à mi-parcours, (3) à la livraison. Nous pouvons discuter de conditions flexibles.'
        },
        {
          q: 'Avez-vous des options de financement?',
          a: 'Pour les projets importants, nous pouvons discuter d\'arrangements de paiement sur plusieurs mois.'
        }
      ]
    },
    {
      category: 'Technologie',
      questions: [
        {
          q: 'Quelles technologies utilisez-vous?',
          a: 'Nous utilisons une stack moderne: React pour le frontend, Node.js pour le backend, Tailwind CSS, MongoDB/PostgreSQL pour les bases de données, et déployons sur cloud (AWS, Vercel, etc).'
        },
        {
          q: 'Mes données sont-elles sécurisées?',
          a: 'Oui, nous mettons en place des mesures de sécurité strictes: SSL/TLS, encryption des données, backups réguliers, et conformité avec les normes de protection.'
        },
        {
          q: 'Mon site sera-t-il rapide?',
          a: 'Absolutely! Performance est une priorité. Nous optimisons les images, minifions le code, et mettons en place du caching pour garantir des temps de chargement < 3 secondes.'
        },
        {
          q: 'Sera-t-il SEO-friendly?',
          a: 'Oui. Nous construisons avec les meilleures pratiques SEO: métadonnées optimisées, structure HTML sémantique, sitemaps XML, et performance mobile.'
        }
      ]
    },
    {
      category: 'Maintenance & Support',
      questions: [
        {
          q: 'Que comprend le support post-lancement?',
          a: 'Le support inclut la correction des bugs, les petites améliorations, les mises à jour de sécurité, et le monitoring de la performance.'
        },
        {
          q: 'Pouvez-vous ajouter des fonctionnalités plus tard?',
          a: 'Absolument! Votre site est modulaire et peut évoluer. Nous proposons des packages de maintenance pour l\'ajout régulier de nouvelles fonctionnalités.'
        },
        {
          q: 'Quel est le coût de la maintenance?',
          a: 'La maintenance débute à partir de 300€/mois. Le coût dépend de la complexité et du niveau de support souhaité (support réactif, mises à jour régulières, etc).'
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-12 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Trouvez les réponses à vos questions sur nos services, tarifs et processus
          </p>
        </div>
        
        <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Title */}
              <div className="mb-8 pb-6 border-b-3 border-gradient-to-r from-cyan-500 to-transparent">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-950 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {category.category}
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>

              {/* Questions */}
              <div className="space-y-5">
                {category.questions.map((item, qIndex) => {
                  const uniqueIndex = `${categoryIndex}-${qIndex}`;
                  const isOpen = openIndex === uniqueIndex;

                  return (
                    <div
                      key={qIndex}
                      className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                        isOpen 
                          ? 'shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-400' 
                          : 'shadow-md hover:shadow-lg'
                      }`}
                      style={{
                        background: isOpen 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 113, 155, 0.95) 100%)'
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 249, 255, 0.98) 100%)'
                      }}
                    >
                      <button
                        onClick={() => toggleFAQ(uniqueIndex)}
                        className={`w-full px-8 py-7 flex items-start justify-between gap-4 transition-all duration-300 group`}
                      >
                        <h3 className={`text-lg font-bold text-left transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-blue-950 group-hover:text-cyan-600'
                        }`}>
                          {item.q}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen 
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 shadow-lg shadow-cyan-500/50' 
                            : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 group-hover:from-cyan-500/40 group-hover:to-blue-500/40'
                        }`}>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div className="px-8 py-7 border-t border-cyan-300/30 bg-blue-950/10 backdrop-blur-sm animate-fadeIn">
                          <p className="text-slate-100 leading-relaxed text-base">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-700/15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent mb-6">
              Vous n'avez pas trouvé votre réponse?
            </h2>
            <p className="text-xl text-violet-400 max-w-2xl mx-auto leading-relaxed">
              Notre équipe d'experts est disponible 24/7 pour répondre à toutes vos questions et transformer votre vision en réalité.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="/contact"
              className="group relative px-12 py-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-[2px] bg-slate-900 rounded-2xl"></div>
              <div className="relative z-10 flex items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-3 flex-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1 group-hover:text-indigo-300 transition-colors">Nous Contacter</h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300">Réponse en moins de 2h</p>
                  </div>
                </div>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-400 group-hover:translate-x-2 transition-all">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>

            <a
              href="mailto:contact@devcore.tg"
              className="group relative px-12 py-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-[2px] bg-slate-900 rounded-2xl"></div>
              <div className="relative z-10 flex items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-3 flex-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1 group-hover:text-blue-300 transition-colors">Email Direct</h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300">contact@devcore.tg</p>
                  </div>
                </div>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-400 group-hover:translate-x-2 transition-all">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-40 px-6 md:px-12 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 -z-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl -z-10" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent mb-6 leading-tight">
              Prêt à démarrer?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full mx-auto"></div>
          </div>
          
          <p className="text-xl text-violet-400 mb-12 max-w-2xl mx-auto">
            Obtenez une consultation gratuite et découvrez comment nous pouvons transformer votre projet en succès.
          </p>
          
          <a
            href="/contact"
            className="group relative inline-block"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-violet-700 to-violet-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            {/* Button */}
            <div className="relative px-16 py-6 bg-gradient-to-r from-violet-600 to-violet-700 text-violet-100 font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-violet-600/50 transition-all duration-300 group-hover:scale-105 group-hover:from-violet-500 group-hover:to-violet-600">
              <span className="flex items-center justify-center gap-3">
                <span>Demander une Consultation Gratuite</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;

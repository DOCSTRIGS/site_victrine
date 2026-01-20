function ServicesPage() {
  const services = [
    {
      icon: '🌐',
      title: 'Sites Vitrines',
      description: 'Présentez votre entreprise avec un site moderne et professionnel',
      features: [
        'Design responsive et moderne',
        'SEO optimisé',
        'Performance maximale',
        'Maintenance incluse'
      ],
      price: 'À partir de 2000€'
    },
    {
      icon: '🛠️',
      title: 'Applications Web',
      description: 'Des outils métier puissants pour simplifier votre quotidien',
      features: [
        'Fonctionnalités sur mesure',
        'Interface intuitive',
        'Scalabilité garantie',
        'Support technique 24/7'
      ],
      price: 'Devis personnalisé'
    },
    {
      icon: '📱',
      title: 'Intégrations & API',
      description: 'Connectez vos systèmes et automatisez vos processus',
      features: [
        'Intégration API',
        'Automatisation',
        'Data synchronisation',
        'Sécurité renforcée'
      ],
      price: 'Sur devis'
    },
    {
      icon: '🎨',
      title: 'Design UX/UI',
      description: 'Créez des interfaces magnifiques et ergonomiques',
      features: [
        'Prototypes interactifs',
        'Design system complet',
        'Tests utilisateurs',
        'Documentation design'
      ],
      price: 'À partir de 1000€'
    },
    {
      icon: '⚡',
      title: 'Optimisation & Migration',
      description: 'Améliorez la performance et modernisez vos systèmes',
      features: [
        'Audit technique',
        'Migration sécurisée',
        'Performance boost',
        'Refactoring code'
      ],
      price: 'Sur devis'
    },
    {
      icon: '🤝',
      title: 'Support & Maintenance',
      description: 'Un accompagnement continu pour votre tranquillité',
      features: [
        'Support réactif',
        'Mises à jour régulières',
        'Monitoring 24/7',
        'Garantie de disponibilité'
      ],
      price: 'À partir de 300€/mois'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-12 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Une gamme complète de solutions web pour transformer votre vision en réalité numérique
          </p>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-lg border border-cyan-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-950 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-500 font-bold mt-0.5">✓</span>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-6 border-t border-cyan-200">
                  <p className="text-lg font-semibold text-blue-950">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-16">
            Notre Processus de Travail
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Audit & Découverte',
                description: 'Nous analysons vos besoins, vos objectifs et vos défis pour créer une stratégie adaptée.'
              },
              {
                step: '02',
                title: 'Conception & Prototypage',
                description: 'Création de maquettes détaillées et prototypes interactifs validés avec vous.'
              },
              {
                step: '03',
                title: 'Développement Itératif',
                description: 'Développement en sprints courts avec retours réguliers et ajustements continus.'
              },
              {
                step: '04',
                title: 'Tests & Optimisation',
                description: 'Tests complets, optimisation des performances et préparation du lancement.'
              },
              {
                step: '05',
                title: 'Déploiement & Support',
                description: 'Mise en ligne sécurisée, formation et support post-lancement inclus.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-blue-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-16">
            Pourquoi nous choisir?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Expertise Reconnue</h3>
              <ul className="space-y-4">
                {[
                  'Plus de 8 années d\'expérience',
                  '10+ projets livrés avec succès',
                  'Équipe qualifiée et passionnée',
                  'Technologies toujours à jour'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Engagement Total</h3>
              <ul className="space-y-4">
                {[
                  'Communication transparente',
                  'Délais respectés',
                  'Budget maîtrisé',
                  'Relation long terme'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-950 to-cyan-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Parlons de votre projet
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold text-blue-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-300"
          >
            Demander un devis gratuit
          </a>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;

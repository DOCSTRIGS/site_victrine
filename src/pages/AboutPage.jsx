function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-12 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            À propos de DevCore
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Une agence créative basée à Lomé, spécialisée dans la création de solutions web 
            modernes pour les entreprises africaines et internationales
          </p>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 mb-12 text-center">Notre Histoire</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                DevCore a été fondée en 2016 avec une mission simple: transformer les idées 
                brillantes en solutions numériques exceptionnelles. Nous avons commencé petit, 
                mais avec une grande ambition.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Depuis, nous avons eu le privilège de travailler avec des dizaines d'entreprises, 
                du secteur public au privé, et nous avons appris que le succès repose sur trois piliers:
              </p>
              <ul className="space-y-4">
                {[
                  'L\'écoute active des besoins de nos clients',
                  'L\'excellence technique et l\'innovation constante',
                  'La transparence et la responsabilité'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-2xl">•</span>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-cyan-200/50">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-cyan-500 mb-2">10+</p>
                  <p className="text-slate-600">Projets réussis</p>
                </div>
                <div className="border-t border-cyan-200"></div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-cyan-500 mb-2">8+</p>
                  <p className="text-slate-600">Années d'expérience</p>
                </div>
                <div className="border-t border-cyan-200"></div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-cyan-500 mb-2">98%</p>
                  <p className="text-slate-600">Clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 mb-12 text-center">Nos Valeurs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Nous adoptons les dernières technologies pour vous offrir le meilleur',
                bgGradient: 'from-blue-600 to-cyan-500',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                )
              },
              {
                title: 'Collaboration',
                description: 'Votre succès est notre succès. Nous travaillons ensemble',
                bgGradient: 'from-blue-600 to-cyan-500',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 12H9m4 8H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4z" />
                  </svg>
                )
              },
              {
                title: 'Excellence',
                description: 'Pas de compromis sur la qualité et les performances',
                bgGradient: 'from-blue-600 to-cyan-500',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Résultats',
                description: 'Nous sommes orientés objectifs et mesurables',
                bgGradient: 'from-blue-600 to-cyan-500',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((value, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg border border-cyan-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Background gradient card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* White base card */}
                <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col">
                  {/* Icon container with animated background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.bgGradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-auto pt-6 flex gap-2">
                    <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${value.bgGradient}`}></div>
                    <div className="h-1 w-4 rounded-full bg-slate-200 group-hover:bg-white/40 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Section - Collaboration & Résultats */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Collaboration */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10 bg-white rounded-2xl p-10 shadow-xl">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white mb-6 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 12H9m4 8H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Collaboration</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Votre succès est notre succès. Nous travaillons ensemble comme un seul équipe, en maintenant une communication constante et transparente.
                </p>
                <ul className="space-y-3">
                  {[
                    'Écoute active de vos besoins',
                    'Partenariat long terme',
                    'Communication quotidienne',
                    'Votre voix compte'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex-shrink-0"></span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Résultats */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10 bg-white rounded-2xl p-10 shadow-xl">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-white mb-6 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Résultats</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Nous sommes orientés objectifs et mesurables. Chaque projet est suivi avec des KPIs clairs et des rapports réguliers.
                </p>
                <ul className="space-y-3">
                  {[
                    'Objectifs précis dès le départ',
                    'Métriques de succès mesurables',
                    'Rapports réguliers détaillés',
                    'ROI documenté'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex-shrink-0"></span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 mb-12 text-center">Pourquoi Nous?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Expertise Locale',
                description: 'Basés à Lomé, nous comprenons le contexte africain et les défis locaux'
              },
              {
                title: 'Portée Globale',
                description: 'Mais nous travaillons avec des clients du monde entier'
              },
              {
                title: 'Support 24/7',
                description: 'Une équipe toujours disponible pour vous accompagner'
              },
              {
                title: 'Tarifs Compétitifs',
                description: 'Excellente valeur sans compromettre la qualité'
              },
              {
                title: 'Transparent',
                description: 'Pas de cachés, communication claire du début à la fin'
              },
              {
                title: 'Flexible',
                description: 'Nous nous adaptons à votre budget et vos délais'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-950 to-cyan-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre projet?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold text-blue-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

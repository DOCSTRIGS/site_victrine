function HomeHighlights() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-cyan-500/15 border border-cyan-400/50 rounded-full">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">Notre Processus</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 mb-6 leading-tight">
            Comment nous transformons vos idées
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Un processus éprouvé, une équipe engagée, des résultats remarquables
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {/* Card 1 - Approche personnalisée */}
          <div className="group relative rounded-2xl bg-white backdrop-blur-sm p-8 shadow-lg border border-cyan-200/40 hover:shadow-2xl hover:border-cyan-300/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-cyan-600 transition-colors">
              Approche personnalisée
            </h3>
            <p className="text-slate-600 mb-5 leading-relaxed">
              Chaque projet est unique. Nous écoutons, comprenons vos défis et créons des solutions adaptées à vos objectifs spécifiques.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Audit et analyse approfondie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Stratégie sur mesure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Ateliers collaboratifs</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - Technologie moderne */}
          <div className="group relative rounded-2xl bg-white backdrop-blur-sm p-8 shadow-lg border border-cyan-200/40 hover:shadow-2xl hover:border-cyan-300/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 20l4-16m4 4l4 4m0 6v2m0 0v2m0-6l4-4M4 12a8 8 0 018-8m0 0a8 8 0 018 8m0 0a8 8 0 01-8 8m0 0a8 8 0 01-8-8"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-cyan-600 transition-colors">
              Technologie de pointe
            </h3>
            <p className="text-slate-600 mb-5 leading-relaxed">
              Stack moderne, scalable et performante. React, Node.js, Tailwind CSS et technologies cloud pour garantir la durabilité.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Applications ultra-rapides</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Responsive et accessible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Sécurité maximale</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - Support continu */}
          <div className="group relative rounded-2xl bg-white backdrop-blur-sm p-8 shadow-lg border border-cyan-200/40 hover:shadow-2xl hover:border-cyan-300/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-cyan-600 transition-colors">
              Support et maintenance
            </h3>
            <p className="text-slate-600 mb-5 leading-relaxed">
              Nous ne disparaissons pas après le lancement. Support continu, mises à jour et amélioration continue.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Support réactif 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Mises à jour régulières</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span>Formation et documentation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-900 rounded-3xl p-12 md:p-16 text-white shadow-2xl border border-cyan-400/20 overflow-hidden">
          {/* Animated background orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-16 text-center">
              Notre processus de développement
            </h3>
            
            <div className="grid gap-8 md:grid-cols-4">
              {/* Step 1 */}
              <div className="relative group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h4 className="text-center font-bold mb-3 text-lg group-hover:text-cyan-300 transition-colors">Découverte</h4>
                <p className="text-center text-slate-200 text-sm leading-relaxed">
                  Compréhension de vos besoins, objectifs et budget
                </p>
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-12 transition-all duration-300"></div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h4 className="text-center font-bold mb-3 text-lg group-hover:text-cyan-300 transition-colors">Design</h4>
                <p className="text-center text-slate-200 text-sm leading-relaxed">
                  Création de maquettes et prototypes interactifs
                </p>
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-12 transition-all duration-300"></div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h4 className="text-center font-bold mb-3 text-lg group-hover:text-cyan-300 transition-colors">Développement</h4>
                <p className="text-center text-slate-200 text-sm leading-relaxed">
                  Code de qualité avec retours réguliers
                </p>
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-12 transition-all duration-300"></div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <h4 className="text-center font-bold mb-3 text-lg group-hover:text-cyan-300 transition-colors">Lancement</h4>
                <p className="text-center text-slate-200 text-sm leading-relaxed">
                  Déploiement et suivi post-lancement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHighlights;

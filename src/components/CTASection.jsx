function CTASection() {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Background animé premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Prêt à démarrer?</p>
        </div>
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
          Transformez votre projet en <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">réalité</span>
        </h2>
        <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Commençons par une consultation gratuite de 30 minutes pour explorer vos besoins et présenter notre approche unique.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-blue-950 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Demander une consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg className="w-5 h-5 ml-2 relative z-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          <a
            href="/portfolio"
            className="group inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-xl hover:bg-cyan-400/20 transition-all duration-300 hover:shadow-lg"
          >
            Voir nos projets
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>

        {/* Stats mini with better design */}
        <div className="pt-12 border-t border-cyan-400/30 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group">
            <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">98%</p>
            <p className="text-sm text-cyan-100 mt-2 font-semibold group-hover:text-cyan-300 transition-colors">Clients satisfaits</p>
          </div>
          <div className="group">
            <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">2.5x</p>
            <p className="text-sm text-cyan-100 mt-2 font-semibold group-hover:text-cyan-300 transition-colors">ROI moyen</p>
          </div>
          <div className="group">
            <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">24h</p>
            <p className="text-sm text-cyan-100 mt-2 font-semibold group-hover:text-cyan-300 transition-colors">Support réactif</p>
          </div>
          <div className="group">
            <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">∞</p>
            <p className="text-sm text-cyan-100 mt-2 font-semibold group-hover:text-cyan-300 transition-colors">Scalabilité</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

function HomePage() {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl bg-slate-900 relative">
      {/* image de fond (remplace l'URL par la tienne plus tard) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative px-10 py-16 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 mb-3">
          Studio web
        </p>
        <h1 className="max-w-2xl text-4xl md:text-5xl font-bold leading-tight mb-4">
          Nous créons vos <span className="text-orange-400">meilleures</span> applications web.
        </h1>
        <p className="max-w-xl text-sm text-slate-200 mb-8">
          Des sites vitrines, plateformes métiers et dashboards modernes, conçus pour les
          entreprises qui veulent une présence en ligne fiable et professionnelle.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <button className="rounded-full bg-orange-600 px-8 py-3 text-sm font-semibold shadow-md hover:bg-orange-700 transition">
            Nos services
          </button>
          <button className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
            Contactez-nous
          </button>
        </div>

        {/* bandeau bas type onglets */}
        <div className="flex flex-wrap gap-2 rounded-2xl bg-black/40 px-4 py-3 text-xs">
          <button className="rounded-full bg-orange-600 px-4 py-1 font-semibold">
            Sites vitrines
          </button>
          <button className="rounded-full bg-white/10 px-4 py-1">
            Applications internes
          </button>
          <button className="rounded-full bg-white/10 px-4 py-1">
            Refactor / Refonte
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

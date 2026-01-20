function ServicesPage() {
  return (
    <section className="mt-10 bg-white rounded-3xl p-10 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2 text-center">
        Nos services
      </h1>
      <div className="h-0.5 w-16 bg-orange-500 mx-auto mb-6" />
      <p className="text-sm text-slate-600 max-w-3xl mx-auto mb-8 text-center">
        Nous concevons des sites vitrines, des applications web métier et des tableaux de bord
        sur‑mesure pour les entreprises et organisations.
      </p>

      <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-700">
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="font-semibold mb-2 text-slate-900">Sites vitrines</h2>
          <p>
            Présentez votre activité avec un site moderne, responsive et optimisé pour le SEO.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="font-semibold mb-2 text-slate-900">Applications internes</h2>
          <p>
            Portails RH, CRM, outils de suivi adaptés à vos processus métiers.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="font-semibold mb-2 text-slate-900">Maintenance &amp; évolution</h2>
          <p>
            Suivi, correctifs et nouvelles fonctionnalités pour vos applications existantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;

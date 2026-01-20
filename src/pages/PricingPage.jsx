function PricingPage() {
  return (
    <section className="mt-10 bg-white rounded-3xl p-10 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2 text-center">
        Nos packs de développement
      </h1>
      <div className="h-0.5 w-20 bg-orange-500 mx-auto mb-6" />
      <p className="text-sm text-slate-600 max-w-3xl mx-auto mb-8 text-center">
        Choisissez la formule adaptée à votre projet web. Les tarifs sont indicatifs et peuvent
        être ajustés selon vos besoins.
      </p>

      <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-700">
        <div className="rounded-2xl border border-orange-500 p-6 bg-orange-50">
          <p className="text-xs font-semibold text-orange-600 mb-1">Recommandé</p>
          <h2 className="text-lg font-semibold text-slate-900 mb-1">Pack Vitrine</h2>
          <p className="text-2xl font-bold text-slate-900 mb-4">À partir de 250&nbsp;000&nbsp;FCFA</p>
          <ul className="space-y-1">
            <li>Jusqu&apos;à 5 pages</li>
            <li>Design sur‑mesure</li>
            <li>Formulaire de contact</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">Pack Business</h2>
          <p className="text-2xl font-bold text-slate-900 mb-4">Sur devis</p>
          <ul className="space-y-1">
            <li>Fonctionnalités avancées</li>
            <li>Intégration API</li>
            <li>Tableaux de bord</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">Pack Maintenance</h2>
          <p className="text-2xl font-bold text-slate-900 mb-4">Mensuel</p>
          <ul className="space-y-1">
            <li>Mises à jour régulières</li>
            <li>Monitoring basique</li>
            <li>Corrections de bugs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PricingPage;

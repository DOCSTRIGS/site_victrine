function FAQPage() {
  return (
    <section className="mt-10 bg-white rounded-3xl p-10 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2 text-center">
        FAQ
      </h1>
      <div className="h-0.5 w-14 bg-orange-500 mx-auto mb-6" />
      <div className="max-w-3xl mx-auto space-y-4 text-sm text-slate-700">
        <div>
          <p className="font-semibold text-slate-900">
            Combien de temps dure un projet de site vitrine ?
          </p>
          <p>En moyenne 3 à 6 semaines selon le nombre de pages et fonctionnalités.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">
            Travaillez-vous avec des entreprises hors Togo ?
          </p>
          <p>Oui, tout le suivi peut se faire à distance.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQPage;

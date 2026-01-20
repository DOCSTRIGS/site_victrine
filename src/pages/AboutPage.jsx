function AboutPage() {
  return (
    <section className="mt-10 bg-white rounded-3xl p-10 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2 text-center">
        À propos de DevCore
      </h1>
      <div className="h-0.5 w-20 bg-orange-500 mx-auto mb-6" />
      <p className="text-sm text-slate-600 max-w-3xl mx-auto mb-6 text-center">
        DevCore est un studio spécialisé dans la conception d&apos;applications web pour les
        entreprises, institutions et startups.
      </p>

      <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
        <p>
          Nous accompagnons les organisations dans la mise en place de solutions web modernes :
          sites vitrines, portails métiers, plateformes internes.
        </p>
        <p>
          Notre équipe s&apos;appuie sur React, Node.js et les bonnes pratiques UX pour livrer des
          projets performants, évolutifs et maintenables.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-700">
        <div className="rounded-2xl border border-slate-200 p-4">
          ✔️ Plusieurs projets livrés pour des PME et structures locales.
        </div>
        <div className="rounded-2xl border border-slate-200 p-4">
          ✔️ Collaboration transparente : de la conception à la mise en production.
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

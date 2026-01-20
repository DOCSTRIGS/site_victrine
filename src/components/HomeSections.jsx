function HomeSections() {
  return (
    <section className="mt-10 space-y-10">
      {/* bloc “Pourquoi DevCore ?” */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">
          Pourquoi choisir DevCore ?
        </h2>
        <div className="h-0.5 w-16 bg-cyan-400 mx-auto mb-6" />
        <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold mb-1 text-slate-900">Design moderne</h3>
            <p>Interfaces propres, lisibles et responsives pour mobiles, tablettes et desktop.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-slate-900">Performance &amp; sécurité</h3>
            <p>Applications optimisées, intégration d&apos;API, bonnes pratiques de sécurité.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-slate-900">Suivi sur la durée</h3>
            <p>Mises à jour, corrections et évolutions en fonction de la croissance de votre activité.</p>
          </div>
        </div>
      </div>

      {/* mini “process” en 3 étapes */}
      <div className="rounded-3xl bg-slate-950 text-sky-50 p-8">
        <h2 className="text-xl font-semibold mb-2 text-center">
          Comment se passe un projet&nbsp;?
        </h2>
        <div className="h-0.5 w-20 bg-cyan-400 mx-auto mb-6" />
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300 mb-1">
              01 · Découverte
            </p>
            <p>On échange sur vos besoins, vos objectifs et vos contraintes.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300 mb-1">
              02 · Conception &amp; dev
            </p>
            <p>Maquettes, développement, tests et feedback réguliers avec votre équipe.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300 mb-1">
              03 · Déploiement
            </p>
            <p>Mise en ligne, support au lancement et accompagnement pour la suite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSections;

function ContactPage() {
  return (
    <section className="mt-10 grid gap-6 md:grid-cols-2">
      {/* Formulaire */}
      <div className="bg-slate-900 rounded-3xl p-8 text-white">
        <h2 className="text-xl font-semibold mb-2">Envoyez-nous un message</h2>
        <p className="text-sm text-slate-200 mb-6">
          Prêt à lancer votre projet web ? Décrivez‑nous vos besoins.
        </p>

        <form className="space-y-4 text-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nom et prénom"
              className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Adresse email"
              className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 outline-none focus:border-orange-500"
            />
          </div>

          <input
            type="text"
            placeholder="Nom de l'entreprise"
            className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 outline-none focus:border-orange-500"
          />

          <textarea
            rows="4"
            placeholder="Parlez-nous de votre projet..."
            className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 outline-none focus:border-orange-500"
          />

          <button className="rounded-full bg-orange-600 px-6 py-2 text-sm font-semibold text-white hover:bg-orange-700 transition">
            Envoyer le message
          </button>
        </form>
      </div>

      {/* Coordonnées */}
      <div className="bg-slate-800 rounded-3xl p-8 text-white">
        <h2 className="text-xl font-semibold mb-4">Contactez-nous</h2>
        <ul className="space-y-4 text-sm text-slate-100">
          <li>
            <p className="font-semibold">Notre adresse</p>
            <p>Lomé, Togo (adresse de ton choix)</p>
          </li>
          <li>
            <p className="font-semibold">Email</p>
            <p>contact@devcore.africa</p>
          </li>
          <li>
            <p className="font-semibold">Téléphone</p>
            <p>+228 XX XX XX XX</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactPage;

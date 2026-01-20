import { useEffect, useState } from 'react';

const slides = [
  "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg", // dev 1
  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", // dev 2
  "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",   // dev 3
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg", // dev 4
];

function HeroHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mt-6 h-[70vh] min-h-[420px] overflow-hidden rounded-3xl bg-slate-950">
      {/* slider d’images */}
      <div className="absolute inset-0 flex transition-transform duration-700 ease-out"
           style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((src, i) => (
          <div key={i} className="h-full w-full flex-shrink-0">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        ))}
      </div>

      {/* overlay bleu/cyan */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-cyan-900/40" />

      {/* contenu */}
      <div className="relative z-10 flex h-full flex-col justify-center px-10 py-8 text-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Studio de développement web
        </p>
        <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
          Nous construisons des applications web
          <span className="text-cyan-300"> qui font briller votre entreprise</span>.
        </h1>
        <p className="mb-8 max-w-xl text-sm text-sky-100/90">
          Sites vitrines, portails métiers, dashboards et outils internes&nbsp;: une seule équipe
          pour concevoir, développer et déployer vos solutions digitales sur mesure.
        </p>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="/services"
            className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:bg-cyan-300 transition"
          >
            Découvrir nos services
          </a>
          <a
            href="/contact"
            className="rounded-full border border-sky-200/70 px-8 py-3 text-sm font-semibold text-sky-100 hover:bg-sky-100/10 transition"
          >
            Discuter de votre projet
          </a>
        </div>

        {/* points de confiance */}
        <div className="flex flex-wrap gap-6 text-xs text-sky-100/80">
          <div>
            <p className="font-semibold text-cyan-200">+10 projets</p>
            <p>livrés pour des PME et startups</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-200">Stack moderne</p>
            <p>React, Node, APIs, Tailwind</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-200">Accompagnement complet</p>
            <p>de l&apos;idée au déploiement</p>
          </div>
        </div>
      </div>

      {/* indicateurs de slide */}
      <div className="absolute bottom-4 right-6 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-6 rounded-full transition ${
              index === i ? 'bg-cyan-400' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroHero;

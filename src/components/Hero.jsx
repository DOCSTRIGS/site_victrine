import { useEffect, useState } from 'react';

const backgroundSlides = [
  'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg',
  'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
  'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
];

function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundSlides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden mt-0">
      {/* Fond avec images qui alternent */}
      <div className="absolute inset-0">
        {backgroundSlides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === bgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Overlay gradient premium avec bleu profond et cyan */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/60 to-cyan-900/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent" />

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start w-full overflow-y-auto">
        <div
          className={`w-full max-w-5xl px-6 md:px-12 lg:px-20 xl:px-32 py-10 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Agence créative & innovante
            </p>
          </div>

          {/* Titre Principal */}
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white text-left tracking-tight">
            Transformez votre vision
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              en réalité numérique
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed font-normal text-left">
            Nous créons des solutions web modernes, performantes et magnifiques qui transforment votre entreprise. De la conception au déploiement, nous accompagnons chaque étape de votre projet avec excellence et innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/services"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Découvrir nos services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {backgroundSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setBgIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === bgIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;

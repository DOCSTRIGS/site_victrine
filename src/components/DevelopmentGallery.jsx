import { useState, useEffect } from 'react';

const devImages = [
  {
    src: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg',
    title: 'Développement Web',
    description: 'Création de sites modernes et performants',
  },
  {
    src: 'https://images.pexels.com/photos/3861949/pexels-photo-3861949.jpeg',
    title: 'Design & Création',
    description: 'Designs captivants et user-friendly',
  },
  {
    src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    title: 'Code de Qualité',
    description: 'Développement clean et maintenable',
  },
  {
    src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    title: 'Technologie Avancée',
    description: 'Stack moderne: React, Node, Tailwind',
  },
  {
    src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    title: 'Collaboration',
    description: 'Travail en équipe et communication claire',
  },
];

function DevelopmentGallery() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  useEffect(() => {
    if (!isAutoScroll) return;
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % devImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoScroll]);

  const nextSlide = () => {
    setScrollIndex((prev) => (prev + 1) % devImages.length);
    setIsAutoScroll(false);
  };

  const prevSlide = () => {
    setScrollIndex((prev) => (prev - 1 + devImages.length) % devImages.length);
    setIsAutoScroll(false);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-cyan-500/15 border border-cyan-400/50 rounded-full">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">Portfolio</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 mb-6 leading-tight">
            Notre Expertise en Images
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos domaines de compétence à travers une galerie interactive 
            de projets et technologies
          </p>
        </div>

        {/* Galerie avec scroll horizontal */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-cyan-200/30">
            {/* Images en carousel */}
            <div className="relative h-96 md:h-96 lg:h-[500px]">
              {devImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === scrollIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/30 to-transparent" />
                  
                  {/* Contenu du slide */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-cyan-300 max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {devImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setScrollIndex(index);
                  setIsAutoScroll(false);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === scrollIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg'
                    : 'w-3 h-3 bg-slate-300 hover:bg-blue-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentGallery;

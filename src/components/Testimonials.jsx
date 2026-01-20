const items = [
  {
    name: 'Beach Talk Radio',
    text: 'is a Dinky Little Podcast',
    stat: '2.5k supporters',
    icon: '🎧',
  },
  {
    name: 'India Rose Crawford',
    text: 'keeps knitting and creating videos!',
    stat: '9.5k supporters',
    icon: '🎥',
  },
  {
    name: 'Chilling Chinese',
    text: 'is making awesome study materials',
    stat: '9.5k members',
    icon: '📚',
  },
  {
    name: 'Neal Agarwal',
    text: 'is making weird things on the web',
    stat: '9.5k supporters',
    icon: '🧪',
  },
];

function Testimonials() {
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-4">
      {items.map((item, i) => (
        <article
          key={i}
          className="flex items-center gap-3 rounded-2xl bg-dev-card/90 px-4 py-4 text-xs text-white/70"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-lg">
            {item.icon}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/90">{item.name}</h3>
            <p className="text-[11px]">{item.text}</p>
            <p className="mt-1 text-[11px] text-white/50">{item.stat}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Testimonials;

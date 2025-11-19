export default function Studio() {
  return (
    <section id="studio" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-semibold text-white">A sanctuary of light</h2>
            <p className="mt-4 text-amber-100/80 max-w-xl">
              Designed for comfort and creativity: warm light, luxe finishes, and immaculate hygiene. Every detail supports flawless application and a relaxed experience.
            </p>
            <ul className="mt-6 space-y-3 text-amber-100/80">
              <li>• Hygienic, pro-grade tools and products</li>
              <li>• Adjustable vanity lighting for true-to-life color</li>
              <li>• Comfortable seating and calm ambience</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-amber-400/20 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-amber-400/20 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="col-span-2 aspect-[9/4] overflow-hidden rounded-3xl border border-amber-400/20 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  )
}

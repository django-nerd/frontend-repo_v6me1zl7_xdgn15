import { Star, Sparkles, Camera, Heart } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Editorial Glam',
    desc: 'High-fashion looks with luminous skin and sculpted features for campaigns and shoots.',
    price: 'From $180'
  },
  {
    icon: Heart,
    title: 'Bridal Elegance',
    desc: 'Soft-focus radiance that lasts from ceremony to last dance. Trials available.',
    price: 'From $250'
  },
  {
    icon: Camera,
    title: 'Photoshoot Ready',
    desc: 'Camera-perfect makeup for headshots, portraits, and content creators.',
    price: 'From $160'
  },
  {
    icon: Star,
    title: 'Event Glow',
    desc: 'Signature gold-kissed glam for galas, parties, and red-carpet moments.',
    price: 'From $140'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Services with a golden finish
          </h2>
          <p className="mt-3 text-amber-100/80">Curated offerings tailored to you.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-amber-400/20 bg-black/40 p-6 backdrop-blur-md shadow-[0_0_0_1px_rgba(212,175,55,0.15)] hover:shadow-[0_0_0_1px_rgba(212,175,55,0.35),0_30px_80px_-20px_rgba(212,175,55,0.25)] transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-600 text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)]">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-amber-100/80">{s.desc}</p>
              <div className="mt-6 text-amber-200 font-medium">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

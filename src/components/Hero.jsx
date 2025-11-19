import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background gradient and glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a09] via-black to-[#0b0a09]" />
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(212,175,55,0.25),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-40 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <span className="inline-block rounded-full border border-amber-400/30 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-amber-200/80">Luxury Makeup Studio</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Modern, elegant beauty with a signature gold glow
          </h1>
          <p className="mt-4 max-w-xl text-amber-100/80">
            Timeless glam, editorial precision, and wedding-perfect looks. Crafted by artists who obsess over detail.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#book" className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:brightness-110 transition">
              Book your session
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-amber-400/30 px-6 py-3 font-semibold text-amber-200 hover:bg-white/5 transition">
              Explore services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-amber-200/70">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-yellow-500">500+</div>
            <div className="text-sm">happy clients glowing in photos, films, and weddings</div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden border border-amber-400/20 shadow-[0_0_0_1px_rgba(212,175,55,0.15),0_40px_120px_-20px_rgba(212,175,55,0.25)]">
          <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

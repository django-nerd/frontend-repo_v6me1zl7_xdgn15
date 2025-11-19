import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#studio', label: 'Studio' },
    { href: '#book', label: 'Book' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-amber-400/30 bg-black/30 backdrop-blur-md px-5 py-3 shadow-[0_0_0_1px_rgba(212,175,55,0.15)]">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-600 text-black font-black tracking-widest shadow-[0_10px_30px_rgba(212,175,55,0.35)]">MS</span>
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-[0.25em] text-amber-300/90">Makeup Studio</div>
              <div className="text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">Modern Elegance</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-amber-100/80 hover:text-amber-200 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:brightness-110 transition"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden text-amber-200"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-amber-400/20 bg-black/60 backdrop-blur-md md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 text-amber-100/90 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="m-3 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:brightness-110 transition"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

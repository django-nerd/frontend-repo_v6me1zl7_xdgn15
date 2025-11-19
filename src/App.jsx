import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Studio from './components/Studio'
import Booking from './components/Booking'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle gold vignette background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(212,175,55,0.12),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Studio />
        <Booking />
      </main>

      <footer className="relative border-t border-amber-400/20 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-200/70">© {new Date().getFullYear()} Modern Elegance Makeup Studio</p>
          <div className="text-amber-200/70 text-sm">Crafted with care · Gold standard beauty</div>
        </div>
      </footer>
    </div>
  )
}

export default App

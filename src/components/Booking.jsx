import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Bridal Elegance', date: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // For now we just simulate success. Can be wired to backend later.
    setTimeout(() => setSent(true), 400)
  }

  return (
    <section id="book" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Reserve your glow</h2>
          <p className="mt-3 text-amber-100/80">Tell us your details and preferred date. We'll confirm shortly.</p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xl rounded-3xl border border-amber-400/20 bg-black/40 p-6 backdrop-blur-md shadow-[0_0_0_1px_rgba(212,175,55,0.15)]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm text-amber-100/80">Name</label>
              <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-xl border border-amber-400/20 bg-black/40 px-3 py-2 text-amber-50 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Your full name" required />
            </div>
            <div>
              <label className="block text-sm text-amber-100/80">Email</label>
              <input type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="mt-1 w-full rounded-xl border border-amber-400/20 bg-black/40 px-3 py-2 text-amber-50 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block text-sm text-amber-100/80">Service</label>
              <select value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})} className="mt-1 w-full rounded-xl border border-amber-400/20 bg-black/40 px-3 py-2 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option>Bridal Elegance</option>
                <option>Editorial Glam</option>
                <option>Photoshoot Ready</option>
                <option>Event Glow</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-amber-100/80">Preferred Date</label>
              <input type="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} className="mt-1 w-full rounded-xl border border-amber-400/20 bg-black/40 px-3 py-2 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
            </div>
          </div>
          <button type="submit" className="mt-6 w-full rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:brightness-110 transition">Request Booking</button>
          {sent && <p className="mt-3 text-center text-amber-100/80">Thank you! We'll be in touch shortly.</p>}
        </form>
      </div>
    </section>
  )
}

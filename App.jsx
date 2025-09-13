
import { Sparkles } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <nav className="sticky top-0 z-40 backdrop-blur border-b border-slate-200/60 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Marashdeh</span>
          </div>
        </div>
      </nav>
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">Osama Marashdeh Portfolio</h1>
        <p className="mt-4 text-slate-600">Accountant & Financial Analyst with passion for digital transformation.</p>
      </section>
    </div>
  )
}

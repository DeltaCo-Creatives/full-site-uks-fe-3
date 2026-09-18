import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import { STRATIFIKASI } from '../../data/site'

// 4 strata boxes styled after the Hero's stat band (numbered + font-display figure) — reusing an
// already-established homepage motif instead of introducing a new card shape.
export default function StratifikasiSection() {
  return (
    <section className="border-t border-ink/10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              {STRATIFIKASI.title}
            </span>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Empat tingkat capaian</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">{STRATIFIKASI.intro}</p>
          </div>
          <Link to="/uks-m/stratifikasi" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
            Lihat Detail
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
              <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STRATIFIKASI.levels.map((level, i) => (
            <div key={level} className="rounded-md border border-ink/10 bg-white p-6 shadow-soft">
              <span className="font-display text-lg italic text-ink-soft/50">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-2xl font-medium text-ink">{level}</h3>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

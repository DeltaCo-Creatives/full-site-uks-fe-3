import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import TiltCard from '../TiltCard'
import ImageReveal from '../ImageReveal'
import { PROGRAMS } from '../../data/program'
import { darken } from '../../lib/color'

// Links internally to /program/{key} — fixes DEV's broken external kemendikdasmen.go.id links for
// the same four cards. Always link by `p.key`, not a hardcoded slug.
export default function ProgramSection() {
  return (
    <section className="border-y border-ink/10 bg-brand-900 py-16 text-paper sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-100/80">
              Program Prioritas
            </span>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Empat program berjalan</h2>
          </div>
        </Reveal>
      </div>

      <Reveal className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-6">
        {PROGRAMS.map((p) => (
          <TiltCard
            key={p.key}
            max={3}
            className="group w-[78vw] shrink-0 snap-start overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10 transition hover:ring-white/25 sm:w-[340px]"
          >
            <Link to={`/program/${p.key}`} className="flex h-full flex-col">
              {p.image ? (
                <ImageReveal src={p.image} className="aspect-[4/3] w-full bg-white/10" imgClassName="transition duration-700 group-hover:scale-105" />
              ) : (
                <div className="grid aspect-[4/3] w-full place-items-center" style={{ background: darken(p.color) }}>
                  <span className="font-display text-3xl italic text-white">{p.shortTitle}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: p.color }}>
                  {p.shortTitle}
                </span>
                <h3 className="mt-1 font-display text-xl font-medium">{p.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-white/70">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Selengkapnya
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none" className="transition group-hover:translate-x-1">
                    <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </TiltCard>
        ))}
        <div className="w-1 shrink-0 sm:w-2" aria-hidden="true" />
      </Reveal>
    </section>
  )
}

import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import { GSS_FOKUS, GSS_INTRO } from '../../data/sekolahSehat'

export default function SekolahSehatSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <Reveal className="mb-10 sm:mb-14">
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
          Gerakan Sekolah Sehat
        </span>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">5 fokus sekolah sehat</h2>
          <Link to="/uks-m/sekolah-sehat" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
            Lihat semua
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
              <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{GSS_INTRO}</p>
      </Reveal>

      <div className="border-t border-ink/15">
        {GSS_FOKUS.map((f, i) => (
          <Reveal key={f.key} delay={i * 0.05} className="border-b border-ink/15">
            <Link
              to={`/uks-m/sekolah-sehat#${f.key}`}
              className={`group flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8 ${i % 2 ? 'sm:flex-row-reverse' : ''}`}
            >
              <span
                className="h-24 w-full shrink-0 rounded-sm transition-transform duration-500 group-hover:scale-[1.03] sm:h-20 sm:w-32"
                style={{ background: f.color }}
              />
              <div className="flex-1">
                <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-brand-700 sm:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink-soft">{f.tagline}</p>
              </div>
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" className="hidden shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 sm:block">
                <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

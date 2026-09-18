import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import { APLIKASI } from '../../data/aplikasi'

// DEV's homepage shows OKY + SATUSEHAT specifically (`featuredOnHome`); the full directory
// (all entries, including SIJIWA) lives at /informasi/aplikasi.
export default function AplikasiSection() {
  const featured = APLIKASI.filter((a) => a.featuredOnHome)

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Aplikasi</span>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Aplikasi pendukung</h2>
        </div>
        <Link to="/informasi/aplikasi" className="text-sm font-bold text-brand-700">
          Semua aplikasi →
        </Link>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {featured.map((a, i) => (
          <Reveal key={a.name} delay={i * 0.08} className="flex flex-col gap-3 rounded-md bg-white p-7 shadow-soft">
            <span
              className="grid size-11 place-items-center rounded-md font-display text-lg italic text-white"
              style={{ background: a.color }}
            >
              {a.name.charAt(0)}
            </span>
            <div>
              <h3 className="font-display text-xl font-medium text-ink">{a.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{a.by}</p>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">{a.description}</p>
            {a.url && (
              <a href={a.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                Unduh di Play Store
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                  <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import { TRIAS_PILLARS } from '../../data/site'

export default function TriasSection() {
  const [openKey, setOpenKey] = useState(null)

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Trias UKS/M</span>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Tiga pilar pelaksanaan</h2>
        </div>
        <p className="max-w-xs text-sm text-ink-soft">
          Menopang penyelenggaraan UKS/M di setiap satuan pendidikan, dari kelas hingga lingkungan sekolah.
        </p>
      </Reveal>

      <div className="border-t border-ink/15">
        {TRIAS_PILLARS.map((p, i) => {
          const isOpen = openKey === p.key
          return (
            <Reveal key={p.key} as="div" delay={i * 0.05} className="border-b border-ink/15">
              <button
                type="button"
                onClick={() => setOpenKey(isOpen ? null : p.key)}
                className="group flex w-full items-baseline gap-5 py-6 text-left sm:gap-8"
              >
                <span className="font-display text-base italic text-ink-soft/50 sm:text-lg">
                  {String(p.number).padStart(2, '0')}
                </span>
                <span className="font-display text-3xl font-medium text-ink transition-colors group-hover:text-brand-700 sm:text-4xl">
                  {p.title}
                </span>
                <span className="ml-auto flex shrink-0 items-center gap-4">
                  <span className="hidden text-xs uppercase tracking-wide text-ink-soft/60 sm:block">
                    {p.items.length} indikator
                  </span>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" className={`text-ink-soft transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="min-h-0">
                  <div className="grid gap-6 pb-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10 sm:pl-13">
                    <p className="text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                    <div className="flex flex-wrap content-start gap-2">
                      {p.items.map((item, idx) => (
                        <span
                          key={item}
                          className="rounded-md border px-3 py-1.5 text-xs font-medium text-ink"
                          style={{ borderColor: `${p.color}55` }}
                        >
                          {idx + 1}. {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/uks-m/trias#${p.key}`}
                    className="mb-8 inline-flex items-center gap-1.5 text-sm font-bold sm:pl-13"
                    style={{ color: p.color }}
                  >
                    Buka halaman {p.title}
                    <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                      <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

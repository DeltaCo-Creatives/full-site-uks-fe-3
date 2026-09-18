import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { STRATIFIKASI } from '../data/site'

export default function Stratifikasi() {
  return (
    <>
      <PageHero eyebrow="UKS/M" title={STRATIFIKASI.title} description={STRATIFIKASI.intro} crumbs={[{ label: 'UKS/M', to: '/uks-m/tentang' }, { label: 'Stratifikasi UKS/M' }]} />
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <Reveal className="mb-8 rounded-md bg-white p-6 shadow-soft sm:p-7">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-600">Apa itu Stratifikasi UKS/M?</p>
          <p className="text-sm leading-relaxed text-ink-soft">{STRATIFIKASI.definition}</p>
        </Reveal>

        <Reveal delay={0.04} className="mb-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-600">4 Tingkatan</p>
          <div className="flex flex-wrap items-center gap-2">
            {STRATIFIKASI.levels.map((l, i) => (
              <div key={l} className="flex items-center gap-2">
                <span className="rounded-md bg-white px-5 py-3 font-display text-sm font-semibold text-ink shadow-soft">{l}</span>
                {i < STRATIFIKASI.levels.length - 1 && (
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" className="text-brand-300">
                    <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.06} className="rounded-md bg-white p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-ink">Tujuan Stratifikasi</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {STRATIFIKASI.functions.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className="rounded-md bg-white p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-ink">Kategori Indikator</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {STRATIFIKASI.categories.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-500" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-6 rounded-md bg-paper-dim/70 p-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-600">Cara Penilaian</p>
          <p className="text-sm leading-relaxed text-ink-soft">{STRATIFIKASI.assessment}</p>
        </Reveal>

        <Reveal delay={0.18} className="mt-8 flex flex-col items-start gap-3 rounded-md bg-brand-900 p-7 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold">Cek strata sekolah Anda</h3>
            <p className="mt-1 text-sm text-brand-100/80">Sistem penilaian Stratifikasi UKS/M dikelola terpisah dari portal ini.</p>
          </div>
          <a
            href={STRATIFIKASI.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-800 transition hover:-translate-y-0.5"
          >
            Buka Dashboard Stratifikasi
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
              <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </div>
    </>
  )
}

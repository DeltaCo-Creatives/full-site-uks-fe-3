import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import MitraTabs from './MitraTabs'
import { AKTIVITAS_MITRA } from '../../data/mitra'
import { formatDate } from '../../lib/format'
import { SITE } from '../../data/site'

export default function MitraAktivitas() {
  return (
    <>
      <PageHero eyebrow="Mitra" title="Aktivitas Mitra" crumbs={[{ label: 'Mitra' }, { label: 'Aktivitas Mitra' }]} />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <MitraTabs />
        <div className="flex flex-col gap-4">
          {AKTIVITAS_MITRA.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06} className="rounded-md bg-white p-6 shadow-soft sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{formatDate(a.date)}</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.summary}</p>
              <a
                href={`${SITE.sourceUrl}/aktifitas-mitra`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Baca selengkapnya
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                  <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

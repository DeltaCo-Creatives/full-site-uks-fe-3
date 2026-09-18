import { useMemo, useState } from 'react'
import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import FilterBar from '../../components/informasi/FilterBar'
import { AGENDA } from '../../data/agenda'
import { formatDate } from '../../lib/format'

export default function Agenda() {
  const [kategori, setKategori] = useState(null)
  const [sort, setSort] = useState('newest')

  const categories = useMemo(() => [...new Set(AGENDA.map((a) => a.category))], [])

  const items = useMemo(() => {
    const filtered = kategori ? AGENDA.filter((a) => a.category === kategori) : AGENDA
    return [...filtered].sort((a, b) =>
      sort === 'oldest' ? new Date(a.dateStart) - new Date(b.dateStart) : new Date(b.dateStart) - new Date(a.dateStart),
    )
  }, [kategori, sort])

  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="Agenda"
        description="Kegiatan dan momen penting Gerakan Sekolah Sehat serta UKS/M."
        crumbs={[{ label: 'Informasi' }, { label: 'Agenda' }]}
      />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <FilterBar categories={categories} active={kategori} onSelect={setKategori} sort={sort} onSortChange={setSort} />

        {items.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-soft">Tidak ada agenda untuk kategori ini.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 8) * 0.05} className="flex flex-col gap-4 rounded-md bg-white p-6 shadow-soft sm:flex-row sm:p-7">
                {a.image && (
                  <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md bg-brand-100 sm:w-44">
                    <img src={a.image} alt="" className="size-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-brand-600">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1">{a.category}</span>
                    <span className="text-ink-soft/80">
                      {formatDate(a.dateStart)}
                      {a.dateEnd && a.dateEnd !== a.dateStart ? ` – ${formatDate(a.dateEnd)}` : ''}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">{a.title}</h3>
                  {a.description && <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.description}</p>}
                  {a.videoUrl && (
                    <a
                      href={a.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Tonton video
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                        <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

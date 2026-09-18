import { useMemo, useState } from 'react'
import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import DocViewerModal from '../../components/DocViewerModal'
import { PRODUK_HUKUM } from '../../data/produkHukum'

export default function ProdukHukum() {
  const [type, setType] = useState(null)
  const [query, setQuery] = useState('')
  const [doc, setDoc] = useState(null)

  const types = useMemo(() => [...new Set(PRODUK_HUKUM.map((d) => d.type))], [])

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PRODUK_HUKUM.filter((d) => (!type || d.type === type) && (!q || d.title.toLowerCase().includes(q)))
      .sort((a, b) => (b.year || 0) - (a.year || 0))
  }, [type, query])

  return (
    <>
      <PageHero
        eyebrow="Publikasi"
        title="Produk Hukum"
        description="Pustaka peraturan dan dasar hukum yang menaungi pelaksanaan UKS/M dan Sekolah Sehat."
        crumbs={[{ label: 'Publikasi' }, { label: 'Produk Hukum' }]}
      />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <div className="mb-6">
          <label htmlFor="produk-hukum-search" className="sr-only">
            Cari produk hukum
          </label>
          <input
            id="produk-hukum-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari judul peraturan…"
            className="w-full rounded-md bg-white px-4 py-3 text-sm text-ink shadow-soft outline-none ring-1 ring-transparent placeholder:text-ink-soft/60 focus:ring-brand-400"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={type === null}
            onClick={() => setType(null)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              type === null ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
            }`}
          >
            Semua Jenis
          </button>
          {types.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={type === t}
              onClick={() => setType(t)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                type === t ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-soft">Tidak ada produk hukum yang cocok.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map((d, i) => {
              const isPdf = d.url && d.url.toLowerCase().endsWith('.pdf')
              return (
                <Reveal key={d.title} delay={(i % 10) * 0.04} className="flex flex-col gap-3 rounded-md bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-brand-600">
                      <span className="rounded-full bg-brand-50 px-2.5 py-1">{d.type}</span>
                      {d.year && <span className="text-ink-soft/80">{d.year}</span>}
                    </div>
                    <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink">{d.title}</h3>
                    {d.source && <p className="mt-1 text-xs text-ink-soft/80">{d.source}</p>}
                  </div>
                  <div className="shrink-0">
                    {!d.url && <span className="text-xs font-semibold text-ink-soft/70">Tautan belum tersedia</span>}
                    {d.url && isPdf && (
                      <button
                        type="button"
                        onClick={() => setDoc({ title: d.title, url: d.url })}
                        className="rounded-full bg-brand-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-brand-700"
                      >
                        Lihat Dokumen
                      </button>
                    )}
                    {d.url && !isPdf && (
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-xs font-bold text-brand-700 transition hover:bg-brand-100"
                      >
                        Buka Tautan
                      </a>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        )}
      </div>

      <DocViewerModal doc={doc} onClose={() => setDoc(null)} />
    </>
  )
}

import { useMemo, useState } from 'react'
import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import DocViewerModal from '../../components/DocViewerModal'
import { BUKU_PANDUAN } from '../../data/bukuPanduan'
import { formatDate } from '../../lib/format'

export default function BukuPanduan() {
  const [query, setQuery] = useState('')
  const [doc, setDoc] = useState(null)

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? BUKU_PANDUAN.filter((b) => b.title.toLowerCase().includes(q)) : BUKU_PANDUAN
  }, [query])

  return (
    <>
      <PageHero eyebrow="Publikasi" title="Buku Panduan" description="Modul dan pedoman resmi seputar pelaksanaan UKS/M." crumbs={[{ label: 'Publikasi' }, { label: 'Buku Panduan' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="mb-6 max-w-sm">
          <label htmlFor="buku-panduan-search" className="sr-only">
            Cari buku panduan
          </label>
          <input
            id="buku-panduan-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari judul buku panduan…"
            className="w-full rounded-md bg-white px-4 py-3 text-sm text-ink shadow-soft outline-none ring-1 ring-transparent placeholder:text-ink-soft/60 focus:ring-brand-400"
          />
        </div>

        {items.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-soft">Tidak ada buku panduan yang cocok.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((b, i) => (
              <Reveal key={b.title} delay={(i % 8) * 0.06} className="group flex h-full flex-col overflow-hidden rounded-md bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="aspect-[3/4] w-full overflow-hidden bg-brand-100">
                  {b.image && <img src={b.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />}
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand-600">{formatDate(b.date)}</p>
                  <h3 className="line-clamp-3 flex-1 font-display text-sm font-semibold leading-snug text-ink">{b.title}</h3>
                  {b.fileUrl && (
                    <div className="mt-1 flex items-center gap-3">
                      <button type="button" onClick={() => setDoc({ title: b.title, url: b.fileUrl })} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                        Lihat
                      </button>
                      <a href={b.fileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                        Unduh
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <DocViewerModal doc={doc} onClose={() => setDoc(null)} />
    </>
  )
}

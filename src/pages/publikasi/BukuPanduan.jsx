import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import { BUKU_PANDUAN } from '../../data/bukuPanduan'
import { formatDate } from '../../lib/format'

export default function BukuPanduan() {
  return (
    <>
      <PageHero eyebrow="Publikasi" title="Buku Panduan" description="Modul dan pedoman resmi seputar pelaksanaan UKS/M." crumbs={[{ label: 'Publikasi' }, { label: 'Buku Panduan' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BUKU_PANDUAN.map((b, i) => (
            <Reveal key={b.title} delay={(i % 8) * 0.06} className="group flex h-full flex-col overflow-hidden rounded-md bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="aspect-[3/4] w-full overflow-hidden bg-brand-100">
                {b.image && <img src={b.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-brand-600">{formatDate(b.date)}</p>
                <h3 className="line-clamp-3 flex-1 font-display text-sm font-semibold leading-snug text-ink">{b.title}</h3>
                {b.fileUrl && (
                  <a href={b.fileUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                    Unduh PDF
                    <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                      <path d="M10 4v9m0 0-3.5-3.5M10 13l3.5-3.5M4 15.5h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

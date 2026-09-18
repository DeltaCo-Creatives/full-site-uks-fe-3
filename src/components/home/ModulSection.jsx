import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import DocViewerModal from '../DocViewerModal'
import { BUKU_PANDUAN } from '../../data/bukuPanduan'

// DEV's "Modul Terbaru" pattern: cards open an in-page PDF viewer instead of navigating away.
export default function ModulSection() {
  const [doc, setDoc] = useState(null)

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Publikasi</span>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Modul Terbaru</h2>
        </div>
        <Link to="/publikasi/buku-panduan" className="text-sm font-bold text-brand-700">
          Temukan Modul Lainnya →
        </Link>
      </Reveal>

      <Reveal className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
        {BUKU_PANDUAN.slice(0, 4).map((b) => (
          <button
            key={b.title}
            type="button"
            onClick={() => b.fileUrl && setDoc({ title: b.title, url: b.fileUrl })}
            disabled={!b.fileUrl}
            className="group flex w-full items-center gap-4 py-3.5 text-left disabled:cursor-not-allowed disabled:opacity-50"
          >
            <img src={b.image} alt="" className="h-16 w-12 shrink-0 rounded-sm object-cover" loading="lazy" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-ink">{b.title}</span>
              <span className="text-xs text-ink-soft/70">{b.fileUrl ? 'Buka pratinjau PDF' : 'Belum tersedia'}</span>
            </span>
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" className="shrink-0 text-brand-600 transition group-hover:translate-y-0.5">
              <path d="M10 4v9m0 0-3.5-3.5M10 13l3.5-3.5M4 15.5h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </Reveal>

      <DocViewerModal doc={doc} onClose={() => setDoc(null)} />
    </section>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import Modal from '../Modal'
import { INFOGRAFIS } from '../../data/infografis'

// DEV's poster grid opens an in-page image viewer via the shared Modal instead of doing nothing.
export default function InfografisSection() {
  const [active, setActive] = useState(null)

  return (
    <section className="border-t border-ink/10 bg-paper-dim/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Publikasi</span>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Infografis</h2>
          </div>
          <Link to="/publikasi/infografis" className="text-sm font-bold text-brand-700">
            Lihat Infografis Lainnya →
          </Link>
        </Reveal>

        <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {INFOGRAFIS.slice(0, 4).map((d) => (
            <button
              key={d.title}
              type="button"
              onClick={() => setActive(d)}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white text-left"
            >
              <div className="aspect-[3/4] overflow-hidden bg-brand-100">
                <img src={d.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <p className="truncate p-2.5 text-xs font-medium text-ink-soft">{d.title}</p>
            </button>
          ))}
        </Reveal>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} label={active?.title} className="max-w-lg">
        {active && (
          <>
            <div className="flex items-center justify-between gap-3 border-b border-ink/10 p-4">
              <p className="line-clamp-2 text-sm font-semibold text-ink">{active.title}</p>
              <button type="button" onClick={() => setActive(null)} className="shrink-0 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">
                Tutup
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-paper-dim p-4">
              <img src={active.image} alt={active.title} className="mx-auto max-h-[70vh] w-auto rounded-sm" />
            </div>
            {active.fileUrl && (
              <div className="border-t border-ink/10 p-4">
                <a
                  href={active.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700"
                >
                  Unduh PDF →
                </a>
              </div>
            )}
          </>
        )}
      </Modal>
    </section>
  )
}

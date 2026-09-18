import { useState } from 'react'
import Reveal from '../Reveal'
import Modal from '../Modal'
import { formatDate } from '../../lib/format'
import { INFOGRAFIS } from '../../data/infografis'

// Infografis related to this program (matched by title), opened full-size in the shared Modal
// rather than navigating away.
export default function InfografisStrip({ match }) {
  const [active, setActive] = useState(null)
  const items = INFOGRAFIS.filter((g) => match.some((m) => g.title.toLowerCase().includes(m.toLowerCase())))
  if (items.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => setActive(g)}
              className="group block w-full overflow-hidden rounded-md border border-ink/10 bg-white text-left shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="block aspect-[3/4] w-full overflow-hidden bg-brand-100">
                <img src={g.image} alt={g.title} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
              </span>
              <span className="block px-3 py-2.5 text-xs font-semibold leading-snug text-ink">{g.title}</span>
            </button>
          </Reveal>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} label={active?.title} className="max-w-xl">
        {active && (
          <>
            <div className="flex items-center justify-between gap-3 border-b border-ink/10 p-4">
              <div>
                <p className="text-sm font-semibold text-ink">{active.title}</p>
                {active.date && <p className="text-xs text-ink-soft/80">{formatDate(active.date)}</p>}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {active.fileUrl && (
                  <a
                    href={active.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-brand-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-brand-700"
                  >
                    Unduh
                  </a>
                )}
                <button type="button" onClick={() => setActive(null)} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">
                  Tutup
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto bg-paper-dim p-4">
              <img src={active.image} alt={active.title} className="mx-auto max-h-full rounded-sm object-contain" />
            </div>
          </>
        )}
      </Modal>
    </>
  )
}

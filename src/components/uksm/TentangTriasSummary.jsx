import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import { TRIAS_PILLARS } from '../../data/site'

// Three summary cards for the Trias UKS/M pillars, each linking to its full section on the
// Trias UKS/M page. Used on the merged "Tentang UKS/M" page so readers don't have to leave it
// to learn what Trias UKS/M means before jumping into the deep-dive page.
export default function TentangTriasSummary() {
  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-3">
      {TRIAS_PILLARS.map((p, i) => (
        <Reveal key={p.key} delay={i * 0.06} className="flex h-full flex-col rounded-md bg-white p-6 shadow-soft">
          <span
            className="mb-3 flex size-9 items-center justify-center rounded-full font-display text-sm font-bold text-white"
            style={{ background: p.color }}
          >
            {p.number}
          </span>
          <h3 className="font-display text-base font-semibold text-ink">{p.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
          <Link
            to={`/uks-m/trias#${p.key}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold"
            style={{ color: p.color }}
          >
            Pelajari {p.title}
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
              <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}

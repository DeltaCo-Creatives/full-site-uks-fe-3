import { useState } from 'react'
import Reveal from '../../Reveal'
import { GSS_LEGAL_DOCS, GSS_CAMPAIGN_MATERIALS } from '../../../data/sekolahSehat'

const GROUPS = [
  { id: 'hukum', label: 'Produk Hukum', items: GSS_LEGAL_DOCS },
  { id: 'kampanye', label: 'Materi Kampanye', items: GSS_CAMPAIGN_MATERIALS },
]

function DocIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <path d="M5 3.5h7l3 3v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 3.5V7h3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

// Bahan Advokasi: the legal-document list and campaign-material list from
// docs/content-source/sekolah-sehat/bahan-advokasi.md, behind a segmented switch. Reuses the
// same document-row pattern as the old BahanAdvokasi.jsx page. A missing `url` (dead, private,
// or duplicated source link — see sekolah-sehat-curation.md) shows as unavailable rather than
// a broken link.
export default function GssAdvokasi() {
  const [groupId, setGroupId] = useState(GROUPS[0].id)
  const group = GROUPS.find((g) => g.id === groupId)

  return (
    <section id="bahan-advokasi">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Bahan Advokasi</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Dasar hukum dan materi kampanye Gerakan Sekolah Sehat.
      </p>

      <div className="mt-6 mb-6 flex flex-wrap gap-2">
        {GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            aria-pressed={g.id === groupId}
            onClick={() => setGroupId(g.id)}
            className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
              g.id === groupId ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
            }`}
          >
            {g.label} <span className="opacity-70">({g.items.length})</span>
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {group.items.map((d, i) => (
          <Reveal key={d.title} delay={Math.min(i, 10) * 0.03}>
            {d.url ? (
              <a
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-center gap-4 rounded-md bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <DocIcon />
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink">{d.title}</span>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" className="shrink-0 text-brand-500 transition group-hover:translate-x-1">
                  <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <div className="flex h-full items-center gap-4 rounded-md bg-white/60 p-5 shadow-soft">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-paper-dim text-ink-soft">
                  <DocIcon />
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink-soft">{d.title}</span>
                <span className="shrink-0 text-xs font-medium italic text-ink-soft/70">Belum tersedia</span>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

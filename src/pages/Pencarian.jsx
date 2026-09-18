import { useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { buildSearchIndex, searchIndex } from '../lib/search'

const SUGGESTIONS = ['Kesehatan Siswa', 'UKS Mandiri', 'Gizi Sekolah', 'Cuci Tangan']

const INDEX = buildSearchIndex()

export default function Pencarian() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const inputRef = useRef(null)

  const results = useMemo(() => searchIndex(INDEX, query), [query])
  const hasQuery = query.trim().length > 0

  const runSearch = (value) => {
    setQuery(value)
    setParams(value.trim() ? { q: value } : {}, { replace: true })
  }

  return (
    <>
      <PageHero eyebrow="Pencarian" title="Cari di Portal UKS/M" description="Telusuri halaman, berita, program, publikasi, dan aplikasi seputar UKS/M." crumbs={[{ label: 'Pencarian' }]} />

      <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-6">
        <div className="flex items-center gap-3 rounded-md border-2 border-ink/10 bg-white px-5 py-4 transition-colors focus-within:border-brand-600">
          <svg viewBox="0 0 20 20" fill="none" className="shrink-0 text-brand-600" width="18" height="18">
            <circle cx="9" cy="9" r="6.2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M17 17l-3.4-3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => runSearch(e.target.value)}
            placeholder="Ketik kata kunci, mis. imunisasi, MBG, buku panduan…"
            className="min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-ink-soft/60 outline-none"
            autoFocus
          />
          {hasQuery && (
            <button
              type="button"
              onClick={() => runSearch('')}
              aria-label="Bersihkan pencarian"
              className="grid size-8 shrink-0 place-items-center rounded-full text-ink-soft transition hover:bg-brand-50 hover:text-brand-700"
            >
              <svg viewBox="0 0 20 20" width="13" height="13" fill="none">
                <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        {!hasQuery && (
          <Reveal className="mt-10 text-center">
            <h2 className="font-display text-2xl font-medium text-ink">Mulai Pencarian</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
              Ketik kata kunci untuk menemukan halaman, berita, program, atau dokumen di Portal UKS/M.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => runSearch(s)}
                  className="rounded-md border border-ink/15 bg-paper-dim px-4 py-2 text-sm font-medium text-ink-soft transition hover:border-brand-500 hover:text-brand-700"
                >
                  {s}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {hasQuery && results.total === 0 && (
          <Reveal className="mt-10 rounded-md bg-brand-50 px-6 py-10 text-center">
            <p className="font-display text-xl font-medium text-ink">Tidak ditemukan</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Tidak ada hasil untuk &ldquo;{query}&rdquo;. Coba kata kunci lain seperti &ldquo;stratifikasi&rdquo; atau &ldquo;video&rdquo;.
            </p>
          </Reveal>
        )}

        {hasQuery && results.total > 0 && (
          <div className="mt-10 flex flex-col gap-10">
            <p className="text-sm font-semibold text-ink-soft">
              {results.total} hasil untuk &ldquo;{query}&rdquo;
            </p>
            {results.groups.map((group) => (
              <Reveal key={group.type} as="section">
                <h2 className="mb-3 flex items-baseline gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                  {group.label}
                  <span className="text-ink-soft/60">({group.count})</span>
                </h2>
                <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
                  {group.items.map((r) => (
                    <Link
                      key={r.id}
                      to={r.url}
                      className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:bg-brand-50/60"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-ink">{r.title}</span>
                        {r.summary && <span className="line-clamp-1 text-xs text-ink-soft/80">{r.summary}</span>}
                      </span>
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" className="shrink-0 text-ink-soft transition group-hover:translate-x-1">
                        <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

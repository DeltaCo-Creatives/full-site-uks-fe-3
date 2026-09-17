import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../lib/gsap'
import { NAV, flattenNav } from '../data/nav'

const FLAT = flattenNav()

function ExternalIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} width="13" height="13">
      <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="3" width="14" height="14" rx="3.5" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
    </svg>
  )
}

function NavRow({ item, depth = 0, onNavigate }) {
  const isGroupLabel = item.isGroupLabel
  const indent = depth === 0 ? '' : depth === 1 ? 'pl-5' : 'pl-9'

  if (isGroupLabel) {
    return (
      <div className={`mt-4 mb-1 ${indent} text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700`}>
        {item.title}
      </div>
    )
  }

  const content = (
    <span className="flex items-center gap-1.5">
      {item.title}
      {item.ext && <ExternalIcon className="text-ink-soft/70 shrink-0" />}
    </span>
  )

  const rowClass = `group flex w-full items-start gap-2 rounded-md px-3 py-2 text-left transition-colors hover:bg-brand-50 ${indent} ${
    depth === 0 ? 'text-[15px] font-semibold text-ink' : 'text-[14px] text-ink-soft'
  }`

  if (item.url && !item.url.startsWith('/')) {
    return (
      <a href={item.url} target="_blank" rel="noreferrer" className={rowClass} onClick={onNavigate}>
        {content}
      </a>
    )
  }
  if (item.url) {
    return (
      <Link to={item.url} className={rowClass} onClick={onNavigate}>
        {content}
      </Link>
    )
  }
  return <div className={`${rowClass} cursor-default opacity-80`}>{content}</div>
}

function CategoryPanel({ node, onNavigate }) {
  return (
    <div className="flex flex-col gap-0.5 border-t border-ink/10 bg-paper-dim/60 px-2 py-3">
      {node.items.map((item, i) => (
        <div key={item.title + i}>
          <NavRow item={item} depth={0} onNavigate={onNavigate} />
          {item.items && (
            <div className="flex flex-col gap-0.5">
              {item.items.map((sub, j) => {
                const subObj = typeof sub === 'string' ? { title: sub } : sub
                return (
                  <div key={subObj.title + j}>
                    <NavRow item={subObj} depth={1} onNavigate={onNavigate} />
                    {subObj.items && (
                      <div className="flex flex-col gap-0.5">
                        {subObj.items.map((leaf, k) => {
                          const leafObj = typeof leaf === 'string' ? { title: leaf } : leaf
                          return <NavRow key={leafObj.title + k} item={leafObj} depth={2} onNavigate={onNavigate} />
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const QUICK_LINKS = [
  { title: 'Berita Terbaru', url: '/informasi/berita' },
  { title: 'Buku Panduan', url: '/publikasi/buku-panduan' },
  { title: 'Cek Kesehatan Gratis', url: '/program/cek-kesehatan-gratis' },
  { title: 'Kontak', url: '/kontak' },
]

function IndexRow({ node, index, isActive, isHome, onToggle, onNavigate }) {
  const rowRef = useRef(null)

  if (isHome) {
    return (
      <Link
        ref={rowRef}
        to="/"
        onClick={onNavigate}
        className="nav-row group flex items-baseline gap-4 border-b border-ink/10 py-4 transition-colors hover:bg-brand-50/60 sm:px-2"
      >
        <span className="w-8 shrink-0 font-display text-sm italic text-ink-soft/50">00</span>
        <span className="font-display text-2xl font-medium text-ink transition-transform group-hover:translate-x-1.5 sm:text-3xl">
          Beranda
        </span>
        <span className="ml-auto hidden shrink-0 text-xs text-ink-soft/60 sm:block">Kembali ke awal</span>
      </Link>
    )
  }

  return (
    <div ref={rowRef} className="nav-row border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-baseline gap-4 py-4 text-left transition-colors hover:bg-brand-50/60 sm:px-2"
      >
        <span className="w-8 shrink-0 font-display text-sm italic text-ink-soft/50">{String(index).padStart(2, '0')}</span>
        <span
          className={`font-display text-2xl font-medium transition-transform group-hover:translate-x-1.5 sm:text-3xl ${
            isActive ? 'text-brand-700' : 'text-ink'
          }`}
        >
          {node.title}
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-3">
          <span className="hidden text-xs text-ink-soft/60 sm:block">{node.items?.length ?? 0} bagian</span>
          <svg
            viewBox="0 0 20 20"
            width="16"
            height="16"
            fill="none"
            className={`text-ink-soft transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}
          >
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <CategoryPanel node={node} onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  )
}

export default function NavOverlay({ open, onClose }) {
  const [active, setActive] = useState(null)
  const [query, setQuery] = useState('')
  const panelRef = useRef(null)
  const backdropRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    setQuery('')
    setActive(null)
    document.body.style.overflow = 'hidden'
    const ctx = gsap.context(() => {
      gsap.set(panelRef.current, { display: 'flex' })
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' })
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      )
      gsap.fromTo(
        '.nav-row',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.035, delay: 0.1, ease: 'power2.out' },
      )
    })
    const t = setTimeout(() => inputRef.current?.focus(), 250)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      ctx.revert()
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const results = useMemo(() => {
    if (!query.trim()) return null
    const q = query.trim().toLowerCase()
    return FLAT.filter((it) => it.title.toLowerCase().includes(q)).slice(0, 24)
  }, [query])

  if (!open) return null

  const handleNavigate = () => onClose()

  return (
    <div className="fixed inset-0 z-50">
      <div ref={backdropRef} className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={panelRef}
        className="relative mx-auto mt-6 mb-6 flex h-[calc(100%-3rem)] w-[min(760px,94vw)] flex-col overflow-hidden rounded-xl bg-paper shadow-lift"
        style={{ display: 'none' }}
      >
        <div className="flex items-center gap-3 border-b-2 border-ink/10 px-5 py-4 transition-colors focus-within:border-brand-600 sm:px-8">
          <svg viewBox="0 0 20 20" fill="none" className="shrink-0 text-brand-600" width="18" height="18">
            <circle cx="9" cy="9" r="6.2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M17 17l-3.4-3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari menu, program, atau dokumen…"
            className="min-w-0 flex-1 bg-transparent font-display text-xl italic text-ink placeholder:text-ink-soft/60 placeholder:not-italic outline-none sm:text-2xl"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu"
            className="grid size-11 shrink-0 place-items-center rounded-md bg-ink text-paper transition hover:bg-brand-700"
          >
            <svg viewBox="0 0 20 20" width="15" height="15" fill="none">
              <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 sm:px-8">
          {results ? (
            <div className="flex flex-col gap-1 py-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft/80">
                {results.length} hasil untuk “{query}”
              </p>
              {results.length === 0 && (
                <p className="rounded-md bg-brand-50 px-4 py-6 text-center text-sm text-ink-soft">
                  Tidak ditemukan. Coba kata kunci lain seperti “imunisasi” atau “buku panduan”.
                </p>
              )}
              {results.map((r, i) => {
                const isExt = r.ext || (r.url && !r.url.startsWith('/'))
                const Comp = isExt ? 'a' : Link
                const linkProps = isExt ? { href: r.url, target: '_blank', rel: 'noreferrer' } : { to: r.url }
                return (
                  <Comp
                    key={r.url + i}
                    {...linkProps}
                    onClick={handleNavigate}
                    className="flex items-center justify-between gap-3 rounded-md px-3 py-2.5 hover:bg-brand-50"
                  >
                    <span>
                      <span className="block text-[15px] font-semibold text-ink">{r.title}</span>
                      {r.trail.length > 0 && (
                        <span className="block text-xs text-ink-soft/70">{r.trail.join(' › ')}</span>
                      )}
                    </span>
                    {isExt && <ExternalIcon className="shrink-0 text-ink-soft/50" />}
                  </Comp>
                )
              })}
            </div>
          ) : (
            <>
              <nav className="py-2">
                <IndexRow node={null} index={0} isHome onNavigate={handleNavigate} />
                {NAV.filter((n) => n.title !== 'Beranda').map((node, i) => (
                  <IndexRow
                    key={node.title}
                    node={node}
                    index={i + 1}
                    isActive={active === i}
                    onToggle={() => setActive(active === i ? null : i)}
                    onNavigate={handleNavigate}
                  />
                ))}
              </nav>

              <div className="py-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft/60">Akses cepat</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_LINKS.map((q) => (
                    <Link
                      key={q.url}
                      to={q.url}
                      onClick={handleNavigate}
                      className="rounded-md border border-ink/15 bg-paper-dim px-4 py-2 text-sm font-medium text-ink-soft transition hover:border-brand-500 hover:text-brand-700"
                    >
                      {q.title}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

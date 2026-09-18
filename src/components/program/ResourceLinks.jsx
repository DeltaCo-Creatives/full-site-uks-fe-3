import { Link } from 'react-router-dom'

const ArrowIcon = ({ className }) => (
  <svg viewBox="0 0 20 20" width="13" height="13" fill="none" className={className}>
    <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const rowClass = 'flex items-center justify-between gap-3 rounded-xl bg-paper px-4 py-3 text-left text-sm font-semibold text-ink transition hover:bg-brand-50'

/**
 * Grouped link lists (panduan, regulasi, situs resmi, dsb.) in the card style used by the
 * original "Tautan Terkait" block. `onOpenDoc({ title, url })` is called instead of navigating
 * when an item has `doc: true` — used for our own PDFs, opened in the shared in-page viewer.
 * Items with `unavailable: true` (dead links found during sourcing) render as a plain, non-clickable
 * row so they're never presented as working.
 */
export default function ResourceLinks({ title = 'Tautan Terkait', groups, onOpenDoc }) {
  return (
    <div className="rounded-md bg-white p-6 shadow-soft">
      {title && <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>}
      <div className={title ? 'mt-4 flex flex-col gap-6' : 'flex flex-col gap-6'}>
        {groups.map((group) => (
          <div key={group.title || group.items[0]?.label} className="flex flex-col gap-2.5">
            {group.title && <p className="text-xs font-bold uppercase tracking-wide text-ink-soft/70">{group.title}</p>}
            {group.items.map((item) => {
              if (item.unavailable) {
                return (
                  <div key={item.label} className="flex items-center justify-between gap-3 rounded-xl bg-paper/70 px-4 py-3 text-sm font-semibold text-ink-soft/70">
                    <span>{item.label}</span>
                    <span className="shrink-0 text-xs font-medium italic">tautan tidak tersedia</span>
                  </div>
                )
              }
              if (item.doc) {
                return (
                  <button key={item.label} type="button" onClick={() => onOpenDoc({ title: item.label, url: item.url })} className={rowClass}>
                    {item.label}
                    <ArrowIcon className="text-brand-500" />
                  </button>
                )
              }
              if (item.ext) {
                return (
                  <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className={rowClass}>
                    {item.label}
                    <ArrowIcon className="text-ink-soft/80" />
                  </a>
                )
              }
              return (
                <Link key={item.label} to={item.url} className={rowClass}>
                  {item.label}
                  <ArrowIcon className="text-brand-500" />
                </Link>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

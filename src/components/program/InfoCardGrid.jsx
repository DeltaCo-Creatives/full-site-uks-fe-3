import Reveal from '../Reveal'
import { darken } from '../../lib/color'

/**
 * Generic card grid for program sub-items: 7KAIH's seven habits, MBG's sasaran/outcomes,
 * ASRI's four pillars. Each item gets a small badge tile (number/letter/icon) in the program
 * color, a title, optional subtitle, body text, and an optional external "read more" link.
 */
export default function InfoCardGrid({ items, color, columns = 'sm:grid-cols-2 lg:grid-cols-3' }) {
  return (
    <div className={`grid gap-5 ${columns}`}>
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={(i % 6) * 0.06}
          className="flex flex-col gap-3 rounded-md border border-ink/10 bg-white p-6 shadow-soft"
        >
          <span
            className="grid size-10 shrink-0 place-items-center rounded-full font-display text-base font-semibold text-white"
            style={{ background: darken(color) }}
            aria-hidden="true"
          >
            {item.badge}
          </span>
          <div>
            <h3 className="font-display text-base font-semibold leading-snug text-ink">{item.title}</h3>
            {item.subtitle && <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-ink-soft/70">{item.subtitle}</p>}
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {item.linkLabel || 'Pelajari Lebih Lanjut'}
              <svg viewBox="0 0 20 20" width="13" height="13" fill="none">
                <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </Reveal>
      ))}
    </div>
  )
}

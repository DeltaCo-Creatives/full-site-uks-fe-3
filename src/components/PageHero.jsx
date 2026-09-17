import { Link } from 'react-router-dom'
import SplitHeadline from './SplitHeadline'

export default function PageHero({ eyebrow, title, description, color = '#1f8a49', crumbs = [] }) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 pb-10 pt-8 sm:pb-14 sm:pt-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {crumbs.length > 0 && (
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-ink-soft/80">
            <Link to="/" className="hover:text-brand-700">Beranda</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <span>/</span>
                {c.to ? (
                  <Link to={c.to} className="hover:text-brand-700">{c.label}</Link>
                ) : (
                  <span className="text-ink-soft">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color }}>
            <span className="h-px w-8" style={{ background: color }} />
            {eyebrow}
          </span>
        )}
        <SplitHeadline
          text={title}
          className="font-display text-4xl font-medium leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl"
        />
        {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>}
      </div>
    </section>
  )
}

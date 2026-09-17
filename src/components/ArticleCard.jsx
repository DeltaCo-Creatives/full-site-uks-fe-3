import { formatDate } from '../lib/format'
import { SITE } from '../data/site'
import Reveal from './Reveal'

export default function ArticleCard({ title, summary, image, date, category, delay = 0, slugPrefix = 'halaman/berita' }) {
  const sourceUrl = `${SITE.sourceUrl}/${slugPrefix}`
  return (
    <Reveal delay={delay} className="group flex h-full flex-col overflow-hidden rounded-md border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[16/10] w-full overflow-hidden bg-brand-100">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid size-full place-items-center text-brand-400">
            <span className="font-display text-sm">UKS/M</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-brand-600">
          {category && <span className="rounded-full bg-brand-50 px-2.5 py-1">{category}</span>}
          {date && <span className="text-ink-soft/80">{formatDate(date)}</span>}
        </div>
        <h3 className="font-display text-base font-semibold leading-snug text-ink">{title}</h3>
        {summary && <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">{summary}</p>}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Baca selengkapnya
          <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
            <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </Reveal>
  )
}

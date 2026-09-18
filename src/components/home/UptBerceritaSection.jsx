import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import ArticleCard from '../ArticleCard'
import { UPT_BERCERITA } from '../../data/uptBercerita'

// Extra section kept from prod. UPT_BERCERITA entries have no `image` field — ArticleCard already
// falls back to a placeholder, so this is safe as-is.
export default function UptBerceritaSection() {
  return (
    <section className="border-t border-ink/10 bg-paper-dim/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              UPT Bercerita
            </span>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Kisah dari unit pelaksana teknis</h2>
          </div>
          <Link to="/informasi/upt-bercerita" className="text-sm font-bold text-brand-700">
            Lihat UPT Bercerita Lainnya →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {UPT_BERCERITA.slice(0, 4).map((u, i) => (
            <ArticleCard key={u.slug} {...u} href={`/informasi/upt-bercerita/${u.slug}`} delay={(i % 4) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

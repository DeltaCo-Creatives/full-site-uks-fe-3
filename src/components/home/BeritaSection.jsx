import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import ArticleCard from '../ArticleCard'
import { BERITA } from '../../data/berita'

export default function BeritaSection() {
  return (
    <section className="border-t border-ink/10 bg-paper-dim/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              Berita Terbaru
            </span>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Kabar dari lapangan</h2>
          </div>
          <Link to="/informasi/berita" className="text-sm font-bold text-brand-700">
            Lihat Berita Lainnya →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BERITA.slice(0, 4).map((b, i) => (
            <ArticleCard key={b.slug} {...b} href={`/informasi/berita/${b.slug}`} delay={(i % 4) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import ArticleCard from '../ArticleCard'
import { PRAKTIK_BAIK } from '../../data/praktikBaik'

// Extra section kept from prod (not in the DEV homepage, but the source data exists and DEV order
// already places it near Berita in the header's Informasi menu).
export default function PraktikBaikSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              Praktik Baik
            </span>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Cerita inspiratif satuan pendidikan</h2>
          </div>
          <Link to="/informasi/praktik-baik" className="text-sm font-bold text-brand-700">
            Lihat Praktik Baik Lainnya →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRAKTIK_BAIK.slice(0, 4).map((p, i) => (
            <ArticleCard key={p.slug} {...p} href={`/informasi/praktik-baik/${p.slug}`} delay={(i % 4) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

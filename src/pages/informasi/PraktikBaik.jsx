import PageHero from '../../components/PageHero'
import ArticleCard from '../../components/ArticleCard'
import { PRAKTIK_BAIK } from '../../data/praktikBaik'

export default function PraktikBaik() {
  return (
    <>
      <PageHero eyebrow="Informasi" title="Praktik Baik" description="Kisah inspiratif pelaksanaan UKS/M dari satuan pendidikan di seluruh Indonesia." crumbs={[{ label: 'Informasi' }, { label: 'Praktik Baik' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRAKTIK_BAIK.map((b, i) => (
            <ArticleCard key={b.slug} {...b} delay={(i % 6) * 0.06} slugPrefix={`informasi/praktik-baik/${b.slug}`} />
          ))}
        </div>
      </div>
    </>
  )
}

import PageHero from '../../components/PageHero'
import ArticleCard from '../../components/ArticleCard'
import { BERITA } from '../../data/berita'

export default function Berita() {
  return (
    <>
      <PageHero eyebrow="Informasi" title="Berita" description="Kabar terbaru seputar UKS/M dan program sekolah sehat." crumbs={[{ label: 'Informasi' }, { label: 'Berita' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BERITA.map((b, i) => (
            <ArticleCard key={b.slug} {...b} delay={(i % 6) * 0.06} slugPrefix={`halaman/berita/${b.slug}`} />
          ))}
        </div>
      </div>
    </>
  )
}

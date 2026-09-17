import PageHero from '../../components/PageHero'
import ArticleCard from '../../components/ArticleCard'
import { UPT_BERCERITA } from '../../data/uptBercerita'

export default function UptBerceritaPage() {
  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="UPT Bercerita"
        description="Cerita lapangan dari unit pelaksana teknis daerah dalam mengawal program sekolah sehat."
        crumbs={[{ label: 'Informasi' }, { label: 'UPT Bercerita' }]}
      />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {UPT_BERCERITA.map((b, i) => (
            <ArticleCard
              key={b.slug}
              title={b.title}
              summary={b.summary}
              image="/images/scraped/logo-uptbercerita.jpeg"
              date={b.date}
              category={b.category}
              delay={(i % 6) * 0.06}
              slugPrefix={`informasi/upt-bercerita/${b.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

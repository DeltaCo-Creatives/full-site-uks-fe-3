import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import ArticleCard from '../../components/ArticleCard'
import FilterBar from '../../components/informasi/FilterBar'
import { UPT_BERCERITA } from '../../data/uptBercerita'

export default function UptBerceritaPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const kategori = searchParams.get('kategori')
  const sort = searchParams.get('urutan') === 'oldest' ? 'oldest' : 'newest'

  const categories = useMemo(() => [...new Set(UPT_BERCERITA.map((b) => b.category).filter(Boolean))], [])

  const items = useMemo(() => {
    const filtered = kategori ? UPT_BERCERITA.filter((b) => b.category === kategori) : UPT_BERCERITA
    return [...filtered].sort((a, b) => (sort === 'oldest' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)))
  }, [kategori, sort])

  const setKategori = (value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set('kategori', value)
    else next.delete('kategori')
    setSearchParams(next)
  }

  const setSort = (value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'oldest') next.set('urutan', 'oldest')
    else next.delete('urutan')
    setSearchParams(next)
  }

  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="UPT Bercerita"
        description="Cerita lapangan dari unit pelaksana teknis daerah dalam mengawal program sekolah sehat."
        crumbs={[{ label: 'Informasi' }, { label: 'UPT Bercerita' }]}
      />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <FilterBar categories={categories} active={kategori} onSelect={setKategori} sort={sort} onSortChange={setSort} />
        {items.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-soft">Tidak ada cerita untuk kategori ini.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((b, i) => (
              <ArticleCard
                key={b.slug}
                title={b.title}
                summary={b.summary}
                image="/images/scraped/logo-uptbercerita.jpeg"
                date={b.date}
                category={b.category}
                delay={(i % 6) * 0.06}
                href={`/informasi/upt-bercerita/${b.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

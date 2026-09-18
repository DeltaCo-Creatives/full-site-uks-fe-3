import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import ArticleCard from '../../components/ArticleCard'
import FilterBar from '../../components/informasi/FilterBar'
import { PRAKTIK_BAIK } from '../../data/praktikBaik'

export default function PraktikBaik() {
  const [searchParams, setSearchParams] = useSearchParams()
  const kategori = searchParams.get('kategori')
  const sort = searchParams.get('urutan') === 'oldest' ? 'oldest' : 'newest'

  const categories = useMemo(() => [...new Set(PRAKTIK_BAIK.map((b) => b.category).filter(Boolean))], [])

  const items = useMemo(() => {
    const filtered = kategori ? PRAKTIK_BAIK.filter((b) => b.category === kategori) : PRAKTIK_BAIK
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
      <PageHero eyebrow="Informasi" title="Praktik Baik" description="Kisah inspiratif pelaksanaan UKS/M dari satuan pendidikan di seluruh Indonesia." crumbs={[{ label: 'Informasi' }, { label: 'Praktik Baik' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <FilterBar categories={categories} active={kategori} onSelect={setKategori} sort={sort} onSortChange={setSort} />
        {items.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-soft">Tidak ada praktik baik untuk kategori ini.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((b, i) => (
              <ArticleCard key={b.slug} {...b} delay={(i % 6) * 0.06} href={`/informasi/praktik-baik/${b.slug}`} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

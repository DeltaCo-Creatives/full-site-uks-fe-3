import ArticleCard from '../ArticleCard'
import { PRAKTIK_BAIK } from '../../data/praktikBaik'

// Praktik baik stories tagged with this program's category.
export default function PraktikBaikStrip({ category }) {
  const items = PRAKTIK_BAIK.filter((b) => b.category === category)
  if (items.length === 0) return null

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <ArticleCard key={item.slug} {...item} href={`/informasi/praktik-baik/${item.slug}`} delay={(i % 6) * 0.06} />
      ))}
    </div>
  )
}

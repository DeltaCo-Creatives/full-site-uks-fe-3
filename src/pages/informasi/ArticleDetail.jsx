import { useParams } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import ArticleCard from '../../components/ArticleCard'
import NotFound from '../NotFound'
import { formatDate } from '../../lib/format'
import { SITE } from '../../data/site'
import { BERITA } from '../../data/berita'
import { PRAKTIK_BAIK } from '../../data/praktikBaik'
import { UPT_BERCERITA } from '../../data/uptBercerita'

// We only have the article summaries the portal exposes on its list endpoints, not full bodies
// (no scraping of individual article pages) — so the detail page shows the summary as a lead
// paragraph and sends readers to the official portal for the complete text.
const TYPE_CONFIG = {
  berita: {
    label: 'Berita',
    listPath: '/informasi/berita',
    data: BERITA,
    fallbackImage: null,
    prodPath: (slug) => `/halaman/berita/${slug}`,
  },
  'praktik-baik': {
    label: 'Praktik Baik',
    listPath: '/informasi/praktik-baik',
    data: PRAKTIK_BAIK,
    fallbackImage: null,
    prodPath: (slug) => `/informasi/praktik-baik/${slug}`,
  },
  'upt-bercerita': {
    label: 'UPT Bercerita',
    listPath: '/informasi/upt-bercerita',
    data: UPT_BERCERITA,
    fallbackImage: '/images/scraped/logo-uptbercerita.jpeg',
    prodPath: (slug) => `/informasi/upt-bercerita/${slug}`,
  },
}

export default function ArticleDetail({ type }) {
  const { slug } = useParams()
  const config = TYPE_CONFIG[type]
  const item = config?.data.find((d) => d.slug === slug)

  if (!config || !item) return <NotFound />

  const image = item.image || config.fallbackImage
  const officialUrl = item.url || `${SITE.sourceUrl}${config.prodPath(slug)}`
  const others = config.data.filter((d) => d.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title={item.title}
        crumbs={[{ label: 'Informasi' }, { label: config.label, to: config.listPath }, { label: item.title }]}
      />
      <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-6">
        <Reveal className="overflow-hidden rounded-md bg-white shadow-soft">
          {image && (
            <div className="aspect-[16/9] w-full overflow-hidden bg-brand-100">
              <img src={image} alt="" className="size-full object-cover" loading="lazy" />
            </div>
          )}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-brand-600">
              {item.category && <span className="rounded-full bg-brand-50 px-2.5 py-1">{item.category}</span>}
              {item.date && <span className="text-ink-soft/80">{formatDate(item.date)}</span>}
            </div>
            {item.summary && <p className="mt-5 text-base leading-relaxed text-ink-soft">{item.summary}</p>}

            <div className="mt-7 rounded-md bg-paper-dim p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-ink-soft">
                Teks lengkap artikel ini tersedia di portal resmi UKS/M. Ringkasan di atas berasal dari data yang ditampilkan portal.
              </p>
              <a
                href={officialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700"
              >
                Baca artikel lengkap di portal resmi
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                  <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        {others.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-4 font-display text-lg font-semibold text-ink">Artikel Lainnya</h3>
            <div className="grid gap-5 sm:grid-cols-3">
              {others.map((o, i) => (
                <ArticleCard
                  key={o.slug}
                  title={o.title}
                  summary={o.summary}
                  image={o.image || config.fallbackImage}
                  date={o.date}
                  category={o.category}
                  delay={i * 0.06}
                  href={`${config.listPath}/${o.slug}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

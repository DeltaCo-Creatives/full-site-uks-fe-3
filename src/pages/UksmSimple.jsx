import { useParams, Navigate, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { UKSM_PAGES } from '../data/site'

const TABS = [
  { slug: 'deskripsi-umum', label: 'Deskripsi Umum' },
  { slug: 'tujuan', label: 'Tujuan' },
  { slug: 'sasaran', label: 'Sasaran' },
]

export default function UksmSimple() {
  const { slug } = useParams()
  const data = UKSM_PAGES[slug]
  if (!data) return <Navigate to="/uks-m/deskripsi-umum" replace />

  return (
    <>
      <PageHero eyebrow="UKS/M" title={data.title} crumbs={[{ label: 'UKS/M' }, { label: data.title }]} />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <Link
              key={t.slug}
              to={`/uks-m/${t.slug}`}
              className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                t.slug === slug ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
              }`}
            >
              {t.label}
            </Link>
          ))}
          <Link to="/uks-m/struktur-organisasi/tim-pembina" className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50">
            Struktur Organisasi
          </Link>
        </div>

        <Reveal className="rounded-md bg-white p-7 shadow-soft sm:p-10">
          {data.body.map((p) => (
            <p key={p} className="text-base leading-relaxed text-ink-soft">{p}</p>
          ))}

          {data.stakeholders && (
            <div className="mt-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600">Pemangku Kepentingan</p>
              <div className="flex flex-wrap gap-2">
                {data.stakeholders.map((s) => (
                  <span key={s} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </>
  )
}

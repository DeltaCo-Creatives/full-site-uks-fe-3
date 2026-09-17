import { useParams, Navigate, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { STRUKTUR_ORGANISASI } from '../data/site'

export default function StrukturOrganisasi() {
  const { which } = useParams()
  const data = STRUKTUR_ORGANISASI[which]
  if (!data) return <Navigate to="/uks-m/struktur-organisasi/tim-pembina" replace />

  return (
    <>
      <PageHero
        eyebrow="UKS/M · Struktur Organisasi"
        title={data.title}
        crumbs={[{ label: 'UKS/M', to: '/uks-m/deskripsi-umum' }, { label: 'Struktur Organisasi' }]}
      />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <div className="mb-8 flex gap-2">
          <Link
            to="/uks-m/struktur-organisasi/tim-pembina"
            className={`rounded-full px-4 py-3 text-sm font-semibold transition ${which === 'tim-pembina' ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'}`}
          >
            Tim Pembina
          </Link>
          <Link
            to="/uks-m/struktur-organisasi/tim-pelaksana"
            className={`rounded-full px-4 py-3 text-sm font-semibold transition ${which === 'tim-pelaksana' ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'}`}
          >
            Tim Pelaksana
          </Link>
        </div>

        <Reveal className="rounded-md bg-white p-7 shadow-soft sm:p-10">
          <p className="text-base leading-relaxed text-ink-soft">{data.body}</p>

          {data.levels && (
            <ol className="mt-6 flex flex-col gap-2.5">
              {data.levels.map((l, i) => (
                <li key={l} className="flex items-center gap-3 rounded-md bg-brand-50 px-4 py-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">{i + 1}</span>
                  <span className="text-sm font-medium text-ink">{l}</span>
                </li>
              ))}
            </ol>
          )}

          {data.tasks && (
            <>
              <p className="mt-7 mb-3 text-sm font-bold uppercase tracking-wide text-brand-600">Tugas</p>
              <ul className="flex flex-col gap-2.5">
                {data.tasks.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </>
          )}
        </Reveal>
      </div>
    </>
  )
}

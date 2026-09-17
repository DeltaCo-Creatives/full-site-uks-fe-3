import { useParams, Navigate, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { TRIAS_PILLARS } from '../data/site'

export default function TriasPillar() {
  const { key } = useParams()
  const pillar = TRIAS_PILLARS.find((p) => p.key === key)
  if (!pillar) return <Navigate to="/trias-uks-m/pendidikan-kesehatan" replace />

  return (
    <>
      <PageHero
        eyebrow={`Trias UKS/M · Pilar ${pillar.number}`}
        title={pillar.title}
        description={pillar.summary}
        color={pillar.color}
        crumbs={[{ label: 'Trias UKS/M' }, { label: pillar.title }]}
      />

      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {TRIAS_PILLARS.map((p) => (
            <Link
              key={p.key}
              to={`/trias-uks-m/${p.key}`}
              className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                p.key === key ? 'text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
              }`}
              style={p.key === key ? { background: p.color } : undefined}
            >
              ({p.number}) {p.title}
            </Link>
          ))}
        </div>

        <Reveal className="mb-8 rounded-md bg-white p-6 shadow-soft sm:p-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide" style={{ color: pillar.color }}>
            {pillar.items.length} Indikator
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {pillar.items.map((item, i) => (
              <div key={item} className="flex items-center gap-3 rounded-md bg-paper px-4 py-3">
                <span
                  className="grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
                  style={{ background: pillar.color }}
                >
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {pillar.featured && (
          <Reveal delay={0.1} className="overflow-hidden rounded-md shadow-soft">
            <div className="p-7 text-white sm:p-9" style={{ background: pillar.color }}>
              <span className="text-xs font-bold uppercase tracking-wide text-white/75">Contoh Indikator</span>
              <h3 className="mt-2 font-display text-2xl font-semibold">{pillar.featured.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90">{pillar.featured.body}</p>
              {pillar.featured.meta && (
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {pillar.featured.meta.map((m) => (
                    <div key={m.label} className="rounded-md bg-white/10 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">{m.label}</p>
                      <p className="mt-1 text-sm font-medium text-white">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </>
  )
}

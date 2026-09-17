import { useParams, Navigate, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { GSS_FOKUS } from '../data/sekolahSehat'

export default function SekolahSehatFokus() {
  const { key } = useParams()
  const fokus = GSS_FOKUS.find((f) => f.key === key)
  if (!fokus) return <Navigate to="/sekolah-sehat" replace />

  return (
    <>
      <PageHero
        eyebrow="Gerakan Sekolah Sehat"
        title={fokus.title}
        description={fokus.body}
        color={fokus.color}
        crumbs={[{ label: 'Gerakan Sekolah Sehat', to: '/sekolah-sehat' }, { label: fokus.title }]}
      />
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {GSS_FOKUS.map((f) => (
            <Link
              key={f.key}
              to={`/sekolah-sehat/${f.key}`}
              className={`rounded-full px-4 py-3 text-sm font-semibold transition ${f.key === key ? 'text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'}`}
              style={f.key === key ? { background: f.color } : undefined}
            >
              {f.title}
            </Link>
          ))}
        </div>

        <Reveal
          className="flex flex-col items-start gap-3 rounded-md p-8 text-white shadow-soft sm:p-10"
          style={{ background: fokus.color }}
        >
          <span className="text-xs font-bold uppercase tracking-wide text-white/80">Fokus Sekolah Sehat</span>
          <p className="max-w-2xl text-lg leading-relaxed">{fokus.body}</p>
          <p className="max-w-2xl text-sm leading-relaxed text-white/85">{fokus.tagline}</p>
        </Reveal>
      </div>
    </>
  )
}

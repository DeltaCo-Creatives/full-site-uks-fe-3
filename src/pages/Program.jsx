import { useParams, Navigate, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { PROGRAMS } from '../data/program'
import { darken } from '../lib/color'

export default function Program() {
  const { key } = useParams()
  const program = PROGRAMS.find((p) => p.key === key)
  if (!program) return <Navigate to="/program/7kaih" replace />

  return (
    <>
      <PageHero
        eyebrow={`Program Prioritas · ${program.shortTitle}`}
        title={program.title}
        description={program.summary}
        color={program.color}
        crumbs={[{ label: 'Program' }, { label: program.shortTitle }]}
      />

      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {PROGRAMS.map((p) => (
            <Link
              key={p.key}
              to={`/program/${p.key}`}
              className={`rounded-full px-4 py-3 text-sm font-semibold transition ${p.key === key ? 'text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'}`}
              style={p.key === key ? { background: darken(p.color) } : undefined}
            >
              {p.shortTitle}
            </Link>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {program.image ? (
            <Reveal className="overflow-hidden rounded-md shadow-soft">
              <img src={program.image} alt={program.title} className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          ) : (
            <Reveal
              className="grid aspect-[4/3] place-items-center rounded-md text-white shadow-soft"
              style={{ background: darken(program.color) }}
            >
              <span className="font-display text-4xl font-bold">{program.shortTitle}</span>
            </Reveal>
          )}

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="rounded-md bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-ink">Tautan Terkait</h3>
              <div className="mt-4 flex flex-col gap-2.5">
                {program.links.map((l) =>
                  l.ext ? (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl bg-paper px-4 py-3 text-sm font-semibold text-ink transition hover:bg-brand-50"
                    >
                      {l.label}
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="none" className="text-ink-soft/80">
                        <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      key={l.label}
                      to={l.url}
                      className="flex items-center justify-between rounded-xl bg-paper px-4 py-3 text-sm font-semibold text-ink transition hover:bg-brand-50"
                    >
                      {l.label}
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="none" className="text-brand-500">
                        <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}

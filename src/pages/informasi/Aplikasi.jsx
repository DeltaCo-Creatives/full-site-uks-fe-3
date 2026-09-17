import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import { APLIKASI } from '../../data/aplikasi'
import { darken } from '../../lib/color'

export default function Aplikasi() {
  return (
    <>
      <PageHero eyebrow="Informasi" title="Aplikasi Terkait UKS/M" crumbs={[{ label: 'Informasi' }, { label: 'Aplikasi' }]} />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {APLIKASI.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08} className="flex flex-col rounded-md bg-white p-7 shadow-soft">
              <span
                className="mb-4 flex size-12 items-center justify-center rounded-md font-display text-lg font-bold text-white"
                style={{ background: darken(a.color) }}
              >
                {a.name[0]}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{a.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-600">{a.by}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{a.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

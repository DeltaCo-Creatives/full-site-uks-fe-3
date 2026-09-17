import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { MANAJEMEN_UKSM } from '../data/site'

export default function Manajemen() {
  return (
    <>
      <PageHero eyebrow="UKS/M" title={MANAJEMEN_UKSM.title} description={MANAJEMEN_UKSM.intro} crumbs={[{ label: 'UKS/M', to: '/uks-m/deskripsi-umum' }, { label: 'Manajemen UKS/M' }]} />
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {MANAJEMEN_UKSM.components.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="rounded-md bg-white p-6 shadow-soft">
              <span className="mb-3 flex size-10 items-center justify-center rounded-xl bg-brand-100 font-display text-sm font-bold text-brand-700">
                {i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import MitraTabs from './MitraTabs'
import { DUKUNGAN_MITRA } from '../../data/mitra'

export default function MitraDukungan() {
  return (
    <>
      <PageHero eyebrow="Mitra" title={DUKUNGAN_MITRA.title} crumbs={[{ label: 'Mitra' }, { label: 'Dukungan Mitra' }]} />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <MitraTabs />
        <div className="flex flex-col gap-4">
          {DUKUNGAN_MITRA.rows.map((row, i) => (
            <Reveal key={row.nama} delay={i * 0.06} className="rounded-md bg-white p-6 shadow-soft sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">{row.nama}</h3>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{row.periode}</span>
              </div>
              <p className="mt-4 mb-2 text-xs font-bold uppercase tracking-wide text-ink-soft/80">Bentuk Kolaborasi</p>
              <ul className="flex flex-col gap-2">
                {row.bentuk.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

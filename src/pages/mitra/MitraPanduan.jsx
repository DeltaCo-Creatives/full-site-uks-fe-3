import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import MitraTabs from './MitraTabs'
import { PANDUAN_KEMITRAAN } from '../../data/mitra'

export default function MitraPanduan() {
  return (
    <>
      <PageHero eyebrow="Mitra" title={PANDUAN_KEMITRAAN.title} crumbs={[{ label: 'Mitra' }, { label: 'Panduan Kemitraan' }]} />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <MitraTabs />
        <Reveal className="rounded-md bg-white p-7 shadow-soft sm:p-10">
          <h3 className="font-display text-lg font-semibold text-ink">{PANDUAN_KEMITRAAN.heading}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {PANDUAN_KEMITRAAN.items.map((item, i) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-[11px] font-bold text-brand-700">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </>
  )
}

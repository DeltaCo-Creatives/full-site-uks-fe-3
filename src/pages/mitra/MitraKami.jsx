import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import MitraTabs from './MitraTabs'
import { MITRA_KAMI, MITRA_KAMI_TAHUN } from '../../data/mitra'
import { MITRA_CLIENTS } from '../../data/mitraClients'

export default function MitraKami() {
  return (
    <>
      <PageHero eyebrow="Mitra" title={MITRA_KAMI.title} crumbs={[{ label: 'Mitra' }, { label: 'Mitra Kami' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <MitraTabs />

        <Reveal className="mb-8 grid gap-4 rounded-md bg-white p-7 shadow-soft sm:grid-cols-2 sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Bidang Usaha Mitra</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{MITRA_KAMI.bidangUsaha}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Bentuk Dukungan</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {MITRA_KAMI.bentukDukungan.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-ink-soft/80">{MITRA_CLIENTS.length} Mitra Terdaftar</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {MITRA_CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 8) * 0.04} className="flex flex-col items-center gap-3 rounded-md bg-white p-5 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <img src={c.logo} alt={c.fullName} className="h-10 w-full object-contain" loading="lazy" />
              <span className="text-xs font-medium leading-snug text-ink-soft">{c.fullName}</span>
            </Reveal>
          ))}
        </div>

        <h3 className="mb-4 mt-12 font-display text-lg font-semibold text-ink">Direktori Mitra per Tahun</h3>
        <div className="grid gap-5 sm:grid-cols-3">
          {MITRA_KAMI_TAHUN.map((group, i) => (
            <Reveal key={group.tahun} delay={i * 0.08} className="rounded-md bg-white p-6 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Mitra {group.tahun}</p>
              <p className="mt-1 text-xs font-medium text-ink-soft/80">{group.mitra.length} mitra</p>
              <ol className="mt-4 flex flex-col gap-2">
                {group.mitra.map((nama, idx) => (
                  <li key={nama} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                    <span className="shrink-0 text-ink-soft/60">{idx + 1}.</span>
                    {nama}
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

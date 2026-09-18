import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import MitraTabs from './MitraTabs'
import { MITRA_TENTANG } from '../../data/mitra'

export default function MitraTentang() {
  return (
    <>
      <PageHero eyebrow="Mitra" title={MITRA_TENTANG.title} crumbs={[{ label: 'Mitra' }, { label: 'Tentang Mitra UKS/M' }]} />
      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">
        <MitraTabs />

        <Reveal className="mb-8 grid gap-4 rounded-md bg-white p-7 shadow-soft sm:grid-cols-2 sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Bidang Usaha Mitra</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{MITRA_TENTANG.bidangUsaha}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Bentuk Dukungan Mitra</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {MITRA_TENTANG.bentukDukungan.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <h3 className="mb-4 font-display text-lg font-semibold text-ink">Kriteria Mitra</h3>
        <div className="flex flex-col gap-4">
          {MITRA_TENTANG.kriteria.map((k, i) => (
            <Reveal key={k.sektor} delay={i * 0.06} className="rounded-md bg-white p-6 shadow-soft sm:p-7">
              <h4 className="font-display text-base font-semibold text-ink">{k.sektor}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{k.anggota}</p>
              <p className="mt-4 mb-2 text-xs font-bold uppercase tracking-wide text-ink-soft/80">Ketentuan</p>
              <ul className="flex flex-col gap-2">
                {k.syarat.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col items-start gap-3 rounded-md bg-brand-50 p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-ink-soft">Ingin tahu bentuk kerja sama dan ketentuan lengkap menjadi mitra Sekolah Sehat?</p>
          <Link to="/mitra/panduan-kemitraan" className="shrink-0 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700">
            Lihat Panduan Kemitraan
          </Link>
        </Reveal>
      </div>
    </>
  )
}

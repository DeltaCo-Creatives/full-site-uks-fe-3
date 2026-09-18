import Reveal from '../../Reveal'
import { GSS_BENEFITS, GSS_TARGETS } from '../../../data/sekolahSehat'

// "Manfaat & Sasaran" — who the movement is for and what each group gains, from the GSS
// overview page. Two-column card grid, matching the Fungsi/Kategori layout on Stratifikasi.jsx.
export default function GssOverview() {
  return (
    <section id="gerakan-sekolah-sehat">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Manfaat &amp; Sasaran</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Siapa yang terlibat dan apa yang didapat dari Gerakan Sekolah Sehat.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Reveal className="rounded-md bg-white p-6 shadow-soft">
          <h3 className="font-display text-lg font-semibold text-ink">Manfaat bagi</h3>
          <ul className="mt-4 flex flex-col gap-4">
            {GSS_BENEFITS.map((b) => (
              <li key={b.id}>
                <p className="text-sm font-bold text-ink">{b.audience}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{b.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08} className="rounded-md bg-white p-6 shadow-soft">
          <h3 className="font-display text-lg font-semibold text-ink">Sasaran gerakan</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {GSS_TARGETS.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

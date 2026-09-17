import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { GSS_FOKUS, GSS_INTRO } from '../data/sekolahSehat'

export default function SekolahSehat() {
  return (
    <>
      <PageHero eyebrow="UKS/M" title="Gerakan Sekolah Sehat" description={GSS_INTRO} crumbs={[{ label: 'Gerakan Sekolah Sehat' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GSS_FOKUS.map((f, i) => (
            <Reveal key={f.key} delay={i * 0.07}>
              <Link
                to={`/sekolah-sehat/${f.key}`}
                className="group flex h-full flex-col justify-between rounded-md p-7 text-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift"
                style={{ background: f.color }}
              >
                <div>
                  <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{f.tagline}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Pelajari {f.title}
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none" className="transition group-hover:translate-x-1">
                    <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={GSS_FOKUS.length * 0.07}>
            <Link
              to="/sekolah-sehat/bahan-advokasi"
              className="flex h-full flex-col justify-between rounded-md border-2 border-dashed border-brand-200 bg-white p-7 transition hover:-translate-y-1.5 hover:border-brand-400"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Bahan Advokasi GSS</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">Kumpulan produk hukum dan dasar kebijakan Sekolah Sehat.</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Lihat dokumen
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  )
}

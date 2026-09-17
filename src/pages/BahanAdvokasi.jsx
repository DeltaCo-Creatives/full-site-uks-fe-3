import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { BAHAN_ADVOKASI } from '../data/sekolahSehat'

export default function BahanAdvokasi() {
  return (
    <>
      <PageHero
        eyebrow="Gerakan Sekolah Sehat"
        title={BAHAN_ADVOKASI.title}
        description={BAHAN_ADVOKASI.intro}
        crumbs={[{ label: 'Gerakan Sekolah Sehat', to: '/sekolah-sehat' }, { label: 'Bahan Advokasi' }]}
      />
      <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-6">
        <div className="flex flex-col gap-3">
          {BAHAN_ADVOKASI.documents.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <a
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-md bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
                    <path d="M5 3.5h7l3 3v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M12 3.5V7h3" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink">{d.title}</span>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" className="shrink-0 text-brand-500 transition group-hover:translate-x-1">
                  <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

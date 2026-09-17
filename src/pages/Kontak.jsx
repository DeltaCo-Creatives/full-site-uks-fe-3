import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { SITE } from '../data/site'

export default function Kontak() {
  return (
    <>
      <PageHero eyebrow="Kontak" title="Hubungi Kami" description="Pertanyaan seputar UKS/M dan Gerakan Sekolah Sehat dapat disampaikan melalui kanal berikut." crumbs={[{ label: 'Kontak' }]} />
      <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal className="flex flex-col gap-3 rounded-md bg-white p-7 shadow-soft">
            <span className="grid size-11 place-items-center rounded-md bg-brand-100 text-brand-700">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
                <path d="M3 5.5 10 11l7-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Email</p>
              <a href={`mailto:${SITE.contactEmail}`} className="mt-1 block text-sm font-medium text-ink underline underline-offset-2">
                {SITE.contactEmail}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-3 rounded-md bg-white p-7 shadow-soft">
            <span className="grid size-11 place-items-center rounded-md bg-brand-100 text-brand-700">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
                <path d="M10 18s6-5.2 6-9.8A6 6 0 0 0 4 8.2C4 12.8 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="10" cy="8" r="2.1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Alamat</p>
              <p className="mt-1 text-sm font-medium leading-relaxed text-ink">{SITE.contactAddress}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="mt-4 rounded-md bg-brand-900 p-7 text-white sm:p-8">
          <h3 className="font-display text-lg font-semibold">Informasi lebih lengkap</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-100/85">
            Untuk pertanyaan teknis terkait program, silakan merujuk ke halaman Program atau Publikasi. Untuk kerja sama
            kemitraan, lihat halaman Panduan Kemitraan.
          </p>
        </Reveal>
      </div>
    </>
  )
}

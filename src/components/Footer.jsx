import { Link } from 'react-router-dom'
import { SITE, VISITORS } from '../data/site'
import { NAV } from '../data/nav'
import { formatNumber } from '../lib/format'

const tautan = NAV.find((n) => n.title === 'Tautan')

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-900 text-brand-50">
      <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-6">
        <p className="font-display text-3xl italic leading-tight text-white sm:text-4xl">
          Sekolah sehat, anak Indonesia hebat.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/images/scraped/logoUks.png" alt="" className="h-9 w-auto rounded-sm bg-white/95 p-1" />
              <span className="font-display text-lg italic text-white">Portal UKS/M</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/80">{SITE.metaDescription}</p>
            <p className="mt-4 text-sm text-brand-100/80">{SITE.contactAddress}</p>
            <a href={`mailto:${SITE.contactEmail}`} className="mt-1 inline-block text-sm text-brand-100 underline underline-offset-2">
              {SITE.contactEmail}
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-100/70">Jelajahi</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-brand-100/80">
              <li><Link to="/uks-m/deskripsi-umum" className="hover:text-white">Tentang UKS/M</Link></li>
              <li><Link to="/sekolah-sehat" className="hover:text-white">Gerakan Sekolah Sehat</Link></li>
              <li><Link to="/informasi/berita" className="hover:text-white">Berita</Link></li>
              <li><Link to="/publikasi/buku-panduan" className="hover:text-white">Buku Panduan</Link></li>
              <li><Link to="/mitra/mitra-kami" className="hover:text-white">Mitra Kami</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-100/70">Tautan Resmi</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-brand-100/80">
              {tautan?.items.slice(0, 4).map((group) => (
                <li key={group.title}>
                  <a href={group.items[0]?.url} target="_blank" rel="noreferrer" className="hover:text-white">
                    {group.items[0]?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-100/70">Sumber</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
              Mockup ini disusun dari konten publik{' '}
              <a href={SITE.sourceUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-white">
                uks.kemendikdasmen.go.id
              </a>{' '}
              untuk kebutuhan eksplorasi desain antarmuka.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-brand-100/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Kementerian Pendidikan Dasar dan Menengah RI. Mockup desain, bukan situs resmi.</p>
          <p>{formatNumber(VISITORS.total)} kunjungan tercatat di portal sumber.</p>
        </div>
      </div>
    </footer>
  )
}

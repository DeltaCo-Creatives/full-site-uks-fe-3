import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-28 text-center">
      <Reveal>
        <span className="font-display text-7xl font-bold text-brand-200">404</span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-ink-soft">Halaman yang Anda cari mungkin sudah dipindahkan. Coba buka menu untuk mencari yang Anda butuhkan.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700">
          Kembali ke Beranda
        </Link>
      </Reveal>
    </div>
  )
}

import { Link, useLocation } from 'react-router-dom'

const TABS = [
  { to: '/mitra/tentang', label: 'Tentang Mitra UKS/M' },
  { to: '/mitra/panduan-kemitraan', label: 'Panduan Kemitraan' },
  { to: '/mitra/mitra-kami', label: 'Mitra Kami' },
  { to: '/mitra/aktivitas-mitra', label: 'Aktivitas Mitra' },
  { to: '/mitra/dukungan-mitra', label: 'Dukungan Mitra' },
]

export default function MitraTabs() {
  const { pathname } = useLocation()
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {TABS.map((t) => (
        <Link
          key={t.to}
          to={t.to}
          className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
            pathname === t.to ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
          }`}
        >
          {t.label}
        </Link>
      ))}
    </div>
  )
}

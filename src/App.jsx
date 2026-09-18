import { useEffect, useState } from 'react'
import { Route, Routes, matchPath, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import PageCurtain from './components/PageCurtain'
import ScrollProgress from './components/ScrollProgress'
import RedirectTo from './components/RedirectTo'
import Home from './pages/Home'
import TentangUksm from './pages/uksm/TentangUksm'
import Trias from './pages/uksm/Trias'
import Manajemen from './pages/Manajemen'
import Stratifikasi from './pages/Stratifikasi'
import SekolahSehat from './pages/uksm/SekolahSehat'
import Program from './pages/Program'
import MitraTentang from './pages/mitra/MitraTentang'
import MitraPanduan from './pages/mitra/MitraPanduan'
import MitraKami from './pages/mitra/MitraKami'
import MitraAktivitas from './pages/mitra/MitraAktivitas'
import MitraDukungan from './pages/mitra/MitraDukungan'
import Berita from './pages/informasi/Berita'
import PraktikBaik from './pages/informasi/PraktikBaik'
import UptBercerita from './pages/informasi/UptBercerita'
import ArticleDetail from './pages/informasi/ArticleDetail'
import Agenda from './pages/informasi/Agenda'
import Aplikasi from './pages/informasi/Aplikasi'
import ProdukHukum from './pages/publikasi/ProdukHukum'
import BukuPanduan from './pages/publikasi/BukuPanduan'
import Infografis from './pages/publikasi/Infografis'
import Video from './pages/publikasi/Video'
import Pencarian from './pages/Pencarian'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'

// Retired routes (old prod-style split pages) → their section on the merged page.
const LEGACY_REDIRECTS = [
  ['/uks-m/deskripsi-umum', '/uks-m/tentang#deskripsi-umum'],
  ['/uks-m/tujuan', '/uks-m/tentang#tujuan'],
  ['/uks-m/sasaran', '/uks-m/tentang#sasaran'],
  ['/uks-m/struktur-organisasi/:which', ({ which }) => `/uks-m/tentang#${which}`],
  ['/trias-uks-m/:key', ({ key }) => `/uks-m/trias#${key}`],
  ['/sekolah-sehat', '/uks-m/sekolah-sehat'],
  ['/sekolah-sehat/:key', ({ key }) => `/uks-m/sekolah-sehat#${key}`],
  ['/program/cek-kesehatan-gratis', '/program/ckg'],
]

const isLegacyPath = (pathname) => LEGACY_REDIRECTS.some(([from]) => matchPath(from, pathname))

export default function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [stage, setStage] = useState('idle')

  useEffect(() => {
    const samePage = location.pathname === displayLocation.pathname
    if (samePage && location.hash === displayLocation.hash && location.search === displayLocation.search) return
    if (samePage || isLegacyPath(displayLocation.pathname)) {
      // same page with a new anchor/query (filters, search), or a legacy redirect landing: swap without the curtain
      setDisplayLocation(location)
    } else {
      setStage('covering')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <>
      <ScrollProgress />
      <PageCurtain
        stage={stage}
        onCovered={() => {
          setDisplayLocation(location)
          setStage('revealing')
        }}
        onRevealed={() => setStage('idle')}
      />
      <Routes location={displayLocation}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/uks-m/tentang" element={<TentangUksm />} />
        <Route path="/uks-m/trias" element={<Trias />} />
        <Route path="/uks-m/manajemen" element={<Manajemen />} />
        <Route path="/uks-m/stratifikasi" element={<Stratifikasi />} />
        <Route path="/uks-m/sekolah-sehat" element={<SekolahSehat />} />

        <Route path="/program/:key" element={<Program />} />

        <Route path="/mitra/tentang" element={<MitraTentang />} />
        <Route path="/mitra/panduan-kemitraan" element={<MitraPanduan />} />
        <Route path="/mitra/mitra-kami" element={<MitraKami />} />
        <Route path="/mitra/aktivitas-mitra" element={<MitraAktivitas />} />
        <Route path="/mitra/dukungan-mitra" element={<MitraDukungan />} />

        <Route path="/informasi/berita" element={<Berita />} />
        <Route path="/informasi/berita/:slug" element={<ArticleDetail type="berita" />} />
        <Route path="/informasi/praktik-baik" element={<PraktikBaik />} />
        <Route path="/informasi/praktik-baik/:slug" element={<ArticleDetail type="praktik-baik" />} />
        <Route path="/informasi/upt-bercerita" element={<UptBercerita />} />
        <Route path="/informasi/upt-bercerita/:slug" element={<ArticleDetail type="upt-bercerita" />} />
        <Route path="/informasi/agenda" element={<Agenda />} />
        <Route path="/informasi/aplikasi" element={<Aplikasi />} />

        <Route path="/publikasi/produk-hukum" element={<ProdukHukum />} />
        <Route path="/publikasi/buku-panduan" element={<BukuPanduan />} />
        <Route path="/publikasi/infografis" element={<Infografis />} />
        <Route path="/publikasi/video" element={<Video />} />

        <Route path="/pencarian" element={<Pencarian />} />
        <Route path="/kontak" element={<Kontak />} />

        {LEGACY_REDIRECTS.map(([from, to]) => (
          <Route key={from} path={from} element={<RedirectTo to={to} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
    </>
  )
}

import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import PageCurtain from './components/PageCurtain'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import UksmSimple from './pages/UksmSimple'
import StrukturOrganisasi from './pages/StrukturOrganisasi'
import Manajemen from './pages/Manajemen'
import Stratifikasi from './pages/Stratifikasi'
import TriasPillar from './pages/TriasPillar'
import SekolahSehat from './pages/SekolahSehat'
import SekolahSehatFokus from './pages/SekolahSehatFokus'
import BahanAdvokasi from './pages/BahanAdvokasi'
import Program from './pages/Program'
import MitraPanduan from './pages/mitra/MitraPanduan'
import MitraKami from './pages/mitra/MitraKami'
import MitraAktivitas from './pages/mitra/MitraAktivitas'
import MitraDukungan from './pages/mitra/MitraDukungan'
import Berita from './pages/informasi/Berita'
import PraktikBaik from './pages/informasi/PraktikBaik'
import UptBercerita from './pages/informasi/UptBercerita'
import Aplikasi from './pages/informasi/Aplikasi'
import BukuPanduan from './pages/publikasi/BukuPanduan'
import Infografis from './pages/publikasi/Infografis'
import Video from './pages/publikasi/Video'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [stage, setStage] = useState('idle')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
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

        <Route path="/uks-m/:slug" element={<UksmSimple />} />
        <Route path="/uks-m/struktur-organisasi/:which" element={<StrukturOrganisasi />} />
        <Route path="/uks-m/manajemen" element={<Manajemen />} />
        <Route path="/uks-m/stratifikasi" element={<Stratifikasi />} />

        <Route path="/trias-uks-m/:key" element={<TriasPillar />} />

        <Route path="/sekolah-sehat" element={<SekolahSehat />} />
        <Route path="/sekolah-sehat/bahan-advokasi" element={<BahanAdvokasi />} />
        <Route path="/sekolah-sehat/:key" element={<SekolahSehatFokus />} />

        <Route path="/program/:key" element={<Program />} />

        <Route path="/mitra/panduan-kemitraan" element={<MitraPanduan />} />
        <Route path="/mitra/mitra-kami" element={<MitraKami />} />
        <Route path="/mitra/aktivitas-mitra" element={<MitraAktivitas />} />
        <Route path="/mitra/dukungan-mitra" element={<MitraDukungan />} />

        <Route path="/informasi/berita" element={<Berita />} />
        <Route path="/informasi/praktik-baik" element={<PraktikBaik />} />
        <Route path="/informasi/upt-bercerita" element={<UptBercerita />} />
        <Route path="/informasi/aplikasi" element={<Aplikasi />} />

        <Route path="/publikasi/buku-panduan" element={<BukuPanduan />} />
        <Route path="/publikasi/infografis" element={<Infografis />} />
        <Route path="/publikasi/video" element={<Video />} />

        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
    </>
  )
}

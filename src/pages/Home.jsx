import Hero from '../components/home/Hero'
import TriasSection from '../components/home/TriasSection'
import StratifikasiSection from '../components/home/StratifikasiSection'
import BeritaSection from '../components/home/BeritaSection'
import PraktikBaikSection from '../components/home/PraktikBaikSection'
import UptBerceritaSection from '../components/home/UptBerceritaSection'
import ProgramSection from '../components/home/ProgramSection'
import SekolahSehatSection from '../components/home/SekolahSehatSection'
import ModulSection from '../components/home/ModulSection'
import InfografisSection from '../components/home/InfografisSection'
import VideoSection from '../components/home/VideoSection'
import TautanSection from '../components/home/TautanSection'
import AplikasiSection from '../components/home/AplikasiSection'
import MitraSection from '../components/home/MitraSection'

// Section order follows the DEV sitemap, keeping prod-only extras (Praktik Baik, UPT Bercerita,
// Sekolah Sehat foci) in place — see docs/sitemaps/sitemap-dev-uks.MD.
export default function Home() {
  return (
    <>
      <Hero />
      <TriasSection />
      <StratifikasiSection />
      <BeritaSection />
      <PraktikBaikSection />
      <UptBerceritaSection />
      <ProgramSection />
      <SekolahSehatSection />
      <ModulSection />
      <InfografisSection />
      <VideoSection />
      <TautanSection />
      <AplikasiSection />
      <MitraSection />
    </>
  )
}

import PageHero from '../../components/PageHero'
import ExternalLink from '../../components/ExternalLink'
import Reveal from '../../components/Reveal'
import GssOverview from '../../components/uksm/gss/GssOverview'
import GssFocusTabs from '../../components/uksm/gss/GssFocusTabs'
import GssAdvokasi from '../../components/uksm/gss/GssAdvokasi'
import { GSS_INTRO, GSS_MADRASAH_URL } from '../../data/sekolahSehat'

// UKS/M ▸ Sekolah Sehat (GSS). Structure follows the uks-fe reference project's GssPage
// (hero → overview → 5-focus tabs → advokasi), restyled with this repo's own Tailwind
// conventions (PageHero, Reveal, pill tabs, rounded-md/shadow-soft cards) instead of its CSS.
export default function SekolahSehat() {
  return (
    <>
      <PageHero
        eyebrow="UKS/M"
        title="Gerakan Sekolah Sehat"
        description={GSS_INTRO}
        crumbs={[{ label: 'UKS/M', to: '/uks-m/tentang' }, { label: 'Sekolah Sehat (GSS)' }]}
      />
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <Reveal className="mb-14">
          <ExternalLink href={GSS_MADRASAH_URL} className="text-sm font-bold text-brand-700 hover:text-brand-800">
            Untuk madrasah: buka Gerakan Madrasah Sehat (Kemenag)
          </ExternalLink>
        </Reveal>

        <GssOverview />

        <section id="lima-fokus" className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">5 Fokus Sekolah Sehat</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Yang dilakukan sekolah/madrasah untuk setiap fokus Gerakan Sekolah Sehat.
          </p>
          <div className="mt-6">
            <GssFocusTabs />
          </div>
        </section>

        <div className="mt-16">
          <GssAdvokasi />
        </div>
      </div>
    </>
  )
}

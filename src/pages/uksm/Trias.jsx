import { useState } from 'react'
import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import TriasPillarSection from '../../components/uksm/TriasPillarSection'
import { TRIAS_PILLARS } from '../../data/site'
import { TRIAS_SUB_PROGRAMS } from '../../data/uksm/trias'

// UKS/M ▸ Trias UKS/M — the 3 pillars from TRIAS_PILLARS (data/site.js), each expanded into
// its full sub-programs (16 total) from data/uksm/trias.js. Section ids match the pillar keys
// so legacy /trias-uks-m/:key redirects land on the right pillar.
export default function Trias() {
  const firstPillar = TRIAS_PILLARS[0]
  const [openId, setOpenId] = useState(TRIAS_SUB_PROGRAMS[firstPillar.key][0].id)
  const toggleItem = (id) => setOpenId((current) => (current === id ? null : id))

  return (
    <>
      <PageHero
        eyebrow="UKS/M"
        title="Trias UKS/M"
        description="Tiga program pokok Usaha Kesehatan Sekolah/Madrasah untuk membentuk warga sekolah yang sehat, dari belajar hidup sehat hingga menjaga lingkungan sekolah."
        crumbs={[{ label: 'UKS/M', to: '/uks-m/tentang' }, { label: 'Trias UKS/M' }]}
      />
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <Reveal className="mb-12 flex flex-wrap gap-2">
          {TRIAS_PILLARS.map((p) => (
            <a
              key={p.key}
              href={`#${p.key}`}
              className="rounded-full px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              style={{ background: p.color }}
            >
              ({p.number}) {p.title}
            </a>
          ))}
        </Reveal>

        <div className="flex flex-col gap-16">
          {TRIAS_PILLARS.map((pillar) => (
            <TriasPillarSection
              key={pillar.key}
              pillar={pillar}
              subPrograms={TRIAS_SUB_PROGRAMS[pillar.key]}
              openId={openId}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>
    </>
  )
}

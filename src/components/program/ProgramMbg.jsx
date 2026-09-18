import { useState } from 'react'
import Reveal from '../Reveal'
import DocViewerModal from '../DocViewerModal'
import SectionHeading from './SectionHeading'
import FactList from './FactList'
import InfoCardGrid from './InfoCardGrid'
import ResourceLinks from './ResourceLinks'
import PraktikBaikStrip from './PraktikBaikStrip'
import SourcesFooter from './SourcesFooter'
import { BUKU_PANDUAN } from '../../data/bukuPanduan'

export default function ProgramMbg({ program }) {
  const [doc, setDoc] = useState(null)
  const panduan = BUKU_PANDUAN.filter((b) => program.bukuPanduanMatch.some((m) => b.title.toUpperCase().includes(m.toUpperCase())) && b.fileUrl)

  const resourceGroups = [
    ...(panduan.length > 0
      ? [{ title: 'Panduan MBG di Satuan Pendidikan', items: panduan.map((p) => ({ label: p.title, url: p.fileUrl, doc: true })) }]
      : []),
    ...program.resourceGroups,
  ]

  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      <Reveal className="flex flex-col gap-4">
        {program.intro.map((p) => (
          <p key={p} className="max-w-3xl text-base leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </Reveal>

      <FactList facts={program.facts} />

      <section>
        <SectionHeading title="Sasaran Program" color={program.color} />
        <InfoCardGrid items={program.sasaran} color={program.color} columns="sm:grid-cols-3" />
      </section>

      <section>
        <SectionHeading title="Dampak yang Dituju" color={program.color} />
        <InfoCardGrid items={program.outcomes} color={program.color} />
      </section>

      <section>
        <SectionHeading title="Panduan & Tautan Terkait" color={program.color} />
        <ResourceLinks title="" groups={resourceGroups} onOpenDoc={setDoc} />
      </section>

      <section>
        <SectionHeading title="Praktik Baik MBG" description="Kisah dari satuan pendidikan yang menerapkan MBG." color={program.color} />
        <PraktikBaikStrip category={program.praktikBaikCategory} />
      </section>

      <SourcesFooter sources={program.sources} />

      <DocViewerModal doc={doc} onClose={() => setDoc(null)} />
    </div>
  )
}

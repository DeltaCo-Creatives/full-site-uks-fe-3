import { useState } from 'react'
import Reveal from '../Reveal'
import DocViewerModal from '../DocViewerModal'
import SectionHeading from './SectionHeading'
import InfoCardGrid from './InfoCardGrid'
import UrgensiSolusi from './UrgensiSolusi'
import ResourceLinks from './ResourceLinks'
import InfografisStrip from './InfografisStrip'
import PraktikBaikStrip from './PraktikBaikStrip'
import GalaKreasiSection from './GalaKreasiSection'
import SourcesFooter from './SourcesFooter'

export default function Program7kaih({ program }) {
  const [doc, setDoc] = useState(null)

  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      <Reveal className="flex flex-col gap-4">
        {program.intro.map((p) => (
          <p key={p} className="max-w-3xl text-base leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </Reveal>

      <section>
        <SectionHeading title="Tujuh Kebiasaan" description="Dibangun bersama orang tua dan guru di rumah maupun di satuan pendidikan." color={program.color} />
        <InfoCardGrid items={program.habits} color={program.color} columns="sm:grid-cols-2 lg:grid-cols-4" />
      </section>

      <section>
        <SectionHeading title="Mengapa Gerakan Ini Ada" color={program.color} />
        <UrgensiSolusi {...program.urgensi} color={program.color} />
      </section>

      <Reveal className="flex flex-col items-center gap-2 rounded-md border border-ink/10 bg-brand-50 p-8 text-center sm:p-10">
        <h3 className="font-display text-2xl font-medium text-ink">{program.cta.title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-ink-soft">{program.cta.text}</p>
      </Reveal>

      <section>
        <SectionHeading title="Panduan & Buku" description="Kiat Jitu 7KAIH untuk guru dan orang tua, per jenjang." color={program.color} />
        <ResourceLinks title="" groups={program.resourceGroups} onOpenDoc={setDoc} />
      </section>

      <section>
        <SectionHeading title="Infografis 7KAIH" color={program.color} />
        <InfografisStrip match={program.infografisMatch} />
      </section>

      <section>
        <SectionHeading title="Praktik Baik 7KAIH" description="Kisah dari satuan pendidikan yang menerapkan 7KAIH." color={program.color} />
        <PraktikBaikStrip category={program.praktikBaikCategory} />
      </section>

      <section className="border-t border-ink/10 pt-16 sm:pt-20">
        <GalaKreasiSection data={program.galaKreasi} color={program.color} onOpenDoc={setDoc} />
      </section>

      <SourcesFooter sources={program.sources} />

      <DocViewerModal doc={doc} onClose={() => setDoc(null)} />
    </div>
  )
}

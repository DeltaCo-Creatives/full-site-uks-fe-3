import Reveal from '../Reveal'
import SectionHeading from './SectionHeading'
import FactList from './FactList'
import CheckupTable from './CheckupTable'
import Timeline from './Timeline'
import ResourceLinks from './ResourceLinks'
import SourcesFooter from './SourcesFooter'

export default function ProgramCkg({ program }) {
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
        <SectionHeading title="Paket Pemeriksaan Sesuai Jenjang" color={program.color} />
        <CheckupTable {...program.checkup} />
      </section>

      <section>
        <SectionHeading title="Tahapan & Alur Pelaksanaan" description="Setiap tahun ajaran baru, mulai bulan Juli — langsung di satuan pendidikan." color={program.color} />
        <Timeline items={program.timeline} />
      </section>

      <section>
        <SectionHeading title="Tautan Terkait" color={program.color} />
        <ResourceLinks title="" groups={program.resourceGroups} />
      </section>

      <SourcesFooter sources={program.sources} />
    </div>
  )
}

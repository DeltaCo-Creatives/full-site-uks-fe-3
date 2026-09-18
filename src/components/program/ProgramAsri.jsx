import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import SectionHeading from './SectionHeading'
import FactList from './FactList'
import InfoCardGrid from './InfoCardGrid'
import SourcesFooter from './SourcesFooter'
import { darken } from '../../lib/color'

export default function ProgramAsri({ program }) {
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
        <SectionHeading title="Empat Pilar Utama" description="Apa saja yang dibangun lewat Gerakan ASRI?" color={program.color} />
        <InfoCardGrid items={program.pillars} color={program.color} />
      </section>

      <Reveal className="flex flex-col gap-3 rounded-md p-6 text-white shadow-soft sm:p-8" style={{ background: darken(program.color) }}>
        <h3 className="font-display text-lg font-semibold">{program.example.title}</h3>
        <p className="text-sm leading-relaxed text-white/90">{program.example.text}</p>
        <a href={program.example.sourceUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-white/70 underline underline-offset-2 hover:text-white">
          {program.example.sourceLabel}
        </a>
      </Reveal>

      <Link
        to={program.relatedLink.url}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-soft ring-1 ring-brand-100 transition hover:bg-brand-50"
      >
        {program.relatedLink.label}
        <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
          <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <SourcesFooter sources={program.sources} />
    </div>
  )
}

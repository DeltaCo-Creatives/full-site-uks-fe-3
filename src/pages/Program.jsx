import { useParams, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProgramSwitcher from '../components/program/ProgramSwitcher'
import Program7kaih from '../components/program/Program7kaih'
import ProgramMbg from '../components/program/ProgramMbg'
import ProgramCkg from '../components/program/ProgramCkg'
import ProgramAsri from '../components/program/ProgramAsri'
import { PROGRAMS } from '../data/program'

const BODY_BY_KEY = {
  '7kaih': Program7kaih,
  mbg: ProgramMbg,
  ckg: ProgramCkg,
  asri: ProgramAsri,
}

export default function Program() {
  const { key } = useParams()
  const program = PROGRAMS.find((p) => p.key === key)
  if (!program) return <Navigate to="/program/7kaih" replace />

  const Body = BODY_BY_KEY[program.key]

  return (
    <>
      <PageHero
        eyebrow={`Program Prioritas · ${program.shortTitle}`}
        title={program.title}
        description={program.summary}
        color={program.color}
        crumbs={[{ label: 'Program' }, { label: program.shortTitle }]}
      />

      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <ProgramSwitcher activeKey={key} />
        <Body program={program} />
      </div>
    </>
  )
}

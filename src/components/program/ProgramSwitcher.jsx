import { Link } from 'react-router-dom'
import { PROGRAMS } from '../../data/program'
import { darken } from '../../lib/color'

// Pill switcher at the top of every /program/:key page.
export default function ProgramSwitcher({ activeKey }) {
  return (
    <div className="mb-10 flex flex-wrap gap-2 sm:mb-14">
      {PROGRAMS.map((p) => (
        <Link
          key={p.key}
          to={`/program/${p.key}`}
          className={`rounded-full px-4 py-3 text-sm font-semibold transition ${p.key === activeKey ? 'text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'}`}
          style={p.key === activeKey ? { background: darken(p.color) } : undefined}
        >
          {p.shortTitle}
        </Link>
      ))}
    </div>
  )
}

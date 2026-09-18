import Reveal from '../Reveal'

// CKG's per-jenjang checkup coverage. Rendered as stacked cards rather than an HTML table so
// it never needs horizontal scroll on small screens.
export default function CheckupTable({ intro, rows, note }) {
  return (
    <div className="flex flex-col gap-5">
      {intro && <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{intro}</p>}
      <div className="grid gap-4 sm:grid-cols-3">
        {rows.map((row, i) => (
          <Reveal key={row.level} delay={i * 0.06} className="flex flex-col gap-2 rounded-md border border-ink/10 bg-white p-5 shadow-soft">
            <h3 className="font-display text-base font-semibold text-ink">{row.level}</h3>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{row.grades}</p>
            <p className="text-sm leading-relaxed text-ink-soft">{row.text}</p>
          </Reveal>
        ))}
      </div>
      {note && <p className="text-xs leading-relaxed text-ink-soft/80">{note}</p>}
    </div>
  )
}

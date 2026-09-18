import Reveal from '../Reveal'

// Key/value fact strip (dasar hukum, koordinator, kapan, di mana, ...) shown under the intro
// paragraphs on each program page.
export default function FactList({ facts }) {
  return (
    <Reveal className="grid gap-4 rounded-md border border-ink/10 bg-white p-6 shadow-soft sm:grid-cols-2">
      {facts.map((f) => (
        <div key={f.label}>
          <p className="text-xs font-bold uppercase tracking-wide text-ink-soft/70">{f.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink">{f.value}</p>
        </div>
      ))}
    </Reveal>
  )
}

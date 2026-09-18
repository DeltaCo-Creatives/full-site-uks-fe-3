import Reveal from '../Reveal'
import { darken } from '../../lib/color'

// "Why this exists" contrast block for 7KAIH: the problems it answers vs. what it aims to build.
// Reuses the colored-callout idiom from SekolahSehatFokus.jsx for the right-hand card.
export default function UrgensiSolusi({ problems, solutions, capaian, color }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Reveal className="flex flex-col gap-4 rounded-md border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
        <h3 className="font-display text-lg font-semibold text-ink">Tantangan yang Dijawab</h3>
        <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-ink-soft">
          {problems.map((p) => (
            <li key={p} className="flex items-start gap-2.5">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink-soft/40" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.08} className="flex flex-col gap-4 rounded-md p-6 text-white shadow-soft sm:p-8" style={{ background: darken(color) }}>
        <h3 className="font-display text-lg font-semibold">Yang Ingin Dibentuk</h3>
        <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-white/90">
          {solutions.map((s) => (
            <li key={s} className="flex items-start gap-2.5">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white/60" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
        {capaian && (
          <p className="mt-auto border-t border-white/20 pt-4 text-sm font-semibold uppercase tracking-wide text-white/85">
            Capaian: {capaian}
          </p>
        )}
      </Reveal>
    </div>
  )
}

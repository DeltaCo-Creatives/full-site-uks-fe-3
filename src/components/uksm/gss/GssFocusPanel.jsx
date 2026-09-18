import Reveal from '../../Reveal'
import ExternalLink from '../../ExternalLink'
import GssTopicBlock from './GssTopicBlock'

// Everything one GSS focus area asks of a school, in the order a reader acts on it: the goal,
// the activities to run, background topics, then the downloadable tools.
export default function GssFocusPanel({ focus }) {
  return (
    <div className="flex flex-col gap-5">
      <Reveal className="rounded-md p-6 text-white shadow-soft sm:p-8" style={{ background: focus.color }}>
        <span className="text-xs font-bold uppercase tracking-wide text-white/80">Fokus Sekolah Sehat</span>
        <p className="mt-2 max-w-2xl text-base leading-relaxed sm:text-lg">{focus.goal}</p>
      </Reveal>

      <Reveal delay={0.05} className="rounded-md bg-white p-6 shadow-soft sm:p-7">
        <h3 className="font-display text-lg font-semibold text-ink">Kegiatan {focus.title} di sekolah</h3>
        <ol className="mt-4 flex flex-col gap-3">
          {focus.activities.map((activity, i) => {
            const label = typeof activity === 'string' ? null : activity.label
            const text = typeof activity === 'string' ? activity : activity.text
            return (
              <li key={text} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                <span
                  className="grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white"
                  style={{ background: focus.color }}
                >
                  {i + 1}
                </span>
                <span>
                  {label && <strong className="text-ink">{label}. </strong>}
                  {text}
                </span>
              </li>
            )
          })}
        </ol>
      </Reveal>

      {focus.topics.map((topic, i) => (
        <Reveal key={topic.id} delay={0.08 + i * 0.03} className="rounded-md bg-white p-6 shadow-soft sm:p-7">
          <GssTopicBlock topic={topic} color={focus.color} />
        </Reveal>
      ))}

      <Reveal delay={0.15} className="rounded-md bg-paper-dim/70 p-6 sm:p-7">
        <h3 className="font-display text-lg font-semibold text-ink">Alat bantu penerapan {focus.title}</h3>
        <ul className="mt-4 flex flex-col gap-2.5">
          {focus.tools.map((tool) => (
            <li key={tool.title} className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-white px-4 py-3 shadow-soft">
              <span className="text-sm font-medium text-ink">{tool.title}</span>
              {tool.variants ? (
                <span className="flex flex-wrap gap-1.5">
                  {tool.variants.map((v) => (
                    <a
                      key={v.label}
                      href={v.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 hover:bg-brand-100"
                    >
                      {v.label}
                    </a>
                  ))}
                </span>
              ) : tool.url ? (
                <ExternalLink href={tool.url} className="text-xs font-bold text-brand-700 hover:text-brand-800">
                  Buka dokumen
                </ExternalLink>
              ) : (
                <span className="text-xs font-medium italic text-ink-soft/60">Tautan belum tersedia</span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}

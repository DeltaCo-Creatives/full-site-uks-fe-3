// One background topic inside a GSS focus panel. `topic.type` picks the shape: 'text'
// (paragraphs), 'list' (bulleted or numbered items, plain strings or {label,text}), or 'facts'
// (label/value pairs, e.g. SKJ's schedule or BIAS's months).
export default function GssTopicBlock({ topic, color }) {
  const ListTag = topic.ordered ? 'ol' : 'ul'

  return (
    <div>
      <h3 className="font-display text-base font-semibold text-ink">{topic.title}</h3>

      {topic.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)} className="mt-2 text-sm leading-relaxed text-ink-soft">{p}</p>
      ))}

      {topic.intro && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{topic.intro}</p>}

      {topic.type === 'list' && (
        <ListTag className="mt-3 flex flex-col gap-2.5">
          {topic.items.map((item, i) => {
            const label = typeof item === 'string' ? null : item.label
            const text = typeof item === 'string' ? item : item.text
            return (
              <li key={text} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-0.5 shrink-0 text-xs font-bold" style={{ color }}>
                  {topic.ordered ? `${i + 1}.` : '•'}
                </span>
                <span>
                  {label && <strong className="text-ink">{label}: </strong>}
                  {text}
                </span>
              </li>
            )
          })}
        </ListTag>
      )}

      {topic.type === 'facts' && (
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          {topic.items.map((fact) => (
            <div key={fact.label} className="rounded-md bg-paper px-4 py-3">
              <dt className="text-xs font-bold uppercase tracking-wide" style={{ color }}>{fact.label}</dt>
              <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}

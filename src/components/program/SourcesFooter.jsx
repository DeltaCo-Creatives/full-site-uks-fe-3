// Small provenance line at the bottom of each program page — every fact on these pages traces
// back to one of these sources.
export default function SourcesFooter({ sources }) {
  return (
    <p className="mt-4 text-xs leading-relaxed text-ink-soft/70">
      Sumber:{' '}
      {sources.map((s, i) => (
        <span key={s.url}>
          <a href={s.url} target="_blank" rel="noreferrer" className="underline decoration-ink-soft/30 underline-offset-2 hover:text-ink-soft">
            {s.label}
          </a>
          {i < sources.length - 1 ? ' · ' : ''}
        </span>
      ))}
    </p>
  )
}

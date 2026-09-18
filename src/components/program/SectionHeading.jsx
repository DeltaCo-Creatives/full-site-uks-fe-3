import Reveal from '../Reveal'

// Consistent section heading for program overview pages — matches the eyebrow/h2/description
// idiom used across Home.jsx sections.
export default function SectionHeading({ id, eyebrow, title, description, color, className = 'mb-8 sm:mb-10' }) {
  return (
    <Reveal as="div" id={id} className={`scroll-mt-24 ${className}`}>
      {eyebrow && (
        <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color }}>
          <span className="h-px w-8" style={{ background: color }} />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">{description}</p>}
    </Reveal>
  )
}

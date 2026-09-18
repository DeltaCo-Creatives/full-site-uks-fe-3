import Reveal from '../Reveal'

// Vertical step timeline (CKG's "H-7 / H-2 / Hari H / Setelahnya" pelaksanaan flow).
export default function Timeline({ items }) {
  return (
    <ol className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 0.05} className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:gap-6">
          <span className="shrink-0 font-display text-sm italic text-ink-soft/60 sm:w-24">{item.when}</span>
          <div>
            <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}

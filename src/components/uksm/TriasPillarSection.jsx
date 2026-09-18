import Reveal from '../Reveal'
import TriasAccordionItem from './TriasAccordionItem'

// One Trias UKS/M pillar: its header (matches TRIAS_PILLARS in data/site.js) followed by its
// sub-programs as a single-open accordion list (openId/onToggle are lifted to the page so only
// one item is open across the whole page at a time).
export default function TriasPillarSection({ pillar, subPrograms, openId, onToggle }) {
  return (
    <section id={pillar.key}>
      <Reveal className="mb-6 flex items-start gap-4">
        <span
          className="grid size-11 shrink-0 place-items-center rounded-full font-display text-lg font-bold text-white"
          style={{ background: pillar.color }}
        >
          {pillar.number}
        </span>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: pillar.color }}>
            Pilar {pillar.number} · {subPrograms.length} sub-program
          </span>
          <h2 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">{pillar.title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{pillar.summary}</p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-3">
        {subPrograms.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.04}>
            <TriasAccordionItem
              item={item}
              index={i}
              color={pillar.color}
              isOpen={item.id === openId}
              onToggle={() => onToggle(item.id)}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

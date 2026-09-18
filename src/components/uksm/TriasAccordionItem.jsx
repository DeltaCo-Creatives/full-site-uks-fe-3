// One Trias UKS/M sub-program: a numbered row that expands into its description and any
// labeled sections (Waktu/Tempat/Pelaksana/Kegiatan/Sarana/Langkah-langkah/...). Content
// shape comes from src/data/uksm/trias.js — see that file's header comment for why the
// section list is dynamic instead of fixed columns.
function SectionBlock({ section, color }) {
  return (
    <div className="mt-5 first:mt-0">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide" style={{ color }}>
        {section.label}
      </p>
      {section.type === 'text' && <p className="text-sm leading-relaxed text-ink-soft">{section.content}</p>}
      {(section.type === 'bullets' || section.type === 'numbered') && (
        <ul className="flex flex-col gap-2">
          {section.content.map((entry, i) => (
            <li key={entry} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
              <span className="mt-0.5 shrink-0 text-xs font-bold" style={{ color }}>
                {section.type === 'numbered' ? `${i + 1}.` : '•'}
              </span>
              {entry}
            </li>
          ))}
        </ul>
      )}
      {section.type === 'links' && (
        <ul className="flex flex-col gap-2">
          {section.content.map((link) => (
            <li key={link.label} className="text-sm leading-relaxed">
              {link.url ? (
                <a href={link.url} target="_blank" rel="noreferrer" className="font-semibold" style={{ color }}>
                  {link.label}
                </a>
              ) : (
                <span className="text-ink-soft/70">{link.label} <span className="italic">(tautan belum tersedia)</span></span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function TriasAccordionItem({ item, index, color, isOpen, onToggle }) {
  const panelId = `trias-panel-${item.id}`

  return (
    <div className="overflow-hidden rounded-md bg-white shadow-soft">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      >
        <span
          className="grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
          style={{ background: color }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex-1 font-display text-base font-semibold text-ink sm:text-lg">{item.title}</span>
        <svg
          viewBox="0 0 20 20"
          width="16"
          height="16"
          fill="none"
          className={`shrink-0 text-ink-soft transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <div id={panelId} className="border-t border-ink/10 px-5 pb-6 pt-5 sm:pl-16">
            {item.placeholder ? (
              <p className="text-sm italic leading-relaxed text-ink-soft/70">
                Konten lengkap untuk topik ini belum tersedia di sumber resmi dan akan ditambahkan kemudian.
              </p>
            ) : (
              <>
                {item.description && <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>}
                {item.sections.map((section) => (
                  <SectionBlock key={section.label} section={section} color={color} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

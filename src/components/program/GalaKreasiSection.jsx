import Reveal from '../Reveal'
import SectionHeading from './SectionHeading'

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" width="13" height="13" fill="none" className="shrink-0">
    <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// SAIH & Gala Kreasi Video — prod-only content kept as a 7KAIH section (id="gala-kreasi") since
// DEV has no page of its own for it. `onOpenDoc` opens our own PDFs (SK pemenang, buku petunjuk
// pelaksanaan) in the shared DocViewerModal instead of navigating away.
export default function GalaKreasiSection({ data, color, onOpenDoc }) {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        id={data.id}
        eyebrow="Bagian dari 7KAIH"
        title="SAIH & Gala Kreasi Video"
        description={data.intro}
        color={color}
        className=""
      />

      <Reveal className="flex flex-col gap-4 rounded-md border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
        <h3 className="font-display text-lg font-semibold text-ink">{data.saih.title}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{data.saih.note}</p>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {data.saih.competitions.map((c) => (
            <li key={c.title} className="flex items-center justify-between gap-3 rounded-xl bg-paper px-4 py-3 text-sm">
              <span>
                <span className="block text-xs font-bold uppercase tracking-wide text-ink-soft/70">{c.level}</span>
                <span className="font-semibold text-ink">{c.title}</span>
              </span>
              {c.unavailable ? (
                <span className="shrink-0 text-xs font-medium italic text-ink-soft/60">tautan tidak tersedia</span>
              ) : (
                <a href={c.url} target="_blank" rel="noreferrer" className="shrink-0 text-brand-500">
                  <ArrowIcon />
                </a>
              )}
            </li>
          ))}
        </ul>
        <a href={data.saih.guideUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
          Surat Edaran & Panduan Lomba
          <ArrowIcon />
        </a>
      </Reveal>

      <Reveal delay={0.08} className="flex flex-col gap-4 rounded-md border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
        <h3 className="font-display text-lg font-semibold text-ink">{data.gala.title}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{data.gala.text}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.gala.editions.map((ed) => (
            <div key={ed.year} className="flex flex-col gap-2 rounded-xl bg-paper p-4">
              <p className="font-display text-base font-semibold text-ink">Gala Kreasi {ed.year}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-ink-soft/70">{ed.focus}</p>
              <a href={ed.pageUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                Halaman resmi
                <ArrowIcon />
              </a>
              {ed.guideUrl ? (
                <button
                  type="button"
                  onClick={() => onOpenDoc({ title: `Buku Petunjuk Pelaksanaan Gala Kreasi ${ed.year}`, url: ed.guideUrl })}
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Buku Petunjuk Pelaksanaan
                  <ArrowIcon />
                </button>
              ) : (
                <span className="text-xs font-medium italic text-ink-soft/60">Petunjuk pelaksanaan: tautan tidak tersedia</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-2 border-t border-ink/10 pt-4">
          <p className="text-sm leading-relaxed text-ink-soft">{data.gala.winners2024}</p>
          <button
            type="button"
            onClick={() => onOpenDoc({ title: 'SK Pemenang Gala Kreasi Video GSS 2024', url: data.gala.winnersDocUrl })}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            SK Pemenang Gala Kreasi Video GSS 2024
            <ArrowIcon />
          </button>
        </div>
      </Reveal>
    </div>
  )
}

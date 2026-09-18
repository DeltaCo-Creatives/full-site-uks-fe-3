import Reveal from '../Reveal'
import { STRUKTUR_ORGANISASI } from '../../data/site'

// Struktur Organisasi: Tim Pembina (government levels) and Tim Pelaksana (school team),
// stacked as two full sections (not tabs) so both #tim-pembina and #tim-pelaksana are always
// present in the DOM for the legacy /uks-m/struktur-organisasi/:which redirects to land on.
export default function TentangStruktur() {
  const { pembina, pelaksana } = STRUKTUR_ORGANISASI

  return (
    <div className="mt-5 grid gap-6 sm:grid-cols-2">
      <div id="tim-pembina">
        <Reveal className="h-full rounded-md bg-white p-6 shadow-soft sm:p-7">
          <h3 className="font-display text-lg font-semibold text-ink">{pembina.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pembina.body}</p>
          <ol className="mt-5 flex flex-col gap-2.5">
            {pembina.levels.map((l, i) => (
              <li key={l} className="flex items-center gap-3 rounded-md bg-paper px-4 py-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">{i + 1}</span>
                <span className="text-sm font-medium text-ink">{l}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div id="tim-pelaksana">
        <Reveal delay={0.08} className="h-full rounded-md bg-white p-6 shadow-soft sm:p-7">
          <h3 className="font-display text-lg font-semibold text-ink">{pelaksana.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pelaksana.body}</p>
          <p className="mt-5 mb-2.5 text-xs font-bold uppercase tracking-wide text-brand-600">Tugas</p>
          <ul className="flex flex-col gap-2.5">
            {pelaksana.tasks.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  )
}

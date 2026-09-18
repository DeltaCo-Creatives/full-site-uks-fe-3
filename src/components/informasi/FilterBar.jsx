const SORT_OPTIONS = [
  { value: 'newest', label: 'Terbaru' },
  { value: 'oldest', label: 'Terlama' },
]

// Shared category-chip + sort control for the Informasi list pages (Berita, Praktik Baik,
// UPT Bercerita, Agenda). Chips use the same rounded-full/brand-600 idiom as MitraTabs.
export default function FilterBar({
  categories,
  active,
  onSelect,
  sort,
  onSortChange,
  sortOptions = SORT_OPTIONS,
  sortLabel = 'Urutkan',
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={active === null}
          onClick={() => onSelect(null)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            active === null ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
          }`}
        >
          Semua
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => onSelect(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === c ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {onSortChange && (
        <label className="flex shrink-0 items-center gap-2 text-sm font-semibold text-ink-soft">
          {sortLabel}
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink ring-1 ring-brand-100 outline-none focus:ring-brand-400"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      )}
    </div>
  )
}

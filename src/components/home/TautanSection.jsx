import Reveal from '../Reveal'

// No local ministry logo assets exist (checked public/images/scraped and mitraClients.js) — DEV
// renders these as 4 plain external links, so this ships as clean text tiles rather than
// inventing or hot-linking logo images.
const TAUTAN = [
  { name: 'Kemendagri', domain: 'kemendagri.go.id', url: 'https://kemendagri.go.id/', color: 'text-forest' },
  { name: 'Kemenag', domain: 'kemenag.go.id', url: 'https://kemenag.go.id/', color: 'text-navy' },
  { name: 'Kemkes', domain: 'kemkes.go.id', url: 'https://kemkes.go.id/', color: 'text-rust' },
  { name: 'Kemendikdasmen', domain: 'kemendikdasmen.go.id', url: 'https://kemendikdasmen.go.id/', color: 'text-ochre' },
]

export default function TautanSection() {
  return (
    <section className="border-t border-ink/10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 sm:mb-12">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Tautan Terkait</span>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Kementerian &amp; lembaga mitra</h2>
        </Reveal>

        <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TAUTAN.map((t) => (
            <a
              key={t.domain}
              href={t.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1 rounded-md border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <span className={`font-display text-lg font-medium ${t.color}`}>{t.name}</span>
              <span className="text-xs text-ink-soft/70">{t.domain}</span>
              <svg viewBox="0 0 20 20" width="14" height="14" fill="none" className="mt-2 text-ink-soft transition group-hover:translate-x-1">
                <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

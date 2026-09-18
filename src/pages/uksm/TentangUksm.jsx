import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import ArticleCard from '../../components/ArticleCard'
import TentangTriasSummary from '../../components/uksm/TentangTriasSummary'
import TentangStruktur from '../../components/uksm/TentangStruktur'
import { UKSM_PAGES } from '../../data/site'
import { PRAKTIK_BAIK } from '../../data/praktikBaik'

// UKS/M ▸ Tentang UKS/M — merges the old split prod-style pages (deskripsi umum, tujuan,
// struktur organisasi, sasaran) plus a Trias UKS/M summary into one page, per the DEV sitemap's
// /tentang-uks row. Section ids match what the legacy redirects in App.jsx target.
const SECTIONS = [
  { id: 'deskripsi-umum', label: 'Deskripsi Umum' },
  { id: 'trias-ringkas', label: 'Trias UKS/M' },
  { id: 'tujuan', label: 'Tujuan' },
  { id: 'struktur-organisasi', label: 'Struktur Organisasi' },
  { id: 'sasaran', label: 'Sasaran' },
]

export default function TentangUksm() {
  const deskripsi = UKSM_PAGES['deskripsi-umum']
  const tujuan = UKSM_PAGES.tujuan
  const sasaran = UKSM_PAGES.sasaran

  return (
    <>
      <PageHero
        eyebrow="UKS/M"
        title="Tentang UKS/M"
        description={deskripsi.body[0]}
        crumbs={[{ label: 'Tentang UKS/M' }]}
      />
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <nav aria-label="Lompat ke bagian" className="mb-10 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink-soft ring-1 ring-brand-100 transition hover:bg-brand-50"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <section id="deskripsi-umum">
          <Reveal className="rounded-md bg-white p-7 shadow-soft sm:p-10">
            {deskripsi.body.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink-soft">{p}</p>
            ))}
          </Reveal>
        </section>

        <section id="trias-ringkas" className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Trias UKS/M</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            UKS/M diwujudkan melalui pelaksanaan tiga program pokok berikut. Setiap pilar punya halaman
            sendiri dengan sub-program lengkap.
          </p>
          <TentangTriasSummary />
        </section>

        <section id="tujuan" className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{tujuan.title}</h2>
          <Reveal className="mt-5 rounded-md bg-white p-7 shadow-soft sm:p-10">
            {tujuan.body.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink-soft">{p}</p>
            ))}
          </Reveal>
        </section>

        <section id="struktur-organisasi" className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Struktur Organisasi</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            UKS/M dijalankan oleh dua tim: Tim Pembina di setiap jenjang pemerintahan, dan Tim Pelaksana di
            tingkat sekolah/madrasah.
          </p>
          <TentangStruktur />
        </section>

        <section id="sasaran" className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{sasaran.title}</h2>
          <Reveal className="mt-5 rounded-md bg-white p-7 shadow-soft sm:p-10">
            {sasaran.body.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink-soft">{p}</p>
            ))}
            {sasaran.stakeholders && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600">Pemangku Kepentingan</p>
                <div className="flex flex-wrap gap-2">
                  {sasaran.stakeholders.map((s) => (
                    <span key={s} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        </section>

        {PRAKTIK_BAIK.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Praktik Baik Terbaru</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Cerita pelaksanaan UKS/M dan Trias UKS/M dari sekolah/madrasah di berbagai daerah.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PRAKTIK_BAIK.slice(0, 4).map((item, i) => (
                <ArticleCard key={item.slug} {...item} href={`/informasi/praktik-baik/${item.slug}`} delay={i * 0.06} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}

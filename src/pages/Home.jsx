import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../lib/gsap'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import MitraMarquee from '../components/MitraMarquee'
import Magnetic from '../components/Magnetic'
import TiltCard from '../components/TiltCard'
import ImageReveal from '../components/ImageReveal'
import SplitHeadline from '../components/SplitHeadline'
import { STATS, TRIAS_PILLARS } from '../data/site'
import { GSS_FOKUS, GSS_INTRO } from '../data/sekolahSehat'
import { PROGRAMS } from '../data/program'
import { SLIDER_IMAGES } from '../data/slider'
import { BERITA } from '../data/berita'
import { BUKU_PANDUAN } from '../data/bukuPanduan'
import { INFOGRAFIS } from '../data/infografis'
import { darken } from '../lib/color'

function HeroSlider() {
  const [index, setIndex] = useState(0)
  const imgRefs = useRef([])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDER_IMAGES.length), 4600)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    imgRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, { opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.05, duration: 1, ease: 'power2.inOut' })
    })
  }, [index])

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-ink/10 shadow-lift sm:aspect-[3/4]">
      {SLIDER_IMAGES.map((src, i) => (
        <img
          key={src}
          ref={(el) => (imgRefs.current[i] = el)}
          src={src}
          alt=""
          className="absolute inset-0 size-full object-cover"
          style={{ opacity: i === 0 ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 p-4">
        {SLIDER_IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}

function Hero() {
  const headlineRef = useRef(null)
  const sliderWrapRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.55 },
    )
    gsap.fromTo(
      sliderWrapRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.35 },
    )
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return undefined
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--spot-x', `${((e.clientX - rect.left) / rect.width) * 100}%`)
      el.style.setProperty('--spot-y', `${((e.clientY - rect.top) / rect.height) * 100}%`)
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section ref={sectionRef} className="spotlight relative overflow-hidden border-b border-ink/10 pt-8 sm:pt-14">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
        <div>
          <div ref={headlineRef}>
            <span className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              <span className="h-px w-8 bg-brand-700" />
              Usaha Kesehatan Sekolah/Madrasah
            </span>
            <SplitHeadline
              text="Sekolah sehat, anak Indonesia hebat"
              className="font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-ink sm:text-[6.4vw] md:text-[4.6rem]"
              delay={0.15}
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Portal resmi UKS/M: informasi program, berita, publikasi, dan panduan kesehatan sekolah dari
              Kementerian Pendidikan Dasar dan Menengah.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link
                  to="/trias-uks-m/pendidikan-kesehatan"
                  className="inline-flex rounded-md bg-ink px-6 py-3.5 text-sm font-bold text-paper transition hover:bg-brand-700"
                >
                  Jelajahi Trias UKS/M
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/sekolah-sehat"
                  className="inline-flex rounded-md border border-ink/20 px-6 py-3.5 text-sm font-bold text-ink transition hover:border-ink"
                >
                  Gerakan Sekolah Sehat
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        <div ref={sliderWrapRef} className="md:justify-self-end">
          <HeroSlider />
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:grid-cols-4 sm:px-6">
          {STATS.map((s, i) => (
            <div key={s.label} className={`py-5 ${i > 0 ? 'border-l border-ink/10 pl-5' : ''}`}>
              <Counter value={s.value} suffix={s.suffix} className="font-display text-3xl font-medium italic text-ink sm:text-4xl" />
              <p className="mt-1 text-xs leading-snug text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TriasSection() {
  const [openKey, setOpenKey] = useState(null)

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Trias UKS/M</span>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Tiga pilar pelaksanaan</h2>
        </div>
        <p className="max-w-xs text-sm text-ink-soft">
          Menopang penyelenggaraan UKS/M di setiap satuan pendidikan, dari kelas hingga lingkungan sekolah.
        </p>
      </Reveal>

      <div className="border-t border-ink/15">
        {TRIAS_PILLARS.map((p, i) => {
          const isOpen = openKey === p.key
          return (
            <Reveal key={p.key} as="div" delay={i * 0.05} className="border-b border-ink/15">
              <button
                type="button"
                onClick={() => setOpenKey(isOpen ? null : p.key)}
                className="group flex w-full items-baseline gap-5 py-6 text-left sm:gap-8"
              >
                <span className="font-display text-base italic text-ink-soft/50 sm:text-lg">
                  {String(p.number).padStart(2, '0')}
                </span>
                <span className="font-display text-3xl font-medium text-ink transition-colors group-hover:text-brand-700 sm:text-4xl">
                  {p.title}
                </span>
                <span className="ml-auto flex shrink-0 items-center gap-4">
                  <span className="hidden text-xs uppercase tracking-wide text-ink-soft/60 sm:block">
                    {p.items.length} indikator
                  </span>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" className={`text-ink-soft transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="min-h-0">
                  <div className="grid gap-6 pb-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10 sm:pl-13">
                    <p className="text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                    <div className="flex flex-wrap content-start gap-2">
                      {p.items.map((item, idx) => (
                        <span
                          key={item}
                          className="rounded-md border px-3 py-1.5 text-xs font-medium text-ink"
                          style={{ borderColor: `${p.color}55` }}
                        >
                          {idx + 1}. {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/trias-uks-m/${p.key}`}
                    className="mb-8 inline-flex items-center gap-1.5 text-sm font-bold sm:pl-13"
                    style={{ color: p.color }}
                  >
                    Buka halaman {p.title}
                    <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                      <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function ProgramSection() {
  return (
    <section className="border-y border-ink/10 bg-brand-900 py-16 text-paper sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-100/80">
              Program Prioritas
            </span>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Empat program berjalan</h2>
          </div>
        </Reveal>
      </div>

      <Reveal className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-6">
        {PROGRAMS.map((p) => (
          <TiltCard
            key={p.key}
            max={3}
            className="group w-[78vw] shrink-0 snap-start overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10 transition hover:ring-white/25 sm:w-[340px]"
          >
            <Link to={`/program/${p.key}`} className="flex h-full flex-col">
              {p.image ? (
                <ImageReveal src={p.image} className="aspect-[4/3] w-full bg-white/10" imgClassName="transition duration-700 group-hover:scale-105" />
              ) : (
                <div className="grid aspect-[4/3] w-full place-items-center" style={{ background: darken(p.color) }}>
                  <span className="font-display text-3xl italic text-white">{p.shortTitle}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: p.color }}>
                  {p.shortTitle}
                </span>
                <h3 className="mt-1 font-display text-xl font-medium">{p.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-white/70">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Selengkapnya
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none" className="transition group-hover:translate-x-1">
                    <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </TiltCard>
        ))}
        <div className="w-1 shrink-0 sm:w-2" aria-hidden="true" />
      </Reveal>
    </section>
  )
}

function GssSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <Reveal className="mb-10 sm:mb-14">
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
          Gerakan Sekolah Sehat
        </span>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">5 fokus sekolah sehat</h2>
          <Link to="/sekolah-sehat" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
            Lihat semua
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
              <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{GSS_INTRO}</p>
      </Reveal>

      <div className="border-t border-ink/15">
        {GSS_FOKUS.map((f, i) => (
          <Reveal key={f.key} delay={i * 0.05} className="border-b border-ink/15">
            <Link
              to={`/sekolah-sehat/${f.key}`}
              className={`group flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8 ${i % 2 ? 'sm:flex-row-reverse' : ''}`}
            >
              <span
                className="h-24 w-full shrink-0 rounded-sm transition-transform duration-500 group-hover:scale-[1.03] sm:h-20 sm:w-32"
                style={{ background: f.color }}
              />
              <div className="flex-1">
                <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-brand-700 sm:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink-soft">{f.tagline}</p>
              </div>
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" className="hidden shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 sm:block">
                <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function BeritaSection() {
  const [featured, ...rest] = BERITA
  return (
    <section className="border-t border-ink/10 bg-paper-dim/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              Berita Terbaru
            </span>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Kabar dari lapangan</h2>
          </div>
          <Link to="/informasi/berita" className="text-sm font-bold text-brand-700">
            Semua berita →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          {featured && (
            <Reveal className="min-w-0">
              <a
                href={`https://uks.kemendikdasmen.go.id/halaman/berita/${featured.slug}`}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <ImageReveal src={featured.image} className="aspect-[4/3] rounded-md" imgClassName="transition duration-700 group-hover:scale-105" />
                <div className="flex flex-col justify-center">
                  <span className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-700">{featured.category}</span>
                  <h3 className="font-display text-2xl font-medium leading-snug text-ink">{featured.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{featured.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                    Baca selengkapnya
                    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" className="transition group-hover:translate-x-1">
                      <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          )}

          <Reveal delay={0.1} className="min-w-0 flex flex-col divide-y divide-ink/10 border-t border-ink/10 lg:border-t-0">
            {rest.map((b) => (
              <a
                key={b.slug}
                href={`https://uks.kemendikdasmen.go.id/halaman/berita/${b.slug}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 py-4"
              >
                <div className="size-16 shrink-0 overflow-hidden rounded-md bg-brand-100">
                  {b.image && <img src={b.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-110" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-bold uppercase tracking-wide text-brand-700">{b.category}</p>
                  <h4 className="line-clamp-2 font-display text-base font-medium leading-snug text-ink">{b.title}</h4>
                </div>
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none" className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1">
                  <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function PublikasiSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <Reveal className="mb-10 sm:mb-12">
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Publikasi</span>
        <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Panduan &amp; infografis</h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal className="min-w-0">
          <h3 className="mb-4 font-display text-lg italic text-ink-soft">Buku Panduan</h3>
          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {BUKU_PANDUAN.slice(0, 3).map((b) => (
              <a
                key={b.title}
                href={b.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 py-3.5"
              >
                <img src={b.image} alt="" className="h-16 w-12 rounded-sm object-cover" loading="lazy" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-ink">{b.title}</span>
                  <span className="text-xs text-ink-soft/70">Unduh PDF</span>
                </span>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" className="shrink-0 text-brand-600 transition group-hover:translate-y-0.5">
                  <path d="M10 4v9m0 0-3.5-3.5M10 13l3.5-3.5M4 15.5h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
          <Link to="/publikasi/buku-panduan" className="mt-4 inline-block text-sm font-bold text-brand-700">
            Semua buku panduan →
          </Link>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <h3 className="mb-4 font-display text-lg italic text-ink-soft">Infografis</h3>
          <div className="grid grid-cols-2 gap-3">
            {INFOGRAFIS.slice(0, 4).map((d) => (
              <div key={d.title} className="group overflow-hidden rounded-md border border-ink/10">
                <div className="aspect-[3/4] overflow-hidden bg-brand-100">
                  <img src={d.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <p className="truncate p-2.5 text-xs font-medium text-ink-soft">{d.title}</p>
              </div>
            ))}
          </div>
          <Link to="/publikasi/infografis" className="mt-4 inline-block text-sm font-bold text-brand-700">
            Semua infografis →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function MitraSection() {
  return (
    <section className="border-t border-ink/10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Kolaborasi</span>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Mitra UKS/M</h2>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <MitraMarquee />
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TriasSection />
      <ProgramSection />
      <GssSection />
      <BeritaSection />
      <PublikasiSection />
      <MitraSection />
    </>
  )
}

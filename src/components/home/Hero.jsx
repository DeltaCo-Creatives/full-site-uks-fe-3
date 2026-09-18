import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../../lib/gsap'
import Magnetic from '../Magnetic'
import SplitHeadline from '../SplitHeadline'
import Counter from '../Counter'
import { STATS } from '../../data/site'
import { SLIDER_IMAGES } from '../../data/slider'

// Dot-navigated slideshow of decorative promo imagery — no per-slide caption/CTA data exists in
// SLIDER_IMAGES, so (unlike DEV, where only 1 of 5 slides was clickable) none of the slides carry
// their own link; the two CTAs below the headline apply site-wide instead.
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

export default function Hero() {
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
                  to="/uks-m/trias#pendidikan-kesehatan"
                  className="inline-flex rounded-md bg-ink px-6 py-3.5 text-sm font-bold text-paper transition hover:bg-brand-700"
                >
                  Jelajahi Trias UKS/M
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/uks-m/sekolah-sehat"
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

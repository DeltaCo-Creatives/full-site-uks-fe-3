import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { MITRA_CLIENTS } from '../data/mitraClients'

export default function MitraMarquee() {
  const trackRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    const width = track.scrollWidth / 2
    tweenRef.current = gsap.to(track, { x: -width, duration: 38, ease: 'none', repeat: -1 })
    return () => tweenRef.current?.kill()
  }, [])

  const slow = () => tweenRef.current && gsap.to(tweenRef.current, { timeScale: 0.15, duration: 0.4 })
  const resume = () => tweenRef.current && gsap.to(tweenRef.current, { timeScale: 1, duration: 0.4 })

  const loop = [...MITRA_CLIENTS, ...MITRA_CLIENTS]

  return (
    <div className="relative overflow-hidden py-2" onMouseEnter={slow} onMouseLeave={resume}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />
      <div ref={trackRef} className="flex w-max items-center gap-10">
        {loop.map((c, i) => (
          <a
            key={c.name + i}
            href={c.website || undefined}
            target={c.website ? '_blank' : undefined}
            rel="noreferrer"
            title={c.fullName}
            className="flex h-14 w-32 shrink-0 items-center justify-center rounded-xl bg-white/70 p-3 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
          >
            <img src={c.logo} alt={c.fullName} className="max-h-9 max-w-full object-contain" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  )
}

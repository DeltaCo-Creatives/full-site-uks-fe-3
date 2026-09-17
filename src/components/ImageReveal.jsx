import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/**
 * Wipes an image into view (clip-path + slight scale-down-to-rest) as it scrolls into the
 * viewport, instead of a plain fade — reserved for large editorial photography, not every
 * thumbnail on the page. The reveal animation lives on a wrapper, not the <img> itself, so a
 * separate CSS hover effect (e.g. `imgClassName="group-hover:scale-105"`) can still animate
 * the image freely once the reveal is done — an inline GSAP transform on the same element
 * would otherwise out-specificity and permanently block any CSS hover transform.
 */
export default function ImageReveal({ src, alt = '', className = '', imgClassName = '', delay = 0 }) {
  const wrapRef = useRef(null)
  const clipRef = useRef(null)
  const scaleRef = useRef(null)
  const played = useRef(false)

  useLayoutEffect(() => {
    if (clipRef.current) gsap.set(clipRef.current, { clipPath: 'inset(100% 0% 0% 0%)' })
    if (scaleRef.current) gsap.set(scaleRef.current, { scale: 1.12 })
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return undefined

    const play = () => {
      if (played.current) return
      played.current = true
      gsap.to(clipRef.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, delay, ease: 'power4.out' })
      gsap.to(scaleRef.current, { scale: 1, duration: 1.1, delay, ease: 'power4.out' })
    }

    const io = new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && play(), {
      threshold: 0.15,
    })
    io.observe(el)
    const fallback = setTimeout(play, 2500)
    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`}>
      <div ref={clipRef} className="size-full">
        <div ref={scaleRef} className="size-full">
          <img src={src} alt={alt} loading="lazy" className={`size-full object-cover ${imgClassName}`} />
        </div>
      </div>
    </div>
  )
}

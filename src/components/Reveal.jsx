import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/**
 * Fades + lifts its children into place as they scroll into view.
 *
 * Uses IntersectionObserver (not GSAP ScrollTrigger) to decide *when* to play: it keeps
 * working correctly across client-side route changes and images that resize the page after
 * mount, without needing manual ScrollTrigger.refresh() bookkeeping. A safety-net timeout
 * also forces the content visible if, for any reason, the observer never fires — this is
 * decoration, so it must never be the thing that hides real content.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, y = 28, className = '', ...rest }) {
  const ref = useRef(null)
  const played = useRef(false)

  // set the hidden starting state synchronously, before paint, so there's no flash of
  // fully-visible content before the observer has a chance to run
  useLayoutEffect(() => {
    if (ref.current) gsap.set(ref.current, { opacity: 0, y })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const play = () => {
      if (played.current) return
      played.current = true
      // clearProps once done: leaving an inline transform/opacity behind would out-specificity
      // any CSS hover:translate/scale utility a caller puts on this same element forever after
      gsap.to(el, { opacity: 1, y: 0, duration: 0.7, delay, ease: 'power3.out', clearProps: 'opacity,transform' })
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) play()
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)

    // safety net: never leave content permanently invisible
    const fallback = setTimeout(play, 2500)

    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}

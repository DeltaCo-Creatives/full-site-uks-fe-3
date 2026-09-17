import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/**
 * Splits its text children into per-word spans (each clipped by an overflow-hidden wrapper)
 * and animates them up into place on mount, staggered. Used for hero-level headlines only —
 * this is a load-bearing first impression, not something to sprinkle everywhere.
 */
export default function SplitHeadline({ text, as: Tag = 'h1', className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const words = el.querySelectorAll('.split-word')
    gsap.fromTo(
      words,
      { yPercent: 120, rotate: 4 },
      { yPercent: 0, rotate: 0, duration: 0.9, stagger: 0.045, ease: 'power4.out', delay },
    )
  }, [delay])

  return (
    <Tag ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span className="split-line" key={word + i}>
          <span className="split-word">
            {word}
            {i < text.split(' ').length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  )
}

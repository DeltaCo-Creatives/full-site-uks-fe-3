import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { formatNumber } from '../lib/format'

export default function Counter({ value, suffix = '', delay = 0.4, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const obj = { n: 0 }
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.6,
      delay,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = formatNumber(Math.round(obj.n)) + suffix
      },
    })
    return () => tween.kill()
  }, [value, suffix, delay])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}

import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/**
 * A full-screen panel that wipes up to cover the viewport, waits for the new route to mount
 * underneath it, then wipes away to reveal it. Driven entirely by `stage` from App.jsx, which
 * owns the actual transition state machine (idle -> covering -> revealing -> idle).
 */
export default function PageCurtain({ stage, onCovered, onRevealed }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (stage === 'covering') {
      gsap.set(el, { scaleY: 0, transformOrigin: 'bottom' })
      gsap.to(el, { scaleY: 1, duration: 0.4, ease: 'power3.inOut', onComplete: onCovered })
    } else if (stage === 'revealing') {
      gsap.set(el, { transformOrigin: 'top' })
      gsap.to(el, { scaleY: 0, duration: 0.5, ease: 'power3.inOut', delay: 0.08, onComplete: onRevealed })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-[999] bg-brand-900"
      style={{ transform: 'scaleY(0)', transformOrigin: 'bottom', pointerEvents: stage === 'idle' ? 'none' : 'auto' }}
    />
  )
}

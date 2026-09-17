import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/**
 * Subtle pointer-tracked 3D tilt + a soft light sheen, for cards that should feel physically
 * present rather than flat. Disabled on touch devices where there's no hover to track.
 */
export default function TiltCard({ children, className = '', max = 6, as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const sheenRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return undefined

    gsap.set(el, { transformPerspective: 900 })
    const rxTo = gsap.quickTo(el, 'rotateX', { duration: 0.5, ease: 'power3.out' })
    const ryTo = gsap.quickTo(el, 'rotateY', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      ryTo((px - 0.5) * max * 2)
      rxTo(-(py - 0.5) * max * 2)
      if (sheenRef.current) {
        sheenRef.current.style.setProperty('--x', `${px * 100}%`)
        sheenRef.current.style.setProperty('--y', `${py * 100}%`)
        sheenRef.current.style.opacity = '0.5'
      }
    }
    const onLeave = () => {
      rxTo(0)
      ryTo(0)
      if (sheenRef.current) gsap.to(sheenRef.current, { opacity: 0, duration: 0.4 })
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max])

  return (
    <Tag
      ref={ref}
      className={`relative will-change-transform ${className}`}
      {...rest}
    >
      <span
        ref={sheenRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0"
        style={{
          background: 'radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.35), transparent 60%)',
        }}
      />
      {children}
    </Tag>
  )
}

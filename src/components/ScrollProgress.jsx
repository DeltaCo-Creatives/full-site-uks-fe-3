import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from '../lib/gsap'

export default function ScrollProgress() {
  const barRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const setFromScroll = gsap.quickTo(barRef.current, 'scaleX', { duration: 0.15, ease: 'none' })
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setFromScroll(max > 0 ? h.scrollTop / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent">
      <div ref={barRef} className="h-full w-full origin-left bg-brand-600" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}

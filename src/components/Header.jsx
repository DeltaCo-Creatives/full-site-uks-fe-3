import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../lib/gsap'
import Magnetic from './Magnetic'
import NavOverlay from './NavOverlay'

export default function Header() {
  const [open, setOpen] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(barRef.current, { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
  }, [])

  return (
    <>
      <header ref={barRef} className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="group flex items-center gap-2.5">
            <img src="/images/scraped/logoUks.png" alt="Portal UKS/M" className="h-8 w-auto" />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-base font-semibold italic text-ink">Portal UKS/M</span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
                Usaha Kesehatan Sekolah/Madrasah
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/kontak"
              className="hidden px-3 py-2 text-sm font-semibold text-ink-soft transition hover:text-ink sm:block"
            >
              Kontak
            </Link>
            <Magnetic>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group flex items-center gap-2.5 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-paper transition hover:bg-brand-700 active:scale-95 sm:px-5"
              >
                <span className="flex flex-col gap-[3px]">
                  <span className="block h-[1.5px] w-4 bg-current transition-all group-hover:w-3" />
                  <span className="block h-[1.5px] w-4 bg-current" />
                  <span className="block h-[1.5px] w-4 bg-current transition-all group-hover:w-3" />
                </span>
                Menu
              </button>
            </Magnetic>
          </div>
        </div>
      </header>
      <NavOverlay open={open} onClose={() => setOpen(false)} />
    </>
  )
}

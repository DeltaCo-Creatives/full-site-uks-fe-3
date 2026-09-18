import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const HASH_RETRY_MS = 60
const HASH_MAX_TRIES = 20

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
      return undefined
    }
    // sections can mount a little after the route (curtain + reveal), so poll briefly for the anchor
    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    let timer
    const seek = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else if (tries++ < HASH_MAX_TRIES) timer = setTimeout(seek, HASH_RETRY_MS)
    }
    seek()
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GSS_FOKUS } from '../../../data/sekolahSehat'
import GssFocusPanel from './GssFocusPanel'

const keyFromHash = (hash) => GSS_FOKUS.find((f) => `#${f.key}` === hash)?.key

// The 5 GSS focus areas as pill tabs (same pill-tab idiom as TriasPillar.jsx). The active
// panel's wrapper id equals its focus key, so links like /uks-m/sekolah-sehat#sehat-jiwa (the
// legacy /sekolah-sehat/:key redirect target) select that tab on mount and on hash change.
export default function GssFocusTabs() {
  const location = useLocation()
  const [activeKey, setActiveKey] = useState(() => keyFromHash(location.hash) ?? GSS_FOKUS[0].key)

  useEffect(() => {
    const matched = keyFromHash(location.hash)
    if (matched) setActiveKey(matched)
  }, [location.hash])

  const focus = GSS_FOKUS.find((f) => f.key === activeKey) ?? GSS_FOKUS[0]

  return (
    <div>
      <div role="tablist" aria-label="Fokus Sekolah Sehat" className="mb-6 flex flex-wrap gap-2">
        {GSS_FOKUS.map((f) => {
          const isActive = f.key === activeKey
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              id={`gss-tab-${f.key}`}
              aria-selected={isActive}
              aria-controls={f.key}
              onClick={() => setActiveKey(f.key)}
              className={`rounded-full px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                isActive ? 'text-white' : 'bg-white text-ink-soft ring-1 ring-brand-100 hover:bg-brand-50'
              }`}
              style={isActive ? { background: f.color } : undefined}
            >
              {f.title}
            </button>
          )
        })}
      </div>

      <div id={focus.key} role="tabpanel" aria-labelledby={`gss-tab-${focus.key}`} tabIndex={0}>
        <GssFocusPanel focus={focus} />
      </div>
    </div>
  )
}

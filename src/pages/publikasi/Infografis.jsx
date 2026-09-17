import { useEffect, useState } from 'react'
import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import { INFOGRAFIS } from '../../data/infografis'

export default function Infografis() {
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (!preview) return undefined
    const onKey = (e) => e.key === 'Escape' && setPreview(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [preview])

  return (
    <>
      <PageHero eyebrow="Publikasi" title="Infografis" description="Poster dan materi visual edukasi UKS/M." crumbs={[{ label: 'Publikasi' }, { label: 'Infografis' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INFOGRAFIS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 8) * 0.06}>
              <button
                type="button"
                onClick={() => setPreview(d)}
                className="group block w-full overflow-hidden rounded-md bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-brand-100">
                  <img src={d.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <p className="truncate p-3 text-left text-xs font-semibold text-ink-soft">{d.title}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5" onClick={() => setPreview(null)}>
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />
          <div className="relative max-h-[85vh] max-w-lg overflow-hidden rounded-md bg-white shadow-lift" onClick={(e) => e.stopPropagation()}>
            <img src={preview.image} alt={preview.title} className="max-h-[75vh] w-full object-contain" />
            <div className="flex items-center justify-between gap-3 p-4">
              <p className="text-sm font-semibold text-ink">{preview.title}</p>
              <button type="button" onClick={() => setPreview(null)} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

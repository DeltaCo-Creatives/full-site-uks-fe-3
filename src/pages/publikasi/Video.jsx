import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import { VIDEO } from '../../data/video'
import { formatDate } from '../../lib/format'

export default function Video() {
  return (
    <>
      <PageHero eyebrow="Publikasi" title="Video" description="Konten video edukasi dan dokumentasi kegiatan UKS/M." crumbs={[{ label: 'Publikasi' }, { label: 'Video' }]} />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO.map((v, i) => (
            <Reveal key={v.title} delay={(i % 8) * 0.06}>
              <a
                href={v.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-md bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-brand-100">
                  {v.image && <img src={v.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />}
                  <span className="absolute inset-0 grid place-items-center bg-ink/20 opacity-0 transition group-hover:opacity-100">
                    <span className="grid size-11 place-items-center rounded-full bg-white/90">
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" className="ml-0.5 text-brand-700">
                        <path d="M6 4.5v11l9-5.5-9-5.5Z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1.5 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand-600">{formatDate(v.date)}</p>
                  <p className="line-clamp-2 font-display text-sm font-semibold leading-snug text-ink">{v.title}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

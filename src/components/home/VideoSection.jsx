import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import ImageReveal from '../ImageReveal'
import { VIDEO } from '../../data/video'

export default function VideoSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Publikasi</span>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Video</h2>
        </div>
        <Link to="/publikasi/video" className="text-sm font-bold text-brand-700">
          Temukan Video Lainnya →
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {VIDEO.slice(0, 4).map((v, i) => (
          <Reveal key={v.videoUrl} delay={(i % 4) * 0.06}>
            <a
              href={v.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-md border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative">
                <ImageReveal src={v.image} className="aspect-video w-full bg-brand-100" imgClassName="transition duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-11 place-items-center rounded-full bg-ink/80 text-paper transition group-hover:bg-brand-700">
                    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
                      <path d="M6 4.5v11l9-5.5-9-5.5Z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 p-4">
                <h3 className="line-clamp-2 font-display text-base font-medium leading-snug text-ink">{v.title}</h3>
                <span className="mt-auto pt-2 text-xs font-bold uppercase tracking-wide text-brand-600">Tonton di YouTube</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

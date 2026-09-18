import Reveal from '../Reveal'
import MitraMarquee from '../MitraMarquee'

export default function MitraSection() {
  return (
    <section className="border-t border-ink/10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Kolaborasi</span>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">Mitra UKS/M</h2>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <MitraMarquee />
      </Reveal>
    </section>
  )
}

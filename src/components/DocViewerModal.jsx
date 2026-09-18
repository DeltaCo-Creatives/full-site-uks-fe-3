import Modal from './Modal'

// In-page PDF viewer (dev's "Modul Terbaru" pattern). `doc` = { title, url } or null.
export default function DocViewerModal({ doc, onClose }) {
  return (
    <Modal open={!!doc} onClose={onClose} label={doc?.title} className="h-[90vh] max-w-4xl">
      {doc && (
        <>
          <div className="flex items-center justify-between gap-3 border-b border-ink/10 p-4">
            <p className="line-clamp-2 text-sm font-semibold text-ink">{doc.title}</p>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-brand-700"
              >
                Unduh
              </a>
              <button type="button" onClick={onClose} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">
                Tutup
              </button>
            </div>
          </div>
          <iframe src={doc.url} title={doc.title} className="w-full flex-1 bg-paper-dim" />
        </>
      )}
    </Modal>
  )
}

export default function ExternalLink({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 ${className}`}>
      {children}
      <svg viewBox="0 0 20 20" width="13" height="13" fill="none" className="shrink-0 opacity-70">
        <path d="M7 13 13 7M13 7H8M13 7v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

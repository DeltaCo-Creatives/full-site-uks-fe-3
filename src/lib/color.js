/**
 * Darkens a hex color by blending it toward black. Used when a brand accent color (chosen to
 * read well as bright text on a dark background) is reused as a large fill behind white text,
 * where the original bright tone would fail WCAG AA contrast.
 */
export function darken(hex, factor = 0.55) {
  const n = hex.replace('#', '')
  const r = Math.round(parseInt(n.slice(0, 2), 16) * factor)
  const g = Math.round(parseInt(n.slice(2, 4), 16) * factor)
  const b = Math.round(parseInt(n.slice(4, 6), 16) * factor)
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`
}

import { flattenNav } from '../data/nav'
import { BERITA } from '../data/berita'
import { PRAKTIK_BAIK } from '../data/praktikBaik'
import { UPT_BERCERITA } from '../data/uptBercerita'
import { BUKU_PANDUAN } from '../data/bukuPanduan'
import { INFOGRAFIS } from '../data/infografis'
import { VIDEO } from '../data/video'
import { APLIKASI } from '../data/aplikasi'
import { PROGRAMS } from '../data/program'
import { GSS_FOKUS } from '../data/sekolahSehat'
import { TRIAS_PILLARS } from '../data/site'

// Client-side search index + matcher for /pencarian.
//
// Every source here is owned by a different agent/area of the app, so every field read below is
// optional-chained or defaulted — a source growing new fields, or briefly missing one, must never
// throw. Only `title`/`summary`(-ish) + a route are load-bearing for a result to show up.

const TYPE_LABELS = {
  page: 'Halaman',
  berita: 'Berita',
  'praktik-baik': 'Praktik Baik',
  'upt-bercerita': 'UPT Bercerita',
  'buku-panduan': 'Buku Panduan',
  infografis: 'Infografis',
  video: 'Video',
  aplikasi: 'Aplikasi',
  program: 'Program',
  'sekolah-sehat': 'Sekolah Sehat',
  trias: 'Trias UKS/M',
}

// Fixed display order for grouped results, independent of collection order.
const TYPE_ORDER = Object.keys(TYPE_LABELS)

function stripDiacritics(str) {
  return str.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export function normalize(str) {
  return stripDiacritics(String(str ?? '')).toLowerCase().trim()
}

function tokenize(query) {
  return normalize(query).split(/\s+/).filter(Boolean)
}

function item(type, { id, title, summary = '', url }) {
  if (!title || !url) return null
  // listing-page items share one url, so the fallback id also carries the title
  return { id: `${type}:${id ?? `${url}:${title}`}`, type, title, summary, url, haystack: normalize(`${title} ${summary}`) }
}

/**
 * Builds the flat searchable index once. Cheap enough (a few hundred items) to rebuild per
 * render if ever needed, but pages should build it once via `buildSearchIndex()` and reuse it.
 */
export function buildSearchIndex() {
  const out = []

  for (const n of flattenNav()) {
    if (n.ext) continue // external nav links (Tautan) aren't useful "site search" results
    const it = item('page', { title: n?.title, url: n?.url })
    if (it) out.push(it)
  }

  for (const b of BERITA ?? []) {
    const it = item('berita', { id: b?.slug, title: b?.title, summary: b?.summary, url: b?.slug ? `/informasi/berita/${b.slug}` : null })
    if (it) out.push(it)
  }

  for (const p of PRAKTIK_BAIK ?? []) {
    const it = item('praktik-baik', { id: p?.slug, title: p?.title, summary: p?.summary, url: p?.slug ? `/informasi/praktik-baik/${p.slug}` : null })
    if (it) out.push(it)
  }

  for (const u of UPT_BERCERITA ?? []) {
    const it = item('upt-bercerita', { id: u?.slug, title: u?.title, summary: u?.summary, url: u?.slug ? `/informasi/upt-bercerita/${u.slug}` : null })
    if (it) out.push(it)
  }

  for (const b of BUKU_PANDUAN ?? []) {
    const it = item('buku-panduan', { title: b?.title, summary: b?.description, url: '/publikasi/buku-panduan' })
    if (it) out.push(it)
  }

  for (const d of INFOGRAFIS ?? []) {
    const it = item('infografis', { title: d?.title, url: '/publikasi/infografis' })
    if (it) out.push(it)
  }

  for (const v of VIDEO ?? []) {
    const it = item('video', { title: v?.title, url: '/publikasi/video' })
    if (it) out.push(it)
  }

  for (const a of APLIKASI ?? []) {
    const it = item('aplikasi', { title: a?.name, summary: a?.description, url: '/informasi/aplikasi' })
    if (it) out.push(it)
  }

  for (const p of PROGRAMS ?? []) {
    const it = item('program', { id: p?.key, title: p?.title, summary: p?.summary, url: p?.key ? `/program/${p.key}` : null })
    if (it) out.push(it)
  }

  for (const f of GSS_FOKUS ?? []) {
    const it = item('sekolah-sehat', { id: f?.key, title: f?.title, summary: f?.tagline, url: f?.key ? `/uks-m/sekolah-sehat#${f.key}` : null })
    if (it) out.push(it)
  }

  for (const p of TRIAS_PILLARS ?? []) {
    const it = item('trias', { id: p?.key, title: p?.title, summary: p?.summary, url: p?.key ? `/uks-m/trias#${p.key}` : null })
    if (it) out.push(it)
  }

  return out
}

/**
 * Case/diacritic-insensitive token match: every whitespace-separated token in `query` must
 * appear as a substring somewhere in the item's normalized "title + summary". Results are
 * grouped by type, in a fixed display order, each with its own count.
 */
export function searchIndex(index, query) {
  const tokens = tokenize(query)
  if (tokens.length === 0) return { total: 0, groups: [] }

  const matches = index.filter((it) => tokens.every((t) => it.haystack.includes(t)))

  const byType = new Map()
  for (const m of matches) {
    if (!byType.has(m.type)) byType.set(m.type, [])
    byType.get(m.type).push(m)
  }

  const groups = TYPE_ORDER.filter((t) => byType.has(t)).map((t) => ({
    type: t,
    label: TYPE_LABELS[t],
    items: byType.get(t),
    count: byType.get(t).length,
  }))

  return { total: matches.length, groups }
}

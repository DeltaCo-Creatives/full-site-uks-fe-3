// Structure follows the simplified DEV sitemap (docs/sitemaps/sitemap-dev-uks.MD), with
// Sekolah Sehat (GSS) kept as a UKS/M menu item as in the uks-fe reference project.
// `ext: true` marks links that leave the site (matches the ↗ marker used on the real site).

export const NAV = [
  { title: 'Beranda', url: '/' },
  {
    title: 'UKS/M',
    items: [
      { title: 'Tentang UKS/M', url: '/uks-m/tentang' },
      { title: 'Trias UKS/M', url: '/uks-m/trias' },
      { title: 'Manajemen UKS/M', url: '/uks-m/manajemen' },
      { title: 'Stratifikasi UKS/M', url: '/uks-m/stratifikasi' },
      { title: 'Sekolah Sehat (GSS)', url: '/uks-m/sekolah-sehat' },
    ],
  },
  {
    title: 'Program',
    items: [
      { title: '7 Kebiasaan Anak Indonesia Hebat (7KAIH)', url: '/program/7kaih' },
      { title: 'Makan Bergizi Gratis (MBG)', url: '/program/mbg' },
      { title: 'Cek Kesehatan Gratis (CKG)', url: '/program/ckg' },
      { title: 'Gerakan Sekolah ASRI', url: '/program/asri' },
    ],
  },
  {
    title: 'Mitra',
    items: [
      { title: 'Tentang Mitra UKS/M', url: '/mitra/tentang' },
      { title: 'Panduan Kemitraan', url: '/mitra/panduan-kemitraan' },
      { title: 'Mitra Kami', url: '/mitra/mitra-kami' },
      { title: 'Aktivitas Mitra', url: '/mitra/aktivitas-mitra' },
      { title: 'Dukungan Mitra', url: '/mitra/dukungan-mitra' },
    ],
  },
  {
    title: 'Informasi',
    items: [
      { title: 'Berita', url: '/informasi/berita' },
      { title: 'Praktik Baik', url: '/informasi/praktik-baik' },
      { title: 'UPT Bercerita', url: '/informasi/upt-bercerita' },
      { title: 'Agenda', url: '/informasi/agenda' },
      { title: 'Aplikasi', url: '/informasi/aplikasi' },
    ],
  },
  {
    title: 'Publikasi',
    items: [
      { title: 'Produk Hukum', url: '/publikasi/produk-hukum' },
      { title: 'Buku Panduan', url: '/publikasi/buku-panduan' },
      { title: 'Infografis', url: '/publikasi/infografis' },
      { title: 'Video', url: '/publikasi/video' },
    ],
  },
  {
    title: 'Tautan',
    items: [
      {
        title: 'Kemenkes',
        items: [
          { title: 'Kementerian Kesehatan', url: 'https://kemkes.go.id/', ext: true },
          { title: 'Ayo Sehat Kemenkes', url: 'https://ayosehat.kemkes.go.id/', ext: true },
          { title: 'Perangkat Ajar Kesehatan', url: 'https://ayosehat.kemkes.go.id/perangkat-ajar-kesehatan', ext: true },
        ],
      },
      {
        title: 'Kemendikdasmen',
        items: [
          { title: 'Ditjen PAUDDIKDASMEN', url: 'https://pdm.kemendikdasmen.go.id/', ext: true },
          { title: 'Direktorat PAUD', url: 'https://paudpedia.kemendikdasmen.go.id/', ext: true },
          { title: 'Direktorat SD', url: 'https://ditsd.kemendikdasmen.go.id/hal/usaha-kesehatan-sekolah', ext: true },
          { title: 'Direktorat SMP', url: 'https://ditsmp.kemendikdasmen.go.id', ext: true },
          { title: 'Direktorat SMA', url: 'https://sma.kemendikdasmen.go.id', ext: true },
        ],
      },
      {
        title: 'Kemenag',
        items: [
          { title: 'Direktorat KSKK', url: 'https://pendis.kemenag.go.id/ditkskkmadrasah', ext: true },
          { title: 'Direktorat Pesantren', url: 'https://pendis.kemenag.go.id/ditpdpontren', ext: true },
        ],
      },
      {
        title: 'Kemendagri',
        items: [{ title: 'Direktorat SUPD', url: 'https://bangda.kemendagri.go.id/', ext: true }],
      },
    ],
  },
]

// flattened index used by the nav-overlay search
export function flattenNav(nodes = NAV, trail = []) {
  let out = []
  for (const node of nodes) {
    const path = [...trail, node.title]
    if (node.url && !node.isGroupLabel) {
      out.push({ title: node.title, url: node.url, ext: !!node.ext, trail: path.slice(0, -1) })
    }
    if (node.items) {
      const childItems = node.items.map((it) =>
        typeof it === 'string' ? { title: it, url: null, trail: path } : it,
      )
      out = out.concat(flattenNav(childItems, path))
    }
  }
  return out
}

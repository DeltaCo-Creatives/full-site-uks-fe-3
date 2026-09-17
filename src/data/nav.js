// Curated from the live navItems payload served by https://uks.kemendikdasmen.go.id/
// `ext: true` marks links that leave the site (matches the ↗ marker used on the real site).

export const NAV = [
  { title: 'Beranda', url: '/' },
  {
    title: 'UKS/M',
    items: [
      { title: 'Deskripsi Umum', url: '/uks-m/deskripsi-umum' },
      { title: 'Tujuan', url: '/uks-m/tujuan' },
      { title: 'Sasaran', url: '/uks-m/sasaran' },
      {
        title: 'Struktur Organisasi',
        items: [
          { title: 'Tim Pembina UKS/M', url: '/uks-m/struktur-organisasi/tim-pembina' },
          { title: 'Tim Pelaksana UKS/M di Sekolah/Madrasah', url: '/uks-m/struktur-organisasi/tim-pelaksana' },
        ],
      },
      { title: 'Stratifikasi UKS/M', url: '/uks-m/stratifikasi' },
      { title: 'Manajemen UKS/M', url: '/uks-m/manajemen' },
      {
        title: 'Trias UKS/M',
        isGroupLabel: true,
        items: [
          {
            title: '(1) Pendidikan Kesehatan',
            url: '/trias-uks-m/pendidikan-kesehatan',
            items: [
              'Literasi Kesehatan',
              'Perilaku Hidup Bersih dan Sehat',
              'Pendidikan Gizi',
              'Pendidikan Kesehatan Reproduksi',
              'Pendidikan Karakter',
              'Pembiasaan Aktivitas Fisik',
              'Dokter Kecil',
            ],
          },
          {
            title: '(2) Pelayanan Kesehatan',
            url: '/trias-uks-m/pelayanan-kesehatan',
            items: [
              'Penjaringan Kesehatan dan Pemeriksaan Berkala',
              'Imunisasi',
              'Pemberian Obat Cacing',
              'P3K dan P3P',
            ],
          },
          {
            title: '(3) Pembinaan Lingkungan Sekolah Sehat',
            url: '/trias-uks-m/pembinaan-lingkungan-sekolah-sehat',
            items: [
              'Sanitasi Sekolah',
              'Pembinaan Kantin Sehat',
              'Pemanfaatan Pekarangan Sekolah',
              'Pemberantasan Sarang Nyamuk',
              'Kawasan Tanpa Rokok, Napza, Kekerasan dan Pornografi',
            ],
          },
        ],
      },
      {
        title: 'Sekolah Sehat',
        items: [
          { title: 'Gerakan Madrasah Sehat', url: 'https://madrasah.kemenag.go.id/madrasahsehat/', ext: true },
          { title: 'Gerakan Sekolah Sehat', url: '/sekolah-sehat' },
          { title: 'Sehat Bergizi', url: '/sekolah-sehat/sehat-bergizi' },
          { title: 'Sehat Fisik', url: '/sekolah-sehat/sehat-fisik' },
          { title: 'Sehat Imunisasi', url: '/sekolah-sehat/sehat-imunisasi' },
          { title: 'Sehat Jiwa', url: '/sekolah-sehat/sehat-jiwa' },
          { title: 'Sehat Lingkungan', url: '/sekolah-sehat/sehat-lingkungan' },
          { title: 'Bahan Advokasi GSS', url: '/sekolah-sehat/bahan-advokasi' },
        ],
      },
    ],
  },
  {
    title: 'Program',
    items: [
      { title: '7 Kebiasaan Anak Indonesia Hebat (7KAIH)', url: '/program/7kaih' },
      { title: 'Makan Bergizi Gratis (MBG)', url: '/program/mbg' },
      { title: 'Cek Kesehatan Gratis (CKG)', url: '/program/cek-kesehatan-gratis' },
      { title: 'Gerakan Sekolah ASRI', url: '/program/asri' },
    ],
  },
  {
    title: 'Mitra',
    items: [
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
      { title: 'Aplikasi', url: '/informasi/aplikasi' },
    ],
  },
  {
    title: 'Publikasi',
    items: [
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

// Sourced from docs/content-source/program/mbg.md (Portal UKS DEV /mbg, JDIH BPK Perpres 83/2024,
// BGN siaran pers). No local per-sasaran illustrations exist, so sasaran/outcome cards use icon
// badge tiles instead of images.

export const mbg = {
  key: 'mbg',
  title: 'Makan Bergizi Gratis',
  shortTitle: 'MBG',
  image: '/images/scraped/fotoMbg.jpeg',
  color: '#f59e0b',
  summary:
    'Program pemenuhan nutrisi harian peserta didik yang dikoordinasikan oleh Badan Gizi Nasional (BGN/SPPG) untuk mencetak generasi bebas stunting, sekaligus membiasakan adab makan dan cuci tangan sebelum makan.',

  intro: [
    'Makan Bergizi Gratis (MBG) adalah program nasional pemberian makanan bergizi secara gratis dan berkelanjutan kepada kelompok sasaran prioritas di seluruh Indonesia, sebagai upaya pemerintah memenuhi kebutuhan gizi masyarakat sekaligus membangun fondasi generasi yang sehat dan berkualitas.',
    'Program ini dilaksanakan berdasarkan Peraturan Presiden Nomor 83 Tahun 2024, di bawah koordinasi Badan Gizi Nasional (BGN), melalui Satuan Pelayanan Pemenuhan Gizi (SPPG) yang tersebar di berbagai daerah dengan mengutamakan bahan pangan lokal.',
  ],

  facts: [
    { label: 'Dasar hukum', value: 'Peraturan Presiden Nomor 83 Tahun 2024 tentang Badan Gizi Nasional' },
    { label: 'Koordinator', value: 'Badan Gizi Nasional (BGN)' },
    { label: 'Pelaksana', value: 'Satuan Pelayanan Pemenuhan Gizi (SPPG), mengutamakan bahan pangan lokal' },
  ],

  sasaran: [
    { badge: '1', title: 'Peserta Didik', text: 'PAUD, pendidikan dasar dan menengah — pendidikan umum, kejuruan, keagamaan, khusus, layanan khusus, dan pesantren.' },
    { badge: '2', title: 'Anak-Anak', text: 'Anak usia di bawah lima tahun (balita), sebagai bagian dari sasaran pemenuhan gizi nasional.' },
    { badge: '3', title: 'Ibu Hamil dan Menyusui', text: 'Kelompok prioritas untuk mencegah stunting sejak dari kandungan dan masa menyusui.' },
  ],

  outcomes: [
    { badge: '✓', title: 'Status Gizi Baik', text: 'Memastikan setiap individu generasi mendatang memiliki status gizi optimal sebagai modal kesehatan dan kecerdasan.' },
    { badge: '✓', title: 'Morbiditas & Mortalitas Rendah', text: 'Menurunnya angka kesakitan dan kematian, terutama pada ibu, bayi, dan anak-anak.' },
    { badge: '✓', title: 'Partisipasi Sekolah Tinggi', text: 'Menjamin anak-anak Indonesia dapat mengakses pendidikan dengan baik, didukung gizi yang memadai.' },
    { badge: '✓', title: 'Penurunan Biaya Pengobatan', text: 'Generasi yang sehat menekan beban biaya pengobatan bagi keluarga dan negara.' },
    { badge: '✓', title: 'Peningkatan PDB Jangka Panjang', text: 'Generasi sehat dan produktif berkontribusi pada pertumbuhan ekonomi yang berkelanjutan.' },
  ],

  praktikBaikCategory: 'Praktik Baik MBG',
  // Matches BUKU_PANDUAN entries (src/data/bukuPanduan.js) whose title mentions MBG — real PDFs
  // on our own domain, opened in the shared DocViewerModal.
  bukuPanduanMatch: ['MAKAN BERGIZI GRATIS', 'MBG'],

  resourceGroups: [
    {
      title: 'Situs Resmi',
      items: [
        { label: 'Dasbor MBG', url: 'https://mbg.pdm.kemendikdasmen.go.id/portal', ext: true },
        { label: 'Badan Gizi Nasional (BGN)', url: 'https://www.bgn.go.id/', ext: true },
      ],
    },
  ],

  sources: [
    { label: 'Portal UKS: halaman MBG', url: 'https://portal-uks.demo.or.id/mbg' },
    { label: 'JDIH BPK: Perpres No. 83 Tahun 2024', url: 'https://peraturan.bpk.go.id/Details/295857/perpres-no-83-tahun-2024' },
    { label: 'BGN: siaran pers sasaran MBG', url: 'https://www.bgn.go.id/news/siaran-pers/kepala-bgn-program-mbg-bersifat-inklusif-dan-jangkau-semua-kelompok-prioritas' },
  ],
}

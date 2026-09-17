// Real program summaries — titles, images and descriptions as published on the homepage of
// uks.kemendikdasmen.go.id ("Program Prioritas") and portal-uks.demo.or.id (ASRI, not yet on prod).

export const PROGRAMS = [
  {
    key: '7kaih',
    title: '7 Kebiasaan Anak Indonesia Hebat',
    shortTitle: '7KAIH',
    image: '/images/scraped/foto-7kaih.jpeg',
    color: '#2fa259',
    summary:
      'Tujuh kebiasaan harian yang dibangun bersama orang tua dan guru di satuan pendidikan untuk menumbuhkan karakter mulia dan disiplin hidup sehat peserta didik.',
    links: [
      { label: 'Cerdas Berkarakter', url: 'https://cerdasberkarakter.kemendikdasmen.go.id/', ext: true },
      { label: 'Praktik Baik 7KAIH', url: '/informasi/praktik-baik' },
    ],
  },
  {
    key: 'mbg',
    title: 'Makan Bergizi Gratis',
    shortTitle: 'MBG',
    image: '/images/scraped/fotoMbg.jpeg',
    color: '#f59e0b',
    summary:
      'Program pemenuhan nutrisi harian peserta didik yang dikoordinasikan oleh Badan Gizi Nasional (BGN/SPPG) untuk mencetak generasi bebas stunting, sekaligus membiasakan adab makan dan cuci tangan sebelum makan.',
    links: [
      { label: 'Dasbor MBG', url: 'https://mbg.pdm.kemendikdasmen.go.id/portal', ext: true },
      { label: 'Badan Gizi Nasional', url: 'https://www.bgn.go.id/', ext: true },
      { label: 'Praktik Baik MBG', url: '/informasi/praktik-baik' },
    ],
  },
  {
    key: 'cek-kesehatan-gratis',
    title: 'Cek Kesehatan Gratis',
    shortTitle: 'CKG',
    image: '/images/scraped/fotoCKG.png',
    color: '#1a73e8',
    summary:
      'Pemeriksaan kesehatan preventif dan gratis bagi peserta didik di satuan pendidikan, sejalan dengan pelaksanaan penjaringan kesehatan dan pemeriksaan berkala dalam Trias UKS/M.',
    links: [{ label: 'Bagian dari Pelayanan Kesehatan', url: '/trias-uks-m/pelayanan-kesehatan' }],
  },
  {
    key: 'asri',
    title: 'Gerakan Sekolah ASRI',
    shortTitle: 'ASRI',
    image: null,
    color: '#5fb7d0',
    summary:
      'Kampanye "Aman, Sehat, Resik, Indah" untuk lingkungan sekolah, selaras dengan pilar Pembinaan Lingkungan Sekolah Sehat dalam Trias UKS/M.',
    links: [{ label: 'Bagian dari Pembinaan Lingkungan', url: '/trias-uks-m/pembinaan-lingkungan-sekolah-sehat' }],
  },
]

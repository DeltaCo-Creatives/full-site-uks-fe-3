// Sourced from docs/content-source/program/7kaih.md (Portal UKS DEV /7kaih + Cerdas Berkarakter
// Kemendikdasmen) and docs/content-source/program/saih-gala-kreasi.md for the Gala Kreasi section.
// No local per-habit illustrations exist (DEV's /img/7kaih/*.png isn't ours to hotlink), so habits
// use numbered badge tiles instead of images.

const CERDAS = 'https://cerdasberkarakter.kemendikdasmen.go.id'

export const sevenKaih = {
  key: '7kaih',
  title: '7 Kebiasaan Anak Indonesia Hebat',
  shortTitle: '7KAIH',
  image: '/images/scraped/foto-7kaih.jpeg',
  color: '#2fa259',
  summary:
    'Tujuh kebiasaan harian yang dibangun bersama orang tua dan guru di satuan pendidikan untuk menumbuhkan karakter mulia dan disiplin hidup sehat peserta didik.',

  intro: [
    'Gerakan Tujuh Kebiasaan Anak Indonesia Hebat (7KAIH) adalah gerakan penguatan karakter yang mengajak setiap anak Indonesia membiasakan tujuh kebiasaan baik setiap hari: Bangun Pagi, Beribadah, Berolahraga, Makan Sehat dan Bergizi, Gemar Belajar, Bermasyarakat, dan Tidur Cepat.',
    'Gerakan ini lahir untuk menjawab tantangan zaman — mulai dari derasnya arus teknologi, gaya hidup serba instan, hingga menurunnya karakter dan kesehatan fisik-psikis anak muda. Melalui pembiasaan tujuh kebiasaan ini, 7KAIH ingin membentuk generasi yang sehat fisik, mental, dan spiritual; cerdas dan kreatif; serta peduli dan bertanggung jawab secara sosial — langkah nyata menuju Generasi Emas Indonesia 2045.',
  ],

  habits: [
    {
      badge: '1',
      title: 'Bangun Pagi',
      text: 'Mengajarkan nilai disiplin, keseimbangan, produktivitas, dan menghargai waktu yang berkontribusi pada kualitas hidup yang lebih baik.',
      href: `${CERDAS}/gerakan7kebiasaan-bangun-pagi/`,
    },
    {
      badge: '2',
      title: 'Beribadah',
      text: 'Bukan sekadar ritual, tetapi menyimpan makna spiritual dan moral yang membentuk kepribadian serta hubungan harmonis dengan Tuhan, alam, dan sesama.',
      href: `${CERDAS}/gerakan7kebiasaan-beribadah/`,
    },
    {
      badge: '3',
      title: 'Berolahraga',
      text: 'Lebih dari menjaga kesehatan fisik — membangun disiplin, keseimbangan, ketahanan mental, dan kehidupan yang lebih terarah dan bermakna.',
      href: `${CERDAS}/gerakan7kebiasaan-berolahraga`,
    },
    {
      badge: '4',
      title: 'Makan Sehat dan Bergizi',
      text: 'Memenuhi kebutuhan nutrisi tubuh dengan prinsip gizi seimbang untuk mendukung kehidupan yang sehat, seimbang, dan bermakna.',
      href: `${CERDAS}/gerakan7kebiasaan-makan-sehat-dan-bergizi`,
    },
    {
      badge: '5',
      title: 'Gemar Belajar',
      text: 'Mengajak setiap anak untuk terus tumbuh dalam pemahaman, karakter, dan kearifan.',
      href: `${CERDAS}/gerakan7kebiasaan-gemar-belajar/`,
    },
    {
      badge: '6',
      title: 'Bermasyarakat',
      text: 'Mendorong setiap anak hidup bersama secara harmonis dan berkontribusi terhadap kesejahteraan bersama.',
      href: `${CERDAS}/gerakan7kebiasaan-bermasyarakat/`,
    },
    {
      badge: '7',
      title: 'Tidur Cepat',
      text: 'Aspek penting kehidupan yang berdampak pada kesehatan fisik, kesejahteraan mental, serta kehidupan spiritual dan sosial.',
      href: `${CERDAS}/gerakan7kebiasaan-tidur-cepat/`,
    },
  ],

  urgensi: {
    problems: [
      'Perkembangan teknologi',
      'Generasi instan',
      'Penurunan karakter peserta didik',
      'Kejahatan/kekerasan dalam dunia pendidikan',
      'Menurunnya pemahaman terhadap budaya lokal',
      'Problematika kesehatan fisik dan psikis: judi online, obesitas, adiktif gawai, kesehatan mental, pornografi, narkoba',
    ],
    solutions: ['Sehat fisik, mental, dan spiritual', 'Cerdas dan kreatif', 'Peduli dan bertanggung jawab sosial'],
    capaian: 'Generasi Emas Indonesia Berkarakter',
  },

  cta: {
    title: 'Yuk, Praktikkan 7KAIH!',
    text: 'Ajak keluarga, teman, dan sekolahmu membiasakan tujuh kebiasaan baik ini setiap hari — mulai dari hari ini.',
  },

  infografisMatch: ['7KAIH', '7 KAIH'],
  praktikBaikCategory: 'Praktik Baik 7KAIH',

  resourceGroups: [
    {
      title: 'Dasar Hukum',
      items: [
        {
          label: 'Surat Edaran Bersama No. 1 Tahun 2025 tentang Penguatan Pendidikan Karakter melalui Pembiasaan di Satuan Pendidikan',
          unavailable: true,
        },
      ],
    },
    {
      title: 'Buku Kiat Jitu 7KAIH untuk Guru',
      items: [
        { label: 'Jenjang PAUD', url: 'https://s.id/kiatjitu7kaih-gurupaud', ext: true },
        { label: 'Jenjang SD', url: 'https://s.id/kiatjitu7kaih-gurusd', ext: true },
        { label: 'Jenjang SMP', url: 'https://s.id/kiatjitu7kaih-gurusmp', ext: true },
        { label: 'Jenjang SMA', url: 'https://s.id/kiatjitu7kaih-gurusma', ext: true },
      ],
    },
    {
      title: 'Buku Kiat Jitu 7KAIH untuk Orang Tua',
      items: [
        { label: 'Jenjang PAUD', url: 'https://s.id/kiatjitu7kaih-ortupaud', ext: true },
        { label: 'Jenjang SD', url: 'https://s.id/kiatjitu7kaih-ortusd', ext: true },
        { label: 'Jenjang SMP', url: 'https://s.id/kiatjitu7kaih-ortusmp', ext: true },
        { label: 'Jenjang SMA', url: 'https://s.id/kiatjitu7kaih-ortusma', ext: true },
      ],
    },
    {
      title: 'Panduan Lainnya',
      items: [
        { label: 'Modul Penguatan 7KAIH dalam Kepramukaan', url: 'https://s.id/modul7kaih-kepramukaan', ext: true },
        { label: 'Laman Resmi Gerakan 7KAIH — Cerdas Berkarakter Kemendikdasmen', url: `${CERDAS}/gerakan7kebiasaan/`, ext: true },
      ],
    },
  ],

  // SAIH & Gala Kreasi Video: prod-only content kept as a 7KAIH section since DEV has no page
  // for it. Source: docs/content-source/program/saih-gala-kreasi.md.
  galaKreasi: {
    id: 'gala-kreasi',
    intro:
      'Sehubungan dengan implementasi Gerakan 7KAIH dan tindak lanjut Surat Edaran Bersama No. 1 Tahun 2025 tentang Penguatan Pendidikan Karakter melalui Pembiasaan di Satuan Pendidikan, Direktorat Jenderal PAUD, Pendidikan Dasar, dan Pendidikan Menengah bersama BBPMP dan BPMP menyelenggarakan ajang lomba untuk peserta didik dan satuan pendidikan.',
    saih: {
      title: 'Lomba Semarak Anak Indonesia Hebat (SAIH) 2025',
      note: 'Diselenggarakan dalam rangka Hari Pendidikan Nasional 2025, untuk peserta didik jenjang PAUD, SD, SMP, dan SMA di seluruh Indonesia. Pendaftaran dan pengiriman materi lomba ditutup 25 April 2025 pukul 23.59 WIB.',
      competitions: [
        { level: 'Semua jenjang', title: 'Lomba Senam Anak Indonesia Hebat', url: 'https://s.id/InformasiLSAIH', ext: true },
        { level: 'Jenjang PAUD', title: 'Lomba Video Cerita Anak', unavailable: true },
        { level: 'Jenjang SD', title: 'Lomba Potret Cerita', unavailable: true },
        { level: 'Jenjang SMP', title: 'Lomba Video Cerita Pendek', url: 'https://s.id/ReelsvideoPendek7KAIHDitSMP_', ext: true },
        { level: 'Jenjang SMA', title: 'Lomba Video Cerita Pendek/Vlog', url: 'https://s.id/cerita7KAIH', ext: true },
      ],
      guideUrl: 'https://drive.google.com/drive/u/0/folders/14aBSX1V5P9ZL1vHOEZwyao1UmUl2br_8',
    },
    gala: {
      title: 'Gala Kreasi Video Gerakan Sekolah Sehat',
      text: 'Ajang lomba video praktik baik implementasi Gerakan Sekolah Sehat, bertema "Sekolah Sehat, Generasi Hebat", terbuka untuk satuan pendidikan negeri maupun swasta di semua jenjang: PAUD (TK, KB, TPA, SPS), SD, SMP, SMA, SMK, SLB, SKB, dan PKBM. Penghargaan diberikan kepada video peringkat 1 sampai 10 terbaik untuk setiap jenjang pendidikan.',
      winners2024:
        'Pengumuman resmi pemenang Gala Kreasi Video GSS 2024 dituangkan dalam Surat Keputusan berikut.',
      winnersDocUrl:
        'https://uks.kemendikdasmen.go.id/storage/manajemen_uks/files/produk_hukum/DXRUqW5K8kiaCOCm6aW29UNVK6uvVsQ3hSflYReR.pdf',
      editions: [
        {
          year: '2024',
          focus: 'Fokus 5 Sehat',
          pageUrl: 'https://uks.kemendikdasmen.go.id/gala-kreasi/gala-kreasi-2024',
          guideUrl: 'https://uks.kemendikdasmen.go.id/storage/manajemen_uks/files/images/uPpuXgH6FalmAGQhTHwv6TGqfQI8ZJMXxk4fhdoM.pdf',
        },
        {
          year: '2023',
          focus: 'Fokus 3 Sehat',
          pageUrl: 'https://uks.kemendikdasmen.go.id/gala-kreasi/gala-kreasi-2023',
          guideUrl: null,
        },
      ],
    },
  },

  sources: [
    { label: 'Portal UKS: halaman 7KAIH', url: 'https://portal-uks.demo.or.id/7kaih' },
    { label: 'Cerdas Berkarakter Kemendikdasmen: Gerakan 7KAIH', url: `${CERDAS}/gerakan7kebiasaan/` },
    { label: 'Portal UKS (prod): Informasi Lomba SAIH 2025', url: 'https://uks.kemendikdasmen.go.id/gala-kreasi/informasi-lomba-saih-2025' },
    { label: 'Portal UKS (prod): Gala Kreasi Video 2024', url: 'https://uks.kemendikdasmen.go.id/gala-kreasi/gala-kreasi-2024' },
    { label: 'Portal UKS (prod): Gala Kreasi Video 2023', url: 'https://uks.kemendikdasmen.go.id/gala-kreasi/gala-kreasi-2023' },
  ],
}

// Real values taken from the live appConfig / stats / analytics props served by
// https://uks.kemendikdasmen.go.id/ on 2026-09-17.

export const SITE = {
  name: 'Portal UKS/M',
  tagline: 'Usaha Kesehatan Sekolah/Madrasah',
  metaDescription:
    'Portal resmi UKS/M, menyediakan informasi seputar program, berita, publikasi, dan panduan kesehatan sekolah.',
  contactEmail: 'uks.dikdasmen@kemdikbud.go.id',
  contactAddress: 'Gedung E lantai 5, Kemendikbudristek, Jl. Jenderal Sudirman, Senayan, Jakarta 10270',
  sourceUrl: 'https://uks.kemendikdasmen.go.id',
}

export const STATS = [
  { label: 'Sekolah Binaan', value: 15000, suffix: '+' },
  { label: 'Dokter Kecil Terlatih', value: 50000, suffix: '+' },
  { label: 'Kader Tiwisada', value: 25000, suffix: '+' },
  { label: 'Provinsi Terjangkau', value: 38, suffix: '' },
]

export const VISITORS = {
  today: 7485,
  week: 28666,
  month: 111220,
  total: 164800,
}

export const TRIAS_PILLARS = [
  {
    key: 'pendidikan-kesehatan',
    number: 1,
    title: 'Pendidikan Kesehatan',
    color: '#1a5931',
    summary:
      'Kegiatan yang ditujukan untuk meningkatkan pengetahuan, sikap, dan perilaku serta keterampilan hidup sehat. Dilakukan melalui tiga pendekatan: Intrakurikuler (terintegrasi dalam pelajaran), Ekstrakurikuler (kegiatan tambahan di luar jam pelajaran, seperti klub), dan Kokurikuler (kegiatan yang melengkapi kurikulum inti). Tujuannya adalah membentuk individu dengan gaya hidup yang lebih sehat.',
    items: [
      'Literasi Kesehatan',
      'Perilaku Hidup Bersih dan Sehat',
      'Pendidikan Gizi',
      'Pendidikan Kesehatan Reproduksi',
      'Pendidikan Karakter',
      'Pembiasaan Aktivitas Fisik',
      'Dokter Kecil',
    ],
    featured: {
      title: 'Literasi Kesehatan',
      body: 'Kemampuan mengakses, memahami melalui berbagai aktivitas membaca, melihat, menyimak, menyampaikan dan mempraktikkan. Gerakan Literasi Sekolah (GLS) merupakan kegiatan partisipatif yang melibatkan peserta didik, guru, warga sekolah/madrasah dan pemangku kepentingan lainnya, misalnya diskusi dengan guru kelas, pembuatan proyek terkait kesehatan (video atau poster kesehatan), atau permainan bertema kesehatan.',
      meta: [
        { label: 'Waktu', value: 'Rutin, minimal 1 kali seminggu selama 15 menit' },
        { label: 'Tempat', value: 'Masing-masing kelas atau luar kelas' },
        { label: 'Pelaksana', value: 'Guru kelas, guru mata pelajaran, peserta didik' },
      ],
    },
  },
  {
    key: 'pelayanan-kesehatan',
    number: 2,
    title: 'Pelayanan Kesehatan',
    color: '#0e3f80',
    summary:
      'Setiap upaya yang diselenggarakan sendiri atau secara bersama-sama untuk memelihara dan meningkatkan kesehatan melalui upaya promotif, preventif, kuratif dan rehabilitatif, meliputi skrining kesehatan, pemberian suplementasi (Vitamin A, Tablet Tambah Darah), P3K, P3P, dan imunisasi.',
    items: ['Penjaringan Kesehatan dan Pemeriksaan Berkala', 'Imunisasi', 'Pemberian Obat Cacing', 'P3K dan P3P'],
    featured: {
      title: 'Penjaringan Kesehatan dan Pemeriksaan Berkala',
      body: 'Rangkaian pemeriksaan kesehatan (skrining) pada seluruh peserta didik baru, yaitu kelas 1 SD/MI, 7 SMP/MTs, dan 10 SMA/SMK/MA, serta pemeriksaan berkala untuk kelas di atasnya. Meliputi pengisian kuesioner riwayat kesehatan dan pemeriksaan fisik (tinggi/berat badan, tekanan darah, ketajaman penglihatan, kebersihan diri, kebugaran jasmani) oleh sekolah, serta pemeriksaan klinis oleh Puskesmas.',
      meta: [
        { label: 'Waktu', value: 'Minimal 1 kali setahun, awal tahun ajaran baru' },
        { label: 'Pelaksana', value: 'Guru, kader kesehatan sekolah, petugas Puskesmas' },
      ],
    },
  },
  {
    key: 'pembinaan-lingkungan-sekolah-sehat',
    number: 3,
    title: 'Pembinaan Lingkungan Sekolah Sehat',
    color: '#166b39',
    summary:
      'Usaha untuk menciptakan kondisi lingkungan sekolah yang sehat secara fisik, sosial dan emosional sehingga mendukung proses pembelajaran secara optimal, melalui penyediaan sarana prasarana seperti air bersih, toilet, tempat sampah, serta kegiatan penghijauan, pengelolaan sampah, dan pemanfaatan pekarangan sekolah.',
    items: [
      'Sanitasi Sekolah',
      'Pembinaan Kantin Sehat',
      'Pemanfaatan Pekarangan Sekolah',
      'Pemberantasan Sarang Nyamuk',
      'Kawasan Tanpa Rokok, Napza, Kekerasan dan Pornografi',
    ],
    featured: {
      title: 'Sanitasi Sekolah',
      body: 'Pengendalian semua faktor lingkungan fisik yang dapat menimbulkan akibat buruk terhadap kehidupan manusia (WHO). Sarana yang diperlukan antara lain air bersih yang cukup, jamban sehat, sarana cuci tangan dengan sabun dan air mengalir, pembuangan limbah cair, dan tempat sampah. Mulai dari inspeksi kesehatan lingkungan bersama Puskesmas, pembersihan rutin harian, hingga penerapan 3R (reuse, reduce, recycle).',
      meta: [
        { label: 'Waktu', value: 'Pembersihan & desinfeksi minimal 2×/hari' },
        { label: 'Pelaksana', value: 'Kepala sekolah, guru, peserta didik, orang tua, sanitarian Puskesmas' },
      ],
    },
  },
]

export const UKSM_PAGES = {
  'deskripsi-umum': {
    title: 'Deskripsi Umum',
    body: [
      'Usaha Kesehatan Sekolah/Madrasah (UKS/M) adalah kegiatan yang dilakukan untuk meningkatkan kesehatan anak usia sekolah pada setiap jalur, jenis, dan jenjang pendidikan. UKS/M diwujudkan melalui pelaksanaan Trias UKS/M, yakni Pendidikan Kesehatan, Pelayanan Kesehatan, dan Pembinaan Lingkungan Sekolah Sehat.',
    ],
  },
  tujuan: {
    title: 'Tujuan',
    body: [
      'Tujuan UKS/M yaitu untuk meningkatkan mutu pendidikan dan prestasi belajar peserta didik dengan meningkatkan perilaku hidup bersih dan sehat serta menciptakan lingkungan pendidikan yang sehat, sehingga memungkinkan pertumbuhan dan perkembangan yang harmonis peserta didik.',
    ],
  },
  sasaran: {
    title: 'Sasaran',
    body: [
      'Sasaran utama UKS/M adalah peserta didik, pendidik, tenaga kependidikan, beserta masyarakat sekolah lainnya, bertujuan meningkatkan kemampuan hidup sehat sehingga peserta didik dapat belajar, tumbuh dan berkembang secara harmonis serta optimal, menjadi sumber daya manusia yang berkualitas.',
    ],
    stakeholders: ['Kepala Sekolah', 'Guru dan Tenaga Kependidikan (GTK)', 'Peserta Didik', 'Komite Sekolah', 'Masyarakat Setempat', 'Puskesmas'],
  },
}

export const STRUKTUR_ORGANISASI = {
  pembina: {
    title: 'Struktur Organisasi Tim Pembina UKS/M',
    body: 'Tim Pembina UKS/M (TP UKS/M) adalah organisasi yang menangani UKS/M, baik di tingkat pusat, provinsi, kabupaten/kota, maupun kecamatan. Untuk melaksanakan tugas pembinaan dan pengembangan UKS secara terpadu dan terkoordinasi, Tim Pembina dibentuk pada setiap jenjang pemerintahan.',
    levels: ['Tim Pembina UKS Tingkat Pusat', 'Tim Pembina UKS Tingkat Provinsi', 'Tim Pembina UKS Tingkat Kab/Kota', 'Tim Pembina UKS Tingkat Kecamatan'],
  },
  pelaksana: {
    title: 'Struktur Organisasi Tim Pelaksana UKS/M di Sekolah/Madrasah',
    body: 'Tim Pelaksana UKS/M adalah organisasi yang melaksanakan UKS/M dan berkedudukan di sekolah, berfungsi sebagai penanggung jawab dan pelaksana program UKS berdasarkan prioritas kebutuhan dan kebijakan yang ditetapkan oleh TP UKS Kabupaten/Kota.',
    tasks: [
      'Melaksanakan Tiga Program Pokok UKS: Pendidikan Kesehatan, Pelayanan Kesehatan, dan Pembinaan Lingkungan Sekolah Sehat',
      'Menjalin kerja sama dengan orang tua/komite sekolah, instansi lain dan masyarakat',
      'Menyusun program, melaksanakan penilaian/evaluasi, dan menyampaikan laporan kepada Tim UKS Kecamatan',
      'Melaksanakan ketatausahaan Tim Pelaksana UKS di sekolah',
    ],
  },
}

export const MANAJEMEN_UKSM = {
  title: 'Manajemen UKS/M',
  intro:
    'Manajemen Sekolah/Madrasah Sehat adalah kegiatan-kegiatan yang berhubungan dengan tata kelola pelaksanaan Trias UKS/M. Terdapat 5 (lima) komponen manajemen Sekolah/Madrasah Sehat:',
  components: [
    { title: 'Kebijakan', body: 'Payung kebijakan sebagai rujukan pelaksanaan Trias UKS/M secara konsisten, sistematis, dan berkelanjutan, di tingkat pusat maupun daerah, termasuk penganggaran dan peran masing-masing pihak.' },
    {
      title: 'Perencanaan dan Penganggaran',
      body: 'Tim Pembina UKS/M bersama sekolah/madrasah merencanakan kegiatan Sekolah/Madrasah Sehat berdasarkan hasil asesmen, terintegrasi dengan RKS (Rencana Kerja Sekolah).',
      detail: [
        'Kegiatan Prioritas — disusun berdasarkan hasil asesmen status kesehatan sekolah/madrasah dan peserta didik.',
        'SDM & Sasaran — sumber daya manusia pelaksana dan sasaran kegiatan ditetapkan di muka.',
        'Sumber Anggaran — APBN, APBD, dan sumber lain yang tidak mengikat.',
      ],
    },
    { title: 'Koordinasi', body: 'Sinkronisasi perencanaan, pelaksanaan, monitoring dan evaluasi mulai dari tingkat Pusat, Provinsi, Kota/Kabupaten, Kecamatan hingga satuan pendidikan, dilakukan rutin minimal 3 bulan sekali.' },
    { title: 'Peningkatan Kapasitas', body: 'Orientasi dan pelatihan tata kelola Sekolah/Madrasah Sehat bagi guru, dilengkapi buku panduan, KIE, dan sarana prasarana pendukung.' },
    {
      title: 'Monitoring dan Evaluasi',
      body: 'Strata UKS/M menjadi acuan utama monitoring dan evaluasi. Monitoring dilakukan setiap bulan oleh Tim Pembina UKS/M kecamatan terhadap 20 aspek pelaksanaan Trias UKS/M dan manajemen UKS/M; evaluasi menilai capaian pada target 6 bulan, 1 tahun ajaran, dan 3 tahun pelaksanaan.',
      detail: [
        'Monitoring — memantau pelaksanaan pendidikan kesehatan, pelayanan kesehatan, pembinaan lingkungan sehat, dan manajemen UKS/M setiap bulan.',
        'Evaluasi — tiga tahap: perencanaan (asesmen awal, penetapan target), pelaksanaan (pengumpulan dan analisis data), dan tindak lanjut (pelaporan dan rekomendasi perbaikan).',
      ],
    },
  ],
}

export const STRATIFIKASI = {
  title: 'Stratifikasi UKS/M',
  intro: 'Alat bantu untuk mengetahui capaian dan kekurangan satuan pendidikan dalam penyelenggaraan UKS/M.',
  definition:
    'Stratifikasi UKS/M adalah alat ukur kinerja yang dilakukan oleh sekolah dan Puskesmas (Tim Pelaksana UKS/M Kecamatan) serta Kementerian di pusat atau OPD terkait di Kab/Kota (Tim Pembina UKS/M Kab/Kota) terhadap pelaksanaan Trias UKS/M, guna mengetahui apa yang sudah dicapai dan apa yang masih perlu dilakukan satuan pendidikan untuk mencapai strata Minimal, Standar, Optimal, hingga Paripurna.',
  assessment:
    'Penilaian bersifat absolut: sekolah/madrasah harus memenuhi seluruh indikator (pendidikan kesehatan, pelayanan kesehatan, pembinaan lingkungan sekolah sehat, dan manajemen UKS/M) pada satu kelompok strata tertentu, sebelum dapat dinyatakan berada pada strata tersebut.',
  levels: ['Minimal', 'Standar', 'Optimal', 'Paripurna'],
  functions: [
    'Alat ukur pelaksanaan Trias UKS/M',
    'Dasar strategi peningkatan mutu',
    'Bagian dari sistem monitoring & evaluasi',
    'Dasar penyusunan rekomendasi tindak lanjut',
  ],
  categories: ['Pendidikan Kesehatan', 'Pelayanan Kesehatan', 'Pembinaan Lingkungan Sekolah Sehat', 'Manajemen UKS/M'],
  externalUrl: 'https://stratifikasiuks.org/',
}

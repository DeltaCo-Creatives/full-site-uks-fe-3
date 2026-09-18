// Real copy sourced from /sekolah-sehat/* on uks.kemendikdasmen.go.id (see
// docs/content-source/sekolah-sehat/*.md) and cross-checked against the curated version in
// the uks-fe reference project (docs/sekolah-sehat-curation.md there fixed typos and dropped
// dead links — those fixes are kept here too). Colors use this repo's Tailwind tokens
// (rust/ochre/navy/forest/teal from src/index.css) instead of one-off hex values.
//
// `url: null` means the source link is dead, private, or points at the wrong file: the page
// shows the item without a link instead of a broken one.

export const GSS_MADRASAH_URL = 'https://madrasah.kemenag.go.id/madrasahsehat/'

export const GSS_INTRO =
  'Segala upaya yang dilakukan secara bersama-sama dan terus-menerus oleh semua pihak, mulai dari pemerintah pusat sampai ke pemerintah daerah, para mitra, satuan pendidikan, dan masyarakat pemangku kepentingan lainnya, tentang pentingnya penerapan Sekolah Sehat dengan berfokus pada Sehat Bergizi, Sehat Fisik, Sehat Imunisasi, Sehat Jiwa dan Sehat Lingkungan di satuan pendidikan.'

// Who the movement is for, and what each group gains — from the "Manfaat" / "Sasaran" section
// of the Gerakan Sekolah Sehat overview page.
export const GSS_BENEFITS = [
  { id: 'peserta-didik', audience: 'Peserta Didik', text: 'Pembudayaan Sehat Bergizi, Sehat Fisik dan Sehat Imunisasi agar status kesehatan meningkat dan dapat mengikuti proses pembelajaran dengan baik.' },
  { id: 'ptk', audience: 'Pendidik dan Tenaga Kependidikan', text: 'Peningkatan kesehatan agar dapat melaksanakan tugas dan fungsinya dengan baik.' },
  { id: 'orang-tua', audience: 'Orang Tua dan Masyarakat', text: 'Berperan dalam usaha peningkatan derajat/status kesehatan peserta didik, baik di sekolah maupun di rumah.' },
]

export const GSS_TARGETS = [
  'Pemerintah Provinsi/Kabupaten/Kota.',
  'Sekolah/Satuan Pendidikan di semua jalur, jenjang, dan jenis pendidikan (PAUD, SD/MI/Sederajat, SMP/MTs/Sederajat, SMA/SMK/MA/MAK/Sederajat, SLB, SKB, dan PKBM).',
  'Peserta Didik, Pendidik dan Tenaga Kependidikan, Komite Sekolah, Orang Tua, dan Masyarakat.',
]

/**
 * The 5 focus areas. `color` is one of this repo's named tokens (ochre/rust/navy/forest/teal).
 * `goal` is the opening sentence of the focus page; `activities` are its "Kegiatan ... terdiri
 * dari" list; `topics` are the deep-dive blocks further down the page (type: 'text' | 'list' |
 * 'facts'); `tools` are the "Alat Bantu Penerapan" downloads.
 */
export const GSS_FOKUS = [
  {
    key: 'sehat-bergizi',
    title: 'Sehat Bergizi',
    color: '#8c6415',
    tagline: 'Pemenuhan gizi seimbang untuk mendukung pertumbuhan dan prestasi belajar.',
    body: 'Sehat Bergizi bertujuan untuk meningkatkan derajat kesehatan peserta didik melalui penerapan pola makan yang tepat dan konsumsi makanan bergizi.',
    goal: 'Sehat Bergizi bertujuan untuk meningkatkan derajat kesehatan peserta didik melalui penerapan pola makan yang tepat dan konsumsi makanan bergizi.',
    activities: [
      'Pembiasaan minum air putih yang cukup, minimal 2 gelas sehari selama berkegiatan di sekolah.',
      'Peningkatan pemahaman dan pembiasaan konsumsi makanan bergizi seimbang, terutama protein tinggi, buah, dan sayuran melalui sarapan/makan bersama minimal 1 kali seminggu.',
      'Menghindari/meminimalisasi konsumsi makanan cepat saji; makanan/minuman berpemanis, berpengawet, kurang serat, tinggi gula, garam, dan lemak.',
      'Pembiasaan konsumsi Tablet Tambah Darah bagi remaja putri SMP/sederajat dan SMA/sederajat minimal 1 kali setiap minggu.',
    ],
    topics: [
      {
        id: 'isi-piringku',
        title: 'Isi Piringku',
        type: 'text',
        paragraphs: [
          'Isi Piringku merupakan pedoman yang disusun oleh Kementerian Kesehatan untuk mengampanyekan konsumsi makanan yang sesuai dengan pedoman gizi seimbang. Dalam satu piring setiap kali makan, setengah piring diisi dengan sayur dan buah, sedangkan setengah lainnya diisi dengan makanan pokok dan lauk pauk.',
          'Isi Piringku juga memuat ajakan untuk mengonsumsi 8 gelas air setiap hari, melakukan aktivitas fisik 30 menit setiap hari, dan mencuci tangan dengan air dan sabun sebelum dan setelah makan.',
        ],
      },
      {
        id: 'pedoman-gizi',
        title: 'Sepuluh Pedoman Gizi Seimbang',
        type: 'list',
        ordered: true,
        items: [
          'Biasakan mengonsumsi aneka ragam makanan pokok.',
          'Batasi konsumsi panganan manis, asin, dan berlemak.',
          'Lakukan aktivitas fisik yang cukup dan pertahankan berat badan ideal.',
          'Biasakan mengonsumsi lauk pauk yang mengandung protein tinggi.',
          'Cuci tangan pakai sabun dengan air mengalir.',
          'Biasakan sarapan pagi.',
          'Biasakan minum air putih yang cukup dan aman.',
          'Banyak makan buah dan sayur.',
          'Biasakan membaca label pada kemasan pangan.',
          'Syukuri dan nikmati aneka ragam makanan.',
        ],
      },
      {
        id: 'kantin-sehat',
        title: 'Empat Komponen Kantin dan Jajanan Sehat di Sekolah',
        type: 'list',
        intro: 'Untuk menjamin penyelenggaraan kantin dan jajanan sehat di sekolah, komponen berikut perlu diperhatikan:',
        items: [
          { label: 'Komitmen dan Manajemen Sekolah', text: 'Termasuk monitoring/supervisi dan evaluasi diri penyelenggaraan kantin dan jajanan sehat di sekolah.' },
          { label: 'Sumber Daya Manusia', text: 'Mempunyai pengetahuan dan keterampilan dalam mengelola kantin dan jajanan sehat di sekolah.' },
          { label: 'Sarana dan Prasarana', text: 'Kebersihan peralatan dan lingkungan.' },
          { label: 'Mutu Pangan', text: 'Aman, sehat, dan bergizi.' },
        ],
      },
    ],
    tools: [
      { title: 'Buku Saku Gizi Seimbang dan Kantin/Jajanan Sehat di Sekolah Dasar', url: 'https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/publikasi/L4H44OkNQw3Oal3CXziuAuHDgoGZuTIQ3UogIaNT.pdf' },
      { title: 'Poster Sehat Bergizi', url: 'https://drive.google.com/file/d/1x3_NMNXdC_6a690be197NWgO1e8nurt4/view' },
      { title: 'Leaflet Sehat Bergizi', url: 'https://drive.google.com/file/d/1y4efWw89JPyv85Hld_XB8smlwGg1f90p/view' },
    ],
  },
  {
    key: 'sehat-fisik',
    title: 'Sehat Fisik',
    color: '#a02a29',
    tagline: 'Aktivitas fisik rutin dan olahraga untuk kebugaran jasmani.',
    body: 'Dalam rangka mengurangi risiko obesitas dan meningkatkan kesehatan peserta didik, pembiasaan aktivitas fisik perlu terus dilakukan di satuan pendidikan.',
    goal: 'Dalam rangka mengurangi risiko obesitas dan meningkatkan kesehatan peserta didik, pembiasaan aktivitas fisik perlu dilakukan.',
    activities: [
      'Pembiasaan peregangan, minimal 1 kali selama pembelajaran, misalnya Gerak Lagu Sekolah Sehat.',
      'Pembiasaan senam dan/atau kegiatan sejenis, minimal 1 kali seminggu.',
      'Pembiasaan permainan rakyat dan olahraga tradisional.',
      'Pembiasaan jalan kaki.',
      'Pelaksanaan Tes Kebugaran Siswa Indonesia (TKSI).',
    ],
    topics: [
      {
        id: 'skj',
        title: 'Pembiasaan Aktivitas Fisik melalui Senam Kesegaran Jasmani (SKJ)',
        type: 'text',
        paragraphs: [
          'SKJ merupakan bentuk senam massal dengan rangkaian gerak tertentu dan diiringi musik, yang berguna meningkatkan kebugaran jasmani peserta didik.',
          'Senam kesegaran jasmani juga menjadi media untuk mendorong perkembangan keterampilan motorik, kemampuan fisik, pengetahuan, penalaran, penghayatan nilai, dan pembiasaan pola hidup sehat. Pelaksanaannya dapat dilakukan secara massal, mudah, dan tidak memerlukan waktu lama.',
        ],
      },
      {
        id: 'manajemen-skj',
        title: 'Manajemen Pelaksanaan SKJ',
        type: 'facts',
        items: [
          { label: 'Frekuensi', value: 'Sekali seminggu.' },
          { label: 'Waktu', value: 'Pagi hari sebelum kegiatan belajar mengajar; hari pelaksanaannya ditentukan oleh sekolah.' },
          { label: 'Durasi', value: '10 s.d. 15 menit.' },
          { label: 'Sarana', value: 'Halaman sekolah/lapangan/aula, pemutar musik, laptop, LCD, dan layar proyektor.' },
          { label: 'Instruktur', value: 'Guru PJOK dan peserta didik yang sudah terampil, atau dapat meniru gerakan pada tampilan layar proyektor.' },
        ],
      },
      {
        id: 'optimalisasi-4l',
        title: 'Optimalisasi 4L (Lari, Lompat, Loncat, Lempar) melalui Permainan Rakyat dan Olahraga Tradisional',
        type: 'text',
        paragraphs: [
          'Permainan rakyat dan olahraga tradisional merupakan warisan kebudayaan nenek moyang bangsa Indonesia yang tumbuh dan berkembang dalam komunitas masyarakat, diwariskan dan dimainkan dari generasi ke generasi.',
          'Penerapannya saat jam istirahat di sekolah menjadi salah satu upaya melestarikan kekayaan budaya bangsa sekaligus mengembangkan kemampuan motorik dan kebugaran jasmani peserta didik.',
        ],
      },
      {
        id: 'peregangan',
        title: 'Gerakan Peregangan pada Pergantian Jam Pelajaran',
        type: 'text',
        paragraphs: [
          'Gerakan peregangan adalah gerakan untuk meningkatkan fleksibilitas otot atau jangkauan gerak sendi, berguna sebelum aktivitas fisik dan untuk melemaskan tubuh yang kaku setelah beraktivitas.',
          'Dapat dilakukan bersama-sama di dalam kelas sesaat sebelum pembelajaran, saat pergantian jam pelajaran, atau saat istirahat.',
        ],
      },
    ],
    tools: [
      { title: 'Buku Saku Gerak Ragaku di Sekolah', url: 'https://drive.google.com/file/d/111Vwr0_RfervHeA2PBFqDgWpdNbf-Rol/view?usp=sharing' },
      { title: 'Poster Sehat Fisik', url: 'https://drive.google.com/file/d/1e3y7p6p8pJ0Wy_sCgjzSLZraaoY4x_tB/view?usp=sharing' },
      { title: 'Leaflet Sehat Fisik', url: 'https://drive.google.com/file/d/1eRBEUjU9s47-ZBZoymJdREb5a9C4E8Mm/view?usp=sharing' },
      // tksi.kemdikbud.go.id no longer resolves (checked 2026-09-17, see sekolah-sehat-curation.md).
      { title: 'Tes Kebugaran Siswa Indonesia (TKSI)', url: null },
    ],
  },
  {
    key: 'sehat-imunisasi',
    title: 'Sehat Imunisasi',
    color: '#0e3f80',
    tagline: 'Perlindungan dari penyakit melalui imunisasi lengkap.',
    body: 'Sehat Imunisasi bertujuan untuk meningkatkan capaian imunisasi peserta didik agar mendapatkan imunisasi dasar lengkap.',
    goal: 'Sehat Imunisasi bertujuan untuk meningkatkan capaian imunisasi peserta didik untuk mendapatkan imunisasi dasar lengkap.',
    activities: [
      { label: 'Pemetaan Status Imunisasi', text: 'Memeriksa riwayat imunisasi peserta didik dari catatan Puskesmas/fasilitas kesehatan, atau meminta informasi dari orang tua/wali.' },
      { label: 'Pemberian Rekomendasi', text: 'Sekolah menyampaikan informasi dan rekomendasi kepada orang tua/wali peserta didik yang belum mendapatkan imunisasi lengkap.' },
      { label: 'Pelaksanaan Imunisasi Lengkap dalam BIAS', text: 'Sekolah bekerja sama dengan Puskesmas atau fasilitas kesehatan setempat mendukung pelaksanaan imunisasi di Bulan Imunisasi Anak Sekolah (BIAS) pada bulan Agustus dan November.' },
    ],
    topics: [
      {
        id: 'bias',
        title: 'Bulan Imunisasi Anak Sekolah (BIAS)',
        type: 'facts',
        intro: 'Kegiatan nasional pemberian imunisasi bagi anak usia SD/MI/bentuk lain yang sederajat, dilaksanakan dua kali setahun:',
        items: [
          { label: 'Agustus', value: 'Imunisasi Campak Rubela dan HPV.' },
          { label: 'November', value: 'Imunisasi DT dan Td.' },
        ],
      },
      {
        id: 'sasaran-bias',
        title: 'Sasaran, Jenis, dan Jadwal Pemberian Imunisasi',
        type: 'text',
        paragraphs: [
          'Sasaran BIAS adalah peserta didik kelas 1, 2, 5, dan 6 SD/MI/bentuk lain yang sederajat, serta anak usia sekolah yang tidak bersekolah.',
          'Imunisasi BIAS mencegah penyakit Campak, Rubela, Difteri, Tetanus Neonatorum, dan kanker leher rahim, yang dapat menyebabkan disabilitas dan kematian.',
          'Setiap anak usia sekolah perlu memiliki riwayat imunisasi rutin lengkap, dilengkapi dengan imunisasi lanjutan pada usia sekolah tingkat dasar.',
        ],
      },
    ],
    tools: [
      // Drive file is private (HTTP 401, checked 2026-09-17, see sekolah-sehat-curation.md).
      { title: 'Petunjuk Teknis BIAS', url: null },
      { title: 'Komik BIAS', url: 'https://drive.google.com/file/d/1PaSDbNYyERXOWtwAjPbBnxXJ-wTYWe1t/view?usp=sharing' },
      { title: 'SKB Penyelenggaraan Peningkatan Status Kesehatan Peserta Didik', url: 'https://drive.google.com/file/d/1dZYXFGOiulz1SGugKj3UO4E8Qy4_82hr/view?usp=sharing' },
      { title: 'Poster Sehat Imunisasi', url: 'https://drive.google.com/file/d/1ToqVG_nTxJMMwyBz4Uad0NGE_Z699u00/view?usp=sharing' },
      { title: 'Leaflet Sehat Imunisasi', url: 'https://drive.google.com/file/d/1z5mbEois0XzOpqmIQF33Tox85Y7tEknt/view?usp=sharing' },
    ],
  },
  {
    key: 'sehat-jiwa',
    title: 'Sehat Jiwa',
    color: '#1a5931',
    tagline: 'Dukungan kesehatan mental dan kesejahteraan psikososial.',
    body: 'Sehat Jiwa bertujuan meningkatkan perkembangan kesehatan fisik, mental, spiritual, dan sosial, sehingga peserta didik mampu menyadari kemampuan sendiri, mengatasi tekanan, belajar secara optimal, dan berkontribusi bagi komunitasnya.',
    goal: 'Sehat Jiwa bertujuan untuk meningkatkan perkembangan kesehatan fisik, mental, spiritual, dan sosial sehingga mampu menyadari kemampuan sendiri, mengatasi tekanan, bekerja/belajar secara optimal, dan memberikan kontribusi untuk komunitasnya.',
    activities: [
      'Sosialisasi Pencegahan dan Penanganan Kekerasan di Satuan Pendidikan, salah satunya pada saat Masa Pengenalan Lingkungan Sekolah (MPLS).',
      'Sosialisasi kesehatan jiwa minimal satu kali dalam satu semester.',
      'Pelaksanaan doa bersama sebelum dan sesudah pembelajaran.',
      'Peningkatan pemahaman dan kapasitas pendidik terkait kesehatan jiwa.',
      'Pelaksanaan skrining kesehatan jiwa peserta didik melalui koordinasi dan kerja sama dengan Puskesmas.',
    ],
    topics: [
      {
        id: 'sosialisasi-jiwa',
        title: 'Sosialisasi Kesehatan Jiwa di Lingkungan Sekolah',
        type: 'list',
        intro: 'Sosialisasi dilakukan bersama tenaga kesehatan dari Dinas Kesehatan, Puskesmas, atau narasumber lain, minimal 1 kali dalam 1 semester. Topik yang bisa dipilih:',
        items: [
          'Mengenali dan mengatur emosi, perilaku, dan keterampilan psikososial.',
          'Pencegahan peredaran dan penggunaan Narkotika, Psikotropika, dan Zat Adiktif lainnya (NAPZA).',
          'Pemanfaatan internet/media sosial secara sehat dan bijaksana.',
        ],
      },
      {
        id: 'sijiwa',
        title: 'Aplikasi SIJIWA untuk Skrining Kesehatan Jiwa Peserta Didik',
        type: 'text',
        paragraphs: [
          'Skrining kesehatan jiwa dilakukan untuk mengetahui masalah kesehatan jiwa yang dialami peserta didik, agar mempermudah konseling dan penanganan lanjutan, menggunakan aplikasi Sistem Informasi Jiwa (SIJIWA) yang dikembangkan Kementerian Kesehatan.',
          'Pengisian dapat dilakukan masing-masing peserta didik, atau bersama-sama dipandu satuan pendidikan yang bekerja sama dengan Puskesmas setempat.',
        ],
      },
      {
        id: 'cegah-bullying',
        title: 'Ayo, Cegah Bullying di Sekolah!',
        type: 'list',
        intro: 'Upaya pencegahan dan penanganan kekerasan di lingkungan satuan pendidikan bertujuan agar warga sekolah:',
        items: [
          'Mencegah terjadinya kekerasan di lingkungan satuan pendidikan.',
          'Melaporkan kekerasan yang dialami dan/atau diketahuinya.',
          'Mampu mencari dan mendapatkan bantuan ketika mengalami kekerasan.',
          'Segera mendapatkan penanganan dan bantuan yang menyeluruh jika mengalami kekerasan.',
        ],
      },
    ],
    tools: [
      {
        title: 'Modul Pencegahan dan Penanganan Kekerasan di Satuan Pendidikan (PPKSP)',
        variants: [
          { label: 'PAUD', url: 'https://drive.google.com/file/d/1zmbUcn17p9Ulm3_4CmVojONdxdGWCA8B/view' },
          { label: 'SD', url: 'https://drive.google.com/file/d/1jYZBf064d-Voj6-HK9PHnXGcn6yDYPof/view' },
          { label: 'SMP', url: 'https://drive.google.com/file/d/18j8p1APYb8E-s82FEYBruhY4IycDhh-m/view' },
          { label: 'SMA/SMK', url: 'https://drive.google.com/file/d/1cfeh36SLUdtorHoksx8jbBMwP30zvQLr/view' },
        ],
      },
      // Source link is the Poster Sehat Bergizi file (see sekolah-sehat-curation.md).
      { title: 'Modul Ayo Atasi Perundungan (AAP)', url: null },
      // Play Store listing returns 404 (checked 2026-09-17).
      { title: 'Aplikasi SIJIWA', url: null },
    ],
  },
  {
    key: 'sehat-lingkungan',
    title: 'Sehat Lingkungan',
    color: '#346572',
    tagline: 'Lingkungan sekolah bersih, hijau, dan berkelanjutan.',
    body: 'Lingkungan sekolah sehat mendukung tumbuh kembang peserta didik secara optimal, membentuk perilaku hidup bersih dan sehat, dan menjauhkan dari pengaruh negatif.',
    goal: 'Lingkungan sekolah sehat dapat mendukung tumbuh kembang peserta didik secara optimal serta membentuk perilaku hidup bersih dan sehat dan terhindar dari pengaruh negatif.',
    activities: [
      'Pembiasaan Cuci Tangan Pakai Sabun (CTPS) dengan air mengalir.',
      'Pembiasaan buang sampah ke tempat sampah tertutup dan terpilah.',
      'Kerja bakti kebersihan sekolah dan/atau penghijauan sekolah minimal sebulan sekali.',
      'Penerapan Kawasan Tanpa Rokok/Vaping di lingkungan sekolah.',
      'Penyediaan dan pemeliharaan toilet agar berfungsi dengan baik dan bersih serta terpisah antara toilet laki-laki dan perempuan.',
      'Penyediaan Kantin Sehat.',
      'Pengaturan ruangan yang memiliki penghawaan dan pencahayaan alami.',
    ],
    topics: [
      {
        id: 'ctps',
        title: 'Langkah Cuci Tangan Pakai Sabun (CTPS) yang Benar',
        type: 'list',
        ordered: true,
        intro: 'CTPS dilakukan sebelum masuk kelas, sebelum makan, sebelum dan setelah menggunakan toilet, setelah menggunakan fasilitas bersama, dan lain-lain.',
        items: [
          'Membasahi kedua tangan dengan air bersih yang mengalir.',
          'Menggosokkan sabun pada kedua telapak tangan sampai berbusa, lalu menggosok kedua punggung tangan, jari jemari, dan kedua jempol sampai semua permukaan kena busa sabun.',
          'Membersihkan ujung-ujung jari dan sela-sela di bawah kuku.',
          'Membilas dengan air bersih sambil menggosok-gosok kedua tangan sampai sisa sabun hilang.',
          'Mengeringkan kedua tangan dengan kain, handuk bersih, atau kertas tisu, atau mengibas-ibaskan kedua tangan sampai kering.',
        ],
      },
      {
        id: 'prinsip-3r',
        title: 'Bijak Mengelola Sampah dengan Prinsip 3R',
        type: 'list',
        intro: 'Sampah di satuan pendidikan dipilah menjadi organik, anorganik, dan residu, lalu dikelola dengan prinsip Reduce, Reuse, Recycle.',
        items: [
          { label: 'Reduce (Mengurangi)', text: 'Mengurangi produksi limbah dengan mengurangi penggunaan barang sekali pakai atau langkah lain untuk mengurangi konsumsi sumber daya alam.' },
          { label: 'Reuse (Menggunakan Ulang)', text: 'Menggunakan kembali barang atau bahan yang masih dapat digunakan setelah pemakaian awalnya.' },
          { label: 'Recycle (Mendaur Ulang)', text: 'Proses mengubah bahan bekas menjadi bahan baru yang dapat digunakan kembali.' },
        ],
      },
    ],
    tools: [
      { title: 'Buku Saku Kantin dan Jajanan Sehat di Sekolah', url: 'https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/publikasi/L4H44OkNQw3Oal3CXziuAuHDgoGZuTIQ3UogIaNT.pdf' },
      // Old-domain infografis page no longer resolves (see sekolah-sehat-curation.md).
      { title: 'Poster Prosedur Pembersihan Toilet', url: null },
      // Source link is the Leaflet Sehat Bergizi file.
      { title: 'Leaflet Sehat Lingkungan', url: null },
    ],
  },
]

// "Unduh Produk Hukum Kampanye Sekolah Sehat" — from docs/content-source/sekolah-sehat/bahan-advokasi.md,
// in source order.
const PH = 'https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/'

export const GSS_LEGAL_DOCS = [
  { title: 'SKB 4 Menteri Nomor 83 Tahun 2022 tentang Pelaksanaan Imunisasi dan Aksi Bergizi', url: 'https://uks.kemendikdasmen.go.id/storage/manajemen_uks/files/produk_hukum/2BmyYNrnxfnHenNHV3WzO7rtXh54k4IJ3gL09BBi.pdf' },
  { title: 'Surat Edaran Mendikbudristek Nomor 7 Tahun 2022 tentang Diskresi Pelaksanaan Keputusan Bersama 4 Menteri tentang Pembelajaran di Masa Pandemi Covid-19', url: `${PH}XWikLOLBzlv0IYkYqjRLePfATtwh9Y9gXoyTrgA4.pdf` },
  { title: 'Permenko Bidang PMK Nomor 1 Tahun 2022 tentang Rencana Aksi Nasional Peningkatan Kesejahteraan Anak Usia Sekolah dan Remaja', url: `${PH}5QoI8pk8youdhr8uRCyQk5SLEL7rQ23QRgP3fzEW.pdf` },
  // Source reuses the Permenko PMK 1/2022 file for this entry (see sekolah-sehat-curation.md).
  { title: 'Peraturan Menteri Kesehatan Nomor 2269/MENKES/PER/XI/2011 tentang Pedoman Pembinaan Perilaku Hidup Bersih dan Sehat', url: null },
  { title: 'Peraturan Menteri Pendidikan Nasional Nomor 57 Tahun 2009 tentang Pemberian Bantuan Pengembangan Sekolah Sehat', url: `${PH}9i2fSxvbbAEeYpKt9vvvnrIJ9LuthFPMW4F1uXXB.pdf` },
  { title: 'Permendiknas Nomor 24 Tahun 2007 tentang Standar Sarana dan Prasarana untuk SD/MI, SMP/MTs, dan SMA/MA', url: `${PH}3hxH6GkqVfOGOBZu4PfedzoFtHV1ExWI45pXHcrG.pdf` },
  { title: 'Peraturan Bersama 4 Menteri Tahun 2014 tentang Pembinaan dan Pengembangan UKS/M', url: `${PH}cQNMhqmcotaphaGnQfHbrfIQ13QnRryjROAkSBJY.pdf` },
  { title: 'Peraturan Presiden Nomor 67 Tahun 2021 tentang Penanggulangan Tuberkulosis', url: null },
  { title: 'Peraturan Pemerintah Nomor 57 Tahun 2021 tentang Standar Nasional Pendidikan', url: `${PH}4roWpXIbAsZWOQNU2sA58ezTntLKUpzj8zDP7h0J.pdf` },
  { title: 'Instruksi Presiden Nomor 1 Tahun 2017 tentang Gerakan Masyarakat Hidup Sehat (GERMAS)', url: `${PH}HYRTIBhl1KoF7dZlBe4nEwhzItmDfsuo7RRcM3lg.pdf` },
  { title: 'Peraturan Pemerintah Nomor 61 Tahun 2014 tentang Kesehatan Reproduksi', url: `${PH}sVwwpGnxjDQvXwj5AUAemMgwrQrigA1YrnpiX6fx.pdf` },
  { title: 'Peraturan Presiden Nomor 60 Tahun 2013 tentang Pengembangan PAUD HI', url: `${PH}oDHktplglt409Gc0QOLFJR3EGq1fvFZLpwFDXk82.pdf` },
  { title: 'Peraturan Presiden Nomor 72 Tahun 2012 tentang Sistem Kesehatan Nasional', url: `${PH}yEWtMsQ9nYvjKJ871Eo3LaHWcvxodGs3crqOssGw.pdf` },
  { title: 'Peraturan Pemerintah Nomor 48 Tahun 2008 tentang Pendanaan Pendidikan', url: `${PH}xx7rhMWpY5rriyE2vBRZUEFOZRbH1Vu6RiwaAHe0.pdf` },
  { title: 'Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah', url: `${PH}mx1nibPGF7tD9zzusx5OEQfna1nTYjeWD0yAxUn5.pdf` },
  { title: 'Undang-Undang Nomor 36 Tahun 2009 tentang Kesehatan', url: `${PH}1mx3JXeFSJsIwKFoR9gnrLATyWuTWsG156yGhkkN.pdf` },
  { title: 'Undang-Undang Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional', url: `${PH}8m8KH3KTC1mMq0vZhyYMv2YHXk7iisprevPM73nJ.pdf` },
  { title: 'Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional', url: `${PH}pvvrRgryB8oQ2WsXsQRqT6h6HedlvTY8rFoTWpCX.pdf` },
]

/** "Materi Kampanye Sekolah Sehat" — campaign artwork and explainer files/videos. */
export const GSS_CAMPAIGN_MATERIALS = [
  // ditpsd.kemdikbud.go.id no longer resolves (checked 2026-09-17).
  { title: 'Paparan Sekolah Sehat', url: null },
  { title: 'Siaran Pers Peluncuran Sekolah Sehat', url: null },
  { title: 'Surat Edaran Kampanye Sekolah Sehat', url: 'https://drive.google.com/file/d/1xyJXy6hQ8oiRaXFeZ4bC-r3YYFRnUIrB/view?usp=sharing' },
  { title: 'Pedoman Kampanye Sekolah Sehat', url: 'https://drive.google.com/file/d/13DG4BeuqPu8eUwL3c0clJ9MG-DNXQmEg/view?usp=sharing' },
  { title: 'Buku Saku Sehat Bergizi', url: 'https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/publikasi/L4H44OkNQw3Oal3CXziuAuHDgoGZuTIQ3UogIaNT.pdf' },
  { title: 'Buku Saku Sehat Fisik', url: 'https://drive.google.com/file/d/111Vwr0_RfervHeA2PBFqDgWpdNbf-Rol/view?usp=sharing' },
  { title: 'Petunjuk Teknis Pelaksanaan BIAS', url: null },
  { title: 'Komik BIAS', url: 'https://drive.google.com/file/d/1PaSDbNYyERXOWtwAjPbBnxXJ-wTYWe1t/view?usp=sharing' },
  { title: 'Desain Leaflet/Poster Sehat Bergizi', url: 'https://drive.google.com/file/d/1y4efWw89JPyv85Hld_XB8smlwGg1f90p/view?usp=sharing' },
  { title: 'Desain Leaflet/Poster Sehat Fisik', url: 'https://drive.google.com/file/d/1e3y7p6p8pJ0Wy_sCgjzSLZraaoY4x_tB/view?usp=sharing' },
  { title: 'Desain Leaflet/Poster Sehat Imunisasi', url: 'https://drive.google.com/file/d/1z5mbEois0XzOpqmIQF33Tox85Y7tEknt/view?usp=sharing' },
  { title: 'Infografis Kampanye Sekolah Sehat', url: 'https://drive.google.com/file/d/1JKfCJNc4MvI5b3yPX9MPG3TJ6w6Xq-1x/view?usp=sharing' },
  { title: 'Infografis Sehat Bergizi', url: 'https://drive.google.com/file/d/15Ix2S3QhBl10msfMjVCbGvPBm9f5lzp3/view?usp=sharing' },
  { title: 'Infografis Sehat Fisik', url: 'https://drive.google.com/file/d/1eRBEUjU9s47-ZBZoymJdREb5a9C4E8Mm/view?usp=sharing' },
  { title: 'Infografis Sehat Imunisasi', url: 'https://drive.google.com/file/d/1dHhkRmhg4Ir8qyuYfTuPF0diNX-sydOR/view?usp=sharing' },
  { title: 'Desain Standing Banner Permainan Rakyat dan Olahraga Tradisional', url: null },
  { title: 'Desain Standing Banner Kampanye Sekolah Sehat', url: 'https://drive.google.com/file/d/1xr70_Fqx5NwFhviAdjYn3rh0Jd7IYDvC/view?usp=sharing' },
  { title: 'Iklan Layanan Masyarakat Sekolah Sehat', url: 'https://youtu.be/Cbqg3RnW0ss' },
  { title: 'Gerak Lagu Sekolah Sehat', url: 'https://youtu.be/gl56oxJOWVo' },
  { title: 'SKJ 2022', url: 'https://youtu.be/V-GpqteRbeA' },
]

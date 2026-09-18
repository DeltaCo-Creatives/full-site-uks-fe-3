// Trias UKS/M sub-programs — verbatim from docs/content-source/trias-uks-content.MD
// (scraped from the DEV/V2 build's /trias-uks page). 16 items across 3 pillars, keyed to
// match TRIAS_PILLARS in ../site.js (pendidikan-kesehatan / pelayanan-kesehatan /
// pembinaan-lingkungan-sekolah-sehat).
//
// Each item is a title + description + an ordered list of optional labeled sections, because
// the field set genuinely varies per item on the source page (see the content spec's field
// table). Section `type` is 'text' | 'bullets' | 'numbered' | 'links'.
//
// `placeholder: true` marks the one item (Perilaku Hidup Bersih dan Sehat) whose source page
// wrongly reuses the Sanitasi Sekolah paragraph — see the content spec's note. No invented
// copy is written in its place; the page shows a short "belum tersedia" note instead.

const SANITASI_WAKTU =
  'Pembersihan dan desinfeksi dilakukan minimal 2 kali/hari; pembuangan sampah ke tempat sampah tertutup dan terpilah serta ke TPS dilakukan setiap hari; pelaksanaan reuse atau recycle dilaksanakan 1 kali/minggu atau sesuai kebutuhan.'

export const TRIAS_SUB_PROGRAMS = {
  'pendidikan-kesehatan': [
    {
      id: 'literasi-kesehatan',
      title: 'Literasi Kesehatan',
      description:
        'Literasi merupakan kemampuan mengakses, memahami melalui berbagai aktivitas membaca, melihat, menyimak, menyampaikan dan mempraktikkan. Gerakan Literasi Sekolah (GLS) merupakan kegiatan partisipatif yang melibatkan peserta didik, guru, warga sekolah/madrasah dan pemangku kepentingan lainnya. Literasi dapat menggunakan berbagai materi termasuk kesehatan. Contoh literasi kesehatan seperti diskusi dengan guru kelas, pembuatan proyek terkait kesehatan (misal video dan poster kesehatan atau melalui permainan bertema kesehatan). Kegiatan ini dilaksanakan dengan tujuan untuk memastikan pesan kunci kesehatan dapat tersampaikan dengan baik kepada peserta didik.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Dilakukan secara rutin dalam jam literasi minimal 1 minggu 1 kali selama 15 menit. Waktu pelaksanaan dapat ditambah dan disesuaikan dengan kebijakan masing-masing sekolah/madrasah.' },
        { label: 'Tempat', type: 'text', content: 'Masing-masing kelas atau luar kelas.' },
        { label: 'Pelaksana', type: 'text', content: 'Guru kelas, guru mata pelajaran pada sesi literasi sekolah/madrasah, peserta didik.' },
        {
          label: 'Sarana', type: 'bullets', content: [
            'Buku Rapor Kesehatanku seri Informasi Kesehatan, Buku Aksi Bergizi dan Buku/Media KIE kesehatan lainnya.',
            'Permainan-permainan bertema kesehatan.',
            'Aplikasi dan media KIE Kementerian Kesehatan (kesga.kemkes.go.id, promkes.kemkes.go.id, dan lain-lain).',
          ],
        },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Sekolah/madrasah mengalokasikan waktu dan jam literasi kesehatan minimal 1 kali seminggu.',
            'Guru UKS/M membuat jadwal literasi kesehatan berdasarkan topik-topik dalam Buku Rapor Kesehatan Seri Informasi Kesehatan atau materi kesehatan lainnya yang dibutuhkan.',
          ],
        },
      ],
    },
    {
      // The source page reuses the Sanitasi Sekolah paragraph here (a known copy bug on the
      // scraped DEV build — see docs/content-source/trias-uks-content.MD, item 02). This
      // item's real copy has not been written yet, so no facts are invented here.
      id: 'perilaku-hidup-bersih-dan-sehat',
      title: 'Perilaku Hidup Bersih dan Sehat',
      placeholder: true,
      description: null,
      sections: [],
    },
    {
      id: 'pendidikan-gizi',
      title: 'Pendidikan Gizi',
      description:
        'Pendidikan gizi merupakan upaya untuk mengubah sikap dan perilaku untuk mendukung pemenuhan gizi seimbang pada peserta didik. Pemenuhan gizi seimbang sangat penting dilakukan untuk meningkatkan pencapaian pertumbuhan dan perkembangan peserta didik yang optimal sehingga mereka dapat mengikuti proses pembelajaran secara lebih baik.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Sarapan bersama minimal satu kali seminggu sebelum jam pelajaran pertama, berurutan dengan cuci tangan pakai sabun, pemberian tablet tambah darah (puteri SMP/MTs dan SMA/SMK/MA) dan sikat gigi bersama.' },
        { label: 'Tempat', type: 'text', content: 'Di kelas masing-masing atau luar kelas yang kondusif; disarankan di kelas dengan pengawasan guru kelas.' },
        { label: 'Pelaksana', type: 'text', content: 'Guru kelas, kader kesehatan sekolah/madrasah, peserta didik.' },
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'Pemahaman gizi seimbang/Isi Piringku, termasuk contoh pada acara-acara sekolah.',
            'Sarapan bersama dengan gizi seimbang, dengan umpan balik dari guru kelas.',
            'Konsumsi tablet tambah darah.',
            'Menghindari/meminimalisir makanan siap saji, berpemanis, pengawet, kurang serat, tinggi gula, garam, dan lemak.',
            'Pendidikan gizi diberikan pula kepada petugas kantin, pedagang kaki lima, dan warung di sekitar sekolah.',
            'Peserta didik membawa bekal sesuai prinsip Isi Piringku dan air putih; aktivitas fisik diajarkan untuk mencegah kelebihan berat badan.',
          ],
        },
        {
          label: 'Sarana', type: 'bullets', content: [
            'Bekal sarapan menu bergizi seimbang.',
            'Sarana cuci tangan dengan sabun dan air mengalir.',
            'Materi edukasi gizi seperti modul Aksi Bergizi dan Buku Saku Aksi Bergizi.',
          ],
        },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Orang tua/wali menyiapkan bekal sarapan bergizi seimbang sesuai jadwal.',
            'Peserta didik sarapan di kelas didampingi guru kelas: cuci tangan, berdoa, sarapan bersama, minum tablet tambah darah (khusus remaja putri), minum air putih, buang sampah, cuci tangan kembali.',
            'Guru memantau menu yang dibawa peserta didik sesuai "Isi Piringku".',
            'Guru kelas dapat dibantu kader kesehatan sekolah/madrasah pokja gizi.',
            'Guru menyampaikan pendidikan gizi sesuai topik di buku Aksi Bergizi dan buku rapor seri informasi.',
          ],
        },
        {
          label: 'Tautan Penting', type: 'links', content: [
            { label: 'Pendidikan untuk Anak (Nutrition Education for Children)', url: null },
            { label: 'Pendidikan untuk Orang Tua (Nutrition Education for Parents)', url: null },
          ],
        },
      ],
    },
    {
      id: 'pendidikan-kesehatan-reproduksi',
      title: 'Pendidikan Kesehatan Reproduksi',
      description:
        'Kesehatan reproduksi adalah keadaan sehat secara fisik, mental dan sosial secara utuh, tidak semata-mata terbebas dari penyakit atau kecacatan yang berkaitan dengan sistem, fungsi dan proses reproduksi. Pendidikan kesehatan reproduksi bagi anak usia sekolah menekankan pada proses pertumbuhan dan perkembangan untuk mencapai dewasa sehat dan mengasah daya tangkal dari perilaku berisiko. Materi meliputi: konsep dasar, nilai dan norma, pertumbuhan dan perkembangan, masalah kesehatan reproduksi, gender dan kekerasan, teknologi informasi dan komunikasi, serta layanan terkait di sekolah.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Intrakurikuler: min. 1×/minggu pada jam Guru BK/Guru kelas atau terintegrasi mata pelajaran lain. Kokurikuler: min. 1×/minggu. Ekstrakurikuler: min. 1×/minggu secara interaktif/permainan.' },
        { label: 'Pelaksana', type: 'text', content: 'Guru kelas, guru mata pelajaran IPA, PJOK, guru UKS/M, peserta didik.' },
        { label: 'Kegiatan', type: 'numbered', content: ['Pemberian materi kesehatan reproduksi disesuaikan usia dan tingkat pendidikan, diberikan lewat permainan dan diskusi kasus secara intrakurikuler, kokurikuler dan ekstrakurikuler.'] },
        { label: 'Sarana', type: 'bullets', content: ['Buku-buku pedoman/panduan kesehatan reproduksi/rencana aksi guru.', 'Video tutorial dan media KIE lainnya.'] },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Intrakurikuler: melalui program Aksi Guru secara berjenjang dari Direktorat GTK Kemendikbud.',
            'Kokurikuler: mengikuti alur pemberian pelajaran kokurikuler seperti biasa.',
            'Ekstrakurikuler: min. 1×/minggu melalui diskusi, bermain peran, studi kasus dan permainan.',
          ],
        },
      ],
    },
    {
      id: 'pendidikan-karakter',
      title: 'Pendidikan Karakter',
      description:
        'Pendidikan Keterampilan Hidup Sehat (PKHS) adalah kemampuan psikososial seseorang untuk memenuhi kebutuhan dan mengatasi masalah dalam kehidupan sehari-hari secara efektif. Ada 10 keterampilan hidup sehat yang wajib dipraktikkan peserta didik: empati, kesadaran diri, pengambilan keputusan, pemecahan masalah, berpikir kreatif, berpikir kritis, komunikasi efektif, hubungan interpersonal, mengendalikan emosi, dan mengatasi stres.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Intrakurikuler: min. 1×/minggu pada jam Guru BK/Guru kelas atau terintegrasi mata pelajaran lain. Kokurikuler: min. 1×/minggu. Ekstrakurikuler: min. 1×/minggu secara interaktif/permainan.' },
        { label: 'Tempat', type: 'text', content: 'Di kelas atau luar kelas yang kondusif.' },
        { label: 'Pelaksana', type: 'text', content: 'Guru kelas, guru mata pelajaran, guru UKS/M, peserta didik.' },
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'Pemberian informasi dan keterampilan melalui metode partisipatif agar peserta didik memahami dan mempraktikkan keterampilan hidup sehat.',
            'Terintegrasi dengan mata pelajaran bimbingan konseling (SMP/SMA), pelajaran tematik (PAUD/SD), atau sesi khusus guru kelas.',
            'Dapat terintegrasi dengan pendidikan kesehatan reproduksi, pendidikan gizi, dan PHBS.',
          ],
        },
        {
          label: 'Sarana', type: 'bullets', content: [
            'Buku pedoman PKHS Kementerian Kesehatan.',
            'Buku Petunjuk Pelaksanaan Pelayanan Kesehatan Jiwa di Sekolah Kementerian Kesehatan.',
            'Buku Pendidikan Keterampilan Hidup Kementerian Pendidikan dan Kebudayaan.',
            'Media KIE dan video tutorial pendukung.',
          ],
        },
      ],
    },
    {
      id: 'pembiasaan-aktivitas-fisik',
      title: 'Pembiasaan Aktivitas Fisik',
      description:
        'Pembiasaan aktivitas fisik merupakan pembiasaan kegiatan aktivitas fisik di sekolah untuk mendukung pencapaian pertumbuhan dan perkembangan yang optimal, menjaga kebugaran dan mencegah risiko terkena penyakit tidak menular.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Peregangan min. 1×/hari pada pergantian jam pelajaran. Optimalisasi 4L min. 1×/hari saat istirahat (SD/MI). Olahraga sesuai jam mata pelajaran. Ekstrakurikuler wajib olahraga/beladiri/kesenian min. 1×/minggu.' },
        { label: 'Tempat', type: 'text', content: 'Peregangan di kelas; aktivitas fisik lainnya di lapangan atau lingkungan sekolah/madrasah yang kondusif.' },
        { label: 'Pelaksana', type: 'text', content: 'Peserta didik, guru kelas, guru mata pelajaran, dan guru PJOK.' },
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'Gerakan peregangan pada pergantian jam pelajaran.',
            'Optimalisasi 4L (Lompat, Lari, Lempar, Loncat) saat istirahat, khusus SD/MI.',
            'Ekstrakurikuler wajib olahraga/beladiri/kesenian bagi SMP/MTs dan SMA/SMK/MA.',
            'Optimalisasi jam pelajaran olahraga.',
          ],
        },
        {
          label: 'Sarana', type: 'bullets', content: [
            'Kreasi gerakan peregangan (mis. gerak kapiten, gerak penguin), dapat diiringi lagu.',
            'Halaman sekolah/madrasah atau aula untuk bermain/olahraga.',
            'Sarana dan prasarana olahraga.',
          ],
        },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Guru dan peserta didik melakukan kreasi gerakan peregangan.',
            'Peserta didik memimpin peregangan secara bergantian, ditandai bel/lonceng.',
            'Sekolah/madrasah mendorong bermain dan berolahraga bergerakan 4L saat istirahat.',
            'Sekolah/madrasah mendorong ekstrakurikuler olahraga/beladiri/kesenian sebagai ekstrakurikuler wajib.',
            'Guru PJOK mendorong olahraga optimal minimal pada jam pelajaran olahraga.',
            'Sekolah/madrasah menyediakan sarana dan prasarana pendukung olahraga berprestasi.',
          ],
        },
      ],
    },
    {
      id: 'dokter-kecil',
      title: 'Dokter Kecil',
      description:
        'Dokter kecil adalah peserta didik yang memenuhi kriteria dan telah dilatih untuk ikut melaksanakan sebagian usaha pemeliharaan dan peningkatan kesehatan terhadap diri sendiri, teman, keluarga dan lingkungannya.',
      sections: [
        {
          label: 'Tugas', type: 'numbered', content: [
            'Menggerakkan dan membimbing teman menerapkan Trias UKS.',
            'Membantu petugas kesehatan dalam P3K dan P3P.',
            'Memperoleh pembekalan materi pelatihan.',
            'Pengamatan kebersihan.',
            'Pencatatan pelaporan.',
            'Membantu guru untuk hal-hal khusus.',
          ],
        },
      ],
    },
  ],

  'pelayanan-kesehatan': [
    {
      id: 'penjaringan-kesehatan-dan-pemeriksaan-berkala',
      title: 'Penjaringan Kesehatan dan Pemeriksaan Berkala',
      description:
        'Penjaringan kesehatan merupakan rangkaian pemeriksaan kesehatan (skrining) yang dilakukan pada seluruh peserta didik baru yaitu kelas 1 SD/MI, 7 SMP/MTs dan 10 SMA/SMK/MA, sedangkan pemeriksaan berkala adalah rangkaian pemeriksaan kesehatan (skrining) yang dilakukan pada seluruh peserta didik kelas 2–6 SD/MI, 8–9 SMP/MTs dan 11–12 SMA/SMK/MA.',
      sections: [
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'Pemeriksaan kesehatan menggunakan kuesioner riwayat kesehatan keluarga, diri, imunisasi dan perilaku terkait kesehatan lainnya. Bagi kelas 1–3 SD/MI atau peserta didik SLB, pengisian dapat dibantu orang tua/wali/guru.',
            'Pemeriksaan fisik oleh sekolah/madrasah (guru dan kader kesehatan sekolah): tinggi/berat badan, tekanan darah, ketajaman penglihatan, kebersihan diri, kebugaran jasmani. Pemeriksaan klinis oleh Puskesmas: gigi dan mulut, telinga, denyut jantung dan pernapasan, dan lain-lain.',
          ],
        },
      ],
    },
    {
      id: 'imunisasi',
      title: 'Imunisasi',
      description:
        'Imunisasi adalah upaya menimbulkan/meningkatkan kekebalan seseorang secara aktif terhadap suatu penyakit sehingga bila suatu saat terpajan dengan penyakit tersebut tidak akan sakit atau hanya mengalami sakit ringan. Anak usia sekolah dasar perlu mendapatkan imunisasi lanjutan untuk mempertahankan tingkat kekebalan. Imunisasi yang diberikan meliputi campak rubella, difteri, tetanus dan HPV (baru diberikan di beberapa provinsi dan kabupaten/kota).',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Bulan Imunisasi Anak Sekolah (BIAS) dilaksanakan setiap tahun pada bulan Agustus dan November.' },
        { label: 'Tempat', type: 'text', content: 'Di sekolah/madrasah. Bila peserta didik berhalangan hadir, imunisasi dapat diberikan di Puskesmas dengan surat pengantar dari sekolah/madrasah.' },
        { label: 'Pelaksana', type: 'text', content: 'Puskesmas dibantu sekolah/madrasah atau guru dan orang tua peserta didik.' },
        { label: 'Kegiatan', type: 'numbered', content: ['Program imunisasi lanjutan bernama Bulan Imunisasi Anak Sekolah (BIAS), ditujukan bagi peserta didik SD/MI.'] },
        {
          label: 'Sarana', type: 'bullets', content: [
            'Sekolah/madrasah menyediakan daftar absensi dan membantu menggerakkan peserta didik.',
            'Puskesmas menyediakan vaksin, Auto Disable Syringe (ADS), Safety Box, Vaccine Carrier, peralatan anafilaktik, dan dokumen pencatatan.',
          ],
        },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Puskesmas berkoordinasi dengan sekolah/madrasah menyepakati jadwal imunisasi.',
            'Puskesmas menghitung dan menyiapkan kebutuhan vaksin dan perlengkapan.',
            'Sekolah/madrasah memberikan surat pemberitahuan kepada orang tua.',
            'Puskesmas memberikan penyuluhan sebelum dan sesudah pelaksanaan imunisasi.',
            'Puskesmas melaksanakan imunisasi dibantu sekolah/madrasah.',
          ],
        },
      ],
    },
    {
      id: 'pemberian-obat-cacing',
      title: 'Pemberian Obat Cacing',
      description:
        'Cacingan adalah penyakit yang disebabkan oleh infeksi cacing dalam tubuh manusia yang ditularkan melalui tanah. Pemberian Obat Pencegahan Secara Massal Cacingan (POPM Cacingan) merupakan pemberian obat cacing secara serentak kepada semua penduduk sasaran di wilayah berisiko cacingan sebagai bagian dari upaya pencegahan penularan cacingan.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Dua kali/tahun untuk kabupaten/kota berprevalensi tinggi, satu kali/tahun untuk prevalensi sedang. Diberikan pada peserta didik PAUD dan SD/MI, usia 1–12 tahun, sesuai dosis.' },
        { label: 'Pelaksana', type: 'text', content: 'Puskesmas, guru UKS/M, kader kesehatan sekolah/madrasah, peserta didik.' },
        {
          label: 'Sarana', type: 'bullets', content: [
            'Obat cacing.',
            'Buku Rapor Kesehatanku atau form pencatatan dari Puskesmas.',
            'Buku KIA atau lembar pencatatan dari Puskesmas.',
          ],
        },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Petugas Puskesmas berkoordinasi dengan kepala sekolah/madrasah dan guru menjadwalkan POPM Cacingan.',
            'Pada hari pelaksanaan, guru membantu petugas Puskesmas mengatur peserta didik.',
            'Petugas Puskesmas melakukan pencatatan dan pelaporan.',
          ],
        },
      ],
    },
    {
      id: 'p3k-dan-p3p',
      title: 'P3K dan P3P',
      description:
        'Pemberian P3K dan P3P dilakukan sebagai penanganan awal terhadap cedera atau kejadian sakit yang terjadi di sekolah/madrasah sebelum dilakukan pemeriksaan lebih lanjut di fasilitas kesehatan, bertujuan mencegah perburukan penyakit/cedera.',
      sections: [
        { label: 'Tempat', type: 'text', content: 'Ruang UKS/M atau lokasi kondusif lainnya di sekolah/madrasah.' },
        { label: 'Pelaksana', type: 'text', content: 'Guru UKS/M dan guru lainnya yang terlatih, pelatih PMR, PMR, kader kesehatan sekolah/madrasah terlatih.' },
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'P3K — penanganan cedera (jatuh, luka, patah tulang, dan lain-lain) sesuai jenis cedera oleh petugas terlatih.',
            'P3P — penanganan segera kejadian sakit ringan (demam, diare, sakit maag, nyeri haid, pingsan, sakit kepala). Bila berlanjut, sekolah menginformasikan orang tua dan merujuk ke Puskesmas atau fasilitas kesehatan lain.',
          ],
        },
        { label: 'Sarana', type: 'bullets', content: ['Peralatan P3K di ruang UKS/M sesuai Pedoman Tim Pembina UKS/M.', 'Obat-obatan sederhana di ruang UKS/M sesuai Pedoman Tim Pembina UKS/M.'] },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Sekolah/madrasah menyediakan sarana prasarana P3K/P3P dan berkoordinasi dengan Puskesmas serta pelatih PMR; menyusun jadwal piket.',
            'Guru UKS/M, pelatih PMR dan PMR/kader kesehatan memberikan P3K dan P3P saat diperlukan.',
            'Guru UKS/M dan kader kesehatan mencatat pemberian P3K/P3P dan memantau kondisi peserta didik, merujuk bila diperlukan.',
          ],
        },
      ],
    },
  ],

  'pembinaan-lingkungan-sekolah-sehat': [
    {
      id: 'sanitasi-sekolah',
      title: 'Sanitasi Sekolah',
      description:
        'Sanitasi merupakan pengendalian semua faktor lingkungan fisik manusia yang dapat menimbulkan akibat buruk terhadap kehidupan manusia, baik fisik maupun mental (WHO). Sarana prasarana sanitasi sekolah/madrasah yang diperlukan antara lain air bersih yang cukup, jamban sehat, sarana cuci tangan dengan sabun air mengalir, pembuangan limbah cair dan tempat sampah. Komponen sanitasi sekolah meliputi: ketersediaan sarana dan prasarana; implementasi Perilaku Hidup Bersih dan Sehat; serta manajemen sanitasi sekolah.',
      sections: [
        { label: 'Waktu', type: 'text', content: SANITASI_WAKTU },
        { label: 'Tempat', type: 'text', content: 'Seluruh lingkungan sekolah/madrasah.' },
        { label: 'Pelaksana', type: 'text', content: 'Kepala sekolah/madrasah, guru dan wali kelas, peserta didik, orang tua/wali, masyarakat sekolah/madrasah dan sekitarnya termasuk sanitarian di Puskesmas.' },
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'Inspeksi kesehatan lingkungan oleh Puskesmas dan pihak sekolah/madrasah.',
            'Penilaian mandiri kesehatan lingkungan setiap bulan oleh sekolah/madrasah.',
            'Pembersihan dan desinfeksi ruang kelas, ruang guru, laboratorium, kantin dan ruangan lain setiap hari.',
            'Pembersihan dan desinfeksi sarana yang sering tersentuh tangan setiap hari.',
            'Pembersihan sarana luar kelas seperti lapangan.',
            'Pembuangan sampah ke tempat tertutup dan terpilah setiap hari.',
            'Pengumpulan sampah ke Tempat Pembuangan Sampah (TPS) sementara.',
            'Kerja bakti.',
            'Pelaksanaan 3R (reuse, reduce, recycle).',
          ],
        },
        {
          label: 'Sarana', type: 'bullets', content: [
            'Surat edaran/peraturan penerapan dari sekolah/madrasah.',
            'Tempat sampah tertutup dan terpilah di setiap kelas, dilapisi plastik.',
            'Alat-alat kebersihan: sapu, plastik.',
            'Cairan pembersih/desinfektan.',
            'Tempat pembuangan sampah sementara dari bata atau drum bertutup.',
            'Lokasi pengumpulan sampah untuk digunakan kembali/Bank Sampah.',
            'Tempat pengolahan sampah/sarana pembuatan pupuk.',
          ],
        },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Sekolah/madrasah bekerja sama dengan Puskesmas dan Dinas Kebersihan/Lingkungan Hidup mengorientasikan kegiatan sanitasi dan pengelolaan sampah.',
            'Sekolah/madrasah menunjuk guru pembimbing pengelolaan dan daur ulang sampah.',
            'Guru membuat jadwal pengelolaan sampah.',
            'Kader kesehatan sekolah/madrasah pokja sanitasi dan 3R membantu pengawasan sanitasi dan kerja bakti.',
          ],
        },
      ],
    },
    {
      id: 'pembinaan-kantin-sehat',
      title: 'Pembinaan Kantin Sehat',
      description:
        'Kantin sehat sekolah adalah tempat warga satuan pendidikan termasuk peserta didik dapat membeli makanan dan minuman yang sehat, baik makanan utama yang bergizi seimbang atau makanan selingan. Makanan sehat menunjang pencapaian dan pertumbuhan peserta didik yang optimal.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Berkesinambungan sepanjang waktu.' },
        { label: 'Tempat', type: 'text', content: 'Kantin sekolah/madrasah dan pedagang kaki lima di sekitarnya.' },
        { label: 'Pelaksana', type: 'text', content: 'Kepala sekolah/madrasah, guru UKS/M, Puskesmas, pengelola kantin, kader kesehatan sekolah/madrasah.' },
        { label: 'Sasaran', type: 'text', content: 'Pengelola kantin dan pedagang kaki lima serta peserta didik.' },
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'Penyuluhan higiene sanitasi pangan untuk food handler bersama Puskesmas, BPOM, atau lembaga lain.',
            'Penyuluhan makanan bergizi seimbang untuk food handler dan pengelola kantin.',
            'Pengawasan kantin sehat dan pengisian buku rapor kantin.',
            'Inspeksi kantin sekolah/madrasah oleh Puskesmas.',
            'Pemberian stiker kepada kantin yang memenuhi syarat.',
            'Pemberdayaan kader kesehatan sekolah/madrasah untuk pengawasan kantin sehat.',
          ],
        },
        { label: 'Sarana', type: 'bullets', content: ['Buku Rapor Penilaian Mandiri Kesehatan Lingkungan, tempat pengelolaan pangan kantin/jajanan, stiker, APD (celemek, tutup kepala, sarung tangan, masker).'] },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Sekolah/madrasah bersama Puskesmas dan BPOM mengadakan penyuluhan higiene sanitasi pangan dan jajanan sehat.',
            'BPOM mengambil sampel makanan untuk diteliti kandungan zat berbahaya.',
            'Kepala sekolah/madrasah, guru dan pembina UKS/M membina keamanan pangan secara berkala.',
            'Kader kesehatan sekolah/madrasah sebagai "detektif kantin" melaporkan makanan kurang sehat.',
            'Pembinaan kemasan/tempat penyajian makanan, mengurangi plastik dan styrofoam.',
            'Pembinaan penjamah makanan: kebersihan, celemek, alas kaki, cuci tangan.',
            'Pembinaan sarana dan prasarana: peralatan makan dan masak.',
            'Kerja sama dengan Dinkes/BPOM untuk pemberian stiker kantin sehat.',
            'Pembinaan juga dilakukan pada pedagang kaki lima dan warung sekitar sekolah/madrasah.',
          ],
        },
      ],
    },
    {
      id: 'pemanfaatan-pekarangan-sekolah',
      title: 'Pemanfaatan Pekarangan Sekolah/Madrasah',
      description: 'Pekarangan sekolah/madrasah adalah tanah atau halaman di sekitar sekolah/madrasah yang dapat dimanfaatkan untuk menanam berbagai macam tanaman.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Berkesinambungan, dapat diintegrasikan dengan mata pelajaran terkait seperti IPA atau Pramuka.' },
        { label: 'Tempat', type: 'text', content: 'Pekarangan/halaman sekolah/madrasah.' },
        { label: 'Pelaksana', type: 'text', content: 'Seluruh warga sekolah/madrasah dan dinas terkait.' },
        { label: 'Sasaran', type: 'text', content: 'Peserta didik, guru dan warga sekolah/madrasah.' },
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'Memanfaatkan halaman/lahan kosong untuk tanaman obat, sayuran, buah serta tanaman pengusir nyamuk.',
            'Memberi label pada tanaman sebagai sarana edukasi (nama latin, nama Indonesia, nama daerah, manfaat).',
          ],
        },
        {
          label: 'Sarana', type: 'bullets', content: [
            'Bibit sayur, bibit buah, pupuk, alat berkebun.',
            'Aneka sayuran, tanaman obat, dan tanaman pengusir nyamuk sesuai kearifan lokal masing-masing daerah.',
            'Kompos dan/atau pupuk organik.',
          ],
        },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Setiap peserta didik membawa satu bibit tanaman sayuran/obat setiap tahun ajaran baru untuk ditanam di taman/kebun sekolah/madrasah.',
            'Setiap kelas membentuk taman kelas.',
            'Perawatan dilakukan bergilir oleh peserta didik setiap minggu.',
            'Guru UKS/M membina kader kesehatan Pokja Toga min. 1 kali seminggu.',
            'Sekolah/madrasah dapat bermitra dengan KLHK untuk pemanfaatan pekarangan.',
          ],
        },
      ],
    },
    {
      id: 'pemberantasan-sarang-nyamuk',
      title: 'Pemberantasan Sarang Nyamuk',
      description: 'Pemberantasan sarang nyamuk (PSN) adalah tindakan pemberantasan sarang nyamuk melalui kegiatan menutup, menguras dan memanfaatkan barang bekas yang masih bernilai (dikenal dengan istilah 3M).',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Dilaksanakan minimal 1 kali dalam seminggu.' },
        { label: 'Pelaksana', type: 'text', content: 'Anak sekolah/madrasah, dipantau oleh Jumantik.' },
        { label: 'Sasaran', type: 'text', content: 'Tempat perkembangbiakan nyamuk.' },
        { label: 'Kegiatan', type: 'numbered', content: ['Pengamatan jentik dan kegiatan 3M Plus (menutup, menguras, memanfaatkan barang bekas) serta mencegah gigitan nyamuk, sebagai kegiatan terencana dan berkesinambungan untuk mencegah DBD.'] },
        { label: 'Sarana', type: 'bullets', content: ['Senter, meja jalan, formulir, gayung.'] },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Guru PJ mengajarkan kegiatan PSN 3M Plus kepada peserta didik.',
            'Setiap minggu peserta didik memantau jentik dan PSN 3M Plus di sekolah dan rumah, serta mencatat hasilnya.',
            'Pengamatan jentik dilakukan di seluruh area sekolah/madrasah; hasil dilaporkan mingguan ke guru Penanggung Jawab.',
          ],
        },
      ],
    },
    {
      id: 'kawasan-tanpa-rokok-napza-kekerasan-pornografi',
      title: 'Kawasan Tanpa Rokok, NAPZA, Kekerasan dan Pornografi',
      description:
        'Kawasan Tanpa Rokok adalah ruangan/area yang dinyatakan dilarang untuk kegiatan merokok, memproduksi, menjual, dan/atau mempromosikan rokok. Kawasan Tanpa NAPZA bebas dari kegiatan penyalahgunaan NAPZA. Kawasan Tanpa Kekerasan bebas dari kekerasan fisik, psikis, maupun sosial termasuk perundungan. Kawasan Tanpa Pornografi memastikan tidak ada penyediaan, akses, penyimpanan, atau peredaran materi yang memuat kecabulan/eksploitasi seksual di lingkungan sekolah.',
      sections: [
        { label: 'Waktu', type: 'text', content: 'Diterapkan sepanjang waktu.' },
        { label: 'Tempat', type: 'text', content: 'Seluruh lingkungan sekolah/madrasah.' },
        { label: 'Pelaksana', type: 'text', content: 'Kepala sekolah/madrasah, guru dan wali kelas, orang tua, peserta didik dan kader kesehatan sekolah/madrasah.' },
        { label: 'Sasaran', type: 'text', content: 'Kepala sekolah/madrasah, guru, tenaga kependidikan, peserta didik dan pihak lain di lingkungan sekolah/madrasah serta satgas KTR/KTN/KTK/KTP.' },
        {
          label: 'Kegiatan', type: 'numbered', content: [
            'Memasukkan larangan rokok dan NAPZA dalam tata tertib sekolah/madrasah.',
            'Menolak iklan, promosi, sponsor, atau kerja sama dari perusahaan rokok untuk kegiatan kurikuler/ekstrakurikuler.',
            'Melarang papan iklan, reklame, pamflet dari perusahaan/yayasan rokok di lingkungan sekolah.',
            'Melarang penjualan rokok di kantin/koperasi sekolah; tidak ada asbak di ruang tamu/guru.',
            'Memasang tanda kawasan tanpa rokok dan NAPZA.',
            'Membiasakan senyum, sapa, salam, sopan dan santun setiap hari.',
            'Membiasakan doa bersama setiap mulai jam pelajaran.',
            'Mengembangkan kegiatan belajar aktif dan interaktif, ekstrakurikuler positif (Pramuka, PMR), gotong royong, konseling BK, dan literasi isu kesehatan tren (perundungan, tawuran, seks berisiko, NAPZA).',
            'Meningkatkan pengetahuan dan keterampilan peserta didik menggunakan gawai dengan bijak.',
          ],
        },
        { label: 'Sarana', type: 'bullets', content: ['Surat edaran/peraturan serta spanduk/poster penerapan KTR/KTN/KTK/KTP.', 'CCTV di tempat strategis lingkungan sekolah.'] },
        {
          label: 'Langkah-langkah', type: 'numbered', content: [
            'Pembuatan peraturan kepala sekolah/madrasah terkait KTR/KTN/KTK/KTP.',
            'Sosialisasi kepada seluruh warga sekolah/madrasah dan RT/RW sekitar.',
            'Pembentukan satuan tugas (satgas), termasuk peer educator di antara peserta didik.',
          ],
        },
      ],
    },
  ],
}

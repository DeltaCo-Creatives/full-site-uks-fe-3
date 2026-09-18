// Sourced from docs/content-source/program/ckg.md (Portal UKS DEV /ckg, JDIH Kemenkes KMK
// HK.01.07/Menkes/770/2025). PROD's own /program/cek-kesehatan-gratis is still a placeholder
// ("isi ckg dari paparan"), so it isn't used as a source. Route key renamed from
// `cek-kesehatan-gratis` to `ckg`; App.jsx redirects the old URL.

export const ckg = {
  key: 'ckg',
  title: 'Cek Kesehatan Gratis Sekolah',
  shortTitle: 'CKG',
  image: '/images/scraped/fotoCKG.png',
  color: '#1a73e8',
  summary:
    'Pemeriksaan kesehatan preventif dan gratis bagi peserta didik di satuan pendidikan, sejalan dengan pelaksanaan penjaringan kesehatan dan pemeriksaan berkala dalam Trias UKS/M.',

  intro: [
    'Cek Kesehatan Gratis (CKG) Sekolah adalah pemeriksaan kesehatan gratis dari pemerintah untuk seluruh peserta didik kelas 1–12 atau sederajat (termasuk pesantren), yang dilaksanakan setiap tahun ajaran baru. Bukan hal yang perlu ditakuti — CKG Sekolah justru jadi langkah positif untuk mendeteksi masalah kesehatan sejak dini, sebelum berkembang jadi lebih serius, supaya siswa-siswi bisa belajar dan tumbuh dengan lebih optimal.',
    'Program ini bagian dari Cek Kesehatan Gratis (CKG) yang lebih luas, mengedepankan upaya promotif dan preventif — periksa hari ini, sehat di masa depan.',
  ],

  facts: [
    { label: 'Kapan', value: 'Setiap tahun ajaran baru, mulai bulan Juli' },
    { label: 'Di mana', value: 'Di sekolah/madrasah/pesantren, oleh petugas Puskesmas bersama guru' },
    { label: 'Izin', value: 'Atas sepengetahuan dan izin orang tua/wali' },
    { label: 'Hasil', value: 'Dapat diakses melalui SATUSEHAT Mobile atau WhatsApp' },
    { label: 'Petunjuk teknis', value: 'KMK Nomor HK.01.07/Menkes/770/2025, ditetapkan 6 Agustus 2025' },
  ],

  checkup: {
    intro: 'Jenis pemeriksaan disesuaikan dengan tahap tumbuh kembang peserta didik di tiap jenjang.',
    rows: [
      {
        level: 'SD/MI/Pesantren',
        grades: 'Kelas 1–6',
        text: 'Status gizi, riwayat imunisasi (kelas 1), telinga, mata, gigi, kesehatan jiwa, tekanan darah, gula darah, TBC, Hepatitis B; ditambah merokok, kebugaran, dan kesehatan reproduksi (kelas 4–6).',
      },
      {
        level: 'SMP/MTs/Pesantren',
        grades: 'Kelas 7–9',
        text: 'Semua pemeriksaan jenjang SD, ditambah anemia (kelas 7), talasemia, Hepatitis C, dan riwayat imunisasi HPV (kelas 9 putri).',
      },
      {
        level: 'SMA/SMK/MA/Pesantren',
        grades: 'Kelas 10–12',
        text: 'Sama seperti jenjang SMP, dengan pemeriksaan anemia untuk peserta didik putri kelas 10.',
      },
    ],
    note: 'Khusus daerah endemis, terdapat pemeriksaan tambahan seperti malaria, kusta, dan skabies sesuai kondisi wilayah masing-masing.',
  },

  timeline: [
    { when: 'H-7', title: 'Koordinasi & Sosialisasi', text: 'Puskesmas berkoordinasi dengan sekolah, menyampaikan tata cara pendaftaran dan kuesioner skrining mandiri kepada peserta didik/orang tua.' },
    { when: 'H-2', title: 'Pengecekan Kesiapan', text: 'Puskesmas mengecek jumlah pendaftar dan kelengkapan kuesioner, lalu menyiapkan alat kesehatan yang dibutuhkan.' },
    { when: 'Hari H', title: 'Pelaksanaan Pemeriksaan', text: 'Peserta didik mengikuti pemeriksaan sesuai paket jenjangnya; tenaga kesehatan mencatat hasil secara real-time melalui SATUSEHAT IndonesiaKu.' },
    { when: 'Setelahnya', title: 'Hasil & Tindak Lanjut', text: 'Hasil pemeriksaan disampaikan langsung atau dikirim via WhatsApp/SATUSEHAT Mobile, lengkap dengan edukasi dan rujukan bila diperlukan.' },
  ],

  resourceGroups: [
    {
      title: 'Situs Resmi',
      items: [
        { label: 'Ayo Sehat Kemenkes — informasi & jadwal CKG', url: 'https://ayosehat.kemkes.go.id', ext: true },
        { label: 'Unduh Petunjuk Teknis (KMK HK.01.07/Menkes/770/2025)', url: 'https://jdih.kemkes.go.id/documents/keputusan-menteri-kesehatan-nomor-hk0107menkes7702025', ext: true },
        { label: 'Daftar Sekolahmu (ckg.kemkes.go.id)', unavailable: true },
      ],
    },
  ],

  sources: [
    { label: 'Portal UKS: halaman CKG', url: 'https://portal-uks.demo.or.id/ckg' },
    { label: 'JDIH Kemenkes: KMK HK.01.07/Menkes/770/2025', url: 'https://jdih.kemkes.go.id/documents/keputusan-menteri-kesehatan-nomor-hk0107menkes7702025' },
  ],
}

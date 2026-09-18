// Real app directory copy — OKY description from uks.kemendikdasmen.go.id homepage;
// SIJIWA per the /informasi/aplikasi page on the portal-uks.demo.or.id mirror.
// `featuredOnHome` marks the set portal-uks.demo.or.id's homepage actually shows (OKY + SATUSEHAT);
// the full /informasi/aplikasi directory lists all entries. SATUSEHAT's Play Store package
// (com.telkom.tracencare) is confirmed correct — PeduliLindungi was renamed SATUSEHAT Mobile and
// kept its package id (see docs/reports/implementation-plan-missing-from-dev.md).
export const APLIKASI = [
  {
    name: 'OKY (Period Tracker)',
    by: 'UNICEF',
    description:
      'Aplikasi seluler untuk membantu remaja perempuan (usia 10+) melacak menstruasi dan mendapatkan edukasi terkait menstruasi serta kesehatan reproduksi remaja dengan cara yang menyenangkan. Dikembangkan bersama anak perempuan dan untuk anak perempuan.',
    url: 'https://play.google.com/store/apps/details?id=com.oky.id',
    color: '#e879a6',
    featuredOnHome: true,
  },
  {
    name: 'SATUSEHAT Mobile',
    by: 'Kementerian Kesehatan',
    description:
      'Aplikasi kesehatan nasional untuk mengakses rekam medis elektronik, riwayat imunisasi, dan layanan kesehatan digital, termasuk bagi peserta didik dan keluarga.',
    url: 'https://play.google.com/store/apps/details?id=com.telkom.tracencare',
    color: '#1a73e8',
    featuredOnHome: true,
  },
  {
    name: 'SIJIWA',
    by: 'Garuda Teknologi Indonesia',
    description: 'Sistem informasi kesehatan jiwa (mental health) untuk mendukung deteksi dini dan pendampingan kesejahteraan psikososial peserta didik.',
    url: null,
    color: '#2fa259',
    featuredOnHome: false,
  },
]

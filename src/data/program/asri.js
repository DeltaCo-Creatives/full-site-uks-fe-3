// Sourced from docs/content-source/program/asri.md (Portal UKS DEV /asri, Kemendikdasmen berita
// 15766 and siaran pers 14859). No image asset for ASRI exists locally, so the page falls back to
// the color tile Program.jsx already renders when `image` is null.

export const asri = {
  key: 'asri',
  title: 'Gerakan Sekolah ASRI',
  shortTitle: 'ASRI',
  image: null,
  color: '#5fb7d0',
  summary:
    'Kampanye "Aman, Sehat, Resik, Indah" untuk lingkungan sekolah, selaras dengan pilar Pembinaan Lingkungan Sekolah Sehat dalam Trias UKS/M.',

  intro: [
    'Gerakan Sekolah ASRI adalah program nasional yang mengajak seluruh warga sekolah — murid, guru, tenaga kependidikan, hingga orang tua — untuk bersama-sama menciptakan lingkungan belajar yang nyaman, bersih, hijau, dan aman. Gerakan ini merupakan bagian dari upaya pembinaan Usaha Kesehatan Sekolah/Madrasah (UKS/M) yang menekankan pada kebersihan, keindahan, dan kenyamanan lingkungan sekolah.',
  ],

  facts: [
    { label: 'Digagas', value: 'Presiden Prabowo Subianto, pada Rapat Koordinasi Nasional Pemerintah Pusat dan Daerah Tahun 2026' },
    { label: 'Acuan', value: 'Empat pilar selaras dengan Permendikdasmen Nomor 6 Tahun 2026' },
    { label: 'Di sekolah', value: 'Terintegrasi dengan Trias UKS/M: pendidikan kesehatan, pelayanan kesehatan, pembinaan lingkungan sekolah sehat' },
  ],

  pillars: [
    {
      badge: 'A',
      title: 'Aman',
      subtitle: 'Budaya perlindungan menyeluruh',
      text: 'Bebas dari perundungan (bullying), infrastruktur yang tahan bencana dan ramah disabilitas, kebebasan beribadah, serta bekal keamanan digital untuk murid dari ancaman siber dan judi online.',
    },
    {
      badge: 'S',
      title: 'Sehat',
      subtitle: 'Pendidikan dan pelayanan kesehatan terpadu',
      text: 'Gaya hidup sehat lewat kebiasaan cuci tangan, olahraga rutin, kantin sehat, dan Kawasan Tanpa Rokok — didukung integrasi Makan Bergizi Gratis, pemeriksaan kesehatan berkala, dan intervensi anemia (Aksi Bergizi).',
    },
    {
      badge: 'R',
      title: 'Resik',
      subtitle: 'Pembinaan lingkungan fisik dan sanitasi',
      text: 'Budaya menjaga kebersihan lewat piket kelas, manajemen air dan sanitasi (WASH) yang ramah disabilitas, pemilahan sampah, daur ulang berbasis 3R/7R, komposting, hingga bank sampah sekolah.',
    },
    {
      badge: 'I',
      title: 'Indah',
      subtitle: 'Estetika lingkungan berkelanjutan',
      text: 'Penataan lingkungan fisik agar rapi, ruang terbuka hijau lewat taman TOGA dan program "Pohon Asuh" (Satu Siswa Satu Tanaman), serta pembiasaan tertib antre.',
    },
  ],

  example: {
    title: 'Contoh di Sekolah: Jumat Bersih',
    text: 'Wakil Menteri Pendidikan Dasar dan Menengah, Fajar Riza Ul Haq, meninjau pelaksanaan Jumat Bersih di SD Negeri 01 Cibadak, Kabupaten Sukabumi (6 Maret 2026), bagian dari implementasi Gerakan ASRI. Siswa tidak hanya diajak menjaga kebersihan lingkungan sekolah, tetapi juga dilatih untuk memiliki tanggung jawab terhadap lingkungan sekitar — pembiasaan yang menjadi bagian penting dari upaya membangun karakter peserta didik.',
    sourceUrl: 'https://www.kemendikdasmen.go.id/siaran-pers/14859-menanamkan-kepedulian-lingkungan-sejak-dini-melalui-gerakan-asri-di-sekolah',
    sourceLabel: 'Kemendikdasmen, siaran pers 14859',
  },

  relatedLink: { label: 'Lihat Pembinaan Lingkungan Sekolah Sehat di Trias UKS/M', url: '/uks-m/trias' },

  sources: [
    { label: 'Portal UKS: halaman ASRI', url: 'https://portal-uks.demo.or.id/asri' },
    { label: 'Kemendikdasmen: Workshop Implementasi Gerakan ASRI', url: 'https://www.kemendikdasmen.go.id/berita/15766-wujudkan-ekosistem-sekolah-luhur-kemendikdasmen-selenggarakan-workshop-implementasi-gerakan-asri' },
    { label: 'Kemendikdasmen: siaran pers Jumat Bersih', url: 'https://www.kemendikdasmen.go.id/siaran-pers/14859-menanamkan-kepedulian-lingkungan-sejak-dini-melalui-gerakan-asri-di-sekolah' },
  ],
}

import fs from 'node:fs';

const base = 'https://uks.kemendikdasmen.go.id';
const pages = [
  '/tentang-uks/deskripsi-umum',
  '/tentang-uks/tujuan',
  '/tentang-uks/sasaran',
  '/tentang-uks/struktur-organisasi-tim-pembina',
  '/tentang-uks/struktur-organisasi-timpelaksana',
  '/program/manajemen-uks-m',
  '/program/cek-kesehatan-gratis',
  '/program/pendidikan-kesehatan',
  '/program/pelayanan-kesehatan',
  '/program/pembinaan-lingkungan-sekolah-sehat',
  '/sekolah-sehat/gerakan-sekolah-sehat',
  '/sekolah-sehat/sehat-bergizi',
  '/sekolah-sehat/sehat-fisik',
  '/sekolah-sehat/sehat-imunisasi',
  '/sekolah-sehat/sehat-jiwa',
  '/sekolah-sehat/sehat-lingkungan',
  '/sekolah-sehat/bahan-advokasi',
  '/mitra/panduan-kemitraan',
  '/mitra/mitra-kami',
  '/mitra/dukungan-mitra',
  '/aktifitas-mitra',
  '/informasi/aplikasi',
  '/informasi/agenda',
];

const outDir = new URL('./out-pages/', import.meta.url);
fs.mkdirSync(outDir, { recursive: true });

const results = {};
for (const p of pages) {
  try {
    const res = await fetch(base + p, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const m = html.match(/<script data-page="app" type="application\/json">([\s\S]*?)<\/script>/);
    if (!m) { results[p] = { error: 'no data-page script', status: res.status }; continue; }
    const data = JSON.parse(m[1]);
    const { errors, auth, ziggy, navItems, analytics, appConfig, ...rest } = data.props;
    results[p] = { component: data.component, rest };
    console.log('OK', p, '->', data.component);
  } catch (e) {
    results[p] = { error: String(e) };
    console.log('FAIL', p, e.message);
  }
  await new Promise(r => setTimeout(r, 150));
}

fs.writeFileSync(new URL('pages.json', outDir), JSON.stringify(results, null, 2), 'utf8');
console.log('done');

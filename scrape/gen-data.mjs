import fs from 'node:fs';

const manifest = JSON.parse(fs.readFileSync(new URL('./out/image-manifest.json', import.meta.url), 'utf8'));
const urlToLocal = {};
for (const m of manifest) if (m.file) urlToLocal[m.url] = '/' + m.file;
const staticAssets = {
  'https://uks.kemendikdasmen.go.id/img/logoUks.png': '/images/scraped/logoUks.png',
  'https://uks.kemendikdasmen.go.id/img/foto-7kaih.jpeg': '/images/scraped/foto-7kaih.jpeg',
  'https://uks.kemendikdasmen.go.id/img/fotoMbg.jpeg': '/images/scraped/fotoMbg.jpeg',
  'https://uks.kemendikdasmen.go.id/img/fotoCKG.png': '/images/scraped/fotoCKG.png',
  'https://uks.kemendikdasmen.go.id/img/logo-uptbercerita.jpeg': '/images/scraped/logo-uptbercerita.jpeg',
};
Object.assign(urlToLocal, staticAssets);

function resolve(url) {
  if (!url) return null;
  return urlToLocal[url] || urlToLocal[url.replace('http://', 'https://')] || null;
}

function readJson(name) {
  return JSON.parse(fs.readFileSync(new URL(`./out/${name}.json`, import.meta.url), 'utf8'));
}

const outDir = new URL('../src/data/', import.meta.url);

// --- clients (mitra logos) ---
const clients = readJson('clients').map((c) => ({
  name: c.nama,
  fullName: c.nama_lengkap,
  address: c.alamat,
  logo: resolve(c.logo_url),
  website: c.website_url,
}));

// --- berita ---
const berita = readJson('latestBerita').map((b) => ({
  title: b.judul,
  slug: b.slug,
  summary: b.ringkasan,
  image: resolve(b.gambar_url),
  date: b.published_at,
  category: b.kategori?.nama ?? null,
}));

// --- praktik baik ---
const praktikBaik = readJson('latestPraktikBaik').map((p) => ({
  title: p.judul,
  slug: p.slug,
  summary: p.ringkasan,
  image: resolve(p.gambar_url),
  date: p.published_at,
  category: p.kategori_artikel?.nama ?? null,
}));

// --- upt bercerita ---
const uptBercerita = readJson('latestUptBercerita').map((u) => ({
  title: u.judul,
  slug: u.slug,
  summary: (u.ringkasan || '').replace(/&ndash;/g, '–').replace(/\r\n/g, ' '),
  date: u.published_at_formatted,
  category: u.category?.name ?? null,
}));

// --- infografis ---
const infografis = readJson('infografis').map((d) => ({
  title: (d.judul || d.nama || '').trim(),
  image: resolve(d.gambar_url) || resolve(d.files?.[0]?.path) || resolve('https://uks.kemendikdasmen.go.id/' + d.files?.[0]?.path),
  fileUrl: d.file_url,
  date: d.published_at,
}));

// --- buku panduan ---
const bukuPanduan = readJson('bukuPanduan').map((d) => ({
  title: (d.judul || d.nama || '').trim(),
  description: d.deskripsi,
  image: resolve(d.gambar_url) || resolve(d.files?.[0]?.path),
  fileUrl: d.file_url,
  date: d.published_at,
}));

// --- video ---
const video = readJson('latestVideo').map((v) => ({
  title: (v.judul || v.nama || '').trim(),
  image: resolve(v.gambar_url) || resolve(v.thumbnail) || v.thumbnail || null,
  videoUrl: v.video_url,
  date: v.published_at,
}));

// --- slider ---
const slider = readJson('sliderData').map((s) => resolve(s.gambar_url)).filter(Boolean);

function jsModule(varName, data, comment) {
  return `// ${comment}\nexport const ${varName} = ${JSON.stringify(data, null, 2)}\n`;
}

fs.writeFileSync(new URL('mitraClients.js', outDir), jsModule('MITRA_CLIENTS', clients, 'Real partner directory from uks.kemendikdasmen.go.id (clients prop).'));
fs.writeFileSync(new URL('berita.js', outDir), jsModule('BERITA', berita, 'Real latest berita from uks.kemendikdasmen.go.id.'));
fs.writeFileSync(new URL('praktikBaik.js', outDir), jsModule('PRAKTIK_BAIK', praktikBaik, 'Real latest praktik baik from uks.kemendikdasmen.go.id.'));
fs.writeFileSync(new URL('uptBercerita.js', outDir), jsModule('UPT_BERCERITA', uptBercerita, 'Real latest UPT bercerita stories from uks.kemendikdasmen.go.id.'));
fs.writeFileSync(new URL('infografis.js', outDir), jsModule('INFOGRAFIS', infografis, 'Real infografis publications from uks.kemendikdasmen.go.id.'));
fs.writeFileSync(new URL('bukuPanduan.js', outDir), jsModule('BUKU_PANDUAN', bukuPanduan, 'Real buku panduan publications from uks.kemendikdasmen.go.id.'));
fs.writeFileSync(new URL('video.js', outDir), jsModule('VIDEO', video, 'Real video library from uks.kemendikdasmen.go.id.'));
fs.writeFileSync(new URL('slider.js', outDir), jsModule('SLIDER_IMAGES', slider, 'Real homepage hero slider images from uks.kemendikdasmen.go.id.'));

console.log('clients', clients.length, 'berita', berita.length, 'praktikBaik', praktikBaik.length, 'upt', uptBercerita.length, 'infografis', infografis.length, 'buku', bukuPanduan.length, 'video', video.length, 'slider', slider.length);

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const urls = fs.readFileSync(new URL('./out/all-image-urls.txt', import.meta.url), 'utf8').split('\n').filter(Boolean);
const outDir = new URL('../public/images/scraped/', import.meta.url);
fs.mkdirSync(outDir, { recursive: true });

const manifest = [];

function safeName(u) {
  const { pathname } = new URL(u);
  let base = decodeURIComponent(path.basename(pathname)).replace(/[^a-zA-Z0-9._-]/g, '_');
  if (!/\.(png|jpe?g|webp|gif)$/i.test(base)) base += '.png';
  return base;
}

let i = 0;
const CONCURRENCY = 8;
async function worker() {
  while (i < urls.length) {
    const idx = i++;
    const u = urls[idx];
    let name = safeName(u);
    // dedupe by hashing full url if filename collides with different url
    const hash = crypto.createHash('md5').update(u).digest('hex').slice(0, 6);
    const ext = path.extname(name) || '.png';
    const base = path.basename(name, ext);
    name = `${base}_${hash}${ext}`;
    const dest = new URL(name, outDir);
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) { manifest.push({ url: u, file: null, error: `HTTP ${res.status}` }); console.log('FAIL', res.status, u); continue; }
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      manifest.push({ url: u, file: `images/scraped/${name}`, bytes: buf.length });
      console.log('OK', name, buf.length);
    } catch (e) {
      manifest.push({ url: u, file: null, error: String(e) });
      console.log('ERR', u, e.message);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
fs.writeFileSync(new URL('./out/image-manifest.json', import.meta.url), JSON.stringify(manifest, null, 2), 'utf8');
console.log('done, total:', manifest.length, 'ok:', manifest.filter(m => m.file).length);

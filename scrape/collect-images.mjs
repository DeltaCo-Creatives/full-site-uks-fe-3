import fs from 'node:fs';

const pages = JSON.parse(fs.readFileSync(new URL('./out-pages/pages.json', import.meta.url), 'utf8'));
const homeUrls = fs.readFileSync(new URL('./out/image-urls.txt', import.meta.url), 'utf8').split('\n').filter(Boolean);

const urls = new Set(homeUrls);
const re = /https?:\/\/[^"'\s)]+\.(?:png|jpe?g|webp|gif)/gi;

function walk(v) {
  if (typeof v === 'string') {
    const matches = v.match(re);
    if (matches) matches.forEach(u => urls.add(u.replace(/&amp;/g, '&')));
  } else if (Array.isArray(v)) v.forEach(walk);
  else if (v && typeof v === 'object') Object.values(v).forEach(walk);
}
walk(pages);

// keep only real-site domains, drop base64/data urls (already excluded by regex needing http),
// drop known placeholder filler images and unrelated third-party decorative sites
const ALLOW_HOSTS = [
  'uks.kemendikdasmen.go.id',
  'is3.cloudhost.id',
  'i.ytimg.com',
];
const DROP_SUBSTR = ['mewarnai.id', 'kss-uks.mardawa.id'];

const filtered = Array.from(urls).filter(u => {
  if (DROP_SUBSTR.some(s => u.includes(s))) return false;
  try {
    const host = new URL(u).host;
    return ALLOW_HOSTS.includes(host);
  } catch { return false; }
});

fs.writeFileSync(new URL('./out/all-image-urls.txt', import.meta.url), filtered.sort().join('\n'), 'utf8');
console.log('total unique image urls kept:', filtered.length, '(from', urls.size, 'found)');

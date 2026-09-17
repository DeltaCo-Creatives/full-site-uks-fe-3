import fs from 'node:fs';

const raw = fs.readFileSync(new URL('./home-prod.json', import.meta.url), 'utf8');
const data = JSON.parse(raw);
const props = data.props;

const outDir = new URL('./out/', import.meta.url);
fs.mkdirSync(outDir, { recursive: true });

function write(name, obj) {
  fs.writeFileSync(new URL(name, outDir), JSON.stringify(obj, null, 2), 'utf8');
}

write('navItems.json', props.navItems);
write('appConfig.json', props.appConfig);
write('sliderData.json', props.sliderData);
write('programCards.json', props.programCards);
write('latestBerita.json', props.latestBerita);
write('latestPraktikBaik.json', props.latestPraktikBaik);
write('latestUptBercerita.json', props.latestUptBercerita);
write('sekolahSehatData.json', props.sekolahSehatData);
write('infografis.json', props.infografis);
write('bukuPanduan.json', props.bukuPanduan);
write('latestVideo.json', props.latestVideo);
write('clients.json', props.clients);
write('stats.json', props.stats);

// collect every image/file URL referenced anywhere in props
const urls = new Set();
function walk(v) {
  if (Array.isArray(v)) v.forEach(walk);
  else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  else if (typeof v === 'string' && /^https?:\/\//.test(v)) {
    if (/\.(png|jpe?g|webp|gif|svg|pdf)(\?|$)/i.test(v)) urls.add(v);
  }
}
walk(props);
fs.writeFileSync(new URL('image-urls.txt', outDir), Array.from(urls).sort().join('\n'), 'utf8');

console.log('nav items:', props.navItems.length);
console.log('image urls found:', urls.size);

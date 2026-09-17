import fs from 'node:fs';

const pages = JSON.parse(fs.readFileSync(new URL('./out-pages/pages.json', import.meta.url), 'utf8'));

function stripHtml(html) {
  if (typeof html !== 'string') return html;
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

let out = '';
for (const [path, val] of Object.entries(pages)) {
  out += `\n\n${'='.repeat(80)}\nPATH: ${path}\nCOMPONENT: ${val.component}\n${'='.repeat(80)}\n`;
  if (val.error) { out += `ERROR: ${val.error}\n`; continue; }
  const rest = val.rest;
  // Print all top-level keys with stripped/truncated values
  for (const [k, v] of Object.entries(rest)) {
    if (v == null) continue;
    let s;
    if (typeof v === 'string') s = stripHtml(v);
    else s = JSON.stringify(v, null, 1);
    if (s.length > 3000) s = s.slice(0, 3000) + '\n...[TRUNCATED]';
    out += `\n--- ${k} ---\n${s}\n`;
  }
}

fs.writeFileSync(new URL('./out-pages/pages-readable.txt', import.meta.url), out, 'utf8');
console.log('wrote', out.length, 'chars');

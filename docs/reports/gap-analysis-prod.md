# Gap analysis vs. production — what's still not implemented

**Date:** 2026-09-18
**Compares:** the current working tree (uncommitted changes on `rama/feat/setup-pages`) against `uks.kemendikdasmen.go.id`, using [`sitemap-prod-uks.MD`](../sitemaps/sitemap-prod-uks.MD) and [`content-inventory.md`](./content-inventory.md) as the base references, plus a handful of targeted live fetches for content that was never captured in `docs/` anywhere.

**Method:** this repo already had a 99-row content inventory dated 2026-09-17. The uncommitted changes on this branch turn out to have closed most of those rows already — Mitra, Stratifikasi, Search, and every homepage section that inventory flagged as mock are now real. This doc re-verifies that against the actual code (`src/content/**`, `src/routes/**`, `src/components/**`) and lists only what's genuinely still open, so it supersedes `content-inventory.md`'s status column without needing to re-litigate the rows it already resolved.

No new scraping was done for anything already documented in `docs/`. Live fetches (via a cheap Haiku agent) were limited to the 5 URLs below whose content had never been captured anywhere in this repo.

---

## Still not implemented

### 1. Gala Kreasi Video 2024 — winner announcements (real content gap)

Prod has two pages under the SAIH & Gala Kreasi section that [`saih-gala-kreasi.md`](../content-source/program/saih-gala-kreasi.md) never captured, and [`programPages`](../../src/content/pages/program.ts) (`saihGalaKreasiPage`) has no section for:

- **`/gala-kreasi/gala-kreasi-2024-pemenang`** — announcement page: an Instagram post link, a Google Drive doc with the winners list by school level, and an official decree PDF — **SK Pemenang Gala Kreasi Video GSS 2024** ([PDF](https://uks.kemendikdasmen.go.id/storage/manajemen_uks/files/produk_hukum/DXRUqW5K8kiaCOCm6aW29UNVK6uvVsQ3hSflYReR.pdf)).
- **`/gala-kreasi/gala-kreasi-2024-video-pemenang`** — a full table: school name, kabupaten/kota, provinsi, competition category, YouTube link and social-media link, per winning entry across school levels.

This is content-inventory's PR-08/PR-09 (previously "decide — loads on prod, not scraped"). It's now scraped and ready to build: add a `docGrid`/table block to `saihGalaKreasiPage` with the SK PDF, and a table block for the winners list (the table shape matches the existing `supportTable` block type used for Dukungan Mitra, so no new block type is needed).

### 2. FAQ (K-03)

Prod's `/faq` crashes with the same missing-component bug as `/kontak` (documented in `sitemap-prod-uks.MD`, issue #10) and was never linked from any nav, so there's no real source content to port. Currently `/faq` just redirects to `/kontak` ([`redirects.ts:89`](../../src/content/redirects.ts#L89)) — no FAQ content or page exists. This was already flagged as unsourced in `content-inventory.md` (K-03); still open. Decide: write FAQ content from scratch (a content-owner task, not a scrape gap), or leave the redirect as the intentional final state.

### 3. Kontak — pertanyaan form (K-02)

The rebuilt `/kontak` ([`kontak.ts`](../../src/content/pages/kontak.ts)) intentionally only ships address/email/phone (`contactBlock`) — no submission form. Prod's own Kontak page crashes, so there's no real form to replicate anyway; content-inventory flagged this as "decide" because a non-functional form (fake ticket IDs, no backend) would be worse than no form. Still open if a real form/backend becomes in scope.

### 4. Prod's long-form Trias pillar overview pages (T-01) — minor

Prod has three standalone overview pages, live-fetched for this report:

- `/program/pendidikan-kesehatan`, `/program/pelayanan-kesehatan`, `/program/pembinaan-lingkungan-sekolah-sehat`

Their content turns out to be a **rollup summary of the same 16 sub-programs already fully implemented** in [`uksm.ts`](../../src/content/pages/uksm.ts) (`triasPage`, sub-program IDs T-02…T-17 — literasi kesehatan, PHBS, imunisasi, sanitasi, etc., all present with full detail). The rebuild currently redirects these 3 prod URLs straight to `/uksm/trias#<anchor>` with a short dev-sourced intro paragraph per pillar instead of prod's longer framing paragraph. Given the substance is already covered in more detail than prod's overview pages have, this is low-priority — at most a slightly longer intro paragraph per pillar, not missing content.

### 5. Homepage stat band numbers (B-02) — content sourcing, not a build gap

`site.ts`'s `stats` (15.000+ sekolah binaan, 50.000+ dokter kecil, 25.000+ kader TIWISADA, 38 provinsi) still have no citation in either prod or dev source material — flagged as `decide` in content-inventory and unchanged. Not something scraping can resolve; prod's homepage doesn't show a stats strip at all (dev's does, uncited there too).

### 6. Footer — visitor counter widget (G-07) and old-domain link (G-08)

Prod's footer shows a live "Hari Ini / Minggu Ini / Bulan Ini / Total" visitor counter and a link to the legacy `pauddikdasmen.kemdikbud.go.id` domain. Neither is in the current [`Footer.tsx`](../../src/components/layout/Footer.tsx) — both were flagged `decide` in content-inventory (the counter needs a live backend/analytics source this static rebuild doesn't have; the old-domain link may not be worth restoring). Confirmed still absent; both are product decisions, not scrape gaps.

### 7. Stratifikasi rubric — SD/MI only

The full indicator rubric (`strataRubric` block) only covers jenjang SD/MI. This isn't a gap versus prod — prod has no stratifikasi content at all (it links out to `stratifikasiuks.org`). The SMP/SMA/PAUD rubric data was never rendered anywhere on dev either (it exists only in dev's CMS backend, unrendered — see `stratifikasi-uks-content.MD` line 175). Nothing to scrape; flagging only because it's a known content ceiling if the rubric UI is ever extended to other jenjang.

---

## Confirmed resolved since `content-inventory.md` (2026-09-17)

Verified directly against current code, not just inferred from git status:

| Area | Then | Now |
|---|---|---|
| Search (`G-03`) | 🔴 mock index | Real — [`registry.ts`](../../src/content/registry.ts) builds `searchIndex` from actual pages, berita, praktik baik, UPT stories, GSS focus sections, aplikasi, docs |
| Praktik Baik category filter (`PR-11`) | ⬜ add | Real, working `?kategori=` filter incl. ASRI and 7KAIH categories ([`NewsList.tsx`](../../src/components/blocks/NewsList.tsx)) |
| Mitra (`M-01`…`M-05`) | Mixed | Fully merged onto one page: Bentuk Kerja Sama, Kriteria, Pendaftaran (status note + CTA), Mitra Kami (partner marquee + year-by-year roster), Dukungan Mitra 2025 (real support table, 6 detailed + 14 name-only) |
| Stratifikasi (`S-01`…`S-06`) | Partial | Full journey + fungsi + definisi + SD/MI indicator rubric + calculation rule, all sourced |
| Berita/Praktik Baik/UPT/Agenda/Aplikasi homepage sections (`B-07`…`B-13`) | 🔴 mock/missing | All real and present in [`home.ts`](../../src/content/pages/home.ts) except Agenda (see below) |
| Homepage mitra + ministry logos (`B-14`, `B-15`) | ⬜ | Real partner marquee + ministry link grid, both present |
| Kontak address/email/phone (`K-01`) | 🔴 unsourced | Sourced via `site.ts`, consistent between Footer and Kontak page |

**Still genuinely mock, confirmed:** Agenda (`/informasi/agenda`) still shows the explicit placeholder copy "Kalender agenda untuk mockup ini belum diisi" — this was already known and isn't a new finding, just confirmed unchanged.

## Deliberately not built (matches prod's own gaps — not oversights)

- **Aktivitas Mitra (M-06), partner logo collage (M-07):** prod itself has neither in a form worth replicating (redundant/decorative).
- **Gala Kreasi 2025 "Pengumuman Pemenang" (PR-06):** prod's own page says "Konten belum tersedia" — correctly not built.
- **`/kontak`, `/faq`, `/sekolah-sehat` prod bugs:** all three crash or 404 on prod (see `sitemap-prod-uks.MD` issues #1, #4, #10). This rebuild deliberately fixes them rather than reproducing the bugs — `/kontak` and `/sekolah-sehat` are real working pages here.

---

## If prioritizing

1. **Gala Kreasi 2024 winners** — real, ready-to-use content captured above; smallest, most concrete gap left.
2. **FAQ** — needs a content-owner decision before it's buildable (no source copy exists anywhere, prod included).
3. Everything else above is either a content-sourcing decision (stats, footer counter) or already low-value (T-01's marginal intro-paragraph gap).

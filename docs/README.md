# docs/ — index

Everything here is grouped by what it *is*, not by when it was written. Nothing was deleted in this reorg — every file that existed before still exists, just under one of the three folders below. If a link anywhere still points at the old flat `docs/whatever.md` path, it's stale; the current path is under `sitemaps/`, `reports/`, or `content-source/`.

## Start here

If you only read one thing: **[`reports/gap-analysis-prod.md`](./reports/gap-analysis-prod.md)** — the current, up-to-date list of what's still not implemented versus the production site (`uks.kemendikdasmen.go.id`). It supersedes the status column in `content-inventory.md` below without needing to re-litigate the rows it already resolved.

## `sitemaps/` — site structure surveys

Live traces of the two reference sites' navigation and page structure, plus a diff between them.

| File | What it is |
|---|---|
| [`sitemap-prod-uks.MD`](./sitemaps/sitemap-prod-uks.MD) | `uks.kemendikdasmen.go.id` (production) nav tree + page-by-page notes |
| [`sitemap-dev-uks.MD`](./sitemaps/sitemap-dev-uks.MD) | `portal-uks.demo.or.id` (V2 redesign / dev) nav tree + page-by-page notes |
| [`comparison-sitemap.MD`](./sitemaps/comparison-sitemap.MD) | Dev vs. prod, side by side: what's the same, what's restructured, what's unique to each |
| [`sitemap-portal-uks.md`](./sitemaps/sitemap-portal-uks.md) | This project's *own* structure (the rebuild), used as the source of truth for `content-inventory.md`'s "new location" column |

## `reports/` — cross-cutting analysis

Synthesis documents that compare this project's actual code against the sitemaps and content-source material. Each one is a snapshot as of its stated date — check the date before trusting a status over what's in `reports/gap-analysis-prod.md` (the most recent).

| File | What it is |
|---|---|
| [`gap-analysis-prod.md`](./reports/gap-analysis-prod.md) | **Most current.** What's still genuinely missing vs. prod, re-verified against the actual code (2026-09-18) |
| [`content-inventory.md`](./reports/content-inventory.md) | The original 99-row content inventory (2026-09-17): every content unit, its source, and what action it needs |
| [`content-curation-report.md`](./reports/content-curation-report.md) | Line-by-line audit of an earlier JS-based version of the site against `content-source/` |
| [`curation-vs-dev-sitemap.md`](./reports/curation-vs-dev-sitemap.md) | This project vs. `sitemap-dev-uks.MD` specifically |
| [`implementation-plan-missing-from-dev.md`](./reports/implementation-plan-missing-from-dev.md) | Phased build plan for the items `curation-vs-dev-sitemap.md` flagged as missing entirely |

## `content-source/` — scraped ground-truth content, per topic

Verbatim page text scraped from the live sites, one subfolder per subject area. Each subfolder holds the raw per-page `.md` files plus (where they exist) an index/spec file and a curation log recording wording fixes and dead links found while porting the content in.

| Folder / file | Topic |
|---|---|
| [`kemitraan/`](./content-source/kemitraan/) | Mitra pages (panduan, pendaftaran, mitra kami, dukungan, sekolah sehat) + `kemitraan-curation.md` |
| [`profil-tata-kelola/`](./content-source/profil-tata-kelola/) | UKS/M profil & tata kelola pages (deskripsi, tujuan, sasaran, struktur, manajemen) + index (`profil-tata-kelola-content.MD`) + curation log |
| [`program/`](./content-source/program/) | 7KAIH, MBG, CKG, ASRI, SAIH & Gala Kreasi |
| [`sekolah-sehat/`](./content-source/sekolah-sehat/) | Gerakan Sekolah Sehat + 5 foci + bahan advokasi + index (`sekolah-sehat-content.MD`) + curation log |
| [`trias-uks-content.MD`](./content-source/trias-uks-content.MD) | Trias UKS/M sub-programs (single-file topic, no per-page split) |
| [`stratifikasi-uks-content.MD`](./content-source/stratifikasi-uks-content.MD) | Stratifikasi UKS/M rubric and strata definitions (single-file topic) |

## Why this structure

Before this reorg, `docs/` had 15 loose files at the root plus 4 subject folders, with several loose files (`*-content.MD`, `*-curation.md`) being companions to those same folders. This groups by function instead: survey the sites (`sitemaps/`), synthesize findings (`reports/`), or go to the raw source material (`content-source/`, now organized so each topic's index, curation log, and per-page files sit together instead of scattered at root).

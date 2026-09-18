// Program Prioritas — real content curated from docs/content-source/program/*.md (Portal UKS DEV
// /7kaih /mbg /ckg /asri) plus docs/content-source/program/saih-gala-kreasi.md and
// docs/reports/gap-analysis-prod.md for the SAIH & Gala Kreasi section kept under 7KAIH.
//
// PROGRAMS is consumed by Program.jsx (full overview pages), Home.jsx (program cards) and the
// search index — every item must keep the base fields `key`, `title`, `shortTitle`, `summary`,
// `image`, `color`; everything else is page-specific detail used only by Program.jsx.
import { sevenKaih } from './7kaih'
import { mbg } from './mbg'
import { ckg } from './ckg'
import { asri } from './asri'

export const PROGRAMS = [sevenKaih, mbg, ckg, asri]

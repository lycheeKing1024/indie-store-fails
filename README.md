# 独立站踩坑日报 / Indie Store Fails Daily

Bilingual (zh-first) directory of Shopify / indie-store fails and fixes.

Categories: checkout, ads, shipping, payments, apps.

## Run

```bash
cd /workspace/indie-store-fails
npm install
npm run dev
npm run build
```

## Deploy (Vercel free)

Import repo in Vercel or `npx vercel`. No env vars required. `*.vercel.app` OK.

## Daily update

Edit / append `src/data/fails.json` (scrape-ready schema). Commit → auto-deploy when linked.

## Routes

`/` · `/fails` · `/sponsor` · `/about`

Sponsor pricing TBD; no payment integration yet.

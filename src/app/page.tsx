"use client";
import Link from "next/link";
import { FailCard } from "@/components/FailCard";
import { SponsorSlot } from "@/components/SponsorSlot";
import { failCategories } from "@/data/categories";
import { fails } from "@/data/fails";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useI18n();
  const latest = [...fails].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:py-12">
      <section className="rounded-3xl bg-gradient-to-br from-rose-600 to-orange-600 px-6 py-10 text-white shadow-lg sm:px-10">
        <p className="text-sm font-semibold text-rose-100">{t("Shopify / 独立站", "Shopify / Indie")}</p>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{t(siteConfig.nameZh, siteConfig.nameEn)}</h1>
        <p className="mt-3 max-w-2xl text-rose-50">{t(siteConfig.taglineZh, siteConfig.taglineEn)}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/fails" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-rose-700">{t("浏览踩坑库", "Browse fails")}</Link>
          <Link href="/sponsor" className="rounded-xl border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold">{t("赞助位", "Sponsor")}</Link>
        </div>
      </section>

      <p className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-xs text-violet-900">
        {t(siteConfig.demoNoticeZh, siteConfig.demoNoticeEn)}
      </p>

      <section>
        <h2 className="mb-3 text-xl font-bold">{t("分类", "Categories")}</h2>
        <div className="flex flex-wrap gap-2">
          {failCategories.map((c) => (
            <Link key={c.id} href={`/fails?cat=${c.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-rose-200 hover:text-rose-700">
              {t(c.nameZh, c.nameEn)} <span className="text-slate-400">/ {t(c.nameEn, c.nameZh)}</span>
            </Link>
          ))}
        </div>
      </section>

      <SponsorSlot />

      <section>
        <div className="mb-4 flex justify-between">
          <h2 className="text-xl font-bold">{t("最新条目", "Latest")}</h2>
          <Link href="/fails" className="text-sm text-rose-600 hover:underline">{t("全部", "All")} →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">{latest.map((f) => <FailCard key={f.id} fail={f} />)}</div>
      </section>
    </div>
  );
}

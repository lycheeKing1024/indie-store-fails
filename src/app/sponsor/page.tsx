"use client";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export default function SponsorPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-extrabold">{t("赞助位说明", "Sponsor")}</h1>
      <p className="text-slate-600">{t("面向独立站卖家的踩坑日报流量。收款以后再说；价格 TBD。", "Traffic from indie-store operators. Payment later; pricing TBD.")}</p>
      <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-6">
        <p className="font-medium text-slate-800">{t(siteConfig.sponsorPricingNoteZh, siteConfig.sponsorPricingNoteEn)}</p>
        <a href={`mailto:${siteConfig.sponsorEmail}`} className="mt-4 inline-flex rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white">{siteConfig.sponsorEmail}</a>
      </div>
    </div>
  );
}

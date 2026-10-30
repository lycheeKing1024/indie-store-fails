"use client";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-extrabold">{t("关于", "About")}</h1>
      <p className="text-slate-700 leading-relaxed">
        {t(
          `${siteConfig.nameZh} 收集 Shopify/独立站常见翻车与修复，中英对照。数据在 JSON，方便每日抓取/routine 更新。`,
          `${siteConfig.nameEn} catalogs Shopify/indie fails & fixes, bilingual. JSON data is daily-scrape ready.`,
        )}
      </p>
      <p className="text-sm text-violet-800 bg-violet-50 rounded-xl px-4 py-3">{t(siteConfig.demoNoticeZh, siteConfig.demoNoticeEn)}</p>
    </div>
  );
}

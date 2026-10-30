"use client";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {t(siteConfig.nameZh, siteConfig.nameEn)}</p>
        <div className="flex gap-4">
          <Link href="/fails" className="hover:text-rose-700">{t("踩坑库", "Fails")}</Link>
          <Link href="/sponsor" className="hover:text-rose-700">{t("赞助", "Sponsor")}</Link>
          <Link href="/about" className="hover:text-rose-700">{t("关于", "About")}</Link>
        </div>
      </div>
    </footer>
  );
}

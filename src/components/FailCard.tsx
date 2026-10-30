"use client";
import { getFailCategory } from "@/data/categories";
import type { FailEntry } from "@/data/fails";
import { useI18n } from "@/lib/i18n";

const sevColor = {
  high: "bg-rose-100 text-rose-800",
  medium: "bg-amber-100 text-amber-800",
  low: "bg-slate-100 text-slate-700",
};

export function FailCard({ fail }: { fail: FailEntry }) {
  const { t } = useI18n();
  const cat = getFailCategory(fail.category);
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        {fail.demo && (
          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold uppercase text-violet-700">
            {t("演示/Demo", "Demo")}
          </span>
        )}
        {cat && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
            {t(cat.nameZh, cat.nameEn)}
          </span>
        )}
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${sevColor[fail.severity]}`}>
          {fail.severity}
        </span>
      </div>
      <h3 className="mt-2 text-base font-bold text-slate-900">{t(fail.titleZh, fail.titleEn)}</h3>
      <div className="mt-3 space-y-2 text-sm">
        <p className="rounded-lg bg-rose-50 px-3 py-2 text-rose-900">
          <span className="font-semibold">{t("踩坑", "Fail")}: </span>
          {t(fail.failZh, fail.failEn)}
        </p>
        <p className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-900">
          <span className="font-semibold">{t("修复", "Fix")}: </span>
          {t(fail.fixZh, fail.fixEn)}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {fail.platforms.map((p) => (
          <span key={p} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">{p}</span>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-400">{fail.date}</p>
    </article>
  );
}

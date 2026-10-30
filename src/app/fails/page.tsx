"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FailCard } from "@/components/FailCard";
import { failCategories } from "@/data/categories";
import { fails } from "@/data/fails";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import { Suspense } from "react";

function FailsInner() {
  const { t } = useI18n();
  const sp = useSearchParams();
  const cat = sp.get("cat");
  const list = useMemo(() => {
    const sorted = [...fails].sort((a, b) => b.date.localeCompare(a.date));
    if (!cat) return sorted;
    return sorted.filter((f) => f.category === cat);
  }, [cat]);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-extrabold">{t("踩坑库", "Fail directory")}</h1>
      <p className="text-sm text-violet-800 bg-violet-50 border border-violet-200 rounded-xl px-4 py-3">
        {t(siteConfig.demoNoticeZh, siteConfig.demoNoticeEn)}
      </p>
      <div className="flex flex-wrap gap-2">
        <Link href="/fails" className={`rounded-full px-3 py-1.5 text-sm font-medium ${!cat ? "bg-rose-600 text-white" : "bg-slate-100 text-slate-700"}`}>
          {t("全部", "All")}
        </Link>
        {failCategories.map((c) => (
          <Link key={c.id} href={`/fails?cat=${c.slug}`}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${cat === c.slug ? "bg-rose-600 text-white" : "bg-slate-100 text-slate-700"}`}>
            {t(c.nameZh, c.nameEn)}
          </Link>
        ))}
      </div>
      <p className="text-sm text-slate-500">{list.length} {t("条", "entries")}</p>
      <div className="grid gap-4 sm:grid-cols-2">{list.map((f) => <FailCard key={f.id} fail={f} />)}</div>
    </div>
  );
}

export default function FailsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-slate-500">Loading…</div>}>
      <FailsInner />
    </Suspense>
  );
}

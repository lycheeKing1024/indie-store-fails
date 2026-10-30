"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

const nav = [
  { href: "/", zh: "首页", en: "Home" },
  { href: "/fails", zh: "踩坑库", en: "Fails" },
  { href: "/sponsor", zh: "赞助", en: "Sponsor" },
  { href: "/about", zh: "关于", en: "About" },
];

export function Header() {
  const { locale, setLocale, t } = useI18n();
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-bold text-slate-900 hover:text-rose-700">
          {t(siteConfig.nameZh, siteConfig.nameEn)}
        </Link>
        <nav className="hidden gap-1 md:flex">
          {nav.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium ${active ? "bg-rose-50 text-rose-700" : "text-slate-600 hover:bg-slate-50"}`}>
                {t(n.zh, n.en)}
              </Link>
            );
          })}
        </nav>
        <div className="flex rounded-full border border-slate-200 bg-slate-50 p-0.5 text-xs font-semibold">
          <button type="button" onClick={() => setLocale("zh")} className={`rounded-full px-2.5 py-1 ${locale === "zh" ? "bg-white text-rose-700 shadow-sm" : "text-slate-500"}`}>中文</button>
          <button type="button" onClick={() => setLocale("en")} className={`rounded-full px-2.5 py-1 ${locale === "en" ? "bg-white text-rose-700 shadow-sm" : "text-slate-500"}`}>EN</button>
        </div>
      </div>
    </header>
  );
}

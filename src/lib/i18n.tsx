"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "zh" | "en";
type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (zh: string, en: string) => string };
const I18nContext = createContext<Ctx | null>(null);
const KEY = "isf-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");
  useEffect(() => {
    try {
      const s = localStorage.getItem(KEY) as Locale | null;
      if (s === "zh" || s === "en") setLocaleState(s);
    } catch { /* */ }
  }, []);
  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(KEY, l); } catch { /* */ }
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  }, []);
  const t = useCallback((zh: string, en: string) => (locale === "zh" ? zh : en), [locale]);
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n outside provider");
  return ctx;
}

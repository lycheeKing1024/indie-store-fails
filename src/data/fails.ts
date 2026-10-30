import raw from "./fails.json";
import type { FailCategoryId } from "./categories";

export type FailEntry = {
  id: string;
  demo: boolean;
  category: FailCategoryId;
  titleZh: string;
  titleEn: string;
  failZh: string;
  failEn: string;
  fixZh: string;
  fixEn: string;
  platforms: string[];
  severity: "low" | "medium" | "high";
  date: string;
  tags: string[];
};

export type FailsFile = {
  version: number;
  generatedAt: string;
  note: string;
  fails: FailEntry[];
};

export const failsData = raw as FailsFile;
export const fails = failsData.fails;

export function getFailsByCategory(category: FailCategoryId) {
  return fails.filter((f) => f.category === category);
}

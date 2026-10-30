export type FailCategoryId =
  | "checkout"
  | "ads"
  | "shipping"
  | "payments"
  | "apps";

export type FailCategory = {
  id: FailCategoryId;
  nameZh: string;
  nameEn: string;
  slug: string;
};

export const failCategories: FailCategory[] = [
  { id: "checkout", nameZh: "结账", nameEn: "Checkout", slug: "checkout" },
  { id: "ads", nameZh: "广告", nameEn: "Ads", slug: "ads" },
  { id: "shipping", nameZh: "物流", nameEn: "Shipping", slug: "shipping" },
  { id: "payments", nameZh: "支付", nameEn: "Payments", slug: "payments" },
  { id: "apps", nameZh: "应用", nameEn: "Apps", slug: "apps" },
];

export function getFailCategory(slug: string) {
  return failCategories.find((c) => c.slug === slug || c.id === slug);
}

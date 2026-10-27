export type PageLayout = "home" | "list" | "product" | "cart" | "account" | "form" | "content" | "dark";

export interface PageEntry {
  label: string;
  layout: PageLayout;
}

/** Large showcase (section 04). */
export const showcasePages: PageEntry[] = [
  { label: "صفحه اصلی", layout: "dark" },
  { label: "مجموعه محصولات", layout: "list" },
  { label: "صفحه محصول", layout: "product" },
  { label: "سبد خرید", layout: "cart" },
  { label: "حساب کاربری", layout: "account" },
];

/** Small thumbnails strip (section 10). */
export const galleryPages: PageEntry[] = [
  { label: "خانه", layout: "dark" },
  { label: "درباره ما", layout: "dark" },
  { label: "مجموعه", layout: "dark" },
  { label: "درباره ما", layout: "content" },
  { label: "تکنولوژی", layout: "content" },
  { label: "سفارش‌ها", layout: "list" },
  { label: "سبد خرید", layout: "cart" },
  { label: "حساب کاربری", layout: "account" },
  { label: "ورود/ثبت‌نام", layout: "form" },
  { label: "وبلاگ", layout: "content" },
  { label: "تماس با ما", layout: "form" },
];

import homeImg from "../assets/pages/detail1.png";
import listImg from "../assets/pages/list.png";
import productImg from "../assets/pages/product1.png";
import cartImg from "../assets/pages/cart.png";
import accountImg from "../assets/pages/account.png";

export type PageLayout = "home" | "list" | "product" | "cart" | "account" | "form" | "content" | "dark";

export interface PageEntry {
  label: string;
  layout: PageLayout;
  /** اگه عکس داشت به‌جای ScaledStorefront نمایش داده می‌شه */
  image?: string;
}

/** Large showcase (section 04). */
export const showcasePages: PageEntry[] = [
  { label: "صفحه اصلی", layout: "dark", image: homeImg },
  { label: "مجموعه محصولات", layout: "list", image: listImg },
  { label: "صفحه محصول", layout: "product", image: productImg },
  { label: "سبد خرید", layout: "cart", image: cartImg },
  { label: "حساب کاربری", layout: "account", image: accountImg },
];

/** Small thumbnails strip (section 10). */
export const galleryPages: PageEntry[] = [
  // بدون تغییر
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
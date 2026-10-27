import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Sparkles,
  Smartphone,
  PenTool,
  UserRound,
  CreditCard,
  ShoppingBag,
  LayoutGrid,
  Gem,
  LogIn,
  Languages,
  AlignRight,
} from "lucide-react";

export interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const valueFeatures: Feature[] = [
  { title: "ساختار آماده توسعه", desc: "کد تمیز و قابل شخصی‌سازی", icon: Code2 },
  { title: "تجربه کاربری سریع و تعاملی", desc: "انیمیشن‌های روان و حرفه‌ای", icon: Sparkles },
  { title: "واکنش‌گرا در تمام دستگاه‌ها", desc: "نمایش بی‌نقص در موبایل، تبلت و دسکتاپ", icon: Smartphone },
  { title: "طراحی حرفه‌ای", desc: "طراحی لوکس و مینیمال", icon: PenTool },
];

export const storeFeatures: Feature[] = [
  { title: "حساب کاربری", desc: "پروفایل و اطلاعات کاربر", icon: UserRound },
  { title: "تسویه حساب", desc: "فرایند تکمیل سفارش", icon: CreditCard },
  { title: "سبد خرید", desc: "سبد خرید زیبا و تعاملی", icon: ShoppingBag },
  { title: "گالری و دسته‌بندی", desc: "نمایش محصولات بی‌نهایت مدرن", icon: LayoutGrid },
  { title: "صفحه محصول اختصاصی", desc: "صفحه محصول حرفه‌ای و کامل", icon: Gem },
  { title: "ورود و ثبت‌نام", desc: "فرم‌های مدرن و امن", icon: LogIn },
  { title: "طراحی واکنش‌گرا", desc: "نمایش در همه دستگاه‌ها", icon: Smartphone },
  { title: "RTL و فارسی", desc: "کاملاً بهینه برای زبان فارسی", icon: Languages },
  { title: "انیمیشن‌های تعاملی", desc: "تعاملات روان و جذاب", icon: AlignRight },
];

export const included: string[] = [
  "سورس کامل پروژه",
  "ساختار مدرن Next.js",
  "طراحی Responsive",
  "انیمیشن‌ها و تعاملات",
  "صفحات فروشگاهی آماده",
  "قابلیت شخصی‌سازی",
  "نسخه فارسی و RTL",
  "فایل‌های فونت موردنیاز",
  "کامپوننت‌های قابل استفاده مجدد",
  "مستندات راه‌اندازی",
];

export const rtlChecklist: string[] = ["RTL کامل", "تایپوگرافی فارسی", "چیدمان راست‌چین", "Vazirmatn"];

export const techs: { name: string; mark: string }[] = [
  { name: "Next.js", mark: "N" },
  { name: "React", mark: "⚛" },
  { name: "TypeScript", mark: "TS" },
  { name: "Tailwind CSS", mark: "≈" },
  { name: "GSAP", mark: "G" },
  { name: "Framer Motion", mark: "F" },
  { name: "next-intl", mark: "i" },
];

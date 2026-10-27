/**
 * PARTO — hero configuration
 */
export interface HeroAssets {
  laptopScreen: string;
  mobileScreen: string;
  stoneBackground: string;
}

export const heroAssets: HeroAssets = {
  laptopScreen: "/images/hero/desktop-preview.png",
  mobileScreen: "/images/hero/mobile-preview.png",
  stoneBackground: "/images/hero/stone.png",
};

/** تنظیمات نمایش تصویر داخل دستگاه‌ها */
export const heroScreenOptions = {
  laptop: { fit: "cover" as "cover" | "contain", position: "top center" },
  mobile: { fit: "cover" as "cover" | "contain", position: "top center" },
};

/** 
 * تنظیمات موقعیت، کجی (زاویه 3D) و اندازه لپ‌تاپ و گوشی
 * این تنظیمات لپ‌تاپ را بالاتر روی سنگ قرار می‌دهد، آن را بزرگتر می‌کند و کجی زاویه‌دار (مشابه تصویر اول) به آن می‌دهد.
 */
export const heroDeviceStyles = {
  laptopContainer: {
    // بالا آوردن لپ‌تاپ روی سنگ و بزرگتر کردن آن
    transform: "translateY(-40px) scale(1.15) perspective(1000px) rotateY(-12deg) rotateX(4deg) rotateZ(2deg)",
    transformOrigin: "bottom center",
    zIndex: 10,
    transition: "transform 0.3s ease-in-out",
  },
  mobileContainer: {
    // موقعیت گوشی در کنار لپ‌تاپ روی سنگ
    transform: "translateY(-20px) perspective(1000px) rotateY(-8deg) rotateZ(-1deg)",
    zIndex: 20,
  }
};

export const DEMO_URL = "#demo";
export const PURCHASE_URL = "#purchase";

export const heroLinks = {
  demo: DEMO_URL,
  purchase: PURCHASE_URL,
  scrollTarget: "#features",
};

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "خانه", href: "#home" },
  { label: "امکانات", href: "#features" },
  { label: "صفحات قالب", href: "#pages" },
  { label: "تکنولوژی‌ها", href: "#tech" },
  { label: "سوالات متداول", href: "#faq" },
];

export const heroContent = {
  brand: "PARTO",
  eyebrow: "قالب فروشگاهی مدرن و حرفه‌ای",
  subtitle: "قالب فروشگاهی لوکس و مدرن",
  description:
    "با پرتو، فروشگاه اینترنتی خود را متفاوت آغاز کنید. یک قالب فروشگاهی مدرن، سریع و واکنش‌گرا با تجربه کاربری حرفه‌ای، طراحی چشم‌نواز و امکاناتی که برای فروش بیشتر نیاز دارید.",
  primaryCta: "مشاهده دموی زنده",
  secondaryCta: "خرید قالب",
  headerCta: "خرید قالب",
  scrollLabel: "اسکرول کنید",
};

export const heroAlt = {
  laptop: "پیش‌نمایش نسخه دسکتاپ قالب پرتو",
  mobile: "پیش‌نمایش نسخه موبایل قالب پرتو",
  laptopPlaceholder: "پیش‌نمایش دسکتاپ",
  mobilePlaceholder: "پیش‌نمایش موبایل",
};

import homeImg from "../assets/pages/detail1.png";
import listImg from "../assets/pages/list.png";
import productImg from "../assets/pages/product1.png";
import cartImg from "../assets/pages/cart.png";
import accountImg from "../assets/pages/signup.png";

// عکس‌های ۱۰ صفحه‌ی پروژه‌ی خودت
import galleryHomeImg from "../assets/pages/home.png";
import aboutImg from "../assets/pages/about.png";
import collectionImg from "../assets/pages/collection.png";
import checkoutImg from "../assets/pages/chekout.png";
import profileImg from "../assets/pages/blog.png";
import ordersImg from "../assets/pages/order.png";
import galleryImg from "../assets/pages/gallery.png";
import whishImg from "../assets/pages/wishlist.png";
import loginImg from "../assets/pages/rev.png";
import signupImg from "../assets/pages/signup.png";
export type PageLayout =
  | "home"
  | "list"
  | "product"
  | "cart"
  | "account"
  | "form"
  | "content"
  | "dark"
  | "editorial";

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
  { label: "خانه", layout: "dark", image: galleryHomeImg },
  { label: "درباره ما", layout: "dark", image: aboutImg },
  { label: "مجموعه", layout: "dark", image: collectionImg },
  { label: "404 ", layout: "content", image:checkoutImg },
  { label: "حساب کاربری", layout: "content", image: profileImg },
  { label: "سفارش‌ها", layout: "list", image: ordersImg },
  { label: "گالری", layout: "list", image: galleryImg },
  { label: "سبد خرید", layout: "cart", image: cartImg },
  { label: "علاقمندی ها", layout: "account", image: whishImg },
  { label: "نظرات مشتریان", layout: "form", image: loginImg },
  { label: "ثبت نام", layout: "content", image: signupImg},
];
export const pageList: string[] = [
  "صفحه اصلی",
  "مجموعه محصولات",
  "صفحه محصول",
  "سبد خرید",
  "حساب کاربری",
  "درباره ما",
  "ورود و ثبت‌نام",
  "علاقه‌مندی‌ها",
  "سفارش‌ها",
  "گالری محصولات",
  "تسویه حساب",
];
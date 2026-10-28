
import homeImg from "../assets/pages/detail1.png";
import listImg from "../assets/pages/list.png";
import productImg from "../assets/pages/product1.png";
import cartImg from "../assets/pages/cart.png";
import accountImg from "../assets/pages/account.png";

// عکس‌های ۱۰ صفحه‌ی پروژه‌ی خودت
import galleryHomeImg from "../assets/pages/home.jpg";
import aboutImg from "../assets/pages/about.jpg";
import collectionImg from "../assets/pages/collection.jpg";
import checkoutImg from "../assets/pages/checkout.jpg";
import profileImg from "../assets/pages/profile.jpg";
import ordersImg from "../assets/pages/order.jpg";
import galleryImg from "../assets/pages/gallery.jpg";
import whishImg from "../assets/pages/whishlist.jpg";
import loginImg from "../assets/pages/login.jpg";
import signupImg from "../assets/pages/signup.jpg";
export type PageLayout =
  | "home"
  | "list"
  | "product"
  | "cart"
  | "account"
  | "form"
  | "content"
  | "dark";

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
  { label: "چک لیست", layout: "content", image:checkoutImg },
  { label: "حساب کاربری", layout: "content", image: profileImg },
  { label: "سفارش‌ها", layout: "list", image: ordersImg },
  { label: "گالری", layout: "list", image: galleryImg },
  { label: "سبد خرید", layout: "cart", image: cartImg },
  { label: "علاقمندی ها", layout: "account", image: whishImg },
  { label: "ورود", layout: "form", image: loginImg },
  { label: "ثبت نام", layout: "content", image: signupImg},
];

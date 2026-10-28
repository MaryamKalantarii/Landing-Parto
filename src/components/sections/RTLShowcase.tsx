import { useMemo, useState } from "react";
import {
  Search,
  ArrowUpLeft,
  Sparkles,
  SlidersHorizontal,
  X,
  Check,
  Smartphone,
  Monitor,
  ArrowLeft,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  image: string;
  icon: string;
  badge?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "عطر نوا",
    category: "عطر و ادکلن",
    price: 1850000,
    color: "from-[#e7d9c6] to-[#b69a79]",
    image: "/images/products/perfume-nova.png",
    icon: "✧",
    badge: "پرفروش",
  },
  {
    id: 2,
    name: "کیف آوید",
    category: "اکسسوری",
    price: 2450000,
    color: "from-[#d8c6b5] to-[#8c6b54]",
    image: "/images/products/bag-avid.png",
    icon: "◈",
  },
  {
    id: 3,
    name: "ساعت ماهور",
    category: "اکسسوری",
    price: 3200000,
    color: "from-[#e9e3d7] to-[#b5a58e]",
    image: "/images/products/watch-mahoor.png",
    icon: "◉",
    badge: "جدید",
  },
  {
    id: 4,
    name: "عطر لیان",
    category: "عطر و ادکلن",
    price: 1650000,
    color: "from-[#c9b39a] to-[#735b45]",
    image: "/images/products/perfume-lian.png",
    icon: "✦",
  },
  {
    id: 5,
    name: "کرم آریسا",
    category: "زیبایی",
    price: 890000,
    color: "from-[#ead9d0] to-[#bd978b]",
    image: "/images/products/cream-arisa.png",
    icon: "❋",
  },
  {
    id: 6,
    name: "عینک راد",
    category: "اکسسوری",
    price: 1250000,
    color: "from-[#b7ada0] to-[#5e554d]",
    image: "/images/products/glasses-rad.png",
    icon: "◇",
  },
];

const categories = [
  "همه",
  "عطر و ادکلن",
  "اکسسوری",
  "زیبایی",
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price) + " تومان";

export default function PartoInteractiveDemo() {
  const [category, setCategory] = useState("همه");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "همه" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <section
      id="parto-demo"
      dir="rtl"
      className="relative overflow-hidden bg-[#f4f0e9] px-4 py-20 text-[#25221e] sm:px-8 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#d9c5a8]/20 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Interactive Store Preview */}
        <div className="order-2 min-w-0 lg:order-1">
          <div className="mx-auto max-w-[650px] overflow-hidden rounded-2xl border border-[#d9d0c4] bg-[#fcfaf7] shadow-[0_30px_90px_-35px_rgba(49,37,25,0.25)]">
            {/* Browser Header */}
            <div className="flex h-12 items-center justify-between border-b border-[#e7e0d7] px-4 sm:px-5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#d5b7aa]" />
                <span className="h-2 w-2 rounded-full bg-[#ddcba8]" />
                <span className="h-2 w-2 rounded-full bg-[#b9c6b0]" />
              </div>

              <span className="text-[10px] tracking-[0.35em] text-[#a29382]">
                PARTO STUDIO
              </span>

              <Sparkles
                size={16}
                strokeWidth={1.3}
                className="text-[#a78a66]"
              />
            </div>

            {/* Store Content */}
            <div className="px-4 pb-5 pt-5 sm:px-6">
              <div className="mb-5 flex items-end justify-between gap-3">
                <div>
                  <p className="mb-1 text-[10px] text-[#9a8876]">
                    مجموعه منتخب پرتو
                  </p>

                  <h3 className="text-xl font-medium sm:text-2xl">
                    انتخابی برای سلیقه‌ی شما
                  </h3>
                </div>

                <Sparkles
                  size={20}
                  strokeWidth={1.3}
                  className="mb-1 text-[#a78a66]"
                />
              </div>

              {/* Search */}
              <div className="flex items-center gap-2 rounded-xl border border-[#e8e0d6] bg-white px-3">
                <Search
                  size={15}
                  className="shrink-0 text-[#a39788]"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="جست‌وجوی محصول..."
                  aria-label="جست‌وجوی محصول"
                  className="h-10 min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#b6aca0]"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="پاک کردن جست‌وجو"
                    className="text-[#8d8071]"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
                <SlidersHorizontal
                  size={15}
                  className="shrink-0 text-[#9a8876]"
                />

                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`shrink-0 rounded-full px-3 py-2 text-[10px] transition-all duration-200 ${
                      category === item
                        ? "bg-[#302b25] text-white"
                        : "border border-[#e8e0d6] bg-white text-[#766b5e] hover:border-[#b5a18a]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Products */}
              <div
                className={`mt-5 grid gap-3 ${
                  view === "mobile"
                    ? "grid-cols-2"
                    : "grid-cols-2 sm:grid-cols-3"
                }`}
              >
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group min-w-0 overflow-hidden rounded-xl border border-[#eee7de] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      aria-label={`مشاهده ${product.name}`}
                      className={`relative flex aspect-[1.12/1] w-full items-center justify-center overflow-hidden bg-gradient-to-br ${product.color}`}
                    >
                      {/* Placeholder icon behind the image */}
                      <span className="text-6xl text-white/80 drop-shadow-md">
                        {product.icon}
                      </span>

                      {/* Real product image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {product.badge && (
                        <span className="absolute right-2 top-2 rounded-full bg-[#fcfaf7]/90 px-2 py-1 text-[9px] text-[#64513d]">
                          {product.badge}
                        </span>
                      )}

                      <span className="absolute bottom-2 left-2 grid h-7 w-7 translate-y-2 place-items-center rounded-full bg-white/90 text-[#40362b] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpLeft size={15} />
                      </span>
                    </button>

                    <div className="p-3">
                      <p className="truncate text-xs font-medium">
                        {product.name}
                      </p>

                      <p className="mt-1 text-[9px] text-[#9b8e80]">
                        {product.category}
                      </p>

                      <div className="mt-3 flex items-center justify-between gap-1">
                        <span className="text-[10px] font-medium sm:text-[11px]">
                          {new Intl.NumberFormat("fa-IR").format(
                            product.price
                          )}

                          <span className="mr-1 text-[9px] text-[#9b8e80]">
                            تومان
                          </span>
                        </span>

                        <span
                          aria-hidden="true"
                          className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-[#e8e0d6] text-[#8b7054] transition group-hover:bg-[#302b25] group-hover:text-white"
                        >
                          <ArrowUpLeft size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="py-12 text-center text-sm text-[#928474]">
                  محصولی با این مشخصات پیدا نشد.
                </div>
              )}

              {/* Preview Footer */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e9e1d7] pt-4">
                <div className="flex items-center gap-2 text-[10px] text-[#948575]">
                  <Check size={14} />
                  <span>پیش‌نمایش تعاملی فروشگاه</span>
                </div>

                <div className="flex items-center gap-1 rounded-lg border border-[#e8e0d6] p-1">
                  <button
                    type="button"
                    onClick={() => setView("desktop")}
                    aria-label="نمای دسکتاپ"
                    className={`rounded-md p-1.5 transition ${
                      view === "desktop"
                        ? "bg-[#302b25] text-white"
                        : "text-[#8d8071] hover:bg-[#eee7dd]"
                    }`}
                  >
                    <Monitor size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setView("mobile")}
                    aria-label="نمای موبایل"
                    className={`rounded-md p-1.5 transition ${
                      view === "mobile"
                        ? "bg-[#302b25] text-white"
                        : "text-[#8d8071] hover:bg-[#eee7dd]"
                    }`}
                  >
                    <Smartphone size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-[10px] text-[#968879]">
            برای مشاهده‌ی جزئیات، روی هر محصول کلیک کن.
          </p>
        </div>

        {/* Introduction */}
        <div className="order-1 text-right lg:order-2">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9cbbb] bg-white/60 px-3 py-2 text-[10px] text-[#7f6a53]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9b8060]" />
            تجربه‌ای فراتر از یک قالب
          </div>

          <h2 className="text-3xl font-semibold leading-[1.7] tracking-tight sm:text-4xl lg:text-[42px]">
            قبل از خرید،
            <br />
            <span className="font-normal text-[#9a7b58]">
              خودت امتحانش کن.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-8 text-[#82786d]">
            با پیش‌نمایش تعاملی پرتو کار کن؛ محصولات را جست‌وجو کن،
            دسته‌بندی‌ها را تغییر بده و جزئیات محصولات را ببین.
            کیفیت یک قالب را باید در عملکردش دید، نه فقط در تصاویرش.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "جست‌وجوی تعاملی محصولات",
              "فیلتر دسته‌بندی و نمایش نتایج",
              "نمایش جزئیات و تصاویر محصولات",
              "پیش‌نمایش چیدمان در حالت موبایل",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-sm text-[#51483e]"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#d8c7b2] text-[#8e7659]">
                  <Check size={13} />
                </span>

                {feature}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              document.getElementById("parto-demo")?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#302b25] px-6 py-3.5 text-xs text-white transition-all duration-300 hover:bg-[#80674d]"
          >
            تجربه‌ی فروشگاه
            <ArrowLeft size={15} />
          </button>

          <p className="mt-4 text-[10px] text-[#a29688]">
            پیش‌نمایش تعاملی قالب پرتو
          </p>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div
            dir="rtl"
            className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-[#fcfaf7] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="بستن جزئیات محصول"
              className="absolute left-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#302b25] transition hover:bg-white"
            >
              <X size={18} />
            </button>

            <div
              className={`relative flex aspect-[1.3/1] items-center justify-center overflow-hidden bg-gradient-to-br ${selectedProduct.color}`}
            >
              <span className="text-8xl text-white/80 drop-shadow-lg">
                {selectedProduct.icon}
              </span>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-xs text-[#9a8876]">
                {selectedProduct.category}
              </p>

              <h3 className="mt-2 text-xl font-medium">
                {selectedProduct.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#82786d]">
                جزئیات این محصول را در پیش‌نمایش پرتو بررسی کن؛
                طراحی ساده، چیدمان منظم و تجربه‌ای یکپارچه برای
                مشاهده‌ی محصولات.
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">
                  {formatPrice(selectedProduct.price)}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#302b25] px-5 py-3 text-xs text-white transition hover:bg-[#80674d]"
                >
                  بازگشت به محصولات
                  <ArrowLeft size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
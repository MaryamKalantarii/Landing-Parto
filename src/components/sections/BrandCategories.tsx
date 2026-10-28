import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";
import IncludedFeatures from "./IncludedFeatures";
import { stopScroll, startScroll } from "../../hooks/useLenis";
import type { ArtKind } from "../../config/assets";

const ease = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * 🖼️ عکس‌ها را داخل public/images/brands/ بگذار (نسبت 4:5 بهتر است، مثلاً 1200×1500).
 * اگر عکسی پیدا نشود، به‌جایش همان Art قبلی نمایش داده می‌شود.
 * توضیح هر دسته را هم از همین‌جا می‌توانی عوض کنی.
 */
const cats: {
  label: string;
  desc: string;
  src: string;
  kind: ArtKind;
}[] = [

  {
    label: "عطر و ادکلن",
    desc: "عطرها و ادکلن‌های خاص با فضایی ظریف و مینیمال؛ برای نمایش رایحه‌ها، شخصیت برند و تجربه‌ای متمایز از خرید.",
    src: "/images/brands/atr.png",
    kind: "ring",
  },
  {
    label: "ساعت و اکسسوری",
    desc: "از ساعت‌های کلاسیک تا اکسسوری‌های مدرن؛ با طراحی دقیق و چیدمانی حرفه‌ای برای نمایش جزئیات و ظرافت هر محصول.",
    src: "/images/brands/saat.png",
    kind: "fabric",
  },
  {
    label: "محصولات لوکس",
    desc: "محصولات پریمیوم و انتخاب‌های خاص با طراحی بصری شیک؛ برای برندهایی که کیفیت، اصالت و تجربه خرید متفاوت را در اولویت دارند.",
    src: "/images/brands/luxury.png",
    kind: "perfume",
  },
  {
    label: "طلا و جواهرات",
    desc: "از طلا و جواهرات ظریف تا قطعات خاص و دست‌ساز؛ با فضایی مینیمال که درخشش، ظرافت و جزئیات هر قطعه را برجسته می‌کند.",
    src: "/images/brands/tala.png",
    kind: "interior",
  },
  {
    label: "دکور و سبک زندگی",
    desc: "از اکسسوری‌های خانه تا محصولات دکوراتیو و کاربردی؛ با فضایی گرم و هماهنگ برای نمایش زیبایی و کاربرد هر انتخاب.",
    src: "/images/brands/decor.png",
    kind: "interior",
  },
  {
    label: "پوشاک",
    desc: "از استایل روزمره تا کالکشن‌های خاص؛ با تمرکز بر نمایش لباس‌ها، ترکیب استایل‌ها و جزئیاتی که هویت هر برند را شکل می‌دهند.",
    src: "/images/brands/pooshak.png",
    kind: "watch",
  },
]



/** عکس با جایگزین Art در صورت نبودن فایل */
function Cover({
  index,
  className = "",
}: {
  index: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const c = cats[index];

  if (failed) return <Art kind={c.kind} className={className} />;

  return (
    <img
      src={c.src}
      alt={c.label}
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

function Lightbox({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const c = cats[index];

  const next = useCallback(
    () => onChange((index + 1) % cats.length),
    [index, onChange],
  );
  const prev = useCallback(
    () => onChange((index - 1 + cats.length) % cats.length),
    [index, onChange],
  );

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    stopScroll();
    closeRef.current?.focus();
    return () => {
      startScroll();
      prevFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, next, prev]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={c.label}
      dir="rtl"
      className="on-dark fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 10, opacity: 0 }}
        transition={{ duration: 0.5, ease }}
        className="relative w-full max-w-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Big image */}
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              <Cover
                index={index}
                className="aspect-[4/5] max-h-[68vh] w-full"
              />
            </motion.div>
          </AnimatePresence>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
          />

          <button
            ref={closeRef}
            type="button"
            aria-label="بستن"
            onClick={onClose}
            className="absolute end-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/80"
          >
            <X size={18} />
          </button>

          <span className="absolute start-4 top-4 rounded-full bg-black/45 px-3 py-1 text-[10px] tracking-[0.12em] text-white/80 backdrop-blur">
            {pad(index + 1)} / {pad(cats.length)}
          </span>
        </div>

        {/* Caption */}
        <div className="mt-3 rounded-[18px] border border-white/10 bg-[#35352F]/95 p-5 text-[#F5F2EC] backdrop-blur">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease }}
            >
              <span className="mb-3 block h-px w-8 bg-[#C8B79C]" />
              <h3 className="text-[20px] font-medium leading-[1.6] tracking-[-0.02em]">
                {c.label}
              </h3>
              <p className="mt-1 text-[12.5px] leading-[2] text-white/65">
                {c.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex items-center gap-1.5" aria-hidden>
              {cats.map((_, i) => (
                <span
                  key={i}
                  className={[
                    "h-1 rounded-full transition-all duration-500",
                    i === index ? "w-6 bg-[#C8B79C]" : "w-1.5 bg-white/25",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="قبلی"
                onClick={prev}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                aria-label="بعدی"
                onClick={next}
                className="grid h-9 w-9 place-items-center rounded-full bg-[#C8B79C] text-[#1d1c18] transition-colors hover:bg-[#d8c9b0]"
              >
                <ChevronLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BrandCategories() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="relative overflow-hidden border-t border-line bg-paper py-16 md:py-20">
      <Container className="grid items-stretch gap-5 lg:grid-cols-[1fr_1.05fr]">
        <IncludedFeatures />

        {/* Brands card (dark) */}
        <Reveal
          stagger={0.07}
          className="relative h-full overflow-hidden rounded-[22px] border border-[#35352F] bg-[#35352F] p-6 text-[#F5F2EC] shadow-[0_40px_80px_-40px_rgba(41,40,34,0.6)] md:p-9"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8B79C]/20 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -left-3 select-none text-[220px] font-light leading-none tracking-[-0.1em] text-white/[0.04]"
          >
            {pad(cats.length)}
          </span>

          <div className="relative">
            <div data-reveal className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C8B79C]" />
              <span className="text-[11px] tracking-[0.1em] text-[#C8B79C]">
                FOR BRANDS / 05
              </span>
            </div>

            <h2
              data-reveal
              className="text-[24px] font-medium leading-[1.6] tracking-[-0.035em] md:text-[30px]"
            >
              مناسب برای{" "}
              <span className="text-[#C8B79C]">چه برندهایی؟</span>
            </h2>
            <p data-reveal className="mt-2 text-[12px] leading-7 text-white/55">
              برای انواع کسب‌وکارهای محصول‌محور پریمیوم مناسب است. روی هر عکس
              کلیک کن تا بزرگ شود.
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cats.map((c, i) => (
                <li key={c.label} data-reveal>
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-label={`مشاهده بزرگ‌تر: ${c.label}`}
                    className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-[14px] border border-white/10 bg-black/20 text-start outline-none focus-visible:ring-2 focus-visible:ring-[#C8B79C]"
                  >
                    <Cover
                      index={i}
                      className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                    />

                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                    />

                    <span className="absolute right-3 top-3 text-[10px] tracking-[0.12em] text-white/70">
                      / {pad(i + 1)}
                    </span>

                    {/* zoom hint */}
                    <span className="absolute left-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                      <Maximize2 size={12} />
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <span className="mb-2 block h-px w-5 bg-[#C8B79C] transition-all duration-500 group-hover:w-10" />
                      <p className="text-[12px] font-medium leading-5 text-white">
                        {c.label}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>

      <AnimatePresence>
        {open !== null && (
          <Lightbox index={open} onChange={setOpen} onClose={close} />
        )}
      </AnimatePresence>
    </section>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { ChevronsLeftRight, MoveHorizontal } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { ScaledStorefront } from "../ui/Storefront";

/**
 * 🖼️ عکس‌ها را داخل public/images/before-after/ بگذار:
 *   before.jpg  ← عکس «قبل»
 *   after.jpg   ← عکس «بعد»
 * هر دو باید هم‌اندازه و با نسبت 16:10 باشند (مثلاً 1600×1000) تا دقیق روی هم بیفتند.
 * اگر فایلی پیدا نشود، خودکار همان پیش‌نمایش‌های قبلی (ScaledStorefront) نمایش داده می‌شوند.
 */
const BEFORE_IMG = "/images/before-after/before.jpg";
const AFTER_IMG = "/images/before-after/after.jpg";

/**
 * نسبت (عرض / ارتفاع) عکس‌هایت. مثلاً اگر عکس‌ها 1920×1080 هستند "16 / 9" بنویس،
 * اگر 1600×1000 هستند "16 / 10". هرچه دقیق‌تر باشد، عکس بدون برش جا می‌شود.
 */
const ASPECT = "16 / 9";

const swatches = ["#292822", "#A28E73", "#C8B79C", "#EBE7DF", "#8B3A3A"];

function Layer({
  src,
  alt,
  layout,
}: {
  src: string;
  alt: string;
  layout: "product" | "dark";
}) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        draggable={false}
        onError={() => setFailed(true)}
        className="absolute inset-0 h-full w-full select-none object-cover object-top"
      />
    );
  }

  return (
    <div className="absolute inset-0 select-none overflow-hidden">
      <ScaledStorefront layout={layout} />
    </div>
  );
}

function Compare() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.5 });
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const touched = useRef(false);

  // افکت کوتاه معرفی: یک بار می‌رود و برمی‌گردد
  useEffect(() => {
    if (!inView || reduced) return;
    let stop = false;
    const a = animate(50, 30, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
      onUpdate: (v) => !touched.current && !stop && setPos(v),
      onComplete: () => {
        if (touched.current) return;
        animate(30, 50, {
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => !touched.current && !stop && setPos(v),
        });
      },
    });
    return () => {
      stop = true;
      a.stop();
    };
  }, [inView, reduced]);

  const move = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  }, []);

  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-[#A78F70]/20 blur-3xl"
      />

      {/* browser frame */}
      <div className="overflow-hidden rounded-[18px] border border-[#292822]/15 bg-[#1d1c18] shadow-[0_50px_90px_-40px_rgba(41,40,34,0.65)]">
        <div dir="ltr" className="flex items-center gap-3 px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="mx-auto flex h-6 w-[55%] items-center justify-center rounded-full bg-white/[0.07] text-[10px] tracking-[0.08em] text-white/45">
            your-brand.com
          </div>
          <span className="w-9" aria-hidden />
        </div>

        {/* slider */}
        <div
          ref={wrapRef}
          dir="ltr"
          role="slider"
          tabIndex={0}
          aria-label="مقایسه‌ی قبل و بعد"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onPointerDown={(e) => {
            touched.current = true;
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && move(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              touched.current = true;
              setPos((p) => Math.max(4, p - 5));
            }
            if (e.key === "ArrowRight") {
              touched.current = true;
              setPos((p) => Math.min(96, p + 5));
            }
          }}
          style={{ aspectRatio: ASPECT }}
          className="relative w-full cursor-ew-resize touch-pan-y overflow-hidden bg-[#EBE7DF] outline-none focus-visible:ring-2 focus-visible:ring-[#C8B79C]"
        >
          {/* BEFORE (base, visible on the right) */}
          <Layer src={BEFORE_IMG} alt="قبل" layout="product" />

          {/* AFTER (top, revealed from the left) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Layer src={AFTER_IMG} alt="بعد" layout="dark" />
          </div>

          {/* labels */}
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] tracking-[0.14em] text-white backdrop-blur">
            AFTER
          </span>
          <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[10px] tracking-[0.14em] text-[#292822] backdrop-blur">
            BEFORE
          </span>

          {/* divider + handle */}
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.35)]"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-[#292822] shadow-xl backdrop-blur">
              <ChevronsLeftRight size={18} strokeWidth={1.4} />
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-[11px] tracking-[0.04em] text-[#8B785F]">
        <MoveHorizontal size={13} strokeWidth={1.4} aria-hidden />
        دستگیره را بکش تا تفاوت را ببینی
      </p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <Reveal
      as="section"
      className="relative overflow-hidden border-t border-line bg-paper py-16 md:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-10">
        <div>
          <div data-reveal className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#A78F70]" />
            <span className="text-[11px] tracking-[0.1em] text-[#A28E73]">
              CUSTOMIZE / 06
            </span>
          </div>

          <h2
            data-reveal
            className="text-[clamp(26px,3vw,40px)] font-medium leading-[1.55] tracking-[-0.04em]"
          >
            ظاهر برندت را{" "}
            <span className="text-[#A28E73]">جایگزین کن.</span>
          </h2>

          <p
            data-reveal
            className="mt-4 max-w-sm text-[13px] leading-[2] text-mute"
          >
            پرتو کاملاً قابل شخصی‌سازی است و زیبایی‌های آن را می‌توانید با
            رنگ‌ها و فونت‌های برند خودتان هماهنگ کنید.
          </p>

          {/* brand tokens */}
          <div data-reveal className="mt-8 flex items-center gap-5">
            <div className="flex items-center" aria-hidden>
              {swatches.map((c, i) => (
                <span
                  key={c}
                  className="-ms-2 h-9 w-9 rounded-full border-2 border-paper shadow-sm first:ms-0"
                  style={{ backgroundColor: c, zIndex: swatches.length - i }}
                />
              ))}
            </div>
            <span className="h-8 w-px bg-[#292822]/15" aria-hidden />
            <div
              className="flex items-baseline gap-1 text-[#292822]"
              aria-hidden
            >
              <span className="text-[30px] font-medium leading-none">Aa</span>
              <span className="text-[30px] font-light leading-none text-[#A28E73]">
                آب
              </span>
            </div>
          </div>

          <ul data-reveal className="mt-8 space-y-3 text-[12.5px] text-[#3a382f]">
            {["رنگ‌های اختصاصی برند", "فونت و تایپوگرافی دل‌خواه"].map(
              (t, i) => (
                <li
                  key={t}
                  className="flex items-center gap-3 border-b border-[#292822]/10 pb-3"
                >
                  <span className="text-[10px] tracking-[0.12em] text-[#A28E73]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        <div data-reveal>
          <Compare />
        </div>
      </Container>
    </Reveal>
  );
}

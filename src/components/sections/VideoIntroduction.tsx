import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Play, X } from "lucide-react";
import Container from "../layout/Container";
import FeaturesGrid from "./FeaturesGrid";
import { siteConfig } from "../../config/site";
import { stopScroll, startScroll } from "../../hooks/useLenis";

const ease = [0.22, 1, 0.36, 1] as const;

// مسیر عکس کاور: فایل را داخل public/images/ بگذار (نسبت 16:9 بهتر است)
const VIDEO_COVER = "/images/video.png";

function VideoModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    stopScroll();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      startScroll();
      prev?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="ویدیوی معرفی قالب"
      className="on-dark fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.4, ease }}
        className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-[18px] bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {siteConfig.videoSrc ? (
          <video src={siteConfig.videoSrc} poster={VIDEO_COVER} controls autoPlay playsInline className="h-full w-full" />
        ) : (
          <div className="grid h-full place-items-center p-8 text-center text-white/80">
            <p className="text-sm leading-7">
              هنوز ویدیویی تنظیم نشده است.
              <br />
              مسیر ویدیو را در <code dir="ltr" className="rounded bg-white/10 px-1.5">src/config/site.ts</code> در بخش <code dir="ltr" className="rounded bg-white/10 px-1.5">videoSrc</code> قرار دهید.
            </p>
          </div>
        )}
        <button
          ref={closeRef}
          type="button"
          aria-label="بستن ویدیو"
          onClick={onClose}
          className="absolute end-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
        >
          <X size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function VideoIntroduction() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <>
      <FeaturesGrid />

      <section id="video" className="bg-ivory pb-16 pt-4 md:pb-20">
        <Container>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="on-dark relative mx-auto max-w-[1040px] overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-[#26241F] via-[#171613] to-[#0F0E0C] p-6 text-white shadow-[0_40px_90px_-40px_rgba(20,18,12,0.7)] md:p-9"
          >
            {/* glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8B79C]/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#A78F70]/15 blur-3xl"
            />
            {/* subtle grid texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:44px_44px]"
            />

            <div className="relative grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
              {/* Text */}
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-px w-8 bg-[#C8B79C]" />
                  <span className="text-[11px] tracking-[0.1em] text-[#C8B79C]">
                    VIDEO / 02
                  </span>
                </div>

                <h3 className="text-[26px] font-medium leading-[1.5] tracking-[-0.03em] md:text-[32px]">
                  ویدیوی معرفی{" "}
                  <span className="text-[#C8B79C]">قالب</span>
                </h3>

                <p className="mt-3 max-w-[340px] text-[12.5px] leading-[2] text-white/60">
                  پرتو را بهتر بشناسید؛ یک تجربه از عملکرد و انیمیشن‌های قالب،
                  پیش از آنکه اولین خط کد را باز کنید.
                </p>

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="group mt-7 inline-flex h-11 items-center gap-3 rounded-full bg-[#C8B79C] ps-2 pe-6 text-[13px] font-medium text-[#1d1c18] transition-all duration-300 hover:bg-[#d8c9b0] hover:shadow-[0_10px_30px_-10px_rgba(200,183,156,0.7)]"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1d1c18] text-[#C8B79C] transition-transform duration-300 group-hover:scale-110">
                    <Play size={13} fill="currentColor" aria-hidden />
                  </span>
                  مشاهده ویدیو
                </button>
              </div>

              {/* Preview */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="پخش ویدیوی معرفی"
                className="group relative block overflow-hidden rounded-[14px] border border-white/10 bg-black/30 p-2 text-start shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-[9px]">
                  <img
                    src={VIDEO_COVER}
                    alt="کاور ویدیوی معرفی قالب"
                    loading="lazy"
                    draggable={false}
                    className="aspect-video w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />

                  <span className="absolute inset-0 grid place-items-center bg-gradient-to-t from-black/45 via-black/10 to-black/20">
                    <span className="relative grid h-[68px] w-[68px] place-items-center">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-white/30 motion-safe:animate-ping"
                      />
                      <span
                        aria-hidden
                        className="absolute -inset-3 rounded-full border border-white/25"
                      />
                      <span className="relative grid h-full w-full place-items-center rounded-full bg-white/95 text-[#1d1c18] shadow-xl transition-transform duration-300 group-hover:scale-110">
                        <Play size={24} fill="currentColor" aria-hidden className="translate-x-[-1px]" />
                      </span>
                    </span>
                  </span>
                </div>
              </button>
            </div>
          </motion.div>
        </Container>
      </section>

      <AnimatePresence>{open && <VideoModal onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}

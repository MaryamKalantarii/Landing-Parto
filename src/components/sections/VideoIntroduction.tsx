import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import Container from "../layout/Container";
import Art from "../ui/Art";
import FeaturesGrid from "./FeaturesGrid";
import { siteConfig } from "../../config/site";
import { stopScroll, startScroll } from "../../hooks/useLenis";
import { ScaledStorefront } from "../ui/Storefront";

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
      className="on-dark fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-md bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {siteConfig.videoSrc ? (
          <video src={siteConfig.videoSrc} controls autoPlay playsInline className="h-full w-full" />
        ) : (
          <div className="grid h-full place-items-center p-8 text-center text-white/80">
            <p className="text-sm leading-7">
              هنوز ویدیویی تنظیم نشده است.
              <br />
              مسیر ویدیو را در <code dir="ltr" className="rounded bg-white/10 px-1.5">src/config/site.ts</code> در بخش <code dir="ltr" className="rounded bg-white/10 px-1.5">videoSrc</code> قرار دهید.
            </p>
          </div>
        )}
        <button ref={closeRef} type="button" aria-label="بستن ویدیو" onClick={onClose} className="absolute end-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white">
          <X size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function VideoIntroduction() {
  const [open, setOpen] = useState(false);
  return (
    <section id="features" className="bg-ivory py-12">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="on-dark relative overflow-hidden rounded-md bg-[#111] p-6 text-white lg:order-2">
          <div className="grid gap-5 md:grid-cols-[0.55fr_1fr] md:items-center">
            <div>
              <h3 className="text-xl font-bold">ویدیوی معرفی قالب</h3>
              <p className="mt-2 text-xs leading-6 text-white/65">پرتو را بهتر بشناسید؛ یک تجربه از عملکرد و انیمیشن‌های قالب.</p>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="mt-5 inline-flex h-10 items-center gap-2 rounded-md bg-paper px-5 text-[13px] font-medium text-ink transition-colors hover:bg-white"
              >
                <Play size={14} aria-hidden /> مشاهده ویدیو
              </button>
            </div>
            <button type="button" onClick={() => setOpen(true)} aria-label="پخش ویدیوی معرفی" className="group relative block overflow-hidden rounded-sm border border-white/10 text-start">
              <ScaledStorefront layout="dark" />
              <span className="absolute inset-0 grid place-items-center bg-black/25">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-ink transition-transform duration-300 group-hover:scale-105">
                  <Play size={22} fill="currentColor" aria-hidden />
                </span>
              </span>
            </button>
          </div>
          <Art kind="stone" className="pointer-events-none absolute inset-0 -z-0 h-full w-full opacity-0" />
        </div>
        <FeaturesGrid />
      </Container>
      <AnimatePresence>{open && <VideoModal onClose={() => setOpen(false)} />}</AnimatePresence>
    </section>
  );
}

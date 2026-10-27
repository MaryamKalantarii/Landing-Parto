import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";
import { Para, SectionNumber, Title } from "../ui/SectionMeta";
import { siteConfig } from "../../config/site";
import { startScroll, stopScroll } from "../../hooks/useLenis";

function VideoModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    stopScroll();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") { e.preventDefault(); closeRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); startScroll(); prev?.focus(); };
  }, [onClose]);
  return (
    <motion.div role="dialog" aria-modal="true" aria-label="Live preview video" className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-sm bg-black" onClick={(e) => e.stopPropagation()}>
        {siteConfig.videoSrc ? (
          <video src={siteConfig.videoSrc} controls autoPlay playsInline className="h-full w-full" />
        ) : (
          <p className="grid h-full place-items-center p-8 text-center text-sm leading-7 text-white/80">
            No video configured yet. Set <code className="mx-1 rounded bg-white/10 px-1.5">videoSrc</code> in src/config/site.ts.
          </p>
        )}
        <button ref={closeRef} type="button" aria-label="Close video" onClick={onClose} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white">
          <X size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function LivePreview() {
  const [open, setOpen] = useState(false);
  return (
    <section id="preview" className="relative bg-[#ece7df] py-20">
      <SectionNumber n="02" />
      <Reveal className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 md:px-12 lg:grid-cols-[1.15fr_0.85fr]">
        <button data-reveal type="button" onClick={() => setOpen(true)} aria-label="Play preview video" className="group relative block aspect-[16/9] overflow-hidden rounded-[2px] bg-[#1a1512] text-left">
          <Art kind="model" className="h-full w-full transition-transform duration-[900ms] group-hover:scale-[1.03]" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="flex flex-col items-center gap-2 text-white">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/70 backdrop-blur-[2px] transition-transform duration-300 group-hover:scale-105">
                <Play size={18} fill="currentColor" aria-hidden />
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em]">Play Work</span>
            </span>
          </span>
        </button>
        <div className="max-w-sm lg:ps-6">
          <Title en="Live Preview" fa="یک تجربه واقعی از Parto" />
          <Para className="mt-5">با نمایشی تمام‌عیار، با تمام امکانات و حال و هوای فاخر پرتو آشنا شوید.</Para>
        </div>
      </Reveal>
      <AnimatePresence>{open && <VideoModal onClose={() => setOpen(false)} />}</AnimatePresence>
    </section>
  );
}

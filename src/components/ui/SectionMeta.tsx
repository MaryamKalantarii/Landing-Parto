import type { ReactNode } from "react";
import { cn } from "../../lib/gsap";

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p data-reveal className={cn("text-[10px] font-medium uppercase tracking-[0.3em]", dark ? "text-white/55" : "text-mute")}>
      {children}
    </p>
  );
}

/** Serif English title + Persian subtitle underneath, like the reference. */
export function Title({ en, fa, dark, size = "lg" }: { en: string; fa: string; dark?: boolean; size?: "lg" | "xl" }) {
  return (
    <div>
      <h2 data-reveal className={cn("font-serif font-normal leading-[1.05]", size === "xl" ? "text-6xl md:text-7xl" : "text-5xl md:text-[3.4rem]", dark ? "text-white" : "text-ink")}>
        {en}
      </h2>
      <p data-reveal dir="rtl" className={cn("mt-3 text-start text-base font-medium", dark ? "text-white/90" : "text-ink")} style={{ textAlign: "left" }}>
        {fa}
      </p>
    </div>
  );
}

export function SectionNumber({ n, total = 7, dark }: { n: string; total?: number; dark?: boolean }) {
  return (
    <div aria-hidden className={cn("absolute end-6 top-10 text-right font-serif leading-none md:end-12", dark ? "text-white/70" : "text-ink/70")}>
      <span className="block text-xl">{n}</span>
      <span className="mt-1 block text-[10px] tracking-widest opacity-60">/ 0{total}</span>
    </div>
  );
}

export function Para({ children, dark, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p data-reveal dir="rtl" className={cn("text-[13px] leading-7", dark ? "text-white/65" : "text-mute", className)} style={{ textAlign: "left" }}>
      {children}
    </p>
  );
}

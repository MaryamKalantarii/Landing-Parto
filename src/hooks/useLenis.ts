import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { prefersReducedMotion } from "./useReducedMotion";

let instance: Lenis | null = null;

/** Smooth-scroll to a hash target (works with or without Lenis). */
export function scrollToHash(hash: string): void {
  if (!hash.startsWith("#") || hash.length < 2) return;
  const el = document.querySelector(hash);
  if (!el) return;
  if (instance) instance.scrollTo(el as HTMLElement, { offset: -64, duration: 1.3 });
  else el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export function stopScroll(): void {
  instance?.stop();
  document.body.style.overflow = "hidden";
}
export function startScroll(): void {
  instance?.start();
  document.body.style.overflow = "";
}

/** Single Lenis controller, wired to GSAP's ticker. StrictMode-safe via cleanup. */
export function useLenis(): void {
  useEffect(() => {
    if (prefersReducedMotion() || instance) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    instance = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      instance = null;
    };
  }, []);
}

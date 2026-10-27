import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { prefersReducedMotion } from "./useReducedMotion";

interface Options {
  /** CSS selector of children to stagger; defaults to direct [data-reveal] elements. */
  selector?: string;
  y?: number;
  stagger?: number;
  start?: string;
}

/** Staggered fade-up of `[data-reveal]` children when the container enters the viewport. */
export function useScrollReveal<T extends HTMLElement>({
  selector = "[data-reveal]",
  y = 36,
  stagger = 0.1,
  start = "top 80%",
}: Options = {}) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector, root);
      if (!items.length) return;
      gsap.from(items, {
        autoAlpha: 0,
        y,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: root, start, once: true },
      });
    }, root);
    return () => ctx.revert();
  }, [selector, y, stagger, start]);
  return ref;
}

/** Vertical parallax for `[data-parallax="0.2"]` children while the container scrolls. */
export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]", root).forEach((el) => {
        const amount = parseFloat(el.dataset.parallax ?? "0.15") * 100;
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);
  return ref;
}

import type { MouseEvent } from "react";

/** Adds target/rel only for absolute http(s) URLs so "#anchors" stay in-page. */
export function externalLinkProps(href: string): { target?: "_blank"; rel?: string } {
  return /^https?:\/\//i.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/**
 * Smooth-scrolls to an in-page "#section" when that element exists.
 * Returns true when it handled the click; otherwise the browser's default applies.
 */
export function handleAnchorClick(event: MouseEvent<HTMLElement>, href: string): boolean {
  if (!href.startsWith("#") || href.length < 2) return false;

  let target: Element | null = null;
  try {
    target = document.querySelector(href);
  } catch {
    target = null;
  }
  if (!target) return false;

  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  window.history.pushState(null, "", href);
  return true;
}

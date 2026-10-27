/**
 * ⚙️ SETUP — central place for links and media.
 * Leave a URL empty ("") until you have the real one. Buttons then fall back to
 * scrolling to the matching section instead of pointing at an invented address.
 */
export const siteConfig = {
  /** TODO: put your real purchase URL here (e.g. your marketplace product page). */
  purchaseUrl: "",
  /** TODO: put your real live-demo URL here. */
  demoUrl: "",
  /** TODO: path or URL of the intro video (mp4/webm). Empty = poster + notice only. */
  videoSrc: "",
  social: {
    telegram: "",
    instagram: "",
    youtube: "",
  },
} as const;

/** Resolve a configured URL, or fall back to an in-page anchor. */
export function resolveHref(url: string, fallbackAnchor: string): string {
  return url.trim() ? url : fallbackAnchor;
}

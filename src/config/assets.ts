/**
 * 🖼️ IMAGE SLOTS
 * The project ships with generated placeholder artwork (see components/ui/Art.tsx)
 * because no photography was supplied. To use real photos, drop files into
 * src/assets/images (or /public) and set the URL for the slot below.
 */
export type ArtKind =
  | "ring"
  | "model"
  | "watch"
  | "perfume"
  | "fabric"
  | "interior"
  | "stone"
  | "necklace";

export const imageOverrides: Partial<Record<ArtKind, string>> = {
  // ring: "/images/ring.jpg",
  // model: "/images/model.jpg",
};

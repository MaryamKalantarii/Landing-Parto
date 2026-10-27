import { useLayoutEffect, useRef, useState } from "react";
import type { ArtKind } from "../../config/assets";
import type { PageLayout } from "../../data/pages";
import Art from "./Art";

/**
 * A miniature storefront "screenshot" built from real markup, so every device
 * mockup and thumbnail shows a believable UI instead of an empty box.
 * It lays out at a fixed 1000×620 and is scaled by the parent via CSS.
 */
interface Props {
  layout: PageLayout;
  className?: string;
}

const prodKinds: ArtKind[] = ["model", "ring", "perfume", "watch", "fabric", "necklace"];

function Bar({ dark }: { dark: boolean }) {
  return (
    <div className={`flex h-14 items-center justify-between px-10 ${dark ? "text-white/80" : "text-ink/70"}`}>
      <span className="font-serif text-xl tracking-[0.25em]">PARTO</span>
      <div className="flex gap-6 text-[11px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`h-1.5 w-10 rounded-full ${dark ? "bg-white/30" : "bg-ink/20"}`} />
        ))}
      </div>
    </div>
  );
}

export default function Storefront({ layout, className = "" }: Props) {
  const dark = layout === "dark";
  return (
    <div
      dir="ltr"
      aria-hidden
      className={`h-[620px] w-[1000px] overflow-hidden ${dark ? "bg-[#14110f]" : "bg-[#faf8f4]"} ${className}`}
    >
      <Bar dark={dark} />
      {layout === "dark" && (
        <div className="relative mx-10 mt-2 grid h-[470px] grid-cols-2 items-center">
          <div className="pl-6">
            <p className="font-serif text-6xl font-medium leading-[1.05] text-white">
              Timeless
              <br />
              Elegance
            </p>
            <p className="mt-5 h-2 w-64 rounded-full bg-white/20" />
            <p className="mt-2 h-2 w-48 rounded-full bg-white/15" />
            <div className="mt-8 flex gap-3">
              <span className="h-9 w-28 rounded-sm border border-white/40" />
              <span className="h-9 w-28 rounded-sm bg-white" />
            </div>
          </div>
          <Art kind="ring" className="h-full w-full rounded-sm" />
        </div>
      )}
      {layout === "list" && (
        <div className="grid grid-cols-4 gap-5 px-10 pt-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}>
              <Art kind={prodKinds[i % prodKinds.length]} className="h-48 w-full" />
              <div className="mt-2 h-2 w-24 rounded-full bg-ink/20" />
              <div className="mt-1.5 h-2 w-14 rounded-full bg-ink/10" />
            </div>
          ))}
        </div>
      )}
      {layout === "product" && (
        <div className="grid grid-cols-[1.1fr_1fr] gap-12 px-10 pt-4">
          <Art kind="ring" className="h-[470px] w-full" />
          <div className="pt-8">
            <div className="h-4 w-64 rounded-full bg-ink/70" />
            <div className="mt-4 h-3 w-24 rounded-full bg-ink/30" />
            <div className="mt-8 space-y-2.5">
              {[80, 72, 64].map((w) => (
                <div key={w} className="h-2 rounded-full bg-ink/10" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="mt-10 h-11 w-full rounded-sm bg-ink" />
          </div>
        </div>
      )}
      {layout === "cart" && (
        <div className="grid grid-cols-[1.6fr_1fr] gap-10 px-10 pt-6">
          <div className="space-y-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-4 border-b border-ink/10 pb-4">
                <Art kind={prodKinds[i]} className="h-24 w-24" />
                <div className="flex-1 pt-3">
                  <div className="h-3 w-40 rounded-full bg-ink/60" />
                  <div className="mt-3 h-2 w-24 rounded-full bg-ink/20" />
                </div>
              </div>
            ))}
          </div>
          <div className="h-72 border border-ink/10 p-6">
            <div className="h-3 w-24 rounded-full bg-ink/60" />
            <div className="mt-8 space-y-3">
              <div className="h-2 rounded-full bg-ink/10" />
              <div className="h-2 rounded-full bg-ink/10" />
            </div>
            <div className="mt-16 h-10 rounded-sm bg-ink" />
          </div>
        </div>
      )}
      {layout === "account" && (
        <div className="grid grid-cols-[220px_1fr] gap-10 px-10 pt-6">
          <div className="space-y-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-9 rounded-sm ${i === 0 ? "bg-ink" : "bg-ink/10"}`} />
            ))}
          </div>
          <div>
            <div className="h-4 w-48 rounded-full bg-ink/70" />
            <div className="mt-8 grid grid-cols-2 gap-5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-24 border border-ink/10 bg-white" />
              ))}
            </div>
          </div>
        </div>
      )}
      {layout === "form" && (
        <div className="grid grid-cols-2 gap-0 px-10 pt-4">
          <div className="space-y-4 px-12 pt-16">
            <div className="h-4 w-40 rounded-full bg-ink/70" />
            <div className="h-11 border border-ink/15 bg-white" />
            <div className="h-11 border border-ink/15 bg-white" />
            <div className="h-11 bg-ink" />
          </div>
          <Art kind="model" className="h-[470px] w-full" />
        </div>
      )}
      {layout === "content" && (
        <div className="px-10 pt-4">
          <Art kind="interior" className="h-56 w-full" />
          <div className="mt-8 grid grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2.5">
                <div className="h-3 w-28 rounded-full bg-ink/60" />
                <div className="h-2 rounded-full bg-ink/10" />
                <div className="h-2 w-4/5 rounded-full bg-ink/10" />
                <div className="h-2 w-3/5 rounded-full bg-ink/10" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/** Scales the fixed 1000×620 storefront to fill its parent's width (ResizeObserver). */
export function ScaledStorefront({ layout, className = "" }: { layout: PageLayout; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / 1000);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ aspectRatio: "1000 / 620" }} className={`relative w-full overflow-hidden ${className}`}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }} className="absolute left-0 top-0">
        <Storefront layout={layout} />
      </div>
    </div>
  );
}

import type { PageLayout } from "../../data/pages";
import { cn } from "../../lib/gsap";
import { ScaledStorefront } from "./Storefront";
import Art from "./Art";

interface Props {
  type: "laptop" | "monitor" | "tablet" | "phone";
  layout?: PageLayout;
  className?: string;
}

/** CSS-built device frames. Screens render real storefront markup. */
export default function DeviceFrame({ type, layout = "dark", className }: Props) {
  if (type === "phone") {
    return (
      <div
        className={cn(
          "relative aspect-[9/19] rounded-[2rem] border-[5px] border-[#1b1917] bg-[#1b1917] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]",
          className,
        )}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[1.6rem] bg-[#14110f]">
          <div className="absolute left-1/2 top-1.5 z-10 h-2 w-10 -translate-x-1/2 rounded-full bg-black" />
          <Art kind="model" className="h-[62%] w-full" />
          <div className="px-3 pt-3 text-center font-serif text-[clamp(10px,1.4vw,18px)] leading-tight text-white">
            Timeless
            <br />
            Elegance
          </div>
          <div className="mx-auto mt-2 h-1.5 w-[60%] rounded-full bg-white/15" />
          <div className="mx-auto mt-2 h-5 w-[70%] rounded-sm bg-white" />
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div
        className={cn(
          "rounded-[1.1rem] border-[6px] border-[#1b1917] bg-[#1b1917] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.4)]",
          className,
        )}
      >
        <div className="overflow-hidden rounded-[0.6rem]">
          <ScaledStorefront layout={layout} />
        </div>
      </div>
    );
  }

  const isLaptop = type === "laptop";
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-t-[0.9rem] border-[7px] border-b-[10px] border-[#1b1917] bg-[#1b1917] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
        <div className="overflow-hidden rounded-[0.3rem]">
          <ScaledStorefront layout={layout} />
        </div>
      </div>
      {isLaptop ? (
        <div className="relative mx-[-3%] h-3 rounded-b-xl bg-gradient-to-b from-[#c9c6c1] to-[#8d8a85] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.5)]">
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-md bg-[#6e6b66]" />
        </div>
      ) : (
        <div className="mx-auto flex flex-col items-center">
          <div className="h-8 w-[10%] bg-gradient-to-b from-[#2a2725] to-[#171514]" />
          <div className="h-1.5 w-[28%] rounded-full bg-[#171514]" />
        </div>
      )}
    </div>
  );
}

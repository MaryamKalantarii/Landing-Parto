import { ArrowLeft } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { ScaledStorefront } from "../ui/Storefront";
import { showcasePages } from "../../data/pages";
import { useParallax } from "../../hooks/useScrollReveal";
import Button from "../ui/Button";

/** Layered page previews with depth: outer pages smaller & rotated, centre page largest. */
const depth = [
  { w: "w-[17%]", rot: -10, y: 24, z: 1, par: "0.02" },
  { w: "w-[21%]", rot: -6, y: 8, z: 2, par: "0.05" },
  { w: "w-[28%]", rot: 0, y: -10, z: 4, par: "0.08" },
  { w: "w-[21%]", rot: 6, y: 8, z: 2, par: "0.05" },
  { w: "w-[17%]", rot: 10, y: 24, z: 1, par: "0.02" },
];

export default function PagesShowcase() {
  const par = useParallax<HTMLDivElement>();
  return (
    <section id="pages" className="relative overflow-hidden bg-gradient-to-b from-cream to-[#e4ddd1] py-14">
      <Container>
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 data-reveal className="text-2xl font-bold md:text-[28px]">نمایش واقعی صفحات قالب</h2>
            <p data-reveal className="mt-2 text-sm text-mute">تمام صفحات مورد نیاز یک فروشگاه حرفه‌ای</p>
          </div>
          <div data-reveal>
            <Button href="#gallery" size="sm" icon={<ArrowLeft size={14} />}>مشاهده همه صفحات</Button>
          </div>
        </Reveal>

        <div ref={par} className="hidden items-end justify-center gap-3 md:flex" style={{ perspective: 1400 }}>
          {showcasePages.map((p, i) => {
            const d = depth[i];
            return (
              <figure
                key={p.label}
                data-parallax={d.par}
                className={`${d.w} lift`}
                style={{ transform: `translateY(${d.y}px) rotateY(${d.rot}deg)`, zIndex: d.z }}
              >
                <div className="overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_24px_40px_-18px_rgba(0,0,0,0.35)]">
                  <ScaledStorefront layout={p.layout} />
                </div>
                <figcaption className="mt-4 text-center text-[11px] text-ink/70">{p.label}</figcaption>
              </figure>
            );
          })}
        </div>

        <ul className="hide-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:hidden">
          {showcasePages.map((p) => (
            <li key={p.label} className="w-[72%] shrink-0 snap-center">
              <div className="overflow-hidden rounded-sm border border-line shadow-md">
                <ScaledStorefront layout={p.layout} />
              </div>
              <p className="mt-2 text-center text-xs">{p.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

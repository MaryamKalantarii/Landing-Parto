import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import DeviceFrame from "../ui/DeviceFrame";
import { ScaledStorefront } from "../ui/Storefront";
import { Eyebrow, Para, SectionNumber, Title } from "../ui/SectionMeta";
import { useParallax } from "../../hooks/useScrollReveal";
import { scrollToHash } from "../../hooks/useLenis";

export default function Showcase() {
  const par = useParallax<HTMLDivElement>();
  return (
    <section className="relative bg-[#efeae2] py-20">
      <SectionNumber n="04" />
      <Reveal className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 md:px-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="max-w-xs">
          <Eyebrow>Showcase</Eyebrow>
          <div className="mt-5">
            <Title en="Showcase" fa="نمونه صفحات واقعی" />
          </div>
          <Para className="mt-5">در این بخش می‌توانید چند نمونه از صفحات قالب را به‌صورت کلی با جزئیات طراحی و ریزتر آشنا شوید.</Para>
          <a data-reveal href="#pages" onClick={(e) => { e.preventDefault(); scrollToHash("#pages"); }} dir="rtl" className="group mt-8 inline-flex items-center gap-2 text-xs font-medium">
            مشاهده همه صفحات <ArrowRight size={13} className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
          </a>
        </div>
        <div ref={par} data-reveal className="relative">
          <div data-parallax="0.03" className="w-[88%] overflow-hidden rounded-[4px] border border-line bg-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]">
            <div className="flex h-5 items-center gap-1.5 border-b border-line bg-[#f2efe9] px-3" aria-hidden>
              {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink/25" />)}
            </div>
            <ScaledStorefront layout="editorial" />
          </div>
          <div data-parallax="0.08" className="absolute -bottom-8 end-0 w-[16%] min-w-[72px]">
            <DeviceFrame type="phone" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

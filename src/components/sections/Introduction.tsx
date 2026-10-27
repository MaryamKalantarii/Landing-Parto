import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import DeviceFrame from "../ui/DeviceFrame";
import { Eyebrow, Para, Title } from "../ui/SectionMeta";
import { useParallax } from "../../hooks/useScrollReveal";
import { scrollToHash } from "../../hooks/useLenis";

export default function Introduction() {
  const par = useParallax<HTMLDivElement>();
  return (
    <section className="bg-[#efeae2] py-20">
      <Reveal className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 md:px-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-sm">
          <Eyebrow>Introduction</Eyebrow>
          <div className="mt-5">
            <Title en="What is Parto?" fa="پرتو چیست؟" />
          </div>
          <Para className="mt-5">
            پرتو یک قالب فروشگاهی لوکس و مدرن است که با هدف ارائه تجربه‌ای متفاوت از خرید آنلاین طراحی شده است. با ترکیب زیبایی‌شناسی مینیمال و تکنولوژی روز، پرتو امکان ساخت فروشگاهی حرفه‌ای و فراموش‌نشدنی را فراهم می‌کند.
          </Para>
          <a data-reveal href="#features" onClick={(e) => { e.preventDefault(); scrollToHash("#features"); }} dir="rtl" className="group mt-8 inline-flex items-center gap-2 text-xs font-medium">
            بیشتر بدانید <ArrowRight size={13} className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
          </a>
        </div>
        <div ref={par} data-reveal className="relative overflow-hidden rounded-[2px] bg-gradient-to-br from-[#c9bfae] to-[#9f9381] p-8 md:p-12">
          <div data-parallax="0.04" className="mx-auto w-[88%]">
            <DeviceFrame type="laptop" layout="editorial" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

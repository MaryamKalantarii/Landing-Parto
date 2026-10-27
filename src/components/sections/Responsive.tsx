import Reveal from "../ui/Reveal";
import DeviceFrame from "../ui/DeviceFrame";
import { Eyebrow, Para, SectionNumber, Title } from "../ui/SectionMeta";
import { useParallax } from "../../hooks/useScrollReveal";

export default function Responsive() {
  const par = useParallax<HTMLDivElement>();
  return (
    <section className="relative bg-[#efeae2] py-20">
      <SectionNumber n="06" />
      <Reveal stagger={0.2} className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 md:px-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="max-w-xs">
          <Eyebrow>Responsive</Eyebrow>
          <div className="mt-5">
            <Title en="Responsive" fa="در همه دستگاه‌ها" />
          </div>
          <Para className="mt-5">پرتو کاملاً واکنش‌گرا است و در تمامی اندازه‌های صفحه، از موبایل، تبلت تا دسکتاپ، تجربه‌ای بی‌نقص ارائه می‌دهد.</Para>
        </div>
        <div ref={par} className="flex items-end justify-center gap-5">
          <div data-reveal data-parallax="0.03" className="w-[52%]"><DeviceFrame type="laptop" layout="editorial" /></div>
          <div data-reveal data-parallax="0.06" className="w-[26%]"><DeviceFrame type="tablet" layout="editorial" /></div>
          <div data-reveal data-parallax="0.09" className="w-[11%] min-w-[54px]"><DeviceFrame type="phone" /></div>
        </div>
      </Reveal>
    </section>
  );
}

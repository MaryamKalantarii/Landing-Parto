import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import DeviceFrame from "../ui/DeviceFrame";
import { useParallax } from "../../hooks/useScrollReveal";

export default function ResponsiveShowcase() {
  const par = useParallax<HTMLDivElement>();
  return (
    <section className="bg-paper py-14">
      <Container>
        <Reveal className="mb-8">
          <h2 data-reveal className="text-2xl font-bold md:text-[28px]">روی هر صفحه‌ای، درست نمایش داده می‌شود.</h2>
          <p data-reveal className="mt-2 text-sm text-mute">تجربه‌ای یکپارچه برای دسکتاپ، تبلت و موبایل.</p>
        </Reveal>
        <Reveal stagger={0.25}>
          <div ref={par} className="mx-auto flex max-w-4xl items-end justify-center gap-4 md:gap-8">
            <figure data-reveal data-parallax="0.03" className="w-[52%]">
              <DeviceFrame type="monitor" layout="dark" />
              <figcaption className="mt-3 text-center text-xs text-ink/70">دسکتاپ</figcaption>
            </figure>
            <figure data-reveal data-parallax="0.06" className="w-[28%]">
              <DeviceFrame type="tablet" layout="list" />
              <figcaption className="mt-3 text-center text-xs text-ink/70">تبلت</figcaption>
            </figure>
            <figure data-reveal data-parallax="0.09" className="w-[11%] min-w-[56px]">
              <DeviceFrame type="phone" />
              <figcaption className="mt-3 text-center text-xs text-ink/70">موبایل</figcaption>
            </figure>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

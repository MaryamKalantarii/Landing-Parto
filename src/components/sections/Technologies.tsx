import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";
import { techs } from "../../data/features";
import { useParallax } from "../../hooks/useScrollReveal";

export default function Technologies() {
  const par = useParallax<HTMLElement>();
  return (
    <section id="tech" ref={par} className="on-dark relative overflow-hidden bg-[#121010] py-12 text-white">
      <div aria-hidden data-parallax="0.1" className="absolute inset-y-[-15%] start-0 w-[45%] opacity-80">
        <Art kind="necklace" className="h-full w-full" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-l from-[#121010] via-[#121010]/90 to-transparent" />
      <Container className="relative">
        <Reveal stagger={0.07}>
          <h2 data-reveal className="text-2xl font-bold">ساخته شده با تکنولوژی‌های مدرن.</h2>
          <p data-reveal className="mt-2 text-sm text-white/60">ساختاری مدرن و قابل توسعه برای پروژه‌های واقعی.</p>
          <ul dir="ltr" className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-6 lg:justify-end">
            {techs.map((t) => (
              <li key={t.name} data-reveal className="group flex w-20 flex-col items-center gap-2 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.08] text-lg font-semibold ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1">
                  {t.mark}
                </span>
                <span className="text-[11px] text-white/80">{t.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

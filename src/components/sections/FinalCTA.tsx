import { ShoppingCart } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";
import Button from "../ui/Button";
import { siteConfig, resolveHref } from "../../config/site";
import { useParallax } from "../../hooks/useScrollReveal";

export default function FinalCTA() {
  const par = useParallax<HTMLElement>();
  return (
    <section id="cta" ref={par} className="on-dark relative overflow-hidden bg-[#0e0c0b] py-20 text-white">
      <div aria-hidden data-parallax="0.1" className="absolute inset-y-[-20%] start-0 w-[34%] opacity-90">
        <Art kind="model" className="h-full w-full" />
      </div>
      <div aria-hidden data-parallax="0.08" className="absolute inset-y-[-20%] end-0 w-[34%] opacity-80">
        <Art kind="stone" className="h-full w-full" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0e0c0b]/40 via-[#0e0c0b]/85 to-[#0e0c0b]/40" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-xl text-center" stagger={0.12}>
          <h2 data-reveal className="text-2xl font-bold leading-snug md:text-[32px]">فروشگاه حرفه‌ای خودت را از همین‌جا شروع کن.</h2>
          <p data-reveal className="mt-3 text-sm text-white/65">یک تجربه فروشگاهی مدرن، سریع و آماده توسعه در اختیار توست.</p>
          <div data-reveal className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={resolveHref(siteConfig.purchaseUrl, "#faq")} variant="light" icon={<ShoppingCart size={15} />}>
              خرید دمو
            </Button>
            <Button href={resolveHref(siteConfig.demoUrl, "#intro")} variant="ghost-light">
              مشاهده پیش‌نمایش
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";
import Button from "../ui/Button";
import { siteConfig, resolveHref } from "../../config/site";
import { useParallax } from "../../hooks/useScrollReveal";

const perks = ["سورس کامل پروژه", "RTL و فارسی", "واکنش‌گرا در همه دستگاه‌ها"];

/**
 * 🖼️ عکس پس‌زمینه: فایل را با این نام داخل public/images/ بگذار
 * (عکس افقی و تیره‌رنگ، حداقل 1920×1000 بهتر است).
 * اگر فایل پیدا نشود، همان تصاویر Art دو طرف نمایش داده می‌شوند.
 */
const CTA_BG = "/images/cta-bg.jpg";

export default function FinalCTA() {
  const par = useParallax<HTMLElement>();
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="cta"
      ref={par}
      className="on-dark relative isolate overflow-hidden bg-[#0e0c0b] py-24 text-white md:py-32"
    >
      {/* background photo */}
      <div
        aria-hidden
        data-parallax="0.06"
        className={`absolute inset-y-[-12%] inset-x-0 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <img
          src={CTA_BG}
          alt=""
          draggable={false}
          onLoad={() => setLoaded(true)}
          className="h-full w-full object-cover object-center opacity-55"
        />
      </div>

      {/* side art (shown only when there is no photo) */}
      <div
        aria-hidden
        data-parallax="0.1"
        className={`${loaded ? "hidden " : ""}absolute inset-y-[-20%] start-0 w-[38%] opacity-60 [mask-image:linear-gradient(to_right,black,transparent)] rtl:[mask-image:linear-gradient(to_left,black,transparent)]`}
      >
        <Art kind="model" className="h-full w-full" />
      </div>
      <div
        aria-hidden
        data-parallax="0.08"
        className={`${loaded ? "hidden " : ""}absolute inset-y-[-20%] end-0 w-[38%] opacity-50 [mask-image:linear-gradient(to_left,black,transparent)] rtl:[mask-image:linear-gradient(to_right,black,transparent)]`}
      >
        <Art kind="stone" className="h-full w-full" />
      </div>

      {/* overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#0e0c0b]/70 via-[#0e0c0b]/80 to-[#0e0c0b]"
      />

      {/* golden glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8B79C]/20 blur-[110px] md:h-[640px] md:w-[640px]"
      />

      {/* concentric rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />
      </div>

      {/* thin top line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8B79C]/40 to-transparent"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center" stagger={0.12}>
          <div
            data-reveal
            className="mb-7 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-l from-[#C8B79C] to-transparent" />
            <span className="text-[11px] tracking-[0.14em] text-[#C8B79C]">
              GET STARTED / 08
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#C8B79C] to-transparent" />
          </div>

          <h2
            data-reveal
            className="text-[clamp(30px,4.6vw,58px)] font-medium leading-[1.45] tracking-[-0.045em]"
          >
            فروشگاه حرفه‌ای خودت را{" "}
            <span className="bg-gradient-to-l from-[#C8B79C] to-[#E8DCC6] bg-clip-text text-transparent">
              از همین‌جا شروع کن.
            </span>
          </h2>

          <p
            data-reveal
            className="mx-auto mt-5 max-w-md text-[14px] leading-[2] text-white/60"
          >
            یک تجربه فروشگاهی مدرن، سریع و آماده توسعه در اختیار توست.
          </p>

          <div
            data-reveal
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <Button
              href={resolveHref(siteConfig.purchaseUrl, "#faq")}
              variant="light"
              icon={<ShoppingCart size={15} />}
            >
              خرید قالب از راستچین 
            </Button>
            <Button
              href={resolveHref(siteConfig.demoUrl, "#intro")}
              variant="ghost-light"
            >
              مشاهده پیش‌نمایش
            </Button>
          </div>

          {/* perks */}
          <ul
            data-reveal
            className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-7 text-[12px] text-white/50"
          >
            {perks.map((p, i) => (
              <li key={p} className="flex items-center gap-6">
                {i > 0 && (
                  <span
                    aria-hidden
                    className="hidden h-1 w-1 rounded-full bg-[#C8B79C]/60 sm:block"
                  />
                )}
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { useParallax } from "../../hooks/useScrollReveal";

/**
 * 🖼️ عکس‌ها را داخل public/images/showcase/ بگذار و اگر اسمشان فرق دارد اینجا عوض کن.
 * اندازه‌ی پیشنهادی:  دسکتاپ 1600×1000  |  تبلت 1200×1600  |  موبایل 900×1900
 * اگر فایلی پیدا نشود، یک جای‌گاه شیک نمایش داده می‌شود.
 */
const SHOTS = {
  desktop: "/images/showcase/desktop.png",
  tablet: "/images/showcase/tablet.png",
  phone: "/images/showcase/mobile.png",
} as const;

function Screen({
  src,
  label,
  className = "",
  aspect = "",
  natural = false,
}: {
  src: string;
  label: string;
  className?: string;
  /** نسبت ثابت صفحه (برای جای‌گاه یا وقتی natural خاموش است) */
  aspect?: string;
  /** اگر true باشد، عکس با نسبت اصلی خودش و بدون هیچ برشی نمایش داده می‌شود */
  natural?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const free = natural && !failed;

  return (
    <div
      className={`relative overflow-hidden bg-[#E6E0D5] ${className} ${free ? "" : aspect}`}
    >
      {!failed && (
        <img
          src={src}
          alt={`نمایش قالب در ${label}`}
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
          className={[
            "transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]",
            free
              ? "block h-auto w-full"
              : "absolute inset-0 h-full w-full object-cover object-top",
          ].join(" ")}
        />
      )}

      {failed && (
        <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#EBE5D9,#D9CFBD)]">
          <div className="flex flex-col items-center gap-2 text-[#8B785F]">
            <ImageIcon size={22} strokeWidth={1.2} aria-hidden />
            <span className="text-[10px] tracking-[0.08em]">{label}</span>
          </div>
        </div>
      )}

      {/* glass reflection */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_38%)]"
      />
    </div>
  );
}

export default function ResponsiveShowcase() {
  const par = useParallax<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-paper py-16 md:py-20">
      {/* background glow + ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[58%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A78F70]/15 blur-3xl md:h-[720px] md:w-[720px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[58%] hidden h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#292822]/[0.07] md:block"
      />

      <Container className="relative">
        {/* Header */}
        <Reveal className="mb-12 text-center md:mb-16">
          <div
            data-reveal
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-[#A78F70]" />
            <span className="text-[11px] tracking-[0.1em] text-[#A28E73]">
              RESPONSIVE / 03
            </span>
            <span className="h-px w-8 bg-[#A78F70]" />
          </div>

          <h2
            data-reveal
            className="text-[clamp(26px,3.2vw,42px)] font-medium leading-[1.5] tracking-[-0.04em]"
          >
            روی هر صفحه‌ای،{" "}
            <span className="text-[#A28E73]">درست نمایش داده می‌شود.</span>
          </h2>

          <p data-reveal className="mx-auto mt-3 max-w-[420px] text-[13px] leading-7 text-mute">
            تجربه‌ای یکپارچه برای دسکتاپ، تبلت و موبایل؛ از کوچک‌ترین صفحه تا
            بزرگ‌ترین مانیتور.
          </p>
        </Reveal>

        {/* Devices stage */}
        <Reveal stagger={0.25}>
          <div
            ref={par}
            dir="ltr"
            className="relative mx-auto max-w-[980px] pb-10 md:pb-16"
          >
            {/* Desktop / monitor */}
            <figure
              data-reveal
              data-parallax="0.03"
              className="group relative mx-auto w-[88%] md:w-[74%]"
            >
              <div className="rounded-[14px] bg-[#1d1c18] p-[7px] shadow-[0_50px_90px_-40px_rgba(41,40,34,0.6)] ring-1 ring-black/10 md:rounded-[18px] md:p-[10px]">
                {/* camera dot */}
                <span className="absolute left-1/2 top-[3px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/30 md:top-[4px]" />
                <Screen
                  src={SHOTS.desktop}
                  label="دسکتاپ"
                  natural
                  aspect="aspect-[16/10]"
                  className="rounded-[7px] md:rounded-[9px]"
                />
              </div>
              {/* stand */}
              <div className="mx-auto h-4 w-[14%] bg-gradient-to-b from-[#bdb6a8] to-[#d8d2c6] md:h-6" />
              <div className="mx-auto h-[5px] w-[26%] rounded-full bg-[#c9c2b4] shadow-[0_10px_20px_-6px_rgba(41,40,34,0.4)]" />
              <figcaption className="mt-4 text-center text-[11px] tracking-[0.08em] text-ink/60">
                <span className="text-[#A28E73]">01</span> · دسکتاپ
              </figcaption>
            </figure>

            {/* Tablet */}
            <figure
              data-reveal
              data-parallax="0.06"
              className="group absolute bottom-[3%] right-[-1%] w-[30%] md:bottom-[6%] md:right-[2%] md:w-[23%]"
            >
              <div className="rounded-[14px] bg-[#1d1c18] p-[5px] shadow-[0_35px_60px_-25px_rgba(41,40,34,0.65)] ring-1 ring-black/10 md:rounded-[22px] md:p-[8px]">
                <Screen
                  src={SHOTS.tablet}
                  label="تبلت"
                  aspect="aspect-[3/4]"
                  className="rounded-[9px] md:rounded-[15px]"
                />
              </div>
              <figcaption className="mt-3 hidden text-center text-[11px] tracking-[0.08em] text-ink/60 md:block">
                <span className="text-[#A28E73]">02</span> · تبلت
              </figcaption>
            </figure>

            {/* Phone */}
            <figure
              data-reveal
              data-parallax="0.09"
              className="group absolute bottom-[2%] left-[1%] w-[15%] min-w-[58px] md:bottom-[4%] md:left-[4%] md:w-[11.5%]"
            >
              <div className="relative rounded-[14px] bg-[#1d1c18] p-[4px] shadow-[0_30px_50px_-20px_rgba(41,40,34,0.7)] ring-1 ring-black/10 md:rounded-[22px] md:p-[6px]">
                {/* notch */}
                <span className="absolute left-1/2 top-[7px] z-10 h-[4px] w-[28%] -translate-x-1/2 rounded-full bg-black md:top-[11px] md:h-[6px]" />
                <Screen
                  src={SHOTS.phone}
                  label="موبایل"
                  aspect="aspect-[9/19]"
                  className="rounded-[10px] md:rounded-[17px]"
                />
              </div>
              <figcaption className="mt-3 hidden text-center text-[11px] tracking-[0.08em] text-ink/60 md:block">
                <span className="text-[#A28E73]">03</span> · موبایل
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

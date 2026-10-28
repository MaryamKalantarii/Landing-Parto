
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const HERO_IMAGE = "/images/hero/mockup.png";
const DEMO_URL = "#";
const BUY_URL = "#";

const ease = [0.22, 1, 0.36, 1] as const;

/* PARTO: letter-by-letter masked reveal */
function Letters({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <span aria-label={text} className="flex" dir="ltr">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="block overflow-hidden pb-[0.08em]"
        >
          <motion.span
            className="block"
            initial={reduced ? false : { y: "105%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: delay + i * 0.07,
              ease,
            }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
  >
    <path
      d="M13 8H3M7 4L3 8l4 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Scroll-linked motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduced ? "0%" : "5%"]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduced ? 0 : -60]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.55],
    [1, reduced ? 1 : 0]
  );

  const hintOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0]
  );

  const enter = (delay: number, y = 22) => ({
    initial: reduced ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  });

  const goNext = () => {
    const next = ref.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-[#efebe4] lg:h-[50.2vw]"
    >
      {/* ---------- Mockup image ---------- */}
      <motion.div
        style={{ y: imgY }}
        initial={reduced ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="relative mt-6 lg:absolute lg:inset-0 lg:mt-0"
      >
        <img
          src={HERO_IMAGE}
          alt="پیش‌نمایش قالب فروشگاهی پرتو در لپ‌تاپ و موبایل"
          className="block h-auto w-full lg:h-full lg:object-cover lg:object-center"
        />
      </motion.div>

      {/* ---------- Text content ---------- */}

      {/* ---------- Text content ---------- */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="
          relative z-10
          flex flex-col items-start
          px-6 pt-28
          lg:absolute lg:left-[5%] lg:top-[17%]
          lg:w-[31vw] lg:p-0
        "
      >
        <div className="flex w-full flex-col items-start text-rtl">

          {/* Eyebrow */}
          <motion.div
            {...enter(0.3, 10)}
            className="flex w-full items-center justify-start gap-3"
          >
            <motion.span
              aria-hidden
              initial={reduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="h-px w-8 shrink-0 origin-rtl bg-[#111]/50"
            />

            <p
              dir="rtl"
              className="text-rtl text-[10px] font-medium text-[#6f6a63] lg:text-[clamp(9px,0.75vw,12px)]"
            >
              تجربه‌ای متفاوت از فروشگاه‌سازی آنلاین
            </p>
          </motion.div>

          {/* PARTO */}
          <h1 className="mt-5 w-full lg:mt-[1.4vw]">
            <span className="block w-fit font-serif text-[5.2rem] font-light leading-[0.95] tracking-[0.015em] text-[#111] lg:text-[clamp(4.5rem,9.4vw,9.5rem)]">
              <Letters text="PARTO" delay={0.45} />
            </span>
          </h1>

          {/* Persian heading */}
          <motion.h2
            {...enter(0.95, 16)}
            dir="rtl"
            className="mt-5 w-full -translate-x-3 text-rtl text-[1.5rem] font-medium text-[#111] lg:mt-[1.4vw] lg:text-[clamp(1.3rem,2.1vw,2.2rem)]"          >
            فروشگاهی فراتر از یک قالب
          </motion.h2>

          {/* Description */}
          <motion.p
            {...enter(1.1)}
            dir="rtl"
            className="mt-5 w-full -translate-x-3 text-rtl text-[13px] leading-[1.9] text-[#6f6a63] lg:mt-[1.6vw] lg:text-[clamp(11px,0.95vw,14.5px)]"          >
            با پرتو، فروشگاه اینترنتی خود را متفاوت آغاز کنید.
            طراحی لوکس، تجربه کاربری روان و ساختاری مدرن
            برای برندهایی که می‌خواهند حرفه‌ای دیده شوند.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...enter(1.25)}
className="mt-7 flex w-full -translate-x-7 flex-wrap items-center justify-start gap-3 lg:mt-[2vw]"          >
            <a
              href={DEMO_URL}
              dir="rtl"
              className="group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full bg-[#111] pe-2 ps-7 text-[13px] font-medium text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-10px_rgba(0,0,0,0.6)] lg:h-[clamp(44px,3.5vw,54px)]"
            >
              <span className="relative">مشاهده دموی زنده</span>

              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white text-[#111] transition-transform duration-500 group-hover:-translate-x-1">
                <Arrow />
              </span>
            </a>

            <a
              href={BUY_URL}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-[#111]/30 bg-white/30 px-7 text-[13px] font-medium text-[#111] backdrop-blur-sm transition-colors duration-500 hover:border-[#111] hover:bg-[#111] hover:text-white lg:h-[clamp(44px,3.5vw,54px)]"
            >
              خرید قالب پرتو
            </a>
          </motion.div>

        </div>
      </motion.div>


      {/* ---------- Scroll indicator ---------- */}
      <motion.button
        type="button"
        onClick={goNext}
        aria-label="رفتن به بخش بعدی"
        style={{ opacity: hintOpacity }}
        className="
          group absolute bottom-[5%] left-[5%]
          z-10 hidden items-center gap-4 lg:flex
        "
      >
        <span className="relative block h-14 w-px overflow-hidden bg-[#111]/20">
          <motion.span
            aria-hidden
            className="absolute left-0 top-0 block h-5 w-px bg-[#111]"
            animate={
              reduced ? undefined : { y: [-20, 56] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>

        <span
          className="
            text-[9px] font-medium
            text-[#6f6a63]
            transition-colors duration-300
            group-hover:text-[#111]
          "
        >
          کشف بیشتر
        </span>
      </motion.button>
    </section>
  );
}

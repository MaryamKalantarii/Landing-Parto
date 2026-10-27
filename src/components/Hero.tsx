import { motion, useReducedMotion } from "motion/react";

const DEMO_URL = "#"; // لینک دمو را اینجا بگذار
const BUY_URL = "#"; // لینک خرید را اینجا بگذار

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  const enter = (delay: number, y = 24) => ({
    initial: reduced ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#e9e3da] lg:h-[min(100vh,780px)] lg:min-h-[620px]"
    >
      {/* Stone background */}
      <motion.img
        src="/images/hero-stone.jpg"
        alt=""
        aria-hidden
        initial={reduced ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0 h-full w-full object-cover object-[75%_bottom]"
      />

      <div className="relative mx-auto h-full w-full max-w-[1280px] px-6 pb-16 pt-28 md:px-12 lg:pb-0 lg:pt-0">
        {/* ---------- Text ---------- */}
        <div className="max-w-[440px] lg:absolute lg:left-12 lg:top-[19%]">
          <motion.p
            {...enter(0.4, 10)}
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#6f6a63]"
          >
            Modern eCommerce Template
          </motion.p>

          <h1 className="mt-6">
            <motion.span
              {...enter(0.5, 40)}
              className="block font-serif text-[5.5rem] font-light leading-[0.95] tracking-[0.01em] text-[#111] md:text-[7.5rem]"
            >
              PARTO
            </motion.span>
            <motion.span
              {...enter(0.7, 20)}
              dir="rtl"
              className="mt-2 block text-[1.6rem] font-medium text-[#111] md:text-[1.75rem]"
              style={{ textAlign: "left" }}
            >
              قالب فروشگاهی لوکس و مدرن
            </motion.span>
          </h1>

          <motion.p
            {...enter(0.9)}
            className="mt-6 max-w-[330px] text-[13px] leading-6 text-[#6f6a63]"
          >
            Parto is a premium React template for modern eCommerce brands. Designed with
            elegance, performance and attention to detail.
          </motion.p>

          <motion.div {...enter(1.05)} className="mt-7 flex gap-3">
            <a
              href={DEMO_URL}
              className="inline-flex h-11 items-center justify-center rounded-[4px] border border-[#111] bg-[#111] px-7 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#24211f]"
            >
              مشاهده دمو
            </a>
            <a
              href={BUY_URL}
              className="inline-flex h-11 items-center justify-center rounded-[4px] border border-[#111]/40 px-7 text-[13px] font-medium text-[#111] transition-colors duration-300 hover:border-[#111] hover:bg-[#111]/5"
            >
              خرید قالب
            </a>
          </motion.div>
        </div>

        {/* ---------- Devices ---------- */}
        <div
          className="relative mx-auto mt-16 w-full max-w-[640px] lg:absolute lg:inset-0 lg:mx-0 lg:mt-0 lg:max-w-none"
          style={{ perspective: "1800px" }}
        >
          {/* Laptop (three-quarter view) */}
          <div className="lg:absolute lg:left-[48%] lg:top-[16%] lg:w-[50%]">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.7, ease }}
            >
              <div
                style={{
                  transform: "rotateX(3deg) rotateY(-22deg) rotateZ(1.5deg)",
                  transformOrigin: "50% 100%",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="rounded-t-[14px] border-[7px] border-b-[10px] border-[#1b1917] bg-[#1b1917] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
                  <img
                    src="/images/laptop-screen.jpg"
                    alt="Parto template preview"
                    className="block aspect-[16/10] w-full rounded-[4px] bg-[#f3efe8] object-cover"
                  />
                </div>
                <div className="relative mx-[-3%] h-3 rounded-b-xl bg-gradient-to-b from-[#c9c6c1] to-[#8d8a85] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.5)]">
                  <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-md bg-[#6e6b66]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Phone */}
          <div className="absolute -bottom-6 right-0 z-10 w-[20%] min-w-[84px] lg:bottom-auto lg:left-[82.5%] lg:right-auto lg:top-[40%] lg:w-[13%]">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.1, ease }}
            >
              <div style={{ transform: "rotateY(-10deg)", transformStyle: "preserve-3d" }}>
                <div className="relative aspect-[9/19] rounded-[2rem] border-[5px] border-[#1b1917] bg-[#1b1917] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[1.6rem] bg-[#f3efe8]">
                    <div className="absolute left-1/2 top-1.5 z-10 h-2 w-10 -translate-x-1/2 rounded-full bg-black" />
                    <img
                      src="/images/phone-screen.jpg"
                      alt="Parto mobile preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          {...enter(1.4, 0)}
          aria-hidden
          className="absolute bottom-10 left-12 hidden lg:block"
        >
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#6f6a63]">Scroll</p>
          <span className="mt-3 block h-10 w-px bg-[#111]/40" />
        </motion.div>
      </div>
    </section>
  );
}
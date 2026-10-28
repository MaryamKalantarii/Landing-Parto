import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpLeft } from "lucide-react";
import Reveal from "../ui/Reveal";
import { storeFeatures } from "../../data/features";

const ease = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

export default function FeaturesGrid() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="features"
      dir="rtl"
      className="relative col-span-full w-full min-w-0 shrink-0 grow basis-full overflow-hidden bg-[#F5F2EC] py-12 text-[#292822] md:py-16"
    >
      {/* soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#A78F70]/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <Reveal as="div" className="mb-9">
          <div
            data-reveal
            className="mb-6 flex items-center justify-between border-b border-[#292822]/15 pb-4"
          >
            <span className="text-[10px] tracking-[0.12em] text-[#8B785F]">
              PARTO — FEATURES
            </span>
            <span className="text-[11px] text-[#888075]">01 / امکانات</span>
          </div>

          <div
            data-reveal
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-6 bg-[#A78F70]" />
                <span className="text-[11px] text-[#A28E73]">
                  تمام آنچه نیاز دارید
                </span>
              </div>
              <h2 className="text-[clamp(27px,3.3vw,46px)] font-medium leading-[1.5] tracking-[-0.045em]">
                فراتر از یک{" "}
                <span className="text-[#A28E73]">فروشگاه معمولی.</span>
              </h2>
            </div>

            <p className="max-w-[360px] shrink-0 text-[12px] leading-7 text-[#77736B]">
              از اولین نگاه تا آخرین مرحله خرید، تمام جزئیات برای خلق یک تجربه
              فروشگاهی حرفه‌ای کنار هم قرار گرفته‌اند.
            </p>
          </div>
        </Reveal>

        {/* ───────── Desktop: expanding panels side by side ───────── */}
        <div
          className="hidden h-[430px] w-full gap-2.5 lg:flex"
          onMouseLeave={() => setActive(active)}
        >
          {storeFeatures.map(({ title, desc, icon: Icon }, index) => {
            const isActive = active === index;

            return (
              <motion.article
                key={title}
                tabIndex={0}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                initial={false}
                animate={{ flexGrow: isActive ? 5.5 : 1 }}
                transition={
                  reduced ? { duration: 0 } : { duration: 0.7, ease }
                }
                className={[
                  "group relative isolate flex min-w-0 basis-0 cursor-pointer flex-col justify-between overflow-hidden rounded-[18px] border p-5 outline-none transition-colors duration-500",
                  isActive
                    ? "border-[#35352F] bg-[#35352F] text-[#F5F2EC] shadow-[0_24px_60px_-28px_rgba(41,40,34,0.55)]"
                    : "border-[#DCD7CE] bg-[#EBE7DF] text-[#292822] hover:border-[#C3B29B] hover:bg-[#E2D9CB]",
                ].join(" ")}
              >
                {/* big decorative number */}
                <span
                  aria-hidden
                  className={[
                    "pointer-events-none absolute -bottom-10 -left-3 select-none text-[240px] font-light leading-none tracking-[-0.1em] transition-opacity duration-700",
                    isActive ? "text-white/[0.05] opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  {pad(index + 1)}
                </span>

                {/* warm glow on active */}
                <span
                  aria-hidden
                  className={[
                    "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#C8B79C]/20 blur-3xl transition-opacity duration-700",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />

                {/* Top: number + icon */}
                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className={[
                      "text-[10px] tracking-[0.12em]",
                      isActive ? "text-[#C8B79C]" : "text-[#999185]",
                    ].join(" ")}
                  >
                    / {pad(index + 1)}
                  </span>

                  <div
                    className={[
                      "flex shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                      isActive
                        ? "h-14 w-14 border-white/20 bg-white/5"
                        : "h-10 w-10 border-[#292822]/15",
                    ].join(" ")}
                  >
                    <Icon
                      size={isActive ? 24 : 18}
                      strokeWidth={1.2}
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="relative z-10 min-h-0">
                  {/* collapsed: vertical title */}
                  {!isActive && (
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                      className="mx-auto whitespace-nowrap text-[14px] font-medium tracking-[-0.01em] text-[#4a463e] [writing-mode:vertical-rl] rotate-180"
                    >
                      {title}
                    </motion.h3>
                  )}

                  {/* expanded: full details */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.5, delay: 0.2, ease }}
                      >
                        <span className="mb-4 block h-px w-10 bg-[#C8B79C]" />
                        <h3 className="text-[30px] font-medium leading-[1.5] tracking-[-0.03em]">
                          {title}
                        </h3>
                        <div className="mt-2 flex items-end justify-between gap-4">
                          <p className="max-w-[340px] text-[12px] leading-[1.9] text-[#C8C4BC]">
                            {desc}
                          </p>
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C8B79C] text-[#292822] transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                            <ArrowUpLeft size={16} strokeWidth={1.5} />
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* bottom accent line */}
                <span
                  className={[
                    "absolute bottom-0 right-0 h-[2px] bg-[#C8B79C] transition-all duration-700",
                    isActive ? "w-full" : "w-0",
                  ].join(" ")}
                />
              </motion.article>
            );
          })}
        </div>

        {/* ───────── Mobile / tablet: horizontal snap carousel ───────── */}
        <div
          className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:-mx-8 md:px-8 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {storeFeatures.map(({ title, desc, icon: Icon }, index) => {
            const dark = index % 3 === 0;

            return (
              <motion.article
                key={title}
                initial={reduced ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease }}
                className={[
                  "relative isolate flex h-[250px] w-[78%] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[18px] border p-5 sm:w-[46%] md:w-[38%]",
                  dark
                    ? "border-[#35352F] bg-[#35352F] text-[#F5F2EC]"
                    : "border-[#DCD7CE] bg-[#EBE7DF] text-[#292822]",
                ].join(" ")}
              >
                <span
                  aria-hidden
                  className={[
                    "pointer-events-none absolute -bottom-8 -left-2 select-none text-[150px] font-light leading-none tracking-[-0.1em]",
                    dark ? "text-white/[0.05]" : "text-[#292822]/[0.04]",
                  ].join(" ")}
                >
                  {pad(index + 1)}
                </span>

                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className={[
                      "text-[10px] tracking-[0.12em]",
                      dark ? "text-[#C8B79C]" : "text-[#999185]",
                    ].join(" ")}
                  >
                    / {pad(index + 1)}
                  </span>
                  <div
                    className={[
                      "flex h-11 w-11 items-center justify-center rounded-full border",
                      dark ? "border-white/20" : "border-[#292822]/15",
                    ].join(" ")}
                  >
                    <Icon size={19} strokeWidth={1.2} aria-hidden />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-[19px] font-medium leading-[1.5] tracking-[-0.025em]">
                    {title}
                  </h3>
                  <p
                    className={[
                      "mt-1 text-[11px] leading-[1.9]",
                      dark ? "text-[#C8C4BC]" : "text-[#827D74]",
                    ].join(" ")}
                  >
                    {desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between border-t border-[#292822]/15 pt-5">
          <div className="flex items-center gap-3">
            <span className="text-[28px] font-light tracking-tight">
              {pad(storeFeatures.length)}
            </span>
            <span className="text-[11px] leading-5 text-[#827D74]">
              امکانات کاربردی
              <br />
              در یک تجربه یکپارچه
            </span>
          </div>

          {/* progress dots (desktop) */}
          <div className="hidden items-center gap-1.5 lg:flex" aria-hidden>
            {storeFeatures.map((_, i) => (
              <span
                key={i}
                className={[
                  "h-1 rounded-full transition-all duration-500",
                  i === active ? "w-6 bg-[#A78F70]" : "w-1.5 bg-[#292822]/20",
                ].join(" ")}
              />
            ))}
          </div>

          <span className="text-[10px] tracking-[0.1em] text-[#999185]">
            PARTO / COMMERCE
          </span>
        </div>
      </div>
    </section>
  );
}

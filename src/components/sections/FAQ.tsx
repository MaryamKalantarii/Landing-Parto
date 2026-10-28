import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { faqs } from "../../data/faqs";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FAQ() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
        {/* Title */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span
            data-reveal
            className="mb-4 block text-[11px] tracking-[0.12em] text-[#A28E73]"
          >
            FAQ
          </span>
          <h2
            data-reveal
            className="text-[clamp(26px,3vw,38px)] font-medium leading-[1.5] tracking-[-0.04em]"
          >
            سوالات متداول
          </h2>
        </Reveal>

        {/* List */}
        <Reveal stagger={0.06}>
          <ul className="border-t border-[#292822]/15">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-btn-${i}`;

              return (
                <li
                  key={f.q}
                  data-reveal
                  className="border-b border-[#292822]/15"
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-start outline-none focus-visible:text-[#A28E73]"
                    >
                      <span
                        className={[
                          "text-[15px] leading-[1.9] transition-colors duration-300 md:text-[16px]",
                          isOpen
                            ? "text-[#292822]"
                            : "text-[#292822]/70 group-hover:text-[#292822]",
                        ].join(" ")}
                      >
                        {f.q}
                      </span>

                      {/* plus / minus */}
                      <span
                        aria-hidden
                        className="relative h-3.5 w-3.5 shrink-0 text-[#292822]/60 transition-colors duration-300 group-hover:text-[#292822]"
                      >
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                        <span
                          className={[
                            "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-500",
                            isOpen ? "scale-y-0" : "scale-y-100",
                          ].join(" ")}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[560px] pb-7 text-[13px] leading-[2.1] text-mute">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

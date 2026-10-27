import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/** Warm ivory backdrop with soft stone formations (top-right and top-left), parallaxed by Hero. */
export default function HeroBackground() {
  const reduced = useReducedMotion();
  const fade = { initial: reduced ? false : { opacity: 0 }, animate: { opacity: 1 } } as const;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-br from-[#f4f0e9] via-[#f1ece4] to-[#e9e3d9]">
      <motion.div {...fade} transition={{ duration: 1.4, delay: 0.2 }} data-parallax="0.08" className="absolute -right-24 -top-16 h-[75%] w-[42%]">
        <svg viewBox="0 0 500 500" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="stoneA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#d9d1c4" />
              <stop offset="1" stopColor="#b5ab9c" />
            </linearGradient>
          </defs>
          <path d="M120 0 L500 0 L500 420 Q380 470 300 380 Q250 300 180 250 Q100 170 120 0Z" fill="url(#stoneA)" opacity="0.75" />
          <path d="M260 0 L500 0 L500 260 Q400 300 330 210 Q280 120 260 0Z" fill="#eee9df" opacity="0.65" />
        </svg>
      </motion.div>
      <motion.div {...fade} transition={{ duration: 1.4, delay: 0.35 }} className="absolute -left-10 bottom-0 h-[45%] w-[28%]">
        <svg viewBox="0 0 300 300" className="h-full w-full" preserveAspectRatio="none">
          <path d="M0 300 L0 120 Q80 60 150 140 Q210 210 300 190 L300 300Z" fill="#dcd4c7" opacity="0.5" />
        </svg>
      </motion.div>
    </div>
  );
}

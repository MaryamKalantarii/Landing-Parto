import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface Props {
  lines: string[];
  className?: string;
  delay?: number;
}

/** Line-by-line masked heading reveal (hero). */
export default function AnimatedText({ lines, className, delay = 0 }: Props) {
  const reduced = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-1">
          <motion.span
            className="block"
            initial={reduced ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

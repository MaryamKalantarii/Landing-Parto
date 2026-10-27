import { Check } from "lucide-react";
import { included } from "../../data/features";
import Reveal from "../ui/Reveal";

export default function IncludedFeatures() {
  return (
    <Reveal stagger={0.05}>
      <h2 data-reveal className="text-xl font-bold md:text-2xl">با خرید قالب چه چیزی دریافت می‌کنی؟</h2>
      <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        {included.map((t) => (
          <li key={t} data-reveal className="flex items-center gap-2.5 text-[13px]">
            <Check size={14} className="shrink-0 text-ink/70" aria-hidden />
            {t}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

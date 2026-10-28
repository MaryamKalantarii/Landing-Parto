import Reveal from "../ui/Reveal";
import { storeFeatures } from "../../data/features";

const toFa = (n: number) =>
  n.toLocaleString("fa-IR", { minimumIntegerDigits: 2, useGrouping: false });

export default function FeaturesGrid() {
  return (
    <Reveal as="div" className="w-full" stagger={0.06}>
      <header data-reveal className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-mute">
          <span className="h-px w-6 bg-ink/30" aria-hidden />
          امکانات
          <span className="h-px w-6 bg-ink/30" aria-hidden />
        </span>
        <h2 className="mt-3 text-2xl font-bold md:text-[28px]">
          هر چیزی که برای یک فروشگاه مدرن نیاز داری.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[13px] leading-7 text-mute">
          از سبد خرید تا تسویه حساب، همه‌چیز آماده، تمیز و قابل شخصی‌سازی.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {storeFeatures.map(({ title, desc, icon: Icon }, i) => (
          <li
            key={title}
            data-reveal
            className="group relative flex flex-col items-start overflow-hidden rounded-2xl border border-ink/10 bg-white/60 p-5 text-start backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]"
          >
            <span
              className="absolute end-4 top-4 text-[11px] font-medium tabular-nums text-ink/25 transition-colors duration-300 group-hover:text-ink/60"
              aria-hidden
            >
              {toFa(i + 1)}
            </span>

            <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 bg-white transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
              <Icon size={18} strokeWidth={1.4} aria-hidden />
            </span>

            <h3 className="mt-5 text-[14px] font-bold">{title}</h3>
            <p className="mt-1.5 text-[12.5px] leading-6 text-mute">{desc}</p>

            <span
              className="absolute bottom-0 start-0 h-px w-0 bg-ink transition-all duration-500 group-hover:w-full"
              aria-hidden
            />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
import { Check } from "lucide-react";
import { included } from "../../data/features";
import Reveal from "../ui/Reveal";

const pad = (n: number) => String(n).padStart(2, "0");

export default function IncludedFeatures() {
  return (
    <Reveal
      stagger={0.05}
      className="relative h-full overflow-hidden rounded-[22px] border border-[#DCD7CE] bg-[#EBE7DF] p-6 md:p-9"
    >
      {/* decorative glow + big number */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#A78F70]/15 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-2 select-none text-[220px] font-light leading-none tracking-[-0.1em] text-[#292822]/[0.035]"
      >
        {pad(included.length)}
      </span>

      <div className="relative">
        <div data-reveal className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#A78F70]" />
          <span className="text-[11px] tracking-[0.1em] text-[#A28E73]">
            INCLUDED / 04
          </span>
        </div>

        <h2
          data-reveal
          className="text-[24px] font-medium leading-[1.6] tracking-[-0.035em] md:text-[30px]"
        >
          با خرید قالب،{" "}
          <span className="text-[#A28E73]">چه چیزی دریافت می‌کنی؟</span>
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {included.map((t, i) => (
            <li
              key={t}
              data-reveal
              className="group flex items-center gap-3 border-b border-[#292822]/10 py-3.5 text-[13px] text-[#3a382f] transition-colors duration-300 hover:text-[#292822]"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#A78F70]/50 text-[#A78F70] transition-all duration-300 group-hover:border-[#35352F] group-hover:bg-[#35352F] group-hover:text-[#F5F2EC]">
                <Check size={13} strokeWidth={1.6} aria-hidden />
              </span>
              <span className="min-w-0 flex-1">{t}</span>
              <span className="text-[10px] tracking-[0.1em] text-[#292822]/25">
                {pad(i + 1)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
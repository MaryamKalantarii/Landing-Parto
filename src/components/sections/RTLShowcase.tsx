import { Check } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { ScaledStorefront } from "../ui/Storefront";
import { rtlChecklist } from "../../data/features";

export default function RTLShowcase() {
  return (
    <Reveal as="section" className="border-t border-line bg-cream/60 py-14">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 data-reveal className="text-2xl font-bold md:text-[28px]">آماده برای فارسی و راست‌چین.</h2>
          <p data-reveal className="mt-2 text-sm text-mute">تجربه‌ای بومی و حرفه‌ای برای کاربران ایرانی.</p>
          <ul className="mt-8 space-y-4">
            {rtlChecklist.map((t) => (
              <li key={t} data-reveal className="flex items-center gap-3 text-[15px]">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-ink/40">
                  <Check size={13} aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal className="overflow-hidden rounded-md border border-line bg-white shadow-[0_30px_50px_-25px_rgba(0,0,0,0.3)]">
          <div className="flex h-6 items-center gap-1.5 border-b border-line bg-[#f2efe9] px-3" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-ink/20" />
            ))}
          </div>
          <ScaledStorefront layout="list" />
        </div>
      </Container>
    </Reveal>
  );
}

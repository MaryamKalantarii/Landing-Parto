import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { techs } from "../../data/features";

function ChromeLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
      <path fill="#EA4335" d="M6.68 14A20 20 0 0 1 41.32 14L32.66 19A10 10 0 0 0 15.34 19Z" />
      <path fill="#FBBC05" d="M41.32 14A20 20 0 0 1 24 44L24 34A10 10 0 0 0 32.66 19Z" />
      <path fill="#34A853" d="M24 44A20 20 0 0 1 6.68 14L15.34 19A10 10 0 0 0 24 34Z" />
      <circle cx="24" cy="24" r="9" fill="#fff" />
      <circle cx="24" cy="24" r="7" fill="#4285F4" />
    </svg>
  );
}

export default function Technologies() {
  return (
    <section id="tech" className="on-dark bg-[#121010] py-10 text-white">
      <Container>
        <Reveal stagger={0.06}>
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <h2 data-reveal className="text-lg font-semibold tracking-tight">
                ساخته شده با تکنولوژی‌های مدرن
              </h2>
              <p data-reveal className="mt-1.5 text-xs text-white/50">
                ساختاری مدرن و قابل توسعه برای پروژه‌های واقعی
              </p>
            </div>

            <ul dir="ltr" className="flex flex-wrap justify-center gap-2">
              {techs.map((t) => (
                <li
                  key={t.name}
                  data-reveal
                  className="flex items-center gap-2 rounded-full bg-white/[0.04] py-1.5 pe-3.5 ps-2 text-xs text-white/75 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-[10px] font-semibold">
                    {t.mark === "chrome" ? <ChromeLogo /> : t.mark}
                  </span>
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
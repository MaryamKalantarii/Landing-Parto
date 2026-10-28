import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { valueFeatures } from "../../data/features";

export default function ValueProposition() {
  return (
    <Reveal as="section" id="intro" className="border-y border-line bg-ivory py-10">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 data-reveal className="text-2xl font-bold md:text-[28px]">پرتو؛ امضای متفاوت برند شما.</h2>
          <p data-reveal className="mt-3 max-w-md text-sm leading-7 text-mute">
            پرتو یک تجربه بی‌نظیر برای راه‌اندازی فروشگاه آنلاین شماست، با طراحی حرفه‌ای، عملکرد سریع و ساختاری قابل توسعه.
          </p>
        </div>
       
        <ul className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:divide-x md:divide-x-reverse md:divide-line">
          {valueFeatures.map(({ title, desc, icon: Icon }) => (
            <li
              key={title}
              data-reveal
              className="flex flex-col items-center px-3 text-center"
            >
              {/* Icon */}
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/30">
                <Icon size={18} strokeWidth={1.4} aria-hidden />
              </span>

              {/* Title */}
              <h3 className="mt-3 flex min-h-[48px] w-full items-center justify-center text-[13px] font-bold leading-6">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-1 w-full text-[11px] leading-5 text-mute">
                {desc}
              </p>
            </li>
          ))}
        </ul>

      </Container>
    </Reveal>
  );
}

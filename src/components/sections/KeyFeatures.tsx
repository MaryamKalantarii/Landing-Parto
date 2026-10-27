import Reveal from "../ui/Reveal";
import { Eyebrow, Para, SectionNumber, Title } from "../ui/SectionMeta";
import { keyFeatures } from "../../data/features";

export default function KeyFeatures() {
  return (
    <section id="features" className="relative bg-[#ece7df] py-20">
      <SectionNumber n="03" />
      <Reveal stagger={0.08} className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Features</Eyebrow>
          <div className="mt-5">
            <Title en="Key Features" fa="امکانات اصلی قالب" />
          </div>
        </div>
        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {keyFeatures.map(({ en, fa, icon: Icon }) => (
            <li key={en} data-reveal className="flex items-start gap-4">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center border border-ink/50">
                <Icon size={15} strokeWidth={1.3} aria-hidden />
              </span>
              <div>
                <h3 className="font-serif text-lg leading-tight">{en}</h3>
                <Para className="mt-1 !text-[11px]">{fa}</Para>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

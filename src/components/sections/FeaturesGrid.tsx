import Reveal from "../ui/Reveal";
import { storeFeatures } from "../../data/features";

export default function FeaturesGrid() {
  return (
    <Reveal as="div" className="w-full" stagger={0.06}>
      <h2 data-reveal className="mb-8 text-2xl font-bold md:text-[26px]">هر چیزی که برای یک فروشگاه مدرن نیاز داری.</h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {storeFeatures.map(({ title, desc, icon: Icon }) => (
          <li key={title} data-reveal className="flex flex-col items-center text-center">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/25 transition-colors duration-300 hover:bg-ink hover:text-white">
              <Icon size={17} strokeWidth={1.4} aria-hidden />
            </span>
            <h3 className="mt-3 text-[13px] font-bold">{title}</h3>
            <p className="mt-1 text-[11px] leading-5 text-mute">{desc}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

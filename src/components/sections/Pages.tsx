import Reveal from "../ui/Reveal";
import { ScaledStorefront } from "../ui/Storefront";
import { Eyebrow, SectionNumber, Title } from "../ui/SectionMeta";
import { pageList } from "../../data/pages";

export default function Pages() {
  return (
    <section id="pages" className="relative bg-[#ece7df] py-20">
      <SectionNumber n="05" />
      <Reveal stagger={0.07} className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 md:px-12 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <Eyebrow>Pages</Eyebrow>
          <div className="mt-5">
            <Title en="Pages" fa="تمامی صفحات قالب" />
          </div>
          <ul className="mt-8 space-y-3 text-[12px]">
            {pageList.map((p) => (
              <li key={p} data-reveal className="flex items-center gap-3">
                <span aria-hidden className="h-1.5 w-1.5 border border-ink/50" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        {/* collage of storefront pages */}
        <div data-reveal className="relative grid grid-cols-[1.2fr_1fr_1fr] gap-3">
          <div className="col-span-2 overflow-hidden rounded-[3px] border border-line bg-white shadow-xl"><ScaledStorefront layout="dark" /></div>
          <div className="overflow-hidden rounded-[3px] border border-line bg-white shadow-lg"><ScaledStorefront layout="product" /></div>
          <div className="overflow-hidden rounded-[3px] border border-line bg-white shadow-lg"><ScaledStorefront layout="editorial" /></div>
          <div className="overflow-hidden rounded-[3px] border border-line bg-white shadow-lg"><ScaledStorefront layout="list" /></div>
          <div className="overflow-hidden rounded-[3px] border border-line bg-white shadow-lg"><ScaledStorefront layout="cart" /></div>
        </div>
      </Reveal>
    </section>
  );
}

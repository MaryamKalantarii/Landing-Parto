import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";
import IncludedFeatures from "./IncludedFeatures";
import type { ArtKind } from "../../config/assets";

const cats: { label: string; kind: ArtKind }[] = [
  { label: "جواهرات", kind: "ring" },
  { label: "مد و پوشاک", kind: "fabric" },
  { label: "محصولات لوکس", kind: "perfume" },
  { label: "اکسسوری", kind: "interior" },
  { label: "سبک زندگی", kind: "interior" },
  { label: "کسب‌وکارهای خلاق", kind: "watch" },
];

export default function BrandCategories() {
  return (
    <section className="border-t border-line bg-paper py-14">
      <Container className="grid gap-12 lg:grid-cols-2 lg:divide-x lg:divide-x-reverse lg:divide-line">
        <IncludedFeatures />
        <Reveal stagger={0.07} className="lg:ps-12">
          <h2 data-reveal className="text-xl font-bold md:text-2xl">مناسب برای چه برندهایی؟</h2>
          <p data-reveal className="mt-1 text-xs text-mute">برای انواع کسب‌وکارهای محصول‌محور پریمیوم مناسب است.</p>
          <ul className="hide-scrollbar mt-6 flex gap-3 overflow-x-auto pb-2">
            {cats.map((c) => (
              <li key={c.label} data-reveal className="zoom-on-hover w-[104px] shrink-0">
                <div className="overflow-hidden rounded-sm">
                  <Art kind={c.kind} className="zoom-target aspect-[4/5] w-full" />
                </div>
                <p className="mt-2 text-center text-[11px]">{c.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

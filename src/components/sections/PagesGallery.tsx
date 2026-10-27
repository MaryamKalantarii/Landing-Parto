import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { ScaledStorefront } from "../ui/Storefront";
import { galleryPages } from "../../data/pages";

export default function PagesGallery() {
  const rail = useRef<HTMLUListElement>(null);
  const scrollBy = (dir: 1 | -1) => rail.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  return (
    <section id="gallery" className="border-t border-line bg-ivory py-12">
      <Container>
        <Reveal className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 data-reveal className="text-xl font-bold md:text-2xl">صفحات موجود در قالب</h2>
            <p data-reveal className="mt-1 text-xs text-mute">تمام صفحات این قالب برای شما قابل استفاده است.</p>
          </div>
          <div data-reveal className="flex gap-2">
            <button type="button" aria-label="قبلی" onClick={() => scrollBy(1)} className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:bg-ink hover:text-white">
              <ChevronRight size={16} />
            </button>
            <button type="button" aria-label="بعدی" onClick={() => scrollBy(-1)} className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:bg-ink hover:text-white">
              <ChevronLeft size={16} />
            </button>
          </div>
        </Reveal>
        <ul ref={rail} className="hide-scrollbar flex snap-x gap-3 overflow-x-auto pb-3">
          {galleryPages.map((p, i) => (
            <li key={`${p.label}-${i}`} className="lift w-[132px] shrink-0 snap-start">
              <div className="overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.35)]">
                <ScaledStorefront layout={p.layout} />
              </div>
              <p className="mt-2 text-center text-[10px] text-ink/70">{p.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

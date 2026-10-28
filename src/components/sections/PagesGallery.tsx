
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { ScaledStorefront } from "../ui/Storefront";
import { galleryPages } from "../../data/pages";

export default function PagesGallery() {
  const rail = useRef<HTMLUListElement>(null);
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    rail.current?.scrollBy({
      left: dir * 360,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (selectedPage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPage]);

  return (
    <>
      <section
        id="gallery"
        className="border-t border-line bg-ivory py-12"
      >
        <Container>
          <Reveal className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2
                data-reveal
                className="text-xl font-bold md:text-2xl"
              >
                صفحات موجود در قالب
              </h2>

              <p
                data-reveal
                className="mt-1 text-xs text-mute"
              >
                تمام صفحات این قالب برای شما قابل استفاده است.
              </p>
            </div>

            <div data-reveal className="flex gap-2">
              <button
                type="button"
                aria-label="قبلی"
                onClick={() => scrollBy(1)}
                className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:bg-ink hover:text-white"
              >
                <ChevronRight size={16} />
              </button>

              <button
                type="button"
                aria-label="بعدی"
                onClick={() => scrollBy(-1)}
                className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:bg-ink hover:text-white"
              >
                <ChevronLeft size={16} />
              </button>
            </div>
          </Reveal>

          <ul
            ref={rail}
            className="hide-scrollbar flex snap-x gap-3 overflow-x-auto pb-3"
          >
            {galleryPages.map((p, i) => (
              <li
                key={`${p.label}-${i}`}
                className="lift w-[132px] shrink-0 snap-start"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPage(i)}
                  aria-label={`نمایش بزرگ ${p.label}`}
                  className="block w-full cursor-zoom-in text-right"
                >
                  <div className="overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.35)]">
            {p.image ? (
              <img
                src={p.image}
                alt={p.label}
                loading="lazy"
                className="block h-auto w-full cursor-zoom-in"
              />
            ) : (
              <ScaledStorefront layout={p.layout} />
            )}
          </div>

                  <p className="mt-2 text-center text-[10px] text-ink/70">
                    {p.label}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {selectedPage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPage(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`نمایش ${galleryPages[selectedPage].label}`}
        >
          <button
            type="button"
            onClick={() => setSelectedPage(null)}
            aria-label="بستن تصویر"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-black sm:right-7 sm:top-7"
          >
            <X size={22} />
          </button>

          <div className="flex max-h-full w-full max-w-5xl flex-col items-center">
                  <div className="max-h-[82vh] w-full overflow-auto rounded-sm bg-white shadow-2xl">
                    {galleryPages[selectedPage].image ? (
                      <img
                        src={galleryPages[selectedPage].image}
                        alt={galleryPages[selectedPage].label}
                        className="block h-auto w-full object-contain"
                      />
                    ) : (
                      <ScaledStorefront
                        layout={galleryPages[selectedPage].layout}
                      />
                    )}
                  </div>

            <p className="mt-4 text-sm text-white/90">
              {galleryPages[selectedPage].label}
            </p>

            <p className="mt-1 text-xs text-white/50">
              برای بستن، روی فضای بیرون یا ضربدر کلیک کن.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

import { ArrowLeft } from "lucide-react";
import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { ScaledStorefront } from "../ui/Storefront";

export default function BeforeAfter() {
  return (
    <Reveal as="section" className="border-t border-line bg-paper py-14">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 data-reveal className="text-2xl font-bold md:text-[28px]">ظاهر برندت را جایگزین کن.</h2>
          <p data-reveal className="mt-3 max-w-sm text-sm leading-7 text-mute">
            پرتو کاملاً قابل شخصی‌سازی است و زیبایی‌های آن را می‌توانید با رنگ‌ها و فونت‌های برند خودتان هماهنگ کنید.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <figure data-reveal className="w-[40%]">
            <div className="overflow-hidden rounded-sm border border-line shadow-lg">
              <ScaledStorefront layout="product" />
            </div>
            <figcaption className="mt-2 text-center text-xs text-mute">Before</figcaption>
          </figure>
          <span data-reveal aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/40 bg-white">
            <ArrowLeft size={16} />
          </span>
          <figure data-reveal className="w-[48%]">
            <div className="overflow-hidden rounded-sm border border-line shadow-xl">
              <ScaledStorefront layout="dark" />
            </div>
            <figcaption className="mt-2 text-center text-xs text-mute">After</figcaption>
          </figure>
        </div>
      </Container>
    </Reveal>
  );
}

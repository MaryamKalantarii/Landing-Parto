import { ArrowUp, ArrowUpLeft, Instagram, Send, Youtube } from "lucide-react";
import { navItems } from "../../data/navigation";
import { siteConfig } from "../../config/site";
import { scrollToHash } from "../../hooks/useLenis";
import Container from "./Container";

const year = new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(
  new Date().getFullYear(),
);

export default function Footer() {
  const socials = [
    { label: "تلگرام", href: siteConfig.social.telegram, Icon: Send },
    { label: "اینستاگرام", href: siteConfig.social.instagram, Icon: Instagram },
    { label: "یوتیوب", href: siteConfig.social.youtube, Icon: Youtube },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ivory pt-16">
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[#A78F70]/10 blur-3xl"
      />

      <Container className="relative">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_auto] lg:gap-16">
          {/* Brand */}
          <div className="text-center lg:text-start">
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-8 bg-[#A78F70]" />
              <span className="text-[10px] tracking-[0.14em] text-[#A28E73]">
                LUXURY COMMERCE
              </span>
            </div>
            <p className="font-serif text-[34px] leading-none tracking-[0.24em]">
              PARTO
            </p>
            <p className="mx-auto mt-4 max-w-[300px] text-[13px] leading-[2] text-mute lg:mx-0">
              قالب فروشگاهی مدرن برای برندهای لوکس.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="پیوندهای پایین صفحه">
            <p className="mb-5 text-center text-[10px] tracking-[0.14em] text-[#999185] lg:text-start">
              NAVIGATION
            </p>
            <ul className="mx-auto grid max-w-[360px] grid-cols-2 gap-x-8 lg:mx-0">
              {[...navItems].reverse().map((item) => (
                <li key={item.href} className="border-b border-[#292822]/10">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash(item.href);
                    }}
                    className="group flex items-center justify-between py-3 text-[13px] text-ink/70 transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                    <ArrowUpLeft
                      size={13}
                      strokeWidth={1.3}
                      aria-hidden
                      className="opacity-0 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#A28E73] group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="text-center lg:text-start">
            <p className="mb-5 text-[10px] tracking-[0.14em] text-[#999185]">
              FOLLOW
            </p>
            <ul className="flex justify-center gap-2.5 lg:justify-start">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-[#292822]/20 text-ink transition-all duration-500 hover:-translate-y-1 hover:border-[#35352F] hover:bg-[#35352F] hover:text-[#F5F2EC]"
                    >
                      <Icon size={16} strokeWidth={1.4} />
                    </a>
                  ) : (
                    <span
                      aria-label={`${label} (لینک تنظیم نشده)`}
                      title={`${label} (لینک تنظیم نشده)`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-dashed border-[#292822]/20 text-ink/30"
                    >
                      <Icon size={16} strokeWidth={1.4} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big faded wordmark */}
        <div
          aria-hidden
          dir="ltr"
          className="pointer-events-none mt-14 select-none text-center font-serif text-[clamp(70px,19vw,260px)] leading-[0.82] tracking-[0.12em] text-[#292822]/[0.05] [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
        >
          PARTO
        </div>

        {/* Bottom bar */}
        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-[#292822]/15 py-6 sm:flex-row">
          <p className="text-[11px] text-mute">
            © {year} Parto. تمامی حقوق محفوظ است.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2.5 text-[11px] text-ink/70 transition-colors hover:text-ink"
          >
            بازگشت به بالا
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[#292822]/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-[#35352F] group-hover:bg-[#35352F] group-hover:text-[#F5F2EC]">
              <ArrowUp size={13} strokeWidth={1.4} />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}

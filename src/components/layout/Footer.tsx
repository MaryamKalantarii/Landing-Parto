import { Instagram, Send, Youtube } from "lucide-react";
import { navItems } from "../../data/navigation";
import { siteConfig } from "../../config/site";
import { scrollToHash } from "../../hooks/useLenis";
import Container from "./Container";

export default function Footer() {
  const socials = [
    { label: "تلگرام", href: siteConfig.social.telegram, Icon: Send },
    { label: "اینستاگرام", href: siteConfig.social.instagram, Icon: Instagram },
    { label: "یوتیوب", href: siteConfig.social.youtube, Icon: Youtube },
  ];
  return (
    <footer className="border-t border-line bg-ivory py-8">
      <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-start">
          <p className="font-serif text-2xl tracking-[0.22em]">PARTO</p>
          <p className="mt-1 text-xs text-mute">قالب فروشگاهی مدرن برای برندهای لوکس.</p>
        </div>

        <nav aria-label="پیوندهای پایین صفحه">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-xs">
            {[...navItems].reverse().map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash(item.href);
                  }}
                  className="text-ink/80 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <ul className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white transition-opacity hover:opacity-80">
                    <Icon size={14} />
                  </a>
                ) : (
                  <span aria-label={`${label} (لینک تنظیم نشده)`} className="grid h-8 w-8 place-items-center rounded-full bg-ink/30 text-white">
                    <Icon size={14} />
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-mute">© ۲۰۲۵ Parto. تمامی حقوق محفوظ است.</p>
        </div>
      </Container>
    </footer>
  );
}

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../data/navigation";
import { siteConfig, resolveHref } from "../../config/site";
import { scrollToHash, startScroll, stopScroll } from "../../hooks/useLenis";
import Button from "../ui/Button";
import Container from "./Container";
import { cn } from "../../lib/gsap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    stopScroll();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      startScroll();
      toggleRef.current?.focus();
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToHash(href), 50);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "bg-ivory/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-serif text-2xl font-medium tracking-[0.22em]"
          aria-label="PARTO — بازگشت به بالا"
        >
          PARTO
        </a>

        <nav aria-label="منوی اصلی" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[13px] font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash(item.href);
                  }}
                  className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={resolveHref(siteConfig.demoUrl, "#hero")} variant="outline" size="sm">
            مشاهده دمو
          </Button>
          <Button href={resolveHref(siteConfig.purchaseUrl, "#cta")} size="sm">
            خرید قالب
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="grid h-10 w-10 place-items-center lg:hidden"
          aria-label="باز کردن منو"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="منو"
            className="fixed inset-0 z-50 flex flex-col bg-ivory px-6 py-4"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-12 items-center justify-between">
              <span className="font-serif text-2xl tracking-[0.22em]">PARTO</span>
              <button ref={closeRef} type="button" aria-label="بستن منو" className="grid h-10 w-10 place-items-center" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <ul className="mt-10 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    className="block border-b border-line py-4 text-lg font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Button href={resolveHref(siteConfig.purchaseUrl, "#cta")} className="flex-1" onClick={() => setOpen(false)}>
                خرید قالب
              </Button>
              <Button href={resolveHref(siteConfig.demoUrl, "#hero")} variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                مشاهده دمو
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

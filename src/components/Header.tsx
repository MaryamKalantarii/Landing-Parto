import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { PURCHASE_URL, heroContent, navItems } from "../config/heroConfig";
import { externalLinkProps, handleAnchorClick } from "../lib/links";
import "./Header.css";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 12,
  );
  const [open, setOpen] = useState(false);

  // Header turns slightly opaque + gets a hairline border once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: close on Escape and when the viewport grows to desktop size.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onBreakpoint = () => {
      if (mq.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  // Gentle entrance (step 1 of the hero sequence).
  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: -14 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out", clearProps: "all" },
      );
    });
    return () => mm.revert();
  }, []);

  const onLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    setOpen(false);
  };

  const className = ["site-header", scrolled || open ? "is-scrolled" : "", open ? "is-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header ref={headerRef} className={className}>
      <a className="skip-link" href="#home" onClick={(e) => onLinkClick(e, "#home")}>
        پرش به محتوای اصلی
      </a>

      <div className="site-header__inner">
        <a
          className="site-header__logo"
          href="#home"
          aria-label="PARTO، ابتدای صفحه"
          onClick={(e) => onLinkClick(e, "#home")}
        >
          {heroContent.brand}
        </a>

        <nav className="site-header__nav" aria-label="ناوبری اصلی">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => onLinkClick(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a
            className="parto-btn parto-btn--dark parto-btn--sm"
            href={PURCHASE_URL}
            onClick={(e) => onLinkClick(e, PURCHASE_URL)}
            {...externalLinkProps(PURCHASE_URL)}
          >
            {heroContent.headerCta}
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={20} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="site-header__panel" aria-label="منوی موبایل">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => onLinkClick(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

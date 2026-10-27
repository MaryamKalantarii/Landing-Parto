import type { MouseEvent, ReactNode } from "react";
import { scrollToHash } from "../../hooks/useLenis";
import { cn } from "../../lib/gsap";

interface Props {
  href: string;
  variant?: "dark" | "light" | "outline" | "ghost-light";
  size?: "sm" | "md";
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const variants = {
  dark: "bg-ink text-white hover:bg-charcoal border border-ink",
  light: "bg-paper text-ink hover:bg-white border border-paper",
  outline: "bg-transparent text-ink border border-ink/40 hover:border-ink hover:bg-ink/[0.04]",
  "ghost-light": "bg-transparent text-white border border-white/50 hover:bg-white/10",
} as const;

export default function Button({ href, variant = "dark", size = "md", icon, children, className, onClick }: Props) {
  const external = /^https?:/.test(href);
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToHash(href);
    }
  };
  return (
    <a
      href={href}
      onClick={handle}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-md font-medium transition-colors duration-300",
        size === "md" ? "h-12 px-7 text-[15px]" : "h-9 px-4 text-[13px]",
        variants[variant],
        className,
      )}
    >
      {icon && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      {children}
    </a>
  );
}

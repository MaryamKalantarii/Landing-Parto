import type { ReactNode } from "react";
import { cn } from "../../lib/gsap";

interface Props {
  title: string;
  sub?: ReactNode;
  dark?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({ title, sub, dark, className, as: Tag = "h2" }: Props) {
  return (
    <div className={className}>
      <Tag data-reveal className={cn("text-2xl font-bold leading-snug md:text-[28px]", dark ? "text-white" : "text-ink")}>
        {title}
      </Tag>
      {sub && (
        <p data-reveal className={cn("mt-2 text-sm leading-7 md:text-[15px]", dark ? "text-white/65" : "text-mute")}>
          {sub}
        </p>
      )}
    </div>
  );
}

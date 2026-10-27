import type { ElementType, ReactNode } from "react";
import { cn } from "../../lib/gsap";

interface Props {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export default function Container({ as: Tag = "div", className, children }: Props) {
  return <Tag className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12", className)}>{children}</Tag>;
}

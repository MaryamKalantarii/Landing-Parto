import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Props {
  as?: ElementType;
  className?: string;
  id?: string;
  children: ReactNode;
  stagger?: number;
}

/** Wrapper: every descendant marked `data-reveal` fades up in sequence on scroll. */
export default function Reveal({ as: Tag = "div", className, id, children, stagger }: Props) {
  const ref = useScrollReveal<HTMLElement>({ stagger });
  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}

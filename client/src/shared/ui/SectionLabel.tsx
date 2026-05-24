import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  compact?: boolean;
}

export function SectionLabel({
  children,
  className,
  compact = false,
}: SectionLabelProps) {
  return (
    <h2 className={cn("section-label", compact && "section-label--compact", className)}>
      <span className="section-label__text">{children}</span>
    </h2>
  );
}

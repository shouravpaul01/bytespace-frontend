"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { labelSizeClasses, type LabelSize } from "./typography";

export interface FilterButtonProps extends Omit<
  React.ComponentProps<typeof Button>,
  "size"
> {
  /** Whether the filter button is currently active/selected */
  isActive?: boolean;
  /** Label typography size token ('l' | 'm' | 's' | 'xs'), defaults to 'm' (16px) */
  labelSize?: LabelSize;
  /** Button sizing variant */
  size?: "default" | "sm" | "lg";
}

export function FilterButton({
  children,
  isActive = false,
  labelSize = "s",
  size = "default",
  className,
  variant,
  type = "button",
  ...props
}: FilterButtonProps) {
  return (
    <Button
      type={type}
      variant={variant || (isActive ? "secondary" : "ghost")}
      aria-pressed={isActive}
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "h-[43px] rounded-full px-4 sm:px-5 border-0 font-satoshi transition-colors duration-200 cursor-pointer select-none active:translate-y-0 focus-visible:ring-0 focus-visible:outline-none",
        isActive
          ? "bg-secondary text-[#242528]! shadow-none hover:bg-secondary/80"
          : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-secondary hover:text-[#242528]",
        labelSizeClasses[labelSize],
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

// Aliases for flexibility across different use cases and design system patterns
export {
  FilterButton as PillButton,
  FilterButton as FilterChip,
  FilterButton as CategoryPill,
};
export default FilterButton;

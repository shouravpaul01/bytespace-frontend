import React from "react";
import { cn } from "@/lib/utils";

export interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  cellSize?: number;
  strokeColor?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "hero-blue" | "light" | "default";
}

/**
 * Reusable Grid Background component.
 * Can be used as a standalone background overlay or as a wrapper component.
 * Designed to be reused across multiple pages and sections.
 */
export function GridPattern({
  cellSize = 120,
  strokeColor,
  strokeWidth = 1,
  strokeDasharray,
  className,
  children,
  variant = "default",
  ...props
}: GridPatternProps) {
  // Determine stroke color based on variant if not explicitly provided
  const resolvedStroke =
    strokeColor ||
    (variant === "hero-blue"
      ? "rgba(255, 255, 255, 0.14)"
      : variant === "light"
      ? "rgba(0, 59, 226, 0.08)"
      : "rgba(255, 255, 255, 0.12)");

  const patternId = React.useId();

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {/* SVG Grid Canvas */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={patternId}
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path
              d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
              fill="none"
              stroke={resolvedStroke}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Render children on top of the grid if provided */}
      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  );
}

export default GridPattern;

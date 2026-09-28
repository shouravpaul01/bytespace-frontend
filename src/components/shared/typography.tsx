import React, { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ==========================================================================
   Heading Typography
   Family: Poppins SemiBold (600) | Line-height: 120%
   ========================================================================== */
export type HeadingSize = "l" | "m" | "s" | "xs" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: HeadingSize;
  as?: ElementType;
  children: React.ReactNode;
}

const headingSizeClasses: Record<HeadingSize, string> = {
  // Design System Standard Tokens
  l: "font-poppins font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.2] tracking-tight",
  m: "font-poppins font-semibold text-[32px] md:text-[40px] lg:text-[44px] leading-[1.2] tracking-tight",
  s: "font-poppins font-semibold text-[26px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-tight",
  xs: "font-poppins font-semibold text-[20px] leading-[1.2]",

  // Semantic Tag Mappings (for convenience & compatibility)
  h1: "font-poppins font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.2] tracking-tight",
  h2: "font-poppins font-semibold text-[32px] md:text-[40px] lg:text-[44px] leading-[1.2] tracking-tight",
  h3: "font-poppins font-semibold text-[26px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-tight",
  h4: "font-poppins font-semibold text-[20px] leading-[1.2]",
  h5: "font-poppins font-semibold text-[18px] leading-[1.2]",
  h6: "font-poppins font-semibold text-[16px] leading-[1.2]",
};

const defaultHeadingElement: Record<HeadingSize, ElementType> = {
  l: "h1",
  m: "h2",
  s: "h3",
  xs: "h4",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

export function Heading({
  size = "m",
  as,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as || defaultHeadingElement[size] || "h2";

  return (
    <Component
      className={cn(headingSizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

/* ==========================================================================
   Body Typography
   Family: Satoshi Regular (400) | Line-height: 160%
   ========================================================================== */
export type BodySize = "l" | "m" | "s" | "xs";

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: BodySize;
  as?: ElementType;
  children: React.ReactNode;
}

const bodySizeClasses: Record<BodySize, string> = {
  l: "font-satoshi font-normal text-[18px] leading-[1.6]",
  m: "font-satoshi font-normal text-[16px] leading-[1.6]",
  s: "font-satoshi font-normal text-[14px] leading-[1.6]",
  xs: "font-satoshi font-normal text-[12px] leading-[1.6]",
};

export function Body({
  size = "m",
  as = "p",
  className,
  children,
  ...props
}: BodyProps) {
  const Component = as;

  return (
    <Component
      className={cn(bodySizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

// Alias for Body
export const Text = Body;

/* ==========================================================================
   Label Typography
   Family: Satoshi Medium (500) | Line-height: 120%
   ========================================================================== */
export type LabelSize = "l" | "m" | "s" | "xs";

export interface LabelProps extends HTMLAttributes<HTMLElement> {
  size?: LabelSize;
  as?: ElementType;
  children: React.ReactNode;
}

const labelSizeClasses: Record<LabelSize, string> = {
  l: "font-satoshi font-medium text-[18px] leading-[1.2]",
  m: "font-satoshi font-medium text-[16px] leading-[1.2]",
  s: "font-satoshi font-medium text-[14px] leading-[1.2]",
  xs: "font-satoshi font-medium text-[12px] leading-[1.2]",
};

export function Label({
  size = "m",
  as = "span",
  className,
  children,
  ...props
}: LabelProps) {
  const Component = as;

  return (
    <Component
      className={cn(labelSizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

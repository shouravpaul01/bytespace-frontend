import React, { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type FontFamily = "poppins" | "satoshi" | "clash";

export const fontClasses: Record<FontFamily, string> = {
  poppins: "font-poppins",
  satoshi: "font-satoshi",
  clash: "font-clash",
};

/* ==========================================================================
   Heading Typography
   Default Family: Poppins SemiBold (600) | Line-height: 120%
   Optional Family: Clash Display / Satoshi
   ========================================================================== */
export type HeadingSize =
  | "l"
  | "m"
  | "s"
  | "xs"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: HeadingSize;
  font?: FontFamily;
  as?: ElementType;
  children: React.ReactNode;
}

export const headingSizeClasses: Record<HeadingSize, string> = {
  // Design System Standard Tokens
  l: "font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.2] tracking-tight",
  m: "font-semibold text-[32px] md:text-[40px] lg:text-[44px] leading-[1.2] tracking-tight",
  s: "font-semibold text-[26px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-tight",
  xs: "font-semibold text-[20px] leading-[1.2]",

  // Semantic Tag Mappings (for convenience & compatibility)
  h1: "font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.2] tracking-tight",
  h2: "font-semibold text-[32px] md:text-[40px] lg:text-[44px] leading-[1.2] tracking-tight",
  h3: "font-semibold text-[26px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-tight",
  h4: "font-semibold text-[20px] leading-[1.2]",
  h5: "font-semibold text-[18px] leading-[1.2]",
  h6: "font-semibold text-[16px] leading-[1.2]",
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
  font = "poppins",
  as,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as || defaultHeadingElement[size] || "h2";

  return (
    <Component
      className={cn(fontClasses[font], headingSizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

/* ==========================================================================
   Display Typography (Specifically tailored for Clash Display)
   ========================================================================== */
export function Display({
  size = "l",
  font = "clash",
  as = "h1",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Heading
      size={size}
      font={font}
      as={as}
      className={cn("tracking-normal", className)}
      {...props}
    >
      {children}
    </Heading>
  );
}

/* ==========================================================================
   Body Typography
   Default Family: Satoshi Regular (400) | Line-height: 160%
   ========================================================================== */
export type BodySize = "l" | "m" | "s" | "xs";

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: BodySize;
  font?: FontFamily;
  as?: ElementType;
  children: React.ReactNode;
}

export const bodySizeClasses: Record<BodySize, string> = {
  l: "font-normal text-[18px] leading-[1.6]",
  m: "font-normal text-[16px] leading-[1.6]",
  s: "font-normal text-[14px] leading-[1.6]",
  xs: "font-normal text-[12px] leading-[1.6]",
};

export function Body({
  size = "m",
  font = "satoshi",
  as = "p",
  className,
  children,
  ...props
}: BodyProps) {
  const Component = as;

  return (
    <Component
      className={cn(fontClasses[font], bodySizeClasses[size], className)}
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
   Default Family: Satoshi Medium (500) | Line-height: 120%
   ========================================================================== */
export type LabelSize = "l" | "m" | "s" | "xs" | "xl";

export interface LabelProps extends HTMLAttributes<HTMLElement> {
  size?: LabelSize;
  font?: FontFamily;
  as?: ElementType;
  children: React.ReactNode;
}

export const labelSizeClasses: Record<LabelSize, string> = {
  l: "font-medium text-[18px] leading-[1.2]",
  m: "font-medium text-[16px] leading-[1.2]",
  s: "font-medium text-[14px] leading-[1.2]",
  xs: "font-medium text-[12px] leading-[1.2]",
  xl: "font-medium text-[20px] leading-[1.2]",
};

export function Label({
  size = "m",
  font = "satoshi",
  as = "span",
  className,
  children,
  ...props
}: LabelProps) {
  const Component = as;

  return (
    <Component
      className={cn(fontClasses[font], labelSizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Helper to get typography class string directly for any element or component className
 */
export function getTypographyClass(
  type: "heading" | "body" | "label",
  size: string = "m",
  font?: FontFamily,
): string {
  if (type === "heading") {
    return cn(
      fontClasses[font || "poppins"],
      headingSizeClasses[size as HeadingSize] || headingSizeClasses.m,
    );
  }
  if (type === "label") {
    return cn(
      fontClasses[font || "satoshi"],
      labelSizeClasses[size as LabelSize] || labelSizeClasses.m,
    );
  }
  return cn(
    fontClasses[font || "satoshi"],
    bodySizeClasses[size as BodySize] || bodySizeClasses.m,
  );
}

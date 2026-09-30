import React, { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Heading,
  type HeadingSize,
  bodySizeClasses,
  type BodySize,
  type FontFamily,
} from "./typography";

export interface SectionHeaderProps {
  /** Section title text or JSX */
  title: ReactNode;
  /** Optional custom className for the title */
  titleClassName?: string;
  /** Title typography size token, defaults to 'm' */
  titleSize?: HeadingSize;
  /** Semantic HTML heading tag, defaults to 'h2' */
  as?: ElementType;
  /** Font family for title, defaults to 'poppins' */
  titleFont?: FontFamily;
  /** Section subtitle or description */
  description?: ReactNode;
  /** Optional custom className for the description */
  descriptionClassName?: string;
  /** Body typography size token, defaults to 'm' (16px) */
  descriptionSize?: BodySize;
  /** Text and layout alignment ('left' | 'center'), defaults to 'left' */
  align?: "left" | "center";
  /** Container className */
  className?: string;
}

export function SectionHeader({
  title,
  titleClassName,
  titleSize = "m",
  as = "h2",
  titleFont,
  description,
  descriptionClassName,
  descriptionSize = "m",
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "w-full flex flex-col",
        isCentered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Heading
        as={as}
        size={titleSize}
        font={titleFont}
        className={cn("max-w-3xl", titleClassName)}
      >
        {title}
      </Heading>

      {description && (
        <p
          className={cn(
            "text-slate-400 max-w-242.5 mt-3 sm:mt-4.5 font-satoshi",
            isCentered && "mx-auto",
            bodySizeClasses[descriptionSize],
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;

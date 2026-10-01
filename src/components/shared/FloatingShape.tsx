import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface FloatingShapeProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

/**
 * Reusable single floating 3D shape component.
 * Can be placed in any section or layout with custom coordinates, rotations, and sizing.
 */
export function FloatingShape({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  priority = true,
}: FloatingShapeProps) {
  return (
    <div
      className={cn("pointer-events-none absolute z-0 select-none", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn("object-contain", imageClassName)}
      />
    </div>
  );
}

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

export interface AvatarStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of avatar image URLs */
  avatars: string[];
  /** Count text or badge text at the end, e.g. "2K+", "+1.2k" */
  countText?: React.ReactNode;
  /** Maximum number of avatars to display before truncation */
  max?: number;
  /** Size variant for avatars ('sm' | 'md' | 'lg'), defaults to 'md' */
  size?: "sm" | "md";
  /** Custom className for the individual Avatar items */
  avatarClassName?: string;
  /** Custom className for the count badge */
  countClassName?: string;
}

const sizeClasses = {
  sm: "size-8 text-[10px]",
  md: "size-7 sm:size-10.75 text-[10px] sm:text-xs",
};

/**
 * Reusable AvatarStack component using shadcn Avatar primitives.
 * Displays overlapping avatars with an optional neon/secondary count badge.
 */
export function AvatarStack({
  avatars,
  countText,
  max,
  size = "md",
  className,
  avatarClassName,
  countClassName,
  ...props
}: AvatarStackProps) {
  const displayedAvatars = max ? avatars.slice(0, max) : avatars;

  return (
    <AvatarGroup
      className={cn("flex items-center -space-x-2 ", className)}
      {...props}
    >
      {displayedAvatars.map((src, idx) => (
        <Avatar
          key={idx}
          className={cn(
            "border-2 border-white ring-0! shrink-0",
            sizeClasses[size],
            avatarClassName,
          )}
        >
          <AvatarImage src={src} alt={`User ${idx + 1}`} />
          <AvatarFallback className="bg-neutral-200 font-medium">
            {idx + 1}
          </AvatarFallback>
        </Avatar>
      ))}

      {countText !== undefined && countText !== null && (
        <AvatarGroupCount
          className={cn(
            "bg-secondary text-neutral-950 font-bold border-2 border-white ring-0! shadow-xs select-none shrink-0",
            sizeClasses[size],
            countClassName,
          )}
        >
          {countText}
        </AvatarGroupCount>
      )}
    </AvatarGroup>
  );
}

// Aliases
export { AvatarStack as StudentAvatarStack, AvatarStack as EnrolledAvatars };

export default AvatarStack;

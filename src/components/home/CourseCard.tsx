"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Signal, BookOpen, SignalMedium } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AvatarStack } from "@/components/shared/AvatarStack";
import type { CourseItem } from "@/constant";
import { cn } from "@/lib/utils";
import {
  Body,
  Heading,
  headingSizeClasses,
  Label,
  labelSizeClasses,
} from "@/components/shared/typography";

/**
 * Props for CourseCard component.
 */
interface CourseCardProps {
  course: CourseItem;
  className?: string;
  starClassName?: string;
  priority?: boolean;
}

/**
 * Reusable course card showcasing course thumbnail, meta tags, rating, instructor, and pricing.
 */
export function CourseCard({
  course,
  className,
  starClassName = "fill-amber-400 text-amber-400",
  priority = false,
}: CourseCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Card
      className={cn(
        "group gap-0! rounded-[24px] border border-slate-200! p-4 sm:p-5 flex flex-col shadow-none hover:shadow-xl hover:border-transparent transition-all duration-300",
        className,
      )}
    >
      <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden bg-[#EDF0F5] mb-4 select-none">
        {!imgError ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-white/40">
            <BookOpen className="size-10 stroke-[1.5]" />
          </div>
        )}

        {/* Frosted metric badges */}
        <div className="absolute bottom-2.5 sm:bottom-3 inset-x-2.5 sm:inset-x-3 flex items-center justify-between gap-1 z-10">
          {[course.lessons, course.duration, course.comments].map(
            (stat, idx) => (
              <span
                key={idx}
                className={cn(
                  "px-2.5 h-6.5 flex justify-center items-center rounded-full bg-[#F6F6F699] backdrop-blur-sm text-neutral-700 border border-white/30 whitespace-nowrap",
                  labelSizeClasses.xs,
                )}
              >
                {stat}
              </span>
            ),
          )}
        </div>
      </div>

      <CardContent className="flex flex-col flex-1 p-0">
        <div className="flex items-center justify-between gap-2">
          <Link href={`/courses/${course.id}`} className="flex-1">
            <Heading size="xs" className="line-clamp-1">
              {course.title}
            </Heading>
          </Link>

          <div
            className={cn("flex items-center gap-1 shrink-0 text-[#4F4F4F]")}
          >
            <Body size="l">{course.rating.toFixed(1)}</Body>
            <Star className={cn("size-4", starClassName)} />
          </div>
        </div>

        <p className={cn("mt-1", labelSizeClasses.xs)}>
          by{" "}
          <span className="hover:underline cursor-pointer text-primary">
            {course.instructor}
          </span>
        </p>

        <div className="flex items-center gap-3 mt-4">
          <Badge
            variant="outline"
            className={cn(
              "h-8 px-3 rounded-full bg-[#F5F5F7] text-slate-700 border-0 gap-0.5 shadow-none",
              labelSizeClasses.xs,
            )}
          >
            <SignalMedium className="size-5! text-slate-700" />
            {course.level}
          </Badge>

          <AvatarStack
            avatars={course.studentAvatars}
            max={4}
            countText={course.enrolledCount}
          />
        </div>

        <div className="mt-4 flex items-baseline gap-1">
          <Heading size="xs" className="text-primary">
            {course.price}
          </Heading>
          <Label size="xs" className="text-[#4F4F4F]">
            /{course.billingPeriod}
          </Label>
        </div>
      </CardContent>
    </Card>
  );
}

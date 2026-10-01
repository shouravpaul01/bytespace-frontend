"use client";

import React from "react";
import Image from "next/image";
import { Star, SignalMedium } from "lucide-react";
import { cn } from "@/lib/utils";
import { Heading, Text, Label, Body } from "@/components/shared/typography";
import { AvatarStack } from "./AvatarStack";

/* =========================================================================
   1. Course Stats Badge (e.g. "UI/UX Design • 200 Courses • 1000+ Students")
   ========================================================================= */

export interface CourseStatsBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  coursesCount?: number | string;
  studentsCount?: string;
}

export function CourseStatsBadge({
  title = "UI/UX Design",
  coursesCount = 200,
  studentsCount = "1000+",
  className,
  ...props
}: CourseStatsBadgeProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[16px] p-3 sm:p-4 shadow-2xl border border-white/50 transition-transform hover:scale-105 select-none",
        className,
      )}
      {...props}
    >
      <Label size="m" className="text-slate-950">
        {title}
      </Label>
      <Text size="xs" className="text-slate-400 mt-1 whitespace-nowrap">
        {coursesCount} Courses &nbsp;•&nbsp; {studentsCount} Students
      </Text>
    </div>
  );
}

/* =========================================================================
   2. Learning Progress Badge (e.g. "Learning Progress • 55% • Progress Bar")
   ========================================================================= */

export interface LearningProgressBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  progress?: number;
  barColor?: string;
}

export function LearningProgressBadge({
  label = "Learning Progress",
  progress = 55,
  barColor = "bg-secondary",
  className,
  ...props
}: LearningProgressBadgeProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/50 min-w-[140px] sm:min-w-[170px] md:min-w-[195px] transition-transform hover:scale-105 select-none",
        className,
      )}
      {...props}
    >
      <Label size="xs" className="text-neutral-600">
        {label}
      </Label>
      <Heading className="text-5xl!">{progress}%</Heading>
      {/* Progress Bar */}
      <div className="w-full sm:w-50 h-2 sm:h-2.5 bg-neutral-100 rounded-full mt-2 overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000",
            barColor,
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

/* =========================================================================
   3. Happy Students Badge (e.g. "Happy Students • 4.5 (240) • Avatars • 2K+")
   ========================================================================= */

const defaultStudentAvatars = [
  "/images/students/student1.jpg",
  "/images/students/student2.jpg",
  "/images/students/student3.jpg",
  "/images/students/student4.jpg",
  "/images/students/student5.jpg",
];

export interface HappyStudentsBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  rating?: string | number;
  reviewsCount?: string | number;
  avatars?: string[];
  badgeText?: string;
}

export function HappyStudentsBadge({
  title = "Happy Students",
  rating = "4.5",
  reviewsCount = 240,
  avatars = defaultStudentAvatars,
  badgeText = "2K+",
  className,
  ...props
}: HappyStudentsBadgeProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/50 transition-transform hover:scale-105 select-none",
        className,
      )}
      {...props}
    >
      <div className="space-y-1">
        <Label size="m" className="text-slate-950">
          {title}
        </Label>
        <div className="flex items-center gap-1">
          <Body size="xs" className="text-slate-400">
            {rating} ({reviewsCount})
          </Body>
          <Star className="size-4 text-secondary fill-secondary" />
        </div>
      </div>

      {/* Overlapping Avatars using shared AvatarStack */}
      <AvatarStack
        size="md"
        avatars={avatars}
        countText={badgeText}
        className="mt-2.5"
      />
    </div>
  );
}

/* =========================================================================
   5. Total Revenue Badge (e.g. "Total Revenue • July 1-28 • $120.29")
   ========================================================================= */

export interface TotalRevenueBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  dateRange?: string;
  amount?: string;
  progress?: number;
}

export function TotalRevenueBadge({
  title = "Total Revenue",
  dateRange = "July 1-28",
  amount = "$120.29",
  progress = 65,
  className,
  ...props
}: TotalRevenueBadgeProps) {
  return (
    <div
      className={cn(
        "bg-primary text-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/20 min-w-[140px] sm:min-w-[252px] transition-transform hover:scale-105 select-none",
        className,
      )}
      {...props}
    >
      <Label size="xs" className="text-blue-100 font-medium block">
        {title}
      </Label>
      <Text size="xs" className="text-blue-200/70 text-[10px] mt-0.5 block">
        {dateRange}
      </Text>
      <Heading
        size="xs"
        className="text-white text-xl sm:text-2xl! mt-1 font-semibold"
      >
        {amount}
      </Heading>
      <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full mt-2.5 overflow-hidden">
        <div
          className="h-full bg-secondary rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

/* =========================================================================
   6. Year to Date Badge (e.g. "Year to Date • 2023 • $1,200.38 • +12%")
   ========================================================================= */

export interface YearToDateBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  year?: string;
  amount?: string;
  growth?: string;
}

export function YearToDateBadge({
  title = "Year to Date",
  year = "2023",
  amount = "$1,200.38",
  growth = "+ 12%",
  className,
  ...props
}: YearToDateBadgeProps) {
  return (
    <div
      className={cn(
        "bg-primary text-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/20 min-w-[140px] sm:min-w-[160px] transition-transform hover:scale-105 select-none",
        className,
      )}
      {...props}
    >
      <Label size="xs" className="text-blue-100 font-medium block">
        {title}
      </Label>
      <Text size="xs" className="text-blue-200/70 text-[10px] mt-0.5 block">
        {year}
      </Text>
      <Heading
        size="xs"
        className="text-white text-xl sm:text-2xl! mt-1 font-semibold"
      >
        {amount}
      </Heading>
      <div className="mt-2.5">
        <span className="inline-flex items-center text-[10px] font-bold bg-secondary text-slate-950 px-2 py-0.5 rounded-full">
          {growth}
        </span>
      </div>
    </div>
  );
}

// Aliases for convenience
export {
  CourseStatsBadge as CourseStatsCard,
  LearningProgressBadge as ProgressCard,
  HappyStudentsBadge as HappyStudentsCard,
  TotalRevenueBadge as RevenueBadge,
  YearToDateBadge as YtdBadge,
};

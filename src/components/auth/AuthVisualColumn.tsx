"use client";

import React from "react";
import { Heading, Body } from "@/components/shared/typography";
import { CourseCard } from "@/components/home/CourseCard";
import { FloatingShape } from "@/components/shared/FloatingShape";
import { HappyStudentsBadge } from "@/components/shared/FloatingBadge";
import { featuredCoursesData } from "@/constant/courses";

interface AuthVisualColumnProps {
  title: string;
  description: string;
}

export function AuthVisualColumn({
  title,
  description,
}: AuthVisualColumnProps) {
  // Use course 2 ("Build Digital Asset") as behind card
  // and course 3 ("the Power of Big Data") as front card
  const behindCourse = featuredCoursesData[1];
  const frontCourse = featuredCoursesData[2];

  return (
    <div className="flex flex-col justify-start max-w-[560px] mx-auto lg:mx-0 w-full pt-0">
      {/* Top Section: Heading & Subtitle */}
      <div>
        {/* Heading & Subtitle using Typography components */}
        <Heading size="xs" className="text-white mt-0 pt-0">
          {title}
        </Heading>

        <Body size="l" className="text-gray-50 mt-3 max-w-[440px]">
          {description}
        </Body>
      </div>

      {/* Visual Composition: Overlapping Course Cards, Floating 3D Shapes, and Badge */}
      <div className="relative mt-8 sm:mt-12 lg:mt-14 w-full max-w-[460px] select-none pl-6 sm:pl-8 pr-4 sm:pr-6 mx-auto lg:mx-0">
        {/* 1. Behind Course Card ("Build Digital Asset") */}
        <div className="absolute left-0 sm:left-2 top-8 sm:top-25 w-[260px] sm:w-[310px]  z-0 pointer-events-none drop-shadow-xl opacity-90 transition-transform duration-500 hover:scale-[1.01]">
          <CourseCard
            course={behindCourse}
            className="bg-white/95 border-white/40 shadow-xl"
          />
        </div>

        {/* 2. Front Course Card ("the Power of Big Data") */}
        <div className="relative z-10 w-[275px] sm:w-[325px]  ml-auto shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
          <CourseCard
            course={frontCourse}
            className="bg-white border-white/60 shadow-2xl"
          />
        </div>

        {/* 3. Floating 3D Torus / Donut (Top-Left of Front Card) */}
        <FloatingShape
          src="/images/shapes/circle-zero-secondary.svg"
          alt="3D Donut Shape"
          width={85}
          height={85}
          className="-top-5 sm:top-5 left-[32%] sm:left-[5%] z-20 "
          imageClassName="w-16 h-16 sm:size-[147px] drop-shadow-xl -rotate-12"
        />

        {/* 4. Floating 3D Pyramid / Cone (Bottom-Left) */}
        <FloatingShape
          src="/images/shapes/triangle-secondary.svg"
          alt="3D Pyramid Shape"
          width={100}
          height={100}
          className="-bottom-7 sm:-bottom-48 left-0 sm:left-0 z-20 "
          imageClassName="w-20 h-20 sm:size-[188px] drop-shadow-xl rotate-3"
        />

        {/* 5. Floating 3D White Squiggle (Middle-Right Edge) */}
        <FloatingShape
          src="/images/shapes/mask-gray.svg"
          alt="3D Squiggle Shape"
          width={80}
          height={80}
          className="top-[50%] sm:top-[78%] -right-1 sm:-right-6 z-40 "
          imageClassName="w-16 h-16 sm:size-[175px] drop-shadow-lg rotate-6"
        />

        {/* 6. Happy Students Badge (Neon Lime, Bottom-Right) */}
        <div className="absolute -bottom-6 sm:-bottom-38 right-0 sm:right-5 z-30 drop-shadow-2xl">
          <HappyStudentsBadge
            variant="neon"
            className="scale-90 sm:scale-100 origin-bottom-right"
          />
        </div>
      </div>
    </div>
  );
}

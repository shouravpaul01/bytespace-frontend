"use client";

import Image from "next/image";
import { GridPattern } from "@/components/shared/GridPattern";
import { FloatingShape } from "@/components/shared/FloatingShape";
import { Heading, Body } from "@/components/shared/typography";
import { SearchInput } from "@/components/shared/SearchInput";
import {
  CourseStatsBadge,
  LearningProgressBadge,
  HappyStudentsBadge,
} from "@/components/shared/FloatingBadge";

const floatingShapes = [
  {
    id: "top-left-spiral",
    src: "/images/shapes/mask-secondary-hero.png",
    alt: "3D Green Spiral Accent",
    width: 320,
    height: 320,
    className:
      "-top-2 left-0 sm:top-2 md:top-6 lg:top-8 opacity-30 md:opacity-100",
    imageClassName: "w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 object-left",
  },
  {
    id: "mid-left-squiggle",
    src: "/images/shapes/mask-gray.svg",
    alt: "3D White Wave Accent",
    width: 120,
    height: 120,
    className:
      "left-[12%] sm:left-[14%] md:left-[15%] lg:left-[22%] top-[41%] sm:top-[43%] md:top-[35%] hidden md:flex animate-bounce [animation-duration:3.6s]",
    imageClassName: "w-16 h-16 sm:w-20 sm:h-20 md:size-43.75 -rotate-[5deg]",
  },
  {
    id: "bottom-left-torus",
    src: "/images/shapes/circle-zero-gray.svg",
    alt: "3D Circle Zero Accent",
    width: 380,
    height: 380,
    className:
      "-bottom-4 -left-12 sm:bottom-0 sm:left-[-15px] md:left-65 md:bottom-[3%] z-20 hidden md:flex",
    imageClassName:
      "w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 size-85.75 -rotate-[12deg] drop-shadow-2xl",
  },
  {
    id: "top-right-box",
    src: "/images/shapes/box-round-secondary.svg",
    alt: "3D Rounded Box Accent",
    width: 400,
    height: 400,
    className:
      "top-[4%] -right-24 sm:top-[6%] sm:right-[-20px] md:top-[8%] md:right-[-170px] opacity-30 md:opacity-100",
    imageClassName:
      "w-60 h-60 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] rotate-[3deg] drop-shadow-2xl",
  },
  {
    id: "mid-right-pyramid",
    src: "/images/shapes/triangle-gray.svg",
    alt: "3D Pyramid Accent",
    width: 190,
    height: 190,
    className:
      "right-[13%] sm:right-[15%] md:right-[20%] top-[40%] sm:top-[42%] md:top-[33%] hidden md:flex animate-bounce [animation-duration:3.6s]",
    imageClassName:
      "w-24 h-24 sm:w-32 sm:h-32 md:size-47 -rotate-[6deg] opacity-95 drop-shadow-lg",
  },
  {
    id: "bottom-right-wave",
    src: "/images/shapes/mask-gray-hero.png",
    alt: "3D Wave Accent",
    width: 220,
    height: 220,
    className:
      "right-[3%] sm:right-[5%] md:right-[7%] lg:right-[11.5%] bottom-[12%] sm:bottom-[14%] md:bottom-[5%]",
    imageClassName: "w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:size-82.5",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full bg-primary h-screen md:h-[1024px]! overflow-hidden select-none">
      {/* Reusable Shared Grid Pattern Background */}
      <GridPattern
        cellSize={120}
        strokeColor="rgba(255, 255, 255, 0.12)"
        strokeWidth={1}
        className="w-full h-full relative pt-[100px] sm:pt-[125px] md:pt-[150px] pb-0 flex flex-col justify-between"
      >
        {/* =========================================================================
            Floating 3D Background Shapes (Mapped)
            ========================================================================= */}
        {floatingShapes.map((shape) => (
          <FloatingShape
            key={shape.id}
            src={shape.src}
            alt={shape.alt}
            width={shape.width}
            height={shape.height}
            className={shape.className}
            imageClassName={shape.imageClassName}
          />
        ))}

        {/* =========================================================================
            Main Hero Content Container
            ========================================================================= */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center h-full justify-between ">
          {/* Hero Typography */}
          <div className="text-center max-w-4xl mx-auto">
            <Heading size="l" className="text-white">
              Get Access to Hundreds
              <br />
              Courses Available
            </Heading>

            <Body size="l" className="text-slate-100 mx-auto mt-4">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </Body>
          </div>

          {/* Search Box */}
          <div className="mt-0 md:mt-12 w-full max-w-xl mx-auto">
            <SearchInput
              placeholder="Course, topic, creator"
              showButton={true}
              buttonText="Search"
            />
          </div>

          {/* =========================================================================
              Center Graphic: The Large Neon Green Circle Backdrop & The Smiling Student
              ========================================================================= */}
          <div className="relative mt-4 sm:mt-8 md:mt-auto w-full max-w-4xl flex justify-center items-end">
            {/* The Large Neon Yellow/Green Circle - Expansive dome behind student and cards */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-[20px] sm:top-[45px] md:top-[85px] w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] md:w-287.25 md:h-287.25 rounded-full bg-secondary z-0 shadow-2xl pointer-events-none"
              style={{
                maskImage:
                  "radial-gradient(circle closest-side, transparent 45%, black 45.5%)",
                WebkitMaskImage:
                  "radial-gradient(circle closest-side, transparent 45%, black 45.5%)",
              }}
            />

            {/* The Man Image (SVG) - Sits in front of the circle with head protruding over top */}
            <div className="relative z-10 w-[360px] xs:w-[400px] sm:w-[480px] md:w-[600px] lg:w-[780px] flex justify-center ms-10  md:ms-20 flex-shrink-0">
              <Image
                src="/images/man.png"
                alt="Student listening to course and holding laptop"
                width={722}
                height={581}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl scale-110 sm:scale-100 origin-bottom"
              />
            </div>

            {/* =========================================================================
                Floating Badges (Exact layout, contents, and typography from design)
                ========================================================================= */}

            {/* Card 1: UI/UX Design (Left upper-mid) */}
            <CourseStatsBadge className="absolute  left-[0%] sm:left-[3%] md:left-[6%] lg:left-[13%] -top-[15%] sm:top-[30%] md:top-[25%] z-20 scale-85 sm:scale-95 md:scale-100 origin-top-left" />

            {/* Card 2: Learning Progress 55% (Right upper-mid) */}
            <LearningProgressBadge className="absolute right-[0%] sm:right-[3%] md:right-[6%] lg:right-[12%] top-[15%] sm:top-[36%] md:top-[28%] z-20 scale-85 sm:scale-95 md:scale-100 origin-top-right" />

            {/* Card 3: Happy Students (Bottom-Left) */}
            <HappyStudentsBadge className="absolute left-[-2%] sm:left-[2%] md:left-[4%] lg:left-[4%] bottom-[8%] sm:bottom-[10%] md:bottom-[12%] z-20 scale-85 sm:scale-95 md:scale-100 origin-bottom-left" />
          </div>
        </div>
      </GridPattern>
    </section>
  );
}

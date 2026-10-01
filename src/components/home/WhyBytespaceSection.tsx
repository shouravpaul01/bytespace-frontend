"use client";

import Image from "next/image";
import { Heading, Body, Text, Label } from "@/components/shared/typography";
import { FloatingShape } from "@/components/shared/FloatingShape";
import {
  LearningProgressBadge,
  TotalRevenueBadge,
  YearToDateBadge,
  HappyStudentsBadge,
} from "@/components/shared/FloatingBadge";
import { CourseCard } from "./CourseCard";
import { featuredCoursesData } from "@/constant";
import { Check, CheckCircle, CheckCircle2 } from "lucide-react";
import StatChip, { type StatChipData } from "./StatChip";

/* ============================================================
   Stats data array
   ============================================================ */
const stats: StatChipData[] = [
  { end: 12, suffix: "K", label: "Students" },
  { end: 70, suffix: "+", label: "Courses" },
  { end: 16, suffix: "", label: "Creators" },
];

/* ============================================================
   Features checklist data array
   ============================================================ */
const features: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

/* ============================================================
   Feature check item
   ============================================================ */
function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="size-5 text-primary fill-primary/10 flex-shrink-0" />
      <Text size="m" className="text-slate-700">
        {text}
      </Text>
    </li>
  );
}

/* ============================================================
   Figma Background Radial Gradients
   ============================================================ */
const limeGradient =
  "radial-gradient(50% 50% at 50% 50%, #CBFC01 0%, rgba(203, 252, 1, 0.23) 35%, rgba(203, 252, 1, 0.06) 70%, rgba(203, 252, 1, 0) 100%)";

const blueGradient =
  "radial-gradient(50% 50% at 50% 50%, #003BE2 0%, rgba(0, 59, 226, 0.23) 35%, rgba(0, 59, 226, 0.06) 70%, rgba(0, 59, 226, 0) 100%)";

/* ============================================================
   WhyBytespaceSection — two alternating feature rows
   ============================================================ */
export default function WhyBytespaceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] md:py-[120px]">
      {/* Background Radial Gradient Blur Ellipses (from Figma) */}

      {/* Ellipse 11: Top-Left Lime */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1137,
          height: 1137,
          top: -466,
          left: -152,
          background: limeGradient,
          filter: "blur(40px)",
        }}
      />

      {/* Ellipse 10: Top-Right Blue */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1137,
          height: 1137,
          top: -458,
          left: 811,
          background: blueGradient,
          filter: "blur(40px)",
        }}
      />

      {/* Ellipse 9: Mid-Left Blue */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1137,
          height: 1137,
          top: 183,
          left: -508,
          background: blueGradient,
          filter: "blur(40px)",
        }}
      />

      {/* Ellipse 8: Bottom-Right Blue */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1137,
          height: 1137,
          top: 788,
          left: 722,
          background: blueGradient,
          filter: "blur(40px)",
        }}
      />

      {/* Ellipse 12: Bottom-Left Lime */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 672,
          height: 672,
          top: 946,
          left: -287,
          background: limeGradient,
          filter: "blur(40px)",
        }}
      />

      {/* ======================================================
          ROW 1: Text LEFT · Image RIGHT
          "Your Path to Professional Growth Starts Here!"
          ====================================================== */}
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left: Text block ── */}
          <div className="flex-1 flex flex-col w-full max-w-[577px]">
            <Heading size="m" className="text-slate-950 !">
              <span className="whitespace-nowrap">
                Your Path to Professional
              </span>
              <br />
              Growth Starts Here!
            </Heading>

            <Body size="l" className="text-slate-700 mt-5 max-w-[477px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </Body>

            {/* Stats row */}
            <div className="flex items-center gap-8 sm:gap-12 mt-8 pt-8">
              {stats.map((stat) => (
                <StatChip
                  key={stat.label}
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          {/* ── Right: Image + floating badges ── */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Neon Green squiggle — top-right corner */}
            <FloatingShape
              src="/images/shapes/mask-secondary.png"
              alt="Neon green spiral accent"
              width={180}
              height={180}
              className="top-[70px] right-[-10px] sm:right-[80px] z-30"
              imageClassName="w-24 h-24 sm:w-28 sm:h-28 md:size-[216px] "
            />

            {/* Man image */}
            <div className="relative z-20 w-[260px] sm:w-[320px] md:w-[721px] md:h-[552px] mx-auto">
              <Image
                src="/images/man.png"
                alt="Student with headphones holding laptop"
                fill
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Course card — top-left */}
            <CourseCard
              course={featuredCoursesData[0]}
              className="absolute top-[2%] -left-3 sm:-left-6 md:left-13 w-[240px] sm:w-[260px] md:w-[323px]  origin-top-left"
            />

            {/* Reusable Floating badge: Learning progress — right */}
            <LearningProgressBadge
              progress={55}
              className="absolute top-[40%] -right-3 sm:-right-6 md:right-30 z-20"
            />
          </div>
        </div>

        {/* ======================================================
          ROW 2: Image LEFT · Text RIGHT
          "Create & Manage Courses Easily."
          ====================================================== */}

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 min-h-[596px] overflow-hidden">
          {/* ── Left: Image + floating badges ── */}
          <div className="flex-1 relative flex justify-center items-center ">
            {/* Neon Green squiggle — mid-right */}
            <FloatingShape
              src="/images/shapes/mask-secondary.png"
              alt="Neon green spiral accent"
              width={180}
              height={180}
              className="top-[25%] right-[0px] sm:right-[110px] z-30"
              imageClassName="w-24 h-24 sm:w-28 sm:h-28 md:size-[215px] rotate-[50deg]"
            />

            {/* Woman image */}
            <div className="relative z-20 w-[220px] sm:w-[280px] md:w-[635px] md:h-[696px] mx-auto mt-20">
              <Image
                src="/images/women.png"
                alt="Student with headphones holding tablet"
                fill
                className="w-full h-auto object-contain drop-shadow-xl z-20"
              />
            </div>

            {/* Reusable Floating badge: Total Revenue — top-left */}
            <TotalRevenueBadge
              title="Total Revenue"
              dateRange="July 1-28"
              amount="$120.29"
              progress={65}
              className="absolute top-[17%] -left-3 sm:-left-6 md:left-0 z-10"
            />

            {/* Reusable Floating badge: Year to Date — mid-left */}
            <YearToDateBadge
              title="Year to Date"
              year="2023"
              amount="$1,200.38"
              growth="+ 12%"
              className="absolute top-[38%] -left-3 sm:-left-6 md:left-0 z-10"
            />

            {/* Reusable Floating badge: Happy Students — bottom-right */}
            <HappyStudentsBadge className="absolute bottom-[23%] -right-3 sm:-right-6 md:right-20 z-30" />
          </div>

          {/* ── Right: Text block ── */}
          <div className="flex-1 flex flex-col max-w-[520px]">
            <Heading size="m" className="text-gray-950 leading-[1.15]!">
              Create &amp; Manage
              <br />
              Courses Easily.
            </Heading>

            <Body size="l" className="text-slate-700 mt-5 max-w-[460px]">
              <strong className="text-slate-950 font-semibold">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </Body>

            {/* Feature checklist */}
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li className="flex items-center gap-3">
                  <div className="size-5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="size-4.5 text-white " />
                  </div>
                  <Label size="l" className="text-slate-950">
                    {feature}
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

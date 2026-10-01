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
import { Check } from "lucide-react";
import StatChip, { type StatChipData } from "./StatChip";

const stats: StatChipData[] = [
  { end: 12, suffix: "K", label: "Students" },
  { end: 70, suffix: "+", label: "Courses" },
  { end: 16, suffix: "", label: "Creators" },
];

const features: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

/**
 * Feature showcase section displaying student growth statistics and course creation benefits.
 */
export default function WhyBytespaceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 md:py-[120px]">
      {/* Background ambient radial gradients */}
      <div className="pointer-events-none absolute -top-[200px] -left-[100px] size-[600px] md:-top-[40%] md:left-[2%] md:size-[1137px] rounded-full blur-[40px] bg-[radial-gradient(50%_50%_at_50%_50%,#CBFC01_0%,rgba(203,252,1,0.23)_35%,rgba(203,252,1,0.06)_70%,rgba(203,252,1,0)_100%)]" />
      <div className="pointer-events-none absolute -top-[200px] -right-[200px] size-[600px] md:-top-[35%] md:-right-[35%] md:size-[1137px] rounded-full blur-[60px] bg-[radial-gradient(50%_50%_at_50%_50%,#003BE2_0%,rgba(0,59,226,0.23)_35%,rgba(0,59,226,0.06)_70%,rgba(0,59,226,0)_100%)]" />
      <div className="pointer-events-none absolute top-[30%] -left-[250px] size-[600px] md:top-[10%] md:-left-[35%] md:size-[1137px] rounded-full blur-[40px] bg-[radial-gradient(50%_50%_at_50%_50%,#003BE2_0%,rgba(0,59,226,0.23)_35%,rgba(0,59,226,0.06)_70%,rgba(0,59,226,0)_100%)]" />
      <div className="pointer-events-none absolute bottom-[20%] -right-[200px] size-[600px] md:-bottom-[40%] md:-right-[30%] md:size-[1137px] rounded-full blur-[60px] bg-[radial-gradient(50%_50%_at_50%_50%,#003BE2_0%,rgba(0,59,226,0.23)_35%,rgba(0,59,226,0.06)_70%,rgba(0,59,226,0)_100%)]" />
      <div className="pointer-events-none absolute -bottom-[100px] -left-[150px] size-[400px] md:-bottom-[10%] md:-left-[10%] md:size-[672px] rounded-full blur-[40px] bg-[radial-gradient(50%_50%_at_50%_50%,#CBFC01_0%,rgba(203,252,1,0.23)_35%,rgba(203,252,1,0.06)_70%,rgba(203,252,1,0)_100%)]" />

      {/* Row 1: Professional Growth (Text Left / Visual Right) */}
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

          <div className="flex-1 relative flex justify-center items-center w-full min-h-[320px] sm:min-h-[400px] md:min-h-auto">
            <FloatingShape
              src="/images/shapes/mask-secondary.png"
              alt="Neon green spiral accent"
              width={180}
              height={180}
              className="-top-[3%] right-[-10px] sm:top-[20px] sm:right-[30px] md:top-[70px] md:right-[80px] z-30 pointer-events-none animate-bounce"
              imageClassName="size-[120px] md:size-[216px]"
            />

            <div className="relative z-20 w-[520px] md:w-[721px] max-w-full mx-auto">
              <Image
                src="/images/man.png"
                alt="Student with headphones holding laptop"
                width={721}
                height={552}
                priority
                style={{ height: "auto" }}
                className="w-full h-auto object-contain drop-shadow-xl scale-115 sm:scale-100 origin-center"
              />
            </div>

            <CourseCard
              course={featuredCoursesData[0]}
              className="absolute top-[0%] left-0 sm:-left-6 md:left-13 w-[200px] sm:w-[260px] md:w-[323px] origin-top-left"
            />

            <LearningProgressBadge
              progress={55}
              className="absolute top-[20%] right-2 sm:bottom-6 sm:-right-6 md:top-[40%] md:bottom-auto md:right-30 z-20 scale-90 sm:scale-95 md:scale-100 origin-bottom-right"
            />
          </div>
        </div>

        {/* Row 2: Course Creation & Management (Visual Left / Text Right) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 mt-16 sm:mt-24 md:mt-32">
          <div className="flex-1 relative flex justify-center items-center w-full min-h-[320px] sm:min-h-[400px] md:min-h-auto">
            <FloatingShape
              src="/images/shapes/mask-secondary.png"
              alt="Neon green spiral accent"
              width={180}
              height={180}
              className="top-[20%] right-[20px] sm:right-[20px] md:top-[25%] md:right-[110px] z-30 pointer-events-none animate-bounce"
              imageClassName="size-[130px] sm:size-[180px] md:size-[215px] rotate-[50deg]"
            />

            <div className="md:h-[596px] overflow-hidden mt-6 sm:mt-10 md:mt-20">
              <div className="relative z-20 w-[420px] md:w-[596px] mx-auto -mt-5">
                <Image
                  src="/images/women.png"
                  alt="Student with headphones holding tablet"
                  width={635}
                  height={696}
                  style={{ height: "auto" }}
                  className="w-full h-auto object-contain drop-shadow-xl z-20"
                />
              </div>
            </div>

            <TotalRevenueBadge
              title="Total Revenue"
              dateRange="July 1-28"
              amount="$120.29"
              progress={65}
              className="absolute top-[8%] left-0 sm:-left-6 md:top-[17%] md:left-0 z-10 min-w-[180px]! sm:min-w-[252px]! scale-90 sm:scale-95 md:scale-100 origin-top-left"
            />

            <YearToDateBadge
              title="Year to Date"
              year="2023"
              amount="$1,200.38"
              growth="+ 12%"
              className="absolute top-[28%] -left-0 sm:-left-6 md:top-[40%] md:left-0 z-10 scale-90 sm:scale-95 md:scale-100 origin-top-left"
            />

            <HappyStudentsBadge className="absolute bottom-[23%] -right-0 sm:-right-6 md:bottom-[10%] md:right-15 z-30 scale-90 sm:scale-95 md:scale-100 origin-bottom-right" />
          </div>

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
                <li key={feature} className="flex items-center gap-3">
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

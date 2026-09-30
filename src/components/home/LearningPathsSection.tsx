"use client";

import React from "react";
import Link from "next/link";
import {
  PenTool,
  Code2,
  Laptop,
  Briefcase,
  Megaphone,
  Camera,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { learningPathsData, type LearningPathItem } from "@/constant";

const iconMap: Record<LearningPathItem["iconName"], LucideIcon> = {
  PenTool,
  Code2,
  Laptop,
  Briefcase,
  Megaphone,
  Camera,
};

export default function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <SectionHeader
          align="center"
          title="Explore Diverse Learning Paths at Bytespace"
          titleClassName="text-neutral-900 font-semibold tracking-tight text-3xl sm:text-4xl md:text-[44px]"
          description="At Bytespace, we believe in empowering learners with thorough knowledge. Our diverse range of courses spans various industries, equipping learners with everything from foundational principles to master-level techniques across key categories."
          descriptionClassName="max-w-3xl"
        />

        {/* 6 Category Path Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {learningPathsData.map((item) => {
            const Icon = iconMap[item.iconName] || PenTool;
            return (
              <Link
                key={item.id}
                href={item.href || `/courses?category=${item.id}`}
                className="block focus:outline-none"
              >
                <Card className="group relative bg-white border border-[#E9EAEB] rounded-[24px] p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-none hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-1.5 cursor-pointer">
                  {/* Circular Neon-Yellow/Green Icon Badge */}
                  <div className="size-16 sm:size-18 rounded-full bg-secondary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <Icon className="size-7 sm:size-8 text-neutral-950 stroke-[2.2]" />
                  </div>

                  {/* Category Name */}
                  <h3 className="font-semibold text-neutral-900 text-sm sm:text-base group-hover:text-primary transition-colors tracking-tight">
                    {item.name}
                  </h3>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

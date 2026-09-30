"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { learningPathsData } from "@/constant";
import { Label } from "../shared/typography";

const iconMap: Record<string, string> = {
  design: "/icons/design.svg",
  development: "/icons/development.svg",
  "it-software": "/icons/laptop.svg",
  business: "/icons/business.svg",
  marketing: "/icons/marketing.svg",
  photography: "/icons/photography.svg",
};

export default function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <SectionHeader
          align="center"
          title="Explore Diverse Learning Paths at Bytespace"
          titleSize="s"
          description="At Bytespace, we believe in empowering learners with thorough knowledge. Our diverse range of courses spans various industries, equipping learners with everything from foundational principles to master-level techniques across key categories."
          titleClassName="max-w-[917px]!"
        />

        {/* 6 Category Path Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {learningPathsData.map((item) => {
            const iconSrc =
              item.iconSrc || iconMap[item.id] || "/icons/design.svg";
            return (
              <Link
                key={item.id}
                href={item.href || `/courses?category=${item.id}`}
                className="block focus:outline-none"
              >
                <Card className="group gap-0! border border-gray-200 ring-0! rounded-[24px] size-41.75 flex flex-col items-center justify-center text-center shadow-none! hover:shadow-none! transition-all duration-300 hover:-translate-y-1.5 cursor-pointer">
                  {/* Circular Neon-Yellow/Green Icon Badge */}
                  <div className="size-16 sm:size-18 rounded-full bg-secondary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <Image
                      src={iconSrc}
                      alt={item.name}
                      width={36}
                      height={36}
                      className="size-7 sm:size-9 object-contain"
                    />
                  </div>

                  {/* Category Name */}
                  <Label
                    size="xl"
                    className="text-[#242528]  transition-colors"
                  >
                    {item.name}
                  </Label>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

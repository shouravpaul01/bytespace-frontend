"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FilterButton } from "@/components/shared/FilterButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CourseCard } from "./CourseCard";
import { courseCategories, featuredCoursesData } from "@/constant";
import { cn } from "@/lib/utils";

export default function FeaturedCoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Filter courses by category if selected, otherwise show all
  const filteredCourses =
    activeCategory === "Featured"
      ? featuredCoursesData
      : featuredCoursesData.filter(
          (course) =>
            course.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const displayedCourses =
    filteredCourses.length > 0 ? filteredCourses : featuredCoursesData;

  return (
    <section className="w-full  py-16 sm:py-24 overflow-hidden border-t border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <SectionHeader
          align="center"
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Category Filter Pills (Single map with exact 3 centered rows matching the design inside max-w-[1086px]) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-271.5 mx-auto mt-8 sm:mt-11">
          {courseCategories.map((category, index) => (
            <FilterButton
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}

          {/* + More Button */}
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowAllCategories((prev) => !prev)}
            className="h-[43px] rounded-full px-3 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 hover:bg-transparent transition-colors cursor-pointer select-none"
          >
            + More
          </Button>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-14 min-h-[480px]">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

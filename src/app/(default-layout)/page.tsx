import HeroSection from "@/components/home/HeroSection";
import CollaboratorSection from "@/components/home/CollaboratorSection";
import LearningPathsSection from "@/components/home/LearningPathsSection";
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with GridPattern, 3D Shapes, and Featured Cards */}
      <HeroSection />

      {/* Collaborator / Partners Marquee Section */}
      <CollaboratorSection />
      {/* Discover Your Passion, Build Your Skills (Featured Courses Catalog) */}
      <FeaturedCoursesSection />
      {/* Explore Diverse Learning Paths Section */}
      <LearningPathsSection />
    </div>
  );
}

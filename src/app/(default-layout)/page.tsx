import HeroSection from "@/components/home/HeroSection";
import CollaboratorSection from "@/components/home/CollaboratorSection";
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
    </div>
  );
}

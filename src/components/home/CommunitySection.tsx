"use client";

import { Heading, Body } from "@/components/shared/typography";
import TestimonialCard, { type TestimonialItem } from "./TestimonialCard";

const testimonials: TestimonialItem[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/students/testimonial-sarah.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: "james",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/students/testimonial-james.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/students/testimonial-alex.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function CommunitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 md:py-28 lg:py-32">
      {/* =========================================================================
          Ambient Background Radial Gradients (matching design glow)
          ========================================================================= */}

      {/* Top-Right Ambient Lime Glow */}
      <div className="pointer-events-none absolute top-[-70px] left-[10%] size-[320px] blur-[30px] sm:top-[-100px] sm:left-[20%] sm:size-[480px] sm:blur-[35px] md:top-[-138px] md:left-[33%] md:size-[672px] md:blur-[40px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#CBFC01_0%,rgba(203,252,1,0.28)_35%,rgba(203,252,1,0.08)_70%,rgba(203,252,1,0)_100%)]" />
      <div className="pointer-events-none absolute top-[-100px] -right-[20%] size-[450px] blur-[30px] sm:top-[-160px] sm:-right-[25%] sm:size-[700px] sm:blur-[35px] md:top-[-241px] md:-right-[34%] md:size-[1137px] md:blur-[40px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.092)_53%,rgba(203,252,1,0.024)_75%,rgba(203,252,1,0)_100%)]" />
      {/* Bottom-Left Ambient Blue Glow */}
      <div className="pointer-events-none absolute bottom-[-250px] left-[-160px] size-[450px] blur-[45px] sm:top-[200px] sm:left-[-260px] sm:size-[700px] sm:blur-[55px] md:top-[149px] md:left-[-442px] md:size-[1137px] md:blur-[70px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.0552)_53%,rgba(0,59,226,0.0144)_75%,rgba(0,59,226,0)_100%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* =========================================================================
            Section Header: 2 Columns (Heading on Left, Description on Right)
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-xl">
            <Heading
              size="m"
              className="text-slate-950 font-semibold font-poppins text-3xl sm:text-4xl md:text-[44px] leading-tight"
            >
              Discover What Our
              <br />
              Community Is Saying
            </Heading>
          </div>

          <div className="max-w-xl lg:max-w-lg">
            <Body
              size="m"
              className="text-slate-600 font-satoshi text-sm sm:text-base leading-relaxed"
            >
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </Body>
          </div>
        </div>

        {/* =========================================================================
            Testimonial Cards Grid (3 cards)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-16">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

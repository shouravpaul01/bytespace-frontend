"use client";

import { GridPattern } from "@/components/shared/GridPattern";
import { FloatingShape } from "@/components/shared/FloatingShape";
import { Heading, Body } from "@/components/shared/typography";

export default function CreatorCtaSection() {
  return (
    <section className="relative w-full h-[520px] sm:h-[500px] md:h-[488px] bg-primary overflow-hidden select-none">
      {/* Grid Pattern Background — Full Bleed */}
      <GridPattern
        cellSize={120}
        strokeColor="rgba(255, 255, 255, 0.12)"
        strokeWidth={1}
        className="w-full h-full relative flex flex-col justify-center items-center"
      >
        {/* =========================================================================
            Floating 3D Background Shapes (Visible & perfectly scaled on ALL screens)
            ========================================================================= */}

        {/* 1. Top-Left: Neon Green Spiral Accent */}
        <FloatingShape
          src="/images/shapes/mask-secondary.png"
          alt="3D Green Spiral Accent"
          width={320}
          height={320}
          className="-top-4 -left-4 sm:-top-8 sm:-left-6 md:-top-25 md:-left-30 z-0"
          imageClassName="w-20 h-20 sm:w-32 sm:h-32 md:size-[310px] -rotate-[125deg] object-left"
        />

        {/* 2. Middle-Left: Small White Squiggle */}
        <FloatingShape
          src="/images/shapes/mask-gray.svg"
          alt="3D White Wave Accent"
          width={140}
          height={140}
          className="left-[3%] sm:left-[8%] md:left-[14.5%] top-[8%] sm:top-[7%] z-0"
          imageClassName="w-8 h-8 sm:w-14 sm:h-14 md:size-[175px] -rotate-[8deg]"
        />

        {/* 3. Bottom-Left Edge: White Cone / Pyramid */}
        <FloatingShape
          src="/images/shapes/cone.png"
          alt="3D White Cone Accent"
          width={180}
          height={180}
          className="-left-1 sm:-left-6 top-[48%]  z-0"
          imageClassName="w-10 h-10 sm:w-16 sm:h-16 md:size-[188px]"
        />

        {/* 4. Bottom-Left Inner: Neon Green Torus / Donut */}
        <FloatingShape
          src="/images/shapes/circle-zero-secondary.svg"
          alt="3D Green Torus Accent"
          width={340}
          height={340}
          className="-bottom-8 sm:-bottom-14 md:-bottom-20 -left-4 sm:left-[2%] md:left-[4%] z-0"
          imageClassName="w-28 h-28 sm:w-44 sm:h-44 md:w-72 md:h-72 -rotate-[8deg] drop-shadow-xl"
        />

        {/* 5. Top-Right Inner: Neon Green Pyramid */}
        <FloatingShape
          src="/images/shapes/triangle-secondary.svg"
          alt="3D Green Pyramid Accent"
          width={180}
          height={180}
          className="right-[4%] sm:right-[10%] md:right-[17%] top-[7%] sm:top-[6%] md:top-[5%] z-0"
          imageClassName="w-9 h-9 sm:w-16 sm:h-16 md:size-[188px] -rotate-[6deg]"
        />

        {/* 6. Top-Right Far Edge: White Rounded Box */}
        <FloatingShape
          src="/images/shapes/box-round-gray.svg"
          alt="3D White Rounded Box Accent"
          width={360}
          height={360}
          className="-right-6 sm:-right-8 md:-right-38 top-[2%] sm:top-[3%] md:top-[6%] z-0"
          imageClassName="w-20 h-20 sm:w-36 sm:h-36 md:size-[370px] rotate-[4deg] drop-shadow-2xl"
        />

        {/* 7. Bottom-Right: Neon Green Spring / Coil */}
        <FloatingShape
          src="/images/shapes/mask-secondary-coil.png"
          alt="3D Green Spring Accent"
          width={260}
          height={260}
          className="-bottom-6 sm:-bottom-10 md:-bottom-34 -right-3 sm:right-[3%] md:right-[7%] z-0"
          imageClassName="w-20 h-20 sm:w-32 sm:h-32 md:size-[320px]"
        />

        {/* =========================================================================
            Main Creator CTA Content Container (Vertically & Horizontally Centered)
            ========================================================================= */}
        <div className="container relative z-10 w-full h-full mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center max-w-4xl">
          <Heading
            size="m"
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.2] font-semibold tracking-tight"
          >
            Unlock Your Potential as a<br className="hidden sm:inline" />{" "}
            Creator with ByteSpace
          </Heading>

          <Body
            size="m"
            className="text-blue-100/90 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mt-3 sm:mt-4 md:mt-5 leading-relaxed text-xs sm:text-sm md:text-base font-satoshi"
          >
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </Body>

          <button
            type="button"
            className="mt-5 sm:mt-7 md:mt-8 px-6 sm:px-8 py-2.5 sm:py-3.5 bg-secondary text-slate-950 font-medium text-xs sm:text-sm md:text-base rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer hover:bg-secondary/90"
          >
            Join as Creator
          </button>
        </div>
      </GridPattern>
    </section>
  );
}

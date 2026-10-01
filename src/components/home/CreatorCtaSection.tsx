"use client";

import { GridPattern } from "@/components/shared/GridPattern";
import { FloatingShape } from "@/components/shared/FloatingShape";
import { Heading, Body } from "@/components/shared/typography";

const floatingShapes = [
  {
    id: "top-left-spiral",
    src: "/images/shapes/mask-secondary.png",
    alt: "3D Green Spiral Accent",
    width: 320,
    height: 320,
    className:
      "-top-10 -left-12 sm:-top-16 sm:-left-18 md:-top-25 md:-left-30 xl:-top-28 xl:-left-32 z-0",
    imageClassName:
      "size-[150px] sm:size-[220px] md:size-[310px] xl:size-[340px] -rotate-[125deg] object-left",
  },
  {
    id: "mid-left-squiggle",
    src: "/images/shapes/mask-gray.svg",
    alt: "3D White Wave Accent",
    width: 140,
    height: 140,
    className:
      "left-[22%] sm:left-[7%] md:left-[14.5%] xl:left-[16%] top-[12%] sm:top-[9%] md:top-[8%] z-0 animate-bounce [animation-duration:3.5s]",
    imageClassName:
      "size-[70px] sm:size-[110px] md:size-[175px] xl:size-[190px] -rotate-[8deg]",
  },
  {
    id: "bottom-left-cone",
    src: "/images/shapes/cone.png",
    alt: "3D White Cone Accent",
    width: 180,
    height: 180,
    className:
      "-left-2 sm:-left-4 md:-left-6 xl:-left-8 top-[52%] sm:top-[50%] md:top-[48%] xl:top-[46%] z-0",
    imageClassName:
      "size-[75px] sm:size-[120px] md:size-[188px] xl:size-[205px]",
  },
  {
    id: "bottom-left-torus",
    src: "/images/shapes/circle-zero-secondary.svg",
    alt: "3D Green Torus Accent",
    width: 340,
    height: 340,
    className:
      "-bottom-12 left-6 sm:-bottom-16 sm:left-[1%] md:-bottom-20 md:left-[4%] xl:-bottom-24 xl:left-[5%] z-0",
    imageClassName:
      "size-[150px] sm:size-[210px] md:w-72 md:h-72 xl:size-[310px] -rotate-[8deg] drop-shadow-xl",
  },
  {
    id: "top-right-pyramid",
    src: "/images/shapes/triangle-secondary.svg",
    alt: "3D Green Pyramid Accent",
    width: 180,
    height: 180,
    className:
      "right-[23%] sm:right-[10%] md:right-[17%] xl:right-[18%] top-[8%] sm:top-[6%] md:top-[5%] animate-pulse z-0",
    imageClassName:
      "size-[75px] sm:size-[120px] md:size-[188px] xl:size-[205px] -rotate-[6deg]",
  },
  {
    id: "top-right-box",
    src: "/images/shapes/box-round-gray.svg",
    alt: "3D White Rounded Box Accent",
    width: 360,
    height: 360,
    className:
      "-right-15 sm:-right-20 md:-right-38 xl:-right-44 -top-[1%] sm:top-[4%] md:top-[6%] xl:top-[5%] z-0",
    imageClassName:
      "size-[160px] sm:size-[250px] md:size-[370px] xl:size-[400px] rotate-[4deg] drop-shadow-2xl",
  },
  {
    id: "bottom-right-coil",
    src: "/images/shapes/mask-secondary-coil.png",
    alt: "3D Green Spring Accent",
    width: 260,
    height: 260,
    className:
      "-bottom-12 -right-6 sm:-bottom-20 sm:right-[3%] md:-bottom-34 md:right-[7%] xl:-bottom-36 xl:right-[8%] z-0",
    imageClassName:
      "size-[140px] sm:size-[220px] md:size-[320px] xl:size-[350px]",
  },
];

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

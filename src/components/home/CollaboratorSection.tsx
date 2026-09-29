"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { collaboratorLogos } from "@/constant";

export default function CollaboratorSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 overflow-hidden border-b border-neutral-100">
      <div className="w-full mx-auto">
        <Marquee
          pauseOnHover
          repeat={5}
          className="[--duration:35s] [--gap:4rem] sm:[--gap:6rem] md:[--gap:7rem]"
        >
          {collaboratorLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center shrink-0 px-4 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={170}
                height={42}
                className="h-8 sm:h-9 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

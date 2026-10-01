"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Props for the Loading component.
 */
export interface LoadingProps {
  /** Size variant for the logo and animated spinner */
  size?: "sm" | "md" | "lg" | "xl";
  /** Optional loading message displayed below the logo */
  text?: string;
  /** Whether to render as a full-viewport centered overlay */
  fullScreen?: boolean;
  /** Custom logo image path, defaults to /logo.png */
  logoSrc?: string;
  /** Additional custom classes for the outer container */
  className?: string;
}

const sizeConfig = {
  sm: {
    container: "size-16",
    logoWidth: 28,
    logoHeight: 31,
    ringSize: 64,
    strokeWidth: 2.5,
    textSize: "text-xs",
  },
  md: {
    container: "size-24",
    logoWidth: 42,
    logoHeight: 46,
    ringSize: 96,
    strokeWidth: 3,
    textSize: "text-sm",
  },
  lg: {
    container: "size-32",
    logoWidth: 56,
    logoHeight: 62,
    ringSize: 128,
    strokeWidth: 3.5,
    textSize: "text-base",
  },
  xl: {
    container: "size-40",
    logoWidth: 70,
    logoHeight: 77,
    ringSize: 160,
    strokeWidth: 4,
    textSize: "text-lg",
  },
};

/**
 * Animated Loading component featuring the ByteSpace logo (logo.png).
 * Has a blurred primary-colored circular aura strictly behind the logo
 * instead of covering the entire page background.
 */
export function Loading({
  size = "md",
  text,
  fullScreen = false,
  logoSrc = "/logo.png",
  className,
}: LoadingProps) {
  const currentSize = sizeConfig[size];

  // Circle math for dynamic radius and circumference
  const radius = (currentSize.ringSize - currentSize.strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * 0.35; // 65% visible spinning arc

  const content = (
    <div className="flex flex-col items-center justify-center gap-4 ">
      {/* Logo & Glow Container: strictly sized to the logo footprint */}
      <div
        className={cn(
          "relative flex items-center justify-center select-none",
          currentSize.container,
        )}
      >
        {/* 1. Diffuse outer blurred circle with brand primary color */}
        <div className="absolute -inset-3 rounded-full bg-primary/45 blur-2xl animate-pulse pointer-events-none" />

        {/* 2. Concentrated inner blurred primary circle right behind the logo */}
        <div className="absolute inset-0 rounded-full bg-primary blur-lg opacity-85 pointer-events-none" />

        {/* 3. Smooth animated spinner ring */}
        <svg
          className="absolute inset-0 size-full animate-spin [animation-duration:1.4s]"
          viewBox={`0 0 ${currentSize.ringSize} ${currentSize.ringSize}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle circular track */}
          <circle
            cx={currentSize.ringSize / 2}
            cy={currentSize.ringSize / 2}
            r={radius}
            strokeWidth={currentSize.strokeWidth}
            className="stroke-primary/20"
            fill="none"
          />

          {/* Glowing neon secondary arc */}
          <circle
            cx={currentSize.ringSize / 2}
            cy={currentSize.ringSize / 2}
            r={radius}
            strokeWidth={currentSize.strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="stroke-secondary drop-shadow-[0_0_8px_rgba(203,252,1,0.6)]"
            fill="none"
          />
        </svg>

        {/* 4. Centered Logo with gentle breathing pulse animation */}
        <div className="relative z-10 flex items-center justify-center animate-pulse [animation-duration:2.2s]">
          <Image
            src={logoSrc}
            alt="ByteSpace Loading Logo"
            width={currentSize.logoWidth}
            height={currentSize.logoHeight}
            priority
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* Optional loading status text with animated dots */}
      {text && (
        <div
          className={cn(
            "font-sans font-medium tracking-wide flex items-center gap-1.5 text-slate-700 select-none",
            currentSize.textSize,
          )}
        >
          <span>{text}</span>
          <span className="inline-flex gap-0.5 text-primary">
            <span className="animate-bounce [animation-delay:0ms]">.</span>
            <span className="animate-bounce [animation-delay:150ms]">.</span>
            <span className="animate-bounce [animation-delay:300ms]">.</span>
          </span>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        role="status"
        aria-label={text || "Loading"}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-md overflow-hidden transition-all duration-300",
          className,
        )}
      >
        <div className="relative z-10">{content}</div>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-label={text || "Loading"}
      className={cn(
        "relative flex flex-col items-center justify-center w-full min-h-[360px] py-12",
        className,
      )}
    >
      {content}
    </div>
  );
}

export default Loading;

"use client";

import React from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Body, Heading } from "../shared/typography";
import { cn } from "@/lib/utils";

export interface StatChipData {
  /** Numeric end value (e.g. 12, 70, 16) */
  end?: number;
  value?: number;
  /** Suffix appended after the number (e.g. "K", "+") */
  suffix?: string;
  /** Label shown below the number (e.g. "Students") */
  label: string;
}

interface StatChipProps extends StatChipData {
  className?: string;
}

export default function StatChip({
  end,
  value,
  suffix = "",
  label,
  className,
}: StatChipProps) {
  const targetValue = value ?? end ?? 0;

  return (
    <div className={cn("flex flex-col", className)}>
      <Heading size="s" className="text-primary leading-tight! inline-flex ">
        <NumberTicker
          value={targetValue}
          className="text-primary tracking-normal"
        />
        {suffix ? <span>{suffix}</span> : null}
      </Heading>
      <Body size="l" className="text-gray-700 mt-0.5">
        {label}
      </Body>
    </div>
  );
}

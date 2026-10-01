"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heading, Label, Body } from "@/components/shared/typography";

export interface TestimonialItem {
  id?: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface TestimonialCardProps {
  testimonial?: TestimonialItem;
  name?: string;
  role?: string;
  avatar?: string;
  quote?: string;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  name: propName,
  role: propRole,
  avatar: propAvatar,
  quote: propQuote,
  className,
}: TestimonialCardProps) {
  const name = propName || testimonial?.name || "";
  const role = propRole || testimonial?.role || "";
  const avatar = propAvatar || testimonial?.avatar || "";
  const quote = propQuote || testimonial?.quote || "";

  return (
    <Card
      className={cn(
        "bg-white gap-0! rounded-[24px] p-6 sm:p-8 border border-slate-100/90 ring-0 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-start",
        className,
      )}
    >
      {/* Avatar */}
      <Avatar className="size-16 sm:size-18 mb-5 ring-2 ring-slate-100/80 shrink-0">
        <AvatarImage src={avatar} alt={name} className="object-cover" />
        <AvatarFallback className="font-semibold text-slate-700 bg-slate-100">
          {name ? name.slice(0, 2).toUpperCase() : "BS"}
        </AvatarFallback>
      </Avatar>

      {/* Name & Role */}
      <div>
        <Heading size="xs" font="poppins" className="text-slate-950 ">
          {name}
        </Heading>
        <Label size="m" className="text-primary  mt-0.5 block">
          {role}
        </Label>
      </div>

      {/* Quote */}
      <Body size="m" className="text-slate-700  mt-4">
        {quote}
      </Body>
    </Card>
  );
}

export default TestimonialCard;

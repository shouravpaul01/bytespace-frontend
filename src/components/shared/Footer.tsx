"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { SearchInput } from "@/components/shared/SearchInput";

import { cn } from "@/lib/utils";
import { Body, bodySizeClasses } from "./typography";
import NavLink from "./NavLink";

const column1Links = [
  { label: "Featured Courses", href: "#" },
  { label: "Featured Categories", href: "#" },
  { label: "Business", href: "#" },
  { label: "IT", href: "#" },
  { label: "Design", href: "#" },
];

const column2Links = [
  { label: "Development", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Photography", href: "#" },
  { label: "Finance", href: "#" },
  { label: "Sport", href: "#" },
];

const column3Links = [
  { label: "Become a Creator", href: "#" },
  { label: "Affiliate Program", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Help", href: "#" },
  { label: "About", href: "#" },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

/**
 * Global site footer with newsletter subscription, grouped navigation links, and copyright.
 */
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white text-slate-950 border-t border-slate-100">
      <div className="container pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          <div className="max-w-[504px] flex flex-col">
            <Logo textColor="text-slate-950" />

            <Body size="s" className="mt-4">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </Body>

            <div className="mt-6">
              <SearchInput
                type="email"
                required
                showIcon={false}
                placeholder="Enter your email"
                buttonText="Search"
                inputWrapperClassName="border border-slate-300 shadow-none"
                value={email}
                onChange={setEmail}
                onSubmit={handleSubmit}
              />
            </div>

            <Body size="xs" className="mt-5">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </Body>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            <ul className="space-y-4">
              {column1Links.map((link) => (
                <li key={link.label}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    className={cn(bodySizeClasses.s!)}
                  />
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              {column2Links.map((link) => (
                <li key={link.label}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    className={cn(bodySizeClasses.s!)}
                  />
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              {column3Links.map((link) => (
                <li key={link.label}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    className={cn(bodySizeClasses.s!)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-slate-200 my-10 sm:my-12 md:my-14" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 font-satoshi">
          <Body size="s">
            @ {new Date().getFullYear()} ByteSpace. All rights reserved.
          </Body>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {bottomLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                label={link.label}
                className={cn(bodySizeClasses.s!)}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

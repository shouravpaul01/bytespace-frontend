"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/constant";
import Logo from "../Logo";
import NavLink from "../NavLink";
import ShoppingCart from "./ShoppingCart";
import { cn } from "@/lib/utils";

export interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  return (
    <div className={cn("flex md:hidden items-center gap-3", className)}>
      <ShoppingCart />

      <Sheet>
        <SheetTrigger asChild>
          <Menu className="size-6 text-white" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[300px] sm:w-[340px] p-0 bg-primary text-white border-l border-white/15 flex flex-col justify-between h-full [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:bg-white/10 [&_[data-slot=sheet-close]]:hover:text-white"
        >
          {/* Header inside drawer */}
          <SheetHeader className="p-5 border-b border-white/10 flex flex-row items-center justify-between text-left">
            <Logo textColor="text-white" />
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
          </SheetHeader>

          {/* Navigation Links list */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <SheetClose asChild className="w-full">
                    <NavLink
                      href={link.href}
                      label={link.label}
                      className="w-full block rounded-lg px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      activeClassName="bg-white/15 text-white font-semibold"
                      inactiveClassName="text-white/80 hover:text-white"
                    />
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="bg-white/10" />

          {/* Bottom actions anchored strictly at the very bottom */}
          <SheetFooter className="mt-auto p-5 flex flex-col gap-3 ">
            <SheetClose asChild>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">Sign In</Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button asChild variant="secondary" className="w-full  ">
                <Link href="/register">Join Us</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;

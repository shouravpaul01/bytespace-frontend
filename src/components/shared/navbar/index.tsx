"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import NavLink from "../NavLink";
import { navLinks } from "@/constant";
import Logo from "../Logo";
import ShoppingCart from "./ShoppingCart";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none h-[120px] flex items-center",
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-md border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="w-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo href="/" textColor="text-white" />

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  variant="navbar"
                  className="px-1"
                />
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions (Sign In, Join Us, Cart) */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/login" label="Sign In" variant="navbar" />
            <NavLink href="/register" label="Join Us" variant="navbar" />
            <ShoppingCart />
          </div>

          {/* Mobile Menu & Drawer */}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}

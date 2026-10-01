"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  bodySizeClasses,
  labelSizeClasses,
} from "@/components/shared/typography";

export type NavLinkProps = {
  href: string;
  label?: string;
  children?: React.ReactNode;
  exact?: boolean;
  variant?: "default" | "navbar";

  // customizable styles
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
};

export default function NavLink({
  href,
  label,
  children,
  exact = true,
  variant = "default",
  className,
  activeClassName,
  inactiveClassName,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const defaultInactiveClass =
    variant === "navbar"
      ? "text-white/80 hover:text-white hover:-translate-y-1"
      : "font-satoshi text-slate-700 hover:text-primary hover:-translate-y-0.5";

  const defaultActiveClass =
    variant === "navbar"
      ? "text-white font-semibold -translate-y-1"
      : "font-satoshi text-primary font-semibold -translate-y-0.5";

  return (
    <Link
      href={href}
      className={cn(
        "inline-block relative transition-all duration-200 ease-out active:translate-y-0",
        isActive
          ? cn(
              labelSizeClasses.m,
              defaultActiveClass,
              activeClassName,
            )
          : cn(
              bodySizeClasses.m,
              defaultInactiveClass,
              inactiveClassName,
            ),
        className,
      )}
    >
      {children || label}
    </Link>
  );
}

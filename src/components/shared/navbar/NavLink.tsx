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
  label: string;
  exact?: boolean;

  // customizable styles
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
};

export default function NavLink({
  href,
  label,
  exact = true,
  className,
  activeClassName,
  inactiveClassName,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "inline-block relative transition-all duration-200 ease-out active:translate-y-0",
        isActive
          ? cn(
              labelSizeClasses.m,
              "text-white font-semibold -translate-y-1",
              activeClassName,
            )
          : cn(
              bodySizeClasses.m,
              "text-white/80 hover:text-white hover:-translate-y-1",
              inactiveClassName,
            ),
        className,
      )}
    >
      {label}
    </Link>
  );
}

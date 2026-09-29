"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ShoppingCartProps {
  /** Optional badge count for items in cart */
  itemCount?: number;
  /** Click event handler */
  onClick?: () => void;
  /** Custom button className */
  className?: string;
  /** Custom icon className */
  imageClassName?: string;
}

export function ShoppingCart({
  itemCount,
  onClick,
  className,
  imageClassName,
}: ShoppingCartProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Shopping Cart"
      onClick={onClick}
      className={cn(
        "relative text-white hover:text-white hover:bg-white/10 transition-all active:scale-95 cursor-pointer size-10 rounded-full",
        className,
      )}
    >
      <Image
        src="/icons/cart.png"
        alt="Shopping Cart"
        width={24}
        height={24}
        className={cn("size-6 object-contain select-none", imageClassName)}
      />

      {itemCount !== undefined && itemCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center shadow-sm select-none">
          {itemCount}
        </span>
      )}
    </Button>
  );
}

export const CartButton = ShoppingCart;
export default ShoppingCart;

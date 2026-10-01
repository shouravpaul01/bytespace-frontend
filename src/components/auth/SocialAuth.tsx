"use client";

import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SocialAuthProps {
  showDivider?: boolean;
  dividerText?: string;
  onFacebookClick?: () => void;
  onGoogleClick?: () => void;
  className?: string;
}

export function SocialAuth({
  showDivider = true,
  dividerText = "or",
  onFacebookClick,
  onGoogleClick,
  className,
}: SocialAuthProps) {
  const handleFacebookLogin = () => {
    if (onFacebookClick) {
      onFacebookClick();
    } else {
      toast.info("Facebook login clicked");
    }
  };

  const handleGoogleLogin = () => {
    if (onGoogleClick) {
      onGoogleClick();
    } else {
      toast.info("Google login clicked");
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Optional Divider with Centered Text */}
      {showDivider && (
        <div className="relative my-7 flex items-center justify-center">
          <Separator className="w-full bg-slate-200" />
          <span className="absolute bg-white px-3 text-xs sm:text-sm text-slate-400 font-medium">
            {dividerText}
          </span>
        </div>
      )}

      {/* Social Media Action Buttons using shadcn Button and public/icons */}
      <div className="flex items-center justify-center gap-4">
        {/* Facebook Button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Sign in with Facebook"
          onClick={handleFacebookLogin}
          className="size-12 rounded-full border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 cursor-pointer shadow-none"
        >
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={22}
            height={22}
            className="size-8 object-contain"
          />
        </Button>

        {/* Google Button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Sign in with Google"
          onClick={handleGoogleLogin}
          className="size-12 rounded-full border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 cursor-pointer shadow-none"
        >
          <Image
            src="/icons/google.svg"
            alt="Google"
            width={22}
            height={22}
            className="size-8 object-contain"
          />
        </Button>
      </div>
    </div>
  );
}

export const SocialLogin = SocialAuth;

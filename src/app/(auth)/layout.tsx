import type { Metadata } from "next";
import Logo from "@/components/shared/Logo";
import { GridPattern } from "@/components/shared/GridPattern";

export const metadata: Metadata = {
  title: "ByteSpace - Authentication",
  description: "Sign in or create your ByteSpace account",
};

/**
 * Dedicated layout for authentication pages (/login, /register).
 * Features a full-canvas background grid pattern and a 120px header with brand icon.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-auth-page
      className="relative min-h-screen w-full bg-primary flex flex-col overflow-x-hidden"
    >
      <GridPattern
        variant="hero-blue"
        strokeColor="rgba(255, 255, 255, 0.12)"
        strokeWidth={1}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <header className="relative z-10 h-[120px] flex items-center shrink-0">
        <div className="container mx-auto px-4 sm:px-6">
          <Logo
            showText={false}
            width={34}
            height={38}
            className="w-8.5 h-9.5 hover:scale-105 transition-transform"
          />
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col justify-start items-center pt-2 sm:pt-4 lg:pt-6 pb-8 sm:pb-12">
        {children}
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string;
  src?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  showText?: boolean;
  textColor?: string;
};

export default function Logo({
  href = "/",
  src = "/logo.svg",
  className,
  width = 28,
  height = 32,
  priority = true,
  showText = true,
  textColor = "text-white",
}: LogoProps) {
  const logoContent = (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <Image
        src={src}
        alt="ByteSpace Logo"
        width={width}
        height={height}
        className="object-contain w-7 h-8"
        priority={priority}
      />
      {showText && (
        <span
          className={cn(
            "font-extrabold text-xl md:text-2xl tracking-tight leading-none font-sans",
            textColor
          )}
        >
          ByteSpace
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center shrink-0">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
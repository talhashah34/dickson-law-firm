import Image from "next/image";
import { site } from "@/lib/site";

type LogoProps = {
  /** Compact header mark vs fuller footer mark */
  variant?: "header" | "footer";
};

export function Logo({ variant = "header" }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Image
      src="/logo.png"
      alt={`Dickson Law Office LTD — ${site.tagline}`}
      width={936}
      height={536}
      className={
        isFooter
          ? "h-auto w-[11rem] max-w-full object-contain sm:w-[15rem]"
          : "h-10 w-auto max-w-[11rem] object-contain sm:h-[3.75rem] sm:max-w-none"
      }
      priority={variant === "header"}
    />
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";

const TONES = {
  navy: "from-navy via-[oklch(0.32_0.05_255)] to-navy",
  sand: "from-sand via-ivory to-stone",
  olive: "from-olive via-[oklch(0.55_0.05_125)] to-navy",
  terracotta: "from-terracotta via-sand to-ivory",
  sky: "from-sky via-ivory to-sand",
  stone: "from-stone via-sand to-ivory",
} as const;

export type MediaTone = keyof typeof TONES;

interface MediaPlaceholderProps {
  label: string;
  src?: string;
  tone?: MediaTone;
  className?: string;
  dark?: boolean;
  priority?: boolean;
  sizes?: string;
  position?: string;
  /** Dark scrim so light text stays legible over the photo. */
  overlay?: boolean;
}

export function MediaPlaceholder({
  label,
  src,
  tone = "sand",
  className,
  dark = false,
  priority = false,
  sizes = "(max-width: 640px) 100vw, 50vw",
  position,
  overlay = false,
}: MediaPlaceholderProps) {
  if (src) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden bg-sand/40", className)}>
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes={sizes}
          quality={90}
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/15 to-navy/10" />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-start overflow-hidden bg-gradient-to-br",
        TONES[tone],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
      <span
        className={cn(
          "relative z-10 m-4 max-w-[65%] font-sans text-[10px] uppercase leading-relaxed tracking-widest-lg",
          dark ? "text-ivory/70" : "text-navy/50",
        )}
      >
        {label}
      </span>
    </div>
  );
}

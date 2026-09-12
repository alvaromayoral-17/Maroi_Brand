import { cn } from "@/lib/utils";

interface StorySectionProps {
  index?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function StorySection({
  index,
  title,
  children,
  className,
  align = "left",
}: StorySectionProps) {
  return (
    <section
      className={cn(
        "mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20",
        align === "center" && "text-center",
        className,
      )}
    >
      {index && (
        <p className="mb-3 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
          {index}
        </p>
      )}
      <h2 className="mb-6 font-serif text-3xl text-navy sm:text-4xl">{title}</h2>
      <div className="space-y-4 font-sans text-[15px] leading-relaxed text-navy/80 sm:text-base">
        {children}
      </div>
    </section>
  );
}

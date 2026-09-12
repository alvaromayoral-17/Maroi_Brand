import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch sm:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:px-16">
          <h1 className="font-serif text-6xl leading-none tracking-tight text-navy sm:text-7xl">
            MAROI
          </h1>
          <div className="h-px w-10 bg-navy/40" />
          <p className="font-sans text-xs uppercase tracking-widest-lg text-navy/60">
            Mediterranean Lifestyle
          </p>
          <p className="font-serif text-2xl italic leading-snug text-navy/90 sm:text-3xl">
            More than clothing.
            <br />A way of life.
          </p>
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-navy/50">
            Marbella · Madrid · Ibiza · The World
          </p>
          <Link
            href="/la-marca"
            className="mt-4 inline-block w-fit border-b border-navy/60 pb-1 font-sans text-xs uppercase tracking-widest-lg text-navy transition-colors hover:border-navy hover:text-terracotta"
          >
            Descubrir la marca
          </Link>
        </div>

        <div className="relative order-first h-[60vh] sm:order-none sm:h-auto">
          <MediaPlaceholder
            label="Chaqueta safari de lino sobre acantilado mediterráneo"
            src="/images/hero-home.jpg"
            tone="sky"
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            position="center 30%"
            className="h-full"
          />
          <ul className="absolute right-6 top-6 space-y-1 text-right font-sans text-[11px] uppercase tracking-widest-lg text-navy/70 sm:right-10 sm:top-10">
            <li>Natural</li>
            <li>Elegant</li>
            <li>Timeless</li>
            <li>Mediterranean</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

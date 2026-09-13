import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-end overflow-hidden sm:min-h-[620px] sm:items-center lg:h-[84vh]">
      <Image
        src="/images/hero-home.jpg"
        alt="Chaqueta safari de lino sobre un acantilado mediterráneo"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 28%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#F5F1EA_0%,rgba(245,241,234,0.92)_34%,rgba(245,241,234,0.35)_62%,rgba(245,241,234,0.15)_100%)] sm:bg-[linear-gradient(to_right,#F5F1EA_0%,rgba(245,241,234,0.94)_18%,rgba(245,241,234,0.45)_36%,rgba(245,241,234,0)_56%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="max-w-xs sm:max-w-sm">
          <div className="h-px w-10 bg-navy/50" />
          <p className="mt-6 font-sans text-xs uppercase tracking-widest-lg text-navy/70">
            Mediterranean Lifestyle
          </p>
          <p className="mt-7 font-serif text-3xl italic leading-snug text-navy sm:text-4xl">
            More than clothing.
            <br />A way of life.
          </p>
          <p className="mt-7 font-sans text-[11px] uppercase tracking-widest-lg text-navy/60">
            Marbella · Madrid · Ibiza · The World
          </p>
          <Link
            href="/la-marca"
            className="mt-9 inline-block border-b border-navy/60 pb-1 font-sans text-xs uppercase tracking-widest-lg text-navy transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Descubrir la marca
          </Link>
        </div>
      </div>

      <ul className="absolute right-6 top-8 z-10 space-y-1.5 text-right font-sans text-[11px] uppercase tracking-widest-lg text-navy/75 sm:right-10 sm:top-12">
        <li>Natural</li>
        <li>Elegant</li>
        <li>Timeless</li>
        <li>Mediterranean</li>
      </ul>
    </section>
  );
}

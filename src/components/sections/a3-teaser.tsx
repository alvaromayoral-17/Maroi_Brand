import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";

export function A3Teaser() {
  return (
    <section className="border-t border-navy/10 bg-navy py-16 text-ivory sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:grid-cols-[0.8fr_1.4fr_0.8fr] sm:gap-8 sm:px-8">
        <div>
          <p className="font-serif text-6xl leading-none sm:text-7xl">
            A<sup className="text-3xl sm:text-4xl">3</sup>
          </p>
          <div className="my-4 h-px w-10 bg-ivory/40" />
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-ivory/70">
            by MAROI
          </p>
          <p className="mt-4 font-serif text-xl italic text-ivory/90">
            La misma esencia.
            <br />
            Una nueva generación.
          </p>
          <Link
            href="/a3"
            className="mt-6 inline-block w-fit border-b border-ivory/50 pb-1 font-sans text-xs uppercase tracking-widest-lg text-ivory transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Descubrir A³
          </Link>
        </div>

        <div className="aspect-[16/10] w-full overflow-hidden">
          <MediaPlaceholder
            label="A³ — grupo de amigos jóvenes, look mediterráneo relajado"
            src="/images/a3-generacion.jpg"
            tone="terracotta"
            dark
            sizes="(max-width: 640px) 100vw, 55vw"
            className="h-full"
          />
        </div>

        <div className="font-sans text-[11px] uppercase leading-relaxed tracking-widest-lg text-ivory/70">
          <p>Same horizon.</p>
          <p>Different journeys.</p>
          <div className="my-4 h-px w-10 bg-ivory/30" />
          <p className="font-serif text-sm normal-case italic tracking-normal text-ivory/80">
            &ldquo;Inspirados en la luz, el mar y la calma del sur.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";

export function LifestyleGrid() {
  return (
    <section className="border-t border-navy/10 bg-ivory py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 sm:grid-cols-3 sm:gap-5 sm:px-8">
        <Link href="/la-marca" className="group relative block aspect-[4/5] overflow-hidden">
          <MediaPlaceholder
            label="Etiqueta MAROI sobre lino: tailoring, resort, field"
            src="/images/etiqueta.jpg"
            tone="stone"
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-full transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Link>

        <Link href="/la-marca" className="group relative block aspect-[4/5] overflow-hidden">
          <MediaPlaceholder
            label="Cala mediterránea al atardecer"
            src="/images/cala-atardecer.jpg"
            tone="sky"
            dark
            overlay
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-full"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
            <p className="font-serif text-lg tracking-[0.1em]">MAROI Places</p>
            <p className="mt-2 font-sans text-[10px] uppercase tracking-widest-lg text-ivory/70">
              Inspiración en cada destino
            </p>
            <p className="mt-2 border-b border-ivory/50 pb-0.5 font-sans text-[10px] uppercase tracking-widest-lg">
              Ver más →
            </p>
          </div>
        </Link>

        <Link href="/la-marca" className="group relative block aspect-[4/5] overflow-hidden">
          <MediaPlaceholder
            label="Terraza con olivo frente al mar"
            src="/images/escena-terraza.jpg"
            tone="olive"
            dark
            overlay
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-full"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
            <p className="font-serif text-lg tracking-[0.1em]">Journal</p>
            <p className="mt-2 font-sans text-[10px] uppercase tracking-widest-lg text-ivory/70">
              Historias que inspiran
            </p>
            <p className="mt-2 border-b border-ivory/50 pb-0.5 font-sans text-[10px] uppercase tracking-widest-lg">
              Leer →
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

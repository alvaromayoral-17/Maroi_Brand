import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { CATEGORIES, PRODUCTS } from "@/data/products";

export function CategoryGrid() {
  return (
    <section className="border-t border-navy/10 bg-ivory py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl text-navy sm:text-3xl">
            El armario MAROI
          </h2>
          <Link
            href="/hombre"
            className="hidden font-sans text-[11px] uppercase tracking-widest-lg text-navy/50 hover:text-terracotta sm:block"
          >
            Menos prendas. Más posibilidades.
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-5">
          {CATEGORIES.map((cat) => {
            const hero = PRODUCTS.find((p) => p.category === cat.slug)!;
            return (
              <Link
                key={cat.slug}
                href={`/hombre?c=${cat.slug}`}
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <MediaPlaceholder
                    label={cat.name}
                    src={cat.image}
                    tone={hero.colors[0].tone}
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="h-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 text-center font-sans text-[11px] uppercase tracking-widest-lg text-navy/80 group-hover:text-terracotta">
                  {cat.name}
                </p>
                <p className="text-center font-sans text-[10px] uppercase tracking-widest-lg text-navy/40">
                  Ver más
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { ProductCard } from "@/components/product-card";
import { ProductPurchasePanel } from "@/components/product-purchase-panel";
import {
  CATEGORIES,
  PRODUCTS,
  formatPrice,
  getProduct,
  productImage,
} from "@/data/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/hombre/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Prenda no encontrada — MAROI" };
  return {
    title: `${product.name} — MAROI`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps<"/hombre/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.slug === product.category)!;
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 4);

  return (
    <>
      <nav className="mx-auto max-w-7xl px-5 py-5 font-sans text-[11px] uppercase tracking-widest-lg text-navy/50 sm:px-8">
        <Link href="/hombre" className="hover:text-navy">
          Hombre
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy/80">{category.name}</span>
      </nav>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {product.imageLabels.map((label, i) => (
            <div
              key={label}
              className={`aspect-[4/5] overflow-hidden ${i === 0 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <MediaPlaceholder
                label={label}
                src={productImage(product.slug, i)}
                tone={product.colors[i % product.colors.length].tone}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
                className="h-full"
              />
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          {product.icon && (
            <p className="mb-3 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
              Pieza icónica
            </p>
          )}
          <h1 className="font-serif text-3xl text-navy sm:text-4xl">{product.name}</h1>
          <p className="mt-3 font-sans text-lg text-navy/80">
            {formatPrice(product.price)}
          </p>

          <div className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-navy/75">
            {product.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ProductPurchasePanel product={product} />

          <div className="mt-10 space-y-5 border-t border-navy/10 pt-8">
            <Detail label="El detalle" value={product.detail} />
            <Detail label="Tejido" value={product.fabric} />
            <Detail label="Composición" value={product.composition} />
            <Detail label="Cuidados" value={product.care} />
          </div>

          <div className="mt-10 border-t border-navy/10 pt-8">
            <p className="font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
              Cómo combinarla
            </p>
            <p className="mt-3 font-serif text-base italic text-navy/80">
              MAROI no impone una forma de vestir. Enseña a combinarla.
            </p>
            <ul className="mt-4 space-y-2">
              {product.styleWith.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 font-sans text-sm leading-relaxed text-navy/75"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-navy/30" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-navy/10 bg-ivory py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="mb-10 font-serif text-2xl text-navy">
              Completa el armario
            </h2>
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4">
      <span className="font-sans text-[10px] uppercase tracking-widest-lg text-navy/45">
        {label}
      </span>
      <span className="font-sans text-sm leading-relaxed text-navy/75">{value}</span>
    </div>
  );
}

import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { formatPrice, productImage, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/hombre/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden">
        <MediaPlaceholder
          label={product.imageLabels[0]}
          src={productImage(product.slug)}
          tone={product.colors[0].tone}
          sizes="(max-width: 640px) 50vw, 25vw"
          className="h-full transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {product.icon && (
          <span className="absolute right-3 top-3 bg-ivory/85 px-2 py-1 font-sans text-[9px] uppercase tracking-widest-lg text-navy">
            Icono
          </span>
        )}
      </div>

      <div className="mt-4">
        <h3 className="font-serif text-lg text-navy transition-colors group-hover:text-terracotta">
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-xs leading-relaxed text-navy/55">
          {product.shortDescription}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-sans text-sm text-navy">{formatPrice(product.price)}</span>
          <span className="flex gap-1.5">
            {product.colors.map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="h-3 w-3 rounded-full border border-navy/20"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </span>
        </div>
      </div>
    </Link>
  );
}

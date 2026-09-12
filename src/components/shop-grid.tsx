"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/products";
import { cn } from "@/lib/utils";

type Filter = CategorySlug | "todo";

export function ShopGrid({ initialCategory }: { initialCategory?: Filter }) {
  const [filter, setFilter] = useState<Filter>(initialCategory ?? "todo");

  const products =
    filter === "todo" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  const active = CATEGORIES.find((c) => c.slug === filter);

  return (
    <>
      <div className="sticky top-20 z-30 border-y border-navy/10 bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-4 sm:justify-center sm:px-8">
          {(["todo", ...CATEGORIES.map((c) => c.slug)] as Filter[]).map((slug) => {
            const label =
              slug === "todo"
                ? "Todo"
                : CATEGORIES.find((c) => c.slug === slug)!.name;
            return (
              <button
                key={slug}
                onClick={() => setFilter(slug)}
                className={cn(
                  "shrink-0 border-b pb-1 font-sans text-[11px] uppercase tracking-widest-lg transition-colors",
                  filter === slug
                    ? "border-navy text-navy"
                    : "border-transparent text-navy/50 hover:text-navy",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="mb-10 text-center font-serif text-lg italic text-navy/70">
          {active ? active.tagline : "Menos prendas. Más posibilidades."}
        </p>

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

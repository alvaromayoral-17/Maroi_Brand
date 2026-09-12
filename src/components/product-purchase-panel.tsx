"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  return (
    <div className="mt-8 space-y-6">
      <div>
        <p className="font-sans text-[10px] uppercase tracking-widest-lg text-navy/45">
          Color — <span className="text-navy/75">{color}</span>
        </p>
        <div className="mt-3 flex gap-3">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.name)}
              aria-label={c.name}
              className={cn(
                "h-7 w-7 rounded-full border transition-all",
                color === c.name
                  ? "border-navy ring-1 ring-navy ring-offset-2 ring-offset-ivory"
                  : "border-navy/20 hover:border-navy/50",
              )}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="font-sans text-[10px] uppercase tracking-widest-lg text-navy/45">
          Talla
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={cn(
                "min-w-12 border px-3 py-2 font-sans text-xs tracking-widest transition-colors",
                size === s
                  ? "border-navy bg-navy text-ivory"
                  : "border-navy/20 text-navy/75 hover:border-navy",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setAdded(true)}
        disabled={!size}
        className={cn(
          "w-full py-4 font-sans text-[11px] uppercase tracking-widest-lg transition-colors",
          size
            ? "bg-navy text-ivory hover:bg-terracotta"
            : "cursor-not-allowed bg-navy/20 text-ivory/70",
        )}
      >
        {added ? "Añadido a la bolsa" : size ? "Añadir a la bolsa" : "Selecciona una talla"}
      </button>

      <p className="font-sans text-[11px] leading-relaxed text-navy/45">
        Envío gratuito en pedidos superiores a 200 €. Devoluciones durante 30 días.
      </p>
    </div>
  );
}

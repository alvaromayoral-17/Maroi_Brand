import type { Metadata } from "next";
import { ShopGrid } from "@/components/shop-grid";
import { CATEGORIES } from "@/data/products";

export const metadata: Metadata = {
  title: "Hombre — MAROI",
  description:
    "El armario MAROI: chaquetas, camisas, pantalones, punto y shorts. Prendas pensadas para durar más que una temporada.",
};

export default async function HombrePage({ searchParams }: PageProps<"/hombre">) {
  const { c } = await searchParams;
  const initial = CATEGORIES.find((cat) => cat.slug === c)?.slug;

  return (
    <>
      <section className="border-b border-navy/10 bg-ivory px-5 pb-10 pt-14 text-center sm:px-8 sm:pb-12 sm:pt-20">
        <p className="font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
          Colección
        </p>
        <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">Hombre</h1>
        <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-navy/70">
          No queremos hacer muchas prendas. Queremos hacer las prendas correctas.
          Cada pieza tiene una razón para existir y está pensada para vivir años
          dentro del armario.
        </p>
      </section>
      <ShopGrid initialCategory={initial} />
    </>
  );
}

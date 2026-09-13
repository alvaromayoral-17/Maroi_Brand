import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";

export const metadata: Metadata = {
  title: "La Paleta — MAROI",
  description:
    "Ivory, sand, stone, white, mediterranean blue, navy, olive y terracotta. Una paleta inspirada directamente en el paisaje mediterráneo.",
};

const PALETTE = [
  { name: "Ivory", hex: "#F5F1EA", origin: "La cal de las casas encaladas", dark: false },
  { name: "Sand", hex: "#D8C9AE", origin: "La arena a última hora de la tarde", dark: false },
  { name: "Stone", hex: "#A99A85", origin: "La piedra seca de los acantilados", dark: false },
  { name: "White", hex: "#FFFFFF", origin: "El lino recién planchado", dark: false },
  { name: "Mediterranean Blue", hex: "#8FB8D9", origin: "El mar en calma a mediodía", dark: false },
  { name: "Navy", hex: "#16243F", origin: "El mar cuando cae la noche", dark: true },
  { name: "Olive", hex: "#5C6B41", origin: "La vegetación del monte bajo", dark: true },
  { name: "Terracotta", hex: "#BE6A45", origin: "La tierra y el barro cocido", dark: true },
];

const PAIRINGS = [
  { a: "#FFFFFF", b: "#8FB8D9", label: "Blanco con azul", note: "La pareja del mediodía. Luz y limpieza." },
  { a: "#D8C9AE", b: "#BE6A45", label: "Arena con terracota", note: "Color sin levantar la voz." },
  { a: "#5C6B41", b: "#F5F1EA", label: "Oliva con crudo", note: "La que mejor envejece a lo largo del día." },
  { a: "#16243F", b: "#FFFFFF", label: "Navy con blanco", note: "La pareja de la noche." },
];

const LANDSCAPE = ["La arena", "La piedra", "El mar", "La vegetación", "La tierra"];

export default function PaletaPage() {
  return (
    <>
      <section className="relative flex h-[38vh] items-end overflow-hidden sm:h-[46vh]">
        <MediaPlaceholder
          label="Cala mediterránea: arena, piedra, mar y vegetación"
          src="/images/cala-turquesa.jpg"
          tone="sky"
          dark
          overlay
          priority
          sizes="100vw"
          position="center 55%"
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-10 text-ivory sm:px-8 sm:pb-14">
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-ivory/75">
            10 — La Paleta MAROI
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Nuestra paleta</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <p className="font-serif text-xl leading-relaxed text-navy sm:text-2xl">
          La colección debe reconocerse por sus colores.
        </p>
        <p className="mt-6 font-sans text-[15px] leading-relaxed text-navy/75">
          Ocho tonos tomados directamente del paisaje. No se pelean entre ellos
          porque en el sitio del que vienen tampoco se pelean, y por eso todo
          combina con todo dentro del armario MAROI.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
          {LANDSCAPE.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {PALETTE.map((c) => (
            <div key={c.name}>
              <div
                className="flex aspect-[4/5] items-end border border-navy/10 p-4"
                style={{ backgroundColor: c.hex }}
              >
                <span
                  className={`font-sans text-[10px] uppercase tracking-widest-lg ${
                    c.dark ? "text-ivory/80" : "text-navy/45"
                  }`}
                >
                  {c.hex}
                </span>
              </div>
              <p className="mt-3 font-serif text-lg text-navy">{c.name}</p>
              <p className="mt-1 font-sans text-xs leading-relaxed text-navy/60">
                {c.origin}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-navy py-16 text-ivory sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
            Las combinaciones
          </p>
          <h2 className="mb-12 max-w-2xl font-serif text-3xl sm:text-4xl">
            Cuatro parejas que resuelven casi cualquier día
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PAIRINGS.map((p) => (
              <div key={p.label}>
                <div className="flex h-32 overflow-hidden ring-1 ring-ivory/20">
                  <div className="w-1/2" style={{ backgroundColor: p.a }} />
                  <div className="w-1/2" style={{ backgroundColor: p.b }} />
                </div>
                <p className="mt-4 font-serif text-lg text-ivory">{p.label}</p>
                <p className="mt-1 font-sans text-xs leading-relaxed text-ivory/60">
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center font-serif text-xl italic text-ivory/90 sm:text-2xl">
            Menos prendas. Más posibilidades.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 text-center sm:py-20">
        <p className="font-sans text-sm leading-relaxed text-navy/70">
          La paleta es solo una parte de la historia.
        </p>
        <Link
          href="/la-marca"
          className="mt-5 inline-block border-b border-navy/60 pb-1 font-sans text-xs uppercase tracking-widest-lg text-navy transition-colors hover:border-terracotta hover:text-terracotta"
        >
          Descubrir la marca
        </Link>
      </section>
    </>
  );
}

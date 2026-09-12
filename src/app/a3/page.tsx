import type { Metadata } from "next";
import { MediaPlaceholder } from "@/components/media-placeholder";

export const metadata: Metadata = {
  title: "A³ by MAROI",
  description:
    "A³ by MAROI — la misma esencia mediterránea, una nueva generación. Puedes empezar a vestir mejor sin dejar de ser tú.",
};

const COMBOS = [
  "Camisa de lino + zapatillas",
  "Blazer + denim",
  "Safari + camiseta",
  "Pantalón de sastrería + polo",
  "Cargo + mocasines",
];

export default function A3Page() {
  return (
    <>
      <section className="relative flex h-[70vh] items-end overflow-hidden sm:h-[85vh]">
        <MediaPlaceholder
          label="Tres amigos jóvenes bajo la luz mediterránea"
          src="/images/a3-trio.jpg"
          tone="terracotta"
          dark
          overlay
          priority
          sizes="100vw"
          position="center 35%"
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 text-ivory sm:px-8 sm:pb-16">
          <p className="font-serif text-7xl leading-none sm:text-8xl">
            A<sup className="text-4xl sm:text-5xl">3</sup>
          </p>
          <p className="mt-3 font-sans text-xs uppercase tracking-widest-lg text-ivory/80">
            by MAROI
          </p>
          <p className="mt-6 max-w-lg font-serif text-2xl italic leading-snug sm:text-3xl">
            A new generation of elegance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <h1 className="mb-6 font-serif text-3xl text-navy sm:text-4xl">
          La misma esencia. Una nueva generación.
        </h1>
        <p className="mb-4 font-sans text-[15px] leading-relaxed text-navy/80">
          MAROI no debe hablar exclusivamente al hombre que ya sabe vestir. Debe
          hablar también al joven que está descubriendo su propia elegancia — al que
          quizá hasta ahora ha vestido siempre con zapatillas, camiseta y sudadera,
          pero empieza a buscar algo diferente.
        </p>
        <p className="font-serif text-xl italic text-navy">
          No queremos decirle &ldquo;tienes que vestir como un hombre mayor&rdquo;.
          <br />
          Queremos decirle &ldquo;puedes empezar a vestir mejor sin dejar de ser
          tú&rdquo;.
        </p>
      </section>

      <section className="border-t border-navy/10 bg-navy py-14 text-ivory sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 sm:grid-cols-3 sm:px-8">
          {[
            {
              label: "Camisa de lino abierta, retrato joven",
              src: "/images/cat-camisas.jpg",
              tone: "sand" as const,
            },
            {
              label: "Cala turquesa, agua transparente",
              src: "/images/cala-turquesa.jpg",
              tone: "sky" as const,
            },
            {
              label: "Camisa terracota al sol de la tarde",
              src: "/images/cat-polos-knits.jpg",
              tone: "terracotta" as const,
            },
          ].map((img) => (
            <div key={img.label} className="aspect-[3/4] overflow-hidden">
              <MediaPlaceholder
                label={img.label}
                src={img.src}
                tone={img.tone}
                dark
                sizes="(max-width: 640px) 100vw, 33vw"
                className="h-full"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="mb-10 text-center font-serif text-2xl text-navy sm:text-3xl">
          MAROI no impone una forma de vestir. Enseña a combinarla.
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
          {COMBOS.map((combo) => (
            <div
              key={combo}
              className="border border-navy/10 bg-white/60 px-4 py-6 text-center font-sans text-xs uppercase tracking-widest-lg text-navy/80"
            >
              {combo}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-sand/30 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-5 sm:grid-cols-2 sm:px-8">
          <div className="aspect-[4/5] overflow-hidden">
            <MediaPlaceholder
              label="La elegancia que se hereda: blazer de lino y camisa azul"
              src="/images/blazer.jpg"
              tone="stone"
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-full"
            />
          </div>
          <div>
            <p className="mb-4 font-serif text-2xl italic text-navy">
              El padre reconoce la elegancia.
              <br />
              El hijo descubre una nueva forma de llevarla.
            </p>
            <p className="font-sans text-sm leading-relaxed text-navy/75">
              La elegancia se hereda, pero también se reinventa. Ahí nace una relación
              muy interesante entre generaciones: la misma sensibilidad mediterránea,
              vivida de dos formas distintas.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-navy py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <p className="font-serif text-2xl tracking-[0.1em]">
            A<sup className="text-sm">3</sup> BY MAROI
          </p>
          <p className="mt-2 font-sans text-[11px] uppercase tracking-widest-lg text-ivory/60">
            A new generation of elegance
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { MediaPlaceholder, type MediaTone } from "@/components/media-placeholder";
import { StorySection } from "@/components/story-section";

export const metadata: Metadata = {
  title: "La Marca — MAROI",
  description: "El origen, la filosofía y el manifiesto de MAROI. The Art of Living.",
};

const PALETTE = [
  { name: "Ivory", tone: "sand" as const, hex: "#F5F1EA" },
  { name: "Sand", tone: "sand" as const, hex: "#D8C9AE" },
  { name: "Stone", tone: "stone" as const, hex: "#A99A85" },
  { name: "White", tone: "sand" as const, hex: "#FFFFFF" },
  { name: "Mediterranean Blue", tone: "sky" as const, hex: "#8FB8D9" },
  { name: "Navy", tone: "navy" as const, hex: "#16243F" },
  { name: "Olive", tone: "olive" as const, hex: "#5C6B41" },
  { name: "Terracotta", tone: "terracotta" as const, hex: "#BE6A45" },
];

const PLACES = [
  { name: "Marbella", image: "/images/marbella.jpg", tone: "sky" as const },
  { name: "Ibiza", image: "/images/cala-turquesa.jpg", tone: "sand" as const },
  { name: "Madrid", image: "/images/madrid.jpg", tone: "stone" as const },
  { name: "Mallorca", image: "/images/cala-atardecer.jpg", tone: "olive" as const },
];

const FOUNDERS = ["Alejandra", "Álvaro", "Rodrigo", "Alonso", "Íñigo"];

const GARMENTS: {
  name: string;
  kicker: string;
  body: string;
  tone: MediaTone;
  image: string;
}[] = [
  {
    name: "La Chaqueta MAROI",
    image: "/images/chaqueta-safari.jpg",
    kicker: "La pieza fundacional",
    body: "Inspirada en la safari mediterránea y reinterpretada desde la sastrería. Cuatro bolsillos, estructura ligera, cuello con personalidad y una construcción suficientemente relajada para llevarla abierta, cerrada, con camisa o incluso con una camiseta. Es el icono: la firma visual de MAROI.",
    tone: "sand",
  },
  {
    name: "El Blazer MAROI",
    image: "/images/blazer.jpg",
    kicker: "La sastrería pierde rigidez",
    body: "Hombros naturales, tejidos ligeros, construcción desestructurada y colores esenciales. Un blazer para viajar, para comer frente al mar, para una tarde de verano o una cena. Una chaqueta que no obliga a cambiar de vida para llevarla.",
    tone: "stone",
  },
  {
    name: "La Camisa MAROI",
    image: "/images/cat-camisas.jpg",
    kicker: "El punto de entrada a MAROI",
    body: "Lino, algodón y tejidos naturales. Cuellos cuidados, volúmenes relajados. Una camisa que funciona sola, debajo de un blazer o abierta sobre una camiseta.",
    tone: "sky",
  },
  {
    name: "El Pantalón MAROI",
    image: "/images/cat-pantalones.jpg",
    kicker: "Utility, pero con elegancia",
    body: "Pantalones que mezclan la comodidad contemporánea con la construcción de la sastrería. Blanco, piedra, arena, azul y oliva. Y una línea cargo reinterpretada.",
    tone: "olive",
  },
  {
    name: "El Short MAROI",
    image: "/images/cat-shorts.jpg",
    kicker: "Un short con alma de sastrería",
    body: "No un pantalón corto deportivo. No un bañador. Pensado para el Mediterráneo, pero suficientemente sofisticado para formar parte de un look completo.",
    tone: "terracotta",
  },
];

export default function LaMarcaPage() {
  return (
    <>
      <section className="relative flex h-[46vh] items-end overflow-hidden sm:h-[56vh]">
        <MediaPlaceholder
          label="Puerto de Marbella al atardecer"
          src="/images/marbella.jpg"
          tone="navy"
          dark
          overlay
          priority
          sizes="100vw"
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-10 text-ivory sm:px-8 sm:pb-14">
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-ivory/70">
            The Art of Living
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">La Marca</h1>
        </div>
      </section>

      <StorySection index="01 — El Origen" title="MAROI nace de una forma de entender la vida">
        <p>
          Una forma de vivir en la que la elegancia no es una pose, sino una actitud.
          Nace del Mediterráneo, de su luz, de sus colores, de sus materiales, de sus
          casas, de sus noches y, sobre todo, de esa manera tan particular de
          disfrutar del tiempo.
        </p>
        <p>
          Pero MAROI no quiere mirar atrás. Quiere reinterpretar ese espíritu para una
          nueva generación: una generación que busca calidad sin ostentación,
          personalidad sin excesos y elegancia sin perder naturalidad.
        </p>
        <p className="font-serif text-lg italic text-navy">
          MAROI propone volver a vestir bien. No para aparentar. Para sentirse bien
          vestido.
        </p>
      </StorySection>

      <StorySection index="02 — Una Nueva Elegancia" title="Vestir elegante sin vestir formal">
        <p>
          Durante demasiado tiempo, la elegancia masculina se ha dividido entre dos
          extremos: la formalidad de la sastrería tradicional y la comodidad de la
          moda casual. MAROI busca ocupar ese espacio intermedio.
        </p>
        <p>
          Una chaqueta puede llevarse con camiseta. Un blazer puede convivir con un
          pantalón relajado. Una camisa de lino puede funcionar durante el día y
          convertirse en parte de un look de noche. Un pantalón cargo puede tener la
          construcción y la caída de una pieza de sastrería.
        </p>
        <p>La elegancia deja de ser una ocasión y se convierte en una forma cotidiana de vestir.</p>
      </StorySection>

      <section className="border-t border-navy/10 bg-navy py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="mb-2 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
            03 — El Concepto de Prenda
          </p>
          <h2 className="mb-4 font-serif text-3xl sm:text-4xl">
            No queremos hacer muchas prendas.
            <br />
            Queremos hacer las prendas correctas.
          </h2>
          <p className="mb-12 max-w-2xl font-sans text-sm leading-relaxed text-ivory/70">
            Cada pieza debe tener una razón para existir. Debe ser reconocible por su
            corte, por su tejido, por sus proporciones o por un detalle particular. Y,
            sobre todo, debe poder vivir durante años dentro del armario.
          </p>

          <div className="space-y-10">
            {GARMENTS.map((g) => (
              <div key={g.name} className="grid grid-cols-1 gap-6 border-t border-ivory/10 pt-10 sm:grid-cols-[220px_1fr] sm:gap-10">
                <div className="aspect-[4/5] overflow-hidden sm:aspect-auto sm:h-full">
                  <MediaPlaceholder
                    label={g.name}
                    src={g.image}
                    tone={g.tone}
                    dark
                    sizes="(max-width: 640px) 100vw, 220px"
                    className="h-full"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ivory sm:text-2xl">{g.name}</h3>
                  <p className="mt-1 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
                    {g.kicker}
                  </p>
                  <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-ivory/75">
                    {g.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StorySection index="04 — El Armario MAROI" title="Menos prendas. Más posibilidades.">
        <p>
          MAROI no quiere que el hombre tenga que pensar demasiado para vestirse.
          Queremos construir un sistema: una colección en la que todo combine con
          todo.
        </p>
        <p className="font-serif italic text-navy">
          Blanco con azul. Arena con terracota. Oliva con crudo. Navy con blanco.
        </p>
        <p>
          Las prendas se mezclan y se transforman. Una misma chaqueta puede tener
          cinco vidas. Un mismo pantalón puede acompañar una camisa de lino durante
          el día y un blazer por la noche.
        </p>
      </StorySection>

      <section className="border-t border-navy/10 bg-sand/30 py-14 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 sm:grid-cols-2 sm:px-8">
          <div className="aspect-[4/5] overflow-hidden">
            <MediaPlaceholder
              label="Dos generaciones, la misma sensibilidad mediterránea"
              src="/images/a3-trio.jpg"
              tone="stone"
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-full"
            />
          </div>
          <div>
            <p className="mb-2 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
              05 — MAROI y las Nuevas Generaciones
            </p>
            <h2 className="mb-6 font-serif text-3xl text-navy sm:text-4xl">
              Puedes empezar a vestir mejor sin dejar de ser tú
            </h2>
            <div className="space-y-4 font-sans text-[15px] leading-relaxed text-navy/80">
              <p>
                MAROI no debe hablar exclusivamente al hombre que ya sabe vestir. Debe
                hablar también al joven que está descubriendo su propia elegancia.
              </p>
              <p>
                Una camisa de lino con unas zapatillas. Un blazer con denim. Una
                safari con camiseta. Un pantalón de sastrería con un polo. Un cargo
                con mocasines.
              </p>
              <p className="font-serif italic text-navy">
                MAROI no impone una forma de vestir. Enseña a combinarla.
              </p>
              <p>
                El padre reconoce la elegancia. El hijo descubre una nueva forma de
                llevarla. La elegancia se hereda, pero también se reinventa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StorySection index="06 — El Mediterráneo" title="El Mediterráneo es el universo" align="center">
        <p>
          La luz de Marbella. La arquitectura de Ibiza. El azul de Capri. La
          sofisticación de Saint-Tropez. La calma de Mallorca. La energía de Porto
          Cervo. Y Madrid como contrapunto urbano.
        </p>
        <p className="font-serif text-lg italic text-navy">
          No queremos hacer &ldquo;moda mediterránea&rdquo;. Queremos crear una forma
          mediterránea de entender la elegancia.
        </p>
      </StorySection>

      <div className="grid grid-cols-2 gap-3 px-5 sm:mx-auto sm:max-w-5xl sm:grid-cols-4 sm:px-8">
        {PLACES.map((place) => (
          <div key={place.name} className="group relative aspect-square overflow-hidden">
            <MediaPlaceholder
              label={place.name}
              src={place.image}
              tone={place.tone}
              dark
              overlay
              sizes="(max-width: 640px) 50vw, 25vw"
              className="h-full transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute bottom-4 left-4 font-sans text-[11px] uppercase tracking-widest-lg text-ivory">
              {place.name}
            </span>
          </div>
        ))}
      </div>

      <StorySection index="07 — El Glamour" title="El glamour está en la vida que sucede alrededor de la prenda">
        <p>
          El glamour de MAROI no está en el exceso. Está en la escena: una terraza al
          atardecer, una mesa bien puesta, una camisa blanca, una chaqueta de lino,
          una copa, música, amigos, una conversación que se prolonga, una casa llena
          de gente, un coche que espera abajo, un viaje que comienza.
        </p>
        <p>
          Por eso MAROI puede tener una enorme riqueza visual. No fotografiaríamos
          únicamente ropa. Fotografiaríamos momentos.
        </p>
        <p className="font-serif text-lg italic text-navy">
          Queremos que cuando alguien vea MAROI no piense &ldquo;me gusta esa
          chaqueta&rdquo;, sino &ldquo;quiero vivir así&rdquo;.
        </p>
      </StorySection>

      <section className="border-t border-navy/10 bg-navy py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
            08 — MAROI Society
          </p>
          <h2 className="mb-6 font-serif text-3xl sm:text-4xl">
            Una marca de lifestyle no se construye solo con productos
          </h2>
          <p className="mb-8 font-sans text-sm leading-relaxed text-ivory/75">
            Se construye con historias, lugares y personas. Cenas, viajes, música,
            arte, gastronomía, arquitectura, hospitality, eventos privados — no como
            acciones de marketing, sino como parte natural del universo MAROI.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-[11px] uppercase tracking-widest-lg text-ivory/60">
            {["Cenas", "Viajes", "Música", "Arte", "Gastronomía", "Arquitectura", "Hospitality"].map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
            09 — La Identidad
          </p>
          <h2 className="mb-6 font-serif text-3xl text-navy sm:text-4xl">
            Sobria, elegante, extremadamente limpia
          </h2>
          <p className="mx-auto mb-4 max-w-2xl font-sans text-sm leading-relaxed text-navy/75">
            Nada de logos grandes. Nada de exceso de branding. Nada de elementos
            innecesarios. La marca aparece casi como una firma.
          </p>
          <p className="font-serif text-2xl tracking-[0.15em] text-navy">MAROI</p>
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-navy/60">
            Mediterranean Lifestyle
          </p>
          <p className="mt-4 font-serif text-sm italic tracking-widest text-navy/70">
            The Art of Living
          </p>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="mb-2 text-center font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
            10 — La Paleta MAROI
          </p>
          <h2 className="mb-10 text-center font-serif text-3xl text-navy sm:text-4xl">
            La arena. La piedra. El mar. La vegetación. La tierra.
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PALETTE.map((c) => (
              <div key={c.name}>
                <div
                  className="aspect-square border border-navy/10"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-2 text-center font-sans text-[10px] uppercase tracking-widest-lg text-navy/70">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-sand/25 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
            11 — MAROI
          </p>
          <h2 className="mb-10 font-serif text-3xl text-navy sm:text-4xl">
            Cinco nombres. Cinco personas.
            <br />
            Una misma historia.
          </h2>
          <div className="mx-auto mb-10 flex flex-wrap justify-center gap-x-10 gap-y-4 font-serif text-xl tracking-[0.08em] text-navy sm:text-2xl">
            {FOUNDERS.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <div className="mx-auto mb-8 h-px w-10 bg-navy/30" />
          <p className="mx-auto max-w-xl font-sans text-sm leading-relaxed text-navy/75">
            MAROI nace de una historia familiar. No hace falta contarla entera ni
            repetirla constantemente: puede permanecer como el secreto que hay
            detrás de la marca. Eso es exactamente lo que le da alma.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-navy py-20 text-ivory sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="mb-6 font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
            El Manifiesto
          </p>
          <h2 className="mb-8 font-serif text-2xl leading-relaxed sm:text-3xl">
            MAROI no es una moda.
            <br />
            Es una manera de vivir.
          </h2>
          <div className="space-y-2 font-sans text-sm uppercase tracking-widest-lg text-ivory/70">
            <p>Es elegancia sin esfuerzo.</p>
            <p>Es el Mediterráneo visto con ojos contemporáneos.</p>
            <p>Es vestir bien sin pensar demasiado en vestir bien.</p>
            <p>Es saber que una prenda puede durar más que una temporada.</p>
          </div>
          <p className="mt-8 font-serif text-lg italic text-ivory">
            Es aprender que el lujo no siempre se ve. A veces se siente.
          </p>
          <p className="mt-10 font-serif text-2xl tracking-[0.15em]">MAROI</p>
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-ivory/60">
            The Art of Living.
          </p>
        </div>
      </section>
    </>
  );
}

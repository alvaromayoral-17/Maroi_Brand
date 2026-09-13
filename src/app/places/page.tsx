import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder, type MediaTone } from "@/components/media-placeholder";

export const metadata: Metadata = {
  title: "MAROI Places",
  description:
    "Marbella, Ibiza, Capri, Saint-Tropez, Mallorca, Porto Cervo y Madrid. Los lugares que explican una forma mediterránea de entender la elegancia.",
};

interface Place {
  name: string;
  trait: string;
  lat: string;
  lon: string;
  body: string;
  image?: string;
  tone: MediaTone;
  imageLabel: string;
}

const PLACES: Place[] = [
  {
    name: "Marbella",
    trait: "La luz",
    lat: "36.5101° N",
    lon: "4.8824° O",
    body: "Todo empieza aquí. Una luz baja y dorada que alarga las tardes y hace que el lino parezca otra cosa. Es el sitio donde la elegancia dejó de ser un traje para convertirse en una manera de estar.",
    image: "/images/marbella.jpg",
    tone: "terracotta",
    imageLabel: "Puerto de Marbella al atardecer",
  },
  {
    name: "Ibiza",
    trait: "La arquitectura",
    lat: "38.9067° N",
    lon: "1.4206° E",
    body: "Muros encalados, sombras limpias y calas de agua imposible. Ibiza enseña que la sofisticación también puede ser descalza, y que una casa blanca frente al mar no necesita nada más.",
    image: "/images/cala-turquesa.jpg",
    tone: "sky",
    imageLabel: "Cala de agua turquesa",
  },
  {
    name: "Capri",
    trait: "El azul",
    lat: "40.5532° N",
    lon: "14.2222° E",
    body: "El azul que le da nombre a medio armario. Terrazas colgadas sobre el agua, buganvilla y esa costumbre italiana de vestirse bien para no hacer absolutamente nada.",
    image: "/images/terraza-olivo.jpg",
    tone: "sky",
    imageLabel: "Terraza con olivo sobre el mar",
  },
  {
    name: "Saint-Tropez",
    trait: "La sofisticación",
    lat: "43.2677° N",
    lon: "6.6407° E",
    body: "Puerto, mercado y sobremesas que se estiran hasta que cambia la luz. Saint-Tropez tiene el punto justo de exceso, el que se lleva con una camisa blanca y ningún esfuerzo aparente.",
    image: "/images/saint-tropez.jpg",
    tone: "sand",
    imageLabel: "Campanario y tejados de Saint-Tropez sobre el puerto",
  },
  {
    name: "Mallorca",
    trait: "La calma",
    lat: "39.5696° N",
    lon: "2.6502° E",
    body: "La sierra cayendo al mar y caletas a las que solo se llega andando. Mallorca es el contrapeso: la isla donde el plan es que no haya plan y el reloj deja de importar.",
    image: "/images/cala-atardecer.jpg",
    tone: "olive",
    imageLabel: "Cala mallorquina al caer la tarde",
  },
  {
    name: "Porto Cervo",
    trait: "La energía",
    lat: "41.1353° N",
    lon: "9.5361° E",
    body: "Granito rosado, agua transparente y noches que empiezan tarde. La Costa Esmeralda aporta el nervio, el lado del Mediterráneo que no se va a dormir pronto.",
    image: "/images/porto-cervo.jpg",
    tone: "stone",
    imageLabel: "Ventana de granito abierta sobre una cala de la Costa Esmeralda",
  },
  {
    name: "Madrid",
    trait: "El contrapunto urbano",
    lat: "40.4168° N",
    lon: "3.7038° O",
    body: "Sin mar y aun así mediterránea. Madrid es la prueba de que esto no va de playa: va de terrazas, de cenas largas y de una forma de tratar el tiempo que se reconoce a mil kilómetros de la costa.",
    image: "/images/madrid.jpg",
    tone: "stone",
    imageLabel: "Calle de Madrid al atardecer",
  },
];

export default function PlacesPage() {
  return (
    <>
      <section className="relative flex h-[52vh] items-end overflow-hidden sm:h-[64vh]">
        <MediaPlaceholder
          label="Costa mediterránea al atardecer"
          src="/images/marbella.jpg"
          tone="terracotta"
          dark
          overlay
          priority
          sizes="100vw"
          position="center 55%"
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 text-ivory sm:px-8 sm:pb-16">
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-ivory/75">
            06 — El Mediterráneo
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">MAROI Places</h1>
          <p className="mt-4 max-w-md font-serif text-lg italic text-ivory/90">
            Inspiración en cada destino.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <p className="font-serif text-2xl leading-snug text-navy sm:text-3xl">
          El Mediterráneo es el universo.
        </p>
        <p className="mt-6 font-sans text-[15px] leading-relaxed text-navy/75">
          No queremos hacer moda mediterránea. Queremos crear una forma
          mediterránea de entender la elegancia, y estos son los sitios donde
          se aprende.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        {PLACES.map((place, i) => (
          <article
            key={place.name}
            className="grid grid-cols-1 items-center gap-8 border-t border-navy/10 py-12 sm:grid-cols-2 sm:gap-14 sm:py-16"
          >
            <div
              className={`aspect-[4/3] overflow-hidden ${
                i % 2 === 1 ? "sm:order-2" : ""
              }`}
            >
              <MediaPlaceholder
                label={place.imageLabel}
                src={place.image}
                tone={place.tone}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-full"
              />
            </div>

            <div className={i % 2 === 1 ? "sm:order-1" : ""}>
              <p className="font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
                {place.trait}
              </p>
              <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
                {place.name}
              </h2>
              <p className="mt-4 font-sans text-[11px] uppercase tracking-widest-lg text-navy/45">
                {place.lat} &nbsp;·&nbsp; {place.lon}
              </p>
              <div className="my-6 h-px w-10 bg-navy/30" />
              <p className="max-w-md font-sans text-[15px] leading-relaxed text-navy/75">
                {place.body}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-navy/10 bg-navy py-20 text-center text-ivory sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-ivory/60">
            Same horizon. Different journeys.
          </p>
          <p className="mt-6 font-serif text-2xl italic leading-snug sm:text-3xl">
            El glamour está en la vida que sucede alrededor de la prenda.
          </p>
          <Link
            href="/la-marca"
            className="mt-9 inline-block border-b border-ivory/50 pb-1 font-sans text-xs uppercase tracking-widest-lg text-ivory transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Descubrir la marca
          </Link>
        </div>
      </section>
    </>
  );
}

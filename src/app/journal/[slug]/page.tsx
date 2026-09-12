import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { JOURNAL_ARTICLES, JOURNAL_IMAGES } from "@/data/journal";

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Artículo no encontrado — MAROI" };
  return { title: `${article.title} — MAROI Journal`, description: article.excerpt };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function ArticlePage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const more = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const half = Math.ceil(article.body.length / 2);

  return (
    <>
      <section className="relative flex h-[45vh] items-end overflow-hidden sm:h-[60vh]">
        <MediaPlaceholder
          label={article.heroLabel}
          src={JOURNAL_IMAGES[article.slug]}
          tone={article.tone}
          dark
          overlay
          priority
          sizes="100vw"
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pb-10 sm:px-8 sm:pb-14">
          <p className="font-sans text-[11px] uppercase tracking-widest-lg text-ivory/80">
            {article.category}
          </p>
          <h1 className="mt-3 font-serif text-3xl text-ivory sm:text-5xl">
            {article.title}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="mb-10 font-sans text-[11px] uppercase tracking-widest-lg text-navy/45">
          {formatDate(article.date)} · {article.readingTime} de lectura
        </p>

        <p className="mb-10 font-serif text-xl leading-relaxed text-navy sm:text-2xl">
          {article.excerpt}
        </p>

        <div className="space-y-5 font-sans text-[15px] leading-[1.8] text-navy/80 sm:text-base">
          {article.body.slice(0, half).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <blockquote className="my-12 border-y border-navy/15 py-8 text-center font-serif text-2xl italic leading-snug text-navy sm:text-3xl">
          {article.pullQuote}
        </blockquote>

        <div className="space-y-5 font-sans text-[15px] leading-[1.8] text-navy/80 sm:text-base">
          {article.body.slice(half).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-14 border-t border-navy/10 pt-8 text-center">
          <p className="font-serif text-xl tracking-[0.15em] text-navy">MAROI</p>
          <p className="font-sans text-[10px] uppercase tracking-widest-lg text-navy/50">
            The Art of Living
          </p>
        </div>
      </article>

      <section className="border-t border-navy/10 bg-sand/25 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="mb-10 font-serif text-2xl text-navy">Seguir leyendo</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
            {more.map((a) => (
              <Link key={a.slug} href={`/journal/${a.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <MediaPlaceholder
                    label={a.heroLabel}
                    src={JOURNAL_IMAGES[a.slug]}
                    tone={a.tone}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="h-full"
                  />
                </div>
                <p className="mt-3 font-sans text-[10px] uppercase tracking-widest-lg text-terracotta">
                  {a.category}
                </p>
                <h3 className="mt-1 font-serif text-lg text-navy group-hover:text-terracotta">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { JOURNAL_ARTICLES, JOURNAL_IMAGES } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal — MAROI",
  description:
    "Historias que inspiran. Prendas, estilo, generaciones y lugares desde la mirada mediterránea de MAROI.",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function JournalPage() {
  const [lead, ...rest] = [...JOURNAL_ARTICLES].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <>
      <section className="border-b border-navy/10 px-5 pb-10 pt-14 text-center sm:px-8 sm:pb-12 sm:pt-20">
        <p className="font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
          The Art of Living
        </p>
        <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">Journal</h1>
        <p className="mx-auto mt-5 max-w-lg font-sans text-sm leading-relaxed text-navy/70">
          Historias que inspiran. Porque una marca de lifestyle no se construye
          solo con productos, sino con historias, lugares y personas.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <Link href={`/journal/${lead.slug}`} className="group grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="aspect-[4/3] overflow-hidden">
            <MediaPlaceholder
              label={lead.heroLabel}
              src={JOURNAL_IMAGES[lead.slug]}
              tone={lead.tone}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-sans text-[11px] uppercase tracking-widest-lg text-terracotta">
              {lead.category}
            </p>
            <h2 className="mt-4 font-serif text-3xl text-navy transition-colors group-hover:text-terracotta sm:text-4xl">
              {lead.title}
            </h2>
            <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-navy/70">
              {lead.excerpt}
            </p>
            <p className="mt-6 font-sans text-[11px] uppercase tracking-widest-lg text-navy/45">
              {formatDate(lead.date)} · {lead.readingTime}
            </p>
          </div>
        </Link>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 border-t border-navy/10 pt-16 sm:grid-cols-3">
          {rest.map((article) => (
            <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
              <div className="aspect-[4/5] overflow-hidden">
                <MediaPlaceholder
                  label={article.heroLabel}
                  src={JOURNAL_IMAGES[article.slug]}
                  tone={article.tone}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="h-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 font-sans text-[10px] uppercase tracking-widest-lg text-terracotta">
                {article.category}
              </p>
              <h3 className="mt-2 font-serif text-xl text-navy transition-colors group-hover:text-terracotta">
                {article.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-navy/65">
                {article.excerpt}
              </p>
              <p className="mt-4 font-sans text-[10px] uppercase tracking-widest-lg text-navy/40">
                {formatDate(article.date)} · {article.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

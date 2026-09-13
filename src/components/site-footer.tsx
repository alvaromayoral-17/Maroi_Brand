import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <p className="text-center font-serif text-lg italic text-navy sm:text-xl">
          Timeless values. A brighter tomorrow.
        </p>
        <div className="mx-auto my-6 h-px w-10 bg-navy/30" />

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl tracking-[0.1em] text-navy">MAROI</p>
            <p className="font-sans text-[10px] uppercase tracking-widest-lg text-navy/50">
              Mediterranean Lifestyle
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-[11px] uppercase tracking-widest-lg text-navy/70">
            <Link href="/la-marca">Contacto</Link>
            <Link href="/la-marca">FAQ</Link>
            <Link href="/la-marca">Envíos</Link>
            <Link href="/la-marca">Devoluciones</Link>
            <Link href="/la-marca">Términos</Link>
          </nav>

          <div className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-widest-lg text-navy/60">
            <a href="https://instagram.com" className="hover:text-terracotta">Instagram</a>
            <span className="text-navy/30">/</span>
            <a href="https://facebook.com" className="hover:text-terracotta">Facebook</a>
            <a href="https://maroi.es" className="ml-2 hover:text-terracotta">
              maroi.es
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

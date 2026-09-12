"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const NAV = [
  { href: "/hombre", label: "Hombre" },
  { href: "/a3", label: "A³" },
  { href: "/la-marca", label: "La Marca" },
  { href: "/journal", label: "Journal" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="shrink-0 leading-none">
          <span className="block font-serif text-2xl tracking-[0.18em] text-navy sm:text-[26px]">
            MAROI
          </span>
          <span className="mt-1.5 block font-sans text-[8px] uppercase tracking-[0.3em] text-navy/55 sm:text-[9px]">
            Mediterranean Lifestyle
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-[11px] uppercase tracking-widest-lg text-navy/80 transition-colors hover:text-terracotta"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 border-l border-navy/10 pl-8">
            <button aria-label="Buscar">
              <Search size={16} className="text-navy/80 transition-colors hover:text-terracotta" />
            </button>
            <span className="font-sans text-[11px] tracking-widest-lg text-navy/60">
              ES&nbsp;|&nbsp;EN
            </span>
            <button aria-label="Bolsa">
              <ShoppingBag size={16} className="text-navy/80 transition-colors hover:text-terracotta" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5 md:hidden">
          <button aria-label="Bolsa">
            <ShoppingBag size={16} className="text-navy/80" />
          </button>
          <button aria-label="Abrir menú" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy/10 bg-ivory px-5 py-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 font-sans text-xs uppercase tracking-widest-lg text-navy/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartProvider";
import Logo from "./Logo";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/wholesale", label: "Bulk & Wholesale" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink py-2 text-center text-xs font-medium tracking-wide text-white">
        Free delivery on orders over R750 <span className="mx-2 text-citrus">✦</span> 5L, 20L &amp; 25L bulk sizes available
      </div>
      <div className="border-b border-line bg-foam/85 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <Link href="/" aria-label="Novara home" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {nav.map((n) => {
              const active = pathname.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${active ? "bg-ink text-white" : "hover:bg-ink/5"}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={open} className="btn btn-outline relative !px-4 !py-2.5" aria-label={`Open cart, ${count} items`}>
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" />
                <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-citrus px-1 text-[11px] font-bold tabular-nums">{count}</span>
            </button>
            <button
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-ink/20 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="container-x flex flex-col pb-5 md:hidden" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="display border-b border-line py-4 text-2xl">
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

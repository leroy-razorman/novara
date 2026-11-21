"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useStore } from "./Store";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/our-work", label: "Our work" },
  { href: "/about", label: "About" },
  { href: "/help", label: "Help" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { count } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <div className="promo">
        Free delivery on orders over R500
        <span className="extra">
          <i aria-hidden="true">✦</i>Made in South Africa
        </span>
      </div>
      <div className="wrap bar">
        <Link className="brand" href="/" aria-label="Novara home" onClick={() => setOpen(false)}>
          <img className="mark" src="/mark-light.png" alt="" />
          <img className="word" src="/word-dark.png" alt="Novara" />
        </Link>
        <nav className={`main${open ? " open" : ""}`} id="mainnav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={pathname === n.href ? "cur" : undefined} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="menubtn" aria-expanded={open} aria-controls="mainnav" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <Link className="cartbtn" href="/basket" aria-label={`Basket, ${count} item${count === 1 ? "" : "s"}`} onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9h18l-1.600 9.200a2 2 0 0 1-2 1.800H6.600a2 2 0 0 1-2-1.800z" />
            <path d="M8 9l3-6M16 9l-3-6M9 13v3M12 13v3M15 13v3" />
          </svg>
          <b data-n={count}>{count}</b>
        </Link>
      </div>
    </header>
  );
}

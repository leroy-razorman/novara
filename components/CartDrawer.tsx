"use client";

import Link from "next/link";
import { useEffect } from "react";
import Bottle from "./Bottle";
import { useCart } from "./CartProvider";
import DeliveryProgress from "./DeliveryProgress";
import QtyStepper from "./QtyStepper";
import { formatPrice, getCategory } from "@/lib/products";

export default function CartDrawer() {
  const { isOpen, close, lines, subtotal, count, setQty } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen} inert={!isOpen}>
      <div
        className={`absolute inset-0 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={close}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="display text-xl">
            Your cart <span className="text-ink-soft">({count})</span>
          </h2>
          <button onClick={close} aria-label="Close cart" className="grid h-9 w-9 cursor-pointer place-items-center rounded-full hover:bg-foam">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="display text-2xl">Nothing in here yet</p>
            <p className="text-sm text-ink-soft">Fill it with something that makes the house smell good.</p>
            <Link href="/shop" onClick={close} className="btn btn-primary mt-2">
              Shop the range
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              <DeliveryProgress subtotal={subtotal} />
              <ul className="divide-y divide-line">
                {lines.map((l) => (
                  <li key={`${l.slug}-${l.size}`} className="flex gap-4 py-4">
                    <Link
                      href={`/shop/${l.slug}`}
                      onClick={close}
                      className="grid h-24 w-20 shrink-0 place-items-center rounded-xl"
                      style={{ background: getCategory(l.product.category).tint }}
                    >
                      <Bottle shape={l.product.shape} color={l.product.color} label={l.product.label} className="h-20" />
                    </Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex justify-between gap-3">
                        <p className="text-sm leading-snug font-semibold">{l.product.name}</p>
                        <p className="text-sm font-semibold tabular-nums">{formatPrice(l.lineTotal)}</p>
                      </div>
                      <p className="text-xs text-ink-soft">{l.size}</p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <QtyStepper small min={0} value={l.qty} onChange={(n) => setQty(l.slug, l.size, n)} />
                        <button onClick={() => setQty(l.slug, l.size, 0)} className="cursor-pointer text-xs text-ink-soft underline underline-offset-2 hover:text-ink">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <footer className="space-y-3 border-t border-line px-6 py-5">
              <div className="flex justify-between text-base font-semibold">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-ink-soft">Delivery calculated at checkout. Prices include VAT.</p>
              <Link href="/checkout" onClick={close} className="btn btn-primary w-full">
                Checkout
              </Link>
              <Link href="/cart" onClick={close} className="btn btn-outline w-full">
                View cart
              </Link>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import QtyStepper from "./QtyStepper";
import { formatPrice, type Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const perLitre = (() => {
    const m = size.label.match(/^([\d.]+)(ml|L)/);
    if (!m) return null;
    const litres = m[2] === "ml" ? Number(m[1]) / 1000 : Number(m[1]);
    return size.price / litres;
  })();

  return (
    <div>
      <div className="flex items-baseline gap-3">
        <p className="display text-4xl tabular-nums">{formatPrice(size.price)}</p>
        {perLitre && <p className="text-sm text-ink-soft">{formatPrice(perLitre)} per litre</p>}
      </div>

      <fieldset className="mt-7">
        <legend className="label">Size</legend>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => {
            const active = s.label === size.label;
            return (
              <button
                key={s.label}
                type="button"
                aria-pressed={active}
                onClick={() => setSize(s)}
                className={`cursor-pointer rounded-2xl border px-5 py-3 text-left transition ${active ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"}`}
              >
                <span className="block text-sm font-semibold">{s.label}</span>
                <span className={`block text-xs tabular-nums ${active ? "text-white/70" : "text-ink-soft"}`}>{formatPrice(s.price)}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <QtyStepper value={qty} onChange={setQty} />
        <button type="button" className="btn btn-primary flex-1 !py-3.5 text-base" onClick={() => add(product.slug, size.label, qty)}>
          Add to cart · {formatPrice(size.price * qty)}
        </button>
      </div>
    </div>
  );
}

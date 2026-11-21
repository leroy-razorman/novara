"use client";

import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";

export default function OrderSummary({ children }: { children?: React.ReactNode }) {
  const { subtotal, delivery, total, lines } = useCart();
  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8">
      <h2 className="display text-2xl">Order summary</h2>
      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-soft">Subtotal</dt>
          <dd className="font-medium tabular-nums">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-soft">Delivery</dt>
          <dd className="font-medium tabular-nums">{lines.length === 0 ? "—" : delivery === 0 ? "Free" : formatPrice(delivery)}</dd>
        </div>
        <div className="flex justify-between border-t border-line pt-4 text-lg font-semibold">
          <dt>Total</dt>
          <dd className="tabular-nums">{formatPrice(total)}</dd>
        </div>
      </dl>
      <p className="mt-2 text-xs text-ink-soft">Prices include VAT.</p>
      {children}
    </div>
  );
}

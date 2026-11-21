"use client";

import Link from "next/link";
import Bottle from "@/components/Bottle";
import { useCart } from "@/components/CartProvider";
import DeliveryProgress from "@/components/DeliveryProgress";
import OrderSummary from "@/components/OrderSummary";
import QtyStepper from "@/components/QtyStepper";
import { formatPrice, getCategory } from "@/lib/products";

export default function CartPage() {
  const { lines, subtotal, setQty } = useCart();

  return (
    <div className="container-x pt-12">
      <h1 className="display text-5xl sm:text-6xl">Your cart</h1>

      {lines.length === 0 ? (
        <div className="mt-10 rounded-3xl bg-white px-6 py-20 text-center">
          <p className="display text-2xl">Your cart is empty</p>
          <p className="mt-2 text-ink-soft">Have a look around — the bestsellers are a good place to start.</p>
          <Link href="/shop" className="btn btn-primary mt-6">
            Shop the range
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <DeliveryProgress subtotal={subtotal} />
            <ul className="mt-4 divide-y divide-line rounded-3xl bg-white px-5 sm:px-7">
              {lines.map((l) => (
                <li key={`${l.slug}-${l.size}`} className="flex gap-4 py-6 sm:gap-6">
                  <Link
                    href={`/shop/${l.slug}`}
                    className="grid h-28 w-24 shrink-0 place-items-center rounded-2xl sm:h-32 sm:w-28"
                    style={{ background: getCategory(l.product.category).tint }}
                  >
                    <Bottle shape={l.product.shape} color={l.product.color} label={l.product.label} className="h-24 sm:h-28" />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link href={`/shop/${l.slug}`} className="font-semibold hover:underline">
                          {l.product.name}
                        </Link>
                        <p className="text-sm text-ink-soft">
                          {l.size} · {formatPrice(l.unitPrice)} each
                        </p>
                      </div>
                      <p className="font-semibold tabular-nums">{formatPrice(l.lineTotal)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <QtyStepper small min={0} value={l.qty} onChange={(n) => setQty(l.slug, l.size, n)} />
                      <button onClick={() => setQty(l.slug, l.size, 0)} className="cursor-pointer text-sm text-ink-soft underline underline-offset-2 hover:text-ink">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/shop" className="mt-6 inline-block text-sm font-semibold underline underline-offset-4">
              ← Continue shopping
            </Link>
          </div>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <OrderSummary>
              <Link href="/checkout" className="btn btn-primary mt-6 w-full !py-3.5 text-base">
                Proceed to checkout
              </Link>
            </OrderSummary>
          </div>
        </div>
      )}
    </div>
  );
}

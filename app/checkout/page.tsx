"use client";

import Link from "next/link";
import { useState } from "react";
import Bottle from "@/components/Bottle";
import { useCart } from "@/components/CartProvider";
import OrderSummary from "@/components/OrderSummary";
import { formatPrice, getCategory } from "@/lib/products";

const provinces = ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Free State", "Limpopo", "Mpumalanga", "North West", "Northern Cape"];
const payments = [
  { id: "card", name: "Credit or debit card", note: "Visa, Mastercard" },
  { id: "eft", name: "Instant EFT", note: "Pay from your banking app" },
  { id: "invoice", name: "Pay on invoice", note: "Approved trade accounts only" },
];

const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <section className="rounded-3xl bg-white p-6 sm:p-8">
    <h2 className="display flex items-center gap-3 text-2xl">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm text-white">{n}</span>
      {title}
    </h2>
    <div className="mt-6 grid gap-4 sm:grid-cols-2">{children}</div>
  </section>
);

const Input = ({ label, id, full, ...rest }: { label: string; id: string; full?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className={full ? "sm:col-span-2" : ""}>
    <label htmlFor={id} className="label">
      {label}
    </label>
    <input id={id} name={id} className="field" {...rest} />
  </div>
);

export default function CheckoutPage() {
  const { lines } = useCart();
  const [payment, setPayment] = useState("card");
  const [notice, setNotice] = useState(false);

  return (
    <div className="container-x pt-12">
      <Link href="/cart" className="text-sm font-semibold underline underline-offset-4">
        ← Back to cart
      </Link>
      <h1 className="display mt-4 text-5xl sm:text-6xl">Checkout</h1>

      <form
        className="mt-10 grid gap-8 lg:grid-cols-[1fr_400px]"
        onSubmit={(e) => {
          e.preventDefault();
          setNotice(true);
        }}
      >
        <div className="space-y-5">
          <Step n={1} title="Contact">
            <Input label="First name" id="firstName" autoComplete="given-name" />
            <Input label="Last name" id="lastName" autoComplete="family-name" />
            <Input label="Email" id="email" type="email" autoComplete="email" />
            <Input label="Mobile number" id="phone" type="tel" autoComplete="tel" />
          </Step>

          <Step n={2} title="Delivery">
            <Input label="Street address" id="address" full autoComplete="street-address" />
            <Input label="Suburb" id="suburb" />
            <Input label="City" id="city" autoComplete="address-level2" />
            <div>
              <label htmlFor="province" className="label">
                Province
              </label>
              <select id="province" name="province" className="field">
                {provinces.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <Input label="Postal code" id="postal" inputMode="numeric" autoComplete="postal-code" />
          </Step>

          <Step n={3} title="Payment">
            <div className="grid gap-3 sm:col-span-2">
              {payments.map((p) => (
                <label
                  key={p.id}
                  className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${payment === p.id ? "border-ink bg-foam" : "border-line hover:border-ink/40"}`}
                >
                  <input type="radio" name="payment" value={p.id} checked={payment === p.id} onChange={() => setPayment(p.id)} className="h-4 w-4 accent-ink" />
                  <span>
                    <span className="block text-sm font-semibold">{p.name}</span>
                    <span className="block text-xs text-ink-soft">{p.note}</span>
                  </span>
                </label>
              ))}
            </div>
          </Step>
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <OrderSummary>
            {lines.length > 0 && (
              <ul className="mt-6 space-y-3 border-t border-line pt-5">
                {lines.map((l) => (
                  <li key={`${l.slug}-${l.size}`} className="flex items-center gap-3 text-sm">
                    <span className="relative grid h-14 w-12 shrink-0 place-items-center rounded-lg" style={{ background: getCategory(l.product.category).tint }}>
                      <Bottle shape={l.product.shape} color={l.product.color} label={l.product.label} className="h-12" />
                      <span className="absolute -top-1.5 -right-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[10px] font-bold text-white">{l.qty}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{l.product.name}</span>
                      <span className="block text-xs text-ink-soft">{l.size}</span>
                    </span>
                    <span className="font-medium tabular-nums">{formatPrice(l.lineTotal)}</span>
                  </li>
                ))}
              </ul>
            )}
            <button className="btn btn-primary mt-6 w-full !py-3.5 text-base" disabled={lines.length === 0}>
              Place order
            </button>
            {notice && (
              <p role="status" className="mt-4 rounded-2xl bg-citrus/40 p-4 text-sm">
                <strong>Preview only.</strong> Online payments aren&apos;t switched on yet — no order was placed and nothing was charged.
              </p>
            )}
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-soft">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Secure checkout
            </p>
          </OrderSummary>
        </div>
      </form>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Bottle from "@/components/Bottle";
import { getProduct } from "@/lib/products";

export const metadata: Metadata = { title: "Our Story" };

const values = [
  { title: "Do the job properly", body: "If a product doesn't beat what's already under your sink, we don't bottle it." },
  { title: "Charge a fair price", body: "No inflated shelf prices and fake specials. Bigger sizes always cost less per litre." },
  { title: "Say what's inside", body: "Clear usage instructions, honest dosing, and safety data sheets for every product." },
  { title: "Waste less", body: "Concentrates and refill sizes mean fewer bottles, fewer deliveries and less plastic." },
];

const steps = [
  { k: "Formulate", v: "Each product starts with a real cleaning problem and a formula built to solve it at the lowest sensible dose." },
  { k: "Test", v: "We trial every batch on the mess it's meant for — in homes, kitchens and workshops — before it gets a label." },
  { k: "Bottle", v: "Filled into sturdy, recyclable containers from 500ml to 25L, sealed and batch-coded for traceability." },
  { k: "Deliver", v: "Shipped straight to your door or your storeroom, with scheduled deliveries for trade customers." },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x grid items-center gap-10 pt-12 lg:grid-cols-[1.2fr_1fr] lg:pt-20">
        <div>
          <p className="eyebrow">Our story</p>
          <h1 className="display mt-4 text-5xl leading-[1] sm:text-7xl">We make cleaning products that simply work.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Novara started with a simple frustration: too many cleaning products are mostly water, perfume and promises. So we set out to make a tight range
            of detergents that clean properly, last longer and cost less per wash.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#d3f1e5]">
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-aqua/40" />
          <div className="absolute inset-0 flex items-end justify-center pb-6">
            <Bottle {...getProduct("pine-gel")!} className="h-[60%] translate-x-8 -rotate-6" />
            <Bottle {...getProduct("hand-wash")!} className="relative z-10 h-[72%]" />
            <Bottle {...getProduct("window-glass-cleaner")!} className="h-[64%] -translate-x-8 rotate-6" />
          </div>
        </div>
      </section>

      <section className="container-x pt-24">
        <h2 className="display text-4xl sm:text-5xl">What we stand for</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} className="rounded-3xl bg-white p-7">
              <span className="display text-sm text-aqua-deep">0{i + 1}</span>
              <h3 className="display mt-6 text-2xl leading-tight">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-ink py-20 text-white">
        <div className="container-x">
          <p className="eyebrow !text-citrus">How it&apos;s made</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">From formula to front door.</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.k} className="border-t border-white/20 pt-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-aqua font-display font-bold">{i + 1}</span>
                <h3 className="display mt-5 text-2xl">{s.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x pt-24 text-center">
        <h2 className="display mx-auto max-w-2xl text-4xl sm:text-5xl">Ready to see what a proper clean feels like?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="btn btn-primary !px-7 !py-4 text-base">
            Shop the range
          </Link>
          <Link href="/contact" className="btn btn-outline !px-7 !py-4 text-base">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}

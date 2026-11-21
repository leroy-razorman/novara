import type { Metadata } from "next";
import Link from "next/link";
import { OrderRef } from "@/components/OrderRef";

export const metadata: Metadata = { title: "Order confirmed" };

export default function Page() {
  return (
    <section className="page on">
      <div className="wrap thanks">
        <div className="sun" aria-hidden="true"></div>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Thank you. Your order is confirmed.</h1>
        <OrderRef />
        <p>Your order supports the supply of the same products to Novara partner households.</p>
        <div className="acts">
          <Link className="btn ink" href="/our-work">See what it supports</Link>
          <Link className="btn outline" href="/">Back to the site</Link>
        </div>
      </div>
    </section>
  );
}

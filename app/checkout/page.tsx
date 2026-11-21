import type { Metadata } from "next";
import Checkout from "@/components/Checkout";

export const metadata: Metadata = { title: "Checkout" };

export default function Page() {
  return (
    <section className="page on">
      <div className="phead">
        <div className="wrap">
          <h1>Checkout</h1>
        </div>
      </div>
      <Checkout />
    </section>
  );
}

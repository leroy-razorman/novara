// Markup and copy ported verbatim from the Novara design.
import type { Metadata } from "next";
import Link from "next/link";
import { ShopGrid } from "@/components/Products";

export const metadata: Metadata = { title: "Shop" };

export default function Page() {
  return (
    <section className="page on">
  <div className="phead"><div className="wrap"><div className="kicker">Shop</div><h1>Essentials for a healthy home</h1><p className="lede">Made in South Africa. Prices include VAT. Free delivery on orders over R500.</p></div></div>
  <div className="wrap"><figure className="ph banner rv" style={{ aspectRatio: "21/6", minHeight: "180px" } as React.CSSProperties}><img src="/img/water.jpg" alt="Sunlight on clear rippling water" /><figcaption>Clean water, clean home, good health</figcaption></figure></div>
  <div className="wrap" style={{ paddingTop: "36px" } as React.CSSProperties}>
    <ShopGrid />
    <div className="shopnote">
      <div><strong>Delivery</strong>2 to 4 working days nationwide. Free over R500, otherwise R65.</div>
      <div><strong>Returns</strong>Unopened products can be returned within 30 days for a full refund.</div>
      <div><strong>Safety</strong>Full ingredient lists on every bottle. Safety data on request.</div>
    </div>
  </div>
  <div className="sec"><div className="wrap split">
    <div className="strokes rv"><figure className="ph a54"><img src="/img/counter.jpg" alt="A mother and toddler sharing breakfast at a kitchen counter" /></figure></div>
    <div className="rv" style={{ "--d": ".1s" } as React.CSSProperties}><div className="kicker">Your order</div><h2>What a purchase does</h2><p>Each order supports the supply of the same products to Novara partner households, clinics and schools.</p><div className="acts"><Link className="btn outline" href="/our-work">See the programmes</Link></div></div>
  </div></div>
    </section>
  );
}

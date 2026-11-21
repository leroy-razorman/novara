// Markup and copy ported verbatim from the Novara design.
import type { Metadata } from "next";
import Link from "next/link";
import { ChatButton } from "@/components/Bits";

export const metadata: Metadata = { title: "Delivery and help" };

export default function Page() {
  return (
    <section className="page on">
  <div className="phead"><div className="wrap"><div className="kicker">Help</div><h1>Delivery and help</h1><p className="lede">Everything about ordering from Novara. For anything else, ask the assistant or write to us.</p></div></div>
  <div className="wrap split" style={{ paddingTop: "48px", paddingBottom: "clamp(64px,9vw,120px)", alignItems: "start" } as React.CSSProperties}>
    <div>
      <details open><summary>Delivery times and cost</summary><p>Orders are dispatched within one working day. Standard courier takes 2 to 4 working days anywhere in South Africa and costs R65, or nothing on orders over R500. Express courier reaches major centres the next working day for R120.</p></details>
      <details><summary>Returns and refunds</summary><p>Unopened products can be returned within 30 days of delivery for a full refund. Write to us and we will arrange collection.</p></details>
      <details><summary>Damaged or missing items</summary><p>Send a photo of the parcel and its contents within 48 hours and we will replace it at no cost.</p></details>
      <details><summary>Payment</summary><p>Card and Instant EFT at launch, on a secure page hosted by a certified payment provider. Novara does not see or store card details.</p></details>
      <details><summary>Product safety and ingredients</summary><p>Full ingredient lists are printed on every bottle. Safety data sheets are available on request. Keep all products out of reach of children, and never mix bleach with other cleaning products.</p></details>
      <details><summary>Orders for clinics, schools and organisations</summary><p>We supply partner organisations directly. Use the contact page and choose the partnership option.</p></details>
      <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" } as React.CSSProperties}><ChatButton className="btn ink">Ask the assistant</ChatButton><Link className="btn outline" href="/contact">Contact us</Link></div>
    </div>
    <figure className="ph a45 rv"><img src="/img/glass.jpg" alt="Clear water being poured from a jug into a glass" /><figcaption>Health starts with clean water</figcaption></figure>
  </div>
    </section>
  );
}

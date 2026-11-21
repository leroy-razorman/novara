import type { Metadata } from "next";
import Bottle from "@/components/Bottle";
import EnquiryForm from "@/components/EnquiryForm";
import { getProduct } from "@/lib/products";

export const metadata: Metadata = { title: "Bulk & Wholesale" };

const tiers = [
  { size: "5L", name: "Refill", who: "Small offices, salons, guesthouses", perks: ["Mix and match products", "Order online any time", "Free delivery over R750"] },
  { size: "25L", name: "Drum", who: "Restaurants, schools, laundromats", perks: ["Trade pricing per drum", "Scheduled monthly deliveries", "30-day account on approval"], featured: true },
  { size: "Pallet", name: "Contract", who: "Cleaning contractors, resellers, factories", perks: ["Volume-based pricing", "Dedicated account manager", "Custom dilution guides"] },
];

const sectors = ["Hospitality", "Cleaning contractors", "Schools & crèches", "Laundromats", "Offices", "Retail & resellers", "Workshops", "Healthcare"];

export default function WholesalePage() {
  return (
    <>
      <section className="container-x pt-12 lg:pt-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-white sm:px-14 sm:py-20">
          <div className="relative z-10 max-w-xl">
            <p className="eyebrow !text-citrus">Bulk &amp; wholesale</p>
            <h1 className="display mt-4 text-5xl leading-[1] sm:text-7xl">Big jobs need big bottles.</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Trade pricing on 5L refills, 20L and 25L drums and full pallets — delivered on a schedule that suits your business.
            </p>
            <a href="#quote" className="btn btn-citrus mt-8 !px-7 !py-4 text-base">
              Request a quote
            </a>
          </div>
          <div className="pointer-events-none absolute right-4 -bottom-6 hidden h-[78%] items-end xl:flex" aria-hidden="true">
            <Bottle {...getProduct("dishwashing-liquid")!} cap="#f4f8f5" className="h-[70%] translate-x-10 -rotate-6" />
            <Bottle {...getProduct("auto-laundry-liquid")!} cap="#f4f8f5" className="relative z-10 h-full" />
            <Bottle {...getProduct("heavy-duty-degreaser")!} cap="#f4f8f5" className="h-[72%] -translate-x-10 rotate-6" />
          </div>
        </div>
      </section>

      <section className="container-x pt-20">
        <h2 className="display text-4xl sm:text-5xl">Pick your scale</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`flex flex-col rounded-3xl p-8 ${t.featured ? "bg-aqua" : "bg-white"}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="display text-2xl">{t.name}</h3>
                {t.featured && <span className="rounded-full bg-ink px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">Most popular</span>}
              </div>
              <p className="display mt-6 text-6xl">{t.size}</p>
              <p className={`mt-2 text-sm ${t.featured ? "text-ink/80" : "text-ink-soft"}`}>{t.who}</p>
              <ul className="mt-6 space-y-3 border-t border-ink/15 pt-6 text-sm font-medium">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true">✦</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pt-20">
        <p className="eyebrow">Who we supply</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {sectors.map((s) => (
            <span key={s} className="display rounded-full border border-ink/15 bg-white px-5 py-2.5 text-lg">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="quote" className="container-x grid scroll-mt-32 gap-10 pt-24 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Trade enquiries</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">Get a quote</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-ink-soft">
            Tell us what you use and roughly how much. We&apos;ll send through trade pricing and delivery options within one business day.
          </p>
        </div>
        <EnquiryForm
          submitLabel="Request trade quote"
          successTitle="Quote request received"
          fields={[
            { name: "business", label: "Business name", half: true, required: true },
            { name: "name", label: "Contact person", half: true, required: true },
            { name: "email", label: "Email", type: "email", half: true, required: true },
            { name: "phone", label: "Phone", type: "tel", half: true },
            { name: "sector", label: "Industry", half: true, options: sectors },
            { name: "volume", label: "Estimated monthly volume", half: true, options: ["Under 50L", "50–200L", "200–1000L", "Over 1000L"] },
            { name: "message", label: "What products do you need?", textarea: true },
          ]}
        />
      </section>
    </>
  );
}

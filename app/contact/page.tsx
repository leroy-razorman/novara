import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = { title: "Contact" };

const details = [
  { k: "Email", v: "hello@novara.example" },
  { k: "Phone", v: "000 000 0000" },
  { k: "Hours", v: "Mon – Fri, 08:00 – 17:00" },
  { k: "Address", v: "Street address, Suburb, City" },
];

const faqs = [
  { q: "How long does delivery take?", a: "Orders are dispatched within 1–2 business days and usually arrive within 2–5 business days depending on where you are." },
  { q: "Do you deliver bulk drums?", a: "Yes. 20L and 25L drums are delivered by courier or our own vehicles, depending on your area and order size." },
  { q: "Can I open a trade account?", a: "Businesses can apply for a 30-day account. Use the bulk & wholesale form and we'll send the application." },
  { q: "Where can I get safety data sheets?", a: "Send us a message with the product name and we'll email the SDS straight back." },
];

export default function ContactPage() {
  return (
    <div className="container-x pt-12 lg:pt-16">
      <p className="eyebrow">Contact</p>
      <h1 className="display mt-3 text-5xl sm:text-7xl">Let&apos;s talk clean.</h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="max-w-sm text-lg leading-relaxed text-ink-soft">Questions about an order, a product or a trade account? Send a message and a real person will reply.</p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {details.map((d) => (
              <div key={d.k} className="grid grid-cols-[6rem_1fr] py-4 text-sm">
                <dt className="font-semibold text-ink-soft">{d.k}</dt>
                <dd className="font-medium">{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <EnquiryForm
          submitLabel="Send message"
          successTitle="Message sent"
          fields={[
            { name: "name", label: "Name", half: true, required: true },
            { name: "email", label: "Email", type: "email", half: true, required: true },
            { name: "topic", label: "Topic", options: ["General question", "An existing order", "Product advice", "Trade account", "Something else"] },
            { name: "message", label: "Message", textarea: true, required: true },
          ]}
        />
      </div>

      <section className="pt-24">
        <h2 className="display text-4xl sm:text-5xl">Common questions</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-3xl bg-white p-7">
              <h3 className="display text-xl">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

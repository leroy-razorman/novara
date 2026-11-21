"use client";

// Checkout flow from the design. Nothing is charged or sent anywhere yet:
// "Place order" empties the basket and shows the confirmation page.
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useStore } from "./Store";
import { clearOnInput, validate } from "@/lib/forms";
import { EXPRESS_DELIVERY, FREE_DELIVERY_OVER, R, STANDARD_DELIVERY } from "@/lib/products";

const provinces = ["Western Cape", "Eastern Cape", "Northern Cape", "Free State", "KwaZulu-Natal", "Gauteng", "North West", "Limpopo", "Mpumalanga"];
const stepNames = ["1. Details", "2. Delivery", "3. Payment", "4. Review"];
type Details = { fn: string; ln: string; em: string; a1: string; sub: string; city: string; prov: string; pc: string };

export default function Checkout() {
  const router = useRouter();
  const { ready, items, subtotal: s, clear, setOrder } = useStore();
  const [step, setStep] = useState(0);
  const [ship, setShip] = useState<"std" | "exp">("std");
  const [pay, setPay] = useState("Card");
  const [details, setDetails] = useState<Details | null>(null);
  const detailsForm = useRef<HTMLFormElement>(null);
  const deliveryForm = useRef<HTMLFormElement>(null);
  const steps = useRef<HTMLDivElement>(null);
  const placed = useRef(false);

  // An empty basket has nothing to check out.
  useEffect(() => {
    if (ready && items.length === 0 && !placed.current) router.replace("/basket");
  }, [ready, items.length, router]);

  const d = s === 0 ? 0 : ship === "exp" ? EXPRESS_DELIVERY : s >= FREE_DELIVERY_OVER ? 0 : STANDARD_DELIVERY;
  const value = (id: string) => (document.getElementById(id) as HTMLInputElement).value.trim();

  const next = () => {
    const f = step === 0 ? detailsForm.current : step === 1 ? deliveryForm.current : null;
    if (f && !validate(f)) return;
    if (step === 2) setDetails({ fn: value("fn"), ln: value("ln"), em: value("em"), a1: value("a1"), sub: value("sub"), city: value("city"), prov: value("prov"), pc: value("pc") });
    setStep(step + 1);
    steps.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const back = () => setStep(step - 1);

  const place = () => {
    if (!details) return;
    const ref = "NV-" + new Date().getFullYear().toString().slice(2) + "-" + Math.floor(1000 + Math.random() * 9000);
    setOrder({
      ref,
      message: `${details.fn}, your order of ${R(s + d)} will be delivered to ${details.city} ${ship === "exp" ? "by the next working day" : "within 2 to 4 working days"}.`,
    });
    placed.current = true;
    clear();
    router.push("/confirmed");
  };

  const cls = (n: number) => `step${step === n ? " on" : ""}`;

  return (
    <div className="wrap checkout">
      <div>
        <div className="steps" ref={steps}>
          {stepNames.map((n, i) => (
            <span key={n} className={i < step ? "done" : i === step ? "cur" : undefined}>
              {n}
            </span>
          ))}
        </div>

        <div className={cls(0)}>
          <h2>Your details</h2>
          <form className="f" ref={detailsForm} noValidate onInput={clearOnInput} onSubmit={(e) => e.preventDefault()}>
            <label className="field"><span className="l">First name</span><input id="fn" required autoComplete="given-name" /><span className="msg">Enter your first name.</span></label>
            <label className="field"><span className="l">Last name</span><input id="ln" required autoComplete="family-name" /><span className="msg">Enter your last name.</span></label>
            <label className="field full"><span className="l">Email</span><input id="em" type="email" required autoComplete="email" placeholder="you@example.com" /><span className="msg">Enter a valid email address.</span></label>
            <label className="field full"><span className="l">Mobile number</span><input id="ph" type="tel" required autoComplete="tel" placeholder="082 000 0000" /><span className="msg">Enter a mobile number for the courier.</span></label>
          </form>
          <div className="acts2">
            <Link className="back" href="/basket">Back to basket</Link>
            <button className="btn ink" onClick={next}>Continue to delivery</button>
          </div>
        </div>

        <div className={cls(1)}>
          <h2>Delivery</h2>
          <form className="f" ref={deliveryForm} noValidate onInput={clearOnInput} onSubmit={(e) => e.preventDefault()}>
            <label className="field full"><span className="l">Street address</span><input id="a1" required autoComplete="address-line1" /><span className="msg">Enter your street address.</span></label>
            <label className="field"><span className="l">Suburb</span><input id="sub" required /><span className="msg">Enter your suburb.</span></label>
            <label className="field"><span className="l">City</span><input id="city" required autoComplete="address-level2" /><span className="msg">Enter your city.</span></label>
            <label className="field">
              <span className="l">Province</span>
              <select id="prov" required defaultValue="">
                <option value="">Select a province</option>
                {provinces.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <span className="msg">Select a province.</span>
            </label>
            <label className="field"><span className="l">Postal code</span><input id="pc" required inputMode="numeric" autoComplete="postal-code" /><span className="msg">Enter your postal code.</span></label>
          </form>
          <div style={{ marginTop: 22 }}>
            <label className="opt">
              <input type="radio" name="ship" value="std" checked={ship === "std"} onChange={() => setShip("std")} />
              <span><b>Standard courier</b><small>2 to 4 working days</small></span>
              <span className="pr">{s >= FREE_DELIVERY_OVER ? "Free" : "R65"}</span>
            </label>
            <label className="opt">
              <input type="radio" name="ship" value="exp" checked={ship === "exp"} onChange={() => setShip("exp")} />
              <span><b>Express courier</b><small>Next working day, major centres</small></span>
              <span className="pr">R120</span>
            </label>
          </div>
          <div className="acts2">
            <button className="back" onClick={back}>Back</button>
            <button className="btn ink" onClick={next}>Continue to payment</button>
          </div>
        </div>

        <div className={cls(2)}>
          <h2>Payment</h2>
          <label className="opt">
            <input type="radio" name="pay" value="Card" checked={pay === "Card"} onChange={() => setPay("Card")} />
            <span><b>Card</b><small>Visa, Mastercard, American Express</small></span>
          </label>
          <label className="opt">
            <input type="radio" name="pay" value="Instant EFT" checked={pay === "Instant EFT"} onChange={() => setPay("Instant EFT")} />
            <span><b>Instant EFT</b><small>Pay from your bank account</small></span>
          </label>
          <p className="pay-note">This is a preview of the Novara store. At launch, payment is completed on a secure page hosted by a certified payment provider. No card details are entered or stored here.</p>
          <div className="acts2">
            <button className="back" onClick={back}>Back</button>
            <button className="btn ink" onClick={next}>Review your order</button>
          </div>
        </div>

        <div className={cls(3)}>
          <h2>Review and place your order</h2>
          <div className="review">
            {details && (
              <>
                <div><span>Name</span><span>{details.fn} {details.ln}</span></div>
                <div><span>Email</span><span>{details.em}</span></div>
                <div><span>Deliver to</span><span>{details.a1}, {details.sub}, {details.city}, {details.prov} {details.pc}</span></div>
                <div><span>Delivery</span><span>{ship === "exp" ? "Express courier" : "Standard courier"}</span></div>
                <div><span>Payment</span><span>{pay}</span></div>
              </>
            )}
          </div>
          <div className="acts2">
            <button className="back" onClick={back}>Back</button>
            <button className="btn coral" onClick={place}>Place order</button>
          </div>
        </div>
      </div>

      <div className="sum">
        <h3>Order summary</h3>
        <div>
          {items.map((i) => (
            <div className="r" key={i.key}>
              <span>{i.name}, {i.size} × {i.q}</span>
              <span>{R(i.price * i.q)}</span>
            </div>
          ))}
          <div className="r"><span>Delivery</span><span>{d === 0 ? "Free" : R(d)}</span></div>
          <div className="r t"><span>Total</span><span>{R(s + d)}</span></div>
        </div>
      </div>
    </div>
  );
}

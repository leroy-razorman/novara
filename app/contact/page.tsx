// Markup and copy ported verbatim from the Novara design.
import type { Metadata } from "next";
import { ChatButton, ContactForm } from "@/components/Bits";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <section className="page on">
  <div className="phead"><div className="wrap"><div className="kicker">Contact</div><h1>Talk to Novara</h1><p className="lede">Orders, partnerships, press or anything else. We reply within two working days.</p></div></div>
  <div className="wrap"><div className="contact">
    <div className="cinfo">
      <h2>Other ways to reach us</h2>
      <div className="cways">
        <div className="cway"><i><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></i><div><b>Email</b><span>hello@novara.org</span></div></div>
        <div className="cway"><i><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg></i><div><b>Telephone</b><span>+27 21 000 0000, weekdays 8am to 5pm</span></div></div>
        <div className="cway"><i><svg viewBox="0 0 24 24"><path d="M12 21s7-6.200 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/></svg></i><div><b>Registered office</b><span>Cape Town, South Africa</span></div></div>
        <div className="cway"><i><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg></i><div><b>Quick answers</b><span><ChatButton style={{ textDecoration: "underline", color: "var(--mint)" } as React.CSSProperties}>Ask the Novara assistant</ChatButton></span></div></div>
      </div>
      <figure className="ph" style={{ marginTop: "auto" } as React.CSSProperties}><img src="/img/lift.jpg" alt="A mother lifting her laughing child" style={{ objectPosition: "center 30%" } as React.CSSProperties} /></figure>
    </div>
    <div className="cform">
      <h2>Send us a message</h2><p>All fields are required.</p>
      <ContactForm />
    </div>
  </div></div>
    </section>
  );
}

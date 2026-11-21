// Markup and copy ported verbatim from the Novara design.
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <section className="page on">
  <div className="phead"><div className="wrap"><div className="kicker">About Novara</div><h1>A health organisation that makes cleaning products</h1><p className="lede">Founded in South Africa in 2026 on the belief that the most ordinary household products are among the most important for public health.</p></div></div>
  <div className="wrap"><figure className="ph banner rv"><img src="/img/highfive.jpg" alt="A mother and daughter sharing a high five in the sun" /></figure></div>
  <div className="sec"><div className="wrap split">
    <div className="rv"><div className="kicker">Why we exist</div><h2>Access is the missing ingredient</h2><p>The products that keep a home healthy are not new. What is missing is reliable access to them, and an organisation that treats that access as a health outcome.</p><p>So Novara does both. We make a small range of cleaning essentials to a standard we are proud of, sell them to households that can afford them, and use that to supply households that cannot.</p></div>
    <div className="strokes rv" style={{ "--d": ".1s" } as React.CSSProperties}><figure className="ph a45"><img src="/img/hug.jpg" alt="A mother hugging her laughing daughter outdoors" /></figure></div>
  </div></div>
  <div className="sec tint"><div className="wrap">
    <div className="rv"><div className="kicker">Our principles</div><h2>What we hold to</h2></div>
    <div className="values">
      <div className="value rv"><i></i><h4>One standard</h4><p>Every formulation is the same wherever it goes. We would not supply a clinic with something we would not sell.</p></div>
      <div className="value rv" style={{ "--d": ".08s" } as React.CSSProperties}><i></i><h4>Made close to where it is used</h4><p>Local manufacture keeps prices honest, supply reliable and work in the communities we serve.</p></div>
      <div className="value rv" style={{ "--d": ".16s" } as React.CSSProperties}><i></i><h4>Plain about ingredients</h4><p>Full ingredient lists on every bottle, in plain language. Safety data for anyone who asks.</p></div>
      <div className="value rv" style={{ "--d": ".24s" } as React.CSSProperties}><i></i><h4>Measured in routines</h4><p>We report on what families keep doing, and we publish it, whether or not the numbers flatter us.</p></div>
    </div>
    <div className="markrow rv"><img src="/mark-light.png" alt="The Novara mark" /><div><h3>The mark</h3><p style={{ marginTop: "10px", color: "var(--muted)" } as React.CSSProperties}>A globe drawn in the strokes of a wiped surface, with a band of coral for the first light of the day and a droplet rising from it. A new day, every day, everywhere.</p></div></div>
  </div></div>
  <div className="sec"><div className="wrap split flip">
    <div className="rv"><div className="kicker">The road ahead</div><h2>Where we are going</h2><p>Our founding programmes are in the Western Cape, Eastern Cape and Gauteng. The model is built to travel.</p>
      <ul className="list"><li><span>2026</span><span>Founding programmes, South Africa</span></li><li><span>2027</span><span>First public impact report</span></li><li><span>Next</span><span>Southern Africa</span></li></ul>
      <div className="acts"><Link className="btn outline" href="/contact">Work with us</Link></div></div>
    <figure className="ph a54 rv" style={{ "--d": ".1s" } as React.CSSProperties}><img src="/img/living.jpg" alt="Parents kissing their laughing child at home" /></figure>
  </div></div>
    </section>
  );
}

// Markup and copy ported verbatim from the Novara design.
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our work" };

export default function Page() {
  return (
    <section className="page on">
  <div className="phead"><div className="wrap"><div className="kicker">Our work</div><h1>Programmes that keep homes healthy</h1><p className="lede">A reliable supply of cleaning essentials, paired with the knowledge to use them well. Designed with the communities they serve.</p></div></div>
  <div className="wrap"><figure className="ph banner rv"><img src="/img/kidspeace.jpg" alt="A group of children laughing and making peace signs" /></figure></div>
  <div className="sec"><div className="wrap">
    <div className="rv"><h2 style={{ maxWidth: "18em" } as React.CSSProperties}>For many households, the basics are the first thing cut when money runs short. Our programmes close that gap.</h2></div>
    <div className="progs">
      <div className="prog rv"><figure className="ph"><img src="/img/park.jpg" alt="A mother and her toddler laughing together in a park" /></figure><h3>Healthy start</h3><p>Cleaning essentials and a home hygiene guide for families with newborns, supplied through partner clinics for the first twelve months.</p><span className="tag">Western Cape and Eastern Cape</span></div>
      <div className="prog rv" style={{ "--d": ".1s" } as React.CSSProperties}><figure className="ph"><img src="/img/schoolkids.jpg" alt="Schoolchildren in uniform hugging and laughing outside" /></figure><h3>Clean classrooms</h3><p>Quarterly supply of surface and sanitation products to partner schools, with a simple daily routine that learners help run.</p><span className="tag">Gauteng</span></div>
      <div className="prog rv" style={{ "--d": ".2s" } as React.CSSProperties}><figure className="ph"><img src="/img/family3.jpg" alt="A family of three laughing together in a vegetable garden" /></figure><h3>Household supply</h3><p>A monthly household set for families identified by community health workers, for as long as it is needed.</p><span className="tag">Founding programme, Cape Town</span></div>
    </div>
  </div></div>
  <div className="sec tint"><div className="wrap split flip">
    <div className="rv"><div className="kicker">The model</div><h2>How a bottle becomes a programme</h2><p>Each sale supports the supply of the same products to partner households, clinics and schools. There is no separate charity brand and no lesser formulation for the people we serve.</p>
      <ul className="list"><li><span>Household purchase</span><span>Full-price range</span></li><li><span>Programme supply</span><span>Funded by sales</span></li><li><span>Reporting</span><span>Annual, public</span></li></ul>
      <div className="acts"><Link className="btn ink" href="/shop">Shop now</Link><Link className="btn outline" href="/contact">Partner with us</Link></div></div>
    <div className="strokes rv" style={{ "--d": ".1s" } as React.CSSProperties}><figure className="ph a54"><img src="/img/village.jpg" alt="Aerial view of a rural village among trees in Sub-Saharan Africa" /><figcaption>Local partners, local supply</figcaption></figure></div>
  </div></div>
  <div className="sec dark water"><div className="wrap quote">
    <figure className="ph a32 rv"><img src="/img/childwash.jpg" alt="A small child washing hands under a tap" /></figure>
    <blockquote className="rv" style={{ "--d": ".12s" } as React.CSSProperties}>We count what a family keeps doing, not what we handed over. A routine that lasts is the only result that matters.<cite>How Novara measures its programmes</cite></blockquote>
  </div></div>
    </section>
  );
}

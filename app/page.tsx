// Markup and copy ported verbatim from the Novara design.
import Link from "next/link";
import { Newsletter, ScrollButton } from "@/components/Bits";
import { ProductGrid } from "@/components/Products";

export default function Page() {
  return (
    <section className="page on">
  <div className="hero"><div className="wrap">
    <div>
      <h1>A new day, every day.</h1>
      <p className="lede">A clean home is a daily fresh start for your family&apos;s health. Novara makes the products that make it possible, and works to put them in the homes that need them most.</p>
      <div className="acts"><ScrollButton to="home-shop">Shop now</ScrollButton><Link className="btn outline" href="/our-work">See our work</Link></div>
      <div className="facts"><div><b>Made in South Africa</b>Local manufacture</div><div><b>One standard</b>Same formula for everyone</div><div><b>Sales fund supply</b>To clinics and schools</div></div>
    </div>
    <div className="strokes"><figure className="ph"><img src="/img/hero.jpg" alt="A mother holding a broom shares a high five with her two laughing toddlers in a bright kitchen" style={{ objectPosition: "58% center" } as React.CSSProperties} /></figure></div>
  </div></div>

  <div className="sec" id="home-shop"><div className="wrap">
    <div className="shead rv"><div><div className="kicker">Shop</div><h2>Essentials for a healthy home</h2><p>Six products for the whole house. Select one to see how it works. Free delivery on orders over R500.</p></div><Link className="btn outline" href="/shop">Visit the full shop</Link></div>
    <ProductGrid />
  </div></div>

  <div className="sec tint"><div className="wrap">
    <div className="rv"><div className="kicker">What we believe</div><h2 style={{ maxWidth: "17em" } as React.CSSProperties}>The small acts of a clean home are the foundation of public health.</h2></div>
    <div className="pillars">
      <div className="pillar rv"><figure className="ph"><img src="/img/tap.jpg" alt="Hands cupped under running water in golden light" /><figcaption>Clean water, clean hands</figcaption></figure><h3>Hygiene where it is missing</h3><p>We partner with clinics, schools and community organisations to supply cleaning essentials to households that cannot reliably afford them.</p></div>
      <div className="pillar rv" style={{ "--d": ".1s" } as React.CSSProperties}><figure className="ph"><img src="/img/foam.jpg" alt="Soapy hands being washed beside a sunlit window" /><figcaption>The same formula, everywhere</figcaption></figure><h3>Products without compromise</h3><p>The same formulations go to a partner clinic and to your kitchen. We do not make a lesser version for anyone.</p></div>
      <div className="pillar rv" style={{ "--d": ".2s" } as React.CSSProperties}><figure className="ph"><img src="/img/curtains.jpg" alt="A woman opening white curtains to the morning" /><figcaption>Every morning, a fresh start</figcaption></figure><h3>Health as a daily practice</h3><p>Our work is measured in routines kept, not units shipped. We design for the habit, and the habit protects the family.</p></div>
    </div>
  </div></div>

  <div className="sec"><div className="wrap">
    <div className="where rv">
      <img src="/img/savanna.jpg" alt="Sunrise through acacia trees over savanna grassland in Sub-Saharan Africa" />
      <div className="in">
        <div className="kicker" style={{ color: "var(--mint)" } as React.CSSProperties}>Where we work</div>
        <h2>Starting in Sub-Saharan Africa</h2>
        <p>Novara begins in South Africa, with programmes shaped alongside the communities they serve. As we grow, the model travels with us: local partners, local supply, one standard of care.</p>
        <div className="regions"><div><b>Western Cape</b>Founding programmes</div><div><b>Eastern Cape</b>Clinic partnerships</div><div><b>Gauteng</b>School hygiene</div><div><b>Southern Africa</b>Next</div></div>
        <Link className="btn white" href="/our-work">Our programmes</Link>
      </div>
    </div>
  </div></div>

  <div className="sec dark water"><div className="wrap quote">
    <figure className="ph a32 rv"><img src="/img/linen.jpg" alt="White linen drying on a line under a blue sky" /></figure>
    <blockquote className="rv" style={{ "--d": ".12s" } as React.CSSProperties}>Every morning the house is set right again. That is not housework. That is the first act of care a family performs for itself each day.<cite>The idea behind the Novara mark: a new day rising over the whole world</cite></blockquote>
  </div></div>

  <div className="sec"><div className="wrap split">
    <div className="strokes rv"><figure className="ph a54"><img src="/img/kitchen-hug.jpg" alt="A mother and daughter hugging in their kitchen" /><figcaption>Home, set right for the day</figcaption></figure></div>
    <div className="rv" style={{ "--d": ".1s" } as React.CSSProperties}><div className="kicker">How it works</div><h2>What a purchase does</h2><p>Novara is funded by the products it makes. Each order supports the supply of the same products to partner households, clinics and schools.</p><p>We report on it once a year, in public.</p><div className="acts"><ScrollButton to="home-shop">Shop now</ScrollButton><Link className="btn outline" href="/our-work">See the programmes</Link></div></div>
  </div></div>

  <div className="sec tint"><div className="wrap split flip">
    <div className="rv">
      <div className="kicker">Newsletter</div><h2>Stay up to date</h2>
      <p>A short letter, a few times a year: where the programmes are, what the products are doing, and what we have learned. No promotions.</p>
      <Newsletter />
    </div>
    <figure className="ph a54 rv" style={{ "--d": ".1s" } as React.CSSProperties}><img src="/img/friends.jpg" alt="Three friends smiling and waving in the sun" /></figure>
  </div></div>
    </section>
  );
}

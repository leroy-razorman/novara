import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <img src="/mark-white.png" alt="" style={{ height: 48, width: "auto", marginBottom: 16 }} />
            <p style={{ maxWidth: "26em" }}>Novara is a health organisation and maker of household cleaning products. A new day, every day.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/shop">All products</Link></li>
              <li><Link href="/help">Delivery</Link></li>
              <li><Link href="/help">Returns</Link></li>
              <li><Link href="/basket">Basket</Link></li>
            </ul>
          </div>
          <div>
            <h4>Organisation</h4>
            <ul>
              <li><Link href="/our-work">Our work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Partnerships</Link></li>
              <li><Link href="/contact">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/help">Help</Link></li>
              <li><Link href="/help">Product safety</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>hello@novara.org</li>
              <li>+27 21 000 0000</li>
              <li>Cape Town, South Africa</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Novara. Company registration pending.</span>
          <span>Photography via Pexels · Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

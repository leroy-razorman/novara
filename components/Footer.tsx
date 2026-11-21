import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Hard-working cleaning products for homes and businesses — honest formulas, generous sizes, fair prices.
          </p>
          <p className="mt-8 text-sm font-semibold">Get cleaning tips and specials</p>
          <NewsletterForm />
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-4 font-semibold text-citrus">Shop</p>
            <ul className="space-y-2.5 text-white/75">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link href={`/shop?category=${c.id}`} className="hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="hover:text-white">
                  All products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-citrus">Company</p>
            <ul className="space-y-2.5 text-white/75">
              <li><Link href="/about" className="hover:text-white">Our story</Link></li>
              <li><Link href="/wholesale" className="hover:text-white">Bulk &amp; wholesale</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-citrus">Help</p>
            <ul className="space-y-2.5 text-white/75">
              <li><Link href="/contact" className="hover:text-white">Delivery &amp; returns</Link></li>
              <li><Link href="/contact" className="hover:text-white">Safety data sheets</Link></li>
              <li><Link href="/contact" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Novara. All rights reserved.</p>
          <p>Privacy · Terms · PAIA</p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import Bottle from "@/components/Bottle";
import ProductCard from "@/components/ProductCard";
import { getCategory, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: product.name, description: product.tagline } : {};
}

const Detail = ({ title, children, open }: { title: string; children: React.ReactNode; open?: boolean }) => (
  <details open={open} className="group border-b border-line py-4">
    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">
      {title}
      <span className="text-xl leading-none transition group-open:rotate-45">+</span>
    </summary>
    <div className="pt-3 text-sm leading-relaxed text-ink-soft">{children}</div>
  </details>
);

export default async function ProductPage({ params }: PageProps<"/shop/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const cat = getCategory(product.category);
  const related = [
    ...products.filter((p) => p.category === product.category && p.slug !== product.slug),
    ...products.filter((p) => p.category !== product.category),
  ].slice(0, 4);

  return (
    <div className="container-x pt-8">
      <nav className="text-sm text-ink-soft" aria-label="Breadcrumb">
        <Link href="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?category=${cat.id}`} className="hover:text-ink">{cat.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[2rem] lg:sticky lg:top-32" style={{ background: cat.tint }}>
          <div className="absolute h-[62%] w-[62%] rounded-full bg-white/50" />
          <Bottle shape={product.shape} color={product.color} label={product.label} className="relative h-[82%] animate-rise drop-shadow-2xl" />
          {product.badge && (
            <span className="absolute top-6 left-6 rounded-full bg-citrus px-4 py-1.5 text-xs font-bold tracking-wide uppercase">{product.badge}</span>
          )}
        </div>

        <div className="lg:py-6">
          <p className="eyebrow">
            {cat.name}
            {product.scent ? ` · ${product.scent}` : ""}
          </p>
          <h1 className="display mt-3 text-4xl leading-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg text-ink-soft">{product.tagline}</p>

          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          <ul className="mt-8 grid gap-2.5 rounded-2xl bg-white p-5 text-sm font-medium">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aqua text-white">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-line">
            <Detail title="About this product" open>
              {product.description}
            </Detail>
            <Detail title="How to use">{product.howTo}</Detail>
            <Detail title="Safety & storage">
              Keep out of reach of children. Avoid contact with eyes; if contact occurs, rinse well with water. Store upright in a cool, dry place away from
              direct sunlight. Safety data sheets are available on request.
            </Detail>
            <Detail title="Delivery & returns">
              Orders are dispatched within 1–2 business days. Delivery is free on orders over R750, otherwise a flat R95. Unopened products can be returned
              within 14 days.
            </Detail>
          </div>
        </div>
      </div>

      <section className="pt-24">
        <h2 className="display text-3xl sm:text-4xl">Goes well with</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

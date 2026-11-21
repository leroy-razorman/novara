import Link from "next/link";
import Bottle from "./Bottle";
import { formatPrice, getCategory, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const cat = getCategory(product.category);
  const from = Math.min(...product.sizes.map((s) => s.price));
  return (
    <Link href={`/shop/${product.slug}`} className="group flex flex-col">
      <div
        className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-3xl transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-ink/10"
        style={{ background: cat.tint }}
      >
        {product.badge && (
          <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${product.badge === "New" ? "bg-ink text-white" : "bg-citrus text-ink"}`}>
            {product.badge}
          </span>
        )}
        <Bottle
          shape={product.shape}
          color={product.color}
          label={product.label}
          className="h-[72%] transition duration-500 group-hover:scale-105 group-hover:-rotate-3"
        />
        <span className="absolute right-4 bottom-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-ink text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3 px-1">
        <div>
          <h3 className="leading-snug font-semibold">{product.name}</h3>
          <p className="mt-0.5 text-sm text-ink-soft">
            {product.scent ? `${product.scent} · ` : ""}
            {product.sizes.map((s) => s.label.replace(" refill", "")).join(" / ")}
          </p>
        </div>
        <p className="text-right text-sm whitespace-nowrap">
          {product.sizes.length > 1 && <span className="block text-[11px] text-ink-soft">from</span>}
          <span className="font-semibold tabular-nums">{formatPrice(from)}</span>
        </p>
      </div>
    </Link>
  );
}

"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, products, type CategoryId } from "@/lib/products";

type Sort = "featured" | "price-asc" | "price-desc" | "name";
const minPrice = (p: (typeof products)[number]) => Math.min(...p.sizes.map((s) => s.price));

export default function ShopBrowser({ initialCategory }: { initialCategory: CategoryId | "all" }) {
  const [category, setCategory] = useState<CategoryId | "all">(initialCategory);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");
  const [bulkOnly, setBulkOnly] = useState(false);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (!q || `${p.name} ${p.scent ?? ""} ${p.tagline}`.toLowerCase().includes(q)) &&
        (!bulkOnly || p.sizes.some((s) => /^(5|20|25)L/.test(s.label))),
    );
    if (sort === "price-asc") list.sort((a, b) => minPrice(a) - minPrice(b));
    if (sort === "price-desc") list.sort((a, b) => minPrice(b) - minPrice(a));
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, query, sort, bulkOnly]);

  const chip = (active: boolean) =>
    `cursor-pointer rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition ${active ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"}`;

  return (
    <div>
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        <button className={chip(category === "all")} onClick={() => setCategory("all")}>
          All products
        </button>
        {categories.map((c) => (
          <button key={c.id} className={chip(category === c.id)} onClick={() => setCategory(c.id)}>
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 border-y border-line py-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:max-w-xs">
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-ink-soft" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" aria-label="Search products" className="field !rounded-full !py-2.5 !pl-10" />
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
          <input type="checkbox" checked={bulkOnly} onChange={(e) => setBulkOnly(e.target.checked)} className="h-4 w-4 accent-aqua-deep" />
          Bulk sizes (5L+)
        </label>
        <p className="text-sm text-ink-soft sm:ml-auto">
          {visible.length} product{visible.length === 1 ? "" : "s"}
        </p>
        <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} aria-label="Sort products" className="field !w-auto !rounded-full !py-2.5">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>

      {visible.length === 0 ? (
        <div className="py-24 text-center">
          <p className="display text-2xl">No products match that</p>
          <button
            className="btn btn-outline mt-5"
            onClick={() => {
              setCategory("all");
              setQuery("");
              setBulkOnly(false);
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

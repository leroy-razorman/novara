import type { Metadata } from "next";
import { Suspense } from "react";
import ShopBrowser from "@/components/ShopBrowser";
import { categories, type CategoryId } from "@/lib/products";

export const metadata: Metadata = { title: "Shop" };

async function Browser({ searchParams }: Pick<PageProps<"/shop">, "searchParams">) {
  const { category } = await searchParams;
  const initial = categories.some((c) => c.id === category) ? (category as CategoryId) : "all";
  return <ShopBrowser key={initial} initialCategory={initial} />;
}

export default function ShopPage({ searchParams }: PageProps<"/shop">) {
  return (
    <div className="container-x pt-12">
      <p className="eyebrow">The full range</p>
      <h1 className="display mt-3 text-5xl sm:text-6xl">Shop Novara</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">Everyday bottles and bulk refills for every room. Free delivery on orders over R750.</p>
      <div className="mt-10">
        <Suspense fallback={<ShopBrowser initialCategory="all" />}>
          <Browser searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

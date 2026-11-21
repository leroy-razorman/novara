import Link from "next/link";
import Bottle from "@/components/Bottle";
import ProductCard from "@/components/ProductCard";
import { categories, getProduct, products } from "@/lib/products";

const claims = ["Concentrated formulas", "Bulk sizes up to 25L", "Colour-safe laundry care", "Nationwide delivery", "Home & business", "Fair, honest pricing"];

const reasons = [
  { n: "01", title: "Concentrated, not watered down", body: "Thicker formulas mean smaller doses. One cap, one squeeze, one spray does the job it promises on the label." },
  { n: "02", title: "Sizes that make sense", body: "From a 500ml spray under the sink to a 25L drum in the storeroom — buy what you'll actually use and pay less per litre." },
  { n: "03", title: "Made for real mess", body: "Tested on braai grease, school uniforms, muddy tiles and busy commercial kitchens. Not just a nice smell." },
];

const Bubble = ({ className }: { className: string }) => (
  <span className={`absolute rounded-full border-2 border-white/60 bg-white/20 ${className}`} aria-hidden="true" />
);

export default function Home() {
  const hero = ["dishwashing-liquid", "auto-laundry-liquid", "multi-purpose-cleaner"].map((s) => getProduct(s)!);
  const bestsellers = products.filter((p) => p.badge === "Bestseller").concat(getProduct("pine-gel")!);
  const catProduct = (id: string) => products.find((p) => p.category === id)!;

  return (
    <>
      {/* Hero */}
      <section className="container-x grid items-center gap-10 pt-10 pb-16 lg:grid-cols-[1.05fr_1fr] lg:pt-16 lg:pb-24">
        <div className="animate-rise">
          <p className="eyebrow">Household &amp; industrial detergents</p>
          <h1 className="display mt-5 text-[clamp(2.9rem,7.4vw,5.6rem)] leading-[0.95]">
            Clean that <br />
            pulls its{" "}
            <span className="relative inline-block">
              <span className="relative z-10">weight.</span>
              <span className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.32em] -rotate-1 rounded-sm bg-citrus" aria-hidden="true" />
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Laundry, kitchen, floor and bathroom cleaners that work the first time — in sizes for a flat, a family or a full factory floor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn btn-primary !px-7 !py-4 text-base">
              Shop the range
            </Link>
            <Link href="/wholesale" className="btn btn-outline !px-7 !py-4 text-base">
              Buy in bulk
            </Link>
          </div>
          <dl className="mt-12 flex gap-8 border-t border-line pt-6 text-sm sm:gap-12">
            {[
              ["12", "everyday essentials"],
              ["25L", "largest drum size"],
              ["R750+", "ships free"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="display text-3xl">{k}</dt>
                <dd className="mt-1 text-ink-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="absolute inset-[4%] rounded-full bg-aqua" />
          <div className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_55%)]" />
          <Bubble className="top-[6%] right-[14%] h-14 w-14 animate-float" />
          <Bubble className="top-[24%] left-[2%] h-8 w-8 animate-float [animation-delay:-2s]" />
          <Bubble className="right-[2%] bottom-[30%] h-10 w-10 animate-float [animation-delay:-4s]" />
          <Bubble className="bottom-[6%] left-[16%] h-5 w-5 animate-float [animation-delay:-1s]" />
          <div className="absolute inset-0 flex items-end justify-center pb-[10%]">
            <Bottle {...hero[0]} className="h-[58%] translate-x-[18%] -rotate-6 drop-shadow-xl" />
            <Bottle {...hero[1]} className="relative z-10 h-[78%] drop-shadow-2xl" />
            <Bottle {...hero[2]} className="h-[62%] -translate-x-[18%] rotate-6 drop-shadow-xl" />
          </div>
          <Link
            href="/shop/auto-laundry-liquid"
            className="absolute top-[12%] left-0 z-20 rotate-[-8deg] rounded-2xl bg-white px-4 py-3 shadow-xl shadow-ink/10 transition hover:rotate-0"
          >
            <span className="block text-[11px] font-semibold tracking-wide text-aqua-deep uppercase">Bestseller</span>
            <span className="block text-sm font-semibold">Laundry Liquid 2L</span>
            <span className="block text-sm text-ink-soft">R89.99</span>
          </Link>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-citrus py-4" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[...claims, ...claims, ...claims, ...claims].map((c, i) => (
            <span key={i} className="display flex items-center text-lg whitespace-nowrap uppercase">
              {c}
              <span className="mx-7 text-base">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="container-x pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Shop by room</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Every corner, covered.</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold underline underline-offset-4 hover:text-aqua-deep">
            View all products
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c, i) => {
            const p = catProduct(c.id);
            return (
              <Link
                key={c.id}
                href={`/shop?category=${c.id}`}
                className={`group relative flex aspect-[3/4] flex-col overflow-hidden rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 ${i === 0 ? "max-md:col-span-2 max-md:aspect-[2/1]" : ""}`}
                style={{ background: c.tint }}
              >
                <h3 className="display text-xl">{c.name}</h3>
                <p className="mt-1 max-w-[12rem] text-sm text-ink-soft">{c.blurb}</p>
                <Bottle {...p} className="absolute -right-4 -bottom-8 h-[68%] rotate-6 transition duration-500 group-hover:-translate-y-3 group-hover:rotate-0" />
                <span className="mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold">
                  Shop <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container-x pt-24">
        <p className="eyebrow">Customer favourites</p>
        <h2 className="display mt-3 text-4xl sm:text-5xl">The ones that keep selling out.</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Why Novara */}
      <section className="mt-24 bg-ink py-20 text-white">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow !text-citrus">Why Novara</p>
            <h2 className="display mt-3 text-4xl leading-tight sm:text-5xl">
              Less fuss. <br />
              More clean.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              We make a short list of products and we make them properly — so you don&apos;t need a cupboard full of bottles to keep a place spotless.
            </p>
            <Link href="/about" className="btn btn-citrus mt-8">
              Read our story
            </Link>
          </div>
          <ol className="divide-y divide-white/15 border-y border-white/15">
            {reasons.map((r) => (
              <li key={r.n} className="grid gap-2 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="display text-2xl text-aqua">{r.n}</span>
                <div>
                  <h3 className="display text-2xl">{r.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-white/70">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Bulk band */}
      <section className="container-x pt-24">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-aqua md:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="eyebrow !text-ink">For business</p>
            <h2 className="display mt-3 text-4xl leading-tight sm:text-5xl">Buy it by the drum.</h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink/80">
              Restaurants, guesthouses, schools, laundromats and cleaning contractors get trade pricing, 20L and 25L drums and scheduled deliveries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/wholesale" className="btn btn-primary">
                Get a trade quote
              </Link>
              <Link href="/shop" className="btn btn-outline">
                Browse bulk sizes
              </Link>
            </div>
          </div>
          <div className="relative min-h-64">
            <div className="absolute inset-0 flex items-end justify-center gap-0 md:justify-end md:pr-10">
              <Bottle {...getProduct("tile-floor-cleaner")!} className="h-[70%] translate-x-6 translate-y-4 -rotate-3" />
              <Bottle {...getProduct("auto-laundry-liquid")!} className="relative z-10 h-[95%] translate-y-6" />
              <Bottle {...getProduct("fabric-softener")!} className="h-[75%] -translate-x-6 translate-y-4 rotate-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

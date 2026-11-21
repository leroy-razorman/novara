"use client";

import { useRef, useState } from "react";
import Bottle from "./Bottle";
import { useStore } from "./Store";
import { PRODUCTS, R, type Product } from "@/lib/products";

function AddButton({ id }: { id: string }) {
  const { add } = useStore();
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  return (
    <button
      className={`add${done ? " done" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        add(`${id}|0`, 1);
        setDone(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setDone(false), 1200);
      }}
    >
      {done ? "Added" : "Add to basket"}
    </button>
  );
}

function ProductCard({ p, i }: { p: Product; i: number }) {
  const { openProduct } = useStore();
  return (
    <article
      className="product rv"
      style={{ "--d": `${(i % 3) * 0.08}s` } as React.CSSProperties}
      tabIndex={0}
      role="button"
      aria-label={`${p.name}: view details`}
      onClick={() => openProduct(p.id)}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && e.target === e.currentTarget) {
          e.preventDefault();
          openProduct(p.id);
        }
      }}
    >
      <div className="vis">
        <span className="tag">{p.cat}</span>
        <Bottle {...p.bottle} />
      </div>
      <div className="info">
        <h3>{p.name}</h3>
        <p className="use">{p.use}</p>
        <span className="more">View details</span>
        <div className="row">
          <span className="price">
            {R(p.sizes[0][1])}
            <small>{p.sizes[0][0]}</small>
          </span>
          <AddButton id={p.id} />
        </div>
      </div>
    </article>
  );
}

/** The six-product grid on the home page. */
export function ProductGrid() {
  return (
    <div className="grid">
      {PRODUCTS.map((p, i) => (
        <ProductCard key={p.id} p={p} i={i} />
      ))}
    </div>
  );
}

/** Category chips plus the filtered grid on the shop page. */
export function ShopGrid() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
  return (
    <>
      <div className="chips">
        {cats.map((c) => (
          <button key={c} className={`chip${c === filter ? " on" : ""}`} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">
        {PRODUCTS.filter((p) => filter === "All" || p.cat === filter).map((p, i) => (
          <ProductCard key={p.id} p={p} i={i} />
        ))}
      </div>
    </>
  );
}

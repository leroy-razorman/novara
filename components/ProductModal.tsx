"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Bottle from "./Bottle";
import { useStore } from "./Store";
import { P, R, type Product } from "@/lib/products";

function ModalBody({ p }: { p: Product }) {
  const { add, closeProduct } = useStore();
  const [size, setSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    closeBtn.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button className="x" aria-label="Close" ref={closeBtn} onClick={closeProduct}>
        ×
      </button>
      <div className="stage">
        <Bottle {...p.bottle} />
      </div>
      <div className="body">
        <div className="kicker">{p.cat}</div>
        <h2 id="mtitle">{p.name}</h2>
        <p className="sub">{p.long}</p>
        <div className="price">
          {R(p.sizes[size][1])}
          <small>{p.sizes[size][0]}</small>
        </div>
        <span className="optl">Size</span>
        <div className="sizes">
          {p.sizes.map((s, i) => (
            <button key={s[0]} className={i === size ? "on" : undefined} onClick={() => setSize(i)}>
              {s[0]}
            </button>
          ))}
        </div>
        <div className="buy">
          <div className="qty">
            <button aria-label="Fewer" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              −
            </button>
            <span>{qty}</span>
            <button aria-label="More" onClick={() => setQty((q) => q + 1)}>
              +
            </button>
          </div>
          <button
            className={`btn ink${done ? " done" : ""}`}
            onClick={() => {
              add(`${p.id}|${size}`, qty);
              setDone(true);
              clearTimeout(timer.current);
              timer.current = setTimeout(() => setDone(false), 1200);
            }}
          >
            {done ? "Added" : "Add to basket"}
          </button>
        </div>
        <div className="give">Each order supports the supply of this same product to Novara partner households, clinics and schools.</div>
        <div className="acc">
          <details open>
            <summary>How to use</summary>
            <ul>
              {p.how.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </details>
          <details>
            <summary>Ingredients</summary>
            <p>{p.ing}</p>
          </details>
          <details>
            <summary>Delivery and returns</summary>
            <p>2 to 4 working days nationwide, free over R500. Unopened products can be returned within 30 days.</p>
          </details>
        </div>
        <div className="foot">
          <Link className="tlink" href="/shop" onClick={closeProduct}>
            Visit the full shop
          </Link>
        </div>
      </div>
    </>
  );
}

export default function ProductModal() {
  const { productId, closeProduct } = useStore();
  const p = productId ? P(productId) : undefined;
  return (
    <div className={`scrim${p ? " on" : ""}`} onClick={(e) => e.target === e.currentTarget && closeProduct()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="mtitle">
        {p && <ModalBody key={p.id} p={p} />}
      </div>
    </div>
  );
}

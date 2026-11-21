"use client";

import Link from "next/link";
import Bottle from "./Bottle";
import { useStore } from "./Store";
import { FREE_DELIVERY_OVER, R, STANDARD_DELIVERY } from "@/lib/products";

export default function Basket() {
  const { items, subtotal: s, change, remove, openProduct } = useStore();
  const any = items.length > 0;
  const d = any ? (s >= FREE_DELIVERY_OVER ? 0 : STANDARD_DELIVERY) : 0;

  return (
    <div className="wrap basket">
      <div>
        {any ? (
          items.map((i) => (
            <div className="line" key={i.key}>
              <div className="thumb">
                <Bottle {...i.bottle} />
              </div>
              <div>
                <button className="nm" onClick={() => openProduct(i.id)}>
                  {i.name}
                </button>
                <div className="sz">
                  {i.size} · {R(i.price)}
                </div>
                <div className="qty">
                  <button aria-label="Fewer" onClick={() => change(i.key, -1)}>
                    −
                  </button>
                  <span>{i.q}</span>
                  <button aria-label="More" onClick={() => change(i.key, 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="amt">
                {R(i.price * i.q)}
                <button className="rm" onClick={() => remove(i.key)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">
            <h3>Your basket is empty</h3>
            <p style={{ margin: "10px 0 22px" }}>Add a product to get started.</p>
            <Link className="btn ink" href="/shop">
              Shop now
            </Link>
          </div>
        )}
      </div>
      <div className="sum">
        <h3>Summary</h3>
        <div className="r">
          <span>Subtotal</span>
          <span>{R(s)}</span>
        </div>
        <div className="r">
          <span>Delivery</span>
          <span>{any ? (d === 0 ? "Free" : R(d)) : "—"}</span>
        </div>
        <div className="r t">
          <span>Total</span>
          <span>{R(s + d)}</span>
        </div>
        <Link className="btn ink" href="/checkout" aria-disabled={any ? undefined : true} style={any ? undefined : { opacity: 0.4, pointerEvents: "none" }}>
          Continue to checkout
        </Link>
        <div className="meter">
          <i style={{ width: `${Math.min(100, s / 5)}%` }} />
        </div>
        <p className="note">{s >= FREE_DELIVERY_OVER ? "Free delivery applied." : `Add ${R(FREE_DELIVERY_OVER - s)} more for free delivery.`}</p>
      </div>
    </div>
  );
}

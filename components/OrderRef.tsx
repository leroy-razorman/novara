"use client";

import { useStore } from "./Store";

export function OrderRef() {
  const { order } = useStore();
  return (
    <>
      <div className="ref">{order ? `Order ${order.ref}` : ""}</div>
      <p>{order?.message}</p>
    </>
  );
}

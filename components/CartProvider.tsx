"use client";

import { createContext, useContext, useMemo, useState, useSyncExternalStore } from "react";
import { cartStore, type CartLine } from "@/lib/cart-store";
import { DELIVERY_FEE, FREE_DELIVERY_THRESHOLD, getProduct, type Product } from "@/lib/products";

export type DetailedLine = CartLine & { product: Product; unitPrice: number; lineTotal: number };

type CartContext = {
  lines: DetailedLine[];
  count: number;
  subtotal: number;
  delivery: number;
  total: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (slug: string, size: string, qty?: number) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartContext | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);
  const [isOpen, setOpen] = useState(false);

  const value = useMemo<CartContext>(() => {
    const lines = raw.flatMap((l) => {
      const product = getProduct(l.slug);
      const size = product?.sizes.find((s) => s.label === l.size);
      if (!product || !size) return [];
      return [{ ...l, product, unitPrice: size.price, lineTotal: size.price * l.qty }];
    });
    const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
    const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    return {
      lines,
      count: lines.reduce((sum, l) => sum + l.qty, 0),
      subtotal,
      delivery,
      total: subtotal + delivery,
      isOpen,
      open: () => setOpen(true),
      close: () => setOpen(false),
      add: (slug, size, qty = 1) => {
        cartStore.add(slug, size, qty);
        setOpen(true);
      },
      setQty: cartStore.setQty,
      clear: cartStore.clear,
    };
  }, [raw, isOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

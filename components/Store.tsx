"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { cartStore } from "@/lib/cart-store";
import { P, type Product } from "@/lib/products";

export type Item = Product & { key: string; size: string; price: number; q: number };
export type Order = { ref: string; message: string };
type Toast = { message: string; link: boolean; on: boolean };

type Store = {
  /** false during server render and hydration, before the saved basket is readable */
  ready: boolean;
  items: Item[];
  count: number;
  subtotal: number;
  add: (key: string, n: number) => void;
  change: (key: string, delta: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  toast: Toast;
  productId: string | null;
  openProduct: (id: string) => void;
  closeProduct: () => void;
  chatOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  order: Order | null;
  setOrder: (o: Order) => void;
};

const Ctx = createContext<Store | null>(null);
const noop = () => () => {};

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const cart = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);
  const ready = useSyncExternalStore(noop, () => true, () => false);
  const [toast, setToast] = useState<Toast>({ message: "", link: false, on: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [productId, setProductId] = useState<string | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);

  const add = useCallback((key: string, n: number) => {
    cartStore.add(key, n);
    setToast({ message: `${P(key.split("|")[0])?.name} added to your basket`, link: true, on: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, on: false })), 2800);
  }, []);
  const openProduct = useCallback((id: string) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setProductId(id);
  }, []);
  const closeProduct = useCallback(() => {
    setProductId(null);
    lastFocus.current?.focus?.();
  }, []);

  const value = useMemo<Store>(() => {
    const items = Object.entries(cart).flatMap(([key, q]) => {
      const [id, s] = key.split("|");
      const p = P(id);
      return p && p.sizes[+s] ? [{ ...p, key, size: p.sizes[+s][0], price: p.sizes[+s][1], q }] : [];
    });
    return {
      ready,
      items,
      count: items.reduce((s, i) => s + i.q, 0),
      subtotal: items.reduce((s, i) => s + i.price * i.q, 0),
      add,
      change: cartStore.change,
      remove: cartStore.remove,
      clear: cartStore.clear,
      toast,
      productId,
      openProduct,
      closeProduct,
      chatOpen,
      openChat: () => setChatOpen(true),
      closeChat: () => setChatOpen(false),
      order,
      setOrder,
    };
  }, [cart, ready, add, toast, productId, openProduct, closeProduct, chatOpen, order]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error("useStore must be used inside <StoreProvider>");
  return s;
}

// Browser-only basket, kept in localStorage exactly as the design does:
// { "<productId>|<sizeIndex>": quantity }. Replace with the real cart later.
import { P } from "./products";

export type Cart = Record<string, number>;

const KEY = "novara-basket";
const EMPTY: Cart = {};
let cart: Cart | null = null;
const listeners = new Set<() => void>();

function read(): Cart {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(KEY) || "{}");
    const clean: Cart = {};
    for (const [k, q] of Object.entries(parsed ?? {})) {
      const [id, s] = k.split("|");
      const p = P(id);
      if (p && p.sizes[+s] && typeof q === "number" && q > 0) clean[k] = q;
    }
    return clean;
  } catch {
    return {};
  }
}

function commit(next: Cart) {
  cart = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage unavailable — keep the in-memory basket
  }
  listeners.forEach((l) => l());
}

export const cartStore = {
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  getSnapshot() {
    if (cart === null) cart = read();
    return cart;
  },
  getServerSnapshot() {
    return EMPTY;
  },
  add(key: string, n: number) {
    const c = cartStore.getSnapshot();
    commit({ ...c, [key]: (c[key] || 0) + n });
  },
  change(key: string, delta: number) {
    const c = { ...cartStore.getSnapshot() };
    c[key] = Math.max(0, (c[key] || 0) + delta);
    if (!c[key]) delete c[key];
    commit(c);
  },
  remove(key: string) {
    const c = { ...cartStore.getSnapshot() };
    delete c[key];
    commit(c);
  },
  clear() {
    commit({});
  },
};

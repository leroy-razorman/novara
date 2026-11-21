// Tiny client-side cart kept in localStorage so the demo feels real.
// Replace with the commerce backend's cart when that work starts.

export type CartLine = { slug: string; size: string; qty: number };

const KEY = "novara-cart";
const EMPTY: CartLine[] = [];
let lines: CartLine[] | null = null;
const listeners = new Set<() => void>();

function read(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function commit(next: CartLine[]) {
  lines = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage unavailable — keep the in-memory cart
  }
  listeners.forEach((l) => l());
}

export const cartStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    if (lines === null) lines = read();
    return lines;
  },
  getServerSnapshot() {
    return EMPTY;
  },
  add(slug: string, size: string, qty = 1) {
    const current = cartStore.getSnapshot();
    const existing = current.find((l) => l.slug === slug && l.size === size);
    commit(
      existing
        ? current.map((l) => (l === existing ? { ...l, qty: l.qty + qty } : l))
        : [...current, { slug, size, qty }],
    );
  },
  setQty(slug: string, size: string, qty: number) {
    const current = cartStore.getSnapshot();
    commit(
      qty <= 0
        ? current.filter((l) => !(l.slug === slug && l.size === size))
        : current.map((l) => (l.slug === slug && l.size === size ? { ...l, qty } : l)),
    );
  },
  clear() {
    commit([]);
  },
};

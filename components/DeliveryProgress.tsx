import { FREE_DELIVERY_THRESHOLD, formatPrice } from "@/lib/products";

export default function DeliveryProgress({ subtotal }: { subtotal: number }) {
  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const pct = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);
  return (
    <div className="rounded-2xl bg-foam p-4">
      <p className="text-sm font-medium">
        {remaining > 0 ? (
          <>
            Add <strong>{formatPrice(remaining)}</strong> more for free delivery
          </>
        ) : (
          <>You&apos;ve unlocked free delivery</>
        )}
      </p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full bg-aqua transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

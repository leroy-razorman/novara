"use client";

export default function QtyStepper({
  value,
  onChange,
  min = 1,
  small = false,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  small?: boolean;
}) {
  const btn = `grid place-items-center rounded-full text-lg leading-none hover:bg-foam cursor-pointer ${small ? "h-7 w-7" : "h-10 w-10"}`;
  return (
    <div className="inline-flex items-center rounded-full border border-line bg-white p-0.5">
      <button type="button" className={btn} aria-label="Decrease quantity" onClick={() => onChange(Math.max(min, value - 1))}>
        −
      </button>
      <span className={`text-center text-sm font-semibold tabular-nums ${small ? "w-6" : "w-9"}`} aria-live="polite">
        {value}
      </span>
      <button type="button" className={btn} aria-label="Increase quantity" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}

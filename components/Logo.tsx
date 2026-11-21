export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <path d="M16 2C16 2 6 13 6 20a10 10 0 0 0 20 0C26 13 16 2 16 2Z" fill="var(--color-aqua)" />
        <path d="M16 13l1.6 4.4L22 19l-4.4 1.6L16 25l-1.6-4.4L10 19l4.4-1.6Z" fill="#fff" />
      </svg>
      <span className="font-display text-2xl font-extrabold tracking-tight">novara</span>
    </span>
  );
}

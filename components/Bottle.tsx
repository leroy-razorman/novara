import type { Product } from "@/lib/products";

const CORAL = "#FF7F66";

export default function Bottle({ fill, cap, shape, label }: Product["bottle"]) {
  return (
    <svg viewBox="-4 -10 108 130" aria-hidden="true">
      {shape === "cream" && (
        <>
          <path d="M34 6h32v10l8 6v34c0 20-6 40-10 56H36c-4-16-10-36-10-56V22l8-6z" fill={fill} />
          <rect x="38" y="2" width="24" height="8" rx="2" fill={cap} />
        </>
      )}
      {shape === "dish" && (
        <>
          <path d="M38 6h24v14l10 12v70c0 6-4 10-10 10H38c-6 0-10-4-10-10V32l10-12z" fill={fill} />
          <rect x="42" y="0" width="16" height="10" rx="2" fill={cap} />
          <rect x="46" y="-6" width="8" height="8" rx="2" fill={cap} />
        </>
      )}
      {shape === "bleach" && (
        <>
          <path d="M30 10h22l6 8v12l14 10v60c0 8-4 12-12 12H30c-6 0-10-4-10-10V28l6-10z" fill={fill} />
          <rect x="30" y="2" width="22" height="10" rx="2" fill={cap} />
        </>
      )}
      {shape === "spray" && (
        <>
          <path d="M44 30h22v70c0 6-4 10-10 10H40c-6 0-10-4-10-10V52l14-10z" fill={fill} />
          <path d="M40 12h26v18H48l-8 6z" fill={cap} />
          <rect x="62" y="4" width="14" height="8" rx="2" fill={cap} />
        </>
      )}
      {shape === "laundry" && (
        <>
          <path d="M26 20h48v82c0 5-4 8-8 8H34c-4 0-8-3-8-8z" fill={fill} />
          <rect x="34" y="6" width="32" height="14" rx="3" fill={cap} />
        </>
      )}
      {shape === "soap" && (
        <>
          <path d="M34 24h32v76c0 6-4 10-10 10H44c-6 0-10-4-10-10z" fill={fill} />
          <rect x="44" y="12" width="12" height="12" rx="2" fill={cap} />
          <path d="M50 4v8M50 4h14" stroke={cap} strokeWidth="5" strokeLinecap="round" fill="none" />
        </>
      )}
      <rect x="30" y="50" width="40" height="30" rx="2" fill="#fff" opacity=".95" />
      <rect x="34" y="54" width="14" height="3" rx="1.5" fill={CORAL} />
      <text x="50" y="66" textAnchor="middle" style={{ fontFamily: "var(--head)" }} fontWeight="800" fontSize="7.5" fill="#083C47">
        NOVARA
      </text>
      <text x="50" y="75" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="5.6" fill="#52666B">
        {label}
      </text>
    </svg>
  );
}

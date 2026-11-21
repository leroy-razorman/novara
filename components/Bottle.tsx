import type { BottleShape } from "@/lib/products";

type Props = {
  shape: BottleShape;
  color: string;
  label: [string, string?];
  className?: string;
  /** Cap colour — pass a light colour when the bottle sits on a dark background. */
  cap?: string;
};

const INK = "#0b2a33";

// Each shape: the parts drawn in the liquid colour, the cap parts, a highlight
// strip, and where the paper label sits.
const shapes: Record<
  BottleShape,
  { body: React.ReactNode; cap: React.ReactNode; shine: [number, number, number]; labelBox: [number, number, number, number] }
> = {
  squeeze: {
    body: (
      <path d="M62 72Q62 52 82 52H118Q138 52 138 72V244Q138 262 120 262H80Q62 262 62 244Z" />
    ),
    cap: (
      <>
        <rect x="90" y="16" width="20" height="16" rx="4" />
        <rect x="80" y="30" width="40" height="24" rx="5" />
      </>
    ),
    shine: [72, 70, 176],
    labelBox: [62, 118, 76, 92],
  },
  jug: {
    body: (
      <path
        fillRule="evenodd"
        d="M46 92Q46 52 86 50H114Q152 52 158 96V240Q158 262 136 262H68Q46 262 46 240ZM128 96a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Z"
      />
    ),
    cap: <rect x="72" y="22" width="44" height="30" rx="6" />,
    shine: [56, 92, 152],
    labelBox: [56, 158, 92, 82],
  },
  spray: {
    body: (
      <path d="M64 114Q64 94 84 92H116Q136 94 136 114V244Q136 262 118 262H82Q64 262 64 244Z" />
    ),
    cap: (
      <>
        <rect x="87" y="70" width="26" height="24" rx="3" />
        <path d="M82 36H130Q138 36 138 44V64Q138 72 130 72H84V56H58V44H82Z" />
        <path d="M114 72Q128 86 121 108" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      </>
    ),
    shine: [74, 112, 136],
    labelBox: [64, 140, 72, 88],
  },
  pump: {
    body: <rect x="58" y="104" width="84" height="158" rx="20" />,
    cap: (
      <>
        <rect x="82" y="86" width="36" height="20" rx="5" />
        <rect x="95" y="50" width="10" height="38" />
        <path d="M64 38H112Q120 38 120 46V56H95V50H64Z" />
      </>
    ),
    shine: [68, 122, 124],
    labelBox: [58, 142, 84, 84],
  },
  angled: {
    body: (
      <>
        <path d="M64 124Q64 102 86 100H114Q136 102 136 124V244Q136 262 118 262H82Q64 262 64 244Z" />
        <path d="M86 102L94 64L76 44L96 30L122 58L114 102Z" />
      </>
    ),
    cap: <path d="M62 30L84 12L100 30L78 48Z" strokeLinejoin="round" stroke="currentColor" strokeWidth="4" />,
    shine: [74, 122, 126],
    labelBox: [64, 144, 72, 86],
  },
};

export default function Bottle({ shape, color, label, className, cap = INK }: Props) {
  const s = shapes[shape];
  const [lx, ly, lw, lh] = s.labelBox;
  const cx = lx + lw / 2;
  return (
    <svg viewBox="0 0 200 280" className={className} role="img" aria-label={`Novara ${label.filter(Boolean).join(" ")}`}>
      <ellipse cx="100" cy="266" rx="62" ry="7" fill={INK} opacity="0.1" />
      <g fill={cap} style={{ color: cap }}>{s.cap}</g>
      <g fill={color}>{s.body}</g>
      <rect x={s.shine[0]} y={s.shine[1]} width="9" height={s.shine[2]} rx="4.5" fill="#fff" opacity="0.28" />
      <rect x={lx} y={ly} width={lw} height={lh} fill="#fff" />
      <rect x={lx} y={ly} width={lw} height="5" fill={INK} />
      <g textAnchor="middle" fill={INK} fontFamily="var(--font-bricolage), sans-serif">
        <text x={cx} y={ly + 24} fontSize="8" fontWeight="700" letterSpacing="2.4">
          NOVARA
        </text>
        <circle cx={cx} cy={ly + 34} r="2.5" fill={color} />
        <text x={cx} y={ly + 54} fontSize="12.5" fontWeight="800">
          {label[0]}
        </text>
        {label[1] && (
          <text x={cx} y={ly + 69} fontSize="12.5" fontWeight="800">
            {label[1]}
          </text>
        )}
      </g>
    </svg>
  );
}

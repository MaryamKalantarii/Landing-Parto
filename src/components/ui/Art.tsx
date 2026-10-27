import { useId } from "react";
import type { ArtKind } from "../../config/assets";
import { imageOverrides } from "../../config/assets";

interface Props {
  kind: ArtKind;
  className?: string;
  alt?: string;
}

const palettes: Record<ArtKind, [string, string, string]> = {
  ring: ["#e9dfd0", "#b79d7d", "#3a2f27"],
  model: ["#2a2420", "#6b5546", "#0e0c0b"],
  watch: ["#cdbfa9", "#8a7357", "#2b231c"],
  perfume: ["#d9c7a6", "#9c7a4a", "#2a2118"],
  fabric: ["#c9a97f", "#8f6a42", "#4a3522"],
  interior: ["#b9a68e", "#6f5a45", "#241c15"],
  stone: ["#4a423b", "#2a2521", "#100e0c"],
  necklace: ["#3b322b", "#1d1815", "#0b0a09"],
};

/**
 * Generated placeholder artwork (no photography supplied). Swap for real photos
 * through `imageOverrides` in src/config/assets.ts.
 */
export default function Art({ kind, className = "", alt = "" }: Props) {
  const uid = useId().replace(/:/g, "");
  const override = imageOverrides[kind];
  if (override) {
    return <img src={override} alt={alt} loading="lazy" decoding="async" className={`object-cover ${className}`} />;
  }
  const [a, b, c] = palettes[kind];
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <defs>
        <linearGradient id={`g${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="0.55" stopColor={b} />
          <stop offset="1" stopColor={c} />
        </linearGradient>
        <radialGradient id={`r${uid}`} cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#g${uid})`} />
      {kind === "ring" && (
        <g>
          <ellipse cx="200" cy="300" rx="78" ry="82" fill="none" stroke="#e8d3a6" strokeWidth="12" />
          <polygon points="200,170 236,205 200,245 164,205" fill="#f6f3ee" opacity="0.95" />
          <polygon points="200,170 218,188 200,205 182,188" fill="#fff" />
        </g>
      )}
      {kind === "model" && (
        <g>
          <ellipse cx="200" cy="170" rx="62" ry="80" fill="#c9a389" opacity="0.9" />
          <path d="M60 500 Q70 330 200 300 Q330 330 340 500Z" fill="#171413" />
          <path d="M130 120 Q200 40 270 120 Q250 80 200 80 Q150 80 130 120Z" fill="#0d0b0a" />
        </g>
      )}
      {kind === "watch" && (
        <g>
          <rect x="165" y="60" width="70" height="380" rx="20" fill="#3a2f25" opacity="0.8" />
          <circle cx="200" cy="250" r="82" fill="#d8c7a4" />
          <circle cx="200" cy="250" r="68" fill="#2a241d" />
          <path d="M200 250 L200 205 M200 250 L228 262" stroke="#e8d3a6" strokeWidth="4" strokeLinecap="round" />
        </g>
      )}
      {kind === "perfume" && (
        <g>
          <rect x="145" y="190" width="110" height="200" rx="10" fill="#e9d5a4" opacity="0.85" />
          <rect x="175" y="130" width="50" height="62" rx="6" fill="#2a2118" />
          <rect x="160" y="270" width="80" height="50" fill="#fff" opacity="0.5" />
        </g>
      )}
      {kind === "fabric" && (
        <g fill="none" stroke="#e2c79d" strokeWidth="3" opacity="0.7">
          <path d="M-20 140 C120 60 240 220 420 120" />
          <path d="M-20 220 C140 140 260 300 420 200" />
          <path d="M-20 300 C120 220 260 380 420 280" />
          <path d="M-20 380 C140 300 240 460 420 360" />
        </g>
      )}
      {kind === "interior" && (
        <g>
          <rect x="60" y="150" width="280" height="220" fill="#2a2118" opacity="0.55" />
          <rect x="90" y="180" width="100" height="160" fill="#c8b697" opacity="0.5" />
          <rect x="210" y="180" width="100" height="160" fill="#c8b697" opacity="0.35" />
        </g>
      )}
      {kind === "stone" && (
        <g fill="#1a1613" opacity="0.7">
          <polygon points="0,500 80,260 190,330 260,200 400,320 400,500" />
          <polygon points="0,500 120,380 250,430 400,380 400,500" fill="#0c0a09" />
        </g>
      )}
      {kind === "necklace" && (
        <g fill="none" stroke="#e8d3a6" strokeWidth="3">
          <path d="M70 120 Q200 420 330 120" strokeDasharray="2 8" strokeLinecap="round" strokeWidth="6" />
          <circle cx="200" cy="330" r="14" fill="#f6f3ee" stroke="none" />
        </g>
      )}
      <rect width="400" height="500" fill={`url(#r${uid})`} />
    </svg>
  );
}

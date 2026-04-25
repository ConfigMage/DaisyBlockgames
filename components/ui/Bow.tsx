type BowProps = {
  size?: number;
  className?: string;
  color?: string;
  outlineColor?: string;
};

/**
 * A soft ribbon bow — used in headers, on the webcam frame, and on alerts.
 */
export function Bow({
  size = 48,
  className,
  color = "#F5D97A",
  outlineColor = "#C9A84C",
}: BowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Left loop */}
      <path
        d="M50 50 Q 22 30 14 46 Q 10 56 18 64 Q 30 72 50 56 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Right loop */}
      <path
        d="M50 50 Q 78 30 86 46 Q 90 56 82 64 Q 70 72 50 56 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Center knot */}
      <rect
        x="44"
        y="44"
        width="12"
        height="16"
        rx="3"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
      />
      {/* Tails */}
      <path
        d="M46 60 Q 40 78 36 88 L 44 84 Q 48 72 50 62"
        fill={color}
        stroke={outlineColor}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M54 60 Q 60 78 64 88 L 56 84 Q 52 72 50 62"
        fill={color}
        stroke={outlineColor}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Loop highlights */}
      <path
        d="M22 44 Q 28 46 32 50"
        stroke={outlineColor}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M78 44 Q 72 46 68 50"
        stroke={outlineColor}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

type DaisyProps = {
  size?: number;
  className?: string;
  petalColor?: string;
  centerColor?: string;
  outlineColor?: string;
  rotate?: number;
};

export function Daisy({
  size = 64,
  className,
  petalColor = "#FFFDF5",
  centerColor = "#E8C85A",
  outlineColor = "#C9A84C",
  rotate = 0,
}: DaisyProps) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <g transform="translate(50 50)">
        {petals.map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-26"
            rx="11"
            ry="20"
            fill={petalColor}
            stroke={outlineColor}
            strokeWidth="1.6"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="12" fill={centerColor} stroke={outlineColor} strokeWidth="1.8" />
        {/* Tiny dot pattern in center */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <circle
            key={deg}
            cx="0"
            cy="-5"
            r="1.4"
            fill={outlineColor}
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * Daisy on a stem, with leaves — used for corner decorations
 */
export function DaisyStem({
  size = 90,
  className,
  flip = false,
}: {
  size?: number;
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M60 110 Q 55 80 50 60 Q 45 40 50 22"
        stroke="#7B9E6B"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Leaf left */}
      <path
        d="M50 70 Q 28 64 22 78 Q 36 84 50 75 Z"
        fill="#9CB88A"
        stroke="#7B9E6B"
        strokeWidth="1.4"
      />
      {/* Leaf right */}
      <path
        d="M50 50 Q 72 44 80 56 Q 64 64 50 56 Z"
        fill="#9CB88A"
        stroke="#7B9E6B"
        strokeWidth="1.4"
      />
      {/* Daisy head */}
      <g transform="translate(50 22)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-12"
            rx="6"
            ry="11"
            fill="#FFFDF5"
            stroke="#C9A84C"
            strokeWidth="1.2"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="6" fill="#E8C85A" stroke="#C9A84C" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

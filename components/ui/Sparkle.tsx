type SparkleProps = {
  size?: number;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
};

/**
 * Four-pointed kawaii sparkle / glimmer.
 */
export function Sparkle({
  size = 18,
  className,
  color = "#E8C85A",
  style,
}: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 2 L 13.4 9.2 L 22 12 L 13.4 14.8 L 12 22 L 10.6 14.8 L 2 12 L 10.6 9.2 Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A field of randomly-placed sparkles for backgrounds. Deterministic positions
 * so it doesn't reshuffle on every render.
 */
const SPARKLE_FIELD = Array.from({ length: 24 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const x = (seed % 1000) / 10;
  const y = ((seed * 7) % 1000) / 10;
  const size = 8 + ((seed >> 3) % 14);
  const delay = ((seed >> 5) % 240) / 100;
  return { x, y, size, delay };
});

export function SparkleField({
  className,
  color = "#E8C85A",
  density = 1,
}: {
  className?: string;
  color?: string;
  density?: number;
}) {
  const items = SPARKLE_FIELD.slice(0, Math.round(SPARKLE_FIELD.length * density));
  return (
    <div className={`pointer-events-none absolute inset-0 ${className ?? ""}`}>
      {items.map((s, i) => (
        <Sparkle
          key={i}
          size={s.size}
          color={color}
          className="absolute animate-sparkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

type HeartProps = {
  size?: number;
  className?: string;
  color?: string;
  outlineColor?: string;
  filled?: boolean;
};

export function Heart({
  size = 24,
  className,
  color = "#E8C85A",
  outlineColor = "#C9A84C",
  filled = true,
}: HeartProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21s-7.5-4.6-9.7-9.2C.8 8.6 2.4 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.6 0 5.2 3.6 3.7 6.8C19.5 16.4 12 21 12 21z"
        fill={filled ? color : "none"}
        stroke={outlineColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Five-heart health indicator from the bottom bar.
 */
export function HeartRow({
  filled = 4,
  total = 5,
  size = 20,
}: {
  filled?: number;
  total?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <Heart
          key={i}
          size={size}
          filled={i < filled}
          color={i < filled ? "#E8C85A" : "transparent"}
        />
      ))}
    </div>
  );
}

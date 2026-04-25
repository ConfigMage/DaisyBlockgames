type TeddyBearProps = {
  size?: number;
  className?: string;
};

/**
 * A small teddy bear with a gold bow — used as an accent on the BRB scene
 * and the homepage.
 */
export function TeddyBear({ size = 120, className }: TeddyBearProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      {/* Ears */}
      <circle cx="34" cy="40" r="11" fill="#D4B894" stroke="#9C7E5C" strokeWidth="2" />
      <circle cx="86" cy="40" r="11" fill="#D4B894" stroke="#9C7E5C" strokeWidth="2" />
      <circle cx="34" cy="40" r="5" fill="#B8946E" />
      <circle cx="86" cy="40" r="5" fill="#B8946E" />

      {/* Head */}
      <ellipse cx="60" cy="56" rx="26" ry="24" fill="#D4B894" stroke="#9C7E5C" strokeWidth="2" />

      {/* Snout */}
      <ellipse cx="60" cy="62" rx="11" ry="9" fill="#EFD9BB" stroke="#9C7E5C" strokeWidth="1.5" />
      <ellipse cx="60" cy="58" rx="2.4" ry="1.6" fill="#5C3F22" />

      {/* Eyes */}
      <circle cx="50" cy="52" r="2.4" fill="#3D2914" />
      <circle cx="70" cy="52" r="2.4" fill="#3D2914" />
      <circle cx="50.8" cy="51.2" r="0.7" fill="#FFFDF5" />
      <circle cx="70.8" cy="51.2" r="0.7" fill="#FFFDF5" />

      {/* Mouth */}
      <path
        d="M55 64 Q 60 68 65 64"
        stroke="#5C3F22"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Cheeks */}
      <circle cx="44" cy="60" r="3" fill="#F5C2D4" opacity="0.6" />
      <circle cx="76" cy="60" r="3" fill="#F5C2D4" opacity="0.6" />

      {/* Body */}
      <ellipse cx="60" cy="98" rx="28" ry="20" fill="#D4B894" stroke="#9C7E5C" strokeWidth="2" />
      <ellipse cx="60" cy="100" rx="14" ry="10" fill="#EFD9BB" />

      {/* Bow at the neck */}
      <g transform="translate(60 80)">
        <path
          d="M0 0 Q -14 -8 -18 -2 Q -20 4 -14 8 Q -6 10 0 4 Z"
          fill="#F5D97A"
          stroke="#C9A84C"
          strokeWidth="1.4"
        />
        <path
          d="M0 0 Q 14 -8 18 -2 Q 20 4 14 8 Q 6 10 0 4 Z"
          fill="#F5D97A"
          stroke="#C9A84C"
          strokeWidth="1.4"
        />
        <rect x="-3" y="-3" width="6" height="9" rx="1.5" fill="#F5D97A" stroke="#C9A84C" strokeWidth="1.4" />
      </g>

      {/* Paws */}
      <ellipse cx="36" cy="106" rx="6" ry="5" fill="#EFD9BB" stroke="#9C7E5C" strokeWidth="1.4" />
      <ellipse cx="84" cy="106" rx="6" ry="5" fill="#EFD9BB" stroke="#9C7E5C" strokeWidth="1.4" />
    </svg>
  );
}

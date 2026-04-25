"use client";

import { useMemo } from "react";

type Petal = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  swayDelay: number;
  hue: "cream" | "gold" | "pink";
  rotate: number;
};

/**
 * A field of slowly-falling daisy petals. Pure CSS animation, deterministic
 * positions, friendly to OBS browser-source rendering.
 */
export function PetalRain({ count = 26 }: { count?: number }) {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const seed = (i * 9301 + 49297) % 233280;
      const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
      const huePick = r(3);
      return {
        left: r(1) * 100,
        delay: r(2) * 12,
        duration: 10 + r(4) * 8,
        size: 14 + r(5) * 18,
        swayDelay: r(6) * 4,
        rotate: r(7) * 360,
        hue: huePick < 0.6 ? "cream" : huePick < 0.85 ? "gold" : "pink",
      };
    });
  }, [count]);

  const fillFor = (h: Petal["hue"]) =>
    h === "cream" ? "#FFFDF5" : h === "gold" ? "#F5D97A" : "#F5C8DC";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute top-0 animate-petal-fall"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          <div
            className="animate-sway"
            style={{
              animationDelay: `${p.swayDelay}s`,
              transform: `rotate(${p.rotate}deg)`,
            }}
          >
            <svg
              width={p.size}
              height={p.size * 1.4}
              viewBox="0 0 20 28"
              aria-hidden="true"
            >
              <ellipse
                cx="10"
                cy="14"
                rx="6"
                ry="13"
                fill={fillFor(p.hue)}
                stroke="#C9A84C"
                strokeWidth="1"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useMemo } from "react";

type Cloud = {
  top: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

/**
 * Soft cream clouds drifting across the screen — used on the BRB scene.
 */
export function DriftingClouds({ count = 5 }: { count?: number }) {
  const clouds = useMemo<Cloud[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const seed = (i * 4129 + 7919) % 233280;
      const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
      return {
        top: 5 + r(1) * 70,
        delay: -r(2) * 18,
        duration: 26 + r(3) * 18,
        size: 80 + r(4) * 100,
        opacity: 0.4 + r(5) * 0.4,
      };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {clouds.map((c, i) => (
        <div
          key={i}
          className="absolute animate-drift"
          style={{
            top: `${c.top}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            opacity: c.opacity,
          }}
        >
          <svg
            width={c.size}
            height={c.size * 0.5}
            viewBox="0 0 200 100"
            aria-hidden="true"
          >
            <ellipse cx="50" cy="60" rx="40" ry="28" fill="#FFFDF5" />
            <ellipse cx="100" cy="50" rx="50" ry="35" fill="#FFFDF5" />
            <ellipse cx="150" cy="62" rx="36" ry="26" fill="#FFFDF5" />
            <ellipse cx="80" cy="68" rx="44" ry="24" fill="#FFFDF5" />
          </svg>
        </div>
      ))}
    </div>
  );
}

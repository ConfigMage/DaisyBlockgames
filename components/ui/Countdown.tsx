"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  initialMinutes: number;
  className?: string;
};

/**
 * Mounts at zero, then ticks down every second to 0:00.
 * After zero, displays "0:00" and gently pulses.
 */
export function Countdown({ initialMinutes, className }: CountdownProps) {
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = window.setInterval(() => {
      setSeconds((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [seconds]);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <span
      className={`font-display tabular-nums ${
        seconds === 0 ? "animate-pulse-soft" : ""
      } ${className ?? ""}`}
    >
      {m}:{pad(s)}
    </span>
  );
}

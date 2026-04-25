"use client";

import { useEffect, useState } from "react";
import { AlertCard, type AlertType } from "./AlertCard";

const SAMPLES: Array<{
  type: AlertType;
  username: string;
  message?: string;
  amount?: string;
}> = [
  { type: "follow", username: "MossyMabel", message: "the meadow welcomes you ♡" },
  { type: "sub", username: "LavenderFox", message: "tier 1 sub — month 3" },
  { type: "donation", username: "TeddyOnToast", amount: "$5.00", message: "for snacks!" },
  { type: "follow", username: "DaisyChainKnight" },
  { type: "sub", username: "SunbeamCottage", message: "gifted 5 subs!" },
  { type: "donation", username: "WildflowerWillow", amount: "$10.00" },
];

/**
 * On the showcase page, cycle through sample alerts every ~5.5s so visitors
 * can see all three animations.
 */
export function DemoCycle({ intervalMs = 5500 }: { intervalMs?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SAMPLES.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  const sample = SAMPLES[index];

  return (
    <div className="flex items-center justify-center min-h-[260px] w-full">
      {/* `key` ensures the animations replay on each new alert */}
      <AlertCard key={index} {...sample} />
    </div>
  );
}

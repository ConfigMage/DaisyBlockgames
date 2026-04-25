"use client";

import { useState } from "react";

type CopyableUrlProps = {
  path: string;
  label: string;
  hint?: string;
};

/**
 * On the homepage, each widget exposes a click-to-copy URL stub. We can't
 * know the deployed origin at build time, so we resolve `window.location.origin`
 * lazily on click.
 */
export function CopyableUrl({ path, label, hint }: CopyableUrlProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    try {
      await navigator.clipboard.writeText(`${origin}${path}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard may be unavailable in some browser contexts; ignore silently
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-cocoa text-lg leading-none">
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="font-body text-xs px-3 py-1 rounded-full bg-gold/30 hover:bg-gold/50 border border-dashed border-gold-stitch text-cocoa transition"
        >
          {copied ? "copied ♡" : "copy url"}
        </button>
      </div>
      <code className="font-mono text-xs text-cocoa/70 bg-cream-card border border-dashed border-gold-stitch/40 rounded px-2 py-1 truncate block">
        {path}
      </code>
      {hint && (
        <p className="font-body text-xs text-cocoa/60 italic">{hint}</p>
      )}
    </div>
  );
}

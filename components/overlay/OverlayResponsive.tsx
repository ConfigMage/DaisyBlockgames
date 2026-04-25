"use client";

import { useEffect, useRef, ReactNode } from "react";

/**
 * Wraps the 1920x1080 overlay body and CSS-scales it to fit the parent's
 * width while preserving 16:9. Faithful miniature for previews.
 */
export function OverlayResponsive({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;
    const update = () => {
      const w = wrapper.clientWidth;
      inner.style.transform = `scale(${w / 1920})`;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrapper);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full aspect-[16/9] overflow-hidden"
    >
      <div
        ref={innerRef}
        className="absolute top-0 left-0"
        style={{
          width: "1920px",
          height: "1080px",
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

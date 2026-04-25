"use client";

import { useEffect } from "react";

/**
 * Reads ?transparent=true from the URL and toggles `html.transparent`
 * so OBS browser sources can render with a transparent background.
 */
export function TransparentMode() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("transparent") === "true") {
      document.documentElement.classList.add("transparent");
    }
    return () => {
      document.documentElement.classList.remove("transparent");
    };
  }, []);

  return null;
}

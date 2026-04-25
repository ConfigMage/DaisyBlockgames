import { ReactNode } from "react";

type PreviewFrameProps = {
  children: ReactNode;
  className?: string;
  aspect?: string;
};

/**
 * Wraps a widget for the homepage showcase: dark border, subtle inset, fixed
 * aspect so previews line up neatly on the page.
 */
export function PreviewFrame({
  children,
  className,
  aspect = "16/9",
}: PreviewFrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border-2 border-dashed border-gold-stitch/60 bg-cream paper-grid ${className ?? ""}`}
      style={{ aspectRatio: aspect }}
    >
      {children}
    </div>
  );
}

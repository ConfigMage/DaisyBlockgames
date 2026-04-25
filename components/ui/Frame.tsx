import { ReactNode } from "react";
import { Daisy, DaisyStem } from "./Daisy";
import { Heart } from "./Heart";
import { Sparkle } from "./Sparkle";

type FrameProps = {
  children?: ReactNode;
  className?: string;
  /** Render small daisies at the four corners */
  cornerDaisies?: boolean;
  /** Render full daisy-stem clusters at bottom-left/right (overlay style) */
  cornerStems?: "tl" | "tr" | "bl" | "br" | "bl+br" | "tl+br" | "all" | "none";
  /** Sprinkle hearts and sparkles inside the frame */
  innerSparkles?: boolean;
  /** Use a slightly thicker dashed border */
  thick?: boolean;
  /** Optional washi-tape label tab placed at top-center of the frame */
  label?: string;
  /** Where the label sits */
  labelPosition?: "top" | "top-left" | "top-right";
};

/**
 * The classic cottagecore frame: dashed gold stitch border, cream paper fill,
 * optional daisy decorations and a washi-tape label tab.
 */
export function Frame({
  children,
  className,
  cornerDaisies = true,
  cornerStems = "none",
  innerSparkles = false,
  thick = false,
  label,
  labelPosition = "top",
}: FrameProps) {
  return (
    <div
      className={`relative paper-cream paper-grid glow-inner ${
        thick ? "stitch-border-thick" : "stitch-border"
      } ${className ?? ""}`}
    >
      {/* Inner faint border to suggest two stitched lines */}
      <div className="pointer-events-none absolute inset-1.5 rounded-[20px] border border-dashed border-gold-stitch/30" />

      {cornerDaisies && (
        <>
          <Daisy size={28} className="absolute -top-3 -left-3" rotate={-12} />
          <Daisy size={26} className="absolute -top-3 -right-3" rotate={18} />
          <Daisy size={22} className="absolute -bottom-3 -left-3" rotate={-22} />
          <Daisy size={22} className="absolute -bottom-3 -right-3" rotate={14} />
        </>
      )}

      {(cornerStems === "tl" || cornerStems === "tl+br" || cornerStems === "all") && (
        <DaisyStem size={90} className="pointer-events-none absolute -top-2 -left-2" />
      )}
      {(cornerStems === "tr" || cornerStems === "all") && (
        <DaisyStem size={90} className="pointer-events-none absolute -top-2 -right-2" flip />
      )}
      {(cornerStems === "bl" ||
        cornerStems === "bl+br" ||
        cornerStems === "all") && (
        <DaisyStem
          size={120}
          className="pointer-events-none absolute -bottom-3 -left-3"
        />
      )}
      {(cornerStems === "br" ||
        cornerStems === "bl+br" ||
        cornerStems === "tl+br" ||
        cornerStems === "all") && (
        <DaisyStem
          size={120}
          className="pointer-events-none absolute -bottom-3 -right-3"
          flip
        />
      )}

      {innerSparkles && (
        <>
          <Sparkle size={14} className="absolute top-6 left-10 opacity-70" />
          <Sparkle size={10} className="absolute top-12 left-20 opacity-60" />
          <Sparkle size={12} className="absolute top-20 right-14 opacity-70" />
          <Heart size={12} color="#E8C85A" className="absolute top-32 left-8 opacity-60" />
          <Heart size={14} color="#E8C85A" className="absolute bottom-20 right-10 opacity-70" />
          <Sparkle size={12} className="absolute bottom-12 right-24 opacity-60" />
        </>
      )}

      {label && (
        <div
          className={`absolute -top-4 z-10 ${
            labelPosition === "top"
              ? "left-1/2 -translate-x-1/2"
              : labelPosition === "top-left"
              ? "left-8"
              : "right-8"
          }`}
        >
          <span className="washi-tape text-base font-semibold tracking-wide">
            ♡ {label} ♡
          </span>
        </div>
      )}

      {children}
    </div>
  );
}

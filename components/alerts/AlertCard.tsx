"use client";

import { Daisy } from "@/components/ui/Daisy";
import { Bow } from "@/components/ui/Bow";
import { Heart } from "@/components/ui/Heart";
import { Sparkle } from "@/components/ui/Sparkle";

export type AlertType = "follow" | "sub" | "donation";

type AlertCardProps = {
  type: AlertType;
  username: string;
  message?: string;
  amount?: string;
};

const COPY: Record<AlertType, { label: string; tagline: string }> = {
  follow: { label: "new follower!", tagline: "welcome to the meadow ♡" },
  sub: { label: "new subscriber!", tagline: "you're part of the cottage now ♡" },
  donation: { label: "new donation!", tagline: "thank you so much ♡" },
};

/**
 * The card body shared by all three alerts. The outer animation (bloom, ribbon,
 * heart-float) wraps this so the card itself just stays still and pretty.
 */
function CardBody({
  type,
  username,
  message,
  amount,
}: AlertCardProps) {
  const { label, tagline } = COPY[type];
  return (
    <div className="relative paper-cream stitch-border-thick px-10 py-6 shadow-card min-w-[420px] max-w-[560px]">
      {/* Corner decorations */}
      <Daisy size={28} className="absolute -top-3 -left-3" rotate={-12} />
      <Daisy size={28} className="absolute -top-3 -right-3" rotate={14} />
      <Sparkle size={16} className="absolute top-3 right-8 opacity-70" />
      <Sparkle size={14} className="absolute bottom-3 left-8 opacity-70" />

      <div className="text-center">
        <p className="font-display text-2xl text-cocoa/80 leading-none">
          {label}
        </p>
        <p className="font-display text-5xl text-cocoa leading-tight mt-2 break-words">
          {username}
        </p>
        {amount && (
          <p className="font-display text-3xl text-gold-deep mt-1">
            {amount}
          </p>
        )}
        <p className="font-body text-sm text-cocoa/60 italic mt-2">
          {message ?? tagline}
        </p>
      </div>
    </div>
  );
}

/**
 * Wraps the card in the type-appropriate entrance animation and a fade-out
 * timer so the entire alert auto-dismisses around 5s after mount.
 */
export function AlertCard(props: AlertCardProps) {
  const animationClass =
    props.type === "follow"
      ? "animate-bloom"
      : props.type === "sub"
      ? "animate-ribbon-unfurl"
      : "animate-heart-float";

  return (
    <div className="relative inline-block animate-fade-out">
      <div className={animationClass} style={{ transformOrigin: "center" }}>
        <div className="relative">
          {/* Type-specific decorative flourishes that bloom in with the card */}
          {props.type === "follow" && (
            <>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bloom">
                <Daisy size={68} />
              </div>
              <Sparkle size={22} className="absolute -top-6 -left-6 animate-sparkle" />
              <Sparkle size={18} className="absolute -top-4 -right-8 animate-sparkle" />
            </>
          )}
          {props.type === "sub" && (
            <>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-ribbon-unfurl">
                <Bow size={80} />
              </div>
              <Sparkle size={20} className="absolute -top-2 -left-10 animate-sparkle" />
              <Sparkle size={16} className="absolute -top-2 -right-10 animate-sparkle" />
              <Sparkle size={14} className="absolute -bottom-2 -left-6 animate-sparkle" />
              <Sparkle size={14} className="absolute -bottom-2 -right-6 animate-sparkle" />
            </>
          )}
          {props.type === "donation" && (
            <>
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 animate-heart-float">
                <Heart size={72} color="#E8A0BF" />
              </div>
              <Sparkle size={18} className="absolute -top-4 left-1/3 animate-sparkle" />
              <Sparkle size={20} className="absolute -top-2 right-1/3 animate-sparkle" />
            </>
          )}

          <CardBody {...props} />
        </div>
      </div>
    </div>
  );
}

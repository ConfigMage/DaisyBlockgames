import { Bow } from "./Bow";
import { Heart } from "./Heart";
import { channel } from "@/lib/theme";

type ChannelBannerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * The "DaisyBlockGames" header banner — a stitched pill with a bow on the left
 * side and tiny hearts flanking the title. Matches the top-of-overlay banner
 * in the mockup.
 */
export function ChannelBanner({ size = "md", className }: ChannelBannerProps) {
  const sizing = {
    sm: { fs: "text-2xl", py: "py-1.5", px: "px-7", bow: 36 },
    md: { fs: "text-4xl", py: "py-2", px: "px-12", bow: 52 },
    lg: { fs: "text-6xl", py: "py-3", px: "px-16", bow: 72 },
  }[size];

  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      <div
        className={`stitch-border-thick paper-cream ${sizing.py} ${sizing.px} flex items-center gap-3 shadow-soft`}
      >
        <Heart size={size === "lg" ? 22 : 16} color="#E8A0BF" outlineColor="#C9A84C" />
        <span
          className={`font-display ${sizing.fs} text-cocoa leading-none whitespace-nowrap`}
        >
          {channel.name}
        </span>
        <Heart size={size === "lg" ? 22 : 16} color="#E8A0BF" outlineColor="#C9A84C" />
      </div>
      <Bow
        size={sizing.bow}
        className="absolute -top-3 -left-2 drop-shadow-sm"
      />
    </div>
  );
}

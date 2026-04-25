import { HeartRow } from "@/components/ui/Heart";
import { Sparkle } from "@/components/ui/Sparkle";
import {
  TwitchIcon,
  YouTubeIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";
import { channel } from "@/lib/theme";

type BottomBarProps = {
  nowPlaying?: string;
  health?: number;
};

export function BottomBar({
  nowPlaying = "Minecraft — Cottage Build, Day 12",
  health = 4,
}: BottomBarProps) {
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-2.5 paper-cream stitch-border w-full">
      {/* Now playing */}
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gold/30 border border-dashed border-gold-stitch">
          <span className="text-xs">▶</span>
        </div>
        <span className="font-display text-cocoa text-xl leading-none">
          now playing:
        </span>
        <span className="font-body text-cocoa/80 text-sm truncate">
          {nowPlaying}
        </span>
      </div>

      {/* Health hearts */}
      <div className="flex items-center gap-2 shrink-0">
        <HeartRow filled={health} total={5} />
        <Sparkle size={14} className="opacity-70" />
      </div>

      {/* Socials */}
      <div className="flex items-center gap-3 shrink-0">
        <span className="font-display text-cocoa text-xl leading-none">
          follow me!
        </span>
        <TwitchIcon size={20} />
        <YouTubeIcon size={20} />
        <InstagramIcon size={20} />
        <TikTokIcon size={20} />
        <span className="font-body text-cocoa/80 text-sm ml-1">
          {channel.handle}
        </span>
      </div>
    </div>
  );
}

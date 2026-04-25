"use client";

import { Frame } from "@/components/ui/Frame";
import { ChannelBanner } from "@/components/ui/ChannelBanner";
import { Daisy, DaisyStem } from "@/components/ui/Daisy";
import { Bow } from "@/components/ui/Bow";
import { Heart, HeartRow } from "@/components/ui/Heart";
import { Sparkle } from "@/components/ui/Sparkle";
import {
  TwitchIcon,
  YouTubeIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";
import { channel } from "@/lib/theme";
import { OverlayResponsive } from "./OverlayResponsive";

type OverlayProps = {
  /** When true, renders the 1920x1080 layout scaled to fit the parent (preview).
   *  When false, lays out at the OBS reference 1920x1080 dimensions. */
  responsive?: boolean;
  nowPlaying?: string;
  health?: number;
};

/**
 * The complete OBS game overlay at 1920x1080.
 *  - Channel banner: top-center, overlapping the gameplay frame
 *  - Gameplay frame: top-left, ~70% width — contains the now-playing/hearts/socials bar at its bottom edge
 *  - Chat panel: right side, full height
 *  - Webcam frame: bottom-left, ~25% width
 *
 * `responsive` mode uses CSS scale() so the preview is a faithful miniature
 * at any size, instead of relying on flex/grid to shrink the contents.
 */
export function Overlay({
  responsive = false,
  nowPlaying = "Minecraft — Cottage Build, Day 12",
  health = 4,
}: OverlayProps) {
  if (responsive) {
    return (
      <OverlayResponsive>
        <OverlayBody nowPlaying={nowPlaying} health={health} />
      </OverlayResponsive>
    );
  }

  return (
    <div className="relative w-[1920px] h-[1080px]">
      <OverlayBody nowPlaying={nowPlaying} health={health} />
    </div>
  );
}

function OverlayBody({
  nowPlaying,
  health,
}: {
  nowPlaying: string;
  health: number;
}) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 grid grid-cols-[2.4fr_1fr] grid-rows-[1.6fr_1fr] gap-5 p-7">
        {/* ============== GAMEPLAY FRAME (top-left, large) ============== */}
        <Frame
          className="row-span-1 col-span-1 min-h-0 flex flex-col"
          cornerStems="bl"
          innerSparkles
          thick
        >
          {/* Channel banner overlapping the top edge */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
            <ChannelBanner size="md" />
          </div>

          {/* Decorative bits inside frame */}
          <Daisy size={34} className="absolute top-3 left-6" rotate={-8} />
          <Sparkle size={16} className="absolute top-12 left-24 opacity-70" />
          <Sparkle size={14} className="absolute top-6 right-24 opacity-60" />
          <Daisy size={26} className="absolute top-12 right-8" rotate={16} />
          <Heart size={14} color="#E8C85A" className="absolute top-32 right-16 opacity-70" />
          <Heart size={12} color="#E8C85A" className="absolute bottom-32 right-44 opacity-60" />

          {/* Gameplay capture region (transparent middle so OBS shows the game) */}
          <div className="relative flex-1 flex items-center justify-center">
            <span className="font-display text-3xl text-cocoa/30 select-none">
              ♡ gameplay capture ♡
            </span>
          </div>

          {/* Bottom integrated bar — sits inside the gameplay frame at its bottom */}
          <div className="relative mt-2 flex items-center justify-between gap-4 px-5 pb-3 pt-2 border-t border-dashed border-gold-stitch/50">
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

            <div className="flex items-center gap-2 shrink-0">
              <HeartRow filled={health} total={5} size={20} />
              <Sparkle size={14} className="opacity-70" />
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
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
        </Frame>

        {/* ============== CHAT PANEL (full-height, right side) ============== */}
        <Frame
          className="row-span-2 col-span-1 min-h-0 relative"
          cornerStems="br"
          innerSparkles
        >
          {/* Washi-tape "chat" tab, slightly tilted */}
          <div className="absolute -top-3 right-10 -rotate-6 z-10">
            <div className="washi-tape text-lg font-semibold">♡ chat ♡</div>
          </div>

          <Sparkle size={18} className="absolute top-10 left-8 opacity-60" />
          <Sparkle size={14} className="absolute top-24 right-16 opacity-60" />
          <Heart size={12} className="absolute top-32 right-10 opacity-60" />
          <Heart size={14} className="absolute top-48 right-14 opacity-50" />
          <Heart size={12} className="absolute top-72 right-8 opacity-50" />

          <div className="flex h-full w-full flex-col items-center justify-center p-8 text-cocoa/40">
            <span className="font-display text-2xl opacity-50">
              ♡ live chat ♡
            </span>
          </div>
        </Frame>

        {/* ============== WEBCAM (bottom-left) ============== */}
        <div className="row-start-2 col-start-1">
          <Frame
            className="relative h-full w-[420px]"
            label="webcam"
            labelPosition="top"
            cornerDaisies={false}
          >
            <Bow size={48} className="absolute -top-3 -left-3" />
            <Heart size={14} color="#E8A0BF" className="absolute top-6 left-10" />
            <Heart size={12} color="#E8A0BF" className="absolute top-14 left-7 opacity-70" />
            <Sparkle size={16} className="absolute top-10 right-8 opacity-70" />
            <Sparkle size={14} className="absolute bottom-20 left-12 opacity-70" />
            <DaisyStem size={120} className="absolute -bottom-4 -right-3" flip />
            <Daisy size={28} className="absolute -bottom-3 left-6" rotate={-12} />

            <div className="flex h-full w-full items-center justify-center text-cocoa/30 font-display text-2xl">
              ♡ webcam ♡
            </div>
          </Frame>
        </div>
      </div>
    </div>
  );
}

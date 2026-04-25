import { Frame } from "@/components/ui/Frame";
import { PetalRain } from "@/components/ui/PetalRain";
import { DriftingClouds } from "@/components/ui/DriftingClouds";
import { TeddyBear } from "@/components/ui/TeddyBear";
import { Daisy, DaisyStem } from "@/components/ui/Daisy";
import { Bow } from "@/components/ui/Bow";
import { Heart } from "@/components/ui/Heart";
import { Sparkle } from "@/components/ui/Sparkle";
import { channel } from "@/lib/theme";

export const metadata = {
  title: "DaisyBlockGames — Be Right Back",
};

export default function BrbPage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      <DriftingClouds count={6} />
      <PetalRain count={18} />

      <Frame
        className="relative w-[min(960px,80vw)] aspect-[16/9] flex flex-col items-center justify-center"
        cornerStems="all"
        innerSparkles
        thick
      >
        <Bow size={56} className="absolute -top-6 right-12" />
        <Daisy size={42} className="absolute -top-4 left-14 animate-sway" rotate={-8} />
        <Sparkle size={20} className="absolute top-12 right-32 opacity-80" />
        <Heart size={16} color="#E8A0BF" className="absolute top-24 right-20" />
        <Heart size={14} color="#E8A0BF" className="absolute top-32 left-24 opacity-80" />

        <h1 className="font-display text-cocoa text-[8rem] leading-none flex items-center gap-5">
          <Heart size={32} color="#E8A0BF" />
          be right back
          <Heart size={32} color="#E8A0BF" />
        </h1>

        <p className="font-display text-cocoa/70 text-3xl mt-2">
          ♡ {channel.name.toLowerCase()} ♡
        </p>

        <p className="font-body text-cocoa/60 text-base mt-4 italic">
          getting a snack — back in a few ♡
        </p>

        {/* Teddy bear sits at the bottom-right corner */}
        <div className="absolute -bottom-4 -right-2 animate-sway" style={{ transformOrigin: "bottom center" }}>
          <TeddyBear size={150} />
        </div>

        {/* Swaying daisy cluster bottom-left */}
        <div className="absolute -bottom-3 -left-3 animate-sway" style={{ transformOrigin: "bottom center" }}>
          <DaisyStem size={130} />
        </div>
      </Frame>
    </main>
  );
}

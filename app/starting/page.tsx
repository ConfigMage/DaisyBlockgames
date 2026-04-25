import { Frame } from "@/components/ui/Frame";
import { PetalRain } from "@/components/ui/PetalRain";
import { SparkleField } from "@/components/ui/Sparkle";
import { Countdown } from "@/components/ui/Countdown";
import { Daisy, DaisyStem } from "@/components/ui/Daisy";
import { Bow } from "@/components/ui/Bow";
import { Heart } from "@/components/ui/Heart";
import { Sparkle } from "@/components/ui/Sparkle";
import { channel } from "@/lib/theme";

export const metadata = {
  title: "DaisyBlockGames — Starting Soon",
};

type StartingPageProps = {
  searchParams: Promise<{ minutes?: string }>;
};

export default async function StartingPage({ searchParams }: StartingPageProps) {
  const params = await searchParams;
  const minutes = Math.max(
    0,
    Math.min(60, Number(params.minutes ?? "5") || 5),
  );

  return (
    <main className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      {/* Background petals + sparkles cover the entire viewport */}
      <PetalRain count={28} />
      <SparkleField density={0.7} />

      <Frame
        className="relative w-[min(960px,80vw)] aspect-[16/9] flex flex-col items-center justify-center"
        cornerStems="all"
        innerSparkles
        thick
      >
        {/* Top decorations */}
        <Bow size={56} className="absolute -top-6 left-12" />
        <Daisy size={42} className="absolute -top-4 right-14" rotate={18} />
        <Sparkle size={20} className="absolute top-10 left-32 opacity-80" />
        <Sparkle size={16} className="absolute top-16 right-32 opacity-70" />
        <Heart size={16} color="#E8A0BF" className="absolute top-24 left-20" />
        <Heart size={14} color="#E8A0BF" className="absolute top-32 right-24 opacity-80" />

        <h1 className="font-display text-cocoa text-[8rem] leading-none flex items-center gap-4">
          <Sparkle size={36} className="opacity-80" />
          starting soon
          <Sparkle size={36} className="opacity-80" />
        </h1>

        <p className="font-display text-cocoa/70 text-3xl mt-2">
          ♡ {channel.name.toLowerCase()} ♡
        </p>

        {/* Countdown */}
        <div className="mt-6 flex items-center gap-3">
          <Heart size={20} color="#E8C85A" />
          <Countdown
            initialMinutes={minutes}
            className="text-cocoa text-5xl"
          />
          <Heart size={20} color="#E8C85A" />
        </div>

        <p className="font-body text-cocoa/60 text-base mt-2 italic">
          stretching, brewing tea, getting cozy…
        </p>
      </Frame>

      {/* Drifting cloud daisies in the bg corners */}
      <div className="pointer-events-none absolute -bottom-6 -left-4 opacity-80">
        <DaisyStem size={140} />
      </div>
      <div className="pointer-events-none absolute -bottom-6 -right-4 opacity-80">
        <DaisyStem size={140} flip />
      </div>
    </main>
  );
}

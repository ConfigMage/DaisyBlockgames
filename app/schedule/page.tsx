import { Frame } from "@/components/ui/Frame";
import { ChannelBanner } from "@/components/ui/ChannelBanner";
import { Daisy } from "@/components/ui/Daisy";
import { Heart } from "@/components/ui/Heart";
import { Sparkle } from "@/components/ui/Sparkle";
import { BlockIcon, MugIcon } from "@/components/ui/SocialIcons";
import { schedule, channel } from "@/lib/theme";

export const metadata = {
  title: "DaisyBlockGames — Stream Schedule",
};

const emojiFor = (key: string) => {
  if (key === "block") return <BlockIcon size={22} />;
  if (key === "rest") return <MugIcon size={22} />;
  return <Sparkle size={20} />;
};

export default function SchedulePage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        {/* Header banner */}
        <div className="flex justify-center mb-10">
          <ChannelBanner size="md" />
        </div>

        <h1 className="font-display text-cocoa text-5xl sm:text-6xl text-center flex items-center justify-center gap-3">
          <Heart size={20} color="#E8A0BF" />
          weekly schedule
          <Heart size={20} color="#E8A0BF" />
        </h1>
        <p className="font-body text-center text-cocoa/70 italic mt-1">
          all times in PST — drop in and say hi ♡
        </p>

        <Frame
          className="mt-8 px-6 sm:px-10 py-8 sm:py-10"
          cornerStems="bl+br"
          innerSparkles
          thick
        >
          <ul className="divide-y divide-dashed divide-gold-stitch/40">
            {schedule.map((row) => {
              const isOff = row.title === "—";
              return (
                <li
                  key={row.day}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-4"
                >
                  <div className="flex items-center gap-3 sm:w-44 shrink-0">
                    <Daisy size={26} rotate={-10} />
                    <span className="font-display text-3xl text-cocoa leading-none">
                      {row.day}
                    </span>
                  </div>

                  <div className="flex-1 flex items-center gap-3">
                    <span className="shrink-0">{emojiFor(row.emoji)}</span>
                    <div className="min-w-0">
                      <p
                        className={`font-display text-2xl leading-tight ${
                          isOff ? "text-cocoa/50" : "text-cocoa"
                        }`}
                      >
                        {row.title}
                      </p>
                      <p className="font-body text-sm text-cocoa/70">
                        {row.time}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Frame>

        <p className="font-body text-center text-cocoa/60 text-sm mt-8">
          {channel.handle} · schedule is subject to cozy change ♡
        </p>
      </div>
    </main>
  );
}

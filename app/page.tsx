import Link from "next/link";
import { ChannelBanner } from "@/components/ui/ChannelBanner";
import { Frame } from "@/components/ui/Frame";
import { Daisy, DaisyStem } from "@/components/ui/Daisy";
import { Bow } from "@/components/ui/Bow";
import { Heart } from "@/components/ui/Heart";
import { Sparkle, SparkleField } from "@/components/ui/Sparkle";
import { TeddyBear } from "@/components/ui/TeddyBear";
import { Overlay } from "@/components/overlay/Overlay";
import { DemoCycle } from "@/components/alerts/DemoCycle";
import { PetalRain } from "@/components/ui/PetalRain";
import { Countdown } from "@/components/ui/Countdown";
import { CopyableUrl } from "@/components/home/CopyableUrl";
import { PreviewFrame } from "@/components/home/PreviewFrame";
import { schedule, channel } from "@/lib/theme";
import { BlockIcon, MugIcon } from "@/components/ui/SocialIcons";

const widgets = [
  {
    title: "OBS Game Overlay",
    desc: "Full 1920x1080 overlay with stitched gameplay frame, chat panel, webcam, and bottom bar.",
    href: "/overlay",
    obs: "/overlay?transparent=true",
    size: "1920 × 1080",
  },
  {
    title: "Alerts",
    desc: "Animated follower / subscriber / donation cards with theme-appropriate entrances.",
    href: "/alerts",
    obs: "/alerts?type=follow&username=TestViewer&transparent=true",
    size: "800 × 400",
  },
  {
    title: "Starting Soon",
    desc: "Countdown timer with falling petals and sparkles. Configure with ?minutes=N.",
    href: "/starting?minutes=5",
    obs: "/starting?minutes=5&transparent=true",
    size: "1920 × 1080",
  },
  {
    title: "Be Right Back",
    desc: "Idle screen with drifting clouds, swaying daisies, and a sleepy teddy bear.",
    href: "/brb",
    obs: "/brb?transparent=true",
    size: "1920 × 1080",
  },
  {
    title: "Schedule",
    desc: "Weekly stream schedule — works as a standalone page or an embeddable Twitch panel.",
    href: "/schedule",
    obs: "/schedule",
    size: "responsive",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <SparkleField density={0.4} />
      <div className="pointer-events-none absolute -top-6 -left-6 opacity-70">
        <DaisyStem size={150} />
      </div>
      <div className="pointer-events-none absolute -top-6 -right-6 opacity-70">
        <DaisyStem size={150} flip />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16">
        {/* ============== HERO ============== */}
        <section className="text-center">
          <div className="flex justify-center">
            <ChannelBanner size="lg" />
          </div>
          <p className="mt-6 font-display text-3xl text-cocoa/80">
            ♡ a cozy streaming toolkit ♡
          </p>
          <p className="mt-2 font-body text-cocoa/70 max-w-2xl mx-auto">
            cottagecore overlays, alerts, and widgets for {channel.name} — built
            with React + CSS, no plugins required. drop the URLs below into OBS as
            browser sources.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {widgets.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="font-body text-sm px-4 py-2 rounded-full bg-cream-card border-2 border-dashed border-gold-stitch hover:bg-gold/20 text-cocoa transition"
              >
                {w.title.toLowerCase()}
              </Link>
            ))}
          </div>
        </section>

        {/* ============== SHOWCASE GRID ============== */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* OBS overlay — large preview, shrunk via CSS scale */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-cocoa text-3xl mb-3 flex items-center gap-2">
              <Sparkle size={20} /> OBS overlay <Sparkle size={20} />
            </h2>
            <PreviewFrame>
              <div className="absolute inset-0">
                <Overlay responsive />
              </div>
            </PreviewFrame>
            <div className="mt-3">
              <CopyableUrl
                path="/overlay?transparent=true"
                label="OBS browser source URL"
                hint="add at 1920×1080, custom CSS not required"
              />
            </div>
          </div>

          {/* Alerts demo */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-cocoa text-3xl mb-3 flex items-center gap-2">
              <Heart size={20} color="#E8A0BF" /> alerts <Heart size={20} color="#E8A0BF" />
            </h2>
            <PreviewFrame aspect="4/3">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="scale-75 origin-center">
                  <DemoCycle />
                </div>
              </div>
            </PreviewFrame>
            <div className="mt-3 space-y-3">
              <CopyableUrl
                path="/alerts?type=follow&username=TestViewer&transparent=true"
                label="Follower alert"
              />
              <CopyableUrl
                path="/alerts?type=sub&username=TestViewer&message=tier+1&transparent=true"
                label="Subscriber alert"
              />
              <CopyableUrl
                path="/alerts?type=donation&username=TestViewer&amount=%245.00&transparent=true"
                label="Donation alert"
              />
            </div>
          </div>

          {/* Starting Soon */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-cocoa text-3xl mb-3 flex items-center gap-2">
              <Sparkle size={20} /> starting soon <Sparkle size={20} />
            </h2>
            <PreviewFrame>
              <div className="absolute inset-0 overflow-hidden">
                <PetalRain count={14} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="font-display text-cocoa text-5xl flex items-center gap-2">
                    <Sparkle size={20} /> starting soon <Sparkle size={20} />
                  </p>
                  <p className="font-display text-cocoa/70 text-xl mt-1">
                    ♡ {channel.name.toLowerCase()} ♡
                  </p>
                  <Countdown
                    initialMinutes={5}
                    className="text-cocoa text-3xl mt-3"
                  />
                </div>
              </div>
            </PreviewFrame>
            <div className="mt-3">
              <CopyableUrl
                path="/starting?minutes=5&transparent=true"
                label="Starting Soon"
                hint="?minutes=5 sets the countdown"
              />
            </div>
          </div>

          {/* BRB */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-cocoa text-3xl mb-3 flex items-center gap-2">
              <Heart size={20} color="#E8A0BF" /> be right back <Heart size={20} color="#E8A0BF" />
            </h2>
            <PreviewFrame>
              <div className="absolute inset-0 overflow-hidden">
                <PetalRain count={10} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="font-display text-cocoa text-5xl flex items-center gap-3">
                    <Heart size={22} color="#E8A0BF" />
                    be right back
                    <Heart size={22} color="#E8A0BF" />
                  </p>
                  <p className="font-display text-cocoa/70 text-xl mt-1">
                    ♡ {channel.name.toLowerCase()} ♡
                  </p>
                </div>
                <div className="absolute -bottom-3 right-3 animate-sway">
                  <TeddyBear size={90} />
                </div>
                <div className="absolute -bottom-2 left-2 animate-sway">
                  <DaisyStem size={80} />
                </div>
              </div>
            </PreviewFrame>
            <div className="mt-3">
              <CopyableUrl
                path="/brb?transparent=true"
                label="Be Right Back"
              />
            </div>
          </div>

          {/* Schedule */}
          <div className="lg:col-span-12">
            <h2 className="font-display text-cocoa text-3xl mb-3 flex items-center gap-2">
              <Daisy size={22} /> weekly schedule <Daisy size={22} />
            </h2>
            <Frame
              className="px-6 py-6"
              cornerStems="bl+br"
              innerSparkles
              thick
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {schedule.map((row) => {
                  const isOff = row.title === "—";
                  return (
                    <div
                      key={row.day}
                      className={`paper-cream rounded-xl border border-dashed border-gold-stitch p-4 flex flex-col items-center text-center gap-1.5 ${
                        isOff ? "opacity-70" : ""
                      }`}
                    >
                      <span className="font-display text-cocoa text-2xl leading-none">
                        {row.day.slice(0, 3).toLowerCase()}
                      </span>
                      <span>
                        {row.emoji === "block" ? (
                          <BlockIcon size={28} />
                        ) : row.emoji === "rest" ? (
                          <MugIcon size={26} />
                        ) : (
                          <Sparkle size={24} />
                        )}
                      </span>
                      <span
                        className={`font-display text-lg leading-tight ${
                          isOff ? "text-cocoa/50" : "text-cocoa"
                        }`}
                      >
                        {row.title}
                      </span>
                      <span className="font-body text-[11px] text-cocoa/70 leading-tight">
                        {row.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Frame>
            <div className="mt-3 max-w-md">
              <CopyableUrl path="/schedule" label="Schedule page" />
            </div>
          </div>
        </section>

        {/* ============== OBS GUIDE ============== */}
        <section className="mt-20">
          <h2 className="font-display text-cocoa text-4xl text-center flex items-center justify-center gap-3">
            <Bow size={40} /> OBS setup guide <Bow size={40} />
          </h2>

          <Frame className="mt-8 px-8 py-8" cornerStems="all" thick>
            <ol className="space-y-5 font-body text-cocoa/80 list-none">
              <li className="flex gap-4">
                <span className="font-display text-3xl text-gold-deep leading-none">1.</span>
                <div>
                  <p className="font-display text-2xl text-cocoa leading-tight">
                    add a browser source in OBS
                  </p>
                  <p className="text-sm">
                    sources panel → <code className="bg-cream-card px-1.5 rounded">+</code> → browser → name it (e.g. "daisy overlay") → ok.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-3xl text-gold-deep leading-none">2.</span>
                <div>
                  <p className="font-display text-2xl text-cocoa leading-tight">
                    paste a widget URL
                  </p>
                  <p className="text-sm">
                    use one of the URLs above. always append{" "}
                    <code className="bg-cream-card px-1.5 rounded">?transparent=true</code>{" "}
                    so OBS sees a transparent background.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-3xl text-gold-deep leading-none">3.</span>
                <div>
                  <p className="font-display text-2xl text-cocoa leading-tight">
                    set the dimensions
                  </p>
                  <p className="text-sm">
                    width <strong>1920</strong>, height <strong>1080</strong> for full-screen widgets.
                    alerts can be smaller (e.g. 800 × 400).
                    leave the FPS at 30 unless you want buttery animations.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-3xl text-gold-deep leading-none">4.</span>
                <div>
                  <p className="font-display text-2xl text-cocoa leading-tight">
                    layer it above your game capture
                  </p>
                  <p className="text-sm">
                    the overlay's gameplay region is intentionally see-through —
                    just place your game capture source <em>below</em> the overlay
                    in the source list and you're done.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-3xl text-gold-deep leading-none">5.</span>
                <div>
                  <p className="font-display text-2xl text-cocoa leading-tight">
                    bonus — refresh on scene change
                  </p>
                  <p className="text-sm">
                    enable "shutdown source when not visible" + "refresh browser when scene becomes active"
                    so timers and alerts re-trigger fresh each scene.
                  </p>
                </div>
              </li>
            </ol>
          </Frame>
        </section>

        <footer className="mt-16 text-center font-body text-cocoa/60 text-sm">
          made with daisies + ♡ for {channel.name}
        </footer>
      </div>
    </main>
  );
}

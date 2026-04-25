import { Overlay } from "@/components/overlay/Overlay";

export const metadata = {
  title: "DaisyBlockGames — OBS Overlay",
};

/**
 * The OBS browser source overlay. Designed at 1920x1080.
 * Add `?transparent=true` to the URL to make the html background transparent.
 */
export default function OverlayPage() {
  return (
    <main className="overflow-hidden h-screen w-screen flex items-start justify-start">
      <Overlay />
    </main>
  );
}

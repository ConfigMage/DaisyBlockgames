import type { Metadata } from "next";
import { Caveat, Quicksand } from "next/font/google";
import "./globals.css";
import { TransparentMode } from "@/components/ui/TransparentMode";

const display = Caveat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DaisyBlockGames — Stream Toolkit",
  description:
    "Cottagecore streaming overlays, alerts and widgets for DaisyBlockGames.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <TransparentMode />
        {children}
      </body>
    </html>
  );
}

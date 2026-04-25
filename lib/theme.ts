export const colors = {
  cream: "#FDF6E3",
  creamCard: "#FFFDF5",
  gold: "#E8C85A",
  goldDeep: "#D4A843",
  goldStitch: "#C9A84C",
  sage: "#7B9E6B",
  cocoa: "#6B5B3E",
  blush: "#E8A0BF",
} as const;

export const channel = {
  name: "DaisyBlockGames",
  handle: "@daisyblockgames",
  tagline: "cozy gaming + cottagecore vibes",
  socials: ["twitch", "youtube", "instagram", "tiktok"] as const,
} as const;

export const schedule = [
  { day: "Monday", time: "7:00 PM – 10:00 PM PST", title: "Minecraft", emoji: "block" },
  { day: "Tuesday", time: "off — rest day", title: "—", emoji: "rest" },
  { day: "Wednesday", time: "7:00 PM – 10:00 PM PST", title: "Minecraft", emoji: "block" },
  { day: "Thursday", time: "off — rest day", title: "—", emoji: "rest" },
  { day: "Friday", time: "7:00 PM – 10:00 PM PST", title: "Minecraft", emoji: "block" },
  { day: "Saturday", time: "2:00 PM – 6:00 PM PST", title: "Variety", emoji: "sparkle" },
  { day: "Sunday", time: "off — rest day", title: "—", emoji: "rest" },
] as const;

export type SocialKey = (typeof channel.socials)[number];

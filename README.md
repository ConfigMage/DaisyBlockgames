# DaisyBlockGames Stream Toolkit

A cottagecore/kawaii streaming overlay suite for OBS, deployable to Vercel.

## Getting Started with Claude Code

1. Open this directory in Claude Code
2. Paste the session prompt below to kick off the build

## Session Prompt

Copy and paste this into Claude Code:

```
I'm building a streaming toolkit for "DaisyBlockGames" — a Twitch channel with a cottagecore/kawaii aesthetic (daisies, bows, teddy bears, warm cream/gold/sage palette).

Read CLAUDE.md for the full spec. Here's the build order:

## Phase 1 — Foundation
1. Initialize Next.js (App Router) + TypeScript + Tailwind
2. Set up the design system: color tokens, fonts (Google Fonts), shared decorative components (Daisy, Bow, Heart, Sparkle SVGs as React components)
3. Build the theme provider and global styles

## Phase 2 — Core Widgets
4. Build the OBS overlay page (/overlay) — 1920x1080 transparent layout with all frame regions, stitched borders, daisy corners, bottom bar
5. Build the Starting Soon page (/starting) — countdown timer, floating petals, sparkle particles
6. Build the BRB page (/brb) — idle animations, swaying daisies

## Phase 3 — Interactive Widgets
7. Build the alert widgets (/alerts) — follower/sub/donation with themed CSS animations and demo mode
8. Build the schedule page (/schedule) — weekly grid with placeholder data, mobile responsive

## Phase 4 — Polish & Deploy
9. Build the preview/showcase homepage (/) with live widget previews, OBS guide, and copy-able URLs
10. Deploy to Vercel, verify all routes work as browser sources

Start with Phase 1. Build each decorative SVG component with care — these set the visual tone for everything else. Show me the daisy and bow components first before moving on.
```

## Vercel Deployment

Once the project is built:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## OBS Browser Source URLs

After deploying, add these as Browser Sources in OBS (1920x1080):

| Widget | URL |
|---|---|
| Game Overlay | `https://your-project.vercel.app/overlay?transparent=true` |
| Alerts | `https://your-project.vercel.app/alerts?type=follow&username=TestViewer` |
| Starting Soon | `https://your-project.vercel.app/starting?minutes=5&transparent=true` |
| Be Right Back | `https://your-project.vercel.app/brb?transparent=true` |
| Schedule | `https://your-project.vercel.app/schedule` |

## Future Ideas
- Twitch chat bot (tmi.js) with custom commands (!schedule, !socials, !lurk, !daisy)
- Spotify "Now Playing" widget
- Channel points redemption overlay
- Sub goal tracker — animated daisy garden where each sub grows a new flower
- Sound alert integration with cozy chime .mp3s
- Admin panel to update schedule without redeploying

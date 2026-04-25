# DaisyBlockGames Stream Toolkit

## Project Overview
A monorepo web app providing a complete streaming overlay & widget suite for "DaisyBlockGames" — a Twitch/streaming channel with a cottagecore/kawaii aesthetic. Daisies, soft bows, teddy bears, warm cream/gold/sage palette. All components must be dual-purpose: viewable as a polished Vercel-hosted preview site AND usable as individual OBS browser sources.

## Brand & Design System
- **Channel Name**: DaisyBlockGames
- **Aesthetic**: Cottagecore meets kawaii — soft, warm, whimsical. Daisies, ribbon bows, teddy bears, sparkles, hearts, washi tape accents, stitched borders
- **Color Palette**:
  - Background: #FDF6E3 (warm cream)
  - Primary: #E8C85A (golden yellow)
  - Secondary: #D4A843 (deeper gold)
  - Accent: #7B9E6B (sage green, for leaves/stems)
  - Text: #6B5B3E (warm brown)
  - Border/Stitch: #C9A84C (gold outline)
  - Hearts/Bows: #E8A0BF (soft pink)
  - Card BG: #FFFDF5 (off-white)
- **Fonts**:
  - Display/Headers: A handwritten or rounded serif Google Font (e.g., "Caveat", "Pangolin", or "Bubblegum Sans")
  - Body: A clean rounded sans (e.g., "Nunito" or "Quicksand")
- **Decorative Elements**: CSS-drawn or inline SVG daisies, bows, sparkle stars, small hearts, stitched dashed borders, washi-tape-style label tabs

## Architecture
- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS + CSS modules for complex animations
- **Deployment**: Vercel
- **Structure**:
  ```
  /app
    /page.tsx              ← Preview/showcase homepage (shows all widgets)
    /overlay/page.tsx      ← Full OBS game overlay (transparent BG)
    /alerts/page.tsx       ← Alert widget (follower/sub/donation)
    /starting/page.tsx     ← "Starting Soon" countdown timer
    /brb/page.tsx          ← "Be Right Back" screen
    /schedule/page.tsx     ← Weekly stream schedule (also embeddable)
  /components
    /ui                    ← Shared decorative components (Daisy, Bow, Heart, etc.)
    /overlay               ← Overlay-specific components
    /alerts                ← Alert animation components
  /lib
    /theme.ts              ← Design tokens & shared constants
  /public
    /fonts
    /sounds                ← Alert sound placeholders
  ```

## Key Requirements

### 1. OBS Overlay (`/overlay`)
- Transparent background (CSS: `background: transparent`)
- Frame regions matching the mockup layout:
  - Large gameplay window (top-left) with stitched border, daisy corners
  - Chat box (top-right) with washi-tape "chat" label
  - Webcam frame (bottom-left) with daisy decorations
  - Bottom bar: "now playing" left, heart health icons center, social links right
  - Channel name header: "DaisyBlockGames" with bow accent
- All frames are CSS-only or inline SVG — no external image dependencies
- Must be a single page, 1920x1080 reference resolution
- Add `?transparent=true` query param support that sets `html { background: transparent }` for OBS

### 2. Animated Alert Widgets (`/alerts`)
- Three alert types: new follower, new subscriber, new donation
- Each alert animates in with theme-appropriate effects:
  - Follower: daisy blooming open with petals, gentle bounce
  - Subscriber: bow/ribbon unfurling, sparkle burst
  - Donation: heart floating up with golden shimmer
- Display username and message in styled card
- Auto-dismiss after ~5 seconds with fade-out
- Demo mode: cycle through sample alerts on the preview page
- Support query params: `?type=follow&username=TestUser&message=Hello`
- Transparent background for OBS browser source

### 3. Stream Schedule Page (`/schedule`)
- Weekly schedule grid showing days/times
- Styled with the cottagecore theme — stitched borders, daisy accents
- Placeholder data (she can update later):
  - Mon/Wed/Fri: 7:00 PM - 10:00 PM PST — Minecraft
  - Saturday: 2:00 PM - 6:00 PM PST — Variety
- Mobile-responsive for link sharing
- Works standalone AND as embeddable Twitch panel content

### 4. Starting Soon / BRB Screens (`/starting`, `/brb`)
- "Starting Soon" page:
  - Large animated text: "starting soon" in display font
  - Countdown timer (configurable via query param: `?minutes=5`)
  - Floating daisy petals CSS animation
  - Subtle sparkle particles
  - "DaisyBlockGames" branding below
- "Be Right Back" page:
  - Similar aesthetic but with "be right back" text
  - Gentle idle animation (swaying daisies, drifting clouds or petals)
  - No countdown
- Both: transparent-friendly, 1920x1080 reference

## OBS Integration Notes
- Every widget page should support `?transparent=true` to force transparent HTML background
- Pages should have no scrollbars: `overflow: hidden`
- Recommend adding a `/obs-guide` page or section on the homepage explaining:
  - How to add browser sources in OBS
  - Recommended dimensions for each widget
  - Which URLs to use

## Preview/Showcase Homepage
The root `/` page should be a beautiful preview that shows:
- Hero section with channel branding
- Live previews of each widget in mockup frames
- Quick-copy OBS browser source URLs
- Links to each widget page
- The OBS setup guide

## Development Notes
- Use CSS animations over JS where possible (better OBS performance)
- All decorative elements (daisies, bows, hearts) should be reusable React components
- Keep bundle size small — OBS browser sources have limited resources
- No external API calls from overlay/alert pages (they must work offline after load)

## Compact Session Summary Format
When I say "compact" or context is getting long, summarize progress as:
### Session State
- **Done**: [completed items]
- **Current**: [what we're working on]
- **Next**: [upcoming items]
- **Issues**: [any blockers]

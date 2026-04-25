type IconProps = { size?: number; className?: string; color?: string };

const def = "#6B5B3E";

export function TwitchIcon({ size = 22, className, color = def }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M4 3 L 3 7 V 19 H 7 V 22 L 10 19 H 14 L 21 12 V 3 Z M 19 11 L 16 14 H 12 L 9 17 V 14 H 5 V 5 H 19 Z M 11 7 H 13 V 12 H 11 Z M 16 7 H 18 V 12 H 16 Z"
      />
    </svg>
  );
}

export function YouTubeIcon({ size = 22, className, color = def }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M23 7.2c-.3-1.1-1.1-1.9-2.2-2.2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.8.5C2.1 5.3 1.3 6.1 1 7.2.5 9.1.5 12 .5 12s0 2.9.5 4.8c.3 1.1 1.1 1.9 2.2 2.2 1.9.5 8.8.5 8.8.5s6.9 0 8.8-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM10 15.5v-7l6 3.5-6 3.5z"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 22, className, color = def }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke={color} strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill={color} />
    </svg>
  );
}

export function TikTokIcon({ size = 22, className, color = def }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M16 3v3a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.3V16a5.5 5.5 0 1 1-5.5-5.5c.4 0 .7 0 1 .1v3.1a2.5 2.5 0 1 0 1.5 2.3V3z"
      />
    </svg>
  );
}

export function MailIcon({ size = 18, className, color = def }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="2" fill="none" stroke={color} strokeWidth="1.8" />
      <path d="M3 7l9 7 9-7" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ size = 18, className, color = def }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2.5" fill="none" stroke={color} strokeWidth="1.8" />
      <path d="M3 10h18" stroke={color} strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="14" r="1.2" fill={color} />
      <circle cx="12" cy="14" r="1.2" fill={color} />
      <circle cx="16" cy="14" r="1.2" fill={color} />
    </svg>
  );
}

export function MugIcon({ size = 18, className, color = def }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 8h12v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z" fill="#FFFDF5" stroke={color} strokeWidth="1.8" />
      <path d="M17 11h2a3 3 0 0 1 0 6h-2" fill="none" stroke={color} strokeWidth="1.8" />
      <path d="M8 5c0-1 1-1 1-2M11 5c0-1 1-1 1-2M14 5c0-1 1-1 1-2" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function BlockIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="6" fill="#7B9E6B" stroke="#4F7350" strokeWidth="1.4" />
      <rect x="3" y="9" width="18" height="12" fill="#9C6B3D" stroke="#6B4622" strokeWidth="1.4" />
      <rect x="6" y="11" width="3" height="3" fill="#7A4F2B" />
      <rect x="13" y="14" width="4" height="3" fill="#7A4F2B" />
      <rect x="5" y="4" width="2" height="3" fill="#9CB88A" />
      <rect x="11" y="4" width="3" height="3" fill="#9CB88A" />
    </svg>
  );
}

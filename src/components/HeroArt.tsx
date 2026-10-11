export function HeroArt() {
  return (
    <svg viewBox="0 0 800 600" width="800" height="600" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hero-wood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4a3022" />
          <stop offset="1" stopColor="#24160f" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="38%" cy="42%" r="40%">
          <stop offset="0" stopColor="#f0c27a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f0c27a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-page" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbf1dc" />
          <stop offset="1" stopColor="#e7d3ae" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#hero-wood)" />
      <rect width="800" height="600" fill="url(#hero-glow)" />
      <g transform="translate(250 150)">
        <path d="M20 40c40-28 90-36 150-28v250c-55-12-105-4-150 16Z" fill="url(#hero-page)" />
        <path d="M310 12c-50-8-100 0-150 28v238c50-20 100-28 150-16Z" fill="#f4e4c4" />
        <path d="M170 12v266" stroke="#8a6844" strokeWidth="6" />
        <path
          d="M210 90c30 20 40 8 70-10 18 28-10 48-34 42-30 24 8 46 36 34"
          fill="none"
          stroke="#7a5a3a"
          strokeWidth="2"
          opacity="0.7"
        />
        <path d="M48 110h90M48 132h70M48 154h82" stroke="#b89a74" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(150 120)">
        <rect x="28" y="70" width="36" height="150" rx="8" fill="#f3e6c8" />
        <ellipse cx="46" cy="70" rx="18" ry="8" fill="#fff6e4" />
        <path d="M46 18c10 16 16 28 16 40a16 16 0 0 1-32 0c0-12 6-24 16-40Z" fill="#f0a04a" />
        <path d="M46 30c5 8 8 14 8 20a8 8 0 0 1-16 0c0-6 3-12 8-20Z" fill="#fff3df" />
      </g>
      <g transform="translate(560 360)" fill="#1a120e" stroke="#e4c07a" strokeWidth="3">
        <path d="M40 8 72 28 72 68 40 88 8 68 8 28Z" />
        <circle cx="40" cy="48" r="4" fill="#e4c07a" stroke="none" />
      </g>
      <g transform="translate(620 300)" fill="#3a2418" stroke="#c4a36a" strokeWidth="3">
        <rect x="10" y="20" width="52" height="52" rx="8" transform="rotate(12 36 46)" />
      </g>
      <path
        d="M90 430c20-30 30-20 48-36 10 24-8 30-4 48-22 6-30 2-44-12Z"
        fill="#3f5a3a"
        opacity="0.85"
      />
    </svg>
  );
}

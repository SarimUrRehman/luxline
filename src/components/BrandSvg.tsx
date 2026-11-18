import React from 'react';
import { ServiceIconId } from '../config/siteConfig';

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

/**
 * Recreated LuxLine Mobile Car Detailing inline SVG logo:
 * - Single continuous gold line-art luxury coupe with extended trailing swoosh
 * - "LUXLINE" in thin wide-spaced gold capitals
 * - "MOBILE" beneath in slightly bolder spaced capitals
 * - "CAR DETAILING" in small spaced capitals at the bottom
 */
export const LuxLineLogo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'compact') {
    return (
      <svg
        viewBox="0 0 230 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="LuxLine Mobile Car Detailing"
      >
        <defs>
          <linearGradient id="luxLogoGoldCompact" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9A7424" />
            <stop offset="45%" stopColor="#E6CF8F" />
            <stop offset="100%" stopColor="#C9A24B" />
          </linearGradient>
        </defs>
        {/* Continuous coupe silhouette + trailing swoosh */}
        <path
          d="M12 24 C34 23.2, 54 22.2, 68 20.5 C78 13.5, 96 8.5, 118 8.5 C137 8.5, 152 14, 165 19.2 C180 20.2, 194 21.8, 198 25.5 C199 26.8, 196 27.6, 191 27.6 L177 27.6 C174 23.8, 167 23.8, 164 27.6 L98 27.6 C95 23.8, 88 23.8, 85 27.6 L55 27.6"
          stroke="url(#luxLogoGoldCompact)"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="115"
          y="47"
          textAnchor="middle"
          fill="url(#luxLogoGoldCompact)"
          style={{
            fontFamily: '"Cinzel", Georgia, serif',
            fontWeight: 400,
            fontSize: '17px',
            letterSpacing: '0.36em',
          }}
        >
          LUXLINE
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="LuxLine Mobile Car Detailing"
    >
      <defs>
        <linearGradient id="luxLogoGoldFull" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9A7424" />
          <stop offset="35%" stopColor="#E6CF8F" />
          <stop offset="70%" stopColor="#C9A24B" />
          <stop offset="100%" stopColor="#9A7424" />
        </linearGradient>
      </defs>

      {/* Single continuous luxury coupe line-art with extended trailing swoosh */}
      <path
        d="M14 38 C46 37.5, 72 35.5, 88 32.5 C103 22, 126 14.5, 156 14.5 C182 14.5, 202 22.5, 220 30.2 C239 31.6, 255 34.2, 260 39.2 C261 41.2, 257 42.4, 251 42.4 L232 42.4 C228 37.2, 219 37.2, 215 42.4 L126 42.4 C122 37.2, 113 37.2, 109 42.4 L66 42.4"
        stroke="url(#luxLogoGoldFull)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Subtle window glass contour */}
      <path
        d="M106 30 C118 22.2, 134 19, 154 19 C174 19, 190 23.2, 203 29.8"
        stroke="url(#luxLogoGoldFull)"
        strokeWidth="1.05"
        strokeLinecap="round"
        opacity="0.72"
      />

      {/* LUXLINE in thin, wide-spaced gold capitals */}
      <text
        x="140"
        y="69"
        textAnchor="middle"
        fill="url(#luxLogoGoldFull)"
        style={{
          fontFamily: '"Cinzel", Georgia, serif',
          fontWeight: 400,
          fontSize: '26px',
          letterSpacing: '0.34em',
        }}
      >
        LUXLINE
      </text>

      {/* MOBILE beneath in slightly bolder spaced capitals */}
      <text
        x="140"
        y="88"
        textAnchor="middle"
        fill="#C9A24B"
        style={{
          fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
          fontWeight: 500,
          fontSize: '11.5px',
          letterSpacing: '0.46em',
        }}
      >
        MOBILE
      </text>

      {/* CAR DETAILING in small spaced capitals at bottom */}
      <text
        x="140"
        y="104"
        textAnchor="middle"
        fill="#B3AEA3"
        style={{
          fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
          fontWeight: 400,
          fontSize: '7.8px',
          letterSpacing: '0.42em',
        }}
      >
        CAR DETAILING
      </text>
    </svg>
  );
};

/**
 * Large Hero Gold Line-Art Coupe Illustration
 * Built completely from inline SVG + CSS stroke-draw and light-sweep animations.
 */
export const HeroCoupeIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`} aria-hidden="true">
      {/* Subtle metallic light sweep overlay */}
      <div
        className="hero-light-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#E6CF8F]/15 to-transparent"
      />

      <svg
        viewBox="0 0 880 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="heroCoupeGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9A7424" stopOpacity="0.25" />
            <stop offset="18%" stopColor="#C9A24B" />
            <stop offset="52%" stopColor="#F2E2B1" />
            <stop offset="85%" stopColor="#C9A24B" />
            <stop offset="100%" stopColor="#9A7424" />
          </linearGradient>
          <linearGradient id="heroGroundGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A24B" stopOpacity="0" />
            <stop offset="30%" stopColor="#C9A24B" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#E6CF8F" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="heroGlow" cx="56%" cy="55%" r="45%">
            <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient radial sheen behind the coupe */}
        <ellipse cx="490" cy="165" rx="340" ry="110" fill="url(#heroGlow)" />

        {/* Extended aerodynamic trailing swoosh + continuous grand tourer coupe profile */}
        <path
          className="hero-coupe-stroke"
          d="M28 192 C110 189, 178 182, 224 170 C248 156, 266 135, 310 112 C360 86, 422 76, 492 78 C558 80, 616 105, 672 132 C730 140, 792 150, 822 174 C829 180, 830 192, 820 198 C806 205, 782 206, 754 206 C745 174, 704 166, 682 174 C664 180, 654 192, 650 206 L372 206 C364 174, 322 166, 300 174 C282 180, 272 192, 268 206 L154 206"
          stroke="url(#heroCoupeGold)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Upper greenhouse & side shoulder crease */}
        <path
          className="hero-coupe-stroke-secondary"
          d="M294 140 C338 112, 396 92, 476 92 C536 92, 586 108, 636 134 C554 139, 442 142, 294 140 Z"
          stroke="url(#heroCoupeGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.72"
        />

        {/* Sculpted body beltline & wheel rim hints */}
        <path
          className="hero-coupe-stroke-secondary"
          d="M224 170 C340 162, 520 156, 768 164"
          stroke="url(#heroCoupeGold)"
          strokeWidth="1.05"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle
          className="hero-coupe-stroke-secondary"
          cx="320"
          cy="206"
          r="34"
          stroke="url(#heroCoupeGold)"
          strokeWidth="1.6"
          opacity="0.82"
        />
        <circle
          className="hero-coupe-stroke-secondary"
          cx="320"
          cy="206"
          r="19"
          stroke="#C9A24B"
          strokeWidth="0.9"
          opacity="0.5"
        />
        <circle
          className="hero-coupe-stroke-secondary"
          cx="702"
          cy="206"
          r="34"
          stroke="url(#heroCoupeGold)"
          strokeWidth="1.6"
          opacity="0.82"
        />
        <circle
          className="hero-coupe-stroke-secondary"
          cx="702"
          cy="206"
          r="19"
          stroke="#C9A24B"
          strokeWidth="0.9"
          opacity="0.5"
        />

        {/* Headlight & taillight fine gold accents */}
        <path
          className="hero-coupe-stroke-secondary"
          d="M776 164 C792 166, 806 170, 814 176"
          stroke="#E6CF8F"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          className="hero-coupe-stroke-secondary"
          d="M234 166 L262 162"
          stroke="#E6CF8F"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Ground reflection line */}
        <line
          x1="48"
          y1="242"
          x2="848"
          y2="242"
          stroke="url(#heroGroundGold)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

/**
 * Custom thin gold line-art icons for the 6 service cards
 */
export const ServiceLineIcon: React.FC<{ icon: ServiceIconId; className?: string }> = ({
  icon,
  className = 'w-8 h-8',
}) => {
  const strokeColor = 'currentColor';
  switch (icon) {
    case 'interior':
      // Luxury car seat / cabin contour
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 6.5C12 5.4 12.9 4.5 14 4.5H17.5C18.6 4.5 19.5 5.4 19.5 6.5V9.5H12V6.5Z"
            stroke={strokeColor}
            strokeWidth="1.35"
          />
          <path
            d="M10.5 11.5L13 22.5H25.5C27.2 22.5 28.5 23.8 28.5 25.5V27.5H10.5C8.8 27.5 7.5 26.2 7.5 24.5L9.2 12.8C9.4 12 10 11.5 10.5 11.5Z"
            stroke={strokeColor}
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <path d="M10.5 31H26.5" stroke={strokeColor} strokeWidth="1.35" strokeLinecap="round" />
        </svg>
      );
    case 'exterior':
      // Coupe profile with water bead gloss lines
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <path
            d="M4 22.5H7.5M28.5 22.5H32M11 22.5H24.5M5.5 20.5C7 17.5 10.5 13 16.5 13C21.5 13 24.5 16 27.5 17.5C30 18.5 31.5 19.8 31.5 21.5"
            stroke={strokeColor}
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <circle cx="9.5" cy="22.5" r="2.3" stroke={strokeColor} strokeWidth="1.35" />
          <circle cx="26.5" cy="22.5" r="2.3" stroke={strokeColor} strokeWidth="1.35" />
          <path d="M18 6V9M13 7.5L14.5 9.5M23 7.5L21.5 9.5" stroke={strokeColor} strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );
    case 'full':
      // Crest / diamond shield around sleek coupe curve
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <path
            d="M18 4L30 9.5V18C30 25.2 24.8 30.2 18 32.5C11.2 30.2 6 25.2 6 18V9.5L18 4Z"
            stroke={strokeColor}
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 20C13 17 15.8 15.5 19 15.5C21.6 15.5 23.6 17.2 25.5 19"
            stroke={strokeColor}
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <path d="M12.5 22.5H23.5" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case 'polish':
      // Rotary polisher pad & mirror reflection gleam
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <circle cx="18" cy="18" r="9.5" stroke={strokeColor} strokeWidth="1.35" />
          <circle cx="18" cy="18" r="4" stroke={strokeColor} strokeWidth="1.2" />
          <path
            d="M18 4.5V7M18 29V31.5M4.5 18H7M29 18H31.5"
            stroke={strokeColor}
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'ceramic':
      // Layered hydrophobic shield droplet
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <path
            d="M18 5.5C18 5.5 26.5 14.2 26.5 20.2C26.5 24.9 22.7 28.5 18 28.5C13.3 28.5 9.5 24.9 9.5 20.2C9.5 14.2 18 5.5 18 5.5Z"
            stroke={strokeColor}
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <path
            d="M13.8 20.5C13.8 22.8 15.7 24.6 18 24.6"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'upholstery':
      // Woven textile / fabric & steam extraction lines
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <rect x="6.5" y="13" width="23" height="15" rx="2" stroke={strokeColor} strokeWidth="1.35" />
          <path
            d="M6.5 19H29.5M14 13V28M22 13V28"
            stroke={strokeColor}
            strokeWidth="1.15"
            opacity="0.8"
          />
          <path
            d="M13 8.5C13 7.2 14.2 6.8 14.2 5.5M18 9C18 7.5 19.2 7 19.2 5.5M23 8.5C23 7.2 24.2 6.8 24.2 5.5"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

/**
 * Styled SVG/CSS Before & After Placeholder Graphic
 */
export const BeforeAfterPlaceholderGraphic: React.FC<{
  mode: 'before' | 'after';
  label: string;
}> = ({ mode, label }) => {
  const isAfter = mode === 'after';
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden ${
        isAfter
          ? 'bg-gradient-to-br from-[#191610] via-[#12100B] to-[#0A0A0A]'
          : 'bg-gradient-to-br from-[#171717] via-[#121212] to-[#0C0C0C]'
      }`}
    >
      {/* Subtle architectural grid lines */}
      <svg
        viewBox="0 0 240 160"
        fill="none"
        className="w-28 h-20 mb-2 opacity-80"
        aria-hidden="true"
      >
        <path
          d="M24 106 C54 104, 72 95, 88 83 C104 71, 128 67, 154 71 C174 74, 192 84, 208 94 C216 98, 220 104, 214 108 L192 108 C188 100, 174 100, 170 108 L86 108 C82 100, 68 100, 64 108 L34 108"
          stroke={isAfter ? '#E6CF8F' : '#8A8478'}
          strokeWidth={isAfter ? '2' : '1.4'}
          strokeDasharray={isAfter ? undefined : '4 4'}
          strokeLinecap="round"
        />
        {isAfter && (
          <>
            <path d="M120 42 L123 50 L131 53 L123 56 L120 64 L117 56 L109 53 L117 50 Z" fill="#E6CF8F" opacity="0.85" />
            <line x1="30" y1="122" x2="210" y2="122" stroke="#C9A24B" strokeWidth="1" opacity="0.45" />
          </>
        )}
      </svg>
      <span
        className={`font-label text-[10px] tracking-[0.22em] uppercase text-center leading-relaxed ${
          isAfter ? 'text-[#E6CF8F]' : 'text-[#B3AEA3]'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

/**
 * Styled "Serving Sydney" Map-Style SVG Card (no external map embed)
 */
export const SydneyMapCard: React.FC<{ regions: readonly string[] }> = ({ regions }) => {
  return (
    <div className="border border-[#C9A24B]/30 bg-[#121212] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4 border-b border-[#C9A24B]/20 pb-3.5 mb-4">
        <div>
          <p className="font-label text-[10px] tracking-[0.28em] uppercase text-[#C9A24B]">
            Mobile Coverage
          </p>
          <h4 className="font-display text-xl tracking-[0.14em] uppercase text-white mt-0.5">
            Serving Greater Sydney
          </h4>
        </div>
        <span className="font-label text-[10px] tracking-[0.2em] uppercase text-[#B3AEA3] whitespace-nowrap">
          NSW · AU
        </span>
      </div>

      {/* Stylized Sydney Harbour & Region Vector Map */}
      <div className="relative w-full aspect-[16/9] bg-[#0B0B0B] border border-white/10 overflow-hidden mb-4">
        <svg
          viewBox="0 0 480 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label="Stylized map illustrating LuxLine Mobile Detailing service coverage across Sydney, NSW"
        >
          {/* Subtle grid */}
          <g stroke="#C9A24B" strokeOpacity="0.08" strokeWidth="1">
            <line x1="80" y1="0" x2="80" y2="270" />
            <line x1="160" y1="0" x2="160" y2="270" />
            <line x1="240" y1="0" x2="240" y2="270" />
            <line x1="320" y1="0" x2="320" y2="270" />
            <line x1="400" y1="0" x2="400" y2="270" />
            <line x1="0" y1="68" x2="480" y2="68" />
            <line x1="0" y1="135" x2="480" y2="135" />
            <line x1="0" y1="202" x2="480" y2="202" />
          </g>

          {/* Coastline & Sydney Harbour / Parramatta River stylized paths */}
          <path
            d="M368 0 C372 34, 386 58, 376 86 C366 110, 388 126, 372 150 C356 176, 368 212, 354 270"
            stroke="#C9A24B"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <path
            d="M372 134 C340 124, 304 136, 268 128 C230 120, 178 134, 128 128 C96 124, 68 132, 38 126"
            stroke="#C9A24B"
            strokeOpacity="0.28"
            strokeWidth="1.4"
          />
          {/* Botany Bay */}
          <path
            d="M360 198 C332 192, 314 206, 326 222 C336 232, 354 226, 358 216"
            stroke="#C9A24B"
            strokeOpacity="0.25"
            strokeWidth="1.2"
          />

          {/* Major arterial golden routes */}
          <path
            d="M116 146 Q216 142 308 136 T356 96"
            stroke="#E6CF8F"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <path
            d="M308 136 L278 216"
            stroke="#E6CF8F"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeDasharray="3 4"
          />

          {/* Coverage radius halo centered on Sydney */}
          <circle
            cx="285"
            cy="138"
            r="96"
            stroke="#C9A24B"
            strokeOpacity="0.22"
            strokeDasharray="4 4"
          />

          {/* Regional Gold Markers (Static crisp geometric diamonds/pins — no pulsing dots) */}
          {[
            { x: 312, y: 138, label: 'CBD', primary: true },
            { x: 350, y: 154, label: 'Eastern Suburbs' },
            { x: 306, y: 94, label: 'North Shore' },
            { x: 348, y: 62, label: 'Northern Beaches' },
            { x: 248, y: 152, label: 'Inner West' },
            { x: 146, y: 128, label: 'Parramatta' },
            { x: 274, y: 218, label: 'Sutherland' },
          ].map((pt) => (
            <g key={pt.label}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r={pt.primary ? 4.5 : 3}
                fill={pt.primary ? '#E6CF8F' : '#C9A24B'}
              />
              {pt.primary && (
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="9"
                  stroke="#E6CF8F"
                  strokeOpacity="0.55"
                  strokeWidth="1"
                />
              )}
              <text
                x={pt.x + 8}
                y={pt.y + 3}
                fill={pt.primary ? '#FFFFFF' : '#B3AEA3'}
                style={{
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  fontSize: pt.primary ? '9.5px' : '8px',
                  fontWeight: pt.primary ? 600 : 400,
                  letterSpacing: '0.1em',
                }}
              >
                {pt.label.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Region text index separated with typographic dividers (no pills) */}
      <p className="text-xs text-[#B3AEA3] leading-relaxed">
        {regions.join('  ·  ')}
      </p>
    </div>
  );
};

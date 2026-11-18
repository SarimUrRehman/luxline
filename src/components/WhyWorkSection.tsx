import React, { useState } from 'react';
import { SITE_CONFIG, WorkTileItem } from '../config/siteConfig';
import { BeforeAfterPlaceholderGraphic } from './BrandSvg';

interface ImageSlotProps {
  src: string;
  alt: string;
  mode: 'before' | 'after';
  fallbackLabel: string;
}

const WorkImageSlot: React.FC<ImageSlotProps> = ({ src, alt, mode, fallbackLabel }) => {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(src) && !hasError;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101010]">
      {showImage ? (
        <img
          src={src}
          alt={alt}
          width={1200}
          height={900}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <BeforeAfterPlaceholderGraphic mode={mode} label={fallbackLabel} />
      )}
      <span
        className={`absolute top-2.5 left-2.5 px-2 py-0.5 font-label text-[9px] font-semibold uppercase tracking-[0.22em] ${
          mode === 'after'
            ? 'bg-[#C9A24B] text-[#0A0A0A]'
            : 'bg-[#0A0A0A]/85 text-[#E6CF8F] border border-white/15'
        }`}
      >
        {mode === 'before' ? 'Before' : 'After'}
      </span>
    </div>
  );
};

export const WhyWorkSection: React.FC = () => {
  const visibleStats = SITE_CONFIG.whyChooseUs.stats.filter(
    (s) => s.value.trim().length > 0
  );

  return (
    <section id="work" className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Top Split: Intro & 6 Benefit Points */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="font-label text-[11px] font-medium uppercase tracking-[0.32em] text-[#C9A24B]">
              {SITE_CONFIG.whyChooseUs.eyebrow}
            </p>
            <h2
              className="mt-3 font-display font-light uppercase tracking-[0.14em] text-white [text-wrap:balance]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.85rem)' }}
            >
              {SITE_CONFIG.whyChooseUs.heading}
            </h2>
            <div className="mt-5 h-px w-20 bg-[#C9A24B]" />
            <p className="mt-6 text-base font-light leading-relaxed text-[#B3AEA3]">
              {SITE_CONFIG.whyChooseUs.intro}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px bg-[#C9A24B]/20 sm:grid-cols-2 border border-[#C9A24B]/20">
              {SITE_CONFIG.whyChooseUs.benefits.map((benefit, idx) => (
                <div key={benefit.title} className="bg-[#111111] p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-label text-[10px] font-medium tracking-[0.26em] text-[#C9A24B] tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="h-px flex-1 bg-[#C9A24B]/20" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-normal uppercase tracking-[0.1em] text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[#B3AEA3]">
                    {benefit.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="gold-hairline-divider my-16 sm:my-20" />

        {/* Before & After Transformations (3 Placeholder Tiles) */}
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-label text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A24B]">
                Our Work
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-light uppercase tracking-[0.12em] text-white">
                {SITE_CONFIG.whyChooseUs.workHeading}
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-light text-[#B3AEA3]">
              {SITE_CONFIG.whyChooseUs.workSubheading}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {SITE_CONFIG.whyChooseUs.workTiles.map((tile: WorkTileItem) => (
              <article
                key={tile.id}
                className="border border-[#C9A24B]/25 bg-[#141414] overflow-hidden flex flex-col"
              >
                {/* Dual side-by-side Before / After frame */}
                <div className="grid grid-cols-2 gap-px bg-[#C9A24B]/25 border-b border-[#C9A24B]/25">
                  <WorkImageSlot
                    src={tile.beforeImage}
                    alt={tile.beforeAlt}
                    mode="before"
                    fallbackLabel="Before photo coming soon"
                  />
                  <WorkImageSlot
                    src={tile.afterImage}
                    alt={tile.afterAlt}
                    mode="after"
                    fallbackLabel="After photo coming soon"
                  />
                </div>

                <div className="p-6">
                  <p className="font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#C9A24B]">
                    {tile.vehicleLabel}
                  </p>
                  <h4 className="mt-2 font-display text-xl font-normal uppercase tracking-[0.08em] text-white">
                    {tile.title}
                  </h4>
                  <p className="mt-2 text-sm font-light text-[#B3AEA3]">
                    {tile.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Optional Editable Stats Row (only displays non-empty items) */}
        {visibleStats.length > 0 && (
          <div className="mt-14 border border-[#C9A24B]/25 bg-[#111111]">
            <dl className="grid grid-cols-1 divide-y divide-[#C9A24B]/20 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {visibleStats.map((stat) => (
                <div key={stat.label} className="px-6 py-6 text-center">
                  <dt className="font-label text-[10px] font-medium uppercase tracking-[0.26em] text-[#B3AEA3]">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl sm:text-3xl font-light tracking-[0.1em] text-[#E6CF8F] tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
};

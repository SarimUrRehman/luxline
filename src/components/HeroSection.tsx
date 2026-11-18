import React from 'react';
import { Instagram, ArrowDownRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { HeroCoupeIllustration } from './BrandSvg';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0A0A0A] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Subtle obsidian-to-charcoal radial atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,75,0.08),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 animate-fade-up">
            <p className="font-label text-[11px] font-medium uppercase tracking-[0.34em] text-[#C9A24B] mb-5">
              {SITE_CONFIG.hero.eyebrow}
            </p>

            <h1
              className="font-display font-normal uppercase tracking-[0.1em] text-white leading-[1.15] [text-wrap:balance]"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.45rem)' }}
            >
              {SITE_CONFIG.hero.headline}
            </h1>

            <div className="my-6 h-px w-24 bg-gradient-to-r from-[#C9A24B] to-transparent" />

            <p className="max-w-xl text-base sm:text-lg font-light leading-relaxed text-[#B3AEA3]">
              {SITE_CONFIG.hero.subheadline}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.contact.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg inline-flex min-h-[48px] items-center justify-center gap-2.5 px-7 py-3 font-label text-xs font-semibold uppercase tracking-[0.22em] text-[#0A0A0A] transition-all duration-200 hover:shadow-[0_0_26px_rgba(201,162,75,0.3)] whitespace-nowrap"
              >
                <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.hero.primaryCta}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#C9A24B] px-7 py-3 font-label text-xs font-medium uppercase tracking-[0.22em] text-[#E6CF8F] transition-all duration-200 hover:bg-[#C9A24B] hover:text-[#0A0A0A] whitespace-nowrap"
              >
                <span>{SITE_CONFIG.hero.secondaryCta}</span>
                <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Clean unboxed typographic metadata strip */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-label text-[11px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F]">
                {SITE_CONFIG.hero.highlights.map((item, idx) => (
                  <React.Fragment key={item}>
                    <li className="whitespace-nowrap">{item}</li>
                    {idx < SITE_CONFIG.hero.highlights.length - 1 && (
                      <li aria-hidden="true" className="text-[#C9A24B]">
                        /
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Animated Gold Line-Art Coupe Visual (100% inline SVG + CSS) */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#C9A24B]/20 bg-[#0D0D0D]/80 p-4 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-label text-[10px] uppercase tracking-[0.28em] text-[#C9A24B]">
                  {SITE_CONFIG.brand.shortName} {SITE_CONFIG.brand.subBrand}
                </span>
                <span className="font-label text-[10px] uppercase tracking-[0.24em] text-[#B3AEA3]">
                  {SITE_CONFIG.brand.serviceAreaShort}
                </span>
              </div>

              <HeroCoupeIllustration className="my-2 sm:my-4" />

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
                <span className="font-label text-[10px] uppercase tracking-[0.24em] text-[#B3AEA3]">
                  At Your Home or Workplace
                </span>
                <span className="font-label text-[10px] uppercase tracking-[0.24em] text-[#E6CF8F]">
                  Studio-Grade Finish
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

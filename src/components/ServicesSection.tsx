import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ServiceLineIcon } from './BrandSvg';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleEnquire = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="bg-[#FAF7F0] py-20 sm:py-24 lg:py-28 text-[#1A1A1A]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="font-label text-[11px] font-medium uppercase tracking-[0.32em] text-[#7D5B15]">
            {SITE_CONFIG.services.eyebrow}
          </p>
          <h2
            className="mt-3 font-display font-normal uppercase tracking-[0.14em] text-[#1A1A1A] [text-wrap:balance]"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.85rem)' }}
          >
            {SITE_CONFIG.services.heading}
          </h2>
          <div className="mt-5 h-px w-20 bg-[#9A7424]" />

          {/* Required transparency notes above the grid */}
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#4A453D]">
            {SITE_CONFIG.services.disclaimerNote}
          </p>
          <p className="mt-1.5 font-label text-[11px] font-medium uppercase tracking-[0.2em] text-[#7D5B15]">
            {SITE_CONFIG.services.pricingNote}
          </p>
        </div>

        {/* 6 Service Cards Grid (leading with Interior, Exterior, Full Detail) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SITE_CONFIG.services.items.map((service, index) => {
            const isPopular = Boolean(service.featuredBadge);
            return (
              <article
                key={service.id}
                className={`group flex flex-col justify-between border p-7 sm:p-8 transition-all duration-200 ${
                  isPopular
                    ? 'border-[#9A7424] bg-[#F3EFE4]'
                    : 'border-[#1A1A1A]/12 bg-white hover:border-[#9A7424]/70'
                }`}
              >
                <div>
                  {/* Top Row: Custom Gold Line Icon & Editorial Index / Popular Marker */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[#7D5B15] transition-transform duration-200 group-hover:scale-105">
                      <ServiceLineIcon icon={service.icon} className="h-9 w-9" />
                    </div>

                    {service.featuredBadge ? (
                      <span className="border-b border-[#9A7424] pb-0.5 font-label text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7D5B15]">
                        {service.featuredBadge}
                      </span>
                    ) : (
                      <span className="font-label text-[11px] font-medium tracking-[0.2em] text-[#6E675C] tabular-nums">
                        0{index + 1}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-medium uppercase tracking-[0.08em] text-[#1A1A1A]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#4A453D]">
                    {service.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#1A1A1A]/10 pt-5">
                  <button
                    type="button"
                    onClick={() => handleEnquire(service.title)}
                    className="inline-flex min-h-[44px] items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1A1A1A] transition-colors hover:text-[#7D5B15] cursor-pointer whitespace-nowrap"
                  >
                    <span>Enquire</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 text-[#7D5B15] transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>

                  <a
                    href={SITE_CONFIG.contact.instagramDmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 font-label text-[11px] font-medium uppercase tracking-[0.2em] text-[#7D5B15] underline-offset-4 hover:underline whitespace-nowrap"
                  >
                    <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Book via DM</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

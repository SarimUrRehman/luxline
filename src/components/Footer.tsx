import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { LuxLineLogo } from './BrandSvg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A24B]/30 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#hero" aria-label={SITE_CONFIG.brand.name} className="inline-block">
              <LuxLineLogo variant="full" className="h-24 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-[#B3AEA3]">
              {SITE_CONFIG.footer.description}
            </p>
          </div>

          {/* Quick Links to the 5 Sections */}
          <div className="md:col-span-3">
            <h3 className="font-label text-[11px] font-medium uppercase tracking-[0.26em] text-[#C9A24B]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[36px] items-center text-sm text-[#B3AEA3] transition-colors hover:text-[#E6CF8F]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Service Area */}
          <div className="md:col-span-4">
            <h3 className="font-label text-[11px] font-medium uppercase tracking-[0.26em] text-[#C9A24B]">
              Connect &amp; Service Area
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#B3AEA3]">
              <li>
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#E6CF8F]"
                >
                  <Instagram className="h-4 w-4 text-[#C9A24B]" aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#E6CF8F]"
                >
                  <Mail className="h-4 w-4 text-[#C9A24B]" aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#C9A24B]" aria-hidden="true" />
                <span>{SITE_CONFIG.brand.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 border-t border-white/10 pt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#B3AEA3]">{SITE_CONFIG.footer.copyright}</p>
          <p className="font-label text-[10px] uppercase tracking-[0.24em] text-[#C9A24B]">
            {SITE_CONFIG.brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

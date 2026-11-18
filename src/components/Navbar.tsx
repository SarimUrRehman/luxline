import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { LuxLineLogo } from './BrandSvg';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C9A24B]/25'
          : 'bg-[#0A0A0A] border-b border-white/10'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-10">
        {/* Zone 1: Brand Wordmark / Inline SVG Logo */}
        <a
          href="#hero"
          aria-label={SITE_CONFIG.brand.name}
          className="flex items-center shrink-0 py-1 focus-visible:outline-[#C9A24B]"
          onClick={closeMenu}
        >
          {/* Compact mobile car-line + LUXLINE logo */}
          <LuxLineLogo variant="compact" className="h-11 w-auto sm:hidden" />
          {/* Desktop gold inline SVG logo */}
          <LuxLineLogo variant="compact" className="hidden sm:block h-12 w-auto" />
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 font-label text-[11px] font-medium uppercase tracking-[0.22em] text-[#B3AEA3] transition-colors duration-200 hover:text-[#E6CF8F] whitespace-nowrap shrink-0"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 h-px scale-x-0 bg-[#C9A24B] transition-transform duration-200 origin-left group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA ("Book via DM") + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={SITE_CONFIG.contact.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg inline-flex min-h-[42px] items-center justify-center gap-2 px-4 sm:px-5 py-2 font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,162,75,0.28)] whitespace-nowrap shrink-0"
          >
            <Instagram className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{SITE_CONFIG.hero.primaryCta}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex lg:hidden min-h-[44px] min-w-[44px] items-center justify-center border border-[#C9A24B]/35 text-[#E6CF8F] transition-colors hover:border-[#C9A24B] hover:bg-[#141414]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className="lg:hidden border-t border-[#C9A24B]/20 bg-[#0A0A0A] px-4 py-5 sm:px-6"
        >
          <ul className="flex flex-col divide-y divide-white/10">
            {SITE_CONFIG.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-[48px] items-center justify-between font-label text-xs font-medium uppercase tracking-[0.24em] text-[#E6CF8F] transition-colors hover:text-white"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-[#C9A24B]">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { Instagram, Phone, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const hasPhone = SITE_CONFIG.contact.phone.trim().length > 0;

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      {/* Back-to-top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A24B]/60 bg-[#0A0A0A]/90 text-[#E6CF8F] shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-[#E6CF8F] hover:bg-[#141414] cursor-pointer"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
      )}

      {/* Floating circular gold Book via DM button (switches to Call only if phone is set in config) */}
      {hasPhone ? (
        <a
          href={`tel:${SITE_CONFIG.contact.phone}`}
          aria-label="Call LuxLine Mobile Detailing"
          title="Call LuxLine Mobile Detailing"
          className="gold-gradient-bg inline-flex h-13 w-13 items-center justify-center rounded-full text-[#0A0A0A] shadow-[0_6px_22px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
      ) : (
        <a
          href={SITE_CONFIG.contact.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book via DM on Instagram"
          title="Book via DM"
          className="gold-gradient-bg inline-flex h-13 w-13 items-center justify-center rounded-full text-[#0A0A0A] shadow-[0_6px_22px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105"
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
};

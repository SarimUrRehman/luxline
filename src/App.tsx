import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyWorkSection } from './components/WhyWorkSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SITE_CONFIG } from './config/siteConfig';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    SITE_CONFIG.services.items[2].title
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Skip link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#C9A24B] focus:px-4 focus:py-2 focus:font-label focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest focus:text-[#0A0A0A]"
      >
        Skip to main content
      </a>

      {/* Sticky Header Navigation (not counted as a content section) */}
      <Navbar />

      {/* Exactly 5 Content Sections */}
      <main id="main-content">
        <HeroSection />
        <ServicesSection onSelectService={setSelectedService} />
        <WhyWorkSection />
        <ReviewsSection />
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Footer (not counted as a content section) */}
      <Footer />

      {/* Floating Circular Book via DM / Call & Back-to-Top Buttons */}
      <FloatingActions />
    </div>
  );
}

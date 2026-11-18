/**
 * ============================================================================
 * LUXLINE MOBILE DETAILING — CENTRAL SITE CONFIGURATION
 * ============================================================================
 * Edit all text, colours, booking links, contact details, services, reviews,
 * stats, and local photo paths from this single file.
 *
 * ----------------------------------------------------------------------------
 * ASSETS TO UPLOAD (Optional Real Before/After Photos)
 * ----------------------------------------------------------------------------
 * Place real photos inside `public/images/` so Vite serves them cleanly at
 * `./images/...` both in local preview and after deployment.
 * Recommended format: `.webp` (or `.jpg`), 1200 x 900 px (4:3 aspect ratio).
 *
 * Expected filenames if you choose to enable photos:
 *   - ./images/work-1-before.webp   (1200x900) — Tile 1 Before photo
 *   - ./images/work-1-after.webp    (1200x900) — Tile 1 After photo
 *   - ./images/work-2-before.webp   (1200x900) — Tile 2 Before photo
 *   - ./images/work-2-after.webp    (1200x900) — Tile 2 After photo
 *   - ./images/work-3-before.webp   (1200x900) — Tile 3 Before photo
 *   - ./images/work-3-after.webp    (1200x900) — Tile 3 After photo
 *
 * Leave `beforeImage` / `afterImage` as "" (empty string) to display the
 * built-in styled SVG/CSS "Before photo coming soon" / "After photo coming soon"
 * tiles safely without broken images.
 * ============================================================================
 */

export type ServiceIconId =
  | 'interior'
  | 'exterior'
  | 'full'
  | 'polish'
  | 'ceramic'
  | 'upholstery';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconId;
  featuredBadge?: string;
}

export interface WorkTileItem {
  id: string;
  title: string;
  subtitle: string;
  vehicleLabel: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface EditableStatItem {
  label: string;
  value: string; // Leave "" to hide this item automatically
}

export interface ReviewItem {
  id: string;
  author: string;
  source: 'Google review' | 'Instagram';
  rating: 5;
  quote: string;
  vehicle?: string;
}

export const SITE_CONFIG = {
  brand: {
    name: 'LuxLine Mobile Detailing',
    shortName: 'LUXLINE',
    subBrand: 'MOBILE',
    descriptor: 'CAR DETAILING',
    tagline: 'Luxury Car Care. Delivered.',
    serviceArea: 'Sydney, Australia',
    serviceAreaShort: 'Sydney, NSW',
  },

  /**
   * Brand palette tokens (mirrored in src/index.css)
   */
  colors: {
    obsidian: '#0A0A0A',
    charcoal: '#141414',
    charcoalElevated: '#1C1C1C',
    ivory: '#FAF7F0',
    gold: '#C9A24B',
    champagne: '#E6CF8F',
    bronze: '#9A7424',
    textLight: '#FFFFFF',
    textMutedLight: '#B3AEA3',
    textDark: '#1A1A1A',
  },

  /**
   * Booking & Contact Details
   * IMPORTANT: Enter your Instagram handle in the config below.
   * Note: Leave `phone` as "" to automatically hide all Call/SMS buttons
   * and display "Book via DM" + the quote form as primary booking options.
   */
  contact: {
    // Enter your Instagram handle in the config (e.g. 'https://ig.me/m/luxlinemobile')
    instagramDmUrl: 'https://ig.me/m/yourhandle',
    // Enter your Instagram handle in the config (e.g. 'https://instagram.com/luxlinemobile')
    instagramUrl: 'https://instagram.com/yourinstagram',
    // Enter your Instagram handle in the config (e.g. '@luxlinemobile')
    instagramHandle: '@yourinstagram',
    email: 'info@yourdomain.com',
    // Leave empty ("") if you have no business phone — Call & SMS buttons hide automatically
    phone: '',
    hours: 'Mon–Sat 8:00 AM – 6:00 PM',
    hoursNote: 'By appointment · Mobile across Sydney',
    serviceAreaHeadline: 'Sydney, NSW — We Come To You',
    serviceAreaDescription:
      'Home driveways, apartment garages (with access), or workplace car parks across Greater Sydney.',
    sydneyRegions: [
      'Sydney CBD',
      'Eastern Suburbs',
      'North Shore',
      'Inner West',
      'Northern Beaches',
      'Parramatta & West',
      'St George & Sutherland',
    ],
  },

  navLinks: [
    { label: 'Overview', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'Sydney Mobile Detailing',
    headline: 'Luxury Car Care. Delivered.',
    subheadline:
      'Premium mobile detailing across Sydney. Interior, exterior and full details, at your home or workplace.',
    primaryCta: 'Book via DM',
    secondaryCta: 'Request a Quote',
    highlights: ['Mobile Service', 'Sydney, NSW', 'Interior • Exterior • Full Details'],
  },

  services: {
    eyebrow: 'Tailored Treatments',
    heading: 'Detailing Services',
    disclaimerNote:
      'Extra services shown are examples, so edit them in the config to match what you offer.',
    pricingNote: 'Custom tailored to your vehicle condition — request a quote for your car.',
    items: [
      {
        id: 'interior-detail',
        title: 'Interior Detail',
        description:
          'Deep cabin vacuuming, steam sanitation, leather conditioning, and streak-free interior trim care.',
        icon: 'interior',
      },
      {
        id: 'exterior-detail',
        title: 'Exterior Detail',
        description:
          'pH-neutral snow foam wash, two-bucket hand wash, wheel decontamination, and gloss sealant.',
        icon: 'exterior',
      },
      {
        id: 'full-detail',
        title: 'Full Detail',
        description:
          'Complete inside-and-out restoration combining our thorough interior and exterior packages in one visit.',
        icon: 'full',
        featuredBadge: 'Most Popular',
      },
      {
        id: 'paint-polish',
        title: 'Paint Polish & Gloss Enhancement',
        description:
          'Single-stage machine refinement to lift light swirl marks and restore deep, mirror-like paint clarity.',
        icon: 'polish',
      },
      {
        id: 'ceramic-coating',
        title: 'Ceramic Coating & Protection',
        description:
          'Hydrophobic ceramic protection engineered to shield paintwork against UV, road grime, and harsh elements.',
        icon: 'ceramic',
      },
      {
        id: 'upholstery-refresh',
        title: 'Upholstery & Carpet Refresh',
        description:
          'Targeted hot-water extraction and stain treatment for fabric seating, floor mats, and boot linings.',
        icon: 'upholstery',
      },
    ] as ServiceItem[],
  },

  whyChooseUs: {
    eyebrow: 'The LuxLine Standard',
    heading: 'Why Choose Us & Our Work',
    intro:
      'Every vehicle receives patient, studio-grade attention right at your doorstep. We bring curated, paint-safe formulations and refined technique directly to your Sydney home or office so your car looks immaculate without disrupting your day.',
    benefits: [
      {
        title: 'We Come To You',
        detail: 'Mobile service at your Sydney home driveway or workplace car park.',
      },
      {
        title: 'Premium Products',
        detail: 'pH-balanced, boutique-grade chemistry safe for delicate leather, satin trim, and clear coat.',
      },
      {
        title: 'Meticulous Attention To Detail',
        detail: 'Every vent, seam, badge, and wheel barrel is addressed with patience.',
      },
      {
        title: 'Interior & Exterior In One Visit',
        detail: 'Book a tailored cabin refresh, exterior wash, or complete full detail together.',
      },
      {
        title: 'Flexible Scheduling',
        detail: 'Convenient appointment windows planned around your work and weekend routine.',
      },
      {
        title: 'Easy Booking Via DM',
        detail: 'Message us on Instagram or send your vehicle details below for a fast quote.',
      },
    ],
    workHeading: 'Before & After Transformations',
    workSubheading:
      'Replace these styled placeholders with your real local photos in src/config/siteConfig.ts whenever ready.',
    workTiles: [
      {
        id: 'work-1',
        title: 'Full Interior & Leather Restoration',
        subtitle: 'Cabin deep clean, matte leather nourishment & trim finish',
        vehicleLabel: 'Luxury Coupe · Sydney',
        beforeImage: '', // Example when ready: './images/work-1-before.webp'
        afterImage: '',  // Example when ready: './images/work-1-after.webp'
        beforeAlt: 'Before interior detail transformation placeholder',
        afterAlt: 'After interior detail transformation placeholder',
      },
      {
        id: 'work-2',
        title: 'Exterior Decontamination & Gloss',
        subtitle: 'Snow foam, wheel face & barrel cleanse, hydrophobic finish',
        vehicleLabel: 'Performance Sedan · Sydney',
        beforeImage: '', // Example when ready: './images/work-2-before.webp'
        afterImage: '',  // Example when ready: './images/work-2-after.webp'
        beforeAlt: 'Before exterior detail transformation placeholder',
        afterAlt: 'After exterior detail transformation placeholder',
      },
      {
        id: 'work-3',
        title: 'Complete Full Detail Package',
        subtitle: 'Inside & out restoration delivered on-site',
        vehicleLabel: 'Prestige SUV · Sydney',
        beforeImage: '', // Example when ready: './images/work-3-before.webp'
        afterImage: '',  // Example when ready: './images/work-3-after.webp'
        beforeAlt: 'Before full detail transformation placeholder',
        afterAlt: 'After full detail transformation placeholder',
      },
    ] as WorkTileItem[],

    /**
     * Optional Stats Row (Editable values only — leave value "" to hide an item).
     * Never invent ratings or unverified counts.
     */
    stats: [
      { label: 'Service Model', value: '100% Mobile' },
      { label: 'Coverage', value: 'Greater Sydney' },
      { label: 'Years in Business', value: '[Edit in config]' },
    ] as EditableStatItem[],
  },

  reviews: {
    eyebrow: 'Client Impressions',
    heading: 'Client Reviews',
    instagramCta: 'See our work on Instagram',
    /**
     * Leave `items` empty ([]) until you have genuine client feedback.
     * While empty:
     *   - Any rating summary is hidden automatically.
     *   - 3 clearly labelled "Sample testimonial, replace with a real review" cards are shown.
     * Once you add real reviews below, they appear automatically with 5-star rows.
     */
    items: [] as ReviewItem[],
    sampleCardsCount: 3,
  },

  contactSection: {
    eyebrow: 'Reserve Your Detail',
    heading: 'Book or Request a Quote',
    subheading:
      'Prefer messaging? Tap Book via DM to message us directly on Instagram, or submit your vehicle details below.',
    formHeading: 'Request a Custom Quote',
  },

  footer: {
    description:
      'Luxury mobile car detailing across Sydney, Australia. Interior, exterior, and full details delivered directly to your home or workplace.',
    copyright: '© 2025 LuxLine Mobile Detailing. All rights reserved.',
  },
} as const;

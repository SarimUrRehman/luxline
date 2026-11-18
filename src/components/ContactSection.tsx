import React, { useState, useEffect } from 'react';
import {
  Instagram,
  Mail,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  CheckCircle2,
  Send,
  Copy,
  Check,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SydneyMapCard } from './BrandSvg';

interface ContactSectionProps {
  selectedService: string;
}

interface BookingFormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  vehicle: string;
  preferredDate: string;
  suburb: string;
  message: string;
}

type FormErrors = Partial<Record<keyof BookingFormState, string>>;

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const defaultService = selectedService || SITE_CONFIG.services.items[2].title; // Full Detail default

  const [form, setForm] = useState<BookingFormState>({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    vehicle: '',
    preferredDate: '',
    suburb: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync service dropdown whenever a user clicks "Enquire" on a service card
  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
      setSubmitted(false);
    }
  }, [selectedService]);

  const hasPhoneConfigured = SITE_CONFIG.contact.phone.trim().length > 0;

  const validate = (data: BookingFormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!data.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (data.phone.trim() && !/^[+\d\s()-]{6,20}$/.test(data.phone.trim())) {
      nextErrors.phone = 'Please enter a valid contact number.';
    }
    if (!data.service.trim()) {
      nextErrors.service = 'Please select a service.';
    }
    if (!data.vehicle.trim()) {
      nextErrors.vehicle = 'Please enter your vehicle make, model, and year.';
    }
    if (!data.suburb.trim()) {
      nextErrors.suburb = 'Please enter your Sydney suburb.';
    }
    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const buildDmSummary = () => {
    return [
      `Hi LuxLine Mobile Detailing, I'd like to request a quote:`,
      `Name: ${form.name}`,
      `Service: ${form.service}`,
      `Vehicle: ${form.vehicle}`,
      `Suburb: ${form.suburb}`,
      form.preferredDate ? `Preferred Date: ${form.preferredDate}` : '',
      form.phone ? `Phone: ${form.phone}` : '',
      `Email: ${form.email}`,
      form.message ? `Notes: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildDmSummary());
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      // Clipboard blocked in restricted context; silent no-op
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      phone: '',
      email: '',
      service: defaultService,
      vehicle: '',
      preferredDate: '',
      suburb: '',
      message: '',
    });
  };

  const inputBaseClass =
    'w-full border bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-[#7A756C] transition-colors focus:border-[#C9A24B] focus:outline-none min-h-[46px]';

  return (
    <section id="contact" className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="font-label text-[11px] font-medium uppercase tracking-[0.32em] text-[#C9A24B]">
            {SITE_CONFIG.contactSection.eyebrow}
          </p>
          <h2
            className="mt-3 font-display font-light uppercase tracking-[0.14em] text-white [text-wrap:balance]"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.85rem)' }}
          >
            {SITE_CONFIG.contactSection.heading}
          </h2>
          <div className="mt-5 h-px w-20 bg-[#C9A24B]" />
          <p className="mt-5 text-base font-light leading-relaxed text-[#B3AEA3]">
            {SITE_CONFIG.contactSection.subheading}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Booking / Quote Request Form */}
          <div className="lg:col-span-7 border border-[#C9A24B]/25 bg-[#141414] p-6 sm:p-8 lg:p-10">
            <h3 className="font-display text-2xl font-normal uppercase tracking-[0.12em] text-white">
              {SITE_CONFIG.contactSection.formHeading}
            </h3>
            <p className="mt-1.5 text-sm font-light text-[#B3AEA3]">
              Fields marked with <span className="text-[#E6CF8F]">*</span> are required.
            </p>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-8 border border-[#C9A24B]/50 bg-[#0D0D0D] p-6 sm:p-8"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-[#E6CF8F] mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-display text-2xl uppercase tracking-[0.1em] text-[#E6CF8F]">
                      Quote Request Ready
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#B3AEA3]">
                      Thank you, <span className="text-white">{form.name}</span>. Your enquiry for{' '}
                      <span className="text-white">{form.service}</span> ({form.vehicle} in{' '}
                      <span className="text-white">{form.suburb}</span>) has been prepared. For the fastest reply, copy your details and send them straight to our Instagram DM.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={SITE_CONFIG.contact.instagramDmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-gradient-bg inline-flex min-h-[46px] items-center justify-center gap-2 px-6 py-3 font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A0A0A]"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    <span>Open Instagram DM</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 border border-[#C9A24B]/60 px-5 py-3 font-label text-[11px] font-medium uppercase tracking-[0.18em] text-[#E6CF8F] hover:border-[#C9A24B] hover:bg-[#1C1C1C] cursor-pointer"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="h-4 w-4 text-[#E6CF8F]" aria-hidden="true" />
                        <span>Copied Summary</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>Copy Details for DM</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[46px] items-center justify-center px-4 py-3 font-label text-[11px] uppercase tracking-[0.18em] text-[#B3AEA3] hover:text-white cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Mercer"
                      aria-invalid={Boolean(errors.name)}
                      className={`${inputBaseClass} ${
                        errors.name ? 'border-red-400' : 'border-white/15'
                      }`}
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F] mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="04XX XXX XXX"
                      aria-invalid={Boolean(errors.phone)}
                      className={`${inputBaseClass} ${
                        errors.phone ? 'border-red-400' : 'border-white/15'
                      }`}
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={`${inputBaseClass} ${
                        errors.email ? 'border-red-400' : 'border-white/15'
                      }`}
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Type Dropdown */}
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F] mb-2"
                    >
                      Service Type *
                    </label>
                    <select
                      id="booking-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.service)}
                      className={`${inputBaseClass} ${
                        errors.service ? 'border-red-400' : 'border-white/15'
                      }`}
                    >
                      {SITE_CONFIG.services.items.map((item) => (
                        <option key={item.id} value={item.title} className="bg-[#141414] text-white">
                          {item.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Vehicle Make/Model/Year */}
                  <div>
                    <label
                      htmlFor="booking-vehicle"
                      className="block font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F] mb-2"
                    >
                      Vehicle Make / Model / Year *
                    </label>
                    <input
                      id="booking-vehicle"
                      name="vehicle"
                      type="text"
                      required
                      value={form.vehicle}
                      onChange={handleChange}
                      placeholder="e.g. 2023 Porsche 911 Carrera"
                      aria-invalid={Boolean(errors.vehicle)}
                      className={`${inputBaseClass} ${
                        errors.vehicle ? 'border-red-400' : 'border-white/15'
                      }`}
                    />
                    {errors.vehicle && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.vehicle}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F] mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="booking-date"
                      name="preferredDate"
                      type="date"
                      value={form.preferredDate}
                      onChange={handleChange}
                      className={`${inputBaseClass} border-white/15 [color-scheme:dark]`}
                    />
                  </div>
                </div>

                {/* Suburb in Sydney */}
                <div>
                  <label
                    htmlFor="booking-suburb"
                    className="block font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F] mb-2"
                  >
                    Your Suburb in Sydney *
                  </label>
                  <input
                    id="booking-suburb"
                    name="suburb"
                    type="text"
                    required
                    value={form.suburb}
                    onChange={handleChange}
                    placeholder="e.g. Double Bay, Mosman, Barangaroo, Parramatta"
                    aria-invalid={Boolean(errors.suburb)}
                    className={`${inputBaseClass} ${
                      errors.suburb ? 'border-red-400' : 'border-white/15'
                    }`}
                  />
                  {errors.suburb && (
                    <p role="alert" className="mt-1.5 text-xs text-red-400">
                      {errors.suburb}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="block font-label text-[10px] font-medium uppercase tracking-[0.22em] text-[#E6CF8F] mb-2"
                  >
                    Vehicle Condition / Notes
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share parking access (driveway/garage), water/power availability, or specific areas you want focused on."
                    className={`${inputBaseClass} border-white/15 resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="gold-gradient-bg inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 px-7 py-3.5 font-label text-xs font-semibold uppercase tracking-[0.24em] text-[#0A0A0A] transition-all duration-200 hover:shadow-[0_0_26px_rgba(201,162,75,0.28)] cursor-pointer"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Submit Quote Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Book via DM, Direct Links, Info & Stylized Sydney Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Prominent Direct Booking Card */}
            <div className="border border-[#C9A24B]/35 bg-[#141414] p-6 sm:p-8">
              <p className="font-label text-[10px] font-medium uppercase tracking-[0.28em] text-[#C9A24B]">
                Fastest Booking
              </p>
              <h3 className="mt-2 font-display text-2xl font-normal uppercase tracking-[0.12em] text-white">
                Direct Booking &amp; Social
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-[#B3AEA3]">
                Send your vehicle model and suburb via Instagram DM for rapid availability and tailored pricing.
              </p>

              <div className="mt-6 space-y-3">
                {/* Prominent Book via DM button */}
                <a
                  href={SITE_CONFIG.contact.instagramDmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient-bg flex min-h-[48px] w-full items-center justify-center gap-2.5 px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.22em] text-[#0A0A0A] transition-all duration-200 hover:shadow-[0_0_24px_rgba(201,162,75,0.3)]"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span>Book via DM</span>
                </a>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* Instagram Button */}
                  <a
                    href={SITE_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 border border-[#C9A24B]/45 px-4 py-2.5 font-label text-[11px] font-medium uppercase tracking-[0.18em] text-[#E6CF8F] transition-colors hover:bg-[#C9A24B] hover:text-[#0A0A0A]"
                  >
                    <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="truncate">{SITE_CONFIG.contact.instagramHandle}</span>
                  </a>

                  {/* Email Button */}
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 border border-white/20 px-4 py-2.5 font-label text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:border-[#C9A24B] hover:text-[#E6CF8F]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#C9A24B]" aria-hidden="true" />
                    <span>Email Us</span>
                  </a>
                </div>

                {/* Call & SMS buttons: ONLY rendered when phone is populated in config */}
                {hasPhoneConfigured && (
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 border border-[#C9A24B]/45 px-4 py-2.5 font-label text-[11px] font-medium uppercase tracking-[0.18em] text-[#E6CF8F] transition-colors hover:bg-[#C9A24B] hover:text-[#0A0A0A]"
                    >
                      <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`sms:${SITE_CONFIG.contact.phone}`}
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 border border-white/20 px-4 py-2.5 font-label text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:border-[#C9A24B] hover:text-[#E6CF8F]"
                    >
                      <MessageSquare className="h-4 w-4 shrink-0 text-[#C9A24B]" aria-hidden="true" />
                      <span>Text / SMS</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Service Area, Hours & Email Details */}
              <dl className="mt-7 space-y-4 border-t border-white/10 pt-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-[#C9A24B] mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-[#B3AEA3]">
                      Service Area
                    </dt>
                    <dd className="mt-0.5 text-white">{SITE_CONFIG.contact.serviceAreaHeadline}</dd>
                    <dd className="text-xs text-[#B3AEA3] mt-0.5">
                      {SITE_CONFIG.contact.serviceAreaDescription}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-[#C9A24B] mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-[#B3AEA3]">
                      Operating Hours
                    </dt>
                    <dd className="mt-0.5 text-white">{SITE_CONFIG.contact.hours}</dd>
                    <dd className="text-xs text-[#B3AEA3] mt-0.5">{SITE_CONFIG.contact.hoursNote}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#C9A24B] mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-[#B3AEA3]">
                      Email
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-white hover:text-[#E6CF8F] underline-offset-4 hover:underline"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Styled "Serving Sydney" Map Card */}
            <SydneyMapCard regions={SITE_CONFIG.contact.sydneyRegions} />
          </div>
        </div>
      </div>
    </section>
  );
};

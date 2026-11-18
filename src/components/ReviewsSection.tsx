import React from 'react';
import { Instagram, Star } from 'lucide-react';
import { SITE_CONFIG, ReviewItem } from '../config/siteConfig';

export const ReviewsSection: React.FC = () => {
  const realReviews: readonly ReviewItem[] = SITE_CONFIG.reviews.items;
  const hasRealReviews = realReviews.length > 0;

  return (
    <section
      id="reviews"
      className="bg-[#FAF7F0] py-20 sm:py-24 lg:py-28 text-[#1A1A1A]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header Row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-label text-[11px] font-medium uppercase tracking-[0.32em] text-[#7D5B15]">
              {SITE_CONFIG.reviews.eyebrow}
            </p>
            <h2
              className="mt-3 font-display font-normal uppercase tracking-[0.14em] text-[#1A1A1A] [text-wrap:balance]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.85rem)' }}
            >
              {SITE_CONFIG.reviews.heading}
            </h2>
            <div className="mt-5 h-px w-20 bg-[#9A7424]" />
          </div>

          <a
            href={SITE_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center gap-2.5 border border-[#1A1A1A] px-6 py-3 font-label text-[11px] font-medium uppercase tracking-[0.22em] text-[#1A1A1A] transition-all duration-200 hover:bg-[#1A1A1A] hover:text-[#FAF7F0] whitespace-nowrap self-start sm:self-auto"
          >
            <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{SITE_CONFIG.reviews.instagramCta}</span>
          </a>
        </div>

        {/* Rating summary: ONLY shown when real reviews exist in config */}
        {hasRealReviews && (
          <div className="mt-8 flex items-center gap-3 border-b border-[#1A1A1A]/10 pb-6">
            <div className="flex items-center gap-1 text-[#9A7424]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="font-label text-xs uppercase tracking-[0.2em] text-[#4A453D] tabular-nums">
              {realReviews.length} Verified Client {realReviews.length === 1 ? 'Review' : 'Reviews'}
            </p>
          </div>
        )}

        {/* Reviews Grid: real reviews when populated, otherwise 3 clearly labelled sample placeholders */}
        {hasRealReviews ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realReviews.map((review) => (
              <article
                key={review.id}
                className="flex flex-col justify-between border border-[#1A1A1A]/12 bg-white p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="flex items-center gap-1 text-[#9A7424]"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="font-label text-[10px] font-medium uppercase tracking-[0.2em] text-[#7D5B15]">
                      {review.source}
                    </span>
                  </div>

                  <blockquote className="mt-5 text-[15px] leading-relaxed text-[#1A1A1A]">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 border-t border-[#1A1A1A]/10 pt-4">
                  <p className="font-display text-lg uppercase tracking-[0.1em] text-[#1A1A1A]">
                    {review.author}
                  </p>
                  {review.vehicle && (
                    <p className="mt-0.5 font-label text-[10px] uppercase tracking-[0.2em] text-[#575148]">
                      {review.vehicle}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: SITE_CONFIG.reviews.sampleCardsCount }).map((_, idx) => (
              <article
                key={idx}
                className="flex flex-col justify-between border border-dashed border-[#9A7424]/60 bg-white/75 p-7 sm:p-8"
              >
                <div>
                  <p className="font-label text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7D5B15]">
                    Sample Testimonial · Slot 0{idx + 1}
                  </p>
                  <h3 className="mt-4 font-display text-xl uppercase tracking-[0.08em] text-[#1A1A1A]">
                    Sample testimonial, replace with a real review
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A453D]">
                    Add genuine client reviews to <code className="font-mono text-xs text-[#7D5B15]">SITE_CONFIG.reviews.items</code> in{' '}
                    <code className="font-mono text-xs text-[#7D5B15]">src/config/siteConfig.ts</code>. Once added, this slot automatically displays the client&apos;s quote, 5-star row, and Google or Instagram source label.
                  </p>
                </div>

                <div className="mt-6 border-t border-[#1A1A1A]/10 pt-4">
                  <p className="font-label text-[10px] uppercase tracking-[0.22em] text-[#575148]">
                    Google review / Instagram · Placeholder
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

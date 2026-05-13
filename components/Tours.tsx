"use client";

import { motion } from "motion/react";
import { useT } from "@/lib/i18n";
import {
  tours,
  tourDays,
  tourStatus,
  type Tour,
  type TourStatus,
} from "@/lib/tours";

/**
 * Tours page body — header + grid of upcoming departures.
 *
 * Sorted chronologically. Sold-out tours stay visible (greyed) so social
 * proof works: "lots of these are popular." The CTA shifts to "join waitlist"
 * for sold-out cards rather than disappearing.
 */
export function Tours() {
  const { t, locale } = useT();
  const sorted = [...tours].sort((a, b) =>
    a.startDate.localeCompare(b.startDate)
  );

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative bg-cream pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
              {t("tours.eyebrow")}
            </p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] tracking-tight">
              {t("tours.title.a")}{" "}
              <span className="italic font-light">{t("tours.title.b")}</span>
            </h1>
            <p className="mt-6 text-ink/75 text-lg md:text-xl leading-relaxed max-w-2xl">
              {t("tours.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          {sorted.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((tour, i) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: "easeOut" }}
                >
                  <TourCard tour={tour} locale={locale} t={t} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function EmptyState() {
  const { t } = useT();
  return (
    <div className="text-center py-16 max-w-md mx-auto">
      <h2 className="font-display text-2xl text-ink">{t("tours.empty.title")}</h2>
      <p className="mt-3 text-muted">{t("tours.empty.sub")}</p>
      <a
        href="/#contact"
        className="mt-6 inline-flex items-center gap-2 bg-sun hover:bg-sun-deep transition-colors text-white px-6 py-3 rounded-full font-semibold"
      >
        {t("contact.eyebrow")}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

function TourCard({
  tour,
  locale,
  t,
}: {
  tour: Tour;
  locale: "hy" | "en";
  // Pass `t` through so we don't call useT() per card.
  t: (key: import("@/lib/i18n").TranslationKey, vars?: Record<string, string>) => string;
}) {
  const status = tourStatus(tour);
  const days = tourDays(tour);
  const dateRange = formatDateRange(tour.startDate, tour.endDate, locale);

  const isSoldOut = status === "soldout";

  // WhatsApp deep-link, differs for sold-out (waitlist) vs available
  const waText = isSoldOut
    ? t("tours.wa.waitlist", { city: tour.city[locale], dates: dateRange })
    : t("tours.wa.prefill", { city: tour.city[locale], dates: dateRange });
  const waHref = `https://wa.me/37491341143?text=${encodeURIComponent(waText)}`;

  return (
    <article
      className={`group relative rounded-2xl overflow-hidden bg-white border transition-all duration-300 ${
        isSoldOut
          ? "border-brand/10 opacity-75"
          : "border-brand/10 hover:border-brand/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[5/3] overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
            isSoldOut ? "" : "group-hover:scale-105"
          } ${isSoldOut ? "grayscale" : ""}`}
          style={{ backgroundImage: `url('${tour.image}')` }}
        />
        {/* Status pill, top-right */}
        <StatusPill status={status} spotsLeft={tour.spotsLeft} t={t} />
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted font-semibold">
          {tour.country[locale]}
        </p>
        <h2 className="mt-1 font-display text-2xl md:text-[26px] text-ink leading-tight">
          {tour.city[locale]}
        </h2>

        <div className="mt-3 flex items-center gap-2 text-[13px] text-ink/70">
          <CalendarIcon />
          <span>{dateRange}</span>
          <span className="text-brand/40">·</span>
          <span>
            {days} {t("tours.days")}
          </span>
        </div>

        <p className="mt-3 text-[14px] text-muted leading-relaxed line-clamp-2">
          {tour.tagline[locale]}
        </p>

        {/* Price + CTA row */}
        <div className="mt-5 pt-5 border-t border-brand/10 flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted font-semibold">
              {t("tours.priceFrom")}
            </p>
            <p className="font-display text-2xl text-ink leading-none">
              ${tour.priceFromUSD}
            </p>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener"
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              isSoldOut
                ? "bg-cream text-ink/75 hover:bg-brand-50 border border-brand/15"
                : "bg-sun hover:bg-sun-deep text-white shadow-sm"
            }`}
          >
            {isSoldOut ? t("tours.cta.soldout") : t("tours.cta")}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function StatusPill({
  status,
  spotsLeft,
  t,
}: {
  status: TourStatus;
  spotsLeft: number;
  t: (key: import("@/lib/i18n").TranslationKey, vars?: Record<string, string>) => string;
}) {
  const base =
    "absolute top-4 right-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-semibold px-3 py-1.5 rounded-full backdrop-blur-md";

  if (status === "soldout") {
    return (
      <span className={`${base} bg-ink/80 text-white`}>{t("tours.soldout")}</span>
    );
  }
  if (status === "limited") {
    return (
      <span className={`${base} bg-sun text-white`}>
        <Dot />
        {spotsLeft === 1
          ? t("tours.spotsLeft.one")
          : t("tours.spotsLeft", { n: String(spotsLeft) })}
      </span>
    );
  }
  return (
    <span className={`${base} bg-white/85 text-ink`}>
      <Dot tone="brand" />
      {t("tours.spotsLeft", { n: String(spotsLeft) })}
    </span>
  );
}

function Dot({ tone = "white" }: { tone?: "white" | "brand" }) {
  const cls = tone === "brand" ? "bg-brand" : "bg-white";
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full ${cls} animate-pulse`}
      aria-hidden
    />
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand flex-shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/**
 * Formats a date range using Intl.DateTimeFormat in the active locale.
 * Same-month ranges collapse to "5–7 հունիսի" instead of "5 հունիսի – 7 հունիսի".
 */
function formatDateRange(startIso: string, endIso: string, locale: "hy" | "en"): string {
  const start = new Date(startIso);
  const end = new Date(endIso);
  const localeTag = locale === "hy" ? "hy-AM" : "en-US";

  const sameMonth =
    start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();

  if (sameMonth) {
    const dayOnly = new Intl.DateTimeFormat(localeTag, { day: "numeric" });
    const monthDay = new Intl.DateTimeFormat(localeTag, { day: "numeric", month: "short" });
    return `${dayOnly.format(start)}–${monthDay.format(end)}`;
  }

  const monthDay = new Intl.DateTimeFormat(localeTag, { day: "numeric", month: "short" });
  return `${monthDay.format(start)} – ${monthDay.format(end)}`;
}

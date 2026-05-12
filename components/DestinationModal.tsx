"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "@/lib/i18n";
import type { DestinationDetail } from "@/lib/destinations";

/**
 * DestinationModal — opens when a destination card is clicked.
 *
 * Behavior:
 *  - ESC key closes
 *  - Backdrop click closes
 *  - Body scroll locks while open
 *  - Animates in with scale+fade (subtle, ~300ms)
 *  - "Get a quote" button deep-links to WhatsApp with destination prefilled
 *
 * Renders nothing when `destination` is null — AnimatePresence handles the
 * exit animation when it transitions back to null.
 */
export function DestinationModal({
  destination,
  onClose,
}: {
  destination: DestinationDetail | null;
  onClose: () => void;
}) {
  const { t, locale } = useT();

  // ESC key + body scroll lock. Wired only when modal is open.
  useEffect(() => {
    if (!destination) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [destination, onClose]);

  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            aria-hidden
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col"
          >
            {/* Image header */}
            <div className="relative h-56 sm:h-72 flex-shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${destination.image}')` }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(14,39,41,0.75) 100%)",
                }}
              />
              {/* Close button (header) */}
              <button
                type="button"
                onClick={onClose}
                aria-label={t("modal.close")}
                className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
              {/* Tag */}
              <span className="absolute top-4 left-6 text-[11px] uppercase tracking-[0.25em] font-semibold text-white bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full">
                {t(destination.tagKey)}
              </span>
              {/* Title */}
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
                  {destination.country[locale]}
                </p>
                <h2 id="modal-title" className="mt-1 font-display text-4xl md:text-5xl leading-none">
                  {destination.city[locale]}
                </h2>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-7 space-y-7">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                <Stat
                  label={t("modal.duration")}
                  value={`${destination.days} ${t("modal.days")}`}
                />
                <Stat
                  label={t("modal.from")}
                  value={`$${destination.priceFromUSD}`}
                  sub={t("modal.priceNote")}
                />
                <Stat
                  label={t("modal.hotel")}
                  value={"★".repeat(destination.hotel.stars)}
                  sub={destination.hotel.name}
                />
              </div>

              {/* Includes */}
              <Section title={t("modal.includes")}>
                <ul className="space-y-2.5">
                  {destination.includeKeys.map((k) => (
                    <li key={k} className="flex items-start gap-3 text-ink/85">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-50 text-brand inline-flex items-center justify-center">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-[15px] leading-relaxed">{t(k)}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Highlights */}
              <Section title={t("modal.highlights")}>
                <ul className="space-y-2.5">
                  {destination.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink/85">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-sun-50 text-sun-deep inline-flex items-center justify-center text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <span className="text-[15px] leading-relaxed">
                        {h[locale]}
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>

            {/* Footer CTAs (sticky bottom on the modal flex) */}
            <div className="flex-shrink-0 px-6 sm:px-8 py-5 bg-cream border-t border-brand/10 flex flex-col-reverse sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="sm:flex-shrink-0 inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-50 text-ink/75 hover:text-ink px-6 py-3 rounded-full font-medium text-sm border border-brand/15 transition-colors"
              >
                {t("modal.close")}
              </button>
              <a
                href={`https://wa.me/37491341143?text=${encodeURIComponent(
                  t("modal.wa.prefill", {
                    city: destination.city[locale],
                    price: String(destination.priceFromUSD),
                  })
                )}`}
                target="_blank"
                rel="noopener"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-sun hover:bg-sun-deep transition-colors text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-sun/20"
              >
                {t("modal.book")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl bg-cream p-4 border border-brand/10">
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold">
        {label}
      </p>
      <p className="mt-1.5 font-display text-xl text-ink leading-tight">
        {value}
      </p>
      {sub && (
        <p className="mt-1 text-[11px] text-muted leading-snug truncate">
          {sub}
        </p>
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.3em] text-brand font-bold mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "@/lib/i18n";
import type { ServiceDetail } from "@/lib/services";

/**
 * ServiceModal — opens when a service card is clicked.
 *
 * Sibling of DestinationModal in shape, but with an icon-led header (services
 * have no photography) and a single pricing badge instead of a 3-stat row.
 *
 * Same behaviors: ESC closes, backdrop click closes, body scroll locks.
 * CTA deep-links to WhatsApp with the service name pre-filled.
 */
export function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceDetail | null;
  onClose: () => void;
}) {
  const { t, locale } = useT();

  useEffect(() => {
    if (!service) return;
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
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
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
            aria-labelledby="service-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[92vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col"
          >
            {/* Icon header — gradient from brand-tinted cream to white,
                icon centered. Echoes the destination modal hero rhythm
                without needing a photo. */}
            <div
              className="relative h-44 sm:h-52 flex-shrink-0 flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(80% 100% at 50% 100%, rgba(27,159,166,0.10) 0%, rgba(251,248,244,0) 70%), linear-gradient(180deg, #FBF8F4 0%, #FFFFFF 100%)",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label={t("modal.close")}
                className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-ink/60 hover:text-ink hover:bg-cream border border-brand/15 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>

              <div className="w-20 h-20 rounded-2xl bg-brand-50 text-brand flex items-center justify-center">
                <div className="w-10 h-10">{service.icon}</div>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
              <div>
                <h2
                  id="service-modal-title"
                  className="font-display text-3xl md:text-4xl text-ink leading-tight tracking-tight"
                >
                  {t(service.titleKey)}
                </h2>
                <p className="mt-3 text-ink/80 text-base md:text-[17px] leading-relaxed">
                  {service.longDesc[locale]}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-brand font-bold mb-3">
                  {t("srvm.handled")}
                </h3>
                <ul className="space-y-2.5">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink/85">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-50 text-brand inline-flex items-center justify-center">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-[15px] leading-relaxed">
                        {f[locale]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing badge — only renders if the service has one */}
              {service.pricing && (
                <div className="rounded-2xl bg-cream p-5 border border-brand/10 flex items-baseline gap-3 flex-wrap">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted font-semibold">
                    {t("srvm.priceFrom")}
                  </span>
                  <span className="font-display text-3xl text-ink leading-none">
                    {service.pricing.amount}
                  </span>
                  <span className="text-sm text-muted">
                    {service.pricing.unit[locale]}
                  </span>
                </div>
              )}
            </div>

            {/* Footer CTAs */}
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
                  t("srvm.wa.prefill", { service: t(service.titleKey) })
                )}`}
                target="_blank"
                rel="noopener"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-sun hover:bg-sun-deep transition-colors text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-sun/20"
              >
                {t("srvm.cta")}
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

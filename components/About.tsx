"use client";

import { motion } from "motion/react";
import { useT, type TranslationKey } from "@/lib/i18n";

const stats: { value: string; labelKey: TranslationKey }[] = [
  { value: "10+", labelKey: "about.stat.years" },
  { value: "5,000+", labelKey: "about.stat.travelers" },
  { value: "60+", labelKey: "about.stat.destinations" },
];

const partners = [
  "Turkish Airlines",
  "FlyDubai",
  "Qatar Airways",
  "Pegasus",
  "Wizz Air",
  "Aegean",
  "Lufthansa",
  "LOT",
];

export function About() {
  const { t } = useT();
  return (
    <section id="about" className="relative bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t("about.eyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">
              {t("about.title.a")} <span className="italic font-light">{t("about.title.b")}</span>
            </h2>
            <div className="mt-6 space-y-4 text-ink/80 text-lg leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-sun hover:bg-sun-deep transition-colors text-white px-6 py-3 rounded-full font-semibold"
              >
                {t("about.cta")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://instagram.com/soluna_travel"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-ink/70 hover:text-brand font-medium text-sm transition-colors"
              >
                {t("about.ig")}
              </a>
            </div>
          </motion.div>

          {/* Stats + partners */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pt-4"
          >
            <div className="grid grid-cols-3 gap-px bg-brand/15 rounded-2xl overflow-hidden border border-brand/15">
              {stats.map((s) => (
                <div key={s.labelKey} className="bg-white p-6 md:p-8 text-center">
                  <div className="font-display text-4xl md:text-5xl text-brand-deep leading-none tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-3 text-xs md:text-sm text-muted leading-snug">
                    {t(s.labelKey)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 md:p-7 rounded-2xl bg-white border border-brand/10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted font-semibold">
                {t("about.partners.label")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-ink/75 text-sm font-medium items-center">
                {partners.map((p, i) => (
                  <span key={p} className="inline-flex items-center gap-5">
                    {p}
                    {i < partners.length - 1 && (
                      <span className="text-brand/40" aria-hidden>·</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">
                {t("about.partners.foot")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

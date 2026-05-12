"use client";

import { motion } from "motion/react";
import { useT, type TranslationKey } from "@/lib/i18n";

type Service = {
  icon: React.ReactNode;
  titleKey: TranslationKey;
  descKey: TranslationKey;
};

const services: Service[] = [
  {
    titleKey: "services.flights.title",
    descKey: "services.flights.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
  {
    titleKey: "services.hotels.title",
    descKey: "services.hotels.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M2 20h20" />
        <path d="M9 10v4" />
        <path d="M15 10v4" />
      </svg>
    ),
  },
  {
    titleKey: "services.visa.title",
    descKey: "services.visa.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M8 16h8" />
        <path d="M9 19h6" />
      </svg>
    ),
  },
  {
    titleKey: "services.tours.title",
    descKey: "services.tours.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function Services() {
  const { t } = useT();
  return (
    <section id="services" className="relative bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t("services.eyebrow")}</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">
            {t("services.title.a")} <span className="italic font-light">{t("services.title.b")}</span>
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">{t("services.subtitle")}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative p-7 bg-white rounded-2xl border border-brand/10 hover:border-brand/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand flex items-center justify-center group-hover:bg-sun-50 group-hover:text-sun-deep transition-colors">
                <div className="w-6 h-6">{s.icon}</div>
              </div>
              <h3 className="mt-5 font-display text-2xl text-ink">{t(s.titleKey)}</h3>
              <p className="mt-2 text-muted text-[15px] leading-relaxed">{t(s.descKey)}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:text-sun-deep transition-colors">
                {t("services.learn")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

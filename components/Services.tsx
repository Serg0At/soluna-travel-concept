"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useT } from "@/lib/i18n";
import { services, type ServiceDetail } from "@/lib/services";
import { ServiceModal } from "./ServiceModal";

/**
 * Animation pattern:
 *  - ONE viewport observer on the grid (parent variants).
 *  - Cards inherit `visible` state from parent via `staggerChildren`.
 *  - `whileHover` controls the y-lift, so motion has exclusive control over
 *    transform. (Earlier version had `hover:-translate-y-1` fighting motion's
 *    `y` prop, which under React 19 strict mode could re-fire the entrance
 *    animation and visually look like a duplicate paint.)
 */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const;

export function Services() {
  const { t } = useT();
  const [selected, setSelected] = useState<ServiceDetail | null>(null);

  return (
    <>
      <section id="services" className="relative bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
              {t("services.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">
              {t("services.title.a")}{" "}
              <span className="italic font-light">
                {t("services.title.b")}
              </span>
            </h2>
            <p className="mt-5 text-muted text-lg leading-relaxed">
              {t("services.subtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((s) => (
              <motion.button
                key={s.id}
                type="button"
                onClick={() => setSelected(s)}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative text-left p-7 bg-white rounded-2xl border border-brand/10 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-[border-color,box-shadow] duration-300 focus:outline-none focus:ring-4 focus:ring-brand/20"
                aria-label={`${t(s.titleKey)} — ${t("services.learn")}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand flex items-center justify-center group-hover:bg-sun-50 group-hover:text-sun-deep transition-colors">
                  <div className="w-6 h-6">{s.icon}</div>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">
                  {t(s.titleKey)}
                </h3>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">
                  {t(s.shortDescKey)}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:text-sun-deep transition-colors">
                  {t("services.learn")}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </>
  );
}

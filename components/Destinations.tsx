"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT, type TranslationKey } from "@/lib/i18n";
import {
  destinations,
  type Region,
  type DestinationDetail,
} from "@/lib/destinations";
import { DestinationModal } from "./DestinationModal";

const regions: { id: Region; labelKey: TranslationKey }[] = [
  { id: "visa-free", labelKey: "dest.tab.visafree" },
  { id: "europe", labelKey: "dest.tab.europe" },
  { id: "asia", labelKey: "dest.tab.asia" },
  { id: "caucasus", labelKey: "dest.tab.caucasus" },
];

export function Destinations() {
  const { t, locale } = useT();
  const [active, setActive] = useState<Region>("visa-free");
  const [selected, setSelected] = useState<DestinationDetail | null>(null);

  const items = destinations.filter((d) => d.region === active);

  return (
    <>
      <section id="destinations" className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                {t("dest.eyebrow")}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">
                {t("dest.title.a")}{" "}
                <span className="italic font-light">{t("dest.title.b")}</span>
              </h2>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 -mx-1">
              {regions.map((r) => {
                const isActive = r.id === active;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActive(r.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-ink text-white"
                        : "bg-cream text-ink/70 hover:text-ink hover:bg-brand-50"
                    }`}
                  >
                    {t(r.labelKey)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {items.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelected(d)}
                    aria-label={`${d.city[locale]} — ${t("modal.book")}`}
                    className="group relative block w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-cream text-left focus:outline-none focus:ring-4 focus:ring-brand/30"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${d.image}')` }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(14,39,41,0.85) 100%)",
                      }}
                    />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <span className="self-start text-[11px] uppercase tracking-[0.2em] font-semibold bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">
                        {t(d.tagKey)}
                      </span>

                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/75 font-medium">
                          {d.country[locale]}
                        </p>
                        <h3 className="mt-1 font-display text-3xl md:text-4xl leading-none">
                          {d.city[locale]}
                        </h3>
                        {/* Price + duration peek — only shows on hover so the
                            card stays clean by default */}
                        <div className="mt-3 flex items-center gap-3 text-sm text-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>
                            {t("modal.from")} <strong className="font-semibold">${d.priceFromUSD}</strong>
                          </span>
                          <span className="text-white/40">·</span>
                          <span>
                            {d.days} {t("modal.days")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-10 text-muted text-sm">
            {t("dest.cta")}
            <a
              href="#contact"
              className="text-brand font-medium hover:text-sun-deep underline underline-offset-4"
            >
              {t("dest.cta.link")}
            </a>
          </p>
        </div>
      </section>

      {/* Modal portal — rendered outside the section so its backdrop covers nav */}
      <DestinationModal
        destination={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}

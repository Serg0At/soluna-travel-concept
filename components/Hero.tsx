"use client";

import { motion } from "motion/react";
import { useT } from "@/lib/i18n";

const BACKGROUND_URL =
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2400&q=80";

export function Hero() {
  const { t } = useT();
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${BACKGROUND_URL}')` }}
        aria-hidden
      />

      {/* Warm tonal overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 10% 100%, rgba(200,116,14,0.35) 0%, rgba(14,39,41,0) 55%), linear-gradient(180deg, rgba(14,39,41,0.55) 0%, rgba(14,39,41,0.25) 40%, rgba(14,39,41,0.7) 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-28 md:pt-44 md:pb-32 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sun text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-5">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-white text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight">
            {t("hero.title.a")}
            <br />
            <span className="italic font-light text-cream/95">{t("hero.title.b")}</span>
          </h1>
          <p className="mt-7 max-w-xl text-white/85 text-lg md:text-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sun hover:bg-sun-deep transition-colors text-white px-7 py-4 rounded-full font-semibold shadow-lg shadow-sun/20"
            >
              {t("hero.cta.primary")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/37491341143"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-7 py-4 rounded-full font-semibold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("hero.cta.whatsapp")}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-white/65 text-sm"
          >
            {t("hero.trust")}
          </motion.p>
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(251,248,244,0) 0%, #FBF8F4 100%)" }}
        aria-hidden
      />
    </section>
  );
}

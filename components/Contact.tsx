"use client";

import { useState, FormEvent, useEffect } from "react";
import { motion } from "motion/react";
import { useT } from "@/lib/i18n";

/**
 * Contact section — multi-channel block (left) + inquiry form (right).
 *
 * Form fields are specified by the agency: destination, dates+nights,
 * travelers (with children's ages), meal preference, hotel preference + budget.
 * Long-context fields use a textarea so users can paste full requirements.
 *
 * Submit doesn't POST anywhere — it opens WhatsApp with all values pre-filled,
 * because:
 *   1. We're static-exported (output: "export"), no API routes.
 *   2. For Armenian SMB travel, WhatsApp IS the deal-closing channel; a form
 *      emailing the agent and sitting in spam for 4 days is worse than zero.
 *
 * If a Formspree/EmailJS/Cloudflare-Worker endpoint is wired later, replace
 * `handleSubmit` and keep this UI shell.
 */

const WHATSAPP_NUMBER = "37491341143";
const PHONE_DISPLAY = "+374 91 341 143";
const INSTAGRAM = "soluna_travel";

export function Contact() {
  const { t } = useT();
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    nights: "",
    people: "",
    meals: "",
    hotel: "",
    budget: "",
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDateChange = (value: string) => {
    setForm({ ...form, startDate: value });
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(t("contact.wa.prefill", form));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: pitch + channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t("contact.eyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">
              {t("contact.title.a")} <span className="italic font-light">{t("contact.title.b")}</span>
            </h2>
            <p className="mt-5 text-muted text-lg leading-relaxed">{t("contact.subtitle")}</p>

            <div className="mt-10 space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-cream hover:bg-brand-50 border border-transparent hover:border-brand/20 transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink">{t("contact.wa.title")}</p>
                  <p className="text-sm text-muted truncate">{t("contact.wa.sub")}</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted group-hover:text-brand group-hover:translate-x-1 transition-all">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-cream hover:bg-brand-50 border border-transparent hover:border-brand/20 transition-all"
              >
                <div className="w-11 h-11 rounded-full text-white flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink">@{INSTAGRAM}</p>
                  <p className="text-sm text-muted truncate">{t("contact.ig.sub")}</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted group-hover:text-brand group-hover:translate-x-1 transition-all">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-cream hover:bg-brand-50 border border-transparent hover:border-brand/20 transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink">{PHONE_DISPLAY}</p>
                  <p className="text-sm text-muted truncate">{t("contact.phone.sub")}</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted group-hover:text-brand group-hover:translate-x-1 transition-all">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-cream rounded-3xl p-7 md:p-9 border border-brand/10"
          >
            <h3 className="font-display text-2xl text-ink">{t("contact.form.title")}</h3>
            <p className="mt-1 text-sm text-muted">{t("contact.form.note")}</p>

            <div className="mt-6 space-y-4">
              <Field
                t={t}
                label={t("contact.form.dest")}
                value={form.destination}
                onChange={(v) => setForm({ ...form, destination: v })}
                placeholder={t("contact.form.dest.ph")}
              />
              <div className="grid grid-cols-1 gap-4">
                <DateField
                  label={t("contact.form.startDate")}
                  value={form.startDate}
                  onChange={handleDateChange}
                  placeholder={t("contact.form.startDate.ph")}
                />
              </div>
              <NightsSelector
                label={t("contact.form.nights")}
                value={form.nights}
                onChange={(v) => setForm({ ...form, nights: v })}
                placeholder={t("contact.form.nights.ph")}
              />
              <Field
                t={t}
                label={t("contact.form.people")}
                value={form.people}
                onChange={(v) => setForm({ ...form, people: v })}
                placeholder={t("contact.form.people.ph")}
                multiline
                rows={2}
              />
              <Field
                t={t}
                label={t("contact.form.meals")}
                value={form.meals}
                onChange={(v) => setForm({ ...form, meals: v })}
                placeholder={t("contact.form.meals.ph")}
              />
              <Field
                t={t}
                label={t("contact.form.hotel")}
                value={form.hotel}
                onChange={(v) => setForm({ ...form, hotel: v })}
                placeholder={t("contact.form.hotel.ph")}
                optional
              />
              <Field
                t={t}
                label={t("contact.form.budget")}
                value={form.budget}
                onChange={(v) => setForm({ ...form, budget: v })}
                placeholder={isMobile ? t("contact.form.budget.ph.mobile") : t("contact.form.budget.ph")}
                optional
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-sun hover:bg-sun-deep transition-colors text-white px-6 py-3.5 rounded-full font-semibold"
            >
              {t("contact.form.submit")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  t,
  label,
  value,
  onChange,
  placeholder,
  multiline,
  rows = 2,
  optional,
}: {
  t: (key: string) => string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
        {label}
        {optional && <span className="text-muted/60 font-normal ml-1">({t("common.optional")})</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl bg-white border border-brand/15 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 text-ink placeholder:text-muted/60 resize-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl bg-white border border-brand/15 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 text-ink placeholder:text-muted/60"
        />
      )}
    </div>
  );
}

function DateField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
        {label}
      </label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        title={label}
        className="w-full px-4 py-3 rounded-xl bg-white border border-brand/15 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 text-ink placeholder:text-muted/60"
      />
    </div>
  );
}

function NightsSelector({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const presets = [4, 7, 14, 21];

  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-2 mb-3">
        {presets.map((nights) => (
          <button
            key={nights}
            type="button"
            onClick={() => onChange(nights.toString())}
            className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
              value === nights.toString()
                ? "bg-brand text-white"
                : "bg-cream text-ink border border-brand/20 hover:border-brand hover:bg-brand-50"
            }`}
          >
            {nights}
          </button>
        ))}
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        title={label}
        min="1"
        max="365"
        className="w-full px-4 py-3 rounded-xl bg-white border border-brand/15 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 text-ink placeholder:text-muted/60"
      />
    </div>
  );
}

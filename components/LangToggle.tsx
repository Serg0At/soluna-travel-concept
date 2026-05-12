"use client";

import { useT, type Locale } from "@/lib/i18n";

/**
 * Two-state pill toggle: ՀԱՅ | EN
 *
 * `tone` matches the Nav's scrolled state — light borders on dark backgrounds,
 * brand-tinted on white.
 */
export function LangToggle({ tone = "white" }: { tone?: "white" | "brand" }) {
  const { locale, setLocale } = useT();

  const isWhite = tone === "white";
  const baseLabel = isWhite ? "text-white/70 hover:text-white" : "text-ink/55 hover:text-ink";
  const activeLabel = isWhite ? "text-white" : "text-ink";
  const ring = isWhite ? "border-white/25" : "border-brand/20";

  return (
    <div
      className={`inline-flex items-center rounded-full border ${ring} text-xs font-semibold tracking-wide`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("hy")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          locale === "hy"
            ? isWhite
              ? "bg-white/15 " + activeLabel
              : "bg-brand/10 text-brand-deep"
            : baseLabel
        }`}
        aria-pressed={locale === "hy"}
      >
        ՀԱՅ
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          locale === "en"
            ? isWhite
              ? "bg-white/15 " + activeLabel
              : "bg-brand/10 text-brand-deep"
            : baseLabel
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}

export type { Locale };

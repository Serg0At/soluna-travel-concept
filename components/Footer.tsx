"use client";

import { Logo } from "./Logo";
import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="relative bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo tone="white" className="h-12 w-auto" />
            <p className="mt-5 text-white/75 max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-semibold">
              {t("footer.explore")}
            </p>
            <ul className="mt-4 space-y-2.5 text-white/90 text-sm">
              <li><a href="/#services" className="hover:text-sun transition-colors">{t("nav.services")}</a></li>
              <li><a href="/#destinations" className="hover:text-sun transition-colors">{t("nav.destinations")}</a></li>
              <li><a href="/tours" className="hover:text-sun transition-colors">{t("nav.tours")}</a></li>
              <li><a href="/#about" className="hover:text-sun transition-colors">{t("nav.about")}</a></li>
              <li><a href="/#contact" className="hover:text-sun transition-colors">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-semibold">
              {t("footer.reach")}
            </p>
            <ul className="mt-4 space-y-2.5 text-white/90 text-sm">
              <li>
                <a href="https://wa.me/37491341143" target="_blank" rel="noopener" className="hover:text-sun transition-colors">
                  WhatsApp · +374 91 341 143
                </a>
              </li>
              <li>
                <a href="https://instagram.com/soluna_travel" target="_blank" rel="noopener" className="hover:text-sun transition-colors">
                  Instagram · @soluna_travel
                </a>
              </li>
              <li>
                <a href="tel:+37491341143" className="hover:text-sun transition-colors">
                  +374 91 341 143
                </a>
              </li>
              <li className="text-white/70">{t("footer.address")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Soluna Travel. {t("footer.rights")}</p>
          <p>
            {t("footer.author")} <a href="#" className="hover:text-white transition-colors underline-offset-4 underline">your name here</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

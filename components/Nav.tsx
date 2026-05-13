"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { useT } from "@/lib/i18n";

/**
 * Site nav. Two visual modes:
 *
 *  1. Transparent (white text/logo) over the home hero. Switches to solid
 *     white once the user scrolls past 40px.
 *  2. Always solid on subroutes (/tours, etc.) — those pages don't have a
 *     dark full-bleed hero, so transparent-over-light-cream would be
 *     unreadable.
 *
 * Anchor links use the form `/#section` so they navigate correctly from
 * subroutes back to the home-page sections.
 */
export function Nav() {
  const { t } = useT();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Treat the nav as "transparent over hero" only on home + before scroll.
  const transparent = isHome && !scrolled;

  const links = [
    { href: "/#destinations", label: t("nav.destinations") },
    { href: "/#services", label: t("nav.services") },
    { href: "/tours", label: t("nav.tours"), isRoute: true },
    { href: "/#about", label: t("nav.about") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-brand/10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" aria-label="Soluna Travel — home" className="block">
          <Logo tone={transparent ? "white" : "brand"} className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const isActive = l.isRoute && pathname === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : isActive
                    ? "text-brand"
                    : "text-ink/80 hover:text-brand"
                }`}
              >
                {l.label}
              </a>
            );
          })}

          <LangToggle tone={transparent ? "white" : "brand"} />

          <a
            href="https://wa.me/37491341143"
            target="_blank"
            rel="noopener"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              transparent
                ? "bg-white text-brand-deep hover:bg-cream"
                : "bg-sun text-white hover:bg-sun-deep shadow-sm"
            }`}
          >
            {t("nav.cta")}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
            transparent ? "text-white hover:bg-white/10" : "text-ink hover:bg-brand/10"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand/10 px-6 py-6 space-y-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-ink/85 hover:text-brand font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <LangToggle tone="brand" />
          </div>
          <a
            href="https://wa.me/37491341143"
            target="_blank"
            rel="noopener"
            className="inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-sun text-white"
          >
            {t("nav.cta.mobile")}
          </a>
        </div>
      )}
    </header>
  );
}

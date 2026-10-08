import React, { useState, useEffect } from "react";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { useApp } from "../context/AppContext";

export function Navbar({ whatsappNumber, whatsappMsg }) {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();
  const isDark = theme === "dark";

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 30);

      if (currentScrollY < lastScrollY || currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-['Josefin_Sans',sans-serif] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? isDark
              ? "bg-[#08090b]/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
              : "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md text-slate-900"
            : isDark
              ? "bg-transparent border-b border-transparent text-white"
              : "bg-transparent border-b border-transparent text-slate-900"
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 h-20 flex items-center justify-between">
          <a href="#inicio" className="hover:opacity-90 transition-opacity">
            <Logo dark={isDark} />
          </a>

          {/* Links Desktop */}
          <nav
            className={`hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-[0.22em] transition-colors ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <a
              href="#inicio"
              className="hover:text-[#00c8f8] transition-colors"
            >
              {t.nav.profile}
            </a>
            <a
              href="#nosotros"
              className="hover:text-[#00c8f8] transition-colors"
            >
              {t.nav.docs}
            </a>
            <a
              href="#servicios"
              className="hover:text-[#00c8f8] transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#proyectos"
              className="hover:text-[#00c8f8] transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#contacto"
              className="hover:text-[#00c8f8] transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Controles Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`flex items-center p-0.5 border rounded-sm transition-colors ${
                isDark
                  ? "border-white/10 bg-white/5"
                  : "border-slate-300 bg-slate-100"
              }`}
            >
              <button
                type="button"
                onClick={() => lang !== "es" && toggleLang()}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors ${
                  lang === "es"
                    ? "bg-[#00c8f8] text-[#08090b]"
                    : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => lang !== "en" && toggleLang()}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors ${
                  lang === "en"
                    ? "bg-[#00c8f8] text-[#08090b]"
                    : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 border rounded-sm transition-colors cursor-pointer ${
                isDark
                  ? "border-white/10 bg-white/5 text-amber-300 hover:border-cyan-500/40"
                  : "border-slate-300 bg-slate-100 text-slate-800 hover:border-cyan-500 hover:text-cyan-600 shadow-xs"
              }`}
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#00c8f8] hover:bg-[#00b2dc] text-[#08090b] text-[12px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 transition-all shadow-[0_0_20px_rgba(0,200,248,0.25)] active:scale-95"
            >
              {t.nav.quote}
            </a>
          </div>

          {/* Botón Móvil y Tablet */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-1 transition-colors cursor-pointer ${
                isDark ? "text-amber-300" : "text-slate-700"
              }`}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 bg-transparent border-none text-[#00c8f8] hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center"
              aria-label="Menú"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Móvil/Tablet */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div
            className={`fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm border-l p-7 flex flex-col justify-between font-['Josefin_Sans',sans-serif] shadow-2xl z-10 overflow-y-auto transition-colors ${
              isDark
                ? "bg-[#08090b] border-white/10 text-white"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div>
              <div
                className={`flex items-center justify-between pb-6 border-b ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00c8f8]">
                  Menú
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-1 text-[#00c8f8] cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-5 mt-8 text-base font-bold uppercase tracking-[0.2em]">
                <a
                  href="#inicio"
                  onClick={closeMenu}
                  className="py-1 hover:text-[#00c8f8] transition-colors"
                >
                  {t.nav.profile}
                </a>
                <a
                  href="#nosotros"
                  onClick={closeMenu}
                  className="py-1 hover:text-[#00c8f8] transition-colors"
                >
                  {t.nav.docs}
                </a>
                <a
                  href="#servicios"
                  onClick={closeMenu}
                  className="py-1 hover:text-[#00c8f8] transition-colors"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#proyectos"
                  onClick={closeMenu}
                  className="py-1 hover:text-[#00c8f8] transition-colors"
                >
                  {t.nav.projects}
                </a>
                <a
                  href="#contacto"
                  onClick={closeMenu}
                  className="py-1 hover:text-[#00c8f8] transition-colors"
                >
                  {t.nav.contact}
                </a>
              </nav>
            </div>

            <div
              className={`space-y-5 pt-6 border-t mt-6 ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Idioma:
                </span>
                <div className="flex border rounded-xs p-0.5 border-slate-300 bg-slate-100">
                  <button
                    type="button"
                    onClick={() => lang !== "es" && toggleLang()}
                    className={`px-3 py-1 text-xs font-bold ${
                      lang === "es"
                        ? "bg-[#00c8f8] text-[#08090b]"
                        : "text-slate-600"
                    }`}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => lang !== "en" && toggleLang()}
                    className={`px-3 py-1 text-xs font-bold ${
                      lang === "en"
                        ? "bg-[#00c8f8] text-[#08090b]"
                        : "text-slate-600"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#00c8f8] hover:bg-[#00b2dc] text-[#08090b] text-xs font-bold uppercase tracking-[0.2em] py-4 shadow-lg active:scale-95 transition-all"
              >
                <span>{t.nav.quote}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

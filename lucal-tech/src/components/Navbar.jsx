import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { useApp } from "../context/AppContext";

export function Navbar({ whatsappNumber, whatsappMsg }) {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activa la opacidad al scrollear más de 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg text-white"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm text-slate-900"
          : "bg-transparent border-b border-white/5 text-white"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo dark={isDark || !isScrolled} />
        </a>

        {/* Links de Navegación */}
        <nav
          className={`hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wider transition-colors ${
            isScrolled
              ? isDark
                ? "text-slate-300"
                : "text-slate-700"
              : "text-slate-200 drop-shadow"
          }`}
        >
          <a href="#inicio" className="hover:text-[#a4adfd] transition-colors">
            {t.nav.profile}
          </a>
          <a
            href="#nosotros"
            className="hover:text-[#a4adfd] transition-colors"
          >
            {t.nav.docs}
          </a>
          <a
            href="#servicios"
            className="hover:text-[#a4adfd] transition-colors"
          >
            {t.nav.services}
          </a>
          <a
            href="#proyectos"
            className="hover:text-[#a4adfd] transition-colors"
          >
            {t.nav.projects}
          </a>
          <a
            href="#contacto"
            className="hover:text-[#a4adfd] transition-colors"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Controles de Idioma, Tema y Cotización */}
        <div className="flex items-center gap-2.5">
          {/* Selector de Banderas (Bordes rectos) */}
          <div
            className={`flex items-center gap-1 p-0.5 border transition-colors ${
              isScrolled
                ? isDark
                  ? "bg-slate-900 border-slate-700"
                  : "bg-slate-100 border-slate-300"
                : "bg-black/30 backdrop-blur-sm border-white/10"
            }`}
          >
            {/* Bandera ES */}
            <button
              onClick={() => lang !== "es" && toggleLang()}
              title="Español"
              className={`p-1.5 transition-all flex items-center justify-center ${
                lang === "es"
                  ? isDark || !isScrolled
                    ? "bg-slate-800 shadow-sm border border-slate-600"
                    : "bg-white shadow-sm border border-slate-300"
                  : "opacity-40 hover:opacity-80"
              }`}
            >
              <svg className="w-5 h-3.5" viewBox="0 0 750 500">
                <rect width="750" height="500" fill="#c60b1e" />
                <rect width="750" height="250" y="125" fill="#ffc400" />
              </svg>
            </button>

            {/* Bandera EN */}
            <button
              onClick={() => lang !== "en" && toggleLang()}
              title="English"
              className={`p-1.5 transition-all flex items-center justify-center ${
                lang === "en"
                  ? isDark || !isScrolled
                    ? "bg-slate-800 shadow-sm border border-slate-600"
                    : "bg-white shadow-sm border border-slate-300"
                  : "opacity-40 hover:opacity-80"
              }`}
            >
              <svg className="w-5 h-3.5" viewBox="0 0 7410 3900">
                <rect width="7410" height="3900" fill="#b22234" />
                <path
                  d="M0,450H7410M0,1050H7410M0,1650H7410M0,2250H7410M0,2850H7410M0,3450H7410"
                  stroke="#fff"
                  strokeWidth="300"
                />
                <rect width="2964" height="2100" fill="#3c3b6e" />
                <circle
                  cx="1482"
                  cy="1050"
                  r="400"
                  fill="#ffffff"
                  opacity="0.9"
                />
              </svg>
            </button>
          </div>

          {/* Toggle de Modo Claro / Oscuro */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 text-xs transition-all border ${
              isScrolled
                ? isDark
                  ? "border-slate-700 bg-slate-900 text-amber-300 hover:border-slate-500"
                  : "border-slate-300 bg-slate-100 text-slate-800 hover:border-slate-400"
                : "border-white/10 bg-black/30 backdrop-blur-sm text-amber-300 hover:border-white/30"
            }`}
            title={isDark ? "Modo claro" : "Modo oscuro"}
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Botón Cotizar */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#a4adfd] hover:bg-[#8e9afc] text-[#0b0f19] text-[11px] font-bold tracking-wider uppercase px-5 py-2.5 transition-colors shadow-sm"
          >
            {t.nav.quote}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

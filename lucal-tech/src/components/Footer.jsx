import React from "react";
import { useApp } from "../context/AppContext";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const { t, theme } = useApp();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative w-full border-t font-['Josefin_Sans',sans-serif] overflow-hidden transition-colors duration-300 ${
        isDark
          ? "border-white/10 bg-[#06080d] text-slate-400"
          : "border-slate-200 bg-slate-50 text-slate-600"
      }`}
    >
      {/* Luz tenue de fondo en la base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#00c8f8]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* ── CUERPO PRINCIPAL DEL FOOTER (GRID 4 COLUMNAS) ── */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-16 pb-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b ${
            isDark ? "border-white/5" : "border-slate-200"
          }`}
        >
          {/* Columna 1: Marca & Propuesta */}
          <div className="lg:col-span-4 space-y-5">
            <Logo dark={isDark} />
            <p
              className={`text-sm font-light leading-relaxed max-w-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Estudio de ingeniería digital enfocado en plataformas SaaS de alto
              rendimiento, sistemas en tiempo real e integraciones cloud
              transaccionales.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-emerald-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sistemas & Despliegues 100% Operativos</span>
            </div>
          </div>

          {/* Columna 2: Menú de Navegación */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#00c8f8] font-bold block">
              // Navegación
            </span>
            <ul
              className={`space-y-2.5 text-sm uppercase tracking-wider font-semibold ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <li>
                <a
                  href="#inicio"
                  className={
                    isDark ? "hover:text-white" : "hover:text-slate-950"
                  }
                >
                  {t.nav.profile}
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className={
                    isDark ? "hover:text-white" : "hover:text-slate-950"
                  }
                >
                  {t.nav.docs}
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className={
                    isDark ? "hover:text-white" : "hover:text-slate-950"
                  }
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className={
                    isDark ? "hover:text-white" : "hover:text-slate-950"
                  }
                >
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className={
                    isDark ? "hover:text-white" : "hover:text-slate-950"
                  }
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Productos & Ecosistema */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#00c8f8] font-bold block">
              // Ecosistema SaaS
            </span>
            <ul
              className={`space-y-2.5 text-sm font-light ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <li>
                <a
                  href="https://stockial.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00c8f8] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Stockial POS & Facturación</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://alkilo-ia.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00c8f8] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>alkilo.ia Marketplace</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://turneq.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00c8f8] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>turneq Queue Suite</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.vkrenderstudio.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00c8f8] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>VK Render Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Retorno & Legal */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end space-y-6">
            <button
              type="button"
              onClick={scrollToTop}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-widest transition-all cursor-pointer group ${
                isDark
                  ? "border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00c8f8]"
                  : "border-slate-300 hover:border-cyan-500 bg-white hover:bg-slate-100 text-slate-700 hover:text-cyan-600 shadow-xs"
              }`}
              title="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="text-left lg:text-right text-[11px] font-mono space-y-1">
              <span
                className={`block font-semibold ${isDark ? "text-slate-400" : "text-slate-700"}`}
              >
                Rosario · Santa Fe
              </span>
              <span className={isDark ? "text-slate-500" : "text-slate-500"}>
                Argentina / Worldwide
              </span>
            </div>
          </div>
        </div>

        {/* ── BARRA INFERIOR DE DERECHOS Y COPYRIGHT ── */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isDark ? "text-slate-500" : "text-slate-500"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`font-bold tracking-wider ${isDark ? "text-white" : "text-slate-900"}`}
            >
              LUCAL<span className="text-[#00c8f8]">.TECH</span>
            </span>
            <span>—</span>
            <span>{t.footer.rights || "Todos los derechos reservados."}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] tracking-wider">
            <span className="text-[#00c8f8] font-bold">SECURED STACK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

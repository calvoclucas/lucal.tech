import React from "react";
import { useApp } from "../context/AppContext";
import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  const { t, theme } = useApp();
  const isDark = theme === "dark";

  return (
    <section
      id="nosotros"
      className={`relative w-full py-16 sm:py-24 font-['Josefin_Sans',sans-serif] overflow-hidden transition-colors ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00c8f8]/8 blur-[180px] rounded-full pointer-events-none" />

      {/* ── ENCABEZADO EDITORIAL ── */}
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b ${
          isDark ? "border-white/5" : "border-slate-200"
        }`}
      >
        <div>
          <div
            className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-semibold mb-4 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8f8]" />
            <span>Engineering & Strategy</span>
          </div>
          <h2
            className={`text-4xl sm:text-6xl font-bold tracking-tight lowercase leading-[1.02] ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            about our <br />
            vision<span className="text-[#00c8f8]">.</span>
          </h2>
        </div>

        <p
          className={`max-w-md text-sm sm:text-base font-light leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Diseñamos sistemas con arquitectura pensada para escalar desde el día
          uno, combinando simplicidad estructural con precisión técnica.
        </p>
      </div>

      {/* ── FILA SUPERIOR: IMAGEN A LA IZQUIERDA + TEXTO A LA DERECHA ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
        {/* Lado Izquierdo */}
        <div className="lg:col-span-6 relative">
          <div
            className={`absolute -top-5 -right-4 sm:-right-6 z-20 w-48 sm:w-52 p-4 rounded-xl border backdrop-blur-xl shadow-2xl text-left hidden sm:block ${
              isDark
                ? "bg-[#0e1117]/90 border-white/10 text-white"
                : "bg-white/95 border-slate-200 text-slate-900 shadow-slate-200/80"
            }`}
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-mono">
              <span>Core Engine</span>
              <span className="text-emerald-500 font-bold">ONLINE</span>
            </div>
            <p
              className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Full-Stack Engineering
            </p>
            <p
              className={`text-[11px] mt-1 font-light leading-snug ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Microservicios desacoplados y transacciones atómicas seguras.
            </p>
          </div>

          <div
            className={`relative rounded-2xl overflow-hidden border shadow-xl aspect-[4/3] group ${
              isDark
                ? "border-white/10 bg-[#090b0e]"
                : "border-slate-200 bg-white"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Programación y código fuente en pantalla"
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t opacity-80 pointer-events-none ${
                isDark
                  ? "from-[#090b0e] via-transparent to-transparent"
                  : "from-white/70 via-transparent to-transparent"
              }`}
            />
            <div
              className={`absolute bottom-4 left-4 text-xs font-mono font-medium ${
                isDark
                  ? "text-slate-300"
                  : "text-slate-900 bg-white/80 px-2 py-0.5 rounded-xs"
              }`}
            >
              <span className="text-[#00c8f8] font-bold">lucal.tech</span> /
              core_development
            </div>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="lg:col-span-6 space-y-6">
          <p
            className={`text-lg sm:text-xl font-normal leading-relaxed border-l-2 border-[#00c8f8] pl-5 ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            {t.about.p1}
          </p>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed pl-5 ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            {t.about.p2}
          </p>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed pl-5 ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            {t.about.p3}
          </p>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed pl-5 ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            {t.about.p4}
          </p>

          <div className="pt-4 pl-5">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00c8f8] hover:text-[#0099cc] transition-colors"
            >
              <span>Trabajemos juntos</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>

      {/* ── IMAGEN INFERIOR PANORÁMICA ── */}
      <div
        className={`w-full relative rounded-2xl overflow-hidden border shadow-xl h-64 sm:h-80 lg:h-96 group ${
          isDark
            ? "border-white/10 bg-[#090b0e]"
            : "border-slate-200 bg-slate-100"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Equipo de ingeniería y desarrollo trabajando"
          className="w-full h-full object-cover brightness-[0.8] contrast-[1.1] group-hover:scale-102 transition-transform duration-700"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${
            isDark
              ? "from-[#08090b] via-transparent to-[#08090b]/40"
              : "from-slate-900/60 via-transparent to-transparent"
          }`}
        />

        <div className="absolute bottom-6 left-6 sm:left-10 z-10 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#00c8f8] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-white font-bold drop-shadow-md">
            Realtime Collaboration · Rosario / Remote
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

import React from "react";
import { useApp } from "../context/AppContext";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  const { t, theme } = useApp();
  const isDark = theme === "dark";

  return (
    <section
      id="servicios"
      className={`relative w-full py-24 sm:py-32 font-['Josefin_Sans',sans-serif] overflow-hidden transition-colors duration-300 ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      {/* ── IMAGEN DIAGONAL MARCADA QUE ATRAVIESA Y CORTA LA SECCIÓN ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="w-full h-full relative"
          style={{
            clipPath: "polygon(0 32%, 100% 8%, 100% 92%, 0 100%)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
            alt="Infraestructura de hardware y servidores"
            className={`w-full h-full object-cover filter contrast-135 saturate-110 scale-110 transition-opacity ${
              isDark ? "opacity-45 brightness-90" : "opacity-25 brightness-110"
            }`}
          />

          {/* Línea de luz cian en el borde superior del corte */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00c8f8]/70 to-transparent shadow-[0_0_15px_#00c8f8]" />

          {/* Viñetas degradadas para fundir extremos */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isDark
                ? "from-[#070b14] via-transparent to-[#070b14]/90"
                : "from-[#f8fafc] via-transparent to-[#f8fafc]/90"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              isDark
                ? "from-[#070b14]/80 via-transparent to-[#070b14]"
                : "from-[#f8fafc]/80 via-transparent to-[#f8fafc]"
            }`}
          />
        </div>
      </div>

      {/* Resplandor ambiental de acento en el centro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00c8f8]/10 blur-[170px] rounded-full pointer-events-none" />

      {/* ── ENCABEZADO EDITORIAL ASIMÉTRICO ── */}
      <div
        className={`relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b ${
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
            <span>Core Capabilities & Solutions</span>
          </div>
          <h2
            className={`text-4xl sm:text-6xl font-bold tracking-tight lowercase leading-[1.02] ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            our specialized <br />
            services<span className="text-[#00c8f8]">.</span>
          </h2>
        </div>

        <p
          className={`max-w-md text-sm sm:text-base font-light leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Arquitectura robusta, desarrollo ágil y despliegues estables diseñados
          para impulsar operaciones comerciales exigentes.
        </p>
      </div>

      {/* ── GRILLA DE SERVICIOS FLOTANTES (GLASS EFFECT CON CONTRASTE) ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {t.services.items.map((item, idx) => (
          <div
            key={item.index || idx}
            className={`group relative p-8 sm:p-9 rounded-2xl backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1 ${
              isDark
                ? "bg-[#080a0f]/90 border-white/10 hover:border-cyan-500/50"
                : "bg-white/90 border-slate-200 hover:border-cyan-500/60 shadow-slate-200/80"
            }`}
          >
            {/* Resplandor interno sutil en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8f8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              {/* Header de la tarjeta */}
              <div
                className={`flex items-center justify-between pb-6 border-b ${
                  isDark ? "border-white/5" : "border-slate-100"
                }`}
              >
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#00c8f8]">
                  {String(idx + 1).padStart(2, "0")} //
                </span>
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isDark
                      ? "border-white/10 text-slate-500 group-hover:border-cyan-500/50 group-hover:text-[#00c8f8]"
                      : "border-slate-200 text-slate-500 group-hover:border-cyan-500 group-hover:text-cyan-600 bg-slate-50"
                  } group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </div>
              </div>

              {/* Título */}
              <h3
                className={`text-xl sm:text-2xl font-bold tracking-wide mt-6 mb-3 group-hover:text-[#00c8f8] transition-colors ${
                  isDark ? "text-white" : "text-slate-950"
                }`}
              >
                {item.title}
              </h3>

              {/* Descripción */}
              <p
                className={`text-sm font-light leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.desc}
              </p>
            </div>

            {/* Pie de tarjeta */}
            <div
              className={`relative z-10 pt-8 mt-6 border-t flex items-center justify-between text-xs font-mono ${
                isDark
                  ? "border-white/5 text-slate-500"
                  : "border-slate-100 text-slate-400"
              }`}
            >
              <span className="uppercase tracking-widest text-[10px]">
                Production Ready
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isDark
                    ? "bg-slate-700 group-hover:bg-[#00c8f8]"
                    : "bg-slate-300 group-hover:bg-[#00c8f8]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export function HeroSection({ whatsappNumber = "5491124868309" }) {
  const { theme } = useApp();
  const isDark = theme === "dark";

  const partners = [
    "REACT",
    "NEXT.JS",
    "NODE.JS",
    "POSTGRESQL",
    "SUPABASE",
    "ARCA API",
  ];

  return (
    <section
      className={`relative w-full min-h-[92vh] flex flex-col justify-between pt-6 pb-12 font-['Josefin_Sans',sans-serif] overflow-hidden transition-colors duration-300 ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      {/* ── Malla técnica de fondo adaptada ── */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity ${
          isDark ? "opacity-[0.04]" : "opacity-[0.06]"
        }`}
        style={{
          backgroundImage: `linear-gradient(${isDark ? "#ffffff" : "#000000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#ffffff" : "#000000"} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Luces volumétricas orgánicas */}
      <div
        className={`absolute top-1/4 right-1/4 w-[550px] h-[550px] blur-[160px] rounded-full pointer-events-none ${
          isDark ? "bg-[#00c8f8]/14" : "bg-[#00c8f8]/20"
        }`}
      />
      <div
        className={`absolute bottom-1/3 left-1/10 w-[420px] h-[420px] blur-[180px] rounded-full pointer-events-none ${
          isDark ? "bg-purple-600/10" : "bg-purple-400/15"
        }`}
      />

      {/* Ondas vectoriales adaptadas */}
      <svg
        className={`absolute bottom-10 left-0 w-full h-48 pointer-events-none ${
          isDark ? "opacity-20" : "opacity-35"
        }`}
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,192L60,202.7C120,213,240,235,360,213.3C480,192,600,128,720,122.7C840,117,960,171,1080,192C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          stroke="url(#gradient-wave)"
          strokeWidth="1.5"
        />
        <path
          d="M0,96L80,122.7C160,149,320,203,480,208C640,213,800,171,960,144C1120,117,1280,107,1360,101.3L1440,96"
          stroke="url(#gradient-wave-2)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient
            id="gradient-wave"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00c8f8" stopOpacity="0" />
            <stop offset="0.5" stopColor="#00c8f8" stopOpacity="0.8" />
            <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="gradient-wave-2"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={isDark ? "#ffffff" : "#0f172a"} stopOpacity="0" />
            <stop offset="0.5" stopColor="#00c8f8" stopOpacity="0.6" />
            <stop
              offset="1"
              stopColor={isDark ? "#ffffff" : "#0f172a"}
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* ── CUERPO PRINCIPAL ASIMÉTRICO EXTENDIDO ── */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto relative z-10">
        {/* Lado Izquierdo */}
        <div className="lg:col-span-6 space-y-7">
          <div
            className={`inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.3em] font-semibold ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8f8]" />
            <span>Software & Architecture</span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.98] lowercase transition-colors ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            trusted <br />
            software <br />
            partner<span className="text-[#00c8f8]">.</span>
          </h1>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed max-w-lg transition-colors ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Desarrollamos soluciones web de alto impacto, plataformas
            transaccionales y microservicios escalables con foco en precisión
            técnica.
          </p>

          <div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Lucal TECH! Me gustaría cotizar un proyecto.")}`}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all shadow-xl active:scale-95 ${
                isDark
                  ? "bg-white hover:bg-slate-200 text-[#08090b]"
                  : "bg-slate-950 hover:bg-slate-800 text-white shadow-slate-300"
              }`}
            >
              <span>Consultar Proyecto</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Lado Derecho: Escultura Cromática 3D + Ficha Técnica */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
          <div
            className={`absolute -top-6 right-2 sm:right-6 z-20 w-48 sm:w-52 p-4 backdrop-blur-xl shadow-2xl text-left transition-colors border rounded-xl ${
              isDark
                ? "bg-[#0e1117]/85 border-white/10 text-white"
                : "bg-white/90 border-slate-200 text-slate-900 shadow-slate-200/80"
            }`}
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-500 mb-1.5 font-mono">
              <span>Stack Status</span>
              <span className="text-emerald-500 font-bold">LIVE</span>
            </div>
            <p
              className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Arquitecturas Cloud & Edge
            </p>
            <p
              className={`text-[11px] mt-1 font-light leading-snug ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Despliegue continuo con latencia mínima y sincronización en tiempo
              real.
            </p>
          </div>

          <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square flex items-center justify-center">
            <div className="relative w-64 sm:w-80 aspect-square rounded-full p-[2px] bg-gradient-to-tr from-[#00c8f8] via-purple-600 to-amber-500 shadow-[0_0_100px_rgba(0,200,248,0.25)]">
              <div
                className={`w-full h-full rounded-full overflow-hidden relative flex items-center justify-center transition-colors ${
                  isDark ? "bg-[#08090b]" : "bg-slate-950"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00c8f8]/25 via-transparent to-pink-500/20 mix-blend-screen" />
                <div className="w-44 h-44 rounded-full bg-gradient-to-tl from-cyan-400/35 to-transparent blur-2xl" />

                <div className="relative z-10 text-center font-mono">
                  <span className="text-3xl font-black tracking-widest text-white block">
                    LT<span className="text-[#00c8f8]">.</span>
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400 block mt-1">
                    ENGINEERING
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 w-3/4 h-8 bg-gradient-to-r from-transparent via-[#00c8f8]/35 to-transparent blur-xl rounded-full" />
          </div>
        </div>
      </div>

      {/* ── STACK HORIZONTAL EN TODO EL ANCHO ── */}
      <div
        className={`w-full pt-10 border-t relative z-10 px-6 sm:px-10 lg:px-14 xl:px-20 transition-colors ${
          isDark ? "border-white/5" : "border-slate-200"
        }`}
      >
        <div
          className={`flex flex-wrap items-center justify-between gap-5 transition-opacity ${
            isDark
              ? "opacity-40 hover:opacity-85 text-slate-300"
              : "opacity-60 hover:opacity-100 text-slate-700"
          }`}
        >
          {partners.map((item, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

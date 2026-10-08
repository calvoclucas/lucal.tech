import React from "react";
import { ArrowUpRight, Terminal, CheckCircle2, Cpu } from "lucide-react";
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
      {/* ── VIDEO DE FONDO ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* ── OVERLAY DE CONTRASTE Y TINTA ADAPTATIVA ── */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-500 z-0 ${
          isDark
            ? "bg-[#08090b]/85 backdrop-blur-[2px]"
            : "bg-white/75 backdrop-blur-[2px]"
        }`}
      />

      {/* ── Malla técnica sobre el video ── */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity z-0 ${
          isDark ? "opacity-[0.05]" : "opacity-[0.06]"
        }`}
        style={{
          backgroundImage: `linear-gradient(${isDark ? "#ffffff" : "#000000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#ffffff" : "#000000"} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Luces volumétricas orgánicas */}
      <div
        className={`absolute top-1/4 right-1/4 w-[550px] h-[550px] blur-[160px] rounded-full pointer-events-none z-0 ${
          isDark ? "bg-[#00c8f8]/15" : "bg-[#00c8f8]/20"
        }`}
      />
      <div
        className={`absolute bottom-1/3 left-1/10 w-[420px] h-[420px] blur-[180px] rounded-full pointer-events-none z-0 ${
          isDark ? "bg-purple-600/10" : "bg-purple-400/15"
        }`}
      />

      {/* Ondas vectoriales adaptadas */}
      <svg
        className={`absolute bottom-10 left-0 w-full h-48 pointer-events-none z-0 ${
          isDark ? "opacity-25" : "opacity-35"
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

      {/* ── CUERPO PRINCIPAL ASIMÉTRICO ── */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center my-auto relative z-10">
        {/* Lado Izquierdo */}
        <div className="lg:col-span-6 space-y-7">
          <div
            className={`inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.3em] font-semibold ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8f8] shadow-[0_0_8px_#00c8f8]" />
            <span>Software & Architecture</span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.98] lowercase transition-colors ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            trusted <br />
            software <br />
            partner
            <span className="text-[#00c8f8] drop-shadow-[0_0_12px_rgba(0,200,248,0.6)]">
              .
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed max-w-lg transition-colors ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Desarrollamos soluciones web de alto impacto, plataformas
            transaccionales y microservicios escalables con foco en precisión
            técnica.
          </p>

          <div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hola Lucal TECH! Me gustaría cotizar un proyecto.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 active:scale-95 border ${
                isDark
                  ? "bg-white text-[#08090b] border-white/20 hover:bg-slate-100 hover:shadow-[0_0_25px_rgba(0,200,248,0.45)] hover:border-[#00c8f8]"
                  : "bg-slate-950 text-white border-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-300/60 hover:shadow-[0_0_20px_rgba(0,200,248,0.35)]"
              }`}
            >
              <span>Consultar Proyecto</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>

      {/* ── STACK HORIZONTAL EN TODO EL ANCHO ── */}
      <div
        className={`w-full pt-10 border-t relative z-10 px-6 sm:px-10 lg:px-14 xl:px-20 transition-colors ${
          isDark
            ? "border-white/10 bg-gradient-to-t from-[#08090b]/80 to-transparent"
            : "border-slate-200/80 bg-gradient-to-t from-white/70 to-transparent"
        }`}
      >
        <div
          className={`flex flex-wrap items-center justify-between gap-5 transition-all duration-300 ${
            isDark
              ? "text-slate-200 opacity-80 hover:opacity-100"
              : "text-slate-800 opacity-80 hover:opacity-100"
          }`}
        >
          {partners.map((item, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-mono transition-transform duration-200 hover:scale-105 hover:text-[#00c8f8]"
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

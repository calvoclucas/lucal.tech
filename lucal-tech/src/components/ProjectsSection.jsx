import React from "react";
import { ArrowUpRight, Globe, ExternalLink, Star } from "lucide-react";
import { useApp } from "../context/AppContext";

const PROJECTS_DATA = [
  {
    id: "stockial",
    title: "Stockial",
    subtitle: "Control de Stock, POS & Facturación con IA",
    badge: "SaaS Insignia",
    rating: "5.0",
    description:
      "Plataforma integral para comercios y empresas: gestión de inventario en tiempo real, facturación electrónica integrada (ARCA), punto de venta (POS) y procesamiento automatizado de comprobantes con Inteligencia Artificial.",
    techs: [
      "React / Next.js",
      "AI Gemini Vision",
      "ARCA Invoicing",
      "Supabase",
      "Tailwind CSS",
    ],
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fstockial.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url",
    url: "https://stockial.vercel.app/",
  },
  {
    id: "alkilo-ia",
    title: "alkilo.ia",
    subtitle: "Marketplace & Alquiler de Bienes con IA",
    badge: "Plataforma en Producción",
    rating: "5.0",
    description:
      "Ecosistema digital de alquiler de equipamiento, herramientas, tecnología y vehículos. Contratos digitales automatizados, garantías y gestión integral de transacciones de alquiler sin inmovilizar capital.",
    techs: [
      "React",
      "AI Matching",
      "Digital Contracts",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Falkilo-ia.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url",
    url: "https://alkilo-ia.vercel.app/",
  },
  {
    id: "turneq",
    title: "turneq",
    subtitle: "Enterprise Queue Suite",
    badge: "SaaS Propio",
    rating: "4.9",
    description:
      "Plataforma de gestión de turnos cloud con Smart TV, síntesis de voz continua y tótems táctiles sincronizados en tiempo real vía WebSockets.",
    techs: ["React", "Supabase", "Tailwind CSS", "WebSockets"],
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fturneq.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    url: "https://turneq.vercel.app",
  },
  {
    id: "vkrenderstudio",
    title: "VK Render Studio",
    subtitle: "Architectural Visualization Studio",
    badge: "Sitio en Producción",
    rating: "5.0",
    description:
      "Plataforma web internacional para estudio de visualización arquitectónica y renders 3D. Diseño minimalista, soporte multi-idioma (ES/EN) y optimización SEO.",
    techs: ["Next.js / React", "Tailwind CSS", "Vercel", "Custom Domain"],
    image: "/projects/vkrender.png",
    url: "https://www.vkrenderstudio.com",
  },
  {
    id: "puro-andar",
    title: "Puro Andar",
    subtitle: "Turismo & Traslados",
    badge: "Plataforma en Producción",
    rating: "4.9",
    description:
      "Plataforma web de viajes y traslados turísticos. Catálogo de destinos, panel administrativo dinámico, reserva rápida y atención directa.",
    techs: ["React", "Tailwind CSS", "Vercel", "Data Management"],
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fpuroandar.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url",
    url: "https://puroandar.vercel.app/",
  },
  {
    id: "transporte-scropanich",
    title: "Transporte Scropanich",
    subtitle: "Logística & Transporte de Cargas",
    badge: "Sitio Corporativo",
    rating: "4.9",
    description:
      "Portal web institucional para empresa de transporte de cargas y encomiendas. Módulos de servicios, mapa de localidades cubiertas y cotización rápida.",
    techs: ["React", "Tailwind CSS", "SEO & Performance", "Custom Domain"],
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Ftransportescropanich.com%2F&screenshot=true&meta=false&embed=screenshot.url",
    url: "https://transportescropanich.com/",
  },
];

export function ProjectsSection() {
  const { theme } = useApp();
  const isDark = theme === "dark";

  return (
    <section
      id="proyectos"
      className={`relative w-full py-20 sm:py-28 font-['Josefin_Sans',sans-serif] overflow-hidden transition-colors ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#00c8f8]/6 blur-[190px] rounded-full pointer-events-none" />

      {/* ── ENCABEZADO EDITORIAL ASIMÉTRICO ── */}
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
            <span>Selected Works & Case Studies</span>
          </div>
          <h2
            className={`text-4xl sm:text-6xl font-bold tracking-tight lowercase leading-[1.02] ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            featured <br />
            projects<span className="text-[#00c8f8]">.</span>
          </h2>
        </div>

        <p
          className={`max-w-md text-sm sm:text-base font-light leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Plataformas digitales y sistemas en producción diseñados con
          arquitecturas de alto rendimiento, interfaces reactivas y despliegue
          continuo.
        </p>
      </div>

      {/* ── GRILLA DE PROYECTOS TIPO BROWSER WINDOW ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS_DATA.map((proj, idx) => (
          <a
            key={proj.id}
            href={proj.url}
            target="_blank"
            rel="noreferrer"
            className={`group relative rounded-2xl border transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5 ${
              isDark
                ? "bg-[#080a0f] border-white/10 hover:border-cyan-500/50"
                : "bg-white border-slate-200 hover:border-cyan-500/60 shadow-slate-200/70"
            }`}
          >
            {/* 1. Header de ventana de navegador */}
            <div
              className={`flex items-center justify-between px-5 py-3.5 border-b transition-colors ${
                isDark
                  ? "bg-[#0e1118] border-white/5"
                  : "bg-slate-100/80 border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span
                  className={`ml-3 text-[11px] font-mono flex items-center gap-1.5 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-[#00c8f8]" />
                  {proj.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[11px] font-mono text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded-xs">
                  <Star className="w-3 h-3 fill-amber-500" />
                  {proj.rating}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00c8f8] font-bold hidden sm:inline">
                  PROYECTO_{String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* 2. Captura Web con zoom */}
            <div
              className={`relative w-full h-64 sm:h-76 overflow-hidden ${
                isDark ? "bg-[#06080d]" : "bg-slate-100"
              }`}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter contrast-[1.05]"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";
                }}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${
                  isDark
                    ? "from-[#080a0f] via-transparent to-transparent opacity-95"
                    : "from-white/95 via-transparent to-transparent opacity-90"
                }`}
              />

              {/* Badge superior */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full border backdrop-blur-md text-[10px] font-bold uppercase tracking-widest shadow-md ${
                    isDark
                      ? "bg-[#08090b]/85 border-white/15 text-slate-200"
                      : "bg-white/95 border-slate-300 text-slate-900"
                  }`}
                >
                  {proj.badge}
                </span>
              </div>

              {/* Botón flotante central en hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00c8f8] text-[#08090b] text-xs font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,200,248,0.5)]">
                  <span>Visitar Web</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* 3. Contenido editorial */}
            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl font-bold tracking-wide group-hover:text-[#00c8f8] transition-colors leading-tight ${
                        isDark ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#00c8f8] mt-1 font-mono">
                      {proj.subtitle}
                    </p>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center group-hover:border-cyan-500/50 group-hover:text-[#00c8f8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1 ${
                      isDark
                        ? "border-white/10 text-slate-400"
                        : "border-slate-300 text-slate-600 bg-slate-50"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                  </div>
                </div>

                <p
                  className={`text-sm font-light leading-relaxed pt-1 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {proj.description}
                </p>

                {/* Tags de Tecnologías */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {proj.techs.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className={`px-2.5 py-1 rounded border text-[11px] font-mono transition-colors ${
                        isDark
                          ? "bg-white/[0.04] border-white/5 text-slate-300"
                          : "bg-slate-100 border-slate-200 text-slate-700 font-medium"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer con estado de despliegue */}
              <div
                className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-mono ${
                  isDark
                    ? "border-white/5 text-slate-500"
                    : "border-slate-200 text-slate-500"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span
                    className={
                      isDark ? "text-slate-400" : "text-slate-700 font-medium"
                    }
                  >
                    Live Production
                  </span>
                </span>
                <span className="group-hover:text-[#00c8f8] transition-colors font-bold uppercase tracking-wider text-[11px]">
                  Ver en vivo &rarr;
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

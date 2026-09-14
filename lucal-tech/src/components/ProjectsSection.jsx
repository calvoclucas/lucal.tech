import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import projectsData from "../data/projects.json";

export function ProjectsSection({ projects = projectsData }) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="proyectos"
      className="py-24 px-4 sm:px-6 bg-slate-50/60 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Cabecera estilo Agency */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">
              <span>//</span>
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Sistemas y <span className="text-blue-600">Casos Reales</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md font-medium">
              Software en producción desplegado con arquitecturas cloud
              escalables y sincronización en tiempo real.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition shadow-xs cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition shadow-md shadow-blue-600/30 cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto scroll-smooth pb-4"
        >
          {projects.map((p) => {
            const hasLink = p.url && p.url !== "#";

            return (
              <div
                key={p.id}
                className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                {/* Cabecera Visual con Captura de Fondo + Capa Degradé */}
                <div className="h-56 rounded-2xl relative overflow-hidden flex flex-col justify-between p-6 shadow-inner bg-slate-900">
                  {/* Foto de fondo real del sitio web */}
                  {p.image && (
                    <img
                      src={p.image}
                      alt={`Preview de ${p.title}`}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-500"
                      loading="lazy"
                    />
                  )}

                  {/* Capa de degradé sobre la imagen para contraste tipográfico */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${p.gradient} ${
                      p.image
                        ? "opacity-80 group-hover:opacity-70"
                        : "opacity-100"
                    } transition-opacity duration-300`}
                  />

                  {/* Badges superiores */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                      {p.badge}
                    </span>
                    <div className="px-2.5 py-1 rounded-full bg-white/95 text-slate-900 text-[11px] font-bold flex items-center gap-1 shadow-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{p.rating}</span>
                    </div>
                  </div>

                  {/* Título y subtítulo sobre el fondo */}
                  <div className="z-10">
                    <h3 className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-200 font-medium drop-shadow-xs">
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                {/* Contenido / Descripción */}
                <div className="space-y-4 px-1 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {p.description}
                  </p>

                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    {/* Tags Tecnológicos */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.techs.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Botón de Enlace */}
                    <div className="flex items-center justify-between pt-1">
                      {hasLink ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider transition group/link"
                        >
                          <span>Visitar producción</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-slate-400 uppercase">
                          Desarrollo Interno
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

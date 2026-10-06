import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export function ProjectsSection() {
  const { t, theme } = useApp();
  const isDark = theme === "dark";

  return (
    <div id="proyectos">
      {/* Título de sección */}
      <div className="mb-12 inline-block">
        <h2 className="hero-title-presentation text-2xl sm:text-4xl text-[#a4adfd]">
          {t.projects.title}
        </h2>
        <div className="h-[2px] w-full bg-[#a4adfd] mt-1 rounded-full opacity-90" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Listado con tipografía contrastada */}
        <div className="lg:col-span-6 space-y-10">
          {t.projects.items.map((proj) => (
            <div key={proj.index} className="space-y-2 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                {/* Título del proyecto (Visible tanto en fondo blanco como negro) */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-[19px] sm:text-[21px] font-bold tracking-tight inline-flex items-center gap-1.5 transition-colors ${
                    isDark
                      ? "text-slate-900 group-hover:text-[#7d8cf7]" // Si la franja de Projects es blanca en modo dark
                      : "text-slate-900 group-hover:text-[#7d8cf7]"
                  }`}
                >
                  <span>
                    {proj.index} {proj.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Categoría / Etiqueta */}
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-500">
                  {proj.category}
                </span>
              </div>

              {/* Descripción con color visible y buen contraste */}
              <p className="text-[14px] leading-relaxed text-slate-700 font-normal">
                {proj.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Columna Derecha: Paneles de imágenes asimétricas */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden h-[300px] sm:h-[380px] bg-slate-100 border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80"
              alt="Project screen 1"
              className="w-full h-full object-cover"
              style={{
                clipPath: "polygon(0 0, 100% 12%, 100% 100%, 0% 88%)",
              }}
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-[300px] sm:h-[380px] mt-6 bg-slate-100 border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80"
              alt="Project screen 2"
              className="w-full h-full object-cover"
              style={{
                clipPath: "polygon(0 12%, 100% 0, 100% 88%, 0 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

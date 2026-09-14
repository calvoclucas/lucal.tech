import React from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function HeroSection({ whatsappNumber, whatsappMsg }) {
  return (
    <section
      id="inicio"
      className="bg-[#0b132b] text-white pt-12 pb-24 relative overflow-hidden"
    >
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Columna Izquierda: Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">
            <span className="text-blue-500">//</span>
            <span>Experience The Best IT Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.12]">
            Where Creativity <br />
            Meets <span className="text-blue-500">Cutting-Edge</span> <br />
            Technology
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            Transformamos requerimientos de negocio en software de alto impacto:
            arquitecturas SaaS, sistemas en tiempo real y aplicaciones web
            escalables.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase transition shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#servicios"
              className="px-7 py-3.5 rounded-full bg-transparent hover:bg-slate-800/60 border border-slate-700 text-white text-xs font-bold tracking-wider uppercase transition"
            >
              View All Services
            </a>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta visual asimétrica (estilo foto ejecutiva de la imagen) */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700/70 p-6 rounded-3xl shadow-2xl space-y-6">
            <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-blue-600/30 via-slate-800 to-[#0b132b] border border-slate-700 flex flex-col justify-between p-6 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Lucal Engine
                </span>
                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
              </div>

              <div className="space-y-1">
                <div className="text-2xl font-black text-white">
                  Full-Stack Cloud Core
                </div>
                <p className="text-xs text-slate-300">
                  Desarrollo seguro, escalable y optimizado
                </p>
              </div>
            </div>

            {/* Micro métricas flotantes */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                <div className="text-xl font-black text-blue-400">99.9%</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">
                  Uptime & Stability
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                <div className="text-xl font-black text-white">Production</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">
                  Verified Deploy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

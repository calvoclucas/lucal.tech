import React from "react";
import { CheckCircle2, Award, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Mosaico Asimétrico con bordes redondeados especiales (como en la imagen) */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            {/* Tarjeta superior izquierda: curva arriba-izquierda */}
            <div className="h-44 rounded-tl-[3rem] rounded-tr-xl rounded-b-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white flex flex-col justify-end shadow-md">
              <Zap className="w-8 h-8 text-blue-200 mb-2" />
              <span className="font-bold text-sm">
                Desarrollo React & Cloud
              </span>
            </div>

            {/* Tarjeta superior derecha: curva arriba-derecha */}
            <div className="h-44 rounded-tr-[3rem] rounded-tl-xl rounded-b-xl bg-slate-900 text-white p-6 flex flex-col justify-end shadow-md">
              <span className="text-3xl font-black text-blue-400">100%</span>
              <span className="text-xs text-slate-300 mt-1 font-medium">
                Arquitectura Limpia
              </span>
            </div>

            {/* Tarjeta inferior izquierda */}
            <div className="h-44 rounded-bl-[3rem] rounded-br-xl rounded-t-xl bg-slate-100 border border-slate-200 p-6 flex flex-col justify-end">
              <span className="text-xs font-mono uppercase text-slate-400">
                Plataformas
              </span>
              <span className="font-bold text-slate-900 text-sm mt-1">
                turneq & Custom Apps
              </span>
            </div>

            {/* Tarjeta inferior derecha: curva abajo-derecha */}
            <div className="h-44 rounded-br-[3rem] rounded-bl-xl rounded-t-xl bg-blue-50 border border-blue-200 p-6 flex flex-col justify-end">
              <Award className="w-7 h-7 text-blue-600 mb-2" />
              <span className="font-bold text-blue-950 text-sm">
                Escalabilidad Garantizada
              </span>
            </div>
          </div>

          {/* Sello circular flotante central (el círculo azul de la imagen) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600 text-white border-4 border-white flex items-center justify-center font-black text-xs shadow-xl">
            L/T
          </div>
        </div>

        {/* Columna Derecha: Información + Métricas */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">
            <span>//</span>
            <span>About Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Transforming <span className="text-blue-600">Ideas</span> into
            Digital Reality
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            En <strong>Lucal TECH</strong> construyo soluciones digitales
            enfocadas en performance, estabilidad y valor comercial directo.
            Desde prototipos ágiles hasta plataformas completas con gestión en
            tiempo real.
          </p>

          {/* 3 Estadísticas estilo imagen (150+, 2000+, 99%) */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-blue-600">
                100%
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Entrega a Término
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-slate-950">
                24/7
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Cloud Reliability
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-blue-600">
                99%
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Satisfacción Cliente
              </div>
            </div>
          </div>

          {/* Firma institucional */}
          <div className="pt-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-950 text-white font-black flex items-center justify-center text-sm">
              LT
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">
                Lucas Calvo Coltro
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Founder & Lead Engineer • Lucal TECH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
